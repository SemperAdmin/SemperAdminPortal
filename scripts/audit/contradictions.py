"""Cross-page contradiction finder. Groups topic plus number hits across content pages.

Run: python -I scripts/audit/contradictions.py
Writes audit/2026-11-14-claims/contradictions.json: [{topic, values:{value:[page:line]}}].
Topics that legitimately vary by rate (BAH, MALT by year) show as noise. Triage by hand.
"""
import json, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent
CONTENT = REPO / "content"
OUT = REPO / "audit" / "2026-11-14-claims" / "contradictions.json"
SKIP_DIRS = {"videos", "_stubs", "_policy-indexes", "inspections", "updates", "citations"}

# topic name -> regex over lowercased text. Longer phrases first so the specific topic wins.
LEXICON = [
    ("parental leave", r"parental leave|maternity leave|primary caregiver leave|secondary caregiver leave"),
    ("convalescent", r"convalescent"),
    ("terminal leave", r"terminal leave"),
    ("sell-back", r"sell-?back|sell back"),
    ("retirement points", r"retirement points?"),
    ("leave days", r"leave days?|days of leave|annual leave|leave accrual"),
    ("bah", r"\bbah\b|basic allowance for housing"),
    ("bas", r"\bbas\b|basic allowance for subsistence"),
    ("fsa", r"\bfsa\b|family separation allowance"),
    ("malt", r"\bmalt\b|monetary allowance in lieu of transportation"),
    ("dla", r"\bdla\b|dislocation allowance"),
    ("hfp", r"\bhfp\b|hostile fire pay"),
    ("idp", r"\bidp\b|imminent danger pay"),
    ("srb", r"\bsrb\b|selective retention bonus"),
    ("tle", r"\btle\b|temporary lodging expense"),
    ("ptad", r"\bptad\b|permissive temporary additional duty"),
    ("idt", r"\bidt\b|inactive duty training"),
    ("bcp", r"\bbcp\b|body composition program"),
    ("whtr", r"\bwhtr\b|waist-to-height"),
    ("pft", r"\bpft\b|physical fitness test"),
    ("cft", r"\bcft\b|combat fitness test"),
]
LEX = [(t, re.compile(p)) for t, p in LEXICON]

NUM = re.compile(
    r"(?P<usd>\$\s?\d[\d,]*(?:\.\d+)?)"
    r"|(?P<n>\d[\d,]*(?:\.\d+)?)\s*(?P<unit>%|percent|days?|weeks?|months?|years?)\b", re.I)
WORD = re.compile(r"\S+")
WINDOW = 12


def _norm_value(m) -> str:
    if m.group("usd"):
        return "$" + m.group("usd").lstrip("$").strip().replace(",", "")
    n = m.group("n").replace(",", "")
    unit = m.group("unit").lower()
    if unit in ("%", "percent"):
        return f"{n}%"
    return f"{n} {unit.rstrip('s')}s"


SENT = re.compile(r"(?<=[.!?])\s+(?=[A-Za-z$(])")


def topic_hits(line: str) -> list[tuple[str, str]]:
    """Each topic mention paired with the nearest number within 12 words, inside one sentence."""
    out = []
    for sent in SENT.split(line):
        out += _sentence_hits(sent)
    return out


def _sentence_hits(line: str) -> list[tuple[str, str]]:
    low = line.lower()
    words = [(m.start(), m.end()) for m in WORD.finditer(low)]

    def widx(pos):
        for i, (s, e) in enumerate(words):
            if pos < e:
                return i
        return len(words) - 1
    nums = [(widx(m.start()), m) for m in NUM.finditer(low)]
    hits, used = [], []
    for topic, rx in LEX:
        for tm in rx.finditer(low):
            if any(s <= tm.start() < e for s, e in used):
                continue  # a longer topic phrase already claimed this span
            used.append((tm.start(), tm.end()))
            ti = widx(tm.start())
            near = [(abs(i - ti), m.start(), m) for i, m in nums if abs(i - ti) <= WINDOW]
            if near:
                hits.append((topic, _norm_value(min(near, key=lambda t: (t[0], t[1]))[2])))
    return hits


def find_contradictions(pages: dict[str, str]) -> list[dict]:
    by_topic: dict[str, dict[str, list[str]]] = {}
    for page, text in pages.items():
        for n, line in enumerate(text.splitlines(), 1):
            for topic, value in topic_hits(line):
                locs = by_topic.setdefault(topic, {}).setdefault(value, [])
                loc = f"{page}:{n}"
                if loc not in locs:
                    locs.append(loc)
    return [{"topic": t, "values": by_topic[t]} for t in sorted(by_topic) if len(by_topic[t]) > 1]


def load_pages() -> dict[str, str]:
    pages = {}
    for p in sorted(CONTENT.rglob("*.mdx")):
        rel = p.relative_to(CONTENT).parts
        if rel[0] in SKIP_DIRS:
            continue
        pages[p.relative_to(REPO).as_posix()] = p.read_text(encoding="utf-8", errors="replace")
    return pages


def main() -> int:
    result = find_contradictions(load_pages())
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(result, indent=2), encoding="utf-8")
    print(f"[audit:contradictions] {len(result)} topics with conflicting values")
    for r in result:
        print(f"  {r['topic']}: {len(r['values'])} distinct values")
    return 0


if __name__ == "__main__":
    sys.exit(main())
