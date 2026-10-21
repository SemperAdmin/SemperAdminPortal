# IGMC 5800.16 Legal Administration Checklist Revision Analysis

Analyzed 2026-10-20 against branch claude/batch-3-reports (main at 48d051a). Source: FA_Checklists/5800.16_Legal_Administration.docx, "Revised: 21 September 2026", index date 2026-09-26. Status: analysis only, build awaits owner decision.

## Verdict

IN-01 holds in full. The revised DOCX carries 47 items against 45 on the portal. Two items are new (a page 11 counseling item and a domestic violence weapons item). Three victim-notification items (0115 to 0117) gained a "functional area manager explain" lead-in. MCBul 5810 is gone from the checklist and MCO 5810.8 (10 Aug 2026) replaces it in all six CJI items. The MCO text confirms the cancellation of MCBul 5810.

Four findings go beyond IN-01 and change the build plan.

1. Code renumbering. The two inserted items push eight existing items to new codes (old 0502 to 0506 become 0503 to 0507, old 0603 to 0605 become 0604 to 0606). A code-keyed diff reads 0502 to 0506 and 0603 to 0605 as rewritten when the questions only moved.
2. MCO 1900.16 moved from "w/CH 2" to "w/CH 3" on every administrative separation item.
3. The parser drops every reference on this DOCX (0 of 47 items carry references in the scratch run). Regenerating with the parser as it stands wipes the reference lists. Fix the parser or merge references before any write.
4. The 5800.16 Legal Administration inspector guide is already misaligned with the portal checklist and will misalign further. The release gate applies and blocks the guide, not the checklist.

Counts, by meaning: 2 added, 0 removed, 3 reworded for content (0115 to 0117), 1 reworded for layout only (0203), 8 renumbered with text unchanged, 2 reference-changed with text unchanged (0601, 0602), 3 renumbered and reference-changed (old 0603 to 0605), 4 renumbered and reference-changed to CH 3 (old 0503 to 0506 as new 0504 to 0507). Two non-item changes: the FILES subsection header and the applicability paragraph.

## What changed

Method. I ran scripts/parse-igmc.py with PYTHONUTF8=1 on a copy of the DOCX, output only to C:\Users\barbc\AppData\Local\Temp\claude\audit-scratch\b3\out\. I then read the DOCX XML directly for References lines, because the parser returned none. I read MCO_5810.8.pdf (24 pages) for the cancellation and enclosure 2 paragraphs. Old text is the portal JSON. Text is trimmed.

Codes below are the NEW checklist codes. Old code is shown where it moved.

| Code | Change type | Old text | New text |
| --- | --- | --- | --- |
| 0115 | reworded | Are processes in place to ensure that victims are notified of any decision to dispose of an alleged offense at non-judicial punishment? | Lead-in added: "... the functional area manager explain the processes in place to ensure that victims are notified of any decision to dispose ..." Reference unchanged (MCO 5800.16-V16, para. 040401.Y). |
| 0116 | reworded | Are processes in place to ensure that victims are notified of the time and location of any NJP? | Same lead-in added. Reference unchanged. |
| 0117 | reworded | Are processes in place to ensure that victims are notified of the findings and sentence imposed at NJP? | Same lead-in added. Reference unchanged. |
| 0203 | reworded (layout) | Parenthetical about another Service's legal services inside the question | Parenthetical becomes a separate "Note:" sentence. Meaning and reference unchanged. |
| 0502 | added | none (old 0502 moved to 0503) | In cases that require a period of rehabilitation to overcome deficiencies, does the page 11 counseling contain the necessary language concerning deficiencies, recommending corrective action, the consequences of failing to take corrective actions, and being given a reasonable opportunity to undertake corrective actions? Reference: MCO 1900.16 w/CH 3, Chap 6, par 6105. The DOCX omits the "Reference:" label on this item. |
| 0503 | renumbered (was 0502) | Are activity copies of Administrative Discharge Records destroyed when 3 years old? | Text unchanged. Reference unchanged (SECNAV M 5210.1). |
| 0504 | renumbered, reference-changed (was 0503) | Notification letters signed personally by the CO or "Acting" | Text unchanged. MCO 1900.16 w/CH 2 changes to w/CH 3, Chap 6, par 6302.3. |
| 0505 | renumbered, reference-changed (was 0504) | SACC screening for alcohol or drug abuse | Text unchanged. CH 2 to CH 3, par 6303.3. |
| 0506 | renumbered, reference-changed (was 0505) | Personality Disorder separations compliance | Text unchanged. CH 2 to CH 3, 6203.2. |
| 0507 | renumbered, reference-changed (was 0506) | Sexual Misconduct separations compliance | Text unchanged. CH 2 to CH 3, sect 6210.4. |
| 0601 | reference-changed | MCBUL 5810 of 22 May 2024, encl (2) | MCO 5810.8 dtd 10 Aug 26, Encl (2) para 2(a) and 3(a). Text unchanged. |
| 0602 | reference-changed | MCBUL 5810 of 22 May 2024, encl (2) | MCO 5810.8 dtd 10 Aug 26, Encl (2) para 2(b) and 3(a). Text unchanged. |
| 0603 | added | none | For any member convicted of a domestic violence offense, did the command ensure that the member was de-issued and restricted from use of government weapons and ammunition any reason? Reference: MCO 5810.8, Encl (2), para 5(b). The source sentence ends "any reason" with no "for", a source typo. |
| 0604 | renumbered, reference-changed (was 0603) | GCM referral and related dispositions, report to LEA within five working days | Text unchanged. MCO 5810.8 Encl (2) para 1(b), 2(c), and 3(a). |
| 0605 | renumbered, reference-changed (was 0604) | Did the CO counsel in writing a prohibited person ... | Text unchanged. MCO 5810.8 Encl (2) para 6(a). |
| 0606 | renumbered, reference-changed (was 0605) | Procedure to keep a prohibited person out of privately owned firearms in unit armories | Text unchanged. MCO 5810.8 Encl (2) para 5(a). |

All other items (0101 to 0114, 0201, 0202, 0301, 0401 to 0411, 0501, 0701, 0702) match the portal in code, question text, and reference.

Non-item changes.

- Subsection 3 header, old: "Question applies to all legal files accumulated by the command regarding all legal matters, to include but not limited to, Investigations, Administrative Separations, and Courts-Martial". New: "Question applies to all legal files accumulated by the command regarding all subsections of this functional area checklist."
- Applicability paragraph. Old portal value: the "is not intended to inspect legal support functions within the OSJA" wording. New: OSJA legal support functions are not inspectable, but any OSJA executing the duties of the Legal Administration Functional Area Manager for its GCMCA is inspected on the administrative items. Check the current portal wording against the DOCX paragraph at build time. The 2026-09-23 correction entry already touched scope on this page.
- Question count line: "Number of Questions: 47". Portal summary says 45.

Reference changes in total.

| Reference | Old | New | Items |
| --- | --- | --- | --- |
| CJI reporting authority | MCBUL 5810 of 22 May 2024, encl (2) | MCO 5810.8 dtd 10 Aug 26, Encl (2) with paragraph pinpoints | 0601, 0602, 0603 (new), 0604, 0605, 0606 |
| Separations manual | MCO 1900.16 w/CH 2 | MCO 1900.16 w/CH 3 | 0504 to 0507, plus new 0502 |

MCO 5810.8 check, from the PDF. Subject: Criminal Justice Information (CJI) Reporting Requirements and Guidance. Dated 10 Aug 2026. Effective the date signed. Paragraph 2 reads "Cancellation. MCBul 5810 dtd May 2025, MARADMIN 209/04, and MARADMIN 186/03." Enclosure 2 paragraphs match the checklist pinpoints: 2(a) domestic violence, 2(b) wrongful drug use, 2(c) court-martial triggers, 3(a) five working days in writing, 5(a) privately owned firearms in armories, 5(b) government use exception that excludes domestic violence convictions, 6(a) written counseling.

Discrepancy to resolve. The MCO names "MCBul 5810 dtd May 2025". The portal and the checklist both used "22 May 2024", and the archive holds only MCBul_5810_DTD_22_MAY_2024.pdf. Either a May 2025 extension or reissue exists, or the MCO misdates it. Treat the 2024 bulletin as cancelled either way, and flag the date gap to the owner. Do not write "22 May 2024" into the new citation as the cancelled document's date without a check.

MCO 5810.8 content deltas worth routing to the admin pages (from enclosure 2): units not aboard an installation with a servicing LEA notify Marine Corps CID by email at usmccid@ncis.navy.mil with the subject "REQUEST FOR NICS ENTRY" (para 3.b). Deployed conduct routes the member to the LEA after redeployment (para 4). Return from deserter status is a reporting trigger (para 2.d). Government weapons exception excludes domestic violence convictions (para 5.b). Enclosure 5 adds duties for individual Marines. Read the rest of the order before rewriting body copy.

## Where it fits

| Step | Surface | Action | Confidence |
| --- | --- | --- | --- |
| 1 | Parser (scripts/parse-igmc.py) | Fix reference capture for this DOCX layout before any regeneration. In the scratch run all 47 items returned empty references. The 0502 item also lacks the "Reference:" label. Cause is unconfirmed. Also fix the registry match, which failed in the scratch run (programNumber derived as 5800, so the Legal Administration entry never matched). | High on the symptom, low on the cause |
| 2 | content/inspections/_fa-registry.json | Bump Legal Administration effectiveDate from 2025-09-23 to 2026-09-21, the DOCX Revised line. The index shows 9/26/2026, which is the scrape or publish date. Owner picks. Precedent is the revision line. Keep one entry per line. | Medium |
| 3 | content/inspections/igmc/5800.16-legal-administration.json | Regenerate. Expect 47 items, 7 subsections. Set lastVerified 2026-10-20 (portal check date, per the 2026-09-11 decision). Summary count word becomes 47. Diff against this report before commit. | High |
| 4 | content/citations/mco-5810-8.mdx (new) | Author with id mco-5810-8, aliases "MCO 5810.8", "MCO 5810.8 dtd 10 Aug 26", type MCO, number 5810.8, publisher Headquarters Marine Corps, effectiveDate 2026-08-10, supersedes ["mcbul-5810"]. No externalUrl until a canonical marines.mil landing page is verified. Roles leader, commander, admin. | High |
| 5 | content/citations/mcbul-5810.mdx | Keep the file. Change the Status section from Active to cancelled by MCO 5810.8. Keep its aliases so older pages still resolve. Do not delete. | High |
| 6 | content/admin/s1g1-legal-administration-criminal-justice-information-reporting.mdx | Re-source from MCBUL 5810 to MCO 5810.8 (about 20 inline mentions, plus sourcePolicy and frontmatter references). Rewrite body for the enclosure 2 deltas listed above. Needs SME review. | Medium |
| 7 | content/admin/s1g1-legal-administration-overview.mdx | Replace 7 MCBUL 5810 mentions (lines 31, 49, 71, 85, 100, 121, 131, 152 region). Same MCO source. | High |
| 8 | content/inspections/_reference-links.json | Add MCO 5810.8 keys once a URL is verified. Leave the MCBUL 5810 keys. They are the only inspection-side hits and remain valid history. | Medium |
| 9 | content/updates/ (new entry) | One policy-change entry. See Build plan. | High |
| 10 | content/inspections/igmc-core-taxonomy.json, igmc-news.json | Update the item count word for 5800.16 Legal Administration and bump igmc-news lastUpdated (currently 2026-09-11). | Medium |
| 11 | content/inspections/igmc-guides/5800.16-legal-administration.json | Do not touch. Route to the SME rebuild. See release gate below. | High |

## What does NOT belong

- Hand edits to the inspector guide JSON. Guides come from the SME rebuilt DOCX and are never hand-edited.
- Hand edits to the checklist JSON. Regenerate from the DOCX through the parser.
- A separate /updates entry for the 0115 to 0117 rewording, the 0203 layout change, or the subsection header. Those are copy edits. CLAUDE.md 4.6 rule 5 sends them to git.
- Editing content/citations/_stubs/ or the 68k alias manifest by hand.
- Authoring into policies/, situations/, snippets/, or references/. Those collections have no routes.
- Deleting mcbul-5810.mdx. An updates entry and old links still reference it. Mark it cancelled.
- Refreshing lastVerified on the two admin pages from this report alone. Do that only after the owner confirms the source check of MCO 5810.8 covers every claim on those pages.
- Marine or leader role copy. This change lives under admin and commander, and the CJI sub-page already carries those tags.

## Blind spots

1. Parser reference loss. The scratch parse returned zero references on all 47 items. The old portal JSON has them. A regeneration without a fix deletes about 45 reference lists. Compare reference counts before and after.
2. Registry match failure. The parser logged "No registry match" and derived programNumber 5800, slug 16-legal-administration. The portal record uses 5800.16 and legal-administration. Run it the way the 2026-09-23 pass did, or patch the match.
3. Inspector guide misalignment predates this revision. The guide has 45 items keyed by code with SME titles. From 0115 on, its titles do not match the portal questions: guide 0301 is "UPB maintenance" while the checklist 0301 asks about file labels, guide 0401 is "Preliminary inquiry completion timeline" while the checklist 0401 asks about file copies of investigations, guide 0502 to 0506 describe notification-of-rights topics, and guide 0601 to 0605 describe three-business-day, STR, entry of judgment, record of trial, and DD Form 2791 topics. None match the portal CJI items. The guide was rebuilt against some other version of this checklist. The guide page renders guide?.items?.[item.code], so after regeneration the new 0502 and 0603 items and every shifted code pick up the wrong guide body, or none for 0606 and 0507. Today the pairing is already wrong for much of the form, so treat this as an existing defect that the revision makes worse.
4. Guide lastVerified is 2026-05-20, older than the 2026-09-23 checklist pass.
5. I did not load the anthropic-skills igmc-guide-release-gate skill text. I know it only from its listed description (alignment gate and release controls) and from the refresh memory (SME rebuilt DOCX, never hand-edited). Read the skill before the guide step.
6. MCBul 5810 date: the MCO says May 2025, the portal says 22 May 2024. See above.
7. MARADMIN 209/04 and 186/03 are cancelled by the same order. Neither has a registry entry. content/citations has maradmin-209-26, a different message. Do not alias it.
8. The 2026-09-23 update entry (igmc-checklist-references-and-scope-corrected) lists /inspections/igmc/5800.16/legal-administration in affectedPages. The new entry must not claim to supersede it. They cover different changes.
9. Applicability wording and the "OSJA executing FAM duties" clause need a read against the live portal page, since the 2026-09-23 pass changed the scope text.
10. The index date (2026-09-26) is two weeks inside the 6-month aging window and has no effect on status. Neither choice of effectiveDate changes aging or stale flags (inspections age at 6 and 12 months past lastVerified).
11. Dated MCO 5810.8 language says "Department of War". Quote sources as written in citations, and do not normalize.
12. The MCO order text in this file is machine-extracted. The enclosure 2 paragraph numbers match the checklist pinpoints, but verify page 2-4 onward (enclosure 2 paragraphs 6.b through 7) and enclosures 3 to 5 by eye before rewriting body copy.

## Build plan

1. Owner decisions first. Confirm effectiveDate (2026-09-21 or 2026-09-26). Confirm the MCBul 5810 date question. Confirm the guide goes to the SME rebuild queue and does not block the checklist page.
2. Fix the parser. Capture references from this DOCX layout, including the unlabeled 0502 reference, and fix the registry match. Run on a scratch copy and require 47 items with references on every item that has one in the DOCX (the XML shows a Reference line on all 47).
3. Regenerate the JSON. Run `PYTHONUTF8=1 python scripts/parse-igmc.py --registry content/inspections/_fa-registry.json <in> <out>` with the DOCX in the folder layout the parser expects. Copy the one output over content/inspections/igmc/5800.16-legal-administration.json after a diff against this report. Update the registry effectiveDate first so the parser reads it.
4. Citation. Author content/citations/mco-5810-8.mdx. Mark mcbul-5810 cancelled. Run `npm run citations:audit` and `npm run content:sync`. Alias uniqueness is enforced at sync. "MCBUL 5810" stays on the old record only.
5. Update other MCBul 5810 references. Edit the overview and CJI sub-page under content/admin (about 28 mentions). Add MCO 5810.8 to _reference-links.json once a landing URL is verified. Leave the MCBUL 5810 keys in place.
6. /updates entry per CLAUDE.md 4.6. One entry, kind policy-change, impact action-required. date is the day the portal reflects it, effectiveDate 2026-08-10. citations ["mco-5810-8", "mcbul-5810"]. affectedPages: the CJI sub-page first, then the overview, then /inspections/igmc/5800.16/legal-administration. Summary under 160 characters and written to the commander and admin reader: the order replaces the bulletin, and the checklist adds a domestic violence weapons item and a page 11 counseling item. Do not create separate entries for the rewording. Check the entry stays inside the 90-day window in sync output.
7. Taxonomy and news. Update igmc-core-taxonomy.json count word and bump igmc-news.json lastUpdated.
8. Guide. Do not edit. File the misalignment with the SME for a rebuilt DOCX and run the release gate on that rebuild.
9. Writing check on every new string: no em-dashes, semicolons, or asterisks, and none of the CLAUDE.md 6.2 banned words.

## Verification for when built

1. Parse a clean copy: 47 items, 7 subsections, references on all items that carry one in the DOCX, programNumber 5800.16, slug legal-administration.
2. Item diff against this table: exactly two added codes (0502, 0603), eight codes shifted with unchanged text, zero removed.
3. grep content and src (excluding generated) for "MCBUL 5810": remaining hits are only the cancelled citation record, history in content/updates, and the old _reference-links keys.
4. `npm run citations:audit`: MCO 5810.8 resolves, the 5800.16 Legal Administration checklist shows no new unresolved references. `npm run content:sync` reports no alias collision and a coverage line.
5. `npm run lint` and `npm run build` pass. Open /inspections/igmc/5800.16/legal-administration and check 47 items, MCO 5810.8 chips resolve to /citations/mco-5810-8, and the cancelled bulletin chip routes to /citations/mcbul-5810.
6. Open /admin pages for CJI reporting. No page cites MCBUL 5810 as current.
7. Check /updates renders the new entry in the 90-day window with both citations.
8. Confirm the guide step: the checklist page does not display a mismatched guide body on new 0502, 0603, or shifted codes. Until the SME rebuild lands, decide whether to suppress guide display for 5800.16 Legal Administration. That is an owner call.
9. lastVerified on the checklist is 2026-10-20 and effectiveDate matches the owner decision. Status pill reads fresh.
