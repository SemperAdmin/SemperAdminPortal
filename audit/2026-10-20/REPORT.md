# Semper Admin Portal Currency Audit

## Header

- Audit date: 2026-10-20 (HST). Repo HEAD 1f8f8b7, equal to origin/main and to the live build.
- Authority snapshot: E:\GunnyBot\Policies indexes refreshed 2026-10-17 and 2026-10-18.
- Method: eight read-only subagents, one per dimension. Orchestrator spot-checked the top findings of each file against source text before merge. Plan at docs/superpowers/plans/2026-10-20-application-audit.md.
- No content, source, or config edited. No commit, no push.

## Posture summary

The build is healthy and the live site matches main. The content is not current. Four rules Marines act on today are wrong on live pages: commander fund-control training, SRB lateral-move eligibility, breast milk shipment expenses, and the WHtR body composition boundary. Six role pages name superseded orders by letter. Eleven pay figures lag 2026 rates, and two pages contradict each other on FSA. Six new finance and personnel publications from July through October have no portal coverage, led by PAA 03-26 mandatory UD/MIPS notes effective 1 Oct 2026.

## Severity table

| Dimension | File | Blocker | Major | Minor | Nit or info |
|---|---|---|---|---|---|
| Message currency (MARADMIN, ALNAV) | message-currency.md | 4 | 4 | 4 | 0 |
| Directive currency (MCO, NAVMC, DoDI) | directive-currency.md | 6 | 6 | 8 | 1 |
| Pay and entitlement figures | pay-figures.md | 0 | 11 | 3 | 0 |
| Finance publications (PAA, TAN, JTR) | finance-pub-currency.md | 0 | 1 | 10 | 1 |
| Inspection checklists | inspections-currency.md | 0 | 1 | 7 | 1 |
| Live SEO and outbound links | seo-live.md | 0 | 6 | 7 | 2 |
| Build and deploy | build-deploy.md | 0 | 1 | 8 | 4 |
| Verification posture | verification-posture.md | 0 | 2 | rollup | rollup |

Severity mapping. Agent labels High and Medium map to major and minor here. Moderate maps to minor. MC-04 and PF-06 describe the same SRB gap and count once in the action list.

## Verified by orchestrator

| Finding | Check | Result |
|---|---|---|
| MC-01 | MARADMIN 468/26 para 2 text, MARADMIN 490/26 para 2 text, grep of src/lib/commander-obligations.ts | Confirmed. 468/26 cancels 350/11. 490/26 cancels 468/26. Lines 242 and 280 to 285 still teach Tier 1 under 350/11. |
| MC-03 | MARADMIN 073/26 text | Confirmed. "less than or equal to 0.52". Portal says "less than 0.52" in marines/body-composition-reporting.mdx and two citation bodies. |
| DC-01, DC-02 | Archive MCO folder, grep of content/admin | Confirmed. Only 1400.31D and 1752.5C in archive. Four admin pages each cite 1400.31C and 1752.5A. |
| PF-04 | grep and MARADMIN 150/26 in archive | Confirmed. Admin FSA page says $250 in three places. Marines FSA page says $300 under 150/26. |
| FP-01 | paa_index.json key 003/26, grep of content | Confirmed. PAA 03-26 mandatory UD/MIPS Notes tab. Zero portal references. |
| IN-01 | 5800.16 legal administration JSON | Confirmed. effectiveDate 2025-09-23, 45 items. Archive DOCX revised 21 Sep 2026. |
| SEO-01 to 03 | src/app/layout.tsx lines 57 to 62, live /links/ fetch | Confirmed. Site-wide openGraph url and title, zero canonical tags. |
| SEO-07 | grep of content/links | Confirmed. 117 files carry "Review and rewrite this summary". |

Downgraded. VP future-dated entries (3, all 2026-10-21) are UTC dates written on 2026-10-20 HST. Timezone, not an error. VP slug mismatch (548 files) matches the role-prefixed filename convention and does not break the build. Kept as a convention gap against CLAUDE.md 4.1, not a defect.

## Top 15 actions, ranked

1. MC-01 Blocker. Commander fund-control obligation. Replace MARADMIN 350/11 with 490/26 across five commander pages and src/lib/commander-obligations.ts. Tier system gone, reports due 31 March and 30 September.
2. MC-04 and PF-06 Blocker. FY27 SRB. Apply Change 1 (208/26) and Change 2 (429/26). Remove 1721 from the 84-month lateral-move kicker, add 0315 Scout, revise PMOS amounts.
3. MC-03 Blocker. WHtR boundary to "less than or equal to 0.52" per 073/26 on the Marine page and both citation bodies.
4. MC-02 Blocker. Breast milk shipment. Remove storage bags, cold packs, and refrigeration per MARADMIN 603/24.
5. DC-01 to DC-06 Blocker. Stale order letters on role pages. 1400.31C to D, 1752.5A to C, 1754.9A to B, NAVMC 1200.1K and L to M, 5512.11D to F, P1070.12J to K W/CH-1. Author registry entries for NAVMC 1200.1 and MCO 5512.11.
6. PF-04 Major. FSA $250 to $300 on two admin pages. Pages contradict the Marine page today.
7. PF-01 to PF-03 Major. MALT $0.18 to $0.235 on four pages. TDY POV rate to $0.76.
8. FP-01 Major. PAA 03-26 mandatory UD/MIPS Notes from 1 Oct 2026. Add to diary certification and UD/MIPS pages.
9. PF-05, PF-07 to PF-10 Major. Dislocation allowance ranges, flexible spending account limits, BAS 2026 rates, HDP-L ceiling of $150, CONUS M&IE $68 to $92.
10. MC-06 and MC-07 Major. 12 commander files cite cancelled MARADMIN 468/23 for DEOCS. igmc-news.json shows the FY26 schedule, FY27 is 251/26.
11. IN-01 Major. Legal Administration checklist revision of 21 Sep 2026. 47 items, MCBul 5810 replaced by MCO 5810.8.
12. FP-02 to FP-05 Minor. PAA 01-26 MIAP migration, PAAN 03-26 PCS COLA checkage, TAN 04-26 last-day PCS lodging, TAN 03-26 IMA IDT lodging revocation.
13. DC-07 to DC-12 Major. Six DoDI registry entries carry wrong effective dates or miss changes (1332.18, 6490.03, 1332.45, 1300.18, 1327.06, 1342.22).
14. SEO-01 to SEO-07 Major. Per-page canonical and openGraph, drop /opengraph-image/, /search/, /recent/, /styleguide/ from the sitemap, rewrite 117 placeholder link summaries.
15. BD-01 Major. GitLab mirror fails on every run since 2026-10-20 21:08Z with "remote unpack failed" on web.git.mil. Server side. GitLab main is stale.

## Archive gaps limiting this audit

- maradmin_index.json stops at 257/26. Window list came from PDF sidecars.
- 29 MARADMIN numbers absent from the archive: 360 to 377, 451 to 460, and an unreadable 345 sidecar. 450/26 is cited by 9 portal files and absent.
- ALNAV 056/26 Special Leave Accrual missing from the archive.
- SECNAV index carries no 52xx to 58xx series and no M-manuals. SECNAV M-5210.1 (39 files) and M-5216.5 (17 files) went unchecked.
- PRIUM index scan skipped 2026-10-01 for lack of sign-in. MPO titles read "Untitled item N".
- No MCAAT checklist source in the archive. All 18 MCAAT files flip to aging on 2026-11-10.
- dfas.mil and militarypay.defense.gov returned 403. 2026 BAS rests on secondary sources.

## Out of scope

- Core Web Vitals field data. Use PageSpeed Insights.
- Index coverage. Use Google Search Console.
- Backlinks. Use Ahrefs or Semrush.
- 396 outbound links behind Akamai bot blocking and 67 behind SharePoint SSO. Manual check only.
- Full npm run build and postbuild link checks. Skipped on time budget. Lint, tests, and type-check passed.

## Side effect to clear

The build agent ran npm ci, lint, and type-check. Content sync regenerated 493 tracked content/videos MDX files with CRLF line endings. git diff --ignore-cr-at-eol shows zero content change. Restore with `git checkout -- content/videos` in this worktree before any commit.
