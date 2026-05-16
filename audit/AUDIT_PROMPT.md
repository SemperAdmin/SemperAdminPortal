# Semper Admin Portal - Consistency and Connections Audit

## 0. How to use this prompt

Hand this file to a fresh Claude session sitting at the repo root, `D:\Coding\SemperAdminPortal`. The session reads this prompt, spawns six parallel subagents, merges their outputs, and writes the deliverables under `audit/`.

Session contract:
- Read `CLAUDE.md`, `redesign/Semper-Admin-Portal-Redesign-Spec.md`, `src/lib/content/schemas.ts`, `src/lib/roles.ts`, `src/lib/role-trees.ts`, and `src/app/globals.css` before delegating.
- Spawn the six subagents listed in Section 4 in a single parallel batch, one Agent call per dimension.
- Wait for all six to return. Merge their `findings.json` files into `audit/findings.merged.json`. Write `audit/REPORT.md`.
- Do not edit any source file under `src/`, `content/`, `scripts/`, or `redesign/`. The audit reads and writes only inside `audit/`.

Stop conditions:
- Any subagent reports a blocker. Halt the audit, surface the blocker to the user, ask before continuing.
- Any path referenced in this prompt does not resolve. Halt, list the missing path, ask before continuing.

Writing constraints apply to every output the audit produces. Section 6 of `CLAUDE.md` is binding. No em-dashes, no semicolons, no asterisks. No banned words. Active voice. First sentence delivers the core finding.

## 1. Ground truth

Treat these files as the only authoritative sources. If a rule is not in one of them, raise it as a question, do not invent the rule.

- `CLAUDE.md` - working instructions, role definitions, voice rules, writing constraints, pre-flight checklist.
- `redesign/Semper-Admin-Portal-Redesign-Spec.md` - tokens, components, surface specs, the six premium polish moves.
- `redesign/mockups/redesign-preview.html` - visual reference for the shipped design.
- `src/lib/content/schemas.ts` - zod schemas for every content collection. Authoritative on required fields.
- `src/lib/roles.ts` - canonical role enum. Four values, fixed.
- `src/lib/role-trees.ts` - per-role sidebar trees. Hand-curated today.
- `src/app/globals.css` - all design tokens. Hardcoded hex outside this file is a violation.

## 2. Repo footprint at audit time

Content collections live under `content/<collection>/`. Sync into `src/generated/<collection>.json` via `scripts/sync-content.mjs`.

Collections present:
- `content/marines/` - marine-role MDX, plus legacy `.trash-` files awaiting removal
- `content/leader/` - leader-role MDX
- `content/commander/` - commander-role MDX
- `content/admin/` - admin-role MDX, strictest schema
- `content/citations/` - parent policies, with `_stubs/` queue excluded from sync
- `content/videos/`, `content/tools/`, `content/policies/`, `content/situations/`, `content/snippets/`, `content/references/`, `content/links/`, `content/reports/`, `content/legal/`
- `content/inspections/<track>/<programNumber>.json` - JSON-sourced, separate cadence

Routes live under `src/app/`. Per-role detail pages live at `src/app/<role>/[topic]/[slug]/page.tsx` and `src/app/admin/[unitType]/[topic]/[slug]/page.tsx`.

Reference surfaces sit outside role routes at `/citations`, `/inspections`, `/tools`, `/videos`, `/links`, `/reports`, `/search`, `/legal`, `/styleguide`.

Components split three ways:
- `src/components/ui/` - primitives. Pill is canonical. Badge is deprecated.
- `src/components/shell/` - layout chrome.
- `src/components/domain/` - PageHeader, CrossRoleStrip, Callout, Citation, etc.

Generated catalogs live at `src/generated/*.json`. Components and pages read these at build time.

## 3. Findings schema

Every subagent writes one file at `audit/<dimension>/findings.json` conforming to `audit/findings.schema.json`. Keys:
- `dimension`, fixed per agent
- `generatedAt`, ISO 8601 UTC
- `repoCommit`, output of `git rev-parse HEAD`
- `summary.counts`, integers for blocker, major, minor, nit
- `summary.filesScanned`, integer
- `findings[]`, ordered by severity then by file

Severity rules:
- blocker - breaks build, breaks role separation hard rule, ships a banned word or em-dash in user-facing copy
- major - zod schema violation, broken internal link, missing required component on a surface
- minor - hardcoded hex when a token exists, Badge import in a non-deprecated path, token drift
- nit - readability, naming, ordering, no functional impact

Finding ids use a 2 to 4 letter dimension prefix plus a 4-digit serial. Use the prefixes declared in `findings.schema.json`.

## 4. Subagent prompts

The orchestrating session spawns six subagents in one parallel batch. Each subagent receives the prompt below verbatim plus the ground-truth file paths from Section 1.

Every subagent obeys these rules:
- Read-only on `src/`, `content/`, `scripts/`, `redesign/`, `public/`.
- Write only inside `audit/<dimension>/`.
- Do not run `npm run build`, `npm run lint`, or any sync script. Pure static analysis.
- Cap individual `findings[]` entries at 500. If the count exceeds 500, group the rest into a single rollup finding with a count and a top-N example list.
- Return a single message summarizing the run, with the path to the written `findings.json` and the summary counts.

### 4.1 Subagent A - Role separation and routing

Prefix: RS

Goal: confirm hard separation across the four roles. Every page renders under its role prefix, every MDX entry tags a role, no cross-route leakage.

Checks:
1. Every file under `content/marines/` has `roles` including `marine`. Same for `leader`, `commander`, `admin`. Flag mismatches as major.
2. Every page under `src/app/marines/`, `src/app/leader/`, `src/app/commander/`, `src/app/admin/` reads only from the matching role catalog in `src/generated/`. Cross-imports are major.
3. `src/lib/role-trees.ts` exposes one tree per role. Any tree referencing slugs outside its role collection is a blocker.
4. The topbar role switcher lives in exactly one component, `src/components/shell/top-nav.tsx` on desktop and `src/components/shell/role-picker-dialog.tsx` for mobile. A second switcher anywhere is a blocker.
5. The sidebar header is read-only viewing-as context. Flag any interactive role switcher in `src/components/shell/side-nav.tsx` or `tree-nav.tsx` as a blocker.
6. `.trash-` prefixed files under `content/` are major. List each.
7. Reference surfaces under `/citations`, `/inspections`, `/tools`, `/videos`, `/links`, `/reports` still carry a `roles` array on every entry. Missing array is major.

Output: `audit/role-separation/findings.json`.

### 4.2 Subagent B - Frontmatter and schema validity

Prefix: FS

Goal: every MDX and inspection JSON parses cleanly against its zod schema.

Checks:
1. Walk every file in `content/`. Skip `content/citations/_stubs/`.
2. For each file, parse frontmatter with `gray-matter` semantics. For inspection JSON, parse directly.
3. Validate against the matching schema in `src/lib/content/schemas.ts`. Use the collection name to pick the schema.
4. Missing required field is major. Wrong type is major. Failed regex is major.
5. `lastVerified` older than 12 months is minor (aging). Older than 24 months is major (stale). Inspection content flips at 6 and 12 months per `classifyInspectionStatus`.
6. Admin pages without `unitType`, `function`, `skillLevel`, `mosPerforming` are blocker.
7. Citation files where `id` does not match the filename are major. Duplicate alias across the citations collection is blocker.
8. `tr_event_code` format mismatch against the schema regex is major.

Output: `audit/frontmatter-schema/findings.json`.

### 4.3 Subagent C - UI tokens and component conformance

Prefix: UI

Goal: every component reads tokens from `globals.css`. Page headers follow the four-line pattern. Pill replaces Badge.

Checks:
1. Grep every file under `src/` for `#[0-9a-fA-F]{3,8}\b`. Any hit outside `src/app/globals.css` and test files is minor. Hits inside theme-related code lacking a token equivalent are major and flagged for token creation.
2. Grep for `from "@/components/ui/badge"` and bare `<Badge` usage. Every hit outside `src/components/ui/badge.tsx`, `src/components/ui/pill.tsx`, and `src/app/styleguide/page.tsx` is minor with a migration suggestion. Note Phase 6 carry-over status in the rollup.
3. PageHeader pattern. Every detail page at `src/app/marines/[topic]/[slug]/page.tsx`, `src/app/leader/[topic]/[slug]/page.tsx`, `src/app/commander/[topic]/[slug]/page.tsx`, `src/app/admin/[unitType]/[topic]/[slug]/page.tsx` imports and renders `PageHeader`. Missing import is major.
4. Confirm `--topbar-h: 56px` is the only topbar height referenced. Hardcoded 48px, 64px, 72px on topbar surfaces is minor.
5. Spacing scale conformance, 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64. Any tailwind class outside this scale on spacing utilities under `src/app/` and `src/components/` is nit.
6. Callout vs raw `<aside>` or styled `<div>` ad-hoc asides. Any ad-hoc aside in MDX-adjacent rendering paths is minor.
7. Bebas Neue applied beyond hero h1, role card h3, page header h1. Any `font-display` class on h2 or h3 in body content is minor.

Output: `audit/ui-tokens-components/findings.json`.

### 4.4 Subagent D - Citations registry and link integrity

Prefix: CL

Goal: every cited parent doc resolves through the registry. Every internal link points at a live slug. No orphan pages.

Checks:
1. Read `src/generated/citations.json`. Confirm the `byId` and `byAlias` maps exist and match the source MDX in `content/citations/`. Missing maps is blocker.
2. Walk every MDX file in `content/`. Extract `<Citation>`, `<ReferencePill>`, `<SourceCitation>`, and frontmatter `references[]` strings. Normalize per `src/lib/references/resolve.ts` rules. Lookup against the byAlias map.
3. Coverage rate per collection. Report as a percentage. Below 50 percent is major, 50 to 80 percent is minor, above 80 percent is nit (informational).
4. Internal slug links inside MDX prose (`[text](/path)` patterns). Resolve each path against the generated catalogs and the route tree. Broken slug is major.
5. Orphan check. Every slug in `src/generated/<collection>.json` with no `role-trees.ts` entry, no reference, and no inbound internal link is minor.
6. `content/citations/_stubs/` headcount. Reported as a single informational finding with severity nit.
7. Alias uniqueness across `content/citations/`. Duplicate aliases is blocker.

Output: `audit/citations-links/findings.json`.

### 4.5 Subagent E - Cross-role wiring

Prefix: CR

Goal: every detail page renders `CrossRoleStrip` when the entry has `relatedRoles`. No inline cross-role link in prose.

Checks:
1. Every MDX file under `content/marines/`, `content/leader/`, `content/commander/`, `content/admin/` either carries `relatedRoles` in frontmatter or is exempt with a justification comment at the top. Missing both is minor.
2. Detail-page templates at the four `[slug]/page.tsx` paths import and render `CrossRoleStrip` at the bottom of the article. Missing import on a page where any rendered entry carries `relatedRoles` is major.
3. Grep MDX bodies for inline links of shape `/marines/`, `/leader/`, `/commander/`, `/admin/`. Any such link inside prose paragraphs (not in a frontmatter field) is minor with a fix suggestion to move to `relatedRoles`.
4. CLAUDE.md Phase 6 lists `crossRole: CrossRoleLink[]` as open work. Confirm whether the field has shipped on `roleContentSchema` since CLAUDE.md was last edited. If not, log one informational nit referencing the open item.

Output: `audit/cross-role-wiring/findings.json`.

### 4.6 Subagent F - Voice per role and writing constraints

Prefix: VW

Goal: every user-facing string matches the role voice rules and the Section 6 writing constraints.

Banned characters in user-facing copy:
- Em-dash `—`, en-dash `–` inside prose (allow inside code or data).
- Semicolon inside prose. Allow inside code, CSS, frontmatter arrays.
- Asterisk inside prose. Allow inside MDX list markers and code blocks.

Banned words list, case-insensitive, match whole words and obvious variants. Quoted in code spans here to keep this prompt clean: `can`, `may`, `just`, `that`, `actually`, `probably`, `basically`, `could`, `esteemed`, `shed light`, `crack`, `enable`, `unlock`, `discover`, `rocket`, `revolutionize`, `disruptive`, `illuminate`, `unveil`, `paradigm`, `realm`, `however`, `remarkable`, `stark`, `testament`, `skyrocketing`.

Checks:
1. Walk every `.mdx` file in `content/`. Extract the body (post-frontmatter). Strip code fences. Scan prose only.
2. Walk every `.tsx` file under `src/components/` and `src/app/`. Scan string literals passed to JSX text nodes and to props named `title`, `label`, `description`, `summary`, `placeholder`, `aria-label`, `tooltip`, `cta`, `ctaLabel`, `eyebrow`. Skip strings inside imports, identifiers, and CSS class names.
3. Every banned word hit in user-facing copy is blocker. List file, line, surrounding sentence.
4. Em-dash, semicolon, asterisk in prose is blocker.
5. Voice match per role, sampled per collection. Read 10 random entries per role. For each, score against the voice rule in CLAUDE.md Section 2.3. Misalignment is minor with a one-line justification.
6. Acronym expansion on marine-role pages. Any unexpanded acronym on first use, where the acronym is not in `src/lib/directives/acronyms.ts`, is minor.

Output: `audit/voice-writing-constraints/findings.json`.

## 5. Orchestrator merge step

After the six subagents return:

1. Read every `audit/<dimension>/findings.json`. Validate each against `audit/findings.schema.json`.
2. Concatenate findings arrays into `audit/findings.merged.json`. Preserve dimension prefixes. Sort by severity, then file, then line.
3. Write `audit/REPORT.md` with:
   - Header block: generation timestamp, repo commit, total file count scanned.
   - Severity table: blocker, major, minor, nit counts by dimension.
   - Top 10 blocker findings, full detail.
   - Top 10 major findings, full detail.
   - Per-dimension section with the summary counts and a link to the dimension findings.json.
   - Footer: open questions surfaced during the run.

Both deliverables must pass the writing constraints. No em-dashes, no semicolons, no asterisks in the report prose. Banned words list applies.

## 6. Deliverables

After the audit completes, the `audit/` directory contains:

- `audit/findings.schema.json` - already authored
- `audit/AUDIT_PROMPT.md` - this prompt
- `audit/role-separation/findings.json`
- `audit/frontmatter-schema/findings.json`
- `audit/ui-tokens-components/findings.json`
- `audit/citations-links/findings.json`
- `audit/cross-role-wiring/findings.json`
- `audit/voice-writing-constraints/findings.json`
- `audit/findings.merged.json`
- `audit/REPORT.md`

The next agent in the chain reads `audit/findings.merged.json` and proposes fixes one severity bucket at a time, blocker first. Fix-agent does not run in this prompt. Audit only.

## 7. Pre-flight before delegating

Before spawning the six subagents, the orchestrator confirms:

1. `git status` is clean enough to record a stable `repoCommit`. If dirty, capture `git rev-parse HEAD` plus a note.
2. `audit/findings.schema.json` exists and parses.
3. Each ground-truth path in Section 1 resolves.
4. The six target subdirectories under `audit/` do not exist yet. If they do, archive them under `audit/_archive/<timestamp>/` before the run.

After delegation completes, the orchestrator confirms:

1. Six dimension findings.json files exist and validate.
2. The merge produced a non-empty `findings.merged.json`.
3. `REPORT.md` opens with a finding count and a one-paragraph posture summary.
4. The orchestrator's own response obeys Section 6 of CLAUDE.md.
