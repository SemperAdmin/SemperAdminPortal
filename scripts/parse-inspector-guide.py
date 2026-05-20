"""
Parse a REBUILT inspector guide DOCX into the inspectorGuideSchema JSON shape.

The REBUILT guides follow a strict template authored by the SME. Each question
block starts with a header line of the form:

    QUESTION 0xxx - TITLE

Followed by labeled sections in fixed order:

    CHECKLIST QUESTION:
    REFERENCES:
    REGULATORY REQUIREMENT:
    INSPECTOR NOTES - HOW TO INSPECT:
    INSPECTOR QUESTIONS TO ASK:
    VERIFICATION CHECKLIST:

The parser is line-oriented. It walks paragraphs, swaps state on label hits,
and accumulates content into the active question. Output is emitted as
content/inspections/igmc-guides/<faNumber>.json, validated downstream by
inspectorGuideSchema in sync.

Usage:
    python scripts/parse-inspector-guide.py <fa_number> <docx_path>
"""
import json
import re
import sys
from pathlib import Path

from docx import Document

QUESTION_HEADER = re.compile(r"^QUESTION\s+(0\d{3})\s*-\s*(.+)$")
LABEL_LINES = {
    "CHECKLIST QUESTION:",
    "REFERENCES:",
    "REGULATORY REQUIREMENT:",
    "INSPECTOR NOTES - HOW TO INSPECT:",
    "INSPECTOR QUESTIONS TO ASK:",
    "VERIFICATION CHECKLIST:",
}
NUMBERED_STEP = re.compile(r"^(?:-\s+)?(\d+)\.\s+(.+?):?\s*$")
QUOTE_LINE = re.compile(r"^Per\s+(.+?):\s*[\"“](.+?)[\"”]\s*$")
BULLET = re.compile(r"^-\s+(.+)$")
CALLOUT_TAIL = re.compile(r"^(.*):\s*(FINDING|DISCREPANCY|COMPLIANT)\s*$")
CHECKBOX = re.compile(r"^[☐□\[]\s*\]?\s*(.+)$")
QUOTED_ASK = re.compile(r"^[\"“](.+?)[\"”]\??$")
# Multi-paragraph quote: lead-in line "Per <cite>:" with no quote text, then
# subsequent paragraphs each containing a quoted excerpt that all belong to
# the same citation. Legal Admin uses this pattern.
PER_LEADIN = re.compile(r"^Per\s+(.+?):\s*$")
QUOTED_ONLY = re.compile(r"^[\"“](.+?)[\"”]\s*$")

SEVERITY_MAP = {
    "FINDING": "finding",
    "DISCREPANCY": "discrepancy",
    "COMPLIANT": "compliant",
}


def parse_doc(path: Path) -> dict:
    doc = Document(str(path))
    items: dict[str, dict] = {}
    state = None
    current_code: str | None = None
    current_step: dict | None = None
    pending_citation: str | None = None

    def ensure_item(code: str, title: str) -> dict:
        if code not in items:
            items[code] = {
                "title": title.strip(),
                "regulatory": {"quotes": [], "summary": ""},
                "howToInspect": [],
                "questionsToAsk": [],
                "verification": [],
                "verified": True,
            }
        return items[code]

    summary_lines: list[str] = []

    def flush_summary() -> None:
        nonlocal summary_lines
        if current_code is None or not summary_lines:
            summary_lines = []
            return
        text = " ".join(s.strip() for s in summary_lines if s.strip())
        if text:
            items[current_code]["regulatory"]["summary"] = text
        summary_lines = []

    for para in doc.paragraphs:
        # Normalize soft line breaks inside a paragraph. Word ships Shift+Enter
        # as a U+000A inside the same paragraph, which prevents single-line
        # regexes (Per quote, callout suffix) from matching. Collapse to spaces.
        line = re.sub(r"\s+", " ", para.text.replace("\n", " ").replace("\r", " ")).strip()
        if not line:
            continue

        # New question block.
        m = QUESTION_HEADER.match(line)
        if m:
            flush_summary()
            current_code = m.group(1)
            ensure_item(current_code, m.group(2))
            state = None
            current_step = None
            pending_citation = None
            continue

        if current_code is None:
            continue

        # Section label switch.
        if line in LABEL_LINES:
            flush_summary()
            state = line
            current_step = None
            continue

        item = items[current_code]

        if state == "REGULATORY REQUIREMENT:":
            q = QUOTE_LINE.match(line)
            if q:
                flush_summary()
                pending_citation = None
                item["regulatory"]["quotes"].append(
                    {"citation": q.group(1).strip(), "text": q.group(2).strip()}
                )
                continue
            lead = PER_LEADIN.match(line)
            if lead:
                flush_summary()
                pending_citation = lead.group(1).strip()
                continue
            qo = QUOTED_ONLY.match(line)
            if qo and pending_citation:
                flush_summary()
                item["regulatory"]["quotes"].append(
                    {"citation": pending_citation, "text": qo.group(1).strip()}
                )
                continue
            summary_lines.append(line)
            continue

        if state == "INSPECTOR NOTES - HOW TO INSPECT:":
            num = NUMBERED_STEP.match(line)
            if num:
                current_step = {
                    "step": num.group(2).strip(),
                    "actions": [],
                }
                item["howToInspect"].append(current_step)
                continue
            b = BULLET.match(line)
            if b and current_step is not None:
                body = b.group(1).strip()
                callout = CALLOUT_TAIL.match(body)
                if callout:
                    sev = SEVERITY_MAP.get(callout.group(2).upper(), "discrepancy")
                    current_step["callout"] = callout.group(1).strip()
                    current_step["severity"] = sev
                else:
                    current_step["actions"].append(body)
                continue
            # Inline checkbox sub-bullet under the current step.
            cb = CHECKBOX.match(line)
            if cb and current_step is not None:
                body = cb.group(1).strip()
                if body and not re.fullmatch(r"[_\s]+", body):
                    current_step["actions"].append(body)
            continue

        if state == "INSPECTOR QUESTIONS TO ASK:":
            b = BULLET.match(line)
            if b:
                body = b.group(1).strip()
                q = QUOTED_ASK.match(body)
                item["questionsToAsk"].append(q.group(1).strip() if q else body)
            continue

        if state == "VERIFICATION CHECKLIST:":
            c = CHECKBOX.match(line)
            if c:
                body = c.group(1).strip()
                # Drop blank free-form template lines like "_______".
                if body and not re.fullmatch(r"[_\s]+", body):
                    item["verification"].append(body)
            continue

    flush_summary()
    return items


def main() -> None:
    if len(sys.argv) != 3:
        print("usage: parse-inspector-guide.py <fa_number> <docx_path>", file=sys.stderr)
        sys.exit(2)
    fa_number = sys.argv[1]
    docx_path = Path(sys.argv[2])
    items = parse_doc(docx_path)

    out_path = Path(__file__).resolve().parent.parent / "content" / "inspections" / "igmc-guides" / f"{fa_number}.json"
    payload = {
        "faNumber": fa_number,
        "sourceDoc": docx_path.name,
        "lastVerified": "2026-05-20",
        "verifiedAtSource": True,
        "items": items,
    }
    out_path.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {out_path} with {len(items)} items")


if __name__ == "__main__":
    main()
