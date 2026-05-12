#!/usr/bin/env python3
"""Parse MCAAT CSV checklist into JSON files for inspectionSchema.

Section-aware. Detects audience columns dynamically and treats each
audience column independently. An item appears under every audience
subsection where its audience flag is set or non-empty.

Admin CSVs tag one audience per row (IPAC/REPORTING/SUPPORTING).
Finance CSVs may tag multiple audiences per row (DO/FO/OUTSIDE AGENCY).

Usage:
  python3 parse-mcaat.py <csv-path> <output-dir>
"""
import csv
import json
import re
import sys
from collections import OrderedDict, defaultdict
from pathlib import Path

LAST_VERIFIED = "2026-05-10"

COLUMN_TO_AUDIENCE = {
    "IPAC": "IPAC",
    "REPORTING": "REPORTING",
    "SUPPORTING": "SUPPORTING",
    "DO": "DO",
    "FO": "FO",
    "OUTSIDE AGENCY": "OUTSIDE_AGENCY",
}

AUDIENCE_LABEL = {
    "IPAC": "IPAC",
    "REPORTING": "Reporting Unit",
    "SUPPORTING": "Supporting Unit",
    "DO": "DO",
    "FO": "FO",
    "OUTSIDE_AGENCY": "Outside Agency",
}

AUDIENCE_ID = {
    "IPAC": "01.0",
    "REPORTING": "02.0",
    "SUPPORTING": "03.0",
    "DO": "04.0",
    "FO": "05.0",
    "OUTSIDE_AGENCY": "06.0",
}

AUDIENCE_ORDER = ["IPAC", "REPORTING", "SUPPORTING", "DO", "FO", "OUTSIDE_AGENCY"]

NEGATIVE_FLAGS = {"", "NO", "N", "FALSE", "0"}


def slugify(text):
    text = re.sub(r"\(.*?\)", "", text)
    text = text.replace("&", " and ")
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return text or "untitled"


def title_case_category(text):
    acronyms = {"DTS": "DTS", "MILPAY": "MilPay", "IPAC": "IPAC", "DO": "DO", "FO": "FO"}
    parts = re.split(r"(\s+|/|,|-)", text)
    out = []
    for p in parts:
        upper = p.upper()
        if upper in acronyms:
            out.append(acronyms[upper])
        elif p.isspace() or p in {"/", ",", "-"}:
            out.append(p)
        else:
            out.append(p.title())
    return "".join(out).strip()


def normalize(text):
    return re.sub(r"\s+", " ", (text or "")).strip()



DOC_START = re.compile(
    r"^(MCO|MARADMIN|MCBul|MCBUL|MCBUL\.|DODI|DODD|DODM|DODFMR|DoDFMR|DoD\s|NAVMC|SECNAV|SECNAVINST|SECNAV-M|MCTFSPRIUM|FPM|OPNAVINST|JTR|JFTR|UCMJ|ALMAR|MARDIV|JAGMAN|CFR|USC|MCRP|MCDP|MCWP|TM|NAVPERS|NAVADMIN|FMR|JAGINST|JAGMAN|MARCORSEPMAN|MIL-STD|MIL-HDBK|JTR|JFTR|MARFORRES|MCRP|SOP|MCASOP)",
    re.I,
)


def is_doc_start(token):
    return bool(DOC_START.match(token.strip()))


def carry_forward(parts):
    """Merge continuation fragments into their preceding doc citation."""
    out = []
    for p in parts:
        p = p.strip().rstrip(".")
        if not p:
            continue
        if out and not is_doc_start(p):
            out[-1] = out[-1] + "; " + p
        else:
            out.append(p)
    return out

def split_references(raw):
    if not raw:
        return []
    parts = re.split(r"\s*;\s*", raw.strip())
    return carry_forward(parts)


def get_audiences(row, audience_cols):
    """Return every audience this row applies to. Treats empty, NO, N, etc.
    as negative; any other value (YES, 1, etc.) as positive."""
    out = []
    for col in audience_cols:
        val = (row.get(col, "") or "").strip().upper()
        if val and val not in NEGATIVE_FLAGS:
            out.append(COLUMN_TO_AUDIENCE[col])
    return out


def get_audience_cols(fieldnames):
    return [c for c in COLUMN_TO_AUDIENCE if c in fieldnames]


def applicability_string(audiences_present):
    labels = [AUDIENCE_LABEL[a] for a in audiences_present]
    if not labels:
        return ""
    if len(labels) == 1:
        return labels[0]
    if len(labels) == 2:
        return labels[0] + " and " + labels[1]
    return ", ".join(labels[:-1]) + ", and " + labels[-1]


SECTION_REMAP = {
    "Disbursing": "Finance",
}


def build_records(csv_path, default_publisher):
    rows = list(csv.DictReader(open(csv_path, encoding="cp1252")))
    if not rows:
        return []
    audience_cols = get_audience_cols(rows[0].keys())

    grouped = defaultdict(list)
    for r in rows:
        sec = normalize(r["SECTION"])
        sec = SECTION_REMAP.get(sec, sec)
        cat = normalize(r["CATEGORY"])
        grouped[(sec, cat)].append(r)

    records = []
    for (section, category), items in grouped.items():
        if not section or not category:
            continue
        section_slug = slugify(section)
        category_slug = slugify(category)
        category_label = title_case_category(category)

        # First pass: parse each row once into an item dict with its
        # audience array.
        parsed_items = []
        for r in items:
            audiences = get_audiences(r, audience_cols)
            if not audiences:
                continue
            code = normalize(r.get("#", ""))
            question = normalize(r.get("QUESTION", ""))
            if not question:
                continue
            refs = split_references(r.get("REFERENCE", ""))
            parsed_items.append({
                "code": code,
                "question": question,
                "references": refs,
                "audience": audiences,
            })

        # Second pass: build one subsection per audience present in the
        # parsed items. An item appears in every matching subsection.
        by_audience = OrderedDict()
        for aud in AUDIENCE_ORDER:
            by_audience[aud] = []
        for item in parsed_items:
            for aud in item["audience"]:
                by_audience[aud].append(item)

        subs = []
        audiences_present = []
        for aud in AUDIENCE_ORDER:
            bucket = by_audience.get(aud, [])
            if not bucket:
                continue
            audiences_present.append(aud)
            subs.append({
                "id": AUDIENCE_ID[aud],
                "title": AUDIENCE_LABEL[aud],
                "description": "",
                "items": bucket,
            })

        if not subs:
            continue

        total_unique = len(parsed_items)
        applicability = applicability_string(audiences_present)
        record = {
            "track": "mcaat",
            "programNumber": section_slug,
            "slug": category_slug,
            "section": section,
            "categoryLabel": category_label,
            "title": category_label,
            "summary": "MCAAT " + section + " checklist - " + category_label + ". " + str(total_unique) + " unique items across " + str(len(audiences_present)) + " audiences.",
            "roles": ["admin", "commander"],
            "applicabilityLevel": applicability,
            "lastVerified": LAST_VERIFIED,
            "source": {
                "title": "MCAAT " + section + " Checklist - " + category_label,
                "publisher": default_publisher,
            },
            "subsections": subs,
        }
        records.append(record)
    return records


def main():
    if len(sys.argv) != 3:
        print("Usage: parse-mcaat.py <csv-path> <output-dir>", file=sys.stderr)
        return 2
    csv_path = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)
    records = build_records(csv_path, "Marine Corps Manpower and Reserve Affairs")
    written = []
    for r in records:
        out_path = out_dir / (r["programNumber"] + "-" + r["slug"] + ".json")
        out_path.write_text(json.dumps(r, indent=2, ensure_ascii=False))
        total = sum(len(s["items"]) for s in r["subsections"])
        written.append((out_path.name, len(r["subsections"]), total))
    print("Wrote", len(written), "MCAAT category files")
    for name, subs, total in written:
        print("  OK  " + name + " (" + str(subs) + " subs, " + str(total) + " rendered items)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
