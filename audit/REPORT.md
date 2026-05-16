# Semper Admin Portal Consistency and Connections Audit

## Header

- Generated: 2026-05-15 (UTC)
- Repo HEAD: `3c8cb069f83323c3d87e251808635930f7b1b4bd`
- Working tree note: 24 admin and citation MDX files carry uncommitted edits at audit time. The HEAD hash above pins the audit to the last committed state. Mutations to those staged files are not included.
- Subagents: 6 dimensions, run in parallel, read-only.
- Total findings: 1613 across 6 dimensions.
- Files scanned: 6668 across all dimensions (sum of per-dimension walks). The unique-file footprint is smaller because dimensions overlap on MDX content.

## Posture summary

The build foundation holds. Role separation, content-schema integrity, citation-registry plumbing, and component primitives all sit in good shape. Three structural defects pull the audit into red. First, three of the four per-role detail page templates skip both `PageHeader` and `CrossRoleStrip`, so the locked design pattern fragments across role surfaces. Second, the command palette ships a third role switcher in violation of the single-switcher rule. Third, the writing-constraints layer in `content/` carries thousands of banned-word hits, dominated by the words the rule list calls out as forbidden. Fix order in Section 6.

## Severity table by dimension

| Dimension | Blocker | Major | Minor | Nit | Files |
|---|---|---|---|---|---|
| role-separation (RS) | 1 | 4 | 0 | 2 | 1496 |
| frontmatter-schema (FS) | 0 | 484 | 2 | 2 | 1431 |
| ui-tokens-components (UI) | 0 | 3 | 33 | 80 | 152 |
| citations-links (CL) | 0 | 32 | 458 | 2 | 1091 |
| cross-role-wiring (CR) | 0 | 3 | 18 | 1 | 741 |
| voice-writing-constraints (VW) | 401 | 6 | 81 | 0 | 1757 |
| Merged total | 402 | 532 | 592 | 87 | 6668 |

VW blocker count of 401 reflects a 500-cap rollup. The uncapped raw blocker count is 3318 banned-content hits.

## Top 10 blocker findings

The ordering favors uniqueness. RS-0001 is the only non-VW blocker. The rest sample distinct files and rules under the VW dimension.

### 1. RS-0001, second-role-switcher

- File: `src/components/shell/command-palette.tsx:103`
- Rule: `second-role-switcher`
- Issue: Command palette renders a "Switch role" group calling `setRole` on selection. Per CLAUDE.md Section 2.2 the canonical role-switching surfaces are `top-nav.tsx` (desktop) and `role-picker-dialog.tsx` (mobile only). A third interactive switcher in `command-palette.tsx` violates the single-switcher rule.
- Fix: Remove the "Switch role" `Command.Group` from `command-palette.tsx` and route role-change actions to `role-picker-dialog.tsx`. The palette routes to roles, it does not set them.
- RS subagent surfaced a compounding observation. `top-nav.tsx` claims in its header comment to host the only role-switching surface, but renders no segmented control today. Net effect: zero canonical desktop switchers and one rogue switcher hidden in the palette.

### 2. VW-0001, banned-content-rollup

- File: `content/` (rollup)
- Rule: `banned-content-rollup`
- Issue: 3318 total banned-content hits across content and components. 400 sampled in the dimension file. 2918 rolled up.
- Top rules by count: `banned-word-may` 1281, `banned-word-can` 916, `banned-word-that` 888, `banned-word-discover` 35, `banned-word-just` 31, `banned-word-actually` 22, `banned-word-could` 19, `banned-word-enable` 16, `banned-word-however` 13, `semicolon` 84.
- Top files by count: I-and-I reserve admin pages dominate, with 9 to 11 hits each.
- Fix: Run a sweep against the top three rules first. They account for over 90 percent of hits.

### 3. VW-0002, `banned-word-may`

- File: `content/admin/iandi-administrative-actions-misconduct.mdx:54`
- Rule: `banned-word-may`
- Snippet: `- May or may not go to OMPF`
- Fix: Rewrite as a definitive statement or move to a Callout pattern with explicit yes/no routing.

### 4. VW-0010, `banned-word-may`

- File: `content/admin/iandi-ados.mdx:244`
- Rule: `banned-word-may`
- Snippet: `ADOS may enhance career.`
- Fix: State the career impact with concrete data or strike the line.

### 5. VW-0011, `banned-word-may`

- File: `content/admin/iandi-annual-training-specifics.mdx:122`
- Rule: `banned-word-may`
- Snippet: `AT may occur at various locations.`
- Fix: Replace with `AT venues vary` or list the locations.

### 6. VW-0013, `banned-word-can`

- File: `content/admin/iandi-annual-training-specifics.mdx:196`
- Rule: `banned-word-can`
- Snippet: `### Member Cannot Attend AT`
- Fix: Heading rewrite, drop the auxiliary verb. Try `Member missed AT` or `AT no-show`.

### 7. VW-0015, `banned-word-may`

- File: `content/admin/iandi-commissary-exchange-and-qol.mdx:56`
- Rule: `banned-word-may`
- Snippet: `- Specific use frequency may apply`
- Fix: State the frequency rule.

### 8. VW-0018, `banned-word-can`

- File: `content/admin/iandi-commissary-exchange-and-qol.mdx:187`
- Rule: `banned-word-can`
- Snippet: `### "Can I bring my friend to the commissary?"`
- Fix: Reframe as a directive. Try `Bring guests to the commissary` or `Guest commissary access`.

### 9. VW-0025, `banned-word-may`

- File: `content/admin/iandi-court-martial-for-reservists.mdx:32`
- Rule: `banned-word-may`
- Snippet: `Reserve members may face court-martial under specific circumstances.`
- Fix: Rewrite to `Reserve members face court-martial under specific circumstances. List of triggers below.`

### 10. VW-0031, `banned-word-may`

- File: `content/admin/iandi-demobilization-processing.mdx:302`
- Rule: `banned-word-may`
- Snippet: `- May affect future benefits`
- Fix: Convert to a Callout with the specific benefits at risk and the qualifying conditions.

Full blocker list lives in `audit/voice-writing-constraints/findings.json` and is sortable by file, line, and rule.

## Top 10 major findings

The list spans dimensions to highlight the structural defects, not only the FS volume.

### 1. CR-0001, detail-page-missing-cross-role-strip

- File: `src/app/admin/[unitType]/[topic]/[slug]/page.tsx`
- Issue: Admin detail page renders an inline "How other roles handle this" list with raw `<Link>` instead of importing `CrossRoleStrip`. 385 of 386 admin entries carry `relatedRoles`.
- Fix: Mirror the commander detail page. Import `CrossRoleStrip`, build `CrossRoleLink[]` from `fm.relatedRoles`, render `<CrossRoleStrip links={crossRoleLinks} />` below the article body. Drop the inline list.

### 2. CR-0002, detail-page-missing-cross-role-strip

- File: `src/app/leader/[topic]/[slug]/page.tsx`
- Issue: Same pattern. 73 of 88 leader entries carry `relatedRoles`.
- Fix: Same as CR-0001.

### 3. CR-0003, detail-page-missing-cross-role-strip

- File: `src/app/marines/[topic]/[slug]/page.tsx`
- Issue: Same pattern. 219 of 221 marine entries carry `relatedRoles`.
- Fix: Same as CR-0001.

### 4. UI-0001, missing-page-header

- File: `src/app/admin/[unitType]/[topic]/[slug]/page.tsx`
- Issue: Admin detail page hand-rolls the meta row plus h1 instead of rendering `PageHeader`. The locked four-line header pattern fragments here.
- Fix: Replace the hand-rolled `<h1 style={{ fontFamily: "var(--font-display)" }}>` plus meta row with `<PageHeader>` wired to the same fields.

### 5. UI-0002, missing-page-header

- File: `src/app/leader/[topic]/[slug]/page.tsx`
- Issue: Same pattern.
- Fix: Same as UI-0001.

### 6. UI-0003, missing-page-header

- File: `src/app/marines/[topic]/[slug]/page.tsx`
- Issue: Same pattern.
- Fix: Same as UI-0001.

### 7. FS-9000, inspection-item-missing-evidenceHint-rollup

- File: rollup
- Issue: 476 inspection items lack the `evidenceHint` field. The zod schema marks it optional, but the audit prompt's required-fields list includes it. Rollup represents the truncated overflow above the per-rule sample cap.
- Fix: Either backfill `evidenceHint` on every IGMC and MCAAT item, or drop `evidenceHint` from the prompt's required list. Reconcile schema and prompt.

### 8. FS-9003, lastVerified-stale-rollup

- File: rollup
- Issue: 91 inspection items past the 12-month inspection stale threshold. Per CLAUDE.md Section 4.3, IGMC programs roll annually, so stale fires at 12 months for inspection content.
- Fix: Source-check each stale program. The first stale entry FS-0248 sits at 13.7 months on `1320-marine-corps-sponsorship-program.json`.

### 9. CL-0005, broken-internal-link

- File: `content/marines/career-services.mdx`
- Issue: Markdown link target `/marines/transition-readiness` does not resolve against `src/generated/marines.json`.
- Fix: Either update the link to a live slug or author `transition-readiness.mdx` under `content/marines/`. CL dimension counted 32 broken internal links across MDX bodies, with 18 concentrated in `content/marines/semper-admin-ai-field-manual.mdx`.

### 10. CL-0008, broken-internal-link

- File: `content/marines/casualty-investigation-tracking.mdx`
- Issue: Link target `/marines/reserve-retirement-and-sbp` does not resolve.
- Fix: Same approach as CL-0005.

## Per-dimension sections

### role-separation (RS)

- Counts: 1 blocker, 4 major, 0 minor, 2 nit.
- Files scanned: 1496.
- File: `audit/role-separation/findings.json`.
- Highlights: Command palette role switcher (RS-0001), four `.trash-` MDX files lingering under `content/marines/` (RS-0002 through RS-0005). All 741 role MDX files carry the correct role tag. No per-role page imports a foreign catalog. `role-trees.ts` has no cross-role hrefs.

### frontmatter-schema (FS)

- Counts: 0 blocker, 484 major, 2 minor, 2 nit (488 visible after rollups, 1233 raw).
- Files scanned: 1431.
- File: `audit/frontmatter-schema/findings.json`.
- Highlights: 951 inspection items (476 individual + 475 rollup) lack `evidenceHint`. Six IGMC programs past 12-month stale, including `5800.16-victim-and-witness-assistance-program.json` at 28 months. 14 MCAAT inspections lack the prompt-required `sponsor` and `effectiveDate`. Citation alias uniqueness, admin required fields, and `trEventCode` regex all pass clean.

### ui-tokens-components (UI)

- Counts: 0 blocker, 3 major, 33 minor, 80 nit.
- Files scanned: 152.
- File: `audit/ui-tokens-components/findings.json`.
- Highlights: Three of the four per-role detail pages skip `PageHeader` (UI-0001 to UI-0003). 12 hardcoded hex values outside `globals.css` (Pill dark-mode text colors, two MCAAT routing-pill sites, `layout.tsx` theme-color meta, videos page red palette, pdf-letter-builder PDF style sheet). 12 Badge JSX/import sites awaiting Phase 6 migration. 7 h2 headings in Bebas Neue instead of Inter. Topbar height check passes. Ad-hoc-aside check passes.

### citations-links (CL)

- Counts: 0 blocker, 32 major, 458 minor, 2 nit.
- Files scanned: 1091.
- File: `audit/citations-links/findings.json`.
- Highlights: Citations index healthy. byId 308 matches the 308 live MDX files. byAlias 918. No duplicate aliases. Coverage by collection: admin 90.0 percent (strong), marines 78.7 percent (minor), leader 77.2 percent (minor), commander 66.7 percent (minor). 32 broken internal links (18 in one file, `content/marines/semper-admin-ai-field-manual.mdx`). 594 orphan slugs across roles (admin 354, marines 157, leader 82, commander 1). 221 citation stubs pending review under `content/citations/_stubs/`. NAVMC 10922 is the most-referenced unregistered parent doc with 160-plus hits across three collections, a single-stub fix.

### cross-role-wiring (CR)

- Counts: 0 blocker, 3 major, 18 minor, 1 nit.
- Files scanned: 741.
- File: `audit/cross-role-wiring/findings.json`.
- Highlights: Three of the four per-role detail pages hand-roll their cross-role list and never import `CrossRoleStrip`. Only the commander page wires the real component. relatedRoles coverage in frontmatter is high (marines 219/221, leader 73/88, commander 46/46, admin 385/386). Phase 6 nit: `roleContentSchema` still ships `relatedRoles` as an object map, not the `crossRole: CrossRoleLink[]` shape called out in CLAUDE.md Section 9. Zero inline cross-role prose links once same-role intra-navigation is excluded.

### voice-writing-constraints (VW)

- Counts: 401 blocker, 6 major, 81 minor, 0 nit (488 visible after 500-cap rollup, uncapped blocker count was 3318).
- Files scanned: 1757.
- File: `audit/voice-writing-constraints/findings.json`.
- Highlights: Three banned words account for 93 percent of all blocker hits. Acronym minor count (4428 collapsed to 81 plus rollup) clusters around DFAS, DSN, MCTFS, PAC, MIPS, OMPF. Single edit to `src/lib/directives/acronyms.ts` would clear most of the registry-eligible hits. Voice-misalignment major findings target six leader pages without numbered procedure or Callout patterns. Zero em-dash, en-dash, or stray asterisk hits across all 1627 MDX and 130 TSX files. 84 semicolon hits.

## Suggested fix order

1. RS-0001. Single-file edit. Removes the only structural blocker outside the writing layer.
2. UI-0001 / UI-0002 / UI-0003 and CR-0001 / CR-0002 / CR-0003 together. Each per-role detail page swap pulls in `PageHeader` and `CrossRoleStrip` at the same time. Three template files, six finding ids cleared.
3. VW banned-word sweep on `content/admin/iandi-*.mdx`. Reserve-admin pages ship the highest individual counts and the user-facing audience overlap is high.
4. CL broken internal links, starting with the 18 hits in `content/marines/semper-admin-ai-field-manual.mdx`.
5. FS inspection field backfill or schema reconciliation on `evidenceHint`, `sponsor`, and `effectiveDate`.
6. Phase 6 deferred work (Badge -> Pill, `crossRole` schema reshape, role-trees generator).

## Open questions

- The audit prompt's required-fields list for inspection items includes `evidenceHint`, but `inspectionSchema` in `src/lib/content/schemas.ts` marks it optional. Reconcile direction with Stephen before backfilling 476 items.
- Same for inspection-level `sponsor`, `applicabilityLevel`, and `effectiveDate`. Schema marks optional, prompt marks required. 28 MCAAT entries lack one or more.
- VW dimension's cap on individual entries was set at 500 by the audit prompt. The agent ran past the cap. The orchestrator normalized in place to enforce the cap with rollups. If a stricter raw-hit list is needed for fix tooling, regenerate with a larger cap or stream to a separate file.
- `content/citations/_stubs/` count of 221 is a pending review queue. Does Stephen want the audit to prioritize the top-frequency unregistered patterns (NAVMC 10922 first) or work through the queue in author order?
- The UUPM polish layer (Section 3.5) was not audited for visual fidelity. Static analysis cannot verify ambient-bloom rendering or hover-lift motion. Consider a follow-on Playwright pass.

## Sources

- [audit/role-separation/findings.json](computer://D:\Coding\SemperAdminPortal\audit\role-separation\findings.json)
- [audit/frontmatter-schema/findings.json](computer://D:\Coding\SemperAdminPortal\audit\frontmatter-schema\findings.json)
- [audit/ui-tokens-components/findings.json](computer://D:\Coding\SemperAdminPortal\audit\ui-tokens-components\findings.json)
- [audit/citations-links/findings.json](computer://D:\Coding\SemperAdminPortal\audit\citations-links\findings.json)
- [audit/cross-role-wiring/findings.json](computer://D:\Coding\SemperAdminPortal\audit\cross-role-wiring\findings.json)
- [audit/voice-writing-constraints/findings.json](computer://D:\Coding\SemperAdminPortal\audit\voice-writing-constraints\findings.json)
- [audit/findings.merged.json](computer://D:\Coding\SemperAdminPortal\audit\findings.merged.json)
- [audit/REPORT.md](computer://D:\Coding\SemperAdminPortal\audit\REPORT.md)
