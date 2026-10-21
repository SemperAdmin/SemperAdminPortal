# Directive currency audit

Run date: 2026-10-20. Authority snapshot: E:\GunnyBot\Policies, last_check 2026-10-17 (mcpel_index, dodi_index, dodd_index, secnav_index). Read-only audit, no portal files changed.

## Scope

Registry entries scanned in content/citations/*.mdx (excluding _stubs/): 204 across the directive types in scope.

| Type | Registry entries | Matched in index | Not found | Index used |
|---|---|---|---|---|
| MCO | 136 | 128 | 8 | mcpel_index.json MCO (492 rows) |
| NAVMC | 12 | 4 | 8 | mcpel_index.json NAVMC (138 rows) |
| MCBUL | 3 | 3 | 0 | mcpel_index.json MCBul (22 rows) |
| DODI (includes 2 DOWI) | 34 | 32 | 2 | dodi_index.json (788 downloaded, 62 restricted) |
| DODD | 2 | 2 | 0 | dodd_index.json (267 downloaded, 23 restricted) |
| DODM | 2 | 0 | 2 | no DoDM index in the snapshot |
| SECNAVINST | 10 | 3 | 7 | secnav_index.json (119 rows, no 52xx or 54xx or 57xx or 58xx series) |
| SECNAV M-manuals | 5 | 0 | 5 | not indexed |
| Total | 204 | 172 (84 percent) | 32 | |

Index status facts. MCPEL carries only two status values, Current and New. It holds no Cancelled or Superseded rows, so supersession shows as a newer letter or change on the same base number. dodi_change_report.json (generated 2026-10-18) and dodd_change_report.json report 0 new, 0 updated, 0 restricted, 0 missing_on_disk. The DoD indexes are internally stable. The drift below is portal against index.

Result summary. No registry entry with an explicit revision letter trails the index. All 27 registry entries with no letter (base-number entries and hidden "Moved to" redirects) name the current letter in their body or externalUrl. The registry itself is clean on MCO and NAVMC letters. The real currency failures are in role content that cites older letters, plus eight DoDI/DoDD date and change gaps in the registry.

Findings by severity: blocker 6, major 6, minor 8, nit 1.

## Findings

Cited-by counts are files under content/ excluding content/citations and content/videos. "Role" means files under admin, leader, commander, marines. Counts use the number pattern, so a count covers every revision of that directive unless the row says otherwise.

| ID | Sev | Citation file | Portal says | Current authority | Evidence | Cited-by count |
|---|---|---|---|---|---|---|
| DC-01 | blocker | content/citations/mco-1400-31d.mdx (no entry for the C revision) | Admin pages cite MCO 1400.31C as the officer promotion manual, including sourcePolicy: "MCO 1400.31C" and the page title | MCO 1400.31D | mcpel_index MCO["MCO 1400.31D"] status Current, pub_date 10/28/2021. Registry id mco-1400-31d already holds D. 9 content files cite the base number, 4 of them cite the C letter. | 4 stale (9 any revision), all role. admin/s1g1-promotions-officer-promotions.mdx, admin/s1g1-promotions-overview.mdx, admin/s1g1-promotions-promotion-restrictions-and-withholds.mdx, admin/s1g1-promotions-special-promotion-programs.mdx |
| DC-02 | blocker | content/citations/mco-1752-5c.mdx | Incident reporting pages cite MCO 1752.5A for the SAPR Program | MCO 1752.5C | mcpel_index MCO["MCO 1752.5C"] status Current, pub_date 6/03/2019. Registry mco-1752-5c lists supersedes MCO 1752.5B, so A is two revisions back. | 4 stale (18 any revision), all role. admin/s1g1-operations-event-incident-reporting-overview.mdx, ...-oprep-3-sir-serious-incident-reporting.mdx, ...-reportable-events-and-incidents.mdx, ...-sexual-assault-and-hazing-report-protocol.mdx |
| DC-03 | blocker | content/citations/mco-1754-9b.mdx | Leader pages cite MCO 1754.9A Family Care Plan authority and use it as a Citation chip source | MCO 1754.9B | mcpel_index MCO["MCO 1754.9B"] status Current, pub_date 3/25/2019. Registry mco-1754-9b supersedes MCO 1754.9A. Note the registry also has MCO 1740.13D Family Care Plans as the current FCP order. | 2, both role. leader/life-events-divorce-custody.mdx, leader/readiness-family-readiness.mdx |
| DC-04 | blocker | none (no registry entry for NAVMC 1200.1) | Pages cite NAVMC 1200.1K and 1200.1L (MOS Manual) | NAVMC 1200.1M | mcpel_index NAVMC["NAVMC 1200.1M"] status Current, pub_date "2 Mar 2026". Content cites K at marines/lateral-moves-program.mdx and L at the FLPB admin page. No citation file exists, so the chip has nothing to resolve to. | 2 stale role files (5 any revision, 2 more are policy-index JSON). marines/lateral-moves-program.mdx, admin/s1g1-special-hazardous-duty-pay-foreign-language-proficiency-bonus.mdx |
| DC-05 | blocker | none (no registry entry for MCO 5512.11) | Admin RAPIDS page cites MCO 5512.11D for DEERS and CAC administration, used as the page's named authority in the title | MCO 5512.11F (Vol 1 w/CH-1, Vol 2 CAC) | mcpel_index MCO["MCO 5512.11F VOLUME 1 W/CH-1"] Current 1/16/2024 and MCO["MCO 5512.11F VOLUME 2"] Current 1/24/2023. Cited 6 times in the file as a Citation chip, so each chip is an unresolved plain chip. | 1, role. admin/s1g1-admin-systems-management-rapids-and-cac-administration.mdx |
| DC-06 | blocker | content/citations/mco-p1070-12.mdx | Marines page cites MCO P1070.12J, including the heading "Per MCO P1070.12J" and a frontmatter source | MCO P1070.12K W/CH-1 | mcpel_index MCO["MCO P1070.12K W/CH-1"] Current, pub_date 7/14/2000. Registry mco-p1070-12 is the K revision and lists supersedes MCO P1070.12J. | 1, role. marines/selection-board-preparation.mdx (the same page cites MCO 1400.31D and 1610.7B correctly) |
| DC-07 | major | content/citations/dodi-1332-18.mdx | effectiveDate 2014-08-05, body "incorporating Change 1" | DoDI 1332.18 issuance_date 2022-11-10 | dodi_index["DoDI 1332.18"].issuance_date = 2022-11-10, ch_number empty, filename DoDI_1332.18_Disability_Evaluation_System.pdf, fingerprint ends with the date 2022-11-10. The index does not state reissue versus unlabeled change, so confirm at the source. | 13 (12 role). admin/s1g1-limited-duty-expanded-permanent-limited-duty.mdx, admin/s1g1-limited-duty-light-duty.mdx, admin/s1g1-limited-duty-limdu-board-and-policy.mdx, admin/s1g1-limited-duty-medical-extension.mdx, admin/s1g1-limited-duty-overview.mdx |
| DC-08 | major | content/citations/dodi-6490-03.mdx | effectiveDate 2006-08-11, body "incorporating Change 1" | DoDI 6490.03 dated 2019-06-19 | dodi_index["DoDI 6490.03"].issuance_date = 2019-06-19, ch_number empty, fingerprint begins 2019-06-19-134540-850 and ends 2019-06-19. Same caveat as DC-07. | 4, all role. admin/iandi-demobilization-processing.mdx, admin/iandi-pre-mobilization-screening.mdx, leader/readiness-medical-dental.mdx, leader/readiness-pre-deployment-section.mdx |
| DC-09 | major | content/citations/dodi-1332-45.mdx | effectiveDate 2018-06-06, no change mentioned | Issued 2018-07-30 with CH 1 on 2021-04-27 | dodi_index["DoDI 1332.45"]: issuance_date 2018-07-30, ch_number "CH 1", ch_date 2021-04-27. Registry date disagrees by 54 days and omits CH 1. | 6, all role. admin/iandi-medical-board-process.mdx, admin/iandi-medical-hold-and-limdu.mdx, admin/pac-disability-severance-pay.mdx, admin/s1g1-limited-duty-expanded-permanent-limited-duty.mdx, admin/s1g1-limited-duty-overview.mdx |
| DC-10 | major | content/citations/dodi-1300-18.mdx | effectiveDate 2009-01-08, body "Change 1 incorporated" | Issued 2008-01-08 with CH 2 on 2023-03-29 | dodi_index["DoDI 1300.18"]: issuance_date 2008-01-08, ch_number "CH 2", ch_date 2023-03-29, related_memo OSD009456-26. The registry year is off by one and CH 2 is missing. | 12, all role. admin/s1g1-casualty-affairs-benefits-and-entitlements.mdx, admin/s1g1-casualty-affairs-caco-assignment.mdx, admin/s1g1-casualty-affairs-combat-casualty-operations-center.mdx, admin/s1g1-casualty-affairs-long-term-assistance-program.mdx, admin/s1g1-casualty-affairs-military-funeral-honors.mdx |
| DC-11 | major | content/citations/dodi-1327-06.mdx | Active, 2025-08-07 reissue, no change noted | Change 1 effective 2026-06-30 | dodi_index["DoDI 1327.06"]: ch_number "CH 1", ch_date 2026-06-30, is_dow_rebrand true. Likely a DoW name change but the portal has not recorded it. This directive is the leave authority behind MCO 1050.3J pages. | 11 (7 role). marines/annual-leave.mdx, marines/convalescent-leave.mdx, marines/leave-problems-and-fixes.mdx, marines/liberty-and-special-liberty.mdx, marines/permissive-tad.mdx |
| DC-12 | major | content/citations/dodi-1342-22.mdx | effectiveDate 2021-08-05, no change noted | Change 1 effective 2026-05-07 | dodi_index["DoDI 1342.22"]: ch_number "CH 1", ch_date 2026-05-07, is_dow_rebrand true. | 3, all role. admin/s1g1-sponsorship-program-installation-program-manager-and-irr-handoff.mdx, admin/s1g1-sponsorship-program-overview.mdx, marines/family-readiness-services.mdx |
| DC-13 | minor | content/citations/dowi-1341-09.mdx | Title "DOWI 1341.09 - Reimbursement for Adoption Fees", no effectiveDate | Subject "DoW Adoption Reimbursement Policy", issued 2016-07-05, CH 1 2026-05-27 | dodi_index["DoDI 1341.09"]: subject and ch_date as stated. Body already cites CH 1 (2026-05-27) and says the portal has not read the text. Title and date fields lag the body. | 2, both role. admin/pac-adoption-expense-reimbursement.mdx, marines/birth-and-adoption.mdx |
| DC-14 | minor | content/citations/dodi-5025-01.mdx | Title "DODI 5025.01 - DoD Issuances Program" | "DoW Issuances Program" | dodi_index["DoDI 5025.01"].subject = "DoW Issuances Program", is_dow_rebrand true. Date 2026-01-20 matches. | 1, role. admin/s1g1-directives-management-overview.mdx |
| DC-15 | minor | content/citations/dodi-1341-13.mdx | No effectiveDate, body says "refer to the DoD Issuances website" | Issued 2022-10-25, CH 1 2023-11-08 | dodi_index["DoDI 1341.13"]: issuance_date 2022-10-25, ch_number "CH 1", ch_date 2023-11-08. Registry has no date at all. | 1, in a non-role file only |
| DC-16 | minor | content/citations/dod-dts-regulations.mdx | effectiveDate 2023-12-27 | DoDI 5154.31 Vol 3 issued 2015-10-16 | dodi_index["DoDI 5154.31 Vol3"]: issuance_date 2015-10-16, no change. The registry entry is the DTMO regulations document, which carries its own date. Date disagreement is expected, so confirm the entry is meant to be the DTMO regs and not the DoDI volume. | 25 cite DODI 5154.31 (24 role). The DTMO regs title has 0 exact hits |
| DC-17 | minor | content/citations/mco-3710-7.mdx | Title "Naval Air Training and Operating Procedures Standardization (NATOPS)" | Index summary "MARINE CORPS AVIATION CURRENT READINESS PROGRAM", status New | mcpel_index MCO["MCO 3710.7"].summary and status New. Low confidence. The index title and the registry title name different programs. | 3 (0 role). 2 content files plus 1 policy index |
| DC-18 | minor | content/citations/mco-11000-22.mdx | Title "Unaccompanied Housing" | Index summary "MARINE CORPS BACHELOR AND FAMILY HOUSING MANAGEMENT", index key "MCO 11000.22 w/ CH-1" | mcpel_index MCO["MCO 11000.22 w/ CH-1"]. Registry shows no change and no effectiveDate. | 3 (1 role) |
| DC-19 | minor | content/citations/mcbul-6110.mdx | Title "MCBUL 6110", no effectiveDate, no subject | MCBul 6110 W/ADMIN CH-1 DTD 7 MAR 2025, "Marine Corps Body Composition and Military Appearance" | mcpel_index MCBul["MCBul 6110 W/ADMIN CH-1 DTD 7 MAR 2025"], status New, pub_date 3/07/2025. The registry title is a bare number. | 4 (2 role). Also compare MCO 6110.3A, which the bulletin modifies |
| DC-20 | minor | content/citations/mco-4600-40c.mdx and mco-5040-6k.mdx | IGMC checklist JSON quotes MCO 4600.40B and MCO 5040.6J paragraphs | MCO 4600.40C and MCO 5040.6K | mcpel_index "MCO 4600.40C" Current, "MCO 5040.6K" Current. Registry holds the current letters. The checklist references are quoted from older checklist text, so the paragraph numbers need a check against the new letter. | 4600.40B: 2 files. 5040.6J: 3 files. All under content/inspections, 0 role. Paths: inspections/igmc/4600.40-government-travel-charge-card-program.json, inspections/igmc-guides/4600.40.json, inspections/igmc/5040-command-inspection-program.json, inspections/igmc/5110.1-postal-affairs-and-official-mail-program-military-postal-activity.json, inspections/_reference-links.json |
| DC-21 | nit | mco-1320-11h, mco-1650-19j, mco-1751-3, mco-1900-16, mco-4400-201, mco-5100-29c, mco-5215-1k, mco-5300-17a, mco-5311-1e, mco-6110-3a, mco-p1400-32d | effectiveDate holds the base order signing date | Index pub_date is the latest change posting | Example: mco-1900-16 effectiveDate 2019-02-15 and mcpel_index "MCO 1900.16 W/CH-3" pub_date 5/28/2025. Bodies already name the change level for all of these. No fix is needed beyond a policy note on what effectiveDate means. | Not counted (metadata only) |

## Not found in index

Lower confidence. Absence from the index means the snapshot does not cover the item, not that the directive is cancelled.

| Citation file | Type | Why it is missing | Cited-by count |
|---|---|---|---|
| mco-1640-6 (MCO 1640.6 Confinement Manual) | MCO | mcpel_index has MCO 1640.3F and 1640.5B only. Verify at MCPEL whether 1640.6 still exists. | 3, all role (admin/s1g1-absentee-deserter-confinement-*.mdx) |
| mco-1770-1 (MCO 1770.1 Casualty Assistance Calls Program) | MCO | No 1770.x row in mcpel_index. Verify at MCPEL. | 6, all role (marines/casualty-assistance-program.mdx and others) |
| mco-1100-79, mco-11240, mco-3302, mco-7220, mco-7220-65, mco-p6320-13 | MCO | Registry titles say "No standalone order" or "Not an order". Series locators, so absence is expected. | 0 to 1 each, not counted |
| navmc-10132, navmc-10274, navmc-11432, navmc-11533, navmc-11537, navmc-11800, navmc-2795, navmc-321m | NAVMC | Forms and the counseling guide. They sit in navmc_forms_index.json, not mcpel_index. Not checked here. | navmc-10132 alone is cited in 23 files (18 role). The rest not counted |
| dodi-1304-27 (DoDI 1304.27) | DODI | Absent from downloaded and restricted. The registry title says HISTORICAL and the body says DoDI 1340.26 superseded it effective 25 September 2017. The index cannot confirm the cancellation. | 3, all role (admin/s1g1-special-hazardous-duty-pay-overview.mdx, admin/s1g1-special-hazardous-duty-pay-sdap-and-assignment-incentive-pay.mdx, marines/special-duty-assignment-pay.mdx). The registry says these pages list it as history. Confirm each says so |
| dod-gtcc-regulations | DODI | Number is "GTCC Regs", no directive number to match. | not counted |
| dodm-1315-21-v1, dodm-1315-21-v2 | DODM | No DoDM index in the snapshot. Registry effectiveDate 2026-05-21 is unverified here. | 2 files cite DoDM 1315.21, both role |
| secnavinst-5210-8f, 5211-5f, 5215-1f, 5430-57h, 5730-5k, 5800-12c, 5210-16 | SECNAVINST | secnav_index has no 52xx, 54xx, 57xx, or 58xx series. The index is a partial crawl (119 rows, series 10 through 45 only). | 5211.5F: 16. 5210.8: 6. 5210.16: 8. 5730.5: 4. 5430.57: 2. 5215.1: 1. 5800.12: 1 |
| secnav-m-1650-1, m-5210-1, m-5210-2, m-5215-1, m-5216-5 | SECNAV M-manual | Manuals are not in secnav_index. M-5216.5 appears in 17 files and M-5210.1 in 39. Highest-volume unchecked authority in this audit. | M-5210.1: 39 (22 role). M-5216.5: 17 (13 role) |

## Out of scope

- MARADMIN, ALMAR, ALNAV, PAA, PAAN, MCTFSPRIUM, FPM, DD-FORM, NAVMC-FORM, CFR, USC, JAGINST, DODFMR, OTHER citation types. Other audits own these.
- NAVMC form numbers (navmc_forms_index.json) and DD forms (dd_forms_index.json).
- Hidden "Moved to" redirect stubs (mco-1500-60, 1700-31, 1740-13, 1754-9, 5210-11, 5300-17, 7220-56). They carry hidden: true and point at the right letter, so they were matched but not raised.
- Content citations of MCO letters inside content/inspections/_policy-indexes/*.json. These are historical MARADMIN index records, not authored claims.
- Content that names a stale letter only as history (MCO 1610.7A, MCO 3574.2L). Context shows supersession statements, so they were not raised.
- Verification of paragraph level claims. This audit checks currency of the directive, not the correctness of what the page says about it.

## Method

Scripts live in C:\Users\barbc\AppData\Local\Temp\claude\audit-scratch\directive\. All Python ran as `PYTHONUTF8=1 python -I <script>`.

1. reg.py parses frontmatter of every content/citations/*.mdx (skips _stubs) and keeps types MCO, NAVMC, MCBUL, DODI, DODD, DODM, SECNAV, SECNAVINST (204 rows).
2. match.py normalizes MCPEL keys such as "MCO 1900.16 W/CH-3" and "MCO P1070.12K W/CH-1" to (base, revision letter, highest change) and indexes by (prefix, base). It then looks up each registry row by base and compares letters. m6.py checks every letter-less registry row for a body or URL mention of the current letter. m3.py compares change level and pub_date. m9.py runs a token overlap title check.
3. m4.py matches DODI, DODD, DODM rows to dodi_index and dodd_index (downloaded plus restricted) by base number and Vol suffix and prints issuance_date, ch_number, ch_date, subject, is_dow_rebrand. m5.py does the same against secnav_index.
4. m7.py scans every file under content/ except citations and videos for `(MCO|NAVMC) [P]nnnn.nn<letter>` and lists mentions whose letter trails the index top letter. Hits were read in context with grep before being raised.
5. m8.py and m10.py count citing files per directive with case-insensitive regexes over the same file set (1083 files, .md, .mdx, .json) and split role (admin, leader, commander, marines) from the rest.
6. Cross-checks: `grep -nE` on content/citations/*.mdx bodies for Change, CH, Reissue, Supersed, Historic, Effective to confirm what each registry entry already states.

Assumptions. A DoDI index issuance_date later than the registry date is read as a reissue or unlabeled change (DC-07, DC-08). MCPEL pub_date reflects the latest posting, not the base signing date (DC-21). Counts by number pattern include history mentions, so a count is an upper bound.
