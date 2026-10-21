# PAA 01-26 Applicability Analysis and Build Plan

Analyzed 2026-10-20. Subject: Transition from the Reflection Desktop application to the Multi-Host Internet Access Portal (MIAP) for access to the Marine Corps Total Force System (MCTFS). Dated 2026-08-20, modified 2026-08-21 on the MISSA portal. Issued by Headquarters Marine Corps M&RA, Manpower Information Systems Support Activity. Status: analysis only, build awaits owner decision.

Source material: the advisory text at `E:\GunnyBot\Policies\PAA\CY2026\paa-01-26.md` and index key "001/26" in `paa_index.json`. The index shows no attachments and no cancellation. The text is eight numbered paragraphs, so nothing is hidden in a child document. Audit references: FP-02 and FP-12 in `audit/2026-10-20/finance-pub-currency.md`.

## Verdict

Applicable, admin lane first, and overdue. The effective date passed 49 days ago. The portal holds no statement saying Reflection Desktop is gone, no citation for the advisory, and a published link page for MIAP carrying scaffold text. A reader who still launches the old emulator finds nothing on the portal telling them the path closed on 1 September 2026.

The advisory is short and changes one thing. Paragraph 5 states it: "This transition changes the method used to access MCTFS and does not change existing MCTFS permissions, roles, or authorized personnel administrative procedures." The build is therefore small. One citation, one link rewrite, one update entry, and a few sentences on two existing admin pages. A new page is not warranted.

Target roles. Admin first, because S-1 and IPAC specialists (0102, 0111, 0170) open MCTFS daily and own the validation work in paragraph 4.b. Leader and commander second, because paragraph 4.a puts the duty on "Commands" to confirm every person who needs MCTFS has validated MIAP access. Marine is not a target. A junior Marine rarely holds an MCTFS login of their own, and the portal's marine pages never describe a terminal session.

## What the advisory covers

Dates.

| Date | What happens | Paragraph |
|---|---|---|
| On or after 31 August 2026 | Reflection Desktop is scheduled for disablement and removal from Marine Corps workstations. | 3 |
| Before 1 September 2026 | Commands confirm everyone needing MCTFS has "established and validated access to MIAP." Personnel validate MCTFS access through MIAP before Reflection Desktop is removed. | 4.a, 4.b |
| Immediately | Commands "should begin transitioning personnel to MIAP" and resolve access issues to prevent interruption to administrative operations. | 4.c |
| 1 September 2026 | "personnel will use MIAP to access MCTFS." | 4.d |

Who acts.

- Commands: confirm and validate MIAP access for all MCTFS users (4.a), start transition and clear access problems (4.c), and disseminate the PAA to subordinate commands (1).
- Individual users: validate their own MCTFS access through MIAP before the local application disappears (4.b).

System changes.

- Reflection Desktop, the locally installed terminal emulator, is removed. The stated reason in paragraph 3 is "security compliance requirements."
- MIAP, the DISA browser-delivered portal, becomes the access method for MCTFS.
- Nothing else moves. Paragraph 5 keeps MCTFS permissions, roles, and authorized procedures as they are.

Support. Paragraph 7 lists one point of contact, 1-844-347-2457 (1-844-DISA-HLP). This number is the DISA help line, not the supporting MISSO.

Timeline changes. Paragraph 6 reserves the right to change the timeline or add guidance "through appropriate channels." The portal should treat the 1 September date as a floor and watch for follow-on messages.

Two text details to carry correctly. The source spells the portal name "Muti-Host" in paragraph 2. Cite the correct name, Multi-Host Internet Access Portal, as PAA 06-10 already does. Paragraph 3 says "on or after 31 August," which is a removal window, not a hard cut. Paragraph 4.d is the only hard date.

## Where it fits

Priority order. Confidence in parentheses within the table.

| Step | Surface | Action | Confidence |
|---|---|---|---|
| 1 | `content/citations/paa-01-26.mdx` | New citation, type PAA, role admin plus leader and commander. Model on `paa-02-26.mdx`. Effective date 2026-09-01. Add paragraph-by-paragraph action language. Set `gatedSource: true`. Use the MISSA list `externalUrl` only if the owner supplies the DispForm ID, otherwise omit it. | 0.95 |
| 2 | `content/links/miap-3270.mdx` | Rewrite the scaffold summary and the body stub. State MIAP is the only supported MCTFS access path from 1 September 2026 and Reflection Desktop is removed. Add a Callout-free short body under 120 words. Fix `audience`. Refresh `lastVerified` only after a real source check. Resolves FP-12. | 0.95 |
| 3 | `content/updates/mctfs-access-moves-to-miap.mdx` | New update entry. See the build plan for fields. | 0.90 |
| 4 | `content/admin/s1g1-admin-systems-management-account-provisioning-and-saar-n-processing.mdx` | One short section or Callout separating the two layers. E-ICAM grants the role under PAA 02-26. MIAP is how the Marine reaches MCTFS under PAA 01-26. Link the MIAP link page. Cite both PAAs. | 0.85 |
| 5 | `content/admin/s1g1-admin-systems-management-overview.mdx` | Add MIAP to the systems list and PAA 01-26 to references. Add one pitfall: a user with a valid E-ICAM role but no MIAP validation cannot reach MCTFS. | 0.80 |
| 6 | `content/admin/s1g1-admin-systems-management-system-outage-and-backup-processing.mdx` | Read before deciding. If it tells an S-1 to fall back to a local emulator or names Reflection, fix it. A grep for "reflection" finds nothing in `content/admin`, so this is a read-through, not a known defect. | 0.40 |
| 7 | `content/citations/paa-06-10.mdx` | Add one sentence in the Status section pointing to PAA 01-26 as the current MIAP advisory. The 2010 record stays historical. Its line "Verify current MIAP enrollment steps" already invites this pointer. | 0.75 |
| 8 | `data/videos-marinenet.json`, entry `creating-a-miap-account` | Optional. Add a note to the human-owned `summary` the video predates PAA 01-26 and the owner should confirm it matches the MIAP login flow. Never edit `content/videos/creating-a-miap-account.mdx`. See blind spots. | 0.50 |

## What does NOT belong

- A click-by-click MIAP user manual. The advisory carries no procedure. DISA owns the portal and its enrollment flow. Writing steps from memory invents a second source, which goes stale. The portal links out, as it did for E-ICAM.
- A Reflection Desktop uninstall or workstation guide. Paragraph 3 describes removal as something done to workstations. No user action is assigned. Local IT owns it.
- Marine-role pages. No marine page describes MCTFS terminal access. The advisory assigns duties to commands and personnel who hold MCTFS access, which is an admin population.
- A leader coaching page on "how to move your Marines to MIAP." Paragraph 4.c is a command duty, but the advisory gives no method. A leader page here would be invented procedure.
- A new top-level page for the transition. Paragraph 5 says the change is access method only. The existing account provisioning page is the correct home for the one-paragraph distinction. A standalone page splits the topic across two URLs.
- Re-tagging the 3270 history video pages (`history-of-3270`, `difference-between-3270-and-mctfs`, `how-to-message-within-3270`). They teach 3270 screens and messaging. Paragraph 5 leaves the MCTFS procedures themselves unchanged, and the advisory does not retire the 3270 screen interface. See blind spots on this point.
- Edits to the unrelated `reflection` hits in `content/leader/counseling-styles.mdx`, `content/marines/awards-unit-awards.mdx`, `content/marines/education-services-and-resilience.mdx`, and `content/marines/life-events-overview.mdx`. The word is ordinary English there.
- Any claim about the dates before 1 September. The window is closed. Write in past tense for the cutover and present tense for the current state.

## Blind spots

- The URL on the link page is unchecked. `content/links/miap-3270.mdx` points at `https://miap.csd.disa.mil/portal.html`. PAA 01-26 gives no URL for MIAP. The link was authored from the SharePoint extract (`content/links/_source/sharepoint-extract.md`, line 72) and last verified 2026-05-22, before the transition. Confirm the address still serves as the MIAP front door before the page asserts it is the required path.
- The advisory names no enrollment steps, no role in MIAP, and no account-request route. Paragraph 4.a says "established and validated access to MIAP" and never says who establishes it. The video `creating-a-miap-account` suggests a self-enrollment flow, but it was last verified 2024-12-29 and has not been watched for this analysis. Treat any enrollment description as unsourced until the owner confirms.
- Interaction with E-ICAM. PAA 02-26 moved MCTFS role requests to E-ICAM on 21 September 2026. PAA 01-26 moved the access channel to MIAP on 1 September 2026. The two advisories are three weeks apart and do not cite each other. Whether MIAP access itself now needs an E-ICAM step is unstated in either text. The portal must not claim a dependency in either direction.
- Whether the 3270 screens survive. The advisory removes the locally installed application. It never says the 3270 interface goes away, and paragraph 5 says procedures stay. The portal's three 3270 videos therefore stay valid on the evidence in hand. The risk is a reader inferring they teach the retired tool. A one-line note on the link page covers it.
- The video is tagged `roles: ["leader"]` only. The audience for MIAP account creation is admin and every other MCTFS user. The tag looks wrong, but roles are human-owned and live in the catalog JSON. Changing them is an owner call.
- The advisory text came from the local archive, not from the CAC-gated MISSA list. `lastVerified` on the new citation would read against the archived text modified 2026-08-21. PAA 02-26 changed after the portal checked it, so confirm no later edit to 01-26.
- The advisory has no cancellation and no sunset. If a later PAA changes the timeline under paragraph 6, the citation and update entry both need a follow-up.
- Support routing differs between advisories. PAA 02-26 sends MCTFS functional questions to the supporting MISSO and technical questions to the DISA Global Service Desk. PAA 01-26 lists only the DISA line. The existing `content/links/disa-global-service-desk.mdx` fits. Do not copy the MISSO routing into a PAA 01-26 context without a source.
- Roles on the update entry. Admin, leader, and commander match the PAA 02-26 entry. Commanders get the duty in 4.a. If the owner wants a tighter audience, admin and commander only is defensible and leader is the judgment call.

## Build plan

Each step is independent. Steps 1 through 3 stand alone. Steps 4 through 7 depend on the citation id existing so `<Citation source="PAA 01-26" />` resolves.

1. Citation entry. Create `content/citations/paa-01-26.mdx`.
   - `id: "paa-01-26"`, `type: "PAA"`, `number: "01-26"`, `effectiveDate: "2026-09-01"`, `lastVerified: "2026-10-20"` after the owner confirms the source check, `gatedSource: true`, `roles: ["admin", "leader", "commander"]`.
   - Title: "PAA 01-26 - Transition from Reflection Desktop Application to Multi-Host Internet Access Portal (MIAP)". Publisher: Headquarters Marine Corps Manpower and Reserve Affairs, Manpower Information Systems Support Activity (MISSA).
   - Aliases to mirror the 02-26 pattern: "PAA 01-26", "PAA 1-26", "PAA 01/26", "PAA 1/26", "Personnel Admin Advisory 01-26", "Personnel Admin Advisory 1-26", "Personnel Administrative Advisory 01-26", "PAA 01-26 MIAP", "PAA 01-26 Reflection Desktop". Run alias uniqueness through `npm run content:sync`.
   - Body: Scope, Audience, Dates, Action language by paragraph (2, 3, 4.a, 4.b, 4.c, 4.d, 5, 6, 7), Connection to portal content, Status. Keep `supersedes` empty. The advisory supersedes no document.
   - Note "Muti-Host" as a source typo only if the owner wants it recorded. Otherwise use the correct name.

2. MIAP link page. Rewrite `content/links/miap-3270.mdx`.
   - New summary under 160 characters, for example: "DISA portal for MCTFS access. Required from 1 September 2026. Reflection Desktop is removed." Final wording is the owner's call.
   - Body under 120 words. State what it delivers, who needs it, and the 1 September date with the PAA 01-26 citation. Add a one-line note the 3270 screens and procedures are unchanged under paragraph 5.
   - Reconsider `roles`. The file lists all four. Admin and leader and commander fit the advisory. Keep marine only if the owner wants it for the general MCTFS user.
   - Do not refresh `lastVerified` until the URL check in the blind spots is done.

3. Update entry. Create `content/updates/mctfs-access-moves-to-miap.mdx`.
   - `slug: "mctfs-access-moves-to-miap"`, `kind: "policy-change"` (rule 1 of the standing authoring list, a new PAA changing a required procedure), `impact: "action-required"`, `date: "2026-10-20"` or the day the build ships, `effectiveDate: "2026-09-01"`. The gap between the two dates is honest and stays.
   - Title: "MCTFS access moves from Reflection Desktop to MIAP". Summary under 160 characters, active voice.
   - `roles: ["admin", "leader", "commander"]`. `citations: ["paa-01-26", "paa-02-26"]`. `affectedPages` first entry is the card title link: `/links` plus the two admin routes from steps 4 and 5. Confirm the `/links` detail route format used by the PAA 02-26 entry before copying.
   - Window check: the 90-day clock runs from `date`, so the entry renders until mid January 2027. The 1 September effective date is already past, so the card reads as a catch-up notice. Say so in the body.
   - Body: three or four bullets with the paragraph 3, 4.a, 4.d, and 5 facts. No procedure beyond the advisory.

4. Provisioning page. Edit `content/admin/s1g1-admin-systems-management-account-provisioning-and-saar-n-processing.mdx`.
   - Add a short Callout (info variant) titled for the two layers. E-ICAM decides who holds which MCTFS role. MIAP is the door the user walks through. Cite both PAAs. Voice per admin rules: function-coded, source cited inline.
   - Add one pitfall: a role approved in E-ICAM does not help a user whose MIAP access is unvalidated. Phrase it as a check to run, not a claim about system behavior, unless the owner confirms the behavior.

5. Overview page. Edit `content/admin/s1g1-admin-systems-management-overview.mdx`. Add MIAP to the systems list, PAA 01-26 to the references and authority lines, and the same one-line pitfall.

6. Outage page read-through. Open `content/admin/s1g1-admin-systems-management-system-outage-and-backup-processing.mdx` and `content/admin/s1g1-admin-systems-management-new-system-release-onboarding.mdx`. Both appeared in the broad grep, the second through its mention of terminals or 3270 wording. Change a page only if it points a reader at the removed application.

7. PAA 06-10 pointer. Add one sentence to `content/citations/paa-06-10.mdx` Status section naming PAA 01-26 as the current MIAP advisory. Keep `lastVerified` untouched unless the source is rechecked.

8. Video catalog note (optional). If the owner accepts, edit the `summary` of `creating-a-miap-account` in `data/videos-marinenet.json`. Do not touch the MDX. Wording stays factual: the video predates PAA 01-26.

9. Close the audit rows. After steps 1 through 3 land, mark FP-02 and FP-12 resolved in the next currency audit pass.

## Verification for when built

- `npm run content:sync` runs clean. Citations count rises by one, updates by one. No alias collision, no unknown citation id on the update entry.
- `paa-01-26` resolves from the provisioning page, the overview page, and the update entry. Check the reverse index in `src/generated/citations.json` under all nine aliases.
- `/updates` renders the new card in the window, with the effective date and filing date both visible, and the first `affectedPages` route as the title link.
- `/links` shows the MIAP entry with the new summary. The words "Review and rewrite this summary" appear nowhere in `src/generated/links.json` or the built output.
- `grep -ril "reflection desktop" content` now returns the new citation, the link page, the update entry, and the two admin pages. It returns no marine, leader, or commander page.
- The MIAP address has been loaded in a CAC-enabled browser by the owner, and `lastVerified` on the link page reflects the check.
- Confirm the MISSA record was not edited after 2026-08-21. If it was, reread the text before setting `lastVerified`.
- `npm run lint` shows no new errors and `npm run build` completes.
- Style pass over every new and edited file against CLAUDE.md Section 6. No banned words, no em-dashes, no semicolons, no asterisks. Check "Multi-Host" spelling in every new string.
- The three 3270 video pages and `content/videos/creating-a-miap-account.mdx` are byte-identical to before the build.
