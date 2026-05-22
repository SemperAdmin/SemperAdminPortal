#!/usr/bin/env python3
"""
Links stub scaffolder.

Reads the SharePoint Important Links extract at
content/links/_source/sharepoint-extract.md, applies URL cleanup,
dedupes by URL, infers access by hostname heuristic, and writes one
MDX stub per unique URL to content/links/_stubs/<slug>.mdx for human
review. Stephen edits each stub, then moves keepers into
content/links/.

The leading underscore on _stubs/ and _source/ keeps both directories
out of sync-content scanning. Run `npm run content:sync` after moving
stubs into content/links/ to refresh src/generated/links.json.

Usage.
  python3 scripts/links-import.py            # default. All 124 unique URLs.
  python3 scripts/links-import.py --dry-run  # report only. No writes.
  python3 scripts/links-import.py --section semper-admin  # one section only.
  python3 scripts/links-import.py --clean    # delete existing _stubs/ before writing.

Output. Writes stub MDX files plus a manifest at
content/links/_stubs/_manifest.json with the dedupe ledger, URL fixes,
and access heuristic decisions.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import defaultdict
from dataclasses import dataclass, field
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
LINKS_DIR = ROOT / "content" / "links"
SOURCE_PATH = LINKS_DIR / "_source" / "sharepoint-extract.md"
STUBS_DIR = LINKS_DIR / "_stubs"
MANIFEST_PATH = STUBS_DIR / "_manifest.json"

TODAY = date.today().isoformat()

SHAREPOINT_HOST = "https://usmc.sharepoint-mil.us"

VALID_SECTIONS = {
    "semper-admin",
    "educational",
    "reference",
    "system",
    "ai",
    "teams-channels",
    "sharepoints",
    "more-great-links",
}

# Suggested audience defaults per category. Stephen overrides per entry.
AUDIENCE_DEFAULT = {
    "semper-admin": "admin",
    "educational": "marine",
    "reference": "admin",
    "system": "admin",
    "ai": "leader",
    "teams-channels": "admin",
    "sharepoints": "admin",
    "more-great-links": None,
}


# ---------------------------------------------------------------------------
# Source parsing
# ---------------------------------------------------------------------------


@dataclass
class SourceRow:
    label: str
    url: str
    section: str
    line_no: int


def parse_source(path: Path) -> list[SourceRow]:
    """Read the pipe-delimited block inside the source file."""
    if not path.exists():
        sys.exit(f"[links-import] source file missing: {path}")
    rows: list[SourceRow] = []
    in_block = False
    with path.open("r", encoding="utf-8") as fh:
        for n, raw_line in enumerate(fh, start=1):
            line = raw_line.rstrip("\n")
            if line.strip().startswith("```"):
                in_block = not in_block
                continue
            if not in_block:
                continue
            if not line.strip() or line.strip().startswith("Label |"):
                continue
            parts = [p.strip() for p in line.split("|")]
            if len(parts) != 3:
                continue
            label, url, section = parts
            if section not in VALID_SECTIONS:
                sys.exit(f"[links-import] unknown section '{section}' on line {n}")
            rows.append(SourceRow(label=label, url=url, section=section, line_no=n))
    if not rows:
        sys.exit("[links-import] no rows parsed from source")
    return rows


# ---------------------------------------------------------------------------
# URL cleanup
# ---------------------------------------------------------------------------


@dataclass
class UrlFix:
    original: str
    cleaned: str
    rule: str


def clean_url(label: str, url: str, fixes: list[UrlFix]) -> str:
    """Apply known URL cleanup rules. Logs every rewrite."""
    original = url
    new = url

    # Site-relative paths under SharePoint.
    if new.startswith("/sites/"):
        new = SHAREPOINT_HOST + new
        fixes.append(UrlFix(original, new, "site-relative-prefix"))

    # Strip trailing %22 quote suffixes (page-author typo).
    if new.endswith("%22"):
        before = new
        new = new[:-3]
        fixes.append(UrlFix(before, new, "strip-trailing-quote"))

    # CLA: landing.x%20html means landing.xhtml with a leaked space.
    if "landing.x%20html" in new:
        before = new
        new = new.replace("landing.x%20html", "landing.xhtml")
        fixes.append(UrlFix(before, new, "cla-landing-xhtml"))

    # Command Profile: leaked window.open snippet. Replace with the
    # canonical Marine Profile entry point and flag for verification.
    if "/ncp/notify%2c" in new:
        before = new
        new = "https://www2.manpower.usmc.mil/ncp/"
        fixes.append(UrlFix(before, new, "command-profile-canonical"))

    # MOS Roadmaps: the URL contains itself inside <...> brackets.
    if "category=Enlisted%20%3c" in new:
        before = new
        new = new.split("%3c", 1)[0]
        # Drop the trailing %20 that joined the two halves.
        if new.endswith("%20"):
            new = new[:-3]
        fixes.append(UrlFix(before, new, "mos-roadmaps-dedupe-nested"))

    # AMPS: the trailing splash payload is harmless but ugly. Leave as-is.
    # CIRRAS already stripped of McasCSRF token by extractor.

    # Normalize HTML-encoded ampersands.
    if "&amp;" in new:
        before = new
        new = new.replace("&amp;", "&")
        fixes.append(UrlFix(before, new, "html-entity-decode"))

    return new


# ---------------------------------------------------------------------------
# Access heuristic
# ---------------------------------------------------------------------------


PUBLIC_HOSTS = {
    "studentaid.gov",
    "dodmwrlibraries.org",
    "marines.dev",
    "linktr.ee",
    "safe.menlosecurity.com",
}
PUBLIC_SUFFIXES = (
    ".gsa.gov",
    ".archives.gov",
    ".redcross.org",
    "militaryonesource.mil",
    ".microsoft.com",
    ".citibank.com",
    ".citidirect.com",
    ".dodmou.com",
    ".usalearning.gov",
    ".information.marines.mil",
    ".manpower.marines.mil",
    ".mcrc.marines.mil",
    ".igmc.marines.mil",
    ".iandl.marines.mil",
    ".mccsss.marines.mil",
    ".pendleton.marines.mil",
    ".hqmc.marines.mil",
    ".usmc-mccs.org",
    ".usmcu.edu",
    ".digitalu.af.mil",
    ".cool.osd.mil",
    ".my.navy.mil",
    ".jagcnet.army.mil",
)
CAC_SUFFIXES = (
    ".usmc.mil",
    ".marines.mil",
    ".navy.mil",
    ".dla.mil",
    ".disa.mil",
    ".osd.mil",
    ".dod.mil",
    ".army.mil",
    ".doded.mil",
    ".jten.mil",
    ".milcloud.mil",
    ".dc3n.navy.mil",
    ".mceits.usmc.mil",
    ".mctims.usmc.mil",
    ".manpower.usmc.mil",
    ".marinenet.usmc.mil",
    ".amhs.usmc.mil",
    ".tfs.usmc.mil",
    ".defensetravel.osd.mil",
    ".defensetravel.dod.mil",
    ".health.mil",
    ".genai.mil",
    ".genai.army.mil",
    ".camogpt.army.mil",
    ".niprgpt.mil",
    ".advana.data.mil",
)
SHAREPOINT_HOSTS = ("sharepoint-mil.us", "sharepoint.com")
TEAMS_HOSTS = ("teams.microsoft.us", "teams.microsoft.com")
INTRANET_HOSTS = ("apps.mil",)


def infer_access(url: str) -> tuple[str, bool]:
    """Return (access, needs_review)."""
    parsed = urlparse(url)
    host = parsed.netloc.lower()
    if not host:
        return "unknown", True

    if any(s in host for s in TEAMS_HOSTS):
        return "teams", False
    if any(s in host for s in SHAREPOINT_HOSTS):
        return "sharepoint", False
    if host in PUBLIC_HOSTS:
        return "public", False
    if any(host.endswith(s.lstrip(".")) or s in host for s in PUBLIC_SUFFIXES):
        return "public", False
    if any(host.endswith(s.lstrip(".")) or s in host for s in CAC_SUFFIXES):
        return "cac", False
    if any(host.endswith(s) for s in INTRANET_HOSTS):
        return "intranet", False
    # Special cases that need Stephen's call.
    review_hosts = {
        "play.apps.appsplatform.us",
        "usmc.percipio.com",
        "home.cards.citidirect.com",
        "intelshare.intelink.gov",
        "fast.mfr.nps.edu",
        "myaccess.dmdc.osd.mil",
    }
    if host in review_hosts:
        return "unknown", True
    return "unknown", True


# ---------------------------------------------------------------------------
# Slug + label helpers
# ---------------------------------------------------------------------------


def slugify(text: str) -> str:
    s = text.lower()
    s = s.replace("&", " and ")
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s


def clean_label(label: str) -> str:
    # Fix the source typo "Claud AI" to "Claude AI".
    if label.strip() == "Claud AI":
        return "Claude AI"
    return label.strip()


# ---------------------------------------------------------------------------
# Stub assembly
# ---------------------------------------------------------------------------


@dataclass
class StubEntry:
    slug: str
    title: str
    url: str
    category: str
    additional_categories: list[str] = field(default_factory=list)
    aliases: list[str] = field(default_factory=list)
    access: str = "unknown"
    needs_access_review: bool = True
    audience: str | None = None
    import_notes: list[str] = field(default_factory=list)


def yaml_string(value: str) -> str:
    """Quote a string for YAML frontmatter."""
    escaped = value.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{escaped}"'


def yaml_list(values: list[str]) -> str:
    if not values:
        return "[]"
    items = ", ".join(yaml_string(v) for v in values)
    return f"[{items}]"


def render_stub(entry: StubEntry) -> str:
    summary = (
        f"Source label: {entry.title}. Review and rewrite this summary, "
        "then move the file into content/links/."
    )
    audience_line = (
        f'audience: "{entry.audience}"\n' if entry.audience else ""
    )
    notes_block = ""
    if entry.import_notes:
        notes_block = "_importNotes:\n"
        for note in entry.import_notes:
            notes_block += f"  - {yaml_string(note)}\n"
    return (
        "---\n"
        f"title: {yaml_string(entry.title)}\n"
        f"slug: {yaml_string(entry.slug)}\n"
        f"summary: {yaml_string(summary)}\n"
        'roles: ["marine", "leader", "commander", "admin"]\n'
        f'lastVerified: "{TODAY}"\n'
        "source:\n"
        '  title: "Semper Admin SharePoint - Important Links"\n'
        '  publisher: "DC MRA"\n'
        '  url: "https://usmc.sharepoint-mil.us/sites/DCMRA_mra_SemperAdmin"\n'
        f"url: {yaml_string(entry.url)}\n"
        f'category: "{entry.category}"\n'
        f"additionalCategories: {yaml_list(entry.additional_categories)}\n"
        f"{audience_line}"
        f'access: "{entry.access}"\n'
        f"needsAccessReview: {'true' if entry.needs_access_review else 'false'}\n"
        f"requiresCac: {'true' if entry.access == 'cac' else 'false'}\n"
        f"aliases: {yaml_list(entry.aliases)}\n"
        f"{notes_block}"
        "---\n\n"
        "Stub. Replace this body with a short description of what the link "
        "delivers and who needs it. Keep under 120 words.\n"
    )


# ---------------------------------------------------------------------------
# Consolidation rules
# ---------------------------------------------------------------------------


def consolidate(rows: list[SourceRow], fixes: list[UrlFix]) -> list[StubEntry]:
    """Group rows by cleaned URL into stub entries."""
    by_url: dict[str, list[SourceRow]] = defaultdict(list)
    cleaned_lookup: dict[int, str] = {}
    for row in rows:
        cleaned = clean_url(row.label, row.url, fixes)
        cleaned_lookup[row.line_no] = cleaned
        by_url[cleaned].append(row)

    entries: list[StubEntry] = []
    for url, group in by_url.items():
        first = group[0]
        # Section consolidation: pick the first section as primary,
        # collect any distinct other sections into additionalCategories.
        sections_seen: list[str] = []
        labels: list[str] = []
        for row in group:
            if row.section not in sections_seen:
                sections_seen.append(row.section)
            cleaned_label = clean_label(row.label)
            if cleaned_label not in labels:
                labels.append(cleaned_label)
        primary_category = sections_seen[0]
        additional = sections_seen[1:]

        # Special case: 4 RFF advisory entries share one URL.
        if "Advisory Notifications.aspx" in url and primary_category == "reference":
            title = "RFF Advisory Notifications"
            aliases = labels
        elif len(labels) > 1:
            # Multi-label dedupe. Use the first label as title, others
            # become aliases.
            title = labels[0]
            aliases = labels[1:]
        else:
            title = labels[0]
            aliases = []

        slug = slugify(title)
        access, needs_review = infer_access(url)
        audience = AUDIENCE_DEFAULT.get(primary_category)

        import_notes: list[str] = []
        if len(group) > 1:
            sections_str = ", ".join(sections_seen)
            import_notes.append(
                f"Consolidated {len(group)} source rows across sections: {sections_str}"
            )
        for row in group:
            original = row.url
            cleaned = cleaned_lookup[row.line_no]
            if original != cleaned:
                import_notes.append(
                    f"URL cleanup applied: '{original}' -> '{cleaned}'"
                )

        entries.append(
            StubEntry(
                slug=slug,
                title=title,
                url=url,
                category=primary_category,
                additional_categories=additional,
                aliases=aliases,
                access=access,
                needs_access_review=needs_review,
                audience=audience,
                import_notes=import_notes,
            )
        )

    # Stable order: by category in canonical section order, then by title.
    section_order = {s: i for i, s in enumerate([
        "semper-admin",
        "educational",
        "reference",
        "system",
        "ai",
        "teams-channels",
        "sharepoints",
        "more-great-links",
    ])}
    entries.sort(key=lambda e: (section_order[e.category], e.title.lower()))
    return entries


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--section", choices=sorted(VALID_SECTIONS), default=None)
    ap.add_argument("--clean", action="store_true",
                    help="Delete existing _stubs/ before writing.")
    args = ap.parse_args()

    rows = parse_source(SOURCE_PATH)
    print(f"[links-import] parsed {len(rows)} source rows from {SOURCE_PATH.name}")

    fixes: list[UrlFix] = []
    entries = consolidate(rows, fixes)

    if args.section:
        entries = [e for e in entries if e.category == args.section]
        print(f"[links-import] filtered to {len(entries)} entries in section "
              f"'{args.section}'")

    print(f"[links-import] {len(entries)} unique entries after dedupe")
    print(f"[links-import] {len(fixes)} URL rewrites applied")

    if args.dry_run:
        for e in entries[:5]:
            print(f"  sample: {e.category} | {e.title} | {e.url} | access={e.access}")
        return 0

    if args.clean and STUBS_DIR.exists():
        for f in STUBS_DIR.iterdir():
            if f.is_file():
                f.unlink()
        print(f"[links-import] cleaned existing files in {STUBS_DIR}")

    STUBS_DIR.mkdir(parents=True, exist_ok=True)

    seen_slugs: set[str] = set()
    written = 0
    review_count = 0
    for entry in entries:
        slug = entry.slug
        if slug in seen_slugs:
            # Collide-on-slug. Append category to disambiguate.
            slug = f"{slug}-{entry.category}"
        seen_slugs.add(slug)
        # Update the entry's slug if changed.
        entry.slug = slug

        path = STUBS_DIR / f"{slug}.mdx"
        path.write_text(render_stub(entry), encoding="utf-8")
        written += 1
        if entry.needs_access_review:
            review_count += 1

    manifest = {
        "generated": TODAY,
        "rows_parsed": len(rows),
        "entries_written": written,
        "needs_access_review": review_count,
        "url_fixes": [
            {"rule": f.rule, "original": f.original, "cleaned": f.cleaned}
            for f in fixes
        ],
        "by_category": {
            section: sum(1 for e in entries if e.category == section)
            for section in sorted(VALID_SECTIONS)
        },
    }
    MANIFEST_PATH.write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8"
    )

    print(f"[links-import] wrote {written} stubs to {STUBS_DIR}")
    print(f"[links-import] {review_count} stubs flagged needsAccessReview=true")
    print(f"[links-import] manifest written to {MANIFEST_PATH.name}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
