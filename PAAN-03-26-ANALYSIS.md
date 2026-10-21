# PAAN 03-26 Applicability Analysis and Build Plan

Analyzed 2026-10-20. Subject: PCS Checkage Computation for CONUS COLA for Actual Travel Days. Published 2026-09-03 by HQMC P&R (RFF), DTG R 031700Z SEP 26, marked CUI, distribution DoW community only. Status: analysis only, build awaits owner decision.

## Verdict

Applicable, narrow, and mostly a correction to one existing page. The advisory changes one rule the portal states in the wrong direction. `content/marines/conus-cola.mdx` says CONUS COLA on a PDS "ends the day before reporting to the next PDS" and answers the Camp Pendleton to Camp Lejeune question the same way. A Marine reading that page expects COLA through the travel days. PAAN 03-26 paragraphs 2 and 3 say no CONUS COLA is payable for authorized PCS travel days, and paragraph 4 requires a deduction from the first travel day through the date of report.

The portal is S-1 and IPAC reference. It does not teach finance office computation. So the build is small: fix the Marine page, add a short admin awareness section, add the citation, and log one `/updates` entry. It does not warrant a new page or a calculator.

Audit finding FP-03 stands and is Medium. One correction to its row: the finding calls the forthcoming update "PRIUM 070502.D". The message names reference (c) as FPM VOL 1 and says "An update to reference (c), 070502.D. will be forthcoming." That is the Finance Policy Manual, not MCTFSPRIUM. Do not link it to `mctfsprium-70502`, which is the Forfeitures and Fines entry.

## What the advisory covers

Source text read from the PDF (pypdf). References: (a) 37 USC 403b, (b) DoD FMR Vol 7A Ch 67, (c) FPM Vol 1. Point of contact is HQMC RFF.

- Paragraph 1. Purpose: clarifies the CONUS COLA checkage computation for the actual travel days taken during a PCS move.
- Paragraph 2. Per reference (a), a cost-of-living allowance "may not be paid" for the days authorized for travel in connection with a permanent change of duty station.
- Paragraph 3. Per reference (b), Table 67-1, Rule 2, a member is ineligible for CONUS COLA during the authorized travel days between the old PDS and new PDS.
- Paragraph 4. Deduct CONUS COLA for the duration of travel from the old PDS to the new PDS. The window begins on the effective date of orders (first date of travel) and runs through the date of report (day before join date).
- Paragraph 4.a. System logic starts CONUS COLA for the new PDS on the date of report (last travel day). So the deduction on the date of report is at the new PDS rate. Every other travel day is deducted at the old PDS rate, or at the rate based on the dependents' location at a designated place, whichever applies.
- Paragraph 4.b. Worked example. Quantico to Camp Pendleton. Detached 1 April, reported 7 May, delay (leave) 2 April to 30 April, actual travel days 1 May to 7 May. CONUS COLA must be deducted 1 May to 7 May. CONUS COLA starts at the new PDS rate on 8 May.
- Paragraph 6. An update to FPM Vol 1, 070502.D, is forthcoming. The PDF text runs paragraph 5 into 4.b, so paragraph 5 is missing or merged. See Blind spots.
- Paragraph 7. Coordinated with HQMC-RFF and HQMC-MPO.

Read together, 4.a and 4.b mean the system pays the new PDS rate from the date of report and the checkage takes that day back. The net effect on the date of report is no payment, and payment resumes the next day. Delay (leave) days before the travel window are not deducted in the example.

## Where it fits

| Step | Surface | Action | Confidence |
|------|---------|--------|------------|
| 1 | `content/citations/paan-03-26.mdx` | New citation entry. Type PAAN, number "03-26", publisher HQMC PR RFF, effectiveDate 2026-09-03, roles admin and marine, `gatedSource: true`. Do not set `hidden: true` because this one is active (the three existing PAAN entries are cancelled and hidden). Model on `paan-04-21.mdx` for the access paragraph, and add a body Status section naming it active. Aliases: "PAAN 03-26", "PAAN 3-26", "PAAN 03/26", "PAAN 3/26", "Personnel Admin Advisory Notice 03-26" | 0.95 |
| 2 | `content/marines/conus-cola.mdx` | Fix the PCS statements. Add a "COLA and PCS Travel Days" section (marine voice) saying no CONUS COLA is payable for authorized travel days, a deduction appears on the LES after PCS, and delay days are not deducted. Qualify the "Start and End Dates" bullet and the Pendleton to Lejeune answer. Cite the new entry. Refresh `lastVerified` only after the source check, which this report supplies for the advisory only | 0.90 |
| 3 | `content/admin/pac-cost-of-living-allowance.mdx` | Add a short "PCS Travel Days" section and one "Common COLA Errors" item. State the rule and the date of report rate split with paragraph numbers. Point to FPM Vol 1 and the finance office for the computation. Add the citation to `references` | 0.85 |
| 4 | `content/admin/s1g1-inbound-management-pay-starts-and-allowance-initiation.mdx` | Add one line at step 4 "Initiate COLA CONUS": the new PDS start date is the date of report, and PCS travel-day checkage is a finance function (see the COLA page). One sentence only | 0.70 |
| 5 | `content/updates/conus-cola-pcs-travel-day-checkage.mdx` | New `policy-change` entry, impact `awareness`. See Build plan step 5 | 0.90 |
| 6 | `content/admin/s1g1-outbound-management-mctfs-detach-and-routing.mdx` and `content/admin/s1g1-travel-entitlements-mileage-claims-permanent-duty-travel-pcs.mdx` | Optional one-line pointer to the COLA page. Neither mentions COLA today (grep returns none). Add only if the owner wants outbound coverage | 0.45 |

Role fit. Marine (`/marines/conus-cola`): the Marine sees the effect, a COLA reduction or debt line after PCS, and needs to know why before calling the S-1. Admin (`/admin/pac/pay-other/cost-of-living-allowance`): the IPAC pay clerk and 0111 field the question and route it. Leader and commander: the existing pages already carry all four roles through `relatedRoles` and the CrossRoleStrip, so no separate leader or commander text is needed. Hand them to the Marine page through the existing strip.

## What does NOT belong

- A checkage calculator or day-by-day computation walkthrough. Computing the deduction is a disbursing and finance office function (FO/DO) governed by FPM Vol 1 and DFAS processing. The portal teaches S-1 and IPAC admin, so building a calculator duplicates a finance lane and goes stale when 070502.D lands.
- MCTFS transaction codes, remarks, or screen steps for the deduction. The advisory gives none. The audit table ties COLA remark 934 changes to SRB 2026.10.01 (release 21 Oct 2026), which is a different document. Do not splice them into this change. Revisit after the SRB release and the FPM update.
- Rate tables or example dollar amounts. The advisory contains none, and the rates live on the DTMO site.
- A new standalone page. The rule is two facts and one example. A page for it fails the Marine and admin voice tests and dilutes the existing COLA pages.
- Deepening OCONUS COLA (`content/marines/oconus-cola.mdx`). The advisory is CONUS only.

## Blind spots

- Distribution restriction. The message is CUI, "DoW COMMUNITY ONLY". The portal is public GitHub Pages. Paragraph numbers and a plain statement of the rule are safe to publish as policy summary, in line with how the portal handles the three cancelled PAANs. Do not reproduce the message text, the point of contact, or the example verbatim, and do not publish the PDF. The owner decides whether a CUI-marked rule belongs on a public site before any step ships. This is the main gating question.
- Source defects. The PDF text shows "6." fused to the end of paragraph 4.b, and paragraph 5 does not appear. Paragraph 4.a reads "should be at the new PDS rate", which is softer than the "required" in paragraph 4. Treat 070502.D as the controlling text once published. Pull the original message from MISSA to confirm numbering before quoting paragraph numbers in published copy.
- Orders date versus detach date. Paragraph 4 starts the deduction on the "effective date of orders (first date of travel)". The example detaches on 1 April but starts the deduction on 1 May after a delay. Do not describe the start as the detach date. The portal should say "first authorized travel day" and not go further until FPM 070502.D is out.
- Conflict with the existing Marine page. The page paraphrases FMR Vol 7A Ch 67 para 3.1.1.1 as ending old-PDS COLA the day before reporting. PAAN 03-26 cites Table 67-1 Rule 2 for the travel-day ineligibility. Both come from the same chapter, so the page is incomplete and not necessarily wrong on its own. Confirm against the chapter text before rewording the cited paragraph.
- Designated place and dependent location. Paragraph 4.a allows a deduction at the rate based on the dependents' location at a designated place. The portal says nothing on this path. Note it for the admin page without expanding it.
- Travel-day definition. The portal pages do not define "actual travel days" or tie them to the orders. Authorized travel days for the move are a separate computation (JTR). Do not invent a rule. Link to the existing PCS travel entitlement page.
- Forthcoming FPM 070502.D. The advisory is interim. Expect a rewrite. Set `lastVerified` on edited pages to the source check date and record the pending update in a Callout on the admin page.
- Audit table mismatch. FP-03 attributes the forthcoming update to PRIUM. The source says FPM Vol 1. Correct the audit row when it is next touched.
- Existing page staleness. `pac-cost-of-living-allowance.mdx` is 2026-05-01 and `conus-cola.mdx` is 2026-05-02, both inside the 12-month window, so no aging banner explains the gap. Only this edit surfaces it.

## Build plan

Each step is independent. Steps 2 to 4 cite the entry from step 1, so ship step 1 first or together.

1. Citation entry. Author `content/citations/paan-03-26.mdx` with the aliases above, `gatedSource: true`, `roles: ["admin", "marine"]`, `lastVerified: "2026-10-20"`. Body: Access paragraph (RFF and MISSA behind DoD authentication, no public URL, archive path RFF/PAAN/CY2026), Status "Active, published 2026-09-03", Scope in portal voice (paragraphs 2 to 4.b in plain terms, no verbatim quoting), Connection to higher policy (37 USC 403b via `usc-37`, DoD FMR Vol 7A Ch 67 via `dodfmr-vol-7a`, FPM Vol 1 via `fpm-vol-1`). Run `npm run content:sync` to confirm alias uniqueness.
2. Marine page edit. In `content/marines/conus-cola.mdx` add the "COLA and PCS Travel Days" section. Marine voice: short imperative steps, spell out PDS and LES on first use. Content: no CONUS COLA is paid for your authorized travel days, expect a deduction for those days on the LES after you report, delay (leave) days before travel are not deducted, COLA at the new PDS rate starts the day after you report (given the date of report nets to zero). Ask the S-1 first if the LES looks wrong. Edit the "Start and End Dates" bullet and the Pendleton to Lejeune answer so neither implies payment through travel days. Update `references` and `lastVerified`.
3. Admin page edit. In `content/admin/pac-cost-of-living-allowance.mdx` add the "PCS Travel Days" section with paragraph-numbered authority (para 2, 3, 4, 4.a). Admin voice: owner is the finance office for the computation, S-1 role is to ensure the report date and travel dates are right on the detach and join transactions, answer Marine questions, and route disputes to the finance office. Add a Callout (info variant) noting FPM Vol 1 070502.D is forthcoming. Add one "Common COLA Errors" item for travel-day payment not checked. Do not add TTC or remark codes.
4. Inbound page line. One sentence on `content/admin/s1g1-inbound-management-pay-starts-and-allowance-initiation.mdx` step 4, linking to the COLA page. Skip if the owner wants zero touch on inbound pages.
5. Updates entry. Author `content/updates/conus-cola-pcs-travel-day-checkage.mdx`: `date: "2026-10-20"` (the portal reflects it then), `effectiveDate: "2026-09-03"` (the gap is honest), `kind: "policy-change"`, `impact: "awareness"` (action-required fits only if the owner wants S-1 sections to audit pending PCS checkage, and the source supports no such action), `roles: ["marine", "admin"]`, `citations: ["paan-03-26"]`, `affectedPages: ["/marines/conus-cola", "/admin/pac/pay-other/cost-of-living-allowance"]`, `supersededBy: null`. Author the citation first because sync fails on an unknown id. 90-day window runs to about 2027-01-18. The Marine page fix is also a `correction`, so name it in the entry body and do not file a second entry.
6. Audit hygiene. After the build, mark FP-03 closed in `audit/2026-10-20/finance-pub-currency.md` and correct the "PRIUM 070502.D" label to FPM Vol 1.
7. Owner decision gate (before any step). Confirm the CUI posture. If the owner declines to publish a CUI-marked rule, do step 2 as a minimal neutral fix instead: remove the implication that COLA pays through travel days and send the Marine to the S-1.

## Verification for when built

- `npm run content:sync` clean. Citations count rises by one, updates by one, no unknown-id or alias-collision failures. The in-window count line includes the new entry.
- `paan-03-26` resolves from both edited pages through the reverse index under its aliases. The Citation chip routes to `/citations/paan-03-26` and the gated-source notice renders.
- `/updates` shows the entry with both dates, the card title link goes to `/marines/conus-cola`.
- `npm run lint` clean and `npm run build` passes, including the static route for `/citations/paan-03-26`.
- Read the edited Marine page against the Marine voice test and the edited admin page against the admin voice test. A Marine page that reads like admin has failed, and the reverse.
- Style pass over every new and edited file against Section 6: no banned words, no em-dashes, no semicolons, no asterisks. Check that `lastVerified` dates reflect the real source check and that no TTC, remark, or rate was invented.
- Compare published wording to PDF paragraphs 2, 3, 4, 4.a, 4.b once more, and to the original MISSA message to settle the missing paragraph 5.
