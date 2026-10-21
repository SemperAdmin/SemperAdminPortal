# TAN 04-26 Applicability Analysis and Build Plan

Analyzed 2026-10-20. Subject: Travel Advisory Notice 04-26, Lodging for the Last Day of Travel to the New Permanent Duty Station (PDS). Issued by CMC Washington DC, HQMC P&R (RFF), message DTG R 041700Z SEP 26, indexed published 2026-09-04. Distribution line reads "DoW COMMUNITY ONLY". Status: analysis only, build awaits owner decision.

Source material read in full: the TAN 04-26 PDF (one page, five paragraphs), `tan_index.json` key 004/26, and the DTMO Update to Document (UTD) for MAP 03-26(R) dated 7 July 2026 (`UTD_for_MAP_03-26(R)...pdf`, memo plus the Table 5-5 revision attachment plus the PDTATAC Chair approval page). Not read: the JTR edition dated 1 August 2026 itself, TAN 01-26, DoDFMR Vol 9, Disbursing-Financial Policy Manual Vol 2. The audit finding is FP-04 in `audit/2026-10-20/finance-pub-currency.md`.

## Verdict

Applicable, medium priority, and the portal is behind by three and a half months on a live entitlement. The TAN tells the disbursing community a Marine on PCS now draws lodging on the last day of travel to the new PDS. The portal has no statement of the rule. Its PCS per diem page tells Marines they receive "the full M&IE rate" with no last-day exception, which conflicts with the 75 percent figure in TAN 04-26 paragraph 2 and in row 7 of the revised JTR Table 5-5. A Marine reading the portal and a finance office computing the claim reach different numbers.

The TAN is a disbursing notice. It speaks to the finance office, not to the Marine. The portal job is translation: state the rule for the Marine, state the TLE interplay for the S-1, and cite the source. No new page is warranted.

## What the advisory covers

Quoted by paragraph number.

- Paragraph 1. TAN 04-26 "cancels TAN 01-26." `tan_index.json` shows 001/26, same subject, published 2026-07-27, cancelled 2026-09-04. The notice informs the Disbursing community of "a significant change" to a PCS allowance. Reference A (MAP 03-26(R)) "updates Joint Travel Regulation (JTR) Table 5-5 (PCS Per Diem when Traveling by Airplane, Ship or Bus)."
- Paragraph 2. "Effective 7 July 2026," Reference A authorizes lodging on the last day of travel to the new PDS, "not to exceed the applicable locality rate, in conjunction with the 75% of the locality's meals and incidental expense (M&IE) rate." The rule "also applies to accession members on PCS orders."
- Paragraph 3. Guidance for PCS settlement. 3.a: TLE "is the primary statutory allowance for temporary lodging at a Permanent Duty Station." 3.b: lodging under a travel or MAP item "is only authorized if there is insufficient elapsed time for the traveler to establish a standard TLE claim upon arrival at the new PDS." 3.c: if enough elapsed time exists to cover the arrival day, "the traveler must file for TLE instead of travel-item lodging."
- Paragraph 4. Disbursing Officers and Finance Officers (DO/FOs) go to the DTMO JTR Changes page for the latest JTR changes.
- Paragraph 5. Coordinated by HQMC-RFF and HQMC-MPO.

What MAP 03-26(R) adds (UTD memo dated 7 July 2026):

- Paragraph 1 states the purpose and says the item "will align Service member PCS allowances with civilian PCS allowances, as defined in JTR section 0539."
- Paragraph 3 says the change appears in the JTR dated August 1, 2026.
- Paragraph 4 says the revision "is effective on July 6, 2026, when it was approved by the Chair." The TAN says 7 July. See Blind spots.
- Table 5-5 new row 7. Condition: "to the new or first PDS and lodging is required the day travel ends." Result: "per diem is the lesser of the actual lodging cost incurred by the Service member or the applicable lodging rate, plus 75% of the applicable M&IE rate."
- Rows 1 to 6 of the attachment read as carried-forward rows (travel between official points, TDY or leave en route, family and Government quarters, car ferry, commercial ship). The attachment shows them in full, so treat them as context, not as new text. Only row 7 is identified in the sources as the change.

## Where it fits

Target roles: marine (primary, owns the rule as an entitlement), admin (primary, S-1 and travel clerks who stage the claim the finance office computes), leader (secondary, coaches Marines before the move and reviews vouchers). Commander is excluded. See the next section.

| Step | Surface | Action | Confidence |
|---|---|---|---|
| 1 | `content/citations/tan-04-26.mdx` (new) | Author registry entry. Type OTHER (CITATION_TYPES has no TAN value). Aliases "TAN 04-26", "TAN 04/26", "TAN 004/26". Roles marine, leader, admin. Add `effectiveDate: 2026-07-07` per the TAN text. No `externalUrl` (see Blind spots). | High |
| 2 | `content/citations/map-03-26.mdx` (new) | Author registry entry for MAP 03-26(R). Type OTHER. Aliases "MAP 03-26", "MAP 03-26(R)", "UTD for MAP 03-26(R)". Take the `externalUrl` from the `dtmo_index.json` record for the item, not from memory. Note the effective date reads 2026-07-06 in the memo. | High |
| 3 | `content/marines/pcs-per-diem.mdx` | Add a short section "Lodging on Your Last Day of Travel" under "Member Rate (100 Percent)". State the rule in plain steps, cap at locality rate, 75 percent M&IE, applies to accession members, and the TLE-first test. Correct the line "Receives the full M&IE rate without itemized receipts" and the FAQ on lodging without receipts only after the JTR check in Build plan step 2. Add the references list entries. | High |
| 4 | `content/marines/temporary-lodging-expense.mdx` | Add a section "TLE or Last-Day Travel Lodging" carrying paragraphs 3.a to 3.c. The page covers days at the new PDS but says nothing about the arrival day. This is the exact decision point the TAN governs. | High |
| 5 | `content/admin/s1g1-travel-entitlements-mileage-claims-permanent-duty-travel-pcs.mdx` | Step 7 ("Apply TLE and TLA") gains the elapsed-time test as a function-coded decision. Add a Pitfalls line: a travel-item lodging claim paid where a TLE claim was available. Cite TAN 04-26 and MAP 03-26 inline. | High |
| 6 | `content/admin/s1g1-travel-entitlements-mileage-claims-processing-travel-claims-and-vouchers.mdx` | One Callout in the voucher review portion: last-day lodging line is the lesser of actual cost or locality rate, M&IE at 75 percent. Read the page first to place it. | Medium |
| 7 | `content/leader/travel-pcs-coaching.mdx` and `content/leader/travel-voucher-audit.mdx` | One Callout each. Coaching: tell the departing Marine to plan the arrival day as TLE when time allows. Audit: check a last-day lodging line against the TLE claim for the same date. Both pages mention TLE or lodging only in passing today. | Medium |
| 8 | `content/marines/pcs-with-tdy-en-route.mdx` | Row 2 of Table 5-5 covers "TDY or leave en route," and row 7 sits in the same table. Read the page against the table and add a cross-link sentence only if the page states a final-leg rule. | Low |
| 9 | `content/marines/separation-retirement-accession-travel.mdx` | TAN paragraph 2 extends the rule to accession members on PCS orders. Read the page. Add one sentence only if it describes per diem to the first PDS. | Low |
| 10 | `content/updates/last-day-pcs-lodging-authorized.mdx` (new) | The /updates entry. See Build plan step 5. | High |

## What does NOT belong

- A new standalone page. The rule is two sentences and a three-line test. A page would restate JTR Table 5-5, and the Marine and S-1 surfaces above already own the PCS per diem and TLE topics. Pages tagged for several roles render under each, so the edits reach all of them.
- Commander surfaces. Paragraph 2 changes an allowance computation, and paragraph 3 routes a claim choice. Neither changes a signing authority, a discipline route, or a turnover duty. Putting it under /commander blurs the lane.
- Disbursing office procedure. TAN paragraph 4 addresses DO/FOs, and the Disbursing-Financial Policy Manual (Reference C) governs their steps. The portal states what the Marine is owed and what the S-1 stages. It does not script the finance office computation. This is the lane boundary the task set.
- Dollar figures. The cap is "the applicable locality rate." The portal links the DTMO Per Diem Rate Lookup (`content/citations/dtmo-per-diem-rate-lookup.mdx`) and states no rate.
- A DTS screen walkthrough for entering last-day lodging. Neither source describes the DTS entry. Authoring one would be invention.
- The point of contact line in the TAN. It names an individual and an email address. A reference portal does not republish a named POC from a restricted-distribution message.
- TAN 01-26 history. It is cancelled and no portal page cites it. Git is the record. The cancellation belongs only in the TAN 04-26 citation Scope text, one sentence.
- Civilian PCS lodging under JTR section 0539. The MAP memo cites it as the alignment target. The portal serves uniformed Marines.
- Verbatim reproduction of the TAN. Paraphrase it. Distribution is "DoW COMMUNITY ONLY," so the owner should decide whether the portal quotes the text or only cites it. This analysis recommends paraphrase plus citation.

## Blind spots

1. Effective date conflict. TAN paragraph 2 says 7 July 2026. The MAP memo (dated 7 July) says the revision "is effective on July 6, 2026, when it was approved by the Chair." The `dtmo_index.json` date of 07/10/2026 (cited in FP-04) is the posting date, not the effective date. The sources do not say which governs a claim for travel ending on 6 July. Use the TAN date in the portal, since it is the Marine Corps notice, and flag the one-day gap in the citation Scope text. Owner decision.
2. Travel mode scope. Table 5-5 covers airplane, train, ship, or bus. The TAN title for the table drops "train" and the MAP memo includes it. The JTR table governing POV travel is not in the sources, and the portal page walks POV travel days at length. Do not tell a driving Marine the rule applies to POV travel until the POV table is read. The Marine section must name the covered modes exactly as the JTR does, with the discrepancy resolved from the 1 August 2026 JTR.
3. "Lodging is required the day travel ends" is not defined in either source. Neither says who decides or what documents it. Do not invent a test.
4. "Insufficient elapsed time" (TAN paragraph 3.b) has no number. The portal must not state a threshold. It states the test as written and sends the Marine to the S-1 and the finance office for the call.
5. Paragraph 3 is written to settle a claim at the finance office. A Marine often files TLE and per diem on one voucher. Neither source says whether the two share a date. Do not state they split a date.
6. Dependents. The TAN says "Service members." Row 7 says "Service member." Neither source addresses dependent per diem on the last day. The portal page lists adult dependents at 75 percent and children at 50 percent. Do not extend the rule to dependents without JTR text.
7. Retroactivity. The change took effect 7 July and the portal learns of it on 20 October. Vouchers settled between those dates are at risk of underpayment. Neither source names a correction path. Do not promise one. The S-1 should ask the finance office. A one-line pointer is the most the portal states.
8. Existing portal claim to verify. `pcs-per-diem.mdx` says the Marine "receives the full M&IE rate without itemized receipts" and the FAQ says lodging "requires receipts." Row 7 already uses 75 percent M&IE for the last day. If JTR paragraph 020310 already pays the travel-ending day at 75 percent, the page overstated before July as well. This is a correction candidate, not a policy change. Verify against JTR paragraph 020310 before choosing the /updates kind. Related, outside this lane: the same page quotes MALT at "approximately $0.18 per mile," while FP-08 records the 2026 PCS mileage rate as 0.235. Route this item to FP-08.
9. Registry URL gap. The sources hold no public URL for TAN 04-26. Under CLAUDE.md Section 4.5, a missing `externalUrl` outside the listed no-URL groups is a genuine gap. Here the cause is the restricted distribution line. Record the cause in the Scope text so the next audit does not flag it again.
10. `jtr.mdx` points at a January 2022 PDF and has `lastVerified` 2026-05-11 (FP-07). The new citations sit next to the stale record. Fix FP-07 first or in the same pass, otherwise the portal cites a 2026 change to a 2022 document.

## Build plan

Independent steps. Do steps 1 and 5 together or in order, since `content:sync` fails on an unknown citation id.

1. Citations. Author `tan-04-26.mdx` and `map-03-26.mdx` in `content/citations/`. Each needs `id` matching the filename, `aliases[]`, `title`, `type: "OTHER"`, `number`, `publisher`, `lastVerified: 2026-10-20`, `roles[]`. TAN publisher: take it from the message header, "CMC WASHINGTON DC/HQMC P&R (RFF)." MAP publisher: Per Diem, Travel, and Transportation Allowance Committee. Scope text states the rule once, notes the TAN 01-26 cancellation, and records the 6 versus 7 July gap. Run the alias uniqueness check through `npm run content:sync`. Optional follow-up for the owner: add a TAN value to CITATION_TYPES in `src/lib/content/schemas.ts`. This schema change sits outside this report. OTHER works today.
2. JTR source check. Read JTR Table 5-5 row 7, paragraph 020310 and the POV table in the 1 August 2026 edition from the DTMO JTR page. Resolve blind spots 1, 2, 3 and 8. Do this before any lastVerified change on the PCS pages. Refresh `jtr.mdx` (FP-07) in the same sitting.
3. Marine pages. Edit `pcs-per-diem.mdx` and `temporary-lodging-expense.mdx` per the table. Voice: short imperative steps, no unexpanded acronyms (spell out Meals and Incidental Expenses on first use). Use a Callout for the TLE-first decision. Add `Citation` chips for TAN 04-26 and MAP 03-26 at the claim, and add both to `references:`. Raise `lastVerified` only after step 2.
4. Admin and leader pages. Edit the two S-1 pages and the two leader pages per rows 5 to 7. Admin voice: function-coded, source cited inline. Leader voice: owner and trigger, decision point as a Callout. Read each page first and place edits where the existing structure puts them.
5. /updates entry. Create `content/updates/last-day-pcs-lodging-authorized.mdx`. `kind: policy-change`. `impact: action-required`, because a Marine or S-1 now chooses between a travel-item lodging claim and a TLE claim. `date: 2026-10-20`. `effectiveDate: 2026-07-07` (gap from `date` is honest and stays). `roles: ["marine","leader","admin"]`. `citations: ["tan-04-26","map-03-26","jtr"]`. `affectedPages` first entry `/marines/pcs-per-diem`, then `/marines/temporary-lodging-expense`. `supersededBy: null`. Body: two short paragraphs, rule first, TLE-first test second. If step 2 shows the full-M&IE statement was wrong before July, add a separate `correction` entry instead of folding it in. Per CLAUDE.md 4.6 the 90-day window runs to 2026-12-31 from a 2026-10-20 build.
6. Low-confidence pages (rows 8 and 9). Read them and add one sentence each, or record "no change" and move on.
7. Close FP-04 in the audit tracker once steps 1 to 5 land.

## Verification for when built

- `npm run content:sync` exits clean. Alias uniqueness holds. Coverage warning line shows no new unresolved citations. The sync output names the new update as in-window.
- `npm run lint` and `npm run build` pass.
- Resolver check: "TAN 04-26", "TAN 04/26", "MAP 03-26(R)" each resolve to the new ids. With no `externalUrl` on TAN 04-26, the chip routes to `/citations/tan-04-26`.
- `grep -ri "last day of travel" content/marines content/admin content/leader` hits the new sections and still hits `tdy-per-diem` for the unrelated TDY rule.
- `grep -n "full M&IE" content/marines/pcs-per-diem.mdx` shows the corrected line, or shows the page now scopes it to days before the last day.
- Every changed page frontmatter validates through zod, `roles` unchanged, `lastVerified` moved only on pages whose rule was source-checked.
- `/updates` renders the card at the top with the action-required marker. The card title links to `/marines/pcs-per-diem`.
- Banned-word and punctuation scan on all changed files and the new MDX: no em-dashes, no semicolons, no asterisks, no word from CLAUDE.md Section 6.2.
- Cross-read against the sources: every number on a page (75 percent, locality cap, 7 July 2026) traces to TAN paragraph 2 or Table 5-5 row 7. No threshold for "insufficient elapsed time" appears anywhere.
- Role-separation check: the Marine page reads as plain steps, the admin page reads as function-coded steps, and no inline cross-role link sits in prose.
