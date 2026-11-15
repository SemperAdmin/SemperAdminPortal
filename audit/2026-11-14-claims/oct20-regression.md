# 2026-10-20 audit regression check

Checked 2026-11-14 against this worktree. Base is main at 1a22d0b with no content or src/lib differences from main. Source: top 15 actions in audit/2026-10-20/REPORT.md. Status is fixed, partial, or open. Evidence is file:line from the current tree.

The MPLP six-week convalescent error is fixed in PR #152 and sits outside this table.

| ID | Status | Evidence |
|---|---|---|
| MC-01 | fixed | content/commander/turnover-30-day-actions.mdx:100 cites 490/26 and says the tier system is gone. Reports due 31 March and 30 September at :106. src/lib/commander-obligations.ts:242, 282, 291 cite 490/26. Zero Tier 1 hits in the other four pages and the lib. |
| MC-02 | fixed | content/marines/human-breast-milk-shipment.mdx:26 and :169 list shipping fees, excess baggage, and ice only per 603/24. Storage bags, cold packs, and refrigeration are excluded at :99, :100, :169. |
| MC-03 | fixed | content/marines/body-composition-reporting.mdx:27, :59, :286 read "less than or equal to 0.52" per 073/26. Citation chip resolves to content/citations/maradmin-073-26.mdx. |
| MC-04 | fixed | content/marines/selective-retention-bonus-and-targeted-mos.mdx:138-165 carry Change 1 (208/26) and Change 2 (429/26). :140 removes 1721 from the 84-month kicker. content/marines/lateral-moves-program.mdx:203 says 208/26 removed 1721. |
| MC-05 | not in top 15 | Listed for context only. content/marines/special-leave-accrual.mdx:13, :30 now carry ALNAV 056/26 and the 545/26 reopening. |
| MC-06 | partial | No role page or src/lib file cites 468/23 any more. Two lines in content/citations/maradmin-291-19.mdx:22 and :29 still call 468/23 the "current" framework. |
| MC-07 | fixed | content/inspections/igmc-news.json:2 lastUpdated 2026-10-20 and :13 carries MARADMIN 251/26 as the current schedule. |
| DC-01 | fixed | Zero 1400.31C on role pages. Remaining mentions are "now MCO 1400.31D" notes at content/citations/mco-1070-1.mdx:57 and mco-6110-3a.mdx:117. Registry entry content/citations/mco-1400-31d.mdx:12 supersedes the C revision. |
| DC-02 | fixed | Zero 1752.5A outside content/updates/superseded-order-letters-corrected.mdx:32, which records the correction. |
| DC-03 | partial | Role pages fixed (content/updates/superseded-order-letters-corrected.mdx:33). content/citations/mco-1500-61.mdx:47 still lists MCO 1754.9A. |
| DC-04 | partial | Registry entry exists at content/citations/navmc-1200-1m.mdx. Three citation bodies still tell readers to apply 1200.1K: content/citations/maradmin-014-25.mdx:25, maradmin-145-24.mdx:41, maradmin-365-25.mdx:25. |
| DC-05 | fixed | Registry entry content/citations/mco-5512-11f.mdx:8 and :18 carry 5512.11D as alias. No page cites D as current. |
| DC-06 | fixed | Registry entry content/citations/mco-p1070-12.mdx:18 aliases J to K W/CH-1. No page cites J as current. |
| PF-01 | fixed | content/marines/pov-shipment-and-mileage.mdx:91, :160 read $0.235 and $0.205 per 46-26. |
| PF-02 | fixed | content/marines/pcs-per-diem.mdx:113 and content/marines/member-and-dependent-travel.mdx:51 read $0.235. |
| PF-03 | fixed | content/marines/tdy-transportation.mdx:124, :201 read $0.76 car and $0.74 motorcycle. |
| PF-04 | fixed | content/admin/pac-family-separation-allowance.mdx:4, :41, :118, :124 read $300. :270 keeps $250 only for periods before 18 December 2025. content/admin/iandi-mobilization-active-duty-pay.mdx:91 reads $300. |
| PF-05 | partial | content/marines/dislocation-allowance.mdx:80-83 and :149 carry the CY2026 table. Not re-checked against the audit's every-grade values or the partial DLA figure. |
| PF-06 | fixed | Same evidence as MC-04. SRB page carries both changes and the revised 1721 amounts at :147-156. |
| PF-07 | fixed | content/marines/flexible-spending-accounts.mdx:30, :31, :54, :81 read $7,500, $3,400, $3,750 MFS. src/lib/marines-categories.ts:870 matches. Carryover not re-checked. |
| PF-08 | fixed | content/admin/pac-bas-overview.mdx:67, :68 read $328.48 officer and $476.95 enlisted. :71 gives 2025 rates. |
| PF-09 | fixed | content/admin/pac-hardship-duty-pay.mdx:85-91 show $50, $100, $150 and "No location pays above $150". |
| PF-10 | fixed | content/marines/tdy-per-diem.mdx:61 and content/marines/creating-dts-authorizations.mdx:169 read $68 to $92. FY2027 lodging $113 not re-checked. |
| FP-01 | open | Zero hits for PAA 03-26 or Unit Diary Notes in content or src/lib. content/citations has paa-03-20, 21, 23, 25 only. content/admin/pac-ud-mips-storage.mdx and s1g1-admin-systems-management-overview.mdx carry no mandatory UD notes line. |
| IN-01 | open | content/inspections/igmc/5800.16-legal-administration.json:12 effectiveDate still 2025-09-23, :13 lastVerified 2026-09-23, 45 items. Audit expects 47 items and a 2026-09-26 effective date. |

Totals for the 24 top-15 IDs scored: 18 fixed, 4 partial (MC-06, DC-03, DC-04, PF-05), 2 open (FP-01, IN-01). MC-05 is context only and not scored.
