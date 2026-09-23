# IGMC Checklist Comparison, 11 September 2026

Live source: https://www.igmc.marines.mil/Divisions/Inspections-Division/Checklists/ (page updated 8 September 2026). All 14 tracked DOCX files pulled today and parsed with `scripts/parse-igmc.py`, then diffed item by item against `content/inspections/igmc/`.

## Bottom line

- 13 of 14 tracked checklists match the live DOCX at item level after today's DTS refresh.
- 1050 Leave, Liberty and Administrative Absence is short four items. The DOCX states 11 questions. The portal holds 7. Items 0108 to 0111 sit outside the Word table and the parser skips them.
- 5210 Records Management item 0501 dropped MARADMIN 200/25 from its reference list at source. Portal still lists it.
- Verification badges are wrong for the right reason. 13 of 14 `lastVerified` values equal the DOCX revision date, not a portal check date. Under the 6 and 12 month inspection cadence, 7 pages read stale and 4 read aging while their content matches source.
- Inspector guides lag in two places. 5110.2 guide covers 80 of 89 codes. 4650.39 guide quotes the pre-July wording.
- Eight S-1 relevant functional areas have no portal page. DOCX for all eight already sit in the local policy index.

## Table A. Tracked checklists

Posture uses the inspection cadence. Aging at 6 months, stale at 12 months past `lastVerified`, measured on 2026-09-11.

| FA | Title | Category | Sponsor | Effective (site) | DOCX revised | Items portal / live | Item delta | lastVerified | Posture | Guide | Action |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1050 | Leave, Liberty and Administrative Absence | Non-CoRE | M&RA (MPO) | 2025-09-03 | 3 Sep 2025 | 7 / 11 | Missing 0108, 0109, 0110, 0111 | 2025-09-03 | stale | 11 items, ahead of checklist | Add four items, fix parser |
| 1320 | Marine Corps Sponsorship Program | CoRE, was Non-CoRE | M&RA (MF) | 2026-09-08 | 24 Mar 2025 | 6 / 6 | None | 2026-09-11 | fresh | 6 items | Done today |
| 1610 | Performance Evaluation System | CoRE | M&RA (MMPB) | 2025-05-15 | No revised line | 19 / 19 | None | 2025-04-18 | stale | 19 items | Bump lastVerified |
| 1650 | Military Awards | CoRE | M&RA (MMPB) | 2025-06-03 | 3 Jun 2025 | 18 / 18 | None | 2025-06-03 | stale | 18 items | Bump lastVerified |
| 1900.16 | Separation, Retirement and Limited Duty | CoRE | M&RA (MMSR) | 2025-03-24 | 24 Mar 2025 | 19 / 19 | None | 2025-03-24 | stale | 19 items | Bump lastVerified |
| 3040 | Casualty Affairs | CoRE | M&RA (MF) | 2025-05-15 | 21 Mar 2025 | 25 / 25 | None | 2025-03-21 | stale | 25 items | Bump lastVerified |
| 4600.40 | Government Travel Charge Card Program | CoRE | P&R (RFF) | 2026-03-25 | 25 Feb 2026 | 30 / 30 | None | 2026-02-25 | aging | 30 items | Bump lastVerified |
| 4650.39 | Defense Travel System | CoRE | P&R (RFF) | 2026-07-20 | 20 Jul 2026 | 21 / 21 | 14 reworded, 1 reference, applied today | 2026-09-11 | fresh | 21 items, pre-July wording | Guide re-issue |
| 5110.2 | Postal Affairs and Official Mail, Organization | CoRE | M&RA (MF) | 2026-04-15 | 6 May 2026 | 89 / 89 | None | 2026-05-06 | fresh | 80 items, 9 codes missing | Guide re-issue |
| 5210 | Records Management | CoRE | AR (ARD) | 2025-09-23 | 16 Sep 2025 | 15 / 15 | 0501 reference drops MARADMIN 200/25 | 2025-09-16 | aging | 15 items | Apply reference, bump |
| 5214 | Reports Management | Non-CoRE | AR (ARDB) | 2024-04-29 | 29 Apr 2024 | 11 / 11 | None | 2024-04-29 | stale | 11 items | Bump lastVerified |
| 5215 | Directives Management | CoRE | AR (ARDB) | 2026-02-20 | 20 Feb 2026 | 6 / 6 | None | 2026-02-20 | aging | 6 items | Bump lastVerified |
| 5800.16 | Legal Administration | CoRE | HQMC (JAD) | 2025-09-23 | 17 Sep 2025 | 45 / 45 | None | 2025-09-17 | aging | 45 items | Bump lastVerified |
| 5800.16 | Victim and Witness Assistance Program | CoRE | JAD | 2024-01-11 | 11 Jan 2024 | 72 / 72 | None | 2024-01-11 | stale | 72 items | Bump lastVerified |

Posture count. Stale 7. Aging 4. Fresh 3.

## Per-checklist notes

### 1050 Leave, Liberty and Administrative Absence

The DOCX header reads Total Questions 11. Python-docx table iteration returns rows through 0107. Items 0108 to 0111 exist in the document body after the table closes, so `parse-igmc.py` never sees them. The inspector guide, rebuilt by the SME and verified 2026-05-20, already carries all four. The portal summary line still says 11 items, which exposes the gap on the page itself.

Missing items as they read at source.

- 0108. Is the command ensuring Marines execute Active-Duty Parental Leave in increments not less than 7 days. References DoDI 1327.06 Sect 3.11.c.(7)(a), MARADMIN 051/23.
- 0109. Are Marines charged leave when they check out on a non-duty day. Reference DoDI 1327.06 Sect 5.1.b.(1).
- 0110. Does the command have procedures for convalescent leave following childbirth or perinatal loss. References DoDI 1327.06 Sect 3.11.c.(13), BUMED NOTE 6000, MARADMIN 129/23.
- 0111. Does the command have procedures and requirements for allocating bereavement leave. References DoDI 1327.06 Sect 3.11.j.(5), MARADMIN 220/23.

### 1320 Marine Corps Sponsorship Program

Redesignated CoRE effective 8 September 2026. Sponsor on the listing is M&RA (MF). The DOCX did not change, revision date stays 24 March 2025 with six items. Portal updated today. Update entry authored.

### 1610, 1650, 1900.16, 3040

Item parity confirmed. No category, sponsor, or date movement at source. The only open action is the verification date. 1900.16 sponsor on the listing reads M&R (MMSR), a typo on the site. Portal keeps M&RA (MMSR).

### 4600.40 Government Travel Charge Card Program

Site note says updated references. The portal parse from 25 February 2026 already carries them. Parity confirmed.

### 4650.39 Defense Travel System

Reissued 20 July 2026. Fourteen of 21 items reworded, 0209 reference narrowed to MCO 4650.39A chapter 6 paragraph 4.a. Applied today with an update entry. The inspector guide still summarizes the older text on 0209 and the training items 0105, 0106, 0205, 0206. Guides come from the SME rebuilt DOCX, so this needs a re-issued guide rather than a hand edit.

### 5110.2 Postal Affairs and Official Mail, Organization

Checklist matches at 89 items. Site effective date is 15 April 2026 while the DOCX revision line reads 6 May 2026, so the SME revised after publication. The inspector guide holds 80 codes and lacks 0152, 0153, 0154, 0155, 0156, 0217, 0218, 0219, 0314. Nine of the ten codes the site lists as added in the reorganization.

### 5210 Records Management

Item 0501 at source now cites MCO 5750.1H only. Portal still appends MARADMIN 200/25. Apply the source reference list.

### 5214, 5215, 5800.16 Legal, 5800.16 VWAP

Item parity confirmed. Verification date only.

## What lastVerified has been measuring

Thirteen of fourteen `lastVerified` values equal the DOCX revision date. The field was populated at parse time from the document, not from a portal source check. The staleness badge therefore reports source age. Under CLAUDE.md 4.3 the field means the last real source check, and the inspection cadence flips aging at 6 months. A checklist IGMC has not touched in a year reads stale on the portal even when someone confirmed it last week.

Two options.

1. Keep the schema. Set `lastVerified` to the check date on every sweep. Today qualifies as a real source check for all 14.
2. Add an optional `revisedDate` to `inspectionSchema` for the DOCX revision line, render it in the meta row, and keep `lastVerified` as the check date. Small schema change, clearer page.

## Table B. Candidate functional areas with no portal page

All eight DOCX files sit in `content/inspections/_policy-indexes/fa_checklists_index.json`, downloaded 2026-04-28. Ranked by inspection weight and S-1 ownership.

| Rank | FA | Title | Category | Sponsor | Effective | Why |
|---|---|---|---|---|---|---|
| 1 | 1040 | Career Planning Program | CoRE | M&RA (MMEA) | 2024-03-07 | Career planner sits in S-1, CoRE on every inspection |
| 2 | 1700.23 | Request Mast Procedures | CoRE | IGMC | 2024-07-29 | Adjutant and S-1 run the log, CoRE |
| 3 | 5040 | Command Inspection Program | CoRE+ | IGMC (IGI) | 2023-01-13 | Governs the inspection itself, commander and S-1 both own it |
| 4 | 1700.37 | Personal Financial Management Program | CoRE | M&RA (MF) | 2026-02-02 | Reissued this year, CoRE |
| 5 | 1742.1 | Voting Assistance Program | CoRE | M&RA (MF) | 2025-05-15 | Unit voting assistance officer is an S-1 collateral |
| 6 | 1700.31 | Transition Readiness Program | CoRE | M&RA (MF) | 2025-05-15 | Separations pipeline pairs with 1900.16 |
| 7 | 5512 | Identification Cards | Non-CoRE | M&RA (MF) | 2025-05-15 | DEERS and RAPIDS sit in IPAC and S-1 |
| 8 | 5110.1 | Postal Affairs, Military Postal Activity | CoRE+ | M&RA (MF) | 2025-06-03 | Pairs with 5110.2 for commands with a postal activity |

Not recommended for the portal. 5351.1 Operational Stress Control and Readiness, 5700.45 Communication Strategy and Operations, 1700.36 Single Marine Program. Unit programs with no S-1 desk.

## Parser defects surfaced

1. Rows outside the closing `w:tbl` are skipped. Cost 1050 four items. Fix is to walk body paragraphs after the last table for the same code pattern.
2. `applicabilityLevel` came back null for 5110.2 and 5800.16 Legal. Portal values survive only because earlier parses or hand edits filled them.
3. Output encoding follows the Windows code page. Run with `PYTHONUTF8=1` or set encoding on the write.
4. `evidenceHint` is omitted when empty. Schema expects a nullable string, so add `null`.

## Sequence, executed 2026-09-11

1. Done. 1050 holds 11 items. Parser now reads body-paragraph items, in-order subsection headers, tab-separated codes, content-control cells, and multi-header cells. Correction entry `leave-checklist-four-items-restored`.
2. Done. 5210 item 0501 cites MCO 5750.1H only. Correction entry `records-checklist-0501-reference-corrected`.
3. Done. `lastVerified` set to 2026-09-11 on all 14. Sweep entry `igmc-checklists-verified-september-2026` with count 10. The same pull corrected subsection headings on 1610, 4600.40, 5110.2, and 5210 with no item movement.
4. Decided for option 1. `lastVerified` is the portal check date from this sweep forward. Option 2 stays open as a schema improvement.
5. Open. 4650.39 and 5110.2 inspector guides need SME rebuilt DOCX. No portal action available.
6. Done. All eight Table B checklists authored. 22 IGMC checklists on the portal. New-content entry `eight-igmc-checklists-added`. Taxonomy explainer links the seven CoRE and CoRE+ entries by programKey. No inspector guides exist for the eight yet.
7. Done. `timeZone: "UTC"` applied at every ISO date render, including the naval letter builder date line and the citations browser.

Open after this pass.

- Inspector guides. 4650.39 refreshed 2026-09-11 for the July wording with DoD FMR Vol 5 quotes. New guides for 1700.23, 1700.31, and 1040. All 223 quotes machine-walked verbatim against extracted source text and the SME accepted the inspection steps the same day, so all four carry `verified: true` and `verifiedAtSource: true`. 5110.2 still lags source. 5040, 1700.37, 1742.1, 5512, and 5110.1 have no guide yet. 5040 and 5512 are buildable from orders already on hand.
- MCO 1700.31A (2 Mar 2026) cancels MCO 1700.31 and incorporates MARADMIN 632/19. The 1700.31 FAC revised Feb 2024 still cites the cancelled order and the MARADMIN's 45-day UTC training figure. The current order sets 60 days. Guide applies the current order and flags the delta.
- Optional `revisedDate` schema field to carry the DOCX revision line separately from the check date.
- 5110.1 codes 0101 to 0192 sit under one header cell naming Administration, Finance, Operations, and Quality Management. The portal shows that joined label because the source does not delineate which codes belong to which.


## Erratum, 23 September 2026

The 5210 finding above is wrong. The source DOCX never dropped MARADMIN 200/25 from item 0501. The References line wraps across paragraphs, and the parser read only the first paragraph, so the tail landed in the question text and the diff saw a dropped reference. The same defect cut the reference list on 9 of 15 items in 5210 and on 4 items across 3040, 5040, and 1050. A full re-pull of all 22 checklists on 23 September confirmed the rest. The parser now keeps every paragraph of a References block. See content/updates/records-checklist-references-restored.mdx.
