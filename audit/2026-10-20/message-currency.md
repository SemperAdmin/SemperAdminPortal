# Message currency audit

Audit date 2026-10-20. Read-only pass. Lens: MARADMIN, ALMAR, ALNAV currency against the portal.

## Scope (counts)

| Item | Count |
| --- | --- |
| CY2026 MARADMIN files in E:\GunnyBot\Policies\MARADMINS\CY2026 (with readable sidecar) | 465 (001/26 to 501/26) |
| MARADMINs signed 2026-07-01 to 2026-10-17 in the archive | 170 (excludes 041/26, see Method) |
| Window messages the portal already cites | 12 (323, 325, 341, 349, 357, 380, 433, 436, 467, 472, 480, 501) |
| Window messages in an S-1 lane with no citation and no content reference | 53 (14 are monthly promotion rosters) |
| Window messages out of lane | 105 |
| Archive numbers missing inside the window (cannot be audited) | 29 (360 to 377 and 451 to 460, plus 345 sidecar unreadable but PDF present) |
| Distinct MARADMIN numbers the portal cites (content, src, registry) | 259 (37 are /26) |
| Cited messages checked for cancellation, change, update, supersession | 259 |
| ALMAR cited / ALNAV cited | 5 / 8 |
| ALMAR in window / ALNAV in window | 11 / 22 (none of the ALMAR are in lane, one ALNAV is) |
| Findings | 12 (4 blocker, 4 major, 4 minor) |

502/26 and 503/26 are excluded per the instruction. 450/26 is cited by 9 portal files and is present in the portal's copy of the index (OTEIP, 9/25/2026) but absent from the E: archive.

## Findings

| ID | Sev | Portal file(s) | Portal says | Current authority | Evidence |
| --- | --- | --- | --- | --- | --- |
| MC-01 | Blocker | content/commander/turnover-30-day-actions.mdx, turnover-90-120-and-recurring.mdx, battle-rhythm-overview.mdx, battle-rhythm-quarterly.mdx, turnover-overview.mdx, src/lib/commander-obligations.ts | Cites MARADMIN 350/11 for fund control training. The CO is "Tier 1 Fund Control Personnel". Fiscal law training every 3 years, DON Budget Execution Course "required in addition", Comptroller status reports due "NLT 7 April and 7 October" (Para 6), Tier 1 and Tier 2 lists. | MARADMIN 490/26 (10/13/2026) Mandatory Training for All Personnel Involved in the Administrative Control of Funds to Prevent ADA Violations. It cancels and replaces 468/26 (10/1/2026), which cancelled 350/11. | 468/26 para 2: "MARADMIN 350/11 is hereby canceled and is replaced with this MARADMIN." Para 3.A: "the previous tier system has been eliminated" (FCP vs Non-Comptroller Personnel). Para 4.A: CO completes Funds Control for Commanding Officers course within 2 weeks of assuming command, which satisfies appropriations law, DON budget execution, and ADA initial training, then refresher every 3 years. Para 4.C: Budget Execution Course is for G-8, Comptrollers, Deputy Comptrollers, Budget Officers once in DON tenure. Para 4.D: ADA training annually for the same group. Reporting is semiannual NLT 31 March and 30 September. Para 4.E: non-compliant FCP lose delegation of authority. Portal pages still teach the tier model and the 7 April and 7 October dates. 490/26 diff against 468/26 changes only the cancel line, "once in their DON tenure", and drops "Tier 1" from the reporting sentence. |
| MC-02 | Blocker | content/marines/human-breast-milk-shipment.mdx (lines 88 to 91, 136, 172 and summary) | Eligible expenses include disposable storage bags, cold shipping packages (insulated containers), and refrigeration. Receipts for "storage bags, cold packs". | MARADMIN 603/24 (12/17/2024) Amendment to MARADMIN 574/24. | 603/24 para 1 replaces the 574/24 expense list with "commercial shipping fees (packaging and packing material are not authorized), excess baggage fees, and dry ice or regular ice." Para 2: future expenses only when published in the JTR. Page cites 574/24 only. Page lastVerified 2026-05-04. |
| MC-03 | Blocker | content/marines/body-composition-reporting.mdx (lines 33, 58, 285 and related) | WHtR standard is "less than 0.52" regardless of sex. Cites 066/26 para 6. | MARADMIN 073/26 (2/27/2026) Change 2 to the Advance Notification of Changes to the PFT and Body Composition Evaluation Process. | 066/26 para 6 read "<0.52". 073/26 para 1 rewrites it: "The Marine Corps WHtR standard is less than or equal to 0.52, regardless of sex." Para 2: rest of 066/26 stays. 073/26 appears nowhere in portal content, registry, or src. A Marine at exactly 0.52 passes. The boundary is narrow but it is the pass/fail line. |
| MC-04 | Blocker | content/marines/selective-retention-bonus-and-targeted-mos.mdx (lines 168 to 182, 202, 466, 554), content/marines/lateral-moves-program.mdx (line 202), content/marines/reenlistments-and-extensions-overview.mdx | FY27 SRB framework from 023/26 only. 84-month LM kicker ($50,000) lists PMOS 1721 as eligible. No 0315 Scout. Seven kickers listed as final. | MARADMIN 208/26 (5/5/2026) Change 1 and MARADMIN 429/26 (9/22/2026) Change 2 to the FY27 SRB Program. | 208/26 para 3.b: Marines reenlisting for LM into 1721 "are no longer eligible for the 84-month LM kicker" and the Zone A 1721 PMOS bonus is discontinued. Para 3.a changes amounts for 2141, 1721, 6114 (Zone A), 0871, 1721, 2141, 2629, 2631, 2862 (Zone B), 0871, 1721, 2141, 2629, 2862, 3044, 5821 (Zone C). 429/26 adds PMOS 0315 Scout (Zone A $7,500 E3, $8,000 E4, $10,000 E5, Zone B $18,630) and extends the 24 and 36 month FMF Infantry kickers to 0315. Neither number is cited anywhere in the portal. |
| MC-05 | Major | content/marines/special-leave-accrual.mdx | SLA categories 6.b, 6.c, 6.d are suspended per 341/26 "until SECNAV designates" ships, units, and operations. | ALNAV 056/26 "Special Leave Accrual" (9/14/2026). Content not in archive. | alnav_index.json "skipped" entry 056/26, date 09/14/2026, reason "No USMC keyword match in title", no URL, no PDF in ALNAVS\CY2026. 341/26 para 3 ties the suspension to formal SECNAV designations. An ALNAV on SLA six weeks later is the likely designation or the policy follow-up. Pull the PDF and rewrite the page against it. Unverified until read. |
| MC-06 | Major | content/commander/battle-rhythm-overview.mdx, turnover-pre-coc.mdx, turnover-90-120-and-recurring.mdx, turnover-30-day-actions.mdx, turnover-overview.mdx, playbook-meo-complaint.mdx, aviation-safety-program.mdx, src/lib/commander-obligations.ts (lines 194, 204) | Authority line "MARADMIN 468/23 Para 4 and Para 6" for annual DEOCS window (1 Aug to 30 Nov, begin by 31 Oct), 90-day change of command CCA, FITREP annotation. | MARADMIN 534/23 (10/20/2023) re-issue, plus MARADMIN 225/26 (5/18/2026) 2026 Annual DEOCS. | CANX-023/23 (9/21/2023) cancels 468/23. 534/23 carries the same title and the 90-day change of command CCA and FITREP annotation (paras 3.a, 4). 225/26 para 1 reaffirms 1 Aug to 30 Nov and start NLT 31 October 2026, registration opens 31 July 2026, administrator must finish JKO Prevention 004. The rule text is right, the citation points at a cancelled message, and the registry entry maradmin-468-23 itself says "CANCELLED at the source". Re-anchor on 534/23 and 225/26. |
| MC-07 | Major | content/inspections/igmc-news.json (fy26Schedule, maradmins list) | FY26 IGMC Command Inspection Schedule (326/25) and Change 1 (556/25) shown as the schedule. lastUpdated 2026-09-11. | MARADMIN 251/26 (6/3/2026) Fiscal Year 2027 Inspector General of the Marine Corps Command Inspection Schedule. | FY26 ends 9/30/2026. 251/26 is in the archive CY2026 list and absent from content, registry, and src. The page carries a key named fy26Schedule after the year closed. |
| MC-08 | Major | content/citations/maradmin-191-25.mdx (Status section), content/marines/selective-retention-bonus-and-targeted-mos.mdx (line 15, 43), content/marines/reenlistments-and-extensions-overview.mdx (line 130) | Registry: "Active for the FY26 cohort through 2026-09-30". SRB and overview pages list 191/25 as a source and "FY26 SRB". | MARADMIN 031/25 (10/27/2025) Cancellation of MARADMIN 191/25. | 031/25 para 2: cancels the FY26 SRB and BSSRB programs "effective 28 October 2025", annual close before the next FY program. The registry status line is wrong by 11 months. |
| MC-09 | Minor | content/marines/junior-enlisted-promotions.mdx (line 211), content/marines/pme-requirements-for-promotion.mdx (lines 16, 47) | "Per MARADMIN 474/21" for PME required for promotion. | MARADMIN 630/24 (12/23/2024) Updated EPME Requirements (AD and AR) and 631/24 (SMCR, IRR, IMA). | 630/24 para 2: "Reference D, MARADMIN 474/21 is canceled." The PME page also lists 630/24 and 631/24, so the rule is current. The junior page and the reference list still name the cancelled message as authority. The junior page body is generic and does not conflict. |
| MC-10 | Minor | content/marines/selection-board-preparation.mdx (331 to 345), content/marines/snco-selection-boards.mdx (345) | OMPF photograph rule per 582/25. | MARADMIN 127/26 (3/24/2026) Change 1 to Requirement Update on Official Photographs for Non-Promotion Selection Boards. | 127/26 para 3 replaces the photo title board content with WITHIN BC STANDARDS, NOT WITHIN BC STANDARDS, EXEMPT, or WAIVED to match the WHtR method. Pages cite 582/25 only. |
| MC-11 | Minor | content/marines/career-reenlistments-stap.mdx (line 20, PAA 02-25), content/marines/bah.mdx (line 21, 326, PAA 06-20) | Reference list carries PAA 02-25 "Amplifying ... MARADMIN 128-25" and PAA 06-20 "Amplification of MARADMIN 320-20". | 128/25 cancelled by MARADMIN 027/25 (9/22/2025) in favor of 239/25, and 239/25 was itself cancelled the same day (CANX-028/25), replaced by MARADMIN 189/26 (4/23/2026) and ALNAV 011/26 (3/6/2026) Prioritizing Military Excellence and Readiness. 320/20 cancelled by CANX-025/24 (12/11/2024). | 027/25 para 1: "reference (b) is cancelled". ALNAV 011/26 and MARADMIN 189/26 are not cited anywhere. The PMER topic has no page. |
| MC-12 | Minor | content/commander/turnover-pre-coc.mdx (line 22, 50), turnover-outgoing-checklist.mdx, aviation-pre-coc.mdx, content/marines/reenlistments-and-extensions-overview.mdx (lines 23, 24, 139) | "Cornerstone MARADMIN (FY26: 388/25)". Overview lists 014/25 (FY25 LATMOV) and 199/25 (FY26 Command Retention Mission) as current sources. | FY27 Cornerstone class dates (Change 1 is MARADMIN 386/26, 8/25/2026, base message is in the unseen 360 to 377 gap), 266/26 FY26 CRM closeout (6/9/2026), 365/25 and 590/25 already cited for LATMOV and FY27 retention. | FY26 annual messages cited where an FY27 successor or closeout exists. FY27 base Cornerstone message is not in the archive, so the number cannot be named. FLPB (574/25 to 480/26), JA continuation pay (528/25 to 323/26), CDP pilot (076/25 to 190/26), and SLA (188/25 to 341/26) are correctly paired in the portal. |

Checked and clean, no finding:
- 436/26 cancels ALMAR 026/01, ALMAR 052/01, MARADMIN 481/03 and 484/04. The portal PERSTEMPO pages already say so.
- 496/24 superseded by 018/26 and 602/24 superseded by 635/24. The AI pages say so.
- 002/23 and 345/23 cancelled by 024/25. Basic needs allowance page cites 369/25 correctly.
- 188/25 and 341/26 both cited and the SLA page reflects 341/26.
- 574/24 amendment gap is MC-02.
- ALNAV cited (015/23, 017/23, 023/26, 048/26, 054/23, 055/17, 068/12, 095/23) and ALMAR cited (022/16, 026/01, 029/09, 052/01, 287/98): no cancellation, change, or supersession found in the indexes beyond the 436/26 pair above. Caveat in MC-05 for ALNAV 056/26.

## Uncovered lane messages 2026-07-01 to 2026-10-17

Sev here means: Major if an existing portal page states the rule the message changes, minor if awareness. The monthly roster rows expire within weeks and 502/26 ends the monthly Cpl and Sgt authority message.

| Number | Date | Title | Lane | Suggested portal page | Sev |
| --- | --- | --- | --- | --- | --- |
| 429/26 | 2026-09-22 | Change 2 FY27 SRB Program and BSSRB (adds 0315) | SRB/incentives | selective-retention-bonus-and-targeted-mos | Major (MC-04) |
| 490/26 | 2026-10-13 | Mandatory training for personnel in administrative control of funds (ADA) | admin/finance | commander turnover and battle rhythm pages, admin fund control leaf | Major (MC-01) |
| 468/26 | 2026-10-01 | Same title, cancelled by 490/26 | admin/finance | same as above, cite 490/26 only | Major (MC-01) |
| 381/26 | 2026-08-20 | Implementation guidance for reinstatement and reintegration of Marines affected by the COVID-19 vaccination mandate | records/separations | spd-and-re-codes (historical section), records-review-mctfs | Major |
| 342/26 | 2026-07-30 | IMA Program tour length and extension authority (3 years standard, command-slated BICs 2 years) | reserve | new reserve IMA leaf | minor |
| 405/26 | 2026-09-02 | FY27 Total Force Enlistment Option Program and enlistment bonuses (SMCR EB $10,000 or $6,000, MGIB-SR kicker up to $350 a month) | SRB/incentives | enlisted-bonuses | minor |
| 413/26 | 2026-09-14 | Update on reimbursement of spouse relicensing, recertification, and business costs | PCS/family | pcs-orders-and-overview or new PCS spouse leaf | minor |
| 393/26 | 2026-08-25 | Identity proofing and vetting for CAC issuance (21,584 Marine DEERS records noncompliant) | records/admin | deers-enrollment-and-id-cards | minor |
| 358/26 | 2026-08-07 | Recording body composition data in MCTIMS (backdated certification NLT 4 Sep 2026) | records | body-composition-reporting | minor |
| 418/26 | 2026-09-16 | Interim guidance on requests for religious accommodation | records/admin | administrative leaf under admin | minor |
| 470/26 | 2026-10-01 | Out of cycle: FMOS 0557 converts to PMOS (Total Force Integrator SNCO), effective 1 Oct 2026 | records/MOS | admin MOS reference | minor |
| 303/26 | 2026-07-01 | FY26 Voluntary Enlisted Early Release Program (FTAP Marines with FY26 EAS) | separations | voluntary-separations (Path 2) | minor |
| 422/26 | 2026-09-22 | Clarification of 1169 PMOS attainment and GySgt promotion (Utilities OccFld) | promotions | snco-selection-boards | minor |
| 484/26 | 2026-10-08 | FY27 1st semi-annual SDA meritorious promotion allocations | promotions | meritorious-promotions | minor |
| 495/26 | 2026-10-14 | FY27 meritorious allocations for PSR, EAD recruiters, SMCR SNCOs | promotions | meritorious-promotions | minor |
| 321/26 | 2026-07-17 | FY26 AR NCO meritorious promotion board results | promotions | meritorious-promotions | minor |
| 382/26 | 2026-08-21 | FY27 SgtMaj and 1stSgt SNCO promotion selection board | promotions | snco-selection-boards | minor |
| 389/26 | 2026-08-25 | FY27 MGySgt and MSgt SNCO promotion selection board | promotions | snco-selection-boards | minor |
| 437/26 | 2026-09-22 | Change 1 to 382/26 | promotions | snco-selection-boards | minor |
| 442/26 | 2026-09-23 | Change 1 to 389/26 | promotions | snco-selection-boards | minor |
| 334/26 | 2026-07-23 | Solicitation for FY27 E8 Redesignation Board pilot | promotions | snco-selection-boards (text not extracted, read before authoring) | minor |
| 354/26 | 2026-08-05 | FY26 SMCR and IRR SNCO promotion board results | promotions/reserve | snco-selection-boards | minor |
| 320, 322, 326, 338, 339, 346, 390, 391, 432, 434, 443, 444, 445, 446 /26 | 2026-07-17 to 2026-09-25 | Monthly Aug, Sep, Oct 2026 promotion rosters and authority (SNCO, Cpl and Sgt, CWO2, 1stLt, officer, AR, SMCR, IRR) | promotions | none, roster messages | minor |
| 499/26 | 2026-10-15 | FY27 Active Reserve Alignment Plan | reserve | reserve AR leaf | minor |
| 473/26 | 2026-10-05 | FY27 AR officer accession and career designation plan | reserve | reserve AR leaf | minor |
| 488/26 | 2026-10-13 | FY27 Return to Active Duty program for officers | reserve/separations | spd-and-re-codes or reserve leaf | minor |
| 400/26, 486/26 | 2026-08-28, 2026-10-13 | FY27 SMCR SgtMaj and 1stSgt billet assignments | reserve | none | minor |
| 426/26, 403/26 | 2026-09-22, 2026-08-31 | RAMM AR monitor roadshow and MMEA end of FY26 roadshow | assignments | none | minor |
| 329/26 | 2026-07-22 | FY27 College of Enlisted Military Education program information and dates | education | new COEMP/PME leaf | minor |
| 302/26, 439/26 | 2026-07-01, 2026-09-23 | FY26 SNCODCP selection board, board 2 results | education | education-services-and-resilience | minor |
| 343/26, 333/26 | 2026-07-30, 2026-07-23 | Enlisted applications to USNA Class of 2031, FY27 EMOP NROTC scholarship | education/commissioning | none | minor |
| 304/26, 491/26, 492/26 | 2026-07-01, 2026-10-14, 2026-10-14 | AY27-28 AILS application and results, invitational PME processes | education | none | minor |
| 399/26 | 2026-08-28 | FY27 Logistics Compliance Branch assessment schedule | inspections | inspections landing | minor |
| 417/26 | 2026-09-16 | Availability of MCCS Connect app | family readiness | none | minor |

## Out of scope

- Operational, training, doctrine, and technology messages (105 in the window). Examples: 307, 311, 337, 352, 379, 384, 387, 415, 424, 425, 482, 489, 494, 497.
- Officer board convenings and results, CSB results, slating panels, fellowships, and screening results (310, 327, 328, 344, 412, 428, 464, 483).
- Annual award winners and nominations (313, 318, 319, 335, 340, 351, 359, 440, 485, 493, 498, 500). Awards solicitations carry no portal rule change.
- Observances and morale (308, 314, 332, 395, 423, 477, 496).
- Equal opportunity, AI, and legal courses (396, 397, 419, 465, 466, 476). 349, 357, 380, 467, 472 are already cited.
- ALMAR in window (015 to 025): holiday, anniversary, and Sergeants Major slate 018/26. None in lane.
- ALNAV in window: officer and Navy selections (037 to 066) are out of lane. ALNAV 037/26 (Naval Identity Services for system access) is awareness for admin staff only. ALNAV 056/26 is in MC-05.
- Items before 2026-07-01 noticed in passing: MARADMIN 423/25 (9/8/2025, dual BAH for RC Marines without dependents) has no portal reference, MARADMIN 189/26 and ALNAV 011/26 in MC-11. These are outside the requested window and not counted.

## Method

1. The E: indexes do not match the archive. maradmin_index.json "downloaded" tops out at 257/26 as a numeric key and the 2026-07 to 2026-10 messages exist only as PDFs and .json sidecars under MARADMINS\CY2026. The window list was built from sidecar document_date, not from the index. One sidecar (345/26) is unreadable JSON. 041/26 carries document_date 2026-10-02, which is a day and month swap of 10 February 2026 (002/26 cancels it), so it is excluded. The portal's own content/inspections/_policy-indexes/maradmin_index.json has 208 /26 keys and does hold 450/26 and 502/26. Recommend re-running the scraper for 258 to 262, 113, 345, 360 to 377, and 451 to 460.
2. Portal references were extracted by regex (MARADMIN, ALMAR, ALNAV followed by NNN/YY or NNN-YY, plus registry ids like maradmin-NNN-YY) from content/**/*.mdx, content/**/*.json (excluding _policy-indexes and _reference-links.json, which hold 13,800 alias entries), and src/**. Registry files in content/citations count as citations. _stubs excluded.
3. Window messages were classified from title into S-1 lanes. Ambiguous titles (303, 342, 358, 381, 393, 405, 413, 418, 422, 429, 468, 470, 484, 495) were opened and read.
4. Supersession. Text of all CY2025 and CY2026 PDFs was extracted with pypdf (python -I, PYTHONUTF8=1) and searched for every cited number with a 160 character look-back for cancel, supersede, rescind, replace, change, update, correct, amend, and revise. Titles of all 14,205 indexed MARADMINs (plus CANX entries) were searched for cancellation or amendment of every cited number back to 2001. Hits were read in full for 350/11, 468/26, 490/26, 468/23, 534/23, 225/26, 574/24, 603/24, 066/26, 073/26, 127/26, 208/26, 429/26, 031/25, 630/24, 027/25, 341/26.
5. Portal side was read for each hit to confirm the page states the old rule (blocker) or only cites the message (major or minor).
6. ALMAR and ALNAV were checked the same way against their index files, including the ALNAV "skipped" list, which the scraper filters by title keyword and which hides ALNAV 056/26.
7. Limits. Messages missing from the archive (29 in window) are unaudited. ALNAV 056/26 and 334/26 text were not read. FY27 AC LATMOV, FY27 CRM, and the FY27 Cornerstone base message were not found in any title list and may sit in the gaps. Scratch scripts are in C:\Users\barbc\AppData\Local\Temp\claude\audit-scratch\messages\.
