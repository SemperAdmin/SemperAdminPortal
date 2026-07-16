#!/usr/bin/env python3
"""Citation index depth and structure scorer.

Scores every entry under content/citations/ against the body standard,
joins cited-by counts from src/generated/citations-reverse.json, and
rewrites audit/citations-index-content-audit.json.

Run npm run content:sync first so the reverse index is current, then:
    python scripts/citations-score.py

Tiers. B-thin under 120 body words, C-partial 120 to 249, D-full 250 up,
A-placeholder when scaffold markers appear in a body. Hidden entries score
but are excluded from the needs-work rollup. By-design patterns (LSAM
volume entries, MCTFSPRIUM children, FPM volumes, revision locators under
100 words) are reported separately, short is correct for them.
"""

import os
import re
import json
import glob
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECTION_KEYS = {
    "scope": r"^## (Scope|What this (order|volume|form|bulletin) is)",
    "audience": r"^## Audience",
    "map": r"^## (Enclosure|Chapter|Operative|Content scope|Volume|Section|Stated purpose|Part map|Structure|Action items|Key (details|items|chapters)|Purpose)",
    "connections": r"^## Connection",
    "status": r"^## (Status|Access)",
}

BY_DESIGN_PREFIXES = ("mctfsprium", "mco-5800-16-vol", "fpm")


def parse(path):
    raw = open(path, encoding="utf-8").read().replace("\r\n", "\n")
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", raw, re.S)
    return (m.group(1), m.group(2)) if m else (None, raw)


def main():
    rev_path = os.path.join(ROOT, "src/generated/citations-reverse.json")
    cited = {}
    if os.path.exists(rev_path):
        rev = json.load(open(rev_path))
        cited = {k: len(v) for k, v in rev.items()}
    else:
        print("WARN reverse index missing, run npm run content:sync first")

    rows = []
    for path in sorted(glob.glob(os.path.join(ROOT, "content/citations/*.mdx"))):
        fm, body = parse(path)
        slug = os.path.basename(path)[:-4]
        words = len(body.split())
        hidden = bool(re.search(r"^hidden:\s*true", fm or "", re.M))
        typ = (re.search(r'^type:\s*"?([^"\n]+)"?', fm or "", re.M) or [None, "?"])[1].strip()
        title = (re.search(r'^title:\s*"?([^"\n]+)"?', fm or "", re.M) or [None, "?"])[1].strip()
        placeholder = bool(re.search(r"Scaffolded|citations-import\.py", body))
        ext = bool(re.search(r"^externalUrl:", fm or "", re.M))
        eff = bool(re.search(r"^effectiveDate:", fm or "", re.M))
        missing = [k for k, pat in SECTION_KEYS.items() if not re.search(pat, body, re.M | re.I)]
        if placeholder:
            tier = "A-placeholder"
        elif words < 120:
            tier = "B-thin"
        elif words < 250:
            tier = "C-partial"
        else:
            tier = "D-full"
        rows.append(dict(slug=slug, title=title, type=typ, tier=tier, words=words,
                         citedBy=cited.get(slug, 0), hidden=hidden,
                         hasExternalUrl=ext, hasEffectiveDate=eff,
                         missingSections=missing))

    vis = [r for r in rows if not r["hidden"]]
    work = [r for r in vis if r["tier"] in ("A-placeholder", "B-thin", "C-partial")]
    by_design = [r for r in work
                 if r["slug"].startswith(BY_DESIGN_PREFIXES) or r["words"] < 100]
    genuine = [r for r in work if r not in by_design]
    structural = [r for r in vis if r["tier"] == "D-full"
                  and len(r["missingSections"]) >= 3
                  and not r["slug"].startswith(BY_DESIGN_PREFIXES)]
    no_eff = [r for r in vis if not r["hasEffectiveDate"]]

    print("visible tiers:", dict(sorted(Counter(r["tier"] for r in vis).items())))
    print("needs-work:", len(work), "links:", sum(r["citedBy"] for r in work))
    print("of which by-design:", len(by_design))
    print("genuine remainder:", len(genuine), sorted(r["slug"] for r in genuine))
    print("D-full missing 3+ sections (non-pattern):", len(structural),
          sorted(r["slug"] for r in structural))
    print("visible entries missing effectiveDate:", len(no_eff))

    out = os.path.join(ROOT, "audit/citations-index-content-audit.json")
    import datetime
    json.dump({"generated": datetime.date.today().isoformat(),
               "totalEntries": len(rows), "visibleEntries": len(vis),
               "tierRule": {"B-thin": "body under 120 words",
                             "C-partial": "120 to 249 words",
                             "D-full": "250 words or more"},
               "entries": rows}, open(out, "w"), indent=1)
    print("wrote", os.path.relpath(out, ROOT))


if __name__ == "__main__":
    main()
