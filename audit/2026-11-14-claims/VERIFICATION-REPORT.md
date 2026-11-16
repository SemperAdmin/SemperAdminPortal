# Claims Audit Verification, Waves 1 to 3

## Header

- Run date: 2026-11-15. Branch claude/claims-audit-2026-11-14-7695e5 at 268a3c6 (draft PR 156). Workflow wf_ae23710e-678.
- Sample: 111 pages. All 79 pages carrying a confirmed blocker in waves 1 to 3, plus 32 hashed pages carrying majors.
- Method: 8 Sonnet re-auditors, 14 pages each. Each confirmed every prior finding fixed, then audited every claim on the page fresh against the text cache. 2 Opus verifiers re-checked every new blocker and major and hand-checked 12 ok claims each. 1 Opus reviewer read the PR 156 diff and the audit:impact guard.
- Raw output: reaudit/bin-1.json to bin-8.json, reaudit/verify-1.json and verify-5.json.
- No content edited by this run.

## Bottom line

The fixes held. 385 of 391 prior findings on the sample read fixed, 98.5 percent. The fresh pass still found 6 blockers and 97 majors on 48 files, all confirmed by Opus. The wave 1 pass under-audited BAH. All 6 blockers sit on BAH pages and teach the wrong rate. PR 156 is not ready to merge. The audit:impact guard misses DoDI changes it claims to cover and --record buries unresolved messages.

## Prior findings not fixed

Six findings were edited on one line and left standing on a sibling line of the same page.

| Page | Line | Residual |
|---|---|---|
| content/admin/s1g1-legal-administration-administrative-investigations.mdx | 81 | Step 10 still offers a Litigation-Report Investigation as close-out for a death preliminary inquiry |
| same | 38, 98, 107 | Extension requests still cite section 0225e |
| same | 41, 55, 57, 100, 111 | Commander endorsement still stated for every Command Investigation, unit-closed cases included |
| content/admin/s1g1-legal-administration-pretrial-confinement-and-restriction.mdx | 95 | Pitfall lists three findings. Lines 47 and 63 list four |
| content/marines/retirement-types-and-eligibility.mdx | 369 | Closing summary keeps the 6 to 18 month submission window |
| content/marines/tdy-transportation.mdx | 209, 230 | POV authorization still framed as an AO cost-comparison call |

## New findings, confirmed by Opus

133 blocker and major findings reached Opus. All 133 confirmed. Opus dropped 30 to minor. Final count: 6 blocker, 97 major, 30 minor.

Blockers.

| Page | Line | Wrong | Right |
|---|---|---|---|
| content/marines/birth-and-adoption.mdx | 114 | Unmarried Marine paying support off base draws BAH-Diff | Off base, support at or above the BAH-Diff rate earns the with-dependent rate. BAH-Diff applies only in single-type Government quarters. DoDFMR Vol 7A Ch 26 4.3.2, 5.6.1 |
| content/marines/child-custody-changes.mdx | 28 | Same BAH-Diff error | Same fix |
| content/marines/child-custody-changes.mdx | 114 | BAH-Diff applies to any member without dependents paying support | Same fix |
| content/admin/pac-bah-overview.mdx | 69 | Without-dependents rate covers a member whose dependents live elsewhere | Dependents elsewhere still draw the with-dependent rate, normally at the PDS rate |
| content/admin/pac-bah-overview.mdx | 209 | Old PDS BAH stops at PCS departure | Old PDS BAH runs through travel, leave and TDY en route. New PDS BAH starts on the reporting day |
| content/admin/pac-bah-without-dependents.mdx | 38 | Separated Marine whose dependent lives apart draws the without-dependents rate | A legally separated spouse stays a dependent until the final decree, with proof of support |

Files with the most blocker and major findings: child-custody-changes 9, convalescent-leave 6, citations/maradmin-527-25 5, s1g1-special-hazardous-duty-pay-sdap-and-assignment-incentive-pay 5, marriage-and-spouse-add 4, fitrep-appeals-perb 4, pac-special-duty-assignment-pay 4. Full rows with quote, paragraph and fix text sit in reaudit/verify-1.json and verify-5.json.

Two convalescent-leave majors (lines 65 and 302) repeat the routing error the PR 152 held fix corrected elsewhere on the page. The provider recommends, the unit commander or MMTF director grants.

## Claim status across the sample

1,470 claims. 955 ok, 198 contradicted, 141 unsupported, 64 outdated, 112 with no archive source. Unsupported and contradicted counts include the minor wording findings.

## Verification quality

- Opus confirmed 133 of 133 worker blockers and majors. Zero refuted.
- Ok miss rate. Opus hand-checked 24 ok claims and found 1 wrong, about 4 percent. content/citations/mco-3000-13b.mdx line 18 credits MARADMIN 518/21 with directing the DRRS-MC consolidation. FY2019 NDAA section 358 directed it. 518/21 announced the cutover.

## PR 156 code review

Opus verdict. Not ready to merge. Tests pass (49), the video removal and citation edits read clean.

Important.

1. scripts/audit/amendments.py line 148. scan_message discards the message's own key. For a DoDI change the own key folds to the base instruction, so DoDI 1327.06 CH 2 never flags pages citing DoDI 1327.06. 0 of 260 DoDI CH entries in the cached index map to their base.
2. scripts/audit/new_message_impact.py line 140. --record writes today's date even when the run exits 1, and even when the newest indexed message is older. Stale hits and late-archived messages fall below the window and never surface again.
3. new_message_impact.py line 19. The page universe is the frozen 2026-11-14 source map. Pages added after it stay invisible. The new mco-1754-4c citation is already missing.
4. content/citations/mco-1754-4c.mdx line 43. Status reads Active with no mention of MARADMIN 459/26, which removes the EFMP OCONUS and remote CONUS assignment review.

Minor. NAVMC revision letters do not collapse into one family. match_key keeps only the first document in a multi-document ref, and PAA serials are not zero-padded. Undated index entries drop with no report. A missing lastVerified counts as stale without documentation. The docstring overstates the no-write posture. The MCO 1754.4B alias quietly repoints citations of the cancelled order.

## Recommended actions, ranked

1. Fix the 6 BAH blockers and run a focused BAH-family pass on every page citing DoDFMR Vol 7A Ch 26.
2. Close the 6 sibling-line residuals.
3. Fix the 4 important guard and citation findings before PR 156 merges. The weekly scheduled run depends on a guard that reports honestly.
4. Work the 97 majors and the mco-3000-13b ok miss.
5. Apply the minor review findings to the guard.
