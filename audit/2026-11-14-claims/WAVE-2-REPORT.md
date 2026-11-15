# Semper Admin Portal Claims Audit, Wave 2

## Header

- Audit date: 2026-11-15. Branch claude/claims-audit-2026-11-14-7695e5 at f408cee, carrying every wave 1 fix (draft PR 153). PR 152 is open and not on this branch.
- Authority snapshot: text cache on D: (.superpowers/text-cache), built from E:\GunnyBot\Policies through MARADMIN 552/26. No agent touched E: in this wave.
- Method: plan docs/superpowers/plans/2026-11-14-claims-audit.md, Task 7. Ten Sonnet workers checked 40 clusters, about four each, every normative claim against the base document plus later amending messages. Four Opus verifiers re-checked every blocker and major against the quoted paragraph and hand-checked up to 3 ok claims per cluster.
- Scope: wave 2, 40 clusters, 438 pages, 3,685 claims. Every page finished. No page carried over.
- No content edited. No lastVerified moved. Findings sit in findings/wave-2/, Opus verdicts in verify/wave-2/.

## Posture summary

Wave 2 found 34 blockers on 23 pages and 352 majors, all confirmed by Opus against the source paragraph. A Marine acting on a blocker page gets the wrong outcome today. Wave 2 covers lower-traffic families than wave 1 (awards, PES, casualty, reenlistment, SDAP, FOIA, GTCC, records), so the blocker rate is lower, about one page in 19 against one in 7 for wave 1. Five patterns drive the blockers.

1. Special pay tiers wrong. Pages put drill instructors at SDAP level 6 (the order sets SD-5, SD-6 covers recruiters and the SMMC), list MSG as SDAP (MSG draws AIP per MARADMIN 628/20), and deny Combat Instructors SDAP. Disability severance shows 12 months of basic pay per year of service with a $432,000 example. DoD FMR Vol 16 Ch 1 sets 2 months, capped at 19 years.
2. Performance evaluation coverage wrong. Three pages put Sergeants under JEPES. MCO 1610.7B puts JEPES at E-1 through E-4 and FITREPs at Sergeant through Major General. Two pages route a substantive correction or PERB petition through the S-1 and the general officer. The Marine files the DD 149 straight to CMC (MMRP-13).
3. Casualty reporting window wrong. Two admin pages teach an 8-hour PCR standard. MARADMIN 186/25 sets a voice report to MFPC within 30 minutes and the casualty template within one hour.
4. Reenlistment program status stale. The STAP page says ECDP is closed for FY27 in three places and sets an ECC cutoff of 30 September 2026. MARADMIN 190/26 opens ECDP for FY27 with a 30 September 2027 cutoff. The LATMOV page overstates the EOD bonus.
5. Approval authority one grade low. The awards overview puts NAM at O-4 and NC at O-5 commanders. MCO 1650.19J sets O-5 and O-6, with a Recruiting Station exception at O-4. The military awards admin page has the S-1 sign by direction. The awarding authority signs. SkillBridge approval is set at LtCol and GO tiers, while MCO P3500.72A places it with the first commander holding UCMJ authority.

Other blockers. BAH-Diff is defined as a separate-location allowance on three BAH pages (it is child support paid by a member in single-type quarters). Appellate leave starts at convening authority approval on the appellate leave page (it starts at entry of judgment) and drops the pay election. The member-to-member audit page describes a peer audit instead of the dual-military married-couple pay audit. The SAPR page lists a chaplain and the SVC as restricted-report recipients. Both route a Marine to the SARC, and neither takes a report. Aviation pre-command pages require the MAWTS-1 course in place of the SAS Aviation Commander's Course.

Only 20 of 438 pages came back with every claim ok.

## Severity table

Confirmed counts after Opus verification. Minor is the verifier's downgrade of a worker blocker or major.

| Cluster | Pages | Claims | Ok | Blocker | Major | Minor | Refuted |
|---|---|---|---|---|---|---|---|
| 5800-7g-misc | 2 | 37 | 19 | 0 | 0 | 5 | 0 |
| dd137-misc | 1 | 16 | 12 | 0 | 0 | 0 | 0 |
| dodd-misc | 3 | 41 | 11 | 2 | 3 | 5 | 2 |
| dodfmr-vol-16-ch-1 | 11 | 87 | 40 | 2 | 15 | 4 | 0 |
| dodfmr-vol-9-ch-1 | 9 | 56 | 25 | 0 | 8 | 4 | 0 |
| dodi-5154-31-volume-1-vol1 | 20 | 159 | 56 | 0 | 17 | 13 | 2 |
| fpm-misc | 1 | 27 | 23 | 0 | 0 | 0 | 0 |
| m-1650-1 | 18 | 273 | 171 | 2 | 26 | 9 | 2 |
| m-5210-1-misc | 1 | 24 | 5 | 0 | 1 | 6 | 0 |
| manual-misc | 3 | 51 | 26 | 0 | 7 | 4 | 3 |
| maradmin-misc-1 | 30 | 219 | 138 | 4 | 10 | 12 | 1 |
| maradmin-misc-2 | 22 | 355 | 250 | 0 | 19 | 14 | 1 |
| marine-misc | 1 | 13 | 6 | 0 | 0 | 1 | 1 |
| mcbul-misc | 2 | 41 | 18 | 0 | 2 | 0 | 0 |
| mco-1040-31 | 12 | 156 | 84 | 5 | 18 | 12 | 1 |
| mco-1300-8-w-admin-ch-2 | 13 | 74 | 11 | 0 | 4 | 15 | 0 |
| mco-1320-11h-w-admin-ch-1 | 13 | 100 | 30 | 0 | 7 | 10 | 0 |
| mco-1500-60-a | 13 | 105 | 55 | 0 | 8 | 7 | 0 |
| mco-1500-61 | 14 | 61 | 26 | 0 | 1 | 3 | 1 |
| mco-1553-3-c | 14 | 104 | 42 | 0 | 10 | 4 | 0 |
| mco-1560-25 | 14 | 51 | 21 | 0 | 0 | 1 | 2 |
| mco-1610-7-b | 29 | 173 | 73 | 5 | 26 | 4 | 0 |
| mco-1620-3-a | 14 | 98 | 43 | 0 | 12 | 14 | 0 |
| mco-1650-19j-w-ch-1 | 14 | 98 | 39 | 1 | 8 | 1 | 0 |
| mco-3040-4 | 12 | 78 | 23 | 2 | 15 | 4 | 5 |
| mco-3504-2-a | 14 | 145 | 75 | 5 | 26 | 3 | 0 |
| mco-4600-40-c | 12 | 129 | 59 | 0 | 23 | 10 | 0 |
| mco-5000-14-d | 24 | 99 | 27 | 0 | 12 | 3 | 0 |
| mco-5040-6-k | 13 | 84 | 45 | 0 | 11 | 1 | 0 |
| mco-5110-4-b | 15 | 67 | 27 | 0 | 5 | 9 | 0 |
| mco-5214-2-g | 15 | 78 | 45 | 3 | 4 | 3 | 1 |
| mco-5215-1k-w-admin-ch-3 | 12 | 131 | 52 | 0 | 18 | 13 | 1 |
| mco-p1070-12k-w-ch-1 | 12 | 80 | 23 | 1 | 16 | 13 | 1 |
| mco-p3500-72a-w-admin-ch-1 | 11 | 124 | 60 | 1 | 2 | 10 | 1 |
| mctp-misc | 3 | 44 | 17 | 1 | 3 | 3 | 1 |
| navmc-misc | 4 | 54 | 20 | 0 | 4 | 0 | 0 |
| paa-misc | 1 | 42 | 18 | 0 | 1 | 0 | 0 |
| secnav-m-5210-2-misc | 1 | 33 | 11 | 0 | 7 | 2 | 0 |
| secnav-m-5216-5 | 8 | 51 | 20 | 0 | 2 | 11 | 0 |
| unsourced | 7 | 27 | 8 | 0 | 1 | 1 | 1 |
| Total | 438 | 3,685 | 1,754 | 34 | 352 | 234 | 27 |

Claim status across the wave: 1,754 ok, 821 contradicted, 569 unsupported, 128 outdated, 413 with no archive source. Blocker and major findings touch 194 pages.

## Verification quality

- Opus re-checked all 647 worker blockers and majors. 620 confirmed, 27 refuted. Of the confirmed, 234 dropped to minor.
- Refutations run highest in mco-3040-4 (5 of 26). FOIA and GTCC refutations were true facts in loose wording, downgraded to minor polish. Reasons per row sit in wave-2-refuted.md.
- Ok miss rate. Opus hand-checked 107 ok claims and found 1 wrong, under the 1 in 25 threshold. No cluster re-run. The miss: content/marines/remedial-selection.mdx line 29 extends automatic remedial promotion to PFC and LCpl. MARADMIN 559/23 para 3 ties it to JEPES cutoffs, which apply to Cpl and Sgt only. It is added to the fix list as a major.
- Every finding matched its verdict. No orphan verdicts.

## Top actions, ranked

1. Fix the SDAP tier pages and the disability severance formula. Both state the wrong dollar figure to the Marine and to the PAC.
2. Fix JEPES and FITREP coverage on the three performance evaluation pages and the PERB routing on two pages. Sergeants reading the JEPES page think a fitness report does not apply.
3. Fix the casualty reporting window on the two admin pages. An 8-hour standard misses the 30-minute voice report.
4. Fix the STAP page ECDP status and cutoff, and the LATMOV EOD bonus. Marines reading the STAP page skip a program open to them.
5. Fix awards and SkillBridge approval authorities.
6. Fix BAH-Diff definitions, the appellate leave trigger and pay election, the member-to-member audit page, the SAPR recipient list and the aviation pre-command course.
7. Work the 352 majors cluster by cluster, the same way wave 1 ran.

Full rows with source paragraph and fix text: wave-2-confirmed.md. Refuted findings: wave-2-refuted.md.

## Claims with no archive source

413 claims on 215 pages have no archive file behind them. Each needs a source you name or a rewrite to drop the claim. Listed by page in wave-2-no-archive-source.md.

## Not in this wave

- Wave 1 carryover. Five pay pages unaudited and ten partly audited in wave 1 are not in wave 2 clusters. They go to the wave 3 run.
- Held fixes. Five MPLP and convalescent leave findings still wait on PR 152.
- Citation bodies, card text in src/lib/*-categories.ts and video catalog summaries belong to wave 3 per the plan.

## What happens on your go

Task 6 runs again for wave 2. Fix workers apply every confirmed blocker, major and minor to the pages they own, carry shared facts to sibling pages, write grouped correction entries, and move lastVerified only on pages with every claim ok, fixed or refuted. A recheck pass follows, then content:sync, lint and build, one commit per cluster group, pushed to PR 153 or a new draft PR, your call.
