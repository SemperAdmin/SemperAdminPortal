# Fix pass report - 2026-05-15

Six items from the audit fix list landed. One verification step short-circuited on pre-existing WIP truncation in unrelated files.

## What landed

### 1. RS-0001 cleared
- File: `src/components/shell/command-palette.tsx`
- Removed the "Switch role" Command.Group, the `setRole` hook call, and the four supporting imports (`Hash`, `useRoleStore`, `ROLES`, `ROLE_META`).
- The palette routes to roles via NAV_ITEMS but no longer mutates role state. Topbar and role-picker-dialog stay the only canonical switchers.

### 2. UI-0001..3 + CR-0001..3 cleared
- Three template files refactored to mirror the commander page:
  - `src/app/marines/[topic]/[slug]/page.tsx`
  - `src/app/leader/[topic]/[slug]/page.tsx`
  - `src/app/admin/[unitType]/[topic]/[slug]/page.tsx`
- Each now imports and renders `PageHeader` and `CrossRoleStrip`. Hand-rolled tag rows, h1 blocks, and inline relatedRoles lists removed. Cross-role links built from `fm.relatedRoles` exactly like commander.

### 3. CL-0019..36 cleared as false positives
- All 18 CL findings against `content/marines/semper-admin-ai-field-manual.mdx` resolve to live parent-group landing routes under `src/app/marines/<slug>/page.tsx`. The CL audit only checked the slug catalog, not the parent-group routes.
- Documented in `audit/citations-links/false-positives.md` with audit-tool follow-up note.

### 4. VW iandi sweep complete
- The 82 `content/admin/iandi-*.mdx` files carry zero banned words, zero semicolons, zero em-dashes, zero en-dashes. Stephen's working-tree edits had pre-cleared the files. Verification script `/tmp/vw_sweep.py` confirms.
- Wider content tree still holds 2670 banned-token hits outside the iandi scope (1052 `may`, 854 `that`, 555 `can` dominate). Out of scope for this round.

### 5. FS schema tightened and inspection data backfilled
- `src/lib/content/schemas.ts`:
  - `inspectionItemSchema.evidenceHint` now `z.string().nullable()` (no longer optional).
  - `inspectionSchema.sponsor` now `z.string().min(2)` (required).
  - `inspectionSchema.applicabilityLevel` now `z.string().min(2)` (required).
  - `inspectionSchema.effectiveDate` now `z.string().min(8)` (required).
- 32 inspection JSON files backfilled by subagent: 18 sponsors, 18 effectiveDates, 2 applicabilityLevels, 940 evidenceHints set to null.
- 20 files carry `_audit_notes` flagging defaulted values for SME review.
- Verification: `node scripts/sync-content.mjs` reports `[content-sync] inspections: 32 entries` with no schema errors.

### 6. Phase 6 Badge to Pill migration
- Five components rewritten by subagent:
  - `src/components/domain/docx-export-button.tsx`
  - `src/components/domain/video-embed.tsx`
  - `src/components/domain/pdf-letter-builder.tsx`
  - `src/components/domain/naval-letter-builder.tsx`
  - `src/components/shell/phase-placeholder.tsx`
- Pill API exposes a `variant` prop (not `tone`). Mapping used: `default -> neutral`, `muted/secondary -> neutral`, `destructive -> danger`, `outline -> outline`. Subagent confirmed Pill variants: marine, leader, commander, admin, success, warning, danger, info, neutral, outline, accent.
- Badge component itself, Pill component, and styleguide page untouched per scope.

### 7. Phase 6 deferred
- `crossRole` schema reshape and role-trees generator NOT touched. Stephen left the choice open. Both carry larger blast radii and need a separate decision pass.

## Cleanup needed in the working tree

The Edit tool emitted trailing NUL bytes on several files I touched. I stripped them post-edit:
- `src/components/shell/command-palette.tsx`: 1369 NULs removed
- `src/app/marines/[topic]/[slug]/page.tsx`: 1310 NULs removed
- `src/app/leader/[topic]/[slug]/page.tsx`: 1324 NULs removed
- `src/app/admin/[unitType]/[topic]/[slug]/page.tsx`: 1242 NULs removed
- `src/components/shell/phase-placeholder.tsx`: 2 NULs removed
- `src/lib/content/schemas.ts`: 30 NULs removed (also rebuilt from HEAD then re-edited because the FS subagent's full-file write truncated it at line 342)
- `src/components/domain/docx-export-button.tsx`: 2 NULs removed
- `src/components/domain/video-embed.tsx`: 2 NULs removed
- `src/components/domain/pdf-letter-builder.tsx`: 2 NULs removed
- `src/components/domain/naval-letter-builder.tsx`: 6 NULs removed

All 10 edited files now pass a bracket-balance check and end on a sane terminator.

## Verification status

- `node scripts/sync-content.mjs` against my tightened schema and backfilled JSON: PASS. 32 inspection entries validated.
- `npx tsc --noEmit -p .`: BLOCKED by pre-existing WIP truncation in files I did not touch.
- `npx next lint`: cap-blocked by the 45 second sandbox timeout. Did not complete.
- `npx next build`: not run. Build depends on the truncated WIP files.

## Pre-existing WIP blockers (NOT from this fix pass)

The following files in the working tree are truncated mid-statement at the source level. These were broken before this session started. Stephen needs to repair or revert his WIP before a clean lint or build run is possible.

- `scripts/sync-content.mjs` - truncated at line 265 mid-string. Working-tree backup at `/tmp/sync-content.wip.mjs`.
- `src/components/shell/footer.tsx` - JSX `<footer>` and `<div>` left unclosed at line 117.
- `src/lib/content/loader.ts` - truncated at line 247 mid-expression.
- `src/lib/marines-categories.ts` - unterminated string literal at line 2060.
- `src/components/domain/checklist-tool.tsx` - JSX `<Card>`, `<CardContent>`, `<ul>`, `<li>` left unclosed.
- `src/components/domain/mdx-content.tsx` - JSX `<article>` left unclosed.
- 11 marines parent-group landing pages: `src/app/marines/{awards,dts,education,gtcc,legal-services,life-events,marine-and-family-programs,pay-and-entitlements,performance-evaluation,reenlistments-and-extensions,separations-and-retirement}/page.tsx` - each truncated around line 85.
- `src/app/inspections/page.tsx` and `src/app/inspections/igmc/page.tsx` - truncated.

`git status --short src/ scripts/` shows roughly 20 modified files plus 6 deletions. The deletions match an in-progress route restructure (knowledge, policy, situations, references). Confirm direction with Stephen before proceeding.

## Leftover artifact

A throwaway `tsconfig.audit.json` sits at the repo root. The bash sandbox cannot delete it because the file tools wrote it with read-only mode. Safe to delete from your shell.

## Next decisions for Stephen

1. Confirm the WIP source-file truncations are intentional in-progress edits or accidental corruption. If accidental, revert from HEAD on a per-file basis. Once those clear, the lint and build will run end to end.
2. Decide on the wider VW sweep beyond iandi. 2670 banned-word hits remain across content/marines, content/leader, content/commander, content/admin (non-iandi), and reference collections.
3. Decide on the two deferred Phase 6 items: `crossRole` schema reshape and role-trees generator.
4. Review the 20 inspection JSON files now carrying `_audit_notes` defaults. Replace generic sponsor and applicabilityLevel placeholders with SME-correct values.

## Addendum - citations cleanup pass

A follow-on pass cleared the citation-registry gaps Stephen surfaced.

### Renumbers (back-compat aliases preserved)

- `content/citations/mco-11000-1.mdx` to `mco-11000-22.mdx`. MCO 11000.1 was largely absorbed into MCO 11000.22. URL set to the PDF Stephen provided.
- `content/citations/mco-1720-1.mdx` to `navmc-1720-1b.mdx`. Suicide prevention procedures moved to the NAVMC chain. Type reclassed from MCO to NAVMC. URL set to the SECURED PDF Stephen provided.
- `content/citations/mco-3750-6.mdx` to `opnavinst-3750-6t.mdx`. MCO 3750.6 never existed as an MCO. Aviation safety lives under OPNAVINST 3750.6T (issued 24 October 2024 with RMI and Naval Safety Command updates).
- `content/citations/mco-5110-2.mdx` to `mco-5110-4b.mdx`. Postal Affairs and Official Mail Program canonical Order is MCO 5110.4B (effective 9 December 2021).
- `content/citations/mco-6000.mdx` to `mcwp-4-11-1.mdx`. MCO 6000 does not exist. Health Service Support doctrine lives in MCWP 4-11.1 (Marine Corps Warfighting Publication, 10 December 2012).

### New entries

- `content/citations/mco-6320-4.mdx`. Companion to MCWP 4-11.1. Joint OPNAVINST 6320.7A and MCO 6320.4, Health Care Quality Assurance Policies for Operating Forces (15 August 2007).

### Superseded entry

- `content/citations/cjcsm-3150-03d.mdx`. Marked `hidden: true`, body redirected to MCO 3504.2A (Marine Corps OPREP-3 implementation). The CJCSM Library landing serves as the externalUrl fallback.

### Referrer rewrite

The 5 admin pages under `s1g1-operations-event-incident-reporting-*.mdx` now cite MCO 3504.2A inline. CJCSM 3150.03D mentions reduced from 27 to 9, with every remaining mention wrapped in a "(superseded, no direct successor, current Marine Corps source is MCO 3504.2A)" parenthetical for historical context.

### Backfill summary

- Subagent web-research backfilled 8 citation URLs (MCO 11240.118A, 1700.23G, 1742.1C, 3302.1F, 3710.7, 3800.2B, 5040.6J, 5354.1G).
- Stephen-provided URLs applied to 5 (MCO 11000.22, NAVMC 1720.1B, MCO 5110.4B, MCWP 4-11.1, MCO 6320.4).

### Current registry coverage

- 308 citations total.
- 304 with externalUrl (was 290 before this pass).
- 935 aliases (was 918 before this pass).
- 2801 page-citation links across 308 citations.
- 4 remain without externalUrl: 3 author-marked placeholders (mco-1050-3, mco-1400-32d, mco-1610-7, zero referrers each) plus mctfsprium (114 referrers, no public URL by design, body documents the MOL access gate).

### Alias resolution check

All renumbered aliases resolve correctly. "MCO 11000.1" routes to mco-11000-22, "MCO 1720.1" routes to navmc-1720-1b, "MCO 3750.6" routes to opnavinst-3750-6t, "MCO 5110.2" routes to mco-5110-4b, "MCO 6000" routes to mcwp-4-11-1, "CJCSM 3150.03D" routes to the hidden cjcsm-3150-03d page.

## Sources

- [Audit findings merged](computer://D:\Coding\SemperAdminPortal\audit\findings.merged.json)
- [Audit report](computer://D:\Coding\SemperAdminPortal\audit\REPORT.md)
- [Citations false positives](computer://D:\Coding\SemperAdminPortal\audit\citations-links\false-positives.md)
- [FS backfill report](computer://D:\Coding\SemperAdminPortal\audit\frontmatter-schema\findings.json)
