#!/usr/bin/env python3
"""
Citation annotator.

Scans MDX body content for known doc patterns and inserts <Citation source="..." />
chips after each match. The annotation is the Citation MDX component which the
MdxContent renderer already exposes. The chip routes through the citations
registry per the resolver rules.

Usage.
  python3 scripts/citations-annotate.py --file content/marines/apply-for-gtcc.mdx --dry-run
  python3 scripts/citations-annotate.py --glob 'content/marines/*.mdx' --dry-run
  python3 scripts/citations-annotate.py --all --dry-run        # every role MDX
  python3 scripts/citations-annotate.py --all                  # apply

Idempotency. The script skips matches already followed by a Citation tag, so
re-runs do not double-annotate. Only the body (after the closing frontmatter
delimiter) is processed. Frontmatter references arrays are untouched.

Limitations. Pattern-based annotation. False positives are possible when a
doc number appears as a substring of unrelated text. Review the dry-run diff
before broad apply.
"""

from __future__ import annotations

import argparse
import difflib
import glob as glob_mod
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"


# Patterns ordered specific-to-general. Each pattern matches a citation phrase
# and yields a canonical source value for the Citation chip.
PATTERNS = [
    # MARADMIN NNN/YY
    (re.compile(r"\bMARADMIN\s+\d+/\d+\b"), lambda m: m.group(0).upper().replace("MARADMIN", "MARADMIN")),
    # ALMAR NNN/YY
    (re.compile(r"\bALMAR\s+\d+/\d+\b"), lambda m: m.group(0).upper()),
    # ALNAV NNN/YY
    (re.compile(r"\bALNAV\s+\d+/\d+\b"), lambda m: m.group(0).upper()),
    # DODFMR Vol X (and DoD FMR variants)
    (
        re.compile(
            r"\b(?:DOD\s*FMR|DoD\s*FMR|DoDFMR|DOD\s+7000\.14-?R|DoD\s+7000\.14-?R)\s+Vol(?:ume|\.)?\s*\d+[A-Z]?\b",
            re.IGNORECASE,
        ),
        lambda m: m.group(0),
    ),
    # DODI N.NN
    (re.compile(r"\b(?:DODI|DoDI|DOD\s*Instruction|DoD\s*Instruction)\s+\d+\.\d+[A-Z]?\b", re.IGNORECASE), lambda m: m.group(0)),
    # DODD N.NN
    (re.compile(r"\b(?:DODD|DoDD|DOD\s*Directive)\s+\d+\.\d+[A-Z]?\b", re.IGNORECASE), lambda m: m.group(0)),
    # DODM N.NN
    (re.compile(r"\b(?:DODM|DoDM|DOD\s*Manual)\s+\d+\.\d+[A-Z]?\b", re.IGNORECASE), lambda m: m.group(0)),
    # MCO P?NNNN.N(R).N[L] with optional Vol N
    (
        re.compile(r"\bMCO\s+P?\d+[A-Z]?(?:\.\d+)?[A-Z]?(?:\s+Vol\s*\d+[A-Z]?)?\b"),
        lambda m: m.group(0),
    ),
    # SECNAVINST N.NN
    (re.compile(r"\bSECNAVINST\s+\d+\.\d+[A-Z]?\b", re.IGNORECASE), lambda m: m.group(0)),
    # SECNAV M-NNNN.N or SECNAV N.NN
    (re.compile(r"\bSECNAV\s+M-\d+\.\d+\b", re.IGNORECASE), lambda m: m.group(0)),
    (re.compile(r"\bSECNAV\s+\d+\.\d+[A-Z]?\b", re.IGNORECASE), lambda m: m.group(0)),
    # JAGINST N.NN
    (re.compile(r"\bJAGINST\s+\d+\.\d+[A-Z]?\b", re.IGNORECASE), lambda m: m.group(0)),
    # NAVMC N
    (re.compile(r"\bNAVMC\s+\d+[A-Z]?\b"), lambda m: m.group(0)),
    # Title N USC NN or N USC NN
    (
        re.compile(r"\bTitle\s+\d+\s+U\.?S\.?C\.?(?:\s*(?:section\s+|sec\.?\s+|§\s*)\d+)?", re.IGNORECASE),
        lambda m: m.group(0),
    ),
    (re.compile(r"\b\d+\s+U\.?S\.?C\.?\s+\d+\b", re.IGNORECASE), lambda m: m.group(0)),
    # DD Form NNNN
    (re.compile(r"\bDD\s+Form\s+\d+(?:-\d+)?\b"), lambda m: m.group(0)),
    # MCBUL N
    (re.compile(r"\bMCBUL\s+\d+[A-Z]?\b"), lambda m: m.group(0)),
]


def split_frontmatter(text: str) -> tuple[str, str, str]:
    """Returns (frontmatter_block_including_delims, body, header_separator).
    
    Frontmatter is the leading --- ... --- block. Body is everything after.
    """
    if not text.startswith("---"):
        return "", text, ""
    end = text.find("\n---", 3)
    if end == -1:
        return "", text, ""
    fm_end = text.find("\n", end + 4)
    if fm_end == -1:
        fm_end = len(text)
    fm = text[: fm_end + 1] if fm_end < len(text) else text[:fm_end]
    body = text[fm_end + 1 :] if fm_end < len(text) else ""
    return fm, body, ""


def annotate_body(body: str) -> tuple[str, int]:
    """Returns (annotated_body, insertions_count).
    
    Skips heading lines (any line starting with #). Skips fenced code blocks.
    Skips inline code. Idempotent against existing Citation tags.
    """
    lines = body.splitlines(keepends=True)
    in_code_fence = False
    out_lines: list[str] = []
    insertions = 0
    
    for line in lines:
        stripped = line.lstrip()
        # Toggle fenced code state.
        if stripped.startswith("```"):
            in_code_fence = not in_code_fence
            out_lines.append(line)
            continue
        if in_code_fence:
            out_lines.append(line)
            continue
        # Skip markdown headings.
        if stripped.startswith("#"):
            out_lines.append(line)
            continue
        # Skip pure-blank lines.
        if not stripped.strip():
            out_lines.append(line)
            continue
        # Mask inline code and existing Citation tags inside this line.
        inline_code: list[str] = []
        def stash_code(m):
            idx = len(inline_code)
            inline_code.append(m.group(0))
            return f"\x00CODE{idx}\x00"
        masked = re.sub(r"`[^`]+`", stash_code, line)
        citation_tags: list[str] = []
        def stash_cit(m):
            idx = len(citation_tags)
            citation_tags.append(m.group(0))
            return f"\x00CIT{idx}\x00"
        masked = re.sub(r"<Citation\s[^/>]*/>", stash_cit, masked)
        # Sweep patterns.
        def make_replacer(formatter):
            def repl(m):
                nonlocal insertions
                full = m.group(0)
                end = m.end()
                tail = masked[end : end + 80]
                if tail.lstrip().startswith("\x00CIT"):
                    return full
                insertions += 1
                source = formatter(m)
                return full + '<Citation source="' + source.replace('"', "'") + '" />'
            return repl
        for pattern, fmt in PATTERNS:
            masked = pattern.sub(make_replacer(fmt), masked)
        # Restore.
        def restore_cit(m):
            return citation_tags[int(m.group(1))]
        def restore_code(m):
            return inline_code[int(m.group(1))]
        restored = re.sub(r"\x00CIT(\d+)\x00", restore_cit, masked)
        restored = re.sub(r"\x00CODE(\d+)\x00", restore_code, restored)
        out_lines.append(restored)
    
    return "".join(out_lines), insertions


def process_file(path: Path, dry_run: bool) -> tuple[int, str | None]:
    """Returns (insertions, diff_text_if_dry_run)."""
    text = path.read_text(encoding="utf-8")
    fm, body, _ = split_frontmatter(text)
    if not body:
        return 0, None
    new_body, insertions = annotate_body(body)
    if insertions == 0:
        return 0, None
    new_text = fm + new_body if fm else new_body
    if dry_run:
        diff = "".join(
            difflib.unified_diff(
                text.splitlines(keepends=True),
                new_text.splitlines(keepends=True),
                fromfile=str(path),
                tofile=str(path) + " (annotated)",
                n=1,
            )
        )
        return insertions, diff
    path.write_text(new_text, encoding="utf-8")
    return insertions, None


def gather_paths(args) -> list[Path]:
    paths: list[Path] = []
    if args.file:
        paths.append(Path(args.file))
    if args.glob:
        for g in glob_mod.glob(args.glob, recursive=True):
            paths.append(Path(g))
    if args.all:
        for collection in ("admin", "marines", "leader", "commander", "situations", "policies"):
            d = CONTENT / collection
            if not d.is_dir():
                continue
            for entry in sorted(d.iterdir()):
                if entry.suffix == ".mdx" and not entry.name.startswith("."):
                    paths.append(entry)
    return sorted(set(paths))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--file", type=str, help="Single MDX file to annotate.")
    parser.add_argument("--glob", type=str, help="Glob pattern. E.g. 'content/marines/*.mdx'.")
    parser.add_argument("--all", action="store_true", help="Every role MDX file under content/.")
    parser.add_argument("--dry-run", action="store_true", help="Print proposed diffs, do not write.")
    args = parser.parse_args()
    
    paths = gather_paths(args)
    if not paths:
        print("No files matched. Use --file, --glob, or --all.")
        return 2
    
    total_insertions = 0
    files_changed = 0
    diffs: list[str] = []
    for p in paths:
        ins, diff = process_file(p, args.dry_run)
        if ins > 0:
            files_changed += 1
            total_insertions += ins
            if diff:
                diffs.append(diff)
    
    if args.dry_run:
        for d in diffs:
            print(d)
        print()
        print("=" * 80)
        print(f"DRY RUN. Would insert {total_insertions} Citation chips across {files_changed} files.")
    else:
        print(f"Inserted {total_insertions} Citation chips across {files_changed} files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
