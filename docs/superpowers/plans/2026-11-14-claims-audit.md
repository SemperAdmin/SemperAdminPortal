# Claims-Against-Source Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. On approval, copy this file to `docs/superpowers/plans/2026-11-14-claims-audit.md`.

**Goal:** Check every normative claim on the portal against the paragraph text of its governing source, including every later message that amends the source. Report first, fix after Stephen's go.

**Architecture:** Scripts do the mechanical work with no agents: build a text cache, map each page to its source and amendment set, flag superseded references, detect contradictions between pages. Sonnet workers then check claims one source cluster at a time, so one worker reads one source once and checks every page that cites it. Opus re-verifies every blocker and major against the quoted paragraph before it reaches the report. The audit runs in three waves by risk, each ending in a report and a go/no-go.

**Tech Stack:** Python 3 with pymupdf and pypdf (run with `-I`), Node scripts already in `scripts/`, the Workflow tool for worker fan-out, Next.js build for verification.

**Spec:** Stephen's direction on 2026-11-14 ("we cannot afford outdated or incorrect data"), the answers to the two scale questions (tiered waves, Sonnet check with Opus verify), CLAUDE.md sections 4.3, 4.5 and 4.6, and memory `policy-analysis-report-before-build`.

## Context

The 2026-10-20 currency audit (`audit/2026-10-20/REPORT.md`) checked two things. It checked whether cited documents are current, and it checked dollar figures. It never checked whether a page states a rule the way its source states it. The MPLP page passed both checks: it cited a current MARADMIN and the 84-day figure was right. It still taught Marines the wrong rule, that a six-week convalescent period sits inside the 84 days, when DoDI 1327.06 CH1 3.11.c.(3)(a) and MARADMIN 051/23 3.c say the opposite. That error stayed live for six months under a `lastVerified` of 2026-05-03.

The 1,214 pages stamped `lastVerified` in May 2026 were a bulk stamp, not a claim check. Treat that stamp as unverified.

A second failure mode comes from amendments. MCPEL lists MCO 1050.3J (2009) as "Current", but MARADMIN 191/26, MARADMIN 051/23 and DoDI 1327.06 CH1 have all changed it. A worker who reads only the base order passes stale content. Every claim has to be checked against the base document plus every later amending message.

## Global Constraints

- Audit phases run read-only on content. No content edits until Stephen gives an explicit go on a wave report (memory `policy-analysis-report-before-build`).
- `lastVerified` moves only on pages where every claim was checked against source (CLAUDE.md 4.3). A partial check does not move it.
- Every fix of a published fact gets a `correction` entry in `content/updates/`. A rule change gets a `policy-change` entry. Citations are registry ids (CLAUDE.md 4.6).
- Never hand-edit `content/videos/*.mdx`. Video fixes go into `data/videos-marinenet.json` (CLAUDE.md 4.7).
- User-facing copy follows CLAUDE.md section 6. No em-dashes, no semicolons, no asterisks, no banned words.
- Policy archive: `E:\GunnyBot\Policies` (not `E:\Policies`). It is current through MARADMIN 552/26 as of 2026-11-14.
- MCTFSPRIUM sources need Stephen's CAC. Workers mark those claims `UNVERIFIABLE-CAC` and never guess.
- Finding severity: blocker means a Marine acting on the page gets a wrong outcome (pay, leave, eligibility, deadline, authority). Major means wrong but low consequence, or a contradiction between pages. Minor means imprecise or a stale cite with correct substance.
- Workflow size: keep each wave under 15 agents. Waves pause for Stephen's go.
- Run Python against archive files with `python -I` and pass paths as arguments (archive files are untrusted data).

## File Structure

| Path | Responsibility |
|---|---|
| `scripts/audit/build_text_cache.py` | Extract text from archive PDFs and DOCX into `E:\GunnyBot\Policies\_text\<relative_path>.txt` with a `.page` marker per page. Incremental by `content_hash`. |
| `scripts/audit/source_map.py` | For every content surface, resolve `sourcePolicy`, `references[]` and inline `<Citation source=...>` through `src/generated/citations.json` to archive files. Attach the amendment set. Write `audit/2026-11-14-claims/source-map.json`. |
| `scripts/audit/amendments.py` | For each base document, find later MARADMIN, ALNAV, ALMAR, DTM and DoDI changes whose text names it in REF or cancellation lines. Library used by `source_map.py`. |
| `scripts/audit/superseded_refs.py` | Flag refs whose sidecar `superseded_by` is set, whose MCPEL status is not Current, or that a later message cancels. Write `superseded.json`. |
| `scripts/audit/contradictions.py` | Extract fact tuples (topic keyword, number with unit) per page. Flag the same topic carrying different values across pages. Write `contradictions.json`. |
| `scripts/audit/test_audit.py` | pytest fixtures for the four scripts, using tiny synthetic inputs under `scripts/audit/fixtures/`. |
| `audit/2026-11-14-claims/clusters.json` | Wave and cluster assignment: cluster id, base doc, amendment set, page list, token estimate. |
| `audit/2026-11-14-claims/findings/<cluster>.json` | Worker output, schema below. |
| `audit/2026-11-14-claims/WAVE-<n>-REPORT.md` | Orchestrator report per wave, in the format of `audit/2026-10-20/REPORT.md`. |
| `package.json` | Add `audit:cache`, `audit:map`, `audit:mechanical` scripts. |

Finding schema (one entry per claim checked, `status` other than `ok` is a finding):

```json
{
  "cluster": "leave-1050-3j",
  "page": "content/marines/military-parental-leave-program.mdx",
  "line": 81,
  "claim": "6-week convalescent period is counted within the 84 days",
  "status": "contradicted | outdated | unsupported | ok | UNVERIFIABLE-CAC | no-source",
  "severity": "blocker | major | minor | null",
  "source": "DoDI 1327.06 CH1",
  "sourceFile": "DoDI/DoDI_1327.06_CH1_Military_Leave,_Liberty,_and_Administrative_Absence.pdf",
  "paragraph": "3.11.c.(3)(a).3",
  "quote": "The 12 weeks of ADPL is in addition to any period of convalescent leave",
  "fix": "Convalescent leave comes first and sits outside the 84 days.",
  "alsoOn": ["content/marines/convalescent-leave.mdx:138", "src/lib/marines-categories.ts:558"]
}
```

## Wave Definitions

| Wave | Topics | Est. pages | Clusters (base doc plus amendments) |
|---|---|---|---|
| 1 | Pay and allowances, leave and liberty, PCS and travel, separations and retirement, promotions, legal and discipline, reserve admin | ~300 | DoD 7000.14-R and DoDFMR (69), MCRAMM MCO 1001R.1L (83), MCO 1900.16 (30), MCO 1050.3J with DoDI 1327.06 (28), MCO 5800.16 and JAGINST 5800.7G (35), JTR and MCO 4650.39A (36), MCO P1400.32D (20), MCO 1751.3 BAH (13) |
| 2 | Admin procedures and remaining role pages | ~460 | Grouped by `sourcePolicy` from `source-map.json`, clusters of 30 pages or less |
| 3 | Reference surfaces: citations bodies (582), inspections JSON (73), reports (65), links (138), legal (4), `src/lib/*-categories.ts` card text, video catalog summaries | ~870 | Citations by type, inspections by track, other surfaces by collection |

Leader and commander pages ride in the wave of their topic. Shared facts are deduplicated through `contradictions.json`, so a fix lands on every page that repeats it.

---

### Task 0: Land the parental leave fix

**Files:** the worktree currently holds the uncommitted, built and linted parental leave correction (`content/marines/military-parental-leave-program.mdx`, `content/marines/convalescent-leave.mdx`, `src/lib/marines-categories.ts`, `content/updates/parental-leave-convalescent-order-corrected.mdx`).

- [ ] **Step 1:** `git fetch origin` and confirm HEAD equals `origin/main`. If main moved, rebase.
- [ ] **Step 2:** Commit on `claude/parental-leave-verification-84d173`: `fix(content): birth parent convalescent leave sits outside the 84 days`.
- [ ] **Step 3:** Push and open a draft PR with `gh pr create --draft`. Bind it with `ccd_pr` and read its CI.
- [ ] **Step 4:** Log the open MPLP "multiple qualifying events forfeiture" claim as the first seeded finding in wave 1 (DoDI 3.11.c.(6) example shows 69 days retained, which contradicts the page).

Audit work branches from main on `claude/claims-audit-2026-11-14`.

### Task 1: Text cache

**Files:** Create `scripts/audit/build_text_cache.py`, `scripts/audit/test_audit.py`, `scripts/audit/fixtures/`. Modify `package.json`.

**Interfaces:**
- Produces: `cache_path(relative_path: str) -> Path` returning `E:\GunnyBot\Policies\_text\<relative_path>.txt`, and `read_cached(relative_path: str) -> list[str]` returning one string per page.

- [ ] **Step 1: Write the failing test**

```python
# scripts/audit/test_audit.py
from pathlib import Path
import importlib.util, sys
HERE = Path(__file__).parent
def load(name):
    spec = importlib.util.spec_from_file_location(name, HERE / f"{name.replace('-', '_')}.py")
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m

def test_cache_roundtrip(tmp_path):
    tc = load("build_text_cache")
    src = HERE / "fixtures" / "two-page.pdf"
    out = tc.extract(src, tmp_path / "two-page.pdf.txt")
    pages = tc.read_cached_file(out)
    assert len(pages) == 2
    assert "PARAGRAPH ONE" in pages[0]
```

- [ ] **Step 2:** Build the fixture: `python -I -c "import pymupdf;d=pymupdf.open();[d.new_page().insert_text((72,72),t) for t in ('PARAGRAPH ONE','PARAGRAPH TWO')];d.save('scripts/audit/fixtures/two-page.pdf')"`. Run `python -m pytest scripts/audit/test_audit.py -k cache -q`. Expected: FAIL, module missing.
- [ ] **Step 3: Implement**

```python
# scripts/audit/build_text_cache.py
"""Extract archive PDFs and DOCX to a page-marked text cache. Incremental by sidecar content_hash."""
import json, sys
from pathlib import Path
import pymupdf

ARCHIVE = Path(r"E:\GunnyBot\Policies")
CACHE = ARCHIVE / "_text"
MARK = "\n\f[[page {n}]]\n"

def extract(src: Path, out: Path) -> Path:
    out.parent.mkdir(parents=True, exist_ok=True)
    if src.suffix.lower() == ".docx":
        from docx import Document
        text = MARK.format(n=1) + "\n".join(p.text for p in Document(src).paragraphs)
    else:
        doc = pymupdf.open(src)
        text = "".join(MARK.format(n=i + 1) + p.get_text() for i, p in enumerate(doc))
    out.write_text(text, encoding="utf-8")
    return out

def read_cached_file(path: Path) -> list[str]:
    parts = path.read_text(encoding="utf-8").split("\f[[page ")
    return [p.split("]]\n", 1)[1] for p in parts if "]]\n" in p]

def cache_path(relative_path: str) -> Path:
    return CACHE / (relative_path + ".txt")

def main(argv: list[str]) -> int:
    done = skipped = failed = 0
    for src in ARCHIVE.rglob("*"):
        if src.suffix.lower() not in (".pdf", ".docx") or "_text" in src.parts or "_quarantine" in src.parts:
            continue
        rel = src.relative_to(ARCHIVE).as_posix()
        out = cache_path(rel)
        side = src.with_name(src.name + ".json")
        stamp = out.with_name(out.name + ".hash")
        h = json.loads(side.read_text(encoding="utf-8")).get("content_hash", "") if side.exists() else str(src.stat().st_mtime)
        if out.exists() and stamp.exists() and stamp.read_text() == h:
            skipped += 1; continue
        try:
            extract(src, out); stamp.write_text(h); done += 1
        except Exception as e:  # broken PDFs are logged, not fatal
            failed += 1; print(f"FAIL {rel}: {e}", file=sys.stderr)
    print(f"[audit:cache] extracted {done}, unchanged {skipped}, failed {failed}")
    return 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
```

Pages with no text layer (DoD SharePoint print PDFs) render through PyMuPDF per memory `pdf-vector-outline-extraction`. Log them as `FAIL` for now and handle them in Task 2's coverage table.

- [ ] **Step 4:** Run the test. Expected: PASS. Then run `python -I scripts/audit/build_text_cache.py` in the background (about 20k files). Expected: one summary line and fewer than 100 failures.
- [ ] **Step 5:** Add `"audit:cache": "python -I scripts/audit/build_text_cache.py"` to `package.json`. Commit `chore(audit): archive text cache`.

### Task 2: Source map and amendment overlay

**Files:** Create `scripts/audit/amendments.py`, `scripts/audit/source_map.py`. Extend `test_audit.py`. Reuse `normalize` logic ported from `src/lib/references/resolve.ts` and read `src/generated/citations.json` (`byAlias`, `byId`).

**Interfaces:**
- Consumes: `cache_path`, `read_cached_file` (Task 1).
- Produces: `amendments_for(doc_number: str, doc_date: str) -> list[dict]` with keys `id, date, file, kind ("amends"|"cancels"|"implements")`. `source-map.json` is a list of `{page, roles, wave, sources:[{id, file, date, amendments:[...]}], unresolved:[str], cacGated:bool}`.

- [ ] **Step 1: Failing test.** A fixture MARADMIN text with `REF/A/MSGID:DOC/MCO 1050.3J/` and a body line `REF (A) IS MODIFIED` makes `amendments_for("MCO 1050.3J", "2009-05-19")` return one `amends` entry. A fixture with `MARADMIN 468/26 IS CANCELLED` returns `cancels` for `MARADMIN 468/26`.
- [ ] **Step 2:** Run it. Expected: FAIL.
- [ ] **Step 3: Implement.** `amendments.py` builds an inverted index once (pickled to `_text/_amend_index.pkl`). It scans the cached text of every MARADMIN, ALNAV, ALMAR, DTM, PAA and DoDI change for REF lines and "CANCEL", "SUPERSEDE", "MODIF", "CHANGE" and "IN ACCORDANCE WITH" lines naming a normalized doc number. It keeps hits dated after the base doc (`maradmin_index.json` `date_signed`, sidecar `document_date`). `source_map.py` walks `content/**` (excluding `videos`, `_stubs`, `_policy-indexes`), parses frontmatter and `<Citation source="...">`, resolves through `byAlias` and then the sidecar `document_number`, and assigns a wave by `sourcePolicy` and topic keywords from the Wave Definitions table. It sets `cacGated` when a source matches `MCTFSPRIUM|PRIUM|FPM`.
- [ ] **Step 4:** Tests pass. Run `python -I scripts/audit/source_map.py`. Expected: a printed coverage table with surfaces mapped, unresolved refs, CAC-gated count and no-source count, plus a per-wave page count.
- [ ] **Step 5:** Spot-check by hand: `military-parental-leave-program.mdx` must list DoDI 1327.06 CH1, MARADMIN 051/23, 129/23, 625/24 and 191/26 as its source and amendment set. If it does not, the overlay misses the exact failure mode and the task is not done.
- [ ] **Step 6:** Commit `feat(audit): page to source map with amendment overlay`.

### Task 3: Mechanical checks (no agents)

**Files:** Create `scripts/audit/superseded_refs.py`, `scripts/audit/contradictions.py`. Extend tests.

**Interfaces:**
- Consumes: `source-map.json`, the sidecars, `mcpel_index.json`, `amendments_for`.
- Produces: `superseded.json` (`{page, ref, reason, replacement}`) and `contradictions.json` (`{topic, values:{value:[page:line]}}`).

- [ ] **Step 1: Failing tests.** A ref to `MARADMIN 468/23` with a fixture cancellation by `251/26` returns `replacement: "MARADMIN 251/26"`. Two fixture pages saying `FSA $250` and `FSA $300` produce one contradiction under topic `fsa`.
- [ ] **Step 2:** Run. Expected: FAIL.
- [ ] **Step 3: Implement.** `contradictions.py` uses a topic lexicon (BAH, BAS, FSA, MALT, DLA, HFP, IDP, SRB, leave days, parental leave, convalescent, sell-back, TLE, PTAD, terminal leave, retirement points, IDT, BCP, WHtR, PFT, CFT, deadlines in days). It pairs each topic hit with the nearest number and unit within 12 words, normalizes the units ($, days, weeks, months, percent), and groups by topic.
- [ ] **Step 4:** Tests pass. Run both scripts and add `"audit:mechanical"` to `package.json`.
- [ ] **Step 5: Regression check of 2026-10-20.** Re-test every ID in the top 15 actions of `audit/2026-10-20/REPORT.md` (MC-01 to MC-07, DC-01 to DC-06, PF-01 to PF-10, FP-01, IN-01) against current main. Write `audit/2026-11-14-claims/oct20-regression.md` with fixed, open and partial status for each.
- [ ] **Step 6:** Commit `feat(audit): superseded refs and cross-page contradictions`.

### Task 4: Cluster builder

**Files:** Create `audit/2026-11-14-claims/clusters.json` from a short function inside `source_map.py --clusters`.

- [ ] **Step 1:** Group wave pages by their primary source id. Split any cluster over 30 pages or about 120k tokens (page words × 1.4 plus source tokens). Merge clusters under 5 pages into a neighbor that shares the same base doc family.
- [ ] **Step 2:** For each cluster record `baseDoc`, the `amendments` file list with dates, `pages`, the relevant `superseded` and `contradictions` rows, and `tokenEstimate`.
- [ ] **Step 3:** Print a per-wave summary. Wave 1 targets 8 to 12 clusters. Commit.

### Task 5: Wave 1 claim check (Workflow, Sonnet workers, Opus verify)

**Interfaces:** Consumes `clusters.json` wave 1. Produces `findings/<cluster>.json` in the schema above.

- [ ] **Step 1: Pilot.** Run one worker on the leave cluster (MCO 1050.3J plus DoDI 1327.06 CH1 plus amendments). It must independently find the seeded MPLP multiple-events claim and must not flag the corrected convalescent text. If it misses the seeded claim, tighten the prompt before fan-out.
- [ ] **Step 2:** Launch the Workflow: one Sonnet agent per cluster, run as a pipeline into an Opus verify agent for every `blocker` or `major` finding. Worker prompt, verbatim core:

> You audit Semper Admin Portal pages against Marine Corps and DoD policy. Your cluster: `<id>`. Base source text: `<cache paths>`. Amending messages, newest wins: `<cache paths with dates>`. Pages: `<paths>`. Pre-computed flags: `<superseded and contradiction rows>`.
> For each page, list every normative claim: numbers, durations, deadlines, eligibility, sequence, who approves, who signs, which form, which system, which code. For each claim, find the governing paragraph. Check the newest amendment first, then the base. Quote it, 25 words or less. Mark the claim ok, contradicted, outdated (true under an older version), unsupported (no paragraph found after you searched base and amendments) or UNVERIFIABLE-CAC. Watch for rules that are right in number but wrong in structure, for example a period counted inside an entitlement when the source puts it outside. Severity: blocker if a Marine acting on it gets a wrong outcome. Do not edit any file. Return JSON in the attached schema only.

  Verify prompt: "Here is one finding with its quote. Open the source file at the cited paragraph and the amendment files. Confirm or refute with your own quote. Return `{confirmed: bool, quote, correctedFix}`."
- [ ] **Step 3:** Merge the results. Drop refuted findings and keep them in a `refuted` appendix. Spot-check 5 `ok` claims per cluster by hand to measure the miss rate. If more than 1 in 25 is wrong, re-run that cluster on Opus.
- [ ] **Step 4:** Write `WAVE-1-REPORT.md`: posture summary leading with blockers, a severity table by cluster, top actions ranked, a list of `UNVERIFIABLE-CAC` claims for Stephen with page and claim, the Oct-20 regression results, contradictions, and a "Not in portal lane" section per memory `policy-analysis-report-before-build`.
- [ ] **Step 5:** Commit the report and findings on the audit branch. Stop and present the report. Wait for Stephen's explicit go.

### Task 6: Wave 1 fixes (after go only)

- [ ] **Step 1:** Fix by finding, grouping pages that share a fact through `alsoOn` and `contradictions.json` so one fact changes everywhere at once. Use the parental leave diff as the pattern: cite the paragraph inline with `<Citation source>`, and keep role voice per CLAUDE.md 2.3.
- [ ] **Step 2:** Write one `correction` entry per corrected rule and one `policy-change` entry per unreflected policy change. Use the format of `content/updates/parental-leave-convalescent-order-corrected.mdx`.
- [ ] **Step 3:** Set `lastVerified` to today only on pages where every claim came back `ok` or was fixed. Pages with any `UNVERIFIABLE-CAC` or `unsupported` claim keep their date. Each fully checked cluster with no content change gets one `verification-sweep` entry with `count`.
- [ ] **Step 4:** Run `npm run content:sync`, `npm run lint` and `npm run build`. Discard generated video churn that is line endings only (`git diff --ignore-cr-at-eol --stat -- content/videos` shows nothing).
- [ ] **Step 5:** Re-run Task 5's worker on only the changed pages. Expected: zero non-ok claims except CAC-gated ones.
- [ ] **Step 6:** Commit one commit per cluster and open a draft PR per wave.

### Task 7: Waves 2 and 3

- [ ] Repeat Tasks 5 and 6 for each wave. Wave 3 adds three checks. Citation bodies must match their own source's operative paragraphs and status line, and `externalUrl` must still point at a canonical landing page. `src/lib/*-categories.ts` card text must match its page after the page is fixed. Video catalog `summary` fields must not state rules that contradict wave 1 and 2 findings, and those fixes go in `data/videos-marinenet.json`.

### Task 8: Standing guard

**Files:** Create `scripts/audit/new_message_impact.py`. Modify `package.json`.

- [ ] **Step 1: Failing test.** A fixture new MARADMIN that references `MCO 1050.3J` maps to every page in `source-map.json` whose source set holds 1050.3J.
- [ ] **Step 2: Implement.** Read MARADMIN, ALNAV, PAA and DoDI entries dated after the last audit date in `audit/last-run.json`. Run `amendments.py` matching against the source map. Print the impacted pages per message. Exit non-zero when any impacted page has a `lastVerified` older than the message date.
- [ ] **Step 3:** Add `"audit:impact"`. Document it in CLAUDE.md section 4.6 as a step before shipping updates. Commit.
- [ ] **Step 4:** Offer Stephen a weekly scheduled run after the archive refresh. Create it only on his yes.

## Verification

- Unit: `python -m pytest scripts/audit -q` passes.
- Overlay sanity: Task 2 step 5 resolves the MPLP page to DoDI 1327.06 CH1 plus 051/23, 129/23, 625/24 and 191/26.
- Recall: Task 5 pilot finds the seeded MPLP multiple-events claim. The hand check of `ok` claims keeps the miss rate at 1 in 25 or better.
- Precision: every blocker and major in a wave report carries an Opus-confirmed quote with its paragraph number.
- Build: `npm run content:sync`, `npm run lint` (0 errors) and `npm run build` (exit 0, `[links]` and `[crossrole]` all resolve) after each fix wave.
- Re-audit: changed pages come back all `ok` or CAC-gated.

## Cost Envelope

Wave 1 is about 300 pages (about 420k words of content) plus about 3M tokens of source and amendment text read once per cluster. That is roughly 10 to 12 Sonnet workers and 1 Opus verify per confirmed blocker or major, an estimated 6 to 9M tokens. Waves 2 and 3 run about the same each. The mechanical tasks (0 to 4) use no agents.
