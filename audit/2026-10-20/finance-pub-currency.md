# Finance publication currency audit

Date: 2026-10-20. Read-only audit. Inputs refreshed 2026-10-17/18 at E:\GunnyBot\Policies.

## Scope

Compared portal citations and role content against fpm_index, paa_index, paan_index, tan_index, fan_index, ican_index, srb_index, mpo_index, prium_index, dodfmr_index and dtmo_index. Citation files checked: 5 FPM, 52 PAA, 3 PAAN, 9 DODFMR, JTR and 3 DTMO files. Also grepped content/admin, content/marines, content/leader and content/updates for the topics of each new publication.

Result: no cited publication is an older revision than the newest in its index. The findings are omissions, a stale parent date and one stale URL. No wrong facts were found in cited PAA, PAAN, FPM or DoDFMR records.

## Findings table

| ID | Sev | Portal file | Portal says | Current authority | Evidence |
|----|-----|-------------|-------------|-------------------|----------|
| FP-01 | Major | content/admin/pac-ud-mips-storage.mdx and content/admin/s1g1-admin-systems-management-overview.mdx (unit diary certification) | Certify the unit diary, upload to UD/MIPS. No mention of the Unit Diary Notes requirement. | PAA 03-26 (15 Sep 2026). Effective 1 Oct 2026, use of Unit Diary Notes is mandatory for every unit diary requiring certification. MCTFS PRIUM update follows. Driven by NFR 2025-0001-FIN-GFMC. | E:\GunnyBot\Policies\PAA\CY2026\paa-03-26.md para 3. Grep for "Unit Diary Notes", "Notes tab", "diary notes" across content returns 0 hits. No citation file paa-03-26 exists. Requirement is already in force 19 days. |
| FP-02 | Medium | content/admin systems access pages, content/links/miap-3270.mdx | MIAP appears only as the 3270 link and in the PAA 06-10 title on pac-iram-overview. No statement that Reflection Desktop is removed. | PAA 01-26 (20 Aug 2026). Reflection Desktop removed on or after 31 Aug 2026. All MCTFS access through MIAP from 1 Sep 2026. Permissions and roles unchanged. | paa-01-26.md paras 3 and 4.a to 4.d. Grep "Reflection Desktop" returns only pac-iram-overview (PAA 06-10 title). No citation file paa-01-26. The portal states no contrary Reflection procedure, so this is an omission, not an error. |
| FP-03 | Medium | content/admin/pac-cost-of-living-allowance.mdx (lastVerified 2026-05-01), content/admin/s1g1-inbound-management-pay-starts-and-allowance-initiation.mdx | COLA entitlement and PCS processing described with no travel-day checkage rule. | PAAN 03-26 (3 Sep 2026). No CONUS COLA for authorized PCS travel days. Deduct from first travel day through date of report. Date of report deducts at the new PDS rate, other days at the old PDS rate. PRIUM 070502.D update forthcoming. | paan_003-26.txt paras 2 to 4.b. Grep "checkage" hits pac-cost-of-living-allowance and four other admin pages, none cite PAAN 03-26. Only 3 PAAN citations exist, all cancelled items (2015, 2016, 2021). |
| FP-04 | Medium | content/marines/pcs-per-diem.mdx (lastVerified 2026-05-03), content/marines/temporary-lodging-expense.mdx | PCS per diem lists lodging with receipts. No last-day-of-travel lodging rule. | TAN 04-26 (4 Sep 2026) and MAP 03-26(R) (UTD posted 10 Jul 2026). Effective 7 Jul 2026, lodging is authorized on the last day of travel to the new PDS, capped at the locality rate, with 75 percent M&IE. If enough elapsed time exists, file TLE instead. TAN 04-26 cancels TAN 01-26. | tan_004-26.txt paras 1 to 3. dtmo_index MAP 03-26, effective_date 07/10/2026. Grep "last day of travel" hits only tdy-per-diem (TDY first and last day M&IE), not PCS. |
| FP-05 | Medium | content/marines/idt-travel-reimbursement.mdx (lastVerified 2026-05-04) | IMA RSLB billets are eligible. Eligible expenses listed with no lodging statement. | TAN 03-26 (14 Aug 2026). Effective 11 Jul 2026, the authorization to reimburse IMA IDT lodging is revoked. Lodging before 11 Jul still processes in DTS with GO endorsement and memos. | tan_003-26.txt paras 2 and 3. Grep "IMA IDT lodging" returns 0 hits. The page predates the revocation by two months. |
| FP-06 | Medium | content/citations/maradmin-234-26.mdx (lastVerified 2026-05-22), content/admin/s1g1-dts-authorizations-and-orders-creation.mdx, content/admin/s1g1-travel-entitlements-mileage-claims-tdy-travel-and-advances.mdx | Cites JTR "dated 1 February 2026". On-base lodging mandatory under ILP unless the AO issues a certificate of non-availability. | CAP 31-26(I), effective 30 Jun 2026, rewrites the JTR lodging sections, details exceptions to the Integrated Lodging Program and retires the JTR Supplement on the DoW ILP. CAP 58-26(I), effective 1 Oct 2026, adds the group travel exception rule. | dtmo_index entries CAP 31-26(I) and CAP 58-26(I). Four more JTR CAPs (41, 45, 47, 54) landed after the 1 Feb 2026 date. The MARADMIN 234/26 text is not contradicted, but its JTR anchor is eight months old. |
| FP-07 | Low | content/citations/jtr.mdx | externalUrl points to media.defense.gov/2022/Jan/04/.../JTR.PDF. Page tells readers to confirm the current effective date. | dtmo_index shows JTR changes through 1 Oct 2026 (CAP 58-26, CAP 59-26, CAP 54-26). | jtr.mdx externalUrl line. A January 2022 PDF is not the current JTR. Repoint to the DTMO JTR landing page. lastVerified 2026-05-11. |
| FP-08 | Low | content/admin/s1g1-travel-entitlements-mileage-claims-transportation-allowances-and-mileage.mdx and the PCS mileage page | States no dollar rates, says rates update periodically. | TAN 02-26 and CAP 46-26(I). Mid-year CY2026 POV rates effective 1 Jul 2026: TDY 0.76 per mile, PCS and other 0.235, motorcycle 0.74, airplane 1.935. | tan_002-26.txt para 2. The portal makes no wrong claim. Gap only if a rate table is ever added. |
| FP-09 | Low | content/updates/tle-extensions-restricted-hhg-only.mdx (dated 2026-10-19) | Only individual TLE extension path is JTR 050604-B4, restricted HHG, up to 60 days, through MPO. | MAP 29-26(R), effective 20 Aug 2026. Up to 60 days TLE for CONUS PCS when HHG cannot ship due to international shipping restrictions, via MAP member to PDTATAC. | dtmo_index MAP 29-26 description. Consistent with the portal framing. The entry cites only the jtr registry id. Add MAP 29-26 so the 20 Aug date is on record. |
| FP-10 | Low | content/citations/fpm-vol-1.mdx | effectiveDate 2026-09-01. | Index edition for Vol 1 is 2026-09-14 (Vol 1 20260914.pdf, modified 2026-09-14T20:31Z). Vols 2 and 3 also 2026-09-14. Vol 4 is 2026-07-14. | fpm_index.json editions. lastVerified 2026-09-14 matches. The 09-01 effective date has no index support. Verify against the volume change page. |
| FP-11 | Low | content/citations/fpm.mdx | lastVerified 2026-05-21. | Child volumes 1 to 3 re-verified 2026-09-14. Index shows editions dated 2026-06-03 (Vols 2 and 4), 2026-07-14 and 2026-09-14 after 2026-05-21. | The parent record lags its children by four months. |
| FP-12 | Info | content/links/miap-3270.mdx | Summary reads "Source label: MIAP (3270). Review and rewrite this summary, then move the file into content/links/." | Not a publication issue. Scaffold text is live on a published page. | miap-3270.mdx line 4. Related to FP-02. |

## New publications since 2026-07-01 not reflected

Reflected already: PAA 02-26 (E-ICAM). Covered by citations/paa-02-26.mdx, updates/mctfs-access-moves-to-e-icam.mdx and six admin pages. The 17, 21, 25 and 30 Sep dates match the PAA text. The PAA was modified 2026-09-17, after the portal check of 2026-09-14. Re-read it once to confirm no text change.

| Publication | Date | Subject | Portal reflection | Finding |
|-------------|------|---------|-------------------|---------|
| PAA 01-26 | 2026-08-20 | Reflection Desktop to MIAP | None | FP-02 |
| PAA 03-26 | 2026-09-15 | Mandatory Unit Diary Notes, effective 1 Oct 2026 | None | FP-01 |
| PAAN 02-26 | 2026-09-02 | MCTFS AD payday and U&E schedule FY/CY27 | None. Admin UEC page cites MCO 5000.14D only | Low gap. Portal states no dates. Next dates: U&E 20 Oct 2026, payday 30 Oct. No finding unless a schedule page is added |
| PAAN 03-26 | 2026-09-03 | PCS COLA checkage | None | FP-03 |
| PAAN 02-25 | cancelled 2026-09-17 | Spouse relicensing reimbursement, folded into manual | Portal has no such content | None |
| TAN 02-26 | 2026-08-03 | CY2026 POV mileage mid-year rates | Rates not stated | FP-08 |
| TAN 03-26 | 2026-08-14 | IMA IDT lodging revoked | None | FP-05 |
| TAN 04-26 | 2026-09-04 | Last-day PCS lodging, cancels TAN 01-26 | None | FP-04 |
| ICAN 01-26 | 2026-07-10 | Corrective action plan, new DD 577 template (FPM Vol 4 par 020504.C, Fig 2-2), training due 30 Jul 2026 | s1g1-dts-appointments-and-dd577.mdx cites MCO 4650.39A only, no template or training language | Medium gap for DTS certifying officer appointments. Page lastVerified 2026-05-11. Not given its own ID because the page states no conflicting process. Add if the DD 577 page is touched |
| ICAN 02-26 | 2026-08-06 | FY26-27 DDS changeover | None | Out of S-1 scope, disbursing only |
| FAN 04-26 to 10-26 | 2026-10-16 | FY27 SLOAs (ag leasing, fish and wildlife, forestry, MCCS, QRP, SIK, NGGF). Seven older FANs cancelled the same period | None | Out of S-1 scope, disbursing only. No finding |
| SRB 2026.07.01 | released 2026-07-30 | MOL and UD/MIPS bug fixes | None | No procedural change |
| SRB 2026.08.01 | released 2026-08-27 | Cpl to Sgt TIS 30 months, SULI logic removed from PromRec | marines/junior-enlisted-promotions.mdx states 30 months and SULI cancelled (MARADMIN 222/26) | Reflected |
| SRB 2026.09.01 | released 2026-09-29 | UD/MIPS Reporting Unit Audit Module, Refresh Tree | None | Low. Not a procedure the portal states |
| SRB 2026.10.01 | release 21 Oct 2026 | MCTFS: auto-removal of select grade on 197-RMK promotion restriction (TTC 053, 268, 337), new TTC 488 and 122-RMK for other-service courses, 168-RMK PFM data to NCMIS, CONUS COLA 934 remark gains Adjust Code and Credit/Debit (stops use of 927 for corrections), TTC 340/001 for DIFDEN-2 lapse date | Grep for 927, 934, TTC 488 and 197-RMK in admin content finds none outside PRIUM citations | Low now, Medium after 21 Oct. Promotion restriction and COLA correction pages should pick it up after release. Tied to FP-03 |
| MPO Ask-MPO tickets 26 to 106 | Aug to Oct 2026 | Untitled items | Not assessable | See Out of scope |
| DTMO MAP and CAP | Jul to Oct 2026 | 27 items since 2026-07-01 including CAP 31-26, 46-26, 58-26, MAP 03-26, 26-26, 29-26, 43-26 | See FP-04, 06, 08, 09 | MAP 26-26 (hospice family travel) and CAP 42-26 (HHT, civilians) have no portal topic |

## Step results

1. Older revisions cited: none. All 52 cited PAA ids exist in paa_index and none is flagged cancelled there. PAA 01-25 and 12-13 are themselves cancellation notices and are titled so. PAAN 02-15, 04-21 and 06-16 are Cancelled in paan_index (2022-10-05, 2024-06-01, 2022-10-05) and the portal titles say CANCELLED. FPM Vols 1 to 4 lastVerified 2026-09-14 match the newest editions (Vol 4 newest is 2026-07-14).
2. See the tables above.
3. DoDFMR: the newest dated chapter revision per cited volume is earlier than the registry lastVerified in every case. Vol 7A newest Jan 2026 (ch 50), portal verified 2026-09-23. Vol 9 newest Jan 2026 (ch 05), verified 2026-05-11. Vol 4 newest Dec 2025, verified 2026-06-12. Vol 14 newest Dec 2024. Vol 16 newest Nov 2025. Vol 1 newest Jan 2025. Vol 5 newest Dec 2025 (verified 2026-05-11). Vol 7B newest Feb 2026 (verified 2026-05-16). Vol 8 newest Jan 2026. No flags. New in the index: "Supplemental" and "Authoritative Guidance" documents dated September 2026 for Vols 1, 4, 6, 10 to 15 (downloaded 2026-10-09). They carry no chapter number and no revision_date field. Registry records for Vols 1, 4, 14 predate them. Watch item, not a finding, until the supplement text is read.
4. JTR: the portal states one JTR date, "1 February 2026", in maradmin-234-26.mdx. dtmo_index has no JTR base edition record, only MAP and CAP change items, so the exact current change number cannot be named. See FP-06 and FP-07.

## Out of scope

- The 63 MCTFSPRIUM children with no externalUrl and the access-gated FPM volumes. Not flagged.
- PRIUM currency. prium_index.json last_check_status is "skipped-not-signed-in" on 2026-10-01 and entries carry no revision dates. The portal snapshot is dated 2026-06-01. PAA 03-26 and PAAN 03-26 both announce PRIUM updates (diary notes, 070502.D), so the snapshot is likely behind. Not verifiable here.
- MPO index. All 79 titles read "Untitled item N" with no body text in the index. Not assessed.
- FAN, ICAN 02-26 and SRB bug-fix content that touches disbursing or system defects only.
- Citation types outside the listed set (MARADMIN, MCO, DODI and similar).
- Attachments of PAA 02-26 and body text beyond para 6.
- Whether MARADMIN 222/26 or 502/26 is the correct Cpl and Sgt promotion authority. A promotions auditor owns that.

## Method

- Read the structure of all 11 JSON files. PAA entries carry date, cancelled and cancel_date. PAAN, TAN, FAN and ICAN carry date_published, status and date_canceled. SRB and MPO carry created and modified only. DoDFMR carries revision_date as "Month Year". DTMO carries effective_date.
- Selected items dated or modified on or after 2026-07-01. Read PAA text from E:\GunnyBot\Policies\PAA\CY2026 markdown. Extracted PAAN, TAN, FAN, ICAN and SRB PDFs with pypdf (python -I, PYTHONUTF8=1) into C:\Users\barbc\AppData\Local\Temp\claude\audit-scratch\finance\.
- Parsed citation frontmatter (id, number, effectiveDate, lastVerified, externalUrl) for every FPM, PAA, PAAN, DODFMR, JTR and DTMO citation. Matched PAA ids to paa_index by number and year and checked cancelled flags and modified dates against lastVerified.
- Compared DoDFMR revision months against registry lastVerified per volume.
- Grepped content (excluding _stubs, videos, inspections) with topic terms per new publication. Zero-hit terms were confirmed by reading the nearest candidate page.
- Limits. DTMO descriptions are truncated or blank for some items (MAP 03-26, MAP 43-26), so TAN 04-26 text served for MAP 03-26. No live site checks were made. Severity: Major means the portal states a procedure in force and the publication adds to it. Medium means a stated topic lacks a current rule. Low means metadata or a gap with no wrong claim.
