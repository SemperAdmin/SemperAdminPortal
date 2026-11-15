# Semper Admin Portal Claims Audit, Wave 3

## Header

- Audit date: 2026-11-15. Branch claude/claims-audit-2026-11-14-7695e5 at d122204, carrying every wave 1 and wave 2 fix (draft PR 153). PR 152 is open and not on this branch.
- Authority snapshot: text cache on D: (.superpowers/text-cache), built from E:\GunnyBot\Policies through MARADMIN 552/26. No agent touched E: in this wave.
- Method: plan docs/superpowers/plans/2026-11-14-claims-audit.md, Task 7. Nine Sonnet workers checked 63 clusters of reference surfaces. One Sonnet worker re-ran the 13 pages wave 1 left unfinished. One Sonnet worker checked category card text in src/lib and the video catalog summaries. Three Opus verifiers re-checked every blocker and major against the quoted paragraph and hand-checked up to 2 ok claims per cluster.
- Wave 3 adds three checks. Citation bodies must match their source's operative paragraphs and status line, and externalUrl must point at a canonical landing page. Card text in src/lib/*-categories.ts must match the page it describes. Video summaries must not state rules contradicting a wave 1 or 2 finding.
- Scope: 920 files, 4,339 claims. The files are 582 citation entries, 138 link entries, 65 report entries, 57 inspection checklists, 48 update entries, 14 tool and legal entries, the 13 carryover pages, 2 category files and the 605-entry video catalog.
- No content edited. No lastVerified moved. Findings sit in findings/wave-3/, Opus verdicts in verify/wave-3/.

## Posture summary

Wave 3 found 35 blockers on 11 files and 243 majors, all confirmed by Opus. 160 of the 278 blocker and major findings sit in the citations registry, the surface every Citation chip resolves through. Five patterns drive the blockers.

1. Our own wave 1 correction is incomplete. Wave 1 marked MARADMIN 380/26 cancelled by CANX-014/26 and told readers to wait for a replacement. MARADMIN 466/26, signed 1 October 2026, is the replacement. No page on the branch cites it. Six files carry the gap: content/admin/s1g1-legal-administration-administrative-investigations.mdx, content/commander/oversight-matrix-overview.mdx, content/commander/playbook-meo-complaint.mdx, content/marines/article-138-and-ig-complaints.mdx, content/marines/equal-opportunity-reporting.mdx and content/updates/meo-guidance-380-26-corrected.mdx. The citation entry for 380/26 and the update meo-reform-implementation still present 380/26 as live.
2. Citation status lines wrong. MARADMIN 074/21 reads active, cancelled by MARADMIN 077/25. MARADMIN 191/25 reads active, cancelled by 031/25. The MCO 1050.3J entry says MARADMIN 341/26 suspends SLA categories, and MARADMIN 545/26 rescinded the suspension. 26 citation findings concern status or cancellation.
3. The unit punishment book form map is wrong item by item. content/admin/s1g1-prepare-upb.mdx maps 11 block ranges to the wrong content against the REV 08-2023 NAVMC 10132. An admin clerk filling the form from this page puts every entry in the wrong item.
4. Category card text kept facts the pages dropped. Ten card lines in src/lib/marines-categories.ts and leader-categories.ts still teach JEPES for E-5, MEA and RAT for Marines, a 14-day TLE, flat-rate per diem, 150 percent FPG for BNA, a narrow FCP population, the 380/26 lanes and SULI as a live promotion path. The card is the first text a reader sees.
5. Thresholds wrong in citation summaries. The MCO 5300.17A entry sets the ASP referral and fit-for-duty trigger at 0.08 BAC. The order sets 0.04. The MCO 1752.5C entry lists chaplains and healthcare personnel as Restricted Report recipients.

The carryover pages added one more travel blocker. content/marines/tdy-transportation.mdx sets 350 miles per day for TDY POV travel in two places. The JTR allows one travel day per 400 official miles.

Video catalog. Three SULI video summaries describe SULI as a live program. MARADMIN 222/26 ends SULI on 1 October 2026. Per CLAUDE.md 4.7 the fix goes in data/videos-marinenet.json summaries, or the videos get retired in Vanguard.

URL shape. One externalUrl finding. The registry otherwise points at canonical landing pages.

## Severity table

Confirmed counts after Opus verification, grouped by surface.

| Surface | Blocker and major |
|---|---|
| content/citations | 160 |
| content/admin (carryover pages) | 37 |
| content/inspections | 31 |
| src/lib category cards | 29 |
| content/marines (carryover pages) | 9 |
| content/updates | 5 |
| data/videos-marinenet.json | 3 |
| content/legal | 2 |
| content/links | 2 |
| Total | 278 |

By severity: 35 blocker, 243 major, 117 minor after downgrade, 32 refuted. Claim status across the wave: 2,932 ok, 465 contradicted, 433 unsupported, 288 outdated, 221 with no archive source. Blocker and major findings touch 123 files. Per-cluster counts sit in wave-3-confirmed.md.

## Verification quality

- Opus re-checked all 427 worker blockers and majors. 395 confirmed, 32 refuted. Of the confirmed, 117 dropped to minor.
- Ok miss rate. Opus hand-checked 87 ok claims and found none wrong.
- Every finding matched its verdict.
- One worker reported eight of its nine cluster files were already on disk from an earlier attempt inside the same run. It confirmed each covers every page in its cluster with the required keys and audited only unsourced-12 fresh. Those eight clusters (mctfsprium-misc-1, mco-misc-1, maradmin-467-26, unsourced-6, dodi-misc-2, dd93-misc, mctp-misc, dd1797-misc) carry the same Opus verification as the rest.

## Top actions, ranked

1. Finish the 380/26 correction. Add a maradmin-466-26 citation entry, point the six files and the 380/26 citation at it, and mark the update meo-reform-implementation superseded by a new correction entry.
2. Rewrite the NAVMC 10132 block map on content/admin/s1g1-prepare-upb.mdx against the REV 08-2023 form.
3. Fix the ten blocker card lines in the category files so cards match the corrected pages.
4. Fix the citation status lines (074/21, 191/25, the 1050.3J SLA note) and the ASP and Restricted Report thresholds in their citation entries.
5. Fix the 350-mile TDY POV rule on tdy-transportation.
6. Update the three SULI video summaries in data/videos-marinenet.json.
7. Work the 243 majors, citations first.

Full rows with source paragraph and fix text: wave-3-confirmed.md. Refuted findings: wave-3-refuted.md.

## Claims with no archive source

221 claims on 149 files have no archive file behind them. Many sit in link and report entries, where the body describes an external system rather than a policy. Listed by file in wave-3-no-archive-source.md.

## Not fully audited

- Checklist DOCX tables for IGMC 1320, 5110.1, 5210 and 3710.7 are empty in the text cache. Claims about their contents rest on the portal JSON.
- The IGMC CoRE listing, E-ICAM quick start guide, GSA M&IE and DFAS BAS tables, FSAFEDS 2026 limits and the 2026 ALNAV texts are not in the archive.
- Partial checks only: citations mco-1020-34, mco-5530-14a, mco-5740-4b, mco-6260-3, mco-8023-3, mco-5354-1, maradmin-436-26, maradmin-472-26, maradmin-490-26 and maradmin-496-24. Inspection files 5800.16 legal administration, 5800.16 VWAP and 5512 identification cards were sampled.
- content/citations/dd-form-1299.mdx has no form text in the cache.
- 30 link entries in unsourced-6 hold an unreviewed import stub body. They carry no normative claim and a lastVerified date with no source check behind it.

## What happens on your go

Task 6 runs for wave 3. Fix workers apply every confirmed blocker, major and minor, add the 466/26 citation entry first, fix card text in src/lib and video summaries in data/videos-marinenet.json, write grouped correction entries, and move lastVerified only on files with every claim ok, fixed or refuted. Recheck, content:sync, lint and build follow, then commits pushed to PR 153.
