#!/usr/bin/env python3
"""
Citation frequency scanner.

One-shot pass that scans every citation source across the portal and counts
how often each parent document is referenced. Output drives the Phase 1
top-five seed selection for the new content/citations collection.

Data sources scanned.
- content/inspections/igmc/*.json (subsections[].items[].references[])
- content/inspections/mcaat/*.json (subsections[].items[].references[])
- content/admin/*.mdx (references[] frontmatter array)
- content/marines/*.mdx
- content/leader/*.mdx
- content/commander/*.mdx
- content/policies/*.mdx (optional, source.title field)

Normalization. Each citation string is collapsed to a parent-document key by
pattern matching the doc type prefix and number. Chapter, section, paragraph,
and parenthetical metadata are stripped. Multiple parents in a single string
get split on semicolons first.

Output. Prints the top 20 parent documents by reference count, with a sample
of one citation string per bucket so you can sanity-check the normalization.
"""

from __future__ import annotations

import json
import os
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path
from typing import Iterable

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"


# Order matters. First pattern to match wins. Patterns return a canonical
# parent-document key string.
PATTERNS: list[tuple[re.Pattern[str], str]] = [
    # MARADMIN 022/25 or MARADMIN 412/20
    (re.compile(r"\bMARADMIN\s+(\d+/\d+)\b", re.IGNORECASE), r"MARADMIN \1"),
    # ALMAR 006/26
    (re.compile(r"\bALMAR\s+(\d+/\d+)\b", re.IGNORECASE), r"ALMAR \1"),
    # ALNAV 006/26
    (re.compile(r"\bALNAV\s+(\d+/\d+)\b", re.IGNORECASE), r"ALNAV \1"),
    # DOD FMR / DoD 7000.14-R / DoDFMR with optional Volume X
    (
        re.compile(
            r"\b(?:DOD\s*FMR|DoD\s*FMR|DoDFMR|DOD\s+7000\.14-?R|DoD\s+7000\.14-?R)\b"
            r"(?:.*?(?:Volume|Vol\.?)\s*(\d+[A-Z]?))?",
            re.IGNORECASE,
        ),
        lambda m: "DODFMR Vol " + m.group(1) if m.group(1) else "DODFMR",
    ),
    # DODI / DoDI / DOD Instruction
    (
        re.compile(
            r"\b(?:DODI|DoDI|DOD\s*Instruction|DoD\s*Instruction)\s+(\d+\.\d+[A-Z]?)\b",
            re.IGNORECASE,
        ),
        r"DODI \1",
    ),
    # DODD / DoD Directive
    (
        re.compile(
            r"\b(?:DODD|DoDD|DOD\s*Directive)\s+(\d+\.\d+[A-Z]?)\b",
            re.IGNORECASE,
        ),
        r"DODD \1",
    ),
    # DODM / DoD Manual
    (
        re.compile(
            r"\b(?:DODM|DoDM|DOD\s*Manual)\s+(\d+\.\d+[A-Z]?)\b",
            re.IGNORECASE,
        ),
        r"DODM \1",
    ),
    # MCO with optional P prefix, optional dash version, optional vol suffix
    # Examples. MCO 5210.11F, MCO P1610.7B, MCO 1001R.1L, MCO 5800.16 Vol 8
    (
        re.compile(
            r"\bMCO\s+(P?\d+[A-Z]?(?:\.\d+)?[A-Z]?)"
            r"(?:\s+Vol\s*(\d+[A-Z]?))?",
            re.IGNORECASE,
        ),
        lambda m: (
            "MCO " + m.group(1).upper() + " Vol " + m.group(2)
            if m.group(2)
            else "MCO " + m.group(1).upper()
        ),
    ),
    # SECNAVINST (must come before SECNAV to avoid partial match)
    (
        re.compile(r"\bSECNAVINST\s+(\d+\.\d+[A-Z]?)\b", re.IGNORECASE),
        r"SECNAVINST \1",
    ),
    # SECNAV memo or instruction reference
    (re.compile(r"\bSECNAV\s+(\d+\.\d+[A-Z]?)\b", re.IGNORECASE), r"SECNAV \1"),
    # JAGINST
    (
        re.compile(r"\bJAGINST\s+(\d+\.\d+[A-Z]?)\b", re.IGNORECASE),
        r"JAGINST \1",
    ),
    # NAVMC numbered (manual or form)
    (
        re.compile(r"\bNAVMC\s+(\d+[A-Z]?)\b", re.IGNORECASE),
        r"NAVMC \1",
    ),
    # Title X U.S.C. section Y or X USC Y
    (
        re.compile(
            r"\bTitle\s+(\d+)\s+U\.?S\.?C\.?\s*(?:section\s+|sec\.?\s+|§\s*)?(\d+)?",
            re.IGNORECASE,
        ),
        lambda m: (
            m.group(1) + " USC " + m.group(2)
            if m.group(2)
            else m.group(1) + " USC"
        ),
    ),
    (
        re.compile(r"\b(\d+)\s+U\.?S\.?C\.?\s+(\d+)\b", re.IGNORECASE),
        r"\1 USC \2",
    ),
    # DD Form NNNN
    (
        re.compile(r"\bDD\s+Form\s+(\d+(?:-\d+)?)", re.IGNORECASE),
        r"DD Form \1",
    ),
    # MCBUL
    (
        re.compile(r"\bMCBUL\s+(\d+[A-Z]?)", re.IGNORECASE),
        r"MCBUL \1",
    ),
    # Standalone acronym manuals. Catch them last.
    (re.compile(r"\bMARCORSEPMAN\b", re.IGNORECASE), "MARCORSEPMAN"),
    (re.compile(r"\bMCRAMM\b", re.IGNORECASE), "MCRAMM"),
    (re.compile(r"\bMCTFSPRIUM\b", re.IGNORECASE), "MCTFSPRIUM"),
    (re.compile(r"\bIRAM\b(?!\s*\(.*M\))", re.IGNORECASE), "IRAM"),
    (re.compile(r"\bJAGMAN\b", re.IGNORECASE), "JAGMAN"),
    (re.compile(r"\bMCM\b(?:\s+Manual\s+for\s+Courts-?Martial)?", re.IGNORECASE), "MCM"),
    (re.compile(r"\bManual\s+for\s+Courts-?Martial\b", re.IGNORECASE), "MCM"),
    (re.compile(r"\bMCPEL\b", re.IGNORECASE), "MCPEL"),
    (re.compile(r"\bJTR\b", re.IGNORECASE), "JTR"),
    (re.compile(r"\bIPSP\b", re.IGNORECASE), "IPSP"),
    (re.compile(r"\bMCRP\s+(\d+-\d+[A-Z]?(?:\.\d+)?)\b", re.IGNORECASE), r"MCRP \1"),
    (re.compile(r"\bMCWP\s+(\d+-\d+[A-Z]?(?:\.\d+)?)\b", re.IGNORECASE), r"MCWP \1"),
]


def normalize(citation: str) -> str | None:
    """Return the canonical parent-document key for a free-text citation."""
    text = citation.strip()
    if not text:
        return None
    for pattern, replacement in PATTERNS:
        match = pattern.search(text)
        if match:
            if callable(replacement):
                return replacement(match)
            return match.expand(replacement).upper().replace("  ", " ").strip()
    return None


def split_compound(citation: str) -> list[str]:
    """A single string sometimes packs multiple citations. Split on semicolons
    and the word 'and' between MCO references."""
    parts = re.split(r"[;]\s*", citation)
    return [p for p in parts if p.strip()]


def yaml_references(text: str) -> list[str]:
    """Pull the references list from an MDX file's frontmatter without parsing
    the entire YAML. The shape is consistent across the repo. references:
    followed by indented hyphen items, terminated by a non-indented key or ---.
    """
    refs: list[str] = []
    lines = text.splitlines()
    in_block = False
    for line in lines:
        if not in_block:
            if re.match(r"^references:\s*$", line):
                in_block = True
            continue
        # Inside the block. Stop on a line that does not begin with whitespace
        # plus hyphen or whitespace.
        if re.match(r"^\S", line):
            break
        m = re.match(r"^\s+-\s+\"(.+?)\"\s*$", line)
        if not m:
            m = re.match(r"^\s+-\s+'(.+?)'\s*$", line)
        if not m:
            m = re.match(r"^\s+-\s+(.+?)\s*$", line)
        if m:
            refs.append(m.group(1).strip())
    return refs


def scan_mdx_dir(dirpath: Path) -> Iterable[tuple[str, str]]:
    """Yield (citation_string, file_label) for every references entry."""
    if not dirpath.is_dir():
        return
    for entry in sorted(dirpath.iterdir()):
        if entry.suffix != ".mdx":
            continue
        text = entry.read_text(encoding="utf-8")
        for ref in yaml_references(text):
            yield ref, str(entry.relative_to(CONTENT))


def scan_inspections() -> Iterable[tuple[str, str]]:
    """Yield (citation_string, file_label) from inspection JSON."""
    for track in ("igmc", "mcaat"):
        trackdir = CONTENT / "inspections" / track
        if not trackdir.is_dir():
            continue
        for entry in sorted(trackdir.iterdir()):
            if entry.suffix != ".json" or entry.name.startswith("_"):
                continue
            data = json.loads(entry.read_text(encoding="utf-8"))
            for sub in data.get("subsections", []):
                for item in sub.get("items", []):
                    for ref in item.get("references", []) or []:
                        yield ref, str(entry.relative_to(CONTENT))


def main() -> int:
    counts: Counter[str] = Counter()
    unresolved: Counter[str] = Counter()
    samples: dict[str, str] = {}
    source_breakdown: dict[str, Counter[str]] = defaultdict(Counter)

    sources: list[tuple[str, Iterable[tuple[str, str]]]] = [
        ("admin", scan_mdx_dir(CONTENT / "admin")),
        ("marines", scan_mdx_dir(CONTENT / "marines")),
        ("leader", scan_mdx_dir(CONTENT / "leader")),
        ("commander", scan_mdx_dir(CONTENT / "commander")),
        ("policies", scan_mdx_dir(CONTENT / "policies")),
        ("situations", scan_mdx_dir(CONTENT / "situations")),
        ("snippets", scan_mdx_dir(CONTENT / "snippets")),
        ("references", scan_mdx_dir(CONTENT / "references")),
        ("videos", scan_mdx_dir(CONTENT / "videos")),
        ("tools", scan_mdx_dir(CONTENT / "tools")),
        ("inspections", scan_inspections()),
    ]

    for source_name, stream in sources:
        for citation, _file in stream:
            for piece in split_compound(citation):
                key = normalize(piece)
                if key is None:
                    unresolved[piece] += 1
                    continue
                counts[key] += 1
                source_breakdown[key][source_name] += 1
                samples.setdefault(key, piece)

    print("=" * 80)
    print("CITATION FREQUENCY SCAN")
    print("=" * 80)
    print()
    print(f"Total resolved citations: {sum(counts.values())}")
    print(f"Total unique parent docs: {len(counts)}")
    print(f"Unresolved citation strings: {sum(unresolved.values())}")
    print()
    print("-" * 80)
    print(f"{'Rank':<5}{'Count':<7}{'Parent document':<35}{'Source breakdown'}")
    print("-" * 80)
    for rank, (key, count) in enumerate(counts.most_common(20), start=1):
        breakdown = ", ".join(
            f"{src}:{n}" for src, n in source_breakdown[key].most_common()
        )
        print(f"{rank:<5}{count:<7}{key:<35}{breakdown}")
    print()
    print("-" * 80)
    print("Sample input string per top-20 bucket")
    print("-" * 80)
    for rank, (key, _count) in enumerate(counts.most_common(20), start=1):
        print(f"{rank:>2}. {key} <- {samples[key]!r}")
    print()
    print("-" * 80)
    print("Top 15 unresolved citation strings (no pattern matched)")
    print("-" * 80)
    for citation, count in unresolved.most_common(15):
        print(f"{count:>4}  {citation!r}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
