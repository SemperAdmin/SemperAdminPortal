"""Amendment overlay. Finds later messages that amend, cancel or implement a base document.

Library for source_map.py. Run with `python -I scripts/audit/amendments.py` to rebuild the index.
"""
import importlib.util, json, os, re, sys
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
    # "MCO 1050.3 J" (sidecar style) names the same document as "MCO 1050.3J"
    folded = re.sub(r"(\d) ([A-Z])(?![A-Z0-9(])", r"\1\2", normalize(text))
    for m in DOC_RE.finditer(folded):
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
        targets.discard(own)  # a message naming itself in its own text is not a hit
        for t in targets:
            via = "direct" if t in direct else "ref-letter"
            old = hits.get(t)
            if old is None or rank[kind] > rank[old[0]] or (rank[kind] == rank[old[0]] and via == "direct"):
                hits[t] = (kind, via)
    if own and own.startswith("DODI ") and re.search(r"\bCH\b", (own_id or "").upper()):
        # A DoDI change amends its own base instruction. doc_key folds "DoDI 1327.06 CH 2" to
        # "DODI 1327.06", so the discard above drops that hit. Put it back.
        hits.setdefault(own, ("amends", "direct"))
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


def walk_json(root: Path, errors: list[str]) -> list[Path]:
    """All .json files under root. A missing root or any walk error is appended to errors."""
    if not root.is_dir():
        errors.append(f"{root} is missing")
        return []
    found: list[Path] = []
    os_errors: list[str] = []
    for dirpath, _dirs, files in os.walk(root, onerror=lambda e: os_errors.append(f"{e.filename}: {e.strerror}")):
        found.extend(Path(dirpath) / f for f in files if f.endswith(".json"))
    errors.extend(os_errors)
    return found


def _archive_messages(tc):
    """Yield (id, date, relative file, text) for MARADMIN, ALNAV, ALMAR, DoDI changes and PAA."""
    archive = tc.ARCHIVE
    index_dates = _index_dates(archive)
    folders = (("MARADMINS", "MARADMIN"), ("ALNAVS", "ALNAV"), ("ALMARS", "ALMAR"), ("DoDI", "DODI"))
    errors: list[str] = []
    walked = {folder: walk_json(archive / folder, errors) for folder, _ in folders}
    if errors:  # fail before yielding anything so no partial index is built
        raise RuntimeError("archive walk failed, index not built: " + "; ".join(errors[:10]))
    for folder, label in folders:
        for side in sorted(walked[folder]):
            if not side.name.endswith((".pdf.json", ".docx.json")):
                continue
            if not os.path.exists(tc.io_path(tc.cache_path(side.relative_to(archive).as_posix()[:-5]))):
                continue  # no cached text yet, skip before touching the sidecar
            try:
                meta = json.loads(side.read_text(encoding="utf-8"))
            except ValueError:
                continue  # bad JSON in one sidecar is a data fault, not a walk fault
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
            if not os.path.exists(tc.io_path(cached)):
                continue
            pages = tc.read_cached_file(cached)
            text = pages[0] if label == "DODI" and pages else "\n".join(pages)
            date = meta.get("document_date") or index_dates.get(Path(rel).name.lower())
            yield mid, date, rel, text
    try:
        paa_index = json.loads((archive / "paa_index.json").read_text(encoding="utf-8")).get("downloaded", {})
    except (OSError, ValueError) as e:  # fail loud, a missing PAA index must not cache a short amendment index
        raise RuntimeError(f"paa_index.json unreadable, amendment index not built: {e}") from e
    for entry in paa_index.values():
        fn = str(entry.get("filename", "")).replace("\\", "/")
        m = re.search(r"paa-(\d+-\d+)", fn)
        if not m:
            continue
        rel = f"PAA/{fn}"
        cached = tc.cache_path(rel)
        if os.path.exists(tc.io_path(cached)):
            date = entry.get("date") or entry.get("created") or ""
            yield f"PAA {m.group(1)}", date, rel, "\n".join(tc.read_cached_file(cached))


# Bump when scan_message changes what it emits, so a cached index from older code rebuilds.
INDEX_VERSION = 2


def pickle_path(tc) -> Path:
    return tc.CACHE / "_amend_index.json"


_STAMP_SKIP = {"_text", "_quarantine", "_broken_pdfs"}


def archive_stamp(tc, with_cache: bool = False) -> str:
    """Hash of (path, mtime, size) for every archive json file, plus the text cache file count when asked."""
    import hashlib
    h = hashlib.sha256()
    root = tc.ARCHIVE
    entries = []
    for dirpath, dirs, files in os.walk(root):
        dirs[:] = [d for d in dirs if d not in _STAMP_SKIP]
        for f in files:
            if f.endswith(".json"):
                full = Path(dirpath) / f
                try:
                    st = os.stat(tc.io_path(full))
                except OSError:
                    continue
                entries.append((full.relative_to(root).as_posix(), st.st_mtime_ns, st.st_size))
    for e in sorted(entries):
        h.update(repr(e).encode("utf-8"))
    if with_cache:
        n = 0
        for _d, _s, files in os.walk(tc.CACHE):
            n += sum(1 for f in files if f.endswith(".txt"))
        h.update(f"cache:{n}".encode())
    return h.hexdigest()


def stamp_ok(tc, derived: Path, stamp: str) -> bool:
    sp = derived.with_name(derived.name + ".stamp")
    try:
        with open(tc.io_path(sp), encoding="utf-8") as f:
            return f.read().strip() == stamp
    except OSError:
        return False


def write_stamp(tc, derived: Path, stamp: str) -> None:
    sp = derived.with_name(derived.name + ".stamp")
    with open(tc.io_path(sp), "w", encoding="utf-8") as f:
        f.write(stamp)


def load_index(rebuild: bool = False, tc=None) -> dict:
    tc = tc or _load_sibling("build_text_cache")
    pkl = pickle_path(tc)
    stamp = f"{archive_stamp(tc, with_cache=True)}:v{INDEX_VERSION}"
    # Stored as JSON, not pickle: the index is plain dict/list/str, and JSON never runs code on load.
    if os.path.exists(tc.io_path(pkl)) and not rebuild and stamp_ok(tc, pkl, stamp):
        with open(tc.io_path(pkl), encoding="utf-8") as f:
            return json.load(f)
    index = build_index(_archive_messages(tc))  # raises on a partial walk, so no index is written then
    os.makedirs(tc.io_path(pkl.parent), exist_ok=True)
    with open(tc.io_path(pkl), "w", encoding="utf-8") as f:
        json.dump(index, f)
    write_stamp(tc, pkl, stamp)
    return index


if __name__ == "__main__":
    idx = load_index(rebuild=True)
    print(f"[audit:amend] {len(idx)} documents carry later messages, {sum(len(v) for v in idx.values())} entries")
    sys.exit(0)
