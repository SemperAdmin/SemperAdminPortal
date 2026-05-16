#!/usr/bin/env python3
"""Frontmatter-schema audit for Semper Admin Portal."""
import os
import re
import json
import datetime as dt
from pathlib import Path

import yaml

REPO_ROOT = Path("/sessions/relaxed-dreamy-rubin/mnt/SemperAdminPortal")
CONTENT = REPO_ROOT / "content"
TODAY = dt.date(2026, 5, 15)
COMMIT = "3c8cb069f83323c3d87e251808635930f7b1b4bd"

ROLES = {"marine", "leader", "commander", "admin"}
ADMIN_MOS = {"0102", "0111", "0170"}
UNIT_TYPES = {"s1-g1", "i-and-i", "pac"}
ADMIN_FUNCTIONS = {"GENA", "OPER", "MPMN", "PERA"}
SKILL_LEVELS = {1000, 2000, 2100}
INSPECTION_TRACKS = {"igmc", "mcaat"}
CITATION_TYPES = {
    "MCO", "MARADMIN", "ALMAR", "ALNAV", "NAVMC", "DODFMR", "DODI", "DODD",
    "DODM", "SECNAV", "SECNAVINST", "JAGINST", "FPM", "MCTFSPRIUM",
    "DD-FORM", "NAVMC-FORM", "FAC", "USC", "CFR", "MCBUL", "OTHER",
}

TR_REGEX = re.compile(r"^\d{4}-[A-Z]{4}-\d{4}$")
CITATION_ID_REGEX = re.compile(r"^[a-z0-9-]+$")

findings = []
serial = 0
files_scanned = 0


def next_id():
    global serial
    serial += 1
    return f"FS-{serial:04d}"


def add(severity, rule, file, message, **kwargs):
    f = {"id": next_id(), "severity": severity, "rule": rule,
         "file": file, "message": message}
    for k, v in kwargs.items():
        if v is not None:
            f[k] = v
    findings.append(f)


def rel(p):
    return str(p.relative_to(REPO_ROOT)).replace(os.sep, "/")


def parse_frontmatter(text):
    had_bom = False
    if text.startswith("﻿"):
        text = text.lstrip("﻿")
        had_bom = True
    if not text.startswith("---"):
        return None, "no leading frontmatter delimiter", had_bom
    end = text.find("\n---", 3)
    if end == -1:
        return None, "no closing frontmatter delimiter", had_bom
    raw = text[3:end].lstrip("\n")
    try:
        data = yaml.safe_load(raw)
    except yaml.YAMLError as e:
        return None, f"yaml parse error: {e}", had_bom
    if data is None:
        data = {}
    if not isinstance(data, dict):
        return None, "frontmatter is not a mapping", had_bom
    return data, None, had_bom


def parse_iso_date(s):
    if not isinstance(s, str):
        return None
    try:
        if len(s) == 10:
            return dt.date.fromisoformat(s)
        return dt.datetime.fromisoformat(s.replace("Z", "+00:00")).date()
    except (ValueError, TypeError):
        return None


def months_between(start, end):
    days = (end - start).days
    return days / 30.4375


def staleness_check(file_path, last_verified, inspection=False):
    parsed = parse_iso_date(last_verified)
    if parsed is None:
        add("major", "lastVerified-unparseable", file_path,
            f"lastVerified value '{last_verified}' does not parse as a date")
        return
    months = months_between(parsed, TODAY)
    if inspection:
        if months >= 12:
            add("major", "lastVerified-stale-inspection", file_path,
                f"lastVerified is {months:.1f} months old, exceeds 12-month inspection stale threshold",
                snippet=f"lastVerified: {last_verified}")
        elif months >= 6:
            add("minor", "lastVerified-aging-inspection", file_path,
                f"lastVerified is {months:.1f} months old, between 6 and 12 months",
                snippet=f"lastVerified: {last_verified}")
    else:
        if months >= 24:
            add("major", "lastVerified-stale", file_path,
                f"lastVerified is {months:.1f} months old, exceeds 24-month stale threshold",
                snippet=f"lastVerified: {last_verified}")
        elif months >= 12:
            add("minor", "lastVerified-aging", file_path,
                f"lastVerified is {months:.1f} months old, between 12 and 24 months",
                snippet=f"lastVerified: {last_verified}")


def check_base_required(file_path, fm, expected_role=None):
    for field in ("title", "slug", "summary", "roles", "lastVerified", "source"):
        if field not in fm:
            add("major", f"missing-{field}", file_path,
                f"required base frontmatter field '{field}' is missing")
    if "title" in fm and not isinstance(fm["title"], str):
        add("major", "wrong-type-title", file_path, "title must be a string")
    if "slug" in fm and not isinstance(fm["slug"], str):
        add("major", "wrong-type-slug", file_path, "slug must be a string")
    if "summary" in fm:
        if not isinstance(fm["summary"], str):
            add("major", "wrong-type-summary", file_path, "summary must be a string")
        elif len(fm["summary"]) < 10:
            add("major", "summary-too-short", file_path,
                f"summary length {len(fm['summary'])} below minimum of 10 characters")
    if "roles" in fm:
        roles_val = fm["roles"]
        if not isinstance(roles_val, list):
            add("major", "wrong-type-roles", file_path,
                "roles must be an array",
                snippet=f"roles: {roles_val!r}")
        elif len(roles_val) == 0:
            add("major", "roles-empty", file_path, "roles array is empty")
        else:
            for r in roles_val:
                if r not in ROLES:
                    add("major", "roles-unknown-value", file_path,
                        f"roles entry '{r}' not in ROLES enum",
                        snippet=f"roles: {roles_val!r}")
            if expected_role and expected_role not in roles_val:
                add("major", "roles-missing-expected",
                    file_path,
                    f"roles array missing expected role '{expected_role}' for collection",
                    snippet=f"roles: {roles_val!r}")
    if "source" in fm:
        src = fm["source"]
        if not isinstance(src, dict):
            add("major", "wrong-type-source", file_path, "source must be a mapping")
        else:
            if "title" not in src or not isinstance(src.get("title"), str):
                add("major", "missing-source-title", file_path,
                    "source.title is missing or not a string")
    if "lastVerified" in fm:
        if not isinstance(fm["lastVerified"], str):
            add("major", "wrong-type-lastVerified", file_path,
                "lastVerified must be an ISO date string",
                snippet=f"lastVerified: {fm['lastVerified']!r}")
        else:
            staleness_check(file_path, fm["lastVerified"], inspection=False)


def check_tr_event_code(file_path, fm):
    if "trEventCode" in fm and fm["trEventCode"] is not None:
        v = fm["trEventCode"]
        if not isinstance(v, str) or not TR_REGEX.match(v):
            add("major", "trEventCode-bad-format", file_path,
                f"trEventCode '{v}' does not match /^\\d{{4}}-[A-Z]{{4}}-\\d{{4}}$/",
                snippet=f"trEventCode: {v!r}")


def bom_check(file_path, had_bom):
    if had_bom:
        add("nit", "utf8-bom-present", file_path,
            "file starts with a UTF-8 BOM. Strip the BOM to keep file output portable.")


def audit_role_collection(coll_dir, role):
    global files_scanned
    if not coll_dir.exists():
        return
    for path in sorted(pp for pp in coll_dir.glob("*.mdx") if not pp.name.startswith(".") and not pp.name.startswith("_")):
        files_scanned += 1
        rp = rel(path)
        try:
            text = path.read_text(encoding="utf-8")
        except Exception as e:
            add("major", "read-error", rp, f"could not read file: {e}")
            continue
        fm, err, had_bom = parse_frontmatter(text)
        if err:
            add("major", "frontmatter-parse-error", rp, err)
            continue
        bom_check(rp, had_bom)
        check_base_required(rp, fm, expected_role=role)
        check_tr_event_code(rp, fm)


def audit_admin():
    global files_scanned
    coll_dir = CONTENT / "admin"
    if not coll_dir.exists():
        return
    for path in sorted(pp for pp in coll_dir.glob("*.mdx") if not pp.name.startswith(".") and not pp.name.startswith("_")):
        files_scanned += 1
        rp = rel(path)
        try:
            text = path.read_text(encoding="utf-8")
        except Exception as e:
            add("major", "read-error", rp, f"could not read file: {e}")
            continue
        fm, err, had_bom = parse_frontmatter(text)
        if err:
            add("major", "frontmatter-parse-error", rp, err)
            continue
        bom_check(rp, had_bom)
        check_base_required(rp, fm, expected_role="admin")
        check_tr_event_code(rp, fm)
        for field in ("unitType", "function", "skillLevel", "mosPerforming"):
            if field not in fm or fm[field] in (None, "", []):
                add("blocker", f"admin-missing-{field}", rp,
                    f"admin frontmatter is missing required field '{field}'")
        if "unitType" in fm and fm["unitType"] not in UNIT_TYPES:
            add("major", "admin-unitType-invalid", rp,
                f"unitType '{fm['unitType']}' not in {sorted(UNIT_TYPES)}")
        if "function" in fm and fm["function"] not in ADMIN_FUNCTIONS:
            add("major", "admin-function-invalid", rp,
                f"function '{fm['function']}' not in {sorted(ADMIN_FUNCTIONS)}")
        if "skillLevel" in fm and fm["skillLevel"] not in SKILL_LEVELS:
            add("major", "admin-skillLevel-invalid", rp,
                f"skillLevel '{fm['skillLevel']}' not in {sorted(SKILL_LEVELS)}")
        if "topic" in fm:
            if not isinstance(fm["topic"], str) or len(fm["topic"]) < 2:
                add("major", "admin-topic-invalid", rp,
                    "admin topic must be a string of length >= 2")
        else:
            add("major", "admin-missing-topic", rp,
                "admin frontmatter missing required 'topic' field")
        if "mosPerforming" in fm:
            mos = fm["mosPerforming"]
            if not isinstance(mos, list) or len(mos) == 0:
                add("blocker", "admin-mosPerforming-empty", rp,
                    "mosPerforming must be a non-empty array",
                    snippet=f"mosPerforming: {mos!r}")
            else:
                bad = [str(m) for m in mos if str(m) not in ADMIN_MOS]
                if bad:
                    add("blocker", "admin-mosPerforming-invalid", rp,
                        f"mosPerforming contains values not in ADMIN_MOS: {bad}",
                        snippet=f"mosPerforming: {mos!r}")


def audit_videos():
    global files_scanned
    coll_dir = CONTENT / "videos"
    if not coll_dir.exists():
        return
    for path in sorted(pp for pp in coll_dir.glob("*.mdx") if not pp.name.startswith(".") and not pp.name.startswith("_")):
        files_scanned += 1
        rp = rel(path)
        try:
            text = path.read_text(encoding="utf-8")
        except Exception as e:
            add("major", "read-error", rp, f"could not read file: {e}")
            continue
        fm, err, had_bom = parse_frontmatter(text)
        if err:
            add("major", "frontmatter-parse-error", rp, err)
            continue
        bom_check(rp, had_bom)
        check_base_required(rp, fm)
        if "videoUrl" not in fm:
            add("major", "video-missing-videoUrl", rp,
                "videos frontmatter missing required 'videoUrl' field")


def audit_tools():
    global files_scanned
    coll_dir = CONTENT / "tools"
    if not coll_dir.exists():
        return
    for path in sorted(pp for pp in coll_dir.glob("*.mdx") if not pp.name.startswith(".") and not pp.name.startswith("_")):
        files_scanned += 1
        rp = rel(path)
        try:
            text = path.read_text(encoding="utf-8")
        except Exception as e:
            add("major", "read-error", rp, f"could not read file: {e}")
            continue
        fm, err, had_bom = parse_frontmatter(text)
        if err:
            add("major", "frontmatter-parse-error", rp, err)
            continue
        bom_check(rp, had_bom)
        check_base_required(rp, fm)
        if "outputType" not in fm:
            add("major", "tool-missing-outputType", rp,
                "tool missing required 'outputType' field")
        elif fm["outputType"] not in ("pdf", "docx", "calculator", "checklist"):
            add("major", "tool-outputType-invalid", rp,
                f"outputType '{fm['outputType']}' not in [pdf, docx, calculator, checklist]")
        if "routeSlug" not in fm:
            add("major", "tool-missing-routeSlug", rp,
                "tool missing required 'routeSlug' field")


def audit_legal():
    global files_scanned
    coll_dir = CONTENT / "legal"
    if not coll_dir.exists():
        return
    for path in sorted(pp for pp in coll_dir.glob("*.mdx") if not pp.name.startswith(".") and not pp.name.startswith("_")):
        files_scanned += 1
        rp = rel(path)
        try:
            text = path.read_text(encoding="utf-8")
        except Exception as e:
            add("major", "read-error", rp, f"could not read file: {e}")
            continue
        fm, err, had_bom = parse_frontmatter(text)
        if err:
            add("major", "frontmatter-parse-error", rp, err)
            continue
        bom_check(rp, had_bom)
        check_base_required(rp, fm)
        if "type" not in fm:
            add("major", "legal-missing-type", rp,
                "legal missing required 'type' field")
        elif fm["type"] not in ("disclaimer", "terms"):
            add("major", "legal-type-invalid", rp,
                f"legal type '{fm['type']}' not in [disclaimer, terms]")


def normalize_alias(s):
    s = s.upper()
    s = re.sub(
        r"\b(VOL|VOLS|CH|CHAP|CHAPTER|SEC|SECT|SECTION|PAR|PARA|PARAGRAPH|ENCL|ENCLOSURE|APP|APPENDIX|ART|ARTICLE)\.",
        r"\1 ",
        s,
    )
    s = s.replace(",", " ")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def audit_citations():
    global files_scanned
    coll_dir = CONTENT / "citations"
    if not coll_dir.exists():
        return
    alias_owners = {}
    for path in sorted(pp for pp in coll_dir.glob("*.mdx") if not pp.name.startswith(".") and not pp.name.startswith("_")):
        files_scanned += 1
        rp = rel(path)
        try:
            text = path.read_text(encoding="utf-8")
        except Exception as e:
            add("major", "read-error", rp, f"could not read file: {e}")
            continue
        fm, err, had_bom = parse_frontmatter(text)
        if err:
            add("major", "frontmatter-parse-error", rp, err)
            continue
        bom_check(rp, had_bom)
        for field in ("id", "aliases", "title", "type", "number",
                      "publisher", "lastVerified", "roles"):
            if field not in fm:
                add("major", f"citation-missing-{field}", rp,
                    f"citation missing required field '{field}'")
        if "id" in fm and isinstance(fm["id"], str):
            if not CITATION_ID_REGEX.match(fm["id"]):
                add("major", "citation-id-bad-format", rp,
                    f"citation id '{fm['id']}' does not match /^[a-z0-9-]+$/",
                    snippet=f"id: {fm['id']!r}")
            stem = path.stem
            if fm["id"] != stem:
                add("major", "citation-id-filename-mismatch", rp,
                    f"citation id '{fm['id']}' does not match filename stem '{stem}'",
                    snippet=f"id: {fm['id']!r} file: {stem}")
        if "type" in fm and fm["type"] not in CITATION_TYPES:
            add("major", "citation-type-invalid", rp,
                f"citation type '{fm['type']}' not in CITATION_TYPES enum")
        if "publisher" in fm and isinstance(fm["publisher"], str) and len(fm["publisher"]) < 2:
            add("major", "citation-publisher-too-short", rp,
                "citation publisher must be at least 2 characters")
        if "title" in fm and isinstance(fm["title"], str) and len(fm["title"]) < 2:
            add("major", "citation-title-too-short", rp,
                "citation title must be at least 2 characters")
        if "roles" in fm:
            roles_val = fm["roles"]
            if not isinstance(roles_val, list) or len(roles_val) == 0:
                add("major", "citation-roles-invalid", rp,
                    "citation roles must be non-empty array")
            else:
                for r in roles_val:
                    if r not in ROLES:
                        add("major", "citation-roles-unknown", rp,
                            f"citation roles entry '{r}' not in ROLES enum")
        if "externalUrl" in fm and fm["externalUrl"] is not None:
            ext = fm["externalUrl"]
            if not isinstance(ext, str) or not (ext.startswith("http://") or ext.startswith("https://")):
                add("major", "citation-externalUrl-bad", rp,
                    f"externalUrl '{ext}' is not a valid http(s) URL")
        if "lastVerified" in fm and isinstance(fm["lastVerified"], str):
            staleness_check(rp, fm["lastVerified"], inspection=False)

        cid = fm.get("id") if isinstance(fm.get("id"), str) else path.stem
        aliases = fm.get("aliases")
        if isinstance(aliases, list):
            for raw in aliases:
                if not isinstance(raw, str) or not raw.strip():
                    add("major", "citation-alias-blank", rp,
                        "citation alias entry is blank or non-string")
                    continue
                norm = normalize_alias(raw)
                alias_owners.setdefault(norm, []).append((cid, raw, rp))

    for norm, entries in alias_owners.items():
        ids = {e[0] for e in entries}
        if len(ids) > 1:
            sample = ", ".join(f"{e[0]}::{e[1]!r}" for e in entries[:5])
            files_set = sorted({e[2] for e in entries})
            add("blocker", "citation-alias-duplicate", files_set[0],
                f"alias '{norm}' claimed by ids: {sorted(ids)}",
                snippet=sample[:200],
                relatedFiles=files_set)


def audit_inspections():
    global files_scanned
    insp_dir = CONTENT / "inspections"
    if not insp_dir.exists():
        return
    for track_dir in sorted(insp_dir.iterdir()):
        if not track_dir.is_dir():
            continue
        if track_dir.name.startswith("_"):
            continue
        if track_dir.name not in INSPECTION_TRACKS:
            continue
        for path in sorted(pp for pp in track_dir.glob("*.json") if not pp.name.startswith(".") and not pp.name.startswith("_")):
            files_scanned += 1
            rp = rel(path)
            try:
                data = json.loads(path.read_text(encoding="utf-8"))
            except Exception as e:
                add("major", "inspection-json-parse-error", rp,
                    f"could not parse JSON: {e}")
                continue
            if not isinstance(data, dict):
                add("major", "inspection-not-mapping", rp,
                    "inspection JSON root is not a mapping")
                continue
            for field in ("track", "programNumber", "slug", "title",
                          "summary", "roles", "lastVerified",
                          "source", "subsections"):
                if field not in data:
                    add("major", f"inspection-missing-{field}", rp,
                        f"inspection missing required field '{field}'")
            for field in ("sponsor", "applicabilityLevel", "effectiveDate"):
                if field not in data or data[field] in (None, ""):
                    add("major", f"inspection-missing-{field}", rp,
                        f"inspection missing prompt-required field '{field}'")
            if "track" in data and data["track"] not in INSPECTION_TRACKS:
                add("major", "inspection-track-invalid", rp,
                    f"track '{data['track']}' not in INSPECTION_TRACKS")
            if "summary" in data and isinstance(data["summary"], str):
                if len(data["summary"]) < 10 or len(data["summary"]) > 280:
                    add("major", "inspection-summary-length", rp,
                        f"summary length {len(data['summary'])} not in 10..280")
            if "roles" in data:
                roles_val = data["roles"]
                if not isinstance(roles_val, list) or len(roles_val) == 0:
                    add("major", "inspection-roles-invalid", rp,
                        "inspection roles must be non-empty array")
                else:
                    for r in roles_val:
                        if r not in ROLES:
                            add("major", "inspection-roles-unknown", rp,
                                f"inspection roles entry '{r}' not in ROLES enum")
            if "source" in data:
                src = data["source"]
                if not isinstance(src, dict) or "title" not in src:
                    add("major", "inspection-source-invalid", rp,
                        "inspection source is not a mapping with title")
            if "lastVerified" in data and isinstance(data["lastVerified"], str):
                staleness_check(rp, data["lastVerified"], inspection=True)
            subs = data.get("subsections")
            if isinstance(subs, list):
                if len(subs) == 0:
                    add("major", "inspection-subsections-empty", rp,
                        "subsections array is empty")
                for i, sub in enumerate(subs):
                    if not isinstance(sub, dict):
                        add("major", "inspection-subsection-not-mapping", rp,
                            f"subsection[{i}] is not a mapping")
                        continue
                    if not sub.get("id") or not isinstance(sub.get("id"), str):
                        add("major", "inspection-subsection-missing-id", rp,
                            f"subsection[{i}] missing id")
                    if not sub.get("title") or not isinstance(sub.get("title"), str):
                        add("major", "inspection-subsection-missing-title", rp,
                            f"subsection[{i}] missing title")
                    items = sub.get("items")
                    if not isinstance(items, list) or len(items) == 0:
                        add("major", "inspection-subsection-no-items", rp,
                            f"subsection[{i}] missing items array or empty")
                    else:
                        for j, item in enumerate(items):
                            if not isinstance(item, dict):
                                add("major", "inspection-item-not-mapping", rp,
                                    f"subsection[{i}].items[{j}] is not a mapping")
                                continue
                            if not item.get("code"):
                                add("major", "inspection-item-missing-code", rp,
                                    f"subsection[{i}].items[{j}] missing code")
                            if not item.get("question"):
                                add("major", "inspection-item-missing-question", rp,
                                    f"subsection[{i}].items[{j}] missing question")
                            if "references" not in item:
                                add("major", "inspection-item-missing-references", rp,
                                    f"subsection[{i}].items[{j}] missing references array")
                            if "evidenceHint" not in item:
                                add("major", "inspection-item-missing-evidenceHint", rp,
                                    f"subsection[{i}].items[{j}] missing evidenceHint")


def audit_missing_collections():
    for name in ("policies", "situations", "snippets", "references", "links", "reports"):
        p = CONTENT / name
        if not p.exists():
            add("nit", "missing-optional-collection-dir",
                f"content/{name}/",
                f"optional collection source directory 'content/{name}/' is absent (generated-only)")


def main():
    audit_role_collection(CONTENT / "marines", "marine")
    audit_role_collection(CONTENT / "leader", "leader")
    audit_role_collection(CONTENT / "commander", "commander")
    audit_admin()
    audit_videos()
    audit_tools()
    audit_legal()
    audit_citations()
    audit_inspections()
    audit_missing_collections()

    sev_order = {"blocker": 0, "major": 1, "minor": 2, "nit": 3}
    findings.sort(key=lambda f: (sev_order[f["severity"]], f["file"], f.get("line", 0)))

    final = findings
    CAP = 480
    if len(final) > CAP:
        kept = final[:CAP]
        overflow = final[CAP:]
        groups = {}
        for f in overflow:
            groups.setdefault(f["rule"], []).append(f)
        rollup = []
        idx = 9000
        for rule, items in groups.items():
            sample_paths = sorted({i["file"] for i in items})[:5]
            sev = items[0]["severity"]
            rollup.append({
                "id": f"FS-{idx:04d}",
                "severity": sev,
                "rule": f"{rule}-rollup",
                "file": "<rollup>",
                "message": f"{len(items)} additional findings of rule '{rule}' truncated. Examples shown in snippet.",
                "snippet": " | ".join(sample_paths),
            })
            idx += 1
        final = kept + rollup

    counts = {"blocker": 0, "major": 0, "minor": 0, "nit": 0}
    for f in final:
        counts[f["severity"]] = counts.get(f["severity"], 0) + 1

    out = {
        "dimension": "frontmatter-schema",
        "generatedAt": dt.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"),
        "repoCommit": COMMIT,
        "summary": {
            "counts": counts,
            "filesScanned": files_scanned,
            "notes": ("Static analysis only. No build or sync executed. "
                      "Staleness math anchored to 2026-05-15. content/citations/_stubs/ skipped.")
        },
        "findings": final,
    }

    out_path = REPO_ROOT / "audit" / "frontmatter-schema" / "findings.json"
    out_path.write_text(json.dumps(out, indent=2), encoding="utf-8")
    print(f"Wrote {out_path}")
    print(f"filesScanned={files_scanned}")
    print(f"counts={counts}")
    print(f"raw findings before rollup={len(findings)}")


if __name__ == "__main__":
    main()
