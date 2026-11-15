"""Page to source map. Resolves every content surface to archive files plus the amendment set.

Run: python -I scripts/audit/source_map.py
Writes audit/2026-11-14-claims/source-map.json and prints a coverage table.
Archive files are untrusted data. This script only reads sidecar JSON and cached text.
"""
import importlib.util, json, os, re, sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent


def _load_sibling(name):
    spec = importlib.util.spec_from_file_location(name, HERE / f"{name}.py")
    mod = importlib.util.module_from_spec(spec)
    sys.modules.setdefault(name, mod)
    spec.loader.exec_module(mod)
    return mod


am = _load_sibling("amendments")
tc = _load_sibling("build_text_cache")

CONTENT = REPO / "content"
CITATIONS_JSON = REPO / "src" / "generated" / "citations.json"
OUT = REPO / "audit" / "2026-11-14-claims" / "source-map.json"
SKIP_DIRS = {"videos", "_stubs", "_policy-indexes"}
ROLE_DIRS = {"marines": "marine", "leader": "leader", "commander": "commander", "admin": "admin"}
ARCHIVE_SKIP = {"_text", "_quarantine", "_broken_pdfs"}
EXPECTED_FOLDERS = ("MARADMINS", "ALNAVS", "ALMARS", "DoDI", "DoDD", "DoDFMR", "MCO", "NAVMC", "SECNAV", "Legal", "PAA", "DTMO", "FPM", "DD_Forms", "PRIUM")

# ---------------------------------------------------------------- resolver (port of resolve.ts)

DOC_TYPE_START = re.compile(
    r"^(?:MCO|MCBUL|NAVMC|NAVMCDIR|SECNAVINST|SECNAV|OPNAVINST|OPNAV|JAGINST|DODI|DODD|DODM|DOD ?FMR|DD ?FORM|MARADMIN|ALMAR|ALNAV|NAVADMIN|JTR|FPM|MCTFSPRIUM|PAAN|PAA|\d+ U\.?S\.?C|\d+ CFR)\b", re.I)
COMPOUND_BOUNDARY = re.compile(r"\s*[;,&]\s*(?:and\s+)?|\s+and\s+", re.I)
KEYWORD_PERIOD = r"\b(Vol|Vols|Ch|Chap|Chapter|Sec|Sect|Section|Par|Para|Paragraph|Encl|Enclosure|App|Appendix|Art|Article)\."


def split_compound(text: str) -> list[str]:
    text = text.strip()
    parts, start = [], 0
    for m in COMPOUND_BOUNDARY.finditer(text):
        end = m.end()
        if not DOC_TYPE_START.match(text[end:]):
            continue
        before = text[:m.start()]
        if before.count("(") - before.count(")") > 0:
            continue
        seg = text[start:m.start()].strip()
        if seg:
            parts.append(seg)
        start = end
    tail = text[start:].strip()
    if tail:
        parts.append(tail)
    return parts or [text]


def lookup_candidates(inp: str) -> list[str]:
    trimmed = inp.strip()
    out, seen = [], set()

    def push(v):
        clean = re.sub(r"[,\s]+$", "", v).strip()
        if clean and clean not in seen:
            seen.add(clean)
            out.append(clean)

    push(trimmed)
    push(re.sub(r"\s*\([^)]*\).*$", "", trimmed))
    push(re.split(r"\s*,?\s*(?:par(?:a(?:graph)?)?\.?|sect(?:ion)?\.?|art(?:icle)?\.?)\s", trimmed, flags=re.I)[0])
    push(re.split(r"\s*,?\s*\bch(?:ap(?:ter)?)?\.?\s", trimmed, flags=re.I)[0])
    push(re.split(r"\s*,?\s*encl(?:osure)?\.?\s", trimmed, flags=re.I)[0])
    push(trimmed.split(",")[0])
    sent = re.sub(KEYWORD_PERIOD, r"\1 ", trimmed, flags=re.I)
    push(re.split(r"\.\s", sent)[0])
    toks = trimmed.split()
    push(" ".join(toks[:4]))
    push(" ".join(toks[:3]))
    push(" ".join(toks[:2]))
    push(toks[0] if toks else "")
    return out


def collapse_revision(key: str) -> str:
    parts = key.split(" ")
    if len(parts) < 2 or parts[0] not in am.REVISION_GATED:
        return key
    num = parts[1]
    if re.match(r"^P?\d[\dA-Z.\-/]*[A-Z]$", num):
        parts[1] = num[:-1] + "_"
    elif re.match(r"^P?\d[\dA-Z.\-/]*\d$", num):
        parts[1] = num + "_"
    else:
        return key
    return " ".join(parts)


TITLE_TYPES = {"DODI": "DODI", "DODD": "DODD", "DODM": "DODM", "MCO": "MCO", "NAVMC": "NAVMC", "SECNAVINST": "SECNAVINST", "OPNAVINST": "OPNAVINST", "MCBUL": "MCBUL"}


class Resolver:
    def __init__(self, cites: dict):
        self.by_id = cites["byId"]
        self.by_alias = cites["byAlias"]
        self.by_base = cites.get("byBase", {})
        self._titles = []
        for rec in self.by_id.values():
            title = re.sub(r"^[A-Z0-9 .\-/]+? - ", "", rec.get("title", ""))
            self._titles.append((rec, am.normalize(re.sub(r"[^\w\s]", " ", title))))
        self._memo: dict[str, dict | None] = {}

    def _single(self, inp: str):
        for cand in lookup_candidates(inp):
            key = am.normalize(cand)
            cid = self.by_alias.get(key) or self.by_base.get(collapse_revision(key))
            if cid and cid in self.by_id:
                return self.by_id[cid]
        return None

    def _title_fallback(self, inp: str):
        """'DODI Leave, Liberty, and Administrative Absence (7 August 2025)' names the document by title."""
        text = re.sub(r"\([^)]*\)", " ", inp)
        m = re.match(r"\s*(DODI|DODD|DODM|DOD INSTRUCTION|MCO|NAVMC|SECNAVINST|OPNAVINST|MCBUL)\b[\s:,-]*(.+)", text, re.I)
        if not m:
            return None
        kind = am.TYPE_ALIASES.get(m.group(1).upper(), m.group(1).upper())
        rest = am.normalize(re.sub(r"[^\w\s]", " ", m.group(2)))
        if len(rest) < 12 or re.match(r"^P?\d", rest):
            return None
        for rec, title in self._titles:
            if rec.get("type") == TITLE_TYPES.get(kind) and rest in title:
                return rec
        return None

    def resolve(self, inp: str | None):
        if not inp:
            return None
        if inp in self._memo:
            return self._memo[inp]
        rec = None
        for part in [inp, *split_compound(inp)]:
            rec = self._single(part)
            if rec:
                break
        rec = rec or self._title_fallback(inp)
        self._memo[inp] = rec
        return rec


# ---------------------------------------------------------------- archive table

def _stem_words(rel: str) -> str:
    return Path(rel).stem.replace("_", " ")


def build_archive_table() -> list[dict]:
    """One row per archive document: rel, number, date, keys, norm aliases, superseded_by."""
    root = tc.ARCHIVE
    rows = []
    errors = [f"{root / f} is missing" for f in EXPECTED_FOLDERS if not (root / f).is_dir()]
    if not root.is_dir():
        errors = [f"{root} is missing"]
    walk_errors: list[str] = []
    read_errors: list[str] = []
    for dirpath, dirnames, filenames in os.walk(root, onerror=lambda e: walk_errors.append(f"{e.filename}: {e.strerror}")):
        dirnames[:] = [d for d in dirnames if d not in ARCHIVE_SKIP]
        for fn in filenames:
            if not fn.endswith((".pdf.json", ".docx.json", ".md.json")):
                continue
            try:
                meta = json.loads((Path(dirpath) / fn).read_text(encoding="utf-8"))
            except ValueError:
                continue  # bad JSON is a data fault, skipped
            except OSError as e:
                read_errors.append(f"{Path(dirpath) / fn}: {e.strerror}")
                continue
            rel = str(meta.get("relative_path") or (Path(dirpath) / fn[:-5]).relative_to(root)).replace("\\", "/")
            rows.append(_row(rel, str(meta.get("document_number") or ""), meta.get("document_date"),
                             meta.get("source_type") or rel.split("/")[0], meta.get("superseded_by") or []))
    errors.extend(walk_errors)
    errors.extend(read_errors)
    if errors:  # never hand back, or cache, a short table
        raise RuntimeError("archive walk failed, table not built: " + "; ".join(errors[:10]))
    paa = json.loads((root / "paa_index.json").read_text(encoding="utf-8")).get("downloaded", {})
    for e in paa.values():
        fn = str(e.get("filename", "")).replace("\\", "/")
        m = re.search(r"paa-(\d+-\d+)", fn)
        if m:
            rows.append(_row(f"PAA/{fn}", f"PAA {m.group(1)}", e.get("date") or e.get("created"), "PAA", []))
    return rows


def _norms(number: str, rel: str, source_type: str) -> list[str]:
    """Normalized name forms for alias comparison. Underscores and leading zeros fold away."""
    out = []
    for text in (number, _stem_words(rel)):
        n = am.normalize(text.replace("_", " "))
        n = re.sub(r"\b(VOL|CH) 0+(\d)", r"\1 \2", n)
        n = re.sub(r"\b(VOL|CH)(\d)", r"\1 \2", n)
        out.append(n)
        m = re.match(r"^DD ?(\d.*)$", n)
        if m:
            out.append(f"DD FORM {m.group(1)}")
    if source_type == "SECNAV" and re.match(r"^\d", number):
        out.append(f"SECNAVINST {am.normalize(number)}")
    return sorted({n for n in out if n})


def _row(rel, number, date, source_type, superseded_by):
    keys = set()
    for text in (number, _stem_words(rel)):
        k = am.doc_key(text)
        if k:
            keys.add(k)
    # NAVMC 1200.1 L: collapse the space before a lone revision letter
    k = am.doc_key(re.sub(r"(\d) ([A-Z])\b", r"\1\2", number))
    if k:
        keys.add(k)
    label = number
    if source_type == "SECNAV" and re.match(r"^\d", number):
        k = am.doc_key(f"SECNAVINST {number.split()[0]}")
        if k:
            keys.add(k)
            label = k
    if source_type in am.MSG_TYPES and re.match(r"\d{1,4}/\d{2}", number):
        k = am._fmt(source_type, number.split("~")[0])
        keys.add(k)
        label = k
    return {"rel": rel, "number": label, "date": am.iso_date(date), "type": source_type,
            "keys": sorted(keys), "norms": _norms(number, rel, source_type),
            "supersededBy": superseded_by}


def load_archive_table(rebuild=False):
    cache = tc.CACHE / "_archive_docs.json"
    if os.path.exists(tc.io_path(cache)) and not rebuild:
        with open(tc.io_path(cache), encoding="utf-8") as f:
            return json.load(f)
    rows = build_archive_table()
    os.makedirs(tc.io_path(cache.parent), exist_ok=True)
    with open(tc.io_path(cache), "w", encoding="utf-8") as f:
        json.dump(rows, f)
    return rows


class Archive:
    def __init__(self, rows, prium_files):
        import bisect
        self._bisect = bisect
        self.rows = rows
        self.by_key: dict[str, list[dict]] = {}
        self.by_base: dict[str, list[dict]] = {}
        pairs = []
        for r in rows:
            for k in r["keys"]:
                self.by_key.setdefault(k, []).append(r)
                self.by_base.setdefault(am.base_key(k), []).append(r)
            for n in r["norms"]:
                pairs.append((n, r["rel"]))
        pairs.sort()
        self._norm_keys = [p[0] for p in pairs]
        self._norm_rels = [p[1] for p in pairs]
        self._by_rel = {r["rel"]: r for r in rows}
        self.prium = prium_files  # {section number: relative path}
        self._memo: dict = {}

    @staticmethod
    def _latest(rows):
        return sorted(rows, key=lambda r: (r["date"], r["rel"]))[-1]

    def _prefix(self, n: str):
        """Rows whose normalized name equals n or continues it after a space."""
        lo = self._bisect.bisect_left(self._norm_keys, n)
        out = {}
        i = lo
        while i < len(self._norm_keys) and self._norm_keys[i].startswith(n):
            k = self._norm_keys[i]
            if k == n or k.startswith(n + " "):
                out[self._norm_rels[i]] = self._by_rel[self._norm_rels[i]]
            i += 1
        return list(out.values())

    def find(self, rec: dict, ref_text: str = "") -> tuple[list[dict], bool]:
        """Archive rows for a registry record. Second value flags a revision mismatch."""
        ctype, number = rec.get("type", ""), str(rec.get("number", ""))
        if ctype == "MCTFSPRIUM":
            m = re.search(r"(\d{5,6})", number) or re.search(r"\b(\d{5,6})\b", ref_text)
            if m and m.group(1) in self.prium:
                rel = self.prium[m.group(1)]
                return [{"rel": rel, "number": f"MCTFSPRIUM {m.group(1)}", "date": "", "type": "PRIUM", "supersededBy": []}], False
            return [], False
        memo_key = rec["id"]
        if memo_key in self._memo:
            return self._memo[memo_key]
        self._memo[memo_key] = result = self._find(rec, ctype, number)
        return result

    def _find(self, rec, ctype, number):
        keys = []
        for text in [f"{ctype} {number}", *rec.get("aliases", [])]:
            k = am.doc_key(text)
            if k and k not in keys:
                keys.append(k)
        for k in keys:
            if k in self.by_key:
                return [self._latest(self.by_key[k])], False
        for k in keys:  # revision-insensitive
            hits = self.by_base.get(am.base_key(k), [])
            if hits:
                return [self._latest(hits)], True
        # exact name, then corpus prefix: DoDFMR Vol 7A -> every chapter
        for alias in [f"{ctype} {number}", *rec.get("aliases", [])]:
            n = am.normalize(alias)
            hits = self._prefix(n) if len(n) >= 6 else [self._by_rel[r] for r in {self._norm_rels[i] for i in range(self._bisect.bisect_left(self._norm_keys, n), self._bisect.bisect_right(self._norm_keys, n))}]
            if hits:
                return sorted(hits, key=lambda r: r["rel"]), False
        return [], False

    def find_direct(self, ref: str) -> list[dict]:
        k = am.doc_key(ref)
        if k and k in self.by_key:
            return [self._latest(self.by_key[k])]
        return []


# ---------------------------------------------------------------- content walk

FRONT = re.compile(r"\A---\s*\n(.*?)\n---\s*\n(.*)\Z", re.S)
CITE = re.compile(r'<Citation\s+source="([^"]+)"')


def load_page(path: Path):
    """Return (frontmatter dict, body, warning|None)."""
    import yaml
    raw = path.read_text(encoding="utf-8")
    if path.suffix == ".json":
        try:
            return json.loads(raw), "", None
        except ValueError as e:
            return {}, "", f"bad json: {e}"
    m = FRONT.match(raw)
    if not m:
        return {}, raw, "no frontmatter"
    try:
        data = yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError as e:
        return {}, m.group(2), f"bad yaml: {e}"
    return data, m.group(2), None


def page_refs(fm: dict, body: str, collection: str) -> list[str]:
    refs = []
    sp = fm.get("sourcePolicy")
    if isinstance(sp, str):
        refs.append(sp)
    for r in fm.get("references") or []:
        if isinstance(r, str):
            refs.append(r)
    src = fm.get("source")
    if isinstance(src, dict) and isinstance(src.get("title"), str):
        refs.append(src["title"])
    if collection == "citations" and fm.get("id"):
        refs.append(f'{fm.get("type", "")} {fm.get("number", "")}'.strip())
        refs.extend(a for a in fm.get("aliases", [])[:1] if isinstance(a, str))
    refs.extend(CITE.findall(body))
    for sub in fm.get("subsections") or []:  # inspections JSON
        for item in sub.get("items", []):
            refs.extend(r for r in item.get("references") or [] if isinstance(r, str))
    seen, out = set(), []
    for r in refs:
        r = r.strip()
        if r and r not in seen:
            seen.add(r)
            out.append(r)
    return out


WAVE1_POLICIES = [
    ("DOD 7000.14-R", "pay-dodfmr"), ("DODFMR", "pay-dodfmr"), ("DOD FMR", "pay-dodfmr"),
    ("MCRAMM", "mcramm"), ("MCO 1001R.1", "mcramm"), ("MCO 1900.16", "separations-1900-16"),
    ("MCO P1900.16", "separations-1900-16"), ("MCO 1050.3", "leave-1050-3j"), ("DODI 1327.06", "leave-1050-3j"),
    ("MCO 5800.16", "legal-5800"), ("JAGINST 5800.7", "legal-5800"), ("JTR", "travel-jtr"),
    ("MCO 4650.39", "travel-jtr"), ("MCO P1400.32", "promotions-1400-32d"), ("MCO 1400.32", "promotions-1400-32d"),
    ("MCO 1751.3", "bah-1751-3"),
]
WAVE1_KEYWORDS = re.compile(r"pay|allowance|entitle|leave|liberty|pcs|travel|tdy|per-diem|separation|retire|promotion|legal|discipline|njp|court|reserve|\bbah\b|\bbas\b|\bdla\b", re.I)


def assign_wave(collection: str, fm: dict, slug: str) -> tuple[int, str | None]:
    if collection not in ROLE_DIRS:
        return 3, None
    sp = am.normalize(str(fm.get("sourcePolicy") or ""))
    for prefix, cluster in WAVE1_POLICIES:
        if sp.startswith(prefix):
            return 1, cluster
    if WAVE1_KEYWORDS.search(slug) or WAVE1_KEYWORDS.search(str(fm.get("topic") or "")):
        return 1, "keyword"
    return 2, None


def content_files():
    for path in sorted(CONTENT.rglob("*")):
        rel = path.relative_to(CONTENT)
        if path.suffix not in (".mdx", ".json") or any(p in SKIP_DIRS for p in rel.parts):
            continue
        if path.suffix == ".json" and rel.parts[0] != "inspections":
            continue
        if path.suffix == ".json" and (path.name.startswith("_") or "igmc-core" in path.name or "news" in path.name or "resources" in path.name or "guides" in rel.parts):
            continue
        yield path, rel


def entry_roles(fm: dict, collection: str) -> list[str]:
    roles = fm.get("roles")
    if isinstance(roles, list) and roles:
        return [str(r) for r in roles]
    return [ROLE_DIRS[collection]] if collection in ROLE_DIRS else []


def source_record(row, ref, record, mismatch, archive_rows, index):
    base_doc = row["number"]
    entry = {
        "id": row["number"] or row["rel"],
        "ref": ref,
        "citation": record["id"] if record else None,
        "file": row["rel"],
        "date": row["date"],
        "amendments": [],
    }
    if mismatch:
        entry["revisionMismatch"] = True
    if row.get("supersededBy"):
        entry["supersededBy"] = row["supersededBy"]
    if len(archive_rows) > 1:
        entry["files"] = [r["rel"] for r in archive_rows]
    if row["type"] not in ("PRIUM",):
        entry["amendments"] = am.amendments_for(base_doc, row["date"], index=index)
    return entry


def readability(rel: str) -> str:
    """ok, unreadable (every cached page blank) or uncached."""
    p = tc.cache_path(rel)
    if not os.path.exists(tc.io_path(p)):
        return "uncached"
    try:
        pages = tc.read_cached_file(p)
    except (OSError, ValueError):
        return "uncached"
    return "ok" if any(pg.strip() for pg in pages) else "unreadable"


def build(resolver: Resolver, archive: Archive, index: dict) -> list[dict]:
    out = []
    for path, rel in content_files():
        collection = rel.parts[0]
        fm, body, warn = load_page(path)
        if not isinstance(fm, dict):
            fm = {}
        slug = path.stem
        refs = page_refs(fm, body, collection)
        sources, unresolved, no_archive = [], [], False
        seen_files = set()
        for ref in refs:
            rec = resolver.resolve(ref)
            rows, mismatch = ([], False)
            if rec:
                rows, mismatch = archive.find(rec, ref)
            if not rows:
                rows = archive.find_direct(ref)
                mismatch = False
            if rows:
                if rows[0]["rel"] in seen_files:
                    continue
                seen_files.add(rows[0]["rel"])
                src = source_record(rows[0], ref, rec, mismatch, rows, index)
                states = {r["rel"]: readability(r["rel"]) for r in rows}
                bad = sorted(f for f, st in states.items() if st == "unreadable")
                miss = sorted(f for f, st in states.items() if st == "uncached")
                src["readable"] = "unreadable" if bad else "uncached" if miss else "ok"
                if bad:
                    src["unreadableFiles"] = bad
                if miss:
                    src["uncachedFiles"] = miss
                sources.append(src)
            elif rec:
                if rec.get("type") == "MCTFSPRIUM" or rec.get("id") == "mctfsprium":
                    continue  # parent corpus with no section named: nothing specific to open
                no_archive = True
                unresolved_entry = f'{ref} -> {rec["id"]} (no archive file)'
                if unresolved_entry not in unresolved:
                    unresolved.append(unresolved_entry)
            else:
                unresolved.append(ref)
        wave, cluster = assign_wave(collection, fm, slug)
        entry = {
            "page": f"content/{rel.as_posix()}",
            "roles": entry_roles(fm, collection),
            "wave": wave,
            "sources": sources,
            "unresolved": unresolved,
            "noArchiveSource": no_archive,
            "hasRefs": bool(refs),
        }
        if cluster:
            entry["cluster"] = cluster
        if warn:
            entry["warning"] = warn
        out.append(entry)
    return out


def coverage(entries: list[dict]) -> str:
    n = len(entries)
    mapped = sum(1 for e in entries if e["sources"])
    unres_pages = sum(1 for e in entries if any("(no archive file)" not in u for u in e["unresolved"]))
    unres_refs = sum(1 for e in entries for u in e["unresolved"] if "(no archive file)" not in u)
    noarch_pages = sum(1 for e in entries if e["noArchiveSource"])
    no_source = sum(1 for e in entries if not e["hasRefs"])
    unreadable = Counter()
    uncached = Counter()
    for e in entries:
        for s in e["sources"]:
            for f in s.get("unreadableFiles", []):
                unreadable[f] += 1
            for f in s.get("uncachedFiles", []):
                uncached[f] += 1
    amended = sum(1 for e in entries if any(s["amendments"] for s in e["sources"]))
    waves = Counter(e["wave"] for e in entries)
    lines = [
        "== source map coverage ==",
        f"surfaces walked                 {n}",
        f"surfaces with archive source    {mapped}",
        f"surfaces with amendment set     {amended}",
        f"pages with unresolved refs      {unres_pages}  ({unres_refs} refs)",
        f"pages noArchiveSource           {noarch_pages}",
        f"pages with no source at all     {no_source}",
        f"source files, no text layer     {len(unreadable)}  (resolved but unreadable)",
        f"source files, not in cache      {len(uncached)}",
        "-- per wave --",
        *[f"wave {w}: {waves[w]} pages" for w in sorted(waves)],
    ]
    if unreadable:
        lines.append("-- unreadable sources (page count) --")
        lines += [f"  {f}  ({c})" for f, c in unreadable.most_common()]
    if uncached:
        lines.append("-- not in cache (page count) --")
        lines += [f"  {f}  ({c})" for f, c in uncached.most_common(15)]
    top = Counter(u for e in entries for u in e["unresolved"] if "(no archive file)" not in u).most_common(15)
    lines.append("-- top unresolved refs --")
    lines += [f"  {c:4d}  {u[:100]}" for u, c in top]
    top = Counter(u for e in entries for u in e["unresolved"] if "(no archive file)" in u).most_common(15)
    lines.append("-- top registry hits with no archive file --")
    lines += [f"  {c:4d}  {u[:100]}" for u, c in top]
    return "\n".join(lines)


# ---- Wave clusters (Task 4) ----
CLUSTERS_OUT = REPO / "audit" / "2026-11-14-claims" / "clusters.json"
SOURCE_MAP_JSON = REPO / "audit" / "2026-11-14-claims" / "source-map.json"
SUPERSEDED_JSON = REPO / "audit" / "2026-11-14-claims" / "superseded.json"
CONTRADICTIONS_JSON = REPO / "audit" / "2026-11-14-claims" / "contradictions.json"
WAVE1_FAMILIES = [
    ("pay-dodfmr", re.compile(r"DODFMR|7000\.14", re.I)),
    ("mcramm", re.compile(r"MCRAMM|1001R", re.I)),
    ("separations-1900-16", re.compile(r"1900\.16")),
    ("leave-1050-3j", re.compile(r"1050\.3|1327\.06")),
    ("legal-5800", re.compile(r"5800\.16|5800\.7")),
    ("travel-jtr", re.compile(r"\bJTR|4650\.39", re.I)),
    ("promotions-1400-32d", re.compile(r"1400\.32")),
    ("bah-1751-3", re.compile(r"1751\.3")),
]
WAVE1_BUDGET, WAVE1_PAGE_CAP, GENERIC_PAGE_CAP, TOKEN_CAP, MIN_MERGE = 10, 40, 30, 120_000, 5


def primary_id(row: dict) -> str | None:
    return row["sources"][0]["id"] if row.get("sources") else None


def pack_bins(items: list[dict], page_cap: int, token_cap: int, min_merge: int = MIN_MERGE) -> list[list[dict]]:
    """Greedy sequential packing by (key, page). A tail bin under min_merge pages folds into the previous bin when it fits."""
    bins: list[list[dict]] = []
    used = 0
    for it in sorted(items, key=lambda i: (str(i.get("key")), i["page"])):
        if not bins or len(bins[-1]) >= page_cap or used + it["tokens"] > token_cap:
            bins.append([])
            used = 0
        bins[-1].append(it)
        used += it["tokens"]
    if len(bins) > 1 and len(bins[-1]) < min_merge:
        tail_tokens = sum(i["tokens"] for i in bins[-1])
        prev_tokens = sum(i["tokens"] for i in bins[-2])
        if len(bins[-2]) + len(bins[-1]) <= page_cap and prev_tokens + tail_tokens <= token_cap:
            bins[-2].extend(bins.pop())
    return bins


def wave1_family(row: dict) -> tuple[str | None, str]:
    """Return (family, reason). Family comes from the map's cluster tag, else the primary source id."""
    tag = row.get("cluster")
    if tag and tag != "keyword":
        return tag, ""
    pid = primary_id(row)
    if not pid:
        return None, "no resolved source document, cannot assign a wave 1 family"
    for fam, rx in WAVE1_FAMILIES:
        if rx.search(pid):
            return fam, ""
    return None, f"primary source {pid} is outside the 8 wave 1 families"


def build_wave1(rows: list[dict], tokens_of, page_cap: int = WAVE1_PAGE_CAP, token_cap: int = TOKEN_CAP,
                budget: int = WAVE1_BUDGET) -> tuple[list[dict], list[dict]]:
    overflow: list[dict] = []
    fams: dict[str, list[dict]] = {}
    for r in rows:
        fam, why = wave1_family(r)
        if fam is None:
            overflow.append({"page": r["page"], "reason": why})
            continue
        fams.setdefault(fam, []).append({"page": r["page"], "tokens": tokens_of(r), "key": primary_id(r), "row": r})
    plan = {f: pack_bins(items, page_cap, token_cap) for f, items in fams.items()}

    def drop(fam: str, reason: str) -> None:
        for it in plan[fam].pop():
            overflow.append({"page": it["page"], "reason": reason})
        if not plan[fam]:
            del plan[fam]

    while sum(len(b) for b in plan.values()) > budget:
        split = [f for f, b in plan.items() if len(b) > 1]
        if split:
            f = min(split, key=lambda f: (len(plan[f][-1]), f))
            drop(f, f"wave 1 budget of {budget} clusters: tail of {f} moved to wave 2")
        else:
            f = min(plan, key=lambda f: (len(plan[f][0]), f))
            drop(f, f"wave 1 budget of {budget} clusters: family {f} moved to wave 2")
    clusters = []
    for f in sorted(plan):
        for n, b in enumerate(plan[f], 1):
            cid = f if len(plan[f]) == 1 else f"{f}-{n}"
            clusters.append({"id": cid, "family": f, "rows": [i["row"] for i in b], "pageTokens": sum(i["tokens"] for i in b)})
    return clusters, sorted(overflow, key=lambda o: o["page"])


def _doc_token(pid: str | None) -> str:
    return (pid or "unsourced").split()[0].upper()


def _slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-") or "unsourced"


def build_generic(rows: list[dict], tokens_of, page_cap: int = GENERIC_PAGE_CAP, token_cap: int = TOKEN_CAP,
                  min_merge: int = MIN_MERGE) -> list[dict]:
    """Waves 2 and 3. Group by primary source id, fold groups under min_merge into a sibling of the same doc family."""
    groups: dict[str | None, list[dict]] = {}
    for r in rows:
        groups.setdefault(primary_id(r), []).append(r)
    big = {k: list(v) for k, v in groups.items() if len(v) >= min_merge}
    pooled: dict[str, list[dict]] = {}
    for k in sorted(groups, key=lambda k: (len(groups[k]), str(k))):
        v = groups[k]
        if len(v) >= min_merge:
            continue
        sibs = sorted((b for b in big if _doc_token(b) == _doc_token(k) and len(big[b]) + len(v) <= page_cap),
                      key=lambda b: (len(big[b]), str(b)))
        if sibs:
            big[sibs[0]].extend(v)
        else:
            pooled.setdefault(_doc_token(k), []).extend(v)
    named = {(k if k is not None else "unsourced"): v for k, v in big.items()}
    for tok, v in pooled.items():
        named[f"{tok} misc"] = v
    out = []
    for name in sorted(named):
        items = [{"page": r["page"], "tokens": tokens_of(r), "key": primary_id(r), "row": r} for r in named[name]]
        bins = pack_bins(items, page_cap, token_cap, min_merge)
        for n, b in enumerate(bins, 1):
            out.append({"id": _slug(name) + (f"-{n}" if len(bins) > 1 else ""), "family": name,
                        "rows": [i["row"] for i in b], "pageTokens": sum(i["tokens"] for i in b)})
    return out


def _words(path) -> int:
    try:
        return len(Path(path).read_text(encoding="utf-8").split())
    except OSError:
        return 0


_SRC_TOKENS: dict[str, int | None] = {}


def source_tokens(rel: str) -> int | None:
    """Estimated tokens (words x 1.4) of a cached source, None when not cached."""
    if rel not in _SRC_TOKENS:
        p = tc.cache_path(rel)
        _SRC_TOKENS[rel] = int(sum(len(t.split()) for t in tc.read_cached(rel)) * 1.4) if tc._exists(p) else None
    return _SRC_TOKENS[rel]


def decorate(cluster: dict, superseded: list[dict], contradictions: list[dict]) -> dict:
    rows = cluster["rows"]
    pages = {r["page"] for r in rows}
    counts: dict[str, int] = {}
    prim: dict[str, dict] = {}
    for r in rows:
        if r["sources"]:
            s = r["sources"][0]
            counts[s["id"]] = counts.get(s["id"], 0) + 1
            prim.setdefault(s["id"], s)
    base = None
    if counts:
        b = prim[sorted(counts, key=lambda i: (-counts[i], i))[0]]
        base = {"id": b["id"], "file": b["file"], "date": b.get("date")}
    entries: dict[str, dict] = {}
    for s in prim.values():
        role = "baseDoc" if base and s["id"] == base["id"] else "companion"
        entries.setdefault(s["file"], {"role": role, "id": s["id"], "date": s.get("date"), "file": s["file"]})
        for a in s.get("amendments", []):
            entries.setdefault(a["file"], {"role": "amendment", "id": a["id"], "date": a.get("date"), "file": a["file"],
                                           "kind": a.get("kind"), "via": a.get("via")})
    ordered = sorted(entries.values(), key=lambda e: (e["date"] or "", e["file"]), reverse=True)
    source_files, uncached, src_tok = [], [], 0
    for e in ordered:
        t = source_tokens(e["file"])
        if t is None:
            uncached.append(e["file"])
        else:
            src_tok += t
        source_files.append({**e, "path": str(tc.cache_path(e["file"])), "cached": t is not None})
    base_amend = prim[base["id"]].get("amendments", []) if base else []
    amends = sorted(({"id": a["id"], "date": a.get("date"), "file": a["file"], "kind": a.get("kind"), "via": a.get("via"),
                      **({"dateUnknown": True} if a.get("dateUnknown") else {})} for a in base_amend),
                    key=lambda a: (a["date"] or "", a["id"]), reverse=True)
    contra = []
    for c in contradictions:
        vals = {v: [loc for loc in locs if loc.rsplit(":", 1)[0] in pages] for v, locs in c["values"].items()}
        vals = {v: locs for v, locs in vals.items() if locs}
        if vals:
            contra.append({**{k: x for k, x in c.items() if k != "values"}, "values": vals})
    return {"id": cluster["id"], "family": cluster["family"], "baseDoc": base, "sourceFiles": source_files,
            "uncachedFiles": uncached, "amendments": amends,
            "pages": [{"page": r["page"]} for r in sorted(rows, key=lambda r: r["page"])],
            "supersededCandidates": [s for s in superseded if s["page"] in pages],
            "contradictions": contra,
            "pageTokens": cluster["pageTokens"], "sourceTokens": src_tok,
            "tokenEstimate": cluster["pageTokens"] + src_tok}


def run_clusters() -> int:
    from datetime import datetime, timezone
    entries = json.loads(SOURCE_MAP_JSON.read_text(encoding="utf-8"))
    superseded = json.loads(SUPERSEDED_JSON.read_text(encoding="utf-8"))
    superseded = superseded["superseded"] if isinstance(superseded, dict) else superseded
    contradictions = json.loads(CONTRADICTIONS_JSON.read_text(encoding="utf-8"))
    page_tok: dict[str, int] = {}

    def tokens_of(r):
        if r["page"] not in page_tok:
            page_tok[r["page"]] = int(_words(REPO / r["page"]) * 1.4)
        return page_tok[r["page"]]

    waves: dict[str, dict] = {}
    lines = []
    for w in (1, 2, 3):
        rows = [e for e in entries if e["wave"] == w]
        if w == 1:
            cl, over = build_wave1(rows, tokens_of)
        else:
            cl, over = build_generic(rows, tokens_of), []
        deco = [decorate(c, superseded, contradictions) for c in cl]
        waves[str(w)] = {"clusters": deco, "overflow": over}
        sizes = sorted((len(c["pages"]) for c in deco), reverse=True)
        lines.append(f"wave {w}: {len(rows)} pages, {len(deco)} clusters, overflow {len(over)}, "
                     f"largest {sizes[0] if sizes else 0}, max tokenEstimate {max((c['tokenEstimate'] for c in deco), default=0)}")
        if w == 1:
            lines += [f"  {c['id']:28s} {len(c['pages']):3d} pages  pageTok {c['pageTokens']:7d}  tokenEstimate {c['tokenEstimate']:8d}  "
                      f"amend {len(c['amendments']):3d}  superseded {len(c['supersededCandidates']):3d}  "
                      f"contra {len(c['contradictions'])}  uncached {len(c['uncachedFiles'])}" for c in deco]
    out = {"generated": datetime.now(timezone.utc).strftime("%Y-%m-%d"), "waves": waves}
    CLUSTERS_OUT.write_text(json.dumps(out, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    print("\n".join(lines))
    print(f"[audit:clusters] wrote {CLUSTERS_OUT.relative_to(REPO).as_posix()}; wave 1 overflow {len(waves['1']['overflow'])}")
    return 0


def main(argv: list[str]) -> int:
    if "--clusters" in argv:
        return run_clusters()
    rebuild = "--rebuild" in argv
    cites = json.loads(CITATIONS_JSON.read_text(encoding="utf-8"))
    rows = load_archive_table(rebuild)
    prium = {}
    for f in (tc.ARCHIVE / "PRIUM").glob("*.md"):
        prium.setdefault(f.name.split("_", 1)[0], f"PRIUM/{f.name}")
    index = am.load_index(rebuild)
    entries = build(Resolver(cites), Archive(rows, prium), index)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    clean = [{k: v for k, v in e.items() if k != "hasRefs"} for e in entries]
    OUT.write_text(json.dumps(clean, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    print(coverage(entries))
    print(f"[audit:map] wrote {OUT.relative_to(REPO).as_posix()} ({len(entries)} entries)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
