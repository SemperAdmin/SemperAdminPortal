# TAN 03-26 Applicability Analysis and Build Plan

Analyzed 2026-10-20. Subject: Revocation of IMA IDT Lodging Reimbursements. Published 2026-08-14 by HQMC P&R (RFF), DTG 141700Z AUG 26, distribution "DoW COMMUNITY ONLY". Status: analysis only, build awaits owner decision.

## Verdict

Applicable, narrow. TAN 03-26 is a disbursing-community advisory, but it changes what an IMA detachment S-1 and the IMA Marine tell a traveler to expect. The portal has no TAN citation at all, and the one page that touches IMA IDT travel, `content/marines/idt-travel-reimbursement.mdx` (lastVerified 2026-05-04), predates the revocation by two months. Audit finding FP-05 stands. Two limits keep the build small. First, the TAN does not define the lodging program it revokes, because references D through G (the 2026 MRA memos) sit on RFF SharePoint and are not in hand. Second, the page's own eligibility section already says non-GO, non-RSLB IMA members are not eligible, so the revocation reaches only the narrow IMA population the page does name. Build a citation, one correction block on the existing page, and one /updates entry. Do not build a new page.

## What the advisory covers

- Para 1: informs the Disbursing community of a "significant change" in processing IMA IDT lodging payments.
- Para 2: "Effective 11 July 2026, the authorization to reimburse IMA IDT expenses is revoked." Lodging payments "may no longer be processed." DO/FOs return vouchers with a fixed comment: "IMA IDT lodging reimbursements are no longer authorized to be processed. Please contact your IMA Op Sponsor for additional details." Claims meeting para 3 are excepted.
- Para 3: vouchers for lodging that occurred before 11 July 2026 stay authorized and "must be processed in DTS." DTMS and IATS are not authorized.
- Para 3(a): travelers must include the General Officer endorsement and the authorization memorandums at references D through F. DO/FOs attach any missing memorandums.
- Para 4: timeliness waiver. Vouchers held 30 July to 14 August 2026 are exempt from normal timelines. All held vouchers must be processed by 29 Aug 2026.
- Para 5: post-payment audit. DO/FO Internal Controls annotate flagged records with "Voucher processed in accordance with TAN 03-26."
- Para 6: coordinated by HQMC-RFF and HQMC-M&RA.
- References: DoDFMR Vol 9, Disbursing-Financial Policy Manual Vol 2, JTR, DC memo 7200 MRA of 8 Jan 26, DC memo 1000 MRA of 2 Mar 26, DC memo 7200 MRA of 1 Jul 26, DC memo 1000 MRA of 28 Jul 26. No MARADMIN, MAP, or CAP is cited.

## Where it fits

Priority order. Confidence in parentheses.

| Step | Surface | Action | Confidence |
|------|---------|--------|------------|
| 1 | New `content/citations/tan-03-26.mdx` | New registry entry. No TAN entry exists. Type must be `OTHER` unless Step 5 adds a `TAN` value. Set `gatedSource: true`, no `externalUrl`, modeled on `paa-02-26.mdx` | 0.90 |
| 2 | `content/marines/idt-travel-reimbursement.mdx` | Add a Callout under "IMA Members NOT Eligible" and in the expense list. State that IMA IDT lodging reimbursement ended 11 July 2026 (TAN 03-26 para 2), lodging before that date still pays in DTS (para 3), and the IMA Op Sponsor is the contact. Add TAN 03-26 to `references`. Refresh `lastVerified` only after the source check | 0.90 |
| 3 | New `content/updates/ima-idt-lodging-revoked.mdx` | `policy-change`, `impact: action-required`, `date` 2026-10-20 or build date, `effectiveDate` 2026-07-11. The 90-day window from 2026-10-20 reaches back to 2026-07-22, so the portal date, not the effective date, drives rendering. Cite `tan-03-26`. Affected page `/marines/idt-travel-reimbursement` | 0.85 |
| 4 | `content/admin/iandi-reserve-travel-reimbursement.mdx` | Admin lane. The "Lodging Reimbursement" section (line 77) says "For members requiring lodging during drill weekend" with generic bullets. Add one sentence scoping the IMA exclusion and the pre-11 July DTS rule. Do not describe voucher return comments as a portal procedure | 0.70 |
| 5 | `src/lib/content/schemas.ts` `CITATION_TYPES` | Optional. Add `TAN`, matching the existing `PAA` and `PAAN` values. TAN 01-26 through 04-26 and the audit list all point at the same gap. Skip if the owner prefers `OTHER` | 0.60 |
| 6 | `src/lib/marines-categories.ts` line 1523 card | Optional. The `idt-travel-reimbursement` card description ends at "MARFORRES manages LOA via DTS." Append a short IMA lodging note only if the owner wants the revocation visible in Browse. Tie the edit to Step 2 | 0.50 |

## What does NOT belong

- DO/FO voucher-return procedure, DTS processing rules, and the audit comment (paras 2, 3, 5). These are disbursing office procedure under DoDFMR Vol 9 and the Disbursing-Financial Policy Manual Vol 2. Distribution is the Disbursing community. The portal's admin lane is the S-1 and reserve admin specialist, not the finance office. Name the outcome for the traveler, not the DO/FO steps.
- The timeliness waiver (para 4). The 29 Aug 2026 deadline has passed. It is a finance-office clock with no reader action left.
- A new page. The advisory is one revocation plus a transition rule. A callout on the existing IDT page and an /updates entry cover it. A standalone page would invent scope the TAN does not give.
- Commander and leader callouts. Neither role signs, endorses, or processes these claims. The General Officer endorsement in para 3(a) is a traveler document, not a unit commander action. Add `leader` and `commander` only through the existing page's `roles` array, which already carries all four.
- Any restatement of the memoranda (references D through G). Their text is not in hand.

## Blind spots

- The revoked program is undefined. Para 2 says "IMA IDT expenses" in one sentence and "IMA IDT lodging" in the next. The TAN gives no rate, cap, or population. The 2026 MRA memos (refs D to G) would define it. They sit on RFF SharePoint under Field Office, Field Documents, Advisory Notification KSDs, TAN 03-26, and are not in `E:\GunnyBot\Policies`. A search of the local index JSON files (MARADMIN, DTMO, others) finds no matching item. Write the callout at the level of the TAN text and say the memos are unread.
- MARADMIN 157/25 relationship. The portal page states IMA RSLB and General Officer billets are eligible for IDT travel reimbursement, with no lodging line among eligible expenses. The TAN cites no MARADMIN. Whether 157/25 commute reimbursement for these IMA billets continues is unstated. Do not write that it ends. Write only that lodging reimbursement ended 11 July 2026.
- Contact path. The TAN names "your IMA Op Sponsor." The portal has no page defining that role. Name it as written and do not add a role description.
- Distribution restriction. "DoW COMMUNITY ONLY" and an RFF SharePoint source mean no public URL. The citation takes `gatedSource: true` with no `externalUrl`, which the no-URL posture in CLAUDE.md 4.5 covers.
- The 11 July effective date precedes publication by 34 days and the 30 July hold. A reader who traveled between 11 July and 14 August under the old rule has a live exposure. The TAN gives the pre-11 July rule only. Dates between are the traveler's case for the IMA Op Sponsor.
- The `iandi-reserve-travel-reimbursement.mdx` page already says "Programs vary annually. Always reference current MARADMIN." That wording leaves the revocation uncovered, since the source here is a TAN.
- The `references` array in the IDT page lists MARADMIN 157/25 as the sole source and `source.url` points at the marines.mil message index. TAN 03-26 is a second authority, so the page needs a second source line, not a replacement.

## Build plan

Each step ships independently. Stop after any step and the portal stays green. Roles: `marine` and `admin` carry the content (the IMA traveler and the IMA detachment or I&I S-1). The citation and update entry carry `["marine", "leader", "commander", "admin"]` to match the IDT page. Narrow to `["marine", "admin"]` if the owner prefers.

### Step 1. Citation entry

- Create `content/citations/tan-03-26.mdx`.
- Fields: id `tan-03-26`, aliases `TAN 03-26`, `TAN 3-26`, `TAN 03/26`, `TAN 3/26`, `Travel Advisory Notice 03-26`, `Revocation of IMA IDT Lodging Reimbursements`. Title "TAN 03-26 - Revocation of IMA IDT Lodging Reimbursements". Type `OTHER` (or `TAN` after Step 5). Number `03-26`. Publisher "Headquarters Marine Corps Manpower and Reserve Affairs, Reserve Financial Management (RFF)". effectiveDate `2026-07-11`. lastVerified `2026-10-20` after the source check against the PDF. gatedSource `true`. Roles as above.
- Body: scope in three sentences. Cover paras 2 and 3 only.
- Run `npm run content:sync`. Alias uniqueness check must pass.

### Step 2. Correct the IDT page

- In `content/marines/idt-travel-reimbursement.mdx`, add a Callout after "IMA Members NOT Eligible": IMA IDT lodging reimbursement ended 11 July 2026 per TAN 03-26 para 2. Lodging that occurred before 11 July 2026 still pays through DTS per para 3. Contact your IMA Op Sponsor.
- Add the TAN 03-26 line to `references`. Use `<Citation source="TAN 03-26" />` inline on the claim.
- Marine voice: short imperative steps, spell out IMA and IDT on first use.
- Update `lastVerified` only after rereading the PDF.

### Step 3. Updates entry

- Create `content/updates/ima-idt-lodging-revoked.mdx`.
- Frontmatter: slug matching filename, `date` the build date, `kind: "policy-change"`, `impact: "action-required"`, `effectiveDate: "2026-07-11"`, `citations: ["tan-03-26"]`, `affectedPages: ["/marines/idt-travel-reimbursement", "/admin/iandi-reserve-travel-reimbursement"]`, `supersededBy: null`.
- The entry belongs under rule 1 of CLAUDE.md 4.6 (every policy-change gets an entry). Author Step 1 first, since sync fails on an unknown citation id.
- Body: two short paragraphs. What ended, what still pays, who to call. No voucher-return detail.

### Step 4. Admin page scoping

- In `content/admin/iandi-reserve-travel-reimbursement.mdx`, add one sentence to "Lodging Reimbursement" naming the IMA exclusion, the 11 July 2026 date, the pre-11 July DTS rule, and the TAN citation. Admin voice, function-coded where a code applies. None applies here.
- Add the source to that page's `references`.

### Step 5. Optional schema value

- Add `TAN` to `CITATION_TYPES` in `src/lib/content/schemas.ts` and switch the Step 1 type. Run `npm run lint` and `npm run build`. Skip if the owner wants no schema edit. Existing 0 TAN entries means no migration.

### Step 6. Optional category card

- Append an IMA lodging note to the `idt-travel-reimbursement` description in `src/lib/marines-categories.ts`. Run `npm run content:sync` for role-nav.

## Verification for when built

- `npm run content:sync` clean. Zod validation green on the citation and update entry. Sync names the new update as in-window.
- Alias map resolves "TAN 03-26", "TAN 3-26", and "TAN 03/26" to `tan-03-26`.
- The Callout cites paras 2 and 3 and states the 11 July 2026 date. No claim that MARADMIN 157/25 commute reimbursement ended.
- The memoranda (refs D to G) are not paraphrased.
- Grep "IMA IDT lodging" now returns hits in the IDT page, the update entry, and the citation. FP-05 closes.
- `lastVerified` reflects a real read of `TAN 03-26.pdf`.
- No banned words, no em-dashes, no semicolons, no asterisks in user-facing copy.
- `npm run lint` and `npm run build` clean before any push.
