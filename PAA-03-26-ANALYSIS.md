# PAA 03-26 Applicability Analysis and Build Plan

Analyzed 2026-10-20. Subject: Mandatory use of the Notes tab in Unit Diary/Marine Integrated Personnel Service (UD/MIPS). Issued by Headquarters Marine Corps M&RA, Manpower Information System Support Activity (MISSA), dated 2026-09-15. Status: analysis only, build awaits owner decision.

Source material: the advisory text at `E:\GunnyBot\Policies\PAA\CY2026\paa-03-26.md` (MISSA portal list item sp_id 133, no attachments) and the `003/26` entry in `paa_index.json`. The advisory title in the source reads "Marine Intergrated Personnel Service". The portal calls the system "Manpower Integrated Personnel Service" on `pac-ud-mips-storage`. Both spellings are the source's, so the portal copy should keep UD/MIPS and avoid expanding the M until the owner confirms the correct expansion.

## Verdict

Applicable, and overdue. The mandate took effect 1 October 2026, so it has been in force 19 days with no portal mention. The portal documents unit diary preparation, submission, certification, and post-certification upload across two admin pages. Neither says a word about the Notes tab. A grep of `content/` for "Unit Diary Notes", "Notes tab", and "diary notes" returns zero hits (confirmed in audit finding FP-01), and no `paa-03-26` citation exists.

The home is the admin lane. This is a system-of-record procedure for S-1 and IPAC Preparers, Reviewers, and Certifiers. Leader and commander exposure rides on the `roles` arrays the existing admin pages already carry. No Marine page is warranted.

Classify the update entry as `policy-change` with impact `action-required`. Reporting units are already out of compliance if they skipped the notes since 1 October.

## What the advisory covers

Reference (a) is Notice of Finding and Recommendation 2025-0001-FIN-GFMC.

### Why it exists (paragraph 2)

On 6 February 2026 the Independent Public Accountant issued an NFR titled "Ineffective Design of the Review and Approval of the UD/MIPS and DTMS Entries Controls". The finding says the Research Diary Report certification statement and signature "implicitly" acknowledge review but do not evidence the procedures performed. The NFR recommends standardized procedures to document the control owner's review.

### Key dates

| Date | What happens | Source |
|---|---|---|
| 2026-02-06 | NFR received from the IPA | para 2 |
| 2026-09-15 | PAA 03-26 issued | header |
| 2026-10-01 | Unit Diary Notes mandatory for every unit diary requiring certification in UD/MIPS | para 3 |
| Not stated | MCTFS PRIUM update, described as "forthcoming" | paras 3 and 9 |
| Not stated | System enhancement giving an append-only (immutable) note history | paras 8 and 9 |

### Who must act

Every reporting unit preparing, reviewing, or certifying a unit diary in UD/MIPS. Paragraph 4 says the Notes capability sits at the bottom of each unit diary and is role-specific. Users enter notes only for their assigned role. The three roles match the UD/MIPS roles already described in `mctfsprium-20115` (Preparer, Reviewer, Certifier).

| Role | Trigger | Required annotation (paragraph) |
|---|---|---|
| Preparer | Submit diary for review or certification | "YYYYMMDD - Diary has been submitted for review/certification." (para 5) |
| Preparer | Resubmit after corrective action | "YYYYMMDD - Diary returned with corrections for review/certification." (para 5) |
| Reviewer | Finish review, forward to Certifier | "YYYYMMDD - Diary reviewed and forwarded for certification." (para 6) |
| Reviewer | Return diary to Preparer | "YYYYMMDD - Diary returned to Preparer for corrections." (para 6) |
| Certifier | Return diary for correction | "YYYYMMDD - Returned for corrections." (para 7) |
| Certifier | Finish review, before certifying | "YYYYMMDD - Diary transactions reviewed against supporting documentation and verified as accurate. Diary is ready for certification." (para 7) |

The Reviewer role is optional. Paragraph 6 states there is no requirement for a reporting unit to use it. If the unit uses it, the Reviewer annotations apply.

### What changes in UD/MIPS behavior

- Use of the Unit Diary-level Diary Notes capability becomes mandatory for diaries requiring certification (para 3).
- The requirement does not apply to Transaction User Notes, Transaction System Notes, or Diary Feedback Report (DFR) Notes "unless otherwise specified" (para 3).
- Paragraph 8 sets a chronological-history rule. Until an append-only record exists, users append each new annotation to the existing note, never delete, alter, or overwrite a prior one, and separate annotations with a forward slash (/). The rule covers every submission, return, corrective action, resubmission, review, and certification.
- Editing a note refreshes the system Last Update date, so each annotation carries its own YYYYMMDD date (para 8).
- Paragraph 9 labels the whole arrangement a "procedural control" pending system enhancement. Commands must keep prior annotations intact.
- Paragraph 10 points to a tutorial under the UD/MIPS header of the "Application Training and Information Tile" on the MISSA/MISSO portal.

The advisory changes no MCTFS transaction, code, or table. It adds a documentation duty inside UD/MIPS.

## Where it fits

| Step | Surface | Action | Confidence |
|---|---|---|---|
| 1 | `content/citations/paa-03-26.mdx` (new) | Author the registry entry first. Every other step cites it. Model it on `paa-02-26.mdx`: type PAA, number "03-26", aliases, `effectiveDate: 2026-10-01`, `gatedSource: true`, roles admin, leader, commander. Body carries scope, audience, the six-row annotation table, the paragraph 8 append rule, and the paragraph 3 exclusions. | High |
| 2 | `content/admin/s1g1-ud-mips-transactions.mdx` (route `/admin/s1-g1/records-management/ud-mips-transactions`) | Primary home. The page walks seven steps from source document to EDFR check and never mentions Preparer, Reviewer, Certifier, or certification. Add a "Unit Diary Notes" section and a danger or warning Callout at the top. Insert note duties at Step 5 (submit) and in Quality Control Before Submission. Add a common-error entry for overwritten notes. Add the PAA to `references` and `sourcePolicy` context. | High |
| 3 | `content/admin/pac-ud-mips-storage.mdx` (route `/admin/pac/records-management/ud-mips-storage`) | Step 1 reads "Certify the unit diary" with one sentence of body. Add a Callout stating the certifier annotation precedes certification and the upload clock of 5 working days under MARADMIN 601/24 starts at certification. Keep the two duties distinct. The notes document review. The upload stores key supporting documents. | High |
| 4 | `content/updates/unit-diary-notes-mandatory.mdx` (new) | Changelog entry per the Section 4.6 rule giving every policy-change an entry. See the build plan. | High |
| 5 | `content/admin/s1g1-edfr-processing.mdx` | Add one line stating DFR Notes sit outside the mandate (para 3). A reader who sees "Diary Feedback Report" next to "notes" needs the boundary. Verify the page first, it was not read in full for this analysis. | Medium |
| 6 | `content/admin/s1g1-admin-systems-management-privileged-certifier-account-authorization.mdx` | Certifier accounts now carry a documented-review duty. Add one sentence to the certifier test step or the training step and cite the PAA. The audit finding FP-01 also names `s1g1-admin-systems-management-overview.mdx`. | Medium |
| 7 | `content/admin/s1g1-admin-systems-management-overview.mdx` | Named by FP-01. Line 77 says to verify the certifier list against "the diary certification log" and line 90 describes UD-MIPS as the "cutting and certification system". Add a one-line pointer to the new section on the transactions page. Do not duplicate the annotation table here. | Medium |
| 8 | `content/citations/mctfsprium-20115.mdx` | Defines the Preparer, Reviewer, and Certifier roles. Add a short note stating PAA 03-26 attaches mandatory note duties to each role. Remove the note when the PRIUM update lands and absorbs the text. | Medium |
| 9 | `content/admin/s1g1-audit-internal-controls-overview.mdx` | This page owns the audit and internal controls frame. Add a sentence tying the PAA to the IPA finding as an example of a control fixed by documented review. Keep it to the finding. Do not assert MCAAT inspects the notes, the advisory is silent on inspection. | Low to medium |
| 10 | `content/citations/maradmin-601-24.mdx` | Same audit lineage (IPA findings, KSD storage). A one-line "see also" pointer is optional. Skip if the pac-ud-mips-storage Callout already carries the link. | Low |

## What does NOT belong

- Marine role pages. Enlisted Marines never touch Unit Diary Notes. About 90 marine pages mention UD/MIPS only in the boilerplate "coordinate with your S-1" line. Leave them alone.
- A dedicated leader or commander page. No leader or commander page describes diary preparation or certification today. The admin pages already carry `leader` and `commander` in `roles` and render under those roles. Add a sentence on commander accountability inside the admin page's existing "Coordination with Commander" section rather than authoring a new commander page. A new page would hold one paragraph.
- A standalone Unit Diary Notes page. One advisory, one table, one rule. It fits as a section on the transactions page. Splitting it breaks the reader's flow from submit to certify to upload. Revisit if the PRIUM update adds enough detail to fill a page.
- Disbursing and finance-office procedures. The NFR title also names DTMS entries. The advisory scopes its requirements to UD/MIPS only. Do not write DTMS review procedures from the NFR title. No DTMS control change appears in this text.
- UD/MIPS click-by-click instructions. MISSA owns the tutorial named in paragraph 10. Link to the MISSA portal tile as the source and do not mirror it. A copy goes stale and contradicts the owner.
- Edits to the 63 PRIUM chapter citations or the 80-plus pages tagged UD/MIPS in passing. Pay, allowance, and awards pages mention the diary as a delivery mechanism and say nothing about certification. The PAA does not change their content.
- IGMC and MCAAT checklist JSON under `content/inspections/`. These are sourced from the official checklists. Hand edits would be overwritten and misrepresent the inspector's source. Watch for a checklist revision instead.
- The Research Diary Report. Paragraph 2 cites its certification statement only as the weakness. The advisory prescribes nothing for the report.

## Blind spots

- The authoritative rule is not published yet. Paragraphs 3 and 9 say the MCTFS PRIUM update is "forthcoming". The advisory "provides advance notice and amplifies the forthcoming guidance". The portal should present the PAA as the controlling text now and mark the PRIUM chapter as pending. Re-verify when the PRIUM change posts. Do not guess a chapter number.
- Exact wording versus punctuation. Paragraph 5 uses a hyphen after YYYYMMDD. Paragraphs 6 and 7 and the paragraph 8 example use an en dash. The advisory says the listed annotations are required "at a minimum" but does not say whether character-for-character match is checked. Section 6.1 bans em-dashes in portal copy, so the build should use a plain hyphen and say "match the wording". Ask MISSA whether dash type matters.
- Example conflicts with the certifier text. Paragraph 7 gives the certifier return as "Returned for corrections." The paragraph 8 example reads "Diary returned for corrections". The source contradicts itself. Quote paragraph 7 in the table and flag the variance in a Callout, or ask MISSA.
- Slash spacing. Paragraph 8 says to separate with a forward slash. The example shows a slash with a space on each side. Present the example verbatim.
- Mid-stream diaries. The advisory does not say how to treat a diary prepared before 1 October and certified after. Nothing in the text grants a grace period or requires back-filling. Do not state either way.
- Compliance consequence. The advisory names no inspection item, deadline for verification, or penalty. The portal should not imply MCAAT or IGMC scoring until a checklist cites the PAA.
- "Unit diaries requiring certification". Paragraph 3 limits the mandate to those diaries. The text does not list which diaries skip certification. Do not enumerate exceptions.
- Source access. The MISSA portal sits behind CAC. The text comes from the local archive copy in `E:\GunnyBot\Policies`. `lastVerified` on the new citation reads 2026-10-20 against the archive copy, not an independent pull of the live record. The index shows `attachments: false`, so no companion guide exists in the archive.
- Reviewer scope. Many small S-1 shops skip the Reviewer role. Pages must lead with Preparer and Certifier and mark Reviewer as optional, or readers will think a Reviewer is required.
- Contact details. Paragraph 11 names three POCs with phone numbers and email. Do not copy personal names or numbers into portal copy. Point to MISSA through the existing MISSO case routing page.
- No externalUrl is confirmed. The `paa-02-26` entry links a SharePoint DispForm with an item token. The 03-26 item has sp_id 133, but the token is unknown. Use the MISSA site root from paragraph 10 only if the owner approves it, or omit `externalUrl`, since the entry is gated.

## Build plan

Steps are independent after Step 1. Step 1 must land first because content sync fails on an unknown citation id.

1. Citation entry. Create `content/citations/paa-03-26.mdx`. Fields: `id: "paa-03-26"`, aliases following the `paa-02-26` pattern ("PAA 03-26", "PAA 3-26", "PAA 03/26", "PAA 3/26", "Personnel Administrative Advisory 03-26", "Personnel Admin Advisory 03-26", "PAA 03-26 Unit Diary Notes"), `type: "PAA"`, `number: "03-26"`, publisher HQMC M&RA MISSA, `effectiveDate: "2026-10-01"`, `lastVerified: "2026-10-20"`, `gatedSource: true`, roles admin, leader, commander. Sections: Scope, Audience, Action items (the six annotations and paragraph 8 rule), What does not change (Transaction User Notes, Transaction System Notes, DFR Notes), Pending (PRIUM update, system enhancement). Confirm alias uniqueness through `npm run content:sync`. Note the registry already holds `mctfsprium-20115`, so link rather than duplicate role definitions.
2. Transactions page. Edit `s1g1-ud-mips-transactions.mdx`. Add the Callout, the "Unit Diary Notes" section, the role table, the paragraph 8 append rule with the worked example, one common error, and a Quality Control line. Voice: admin, function-coded, source and paragraph cited inline with `<Citation source="PAA 03-26" />`. Refresh `lastVerified` only after the source check in Step 1.
3. PAC storage page. Edit `pac-ud-mips-storage.mdx` Step 1 as described. Keep MARADMIN 601/24 content untouched.
4. Secondary pages. Apply the one-line pointers to Steps 5 to 9 in the table above. Each edit is independent and optional. Skip Step 10.
5. Updates entry. Create `content/updates/unit-diary-notes-mandatory.mdx`.
   - `slug: "unit-diary-notes-mandatory"`
   - `date: "2026-10-20"` (when the portal reflected it)
   - `effectiveDate: "2026-10-01"` (the gap is honest and stays visible)
   - `kind: "policy-change"`, `impact: "action-required"`
   - `title`: "Unit Diary Notes are mandatory since 1 October"
   - `summary`: one or two sentences. Preparers, Reviewers, and Certifiers add dated notes to every unit diary requiring certification.
   - `roles: ["admin", "leader", "commander"]`
   - `citations: ["paa-03-26", "mctfsprium-20115"]`
   - `affectedPages`: `/admin/s1-g1/records-management/ud-mips-transactions` first, then `/admin/pac/records-management/ud-mips-storage`
   - `supersededBy: null`
   The entry sits inside the 90-day window until about 2027-01-18. Verify exact route strings against `src/generated/role-nav.json` before authoring.
6. Style pass. Check every new and edited file against Section 6 (no em-dashes, semicolons, asterisks, or banned words).
7. Deferred item. Re-verify in 30 days or when MISSA posts the PRIUM change, whichever comes first. If the PRIUM update lands, add a new `policy-change` entry only if it alters the requirement. Otherwise update the citation and Callout in place.

## Verification for when built

- `npm run content:sync` runs clean. Citations count rises by one, updates by one. No schema failure and no unknown citation id.
- `paa-03-26` resolves under every alias, and the reverse index lists the two primary pages plus any secondary pages edited.
- `/updates` renders the new entry under action-required with the effective date shown beside the portal date.
- Grep `content/` for "Unit Diary Notes" returns the citation, both primary pages, and the update. Grep for "paa-03-26" or "PAA 03-26" shows no stray inline citation without a registry hit.
- Each annotation string in the portal matches paragraphs 5, 6, and 7 word for word, apart from the agreed hyphen substitution. The paragraph 8 example matches the source.
- The portal says Reviewer is optional and states the three exclusions from paragraph 3.
- No page names a PRIUM chapter for the pending update.
- No personal contact details from paragraph 11 appear in content.
- `npm run lint` and `npm run build` pass.
- Update audit finding FP-01 status after the build ships.
