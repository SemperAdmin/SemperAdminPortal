# Semper Admin Portal Claims Audit, Wave 1

## Header

- Audit date: 2026-11-14. Branch claude/claims-audit-2026-11-14-7695e5. Content equals main at 7b0ddcc. The Oct-20 regression file names main at 1a22d0b, which carries no content or src difference from 7b0ddcc. PR #152 (parental leave convalescent fix) is open and not on this branch.
- Authority snapshot: E:\GunnyBot\Policies, current through MARADMIN 552/26. Text cache rebuilt on D: (23,506 files, 2 unreadable PDFs) after the E: drive dropped mid-run and left its own _text folder corrupted.
- Method: plan docs/superpowers/plans/2026-11-14-claims-audit.md, Task 5. One Sonnet worker per cluster checked every normative claim against the base document plus every later amending message. Four Opus verifiers re-checked every blocker and major against the quoted paragraph and hand-checked 5 ok claims per cluster.
- Scope: wave 1, 10 clusters, 323 pages assigned, 315 published pages audited, 2,260 claims checked. Two unpublished .trash pages (5 claims) dropped from scope after the final review.
- No content edited. No lastVerified moved. Findings sit in findings/, Opus verdicts in verify/.

## Posture summary

Wave 1 found 57 new blockers on 44 pages, every one confirmed by Opus against the source paragraph. A Marine acting on these pages gets the wrong outcome today. The worst clusters are travel (12 blockers), separations and limited duty (11), and legal (9). Four patterns drive most of them.

1. Rules carried over from the civilian side of the JTR. Renewal Agreement Travel, Miscellaneous Expense Allowance and the 55 percent long-term TDY flat rate do not exist for Service members.
2. Limited duty and retirement windows taught from memory. Four limited duty pages cap TLD at 8 months or stretch it to 16. MCO 1900.16 allows two 6-month periods, 12 months cumulative. Two more pages misstate PLD and EPLD criteria. Four pages give a 6 to 18 or 12 to 24 month retirement request window. The order sets 14 months to 4 months.
3. Pay stoppage and forfeiture timing reversed. Pages tell S-1 to continue BAH during UA, keep full pay during civil confinement, and start forfeitures on convening authority action. DoD FMR Vol 7A says the opposite on all three.
4. Promotion restrictions invented. Four pages list limited duty, MEB, PEB and adverse fitness reports as promotion restrictions. MCO P1400.32D 1204.4 does not.

The MPLP gates passed. The source map resolves the MPLP page to DoDI 1327.06 CH 1 plus MARADMIN 051/23, 129/23, 625/24 and 191/26. The pilot flagged the Multiple Qualifying Events forfeiture claim on its own. The six-week convalescent error carries over from PR #152 as known, with one gap. content/marines/birth-and-adoption.mdx line 196 repeats the error, and PR #152 does not touch the page.

Only 11 of 315 audited pages came back with every claim ok. The May 2026 bulk stamp of lastVerified does not reflect claim-level checks.

## Severity table

New findings after Opus verify. Known PR #152 items (3) and refuted findings (16) are excluded. Minor here means Opus downgraded a worker blocker or major. Worker-level minors stay in the findings files.

| Cluster | Pages | Claims | Ok | Blocker | Major | Downgraded to minor | Refuted | No archive source |
|---|---|---|---|---|---|---|---|---|
| bah-1751-3 | 12 | 156 | 51 | 5 | 30 | 7 | 0 | 24 |
| leave-1050-3j | 28 | 268 | 132 | 1 | 20 | 16 | 3 | 23 |
| legal-5800 | 39 | 345 | 115 | 9 | 41 | 32 | 1 | 22 |
| mcramm-1 | 40 | 173 | 88 | 2 | 14 | 5 | 1 | 24 |
| mcramm-2 | 40 | 191 | 78 | 5 | 28 | 4 | 1 | 28 |
| pay-dodfmr-1 | 32 | 116 | 50 | 6 | 21 | 4 | 0 | 2 |
| pay-dodfmr-2 | 34 | 381 | 132 | 2 | 19 | 4 | 4 | 177 |
| promotions-1400-32d | 21 | 127 | 64 | 4 | 18 | 4 | 0 | 9 |
| separations-1900-16 | 32 | 191 | 76 | 11 | 39 | 2 | 2 | 15 |
| travel-jtr | 37 | 312 | 117 | 12 | 49 | 17 | 4 | 29 |
| Total | 315 | 2,260 | 903 | 57 | 279 | 95 | 16 | 353 |

Three rows come from controller review, not worker extraction. The promotions miss below enters as a major. The final Opus review found iandi-medical-hold-and-limdu.mdx lines 46 (blocker) and 60 (major), which the mcramm-1 worker skipped or tagged no archive source. Full list with page, line, paragraph and fix: wave-1-confirmed.md. Refuted list: wave-1-refuted.md.

## Verification quality

- Precision. Opus re-checked all 447 worker blockers and majors. It confirmed 430 and refuted 17. The controller restored one refuted item (below), for 431 confirmed and 16 refuted. It downgraded 95 confirmed items to minor.
- Recall. Opus hand-checked 50 ok claims, 5 per cluster. 2 were wrong, a rate of 1 in 25, at the plan threshold and not over it. Neither cluster was re-run on Opus.
  - travel-jtr, content/leader/travel-ao-role.mdx line 35. The worker marked the AO pecuniary liability claim ok and also flagged the same line as a finding. A duplicate, not a miss.
  - promotions-1400-32d, content/marines/obligated-service-for-promotion.mdx line 199. A real miss. The page calls PCS or UDP order refusal a removal plus failure of selection. MCO P1400.32D 1204.4gg makes it a curable restriction. Treat ok results in this cluster as lower confidence. The row now sits in wave-1-confirmed.md as a major.
- Controller ruling. Opus refuted the seeded MPLP Multiple Qualifying Events claim because the total days come out equal. The DoDI 1327.06 CH 1 3.11.c.(6)(a) example keeps 69 unused days and adds 15. The page says the unused portion is forfeited and borrows the Reserve RCPL rule. The finding stands as contradicted, major.

## Top actions, ranked

1. Travel, JTR. Remove Renewal Agreement Travel as a Marine entitlement on content/marines/renewal-agreement-travel.mdx (lines 25, 47) and content/marines/pcs-orders-and-overview.mdx line 101. Point Marines to COT leave under JTR 050812 and OTEIP under MARADMIN 450/26.
2. Travel, JTR. Retire or rewrite content/marines/miscellaneous-expense-allowance.mdx (lines 22, 48, 59). MEA is a civilian allowance. Marines draw DLA under 0505.
3. Travel, JTR. Remove the 75 and 55 percent per diem tiers on content/marines/tdy-per-diem.mdx line 24 and content/marines/long-term-tdy.mdx line 50. TDY past 180 days needs Table 1-7 approval (MMIB-3), or per diem stops on day 181.
4. Travel, JTR. Fix TLE percentages and the OCONUS FAQ on content/marines/temporary-lodging-expense.mdx (lines 110, 164) per Table 5-17 and 050601-B2. Remove retirement PCS from DLA eligibility on content/marines/dislocation-allowance.mdx line 50. Fix second-POV MALT on content/marines/pov-shipment-and-mileage.mdx line 99.
5. Limited duty, MCO 1900.16 ch 8. Correct TLD duration (two 6-month periods), the 8111 medical extension, PLD and EPLD criteria on six admin pages: s1g1-limited-duty-overview (66), limdu-board-and-policy (49), medical-extension (47), permanent-limited-duty (48), expanded-permanent-limited-duty (50), and iandi-medical-hold-and-limdu (46, 60).
6. Retirement window, MCO 1900.16 7005.1 and 2004.1. Set 14 months to 4 months on content/marines/retirement-types-and-eligibility.mdx (193), retirement-timeline.mdx (322), separations-and-retirement-overview.mdx (193) and content/commander/personnel-retirement-processing.mdx (65). Fix officer TIG minimums at retirement-types-and-eligibility.mdx line 75. Fix the pre-separation counseling trigger (365 days, not 90) on s1g1-outbound-management-separation-and-retirement-handoff.mdx line 59.
7. Pay stoppage and forfeitures, DoD FMR Vol 7A. Stop BAH for unexcused UA and start forfeitures 14 days after announcement on s1g1-absentee-deserter-confinement-pay-reconciliation (83, 84) and s1g1-military-pay-processing-court-martial-njp-and-bankruptcy (48). Fix civil confinement pay on content/commander/playbook-off-base-arrest.mdx (84, 85, 87) per Table 1-13.
8. Legal. LOD and misconduct standard is clear and convincing under JAGMAN 0214 on s1g1-command-investigations-line-of-duty-and-misconduct-determinations (59, 75). Pretrial confinement timelines per RCM 305(i)(2) 72 hours, 305(j)(1) 48 hours, 305(j)(2) 7 days on s1g1-legal-administration-pretrial-confinement-and-restriction (47, 64). Remove the MARADMIN 380/26 carve-outs (cancelled by CANX-014/26 on 29 Sep 2026) on s1g1-legal-administration-administrative-investigations line 67. Adsep notification letters are not signed by direction (s1g1-legal-administration-overview line 60).
9. Promotions, MCO P1400.32D 1204.4. Remove medical status and adverse fitness reports from the restriction lists on s1g1-promotions-enlisted-promotion-eligibility (66), s1g1-promotions-pfc-and-lcpl-promotion (58), s1g1-promotions-promotion-restrictions-and-withholds (50) and content/marines/promotion-delays-and-revocations.mdx (80).
10. Separation and aviation pay. Full separation pay requires Honorable (content/admin/pac-separation-pay.mdx line 53, content/marines/separation-pay-and-final-pay.mdx lines 116, 210). Replace the aviation incentive table with Table 22-11 on content/admin/pac-flight-pay.mdx (77, 78).
11. Reserve admin, MCRAMM. Fix pay group codes (B is IMA, F is IADT) on iandi-ready-reserve (129) and iandi-utilization-categories (87, 164). ISL members earn no points (iandi-standby-categories 98). SBP 90-day clock starts at the 20-year notice (iandi-survivor-benefit-plan 45). One FHD period per day (iandi-funeral-honors-duty 144).
12. BAH and life events. Late dependency filing delays payment and does not forfeit it (content/marines/marriage-and-spouse-add.mdx 101). Voluntary support qualifies for BAH-DIFF (child-custody-changes.mdx 129). Remove the zip code address check (content/admin/pac-bah-with-dependents.mdx 110).
13. Bereavement leave. Add the 14-day non-chargeable bereavement leave per DoDI 1327.06 3.11.j and MARADMIN 220/23 on content/marines/emergency-leave.mdx line 155 and content/marines/death-of-dependent.mdx line 82.
14. Parental leave follow-on to PR #152. Apply the convalescent fix to content/marines/birth-and-adoption.mdx line 196. Fix the Multiple Qualifying Events rule (military-parental-leave-program.mdx line 95), the 1-year extension rule (line 313) and the PAA 01-22 attribution (line 73).
15. Majors. 279 confirmed majors sit in wave-1-confirmed.md, grouped by cluster. Fix them by cluster in the same pass as the blockers on the same page.

## Claims with no archive source

353 claims on 148 pages resolve to no archive file. Full list by page: wave-1-no-archive-source.md. Stephen names a source or the claim gets rewritten. The large groups:

- pay-dodfmr-2, 177 claims. Mostly current-year rate tables and DFAS process details with no archive copy.
- Contact numbers and URLs (DFAS, MCTFS help desks) on most clusters.
- Four archive sidecars have no PDF behind them: MCO P1070.12K W/CH-1, MCO 5000.12F W/CH-2, MCO 1500.59A and NAVMC 1200.1L. Claims citing those read as no archive source until the PDFs land.

## Pages not fully audited

These pages keep their current lastVerified and go to the wave 2 re-run list.

- Not checked, pay-dodfmr-1: s1g1-inbound-management-pay-starts-and-allowance-initiation, s1g1-military-pay-processing-overview, s1g1-special-hazardous-duty-pay-career-sea-pay-and-submarine-duty, s1g1-special-hazardous-duty-pay-hazardous-duty-incentive-and-diving, s1g1-waivers-remissions-indebtedness-overview.
- Partial, pay-dodfmr-1: s1g1-prepare-upb, content/leader/pay-special-pay-verification.mdx.
- Partial, travel-jtr: tdy-lodging (tail FAQ), tdy-transportation (POV and local tail), tdy-tad-overview, dts-profile-and-setup, dts-roles-and-routing, creating-dts-authorizations.
- 69 wave 1 overflow pages moved to wave 2 clusters by budget or family fit. The list with target cluster sits in clusters.json under waves 1 overflow.

## Oct-20 regression

From oct20-regression.md. 24 IDs re-tested against this branch. 18 fixed, 4 partial, 2 open.

- Open. FP-01, PAA 03-26 mandatory UD/MIPS notes from 1 Oct 2026 still has zero portal coverage. IN-01, the 5800.16 legal administration checklist still carries the 2025-09-23 revision with 45 items.
- Partial. MC-06, two lines in content/citations/maradmin-291-19.mdx still call 468/23 current. DC-03, content/citations/mco-1500-61.mdx still lists MCO 1754.9A. DC-04, three citation bodies still tell readers to apply NAVMC 1200.1K. PF-05, the DLA table was not re-checked grade by grade.

## Mechanical checks

- superseded.json lists 3,949 cancel candidates on 651 pages. The cancel classifier binds a cancellation message to the base order through its REF lines, so the top rows are false. The three largest, MCO P1070.12K (561 rows), MCO 1050.3J (411) and MCO P1400.32D (389), show as cancelled and are current. Workers used the file as a candidate list only. No finding in this report rests on it. A classifier fix is parked for after wave 1.
- contradictions.json groups 17 topics. Most rows are legitimate variation by rate or context. Cross-page contradictions the workers confirmed appear as majors in wave-1-confirmed.md.

## Not in portal lane

- E: drive health. The drive dropped during the first cache run. chkdsk left 883 cached text files unreadable (WinError 1392) under E:\GunnyBot\Policies\_text and 41 found.NNN folders on E:. Source files read clean. The _text folder holds derived data only. Deleting it loses nothing. Check the drive before the next archive refresh.
- Archive gaps. The four sidecars without PDFs listed above. MARADMIN 334/26 and 353/26 PDFs do not open.
- Four content/marines/.trash-NAME.mdx files sit in the content tree. scripts/sync-content.mjs skips dot-prefixed files, so they never publish. Delete them or move them out of content/ to keep future audits clean.

## What happens on your go

Task 6 fixes wave 1 by finding, grouped through alsoOn so one fact changes everywhere at once, with a correction entry per corrected rule and lastVerified moved only on pages where every claim came back ok or fixed. Waves 2 and 3 follow the same path. Nothing changes until you give the go.
