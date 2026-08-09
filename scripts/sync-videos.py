"""
sync-videos.py  --  Vanguard DB -> data/videos-marinenet.json

Pulls the video catalog out of the Vanguard SQLite database and writes the
build input at data/videos-marinenet.json. It does NOT write MDX. Pages are
generated from the JSON by scripts/generate-videos.js during content:sync.

Direction of travel:

    vanguard.db  ->  data/videos-marinenet.json  ->  content/videos/*.mdx
    (facts)          (committed build input)        (generated, disposable)

An earlier version of this script wrote MDX directly. Two writers with two
slug rules produced two files per video, and whichever ran last won. The
duplicate pairs removed on 2026-08-08 came from exactly that collision.

Editorial fields are owned by humans and survive every pull. roles, summary,
durationSeconds, and lastVerified are merged forward from the existing JSON
by slug. The database owns title, video URL, and series only.

The DB path resolves from VANGUARD_DB or --db. No hardcoded local default,
since local paths leak developer environment detail into a public repo.

Usage:
    VANGUARD_DB=/path/to/vanguard.db python scripts/sync-videos.py
    python scripts/sync-videos.py --db "E:\\Videos\\...\\vanguard.db" --dry-run
    python scripts/sync-videos.py --prune      # drop entries with no DB row
    python scripts/sync-videos.py --check      # audit only, exit 1 on drift

--check is the guardrail. It reads the database, rebuilds the catalog in
memory, and compares. A published video with no catalog entry, or a catalog
URL disagreeing with the database, exits non-zero. It shares this file with
the writer on purpose. A separate auditor with its own slug rule would
reintroduce the two-writer failure it exists to prevent.
"""

import argparse
import json
import os
import re
import sqlite3
import sys
from datetime import date, datetime, timezone
from pathlib import Path

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

_env_db = os.environ.get("VANGUARD_DB")
DEFAULT_DB = Path(_env_db) if _env_db else None

REPO_ROOT = Path(__file__).parent.parent
CATALOG_PATH = REPO_ROOT / "data" / "videos-marinenet.json"
# Committed so CI and a fresh clone see the last pull without the database.
STATUS_PATH = REPO_ROOT / "data" / "videos-catalog-status.json"

# Canonical MCeLE media page. Every video URL in the portal uses this one form.
# The legacy www.mcele.usmc.mil/mvs/watchVideo.aspx host carries the same Id.
CANONICAL_URL = (
    "https://portal.mcele.usmc.mil/content/mcele-portal/en/media/detail.html?Id=%s"
)

# Applied only when a slug is new to the catalog. An existing entry keeps the
# roles a human assigned. 976 of 1073 rows carry a null Audience, so a null
# default of admin would retag most of the collection on every pull.
AUDIENCE_TO_ROLES: dict[str, list[str]] = {
    "Admin": ["admin"],
    "Admin, Leaders": ["admin", "leader"],
    "All Marines": ["marine", "leader", "commander", "admin"],
    "Leaders": ["leader", "commander"],
}
DEFAULT_ROLES = ["leader"]

TODAY = date.today().isoformat()


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def slugify(text: str) -> str:
    """Collapse every non-alphanumeric run to a single hyphen.

    Matches the slugs already shipped in content/videos. Do not switch to a
    rule stripping punctuation instead of replacing it. Stripping turns
    "T/O Validation" into "to-validation" and "FDP&E" into "fdpe", which is
    how the duplicate slug pairs appeared.
    """
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]", "-", (text or "").lower())).strip("-")


def media_id(url: str) -> str | None:
    """Pull the MCeLE media Id out of any of the three historical URL forms."""
    match = re.search(r"[Ii]d=([0-9A-Za-z]+)", url or "")
    return match.group(1).upper() if match else None


def load_catalog() -> list[dict]:
    if not CATALOG_PATH.exists():
        return []
    with CATALOG_PATH.open(encoding="utf-8") as handle:
        return json.load(handle)


def read_rows(db_path: Path) -> list[dict]:
    con = sqlite3.connect(f"file:{db_path}?mode=ro", uri=True)
    con.row_factory = sqlite3.Row
    try:
        # Select the columns by name rather than "*" so a schema drift fails
        # loudly here instead of producing a half-populated catalog. Do not add
        # a column without confirming it exists. An earlier revision selected a
        # Status column the table never had, and every run died on the query.
        cur = con.execute(
            """
            SELECT Title, "Video Title", Audience, Series,
                   "MarineNet URL", Recorded, "Upload Date"
            FROM assets
            ORDER BY Title
            """
        )
        return [dict(row) for row in cur.fetchall()]
    finally:
        con.close()


def build(rows: list[dict], existing: dict[str, dict]) -> tuple[dict[str, dict], dict]:
    """Turn database rows into catalog entries. Pure, no file access."""
    catalog: dict[str, dict] = {}
    report = {
        "added": [],
        "changed": [],
        "unpublished": [],
        "dirty_titles": [],
        "collisions": [],
    }

    for row in rows:
        raw_title = row["Title"] or ""
        title = raw_title.strip()
        if not title:
            continue
        if raw_title != title:
            report["dirty_titles"].append(title)

        url = (row["MarineNet URL"] or "").strip()
        ident = media_id(url)
        if not ident:
            # Rows holding status text such as "Video Outdated" in the URL
            # column land here. Reported, never published.
            if url:
                report["unpublished"].append({"title": title, "note": url})
            continue

        slug = slugify(title)
        if not slug:
            continue
        if slug in catalog:
            report["collisions"].append({"slug": slug, "title": title})
            continue

        prior = existing.get(slug)
        audience = (row["Audience"] or "").strip()
        series = (row["Series"] or "").strip() or "MCeLE Training"

        entry = {
            "slug": slug,
            "title": title,
            # Editorial fields below survive the pull.
            "summary": (prior or {}).get("summary") or f"Training on {title}",
            "roles": (prior or {}).get("roles")
            or AUDIENCE_TO_ROLES.get(audience, DEFAULT_ROLES),
            "durationSeconds": (prior or {}).get("durationSeconds", 0),
            "videoUrl": CANONICAL_URL % ident,
            "mceleUrl": CANONICAL_URL % ident,
            "source": {
                "title": series,
                "publisher": "MCeLE",
                "url": ((prior or {}).get("source") or {}).get("url", ""),
            },
            "lastVerified": (prior or {}).get("lastVerified") or TODAY,
        }
        catalog[slug] = entry

        if prior is None:
            report["added"].append(slug)
        elif prior.get("videoUrl") != entry["videoUrl"] or prior.get("title") != title:
            report["changed"].append({"slug": slug, "was": prior.get("videoUrl", "")})

    return catalog, report


def resolve_db(arg_db: str | None) -> Path:
    if not arg_db:
        print(
            "ERROR: no DB path supplied. Set VANGUARD_DB or pass --db /path/to/vanguard.db.",
            file=sys.stderr,
        )
        sys.exit(2)
    db_path = Path(arg_db)
    if not db_path.exists():
        print(f"ERROR: DB not found at {db_path}", file=sys.stderr)
        sys.exit(1)
    return db_path


# ---------------------------------------------------------------------------
# Modes
# ---------------------------------------------------------------------------

def run_check(rows: list[dict]) -> int:
    """Audit the committed catalog against the database. Returns an exit code."""
    on_disk = {entry["slug"]: entry for entry in load_catalog()}
    expected, report = build(rows, on_disk)

    missing = sorted(set(expected) - set(on_disk))
    orphaned = sorted(set(on_disk) - set(expected))
    mismatched = [
        slug
        for slug in sorted(set(expected) & set(on_disk))
        if on_disk[slug].get("videoUrl") != expected[slug]["videoUrl"]
        or on_disk[slug].get("title") != expected[slug]["title"]
    ]

    print(f"[videos-audit] database published assets: {len(expected)}")
    print(f"[videos-audit] catalog entries: {len(on_disk)}")

    if missing:
        print(f"[videos-audit] FAIL published with no catalog entry: {len(missing)}")
        for slug in missing:
            print(f"    missing  {slug}")
    if mismatched:
        print(f"[videos-audit] FAIL catalog disagrees with the database: {len(mismatched)}")
        for slug in mismatched:
            print(f"    stale    {slug}")
            print(f"        catalog  {on_disk[slug].get('videoUrl')}")
            print(f"        database {expected[slug]['videoUrl']}")
    if orphaned:
        print(f"[videos-audit] WARN catalog entries with no database row: {len(orphaned)}")
        for slug in orphaned:
            print(f"    orphan   {slug}")
    if report["unpublished"]:
        print(
            f"[videos-audit] recorded but not published: {len(report['unpublished'])}"
        )
        for item in report["unpublished"]:
            print(f"    {item['title']}  ->  {item['note']}")

    if missing or mismatched:
        print("[videos-audit] FAILED. Run npm run videos:pull to reconcile.")
        return 1
    print("[videos-audit] PASS. Every published video has a catalog entry.")
    return 0


def write_status(rows: list[dict], catalog: dict, report: dict) -> None:
    status = {
        "pulledAt": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "dbRowsTotal": len(rows),
        "dbPublished": len(catalog),
        "catalogEntries": len(catalog),
        "unpublishedCount": len(report["unpublished"]),
        "unpublished": report["unpublished"],
    }
    with STATUS_PATH.open("w", encoding="utf-8") as handle:
        json.dump(status, handle, indent=2, ensure_ascii=False)
        handle.write("\n")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Pull the Vanguard video catalog into data/videos-marinenet.json"
    )
    parser.add_argument(
        "--db",
        default=str(DEFAULT_DB) if DEFAULT_DB else None,
        help="Path to vanguard.db. Falls back to the VANGUARD_DB env var.",
    )
    parser.add_argument("--dry-run", action="store_true", help="Report without writing")
    parser.add_argument(
        "--prune",
        action="store_true",
        help="Remove catalog entries with no matching database row",
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="Audit the catalog against the database and exit non-zero on drift",
    )
    args = parser.parse_args()

    rows = read_rows(resolve_db(args.db))

    if args.check:
        sys.exit(run_check(rows))

    existing = {entry["slug"]: entry for entry in load_catalog()}
    catalog, report = build(rows, existing)

    orphans = sorted(set(existing) - set(catalog))
    if not args.prune:
        for slug in orphans:
            catalog[slug] = existing[slug]

    output = [catalog[slug] for slug in sorted(catalog)]

    print(f"[videos-pull] database rows read: {len(rows)}")
    print(f"[videos-pull] catalog entries out: {len(output)}")
    print(f"[videos-pull] added: {len(report['added'])}")
    for slug in report["added"]:
        print(f"    + {slug}")
    print(f"[videos-pull] title or URL updated: {len(report['changed'])}")
    for item in report["changed"]:
        print(f"    ~ {item['slug']}  was {item['was'] or 'empty'}")
    print(f"[videos-pull] recorded but not published: {len(report['unpublished'])}")
    for item in report["unpublished"]:
        print(f"    ! {item['title']}  ->  {item['note']}")
    if report["collisions"]:
        print(f"[videos-pull] WARN slug collisions dropped: {len(report['collisions'])}")
        for item in report["collisions"]:
            print(f"    x {item['slug']}  from {item['title']}")
    if report["dirty_titles"]:
        print(
            f"[videos-pull] WARN titles with stray whitespace in the DB: "
            f"{len(report['dirty_titles'])}"
        )
        for title in report["dirty_titles"]:
            print(f"    w {title}")
    if orphans:
        verb = "pruned" if args.prune else "kept, pass --prune to drop"
        print(f"[videos-pull] entries with no database row ({verb}): {len(orphans)}")
        for slug in orphans:
            print(f"    ? {slug}")

    if args.dry_run:
        print("[videos-pull] dry run, nothing written")
        return

    CATALOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    with CATALOG_PATH.open("w", encoding="utf-8") as handle:
        json.dump(output, handle, indent=2, ensure_ascii=False)
        handle.write("\n")
    write_status(rows, catalog, report)
    print(f"[videos-pull] wrote {CATALOG_PATH.relative_to(REPO_ROOT)}")
    print(f"[videos-pull] wrote {STATUS_PATH.relative_to(REPO_ROOT)}")
    print("[videos-pull] run npm run content:sync to regenerate the pages")


if __name__ == "__main__":
    main()
