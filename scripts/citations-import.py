#!/usr/bin/env python3
"""
Citation stub scaffolder.

Phase 4 of the centralized citations project. Scans every content collection
for cited parent documents, subtracts entries already authored under
content/citations/, looks up metadata in the policy indexes plus the 68k
manifest, and scaffolds stub MDX files under content/citations/_stubs/<id>.mdx
for human review.

Usage.
  python3 scripts/citations-import.py              # default. Top 50 by usage.
  python3 scripts/citations-import.py --all        # all cited unauthored docs.
  python3 scripts/citations-import.py --limit N    # top N by usage.
  python3 scripts/citations-import.py --type MCO   # only this citation type.
  python3 scripts/citations-import.py --dry-run    # report only, no writes.

Output. Writes stub MDX files plus a manifest at
content/citations/_stubs/_manifest.json. Stephen reviews stubs and moves
keepers into content/citations/. The leading underscore on _stubs/ keeps the
directory out of sync-content scanning.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from datetime import date
from pathlib import Path
from typing import Iterable

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
INDEXES = CONTENT / "inspections" / "_policy-indexes"
REF_LINKS_PATH = CONTENT / "inspections" / "_reference-links.json"
OVERRIDES_PATH = CONTENT / "inspections" / "_reference-link-overrides.json"
CITATIONS_DIR = CONTENT / "citations"
STUBS_DIR = CITATIONS_DIR / "_stubs"

TODAY = date.today().isoformat()


# Reuse the canonical-parent normalization from citations-frequency.py.
PATTERNS = [
    (re.compile(r"\bMARADMIN\s+(\d+/\d+)\b", re.IGNORECASE), "MARADMIN", lambda m: "MARADMIN " + m.group(1)),
    (re.compile(r"\bALMAR\s+(\d+/\d+)\b", re.IGNORECASE), "ALMAR", lambda m: "ALMAR " + m.group(1)),
    (re.compile(r"\bALNAV\s+(\d+/\d+)\b", re.IGNORECASE), "ALNAV", lambda m: "ALNAV " + m.group(1)),
    (
        re.compile(
            r"\b(?:DOD\s*FMR|DoD\s*FMR|DoDFMR|DOD\s+7000\.14-?R|DoD\s+7000\.14-?R)\b"
            r"(?:.*?(?:Volume|Vol\.?)\s*(\d+[A-Z]?))?",
            re.IGNORECASE,
        ),
        "DODFMR",
        lambda m: "DODFMR Vol " + m.group(1) if m.group(1) else "DODFMR",
    ),
    (
        re.compile(r"\b(?:DODI|DoDI|DOD\s*Instruction|DoD\s*Instruction)\s+(\d+\.\d+[A-Z]?)\b", re.IGNORECASE),
        "DODI",
        lambda m: "DODI " + m.group(1),
    ),
    (
        re.compile(r"\b(?:DODD|DoDD|DOD\s*Directive)\s+(\d+\.\d+[A-Z]?)\b", re.IGNORECASE),
        "DODD",
        lambda m: "DODD " + m.group(1),
    ),
    (
        re.compile(r"\b(?:DODM|DoDM|DOD\s*Manual)\s+(\d+\.\d+[A-Z]?)\b", re.IGNORECASE),
        "DODM",
        lambda m: "DODM " + m.group(1),
    ),
    (
        re.compile(r"\bMCO\s+(P?\d+[A-Z]?(?:\.\d+)?[A-Z]?)(?:\s+Vol\s*(\d+[A-Z]?))?", re.IGNORECASE),
        "MCO",
        lambda m: "MCO " + m.group(1).upper() + (" Vol " + m.group(2) if m.group(2) else ""),
    ),
    (re.compile(r"\bSECNAVINST\s+(\d+\.\d+[A-Z]?)\b", re.IGNORECASE), "SECNAVINST", lambda m: "SECNAVINST " + m.group(1)),
    (re.compile(r"\bSECNAV\s+M-(\d+\.\d+)\b", re.IGNORECASE), "SECNAV", lambda m: "SECNAV M-" + m.group(1)),
    (re.compile(r"\bSECNAV\s+(\d+\.\d+[A-Z]?)\b", re.IGNORECASE), "SECNAV", lambda m: "SECNAV " + m.group(1)),
    (re.compile(r"\bJAGINST\s+(\d+\.\d+[A-Z]?)\b", re.IGNORECASE), "JAGINST", lambda m: "JAGINST " + m.group(1)),
    (re.compile(r"\bNAVMC\s+(\d+[A-Z]?)\b", re.IGNORECASE), "NAVMC", lambda m: "NAVMC " + m.group(1)),
    (re.compile(r"\bTitle\s+(\d+)\s+U\.?S\.?C\.?\s*(?:section\s+|sec\.?\s+|§\s*)?(\d+)?", re.IGNORECASE), "OTHER",
        lambda m: m.group(1) + " USC " + m.group(2) if m.group(2) else m.group(1) + " USC"),
    (re.compile(r"\b(\d+)\s+U\.?S\.?C\.?\s+(\d+)\b", re.IGNORECASE), "OTHER", lambda m: m.group(1) + " USC " + m.group(2)),
    (re.compile(r"\bDD\s+Form\s+(\d+(?:-\d+)?)", re.IGNORECASE), "DD-FORM", lambda m: "DD Form " + m.group(1)),
    (re.compile(r"\bMCBUL\s+(\d+[A-Z]?)", re.IGNORECASE), "OTHER", lambda m: "MCBUL " + m.group(1)),
    (re.compile(r"\bMARCORSEPMAN\b", re.IGNORECASE), "OTHER", lambda m: "MARCORSEPMAN"),
    (re.compile(r"\bMCRAMM\b", re.IGNORECASE), "OTHER", lambda m: "MCRAMM"),
    (re.compile(r"\bMCTFSPRIUM\b", re.IGNORECASE), "MCTFSPRIUM", lambda m: "MCTFSPRIUM"),
    (re.compile(r"\bIRAM\b", re.IGNORECASE), "OTHER", lambda m: "IRAM"),
    (re.compile(r"\bJAGMAN\b", re.IGNORECASE), "OTHER", lambda m: "JAGMAN"),
    (re.compile(r"\bMCM\b", re.IGNORECASE), "OTHER", lambda m: "MCM"),
    (re.compile(r"\bJTR\b", re.IGNORECASE), "OTHER", lambda m: "JTR"),
    (re.compile(r"\bFPM\s+Vol\.?\s*(\d+)(?:\s+Ch\.?\s+(\d+))?", re.IGNORECASE), "FPM",
        lambda m: "FPM Vol " + m.group(1)),
]


def classify(citation: str) -> tuple[str | None, str | None]:
    text = citation.strip()
    if not text:
        return None, None
    for pattern, ctype, fmt in PATTERNS:
        m = pattern.search(text)
        if m:
            return fmt(m), ctype
    return None, None


def slugify(canonical: str) -> str:
    s = canonical.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s


def split_compound(citation: str) -> list[str]:
    return [p for p in re.split(r"[;]\s*", citation) if p.strip()]


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


def scan_content_for_parents() -> tuple[Counter, dict[str, str]]:
    """Returns (frequency counter keyed by canonical, type per canonical)."""
    counts: Counter = Counter()
    types: dict[str, str] = {}
    samples: dict[str, str] = {}
    for collection in ("admin", "marines", "leader", "commander"):
        d = CONTENT / collection
        if not d.is_dir():
            continue
        for entry in d.iterdir():
            if entry.suffix != ".mdx":
                continue
            for ref in yaml_references(entry.read_text(encoding="utf-8")):
                for piece in split_compound(ref):
                    canonical, ctype = classify(piece)
                    if canonical:
                        counts[canonical] += 1
                        types[canonical] = ctype or "OTHER"
                        samples.setdefault(canonical, piece)
    for track in ("igmc", "mcaat"):
        td = CONTENT / "inspections" / track
        if not td.is_dir():
            continue
        for entry in td.iterdir():
            if entry.suffix != ".json" or entry.name.startswith("_"):
                continue
            data = json.loads(entry.read_text(encoding="utf-8"))
            for sub in data.get("subsections", []):
                for item in sub.get("items", []):
                    for ref in item.get("references", []) or []:
                        for piece in split_compound(ref):
                            canonical, ctype = classify(piece)
                            if canonical:
                                counts[canonical] += 1
                                types[canonical] = ctype or "OTHER"
                                samples.setdefault(canonical, piece)
    return counts, types


def authored_ids() -> set[str]:
    ids: set[str] = set()
    if not CITATIONS_DIR.is_dir():
        return ids
    for entry in CITATIONS_DIR.iterdir():
        if entry.suffix == ".mdx" and not entry.name.startswith("_") and not entry.name.startswith("."):
            stem = entry.stem
            ids.add(stem)
            # Also harvest the actual id field from frontmatter.
            try:
                text = entry.read_text(encoding="utf-8")
                m = re.search(r'^id:\s*"?([a-z0-9-]+)"?\s*$', text, re.MULTILINE)
                if m:
                    ids.add(m.group(1))
            except OSError:
                pass
    return ids


def load_reference_links() -> dict[str, str]:
    if not REF_LINKS_PATH.is_file():
        return {}
    return json.loads(REF_LINKS_PATH.read_text(encoding="utf-8"))


def normalize_alias_key(s: str) -> str:
    text = str(s).upper()
    text = re.sub(
        r"\b(VOL|VOLS|CH|CHAP|CHAPTER|SEC|SECT|SECTION|PAR|PARA|PARAGRAPH|ENCL|ENCLOSURE|APP|APPENDIX|ART|ARTICLE)\.",
        r"\1 ",
        text,
    )
    text = text.replace(",", " ")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def lookup_url(canonical: str, ref_links: dict[str, str]) -> str | None:
    key = normalize_alias_key(canonical)
    if key in ref_links:
        return ref_links[key]
    # Tolerant fallbacks. Strip leading "MCO P" prefix, try with and without trailing letter.
    return None


def load_index(name: str) -> dict:
    p = INDEXES / name
    if not p.is_file():
        return {}
    return json.loads(p.read_text(encoding="utf-8"))


@dataclass
class Stub:
    id: str
    canonical: str
    ctype: str
    title: str
    number: str
    publisher: str
    external_url: str | None
    aliases: list[str] = field(default_factory=list)
    usage: int = 0


def metadata_for_maradmin(canonical: str, idx: dict) -> dict | None:
    m = re.match(r"MARADMIN\s+(\d+/\d+)", canonical)
    if not m:
        return None
    num = m.group(1)
    entry = idx.get("downloaded", {}).get(num)
    if not entry:
        return None
    return {
        "title": entry.get("title", canonical),
        "publisher": "Headquarters Marine Corps",
        "url": entry.get("url"),
        "number": num,
    }


def metadata_for_almar(canonical: str, idx: dict) -> dict | None:
    m = re.match(r"ALMAR\s+(\d+/\d+)", canonical)
    if not m:
        return None
    num = m.group(1)
    entry = idx.get("downloaded", {}).get(num)
    if not entry:
        return None
    return {
        "title": entry.get("title", canonical),
        "publisher": "Headquarters Marine Corps",
        "url": entry.get("url"),
        "number": num,
    }


def metadata_for_alnav(canonical: str, idx: dict) -> dict | None:
    m = re.match(r"ALNAV\s+(\d+/\d+)", canonical)
    if not m:
        return None
    num = m.group(1)
    entry = idx.get("downloaded", {}).get(num)
    if not entry:
        return None
    return {
        "title": entry.get("title", canonical),
        "publisher": "Secretary of the Navy",
        "url": entry.get("pdf_url"),
        "number": num,
    }


def metadata_for_secnav(canonical: str, idx: dict) -> dict | None:
    m = re.match(r"SECNAVINST?\s+M?-?(\S+)", canonical)
    if not m:
        return None
    num = m.group(1)
    entry = idx.get("downloaded", {}).get(num)
    if not entry:
        return None
    return {
        "title": entry.get("subject", canonical),
        "publisher": entry.get("sponsor", "Secretary of the Navy"),
        "url": entry.get("pdf_url"),
        "number": num,
    }


def metadata_for_dodfmr(canonical: str, idx: dict) -> dict | None:
    m = re.match(r"DODFMR\s+Vol\s+(\d+[A-Z]?)", canonical)
    if not m:
        return None
    vol = m.group(1)
    vol_zfill = vol.zfill(2) if vol[:-1].isdigit() else vol
    chapters = [
        v for k, v in idx.get("downloaded", {}).items()
        if v.get("volume_id", "").lower() == vol.lower() or v.get("volume_id", "").lower() == vol_zfill.lower()
    ]
    if not chapters:
        return None
    title = chapters[0].get("volume_title", canonical)
    # Build the volume landing page URL from the chapter PDF prefix.
    first_pdf = chapters[0].get("pdf_url", "")
    landing = re.sub(r"/[^/]+\.pdf$", "/", first_pdf) if first_pdf else None
    return {
        "title": "DOD Financial Management Regulation, Volume " + vol + " - " + title,
        "publisher": "Office of the Under Secretary of Defense (Comptroller)",
        "url": landing,
        "number": "7000.14-R Vol " + vol,
    }


def metadata_for_mco(canonical: str, mcpel: dict) -> dict | None:
    m = re.match(r"MCO\s+(P?\S+?)(?:\s+Vol\s+(\d+[A-Z]?))?$", canonical)
    if not m:
        return None
    num = m.group(1)
    # mcpel groups MCOs under the "MCO" category.
    mco_index = mcpel.get("MCO", {}).get("downloaded", {})
    # Try exact, space-suffix, and stripped revision letter forms.
    candidates = [
        "MCO " + num,
        "MCO " + num + " A",
        "MCO " + num + " B",
        "MCO " + num + " C",
        "MCO " + num + " D",
        "MCO " + num + " E",
        "MCO " + num + " F",
        "MCO " + re.sub(r"[A-Z]$", "", num),
    ]
    found = None
    for c in candidates:
        if c in mco_index:
            found = mco_index[c]
            break
    if not found:
        # Try fuzzy.
        for key, val in mco_index.items():
            if num.upper() in key.upper():
                found = val
                break
    if not found:
        return None
    return {
        "title": "MCO " + num + " - " + found.get("summary", "")[:140].title(),
        "publisher": "Headquarters Marine Corps",
        "url": found.get("pdf_url") or found.get("detail_url"),
        "number": num,
    }


def build_aliases(canonical: str, ctype: str) -> list[str]:
    aliases = [canonical]
    if ctype == "MCO":
        m = re.match(r"MCO\s+(\S+)", canonical)
        if m:
            num = m.group(1)
            if num.startswith("P"):
                aliases.append("MCO " + num[1:])
            else:
                aliases.append("MCO P" + num)
    if ctype == "DODFMR":
        m = re.match(r"DODFMR\s+Vol\s+(\d+[A-Z]?)", canonical)
        if m:
            vol = m.group(1)
            aliases += [
                f"DoD FMR Vol {vol}",
                f"DoDFMR Vol {vol}",
                f"DOD FMR Volume {vol}",
                f"DoD FMR Volume {vol}",
                f"DOD FMR 7000.14-R Volume {vol}",
                f"DoD 7000.14-R Volume {vol}",
                f"DODFMR Volume {vol}",
            ]
    if ctype == "MARADMIN":
        m = re.match(r"MARADMIN\s+(\d+)/(\d+)", canonical)
        if m:
            num, yr = m.group(1), m.group(2)
            aliases.append(f"MARADMIN {num}-{yr}")
    return sorted(set(aliases))


ROLE_MAP_BY_TYPE = {
    "MCO": ["marine", "leader", "commander", "admin"],
    "MARADMIN": ["admin", "leader"],
    "ALMAR": ["admin", "leader", "commander"],
    "ALNAV": ["admin", "commander"],
    "DODFMR": ["marine", "leader", "commander", "admin"],
    "DODI": ["commander", "admin"],
    "DODD": ["commander", "admin"],
    "DODM": ["commander", "admin"],
    "SECNAV": ["commander", "admin"],
    "SECNAVINST": ["commander", "admin"],
    "JAGINST": ["commander", "admin"],
    "NAVMC": ["admin"],
    "NAVMC-FORM": ["admin"],
    "DD-FORM": ["admin"],
    "MCTFSPRIUM": ["admin"],
    "FPM": ["admin"],
    "FAC": ["admin"],
    "OTHER": ["admin"],
}


def infer_roles(ctype: str) -> list[str]:
    return ROLE_MAP_BY_TYPE.get(ctype, ["admin"])


def build_stub_mdx(stub: Stub) -> str:
    body_lines = [
        "---",
        f'id: "{stub.id}"',
        "aliases:",
    ]
    for a in stub.aliases:
        body_lines.append(f'  - {json.dumps(a)}')
    body_lines += [
        f'title: {json.dumps(stub.title)}',
        f'type: "{stub.ctype}"',
        f'number: {json.dumps(stub.number)}',
        f'publisher: {json.dumps(stub.publisher)}',
        f'lastVerified: "{TODAY}"',
    ]
    if stub.external_url:
        body_lines.append(f'externalUrl: {json.dumps(stub.external_url)}')
    roles = infer_roles(stub.ctype)
    body_lines.append("roles: " + json.dumps(roles))
    body_lines.append("---")
    body_lines.append("")
    body_lines.append("## Stub")
    body_lines.append("")
    body_lines.append(
        f"Imported by scripts/citations-import.py. Cited by {stub.usage} pages in the portal. "
        "Review the metadata, expand aliases, and set the roles before merging this entry into "
        "content/citations/."
    )
    body_lines.append("")
    return "\n".join(body_lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Scaffold citation stubs from policy indexes.")
    parser.add_argument("--all", action="store_true", help="Scaffold every cited unauthored doc.")
    parser.add_argument("--limit", type=int, default=50, help="Top N by usage. Default 50.")
    parser.add_argument("--type", type=str, default=None, help="Filter to one citation type.")
    parser.add_argument("--dry-run", action="store_true", help="Report only, no writes.")
    args = parser.parse_args()

    counts, types = scan_content_for_parents()
    have = authored_ids()
    ref_links = load_reference_links()

    indexes = {
        "maradmin": load_index("maradmin_index.json"),
        "almar": load_index("almar_index.json"),
        "alnav": load_index("alnav_index.json"),
        "secnav": load_index("secnav_index.json"),
        "dodfmr": load_index("dodfmr_index.json"),
        "mcpel": load_index("mcpel_index.json"),
    }

    candidates = []
    for canonical, count in counts.most_common():
        ctype = types[canonical]
        if args.type and ctype != args.type:
            continue
        sid = slugify(canonical)
        if sid in have:
            continue
        candidates.append((canonical, ctype, count, sid))

    if not args.all:
        candidates = candidates[: args.limit]

    stubs: list[Stub] = []
    no_metadata: list[tuple[str, str, int]] = []

    for canonical, ctype, count, sid in candidates:
        meta = None
        if ctype == "MARADMIN":
            meta = metadata_for_maradmin(canonical, indexes["maradmin"])
        elif ctype == "ALMAR":
            meta = metadata_for_almar(canonical, indexes["almar"])
        elif ctype == "ALNAV":
            meta = metadata_for_alnav(canonical, indexes["alnav"])
        elif ctype in ("SECNAV", "SECNAVINST"):
            meta = metadata_for_secnav(canonical, indexes["secnav"])
        elif ctype == "DODFMR":
            meta = metadata_for_dodfmr(canonical, indexes["dodfmr"])
        elif ctype == "MCO":
            meta = metadata_for_mco(canonical, indexes["mcpel"])

        url_fallback = lookup_url(canonical, ref_links)
        if meta:
            title = meta["title"]
            publisher = meta["publisher"]
            url_raw = meta.get("url") or url_fallback
            url = url_raw if (url_raw and isinstance(url_raw, str) and url_raw.startswith(("http://", "https://"))) else None
            number = meta["number"]
        elif url_fallback:
            title = canonical
            publisher = "Headquarters Marine Corps"
            url = url_fallback if (isinstance(url_fallback, str) and url_fallback.startswith(("http://", "https://"))) else None
            number = canonical.split(" ", 1)[1] if " " in canonical else canonical
        else:
            no_metadata.append((canonical, ctype, count))
            continue

        stubs.append(
            Stub(
                id=sid,
                canonical=canonical,
                ctype=ctype,
                title=title or canonical,
                number=number or canonical,
                publisher=publisher or "Headquarters Marine Corps",
                external_url=url,
                aliases=build_aliases(canonical, ctype),
                usage=count,
            )
        )

    print("=" * 80)
    print("CITATION IMPORT")
    print("=" * 80)
    print()
    print(f"Cited unique parent docs: {len(counts)}")
    print(f"Already authored: {len(have)}")
    print(f"Candidates after type filter and limit: {len(candidates)}")
    print(f"Stubs with metadata: {len(stubs)}")
    print(f"Candidates with no metadata: {len(no_metadata)}")
    print()
    by_type: Counter = Counter()
    for s in stubs:
        by_type[s.ctype] += 1
    print("Stubs by type:")
    for k, v in sorted(by_type.items(), key=lambda kv: -kv[1]):
        print(f"  {k:<14} {v}")
    print()

    if args.dry_run:
        print("Dry run. Top 15 stubs that would be written.")
        for s in stubs[:15]:
            print(f"  {s.usage:>3}  {s.canonical:<35}  -> {s.id}")
        if no_metadata:
            print()
            print("Top 15 with no metadata source.")
            for c, t, n in no_metadata[:15]:
                print(f"  {n:>3}  [{t:<10}] {c}")
        return 0

    STUBS_DIR.mkdir(parents=True, exist_ok=True)
    written = 0
    for s in stubs:
        path = STUBS_DIR / f"{s.id}.mdx"
        path.write_text(build_stub_mdx(s), encoding="utf-8")
        written += 1
    manifest = {
        "generatedAt": TODAY,
        "stubs": [
            {
                "id": s.id,
                "canonical": s.canonical,
                "type": s.ctype,
                "title": s.title,
                "publisher": s.publisher,
                "externalUrl": s.external_url,
                "usage": s.usage,
            }
            for s in stubs
        ],
        "noMetadata": [
            {"canonical": c, "type": t, "usage": n} for c, t, n in no_metadata
        ],
    }
    (STUBS_DIR / "_manifest.json").write_text(
        json.dumps(manifest, indent=2), encoding="utf-8"
    )
    print(f"Wrote {written} stubs to {STUBS_DIR.relative_to(ROOT)}/.")
    print(f"Manifest at {(STUBS_DIR / '_manifest.json').relative_to(ROOT)}.")
    print()
    print("Next. Review each stub. Move the keepers into content/citations/.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
