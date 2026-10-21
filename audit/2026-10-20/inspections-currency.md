# Inspection checklist currency audit

Audit date 2026-10-20. Read-only pass. Portal files under `content/inspections/igmc/` (22) and `content/inspections/mcaat/` (18).

## Scope

- Compare each IGMC portal checklist to the newest copy in the local archive (`fa_checklists_index.json` plus the DOCX in `E:\GunnyBot\Policies\FA_Checklists`).
- Apply the inspection cadence to `lastVerified` (aging before 2026-04-20, stale before 2025-10-20).
- Check every cited MCO, MCBul and DoDI against `mcpel_index.json` and `dodi_index.json`.
- Compare against `IGMC-CHECKLIST-COMPARISON-2026-09-11.md`.

Severity scale. Major means the portal text differs from a newer source revision. Moderate means a cited order is cancelled or a change level lags, while the source checklist still carries the same citation. Minor means data hygiene or missing coverage.

Bottom line. One real divergence from source: Legal Administration. Four checklists cite orders cancelled by a newer MCO, but each matches its source DOCX, so the lag sits at IGMC. No IGMC checklist is aging or stale. No MCAAT authority snapshot exists locally.

## Findings table

| ID | Sev | Program file | Portal says | Current authority | Evidence |
|---|---|---|---|---|---|
| IN-01 | Major | `igmc/5800.16-legal-administration.json` | effectiveDate 2025-09-23, 45 items, lastVerified 2026-09-23 | DOCX revised 21 Sep 2026. Index effective date 2026-09-26. 47 items | `fa_checklists_index.json` entry "Legal Administration" downloaded 2026-10-09T15:01. DOCX file dated 2026-10-09. Portal re-pull was 2026-09-23 (commit 4c041eb), 16 days earlier. Differences listed below |
| IN-02 | Moderate | `igmc/1700.31-transition-readiness-program.json` | 8 items cite MCO 1700.31 | MCO 1700.31A, 2 Mar 2026, cancels MCO 1700.31 | `mcpel_index.json` lists 1700.31A Current. Cancellation line read in `MCO_1700.31A.pdf` para 2. Source DOCX (revised 21 Feb 2024) still cites the old order, so portal matches source |
| IN-03 | Moderate | `igmc/5040-command-inspection-program.json`, `igmc/5110.1-postal-affairs-and-official-mail-program-military-postal-activity.json` | 16 items in 5040 and 1 item in 5110.1 cite MCO 5040.6J | MCO 5040.6K, 1 May 2026, cancels 5040.6J | `mcpel_index.json` and `MCO_5040.6K.pdf` para 2. Source DOCX for 5040 (revised 13 Jan 2023) still cites 6J |
| IN-04 | Moderate | `igmc/4600.40-government-travel-charge-card-program.json` | Items 0204 and 0208 cite MCO 4600.40B. Other items cite 4600.40C | MCO 4600.40C, 12 Jan 2026, cancels 4600.40B | `MCO_4600.40C.pdf` para 2. Source DOCX holds the same two stale cites beside 32 cites of C |
| IN-05 | Moderate | `igmc/1900.16-separation-retirement-and-limited-duty.json` (17 items), `igmc/5800.16-legal-administration.json` (4), `igmc/1040-career-planning-program.json` (1), `mcaat/admin-training.json` (2) | Cite MCO 1900.16 W/CH 2 | MCPEL lists MCO 1900.16 W/CH-3, 28 May 2025 | `mcpel_index.json`. Source 1900.16 DOCX (revised 24 Mar 2025) cites CH 2 in 18 places. Change level lag, not a cancellation. 24 portal items |
| IN-06 | Minor | `content/inspections/_policy-indexes/fa_checklists_index.json`, `mcpel_index.json` | Repo copies trail the archive | Archive indexes dated 2026-10-17 | Repo FA index holds 77 entries, archive holds 83. 13 keys differ, among them 5060.20 Drill and Color Guard, 5700.45, 5351.1, Legal Administration (repo row lacks the 2026 revision), and renamed SMP and NATOPS rows. MCPEL index also differs |
| IN-07 | Minor | Archive `fa_checklists_index.json` | n/a | Portal is ahead of the index on three rows | 4650.39 index 2026-02-20, portal and `_fa-registry` 2026-07-20 (DOCX revised 20 Jul 2026 confirmed). 5110.2 index 2025-06-03, portal 2026-04-15, DOCX 6 May 2026. 1320 index Non-CoRE and HQMC (MF), portal CoRE and M&RA (MF) per the 8 Sep 2026 redesignation. The index rows are stale. The portal is right |
| IN-08 | Minor | `mcaat/*.json` (all 18) | lastVerified and effectiveDate both 2026-05-10 | No authority in archive | See MCAAT section. Cadence: aging on 2026-11-10, stale on 2027-05-10. `_audit_notes` on the files flag effectiveDate copied from lastVerified and a default sponsor |
| IN-09 | Info | `igmc-guides/*.json` (13 of 17) | lastVerified 2026-05-20 | n/a | Aging on 2026-11-20. Guides for 1040, 1700.23, 1700.31, 4650.39 carry 2026-09-11. Guide gaps on 5110.2 and 4650.39 from 11 Sep were not rechecked |

### IN-01 detail

Compared the DOCX to the portal by question text and reference list, item by item.

- Items 0115, 0116, 0117 (victim notification at NJP). DOCX opens "Can the functional area manager explain the processes in place..." Portal reads "Are processes in place...".
- Two items exist only in the DOCX. A new 0502 (page 11 counseling language for rehabilitation cases) and a new 0603 (de-issue of government weapons after a domestic violence conviction). Portal codes 0502 to 0506 shift to 0503 to 0507, and portal 0603 to 0605 shift to 0604 to 0606. 47 items against 45.
- References. Portal cites `MCBUL 5810 of 22 May 2024, encl (2)` on five items (0601 to 0605). DOCX cites `MCO 5810.8 dtd 10 Aug 26, Encl (2)` with paragraph pins. `MCO_5810.8.pdf` para 2 cancels MCBul 5810. `mcpel_index.json` lists MCO 5810.8, pub date 10 Aug 2026, status New.
- Separation items (0503 to 0507 in the DOCX) cite MCO 1900.16 W/CH 3. Portal cites W/CH 2.

The portal `effectiveDate` and item list describe the superseded checklist.

## Programs missing from portal

The archive FA index holds 83 rows. The portal holds 22 IGMC pages. 61 rows have no portal page. The eight Table B checklists from 11 Sep are now authored, so that earlier gap is closed. All entries below are Minor.

S-1 adjacent, worth a look.

| FA | Title | Category | Sponsor | Effective |
|---|---|---|---|---|
| 1700.36 | Single Marine Program | CoRE (was Non-CoRE) | M&RA (MF) | 2026-09-08 |
| 5351.1 | Operational Stress Control and Readiness | CoRE | M&RA (MF) | 2026-07-21 |
| 5700.45 | Communication and Strategy Operations | CoRE+ | HQMC (CD) | 2026-09-08 |
| 1720.1 | Suicide Prevention Program | CoRE | M&RA (MF) | 2025-06-03 |
| 1754.9 | Unit, Personal and Family Readiness Program | CoRE | M&RA (MF) | 2025-05-15 |
| 1754.4 | Exceptional Family Member Program | Non-CoRE | M&RA (MF) | 2025-05-15 |
| 1752.5 | SAPR | CoRE | M&RA (MF) | 2025-11-17 |
| 5300.17 | Substance Assessment and Counseling Program | CoRE | M&RA (MF) | 2025-06-25 |
| 5354.1 | Prohibited Activities and Conduct (PAC) | CoRE | M&RA (MPE) | 2025-05-15 |
| 5239 | Cyber Security Management | CoRE | DCI (IC4) | 2025-05-15 |
| 5510.3 | Information and Personnel Security Program | CoRE | DC,I (IID) | 2025-05-15 |
| 1020 | Uniform Inspection | Non-CoRE | HQMC (MCUB) | 2019-06-24 |
| 6110 | Body Composition and Military Appearance | CoRE | TECOM (HPB) | 2026-04-16 |
| 6100.13 | Physical Fitness and Combat Fitness Program | CoRE | TECOM (HPB) | 2025-05-15 |
| 1730 | Religious Ministries | Non-CoRE | HQMC (REL) | 2025-05-15 |

The 11 Sep comparison called 1700.36, 5351.1 and 5700.45 not recommended. 1700.36 and 5700.45 moved up to CoRE and CoRE+ effective 8 Sep 2026, which weakens that call for 1700.36.

Other index rows with no portal page (operational, aviation, logistics, law enforcement, training): 11000.1, 11000.22, 11130, 11240 (Motor Transport Operations and Licensing, two rows), 1500.52, 1500.59, 1500.60, 1500.62, 1553.2, 1553.3, 1630, 1640, 3000.13, 3070, 3302, 3400, 3500.10, 3500.14, 3501.1, 3501.36, 3550, 3571.2, 3574, 3700, 3710.7, 3750.6, 3800, 3800.2, 4400.201, 5000.18, 5060.20 (Sword Manual, Color Guard, Drill), 5090, 5100.29, 5370, 5510.2, 5530, 5580, 5580.2, 5580.6, 5585.5, 5750, 6000, 6500.

MCAAT. The archive holds no MCAAT checklist source, so absent MCAAT programs cannot be listed.

## Superseded references in items

Method. 1,146 distinct reference strings across 40 programs, 66 distinct MCO, MCBul and DoDI base-and-revision pairs. Matched on prefix, base number and revision letter against `mcpel_index.json` (MCO, MCBul) and `dodi_index.json` (DoDI).

Index limit. `mcpel_index.json` carries only status Current (921) or New (249). It has no Cancelled or Superseded flag. Cancelled orders drop out of the listing. Supersession is therefore detected by a higher revision letter on the same base number, then confirmed from the cancellation line in the local PDF where one exists.

| Cited | Current | Cancellation confirmed in PDF | Items by program |
|---|---|---|---|
| MCO 1700.31 | 1700.31A (2 Mar 2026) | Yes | 1700.31: 8 |
| MCO 5040.6J | 5040.6K (1 May 2026) | Yes | 5040: 16, 5110.1: 1 |
| MCO 4600.40B | 4600.40C (12 Jan 2026) | Yes | 4600.40: 2 |
| MCBul 5810 (22 May 2024) | MCO 5810.8 (10 Aug 2026) | Yes | 5800.16 Legal: 5 |
| MCO 1900.16 W/CH 2 | W/CH 3 (28 May 2025) | Change level only | 1900.16: 17, 5800.16 Legal: 4, 1040: 1, mcaat/admin-training: 2 |

Cleared. All other MCO bases and revisions match the current index revision. These include 5110.4B (180 item hits across 5110.1 and 5110.2), 5210.11F, 5214.2G, 5215.1K, 5512.11F, 1742.1C, 1610.7B, 6110.3A, 6100.13A and 4650.39A. Apparent misses on 1900.16, 5800.16, 5215.1K, 5512.11F, 6110.3, 6100.13, 1751.3, 1400.32, 1320.11, 4400.201 and 1650.19 came from index titles that carry a W/CH or VOLUME suffix. Manual lookup found each listed Current.

DoDI. The DoDI change report of 2026-10-18 shows 0 new and 0 updated of 785 issuances. Change-level comparison of DoDI citations was not performed.

Counts per program, items citing a superseded or lagging order.

| Program | Items |
|---|---|
| 1900.16 Separation, Retirement and Limited Duty | 17 |
| 5040 Command Inspection Program | 16 |
| 5800.16 Legal Administration | 9 (5 MCBul 5810, 4 CH 2) |
| 1700.31 Transition Readiness | 8 |
| 4600.40 GTCC | 2 |
| mcaat/admin-training | 2 |
| 5110.1 Military Postal Activity | 1 |
| 1040 Career Planning | 1 |

Where the source DOCX holds the same citation, the fix belongs at IGMC. Do not edit the portal citation ahead of source without SME direction. Only Legal Administration (IN-01) has a newer source that already corrects the reference.

## Cadence

Boundaries on 2026-10-20. Aging before 2026-04-20. Stale before 2025-10-20.

- IGMC checklists: 22 of 22 `lastVerified` 2026-09-23. All fresh. Aging on 2027-03-23.
- MCAAT checklists: 18 of 18 `lastVerified` 2026-05-10. Fresh today (163 days). Aging on 2026-11-10, stale on 2027-05-10.
- Aging today: none. Stale today: none.

Caveat. Legal Administration carries `lastVerified` 2026-09-23, which claims a source check, but the source revision followed on 21 to 26 September 2026. The date does not reflect current source.

## Changes since 2026-09-11

- Portal work done after the comparison: all 22 checklists re-pulled with the fixed parser (4c041eb, 2026-09-23). Cut-off references restored on nine 5210 items (f37a11c). 5110.1 subsections fixed (a055251, 2026-10-09). `lastVerified` moved from 2026-09-11 to 2026-09-23 on all 22. The eight Table B checklists are in.
- Still open from 11 Sep: 4650.39 and 5110.2 inspector guides need SME rebuilt DOCX.
- New at source since 11 Sep: Legal Administration DOCX revised 21 Sep 2026 (IN-01). Single Marine Program became CoRE (index download 2026-09-23). 4650.39, VWAP and Legal DOCX were re-downloaded on 2026-10-09. 4650.39 still reads revised 20 Jul 2026 and its 21 questions match the portal. VWAP still reads revised 11 Jan 2024 and its 72 questions match.
- Question-text parity of all 22 DOCX against the portal found no other differences. Formatting-only deltas on 1040 items 0109 and 0210.

## MCAAT

The portal MCAAT pages come from `scripts/parse-mcaat.py` reading a CSV, with `LAST_VERIFIED = "2026-05-10"` hard coded. No CSV or checklist revision record sits in the archive. `mcaat_index.json` (last check 2026-10-18, status ok, 92 items) indexes the AskMCAAT Q&A tracker, not checklist revisions. The latest response date there is 2026-04-14, before the portal baseline. MCAAT currency cannot be established from local sources. This is a gap in the archive.

## Out of scope

- Live IGMC and MCAAT sites. The IGMC site blocks curl. No download was attempted.
- Reference-by-reference diff for every program. Question text parity was checked for all 22. Reference lists were diffed only for Legal Administration. Other programs were checked by citation pattern.
- Inspector guide content (`igmc-guides/`). Dates only.
- DoDI change levels, NAVMC, SECNAV, MCTFSPRIUM, JTR, FMR and MARADMIN citations.
- MCBul expiry dates. The index does not carry them.
- `igmc-news.json` (lastUpdated 2026-09-11) and `_reference-links.json` URL health.
- Any edit to portal content.

## Method

1. Loaded `content/inspections/igmc/*.json` and `mcaat/*.json`. Read `_fa-registry.json`.
2. Joined portal programs to `fa_checklists_index.json` by `fa_number` and title. Compared effective date, sponsor and category. Diffed the repo copy of the index against the archive copy.
3. Unzipped each local DOCX, read the Revised line, and compared question text to the portal after normalizing punctuation and case. Split Legal Administration by item code for a full question and reference diff.
4. Extracted MCO, MCBul and DoDI citations by regex from all `references` arrays. Compared to `mcpel_index.json` by prefix, base and revision letter. Confirmed four cancellation lines from local PDF text with PyMuPDF.
5. Applied the cadence thresholds to `lastVerified`.
6. Read the 2026-09-11 comparison and `git log` for `content/inspections` and `content/updates` since that date.

Scratch scripts sit in `C:\Users\barbc\AppData\Local\Temp\claude\audit-scratch\inspections\`. Python ran with `-I` and `PYTHONUTF8=1`.
