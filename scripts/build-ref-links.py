#!/usr/bin/env python3
"""Build content/inspections/_reference-links.json from policy indexes.

Walks every index under content/inspections/_policy-indexes/ and emits a
flat mapping of normalized document identifier -> URL. Many aliases per
canonical doc when the source data uses multiple forms.

Usage:
  python3 build-ref-links.py <indexes-dir> <output-json>
"""
import json
import re
import sys
from pathlib import Path


def normalize_key(text):
    """Canonical form for matching: uppercase, collapsed whitespace."""
    s = re.sub(r"\s+", " ", text or "").strip().upper()
    s = s.replace("’", "'").replace("‘", "'")
    return s


def best_url(entry):
    """Prefer pdf_url, fall back to url, page_url, detail_url."""
    for key in ("pdf_url", "url", "page_url", "detail_url"):
        v = entry.get(key)
        if v:
            return v
    return None


def add(out, key, url):
    if not key or not url:
        return
    k = normalize_key(key)
    if k and k not in out:
        out[k] = url


def import_almar(out, data):
    for num, e in data.get("downloaded", {}).items():
        url = best_url(e)
        add(out, f"ALMAR {num}", url)


def import_alnav(out, data):
    for num, e in data.get("downloaded", {}).items():
        url = best_url(e)
        add(out, f"ALNAV {num}", url)


def import_maradmin(out, data):
    for num, e in data.get("downloaded", {}).items():
        url = best_url(e)
        add(out, f"MARADMIN {num}", url)


def import_dodfmr(out, data):
    for _key, e in data.get("downloaded", {}).items():
        vol = e.get("volume_id", "").strip().lstrip("0") or e.get("volume_id", "")
        ch = e.get("chapter_num", "").strip().lstrip("0") or e.get("chapter_num", "")
        url = best_url(e)
        if vol and ch:
            # Many shapes used in references; add all of them.
            base_prefixes = ["DODFMR", "DoDFMR", "DoD FMR"]
            vol_forms = [f"Vol {vol}", f"Vol. {vol}", f"V {vol}", f"V{vol}", f"Volume {vol}"]
            ch_forms = [f"Ch {ch}", f"Ch. {ch}", f"Chap {ch}", f"Chap. {ch}", f"Chapter {ch}"]
            sep_forms = [" ", ", ", "; "]
            forms = []
            for p in base_prefixes:
                for v in vol_forms:
                    for s in sep_forms:
                        for c in ch_forms:
                            forms.append(f"{p} {v}{s}{c}")
                        # Also vol-only (no chapter)
                    forms.append(f"{p} {v}")
            forms.extend([
                f"DoDFMR, Vol {vol}, Ch {ch}",
                f"DoDFMR, Vol. {vol}, Ch. {ch}",
            ])
            for f in forms:
                add(out, f, url)


def import_secnav(out, data):
    for num, e in data.get("downloaded", {}).items():
        url = best_url(e)
        num = num.strip()
        if num.startswith("M-") or num.startswith("M "):
            # Manual: "M-1650.1"
            bare = num.replace("M-", "").replace("M ", "")
            add(out, f"SECNAV {num}", url)
            add(out, f"SECNAV M-{bare}", url)
            add(out, f"SECNAVINST {num}", url)
        else:
            # Instruction: "1000.10B"
            for prefix in ("SECNAV", "SECNAVINST"):
                add(out, f"{prefix} {num}", url)
            # Strip trailing revision letter for base form
            import re as _re
            m = _re.match(r"^([\d.]+)([A-Z](?:\s+[A-Z]+)?)$", num)
            if m:
                base = m.group(1)
                for prefix in ("SECNAV", "SECNAVINST"):
                    add(out, f"{prefix} {base}", url)


def import_dd_forms(out, data):
    for key, e in data.get("downloaded", {}).items():
        url = best_url(e)
        num = e.get("number") or key
        # Strip "DD" prefix to get number
        m = re.match(r"DD(\d+)", num)
        if m:
            n = m.group(1).lstrip("0") or "0"
            add(out, f"DD {n}", url)
            add(out, f"DD Form {n}", url)
            add(out, f"DD-{n}", url)
        else:
            add(out, num, url)


def import_navmc_forms(out, data):
    for key, e in data.get("downloaded", {}).items():
        url = best_url(e)
        form_num = e.get("form_number") or key
        add(out, form_num, url)
        m = re.match(r"NAVMC\s+(\S+)", form_num)
        if m:
            n = m.group(1)
            add(out, f"NAVMC {n}", url)


def import_mcpel(out, data):
    # mcpel_index has categories: Misc, Doctrine, MCBul, NAVMC, MCO, Legal
    for cat, sub in data.items():
        if not isinstance(sub, dict):
            continue
        for title, e in sub.get("downloaded", {}).items():
            url = best_url(e)
            if not url:
                continue
            # The title IS the canonical identifier (e.g., "MCO 5351.1 A").
            add(out, title, url)
            # Handle MCO number forms with or without space before revision letter.
            # Patterns: "MCO 5351.1", "MCO 5351.1A", "MCO 5351.1 A", "MCO 5351.1A CH 1"
            m = re.match(r"^(MCO\s+[\d.]+)(?:\s*([A-Z])(?:\s+CH\s+(\d+))?)?\s*$", title)
            if m:
                base = m.group(1).strip()
                rev = (m.group(2) or "").strip()
                ch = (m.group(3) or "").strip()
                add(out, base, url)
                if rev:
                    add(out, base + rev, url)
                    add(out, base + " " + rev, url)
                if ch:
                    add(out, base + " CH " + ch, url)
                    add(out, base + rev + " CH " + ch, url)
            # Strip leading "MCBul " parens
            m2 = re.match(r"^(MCBul\s+\d+)", title)
            if m2:
                add(out, m2.group(1), url)
            # NAVMC entries
            m3 = re.match(r"^NAVMC\s+(\S+)", title)
            if m3:
                add(out, f"NAVMC {m3.group(1)}", url)


def import_fa_checklists(out, data):
    for title, e in data.get("downloaded", {}).items():
        url = best_url(e)
        # Title contains FA number in parens: "Aircraft Rescue and Fire Fighting (ARFF) (6500)"
        m = re.search(r"\((\d{3,4}(?:\.\d+)?)\)\s*$", title)
        if m:
            num = m.group(1)
            add(out, f"FAC {num}", url)
            add(out, f"FA {num}", url)
        add(out, title, url)


def import_dtmo(out, data):
    for key, e in data.get("downloaded", {}).items():
        url = best_url(e)
        add(out, key, url)


def main():
    if len(sys.argv) != 3:
        print("Usage: build-ref-links.py <indexes-dir> <output-json>", file=sys.stderr)
        return 2
    idx_dir = Path(sys.argv[1])
    out_path = Path(sys.argv[2])
    out = {}

    handlers = {
        "almar_index.json": import_almar,
        "alnav_index.json": import_alnav,
        "maradmin_index.json": import_maradmin,
        "dodfmr_index.json": import_dodfmr,
        "secnav_index.json": import_secnav,
        "dd_forms_index.json": import_dd_forms,
        "navmc_forms_index.json": import_navmc_forms,
        "mcpel_index.json": import_mcpel,
        "fa_checklists_index.json": import_fa_checklists,
        "dtmo_index.json": import_dtmo,
    }

    for name, fn in handlers.items():
        path = idx_dir / name
        if not path.exists():
            print(f"missing {name}", file=sys.stderr)
            continue
        data = json.loads(path.read_text(encoding="utf-8"))
        before = len(out)
        fn(out, data)
        print(f"  {name}: +{len(out) - before} keys (total {len(out)})")

    # Manual overrides take precedence over auto-imported entries.
    overrides_path = idx_dir.parent / "_reference-link-overrides.json"
    overrides_applied = 0
    if overrides_path.exists():
        overrides = json.loads(overrides_path.read_text(encoding="utf-8"))
        for k, v in overrides.items():
            if k.startswith("$"):
                continue
            key = normalize_key(k)
            if key:
                out[key] = v
                overrides_applied += 1
        print(f"  overrides: +{overrides_applied} applied")

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(out, indent=2, ensure_ascii=False))
    print(f"\nWrote {len(out)} aliases to {out_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
