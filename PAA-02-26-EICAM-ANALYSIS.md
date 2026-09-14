# PAA 02-26 Applicability Analysis and Build Record

Analyzed 2026-09-14. Subject: Transition of Marine Corps Total Force System
access requests from AutoSAAR to Department of Defense Enterprise Identity,
Credential, and Access Management (E-ICAM). Issued by Headquarters Marine Corps
M&RA, Manpower Information Systems Support Activity. Status: analyzed and built
in the same pass, because three of the four compliance dates fall inside eleven
days of this analysis.

Source material: the advisory text plus nine DISA E-ICAM guides supplied as a
PDF portfolio. The eight child guides are vector-outline screenshots with no
text layer, so they were rendered to page images and read visually. Pages read:
Accessing DoD E-ICAM (4), Requesting User Access (19), Approving User Access
(30), Removing User Access (5), Managing User Identities (9), Continuous
Certification (5), Attachments for Access Requests (4), Searching Access Roles
(2).

## Verdict

Applicable, and urgent. The advisory rewrites the submission mechanism for a
process the portal documents across six admin pages, three video entries, and
two link entries. Every one of those surfaces named AutoSAAR as the live path.
Left alone, the portal would have told Marines to use a retired system three days
after this analysis.

## The four dates

| Date | What happens |
|---|---|
| 17 September 2026 | Last AutoSAAR, email, and locally routed DD Form 2875 submission. Unapproved requests die. |
| 21 September 2026 | E-ICAM required for every create, modify, and revoke. |
| 25 September 2026 | Requestors verify email, phone, supervisor. Supervisors validate role and IA training date. |
| 30 September 2026 | Unvalidated accounts subject to immediate disablement and a fresh request. |

A three-day gap sits between 17 and 21 September with no submission path open.
The gap is in the advisory, not a reading error.

## What the advisory changes, and what it does not

Changes. The method used to submit and process MCTFS end-user access requests.

Does not change. TASO appointment and maintenance, TASO cybersecurity, account
management, oversight, and incident reporting duties. Paragraph 6 carves out the
appointment and establishment process for privileged TASO, Limited Security
Control Account, Zone Control Accessor ID, Division Control Accessor ID, and
Department Control Accessor ID accounts. Those stay under Marine Corps Cyberspace
Operations Group procedures. Paragraph 3 adds a rule of its own. Automated account creation
does not by itself establish need-to-know or entitlement to a role.

The portal had blurred none of this before, but the rewrite had to preserve the
line rather than sweep every mainframe account into E-ICAM.

## What the DISA guides add beyond the advisory

The advisory says "use E-ICAM" and points at the help guide. The help guide
carries operational detail with real failure modes for an S-1 shop.

- One request routes to one approval workflow. Roles spanning applications, or pulling different security manager, Information Owner, or security officer workgroups, need separate requests.
- Attachments upload only at submission. A missed document means cancelling and starting over. E-ICAM discards attachments after approval and is not a document repository, so local copies stay mandatory.
- The approval chain runs Supervisor, Security Manager, Information Owner or Authorizing Official, then Information System Security Manager. A DD Form 577 requirement inserts a 577 approver step. Reject and resubmit is open to every approver except the security manager.
- Recertification is continuous, not annual-only. Authorized roles run 365 days, privileged roles run 90 days. Supervisor holds 10 days, escalates to their supervisor on day 11 who holds 4 days, then the role revokes.
- A supervisor change triggers a Manager Transfer certification campaign.
- 35 calendar days without a login disables the account. Warnings start at day 25.
- E-ICAM cancels a request left incomplete past 20 calendar days.
- Session timeout is 10 minutes. Internet Explorer is unsupported. Signature timestamps render in GMT.

## Changes made

| # | Surface | Action |
|---|---|---|
| 1 | `content/citations/paa-02-26.mdx` | New citation. Type PAA, nine aliases, gated source, full paragraph-by-paragraph action language and the continuing TASO duty list. |
| 2 | `content/admin/s1g1-admin-systems-management-account-provisioning-and-saar-n-processing.mdx` | Rewritten. Danger callout with the four dates, new E-ICAM submission section, approval chain, recertification and account status rules, revised pitfalls and decision points. |
| 3 | `content/admin/s1g1-admin-systems-management-overview.mdx` | Callout replaced, workflow steps 1 and 3, systems list, forms list, pitfall, authority, references. |
| 4 | `content/admin/s1g1-admin-systems-management-privileged-certifier-account-authorization.mdx` | New warning callout drawing the paragraph 6 line, certifier request path, 90-day recertification clock, attachment discipline. |
| 5 | `content/admin/s1g1-admin-systems-management-account-closure-at-detach.mdx` | E-ICAM revocation callout and step, 35-day inactivity trap added to pitfalls, reactivation decision point. |
| 6 | `content/links/dod-e-icam.mdx` | New. Points at the DISA E-ICAM guide site, explains there is no single instance URL. |
| 7 | `content/links/disa-global-service-desk.mdx` | New. Splits technical support from MCTFS functional questions. |
| 8 | `content/links/autosaar.mdx` | Rewritten from stub. Marked retired with the cutoff date. |
| 9 | `content/links/taso-mainframe.mdx` | Rewritten from stub. States what stays under MCCOG. |
| 10 | `content/updates/mctfs-access-moves-to-e-icam.mdx` | New update. Kind policy-change, impact action-required. |
| 11 | `data/videos-marinenet.json` | Three AutoSAAR-era entries relabeled legacy in the human-owned summary field. |
| 12 | `content/citations/mctfs-fos-access-policy-8-0.mdx` | Partial-supersession note at the top. The AutoSAAR submission path is historical, the rest of the MISSA policy stands. |
| 13 | `...account-provisioning-and-saar-n-processing.mdx` (second pass) | Validation walkthrough added from the Quick Start Guide. Five user steps, five supervisor steps, the MCTFS instance address, and the slow-field warning. |
| 14 | `content/links/dod-e-icam.mdx` (second pass) | MCTFS instance address published. Banner colors named so a reader confirms the environment. |
| 15 | `...quarterly-account-review-and-audit.mdx` | Reactivation request now routes through E-ICAM. |
| 16 | `...pes-mol-fitrep-workflow-and-timeline.mdx` | MOL access request now routes through E-ICAM. |
| 17 | `content/citations/secnavinst-5211-5f.mdx` | Need-to-know validation recorded in the E-ICAM approval chain. |

The `supersedes` field on the new citation stays empty on purpose. PAA 02-26
replaces one submission path inside MCTFS FoS Access Policy 8.0, not the policy.
A full supersession marker would misrepresent the relationship, so both entries
carry the partial relationship in prose instead.

## What does NOT belong

- A full E-ICAM click-by-click manual. DISA owns and maintains the guide. The portal documents the Marine Corps process and links out. Mirroring 78 pages of screenshots creates a second source, which goes stale and contradicts the first.
- A dedicated E-ICAM page. The existing account provisioning page is the right home. Moving the content would break `/admin/s1-g1/admin-systems-management/account-provisioning-and-saar-n-processing` for anyone holding the link.
- Deleting the AutoSAAR video pages. Video pages are generated from the catalog and the catalog reflects what MCeLE publishes. The summaries now say legacy. Removing them would misrepresent the source.
- Marine, leader, and commander role pages. The four admin pages carry `relatedRoles` pointers to marine, leader, and commander equivalents, but no such files exist in those collections today. This is an access-provisioning process owned by S-1. The admin lane is correct.

## Blind spots and open questions

- **Finance and disbursing access.** MCTFS FoS Access Policy 8.0 routes 34xx and disbursing access on a paper DD Form 2875 through the TASO to the RFF Operational Management Board, not through AutoSAAR. PAA 02-26 paragraph 4.a covers "MCTFS end user access" without naming the RFF path, and paragraph 4.e bars "locally routed DD Form 2875 processes." Those two readings conflict. The provisioning page now carries this as a decision point directing confirmation with the supporting MISSO. It is not resolved here.
- **E-ICAM URL, resolved 2026-09-14.** The Quick Start Guide names the MCTFS instance at `https://spnfm01-acc.icam.disa.mil/identityiq/home.jsf` and the owner confirmed it as the address the command was issued. Published. One caution stays on the record. The `-acc` segment reads as an acceptance environment, and the DISA guide documents a pink banner for production against an orange banner for pre-production. The link entry names both colors so a reader checks on arrival. Reconfirm with MISSA if accounts validated there still disable after 30 September 2026.
- **The advisory text came from the user, not from the portal.** The MISSA SharePoint sits behind CAC. `lastVerified` on the new citation reads 2026-09-14 against the supplied text and the nine attached guides, not against an independent pull of the source record.
- **IRM 2300.17 and GENADMIN CMC C4 CY 1709-01 are not in the citations registry.** Both are referenced by the advisory and both govern the TASO duties the advisory preserves. Neither resolves today. Worth two stub citations in a follow-on pass.
- **Quick Start Guide, resolved 2026-09-14.** The owner supplied it. It closed the instance-URL gap and added the validation walkthrough, which is now on the provisioning page. Two items it does not carry remain open. The MCTFS role names and the exact Role Source Application filter label are still unknown, so the submission steps describe the filter generically.
- **"577 Approvers" is transcribed as rendered.** The approval guide lists Supervisors, "577 Approvers", Information Owners, and security officers as able to reject and resubmit. The attachments guide independently shows a required-approvals string reading Supervisor, 577, Security Manager, IO AO, ISSM. Two independent appearances make it a real step tied to DD Form 577 rather than a render artifact, and the pages describe it as such.

## Coverage gap found and closed

The first scoped search used a pattern of AutoSAAR, E-ICAM, TASO, and 2875, and
dropped bare SAAR. It returned 15 files. A full-repository grep returned 25. The
ten extra files sorted three ways.

- Three needed edits and received them. Quarterly account review and audit, the PES MOL FITREP workflow, and the SECNAVINST 5211.5F citation. All three used the term SAAR-N for a request now running through E-ICAM.
- One needed nothing. `mco-5239-2b.mdx` names the provisioning page by its title rather than describing a process.
- Six are out of scope. Four reports entries and two video entries covering Enterprise Reports access. Their sources read Cognos Analytics, TFSBI, and TFAS, a separate request lane. PAA 02-26 names MCTFS end-user access only and says nothing about the Cognos and TFSBI path. Flagged rather than changed. Worth a question to MISSA on whether E-ICAM eventually absorbs the reports lane too.

Lesson for the next policy pass. Search the acronym bare as well as in its
compounds, and run the full-repository sweep before scoping down.

## Verification

- `npm run content:sync` clean. Citations 531 to 532, links 127 to 129, updates 17 to 18. No schema failures.
- PAA 02-26 resolves from all four admin pages through the reverse index under nine aliases.
- `npm run lint` 0 errors, 5 pre-existing warnings in `src/hooks`, untouched by this work.
- A style pass over every new and edited file checked the Section 6 constraints. No banned words, no em-dashes, no semicolons, no decorative asterisks.
