"""Standing guard. Lists portal pages touched by messages newer than the last audit run.

Reads the amendment index (amendments.py) for MARADMIN, ALNAV, ALMAR, DoDI change and PAA
entries dated after the date in audit/last-run.json, matches each amended, cancelled or
implemented document against every live content page, and prints the impacted pages per
message. Exits 1 when any impacted page carries a lastVerified older than the message, or
no lastVerified at all. A page with no lastVerified counts as needing a source check.

Page sources come from two places, unioned per page: the references each live page cites
today (frontmatter and Citation tags, read through source_map.page_refs), and the archive
resolution in audit/2026-11-14-claims/source-map.json for pages present in that snapshot.
A page authored after the snapshot is still checked through its own references.

Matching. Revision letters collapse to one family for MCO, SECNAVINST, OPNAVINST, MCBUL,
NAVMCDIR, JAGINST and NAVMC (MCO P1050.3J, MCO 1050.3 J and MCO 1050.3J all give MCO 1050.3).
PAA serials are zero-padded (PAA 4-25 and PAA 04-25 match). Every document named in a
reference string counts, not only the first. Index kinds come from the message sentence:
a message whose own cancellation clause names the order it implements labels that order
"cancels".

Run: python -I scripts/audit/new_message_impact.py [--since YYYY-MM-DD] [--record [--force]]
  --since   override the date in audit/last-run.json
  --record  after a clean run, write the newest indexed message date to audit/last-run.json.
            Refused when the run exits 1, so unresolved messages stay in the window.
  --force   with --record, record even when pages still need a source check
Reads the archive and text cache. Writes audit/last-run.json on --record, and the amendment
index cache under the text cache (see amendments.load_index) when the archive changed.
"""
import argparse, datetime, importlib.util, json, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parents[1]
LAST_RUN = REPO / "audit" / "last-run.json"
SOURCE_MAP = REPO / "audit" / "2026-11-14-claims" / "source-map.json"


def _load_sibling(name):
    spec = importlib.util.spec_from_file_location(name, HERE / f"{name}.py")
    mod = importlib.util.module_from_spec(spec)
    registered = sys.modules.setdefault(name, mod) is mod
    try:
        spec.loader.exec_module(mod)
    except Exception:
        if registered:
            sys.modules.pop(name, None)  # never leave a half-initialized module cached
        raise
    return mod


am = _load_sibling("amendments")
FAMILY_TYPES = am.REVISION_GATED | {"NAVMC"}


def _family(key: str) -> str:
    kind, _, num = key.partition(" ")
    if kind in FAMILY_TYPES:
        num = re.sub(r"^P(?=\d)", "", num)
        if re.search(r"\d[A-Z]$", num):
            num = num[:-1]
    elif kind == "PAA":
        m = re.fullmatch(r"(\d+)-(\d+)", num)
        if m:
            num = f"{int(m.group(1)):02d}-{m.group(2)}"
    return f"{kind} {num}"


def match_keys(text: str | None) -> list[str]:
    """Family key for every document named in text, in order, deduplicated."""
    out = []
    for key in am.doc_keys(text or ""):
        fam = _family(key)
        if fam not in out:
            out.append(fam)
    return out


def match_key(text: str | None) -> str | None:
    keys = match_keys(text)
    return keys[0] if keys else None


def _page_index(source_map: list[dict]) -> dict[str, list[str]]:
    """Family key to the pages whose source set holds it."""
    out: dict[str, list[str]] = {}
    for entry in source_map:
        keys = set()
        for s in entry.get("sources", []):
            for field in ("ref", "id"):
                keys.update(match_keys(s.get(field)))
        for k in keys:
            out.setdefault(k, []).append(entry["page"])
    return out


def undated_entries(index: dict) -> list[dict]:
    seen, out = set(), []
    for doc, entries in index.items():
        for e in entries:
            if not e.get("date") and e["id"] not in seen:
                seen.add(e["id"])
                out.append({"message": e["id"], "file": e.get("file")})
    return sorted(out, key=lambda m: m["message"])


def newest_date(index: dict) -> str:
    return max((e["date"] for entries in index.values() for e in entries if e.get("date")), default="")


def impact_from_index(index: dict, source_map: list[dict], since: str, last_verified) -> list[dict]:
    """index: amendments index {doc key: [entry]}. last_verified: page -> ISO date or None."""
    pages_by_key = _page_index(source_map)
    by_msg: dict[str, dict] = {}
    for doc, entries in index.items():
        fam = match_key(doc)
        hit_pages = pages_by_key.get(fam, []) if fam else []
        if not hit_pages:
            continue
        for e in entries:
            if not e.get("date") or e["date"] <= since:
                continue
            m = by_msg.setdefault(e["id"], {"message": e["id"], "date": e["date"], "file": e.get("file"),
                                            "documents": [], "kinds": {}, "pages": {}})
            if doc not in m["documents"]:
                m["documents"].append(doc)
            m["kinds"][doc] = e["kind"]
            for p in hit_pages:
                lv = am.iso_date(last_verified(p) or "")
                m["pages"][p] = {"page": p, "lastVerified": lv or None, "stale": not lv or lv < e["date"]}
    report = []
    for m in sorted(by_msg.values(), key=lambda m: (m["date"], m["message"])):
        m["documents"].sort()
        m["pages"] = sorted(m["pages"].values(), key=lambda p: p["page"])
        report.append(m)
    return report


def impact(messages, source_map: list[dict], since: str, last_verified) -> list[dict]:
    """messages: iterable of (id, date, file, text), scanned with amendments.build_index."""
    return impact_from_index(am.build_index(messages), source_map, since, last_verified)


def exit_code(report: list[dict]) -> int:
    return 1 if any(p["stale"] for m in report for p in m["pages"]) else 0


def parse_since(value: str) -> str:
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", value or ""):
        raise ValueError(f"--since wants YYYY-MM-DD, got {value!r}")
    datetime.date.fromisoformat(value)
    return value


def read_since(path: Path = LAST_RUN) -> str:
    data = json.loads(Path(path).read_text(encoding="utf-8"))
    since = am.iso_date(data.get("date"))
    if not since:
        raise ValueError(f"{path} holds no ISO date")
    return since


def record_date(index: dict, today: str, since: str = "") -> str:
    """The date --record writes. The newest indexed message, never later than today.

    Recording the wall clock would bury a message signed before today but archived after
    the run, since the window filter is date > since. Never earlier than since either, so
    a run with nothing new does not move the window backward.
    """
    newest = newest_date(index)
    date = min(newest, today) if newest else today
    return max(date, since) if since else date


_LV = re.compile(r'^lastVerified:\s*["\']?(\d{4}-\d{2}-\d{2})', re.M)


def page_last_verified(page: str) -> str | None:
    path = REPO / page
    try:
        raw = path.read_text(encoding="utf-8")
    except OSError:
        return None
    if path.suffix == ".json":
        try:
            return am.iso_date(json.loads(raw).get("lastVerified")) or None
        except ValueError:
            return None
    m = _LV.search(raw[:4000])
    return m.group(1) if m else None


def live_source_map(snapshot: list[dict]) -> list[dict]:
    """Every live content page with its cited references, unioned with the snapshot sources."""
    sm = _load_sibling("source_map")
    by_page = {e["page"]: list(e.get("sources", [])) for e in snapshot if (REPO / e["page"]).exists()}
    for path, rel in sm.content_files():
        page = f"content/{rel.as_posix()}"
        fm, body, _warn = sm.load_page(path)
        refs = sm.page_refs(fm, body, rel.parts[0])
        by_page.setdefault(page, []).extend({"ref": r} for r in refs)
    return [{"page": p, "sources": s} for p, s in sorted(by_page.items())]


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--since")
    ap.add_argument("--record", action="store_true")
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args(argv)
    try:
        since = parse_since(args.since) if args.since else read_since()
    except ValueError as e:
        print(f"[audit:impact] {e}", file=sys.stderr)
        return 2
    snapshot = json.loads(SOURCE_MAP.read_text(encoding="utf-8"))
    source_map = live_source_map(snapshot)
    index = am.load_index()
    report = impact_from_index(index, source_map, since, page_last_verified)
    stale_total = 0
    for m in report:
        stale = [p for p in m["pages"] if p["stale"]]
        stale_total += len(stale)
        docs = ", ".join(f"{d} ({m['kinds'][d]})" for d in m["documents"])
        print(f"{m['date']}  {m['message']}  {docs}  {len(m['pages'])} pages, {len(stale)} need a source check")
        for p in stale:
            print(f"    {p['page']}  lastVerified {p['lastVerified'] or 'missing'}")
    undated = undated_entries(index)
    for u in undated:
        print(f"[audit:impact] undated, not windowed: {u['message']}  {u['file']}")
    print(f"[audit:impact] since {since}: {len(report)} messages, "
          f"{sum(len(m['pages']) for m in report)} page hits, {stale_total} older than their message, "
          f"{len(source_map)} pages watched, {len(undated)} undated messages, newest indexed {newest_date(index) or 'none'}")
    code = exit_code(report)
    if args.record:
        if code and not args.force:
            print("[audit:impact] --record refused, pages still need a source check. Fix them or pass --force.",
                  file=sys.stderr)
        else:
            date = record_date(index, datetime.date.today().isoformat(), since)
            LAST_RUN.write_text(json.dumps({"date": date}) + "\n", encoding="utf-8")
            print(f"[audit:impact] recorded {date} to {LAST_RUN.relative_to(REPO).as_posix()}")
    return code


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
