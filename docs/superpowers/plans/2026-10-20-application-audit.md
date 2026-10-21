# Application Currency Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Find every place the portal content, citations, inspections, or live deployment fall behind current authority or current build, without changing app content.

**Architecture:** Read-only audit. Eight parallel subagents, one per dimension, each writes one findings file under `audit/2026-10-20/`. Orchestrator spot-verifies the top findings in each file, then merges into `audit/2026-10-20/REPORT.md`. No edit to `content/`, `src/`, `public/`, or `scripts/`.

**Tech Stack:** Next.js 16 static export, MDX collections, zod schemas, Python 3.11 for archive index reads, curl and Playwright for the live site.

**Spec:** CLAUDE.md sections 4.1 to 4.7 (frontmatter, verification cadence, citations registry, updates 90-day rule, video pipeline).

## Global Constraints

- Read-only. No write outside `audit/2026-10-20/`. No commit, no push.
- Policy archive: `E:\GunnyBot\Policies`. Indexes refreshed 2026-10-17 and 2026-10-18. Treat as current authority snapshot.
- Audit date: 2026-10-20. Aging at 12 months past `lastVerified`, stale at 24. Inspections aging at 6, stale at 12.
- Every finding carries: id, severity (blocker, major, minor, nit), file path, claim in portal, current authority, evidence (index key, URL, or command output).
- No fabricated findings. A check a worker cannot run goes to an "Out of scope" list with the reason.
- Copy rules for report prose: no em-dashes, no semicolons, no asterisks, no banned words from CLAUDE.md 6.2.
- Python reading archive files runs with `-I`. PYTHONUTF8=1.

## Output Contract (every task)

File: `audit/2026-10-20/<dim>.md`

```markdown
# <Dimension> audit
Scope: <what was scanned, counts>
## Findings
| ID | Sev | File | Portal says | Current authority | Evidence |
## Out of scope
## Method
<commands run, reproducible>
```

---

### Task 1: Directive currency (MCO, NAVMC, DoDI, DoDD, SECNAV, MCBul)

**Files:** Read `content/citations/*.mdx`, `E:\GunnyBot\Policies\{mcpel,dodi,dodd,secnav}_index.json`, `dodi_change_report.json`, `dodd_change_report.json`. Write `audit/2026-10-20/directive-currency.md`.

- [ ] Parse every citation `number` and `type`.
- [ ] Match against the index. Flag cancelled, superseded (newer letter suffix or newer change), and missing-from-index entries.
- [ ] Count content files citing each flagged directive (grep across `content/`).
- [ ] Rank by cited-by count.

### Task 2: MARADMIN and ALMAR/ALNAV currency

**Files:** `content/citations/maradmin-*.mdx`, `content/**/*.mdx`, `content/updates/*.mdx`, `E:\GunnyBot\Policies\maradmin_index.json`, `almar_index.json`, `alnav_index.json`. Write `audit/2026-10-20/message-currency.md`.

- [ ] List MARADMINs signed 2026-07-01 to 2026-10-18 in S-1 lanes (pay, promotions, records, leave, PCS, awards, reserve, separations, retirement, IPAC, MOL, MCTFS, SRB, education benefits, family readiness).
- [ ] Flag lane-relevant messages with no citation entry and no content reference.
- [ ] Flag cited MARADMINs cancelled or superseded by a later message (search later message titles and bodies for "CANCEL", "SUPERSEDE", "UPDATE TO", and the cited number).
- [ ] Flag cited FY25 and FY26 program messages (SRB, promotion boards, PME) replaced by FY27 versions.

### Task 3: Finance and procedure publications (FPM, PAA, PAAN, PRIUM, TAN, FAN, SRB, MPO, DoDFMR, DTMO)

**Files:** matching indexes under `E:\GunnyBot\Policies`, citations of those types, `content/admin/**`. Write `audit/2026-10-20/finance-pub-currency.md`.

- [ ] Compare each cited volume, change, or PAA number against the newest in its index.
- [ ] Flag newer PAA, PAAN, TAN, FAN, PRIUM changes since 2026-07-01 touching portal topics with no portal reflection.
- [ ] Flag DoDFMR volume chapters cited with an older revision date.

### Task 4: Pay and entitlement figures

**Files:** every MDX and tool source under `content/` and `src/` stating dollar amounts, rates, percentages, limits (base pay, BAH, BAS, COLA, OHA, TSP limits, SGLI premium, FSA, HFP/IDP, per diem, SRB multiples, separation pay, retirement multipliers). Write `audit/2026-10-20/pay-figures.md`.

- [ ] Extract every rate with file and line.
- [ ] Verify against current authority (DFAS pay tables, DoD BAS announcement, DoDFMR Vol 7A, IRS TSP limits, VA SGLI). Cite the URL.
- [ ] Flag outdated year labels (CY2025 tables presented as current).

### Task 5: Verification posture and content hygiene

**Files:** all collections. Write `audit/2026-10-20/verification-posture.md`.

- [ ] Compute aging and stale counts per collection from `lastVerified`, inspections on the 6/12 cadence.
- [ ] List missing `lastVerified`, `effectiveDate` gaps on citations, frontmatter schema failures (run `node scripts/citations-validate.mjs` if node_modules present).
- [ ] Count `/updates` entries inside the 90-day window. Flag entries with `supersededBy` pointing to a missing slug.
- [ ] Flag `content/citations/_stubs/` backlog and content in routeless collections.

### Task 6: Inspection checklists

**Files:** `content/inspections/**`, `E:\GunnyBot\Policies\{mcaat,fa_checklists}_index.json`, IGMC sources. Write `audit/2026-10-20/inspections-currency.md`.

- [ ] Compare each program `effectiveDate` and revision against the newest checklist in the index.
- [ ] Flag programs past 6 months `lastVerified`.
- [ ] Flag referenced orders inside checklist items that Task 1 would mark cancelled (independent grep against mcpel).

### Task 7: Build health and deployment drift

**Files:** repo root. Write `audit/2026-10-20/build-deploy.md`.

- [ ] `npm ci`, then `npm run lint`, `npm test`, `npm run type-check`. Record pass, fail, counts.
- [ ] Compare live footer build date and live sitemap URL count against main HEAD and a local route count.
- [ ] Check last GitHub Actions deploy runs (`gh run list --workflow`), failing workflows (Mirror to GitLab failing).
- [ ] `npm audit --omit=dev` summary.
- [ ] Run `git status` at end. Revert nothing tracked, report any tracked file the commands changed.

### Task 8: Live site SEO and link integrity

**Files:** live site `https://semperadmin.github.io/SemperAdminPortal/`. Write `audit/2026-10-20/seo-live.md`.

- [ ] robots.txt, sitemap index, sitemap-0 URL count, sample 15 URLs stratified across role routes and reference surfaces.
- [ ] Per page: status, title, meta description, canonical, og tags, JSON-LD, h1 count, lang, basePath correctness of assets.
- [ ] HEAD-check every `externalUrl` in `content/citations/*.mdx` (rate-limited, 5 concurrent). Report 4xx, 5xx, redirects to generic landing pages.
- [ ] Out of scope: Core Web Vitals field data, Search Console coverage, backlinks.

### Task 9: Orchestrator verification and merge

- [ ] Spot-check the top three findings per file against source.
- [ ] Downgrade or drop any finding failing the check, note why.
- [ ] Write `audit/2026-10-20/REPORT.md`: posture summary, severity table, top 15 actions ranked, per-dimension links.
