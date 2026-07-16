# Citations Index Content Audit

## Header

- Generated: 2026-07-16
- Repo HEAD: `58c65e4` on branch `claude/coronation-index-audit-ch97si`
- Scope: 518 MDX entries under `content/citations/`. The `_stubs/` subdirectory (223 files) is excluded from content sync and scored out of this audit.
- Reverse index at audit time: 3,265 page-citation links across 518 citations, 86.3 percent alias coverage (6,125 of 7,096 references resolved).
- Companion data: `audit/citations-index-content-audit.json` holds the per-entry record for all 518 files with tier, word count, cited-by count, frontmatter flags, and missing-section list.

## Posture summary

The registry plumbing holds. The content depth does not. 214 of 473 visible citation pages carry bodies under 250 words, short of the gold-standard pattern the collection already defines. Those 214 pages absorb 1,340 of the portal's 3,245 page-citation links, 41 percent of the citation click surface. The most-cited order in the portal, MCO 5000.14D with 171 citing pages, lands the reader on a 236-word outline. The purpose of a citation page is a summary deep enough for the reader to understand the policy without opening the source. Most of the index misses the bar.

One repo-hygiene note first. No visible page in this repository ships scaffold text. Every body flagged by the scaffold-marker scan is either a deliberately hidden clarification stub or a false positive, source-quoted campaign dates reading "to TBD" in two MARADMINs. The scaffold page in the 2026-07-16 screenshot is a deployment problem, covered next.

## Finding 0. The deployed site serves content this repository does not contain

The live cloud.gov deployment renders `/citations/cfr-31-900-904` with a scaffold body reading "Scaffolded entry (clean-class batch 2026-06-22). Set externalUrl and confirm lastVerified after a source check, then move from _stubs into content/citations and run npm run content:sync."

The entry `cfr-31-900-904` exists nowhere in this repository. Not in `content/citations/`, not in `content/citations/_stubs/`, not in the git history of any branch. The repo `_stubs/` manifest holds 223 files and none of them touch 31 CFR.

Conclusion: the deployment builds from a working tree carrying stub batches never pushed to origin, and at least one batch (clean-class, 2026-06-22) landed stub files directly in the live `content/citations/` directory of a tree other than this one. Until the source tree reconciles with origin, no repo-side authoring work reaches the page in the screenshot.

Action items.

1. Diff the local `D:\Coding\SemperAdminPortal` working tree against `origin/main`. Push or discard the clean-class batch deliberately.
2. Confirm the cloud.gov build pipeline pulls from origin main, not from a local tree.
3. If any batch moved stub-bodied files into live `content/citations/`, pull them back to `_stubs/` until authored. Scaffold text on a public page undercuts trust in every neighboring page.

## The standard, what a proper page holds

Four gold-standard bodies already live in the collection. Match them.

| Entry | Words | Sections |
|---|---|---|
| `mco-1500-60a` | 884 | Scope, Audience, Cadence, Risk levels, Enclosure map, use rules, prohibitions, handoff, higher policy, doctrine, Status |
| `mco-5210-11f` | 742 | Scope, Audience, Enclosure and chapter map, higher policy, doctrine, Lifecycle, Implementation venues, Status |
| `mco-3504-2a` | 549 | Scope, Audience, OPREP-3 categories, timing, Enclosure map, higher policy, Status |
| `dodi-1332-14` | 456 | Scope, Audience, Operative content, higher policy, References, Status |

Six core sections define the floor, per `audit/CITATION_AUTHORING_PROMPT.md` Section 3.

1. Scope. What the document governs, with the Marine Corps angle.
2. Audience. Billets and roles reaching for the document.
3. Operative map. Enclosure map, chapter map, or operative-content section walking the substance.
4. Connection to higher policy. Statutory and DoD parents.
5. Connection to Marine Corps doctrine and lower policy. Sibling and child issuances.
6. Status. Signed date, cancellation chain, sponsor, revision flags.

Target 450 to 900 body words. A reader finishing the page holds a working understanding of the policy, its structure, and where it sits in the authority chain.

## Tier definitions and counts

Tiers score the 473 visible entries. The 45 hidden entries are excluded from the work queue, 5 of them carry deliberate scaffold bodies documenting non-existent order numbers and stay hidden by design.

| Tier | Rule | Visible count | Share of citation links |
|---|---|---|---|
| B, thin | body under 120 words | 90 | 313 links |
| C, partial | 120 to 249 words | 124 | 1,027 links |
| D, full | 250 words or more | 259 | 1,905 links |

Needs-work total: 214 pages, 1,340 links, 41 percent of the portal's citation click surface.

Depth alone is not the whole bar. 102 of the 259 D-full entries miss three or more of the six core sections. Those pages read long but lose the uniform structure users learn on gold-standard pages. They form a lower-priority structural pass, Phase 4.

## Priority queue

Ranked by citing-page count from `src/generated/citations-reverse.json`. Authoring effort concentrates where clicks land.

- Top 10 pages clear 836 links, 62 percent of needs-work links, 26 percent of all citation links.
- Top 30 pages clear 1,043 links, 78 percent of needs-work links.
- Top 50 pages clear 1,120 links, 84 percent of needs-work links.

### Phase 1. Top 10, highest leverage

| Cited by | Words | Tier | Entry |
|---|---|---|---|
| 171 | 236 | C | `mco-5000-14d` MCAP, Marine Corps Administrative Procedures |
| 148 | 177 | C | `dodfmr-vol-7a` DoDFMR Volume 7A, Military Pay Policy, Active Duty |
| 130 | 246 | C | `mco-p1070-12` IRAM, Individual Records Administration Manual |
| 106 | 176 | C | `mctfsprium` MCTFS PRIUM parent entry |
| 92 | 94 | B | `mco-1001r-1l` MCRAMM, Reserve Administrative Management Manual |
| 48 | 137 | C | `mco-5800-16` LSAM parent, Legal Support and Administration Manual |
| 37 | 238 | C | `mco-4650-39a` Defense Travel System (DTS) |
| 36 | 245 | C | `secnav-m-5210-1` DoN Records Management Manual |
| 34 | 173 | C | `mco-1300-8` Marine Corps Personnel Assignment Policy |
| 34 | 245 | C | `mco-1650-19j` Administrative and Issue Procedures for Decorations, Awards, and Honors |

These ten documents anchor pay, records, reserve admin, legal admin, travel, assignment, and awards. Every one is a foundational manual a reader hits from dozens of pages. Each earns the full gold-standard treatment at the top of the word range, 600 to 900 words, because each is an umbrella manual with a chapter structure worth mapping.

### Phase 2. Ranks 11 to 30

`secnav-m-5210-2`, `mco-3000-13b`, `mco-5800-16-vol-12`, `dodi-1000-13`, `mco-5800-16-vol-1`, `mco-7300-21b`, `mctp-3-30g`, `secnavinst-5211-5f`, `mco-5216-20`, `mco-5800-16-vol-11`, `dodi-1327-06`, `maradmin-604-24`, `mco-5110-4b`, `mco-7220-12r`, `mctfsprium-20103`, `dodi-4525-09`, `secnavinst-5210-16`, `dodi-1322-25`, `dodi-1340-09`, `fpm-vol-1`.

Clears cumulative coverage to 78 percent of needs-work links.

### Phase 3. Remaining 184 thin and partial pages, batched by type

Batching by document type keeps one source family and one body shape per session.

| Type | Pages | Notes |
|---|---|---|
| MCO | 78 | Standard six-section shape |
| MARADMIN | 53 | Shorter MARADMIN shape per the authoring prompt |
| PAA | 23 | Pay advisory shape, action language plus references |
| DODI | 12 | Standard shape |
| MCTFSPRIUM | 10 | Paragraph-level entries, see externalUrl policy call below |
| DD-FORM | 7 | Form purpose, routing, system of record |
| SECNAVINST, OTHER | 7 each | Standard shape |
| FPM | 5 | Volume map shape |
| DODFMR, NAVMC | 4 each | Volume map shape |
| SECNAV | 3 | Manual shape |
| MCBUL | 1 | Bulletin shape |

### Phase 4. Structural pass on long pages

102 D-full entries miss three or more core sections. No new research required in most cases, reshape existing prose into the standard sections and fill gaps from the source. The JSON companion lists the missing sections per entry.

## Frontmatter gaps found in passing

- `externalUrl` missing on 70 visible entries. 63 are MCTFSPRIUM paragraph entries and 5 are FPM volumes, system manuals without a public canonical landing page. One decision resolves all 68: either point the parent entry at a canonical landing page and leave paragraph children internal by design, or record the no-URL posture in CLAUDE.md Section 4.5 so future audits stop flagging them.
- `effectiveDate` missing on 226 visible entries. Sweep this during body authoring, the date comes off the source document already open on the desk.

## Source-pass flags from Phase 1 evidence mining (added 2026-07-16)

Phase 1 authoring ran on in-repo evidence because the session's network policy blocks the policy hosts. The evidence sweep surfaced contradictions between portal surfaces. Each needs a source check to settle which side is right, then a sweep of the losing side's pages.

1. LSAM volume labels. The registry volume entries, authored from source PDFs, and the older `content/marines/` topic pages disagree wholesale on volume subjects. The topic pages call Vol 6 NJP, Vol 5 court-martial procedure, Vol 8 admin separation, Vol 4 claims. The registry places NJP at Vol 14, military justice at Vol 16, admin separations at Vol 11, claims at Vol 8. The registry side is source-grounded, sweep the marines topic pages.
2. VWAP citation form. Admin VWAP pages cite bare "MCO 5800.16 Chapter 4", the IGMC guide cites "V-16 par 040902", Volume 16 Chapter 4. Normalize to the volume-qualified form.
3. MCO 1650.19J structure. The citation entry and admin pages describe enclosures 1 through 5, every leader awards page cites chapters 1 through 8, and the submission system appears as both MGCAPS and iAPS. The authored body now hedges beyond Enclosure 1.
4. SECNAV M-5210.1 edition split. The registry records the 2007-11-16 revision, roughly 15 admin and IG pages cite a 2019 edition with CH-1, and two finance checklists mislabel it SECNAVINST.
5. IRAM chapter map. `pac-iram-overview.mdx` maps Chapter 4 to performance and Chapter 7 to discipline, the citation entry and inspection JSONs place paragraphs 4005 through 4007 in Chapter 4 and awards in Chapter 6, and a dozen S-1 pages route generic Page 11 entries to Chapter 6.
6. MCRAMM IDT minimum conflict. Reserve admin pages state a 4-hour minimum IDT period, `reserve-pay-and-entitlements.mdx` states 2 hours citing DoDFMR Volume 7A.
7. Duplicate registry entries. `mco-1001r-1` duplicates `mco-1001r-1l`, and `mco-p1070-12k` exists as a hidden locator beside `mco-p1070-12`. Confirm the duplicates stay deliberate.
8. MCO 1300.8 mislabel. The OCONUS sponsorship page titles it the "Assignment, Classification, and Travel System Manual", the subject belonging to MCO 1000.6. Two citation entries still cite the predecessor P1300.8R.
9. Publisher variance. `joining-a-unit.mdx` and `dts-roles-and-routing.mdx` attribute their orders to "Manpower Plans and Policy Division" against the registry's M&RA and MIF attributions.

Flags 10 through 15 surfaced during Phase 2 evidence mining, added 2026-07-16.

10. MARADMIN 604/24 wrong-number attribution, the largest single finding. Roughly 15 admin pages cite MARADMIN 604/24 as the authority for UD/MIPS document storage. The official MARADMIN index and the marines.mil article both confirm 604/24 is Change 1 to the FY25 Cornerstone class dates. Every document-storage claim on those pages carries a wrong message number, and the citation chips resolve to a Cornerstone card. Find the true storage MARADMIN number and sweep `pac-ud-mips-storage.mdx`, `pac-ompf-overview.mdx`, `pac-ompf-submission.mdx`, and the rest.
11. SECNAV M-5210.2 disposition attribution. The IGMC legal guide and two citation entries attribute Part III disposition schedules to M-5210.2. Disposition lives in M-5210.1, the M-5210.2 manual carries the SSIC codes.
12. SECNAVINST 5211.5 revision mix. Portal cites split across 5211.5F, the prior 5211.5E, and the unlettered base, while MCO 5211.5 is a separate Marine Corps order sharing the base number.
13. MCO 5216.20 form variance. Inline citations wrap 5216.20B text with a 5216.20 source string, one entry cites Admin Change 3 against the registry's Change 4, and two unreviewed import stubs for the same order sit in `_stubs/`.
14. DODI 1327.06 edition split. Marines leave pages cite Change 5 of the 2009 instruction dated 2023-08-25, the registry records the 2025-08-07 reissue cancelling the 2009 instruction.
15. MCO 3000.13B revision watch. The IGMC functional area registry lists Unit Readiness under 3000.13 with a 2025-05-15 effective date, newer than the B version's 2020 signature, and one admin page cites the order unlettered.

## Recommended execution order

1. Fix the deployment source mismatch, Finding 0. Nothing else reaches the live site until this lands.
2. Author Phase 1, the top 10. Ten pages, 26 percent of all citation clicks.
3. Author Phase 2, ranks 11 to 30.
4. Run Phase 3 type batches, MARADMIN and PAA batches parallelize well since each entry stands alone.
5. Run the Phase 4 structural pass.
6. Close the frontmatter gaps and record the MCTFSPRIUM externalUrl policy call.

Refresh `lastVerified` only on entries whose source you check during authoring, per CLAUDE.md Section 4.3. Rerun this audit's JSON generator after each phase to track the tier counts down.

End of report.
