#!/usr/bin/env python3
"""MCTFSPRIUM paragraph-level citation generator.

Reads the converted PRIUM paragraph files, matches them against every
MCTFSPRIUM reference the app carries (role catalogs plus inspection
checklists), and emits one citation entry per referenced paragraph at
content/citations/mctfsprium-<paragraph>.mdx with the source text as the
page body.

Referenced-only by design. The 724-file PRIUM conversion stays outside the
repo. Only paragraphs the app cites get a page. Re-run after adding newly
converted paragraphs to the source folder.

The conversion carries known defects this script corrects:
- 49 files carry a filename id that disagrees with the paragraph number in
  the body (chapter 12 files lost their leading digit, chapter 13
  appendices landed under 30101/30102). The body id wins.
- Several paragraph ids map to two files. OVERRIDES pins the canonical
  file for every referenced duplicate.

Usage:
  python scripts/prium-citations-import.py [--src PATH] [--dry-run]

Default source: E:\\GunnyBot\\Policies\\PRIUM
"""

import argparse
import collections
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GENERATED = ROOT / "src" / "generated"
OUT_DIR = ROOT / "content" / "citations"

SNAPSHOT_DATE = "2026-06-01"  # scrape date stamped in every PRIUM file
PUBLISHER = "Headquarters Marine Corps M&RA"

# Canonical file for paragraph ids the conversion duplicated. Keyed by true
# paragraph id, value is the exact filename to use.
OVERRIDES = {
    "20103": "20103_UNIT_DIARY_TIMELINESS.md",
    "10100": "10100_Introduction_To_Mctfs.md",
    "10103": "10103_Accession_Of_Computer_Records_Into_MCTFS.md",
    "90701": "90701_Imminent_Danger_Pay_TTC_236293294297899.md",
    "80207": "80207_Overseas_Housing_Allowance_TTC_496497498458.md",
    # 60212_Times_New_Roman.md is a conversion artifact whose body holds
    # paragraph 60301 content under a garbage title.
    "60212": "61024_JOIN_FROM_DESERTION_RUC_54321_MCC_910_WHILE_DES_IHCA_.md",
}

# Chapter-level references mapped to a specific file. Keyed by the
# normalized alias the app cites. None marks an extra alias of the
# preceding real entry.
CHAPTER_LEVEL = {
    "MCTFSPRIUM CHAP 13 APPENDIX C": (
        "appendix-c",
        "30102_Appendix_C_-_Official_Military_Personnel_File_OMPF_Forms_List.md",
        "13",
        "Appendix C - Official Military Personnel File (OMPF) Forms List",
    ),
    "MCTFSPRIUM CHAPTER 13 APPENDIX C": None,
    "MCTFSPRIUM CH 13 APPENDIX C": None,
    "MCTFSPRIUM CHAP 8 SECT 2 CHAP 13 APPENDIX C": None,
    "MCTFSPRIUM CH 13 APPENDIX C MARADMIN 559/23": None,
}


def normalize_alias(s: str) -> str:
    """Mirror of normalizeCitationAlias in scripts/citations-validate.mjs."""
    s = s.upper()
    s = re.sub(
        r"\b(VOL|VOLS|CH|CHAP|CHAPTER|SEC|SECT|SECTION|PAR|PARA|PARAGRAPH|ENCL|ENCLOSURE|APP|APPENDIX|ART|ARTICLE)\.",
        r"\1 ",
        s,
    )
    s = s.replace(",", " ")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def collect_app_references():
    """Every PRIUM reference string in role catalogs and inspections."""
    strings = collections.Counter()

    def scan(refs):
        if not refs:
            return
        items = refs if isinstance(refs, list) else [refs]
        for r in items:
            if isinstance(r, str) and re.search(r"PRIUM", r, re.I):
                strings[r.strip()] += 1

    for cat in ["admin", "marines", "leader", "commander", "links", "reports"]:
        f = GENERATED / f"{cat}.json"
        if not f.exists():
            continue
        for e in json.loads(f.read_text(encoding="utf8")):
            scan(e.get("references"))
            scan(e.get("sourcePolicy"))
    for p in json.loads((GENERATED / "inspections.json").read_text(encoding="utf8")):
        for sub in p.get("subsections", []):
            for item in sub.get("items", []):
                scan(item.get("references"))
    return strings


def paragraph_tokens(s: str):
    """Every (chapter, paragraph) token in citation order."""
    out = []
    for m in re.finditer(r"\b(\d{1,2})-(\d{5,6})(?:\.\S*)?", s):
        out.append((m.group(1), m.group(2)))
    for m in re.finditer(r"\bpar(?:a(?:graph)?)?\.?\s+(\d{5,6})", s, re.I):
        pid = m.group(1)
        out.append((pid[:2] if len(pid) == 6 else pid[:1], pid))
    if not out:
        # Bare paragraph directly after the document acronym.
        m = re.search(r"PRIUM\s+(\d{5,6})\b", s, re.I)
        if m:
            pid = m.group(1)
            out.append((pid[:2] if len(pid) == 6 else pid[:1], pid))
    return out


def inventory(src: Path):
    """True paragraph id -> list of files. Body id wins over filename id."""
    inv = collections.defaultdict(list)
    for f in sorted(src.glob("*.md")):
        fm = re.match(r"^(\d{5,6})_", f.name)
        if not fm:
            continue
        body = f.read_text(encoding="utf8", errors="replace")
        bm = re.search(r"\*\*(\d{5,6})\.", body)
        true_id = bm.group(1) if bm else fm.group(1)
        inv[true_id].append(f.name)
    return inv


def extract_title(body: str, pid: str) -> str:
    m = re.search(r"^#\s+\d{5,6}\.\s*(.+)$", body, re.M)
    if m:
        return m.group(1).strip()
    m = re.search(r"\*\*" + pid + r"\.\s*([^*]+)\*\*", body)
    if m:
        return re.sub(r"\s+", " ", m.group(1)).strip()
    return f"Paragraph {pid}"


def clean_body(body: str, pid: str) -> str:
    """Strips conversion scaffolding, keeps source text, escapes MDX hazards."""
    lines = body.split("\n")
    kept = []
    for ln in lines:
        s = ln.strip()
        if re.match(r"^#\s+\d{5,6}\.", s):
            continue  # duplicate title, PageHeader owns the h1
        if s.startswith("**Category:**"):
            continue
        if re.match(r"^\*Scraped:.*\*$", s):
            continue
        if s == "---":
            continue
        kept.append(ln)
    text = "\n".join(kept)
    # Drop the bold duplicate paragraph header the conversion repeats.
    text = re.sub(r"\*\*" + pid + r"\.\s*[^*]*\*\*(\*\* \*\*)?", "", text, count=1)
    # Escape MDX expression and JSX openers in plain source text.
    text = text.replace("{", "&#123;").replace("}", "&#125;")
    text = re.sub(r"<(?=\S)", "&lt;", text)
    # Collapse runs of blank lines.
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    return text


def mdx_entry(pid, chapter, title, aliases, body_text, source_file):
    number = f"MCTFSPRIUM {chapter}-{pid}"
    alias_lines = "\n".join(f'  - "{a}"' for a in aliases)
    safe_title = title.replace('"', "'")
    fm = f"""---
id: "mctfsprium-{pid}"
aliases:
{alias_lines}
title: "MCTFSPRIUM {chapter}-{pid} - {safe_title}"
type: "MCTFSPRIUM"
number: "{number}"
publisher: "{PUBLISHER}"
lastVerified: "{SNAPSHOT_DATE}"
gatedSource: true
roles: ["admin"]
---

Paragraph {pid}, Chapter {chapter} of the [MCTFSPRIUM](/citations/mctfsprium).
Reproduced from the {SNAPSHOT_DATE} manual snapshot (source file {source_file}).
Verify against the live manual before reporting a transaction:
[Open the PRIUM on MOL](https://mol.tfs.usmc.mil/prium/app/publicPrium?execution=e1s1)
(MOL access required).

## Source text

{body_text}
"""
    return fm


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", default="E:\\GunnyBot\\Policies\\PRIUM")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    src = Path(args.src)
    if not src.exists():
        sys.exit(f"Source folder not found: {src}")

    strings = collect_app_references()
    inv = inventory(src)

    # paragraph id -> set of exact cited alias forms (first-token rule)
    para_aliases = collections.defaultdict(set)
    para_chapter = {}
    unresolved = collections.Counter()
    for s, count in strings.items():
        if not re.match(r"^MCTFS\s?PRIUM", s, re.I):
            # Strings led by another document resolve to that document first.
            continue
        toks = paragraph_tokens(s)
        if toks:
            # The exact cited string aliases to the first paragraph. Every
            # cited paragraph gets a page with its canonical alias.
            first_ch, first_pid = toks[0]
            para_aliases[first_pid].add(normalize_alias(s))
            for ch, pid in toks:
                para_aliases[pid]  # touch so the page generates
                para_chapter.setdefault(pid, ch)
        else:
            norm = normalize_alias(s)
            if norm not in CHAPTER_LEVEL and norm != "MCTFSPRIUM" and not norm.startswith("MCTFSPRIUM MARINE CORPS"):
                unresolved[s] += count

    written, skipped, ambiguous = [], [], []
    for pid, aliases in sorted(para_aliases.items()):
        ch = para_chapter[pid]
        canonical = f"MCTFSPRIUM {ch}-{pid}"
        aliases.add(canonical)
        files = inv.get(pid, [])
        if not files:
            skipped.append((pid, sorted(aliases)))
            continue
        fname = OVERRIDES.get(pid) if len(files) > 1 else files[0]
        if fname is None or fname not in files:
            if len(files) > 1:
                ambiguous.append((pid, files))
                continue
            fname = files[0]
        body = (src / fname).read_text(encoding="utf8", errors="replace")
        title = extract_title(body, pid)
        text = clean_body(body, pid)
        entry = mdx_entry(pid, ch, title, sorted(aliases), text, fname)
        out = OUT_DIR / f"mctfsprium-{pid}.mdx"
        if not args.dry_run:
            out.write_text(entry, encoding="utf8")
        written.append(pid)

    # Chapter-level entries
    for norm_alias, spec in CHAPTER_LEVEL.items():
        if spec is None:
            continue
        slug, fname, ch, title = spec
        path = src / fname
        if not path.exists():
            skipped.append((slug, [norm_alias]))
            continue
        body = path.read_text(encoding="utf8", errors="replace")
        text = clean_body(body, "130102")
        all_aliases = sorted(
            a for a in CHAPTER_LEVEL if CHAPTER_LEVEL[a] is None or a == norm_alias
        )
        number = f"MCTFSPRIUM Chapter {ch} {title.split(' - ')[0]}"
        alias_lines = "\n".join(f'  - "{a}"' for a in all_aliases)
        entry = f"""---
id: "mctfsprium-{slug}"
aliases:
{alias_lines}
title: "MCTFSPRIUM Chapter {ch} {title}"
type: "MCTFSPRIUM"
number: "{number}"
publisher: "{PUBLISHER}"
lastVerified: "{SNAPSHOT_DATE}"
gatedSource: true
roles: ["admin"]
---

Chapter {ch} appendix of the [MCTFSPRIUM](/citations/mctfsprium).
Reproduced from the {SNAPSHOT_DATE} manual snapshot (source file {fname}).
Verify against the live manual before reporting a transaction:
[Open the PRIUM on MOL](https://mol.tfs.usmc.mil/prium/app/publicPrium?execution=e1s1)
(MOL access required).

## Source text

{text}
"""
        out = OUT_DIR / f"mctfsprium-{slug}.mdx"
        if not args.dry_run:
            out.write_text(entry, encoding="utf8")
        written.append(slug)

    print(f"[prium-import] wrote {len(written)} entries")
    if skipped:
        print(f"[prium-import] {len(skipped)} referenced paragraphs have no source file:")
        for pid, al in skipped:
            print(f"  {pid}")
    if ambiguous:
        print(f"[prium-import] {len(ambiguous)} ambiguous ids need an OVERRIDES entry:")
        for pid, files in ambiguous:
            print(f"  {pid}: {files}")
    if unresolved:
        print(f"[prium-import] {len(unresolved)} PRIUM strings carry no paragraph token (document-level, resolve to parent):")
        for s, c in unresolved.most_common(5):
            print(f"  x{c} {s[:90]}")


if __name__ == "__main__":
    main()
