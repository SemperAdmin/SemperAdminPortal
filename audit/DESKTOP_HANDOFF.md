# Desktop Handoff - Citations Index Source Pass

Paste this file's Session Prompt into Claude Code on the desktop, or open the repo and tell the session to read `audit/DESKTOP_HANDOFF.md` and execute it. The desktop session holds two things the remote session lacked, the local policy archive at `E:\Policies` and unrestricted access to marines.mil and the DoD issuance sites. Every remaining task needs one or both.

## 1. State of the work

Branch `claude/coronation-index-audit-ch97si`, PR 74, roughly 20 commits. Read `audit/citations-index-content-audit.md` for the full audit and flag list.

Done on the branch.

- Scaffold guard in `scripts/sync-content.mjs`. Any visible citation body carrying scaffold text fails every build, local and CI.
- All 473 visible citation entries authored to the section standard. 442 at full depth, the 31 short ones are deliberate patterns, LSAM per-volume entries, MCTFSPRIUM source-text children, gated FPM volumes, and revision locators.
- LSAM restructured to a citation per volume with the parent as a directory. Volume-qualified references resolve to volume entries.
- Structural debt zero. No non-pattern entry misses core sections.
- `scripts/citations-score.py` re-runs the tier scoring after any edit. Run `npm run content:sync` first.

Not done, and impossible from the remote session. Everything below.

## 2. Step zero, reconcile this machine

1. `cd D:\Coding\SemperAdminPortal`, then `git fetch origin`, `git status`, `git diff origin/main --stat`. Commit or discard local work deliberately. Any stub-bodied file sitting in live `content/citations/` moves back to `_stubs/`, the build guard refuses to ship it anyway.
2. Merge or review PR 74, then pull the result.
3. Rebuild the cloud.gov deployment from a clean checkout of main. `npm run build:cloudgov`, then `cf push`. The live site currently serves scaffold pages from an unpushed tree, `/citations/cfr-31-900-904` is the proof. Nothing in the repo reaches the public site until this happens.

## 3. The work queue

### 3.1 Source verification pass, the big one

Every authored body grounds in portal-internal evidence. `lastVerified` was deliberately left untouched on every entry. The pass, per entry, highest cited-by first (the JSON in `audit/` carries the counts).

1. Open the source, `E:\Policies` or the canonical site.
2. Confirm the body's claims, chapter maps, paragraph cites, dates, supersession chains.
3. Fix what the source contradicts.
4. Set `lastVerified` to today. Only after a real source check, per CLAUDE.md Section 4.3.
5. Resolve the entry's Status cautions, most name the exact conflict to settle.

Enumerate the recorded cautions with `grep -rn "caution\|source pass\|Confirm " content/citations/ --include="*.mdx"`.

### 3.2 The mis-cite ledger, wrong numbers on citing pages

Each item needs the true document identified from source, then the citing pages swept.

1. MARADMIN 604/24 cited for UD/MIPS document storage on roughly 15 pages. The official index says 604/24 is Cornerstone class dates. Find the real storage MARADMIN, then sweep `pac-ud-mips-storage`, `pac-ompf-overview`, `pac-ompf-submission`, `pac-navmc-10922-processing`, `pac-ompf-document-categories`, `pac-records-disposition`, `pac-iram-overview`, `s1g1-ud-mips-transactions`, `s1g1-page-11-entries`, three `iandi-` accession pages, and two marines awards pages.
2. Basic Needs Allowance cited to wrong numbers. `marines/basic-needs-allowance.mdx` cites 037/23 (CWO promotions) and 537/23 (Command Profile reactivation). MCAAT `admin-milpay.json` pairs 002/23 (COVID cancellations) with BNA recertification. Find the true BNA MARADMINs.
3. MARADMIN 291/19 cancelled in 2021, still cited for the pre-relief DEOCS trigger on the commander turnover checklist. Point the checklist at the current authority.
4. LSAM volume labels on `content/marines/` legal topic pages are wholesale wrong. Known corrections, NJP to Vol 14, courts-martial to Vol 16, admin separation to Vol 11, claims to Vol 8, legal assistance topics to Vol 5. Confirm the rest against the signed volumes, investigations, Article 138, SCRA, victim topics, foreign jurisdiction.
5. Subject mislabels to fix or confirm. MCO 1700.32 cited for fraternization (MCPEL says Leadership Scholar Program), MCO 6260.3 cited as dental readiness (MCPEL says Hearing Conservation), MCO 7220.13 cited as ACIP (MCPEL says MCAAT), `mco-1300-8` labeled with MCO 1000.6's ACTS title on the OCONUS sponsorship page, `dodi-1341-13` tagged Dependent Care on the FSA page (subject is Post-9/11 GI Bill), MARADMIN 115/24 paired with FSH reporting against its PCS-allowance subject.
6. MCO 6320.4 externalUrl opens the 2007 base order, MCPEL lists 6320.4A of 2022-12-16 as current.

### 3.3 Revision currency checks

- MCO 3000.13B, the IGMC registry lists Unit Readiness effective 2025-05-15, newer than the B signature. Confirm whether a C revision exists.
- NAVMC 1720.1B entry versus MCPEL listing 1720.1C as current.
- SECNAVINST 5211.5F versus the E and unlettered cites across the portal.
- SECNAV M-5210.1, registry records the 2007 revision, checklists cite a 2019 edition with CH-1.
- DODI 1327.06, entries follow the 2025-08-07 reissue, several marine pages still cite Change 5 of the 2009 instruction.
- MCO 5216.20B change level, CH-4 against one CH-3 cite.
- MCO P1070.12K IRAM chapter map, the portal carries three conflicting chapter assignments, settle from the source.
- MCO 1650.19J structure, enclosures versus chapters, and MGCAPS versus iAPS in Enclosure 5.
- MCRAMM IDT minimum, 4-hour claim on reserve pages versus 2-hour claim on the pay page.

### 3.4 Frontmatter sweep

- 226 visible entries lack `effectiveDate`. Pull the date off each source document during the 3.1 pass, same open-the-PDF motion.
- Signature-date gaps, several MARADMIN entries carry an `effectiveDate` differing from the official index `date_signed`. Each affected entry names the gap in its Status. Settle from the message header and fix frontmatter.
- 70 visible entries lack `externalUrl` by design, 63 MCTFSPRIUM children and the FPM family behind gates. Record the no-URL posture in CLAUDE.md Section 4.5 so future audits stop flagging it.

### 3.5 Open decisions, yours to make

1. `mco-1001r-1` duplicates `mco-1001r-1l`. Keep as a locator or merge and redirect aliases.
2. Stub cleanup. `content/citations/_stubs/` holds 223 files, 214 sharing names with authored live entries. Delete the superseded stubs or keep the directory as scaffolding.
3. `push-citations-work.ps1` and `push-stubs-hidden.ps1` at repo root reference finished work. Delete or archive.

## 4. Working rules for the desktop session

- Writing constraints from CLAUDE.md Section 6 apply to every body edit. Scan each edited file, frontmatter alias lines and pre-existing verbatim blockquotes exempt:
  `grep -n -iE '\b(can|may|just|that|actually|probably|basically|could|however|enable[sd]?|unlock|discover|remarkable|stark|testament)\b|—|;|\*' <file>`
- `lastVerified` moves only on a real source check. `effectiveDate` comes off the document, not the index row, when the two disagree note which one you used.
- After each work session, `npm run content:sync`, `python scripts/citations-score.py`, `npm run lint`, then commit with a message naming what was verified against source.
- Entries carry Status cautions naming their own open questions. Resolve the caution and delete the caution line in the same edit.

## 5. Session Prompt, paste this to start

Read audit/DESKTOP_HANDOFF.md and audit/citations-index-content-audit.md in this repo. Execute the work queue in Section 3 in order. Start with step zero, reconcile this working tree with origin and confirm the deployment pipeline plan with me before pushing to cloud.gov. Then run the source verification pass from Section 3.1, working from E:\Policies and the canonical policy sites, highest cited-by first per audit/citations-index-content-audit.json. Follow the working rules in Section 4 without exception. Batch commits by work-queue item. Ask me before deleting anything under content/citations/_stubs/ and before the Section 3.5 decisions.

End of handoff.
