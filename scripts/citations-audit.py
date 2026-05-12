#!/usr/bin/env python3
"""
Citation registry coverage audit.

Walks every content collection's references arrays, resolves each through
the live citations registry, and reports unresolved counts.

Usage.
  python3 scripts/citations-audit.py              # full report
  python3 scripts/citations-audit.py --quiet      # summary line only
  python3 scripts/citations-audit.py --misses N   # top N unresolved patterns

The registry must be built first. Run npm run content:sync to refresh
src/generated/citations.json before auditing.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
INDEX_PATH = ROOT / "src" / "generated" / "citations.json"


def normalize(s: str) -> str:
    text = str(s).upper()
    text = re.sub(
        r"\b(VOL|VOLS|CH|CHAP|CHAPTER|SEC|SECT|SECTION|PAR|PARA|PARAGRAPH|ENCL|ENCLOSURE|APP|APPENDIX|ART|ARTICLE)\.",
        r"\1 ",
        text,
    )
    text = text.replace(",", " ")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def generate_candidates(input_str: str) -> list[str]:
    trimmed = input_str.strip()
    candidates: list[str] = []
    seen = set()

    def push(value: str) -> None:
        clean = re.sub(r"[,\s]+$", "", str(value)).strip()
        if clean and clean not in seen:
            seen.add(clean)
            candidates.append(clean)

    push(trimmed)
    push(re.sub(r"\s*\([^)]*\).*$", "", trimmed))
    push(re.split(r"\s*,?\s*(?:par(?:a(?:graph)?)?\.?|sect(?:ion)?\.?|art(?:icle)?\.?)\s", trimmed, flags=re.IGNORECASE)[0])
    push(re.split(r"\s*,?\s*\bch(?:ap(?:ter)?)?\.?\s", trimmed, flags=re.IGNORECASE)[0])
    push(re.split(r"\s*,?\s*encl(?:osure)?\.?\s", trimmed, flags=re.IGNORECASE)[0])
    push(trimmed.split(",")[0])
    push(" ".join(trimmed.split()[:2]))
    # First single token. Catches MCTFSPRIUM-style acronym-only aliases.
    tokens = trimmed.split()
    if tokens:
        push(tokens[0])
    return candidates


def resolve(input_str: str, by_alias: dict[str, str]) -> str | None:
    if not input_str:
        return None
    for c in generate_candidates(input_str):
        hit = by_alias.get(normalize(c))
        if hit:
            return hit
    return None


def yaml_references(text: str) -> list[str]:
    refs: list[str] = []
    in_block = False
    for line in text.splitlines():
        if not in_block:
            if re.match(r"^references:\s*$", line):
                in_block = True
            continue
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


def split_compound(citation: str) -> list[str]:
    return [p for p in re.split(r"[;]\s*", citation) if p.strip()]


def scan_all() -> list[tuple[str, str, str]]:
    """Yields (citation_string, collection, file_label)."""
    out: list[tuple[str, str, str]] = []
    for collection in ("admin", "marines", "leader", "commander", "policies", "situations"):
        d = CONTENT / collection
        if not d.is_dir():
            continue
        for entry in sorted(d.iterdir()):
            if entry.suffix != ".mdx":
                continue
            for ref in yaml_references(entry.read_text(encoding="utf-8")):
                out.append((ref, collection, entry.name))
    for track in ("igmc", "mcaat"):
        td = CONTENT / "inspections" / track
        if not td.is_dir():
            continue
        for entry in sorted(td.iterdir()):
            if entry.suffix != ".json" or entry.name.startswith("_"):
                continue
            data = json.loads(entry.read_text(encoding="utf-8"))
            for sub in data.get("subsections", []):
                for item in sub.get("items", []):
                    for ref in item.get("references", []) or []:
                        out.append((ref, "inspections", entry.name))
    return out


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--quiet", action="store_true")
    parser.add_argument("--misses", type=int, default=20)
    args = parser.parse_args()

    if not INDEX_PATH.is_file():
        print(
            "ERROR. src/generated/citations.json not found. Run npm run content:sync first.",
            file=sys.stderr,
        )
        return 2

    index = json.loads(INDEX_PATH.read_text(encoding="utf-8"))
    by_alias: dict[str, str] = index.get("byAlias", {})

    total = 0
    resolved = 0
    unresolved_strings: Counter = Counter()
    unresolved_normalized: Counter = Counter()
    per_collection: dict[str, dict[str, int]] = {}

    for citation, collection, _file in scan_all():
        for piece in split_compound(citation):
            total += 1
            stats = per_collection.setdefault(collection, {"resolved": 0, "unresolved": 0})
            hit = resolve(piece, by_alias)
            if hit:
                resolved += 1
                stats["resolved"] += 1
            else:
                stats["unresolved"] += 1
                unresolved_strings[piece] += 1
                # Also bucket by a rough canonical-parent guess so the
                # report surfaces patterns rather than every long suffix.
                head = " ".join(piece.split()[:2]).upper()
                unresolved_normalized[head] += 1

    if args.quiet:
        coverage = (resolved / total * 100) if total else 0.0
        print(
            f"[citations-audit] {resolved}/{total} resolved ({coverage:.1f}%), "
            f"{len(unresolved_strings)} unique unresolved strings"
        )
        return 0

    print("=" * 80)
    print("CITATIONS COVERAGE AUDIT")
    print("=" * 80)
    print()
    coverage = (resolved / total * 100) if total else 0.0
    print(f"Total citation occurrences: {total}")
    print(f"Resolved by registry:       {resolved} ({coverage:.1f}%)")
    print(f"Unresolved occurrences:     {total - resolved}")
    print(f"Unique unresolved strings:  {len(unresolved_strings)}")
    print()
    print("-" * 80)
    print("Per-collection coverage")
    print("-" * 80)
    print(f"{'Collection':<14}{'Resolved':>10}{'Unresolved':>12}{'Coverage':>12}")
    for c, stats in sorted(per_collection.items()):
        col_total = stats["resolved"] + stats["unresolved"]
        col_cov = (stats["resolved"] / col_total * 100) if col_total else 0.0
        print(f"{c:<14}{stats['resolved']:>10}{stats['unresolved']:>12}{col_cov:>11.1f}%")
    print()
    print("-" * 80)
    print(f"Top {args.misses} unresolved patterns (first two tokens)")
    print("-" * 80)
    for head, count in unresolved_normalized.most_common(args.misses):
        print(f"{count:>5}  {head}")
    print()
    print("-" * 80)
    print(f"Top {args.misses} unresolved citation strings")
    print("-" * 80)
    for raw, count in unresolved_strings.most_common(args.misses):
        print(f"{count:>5}  {raw!r}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
