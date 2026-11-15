"""Amendment overlay. Finds later messages that amend, cancel or implement a base document.

Library for source_map.py. Run with `python -I scripts/audit/amendments.py` to rebuild the pickle.
"""
import importlib.util, json, pickle, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent


def _load_sibling(name):
    spec = importlib.util.spec_from_file_location(name, HERE / f"{name}.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


# Types whose numbers carry a trailing revision letter (mirror of REVISION_GATED in resolve.ts).
REVISION_GATED = {"MCO", "SECNAVINST", "OPNAVINST", "MCBUL", "NAVMCDIR", "JAGINST"}
MSG_TYPES = {"MARADMIN", "ALMAR", "ALNAV", "NAVADMIN"}
TYPE_ALIASES = {"DOWI": "DODI", "DOW INSTRUCTION": "DODI", "DOD INSTRUCTION": "DODI",
                "DOD DIRECTIVE": "DODD", "DOW DIRECTIVE": "DODD"}

_TYPE = r"(MCO|MCBUL|NAVMCDIR|NAVMC|SECNAVINST|OPNAVINST|JAGINST|MARADMIN|ALMAR|ALNAV|NAVADMIN|DODI|DODD|DODM|DOWI|DTM|PAAN|PAA|DOD INSTRUCTION|DOW INSTRUCTION)"
_MSG_NUM = r"(\d{1,4}/\d{2})"
_GEN_NUM = r"(P?\d[\dA-Z.\-]*)"
DOC_RE = re.compile(
    r"\b" + _TYPE + r"(?:\s+|(?=\d))(?:" + _MSG_NUM + r"(?!\d)|" + _GEN_NUM + r")", re.I)


def normalize(input_: str) -> str:
    """Port of normalize() in src/lib/references/resolve.ts."""
    s = input_.upper()
    s = re.sub(r"\b(VOL|VOLS|CH|CHAP|CHAPTER|SEC|SECT|SECTION|PAR|PARA|PARAGRAPH|ENCL|ENCLOSURE|APP|APPENDIX|ART|ARTICLE)\.", r"\1 ", s)
    s = s.replace(",", " ")
    return re.sub(r"\s+", " ", s).strip()


def _fmt(kind: str, num: str) -> str:
    kind = TYPE_ALIASES.get(kind, kind)
    num = num.rstrip(".-")
    if "/" in num:
        a, b = num.split("/", 1)
        if kind in MSG_TYPES:
            num = f"{int(a):03d}/{b}"
    return f"{kind} {num}"


def doc_keys(text: str) -> list[str]:
    """Every normalized document key named in text, in order."""
    out = []
    for m in DOC_RE.finditer(normalize(text)):
        kind, msg_num, gen_num = m.group(1).upper(), m.group(2), m.group(3)
        if kind in MSG_TYPES and not msg_num:
            continue  # a MARADMIN number without its year names nothing
        if msg_num and kind not in MSG_TYPES:
            continue
        out.append(_fmt(kind, msg_num or gen_num))
    return out


def doc_key(text: str) -> str | None:
    keys = doc_keys(text)
    return keys[0] if keys else None


def base_key(key: str) -> str:
    """Strip a trailing revision letter from revision-gated series (MCO 1050.3J -> MCO 1050.3)."""
    kind, _, num = key.partition(" ")
    if kind in REVISION_GATED and re.search(r"\d[A-Z]$", num):
        return f"{kind} {num[:-1]}"
    return key


def iso_date(s: str | None) -> str:
    """Accept YYYY-MM-DD, M/D/YYYY and ISO timestamps. Return YYYY-MM-DD or empty."""
    if not s:
        return ""
    s = str(s).strip()
    m = re.match(r"(\d{4})-(\d{2})-(\d{2})", s)
    if m:
        return m.group(0)
    m = re.match(r"(\d{1,2})/(\d{1,2})/(\d{4})", s)
    if m:
        return f"{m.group(3)}-{int(m.group(1)):02d}-{int(m.group(2)):02d}"
    return ""


_CANCEL = re.compile(r"CANCEL|SUPERSED|RESCIND|SUPERCEDE")
_AMEND = re.compile(r"MODIF|CHANG|AMEND|REVIS|UPDAT|CLARIF")
_IMPL = re.compile(r"IN ACCORDANCE WITH|IN ACCORDANCE W/")
_REFS = re.compile(r"\bREF(?:ERENCE)?S?\s*((?:\([A-Z]\)\s*(?:,|AND|&|THROUGH)?\s*)+)")
_REF_LINE = re.compile(r"^REF/([A-Z])/(.*)$", re.M)
_REF_IS = re.compile(r"\bREFS? ([A-Z]) IS\b")
_BLOCKS = re.compile(r"(?:^|\n)(?:AMPN|NARR|REF/[A-Z])\b.*?(?://|\n\n)", re.S)


def _classify(sentence: str) -> str | None:
    if _CANCEL.search(sentence):
        return "cancels"
    if _AMEND.search(sentence):
        return "amends"
    if _IMPL.search(sentence):
        return "implements"
    return None


def _ref_map(text: str) -> dict[str, str]:
    """Map REF letter to a document key from REF/A/MSGID lines and AMPN or NARR text."""
    up = text.upper()
    refs: dict[str, str] = {}
    for m in _REF_LINE.finditer(up):
        k = doc_key(m.group(2))
        if k:
            refs[m.group(1)] = k
    flat = re.sub(r"\s+", " ", up)
    parts = list(_REF_IS.finditer(flat))
    for i, m in enumerate(parts):
        end = parts[i + 1].start() if i + 1 < len(parts) else len(flat)
        seg = flat[m.end():end].split("//")[0]
        k = doc_key(seg[:160])
        if k and m.group(1) not in refs:
            refs[m.group(1)] = k
    return refs


def scan_message(text: str, own_id: str) -> list[tuple[str, str, str]]:
    """Return (doc key, kind, via) triples. Kinds: cancels, amends, implements.

    via is "direct" when the sentence names the document, "ref-letter" when only a REF (A) style letter points at it.
    """
    own = doc_key(own_id)
    refs = _ref_map(text)
    body = _BLOCKS.sub("\n", "\n" + text.upper())
    body = re.sub(r"\s+", " ", body)
    hits: dict[str, tuple[str, str]] = {}
    rank = {"cancels": 3, "amends": 2, "implements": 1}
    for sent in re.split(r"(?<=[.!?;])\s+(?=[A-Z0-9(])|//", body):
        kind = _classify(sent)
        if not kind:
            continue
        direct = set(doc_keys(sent))
        targets = set(direct)
        for m in _REFS.finditer(sent):
            for letter in re.findall(r"\(([A-Z])\)", m.group(1)):
                if letter in refs:
                    targets.add(refs[letter])
        targets.discard(own)
        for t in targets:
            via = "direct" if t in direct else "ref-letter"
            old = hits.get(t)
            if old is None or rank[kind] > rank[old[0]] or (rank[kind] == rank[old[0]] and via == "direct"):
                hits[t] = (kind, via)
    return sorted((k, v[0], v[1]) for k, v in hits.items())


def build_index(messages) -> dict[str, list[dict]]:
    """messages: iterable of (id, date, file, text). Returns {doc key: [entry]}."""
    index: dict[str, list[dict]] = {}
    for mid, date, file, text in messages:
        for key, kind, via in scan_message(text, mid):
            entry = {"id": mid, "date": iso_date(date), "file": file, "kind": kind, "via": via}
            if not entry["date"]:
                entry["dateUnknown"] = True
            index.setdefault(key, []).append(entry)
    return index


_DEFAULT: dict | None = None


def amendments_for(doc_number: str, doc_date: str, index: dict | None = None) -> list[dict]:
    """Later messages that amend, cancel or implement the document. Dated after doc_date."""
    global _DEFAULT
    if index is None:
        if _DEFAULT is None:
            _DEFAULT = load_index()
        index = _DEFAULT
    key = doc_key(doc_number)
    if not key:
        return []
    floor = iso_date(doc_date)
    out, seen = [], set()
    for k in {key, base_key(key)}:
        for e in index.get(k, []):
            if e["date"] and floor and e["date"] <= floor:
                continue
            sig = (e["id"], e["kind"])
            if sig not in seen:
                seen.add(sig)
                item = dict(e)
                if not e["date"] or not floor:
                    item["dateUnknown"] = True  # kept, but not proven later than the base
                out.append(item)
    return sorted(out, key=lambda e: (e["date"], e["id"]))


# ---- archive walk ----

def _index_dates(archive: Path) -> dict[str, str]:
    """Filename to date from the scraper indexes. Sidecars lack document_date for some ALNAVs."""
    out: dict[str, str] = {}
    for name in ("maradmin_index.json", "almar_index.json", "alnav_index.json"):
        try:
            data = json.loads((archive / name).read_text(encoding="utf-8")).get("downloaded", {})
        except (OSError, ValueError):
            continue
        for e in data.values():
            fn = str(e.get("filename", "")).replace("\\", "/").rsplit("/", 1)[-1].lower()
            d = iso_date(e.get("date_signed") or e.get("date"))
            if fn and d:
                out[fn] = d
    return out


def _archive_messages(tc):
    """Yield (id, date, relative file, text) for MARADMIN, ALNAV, ALMAR, DoDI changes and PAA."""
    archive = tc.ARCHIVE
    index_dates = _index_dates(archive)
    for folder, label in (("MARADMINS", "MARADMIN"), ("ALNAVS", "ALNAV"), ("ALMARS", "ALMAR"), ("DoDI", "DODI")):
        for side in sorted((archive / folder).rglob("*.json")):
            if not side.name.endswith((".pdf.json", ".docx.json")):
                continue
            if not tc.cache_path(side.relative_to(archive).as_posix()[:-5]).exists():
                continue  # no cached text yet, skip before touching the sidecar
            try:
                meta = json.loads(side.read_text(encoding="utf-8"))
            except (OSError, ValueError):
                continue
            number = str(meta.get("document_number") or "")
            if label == "DODI":
                if not re.search(r"\bCH\b", number.upper()):
                    continue
                mid = number
            else:
                num = number.split("~")[0]
                mid = f"{label} {num}"
            rel = (meta.get("relative_path") or str(side.relative_to(archive))[:-5]).replace("\\", "/")
            cached = tc.cache_path(rel)
            if not cached.exists():
                continue
            pages = tc.read_cached_file(cached)
            text = pages[0] if label == "DODI" and pages else "\n".join(pages)
            date = meta.get("document_date") or index_dates.get(Path(rel).name.lower())
            yield mid, date, rel, text
    paa_index = json.loads((archive / "paa_index.json").read_text(encoding="utf-8")).get("downloaded", {})
    for entry in paa_index.values():
        fn = str(entry.get("filename", "")).replace("\\", "/")
        m = re.search(r"paa-(\d+-\d+)", fn)
        if not m:
            continue
        rel = f"PAA/{fn}"
        cached = tc.cache_path(rel)
        if cached.exists():
            date = entry.get("date") or entry.get("created") or ""
            yield f"PAA {m.group(1)}", date, rel, "\n".join(tc.read_cached_file(cached))


def pickle_path(tc) -> Path:
    return tc.CACHE / "_amend_index.pkl"


def load_index(rebuild: bool = False) -> dict:
    tc = _load_sibling("build_text_cache")
    pkl = pickle_path(tc)
    # The pickle is our own derived output inside _text/ (plain dict/list/str only). Never load one from elsewhere.
    if pkl.exists() and not rebuild:
        with pkl.open("rb") as f:
            return pickle.load(f)
    index = build_index(_archive_messages(tc))
    pkl.parent.mkdir(parents=True, exist_ok=True)
    with pkl.open("wb") as f:
        pickle.dump(index, f)
    return index


if __name__ == "__main__":
    idx = load_index(rebuild=True)
    print(f"[audit:amend] {len(idx)} documents carry later messages, {sum(len(v) for v in idx.values())} entries")
    sys.exit(0)
