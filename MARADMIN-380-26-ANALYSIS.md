# MARADMIN 380/26 Applicability Analysis and Build Plan

Analyzed 2026-08-20. Subject: Implementation Guidance for Military Equal Opportunity Reform Initiatives. Signed 2026-08-20, DTG R 201140Z AUG 26, released by Lieutenant General William J. Bowers, DC M&RA, originated by HQMC MPE. Source text verified against marines.mil article 4578527 on 2026-08-20 and matches the pasted copy paragraph for paragraph. Status: analysis only, no build performed.

## Verdict

Applicable, and materially heavier than the two MEO messages before it. Confidence 0.95.

MARADMIN 349/26 and its reissue 357/26 were terminology. The portal absorbed both with two update entries and a rewritten citation status line. 380/26 changes program mechanics: a new confidential reporting lane, a commander dismissal authority with eight grounds, four hard clocks, an appeal path to a General Court-Martial Convening Authority, superseding definitions of harassment, bullying, and hazing, and a named terminal state in MCO 5354.1H.

Five commander pages, one admin page, and two citation records in the portal already carry MEO program obligations. Every one of them now describes an incomplete version of the program.

## The gap this exposes

Confidence 0.93.

Grep across `content/` for `11512`, `informal complaint`, and `formal complaint` returns nothing outside two policy-index JSON files under `content/inspections/_policy-indexes/`. The portal documents who the commander appoints, when the climate assessment runs, and where a Page 11 entry lands. It never documents how a Marine files an MEO complaint, how the complaint routes, or what the command owes back.

380/26 lands on empty ground rather than on existing prose.

Take the counter-argument first. Empty ground is a reason to hold, not a reason to build. The portal deliberately holds awareness depth on programs owned by other staff sections. SAPR is the precedent: one marines page, one admin OPREP-3 protocol page, no case management. MEO deserves the same restraint.

The counter to the counter, and the reason to build anyway: paragraphs 5, 6, and 7 are commander obligations with running clocks, not program-office procedure. The portal already runs a commander obligations surface (`src/lib/commander-obligations.ts`), an oversight matrix with an MEO row, and an incident playbook cluster. A commander reading the current oversight matrix row sees appointment and training percentage only. Nothing tells them a formal complaint sitting on the desk carries a 30-day dismissal decision and a 7-day written notice.

## What the message changes, mapped to portal surfaces

| Para | Change | Portal surface | Confidence |
|------|--------|----------------|------------|
| 2 | Confidential report option, EOAs designated as recipients, three disclosure exceptions | No surface exists | 0.95 |
| 3 | Anonymous allegations not processed as MEO complaints, commanders still act on the information, sexual harassment and hazing and bullying keep routing per ALNAV | No surface exists | 0.95 |
| 4 | ADR and conflict resolution offered on informal complaints, voluntary both parties | No surface exists | 0.95 |
| 5 | Eight dismissal grounds, EOA forwards in 5 days, commander decides in 30, written notice in 7, EOA and SJA consultation required | `commander/oversight-matrix-overview.mdx`, playbook cluster | 0.92 |
| 6 | Appeal to next higher commander with GCMCA within 5 days | `commander/discipline-convening-authority.mdx` | 0.85 |
| 7 | Delayed favorable personnel actions resumed within 7 days of dismissal or unsubstantiated finding | `marines/promotion-delays-and-revocations.mdx`, `marines/snco-selection-boards.mdx` | 0.80 |
| 8 | Article 107 exposure for knowingly false official statements | `commander/discipline-page-11-entries.mdx` | 0.65 |
| 9 | Harassment, bullying, and hazing definitions from reference A supersede conflicting language | Hazing pages, `s1g1-operations-event-incident-reporting` pages | 0.75 |
| 10 | MSC compliance reporting through the EOA to smb_mpe_eo@usmc.mil | Awareness line only | 0.60 |
| 11 | In effect until incorporated into MCO 5354.1H | `content/citations/mco-5354-1.mdx` | 0.97 |

## Existing pages requiring edits

Ordered by defect severity. Confidence in parentheses.

1. `content/citations/mco-5354-1.mdx` (0.97). The status section reads "until the next revision." The next revision now has a number, 5354.1H, and a second interim message stacked on top of 357/26. Rewrite the status narrative to carry both messages and the named terminal revision. Add 380/26 to the lower-policy list.

2. `content/admin/s1g1-legal-administration-administrative-investigations.mdx` line 68 (0.88). The trigger list names "Equal Opportunity, sexual assault, or sexual harassment allegation requiring administrative inquiry." Paragraph 2.c states a confidential report produces no command inquiry outside three exceptions, and paragraph 5.a lets a commander dismiss a formal complaint without investigation. The page now overstates the inquiry trigger. Add the carve-out.

3. `content/commander/oversight-matrix-overview.mdx` line 84 (0.90). The MEO row covers appointment and 85 percent MCTIMS training. Add the dismissal decision authority, the four clocks, and the mandatory EOA plus SJA consultation. This is the single highest-value edit for the commander role.

4. `content/marines/article-138-and-ig-complaints.mdx` (0.85). This is the portal's marine-facing complaint map. It presents two frameworks, Article 138 and the IG, and names sexual harassment under both. It has no MEO lane and no confidential option. A Marine reading it today gets an incomplete picture of where to take a discrimination allegation. Add the MEO lane and cross-link.

5. `content/marines/sexual-assault-reporting-svc.mdx` (0.80). Restricted and Unrestricted SAPR reporting sits here. Confidential MEO reporting is a third, distinct construct with different triggers and different recipients. Readers will conflate the three. Add one disambiguation block. Paragraph 3.c matters here: anonymous sexual harassment, hazing, and bullying complaints keep their existing routing under ALNAV 048/26.

6. `content/commander/discipline-convening-authority.mdx` (0.80). GCMCA appears in this page as a UCMJ referral authority. 380/26 hands the same officer a non-UCMJ appellate role on MEO dismissals with a 5-day window. Add the line.

7. `content/commander/playbook-overview.mdx` (0.78). The routing question tree decides where an incident goes first. A confidential MEO report is a new branch with a hard rule: no command notification, no inquiry, outside the three exceptions. A commander running the current tree on an EOA phone call gets the wrong answer.

8. `content/updates/` (0.95). New entry `meo-reform-implementation`. Kind `policy-change`, impact above `awareness` given the command action required. Citations `maradmin-380-26`, `mco-5354-1`, `alnav-048-26`. `affectedPages` mirrors the list above. Set `supersededBy: null` and leave 357/26 unsuperseded, since 380/26 adds to it rather than replacing it.

9. `content/commander/turnover-30-day-actions.mdx` and `turnover-90-120-and-recurring.mdx` (0.55). Policy statements, appointments, and the CCA window hold unchanged. The only candidate addition is an inbound-commander awareness line on pending MEO complaints and their clocks. Low priority.

10. `content/leader/discipline-pre-njp-counseling.mdx` line 52 (0.40). Reads "Sexual harassment per the active policy." Still accurate. Touch only if the leader page ships.

## Source record conflicts found

Confidence 0.90 in the existence of a conflict. Confidence 0.30 in any guess about which date is correct.

- `content/citations/dodi-1350-02.mdx` carries `effectiveDate: 2026-03-11`, authored from MARADMIN 357/26 reference C. MARADMIN 380/26 reference C dates the Department of War instruction on Military Equal Opportunity at 22 December 2022.
- `content/citations/dodi-1020-03.mdx` carries `effectiveDate: 2025-12-10`, same origin. MARADMIN 380/26 reference D dates the harassment prevention and response instruction at 17 January 2025.

Two messages from the same HQMC branch, two weeks apart, give four different dates for two documents. A benign explanation exists: one message cites a change or reissue date and the other cites the original signature date. Neither portal entry has been checked against the issuance itself. Both bodies admit as much and both carry `lastVerified: 2026-07-31`.

Resolve against esd.whs.mil before publishing any new page keyed to these dates. Do not silently overwrite the existing dates with the 380/26 values.

Second record issue: 380/26 names both documents Department of War Instructions, not DoD Instructions. The citation type enum in `src/lib/content/schemas.ts` carries `DODI` with no DoW equivalent. Renaming is a registry-wide decision affecting every DODI entry and every alias. Log it, do not act on it inside this build.

## Missing citation records

- `maradmin-380-26` (0.95 build). Standard MARADMIN entry. Aliases: 380/26, 380-26, "MEO Reform Implementation Guidance", "Confidential MEO Reporting". externalUrl is the marines.mil article verified above. Roles: all four.
- `alnav-048-26` (0.75 build, 0.99 on the finding). Reference F. The citations registry holds zero ALNAV entries today, despite `ALNAV` sitting in `CITATION_TYPES`. This would be the first. Paragraph 3.c makes it operative, not decorative, since anonymous sexual harassment and hazing complaint routing lives there. Source the text before authoring. Author it as gated with no URL rather than guessing one.
- `navmc-11512` (0.70). The form is the named instrument for informal and formal complaints in paragraphs 2.b and 3.a. It appears in `content/inspections/_policy-indexes/navmc_forms_index.json` and nowhere else. Any complaint-process page will cite it.

## Proposed new pages

1. Commander playbook, `content/commander/playbook-meo-complaint.mdx` (0.90). Highest confidence new build. Fits the existing playbook pattern exactly. Covers receipt, the EOA and SJA consultation gate, the eight dismissal grounds, the four clocks, the appeal route, and the favorable-action resumption. Register by hand in `src/lib/role-trees.ts` under the incident playbook branch, since the commander tree is hand-maintained.

2. Marines leaf, "Reporting Discrimination or Harassment" (0.85). Three lanes plainly separated: confidential, informal, formal. The 60-day filing window, 120 days for Reserve members. What a confidential report does not do. The right to convert at any time. Dismissal-ground detail stays out, it belongs to the commander lane. Register in `src/lib/marines-categories.ts`.

3. Admin procedural page, topic `legal-administration` (0.70). S-1 handling of the formal complaint packet, the 5-day EOA forwarding leg, the written notice product, and the file. Schema requires `unitType`, `topic`, `function`, `skillLevel`, and `mosPerforming`. Function reads GENA by pattern match with the neighboring legal administration pages. Leave `trEventCode` off. No NAVMC 3500.3E event for MEO complaint processing has been verified, and inventing one corrupts the T&R mapping.

4. Leader guide, "Handling an MEO Concern" (0.65). ADR and conflict resolution, voluntary participation by both parties, and the hard prohibition on running your own inquiry off a confidential report. Weakest case of the four. The leader role owns coaching, and most of this message is commander authority. Build last or skip.

## What does not belong

- Civilian EEO content. Reference B covers the joint MEO and EEO reform plan. Civilian equal employment opportunity is not S-1 military administration and has no role home in the four-role model. Out of scope.
- MEO investigation procedure. MARADMIN 357/26 states plainly the MEO program is non-investigative. Documenting an investigation workflow contradicts the governing message.
- Article 107 charging guidance. Paragraph 8 names the exposure. Naming the exposure is reference. Advising on when a false statement charge attaches is legal advice and belongs with the SJA.
- A compliance-reporting surface for paragraph 10. MSC gap reporting to an HQMC organizational mailbox is a staff action, not portal reference. One awareness line in the update entry covers it.
- A dedicated MEO topic tree. Three or four leaves spread across four roles is not a tree. Use the existing homes.

## Blind spots and defects in the message itself

Flag these in author notes. Do not resolve them in portal prose as if the message were clear.

1. The 30-day dismissal clock runs "of receipt" with no owner named. Paragraph 5.b puts a 5-day forwarding duty on the EOA, and 5.c gives the commander 30 days from receipt. Whether the 30 days starts at EOA receipt or commander receipt changes the outside window by five days. Confidence 0.85 the ambiguity is real. Publish both readings or publish the commander-receipt reading with the ambiguity stated.

2. The appeal window has an arithmetic problem. Paragraph 6.a gives the complainant 5 calendar days to appeal, measured from the written determination. Paragraph 5.d allows 7 calendar days to deliver the written notice. Notice delivered on day 7 arrives after a window measured from the determination date has closed. Confidence 0.70 the message is genuinely defective rather than implying receipt-based measurement. This is the most likely paragraph to get fixed in a follow-on message or in 5354.1H.

3. Confidential is not anonymous. The message defines both in adjacent paragraphs with opposite effects. Confidential preserves PII disclosure to authorized personnel and preserves conversion rights. Anonymous produces no MEO complaint at all. Readers will merge them. Any page covering one covers both.

4. The 60 and 120-day filing windows are dismissal grounds, not bars. Paragraph 5.a.1 makes untimeliness a ground for dismissal after EOA and SJA consultation, not an automatic rejection. Writing "you have 60 days to file" on a marines page overstates the rule.

5. Paragraph 2.e is explicitly interim. EOAs are the authorized recipients "until further guidance is published." Any page naming the EOA as the confidential-report recipient needs a visible verification date and an expectation of change.

6. MCO 5354.1H does not exist yet. Every page built from this message carries a known expiration. Set `lastVerified` honestly and expect a full re-verification sweep on the H revision.

## Verification for when built

- `npm run content:sync` clean, zod validation green on the new citations and leaves.
- Alias map resolves "380/26", "MARADMIN 380/26", and "MEO Reform Implementation Guidance" to the new citation, with no duplicate alias collision against 357/26 or `mco-5354-1`.
- The `mco-5354-1` entry names 357/26 and 380/26 with distinct effects and one coherent revision line.
- DODI date conflict resolved against the issuance source, or the portal dates left untouched with the conflict logged.
- Cross-role wiring runs through `CrossRoleStrip` and `relatedRoles` only. No inline cross-role links in prose.
- Commander tree entry added by hand in `role-trees.ts`. Marines leaf registered in `marines-categories.ts`. Admin nav regenerates from frontmatter.
- No banned words, no em-dashes, no semicolons, no asterisks in user-facing copy.
- Voice check by role. The dismissal grounds read as authority statements on the commander page and never appear as procedure on the marines page.
