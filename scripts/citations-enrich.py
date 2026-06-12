#!/usr/bin/env python3
"""Citation context enrichment.

Rebuilds thin and boilerplate citation bodies from source documents in the
GunnyBot policy archive. Source-grounded only: subject lines, stated-purpose
excerpts, and document dates come from the actual PDFs and scraper sidecars.
Entries with no source document on file are skipped and reported for manual
input. Never invents policy claims.

Usage:
  python scripts/citations-enrich.py [--archive PATH] [--dry-run]
"""

import argparse, collections, glob, hashlib, json, os, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIR = ROOT / "content" / "citations"
TODAY = "2026-06-12"

def pdf_text(p, pages=2, archive=None):
    r = subprocess.run(["pdftotext", "-l", str(pages), str(p), "-"],
                       capture_output=True, text=True)
    txt = r.stdout if r.returncode == 0 else ""
    if len(txt.strip()) > 80 or archive is None:
        return txt
    # Scanned PDFs carry no text layer. The archive ships a pre-extracted
    # text mirror under GunnyBot/text/<relative path>.txt.
    rel = os.path.relpath(str(p), str(archive))
    mirror = Path(archive) / "GunnyBot" / "text" / (rel + ".txt")
    if mirror.exists():
        return mirror.read_text(encoding="utf8", errors="replace")[:12000]
    return txt

def sidecar(p):
    j = Path(str(p) + ".json")
    if j.exists():
        try: return json.loads(j.read_text())
        except Exception: return {}
    return {}

def clean(t, limit=420):
    t = re.sub(r"\s+", " ", t).strip()
    t = t.replace("{", "&#123;").replace("}", "&#125;")
    t = re.sub(r"<(?=\S)", "&lt;", t)
    if len(t) > limit:
        t = t[:limit].rsplit(" ", 1)[0] + " [...]"
    return t

GEN_HEADS = ("What this ", "Stated purpose", "Subject", "Source excerpt",
             "Purpose printed on the form", "Distribution printed on the form",
             "Disposition printed on the form", "Access", "Chapters",
             "Lead excerpt", "Sections")

def strip_generated(body):
    """Drop previously generated sections so re-enrichment never stacks
    duplicate blocks. Hand-written sections survive."""
    parts = re.split(r"(?m)^## ", body)
    out = parts[0].strip()
    for sec in parts[1:]:
        head = sec.split("\n", 1)[0].strip()
        if not head.startswith(GEN_HEADS):
            out = (out + "\n\n## " + sec.strip()).strip()
    return out

def extract_order(txt):
    subjs = re.findall(r"(?:Subj|SUBJ)\s*[:\s/]\s*([^\n]{8,120})", txt)
    subjs = [x.strip().rstrip("/") for x in subjs]
    title = subjs[0] if subjs else None
    # Administrative-change transmittals print their own subject first.
    # The base order subject sits on a later page.
    if title and len(subjs) > 1 and re.search(
            r"ADMINISTRATIVE CHANGE|COMPLIANCE WITH EXECUTIVE ORDER", title):
        later = [x for x in subjs[1:] if x != title]
        if later:
            title = later[-1]
    pur = re.search(
        r"\b(?:1\s*\.\s*)?(?:Purpose|PURPOSE|Situation|SITUATION)\s*[.:\n]\s*"
        r"(.{40,1200}?)(?:\n\s*\n|\s\d\s*\.\s+[A-Z]|\s[a-e]\s*\.\s+[A-Z])",
        txt, re.S)
    if not title:
        # Publication-style cover pages: a quoted volume title, or the run
        # of all-caps lines near the top of the cover.
        q = re.search(r"[\u201c\"]([^\u201d\"]{3,90})[\u201d\"]", txt[:1500])
        if q:
            title = q.group(1).strip()
        else:
            caps = re.findall(r"^([A-Z][A-Z ,&\-]{7,60})$", txt[:1200], re.M)
            caps = [c.strip() for c in caps if not re.match(
                r"^(HEADQUARTERS|DISTRIBUTION|DEPARTMENT|UNITED STATES|MARINE CORPS$|PCN)", c)]
            if caps:
                title = " ".join(caps[:3])[:90]
    date = re.search(r"\b(\d{1,2}\s+[A-Z][a-z]{2}\s+\d{4}|\d{1,2}\s+[A-Z]{3}\s+\d{4})\b", txt[:1500])
    ptext = None
    if pur:
        ptext = clean(re.sub(r"^[a-e]\s*\.\s+", "", pur.group(1).strip()), 520)
    return (title, ptext, date.group(1) if date else None)

def extract_maradmin(txt):
    subj = re.search(r"(?:Subj|SUBJ)[:\s/]+([^\n]+)", txt)
    rmks = re.search(r"RMKS/1\.\s*(.{50,500}?)(?:\s+2\.\s|\n\s*\n)", txt, re.S)
    if not rmks:
        rmks = re.search(r"\b1\.\s+(?:Situation|Purpose|This)[.:\s]*(.{50,500}?)(?:\s+2\.\s)", txt, re.S)
    return (subj.group(1).strip().rstrip("/") if subj else None,
            clean(rmks.group(1)) if rmks else None)

def order_body(kind, number, subj, purpose, doc_date, snap, has_url, keep="", cur=None):
    parts = []
    if keep: parts.append(keep.strip())
    head = f"## What this {kind} is\n\n{number}"
    if subj: head += f", {subj}"
    if doc_date: head += f". Signed {doc_date}"
    head += f". Source PDF on file from the {snap} archive snapshot."
    if cur:
        head += f" The archive copy is the current version, {cur}."
    parts.append(head)
    if purpose:
        parts.append(f"## Stated purpose\n\n> {purpose}\n\nQuoted from the document's opening section.")
    access = ("## Access\n\nThe external link opens the official landing page for the current version."
              if has_url else
              "## Access\n\nNo public URL on file. Pull the working copy from the issuing portal or the unit reference library.")
    parts.append(access)
    return "\n\n".join(parts) + "\n"

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--archive", default="E:\\GunnyBot\\Policies")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only", default="",
                    help="comma-separated entry filenames to process regardless of classification")
    args = ap.parse_args()
    P = Path(args.archive)
    if not P.exists():
        sys.exit(f"archive not found: {P}")

    # ---- classify entries -------------------------------------------------
    entries = {}
    boiler = collections.defaultdict(list)
    for f in sorted(os.listdir(DIR)):
        if not f.endswith(".mdx") or f.startswith(("_", ".")): continue
        s = (DIR / f).read_text(encoding="utf8")
        m = re.match(r"^---\n(.*?)\n---\n", s, re.S)
        front, body = m.group(1), s[m.end():].strip()
        entries[f] = (front, body)
        norm = re.sub(r"[A-Z]{2,}[\s-]*[\dP][\d./-]*[A-Z]?", "DOC", body)
        norm = re.sub(r"\d+", "N", norm)[:400]
        boiler[hashlib.md5(norm.encode()).hexdigest()].append(f)
    boiler_files = set()
    for fs in boiler.values():
        if len(fs) > 3: boiler_files.update(fs)
    work = {f for f, (fr, b) in entries.items()
            if (len(b.split()) < 60 or f in boiler_files)
            and not f.startswith(("mctfsprium", "fpm"))}
    if args.only:
        work = {f.strip() for f in args.only.split(",") if f.strip() in entries}

    def get(front, key):
        m = re.search(rf'^{key}:\s*"?([^"\n]+)"?$', front, re.M)
        return m.group(1).strip() if m else ""

    # ---- source maps ------------------------------------------------------
    mco = {}
    for p in glob.glob(str(P / "MCO" / "*.pdf")):
        k = os.path.basename(p)[:-4].upper().replace("MCO_", "")
        k = re.split(r"_W_|_WADMIN|_WITH|_CH-", k)[0]
        mco[k] = p
        # Index the letterless base form too, newest letter wins by sort.
        base = re.sub(r"(?<=\d)[A-Z]$", "", k)
        if base != k and (base not in mco or mco[base] < p):
            mco[base] = p
    mar = {}
    for p in glob.glob(str(P / "MARADMINS" / "CY*" / "*.pdf")):
        m = re.match(r"MARADMIN_(\d+)_(\d+)_", os.path.basename(p))
        if m: mar[f"{int(m.group(1)):03d}/{m.group(2)}"] = p
    dd = {}
    for p in glob.glob(str(P / "DD_Forms" / "*" / "*.pdf")):
        m = re.match(r"DD[_ ]?0*(\d+[A-Z0-9\-]*)_?", os.path.basename(p), re.I)
        if m:
            k = m.group(1).upper()
            if k not in dd or len(os.path.basename(p)) > len(os.path.basename(dd[k])):
                dd[k] = p
    navmc_f = {}
    for p in list(glob.glob(str(P / "NAVMC_Forms" / "*.pdf"))) + list(glob.glob(str(P / "NAVMC" / "*.pdf"))):
        m = re.match(r"NAVMC[_ ]?([\d.\-]+[A-Z]?)", os.path.basename(p), re.I)
        if m: navmc_f.setdefault(m.group(1).upper(), p)
    mcbul = {}
    for p in glob.glob(str(P / "MCBul" / "*.pdf")):
        m = re.match(r"MCBul_(\d+)", os.path.basename(p), re.I)
        if m: mcbul.setdefault(m.group(1), p)
    secnav = {}
    for p in glob.glob(str(P / "SECNAV" / "*.pdf")):
        m = re.match(r"SECNAVINST_([\d.]+[A-Z]?)", os.path.basename(p), re.I)
        if m: secnav[m.group(1).upper()] = p

    def find_source(typ, num, fid=""):
        if typ == "MCO":
            vol = re.search(r"vol-(\d+)", fid)
            if vol:
                vkey = num.upper().replace("MCO", "").strip() + f"_V{vol.group(1)}"
                if vkey in mco: return mco[vkey], "order"
            key = num.upper().replace("MCO", "").strip().replace(" ", "_")
            for k in (key, "P" + key, key.rstrip("ABCDEFGHJK"), ("P" + key).rstrip("ABCDEFGHJK")):
                if k in mco: return mco[k], "order"
            base = re.sub(r"[A-Z]$", "", key)
            hits = sorted(v for kk, v in mco.items() if kk.rstrip("ABCDEFGHJK") in (base, "P" + base))
            if len(hits) >= 1 and base and "." in base: return hits[-1], "order"
        elif typ == "MARADMIN":
            m = re.search(r"(\d+)/(\d+)", num)
            if m:
                p = mar.get(f"{int(m.group(1)):03d}/{m.group(2)}")
                if p: return p, "maradmin"
        elif typ == "DD-FORM":
            m = re.search(r"(\d+[A-Z0-9\-]*)", num)
            if m and m.group(1).upper() in dd: return dd[m.group(1).upper()], "form"
        elif typ in ("NAVMC", "NAVMC-FORM"):
            m = re.search(r"([\d.\-]+[A-Z]?)", num.replace("NAVMC", "").strip())
            if m:
                k = m.group(1).upper()
                for kk in (k, k.rstrip("ABCDEFGHJK")):
                    if kk in navmc_f:
                        mode2 = "form" if "NAVMC_Forms" in navmc_f[kk] else "order"
                        return navmc_f[kk], mode2
                hits = sorted(v for key2, v in navmc_f.items() if key2.rstrip("ABCDEFGHJK") == k.rstrip("ABCDEFGHJK"))
                if hits:
                    return hits[-1], ("form" if "NAVMC_Forms" in hits[-1] else "order")
        elif typ == "MCBUL":
            m = re.search(r"(\d+)", num)
            if m and m.group(1) in mcbul: return mcbul[m.group(1)], "order"
        elif typ == "SECNAVINST":
            m = re.search(r"([\d.]+[A-Z]?)", num.replace("SECNAVINST", "").strip())
            if m and m.group(1).upper() in secnav: return secnav[m.group(1).upper()], "order"
        elif typ == "DODFMR":
            m = re.search(r"Vol(?:ume)?\s*(\d+[ab]?)", num, re.I)
            if m:
                vol = m.group(1).lower()
                d = P / "DoDFMR" / f"Vol_{int(re.sub('[ab]','',vol)):02d}{vol[-1] if vol[-1] in 'ab' else ''}"
                if d.exists(): return d, "dodfmr-vol"
        return None, None

    written, skipped = [], []
    intents = {}
    for f in sorted(work):
        front, body = entries[f]
        typ, num = get(front, "type"), get(front, "number")
        src, mode = find_source(typ, num, f)
        if not src:
            skipped.append({"file": f, "type": typ, "number": num,
                            "reason": "no source document in archive"})
            continue
        keep = "" if f in boiler_files else strip_generated(body)
        has_url = "externalUrl" in front
        meta = sidecar(src) if mode != "dodfmr-vol" else {}
        snap = (meta.get("fetched_at", "") or "2026-04")[:10] or "2026-04"
        doc_date = meta.get("document_date", "")
        volm = re.match(r"mco-5800-16-vol-(\d+)\.mdx$", f)
        if volm and mode == "order":
            vtxt = pdf_text(src, pages=40, archive=P)
            vtitle, _, vdate = extract_order(vtxt)
            vt2 = re.search(
                r"VOLUME\s+" + volm.group(1) +
                r"\s*\n+[\u201c\"]?([A-Z][A-Z ,&'\-/()]{3,90}?)[\u201d\"]?\s*\n", vtxt)
            if vt2:
                vtitle = vt2.group(1).strip()
            flat = re.sub(r"\s+", " ", vtxt)
            chaps, seen = [], set()
            for cm in re.finditer(
                    r"CHAPTER\s+(\d+):\s*([A-Z][A-Z0-9 ,&'\-/()]{4,140}?)\s*\.{2,}", flat):
                if cm.group(1) not in seen:
                    seen.add(cm.group(1))
                    chaps.append((cm.group(1), re.sub(r"\s+", " ", cm.group(2)).strip()))
            lead = None
            lm = re.search(r"\b\d{6}\.", vtxt)
            if lm:
                for para in re.split(r"\n\s*\n", vtxt[lm.end():]):
                    pt = re.sub(r"\s+", " ", para).strip()
                    if len(pt) > 120 and pt != pt.upper():
                        lead = clean(pt, 520)
                        break
            parts = []
            if keep: parts.append(keep)
            head = (f"## What this volume is\n\nMCO 5800.16 Volume {volm.group(1)}"
                    + (f", {vtitle}" if vtitle else "")
                    + ". One of 17 volumes of the Legal Support and Administration Manual, short title LSAM, the Marine Corps legal services authority issued by CMC (JA)."
                    + (f" Signed {vdate}." if vdate else "")
                    + f" Source PDF on file from the {snap} archive snapshot.")
            parts.append(head)
            if chaps:
                parts.append("## Chapters\n\n" + "\n".join(
                    f"- Chapter {n}: {t.title()}" for n, t in chaps))
            else:
                secs = re.findall(r"(?m)^(\d{4})\s+([A-Z][A-Z0-9 ,&'/()\-]{3,80}?)\s*\.{3,}", vtxt)
                dedup, seen2 = [], set()
                for sn, st in secs:
                    if sn not in seen2:
                        seen2.add(sn)
                        dedup.append((sn, re.sub(r"\s+", " ", st).strip()))
                if dedup:
                    parts.append("## Sections\n\n" + "\n".join(
                        f"- {sn} {st.title()}" for sn, st in dedup[:12]))
            if lead:
                parts.append(f"## Lead excerpt\n\n> {lead}\n\nQuoted from the opening section of the volume.")
            parts.append("## Access\n\nThe external link opens the official landing page for the current version."
                         if has_url else
                         "## Access\n\nNo public URL on file. Pull the working copy from the unit reference library.")
            new_body = "\n\n".join(parts) + "\n"
            if not chaps and not lead:
                skipped.append({"file": f, "type": typ, "number": num,
                                "reason": "volume PDF produced no chapter list or lead excerpt"})
                continue
        elif mode == "order":
            srcbase = os.path.basename(str(src))[:-4].upper().replace("MCO_", "")
            srcver = re.split(r"_W_|_WADMIN|_WITH|_CH-", srcbase)[0].replace("_", " ")
            numkey = num.upper().replace("MCO", "").strip()
            cur = None
            if typ == "MCO" and srcver and srcver != numkey and srcver.lstrip("P") != numkey:
                cur = f"MCO {srcver}"
            subj, purpose, cover_date = extract_order(pdf_text(src, pages=8, archive=P))
            if subj and re.search(r"[!]|[A-Z]:[A-Z]|'[A-Z]'", subj):
                # OCR noise on the subject page. Fall back to the registry title.
                t = get(front, "title")
                subj = t.split(" - ", 1)[1] if " - " in t else None
            if not doc_date and cover_date:
                doc_date = cover_date
            kind = {"MCO": "order", "MCBUL": "bulletin", "SECNAVINST": "instruction",
                    "NAVMC": "directive", "NAVMC-FORM": "directive"}.get(typ, "document")
            new_body = order_body(kind, num if num.upper().startswith(typ.split("-")[0]) else f"{typ} {num}",
                                  subj, purpose, doc_date, snap, has_url, keep, cur)
            if not subj and not purpose:
                skipped.append({"file": f, "type": typ, "number": num,
                                "reason": "PDF text extraction produced no subject or purpose"})
                continue
        elif mode == "maradmin":
            subj, rmks = extract_maradmin(pdf_text(src, archive=P))
            if not subj:
                skipped.append({"file": f, "type": typ, "number": num,
                                "reason": "message extraction failed"})
                continue
            parts = []
            if keep: parts.append(keep.strip())
            parts.append(f"## Subject\n\nMARADMIN {num}: {subj}.")
            if rmks:
                parts.append(f"## Source excerpt\n\n> {rmks}\n\nQuoted from paragraph 1 of the message.")
            parts.append("## Access\n\nThe external link opens the official message page."
                         if has_url else
                         "## Access\n\nNo public URL on file. The message text sits in the unit policy archive.")
            new_body = "\n\n".join(parts) + "\n"
        elif mode == "form":
            title = re.sub(r"^(?:DD|NAVMC)[\d.\-A-Z]*[_ ]", "", os.path.basename(str(src))[:-4]).replace("_", " ")
            ftxt = pdf_text(src, pages=3, archive=P)
            fpur = re.search(
                r"(?:PRINCIPAL )?PURPOSE\(?S?\)?:?\s*(.{40,900}?)(?:\s*ROUTINE|\s*DISCLOSURE|\n\s*\n)",
                ftxt, re.S | re.I)
            if fpur and not re.search(r"[a-z]", fpur.group(1)):
                # All-caps warning text near the PURPOSES caution line, not
                # a Privacy Act statement.
                fpur = None
            dist = re.search(r"Distribution:\s*([^\n]{3,60})", ftxt)
            copies = re.search(r"Copy to:\s*([^\n]{3,60})", ftxt)
            parts = []
            if keep: parts.append(keep.strip())
            parts.append(f"## What this form is\n\n{num}, {title}. Fillable PDF on file from the {snap} forms archive snapshot.")
            if fpur:
                parts.append(f"## Purpose printed on the form\n\n> {clean(fpur.group(1))}\n\nQuoted from the form's Privacy Act statement.")
            if dist or copies:
                d = []
                if dist: d.append(f"Distribution: {dist.group(1).strip()}.")
                if copies: d.append(f"Copies to: {copies.group(1).strip()}.")
                parts.append("## Disposition printed on the form\n\n" + " ".join(d))
            parts.append("## Access\n\nThe external link opens the official form page."
                         if has_url else
                         "## Access\n\nNo public URL on file. Pull the current form from the DoD Forms site, Naval Forms Online, or the unit forms library.")
            new_body = "\n\n".join(parts) + "\n"
            if not fpur:
                skipped.append({"file": f, "type": typ, "number": num,
                                "reason": "form carries no extractable purpose statement, instructions need SME input"})
        elif mode == "dodfmr-vol":
            chapters = sorted(os.path.basename(c) for c in glob.glob(str(src / "*.pdf")))[:30]
            ch_list = "\n".join(f"- {re.sub(r'[_]+', ' ', c[:-4])}" for c in chapters)
            parts = []
            if keep: parts.append(keep.strip())
            parts.append(f"## What this volume is\n\nDoD 7000.14-R Financial Management Regulation, {num}. Chapter PDFs on file in the unit policy archive:")
            parts.append(ch_list)
            parts.append("## Access\n\nThe external link opens the official DoD FMR site." if has_url
                         else "## Access\n\nThe DoD Comptroller publishes the FMR at https://comptroller.defense.gov/FMR/.")
            new_body = "\n\n".join(parts) + "\n"
        else:
            continue

        front2 = re.sub(r'lastVerified:\s*"[^"]+"', f'lastVerified: "{TODAY}"', front, count=1)
        out = f"---\n{front2}\n---\n\n{new_body}"
        if not args.dry_run:
            (DIR / f).write_text(out, encoding="utf8")
        intents[f] = out
        written.append(f)

    print(f"[enrich] rebuilt {len(written)} bodies, {len(skipped)} skipped or flagged")
    json.dump({"written": written, "skipped": skipped,
               "intents": {k: hashlib.sha256(v.encode()).hexdigest() for k, v in intents.items()}},
              open("/tmp/enrich-result.json", "w"), indent=1)
    for s in skipped:
        print(f"  NEEDS INPUT: {s['type']:12} {s['number']:24} {s['reason']}")

if __name__ == "__main__":
    main()
