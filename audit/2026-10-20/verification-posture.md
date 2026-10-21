# Verification posture and content hygiene

Audit date: 2026-10-20. Branch: claude/application-audit-0bb871. Read-only audit. No content, source, or script in the repo was changed.

## Scope

Frontmatter of every MDX file under content, and every inspection program JSON file under content/inspections, was parsed. Excluded: `content/citations/_stubs/` and `content/inspections/_policy-indexes/`.

Thresholds applied as written in CLAUDE.md section 4.3. Standard collections: aging when lastVerified is more than 12 months before 2026-10-20 (before 2025-10-20), stale when more than 24 months (before 2024-10-20). Inspections: aging before 2026-04-20, stale before 2025-10-20. A page exactly on a cutoff date counts as the younger bucket. `content/videos` is generated and is counted in its own row.

Scored files: 2107 (MDX and inspection program JSON). Inspection program JSON files: 40. Findings: 1596 (High 3, Medium 570, Low 1023).

## Freshness by collection

| Collection | Total | Fresh | Aging | Stale | Missing or unreadable lastVerified | Future-dated | Basis |
|---|---:|---:|---:|---:|---:|---:|---|
| admin | 391 | 391 | 0 | 0 | 0 | 0 | Standard cadence, 12 and 24 months |
| citations | 559 | 557 | 1 | 0 | 0 | 1 | Standard cadence, 12 and 24 months |
| commander | 49 | 49 | 0 | 0 | 0 | 0 | Standard cadence, 12 and 24 months |
| external-tools | 10 | 10 | 0 | 0 | 0 | 0 | Standard cadence, 12 and 24 months |
| inspections | 40 | 40 | 0 | 0 | 0 | 0 | Inspection cadence, 6 and 12 months |
| leader | 89 | 89 | 0 | 0 | 0 | 0 | Standard cadence, 12 and 24 months |
| legal | 4 | 4 | 0 | 0 | 0 | 0 | Standard cadence, 12 and 24 months |
| links | 138 | 137 | 0 | 0 | 0 | 1 | Standard cadence, 12 and 24 months |
| marines | 223 | 221 | 2 | 0 | 0 | 0 | Standard cadence, 12 and 24 months |
| reports | 65 | 65 | 0 | 0 | 0 | 0 | Standard cadence, 12 and 24 months |
| updates | 34 | n/a | n/a | n/a | n/a | n/a | No lastVerified by design. Window rule in Updates window. |
| videos (generated) | 505 | 275 | 230 | 0 | 0 | 0 | Generated. Human-owned lastVerified, standard cadence |
| All | 2107 | 1838 | 233 | 0 | 0 | 2 | |

Inspection program JSON files with track igmc or mcaat share one row. Support JSON files are listed under Out of scope.

## Findings

Headline. Stale pages: 0. Aging pages: 233, of which 230 are generated videos. Future-dated dates: 3 (lastVerified 2, update date 1), all after 2026-10-20. Missing lastVerified: 0. Routeless collections present: 0 of 4. Slug and filename mismatches: 548 MDX files. High finding groups: 2 (date is after 2026-10-20, lastVerified is after 2026-10-20).

Rows group identical issues. Appendix A lists every affected file with its group ID.

| ID | Sev | File | Issue | Evidence |
|---|---|---|---|---|
| VP-01 | High | updates/fy27-cpl-sgt-promotion-guidance-maradmin-502-26.mdx | date is after 2026-10-20 | date 2026-10-21 |
| VP-02 | High | 2 files, first: citations/maradmin-502-26.mdx | lastVerified is after 2026-10-20 | 2 hits. By folder: citations 1, links 1. Example: lastVerified 2026-10-21 |
| VP-03 | Medium | 9 files, first: citations/cjcsm-3150-01b.mdx | Citation without externalUrl and not gatedSource | 9 hits. By folder: MARADMIN 5, MCO 3, OTHER 1. Example: type OTHER, gatedSource not true |
| VP-04 | Medium | videos/how-to-set-alerts-for-new-videos.mdx | durationSeconds missing | key absent or empty |
| VP-05 | Medium | 548 files, first: admin/iandi-active-duty-training.mdx | slug does not match filename | 548 hits. By folder: admin 391, leader 89, commander 49, marines 17, links 2. Example: slug active-duty-training vs file stem iandi-active-duty-training (loader uses frontmatter slug, build does not enforce) |
| VP-06 | Medium | 12 files, first: videos/administrative-separation-process-preparer.mdx | videoUrl not on canonical MCeLE host | 12 hits. By folder: marinenet.marines.mil (retired pattern) 6, https://example.com 5, non-URL value 1. Example: value host: marinenet.marines.mil (retired pattern) |
| VP-07 | Low | content/citations/ | Aging pages: 1 | lastVerified more than 12 months (inspections 6) before 2026-10-20, see Oldest aging list |
| VP-08 | Low | content/marines/ | Aging pages: 2 | lastVerified more than 12 months (inspections 6) before 2026-10-20, see Oldest aging list |
| VP-09 | Low | content/videos/ | Aging pages: 230 | lastVerified more than 12 months (inspections 6) before 2026-10-20, see Oldest aging list |
| VP-10 | Low | 246 files, first: citations/cfr-32-199.mdx | Citation without effectiveDate | 246 hits. By folder: MCO 86, MCTFSPRIUM 63, PAA 42, DD-FORM 10, DODFMR 9, NAVMC 9, OTHER 6, FPM 4, USC 4, DODI 3, NAVMC-FORM 3, SECNAV 3, SECNAVINST 2, CFR 1, MCBUL 1. Example: type CFR |
| VP-11 | Low | 7 files, first: admin/.deleted-s1g1-defense-travel-system-overview.mdx | Hidden soft-deleted or trash file in content tree | 7 hits. By folder: marines 4, citations 2, admin 1. Example: dot-prefixed, skipped by sync-content.mjs, excluded from counts above |
| VP-12 | Low | content/inspections/ | Support JSON files without programNumber | 23 files excluded from program checks, see Out of scope |
| VP-13 | Low | 127 files, first: citations/dod-dts-regulations.mdx | alias repeated inside one entry (build allows) | 127 hits. By folder: citations 127. Example: alias DOD DTS REGULATIONS listed 2 times in dod-dts-regulations |
| VP-14 | Low | 639 files, first: admin/iandi-active-duty-training.mdx | summary over 160 characters | 639 hits. By folder: admin 271, marines 220, leader 83, commander 49, inspections 8, external-tools 5, links 2, legal 1. Example: length 212 |

### Appendix A. Every affected file

| ID | Sev | File | Issue | Evidence |
|---|---|---|---|---|
| VP-01 | High | updates/fy27-cpl-sgt-promotion-guidance-maradmin-502-26.mdx | date is after 2026-10-20 | date 2026-10-21 |
| VP-02 | High | citations/maradmin-502-26.mdx | lastVerified is after 2026-10-20 | lastVerified 2026-10-21 |
| VP-02 | High | links/cutting-scores.mdx | lastVerified is after 2026-10-20 | lastVerified 2026-10-21 |
| VP-03 | Medium | citations/cjcsm-3150-01b.mdx | Citation without externalUrl and not gatedSource | type OTHER, gatedSource not true |
| VP-03 | Medium | citations/maradmin-100-01.mdx | Citation without externalUrl and not gatedSource | type MARADMIN, gatedSource not true |
| VP-03 | Medium | citations/maradmin-111-01.mdx | Citation without externalUrl and not gatedSource | type MARADMIN, gatedSource not true |
| VP-03 | Medium | citations/maradmin-411-01.mdx | Citation without externalUrl and not gatedSource | type MARADMIN, gatedSource not true |
| VP-03 | Medium | citations/maradmin-467-26.mdx | Citation without externalUrl and not gatedSource | type MARADMIN, gatedSource not true |
| VP-03 | Medium | citations/maradmin-571-05.mdx | Citation without externalUrl and not gatedSource | type MARADMIN, gatedSource not true |
| VP-03 | Medium | citations/mco-1100-79.mdx | Citation without externalUrl and not gatedSource | type MCO, gatedSource not true |
| VP-03 | Medium | citations/mco-7220-65.mdx | Citation without externalUrl and not gatedSource | type MCO, gatedSource not true |
| VP-03 | Medium | citations/mco-p6320-13.mdx | Citation without externalUrl and not gatedSource | type MCO, gatedSource not true |
| VP-04 | Medium | videos/how-to-set-alerts-for-new-videos.mdx | durationSeconds missing | key absent or empty |
| VP-05 | Medium | admin/iandi-active-duty-training.mdx | slug does not match filename | slug active-duty-training vs file stem iandi-active-duty-training (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-administrative-actions-misconduct.mdx | slug does not match filename | slug administrative-actions-misconduct vs file stem iandi-administrative-actions-misconduct (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-ados.mdx | slug does not match filename | slug ados vs file stem iandi-ados (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-annual-training-specifics.mdx | slug does not match filename | slug annual-training-specifics vs file stem iandi-annual-training-specifics (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-commissary-exchange-and-qol.mdx | slug does not match filename | slug commissary-exchange-and-qol vs file stem iandi-commissary-exchange-and-qol (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-court-martial-for-reservists.mdx | slug does not match filename | slug court-martial-for-reservists vs file stem iandi-court-martial-for-reservists (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-demobilization-processing.mdx | slug does not match filename | slug demobilization-processing vs file stem iandi-demobilization-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-federal-and-state-benefits.mdx | slug does not match filename | slug federal-and-state-benefits vs file stem iandi-federal-and-state-benefits (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-funeral-honors-duty.mdx | slug does not match filename | slug funeral-honors-duty vs file stem iandi-funeral-honors-duty (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-general-reserve-overview.mdx | slug does not match filename | slug general-reserve-overview vs file stem iandi-general-reserve-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-inactive-duty-overview.mdx | slug does not match filename | slug inactive-duty-overview vs file stem iandi-inactive-duty-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-incentive-programs.mdx | slug does not match filename | slug incentive-programs vs file stem iandi-incentive-programs (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-irr-and-standby-participation.mdx | slug does not match filename | slug irr-and-standby-participation vs file stem iandi-irr-and-standby-participation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-irr-mandatory-muster.mdx | slug does not match filename | slug irr-mandatory-muster vs file stem iandi-irr-mandatory-muster (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-irr-overview.mdx | slug does not match filename | slug irr-overview vs file stem iandi-irr-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-irr-participation.mdx | slug does not match filename | slug irr-participation vs file stem iandi-irr-participation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-irr-recall-and-mobilization.mdx | slug does not match filename | slug irr-recall-and-mobilization vs file stem iandi-irr-recall-and-mobilization (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-irr-transition.mdx | slug does not match filename | slug irr-transition vs file stem iandi-irr-transition (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-lateral-move-mos.mdx | slug does not match filename | slug lateral-move-mos vs file stem iandi-lateral-move-mos (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-line-of-duty-coverage.mdx | slug does not match filename | slug line-of-duty-coverage vs file stem iandi-line-of-duty-coverage (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-loan-repayment-programs.mdx | slug does not match filename | slug loan-repayment-programs vs file stem iandi-loan-repayment-programs (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-mcr-organization.mdx | slug does not match filename | slug mcr-organization vs file stem iandi-mcr-organization (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-medical-board-process.mdx | slug does not match filename | slug medical-board-process vs file stem iandi-medical-board-process (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-medical-hold-and-limdu.mdx | slug does not match filename | slug medical-hold-and-limdu vs file stem iandi-medical-hold-and-limdu (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-medical-standards-overview.mdx | slug does not match filename | slug medical-standards-overview vs file stem iandi-medical-standards-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-mgib-sr.mdx | slug does not match filename | slug mgib-sr vs file stem iandi-mgib-sr (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-mobilization-active-duty-pay.mdx | slug does not match filename | slug mobilization-active-duty-pay vs file stem iandi-mobilization-active-duty-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-mobilization-authorities.mdx | slug does not match filename | slug mobilization-authorities vs file stem iandi-mobilization-authorities (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-mobilization-family-support.mdx | slug does not match filename | slug mobilization-family-support vs file stem iandi-mobilization-family-support (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-mobilization-orders-processing.mdx | slug does not match filename | slug mobilization-orders-processing vs file stem iandi-mobilization-orders-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-muster-duty.mdx | slug does not match filename | slug muster-duty vs file stem iandi-muster-duty (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-naps.mdx | slug does not match filename | slug naps vs file stem iandi-naps (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-njp-for-reservists.mdx | slug does not match filename | slug njp-for-reservists vs file stem iandi-njp-for-reservists (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-nps-enlisted-accessions.mdx | slug does not match filename | slug nps-enlisted-accessions vs file stem iandi-nps-enlisted-accessions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-periodic-health-assessment.mdx | slug does not match filename | slug periodic-health-assessment vs file stem iandi-periodic-health-assessment (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-point-system.mdx | slug does not match filename | slug point-system vs file stem iandi-point-system (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-post-911-gi-bill.mdx | slug does not match filename | slug post-911-gi-bill vs file stem iandi-post-911-gi-bill (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-pre-mobilization-and-tamp.mdx | slug does not match filename | slug pre-mobilization-and-tamp vs file stem iandi-pre-mobilization-and-tamp (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-pre-mobilization-screening.mdx | slug does not match filename | slug pre-mobilization-screening vs file stem iandi-pre-mobilization-screening (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-process-idt-pay.mdx | slug does not match filename | slug process-idt-pay vs file stem iandi-process-idt-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-ps-enlisted-accessions.mdx | slug does not match filename | slug ps-enlisted-accessions vs file stem iandi-ps-enlisted-accessions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-ps-officer-accessions.mdx | slug does not match filename | slug ps-officer-accessions vs file stem iandi-ps-officer-accessions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-rc-medical-care-eligibility.mdx | slug does not match filename | slug rc-medical-care-eligibility vs file stem iandi-rc-medical-care-eligibility (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-ready-reserve.mdx | slug does not match filename | slug ready-reserve vs file stem iandi-ready-reserve (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-reserve-authorities-and-approvals.mdx | slug does not match filename | slug reserve-authorities-and-approvals vs file stem iandi-reserve-authorities-and-approvals (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-reserve-communications-and-reporting.mdx | slug does not match filename | slug reserve-communications-and-reporting vs file stem iandi-reserve-communications-and-reporting (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-reserve-dental-readiness.mdx | slug does not match filename | slug reserve-dental-readiness vs file stem iandi-reserve-dental-readiness (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-reserve-disciplinary-reporting.mdx | slug does not match filename | slug reserve-disciplinary-reporting vs file stem iandi-reserve-disciplinary-reporting (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-reserve-id-cards.mdx | slug does not match filename | slug reserve-id-cards vs file stem iandi-reserve-id-cards (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-reserve-obligation.mdx | slug does not match filename | slug reserve-obligation vs file stem iandi-reserve-obligation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-reserve-promotions.mdx | slug does not match filename | slug reserve-promotions vs file stem iandi-reserve-promotions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-reserve-retirements.mdx | slug does not match filename | slug reserve-retirements vs file stem iandi-reserve-retirements (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-reserve-travel-reimbursement.mdx | slug does not match filename | slug reserve-travel-reimbursement vs file stem iandi-reserve-travel-reimbursement (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-retirement-health-and-id.mdx | slug does not match filename | slug retirement-health-and-id vs file stem iandi-retirement-health-and-id (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-retirement-pay-calculation.mdx | slug does not match filename | slug retirement-pay-calculation vs file stem iandi-retirement-pay-calculation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-rocp-officer-accessions.mdx | slug does not match filename | slug rocp-officer-accessions vs file stem iandi-rocp-officer-accessions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-selres-career-counseling.mdx | slug does not match filename | slug selres-career-counseling vs file stem iandi-selres-career-counseling (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-selres-enlisted-specifics.mdx | slug does not match filename | slug selres-enlisted-specifics vs file stem iandi-selres-enlisted-specifics (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-selres-family-readiness.mdx | slug does not match filename | slug selres-family-readiness vs file stem iandi-selres-family-readiness (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-selres-idt-period-limitations.mdx | slug does not match filename | slug selres-idt-period-limitations vs file stem iandi-selres-idt-period-limitations (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-selres-mobilization-readiness.mdx | slug does not match filename | slug selres-mobilization-readiness vs file stem iandi-selres-mobilization-readiness (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-selres-officer-specifics.mdx | slug does not match filename | slug selres-officer-specifics vs file stem iandi-selres-officer-specifics (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-selres-overview.mdx | slug does not match filename | slug selres-overview vs file stem iandi-selres-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-selres-participation.mdx | slug does not match filename | slug selres-participation vs file stem iandi-selres-participation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-smp-and-plc.mdx | slug does not match filename | slug smp-and-plc vs file stem iandi-smp-and-plc (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-standby-administration.mdx | slug does not match filename | slug standby-administration vs file stem iandi-standby-administration (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-standby-and-retired-reserve.mdx | slug does not match filename | slug standby-and-retired-reserve vs file stem iandi-standby-and-retired-reserve (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-standby-categories.mdx | slug does not match filename | slug standby-categories vs file stem iandi-standby-categories (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-standby-eligibility-and-transfer.mdx | slug does not match filename | slug standby-eligibility-and-transfer vs file stem iandi-standby-eligibility-and-transfer (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-standby-recall-authority.mdx | slug does not match filename | slug standby-recall-authority vs file stem iandi-standby-recall-authority (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-statement-of-understanding.mdx | slug does not match filename | slug statement-of-understanding vs file stem iandi-statement-of-understanding (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-stop-loss-and-mobilization-hold.mdx | slug does not match filename | slug stop-loss-and-mobilization-hold vs file stem iandi-stop-loss-and-mobilization-hold (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-survivor-benefit-plan.mdx | slug does not match filename | slug survivor-benefit-plan vs file stem iandi-survivor-benefit-plan (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-tricare-for-life.mdx | slug does not match filename | slug tricare-for-life vs file stem iandi-tricare-for-life (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-tricare-reserve-select.mdx | slug does not match filename | slug tricare-reserve-select vs file stem iandi-tricare-reserve-select (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-tricare-retired-reserve.mdx | slug does not match filename | slug tricare-retired-reserve vs file stem iandi-tricare-retired-reserve (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-tuition-assistance.mdx | slug does not match filename | slug tuition-assistance vs file stem iandi-tuition-assistance (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-ucmj-authority.mdx | slug does not match filename | slug ucmj-authority vs file stem iandi-ucmj-authority (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-ucmj-jurisdiction.mdx | slug does not match filename | slug ucmj-jurisdiction vs file stem iandi-ucmj-jurisdiction (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-unsatisfactory-participation.mdx | slug does not match filename | slug unsatisfactory-participation vs file stem iandi-unsatisfactory-participation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-utilization-categories.mdx | slug does not match filename | slug utilization-categories vs file stem iandi-utilization-categories (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/iandi-va-home-loan-and-benefits.mdx | slug does not match filename | slug va-home-loan-and-benefits vs file stem iandi-va-home-loan-and-benefits (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-adoption-expense-reimbursement.mdx | slug does not match filename | slug adoption-expense-reimbursement vs file stem pac-adoption-expense-reimbursement (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-bah-overview.mdx | slug does not match filename | slug bah-overview vs file stem pac-bah-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-bah-pcs-and-tdy.mdx | slug does not match filename | slug bah-pcs-and-tdy vs file stem pac-bah-pcs-and-tdy (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-bah-special-categories.mdx | slug does not match filename | slug bah-special-categories vs file stem pac-bah-special-categories (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-bah-with-dependents.mdx | slug does not match filename | slug bah-with-dependents vs file stem pac-bah-with-dependents (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-bah-without-dependents.mdx | slug does not match filename | slug bah-without-dependents vs file stem pac-bah-without-dependents (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-bas-overview.mdx | slug does not match filename | slug bas-overview vs file stem pac-bas-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-bas-special-categories.mdx | slug does not match filename | slug bas-special-categories vs file stem pac-bas-special-categories (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-combat-zone-tax-exclusion.mdx | slug does not match filename | slug combat-zone-tax-exclusion vs file stem pac-combat-zone-tax-exclusion (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-cost-of-living-allowance.mdx | slug does not match filename | slug cost-of-living-allowance vs file stem pac-cost-of-living-allowance (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-disability-severance-pay.mdx | slug does not match filename | slug disability-severance-pay vs file stem pac-disability-severance-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-family-separation-allowance.mdx | slug does not match filename | slug family-separation-allowance vs file stem pac-family-separation-allowance (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-flight-pay.mdx | slug does not match filename | slug flight-pay vs file stem pac-flight-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-foreign-language-proficiency-pay.mdx | slug does not match filename | slug foreign-language-proficiency-pay vs file stem pac-foreign-language-proficiency-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-hardship-duty-pay.mdx | slug does not match filename | slug hardship-duty-pay vs file stem pac-hardship-duty-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-hazardous-duty-incentive-pay.mdx | slug does not match filename | slug hazardous-duty-incentive-pay vs file stem pac-hazardous-duty-incentive-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-hostile-fire-imminent-danger-pay.mdx | slug does not match filename | slug hostile-fire-imminent-danger-pay vs file stem pac-hostile-fire-imminent-danger-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-inbound-management-ipac-join-transaction.mdx | slug does not match filename | slug ipac-join-transaction vs file stem pac-inbound-management-ipac-join-transaction (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-iram-overview.mdx | slug does not match filename | slug iram-overview vs file stem pac-iram-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-navmc-10922-processing.mdx | slug does not match filename | slug navmc-10922-processing vs file stem pac-navmc-10922-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-ompf-document-categories.mdx | slug does not match filename | slug ompf-document-categories vs file stem pac-ompf-document-categories (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-ompf-overview.mdx | slug does not match filename | slug ompf-overview vs file stem pac-ompf-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-ompf-submission.mdx | slug does not match filename | slug ompf-submission vs file stem pac-ompf-submission (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-pay-debts-and-waivers.mdx | slug does not match filename | slug pay-debts-and-waivers vs file stem pac-pay-debts-and-waivers (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-personnel-record-audit.mdx | slug does not match filename | slug personnel-record-audit vs file stem pac-personnel-record-audit (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-records-disposition.mdx | slug does not match filename | slug records-disposition vs file stem pac-records-disposition (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-sea-pay.mdx | slug does not match filename | slug sea-pay vs file stem pac-sea-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-separation-pay.mdx | slug does not match filename | slug separation-pay vs file stem pac-separation-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-special-duty-assignment-pay.mdx | slug does not match filename | slug special-duty-assignment-pay vs file stem pac-special-duty-assignment-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/pac-ud-mips-storage.mdx | slug does not match filename | slug ud-mips-storage vs file stem pac-ud-mips-storage (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-absentee-deserter-confinement-apprehension-and-return-to-military-control.mdx | slug does not match filename | slug apprehension-and-return-to-military-control vs file stem s1g1-absentee-deserter-confinement-apprehension-and-return-to-military-control (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-absentee-deserter-confinement-clemency-and-parole-administration.mdx | slug does not match filename | slug clemency-and-parole-administration vs file stem s1g1-absentee-deserter-confinement-clemency-and-parole-administration (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-absentee-deserter-confinement-confinement-administration.mdx | slug does not match filename | slug confinement-administration vs file stem s1g1-absentee-deserter-confinement-confinement-administration (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-absentee-deserter-confinement-deserter-declaration-and-dd-553-processing.mdx | slug does not match filename | slug deserter-declaration-and-dd-553-processing vs file stem s1g1-absentee-deserter-confinement-deserter-declaration-and-dd-553-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-absentee-deserter-confinement-mcacc-coordination-and-civil-liaison.mdx | slug does not match filename | slug mcacc-coordination-and-civil-liaison vs file stem s1g1-absentee-deserter-confinement-mcacc-coordination-and-civil-liaison (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-absentee-deserter-confinement-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-absentee-deserter-confinement-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-absentee-deserter-confinement-pay-reconciliation-for-ua-deserter-and-confined-marines.mdx | slug does not match filename | slug pay-reconciliation-for-ua-deserter-and-confined-marines vs file stem s1g1-absentee-deserter-confinement-pay-reconciliation-for-ua-deserter-and-confined-marines (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-absentee-deserter-confinement-unauthorized-absence-tracking-and-reporting.mdx | slug does not match filename | slug unauthorized-absence-tracking-and-reporting vs file stem s1g1-absentee-deserter-confinement-unauthorized-absence-tracking-and-reporting (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-systems-management-account-closure-at-detach.mdx | slug does not match filename | slug account-closure-at-detach vs file stem s1g1-admin-systems-management-account-closure-at-detach (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-systems-management-account-provisioning-and-saar-n-processing.mdx | slug does not match filename | slug account-provisioning-and-saar-n-processing vs file stem s1g1-admin-systems-management-account-provisioning-and-saar-n-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-systems-management-misso-support-case-routing.mdx | slug does not match filename | slug misso-support-case-routing vs file stem s1g1-admin-systems-management-misso-support-case-routing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-systems-management-mol-administrator-permissions-management.mdx | slug does not match filename | slug mol-administrator-permissions-management vs file stem s1g1-admin-systems-management-mol-administrator-permissions-management (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-systems-management-new-system-release-onboarding.mdx | slug does not match filename | slug new-system-release-onboarding vs file stem s1g1-admin-systems-management-new-system-release-onboarding (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-systems-management-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-admin-systems-management-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-systems-management-privacy-act-and-hipaa-in-system-use.mdx | slug does not match filename | slug privacy-act-and-hipaa-in-system-use vs file stem s1g1-admin-systems-management-privacy-act-and-hipaa-in-system-use (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-systems-management-privileged-certifier-account-authorization.mdx | slug does not match filename | slug privileged-certifier-account-authorization vs file stem s1g1-admin-systems-management-privileged-certifier-account-authorization (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-systems-management-rapids-and-cac-administration.mdx | slug does not match filename | slug rapids-and-cac-administration vs file stem s1g1-admin-systems-management-rapids-and-cac-administration (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-systems-management-system-outage-and-backup-processing.mdx | slug does not match filename | slug system-outage-and-backup-processing vs file stem s1g1-admin-systems-management-system-outage-and-backup-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-aar-conduct-and-documentation.mdx | slug does not match filename | slug aar-conduct-and-documentation vs file stem s1g1-admin-training-sustainment-aar-conduct-and-documentation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-annual-metl-review-and-update.mdx | slug does not match filename | slug annual-metl-review-and-update vs file stem s1g1-admin-training-sustainment-annual-metl-review-and-update (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-combat-readiness-percentage-crp-calculation-and-reporting.mdx | slug does not match filename | slug combat-readiness-percentage-crp-calculation-and-reporting vs file stem s1g1-admin-training-sustainment-combat-readiness-percentage-crp-calculation-and-reporting (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-commanders-training-guidance-publication.mdx | slug does not match filename | slug commanders-training-guidance-publication vs file stem s1g1-admin-training-sustainment-commanders-training-guidance-publication (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-designation-of-utm-roles-and-evaluators-in-writing.mdx | slug does not match filename | slug designation-of-utm-roles-and-evaluators-in-writing vs file stem s1g1-admin-training-sustainment-designation-of-utm-roles-and-evaluators-in-writing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-evaluator-qualifications-and-conduct-of-evaluations.mdx | slug does not match filename | slug evaluator-qualifications-and-conduct-of-evaluations vs file stem s1g1-admin-training-sustainment-evaluator-qualifications-and-conduct-of-evaluations (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-high-risk-training-hrt-risk-assessment.mdx | slug does not match filename | slug high-risk-training-hrt-risk-assessment vs file stem s1g1-admin-training-sustainment-high-risk-training-hrt-risk-assessment (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-mctims-calendar-documentation-requirements.mdx | slug does not match filename | slug mctims-calendar-documentation-requirements vs file stem s1g1-admin-training-sustainment-mctims-calendar-documentation-requirements (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-admin-training-sustainment-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-service-directed-and-unit-directed-training-requirements.mdx | slug does not match filename | slug service-directed-and-unit-directed-training-requirements vs file stem s1g1-admin-training-sustainment-service-directed-and-unit-directed-training-requirements (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-sustainment-interval-tracking-and-currency.mdx | slug does not match filename | slug sustainment-interval-tracking-and-currency vs file stem s1g1-admin-training-sustainment-sustainment-interval-tracking-and-currency (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-tr-event-coding-and-structure.mdx | slug does not match filename | slug tr-event-coding-and-structure vs file stem s1g1-admin-training-sustainment-tr-event-coding-and-structure (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-training-exceptions-defer-waive-delinquent.mdx | slug does not match filename | slug training-exceptions-defer-waive-delinquent vs file stem s1g1-admin-training-sustainment-training-exceptions-defer-waive-delinquent (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-training-plan-submission-and-hhq-approval.mdx | slug does not match filename | slug training-plan-submission-and-hhq-approval vs file stem s1g1-admin-training-sustainment-training-plan-submission-and-hhq-approval (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-admin-training-sustainment-utm-roles-and-functions.mdx | slug does not match filename | slug utm-roles-and-functions vs file stem s1g1-admin-training-sustainment-utm-roles-and-functions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-audit-internal-controls-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-audit-internal-controls-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-audit-internal-controls-quarterly-account-review-and-audit.mdx | slug does not match filename | slug quarterly-account-review-and-audit vs file stem s1g1-audit-internal-controls-quarterly-account-review-and-audit (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-audit-internal-controls-update-and-extract-cycle-management.mdx | slug does not match filename | slug update-and-extract-cycle-management vs file stem s1g1-audit-internal-controls-update-and-extract-cycle-management (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-casualty-affairs-benefits-and-entitlements.mdx | slug does not match filename | slug benefits-and-entitlements vs file stem s1g1-casualty-affairs-benefits-and-entitlements (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-casualty-affairs-caco-assignment.mdx | slug does not match filename | slug caco-assignment vs file stem s1g1-casualty-affairs-caco-assignment (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-casualty-affairs-combat-casualty-operations-center.mdx | slug does not match filename | slug combat-casualty-operations-center vs file stem s1g1-casualty-affairs-combat-casualty-operations-center (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-casualty-affairs-long-term-assistance-program.mdx | slug does not match filename | slug long-term-assistance-program vs file stem s1g1-casualty-affairs-long-term-assistance-program (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-casualty-affairs-military-funeral-honors.mdx | slug does not match filename | slug military-funeral-honors vs file stem s1g1-casualty-affairs-military-funeral-honors (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-casualty-affairs-mortuary-affairs.mdx | slug does not match filename | slug mortuary-affairs vs file stem s1g1-casualty-affairs-mortuary-affairs (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-casualty-affairs-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-casualty-affairs-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-casualty-affairs-pcr-processing.mdx | slug does not match filename | slug pcr-processing vs file stem s1g1-casualty-affairs-pcr-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-casualty-affairs-pnok-notification.mdx | slug does not match filename | slug pnok-notification vs file stem s1g1-casualty-affairs-pnok-notification (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-casualty-affairs-readiness-support-program.mdx | slug does not match filename | slug readiness-support-program vs file stem s1g1-casualty-affairs-readiness-support-program (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-civilian-awards-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-civilian-awards-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-civilian-awards-sharepoint-submission.mdx | slug does not match filename | slug sharepoint-submission vs file stem s1g1-civilian-awards-sharepoint-submission (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-command-investigations-command-investigation-type-one.mdx | slug does not match filename | slug command-investigation-type-one vs file stem s1g1-command-investigations-command-investigation-type-one (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-command-investigations-court-of-inquiry-type-three.mdx | slug does not match filename | slug court-of-inquiry-type-three vs file stem s1g1-command-investigations-court-of-inquiry-type-three (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-command-investigations-death-cases-and-special-considerations.mdx | slug does not match filename | slug death-cases-and-special-considerations vs file stem s1g1-command-investigations-death-cases-and-special-considerations (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-command-investigations-evidence-witnesses-and-warnings.mdx | slug does not match filename | slug evidence-witnesses-and-warnings vs file stem s1g1-command-investigations-evidence-witnesses-and-warnings (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-command-investigations-findings-opinions-recommendations-and-report-format.mdx | slug does not match filename | slug findings-opinions-recommendations-and-report-format vs file stem s1g1-command-investigations-findings-opinions-recommendations-and-report-format (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-command-investigations-line-of-duty-and-misconduct-determinations.mdx | slug does not match filename | slug line-of-duty-and-misconduct-determinations vs file stem s1g1-command-investigations-line-of-duty-and-misconduct-determinations (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-command-investigations-litigation-report-investigation-type-two.mdx | slug does not match filename | slug litigation-report-investigation-type-two vs file stem s1g1-command-investigations-litigation-report-investigation-type-two (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-command-investigations-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-command-investigations-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-command-investigations-preliminary-inquiry-and-command-options.mdx | slug does not match filename | slug preliminary-inquiry-and-command-options vs file stem s1g1-command-investigations-preliminary-inquiry-and-command-options (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-congressional-inquiries-constituent-inquiry-processing.mdx | slug does not match filename | slug constituent-inquiry-processing vs file stem s1g1-congressional-inquiries-constituent-inquiry-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-congressional-inquiries-foia-release-on-inquiries.mdx | slug does not match filename | slug foia-release-on-inquiries vs file stem s1g1-congressional-inquiries-foia-release-on-inquiries (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-congressional-inquiries-hac-surveys-and-investigations-staff-visits.mdx | slug does not match filename | slug hac-surveys-and-investigations-staff-visits vs file stem s1g1-congressional-inquiries-hac-surveys-and-investigations-staff-visits (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-congressional-inquiries-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-congressional-inquiries-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-deployments-exercises-operations-deployment-planning-and-execution.mdx | slug does not match filename | slug deployment-planning-and-execution vs file stem s1g1-deployments-exercises-operations-deployment-planning-and-execution (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-deployments-exercises-operations-drrs-and-readiness-reporting.mdx | slug does not match filename | slug drrs-and-readiness-reporting vs file stem s1g1-deployments-exercises-operations-drrs-and-readiness-reporting (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-deployments-exercises-operations-exercise-and-training-coordination.mdx | slug does not match filename | slug exercise-and-training-coordination vs file stem s1g1-deployments-exercises-operations-exercise-and-training-coordination (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-deployments-exercises-operations-global-force-management.mdx | slug does not match filename | slug global-force-management vs file stem s1g1-deployments-exercises-operations-global-force-management (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-deployments-exercises-operations-individual-augment-and-tasking.mdx | slug does not match filename | slug individual-augment-and-tasking vs file stem s1g1-deployments-exercises-operations-individual-augment-and-tasking (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-deployments-exercises-operations-magtf-and-meu-operations.mdx | slug does not match filename | slug magtf-and-meu-operations vs file stem s1g1-deployments-exercises-operations-magtf-and-meu-operations (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-deployments-exercises-operations-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-deployments-exercises-operations-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-deployments-exercises-operations-perstempo-reporting-and-waivers.mdx | slug does not match filename | slug perstempo-reporting-and-waivers vs file stem s1g1-deployments-exercises-operations-perstempo-reporting-and-waivers (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-deployments-exercises-operations-pre-deployment-and-redeployment.mdx | slug does not match filename | slug pre-deployment-and-redeployment vs file stem s1g1-deployments-exercises-operations-pre-deployment-and-redeployment (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-directives-management-bulletins-and-message-bulletins.mdx | slug does not match filename | slug bulletins-and-message-bulletins vs file stem s1g1-directives-management-bulletins-and-message-bulletins (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-directives-management-change-transmittals-and-page-replacements.mdx | slug does not match filename | slug change-transmittals-and-page-replacements vs file stem s1g1-directives-management-change-transmittals-and-page-replacements (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-directives-management-directives-control-point-and-files.mdx | slug does not match filename | slug directives-control-point-and-files vs file stem s1g1-directives-management-directives-control-point-and-files (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-directives-management-joint-directives.mdx | slug does not match filename | slug joint-directives vs file stem s1g1-directives-management-joint-directives (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-directives-management-marine-corps-orders.mdx | slug does not match filename | slug marine-corps-orders vs file stem s1g1-directives-management-marine-corps-orders (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-directives-management-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-directives-management-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-directives-management-paragraph-numbering-and-format.mdx | slug does not match filename | slug paragraph-numbering-and-format vs file stem s1g1-directives-management-paragraph-numbering-and-format (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-directives-management-periodic-review-and-cancellation.mdx | slug does not match filename | slug periodic-review-and-cancellation vs file stem s1g1-directives-management-periodic-review-and-cancellation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-directives-management-references-enclosures-and-reports.mdx | slug does not match filename | slug references-enclosures-and-reports vs file stem s1g1-directives-management-references-enclosures-and-reports (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-directives-management-staffing-coordination-and-signature-authority.mdx | slug does not match filename | slug staffing-coordination-and-signature-authority vs file stem s1g1-directives-management-staffing-coordination-and-signature-authority (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-dts-appointments-and-dd577.mdx | slug does not match filename | slug appointments-and-dd577 vs file stem s1g1-dts-appointments-and-dd577 (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-dts-authorizations-and-orders-creation.mdx | slug does not match filename | slug authorizations-and-orders-creation vs file stem s1g1-dts-authorizations-and-orders-creation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-dts-check-in-checkout-and-profile-management.mdx | slug does not match filename | slug check-in-checkout-and-profile-management vs file stem s1g1-dts-check-in-checkout-and-profile-management (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-dts-debt-management-and-collection.mdx | slug does not match filename | slug debt-management-and-collection vs file stem s1g1-dts-debt-management-and-collection (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-dts-gtcc-integration.mdx | slug does not match filename | slug gtcc-integration vs file stem s1g1-dts-gtcc-integration (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-dts-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-dts-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-dts-reports-and-reconciliation.mdx | slug does not match filename | slug reports-and-reconciliation vs file stem s1g1-dts-reports-and-reconciliation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-dts-training-and-certifying-officer-legislation.mdx | slug does not match filename | slug training-and-certifying-officer-legislation vs file stem s1g1-dts-training-and-certifying-officer-legislation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-dts-vouchers-and-post-payment-review.mdx | slug does not match filename | slug vouchers-and-post-payment-review vs file stem s1g1-dts-vouchers-and-post-payment-review (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-edfr-processing.mdx | slug does not match filename | slug edfr-processing vs file stem s1g1-edfr-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-esr-management.mdx | slug does not match filename | slug esr-management vs file stem s1g1-esr-management (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-gtccp-apc-appointment-and-duties.mdx | slug does not match filename | slug apc-appointment-and-duties vs file stem s1g1-gtccp-apc-appointment-and-duties (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-gtccp-cardholder-eligibility-and-application.mdx | slug does not match filename | slug cardholder-eligibility-and-application vs file stem s1g1-gtccp-cardholder-eligibility-and-application (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-gtccp-cba-management.mdx | slug does not match filename | slug cba-management vs file stem s1g1-gtccp-cba-management (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-gtccp-delinquency-management.mdx | slug does not match filename | slug delinquency-management vs file stem s1g1-gtccp-delinquency-management (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-gtccp-mandatory-use-and-exemptions.mdx | slug does not match filename | slug mandatory-use-and-exemptions vs file stem s1g1-gtccp-mandatory-use-and-exemptions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-gtccp-misuse-abuse-fraud-and-visa-intellilink.mdx | slug does not match filename | slug misuse-abuse-fraud-and-visa-intellilink vs file stem s1g1-gtccp-misuse-abuse-fraud-and-visa-intellilink (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-gtccp-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-gtccp-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-gtccp-reimbursement-split-disbursement-and-cardholder-responsibilities.mdx | slug does not match filename | slug reimbursement-split-disbursement-and-cardholder-responsibilities vs file stem s1g1-gtccp-reimbursement-split-disbursement-and-cardholder-responsibilities (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-gtccp-reports-and-program-review.mdx | slug does not match filename | slug reports-and-program-review vs file stem s1g1-gtccp-reports-and-program-review (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inbound-management-edfr-and-roster-reconciliation.mdx | slug does not match filename | slug edfr-and-roster-reconciliation vs file stem s1g1-inbound-management-edfr-and-roster-reconciliation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inbound-management-mctfs-join-and-ksd-upload.mdx | slug does not match filename | slug mctfs-join-and-ksd-upload vs file stem s1g1-inbound-management-mctfs-join-and-ksd-upload (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inbound-management-ompf-and-srb-receipt.mdx | slug does not match filename | slug ompf-and-srb-receipt vs file stem s1g1-inbound-management-ompf-and-srb-receipt (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inbound-management-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-inbound-management-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inbound-management-pay-starts-and-allowance-initiation.mdx | slug does not match filename | slug pay-starts-and-allowance-initiation vs file stem s1g1-inbound-management-pay-starts-and-allowance-initiation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inbound-management-sponsor-handoff-and-welcome-aboard.mdx | slug does not match filename | slug sponsor-handoff-and-welcome-aboard vs file stem s1g1-inbound-management-sponsor-handoff-and-welcome-aboard (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inbound-management-unit-check-in-procedures.mdx | slug does not match filename | slug unit-check-in-procedures vs file stem s1g1-inbound-management-unit-check-in-procedures (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inspections-cgip-staff-support.mdx | slug does not match filename | slug inspections-cgip-staff-support vs file stem s1g1-inspections-cgip-staff-support (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inspections-evidence-binder.mdx | slug does not match filename | slug inspections-evidence-binder vs file stem s1g1-inspections-evidence-binder (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inspections-self-assessment-cycle.mdx | slug does not match filename | slug inspections-self-assessment-cycle vs file stem s1g1-inspections-self-assessment-cycle (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-inspections-support-overview.mdx | slug does not match filename | slug inspections-support-overview vs file stem s1g1-inspections-support-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-administrative-absence.mdx | slug does not match filename | slug administrative-absence vs file stem s1g1-leave-liberty-and-administrative-absence-administrative-absence (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-annual-leave-processing.mdx | slug does not match filename | slug annual-leave-processing vs file stem s1g1-leave-liberty-and-administrative-absence-annual-leave-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-appellate-leave.mdx | slug does not match filename | slug appellate-leave vs file stem s1g1-leave-liberty-and-administrative-absence-appellate-leave (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-convalescent-leave.mdx | slug does not match filename | slug convalescent-leave vs file stem s1g1-leave-liberty-and-administrative-absence-convalescent-leave (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-emergency-leave-processing.mdx | slug does not match filename | slug emergency-leave-processing vs file stem s1g1-leave-liberty-and-administrative-absence-emergency-leave-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-environmental-and-morale-leave.mdx | slug does not match filename | slug environmental-and-morale-leave vs file stem s1g1-leave-liberty-and-administrative-absence-environmental-and-morale-leave (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-leave-check-out-and-check-in.mdx | slug does not match filename | slug leave-check-out-and-check-in vs file stem s1g1-leave-liberty-and-administrative-absence-leave-check-out-and-check-in (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-leave-in-conjunction-with-pcs.mdx | slug does not match filename | slug leave-in-conjunction-with-pcs vs file stem s1g1-leave-liberty-and-administrative-absence-leave-in-conjunction-with-pcs (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-liberty-limits-and-passes.mdx | slug does not match filename | slug liberty-limits-and-passes vs file stem s1g1-leave-liberty-and-administrative-absence-liberty-limits-and-passes (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-leave-liberty-and-administrative-absence-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-post-deployment-mobilization-respite-program.mdx | slug does not match filename | slug post-deployment-mobilization-respite-program vs file stem s1g1-leave-liberty-and-administrative-absence-post-deployment-mobilization-respite-program (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-rr-leave-programs.mdx | slug does not match filename | slug rr-leave-programs vs file stem s1g1-leave-liberty-and-administrative-absence-rr-leave-programs (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-special-leave-accrual.mdx | slug does not match filename | slug special-leave-accrual vs file stem s1g1-leave-liberty-and-administrative-absence-special-leave-accrual (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-leave-liberty-and-administrative-absence-terminal-leave-processing.mdx | slug does not match filename | slug terminal-leave-processing vs file stem s1g1-leave-liberty-and-administrative-absence-terminal-leave-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-legal-administration-administrative-investigations.mdx | slug does not match filename | slug administrative-investigations vs file stem s1g1-legal-administration-administrative-investigations (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-legal-administration-administrative-separations-legal-review.mdx | slug does not match filename | slug administrative-separations-legal-review vs file stem s1g1-legal-administration-administrative-separations-legal-review (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-legal-administration-courts-martial-administration.mdx | slug does not match filename | slug courts-martial-administration vs file stem s1g1-legal-administration-courts-martial-administration (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-legal-administration-criminal-justice-information-reporting.mdx | slug does not match filename | slug criminal-justice-information-reporting vs file stem s1g1-legal-administration-criminal-justice-information-reporting (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-legal-administration-legal-files-and-records-management.mdx | slug does not match filename | slug legal-files-and-records-management vs file stem s1g1-legal-administration-legal-files-and-records-management (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-legal-administration-nonjudicial-punishment-upb.mdx | slug does not match filename | slug nonjudicial-punishment-upb vs file stem s1g1-legal-administration-nonjudicial-punishment-upb (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-legal-administration-officer-misconduct-and-discipline.mdx | slug does not match filename | slug officer-misconduct-and-discipline vs file stem s1g1-legal-administration-officer-misconduct-and-discipline (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-legal-administration-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-legal-administration-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-legal-administration-pretrial-confinement-and-restriction.mdx | slug does not match filename | slug pretrial-confinement-and-restriction vs file stem s1g1-legal-administration-pretrial-confinement-and-restriction (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-limited-duty-expanded-permanent-limited-duty.mdx | slug does not match filename | slug expanded-permanent-limited-duty vs file stem s1g1-limited-duty-expanded-permanent-limited-duty (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-limited-duty-light-duty.mdx | slug does not match filename | slug light-duty vs file stem s1g1-limited-duty-light-duty (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-limited-duty-limdu-board-and-policy.mdx | slug does not match filename | slug limdu-board-and-policy vs file stem s1g1-limited-duty-limdu-board-and-policy (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-limited-duty-medical-extension.mdx | slug does not match filename | slug medical-extension vs file stem s1g1-limited-duty-medical-extension (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-limited-duty-operational-restrictions.mdx | slug does not match filename | slug operational-restrictions vs file stem s1g1-limited-duty-operational-restrictions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-limited-duty-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-limited-duty-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-limited-duty-permanent-limited-duty.mdx | slug does not match filename | slug permanent-limited-duty vs file stem s1g1-limited-duty-permanent-limited-duty (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-limited-duty-unit-responsibilities-and-re-evaluation.mdx | slug does not match filename | slug unit-responsibilities-and-re-evaluation vs file stem s1g1-limited-duty-unit-responsibilities-and-re-evaluation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-member-to-member-audit.mdx | slug does not match filename | slug member-to-member-audit vs file stem s1g1-member-to-member-audit (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-awards-award-nomination-preparation.mdx | slug does not match filename | slug award-nomination-preparation vs file stem s1g1-military-awards-award-nomination-preparation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-awards-awards-board-process.mdx | slug does not match filename | slug awards-board-process vs file stem s1g1-military-awards-awards-board-process (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-awards-foreign-awards-processing.mdx | slug does not match filename | slug foreign-awards-processing vs file stem s1g1-military-awards-foreign-awards-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-awards-hqmc-aps-submission.mdx | slug does not match filename | slug hqmc-aps-submission vs file stem s1g1-military-awards-hqmc-aps-submission (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-awards-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-military-awards-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-awards-presentation-initial-issue-and-display.mdx | slug does not match filename | slug presentation-initial-issue-and-display vs file stem s1g1-military-awards-presentation-initial-issue-and-display (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-awards-unit-awards-and-streamers.mdx | slug does not match filename | slug unit-awards-and-streamers vs file stem s1g1-military-awards-unit-awards-and-streamers (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-awards-verification-of-awards.mdx | slug does not match filename | slug verification-of-awards vs file stem s1g1-military-awards-verification-of-awards (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-pay-processing-advance-pay-and-emergency-payments.mdx | slug does not match filename | slug advance-pay-and-emergency-payments vs file stem s1g1-military-pay-processing-advance-pay-and-emergency-payments (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-pay-processing-allotments-and-payroll-deductions.mdx | slug does not match filename | slug allotments-and-payroll-deductions vs file stem s1g1-military-pay-processing-allotments-and-payroll-deductions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-pay-processing-allowances-bah-bas-and-uniforms.mdx | slug does not match filename | slug allowances-bah-bas-and-uniforms vs file stem s1g1-military-pay-processing-allowances-bah-bas-and-uniforms (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-pay-processing-casualty-deceased-and-incompetent-pay.mdx | slug does not match filename | slug casualty-deceased-and-incompetent-pay vs file stem s1g1-military-pay-processing-casualty-deceased-and-incompetent-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-pay-processing-civilian-pay-coordination.mdx | slug does not match filename | slug civilian-pay-coordination vs file stem s1g1-military-pay-processing-civilian-pay-coordination (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-pay-processing-court-martial-njp-and-bankruptcy.mdx | slug does not match filename | slug court-martial-njp-and-bankruptcy vs file stem s1g1-military-pay-processing-court-martial-njp-and-bankruptcy (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-pay-processing-direct-deposit-administration.mdx | slug does not match filename | slug direct-deposit-administration vs file stem s1g1-military-pay-processing-direct-deposit-administration (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-pay-processing-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-military-pay-processing-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-pay-processing-tax-withholding-and-fica.mdx | slug does not match filename | slug tax-withholding-and-fica vs file stem s1g1-military-pay-processing-tax-withholding-and-fica (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-military-pay-processing-tricare-dental-sgli-and-savings.mdx | slug does not match filename | slug tricare-dental-sgli-and-savings vs file stem s1g1-military-pay-processing-tricare-dental-sgli-and-savings (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-naval-correspondence-messages-business-and-multiple-address-letters.mdx | slug does not match filename | slug business-and-multiple-address-letters vs file stem s1g1-naval-correspondence-messages-business-and-multiple-address-letters (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-naval-correspondence-messages-correspondence-register-and-filing.mdx | slug does not match filename | slug correspondence-register-and-filing vs file stem s1g1-naval-correspondence-messages-correspondence-register-and-filing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-naval-correspondence-messages-electronic-mail-and-classification.mdx | slug does not match filename | slug electronic-mail-and-classification vs file stem s1g1-naval-correspondence-messages-electronic-mail-and-classification (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-naval-correspondence-messages-memorandum-and-endorsements.mdx | slug does not match filename | slug memorandum-and-endorsements vs file stem s1g1-naval-correspondence-messages-memorandum-and-endorsements (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-naval-correspondence-messages-naval-letter.mdx | slug does not match filename | slug naval-letter vs file stem s1g1-naval-correspondence-messages-naval-letter (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-naval-correspondence-messages-naval-messages-and-genadmins.mdx | slug does not match filename | slug naval-messages-and-genadmins vs file stem s1g1-naval-correspondence-messages-naval-messages-and-genadmins (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-naval-correspondence-messages-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-naval-correspondence-messages-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-naval-correspondence-messages-signing-authority-and-by-direction.mdx | slug does not match filename | slug signing-authority-and-by-direction vs file stem s1g1-naval-correspondence-messages-signing-authority-and-by-direction (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-operations-event-incident-reporting-oprep-3-pinnacle-and-national-level-interest-reporting.mdx | slug does not match filename | slug oprep-3-pinnacle-and-national-level-interest-reporting vs file stem s1g1-operations-event-incident-reporting-oprep-3-pinnacle-and-national-level-interest-reporting (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-operations-event-incident-reporting-oprep-3-sir-serious-incident-reporting.mdx | slug does not match filename | slug oprep-3-sir-serious-incident-reporting vs file stem s1g1-operations-event-incident-reporting-oprep-3-sir-serious-incident-reporting (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-operations-event-incident-reporting-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-operations-event-incident-reporting-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-operations-event-incident-reporting-reportable-events-and-incidents.mdx | slug does not match filename | slug reportable-events-and-incidents vs file stem s1g1-operations-event-incident-reporting-reportable-events-and-incidents (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-operations-event-incident-reporting-sexual-assault-and-hazing-report-protocol.mdx | slug does not match filename | slug sexual-assault-and-hazing-report-protocol vs file stem s1g1-operations-event-incident-reporting-sexual-assault-and-hazing-report-protocol (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-operations-event-incident-reporting-sister-service-oprep-3-and-white-pinnacle-exercise.mdx | slug does not match filename | slug sister-service-oprep-3-and-white-pinnacle-exercise vs file stem s1g1-operations-event-incident-reporting-sister-service-oprep-3-and-white-pinnacle-exercise (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-outbound-management-final-pay-closeout-and-debt-clearance.mdx | slug does not match filename | slug final-pay-closeout-and-debt-clearance vs file stem s1g1-outbound-management-final-pay-closeout-and-debt-clearance (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-outbound-management-mctfs-detach-and-routing.mdx | slug does not match filename | slug mctfs-detach-and-routing vs file stem s1g1-outbound-management-mctfs-detach-and-routing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-outbound-management-ompf-and-srb-handover.mdx | slug does not match filename | slug ompf-and-srb-handover vs file stem s1g1-outbound-management-ompf-and-srb-handover (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-outbound-management-outbound-interview-and-counseling.mdx | slug does not match filename | slug outbound-interview-and-counseling vs file stem s1g1-outbound-management-outbound-interview-and-counseling (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-outbound-management-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-outbound-management-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-outbound-management-separation-and-retirement-handoff.mdx | slug does not match filename | slug separation-and-retirement-handoff vs file stem s1g1-outbound-management-separation-and-retirement-handoff (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-outbound-management-unit-check-out-procedures.mdx | slug does not match filename | slug unit-check-out-procedures vs file stem s1g1-outbound-management-unit-check-out-procedures (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-page-11-entries.mdx | slug does not match filename | slug page-11-entries vs file stem s1g1-page-11-entries (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-academic-fitness-reports.mdx | slug does not match filename | slug academic-fitness-reports vs file stem s1g1-pes-academic-fitness-reports (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-adverse-report-procedures.mdx | slug does not match filename | slug adverse-report-procedures vs file stem s1g1-pes-adverse-report-procedures (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-annual-fitness-report-schedule.mdx | slug does not match filename | slug annual-fitness-report-schedule vs file stem s1g1-pes-annual-fitness-report-schedule (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-completed-reports-handling.mdx | slug does not match filename | slug completed-reports-handling vs file stem s1g1-pes-completed-reports-handling (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-fitness-report-audit-program.mdx | slug does not match filename | slug fitness-report-audit-program vs file stem s1g1-pes-fitness-report-audit-program (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-fitness-report-preparation.mdx | slug does not match filename | slug fitness-report-preparation vs file stem s1g1-pes-fitness-report-preparation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-mol-fitrep-workflow-and-timeline.mdx | slug does not match filename | slug mol-fitrep-workflow-and-timeline vs file stem s1g1-pes-mol-fitrep-workflow-and-timeline (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-pes-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-reporting-chain-and-responsibilities.mdx | slug does not match filename | slug reporting-chain-and-responsibilities vs file stem s1g1-pes-reporting-chain-and-responsibilities (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-special-instructions.mdx | slug does not match filename | slug special-instructions vs file stem s1g1-pes-special-instructions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-submission-requirements-and-occasion-codes.mdx | slug does not match filename | slug submission-requirements-and-occasion-codes vs file stem s1g1-pes-submission-requirements-and-occasion-codes (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-pes-substantive-corrections-process.mdx | slug does not match filename | slug substantive-corrections-process vs file stem s1g1-pes-substantive-corrections-process (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-postal-affairs-mpo-fpo-and-installation-operations.mdx | slug does not match filename | slug mpo-fpo-and-installation-operations vs file stem s1g1-postal-affairs-mpo-fpo-and-installation-operations (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-postal-affairs-official-mail-management.mdx | slug does not match filename | slug official-mail-management vs file stem s1g1-postal-affairs-official-mail-management (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-postal-affairs-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-postal-affairs-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-postal-affairs-postal-officer-appointment-and-training.mdx | slug does not match filename | slug postal-officer-appointment-and-training vs file stem s1g1-postal-affairs-postal-officer-appointment-and-training (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-postal-affairs-registered-and-certified-mail.mdx | slug does not match filename | slug registered-and-certified-mail vs file stem s1g1-postal-affairs-registered-and-certified-mail (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-postal-affairs-unit-mail-room-and-accountability.mdx | slug does not match filename | slug unit-mail-room-and-accountability vs file stem s1g1-postal-affairs-unit-mail-room-and-accountability (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-prepare-upb.mdx | slug does not match filename | slug prepare-upb vs file stem s1g1-prepare-upb (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-promotions-cpl-and-sgt-promotion.mdx | slug does not match filename | slug cpl-and-sgt-promotion vs file stem s1g1-promotions-cpl-and-sgt-promotion (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-promotions-enlisted-promotion-eligibility.mdx | slug does not match filename | slug enlisted-promotion-eligibility vs file stem s1g1-promotions-enlisted-promotion-eligibility (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-promotions-officer-promotions.mdx | slug does not match filename | slug officer-promotions vs file stem s1g1-promotions-officer-promotions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-promotions-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-promotions-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-promotions-pfc-and-lcpl-promotion.mdx | slug does not match filename | slug pfc-and-lcpl-promotion vs file stem s1g1-promotions-pfc-and-lcpl-promotion (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-promotions-promotion-restrictions-and-withholds.mdx | slug does not match filename | slug promotion-restrictions-and-withholds vs file stem s1g1-promotions-promotion-restrictions-and-withholds (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-promotions-remedial-promotion.mdx | slug does not match filename | slug remedial-promotion vs file stem s1g1-promotions-remedial-promotion (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-promotions-selection-boards-for-snco-promotions.mdx | slug does not match filename | slug selection-boards-for-snco-promotions vs file stem s1g1-promotions-selection-boards-for-snco-promotions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-promotions-special-promotion-programs.mdx | slug does not match filename | slug special-promotion-programs vs file stem s1g1-promotions-special-promotion-programs (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-records-management-cross-for-the-cdrm.mdx | slug does not match filename | slug cross-for-the-cdrm vs file stem s1g1-records-management-cross-for-the-cdrm (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-records-management-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-records-management-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-reports-management-electronic-systems-and-ditpr-don.mdx | slug does not match filename | slug electronic-systems-and-ditpr-don vs file stem s1g1-reports-management-electronic-systems-and-ditpr-don (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-reports-management-local-reports-and-omb-approval.mdx | slug does not match filename | slug local-reports-and-omb-approval vs file stem s1g1-reports-management-local-reports-and-omb-approval (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-reports-management-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-reports-management-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-reports-management-redundancy-review.mdx | slug does not match filename | slug redundancy-review vs file stem s1g1-reports-management-redundancy-review (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-reports-management-reports-inventory.mdx | slug does not match filename | slug reports-inventory vs file stem s1g1-reports-management-reports-inventory (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-reports-management-reports-manager-and-command-directive.mdx | slug does not match filename | slug reports-manager-and-command-directive vs file stem s1g1-reports-management-reports-manager-and-command-directive (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-reports-management-three-year-review-cycle.mdx | slug does not match filename | slug three-year-review-cycle vs file stem s1g1-reports-management-three-year-review-cycle (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-separation-retirement-dd-214-preparation.mdx | slug does not match filename | slug dd-214-preparation vs file stem s1g1-separation-retirement-dd-214-preparation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-separation-retirement-enlisted-administrative-separations.mdx | slug does not match filename | slug enlisted-administrative-separations vs file stem s1g1-separation-retirement-enlisted-administrative-separations (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-separation-retirement-enlisted-retirement-and-fmcr.mdx | slug does not match filename | slug enlisted-retirement-and-fmcr vs file stem s1g1-separation-retirement-enlisted-retirement-and-fmcr (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-separation-retirement-officer-administrative-separation.mdx | slug does not match filename | slug officer-administrative-separation vs file stem s1g1-separation-retirement-officer-administrative-separation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-separation-retirement-officer-retirement.mdx | slug does not match filename | slug officer-retirement vs file stem s1g1-separation-retirement-officer-retirement (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-separation-retirement-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-separation-retirement-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-separation-retirement-physical-disability-evaluation-system.mdx | slug does not match filename | slug physical-disability-evaluation-system vs file stem s1g1-separation-retirement-physical-disability-evaluation-system (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-separation-retirement-reserve-separation-and-retirement.mdx | slug does not match filename | slug reserve-separation-and-retirement vs file stem s1g1-separation-retirement-reserve-separation-and-retirement (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-separation-retirement-separation-pay-and-benefits.mdx | slug does not match filename | slug separation-pay-and-benefits vs file stem s1g1-separation-retirement-separation-pay-and-benefits (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-special-hazardous-duty-pay-aviation-bonuses-and-incentive-pays.mdx | slug does not match filename | slug aviation-bonuses-and-incentive-pays vs file stem s1g1-special-hazardous-duty-pay-aviation-bonuses-and-incentive-pays (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-special-hazardous-duty-pay-career-sea-pay-and-submarine-duty.mdx | slug does not match filename | slug career-sea-pay-and-submarine-duty vs file stem s1g1-special-hazardous-duty-pay-career-sea-pay-and-submarine-duty (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-special-hazardous-duty-pay-foreign-language-proficiency-bonus.mdx | slug does not match filename | slug foreign-language-proficiency-bonus vs file stem s1g1-special-hazardous-duty-pay-foreign-language-proficiency-bonus (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-special-hazardous-duty-pay-hardship-duty-and-high-deployment.mdx | slug does not match filename | slug hardship-duty-and-high-deployment vs file stem s1g1-special-hazardous-duty-pay-hardship-duty-and-high-deployment (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-special-hazardous-duty-pay-hazardous-duty-incentive-and-diving.mdx | slug does not match filename | slug hazardous-duty-incentive-and-diving vs file stem s1g1-special-hazardous-duty-pay-hazardous-duty-incentive-and-diving (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-special-hazardous-duty-pay-hostile-fire-and-imminent-danger.mdx | slug does not match filename | slug hostile-fire-and-imminent-danger vs file stem s1g1-special-hazardous-duty-pay-hostile-fire-and-imminent-danger (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-special-hazardous-duty-pay-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-special-hazardous-duty-pay-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-special-hazardous-duty-pay-sdap-and-assignment-incentive-pay.mdx | slug does not match filename | slug sdap-and-assignment-incentive-pay vs file stem s1g1-special-hazardous-duty-pay-sdap-and-assignment-incentive-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-sponsorship-program-coordinator-appointment-and-training.mdx | slug does not match filename | slug coordinator-appointment-and-training vs file stem s1g1-sponsorship-program-coordinator-appointment-and-training (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-sponsorship-program-eaoc-and-welcome-aboard-letters.mdx | slug does not match filename | slug eaoc-and-welcome-aboard-letters vs file stem s1g1-sponsorship-program-eaoc-and-welcome-aboard-letters (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-sponsorship-program-installation-program-manager-and-irr-handoff.mdx | slug does not match filename | slug installation-program-manager-and-irr-handoff vs file stem s1g1-sponsorship-program-installation-program-manager-and-irr-handoff (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-sponsorship-program-metrics-and-accountability.mdx | slug does not match filename | slug metrics-and-accountability vs file stem s1g1-sponsorship-program-metrics-and-accountability (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-sponsorship-program-oconus-and-accompanied-tour-sponsorship.mdx | slug does not match filename | slug oconus-and-accompanied-tour-sponsorship vs file stem s1g1-sponsorship-program-oconus-and-accompanied-tour-sponsorship (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-sponsorship-program-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-sponsorship-program-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-sponsorship-program-recruiting-and-reserve-sponsorship.mdx | slug does not match filename | slug recruiting-and-reserve-sponsorship vs file stem s1g1-sponsorship-program-recruiting-and-reserve-sponsorship (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-sponsorship-program-sponsor-assignment-and-milestones.mdx | slug does not match filename | slug sponsor-assignment-and-milestones vs file stem s1g1-sponsorship-program-sponsor-assignment-and-milestones (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-sponsorship-program-sponsor-responsibilities-and-completion.mdx | slug does not match filename | slug sponsor-responsibilities-and-completion vs file stem s1g1-sponsorship-program-sponsor-responsibilities-and-completion (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-ssic-codes.mdx | slug does not match filename | slug ssic-codes vs file stem s1g1-ssic-codes (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-strength-manpower-reporting-bic-management-and-internal-assignments.mdx | slug does not match filename | slug bic-management-and-internal-assignments vs file stem s1g1-strength-manpower-reporting-bic-management-and-internal-assignments (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-strength-manpower-reporting-force-design-2030-and-talent-management-context.mdx | slug does not match filename | slug force-design-2030-and-talent-management-context vs file stem s1g1-strength-manpower-reporting-force-design-2030-and-talent-management-context (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-strength-manpower-reporting-mctp-3-30g-administrative-doctrine.mdx | slug does not match filename | slug mctp-3-30g-administrative-doctrine vs file stem s1g1-strength-manpower-reporting-mctp-3-30g-administrative-doctrine (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-strength-manpower-reporting-mmea-coordination-and-monitor-engagement.mdx | slug does not match filename | slug mmea-coordination-and-monitor-engagement vs file stem s1g1-strength-manpower-reporting-mmea-coordination-and-monitor-engagement (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-strength-manpower-reporting-overseas-tour-extension-incentive-program.mdx | slug does not match filename | slug overseas-tour-extension-incentive-program vs file stem s1g1-strength-manpower-reporting-overseas-tour-extension-incentive-program (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-strength-manpower-reporting-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-strength-manpower-reporting-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-strength-manpower-reporting-precedence-levels-for-manning-and-staffing.mdx | slug does not match filename | slug precedence-levels-for-manning-and-staffing vs file stem s1g1-strength-manpower-reporting-precedence-levels-for-manning-and-staffing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-strength-manpower-reporting-table-of-organization-and-toecr-submissions.mdx | slug does not match filename | slug table-of-organization-and-toecr-submissions vs file stem s1g1-strength-manpower-reporting-table-of-organization-and-toecr-submissions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-strength-manpower-reporting-unit-readiness-reporting-personnel-pillar.mdx | slug does not match filename | slug unit-readiness-reporting-personnel-pillar vs file stem s1g1-strength-manpower-reporting-unit-readiness-reporting-personnel-pillar (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-travel-entitlements-mileage-claims-evacuation-allowances.mdx | slug does not match filename | slug evacuation-allowances vs file stem s1g1-travel-entitlements-mileage-claims-evacuation-allowances (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-travel-entitlements-mileage-claims-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-travel-entitlements-mileage-claims-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-travel-entitlements-mileage-claims-permanent-duty-travel-pcs.mdx | slug does not match filename | slug permanent-duty-travel-pcs vs file stem s1g1-travel-entitlements-mileage-claims-permanent-duty-travel-pcs (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-travel-entitlements-mileage-claims-processing-travel-claims-and-vouchers.mdx | slug does not match filename | slug processing-travel-claims-and-vouchers vs file stem s1g1-travel-entitlements-mileage-claims-processing-travel-claims-and-vouchers (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-travel-entitlements-mileage-claims-tdy-travel-and-advances.mdx | slug does not match filename | slug tdy-travel-and-advances vs file stem s1g1-travel-entitlements-mileage-claims-tdy-travel-and-advances (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-travel-entitlements-mileage-claims-transportation-allowances-and-mileage.mdx | slug does not match filename | slug transportation-allowances-and-mileage vs file stem s1g1-travel-entitlements-mileage-claims-transportation-allowances-and-mileage (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-travel-entitlements-mileage-claims-travel-policy-general-information.mdx | slug does not match filename | slug travel-policy-general-information vs file stem s1g1-travel-entitlements-mileage-claims-travel-policy-general-information (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-ud-mips-transactions.mdx | slug does not match filename | slug ud-mips-transactions vs file stem s1g1-ud-mips-transactions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-vwap-confinement-facility-notifications.mdx | slug does not match filename | slug confinement-facility-notifications vs file stem s1g1-vwap-confinement-facility-notifications (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-vwap-installation-and-regional-liaison-officers.mdx | slug does not match filename | slug installation-and-regional-liaison-officers vs file stem s1g1-vwap-installation-and-regional-liaison-officers (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-vwap-law-enforcement-coordination.mdx | slug does not match filename | slug law-enforcement-coordination vs file stem s1g1-vwap-law-enforcement-coordination (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-vwap-legal-community-and-trial-counsel.mdx | slug does not match filename | slug legal-community-and-trial-counsel vs file stem s1g1-vwap-legal-community-and-trial-counsel (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-vwap-marine-family-services-coordination.mdx | slug does not match filename | slug marine-family-services-coordination vs file stem s1g1-vwap-marine-family-services-coordination (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-vwap-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-vwap-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-vwap-unit-commander-and-vwac.mdx | slug does not match filename | slug unit-commander-and-vwac vs file stem s1g1-vwap-unit-commander-and-vwac (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-vwap-victim-rights-and-notifications.mdx | slug does not match filename | slug victim-rights-and-notifications vs file stem s1g1-vwap-victim-rights-and-notifications (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-waivers-remissions-indebtedness-debt-collection-instructions-and-due-process.mdx | slug does not match filename | slug debt-collection-instructions-and-due-process vs file stem s1g1-waivers-remissions-indebtedness-debt-collection-instructions-and-due-process (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-waivers-remissions-indebtedness-debts-owed-by-individuals-collection-mechanisms.mdx | slug does not match filename | slug debts-owed-by-individuals-collection-mechanisms vs file stem s1g1-waivers-remissions-indebtedness-debts-owed-by-individuals-collection-mechanisms (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-waivers-remissions-indebtedness-dfas-routing-and-marine-corps-specific-procedures.mdx | slug does not match filename | slug dfas-routing-and-marine-corps-specific-procedures vs file stem s1g1-waivers-remissions-indebtedness-dfas-routing-and-marine-corps-specific-procedures (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-waivers-remissions-indebtedness-dod-debt-management-general-provisions.mdx | slug does not match filename | slug dod-debt-management-general-provisions vs file stem s1g1-waivers-remissions-indebtedness-dod-debt-management-general-provisions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-waivers-remissions-indebtedness-hearings-informal-disputes-and-waivers-remissions.mdx | slug does not match filename | slug hearings-informal-disputes-and-waivers-remissions vs file stem s1g1-waivers-remissions-indebtedness-hearings-informal-disputes-and-waivers-remissions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-waivers-remissions-indebtedness-interest-penalties-and-administrative-costs.mdx | slug does not match filename | slug interest-penalties-and-administrative-costs vs file stem s1g1-waivers-remissions-indebtedness-interest-penalties-and-administrative-costs (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | admin/s1g1-waivers-remissions-indebtedness-overview.mdx | slug does not match filename | slug overview vs file stem s1g1-waivers-remissions-indebtedness-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/audit-posture-core-vs-core-plus.mdx | slug does not match filename | slug core-vs-core-plus vs file stem audit-posture-core-vs-core-plus (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/audit-posture-igmc-fac.mdx | slug does not match filename | slug igmc-fac-self-audit vs file stem audit-posture-igmc-fac (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/audit-posture-overview.mdx | slug does not match filename | slug overview vs file stem audit-posture-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/aviation-flight-performance-boards.mdx | slug does not match filename | slug flight-performance-boards vs file stem aviation-flight-performance-boards (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/aviation-overview.mdx | slug does not match filename | slug overview vs file stem aviation-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/aviation-pre-coc.mdx | slug does not match filename | slug pre-coc vs file stem aviation-pre-coc (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/aviation-readiness-training.mdx | slug does not match filename | slug readiness-training vs file stem aviation-readiness-training (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/aviation-safety-program.mdx | slug does not match filename | slug safety-program vs file stem aviation-safety-program (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/battle-rhythm-monthly-cmg.mdx | slug does not match filename | slug monthly-cmg vs file stem battle-rhythm-monthly-cmg (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/battle-rhythm-monthly-fpc-csne.mdx | slug does not match filename | slug monthly-fpc vs file stem battle-rhythm-monthly-fpc-csne (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/battle-rhythm-overview.mdx | slug does not match filename | slug overview vs file stem battle-rhythm-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/battle-rhythm-quarterly.mdx | slug does not match filename | slug quarterly-actions vs file stem battle-rhythm-quarterly (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/discipline-command-investigations.mdx | slug does not match filename | slug investigations vs file stem discipline-command-investigations (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/discipline-convening-authority.mdx | slug does not match filename | slug convening-authority vs file stem discipline-convening-authority (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/discipline-njp-routing.mdx | slug does not match filename | slug njp-routing vs file stem discipline-njp-routing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/discipline-overview.mdx | slug does not match filename | slug overview vs file stem discipline-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/discipline-page-11-entries.mdx | slug does not match filename | slug page-11 vs file stem discipline-page-11-entries (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/discipline-upb-srb.mdx | slug does not match filename | slug upb-srb vs file stem discipline-upb-srb (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/fpc-cirras-commander-role.mdx | slug does not match filename | slug cirras-role vs file stem fpc-cirras-commander-role (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/fpc-new-join-elevated-risk.mdx | slug does not match filename | slug elevated-risk-new-joins vs file stem fpc-new-join-elevated-risk (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/fpc-overview.mdx | slug does not match filename | slug overview vs file stem fpc-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/fpc-sop-and-meetings.mdx | slug does not match filename | slug fpc-sop-meetings vs file stem fpc-sop-and-meetings (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/inspections-lifecycle-car-submission.mdx | slug does not match filename | slug car-submission vs file stem inspections-lifecycle-car-submission (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/inspections-lifecycle-cgip-setup.mdx | slug does not match filename | slug cgip-setup vs file stem inspections-lifecycle-cgip-setup (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/inspections-lifecycle-fir-receipt.mdx | slug does not match filename | slug fir-receipt vs file stem inspections-lifecycle-fir-receipt (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/inspections-lifecycle-overview.mdx | slug does not match filename | slug overview vs file stem inspections-lifecycle-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/inspections-lifecycle-records-retention.mdx | slug does not match filename | slug records-retention vs file stem inspections-lifecycle-records-retention (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/oversight-matrix-overview.mdx | slug does not match filename | slug overview vs file stem oversight-matrix-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/personnel-admin-discharges.mdx | slug does not match filename | slug admin-discharges vs file stem personnel-admin-discharges (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/personnel-overview.mdx | slug does not match filename | slug overview vs file stem personnel-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/personnel-perstempo-threshold-management.mdx | slug does not match filename | slug perstempo-threshold-management vs file stem personnel-perstempo-threshold-management (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/personnel-promotion-withholds.mdx | slug does not match filename | slug promotion-withholds vs file stem personnel-promotion-withholds (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/personnel-reductions-in-grade.mdx | slug does not match filename | slug reductions vs file stem personnel-reductions-in-grade (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/personnel-retirement-processing.mdx | slug does not match filename | slug retirement vs file stem personnel-retirement-processing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/playbook-covered-offense.mdx | slug does not match filename | slug covered-offense vs file stem playbook-covered-offense (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/playbook-meo-complaint.mdx | slug does not match filename | slug meo-complaint vs file stem playbook-meo-complaint (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/playbook-off-base-arrest.mdx | slug does not match filename | slug off-base-arrest vs file stem playbook-off-base-arrest (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/playbook-overview.mdx | slug does not match filename | slug overview vs file stem playbook-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/playbook-sapr-unrestricted.mdx | slug does not match filename | slug sapr-unrestricted-report vs file stem playbook-sapr-unrestricted (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/playbook-suicide-response.mdx | slug does not match filename | slug suicide-response vs file stem playbook-suicide-response (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/relationships-ipac-procedures.mdx | slug does not match filename | slug ipac-procedures vs file stem relationships-ipac-procedures (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/turnover-30-day-actions.mdx | slug does not match filename | slug 30-day-actions vs file stem turnover-30-day-actions (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/turnover-90-120-and-recurring.mdx | slug does not match filename | slug 90-120-and-recurring vs file stem turnover-90-120-and-recurring (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/turnover-day-0-7.mdx | slug does not match filename | slug day-0-7 vs file stem turnover-day-0-7 (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/turnover-legal-foundation.mdx | slug does not match filename | slug legal-foundation vs file stem turnover-legal-foundation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/turnover-ostc-covered-offenses.mdx | slug does not match filename | slug ostc-covered-offenses vs file stem turnover-ostc-covered-offenses (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/turnover-outgoing-checklist.mdx | slug does not match filename | slug outgoing-checklist vs file stem turnover-outgoing-checklist (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/turnover-overview.mdx | slug does not match filename | slug overview vs file stem turnover-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | commander/turnover-pre-coc.mdx | slug does not match filename | slug pre-coc vs file stem turnover-pre-coc (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/awards-choosing-the-award.mdx | slug does not match filename | slug choosing-the-award vs file stem awards-choosing-the-award (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/awards-citation-mechanics.mdx | slug does not match filename | slug citation-mechanics vs file stem awards-citation-mechanics (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/awards-combat-action-ribbon.mdx | slug does not match filename | slug combat-action-ribbon vs file stem awards-combat-action-ribbon (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/awards-drafting-narrative.mdx | slug does not match filename | slug drafting-narrative vs file stem awards-drafting-narrative (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/awards-end-of-tour-timing.mdx | slug does not match filename | slug end-of-tour-timing vs file stem awards-end-of-tour-timing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/awards-ompf-verification.mdx | slug does not match filename | slug ompf-verification vs file stem awards-ompf-verification (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/awards-overview.mdx | slug does not match filename | slug overview vs file stem awards-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/awards-routing-and-endorsements.mdx | slug does not match filename | slug routing-and-endorsements vs file stem awards-routing-and-endorsements (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/awards-unit-awards.mdx | slug does not match filename | slug unit-awards vs file stem awards-unit-awards (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/bridging-escalation-paths.mdx | slug does not match filename | slug escalation-paths vs file stem bridging-escalation-paths (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/bridging-follow-up-cadence.mdx | slug does not match filename | slug follow-up-cadence vs file stem bridging-follow-up-cadence (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/bridging-overview.mdx | slug does not match filename | slug overview vs file stem bridging-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/bridging-package-checklist.mdx | slug does not match filename | slug package-checklist vs file stem bridging-package-checklist (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/bridging-processing-timelines.mdx | slug does not match filename | slug processing-timelines vs file stem bridging-processing-timelines (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/bridging-when-to-walk.mdx | slug does not match filename | slug when-to-walk vs file stem bridging-when-to-walk (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/career-civilian-credential-matching.mdx | slug does not match filename | slug civilian-credential-matching vs file stem career-civilian-credential-matching (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/career-education-planning.mdx | slug does not match filename | slug education-planning vs file stem career-education-planning (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/career-lateral-move-advising.mdx | slug does not match filename | slug lateral-move-advising vs file stem career-lateral-move-advising (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/career-overview.mdx | slug does not match filename | slug overview vs file stem career-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/career-reenlistment-conversation.mdx | slug does not match filename | slug reenlistment-conversation vs file stem career-reenlistment-conversation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/career-transition-timeline.mdx | slug does not match filename | slug transition-timeline vs file stem career-transition-timeline (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/counseling-avoiding-pitfalls.mdx | slug does not match filename | slug avoiding-pitfalls vs file stem counseling-avoiding-pitfalls (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/counseling-cadence-and-events.mdx | slug does not match filename | slug cadence-and-events vs file stem counseling-cadence-and-events (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/counseling-initial-session.mdx | slug does not match filename | slug initial-session vs file stem counseling-initial-session (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/counseling-listening-and-feedback.mdx | slug does not match filename | slug listening-and-feedback vs file stem counseling-listening-and-feedback (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/counseling-overview.mdx | slug does not match filename | slug overview vs file stem counseling-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/counseling-setting-targets.mdx | slug does not match filename | slug setting-targets vs file stem counseling-setting-targets (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/counseling-six-functional-areas.mdx | slug does not match filename | slug six-functional-areas vs file stem counseling-six-functional-areas (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/counseling-smart-goals.mdx | slug does not match filename | slug smart-goals vs file stem counseling-smart-goals (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/counseling-styles.mdx | slug does not match filename | slug styles vs file stem counseling-styles (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/discipline-article-31-advisory.mdx | slug does not match filename | slug article-31-advisory vs file stem discipline-article-31-advisory (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/discipline-page-11-counseling.mdx | slug does not match filename | slug page-11-counseling vs file stem discipline-page-11-counseling (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/discipline-post-njp-documentation.mdx | slug does not match filename | slug post-njp-documentation vs file stem discipline-post-njp-documentation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/discipline-pre-njp-counseling.mdx | slug does not match filename | slug pre-njp-counseling vs file stem discipline-pre-njp-counseling (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/discipline-witness-statements.mdx | slug does not match filename | slug witness-statements vs file stem discipline-witness-statements (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/life-events-bereavement.mdx | slug does not match filename | slug bereavement vs file stem life-events-bereavement (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/life-events-birth-adoption-walkthrough.mdx | slug does not match filename | slug birth-adoption-walkthrough vs file stem life-events-birth-adoption-walkthrough (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/life-events-coaching-family-docs.mdx | slug does not match filename | slug family-docs-coaching vs file stem life-events-coaching-family-docs (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/life-events-divorce-custody.mdx | slug does not match filename | slug divorce-custody vs file stem life-events-divorce-custody (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/life-events-efmp-coordination.mdx | slug does not match filename | slug efmp-coordination vs file stem life-events-efmp-coordination (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/life-events-marriage-walkthrough.mdx | slug does not match filename | slug marriage-walkthrough vs file stem life-events-marriage-walkthrough (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/pay-allotment-review.mdx | slug does not match filename | slug allotment-review vs file stem pay-allotment-review (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/pay-bah-error-catch.mdx | slug does not match filename | slug bah-error-catch vs file stem pay-bah-error-catch (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/pay-coaching-marines-on-pay.mdx | slug does not match filename | slug coaching-marines-on-pay vs file stem pay-coaching-marines-on-pay (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/pay-gtcc-delinquency.mdx | slug does not match filename | slug gtcc-delinquency vs file stem pay-gtcc-delinquency (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/pay-pay-problems-escort.mdx | slug does not match filename | slug pay-problems-escort vs file stem pay-pay-problems-escort (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/pay-secondary-dependency.mdx | slug does not match filename | slug secondary-dependency vs file stem pay-secondary-dependency (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/pay-special-pay-verification.mdx | slug does not match filename | slug special-pay-verification vs file stem pay-special-pay-verification (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/performance-evaluation-adverse-fitrep.mdx | slug does not match filename | slug adverse-fitrep vs file stem performance-evaluation-adverse-fitrep (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/performance-evaluation-apes-administration.mdx | slug does not match filename | slug apes-administration vs file stem performance-evaluation-apes-administration (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/performance-evaluation-fitrep-cycle.mdx | slug does not match filename | slug fitrep-cycle vs file stem performance-evaluation-fitrep-cycle (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/performance-evaluation-jepes-conducting.mdx | slug does not match filename | slug jepes-conducting vs file stem performance-evaluation-jepes-conducting (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/performance-evaluation-jepes.mdx | slug does not match filename | slug jepes vs file stem performance-evaluation-jepes (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/performance-evaluation-overview.mdx | slug does not match filename | slug overview vs file stem performance-evaluation-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/performance-evaluation-ro-mechanics.mdx | slug does not match filename | slug ro-mechanics vs file stem performance-evaluation-ro-mechanics (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/performance-evaluation-rs-mechanics.mdx | slug does not match filename | slug rs-mechanics vs file stem performance-evaluation-rs-mechanics (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/personnel-force-preservation-referral.mdx | slug does not match filename | slug force-preservation-referral vs file stem personnel-force-preservation-referral (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/personnel-mentorship-pairing.mdx | slug does not match filename | slug mentorship-pairing vs file stem personnel-mentorship-pairing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/personnel-new-marine-integration.mdx | slug does not match filename | slug new-marine-integration vs file stem personnel-new-marine-integration (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/personnel-section-leader-orientation.mdx | slug does not match filename | slug section-leader-orientation vs file stem personnel-section-leader-orientation (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/personnel-sponsor-program.mdx | slug does not match filename | slug sponsor-program vs file stem personnel-sponsor-program (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/personnel-unsat-participation-counseling.mdx | slug does not match filename | slug unsat-participation-counseling vs file stem personnel-unsat-participation-counseling (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/readiness-at-section-planning.mdx | slug does not match filename | slug at-section-planning vs file stem readiness-at-section-planning (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/readiness-family-readiness.mdx | slug does not match filename | slug family-readiness vs file stem readiness-family-readiness (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/readiness-medical-dental.mdx | slug does not match filename | slug medical-dental vs file stem readiness-medical-dental (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/readiness-pre-deployment-section.mdx | slug does not match filename | slug pre-deployment-section vs file stem readiness-pre-deployment-section (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/readiness-red-s-currency.mdx | slug does not match filename | slug red-s-currency vs file stem readiness-red-s-currency (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/readiness-training-requirements.mdx | slug does not match filename | slug training-requirements vs file stem readiness-training-requirements (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/records-awards-records-cleanup.mdx | slug does not match filename | slug awards-records-cleanup vs file stem records-awards-records-cleanup (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/records-cadence.mdx | slug does not match filename | slug cadence vs file stem records-cadence (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/records-mctfs-review.mdx | slug does not match filename | slug mctfs-review vs file stem records-mctfs-review (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/records-ompf-audit-walkthrough.mdx | slug does not match filename | slug ompf-audit-walkthrough vs file stem records-ompf-audit-walkthrough (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/records-promotion-board-prep.mdx | slug does not match filename | slug promotion-board-prep vs file stem records-promotion-board-prep (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/records-section-records-audit.mdx | slug does not match filename | slug section-records-audit vs file stem records-section-records-audit (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/records-staff-section-records-manager.mdx | slug does not match filename | slug staff-section-records-manager vs file stem records-staff-section-records-manager (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/travel-ao-role.mdx | slug does not match filename | slug approving-officer-role vs file stem travel-ao-role (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/travel-claim-disputes.mdx | slug does not match filename | slug claim-disputes vs file stem travel-claim-disputes (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/travel-dts-oversight.mdx | slug does not match filename | slug dts-oversight vs file stem travel-dts-oversight (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/travel-gtcc-use.mdx | slug does not match filename | slug gtcc-use vs file stem travel-gtcc-use (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/travel-overview.mdx | slug does not match filename | slug overview vs file stem travel-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/travel-pcs-coaching.mdx | slug does not match filename | slug pcs-coaching vs file stem travel-pcs-coaching (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/travel-tad-coaching.mdx | slug does not match filename | slug tad-coaching vs file stem travel-tad-coaching (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/travel-voucher-audit.mdx | slug does not match filename | slug voucher-audit vs file stem travel-voucher-audit (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/wellness-command-climate-flags.mdx | slug does not match filename | slug command-climate-flags vs file stem wellness-command-climate-flags (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/wellness-financial-distress.mdx | slug does not match filename | slug financial-distress vs file stem wellness-financial-distress (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/wellness-fraternization-risk.mdx | slug does not match filename | slug fraternization-risk vs file stem wellness-fraternization-risk (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/wellness-mental-health-risk.mdx | slug does not match filename | slug mental-health-risk vs file stem wellness-mental-health-risk (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/wellness-overview.mdx | slug does not match filename | slug overview vs file stem wellness-overview (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | leader/wellness-routing-resources.mdx | slug does not match filename | slug routing-resources vs file stem wellness-routing-resources (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | links/civilian-awards-sharepoint-honorary.mdx | slug does not match filename | slug civilian-awards-honorary-sharepoint vs file stem civilian-awards-sharepoint-honorary (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | links/civilian-awards-sharepoint-retirement.mdx | slug does not match filename | slug civilian-awards-retirement-sharepoint vs file stem civilian-awards-sharepoint-retirement (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-campaign-and-service-medals.mdx | slug does not match filename | slug campaign-and-service-medals vs file stem awards-campaign-and-service-medals (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-combat-action-ribbon.mdx | slug does not match filename | slug combat-action-ribbon vs file stem awards-combat-action-ribbon (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-foreign-awards.mdx | slug does not match filename | slug foreign-awards vs file stem awards-foreign-awards (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-joint-service-awards.mdx | slug does not match filename | slug joint-service-awards vs file stem awards-joint-service-awards (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-marksmanship-badges.mdx | slug does not match filename | slug marksmanship-badges vs file stem awards-marksmanship-badges (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-movsm.mdx | slug does not match filename | slug movsm vs file stem awards-movsm (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-pcs-and-awards-timing.mdx | slug does not match filename | slug pcs-and-awards-timing vs file stem awards-pcs-and-awards-timing (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-personal-military-decorations.mdx | slug does not match filename | slug personal-military-decorations vs file stem awards-personal-military-decorations (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-purple-heart.mdx | slug does not match filename | slug purple-heart vs file stem awards-purple-heart (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-receiving-an-award.mdx | slug does not match filename | slug receiving-an-award vs file stem awards-receiving-an-award (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-retirement-awards-and-dd214.mdx | slug does not match filename | slug retirement-awards-and-dd214 vs file stem awards-retirement-awards-and-dd214 (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-unit-awards.mdx | slug does not match filename | slug unit-awards vs file stem awards-unit-awards (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-verifying-your-awards.mdx | slug does not match filename | slug verifying-your-awards vs file stem awards-verifying-your-awards (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/awards-wearing-your-awards.mdx | slug does not match filename | slug wearing-your-awards vs file stem awards-wearing-your-awards (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/defense-travel-system.mdx | slug does not match filename | slug _deprecated_dts_single_page vs file stem defense-travel-system (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/government-travel-charge-card.mdx | slug does not match filename | slug _deprecated_gtcc_single_page vs file stem government-travel-charge-card (loader uses frontmatter slug, build does not enforce) |
| VP-05 | Medium | marines/records-review-mctfs.mdx | slug does not match filename | slug review-mctfs vs file stem records-review-mctfs (loader uses frontmatter slug, build does not enforce) |
| VP-06 | Medium | videos/administrative-separation-process-preparer.mdx | videoUrl not on canonical MCeLE host | value host: marinenet.marines.mil (retired pattern) |
| VP-06 | Medium | videos/fitrep-self-input.mdx | videoUrl not on canonical MCeLE host | value host: https://example.com |
| VP-06 | Medium | videos/how-to-read-an-les-msg-focused.mdx | videoUrl not on canonical MCeLE host | value host: marinenet.marines.mil (retired pattern) |
| VP-06 | Medium | videos/how-to-set-alerts-for-new-videos.mdx | videoUrl not on canonical MCeLE host | value host: non-URL value |
| VP-06 | Medium | videos/hqmc-ardb-directives-monthly-training-20240731.mdx | videoUrl not on canonical MCeLE host | value host: marinenet.marines.mil (retired pattern) |
| VP-06 | Medium | videos/navmc-11000-walkthrough.mdx | videoUrl not on canonical MCeLE host | value host: https://example.com |
| VP-06 | Medium | videos/pft-grading-overview.mdx | videoUrl not on canonical MCeLE host | value host: https://example.com |
| VP-06 | Medium | videos/policy-and-software-updates.mdx | videoUrl not on canonical MCeLE host | value host: marinenet.marines.mil (retired pattern) |
| VP-06 | Medium | videos/promotion-board-records.mdx | videoUrl not on canonical MCeLE host | value host: https://example.com |
| VP-06 | Medium | videos/requesting-access.mdx | videoUrl not on canonical MCeLE host | value host: marinenet.marines.mil (retired pattern) |
| VP-06 | Medium | videos/separation-packet-flow.mdx | videoUrl not on canonical MCeLE host | value host: https://example.com |
| VP-06 | Medium | videos/skillbridge-program-policy-update-navmc-1700-2b.mdx | videoUrl not on canonical MCeLE host | value host: marinenet.marines.mil (retired pattern) |
| VP-07 | Low | content/citations/ | Aging pages: 1 | lastVerified more than 12 months (inspections 6) before 2026-10-20, see Oldest aging list |
| VP-08 | Low | content/marines/ | Aging pages: 2 | lastVerified more than 12 months (inspections 6) before 2026-10-20, see Oldest aging list |
| VP-09 | Low | content/videos/ | Aging pages: 230 | lastVerified more than 12 months (inspections 6) before 2026-10-20, see Oldest aging list |
| VP-10 | Low | citations/cfr-32-199.mdx | Citation without effectiveDate | type CFR |
| VP-10 | Low | citations/cjcsm-3150-01b.mdx | Citation without effectiveDate | type OTHER |
| VP-10 | Low | citations/cjcsm-3150-03d.mdx | Citation without effectiveDate | type OTHER |
| VP-10 | Low | citations/dd-form-1299.mdx | Citation without effectiveDate | type DD-FORM |
| VP-10 | Low | citations/dd-form-137.mdx | Citation without effectiveDate | type DD-FORM |
| VP-10 | Low | citations/dd-form-1561.mdx | Citation without effectiveDate | type DD-FORM |
| VP-10 | Low | citations/dd-form-1797.mdx | Citation without effectiveDate | type DD-FORM |
| VP-10 | Low | citations/dd-form-214.mdx | Citation without effectiveDate | type DD-FORM |
| VP-10 | Low | citations/dd-form-2367.mdx | Citation without effectiveDate | type DD-FORM |
| VP-10 | Low | citations/dd-form-2675.mdx | Citation without effectiveDate | type DD-FORM |
| VP-10 | Low | citations/dd-form-2792.mdx | Citation without effectiveDate | type DD-FORM |
| VP-10 | Low | citations/dd-form-2883.mdx | Citation without effectiveDate | type DD-FORM |
| VP-10 | Low | citations/dd-form-93.mdx | Citation without effectiveDate | type DD-FORM |
| VP-10 | Low | citations/dodfmr-vol-1.mdx | Citation without effectiveDate | type DODFMR |
| VP-10 | Low | citations/dodfmr-vol-14.mdx | Citation without effectiveDate | type DODFMR |
| VP-10 | Low | citations/dodfmr-vol-16.mdx | Citation without effectiveDate | type DODFMR |
| VP-10 | Low | citations/dodfmr-vol-4.mdx | Citation without effectiveDate | type DODFMR |
| VP-10 | Low | citations/dodfmr-vol-5.mdx | Citation without effectiveDate | type DODFMR |
| VP-10 | Low | citations/dodfmr-vol-7a.mdx | Citation without effectiveDate | type DODFMR |
| VP-10 | Low | citations/dodfmr-vol-7b.mdx | Citation without effectiveDate | type DODFMR |
| VP-10 | Low | citations/dodfmr-vol-8.mdx | Citation without effectiveDate | type DODFMR |
| VP-10 | Low | citations/dodfmr-vol-9.mdx | Citation without effectiveDate | type DODFMR |
| VP-10 | Low | citations/dodi-1341-13.mdx | Citation without effectiveDate | type DODI |
| VP-10 | Low | citations/dodi-1400-25.mdx | Citation without effectiveDate | type DODI |
| VP-10 | Low | citations/dowi-1341-09.mdx | Citation without effectiveDate | type DODI |
| VP-10 | Low | citations/dtmo-per-diem-rate-lookup.mdx | Citation without effectiveDate | type OTHER |
| VP-10 | Low | citations/fpm-vol-2.mdx | Citation without effectiveDate | type FPM |
| VP-10 | Low | citations/fpm-vol-3.mdx | Citation without effectiveDate | type FPM |
| VP-10 | Low | citations/fpm-vol-4.mdx | Citation without effectiveDate | type FPM |
| VP-10 | Low | citations/fpm.mdx | Citation without effectiveDate | type FPM |
| VP-10 | Low | citations/jtr.mdx | Citation without effectiveDate | type OTHER |
| VP-10 | Low | citations/mcbul-6110.mdx | Citation without effectiveDate | type MCBUL |
| VP-10 | Low | citations/mco-1001-59.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1001r-1l.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-10110-47.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-10110-47a.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1020-34.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1100-79.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-11000-22.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-11240.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1300-8.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1326-2h.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1326-6.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1400-31d.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1500-55.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1500-59.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1500-59a.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1500-60.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1500-63a.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1553-1.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1553-4.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1560-33.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1640-6.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1700-23.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1700-30.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1700-31.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1700-32.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1700-37.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1710-30.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1730-6.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1740-13.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1741-11d.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1741-8.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1742-1.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1754-6.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1754-6c.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1754-9.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-1770-1.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-3070-2a.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-3120-11a.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-3150-4a.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-3302.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-3571-2h.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-3574-2m.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-3710-7.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-3800-2.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5000-12f.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5210-11.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5214-2g.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5215-1.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5216-20.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5300-17.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5354-1.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5420-16d.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5530-14a.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5750-1h.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-1.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-10.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-11.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-12.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-13.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-14.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-15.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-16.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-17.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-2.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-3.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-4.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-5.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-6.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-7.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-8.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16-vol-9.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-5800-16.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-6100-13a.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-6260-3.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-7220-12r.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-7220-13.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-7220-24.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-7220-24p.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-7220-56.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-7220-65.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-7220.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-7300-21b.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-8023-3.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-p1070-12k.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-p3000-15b.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mco-p6320-13.mdx | Citation without effectiveDate | type MCO |
| VP-10 | Low | citations/mctfsprium-10100.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-10103.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-10111.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-120101.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-120103.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-120104.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-120303.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-20103.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-20104.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-20115.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-30301.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-30302.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-30303.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-30306.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-30307.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-40401.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-60212.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-60300.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70101.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70104.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70107.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70108.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70303.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70304.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70305.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70306.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70307.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70501.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70502.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70503.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70504.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70505.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70506.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70507.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70508.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70701.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-70702.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-80100.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-80101.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-80102.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-80201.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-80205.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-80207.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-80402.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-80403.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-80501.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-80604.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-81201.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-90101.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-90102.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-90201.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-90202.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-90601.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-90700.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-90701.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-90801.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-90802.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-90803.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-91003.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-91701.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-91800.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium-appendix-c.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctfsprium.mdx | Citation without effectiveDate | type MCTFSPRIUM |
| VP-10 | Low | citations/mctp-3-30g.mdx | Citation without effectiveDate | type OTHER |
| VP-10 | Low | citations/navmc-10030-1.mdx | Citation without effectiveDate | type NAVMC-FORM |
| VP-10 | Low | citations/navmc-10030.mdx | Citation without effectiveDate | type NAVMC-FORM |
| VP-10 | Low | citations/navmc-10132.mdx | Citation without effectiveDate | type NAVMC |
| VP-10 | Low | citations/navmc-10274.mdx | Citation without effectiveDate | type NAVMC |
| VP-10 | Low | citations/navmc-11116.mdx | Citation without effectiveDate | type NAVMC-FORM |
| VP-10 | Low | citations/navmc-11432.mdx | Citation without effectiveDate | type NAVMC |
| VP-10 | Low | citations/navmc-11533.mdx | Citation without effectiveDate | type NAVMC |
| VP-10 | Low | citations/navmc-11537.mdx | Citation without effectiveDate | type NAVMC |
| VP-10 | Low | citations/navmc-11800.mdx | Citation without effectiveDate | type NAVMC |
| VP-10 | Low | citations/navmc-1720-1c.mdx | Citation without effectiveDate | type NAVMC |
| VP-10 | Low | citations/navmc-2795.mdx | Citation without effectiveDate | type NAVMC |
| VP-10 | Low | citations/navmc-321m.mdx | Citation without effectiveDate | type NAVMC |
| VP-10 | Low | citations/paa-01-17.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-01-21.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-01-22.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-01-23.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-01-24.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-01-25.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-02-15.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-02-18.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-02-21.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-02-22.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-02-23.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-02-24.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-02-25.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-03-20.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-03-21.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-03-23.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-03-25.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-04-19.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-04-20.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-04-21.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-04-23.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-04-25.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-05-19.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-05-20.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-05-21.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-05-23.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-05-25.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-06-13.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-06-20.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-06-21.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-06-23.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-06-25.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-07-20.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-07-21.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-07-25.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-08-20.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-08-21.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-09-20.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-09-21.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-10-13.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-12-13.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/paa-14-13.mdx | Citation without effectiveDate | type PAA |
| VP-10 | Low | citations/secnav-m-5210-2.mdx | Citation without effectiveDate | type SECNAV |
| VP-10 | Low | citations/secnav-m-5215-1.mdx | Citation without effectiveDate | type SECNAV |
| VP-10 | Low | citations/secnav-m-5216-5.mdx | Citation without effectiveDate | type SECNAV |
| VP-10 | Low | citations/secnavinst-1000-10b.mdx | Citation without effectiveDate | type SECNAVINST |
| VP-10 | Low | citations/secnavinst-5210-16.mdx | Citation without effectiveDate | type SECNAVINST |
| VP-10 | Low | citations/ucmj.mdx | Citation without effectiveDate | type USC |
| VP-10 | Low | citations/usc-10-1052.mdx | Citation without effectiveDate | type USC |
| VP-10 | Low | citations/usc-10.mdx | Citation without effectiveDate | type USC |
| VP-10 | Low | citations/usc-5-5701.mdx | Citation without effectiveDate | type USC |
| VP-10 | Low | citations/usps-domestic-mail-manual.mdx | Citation without effectiveDate | type OTHER |
| VP-11 | Low | admin/.deleted-s1g1-defense-travel-system-overview.mdx | Hidden soft-deleted or trash file in content tree | dot-prefixed, skipped by sync-content.mjs, excluded from counts above |
| VP-11 | Low | citations/.deleted-manual-for-courts-martial-2024.mdx | Hidden soft-deleted or trash file in content tree | dot-prefixed, skipped by sync-content.mjs, excluded from counts above |
| VP-11 | Low | citations/.deleted-mco-7220-12-stub.mdx | Hidden soft-deleted or trash file in content tree | dot-prefixed, skipped by sync-content.mjs, excluded from counts above |
| VP-11 | Low | marines/.trash-basic-pay-comparable-grades.mdx | Hidden soft-deleted or trash file in content tree | dot-prefixed, skipped by sync-content.mjs, excluded from counts above |
| VP-11 | Low | marines/.trash-deployment-pays.mdx | Hidden soft-deleted or trash file in content tree | dot-prefixed, skipped by sync-content.mjs, excluded from counts above |
| VP-11 | Low | marines/.trash-pay-review-les.mdx | Hidden soft-deleted or trash file in content tree | dot-prefixed, skipped by sync-content.mjs, excluded from counts above |
| VP-11 | Low | marines/.trash-special-pays.mdx | Hidden soft-deleted or trash file in content tree | dot-prefixed, skipped by sync-content.mjs, excluded from counts above |
| VP-12 | Low | content/inspections/ | Support JSON files without programNumber | 23 files excluded from program checks, see Out of scope |
| VP-13 | Low | citations/dod-dts-regulations.mdx | alias repeated inside one entry (build allows) | alias DOD DTS REGULATIONS listed 2 times in dod-dts-regulations |
| VP-13 | Low | citations/dod-dts-regulations.mdx | alias repeated inside one entry (build allows) | alias DODI 5154.31 VOLUME 3 listed 4 times in dod-dts-regulations |
| VP-13 | Low | citations/dod-dts-regulations.mdx | alias repeated inside one entry (build allows) | alias DODI 5154.31 VOL 3 listed 2 times in dod-dts-regulations |
| VP-13 | Low | citations/dod-gtcc-regulations.mdx | alias repeated inside one entry (build allows) | alias DOD GTCC REGULATIONS listed 2 times in dod-gtcc-regulations |
| VP-13 | Low | citations/dodd-4500-09.mdx | alias repeated inside one entry (build allows) | alias DODD 4500.09 listed 2 times in dodd-4500-09 |
| VP-13 | Low | citations/dodd-4500-09.mdx | alias repeated inside one entry (build allows) | alias DOD 4500.9-R DEFENSE TRANSPORTATION REGULATION listed 2 times in dodd-4500-09 |
| VP-13 | Low | citations/dodd-5400-07.mdx | alias repeated inside one entry (build allows) | alias DOD DIRECTIVE 5400.07 listed 2 times in dodd-5400-07 |
| VP-13 | Low | citations/dodd-5400-07.mdx | alias repeated inside one entry (build allows) | alias DOD 5400.7-R listed 2 times in dodd-5400-07 |
| VP-13 | Low | citations/dodfmr-vol-1.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 1 listed 2 times in dodfmr-vol-1 |
| VP-13 | Low | citations/dodfmr-vol-1.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOLUME 1 listed 2 times in dodfmr-vol-1 |
| VP-13 | Low | citations/dodfmr-vol-1.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOL 1 listed 2 times in dodfmr-vol-1 |
| VP-13 | Low | citations/dodfmr-vol-1.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOLUME 1 listed 2 times in dodfmr-vol-1 |
| VP-13 | Low | citations/dodfmr-vol-1.mdx | alias repeated inside one entry (build allows) | alias DOD FMR 7000.14-R VOLUME 1 listed 2 times in dodfmr-vol-1 |
| VP-13 | Low | citations/dodfmr-vol-1.mdx | alias repeated inside one entry (build allows) | alias DOD 7000.14-R VOLUME 1 listed 2 times in dodfmr-vol-1 |
| VP-13 | Low | citations/dodfmr-vol-14.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOLUME 14 listed 2 times in dodfmr-vol-14 |
| VP-13 | Low | citations/dodfmr-vol-14.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 14 listed 2 times in dodfmr-vol-14 |
| VP-13 | Low | citations/dodfmr-vol-16.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOLUME 16 listed 2 times in dodfmr-vol-16 |
| VP-13 | Low | citations/dodfmr-vol-16.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 16 listed 2 times in dodfmr-vol-16 |
| VP-13 | Low | citations/dodfmr-vol-16.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOLUME 16 listed 2 times in dodfmr-vol-16 |
| VP-13 | Low | citations/dodfmr-vol-16.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 16 DEFINITIONS listed 2 times in dodfmr-vol-16 |
| VP-13 | Low | citations/dodfmr-vol-4.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOLUME 4 listed 2 times in dodfmr-vol-4 |
| VP-13 | Low | citations/dodfmr-vol-4.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 4 listed 2 times in dodfmr-vol-4 |
| VP-13 | Low | citations/dodfmr-vol-5.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 5 listed 2 times in dodfmr-vol-5 |
| VP-13 | Low | citations/dodfmr-vol-5.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOLUME 5 listed 2 times in dodfmr-vol-5 |
| VP-13 | Low | citations/dodfmr-vol-5.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOL 5 listed 2 times in dodfmr-vol-5 |
| VP-13 | Low | citations/dodfmr-vol-5.mdx | alias repeated inside one entry (build allows) | alias DOD 7000.14-R VOLUME 5 listed 2 times in dodfmr-vol-5 |
| VP-13 | Low | citations/dodfmr-vol-5.mdx | alias repeated inside one entry (build allows) | alias DOD 7000.14-R VOL 5 listed 2 times in dodfmr-vol-5 |
| VP-13 | Low | citations/dodfmr-vol-5.mdx | alias repeated inside one entry (build allows) | alias DOD FMR 7000.14-R VOLUME 5 DISBURSING POLICY listed 2 times in dodfmr-vol-5 |
| VP-13 | Low | citations/dodfmr-vol-5.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 5 DISBURSING POLICY listed 2 times in dodfmr-vol-5 |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 7A listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOLUME 7A listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOL 7A listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOLUME 7A listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DOD FMR 7000.14-R VOLUME 7A listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DOD 7000.14-R VOLUME 7A listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 7A MILITARY PAY POLICY listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 7A DOD MILITARY PAY POLICY listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DOD FMR 7000.14-R VOLUME 7A MILITARY PAY - ACTIVE DUTY AND RESERVE PAY listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 7A ACTIVE DUTY AND RESERVE PAY listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 7A APPENDIX B listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 7A APPENDIX B DISPOSITION OF FORFEITURES AND FINES listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7a.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 7A COMPARABLE GRADES listed 2 times in dodfmr-vol-7a |
| VP-13 | Low | citations/dodfmr-vol-7b.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOLUME 7B listed 2 times in dodfmr-vol-7b |
| VP-13 | Low | citations/dodfmr-vol-7b.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 7B listed 2 times in dodfmr-vol-7b |
| VP-13 | Low | citations/dodfmr-vol-7b.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOLUME 7B listed 2 times in dodfmr-vol-7b |
| VP-13 | Low | citations/dodfmr-vol-7b.mdx | alias repeated inside one entry (build allows) | alias DOD FMR 7000.14-R VOLUME 7B RESERVE RETIREMENT listed 2 times in dodfmr-vol-7b |
| VP-13 | Low | citations/dodfmr-vol-7b.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 7B RESERVE RETIREMENT listed 2 times in dodfmr-vol-7b |
| VP-13 | Low | citations/dodfmr-vol-8.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 8 listed 2 times in dodfmr-vol-8 |
| VP-13 | Low | citations/dodfmr-vol-8.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOLUME 8 listed 2 times in dodfmr-vol-8 |
| VP-13 | Low | citations/dodfmr-vol-8.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOL 8 listed 2 times in dodfmr-vol-8 |
| VP-13 | Low | citations/dodfmr-vol-8.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOLUME 8 listed 2 times in dodfmr-vol-8 |
| VP-13 | Low | citations/dodfmr-vol-8.mdx | alias repeated inside one entry (build allows) | alias DOD 7000.14-R VOLUME 8 listed 2 times in dodfmr-vol-8 |
| VP-13 | Low | citations/dodfmr-vol-8.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 8 CIVILIAN PAY POLICY listed 2 times in dodfmr-vol-8 |
| VP-13 | Low | citations/dodfmr-vol-9.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 9 listed 2 times in dodfmr-vol-9 |
| VP-13 | Low | citations/dodfmr-vol-9.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOLUME 9 listed 2 times in dodfmr-vol-9 |
| VP-13 | Low | citations/dodfmr-vol-9.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOL 9 listed 2 times in dodfmr-vol-9 |
| VP-13 | Low | citations/dodfmr-vol-9.mdx | alias repeated inside one entry (build allows) | alias DOD FMR VOLUME 9 listed 2 times in dodfmr-vol-9 |
| VP-13 | Low | citations/dodfmr-vol-9.mdx | alias repeated inside one entry (build allows) | alias DOD FMR 7000.14-R VOLUME 9 listed 2 times in dodfmr-vol-9 |
| VP-13 | Low | citations/dodfmr-vol-9.mdx | alias repeated inside one entry (build allows) | alias DOD 7000.14-R VOLUME 9 listed 2 times in dodfmr-vol-9 |
| VP-13 | Low | citations/dodfmr-vol-9.mdx | alias repeated inside one entry (build allows) | alias DOD 7000.14-R VOL 9 listed 2 times in dodfmr-vol-9 |
| VP-13 | Low | citations/dodfmr-vol-9.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 9 TRAVEL POLICY listed 2 times in dodfmr-vol-9 |
| VP-13 | Low | citations/dodfmr-vol-9.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 9 TDY TRAVEL listed 2 times in dodfmr-vol-9 |
| VP-13 | Low | citations/dodfmr-vol-9.mdx | alias repeated inside one entry (build allows) | alias DODFMR VOL 9 DEFINITIONS listed 2 times in dodfmr-vol-9 |
| VP-13 | Low | citations/dodi-1000-13.mdx | alias repeated inside one entry (build allows) | alias DODI 1000.13 listed 2 times in dodi-1000-13 |
| VP-13 | Low | citations/dodi-1015-11.mdx | alias repeated inside one entry (build allows) | alias DODI 1015.11 listed 2 times in dodi-1015-11 |
| VP-13 | Low | citations/dodi-1015-11.mdx | alias repeated inside one entry (build allows) | alias DOD INSTRUCTION 1015.11 listed 2 times in dodi-1015-11 |
| VP-13 | Low | citations/dodi-1015-11.mdx | alias repeated inside one entry (build allows) | alias DOD LODGING POLICY listed 2 times in dodi-1015-11 |
| VP-13 | Low | citations/dodi-1020-03.mdx | alias repeated inside one entry (build allows) | alias DODI 1020.03 listed 2 times in dodi-1020-03 |
| VP-13 | Low | citations/dodi-1300-18.mdx | alias repeated inside one entry (build allows) | alias DODI 1300.18 listed 2 times in dodi-1300-18 |
| VP-13 | Low | citations/dodi-1300-18.mdx | alias repeated inside one entry (build allows) | alias DOD INSTRUCTION 1300.18 listed 2 times in dodi-1300-18 |
| VP-13 | Low | citations/dodi-1304-27.mdx | alias repeated inside one entry (build allows) | alias DODI 1304.27 listed 2 times in dodi-1304-27 |
| VP-13 | Low | citations/dodi-1322-25.mdx | alias repeated inside one entry (build allows) | alias DODI 1322.25 listed 2 times in dodi-1322-25 |
| VP-13 | Low | citations/dodi-1325-07.mdx | alias repeated inside one entry (build allows) | alias DOD INSTRUCTION 1325.07 listed 2 times in dodi-1325-07 |
| VP-13 | Low | citations/dodi-1327-06.mdx | alias repeated inside one entry (build allows) | alias DODI 1327.06 listed 2 times in dodi-1327-06 |
| VP-13 | Low | citations/dodi-1327-06.mdx | alias repeated inside one entry (build allows) | alias DOWI 1327.06 listed 2 times in dodi-1327-06 |
| VP-13 | Low | citations/dodi-1327-06.mdx | alias repeated inside one entry (build allows) | alias DODI 1327.6 listed 2 times in dodi-1327-06 |
| VP-13 | Low | citations/dodi-1332-14.mdx | alias repeated inside one entry (build allows) | alias DODI 1332.14 listed 2 times in dodi-1332-14 |
| VP-13 | Low | citations/dodi-1332-14.mdx | alias repeated inside one entry (build allows) | alias DOD INSTRUCTION 1332.14 listed 2 times in dodi-1332-14 |
| VP-13 | Low | citations/dodi-1332-18.mdx | alias repeated inside one entry (build allows) | alias DODI 1332.18 listed 2 times in dodi-1332-18 |
| VP-13 | Low | citations/dodi-1332-18.mdx | alias repeated inside one entry (build allows) | alias DOD INSTRUCTION 1332.18 listed 2 times in dodi-1332-18 |
| VP-13 | Low | citations/dodi-1332-18.mdx | alias repeated inside one entry (build allows) | alias DODI 1332.18 DISABILITY EVALUATION SYSTEM listed 2 times in dodi-1332-18 |
| VP-13 | Low | citations/dodi-1332-45.mdx | alias repeated inside one entry (build allows) | alias DODI 1332.45 listed 2 times in dodi-1332-45 |
| VP-13 | Low | citations/dodi-1332-45.mdx | alias repeated inside one entry (build allows) | alias DOD INSTRUCTION 1332.45 listed 2 times in dodi-1332-45 |
| VP-13 | Low | citations/dodi-1332-45.mdx | alias repeated inside one entry (build allows) | alias DODI 1332.45 DISABILITY EVALUATION SYSTEM (DES) listed 2 times in dodi-1332-45 |
| VP-13 | Low | citations/dodi-1340-09.mdx | alias repeated inside one entry (build allows) | alias DODI 1340.09 listed 2 times in dodi-1340-09 |
| VP-13 | Low | citations/dodi-1340-09.mdx | alias repeated inside one entry (build allows) | alias DOWI 1340.09 listed 2 times in dodi-1340-09 |
| VP-13 | Low | citations/dodi-1340-26.mdx | alias repeated inside one entry (build allows) | alias DODI 1340.26 listed 2 times in dodi-1340-26 |
| VP-13 | Low | citations/dodi-1340-27.mdx | alias repeated inside one entry (build allows) | alias DODI 1340.27 listed 2 times in dodi-1340-27 |
| VP-13 | Low | citations/dodi-1341-13.mdx | alias repeated inside one entry (build allows) | alias DODI 1341.13 listed 2 times in dodi-1341-13 |
| VP-13 | Low | citations/dodi-1341-14.mdx | alias repeated inside one entry (build allows) | alias DODI 1341.14 listed 2 times in dodi-1341-14 |
| VP-13 | Low | citations/dodi-1341-15.mdx | alias repeated inside one entry (build allows) | alias DODI 1341.15 listed 2 times in dodi-1341-15 |
| VP-13 | Low | citations/dodi-1342-22.mdx | alias repeated inside one entry (build allows) | alias DODI 1342.22 listed 2 times in dodi-1342-22 |
| VP-13 | Low | citations/dodi-1350-02.mdx | alias repeated inside one entry (build allows) | alias DODI 1350.02 listed 2 times in dodi-1350-02 |
| VP-13 | Low | citations/dodi-1400-25.mdx | alias repeated inside one entry (build allows) | alias DODI 1400.25 listed 2 times in dodi-1400-25 |
| VP-13 | Low | citations/dodi-4525-09.mdx | alias repeated inside one entry (build allows) | alias DODI 4525.09 listed 2 times in dodi-4525-09 |
| VP-13 | Low | citations/dodi-5025-01.mdx | alias repeated inside one entry (build allows) | alias DODI 5025.01 listed 2 times in dodi-5025-01 |
| VP-13 | Low | citations/dodi-5025-01.mdx | alias repeated inside one entry (build allows) | alias DOD 5025.01-M listed 2 times in dodi-5025-01 |
| VP-13 | Low | citations/dodi-5154-31.mdx | alias repeated inside one entry (build allows) | alias DODI 5154.31 listed 2 times in dodi-5154-31 |
| VP-13 | Low | citations/dodi-5154-31.mdx | alias repeated inside one entry (build allows) | alias DODI 5154.31 VOLUME 4 listed 2 times in dodi-5154-31 |
| VP-13 | Low | citations/dodi-5154-31.mdx | alias repeated inside one entry (build allows) | alias DODI 5154.31 VOL 4 listed 2 times in dodi-5154-31 |
| VP-13 | Low | citations/dodi-5160-70.mdx | alias repeated inside one entry (build allows) | alias DODI 5160.70 listed 2 times in dodi-5160-70 |
| VP-13 | Low | citations/dodi-6025-19.mdx | alias repeated inside one entry (build allows) | alias DODI 6025.19 listed 2 times in dodi-6025-19 |
| VP-13 | Low | citations/dodi-6055-07.mdx | alias repeated inside one entry (build allows) | alias DODI 6055.07 listed 2 times in dodi-6055-07 |
| VP-13 | Low | citations/dodi-6490-03.mdx | alias repeated inside one entry (build allows) | alias DODI 6490.03 listed 2 times in dodi-6490-03 |
| VP-13 | Low | citations/dodi-6490-03.mdx | alias repeated inside one entry (build allows) | alias DOD INSTRUCTION 6490.03 listed 2 times in dodi-6490-03 |
| VP-13 | Low | citations/dodi-6490-03.mdx | alias repeated inside one entry (build allows) | alias DODI 6490.03 DEPLOYMENT HEALTH listed 2 times in dodi-6490-03 |
| VP-13 | Low | citations/dodi-7730-67.mdx | alias repeated inside one entry (build allows) | alias DODI 7730.67 listed 2 times in dodi-7730-67 |
| VP-13 | Low | citations/dodi-8500-01.mdx | alias repeated inside one entry (build allows) | alias DODI 8500.01 listed 2 times in dodi-8500-01 |
| VP-13 | Low | citations/dodi-8500-01.mdx | alias repeated inside one entry (build allows) | alias DOD INSTRUCTION 8500.01 listed 2 times in dodi-8500-01 |
| VP-13 | Low | citations/dodi-8500-01.mdx | alias repeated inside one entry (build allows) | alias DODI 8500.01 CYBERSECURITY listed 2 times in dodi-8500-01 |
| VP-13 | Low | citations/dodm-1315-21-v1.mdx | alias repeated inside one entry (build allows) | alias DODM 1315.21 VOL 1 listed 2 times in dodm-1315-21-v1 |
| VP-13 | Low | citations/dodm-1315-21-v1.mdx | alias repeated inside one entry (build allows) | alias DOWM 1315.21 VOL 1 listed 2 times in dodm-1315-21-v1 |
| VP-13 | Low | citations/dodm-1315-21-v1.mdx | alias repeated inside one entry (build allows) | alias DOWM 1315.21 VOLUME 1 listed 2 times in dodm-1315-21-v1 |
| VP-13 | Low | citations/dodm-1315-21-v2.mdx | alias repeated inside one entry (build allows) | alias DODM 1315.21 listed 2 times in dodm-1315-21-v2 |
| VP-13 | Low | citations/dodm-1315-21-v2.mdx | alias repeated inside one entry (build allows) | alias DOWM 1315.21 listed 2 times in dodm-1315-21-v2 |
| VP-13 | Low | citations/dodm-1315-21-v2.mdx | alias repeated inside one entry (build allows) | alias DODM 1315.21 VOL 2 listed 2 times in dodm-1315-21-v2 |
| VP-13 | Low | citations/dodm-1315-21-v2.mdx | alias repeated inside one entry (build allows) | alias DOWM 1315.21 VOL 2 listed 2 times in dodm-1315-21-v2 |
| VP-13 | Low | citations/dodm-1315-21-v2.mdx | alias repeated inside one entry (build allows) | alias DOWM 1315.21 VOLUME 2 listed 2 times in dodm-1315-21-v2 |
| VP-13 | Low | citations/dowi-1336-07.mdx | alias repeated inside one entry (build allows) | alias DOWI 1336.07 listed 2 times in dowi-1336-07 |
| VP-13 | Low | citations/dowi-1336-07.mdx | alias repeated inside one entry (build allows) | alias DODI 1336.07 listed 2 times in dowi-1336-07 |
| VP-13 | Low | citations/dowi-1341-09.mdx | alias repeated inside one entry (build allows) | alias DOWI 1341.09 listed 2 times in dowi-1341-09 |
| VP-13 | Low | citations/dowi-1341-09.mdx | alias repeated inside one entry (build allows) | alias DODI 1341.09 listed 2 times in dowi-1341-09 |
| VP-13 | Low | citations/jtr.mdx | alias repeated inside one entry (build allows) | alias DOD JOINT TRAVEL REGULATIONS listed 2 times in jtr |
| VP-13 | Low | citations/mcbul-5210.mdx | alias repeated inside one entry (build allows) | alias MCBUL 5210 listed 2 times in mcbul-5210 |
| VP-13 | Low | citations/mcbul-5810.mdx | alias repeated inside one entry (build allows) | alias MCBUL 5810 listed 2 times in mcbul-5810 |
| VP-13 | Low | citations/mco-5300-17a.mdx | alias repeated inside one entry (build allows) | alias MCO 5300.17A W/ADMIN CH-2 listed 2 times in mco-5300-17a |
| VP-13 | Low | citations/mco-6110-3a.mdx | alias repeated inside one entry (build allows) | alias MCO 6110.3A W/ADMIN CH-4 listed 2 times in mco-6110-3a |
| VP-14 | Low | admin/iandi-active-duty-training.mdx | summary over 160 characters | length 212 |
| VP-14 | Low | admin/iandi-administrative-actions-misconduct.mdx | summary over 160 characters | length 235 |
| VP-14 | Low | admin/iandi-ados.mdx | summary over 160 characters | length 224 |
| VP-14 | Low | admin/iandi-annual-training-specifics.mdx | summary over 160 characters | length 213 |
| VP-14 | Low | admin/iandi-commissary-exchange-and-qol.mdx | summary over 160 characters | length 286 |
| VP-14 | Low | admin/iandi-court-martial-for-reservists.mdx | summary over 160 characters | length 254 |
| VP-14 | Low | admin/iandi-demobilization-processing.mdx | summary over 160 characters | length 235 |
| VP-14 | Low | admin/iandi-federal-and-state-benefits.mdx | summary over 160 characters | length 242 |
| VP-14 | Low | admin/iandi-funeral-honors-duty.mdx | summary over 160 characters | length 181 |
| VP-14 | Low | admin/iandi-general-reserve-overview.mdx | summary over 160 characters | length 233 |
| VP-14 | Low | admin/iandi-inactive-duty-overview.mdx | summary over 160 characters | length 190 |
| VP-14 | Low | admin/iandi-incentive-programs.mdx | summary over 160 characters | length 216 |
| VP-14 | Low | admin/iandi-irr-and-standby-participation.mdx | summary over 160 characters | length 213 |
| VP-14 | Low | admin/iandi-irr-mandatory-muster.mdx | summary over 160 characters | length 222 |
| VP-14 | Low | admin/iandi-irr-overview.mdx | summary over 160 characters | length 204 |
| VP-14 | Low | admin/iandi-irr-participation.mdx | summary over 160 characters | length 219 |
| VP-14 | Low | admin/iandi-irr-recall-and-mobilization.mdx | summary over 160 characters | length 236 |
| VP-14 | Low | admin/iandi-irr-transition.mdx | summary over 160 characters | length 211 |
| VP-14 | Low | admin/iandi-lateral-move-mos.mdx | summary over 160 characters | length 245 |
| VP-14 | Low | admin/iandi-line-of-duty-coverage.mdx | summary over 160 characters | length 218 |
| VP-14 | Low | admin/iandi-loan-repayment-programs.mdx | summary over 160 characters | length 207 |
| VP-14 | Low | admin/iandi-mcr-organization.mdx | summary over 160 characters | length 179 |
| VP-14 | Low | admin/iandi-medical-board-process.mdx | summary over 160 characters | length 253 |
| VP-14 | Low | admin/iandi-medical-hold-and-limdu.mdx | summary over 160 characters | length 237 |
| VP-14 | Low | admin/iandi-medical-standards-overview.mdx | summary over 160 characters | length 220 |
| VP-14 | Low | admin/iandi-mgib-sr.mdx | summary over 160 characters | length 201 |
| VP-14 | Low | admin/iandi-mobilization-active-duty-pay.mdx | summary over 160 characters | length 225 |
| VP-14 | Low | admin/iandi-mobilization-authorities.mdx | summary over 160 characters | length 216 |
| VP-14 | Low | admin/iandi-mobilization-family-support.mdx | summary over 160 characters | length 242 |
| VP-14 | Low | admin/iandi-mobilization-orders-processing.mdx | summary over 160 characters | length 253 |
| VP-14 | Low | admin/iandi-muster-duty.mdx | summary over 160 characters | length 184 |
| VP-14 | Low | admin/iandi-naps.mdx | summary over 160 characters | length 256 |
| VP-14 | Low | admin/iandi-njp-for-reservists.mdx | summary over 160 characters | length 248 |
| VP-14 | Low | admin/iandi-nps-enlisted-accessions.mdx | summary over 160 characters | length 216 |
| VP-14 | Low | admin/iandi-periodic-health-assessment.mdx | summary over 160 characters | length 237 |
| VP-14 | Low | admin/iandi-point-system.mdx | summary over 160 characters | length 230 |
| VP-14 | Low | admin/iandi-post-911-gi-bill.mdx | summary over 160 characters | length 272 |
| VP-14 | Low | admin/iandi-pre-mobilization-and-tamp.mdx | summary over 160 characters | length 270 |
| VP-14 | Low | admin/iandi-pre-mobilization-screening.mdx | summary over 160 characters | length 261 |
| VP-14 | Low | admin/iandi-process-idt-pay.mdx | summary over 160 characters | length 199 |
| VP-14 | Low | admin/iandi-ps-enlisted-accessions.mdx | summary over 160 characters | length 225 |
| VP-14 | Low | admin/iandi-ps-officer-accessions.mdx | summary over 160 characters | length 205 |
| VP-14 | Low | admin/iandi-rc-medical-care-eligibility.mdx | summary over 160 characters | length 276 |
| VP-14 | Low | admin/iandi-ready-reserve.mdx | summary over 160 characters | length 163 |
| VP-14 | Low | admin/iandi-reserve-authorities-and-approvals.mdx | summary over 160 characters | length 218 |
| VP-14 | Low | admin/iandi-reserve-communications-and-reporting.mdx | summary over 160 characters | length 240 |
| VP-14 | Low | admin/iandi-reserve-dental-readiness.mdx | summary over 160 characters | length 237 |
| VP-14 | Low | admin/iandi-reserve-disciplinary-reporting.mdx | summary over 160 characters | length 240 |
| VP-14 | Low | admin/iandi-reserve-id-cards.mdx | summary over 160 characters | length 238 |
| VP-14 | Low | admin/iandi-reserve-obligation.mdx | summary over 160 characters | length 253 |
| VP-14 | Low | admin/iandi-reserve-promotions.mdx | summary over 160 characters | length 220 |
| VP-14 | Low | admin/iandi-reserve-retirements.mdx | summary over 160 characters | length 231 |
| VP-14 | Low | admin/iandi-reserve-travel-reimbursement.mdx | summary over 160 characters | length 245 |
| VP-14 | Low | admin/iandi-retirement-health-and-id.mdx | summary over 160 characters | length 237 |
| VP-14 | Low | admin/iandi-retirement-pay-calculation.mdx | summary over 160 characters | length 219 |
| VP-14 | Low | admin/iandi-rocp-officer-accessions.mdx | summary over 160 characters | length 222 |
| VP-14 | Low | admin/iandi-selres-career-counseling.mdx | summary over 160 characters | length 233 |
| VP-14 | Low | admin/iandi-selres-enlisted-specifics.mdx | summary over 160 characters | length 210 |
| VP-14 | Low | admin/iandi-selres-family-readiness.mdx | summary over 160 characters | length 212 |
| VP-14 | Low | admin/iandi-selres-idt-period-limitations.mdx | summary over 160 characters | length 225 |
| VP-14 | Low | admin/iandi-selres-mobilization-readiness.mdx | summary over 160 characters | length 244 |
| VP-14 | Low | admin/iandi-selres-officer-specifics.mdx | summary over 160 characters | length 231 |
| VP-14 | Low | admin/iandi-selres-overview.mdx | summary over 160 characters | length 236 |
| VP-14 | Low | admin/iandi-selres-participation.mdx | summary over 160 characters | length 212 |
| VP-14 | Low | admin/iandi-smp-and-plc.mdx | summary over 160 characters | length 214 |
| VP-14 | Low | admin/iandi-standby-administration.mdx | summary over 160 characters | length 220 |
| VP-14 | Low | admin/iandi-standby-and-retired-reserve.mdx | summary over 160 characters | length 200 |
| VP-14 | Low | admin/iandi-standby-categories.mdx | summary over 160 characters | length 232 |
| VP-14 | Low | admin/iandi-standby-eligibility-and-transfer.mdx | summary over 160 characters | length 212 |
| VP-14 | Low | admin/iandi-standby-recall-authority.mdx | summary over 160 characters | length 215 |
| VP-14 | Low | admin/iandi-statement-of-understanding.mdx | summary over 160 characters | length 211 |
| VP-14 | Low | admin/iandi-stop-loss-and-mobilization-hold.mdx | summary over 160 characters | length 239 |
| VP-14 | Low | admin/iandi-survivor-benefit-plan.mdx | summary over 160 characters | length 223 |
| VP-14 | Low | admin/iandi-tricare-for-life.mdx | summary over 160 characters | length 225 |
| VP-14 | Low | admin/iandi-tricare-reserve-select.mdx | summary over 160 characters | length 230 |
| VP-14 | Low | admin/iandi-tricare-retired-reserve.mdx | summary over 160 characters | length 213 |
| VP-14 | Low | admin/iandi-tuition-assistance.mdx | summary over 160 characters | length 230 |
| VP-14 | Low | admin/iandi-ucmj-authority.mdx | summary over 160 characters | length 202 |
| VP-14 | Low | admin/iandi-ucmj-jurisdiction.mdx | summary over 160 characters | length 255 |
| VP-14 | Low | admin/iandi-unsatisfactory-participation.mdx | summary over 160 characters | length 236 |
| VP-14 | Low | admin/iandi-utilization-categories.mdx | summary over 160 characters | length 195 |
| VP-14 | Low | admin/iandi-va-home-loan-and-benefits.mdx | summary over 160 characters | length 247 |
| VP-14 | Low | admin/pac-bah-overview.mdx | summary over 160 characters | length 261 |
| VP-14 | Low | admin/pac-bah-pcs-and-tdy.mdx | summary over 160 characters | length 192 |
| VP-14 | Low | admin/pac-bah-special-categories.mdx | summary over 160 characters | length 219 |
| VP-14 | Low | admin/pac-bah-with-dependents.mdx | summary over 160 characters | length 232 |
| VP-14 | Low | admin/pac-bah-without-dependents.mdx | summary over 160 characters | length 204 |
| VP-14 | Low | admin/pac-bas-overview.mdx | summary over 160 characters | length 243 |
| VP-14 | Low | admin/pac-bas-special-categories.mdx | summary over 160 characters | length 208 |
| VP-14 | Low | admin/pac-combat-zone-tax-exclusion.mdx | summary over 160 characters | length 240 |
| VP-14 | Low | admin/pac-cost-of-living-allowance.mdx | summary over 160 characters | length 253 |
| VP-14 | Low | admin/pac-disability-severance-pay.mdx | summary over 160 characters | length 240 |
| VP-14 | Low | admin/pac-family-separation-allowance.mdx | summary over 160 characters | length 249 |
| VP-14 | Low | admin/pac-flight-pay.mdx | summary over 160 characters | length 214 |
| VP-14 | Low | admin/pac-hardship-duty-pay.mdx | summary over 160 characters | length 214 |
| VP-14 | Low | admin/pac-hazardous-duty-incentive-pay.mdx | summary over 160 characters | length 208 |
| VP-14 | Low | admin/pac-hostile-fire-imminent-danger-pay.mdx | summary over 160 characters | length 292 |
| VP-14 | Low | admin/pac-iram-overview.mdx | summary over 160 characters | length 265 |
| VP-14 | Low | admin/pac-navmc-10922-processing.mdx | summary over 160 characters | length 196 |
| VP-14 | Low | admin/pac-ompf-document-categories.mdx | summary over 160 characters | length 223 |
| VP-14 | Low | admin/pac-ompf-overview.mdx | summary over 160 characters | length 276 |
| VP-14 | Low | admin/pac-ompf-submission.mdx | summary over 160 characters | length 210 |
| VP-14 | Low | admin/pac-pay-debts-and-waivers.mdx | summary over 160 characters | length 227 |
| VP-14 | Low | admin/pac-records-disposition.mdx | summary over 160 characters | length 230 |
| VP-14 | Low | admin/pac-sea-pay.mdx | summary over 160 characters | length 215 |
| VP-14 | Low | admin/pac-separation-pay.mdx | summary over 160 characters | length 275 |
| VP-14 | Low | admin/pac-special-duty-assignment-pay.mdx | summary over 160 characters | length 269 |
| VP-14 | Low | admin/s1g1-absentee-deserter-confinement-clemency-and-parole-administration.mdx | summary over 160 characters | length 192 |
| VP-14 | Low | admin/s1g1-absentee-deserter-confinement-confinement-administration.mdx | summary over 160 characters | length 177 |
| VP-14 | Low | admin/s1g1-absentee-deserter-confinement-deserter-declaration-and-dd-553-processing.mdx | summary over 160 characters | length 178 |
| VP-14 | Low | admin/s1g1-absentee-deserter-confinement-mcacc-coordination-and-civil-liaison.mdx | summary over 160 characters | length 212 |
| VP-14 | Low | admin/s1g1-absentee-deserter-confinement-pay-reconciliation-for-ua-deserter-and-confined-marines.mdx | summary over 160 characters | length 178 |
| VP-14 | Low | admin/s1g1-civilian-awards-overview.mdx | summary over 160 characters | length 188 |
| VP-14 | Low | admin/s1g1-civilian-awards-sharepoint-submission.mdx | summary over 160 characters | length 192 |
| VP-14 | Low | admin/s1g1-command-investigations-death-cases-and-special-considerations.mdx | summary over 160 characters | length 164 |
| VP-14 | Low | admin/s1g1-command-investigations-evidence-witnesses-and-warnings.mdx | summary over 160 characters | length 166 |
| VP-14 | Low | admin/s1g1-command-investigations-findings-opinions-recommendations-and-report-format.mdx | summary over 160 characters | length 175 |
| VP-14 | Low | admin/s1g1-command-investigations-line-of-duty-and-misconduct-determinations.mdx | summary over 160 characters | length 163 |
| VP-14 | Low | admin/s1g1-command-investigations-overview.mdx | summary over 160 characters | length 200 |
| VP-14 | Low | admin/s1g1-congressional-inquiries-constituent-inquiry-processing.mdx | summary over 160 characters | length 258 |
| VP-14 | Low | admin/s1g1-congressional-inquiries-foia-release-on-inquiries.mdx | summary over 160 characters | length 194 |
| VP-14 | Low | admin/s1g1-congressional-inquiries-hac-surveys-and-investigations-staff-visits.mdx | summary over 160 characters | length 208 |
| VP-14 | Low | admin/s1g1-deployments-exercises-operations-deployment-planning-and-execution.mdx | summary over 160 characters | length 193 |
| VP-14 | Low | admin/s1g1-deployments-exercises-operations-drrs-and-readiness-reporting.mdx | summary over 160 characters | length 270 |
| VP-14 | Low | admin/s1g1-deployments-exercises-operations-exercise-and-training-coordination.mdx | summary over 160 characters | length 201 |
| VP-14 | Low | admin/s1g1-deployments-exercises-operations-global-force-management.mdx | summary over 160 characters | length 235 |
| VP-14 | Low | admin/s1g1-deployments-exercises-operations-individual-augment-and-tasking.mdx | summary over 160 characters | length 235 |
| VP-14 | Low | admin/s1g1-deployments-exercises-operations-magtf-and-meu-operations.mdx | summary over 160 characters | length 218 |
| VP-14 | Low | admin/s1g1-deployments-exercises-operations-overview.mdx | summary over 160 characters | length 317 |
| VP-14 | Low | admin/s1g1-deployments-exercises-operations-perstempo-reporting-and-waivers.mdx | summary over 160 characters | length 198 |
| VP-14 | Low | admin/s1g1-deployments-exercises-operations-pre-deployment-and-redeployment.mdx | summary over 160 characters | length 181 |
| VP-14 | Low | admin/s1g1-directives-management-directives-control-point-and-files.mdx | summary over 160 characters | length 168 |
| VP-14 | Low | admin/s1g1-directives-management-marine-corps-orders.mdx | summary over 160 characters | length 162 |
| VP-14 | Low | admin/s1g1-directives-management-paragraph-numbering-and-format.mdx | summary over 160 characters | length 169 |
| VP-14 | Low | admin/s1g1-directives-management-periodic-review-and-cancellation.mdx | summary over 160 characters | length 168 |
| VP-14 | Low | admin/s1g1-directives-management-references-enclosures-and-reports.mdx | summary over 160 characters | length 162 |
| VP-14 | Low | admin/s1g1-directives-management-staffing-coordination-and-signature-authority.mdx | summary over 160 characters | length 179 |
| VP-14 | Low | admin/s1g1-dts-appointments-and-dd577.mdx | summary over 160 characters | length 192 |
| VP-14 | Low | admin/s1g1-dts-authorizations-and-orders-creation.mdx | summary over 160 characters | length 216 |
| VP-14 | Low | admin/s1g1-dts-debt-management-and-collection.mdx | summary over 160 characters | length 200 |
| VP-14 | Low | admin/s1g1-dts-gtcc-integration.mdx | summary over 160 characters | length 215 |
| VP-14 | Low | admin/s1g1-dts-reports-and-reconciliation.mdx | summary over 160 characters | length 243 |
| VP-14 | Low | admin/s1g1-dts-training-and-certifying-officer-legislation.mdx | summary over 160 characters | length 235 |
| VP-14 | Low | admin/s1g1-dts-vouchers-and-post-payment-review.mdx | summary over 160 characters | length 230 |
| VP-14 | Low | admin/s1g1-edfr-processing.mdx | summary over 160 characters | length 191 |
| VP-14 | Low | admin/s1g1-esr-management.mdx | summary over 160 characters | length 240 |
| VP-14 | Low | admin/s1g1-gtccp-apc-appointment-and-duties.mdx | summary over 160 characters | length 186 |
| VP-14 | Low | admin/s1g1-gtccp-cardholder-eligibility-and-application.mdx | summary over 160 characters | length 196 |
| VP-14 | Low | admin/s1g1-gtccp-cba-management.mdx | summary over 160 characters | length 199 |
| VP-14 | Low | admin/s1g1-gtccp-delinquency-management.mdx | summary over 160 characters | length 180 |
| VP-14 | Low | admin/s1g1-gtccp-mandatory-use-and-exemptions.mdx | summary over 160 characters | length 181 |
| VP-14 | Low | admin/s1g1-gtccp-misuse-abuse-fraud-and-visa-intellilink.mdx | summary over 160 characters | length 205 |
| VP-14 | Low | admin/s1g1-gtccp-overview.mdx | summary over 160 characters | length 224 |
| VP-14 | Low | admin/s1g1-gtccp-reimbursement-split-disbursement-and-cardholder-responsibilities.mdx | summary over 160 characters | length 200 |
| VP-14 | Low | admin/s1g1-gtccp-reports-and-program-review.mdx | summary over 160 characters | length 197 |
| VP-14 | Low | admin/s1g1-inbound-management-edfr-and-roster-reconciliation.mdx | summary over 160 characters | length 206 |
| VP-14 | Low | admin/s1g1-inbound-management-mctfs-join-and-ksd-upload.mdx | summary over 160 characters | length 185 |
| VP-14 | Low | admin/s1g1-inbound-management-ompf-and-srb-receipt.mdx | summary over 160 characters | length 180 |
| VP-14 | Low | admin/s1g1-inbound-management-overview.mdx | summary over 160 characters | length 230 |
| VP-14 | Low | admin/s1g1-inbound-management-pay-starts-and-allowance-initiation.mdx | summary over 160 characters | length 169 |
| VP-14 | Low | admin/s1g1-inbound-management-unit-check-in-procedures.mdx | summary over 160 characters | length 204 |
| VP-14 | Low | admin/s1g1-inspections-evidence-binder.mdx | summary over 160 characters | length 175 |
| VP-14 | Low | admin/s1g1-inspections-self-assessment-cycle.mdx | summary over 160 characters | length 181 |
| VP-14 | Low | admin/s1g1-inspections-support-overview.mdx | summary over 160 characters | length 167 |
| VP-14 | Low | admin/s1g1-leave-liberty-and-administrative-absence-special-leave-accrual.mdx | summary over 160 characters | length 165 |
| VP-14 | Low | admin/s1g1-legal-administration-administrative-investigations.mdx | summary over 160 characters | length 192 |
| VP-14 | Low | admin/s1g1-legal-administration-administrative-separations-legal-review.mdx | summary over 160 characters | length 240 |
| VP-14 | Low | admin/s1g1-legal-administration-courts-martial-administration.mdx | summary over 160 characters | length 243 |
| VP-14 | Low | admin/s1g1-legal-administration-criminal-justice-information-reporting.mdx | summary over 160 characters | length 266 |
| VP-14 | Low | admin/s1g1-legal-administration-legal-files-and-records-management.mdx | summary over 160 characters | length 246 |
| VP-14 | Low | admin/s1g1-legal-administration-nonjudicial-punishment-upb.mdx | summary over 160 characters | length 246 |
| VP-14 | Low | admin/s1g1-legal-administration-officer-misconduct-and-discipline.mdx | summary over 160 characters | length 174 |
| VP-14 | Low | admin/s1g1-legal-administration-overview.mdx | summary over 160 characters | length 246 |
| VP-14 | Low | admin/s1g1-legal-administration-pretrial-confinement-and-restriction.mdx | summary over 160 characters | length 239 |
| VP-14 | Low | admin/s1g1-limited-duty-expanded-permanent-limited-duty.mdx | summary over 160 characters | length 223 |
| VP-14 | Low | admin/s1g1-limited-duty-light-duty.mdx | summary over 160 characters | length 206 |
| VP-14 | Low | admin/s1g1-limited-duty-limdu-board-and-policy.mdx | summary over 160 characters | length 201 |
| VP-14 | Low | admin/s1g1-limited-duty-medical-extension.mdx | summary over 160 characters | length 191 |
| VP-14 | Low | admin/s1g1-limited-duty-operational-restrictions.mdx | summary over 160 characters | length 197 |
| VP-14 | Low | admin/s1g1-limited-duty-overview.mdx | summary over 160 characters | length 212 |
| VP-14 | Low | admin/s1g1-limited-duty-permanent-limited-duty.mdx | summary over 160 characters | length 235 |
| VP-14 | Low | admin/s1g1-limited-duty-unit-responsibilities-and-re-evaluation.mdx | summary over 160 characters | length 184 |
| VP-14 | Low | admin/s1g1-member-to-member-audit.mdx | summary over 160 characters | length 263 |
| VP-14 | Low | admin/s1g1-military-pay-processing-advance-pay-and-emergency-payments.mdx | summary over 160 characters | length 191 |
| VP-14 | Low | admin/s1g1-military-pay-processing-allotments-and-payroll-deductions.mdx | summary over 160 characters | length 247 |
| VP-14 | Low | admin/s1g1-military-pay-processing-allowances-bah-bas-and-uniforms.mdx | summary over 160 characters | length 194 |
| VP-14 | Low | admin/s1g1-military-pay-processing-casualty-deceased-and-incompetent-pay.mdx | summary over 160 characters | length 187 |
| VP-14 | Low | admin/s1g1-military-pay-processing-civilian-pay-coordination.mdx | summary over 160 characters | length 228 |
| VP-14 | Low | admin/s1g1-military-pay-processing-court-martial-njp-and-bankruptcy.mdx | summary over 160 characters | length 220 |
| VP-14 | Low | admin/s1g1-military-pay-processing-overview.mdx | summary over 160 characters | length 249 |
| VP-14 | Low | admin/s1g1-military-pay-processing-tax-withholding-and-fica.mdx | summary over 160 characters | length 254 |
| VP-14 | Low | admin/s1g1-military-pay-processing-tricare-dental-sgli-and-savings.mdx | summary over 160 characters | length 210 |
| VP-14 | Low | admin/s1g1-naval-correspondence-messages-business-and-multiple-address-letters.mdx | summary over 160 characters | length 187 |
| VP-14 | Low | admin/s1g1-naval-correspondence-messages-correspondence-register-and-filing.mdx | summary over 160 characters | length 222 |
| VP-14 | Low | admin/s1g1-naval-correspondence-messages-electronic-mail-and-classification.mdx | summary over 160 characters | length 193 |
| VP-14 | Low | admin/s1g1-naval-correspondence-messages-memorandum-and-endorsements.mdx | summary over 160 characters | length 179 |
| VP-14 | Low | admin/s1g1-naval-correspondence-messages-naval-letter.mdx | summary over 160 characters | length 239 |
| VP-14 | Low | admin/s1g1-naval-correspondence-messages-naval-messages-and-genadmins.mdx | summary over 160 characters | length 218 |
| VP-14 | Low | admin/s1g1-naval-correspondence-messages-overview.mdx | summary over 160 characters | length 234 |
| VP-14 | Low | admin/s1g1-naval-correspondence-messages-signing-authority-and-by-direction.mdx | summary over 160 characters | length 223 |
| VP-14 | Low | admin/s1g1-operations-event-incident-reporting-oprep-3-pinnacle-and-national-level-interest-reporting.mdx | summary over 160 characters | length 178 |
| VP-14 | Low | admin/s1g1-operations-event-incident-reporting-oprep-3-sir-serious-incident-reporting.mdx | summary over 160 characters | length 233 |
| VP-14 | Low | admin/s1g1-operations-event-incident-reporting-overview.mdx | summary over 160 characters | length 165 |
| VP-14 | Low | admin/s1g1-operations-event-incident-reporting-reportable-events-and-incidents.mdx | summary over 160 characters | length 183 |
| VP-14 | Low | admin/s1g1-operations-event-incident-reporting-sexual-assault-and-hazing-report-protocol.mdx | summary over 160 characters | length 238 |
| VP-14 | Low | admin/s1g1-operations-event-incident-reporting-sister-service-oprep-3-and-white-pinnacle-exercise.mdx | summary over 160 characters | length 223 |
| VP-14 | Low | admin/s1g1-outbound-management-final-pay-closeout-and-debt-clearance.mdx | summary over 160 characters | length 219 |
| VP-14 | Low | admin/s1g1-outbound-management-mctfs-detach-and-routing.mdx | summary over 160 characters | length 240 |
| VP-14 | Low | admin/s1g1-outbound-management-ompf-and-srb-handover.mdx | summary over 160 characters | length 167 |
| VP-14 | Low | admin/s1g1-outbound-management-outbound-interview-and-counseling.mdx | summary over 160 characters | length 239 |
| VP-14 | Low | admin/s1g1-outbound-management-overview.mdx | summary over 160 characters | length 251 |
| VP-14 | Low | admin/s1g1-outbound-management-separation-and-retirement-handoff.mdx | summary over 160 characters | length 228 |
| VP-14 | Low | admin/s1g1-outbound-management-unit-check-out-procedures.mdx | summary over 160 characters | length 206 |
| VP-14 | Low | admin/s1g1-page-11-entries.mdx | summary over 160 characters | length 255 |
| VP-14 | Low | admin/s1g1-pes-academic-fitness-reports.mdx | summary over 160 characters | length 177 |
| VP-14 | Low | admin/s1g1-pes-mol-fitrep-workflow-and-timeline.mdx | summary over 160 characters | length 174 |
| VP-14 | Low | admin/s1g1-pes-special-instructions.mdx | summary over 160 characters | length 198 |
| VP-14 | Low | admin/s1g1-postal-affairs-mpo-fpo-and-installation-operations.mdx | summary over 160 characters | length 237 |
| VP-14 | Low | admin/s1g1-postal-affairs-official-mail-management.mdx | summary over 160 characters | length 201 |
| VP-14 | Low | admin/s1g1-postal-affairs-overview.mdx | summary over 160 characters | length 238 |
| VP-14 | Low | admin/s1g1-postal-affairs-postal-officer-appointment-and-training.mdx | summary over 160 characters | length 181 |
| VP-14 | Low | admin/s1g1-postal-affairs-registered-and-certified-mail.mdx | summary over 160 characters | length 290 |
| VP-14 | Low | admin/s1g1-postal-affairs-unit-mail-room-and-accountability.mdx | summary over 160 characters | length 206 |
| VP-14 | Low | admin/s1g1-promotions-cpl-and-sgt-promotion.mdx | summary over 160 characters | length 162 |
| VP-14 | Low | admin/s1g1-reports-management-electronic-systems-and-ditpr-don.mdx | summary over 160 characters | length 181 |
| VP-14 | Low | admin/s1g1-reports-management-local-reports-and-omb-approval.mdx | summary over 160 characters | length 254 |
| VP-14 | Low | admin/s1g1-reports-management-overview.mdx | summary over 160 characters | length 285 |
| VP-14 | Low | admin/s1g1-reports-management-redundancy-review.mdx | summary over 160 characters | length 213 |
| VP-14 | Low | admin/s1g1-reports-management-reports-inventory.mdx | summary over 160 characters | length 168 |
| VP-14 | Low | admin/s1g1-reports-management-reports-manager-and-command-directive.mdx | summary over 160 characters | length 205 |
| VP-14 | Low | admin/s1g1-reports-management-three-year-review-cycle.mdx | summary over 160 characters | length 175 |
| VP-14 | Low | admin/s1g1-separation-retirement-officer-administrative-separation.mdx | summary over 160 characters | length 182 |
| VP-14 | Low | admin/s1g1-separation-retirement-physical-disability-evaluation-system.mdx | summary over 160 characters | length 174 |
| VP-14 | Low | admin/s1g1-separation-retirement-separation-pay-and-benefits.mdx | summary over 160 characters | length 195 |
| VP-14 | Low | admin/s1g1-special-hazardous-duty-pay-aviation-bonuses-and-incentive-pays.mdx | summary over 160 characters | length 257 |
| VP-14 | Low | admin/s1g1-special-hazardous-duty-pay-career-sea-pay-and-submarine-duty.mdx | summary over 160 characters | length 215 |
| VP-14 | Low | admin/s1g1-special-hazardous-duty-pay-hardship-duty-and-high-deployment.mdx | summary over 160 characters | length 228 |
| VP-14 | Low | admin/s1g1-special-hazardous-duty-pay-hazardous-duty-incentive-and-diving.mdx | summary over 160 characters | length 251 |
| VP-14 | Low | admin/s1g1-special-hazardous-duty-pay-hostile-fire-and-imminent-danger.mdx | summary over 160 characters | length 230 |
| VP-14 | Low | admin/s1g1-special-hazardous-duty-pay-overview.mdx | summary over 160 characters | length 306 |
| VP-14 | Low | admin/s1g1-special-hazardous-duty-pay-sdap-and-assignment-incentive-pay.mdx | summary over 160 characters | length 228 |
| VP-14 | Low | admin/s1g1-sponsorship-program-overview.mdx | summary over 160 characters | length 204 |
| VP-14 | Low | admin/s1g1-sponsorship-program-recruiting-and-reserve-sponsorship.mdx | summary over 160 characters | length 171 |
| VP-14 | Low | admin/s1g1-ssic-codes.mdx | summary over 160 characters | length 222 |
| VP-14 | Low | admin/s1g1-strength-manpower-reporting-bic-management-and-internal-assignments.mdx | summary over 160 characters | length 172 |
| VP-14 | Low | admin/s1g1-strength-manpower-reporting-force-design-2030-and-talent-management-context.mdx | summary over 160 characters | length 173 |
| VP-14 | Low | admin/s1g1-strength-manpower-reporting-precedence-levels-for-manning-and-staffing.mdx | summary over 160 characters | length 229 |
| VP-14 | Low | admin/s1g1-strength-manpower-reporting-table-of-organization-and-toecr-submissions.mdx | summary over 160 characters | length 161 |
| VP-14 | Low | admin/s1g1-strength-manpower-reporting-unit-readiness-reporting-personnel-pillar.mdx | summary over 160 characters | length 178 |
| VP-14 | Low | admin/s1g1-travel-entitlements-mileage-claims-evacuation-allowances.mdx | summary over 160 characters | length 213 |
| VP-14 | Low | admin/s1g1-travel-entitlements-mileage-claims-overview.mdx | summary over 160 characters | length 255 |
| VP-14 | Low | admin/s1g1-travel-entitlements-mileage-claims-permanent-duty-travel-pcs.mdx | summary over 160 characters | length 247 |
| VP-14 | Low | admin/s1g1-travel-entitlements-mileage-claims-processing-travel-claims-and-vouchers.mdx | summary over 160 characters | length 245 |
| VP-14 | Low | admin/s1g1-travel-entitlements-mileage-claims-tdy-travel-and-advances.mdx | summary over 160 characters | length 188 |
| VP-14 | Low | admin/s1g1-travel-entitlements-mileage-claims-transportation-allowances-and-mileage.mdx | summary over 160 characters | length 208 |
| VP-14 | Low | admin/s1g1-travel-entitlements-mileage-claims-travel-policy-general-information.mdx | summary over 160 characters | length 169 |
| VP-14 | Low | admin/s1g1-ud-mips-transactions.mdx | summary over 160 characters | length 232 |
| VP-14 | Low | admin/s1g1-vwap-confinement-facility-notifications.mdx | summary over 160 characters | length 234 |
| VP-14 | Low | admin/s1g1-vwap-installation-and-regional-liaison-officers.mdx | summary over 160 characters | length 266 |
| VP-14 | Low | admin/s1g1-vwap-law-enforcement-coordination.mdx | summary over 160 characters | length 220 |
| VP-14 | Low | admin/s1g1-vwap-legal-community-and-trial-counsel.mdx | summary over 160 characters | length 242 |
| VP-14 | Low | admin/s1g1-vwap-marine-family-services-coordination.mdx | summary over 160 characters | length 213 |
| VP-14 | Low | admin/s1g1-vwap-overview.mdx | summary over 160 characters | length 254 |
| VP-14 | Low | admin/s1g1-vwap-unit-commander-and-vwac.mdx | summary over 160 characters | length 311 |
| VP-14 | Low | admin/s1g1-vwap-victim-rights-and-notifications.mdx | summary over 160 characters | length 270 |
| VP-14 | Low | admin/s1g1-waivers-remissions-indebtedness-debt-collection-instructions-and-due-process.mdx | summary over 160 characters | length 219 |
| VP-14 | Low | admin/s1g1-waivers-remissions-indebtedness-debts-owed-by-individuals-collection-mechanisms.mdx | summary over 160 characters | length 193 |
| VP-14 | Low | admin/s1g1-waivers-remissions-indebtedness-dfas-routing-and-marine-corps-specific-procedures.mdx | summary over 160 characters | length 178 |
| VP-14 | Low | admin/s1g1-waivers-remissions-indebtedness-dod-debt-management-general-provisions.mdx | summary over 160 characters | length 207 |
| VP-14 | Low | admin/s1g1-waivers-remissions-indebtedness-hearings-informal-disputes-and-waivers-remissions.mdx | summary over 160 characters | length 172 |
| VP-14 | Low | admin/s1g1-waivers-remissions-indebtedness-interest-penalties-and-administrative-costs.mdx | summary over 160 characters | length 205 |
| VP-14 | Low | commander/audit-posture-core-vs-core-plus.mdx | summary over 160 characters | length 289 |
| VP-14 | Low | commander/audit-posture-igmc-fac.mdx | summary over 160 characters | length 216 |
| VP-14 | Low | commander/audit-posture-overview.mdx | summary over 160 characters | length 195 |
| VP-14 | Low | commander/aviation-flight-performance-boards.mdx | summary over 160 characters | length 330 |
| VP-14 | Low | commander/aviation-overview.mdx | summary over 160 characters | length 320 |
| VP-14 | Low | commander/aviation-pre-coc.mdx | summary over 160 characters | length 275 |
| VP-14 | Low | commander/aviation-readiness-training.mdx | summary over 160 characters | length 276 |
| VP-14 | Low | commander/aviation-safety-program.mdx | summary over 160 characters | length 287 |
| VP-14 | Low | commander/battle-rhythm-monthly-cmg.mdx | summary over 160 characters | length 273 |
| VP-14 | Low | commander/battle-rhythm-monthly-fpc-csne.mdx | summary over 160 characters | length 231 |
| VP-14 | Low | commander/battle-rhythm-overview.mdx | summary over 160 characters | length 193 |
| VP-14 | Low | commander/battle-rhythm-quarterly.mdx | summary over 160 characters | length 237 |
| VP-14 | Low | commander/discipline-command-investigations.mdx | summary over 160 characters | length 353 |
| VP-14 | Low | commander/discipline-convening-authority.mdx | summary over 160 characters | length 248 |
| VP-14 | Low | commander/discipline-njp-routing.mdx | summary over 160 characters | length 166 |
| VP-14 | Low | commander/discipline-overview.mdx | summary over 160 characters | length 319 |
| VP-14 | Low | commander/discipline-page-11-entries.mdx | summary over 160 characters | length 285 |
| VP-14 | Low | commander/discipline-upb-srb.mdx | summary over 160 characters | length 305 |
| VP-14 | Low | commander/fpc-cirras-commander-role.mdx | summary over 160 characters | length 301 |
| VP-14 | Low | commander/fpc-new-join-elevated-risk.mdx | summary over 160 characters | length 312 |
| VP-14 | Low | commander/fpc-overview.mdx | summary over 160 characters | length 304 |
| VP-14 | Low | commander/fpc-sop-and-meetings.mdx | summary over 160 characters | length 308 |
| VP-14 | Low | commander/inspections-lifecycle-car-submission.mdx | summary over 160 characters | length 196 |
| VP-14 | Low | commander/inspections-lifecycle-cgip-setup.mdx | summary over 160 characters | length 182 |
| VP-14 | Low | commander/inspections-lifecycle-fir-receipt.mdx | summary over 160 characters | length 189 |
| VP-14 | Low | commander/inspections-lifecycle-overview.mdx | summary over 160 characters | length 166 |
| VP-14 | Low | commander/inspections-lifecycle-records-retention.mdx | summary over 160 characters | length 175 |
| VP-14 | Low | commander/oversight-matrix-overview.mdx | summary over 160 characters | length 168 |
| VP-14 | Low | commander/personnel-admin-discharges.mdx | summary over 160 characters | length 195 |
| VP-14 | Low | commander/personnel-overview.mdx | summary over 160 characters | length 250 |
| VP-14 | Low | commander/personnel-perstempo-threshold-management.mdx | summary over 160 characters | length 197 |
| VP-14 | Low | commander/personnel-promotion-withholds.mdx | summary over 160 characters | length 247 |
| VP-14 | Low | commander/personnel-reductions-in-grade.mdx | summary over 160 characters | length 242 |
| VP-14 | Low | commander/personnel-retirement-processing.mdx | summary over 160 characters | length 259 |
| VP-14 | Low | commander/playbook-covered-offense.mdx | summary over 160 characters | length 226 |
| VP-14 | Low | commander/playbook-meo-complaint.mdx | summary over 160 characters | length 364 |
| VP-14 | Low | commander/playbook-off-base-arrest.mdx | summary over 160 characters | length 231 |
| VP-14 | Low | commander/playbook-overview.mdx | summary over 160 characters | length 207 |
| VP-14 | Low | commander/playbook-sapr-unrestricted.mdx | summary over 160 characters | length 220 |
| VP-14 | Low | commander/playbook-suicide-response.mdx | summary over 160 characters | length 271 |
| VP-14 | Low | commander/relationships-ipac-procedures.mdx | summary over 160 characters | length 169 |
| VP-14 | Low | commander/turnover-30-day-actions.mdx | summary over 160 characters | length 234 |
| VP-14 | Low | commander/turnover-90-120-and-recurring.mdx | summary over 160 characters | length 240 |
| VP-14 | Low | commander/turnover-day-0-7.mdx | summary over 160 characters | length 234 |
| VP-14 | Low | commander/turnover-legal-foundation.mdx | summary over 160 characters | length 208 |
| VP-14 | Low | commander/turnover-ostc-covered-offenses.mdx | summary over 160 characters | length 267 |
| VP-14 | Low | commander/turnover-outgoing-checklist.mdx | summary over 160 characters | length 251 |
| VP-14 | Low | commander/turnover-overview.mdx | summary over 160 characters | length 220 |
| VP-14 | Low | commander/turnover-pre-coc.mdx | summary over 160 characters | length 218 |
| VP-14 | Low | external-tools/crcr-worksheet-builder.mdx | summary over 160 characters | length 203 |
| VP-14 | Low | external-tools/edms.mdx | summary over 160 characters | length 223 |
| VP-14 | Low | external-tools/lineage.mdx | summary over 160 characters | length 205 |
| VP-14 | Low | external-tools/semperscribe.mdx | summary over 160 characters | length 173 |
| VP-14 | Low | external-tools/vicious.mdx | summary over 160 characters | length 250 |
| VP-14 | Low | inspections/igmc/1040-career-planning-program.json | summary over 160 characters | length 161 |
| VP-14 | Low | inspections/igmc/1650-military-awards.json | summary over 160 characters | length 172 |
| VP-14 | Low | inspections/igmc/1700.23-request-mast-procedures.json | summary over 160 characters | length 278 |
| VP-14 | Low | inspections/igmc/1900.16-separation-retirement-and-limited-duty.json | summary over 160 characters | length 278 |
| VP-14 | Low | inspections/igmc/5210-records-management.json | summary over 160 characters | length 278 |
| VP-14 | Low | inspections/igmc/5214-reports-management.json | summary over 160 characters | length 278 |
| VP-14 | Low | inspections/igmc/5215-directives-management.json | summary over 160 characters | length 253 |
| VP-14 | Low | inspections/igmc/5800.16-legal-administration.json | summary over 160 characters | length 219 |
| VP-14 | Low | leader/awards-choosing-the-award.mdx | summary over 160 characters | length 236 |
| VP-14 | Low | leader/awards-citation-mechanics.mdx | summary over 160 characters | length 242 |
| VP-14 | Low | leader/awards-combat-action-ribbon.mdx | summary over 160 characters | length 190 |
| VP-14 | Low | leader/awards-drafting-narrative.mdx | summary over 160 characters | length 177 |
| VP-14 | Low | leader/awards-end-of-tour-timing.mdx | summary over 160 characters | length 179 |
| VP-14 | Low | leader/awards-ompf-verification.mdx | summary over 160 characters | length 182 |
| VP-14 | Low | leader/awards-overview.mdx | summary over 160 characters | length 189 |
| VP-14 | Low | leader/awards-routing-and-endorsements.mdx | summary over 160 characters | length 189 |
| VP-14 | Low | leader/awards-unit-awards.mdx | summary over 160 characters | length 192 |
| VP-14 | Low | leader/bridging-escalation-paths.mdx | summary over 160 characters | length 222 |
| VP-14 | Low | leader/bridging-follow-up-cadence.mdx | summary over 160 characters | length 181 |
| VP-14 | Low | leader/bridging-overview.mdx | summary over 160 characters | length 165 |
| VP-14 | Low | leader/bridging-package-checklist.mdx | summary over 160 characters | length 167 |
| VP-14 | Low | leader/bridging-processing-timelines.mdx | summary over 160 characters | length 183 |
| VP-14 | Low | leader/bridging-when-to-walk.mdx | summary over 160 characters | length 211 |
| VP-14 | Low | leader/career-civilian-credential-matching.mdx | summary over 160 characters | length 173 |
| VP-14 | Low | leader/career-education-planning.mdx | summary over 160 characters | length 177 |
| VP-14 | Low | leader/career-lateral-move-advising.mdx | summary over 160 characters | length 204 |
| VP-14 | Low | leader/career-overview.mdx | summary over 160 characters | length 189 |
| VP-14 | Low | leader/career-reenlistment-conversation.mdx | summary over 160 characters | length 183 |
| VP-14 | Low | leader/career-transition-timeline.mdx | summary over 160 characters | length 203 |
| VP-14 | Low | leader/counseling-avoiding-pitfalls.mdx | summary over 160 characters | length 183 |
| VP-14 | Low | leader/counseling-cadence-and-events.mdx | summary over 160 characters | length 196 |
| VP-14 | Low | leader/counseling-listening-and-feedback.mdx | summary over 160 characters | length 182 |
| VP-14 | Low | leader/counseling-overview.mdx | summary over 160 characters | length 187 |
| VP-14 | Low | leader/counseling-smart-goals.mdx | summary over 160 characters | length 172 |
| VP-14 | Low | leader/counseling-styles.mdx | summary over 160 characters | length 181 |
| VP-14 | Low | leader/discipline-article-31-advisory.mdx | summary over 160 characters | length 190 |
| VP-14 | Low | leader/discipline-page-11-counseling.mdx | summary over 160 characters | length 247 |
| VP-14 | Low | leader/discipline-post-njp-documentation.mdx | summary over 160 characters | length 185 |
| VP-14 | Low | leader/discipline-pre-njp-counseling.mdx | summary over 160 characters | length 205 |
| VP-14 | Low | leader/life-events-bereavement.mdx | summary over 160 characters | length 191 |
| VP-14 | Low | leader/life-events-birth-adoption-walkthrough.mdx | summary over 160 characters | length 200 |
| VP-14 | Low | leader/life-events-coaching-family-docs.mdx | summary over 160 characters | length 193 |
| VP-14 | Low | leader/life-events-divorce-custody.mdx | summary over 160 characters | length 177 |
| VP-14 | Low | leader/life-events-efmp-coordination.mdx | summary over 160 characters | length 209 |
| VP-14 | Low | leader/pay-allotment-review.mdx | summary over 160 characters | length 188 |
| VP-14 | Low | leader/pay-bah-error-catch.mdx | summary over 160 characters | length 193 |
| VP-14 | Low | leader/pay-coaching-marines-on-pay.mdx | summary over 160 characters | length 162 |
| VP-14 | Low | leader/pay-gtcc-delinquency.mdx | summary over 160 characters | length 199 |
| VP-14 | Low | leader/pay-pay-problems-escort.mdx | summary over 160 characters | length 175 |
| VP-14 | Low | leader/pay-secondary-dependency.mdx | summary over 160 characters | length 204 |
| VP-14 | Low | leader/pay-special-pay-verification.mdx | summary over 160 characters | length 193 |
| VP-14 | Low | leader/performance-evaluation-adverse-fitrep.mdx | summary over 160 characters | length 166 |
| VP-14 | Low | leader/performance-evaluation-apes-administration.mdx | summary over 160 characters | length 191 |
| VP-14 | Low | leader/performance-evaluation-fitrep-cycle.mdx | summary over 160 characters | length 214 |
| VP-14 | Low | leader/performance-evaluation-jepes-conducting.mdx | summary over 160 characters | length 173 |
| VP-14 | Low | leader/performance-evaluation-jepes.mdx | summary over 160 characters | length 167 |
| VP-14 | Low | leader/performance-evaluation-ro-mechanics.mdx | summary over 160 characters | length 165 |
| VP-14 | Low | leader/performance-evaluation-rs-mechanics.mdx | summary over 160 characters | length 171 |
| VP-14 | Low | leader/personnel-force-preservation-referral.mdx | summary over 160 characters | length 176 |
| VP-14 | Low | leader/personnel-mentorship-pairing.mdx | summary over 160 characters | length 172 |
| VP-14 | Low | leader/personnel-new-marine-integration.mdx | summary over 160 characters | length 185 |
| VP-14 | Low | leader/personnel-section-leader-orientation.mdx | summary over 160 characters | length 169 |
| VP-14 | Low | leader/personnel-sponsor-program.mdx | summary over 160 characters | length 190 |
| VP-14 | Low | leader/personnel-unsat-participation-counseling.mdx | summary over 160 characters | length 215 |
| VP-14 | Low | leader/readiness-at-section-planning.mdx | summary over 160 characters | length 193 |
| VP-14 | Low | leader/readiness-family-readiness.mdx | summary over 160 characters | length 171 |
| VP-14 | Low | leader/readiness-medical-dental.mdx | summary over 160 characters | length 181 |
| VP-14 | Low | leader/readiness-pre-deployment-section.mdx | summary over 160 characters | length 195 |
| VP-14 | Low | leader/readiness-red-s-currency.mdx | summary over 160 characters | length 189 |
| VP-14 | Low | leader/readiness-training-requirements.mdx | summary over 160 characters | length 191 |
| VP-14 | Low | leader/records-awards-records-cleanup.mdx | summary over 160 characters | length 199 |
| VP-14 | Low | leader/records-cadence.mdx | summary over 160 characters | length 194 |
| VP-14 | Low | leader/records-mctfs-review.mdx | summary over 160 characters | length 186 |
| VP-14 | Low | leader/records-ompf-audit-walkthrough.mdx | summary over 160 characters | length 185 |
| VP-14 | Low | leader/records-promotion-board-prep.mdx | summary over 160 characters | length 223 |
| VP-14 | Low | leader/records-section-records-audit.mdx | summary over 160 characters | length 235 |
| VP-14 | Low | leader/records-staff-section-records-manager.mdx | summary over 160 characters | length 169 |
| VP-14 | Low | leader/travel-ao-role.mdx | summary over 160 characters | length 180 |
| VP-14 | Low | leader/travel-claim-disputes.mdx | summary over 160 characters | length 192 |
| VP-14 | Low | leader/travel-dts-oversight.mdx | summary over 160 characters | length 200 |
| VP-14 | Low | leader/travel-gtcc-use.mdx | summary over 160 characters | length 204 |
| VP-14 | Low | leader/travel-overview.mdx | summary over 160 characters | length 186 |
| VP-14 | Low | leader/travel-pcs-coaching.mdx | summary over 160 characters | length 201 |
| VP-14 | Low | leader/travel-tad-coaching.mdx | summary over 160 characters | length 204 |
| VP-14 | Low | leader/travel-voucher-audit.mdx | summary over 160 characters | length 174 |
| VP-14 | Low | leader/wellness-command-climate-flags.mdx | summary over 160 characters | length 185 |
| VP-14 | Low | leader/wellness-financial-distress.mdx | summary over 160 characters | length 187 |
| VP-14 | Low | leader/wellness-fraternization-risk.mdx | summary over 160 characters | length 209 |
| VP-14 | Low | leader/wellness-mental-health-risk.mdx | summary over 160 characters | length 208 |
| VP-14 | Low | leader/wellness-overview.mdx | summary over 160 characters | length 218 |
| VP-14 | Low | leader/wellness-routing-resources.mdx | summary over 160 characters | length 179 |
| VP-14 | Low | legal/privacy-policy.mdx | summary over 160 characters | length 168 |
| VP-14 | Low | links/civilian-awards-sharepoint-honorary.mdx | summary over 160 characters | length 204 |
| VP-14 | Low | links/resource-fiscal-finance-kansas-city-and-indianapolis-rff-kci-sharepoint.mdx | summary over 160 characters | length 163 |
| VP-14 | Low | marines/academic-fitreps.mdx | summary over 160 characters | length 729 |
| VP-14 | Low | marines/administrative-separation.mdx | summary over 160 characters | length 773 |
| VP-14 | Low | marines/advance-and-emergency-pay.mdx | summary over 160 characters | length 405 |
| VP-14 | Low | marines/advance-and-excess-leave.mdx | summary over 160 characters | length 463 |
| VP-14 | Low | marines/adverse-fitreps.mdx | summary over 160 characters | length 569 |
| VP-14 | Low | marines/ai-ethical-use.mdx | summary over 160 characters | length 499 |
| VP-14 | Low | marines/ai-fellowship-programs.mdx | summary over 160 characters | length 488 |
| VP-14 | Low | marines/ai-governance-and-approval.mdx | summary over 160 characters | length 619 |
| VP-14 | Low | marines/ai-overview.mdx | summary over 160 characters | length 494 |
| VP-14 | Low | marines/allotments.mdx | summary over 160 characters | length 409 |
| VP-14 | Low | marines/annual-leave.mdx | summary over 160 characters | length 410 |
| VP-14 | Low | marines/apes-and-fitrep-administration.mdx | summary over 160 characters | length 732 |
| VP-14 | Low | marines/appellate-leave.mdx | summary over 160 characters | length 529 |
| VP-14 | Low | marines/apply-for-gtcc.mdx | summary over 160 characters | length 529 |
| VP-14 | Low | marines/article-138-and-ig-complaints.mdx | summary over 160 characters | length 702 |
| VP-14 | Low | marines/article-31-rights-and-investigations.mdx | summary over 160 characters | length 698 |
| VP-14 | Low | marines/assignment-incentive-pay.mdx | summary over 160 characters | length 638 |
| VP-14 | Low | marines/aviation-bonus.mdx | summary over 160 characters | length 392 |
| VP-14 | Low | marines/aviation-incentive-pays.mdx | summary over 160 characters | length 385 |
| VP-14 | Low | marines/awards-campaign-and-service-medals.mdx | summary over 160 characters | length 400 |
| VP-14 | Low | marines/awards-combat-action-ribbon.mdx | summary over 160 characters | length 402 |
| VP-14 | Low | marines/awards-foreign-awards.mdx | summary over 160 characters | length 400 |
| VP-14 | Low | marines/awards-joint-service-awards.mdx | summary over 160 characters | length 397 |
| VP-14 | Low | marines/awards-marksmanship-badges.mdx | summary over 160 characters | length 414 |
| VP-14 | Low | marines/awards-movsm.mdx | summary over 160 characters | length 334 |
| VP-14 | Low | marines/awards-overview.mdx | summary over 160 characters | length 275 |
| VP-14 | Low | marines/awards-pcs-and-awards-timing.mdx | summary over 160 characters | length 428 |
| VP-14 | Low | marines/awards-personal-military-decorations.mdx | summary over 160 characters | length 443 |
| VP-14 | Low | marines/awards-purple-heart.mdx | summary over 160 characters | length 331 |
| VP-14 | Low | marines/awards-receiving-an-award.mdx | summary over 160 characters | length 378 |
| VP-14 | Low | marines/awards-retirement-awards-and-dd214.mdx | summary over 160 characters | length 412 |
| VP-14 | Low | marines/awards-unit-awards.mdx | summary over 160 characters | length 453 |
| VP-14 | Low | marines/awards-verifying-your-awards.mdx | summary over 160 characters | length 423 |
| VP-14 | Low | marines/awards-wearing-your-awards.mdx | summary over 160 characters | length 456 |
| VP-14 | Low | marines/bah.mdx | summary over 160 characters | length 630 |
| VP-14 | Low | marines/bankruptcy-and-pay.mdx | summary over 160 characters | length 482 |
| VP-14 | Low | marines/bas.mdx | summary over 160 characters | length 547 |
| VP-14 | Low | marines/basic-ai-course.mdx | summary over 160 characters | length 453 |
| VP-14 | Low | marines/basic-needs-allowance.mdx | summary over 160 characters | length 199 |
| VP-14 | Low | marines/basic-pay.mdx | summary over 160 characters | length 495 |
| VP-14 | Low | marines/birth-and-adoption.mdx | summary over 160 characters | length 547 |
| VP-14 | Low | marines/boatspaces-and-allocations.mdx | summary over 160 characters | length 614 |
| VP-14 | Low | marines/body-composition-reporting.mdx | summary over 160 characters | length 620 |
| VP-14 | Low | marines/camogpt-and-approved-ai-tools.mdx | summary over 160 characters | length 418 |
| VP-14 | Low | marines/career-reenlistments-stap.mdx | summary over 160 characters | length 713 |
| VP-14 | Low | marines/career-sea-pay.mdx | summary over 160 characters | length 364 |
| VP-14 | Low | marines/career-services.mdx | summary over 160 characters | length 570 |
| VP-14 | Low | marines/casualty-assistance-program.mdx | summary over 160 characters | length 527 |
| VP-14 | Low | marines/casualty-investigation-tracking.mdx | summary over 160 characters | length 576 |
| VP-14 | Low | marines/child-and-youth-programs.mdx | summary over 160 characters | length 573 |
| VP-14 | Low | marines/child-custody-changes.mdx | summary over 160 characters | length 419 |
| VP-14 | Low | marines/childcare-provider-travel.mdx | summary over 160 characters | length 573 |
| VP-14 | Low | marines/civilian-degree-pursuit.mdx | summary over 160 characters | length 294 |
| VP-14 | Low | marines/clothing-monetary-allowances.mdx | summary over 160 characters | length 457 |
| VP-14 | Low | marines/combat-zone-tax-exclusion.mdx | summary over 160 characters | length 470 |
| VP-14 | Low | marines/comparable-grades.mdx | summary over 160 characters | length 373 |
| VP-14 | Low | marines/continuation-pay.mdx | summary over 160 characters | length 338 |
| VP-14 | Low | marines/conus-cola.mdx | summary over 160 characters | length 388 |
| VP-14 | Low | marines/convalescent-leave.mdx | summary over 160 characters | length 443 |
| VP-14 | Low | marines/court-martial-and-njp-pay-impact.mdx | summary over 160 characters | length 542 |
| VP-14 | Low | marines/court-martial-process.mdx | summary over 160 characters | length 679 |
| VP-14 | Low | marines/creating-dts-authorizations.mdx | summary over 160 characters | length 431 |
| VP-14 | Low | marines/dantes-testing.mdx | summary over 160 characters | length 288 |
| VP-14 | Low | marines/data-and-ai-workforce-roles.mdx | summary over 160 characters | length 560 |
| VP-14 | Low | marines/death-of-dependent.mdx | summary over 160 characters | length 467 |
| VP-14 | Low | marines/death-payments.mdx | summary over 160 characters | length 449 |
| VP-14 | Low | marines/deers-enrollment-and-id-cards.mdx | summary over 160 characters | length 587 |
| VP-14 | Low | marines/defense-travel-system.mdx | summary over 160 characters | length 345 |
| VP-14 | Low | marines/dependency-validation-and-recertification.mdx | summary over 160 characters | length 460 |
| VP-14 | Low | marines/direct-affiliation-program.mdx | summary over 160 characters | length 542 |
| VP-14 | Low | marines/disability-evaluation-system.mdx | summary over 160 characters | length 648 |
| VP-14 | Low | marines/dislocation-allowance.mdx | summary over 160 characters | length 309 |
| VP-14 | Low | marines/diving-duty-pay.mdx | summary over 160 characters | length 456 |
| VP-14 | Low | marines/divorce-and-spouse-loss.mdx | summary over 160 characters | length 470 |
| VP-14 | Low | marines/dts-outstanding-travel-orders.mdx | summary over 160 characters | length 573 |
| VP-14 | Low | marines/dts-overview.mdx | summary over 160 characters | length 541 |
| VP-14 | Low | marines/dts-profile-and-setup.mdx | summary over 160 characters | length 436 |
| VP-14 | Low | marines/dts-roles-and-routing.mdx | summary over 160 characters | length 589 |
| VP-14 | Low | marines/dts-trip-cancellations.mdx | summary over 160 characters | length 505 |
| VP-14 | Low | marines/dts-voucher-approval-process.mdx | summary over 160 characters | length 639 |
| VP-14 | Low | marines/duty-station-incentive.mdx | summary over 160 characters | length 691 |
| VP-14 | Low | marines/education-at-transition.mdx | summary over 160 characters | length 307 |
| VP-14 | Low | marines/education-overview.mdx | summary over 160 characters | length 292 |
| VP-14 | Low | marines/education-services-and-resilience.mdx | summary over 160 characters | length 561 |
| VP-14 | Low | marines/emergency-leave.mdx | summary over 160 characters | length 455 |
| VP-14 | Low | marines/enlisted-bonuses.mdx | summary over 160 characters | length 401 |
| VP-14 | Low | marines/enterprise-ai-data-software-platforms.mdx | summary over 160 characters | length 508 |
| VP-14 | Low | marines/equal-opportunity-reporting.mdx | summary over 160 characters | length 414 |
| VP-14 | Low | marines/exceptional-family-member-program.mdx | summary over 160 characters | length 571 |
| VP-14 | Low | marines/extensions.mdx | summary over 160 characters | length 579 |
| VP-14 | Low | marines/failure-of-selection.mdx | summary over 160 characters | length 745 |
| VP-14 | Low | marines/family-care-plan.mdx | summary over 160 characters | length 493 |
| VP-14 | Low | marines/family-law-for-marines.mdx | summary over 160 characters | length 620 |
| VP-14 | Low | marines/family-readiness-services.mdx | summary over 160 characters | length 591 |
| VP-14 | Low | marines/family-separation-allowance.mdx | summary over 160 characters | length 461 |
| VP-14 | Low | marines/federal-tax-withholding.mdx | summary over 160 characters | length 402 |
| VP-14 | Low | marines/fica-and-afrh-deductions.mdx | summary over 160 characters | length 478 |
| VP-14 | Low | marines/first-term-reenlistments-ftap.mdx | summary over 160 characters | length 680 |
| VP-14 | Low | marines/fitrep-appeals-perb.mdx | summary over 160 characters | length 624 |
| VP-14 | Low | marines/fitrep-reporting-cycle.mdx | summary over 160 characters | length 521 |
| VP-14 | Low | marines/fitrep-sections-and-marking.mdx | summary over 160 characters | length 663 |
| VP-14 | Low | marines/flexible-spending-accounts.mdx | summary over 160 characters | length 517 |
| VP-14 | Low | marines/foreign-jurisdiction-sofa.mdx | summary over 160 characters | length 713 |
| VP-14 | Low | marines/foreign-leave.mdx | summary over 160 characters | length 547 |
| VP-14 | Low | marines/genai-mil-enterprise-platform.mdx | summary over 160 characters | length 502 |
| VP-14 | Low | marines/government-travel-charge-card.mdx | summary over 160 characters | length 288 |
| VP-14 | Low | marines/gtcc-account-management.mdx | summary over 160 characters | length 514 |
| VP-14 | Low | marines/gtcc-misuse-and-suspension.mdx | summary over 160 characters | length 477 |
| VP-14 | Low | marines/gtcc-overview.mdx | summary over 160 characters | length 553 |
| VP-14 | Low | marines/gtcc-pcs-use.mdx | summary over 160 characters | length 525 |
| VP-14 | Low | marines/gtcc-split-disbursement.mdx | summary over 160 characters | length 491 |
| VP-14 | Low | marines/gtcc-tdy-use.mdx | summary over 160 characters | length 462 |
| VP-14 | Low | marines/hardship-duty-pay.mdx | summary over 160 characters | length 416 |
| VP-14 | Low | marines/hazardous-duty-incentive-pay.mdx | summary over 160 characters | length 454 |
| VP-14 | Low | marines/health-professions-officer-pays.mdx | summary over 160 characters | length 478 |
| VP-14 | Low | marines/high-deployment-allowance.mdx | summary over 160 characters | length 386 |
| VP-14 | Low | marines/hostile-fire-and-imminent-danger-pay.mdx | summary over 160 characters | length 346 |
| VP-14 | Low | marines/household-goods-and-ppm.mdx | summary over 160 characters | length 461 |
| VP-14 | Low | marines/human-breast-milk-shipment.mdx | summary over 160 characters | length 517 |
| VP-14 | Low | marines/humanitarian-transfer.mdx | summary over 160 characters | length 346 |
| VP-14 | Low | marines/idt-travel-reimbursement.mdx | summary over 160 characters | length 556 |
| VP-14 | Low | marines/illness-or-injury-payments.mdx | summary over 160 characters | length 481 |
| VP-14 | Low | marines/involuntary-separations.mdx | summary over 160 characters | length 763 |
| VP-14 | Low | marines/jepes-junior-enlisted.mdx | summary over 160 characters | length 600 |
| VP-14 | Low | marines/joining-a-unit.mdx | summary over 160 characters | length 470 |
| VP-14 | Low | marines/joint-professional-military-education.mdx | summary over 160 characters | length 269 |
| VP-14 | Low | marines/junior-enlisted-promotions.mdx | summary over 160 characters | length 857 |
| VP-14 | Low | marines/lateral-moves-program.mdx | summary over 160 characters | length 726 |
| VP-14 | Low | marines/leave-problems-and-fixes.mdx | summary over 160 characters | length 394 |
| VP-14 | Low | marines/leave-submission-and-administration.mdx | summary over 160 characters | length 363 |
| VP-14 | Low | marines/legal-services-overview.mdx | summary over 160 characters | length 605 |
| VP-14 | Low | marines/liberty-and-special-liberty.mdx | summary over 160 characters | length 501 |
| VP-14 | Low | marines/life-events-overview.mdx | summary over 160 characters | length 489 |
| VP-14 | Low | marines/limited-duty.mdx | summary over 160 characters | length 588 |
| VP-14 | Low | marines/long-term-tdy.mdx | summary over 160 characters | length 403 |
| VP-14 | Low | marines/marine-and-family-programs-overview.mdx | summary over 160 characters | length 552 |
| VP-14 | Low | marines/marine-corps-university.mdx | summary over 160 characters | length 331 |
| VP-14 | Low | marines/marinenet-and-distance-learning.mdx | summary over 160 characters | length 264 |
| VP-14 | Low | marines/marriage-and-spouse-add.mdx | summary over 160 characters | length 459 |
| VP-14 | Low | marines/master-brief-sheet.mdx | summary over 160 characters | length 602 |
| VP-14 | Low | marines/member-and-dependent-travel.mdx | summary over 160 characters | length 400 |
| VP-14 | Low | marines/meritorious-promotions.mdx | summary over 160 characters | length 639 |
| VP-14 | Low | marines/military-funeral-honors-and-repatriation.mdx | summary over 160 characters | length 610 |
| VP-14 | Low | marines/military-parental-leave-program.mdx | summary over 160 characters | length 514 |
| VP-14 | Low | marines/miscellaneous-expense-allowance.mdx | summary over 160 characters | length 367 |
| VP-14 | Low | marines/montgomery-gi-bill.mdx | summary over 160 characters | length 338 |
| VP-14 | Low | marines/njp-non-judicial-punishment.mdx | summary over 160 characters | length 711 |
| VP-14 | Low | marines/non-competitive-cpl-to-sgt-promotions.mdx | summary over 160 characters | length 724 |
| VP-14 | Low | marines/obligated-service-for-promotion.mdx | summary over 160 characters | length 770 |
| VP-14 | Low | marines/oconus-cola.mdx | summary over 160 characters | length 431 |
| VP-14 | Low | marines/oconus-tour-extension-incentive.mdx | summary over 160 characters | length 183 |
| VP-14 | Low | marines/officer-bonuses.mdx | summary over 160 characters | length 406 |
| VP-14 | Low | marines/officer-promotion-boards.mdx | summary over 160 characters | length 713 |
| VP-14 | Low | marines/officers-uniform-and-equipment-allowance.mdx | summary over 160 characters | length 463 |
| VP-14 | Low | marines/pay-problems-and-fixes.mdx | summary over 160 characters | length 485 |
| VP-14 | Low | marines/pcs-orders-and-overview.mdx | summary over 160 characters | length 416 |
| VP-14 | Low | marines/pcs-per-diem.mdx | summary over 160 characters | length 498 |
| VP-14 | Low | marines/pcs-with-tdy-en-route.mdx | summary over 160 characters | length 363 |
| VP-14 | Low | marines/performance-evaluation-overview.mdx | summary over 160 characters | length 589 |
| VP-14 | Low | marines/permissive-tad.mdx | summary over 160 characters | length 782 |
| VP-14 | Low | marines/personal-financial-management-program.mdx | summary over 160 characters | length 527 |
| VP-14 | Low | marines/personal-property-claims.mdx | summary over 160 characters | length 616 |
| VP-14 | Low | marines/perstempo-and-your-deployment-record.mdx | summary over 160 characters | length 237 |
| VP-14 | Low | marines/pet-transportation-allowance.mdx | summary over 160 characters | length 383 |
| VP-14 | Low | marines/pme-requirements-for-promotion.mdx | summary over 160 characters | length 1069 |
| VP-14 | Low | marines/post-9-11-gi-bill.mdx | summary over 160 characters | length 359 |
| VP-14 | Low | marines/pov-shipment-and-mileage.mdx | summary over 160 characters | length 404 |
| VP-14 | Low | marines/powers-of-attorney-and-wills.mdx | summary over 160 characters | length 736 |
| VP-14 | Low | marines/practical-ai-use.mdx | summary over 160 characters | length 524 |
| VP-14 | Low | marines/priority-of-pay-deductions.mdx | summary over 160 characters | length 487 |
| VP-14 | Low | marines/promotion-delays-and-revocations.mdx | summary over 160 characters | length 627 |
| VP-14 | Low | marines/promotions-overview.mdx | summary over 160 characters | length 533 |
| VP-14 | Low | marines/records-review-mctfs.mdx | summary over 160 characters | length 166 |
| VP-14 | Low | marines/reenlistment-eligibility-and-process.mdx | summary over 160 characters | length 540 |
| VP-14 | Low | marines/reenlistments-and-extensions-overview.mdx | summary over 160 characters | length 575 |
| VP-14 | Low | marines/remedial-selection.mdx | summary over 160 characters | length 679 |
| VP-14 | Low | marines/renewal-agreement-travel.mdx | summary over 160 characters | length 416 |
| VP-14 | Low | marines/reporting-senior-and-reviewing-officer-roles.mdx | summary over 160 characters | length 681 |
| VP-14 | Low | marines/reserve-component-survivor-benefit-plan.mdx | summary over 160 characters | length 738 |
| VP-14 | Low | marines/reserve-maternity-leave.mdx | summary over 160 characters | length 574 |
| VP-14 | Low | marines/reserve-parental-leave.mdx | summary over 160 characters | length 538 |
| VP-14 | Low | marines/reserve-pay-and-entitlements.mdx | summary over 160 characters | length 375 |
| VP-14 | Low | marines/reserve-retirement.mdx | summary over 160 characters | length 751 |
| VP-14 | Low | marines/retired-pay-and-sbp.mdx | summary over 160 characters | length 630 |
| VP-14 | Low | marines/retirement-timeline.mdx | summary over 160 characters | length 604 |
| VP-14 | Low | marines/retirement-types-and-eligibility.mdx | summary over 160 characters | length 521 |
| VP-14 | Low | marines/rr-and-srr-leave-programs.mdx | summary over 160 characters | length 491 |
| VP-14 | Low | marines/savings-deposit-program.mdx | summary over 160 characters | length 247 |
| VP-14 | Low | marines/school-liaison-program.mdx | summary over 160 characters | length 591 |
| VP-14 | Low | marines/secondary-dependency-dd-137.mdx | summary over 160 characters | length 551 |
| VP-14 | Low | marines/selection-board-preparation.mdx | summary over 160 characters | length 739 |
| VP-14 | Low | marines/selective-retention-bonus-and-targeted-mos.mdx | summary over 160 characters | length 714 |
| VP-14 | Low | marines/semper-admin-ai-field-manual.mdx | summary over 160 characters | length 545 |
| VP-14 | Low | marines/separation-pay-and-final-pay.mdx | summary over 160 characters | length 681 |
| VP-14 | Low | marines/separation-payments.mdx | summary over 160 characters | length 459 |
| VP-14 | Low | marines/separation-retirement-accession-travel.mdx | summary over 160 characters | length 403 |
| VP-14 | Low | marines/separations-and-retirement-overview.mdx | summary over 160 characters | length 717 |
| VP-14 | Low | marines/servicemembers-civil-relief-act.mdx | summary over 160 characters | length 733 |
| VP-14 | Low | marines/sexual-assault-reporting-svc.mdx | summary over 160 characters | length 738 |
| VP-14 | Low | marines/sgli-and-vgli.mdx | summary over 160 characters | length 363 |
| VP-14 | Low | marines/slip-duty-station-incentive.mdx | summary over 160 characters | length 172 |
| VP-14 | Low | marines/snco-selection-boards.mdx | summary over 160 characters | length 823 |
| VP-14 | Low | marines/spd-and-re-codes.mdx | summary over 160 characters | length 623 |
| VP-14 | Low | marines/special-duty-assignment-pay.mdx | summary over 160 characters | length 590 |
| VP-14 | Low | marines/special-leave-accrual.mdx | summary over 160 characters | length 511 |
| VP-14 | Low | marines/standard-vs-restricted-iba.mdx | summary over 160 characters | length 505 |
| VP-14 | Low | marines/submitting-dts-vouchers.mdx | summary over 160 characters | length 492 |
| VP-14 | Low | marines/survivor-benefits-and-ltap.mdx | summary over 160 characters | length 564 |
| VP-14 | Low | marines/tdy-lodging.mdx | summary over 160 characters | length 390 |
| VP-14 | Low | marines/tdy-per-diem.mdx | summary over 160 characters | length 497 |
| VP-14 | Low | marines/tdy-tad-overview.mdx | summary over 160 characters | length 499 |
| VP-14 | Low | marines/tdy-transportation.mdx | summary over 160 characters | length 350 |
| VP-14 | Low | marines/temporary-lodging-expense.mdx | summary over 160 characters | length 402 |
| VP-14 | Low | marines/terminal-leave.mdx | summary over 160 characters | length 832 |
| VP-14 | Low | marines/transition-requirements.mdx | summary over 160 characters | length 891 |
| VP-14 | Low | marines/travel-vouchers-and-reimbursement.mdx | summary over 160 characters | length 425 |
| VP-14 | Low | marines/tsp-and-savings.mdx | summary over 160 characters | length 389 |
| VP-14 | Low | marines/tuition-assistance.mdx | summary over 160 characters | length 248 |
| VP-14 | Low | marines/voluntary-separations.mdx | summary over 160 characters | length 524 |
| VP-14 | Low | marines/volunteer-supplemental-incentive.mdx | summary over 160 characters | length 473 |

### Required-field and citation tallies

Citation types, all entries: ALNAV 1, CFR 1, OTHER 26, DD-FORM 13, DODI 34, DODD 2, DODFMR 9, DODM 2, FPM 5, JAGINST 1, MARADMIN 171, MCBUL 3, MCO 136, MCTFSPRIUM 63, NAVMC-FORM 4, NAVMC 12, PAA 52, PAAN 3, SECNAV 5, SECNAVINST 10, USC 6.

| Citation type | Entries | Missing effectiveDate | Missing externalUrl (not gated) | Missing externalUrl, gatedSource true |
|---|---:|---:|---:|---:|
| ALNAV | 1 | 0 | 0 | 0 |
| CFR | 1 | 1 | 0 | 0 |
| OTHER | 26 | 6 | 1 | 1 |
| DD-FORM | 13 | 10 | 0 | 0 |
| DODI | 34 | 3 | 0 | 1 |
| DODD | 2 | 0 | 0 | 0 |
| DODFMR | 9 | 9 | 0 | 0 |
| DODM | 2 | 0 | 0 | 0 |
| FPM | 5 | 4 | 0 | 5 |
| JAGINST | 1 | 0 | 0 | 0 |
| MARADMIN | 171 | 0 | 5 | 0 |
| MCBUL | 3 | 1 | 0 | 0 |
| MCO | 136 | 86 | 3 | 0 |
| MCTFSPRIUM | 63 | 63 | 0 | 63 |
| NAVMC-FORM | 4 | 3 | 0 | 0 |
| NAVMC | 12 | 9 | 0 | 0 |
| PAA | 52 | 42 | 0 | 1 |
| PAAN | 3 | 0 | 0 | 1 |
| SECNAV | 5 | 3 | 0 | 0 |
| SECNAVINST | 10 | 2 | 0 | 0 |
| USC | 6 | 4 | 0 | 0 |

Inspection items scanned: 1194.

## Stale list

No stale files.

## Oldest aging

The 30 oldest aging files across all collections. Aging list total: 233.

| # | Collection | File | lastVerified | Months since |
|---:|---|---|---|---:|
| 1 | citations | citations/maradmin-470-24.mdx | 2024-11-09 | 23 |
| 2 | marines | marines/slip-duty-station-incentive.mdx | 2024-11-09 | 23 |
| 3 | marines | marines/slip-eligible-billets-by-mos.mdx | 2024-11-09 | 23 |
| 4 | videos | videos/how-to-set-alerts-for-new-videos.mdx | 2024-11-18 | 23 |
| 5 | videos | videos/a-comprehensive-guide-to-maximizing-maradmin-searchability.mdx | 2024-12-27 | 21 |
| 6 | videos | videos/application-introduction.mdx | 2024-12-27 | 21 |
| 7 | videos | videos/completing-the-saar-request.mdx | 2024-12-27 | 21 |
| 8 | videos | videos/creating-aa-forms.mdx | 2024-12-27 | 21 |
| 9 | videos | videos/endorsements.mdx | 2024-12-27 | 21 |
| 10 | videos | videos/from-to-and-via-lines.mdx | 2024-12-27 | 21 |
| 11 | videos | videos/maradmins-what-are-they.mdx | 2024-12-27 | 21 |
| 12 | videos | videos/margins-and-header.mdx | 2024-12-27 | 21 |
| 13 | videos | videos/new-dd-form-137-secondary-dependency-application.mdx | 2024-12-27 | 21 |
| 14 | videos | videos/personnel-admin-advisory-paa.mdx | 2024-12-27 | 21 |
| 15 | videos | videos/point-paper.mdx | 2024-12-27 | 21 |
| 16 | videos | videos/position-decision-paper.mdx | 2024-12-27 | 21 |
| 17 | videos | videos/proofreading.mdx | 2024-12-27 | 21 |
| 18 | videos | videos/readdressing.mdx | 2024-12-27 | 21 |
| 19 | videos | videos/request-access-to-amps.mdx | 2024-12-27 | 21 |
| 20 | videos | videos/rff-advisory-notifications-ican-paan-fan-tan.mdx | 2024-12-27 | 21 |
| 21 | videos | videos/same-page-endorsements.mdx | 2024-12-27 | 21 |
| 22 | videos | videos/signature-and-copy-to-lines-with-page-numbering.mdx | 2024-12-27 | 21 |
| 23 | videos | videos/subject-reference-and-enclosure-lines.mdx | 2024-12-27 | 21 |
| 24 | videos | videos/text-and-paragraphs.mdx | 2024-12-27 | 21 |
| 25 | videos | videos/tuition-assistance-navmc-1560-25-updates.mdx | 2024-12-27 | 21 |
| 26 | videos | videos/usmap-enrollment.mdx | 2024-12-27 | 21 |
| 27 | videos | videos/what-is-it-and-how-to-access-via-mol.mdx | 2024-12-27 | 21 |
| 28 | videos | videos/a-business-model-for-the-ages.mdx | 2024-12-29 | 21 |
| 29 | videos | videos/accessing-training-guides.mdx | 2024-12-29 | 21 |
| 30 | videos | videos/admin-dashboard-archive-tab.mdx | 2024-12-29 | 21 |

## Updates window

Window: 2026-07-22 through 2026-10-20, 90 days. Total update entries: 34. In window: 33. Aged out and kept as history: 0. Entries dated after 2026-10-20: 1.

| Slug | date | kind | impact |
|---|---|---|---|
| jacp-fy26-window-extended | 2026-07-27 | policy-change | action-required |
| sla-qualifying-categories-suspended | 2026-07-30 | policy-change | action-required |
| pac-becomes-meo | 2026-07-31 | policy-change | awareness |
| flight-performance-boards-coverage-added | 2026-08-02 | new-content | reference |
| humanitarian-transfer-coverage-added | 2026-08-02 | new-content | reference |
| pcs-travel-day-computation-corrected | 2026-08-02 | correction | awareness |
| meo-maradmin-reissued | 2026-08-07 | policy-change | awareness |
| manpower-readiness-video-cluster-added | 2026-08-08 | new-content | awareness |
| video-links-repointed-to-mcele-portal | 2026-08-08 | correction | awareness |
| meo-reform-implementation | 2026-08-20 | policy-change | action-required |
| dts-checklist-reworded | 2026-09-11 | policy-change | action-required |
| eight-igmc-checklists-added | 2026-09-11 | new-content | reference |
| igmc-checklists-verified-september-2026 | 2026-09-11 | verification-sweep | reference |
| igmc-core-roster-september-2026 | 2026-09-11 | policy-change | awareness |
| leave-checklist-four-items-restored | 2026-09-11 | correction | action-required |
| records-checklist-0501-reference-corrected | 2026-09-11 | correction | reference |
| sponsorship-checklist-redesignated-core | 2026-09-11 | policy-change | action-required |
| mctfs-access-moves-to-e-icam | 2026-09-14 | policy-change | action-required |
| savings-deposit-program-page-added | 2026-09-14 | new-content | awareness |
| igmc-checklist-references-and-scope-corrected | 2026-09-23 | correction | reference |
| igmc-checklists-reverified-after-parser-fix | 2026-09-23 | verification-sweep | reference |
| records-checklist-references-restored | 2026-09-23 | correction | reference |
| oteip-maradmin-450-26 | 2026-09-28 | policy-change | action-required |
| oversight-matrix-links-matched-to-fac-references | 2026-09-29 | correction | awareness |
| hfp-idp-monthly-amounts-increase | 2026-10-01 | policy-change | action-required |
| perstempo-coverage-added | 2026-10-01 | policy-change | awareness |
| ai-training-resources-maradmin-467-26 | 2026-10-04 | policy-change | awareness |
| flpb-fy27-maradmin-480-26 | 2026-10-07 | policy-change | awareness |
| records-management-cross-pages | 2026-10-07 | new-content | awareness |
| postal-5110-1-subsections-corrected | 2026-10-09 | correction | reference |
| adoption-reimbursement-maradmin-501-26 | 2026-10-16 | policy-change | action-required |
| tle-21-day-standard | 2026-10-19 | policy-change | action-required |
| tle-extensions-restricted-hhg-only | 2026-10-19 | correction | action-required |

supersededBy and citations[] integrity findings are in the Findings table (rows naming supersededBy or citations[]).

## Routeless collections and stubs

| Path | State | Files |
|---|---|---:|
| content/policies | directory absent | 0 |
| content/situations | directory absent | 0 |
| content/snippets | directory absent | 0 |
| content/references | directory absent | 0 |
| content/citations/_stubs | directory absent | 0 |

## Out of scope

- content/videos: generated by `npm run content:sync`. Counted in the freshness table only. Hand edits are not audited.
- Non-program inspection JSON (scored as support, not program files): 23 files.
  - inspections/_fa-registry.json
  - inspections/_reference-link-overrides.json
  - inspections/_reference-links.json
  - inspections/igmc-core-taxonomy.json
  - inspections/igmc-news.json
  - inspections/mcaat-resources.json
  - inspections/igmc-guides/1040.json
  - inspections/igmc-guides/1050.json
  - inspections/igmc-guides/1320.json
  - inspections/igmc-guides/1610.json
  - inspections/igmc-guides/1650.json
  - inspections/igmc-guides/1700.23.json
  - inspections/igmc-guides/1700.31.json
  - inspections/igmc-guides/1900.16.json
  - inspections/igmc-guides/3040.json
  - inspections/igmc-guides/4600.40.json
  - inspections/igmc-guides/4650.39.json
  - inspections/igmc-guides/5110.2.json
  - inspections/igmc-guides/5210.json
  - inspections/igmc-guides/5214.json
  - inspections/igmc-guides/5215.json
  - inspections/igmc-guides/5800.16-legal-administration.json
  - inspections/igmc-guides/5800.16-victim-and-witness-assistance-program.json
- Files under content/ which are neither MDX nor inspection JSON: 2.
  - links/_source/sharepoint-extract.md
  - links/_stubs/_manifest.json
- content/inspections/_policy-indexes/ (skipped by rule): 10 files.
- content/citations/_stubs/ (skipped by rule): 0 files.
- Dot-prefixed files (skipped by sync-content.mjs, excluded from all counts): 7 files. Listed as Low finding.
  - admin/.deleted-s1g1-defense-travel-system-overview.mdx
  - citations/.deleted-manual-for-courts-martial-2024.mdx
  - citations/.deleted-mco-7220-12-stub.mdx
  - marines/.trash-basic-pay-comparable-grades.mdx
  - marines/.trash-deployment-pays.mdx
  - marines/.trash-pay-review-les.mdx
  - marines/.trash-special-pays.mdx
- Git working tree under content: 493 modified files. Files still differing after ignoring CR at end of line: 0. The rest differ only in line endings (LF to CRLF).
- Content meaning, source accuracy, and whether lastVerified reflects a real source check. These need a human source pass.
- Build and zod validation. This audit checks frontmatter by hand against the schema enums in src/lib/content/schemas.ts. It does not run the build.

## Method

Script: C:\Users\barbc\AppData\Local\Temp\claude\audit-scratch\posture\posture.py. Run with PYTHONUTF8=1 and Python 3.11, PyYAML 6.0.3. Frontmatter parsed with yaml.safe_load between the first two `---` lines. Inspection JSON parsed with json.
Enums (roles, citation types, update kinds and impacts, admin unit types, functions, MOS) read from src/lib/roles.ts and src/lib/content/schemas.ts at run time.
Dates: YAML dates and ISO strings accepted. Age in months is calendar months between lastVerified and 2026-10-20.
Citation alias collisions use the same normalizer as normalizeCitationAlias in schemas.ts (uppercase, legal-abbreviation periods, commas, whitespace). Only collisions between different citation ids are build-breaking, matching assertUniqueCitationAliases in sync-content.mjs. Repeats inside one entry are reported as Low. Update citations[] resolve against citation id fields and filename stems.
Summary length counts characters in the frontmatter string.

