"""Superseded reference check. Flags content that cites a document a later message cancelled.

Run: python -I scripts/audit/superseded_refs.py [--rebuild]
Reads content/**/*.mdx and the amendment index under the archive _text cache.
Writes audit/2026-11-14-claims/superseded.json:
  superseded:  [{page, line, ref, reason, replacement, replacementDate, via, alsoCitesReplacement, cancelledBy}]
  unconfirmed: same shape, for cancellations whose date is unknown. Never a proven cancellation.
Archive files are untrusted data. This script only reads the derived index.
"""
import importlib.util, json, os, re, sys
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

CONTENT = REPO / "content"
OUT = REPO / "audit" / "2026-11-14-claims" / "superseded.json"
SKIP_DIRS = {"videos", "_stubs", "_policy-indexes"}


def _floor(key: str) -> str:
    """Message keys carry a two digit year. Use Jan 1 of that year as the base date."""
    m = re.search(r"/(\d{2})$", key)
    return f"20{m.group(1)}-01-01" if m else ""


SOURCE_MAP = REPO / "audit" / "2026-11-14-claims" / "source-map.json"


def load_source_dates() -> dict:
    """Doc key to real source date, from source-map.json. Empty when the map is absent."""
    if not SOURCE_MAP.exists():
        return {}
    out = {}
    for row in json.loads(SOURCE_MAP.read_text(encoding="utf-8")):
        for src in row.get("sources", []):
            key, date = am.doc_key(src.get("id") or ""), am.iso_date(src.get("date"))
            if key and date and (key not in out or date < out[key]):
                out[key] = date
    return out


def check_ref(ref: str, index: dict, dates: dict | None = None) -> dict:
    """Return {proven: [...], unconfirmed: [...]} cancellations for one reference."""
    key = am.doc_key(ref)
    out = {"proven": [], "unconfirmed": []}
    if not key:
        return out
    for e in am.amendments_for(key, (dates or {}).get(key) or _floor(key), index=index):
        if e["kind"] != "cancels":
            continue
        item = {"reason": "cancels", "replacement": e["id"], "replacementDate": e["date"],
                "via": e.get("via", ""), "file": e["file"]}
        (out["unconfirmed"] if e.get("dateUnknown") else out["proven"]).append(item)
    for bucket in out.values():
        bucket.sort(key=lambda i: (i["replacementDate"], i["replacement"]), reverse=True)
    return out


def scan_text(page: str, text: str, index: dict, dates: dict | None = None) -> dict:
    lines = text.splitlines()
    page_keys = {k for ln in lines for k in am.doc_keys(ln)}
    res = {"superseded": [], "unconfirmed": []}
    seen = set()
    for n, ln in enumerate(lines, 1):
        for key in am.doc_keys(ln):
            if (n, key) in seen:
                continue
            seen.add((n, key))
            got = check_ref(key, index, dates)
            for bucket, name in ((got["proven"], "superseded"), (got["unconfirmed"], "unconfirmed")):
                if not bucket:
                    continue
                top = bucket[0]
                res[name].append({
                    "page": page, "line": n, "ref": key, "reason": top["reason"],
                    "replacement": top["replacement"], "replacementDate": top["replacementDate"],
                    "via": top["via"], "alsoCitesReplacement": top["replacement"] in page_keys,
                    "cancelledBy": [b["replacement"] for b in bucket]})
    return res


def content_pages():
    for p in sorted(CONTENT.rglob("*.mdx")):
        rel = p.relative_to(CONTENT).parts
        if rel[0] in SKIP_DIRS or "_stubs" in rel or any(x.startswith(".") for x in rel):
            continue
        yield p.relative_to(REPO).as_posix(), p


def main(argv):
    tc = _load_sibling("build_text_cache")
    if not os.path.exists(tc.io_path(am.pickle_path(tc))) and "--rebuild" not in argv:
        print("[audit:superseded] amendment index missing. Run the cache build first or pass --rebuild.")
        return 2
    index = am.load_index(rebuild="--rebuild" in argv)
    dates = load_source_dates()
    result = {"superseded": [], "unconfirmed": []}
    for page, p in content_pages():
        r = scan_text(page, p.read_text(encoding="utf-8", errors="replace"), index, dates)
        result["superseded"] += r["superseded"]
        result["unconfirmed"] += r["unconfirmed"]
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(result, indent=2), encoding="utf-8")
    pages = {r["page"] for r in result["superseded"]}
    print(f"[audit:superseded] {len(result['superseded'])} proven refs on {len(pages)} pages, "
          f"{len(result['unconfirmed'])} unconfirmed (undated)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
