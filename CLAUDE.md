# Semper Admin Portal - Working Instructions

These instructions govern all work in this repository. Read them before editing code, content, or copy.

## 1. Project Identity

- Live URL: https://semperadmin.github.io/SemperAdminPortal/
- Repo root: D:\Coding\SemperAdminPortal
- Stack: Next.js 16 App Router, TypeScript strict, Tailwind 4, MDX content collections, Pagefind search, static export to GitHub Pages.
- Owner: Stephen, USMC subject-matter expert.
- Purpose: authoritative, sourced, role-tagged USMC administrative reference. Pay, records, life events, reserve operations.

The technical foundation is locked. Do not replatform. Do not propose React Router, Vite, or alternate hosting unless asked.

## 2. The Four Roles - Hard Separation

The portal serves four distinct audiences. Content, navigation, and tone separate by role. Never blur the lines.

### 2.1 Role Definitions

- marine: Junior enlisted. Reads quick policy facts, pay rules, leave mechanics, basic admin steps. Tone is plain-language, action-first, no jargon.
- leader: NCO and SNCO. Reads how-to guides, decision aids, coaching scripts. Tone is procedural, builds confidence to coach Marines.
- commander: Officer. Reads policy summaries, signing authorities, discipline routing, change-of-command turnover. Tone is concise, authority-anchored, signature-aware.
- admin: S-1 and admin specialist (0102, 0111, 0170). Reads forms, systems, process flows, function-coded steps (GENA, OPER, MPMN, PERA). Tone is technical, MOS-aware, system-of-record precise.

### 2.2 Separation Rules

- Every MDX entry carries a `roles` array in frontmatter. Minimum one role. Pages tagged for multiple roles render under each one.
- Each role owns a route prefix: `/marines`, `/leader`, `/commander`, `/admin`. Do not cross-route.
- Reference surfaces sit outside the role routes at top-level paths. Live today: `/tools`, `/videos`, `/links`, `/reports`, `/citations`, `/search`, `/inspections`. Planned, not yet routed: `/policy`, `/situations`, `/snippets`, `/references`. Those four collections hold no content and `scripts/sync-content.mjs` lists them as routeless, authoring into them warns at build time until their routes ship. These are role-agnostic chrome. Their entries still carry `roles` arrays for filtering and sidebar exposure.
- Each role has its own curated tree in `src/lib/role-trees.ts`. Do not show another role's tree in the active sidebar.
- Role switching happens in exactly one surface: the topbar segmented control on desktop, the top of the mobile drawer on mobile. The sidebar header is read-only "Viewing as" context. Do not add a second switcher.
- Cross-role linking happens through one component only: `CrossRoleStrip` at the bottom of detail pages. Wire it via `relatedRoles` in `roleContentSchema`. Do not inline cross-role links in prose.
- The admin schema is the strictest. Admin content requires `unitType`, `function`, `skillLevel`, `mosPerforming`. Treat admin pages as system-of-record reference, not narrative.

### 2.3 Voice by Role

- marine: short imperative steps, no acronyms without expansion, plain numbers.
- leader: numbered procedure with owner and trigger, decision points called out as Callouts.
- commander: authority statements first, signature requirement second, exception path third.
- admin: function-coded steps, source policy and chapter cited inline, T&R event code present where applicable.

A Marine page reading like an Admin page has failed. An Admin page reading like a Marine page has failed. Match the audience.

## 3. UI/UX Rules - Locked Conventions

The redesign shipped on 2026-05-04. The spec lives at D:\Coding\SemperAdminPortal\redesign\Semper-Admin-Portal-Redesign-Spec.md. The mockup lives at D:\Coding\SemperAdminPortal\redesign\mockups\redesign-preview.html. Treat both as binding.

### 3.1 Default Theme and Chrome

- Default theme: dark navy. Light parchment available via toggle. Do not flip the default.
- Topbar: floating pill, 56px tall, 14px inset, `r-lg` corners, backdrop blur, `shadow-md`, scarlet 80px underline accent. Do not collapse to flush flat.
- Sidebar: 268px Mintlify TreeNav driven by `src/lib/role-trees.ts`. Active leaf carries a scarlet dot.
- Right TOC: 224px, sticky, conditional. Render only on content pages with 3+ h2 headings.
- Mobile: 48px topbar, bottom tab bar with 5 tabs (Home, Search, Browse, Tools, Recent). Drawer holds the role tree.
- Footer: three columns. Build date and verification posture in mono.

### 3.2 Color Tokens

Tokens live in `src/app/globals.css`. Do not hardcode hex values in components. Reference by token only.

- Brand: `#B82230` brick scarlet, `#0F1F3D` deep navy, `#0A1424` charcoal navy, `#F2E5BE` parchment, `#B89042` antique brass.
- Surfaces light: `#F8F4E8` bg, `#FFFCF4` elev, `#EFE9D6` sunken.
- Surfaces dark: `#0A1424` bg, `#11203F` elev, `#060E1A` sunken.
- Role accents: marine scarlet, leader brass, commander navy, admin muted green `#2F8F5C`.
- Status: fresh `#2F8F5C`, aging `#C97D1F`, stale `#B83232`, info `#2F5FA8`.

### 3.3 Typography

- Display: Bebas Neue. Use only on hero h1, role card h3, page header h1. Maximum one display surface per fold.
- H1 in body content: Inter 28/700.
- H2: Inter 22/700. H3: Inter 17/600.
- Body: Inter 15/400/1.6. Long-form policy body: Inter 16/400/1.7.
- UI: Inter 14/500. Eyebrow: Inter 11/700 caps.
- Mono: JetBrains Mono 13/500 for citations, dates, codes.

Bebas Neue on every heading is wrong. Inter takes h2 and h3.

### 3.4 Spacing and Radii

- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64. No off-scale values.
- Card padding: 24px on desktop role and home cards. 20px on dense content cards. 16px minimum on mobile.
- Section spacing: 32 within, 40 between, 56 between major blocks.
- Radii: `r-xs` 3px tags, `r-sm` 6px buttons, `r-md` 8px cards, `r-lg` 12px hero, `r-pill` for status pills.

### 3.5 Premium Polish Layer (UUPM Benchmark)

Six craft moves shipped in the build. Preserve them in any new surface.

1. Default to dark theme.
2. Floating pill topbar.
3. Ambient bloom: radial gradient pseudo-element at section tops in dark mode. Scarlet 10 percent and marine-blue 8 percent, blurred 20px.
4. Stat tiles: 32px brass icon top-left, 44px Bebas Neue numeric, eyebrow label, meta line, hover lift.
5. Gradient text accent: 95deg scarlet-to-brass on a single key word per page. Hero only.
6. Card breathing room: 24px padding, 18px grid gaps, per-role tinted radial bloom on dark mode role cards.

### 3.6 Motion

- Fast 120ms hover, default 180ms drawer, slow 240ms route fade.
- Ease-out for entry, ease-in for exit.
- Every transition gated behind `prefers-reduced-motion`. New components inherit by default.
- No scroll-driven reveals. No page-transition theater.

### 3.7 Components - Where to Reach

- Primitives at `src/components/ui/`: Button, Card, Pill (use Pill, not Badge), StatusPill, Skeleton, Separator.
- Shell at `src/components/shell/`: TopNav, SideNav, TreeNav, Breadcrumbs, BottomTabs, Footer, RolePickerDialog, SearchBox.
- Domain at `src/components/domain/`: PageHeader, MetaRow, StatTile, FilterBar, Callout (5 variants), Citation, CrossRoleStrip, TableOfContents, EmptyState, RoleChip, PolicyBadge, LastVerified, SourceCitation.
- Badge is deprecated. Migrate to Pill on touch.

### 3.8 Page Header Pattern

Every page header follows the same four-line structure:

1. Tag row: role pill, status pill, optional policy badge.
2. Display h1.
3. Summary (one or two sentences).
4. Meta row: effective date, authority, reading time, actions.

Users learn the pattern once and read it everywhere. Do not invent a new header per surface.

## 4. Content Authoring Rules

### 4.1 Frontmatter Required Fields

Every MDX file under `content/<collection>/<slug>.mdx` requires:

- `title`: short, plain-language headline.
- `slug`: URL-safe, must match filename.
- `summary`: one or two sentences, under 160 chars.
- `roles`: array from marine, leader, commander, admin. Minimum one.
- `lastVerified`: ISO date. Drives staleness banner.
- `source`: object with title, optional publisher, optional url.

Bad frontmatter fails the build. Validation runs through zod at build time.

### 4.2 Collections

Four collections are schema-defined but hold no content and have no routes yet: `policies/`, `situations/`, `snippets/`, `references/`. The build treats them as routeless and warns if content lands in them before their routes ship. Build the route surface first, then author.

- `policies/`: MARADMIN, MCO, ALMAR, NAVMC, DODI breakdowns. Requires `kind`, `number`, `effectiveDate`.
- `situations/`: scenario walkthroughs. Requires `scenario`, optional `prerequisites`, `relatedPolicies`.
- `snippets/`: three-bullet quick references. Requires `topic`, 2 to 4 `bullets`.
- `videos/`: video metadata. Requires `durationSeconds`, `videoUrl`, optional `chapters`.
- `references/`: forms, calculators, checklists. Requires `type`.
- `tools/`: interactive tool registry. Requires `outputType`, `routeSlug`.
- `inspections/`: IGMC and MCAAT checklist programs. JSON-sourced under `content/inspections/<track>/<programNumber>.json`, validated by `inspectionSchema`. Requires `track` (igmc, mcaat), `programNumber`, `slug`, `sponsor`, `applicabilityLevel`, `effectiveDate`, `subsections[]` with `items[]` (code, question, references, evidenceHint).
- `citations/`: parent policies and authority documents. MDX-sourced under `content/citations/<id>.mdx`, validated by `citationSchema`. Requires `id` (URL-safe slug, must match filename), `aliases[]` (every input form the resolver should accept), `title`, `type` (CITATION_TYPES enum), `number`, `publisher`, `lastVerified`, `roles[]`. Optional `effectiveDate`, `externalUrl`, `supersedes[]`. Sync emits `src/generated/citations.json` with `byId` and `byAlias` maps. Alias uniqueness is enforced across the collection at build time. This is the canonical home for parent-document URLs. Other surfaces resolve through it.
- Admin content: extra fields (`unitType`, `function`, `skillLevel`, `mosPerforming`, optional `trEventCode`).

### 4.3 Verification Policy

- A page flips to `aging` after 12 months past `lastVerified`.
- A page flips to `stale` after 24 months past `lastVerified`.
- Inspections override the global cadence. IGMC programs roll annually, so inspection content flips to `aging` at 6 months and `stale` at 12 months past `lastVerified`.
- Refresh `lastVerified` only after a real source check.
- The `LastVerified` component renders the badge on every entry.
- The source-check Callout auto-promotes to warning then danger as content ages.

### 4.4 Citations

- Inline Citation chips (superscript) link to the source.
- Citations also list in the right TOC.
- StatusPill in the meta row, never floating in a corner.
- One claim, one citation. Anchor authority at the moment of the claim.

### 4.5 Citations Registry Workflow

The citations registry under `content/citations/` is the canonical home for parent policies and authority URLs. Every Citation chip, ReferencePill, and SourceCitation in the portal resolves through `src/lib/references/resolve.ts` against the build-time index at `src/generated/citations.json`.

Authoring flow.

1. Run `npm run citations:audit` to see which cited parent docs the registry does not resolve. The script reports coverage per collection and lists the top unresolved patterns.
2. Run `npm run citations:import` to scaffold stub MDX files. The script reads `content/inspections/_policy-indexes/` and the 68k-alias manifest, scans every collection's references, and writes stubs to `content/citations/_stubs/<id>.mdx` for the top unauthored documents. `_stubs/` is excluded from `content:sync` so the build stays green during review. Args: `--all`, `--limit N`, `--type MCO`, `--dry-run`.
3. Review each stub. Edit title, publisher, aliases, and roles. Verify the externalUrl points at a canonical landing page, not a chapter-specific PDF.
4. Move approved stubs from `content/citations/_stubs/` into `content/citations/`. The filename must match the `id` field.
5. Run `npm run content:sync` to rebuild the registry, the reverse index, and the alias map. The script enforces alias uniqueness across the collection and emits a coverage warning line.

Resolver behavior.

- `resolveReference(input)` normalizes the input. Uppercase, single space, strip periods after Vol/Ch/Sect/Para/Encl/App/Art keywords, strip commas. Strip section, chapter, enclosure, and parenthetical suffixes. Look up against the byAlias map.
- Click rule. Explicit `href` prop wins. Registry hit with `externalUrl` opens the source in a new tab. Registry hit without `externalUrl` routes to `/citations/<id>`. No hit renders a plain chip.

No-URL posture.

- Around 70 visible entries carry no `externalUrl` by design. The 63 MCTFSPRIUM source-text children resolve to their portal pages, and the FPM volumes sit behind access gates with no public landing page. Audits stop flagging these. A missing `externalUrl` on any other entry type is a genuine gap.

Deprecation.

- `src/lib/inspections/resolve-reference.ts` is `@deprecated`. ReferencePill still falls back to it for the 99 percent of inspection references not yet in the registry. Plan removal once registry coverage of inspection references crosses 80 percent.

## 5. Code Rules

- TypeScript strict. No `any`.
- No `// eslint-disable` without a reason in the PR description.
- Component file names: lowercase with hyphens.
- Tokens in `src/app/globals.css`. No hardcoded hex outside tests.
- Imports through the `cn` helper at `src/lib/utils.ts`.
- New shadcn primitives: `npx shadcn@latest add <component>`. Land in `src/components/ui/`.
- Active voice in user-facing strings. Short sentences. No filler.
- Build content sync before any client component reads from generated catalogs: `npm run content:sync`.
- Run `npm run lint` and `npm run build` before opening a PR.

## 6. Writing Constraints (Stephen's Rules)

These apply to all prose, copy, comments, and chat responses about this project.

### 6.1 Punctuation

- Periods, commas, hyphens only.
- No em-dashes.
- No semicolons.
- No asterisks.

### 6.2 Forbidden Words

Do not use any of these or their variants: can, may, just, that, actually, probably, basically, could, esteemed, shed light, crack, enable, unlock, discover, rocket, revolutionize, disruptive, illuminate, unveil, paradigm, realm, however, remarkable, stark, testament, skyrocketing.

### 6.3 Voice

- Active voice. Speak directly. Use "you" and "your".
- First sentence delivers the core answer or the most critical flaw. Skip greetings, affirmations, and intros.
- No validation. Stress-test user input. Identify blind spots before agreeing.
- Lead with what is wrong or missing.
- Earn agreement. Only agree after verifying facts and logic.
- Marine SME tone. Direct. No fluff.

## 7. Pre-Flight Checklist for Any Change

Before editing or adding to this repo, confirm:

1. The change names a target role or carries a `roles` array. If it touches all four, justify.
2. The change uses tokens from `globals.css`, not hardcoded hex.
3. The change uses Pill, not Badge. PageHeader, not a custom header. Callout for asides.
4. The change respects the spacing scale and the 56px topbar height.
5. The change runs `npm run lint` clean.
6. Frontmatter passes zod validation. `lastVerified` reflects a real source check.
7. No banned words, no em-dashes, no semicolons, no asterisks in user-facing copy.

## 8. Reference Files

- D:\Coding\SemperAdminPortal\redesign\Semper-Admin-Portal-Redesign-Spec.md - source of truth for tokens, components, surface specs.
- D:\Coding\SemperAdminPortal\redesign\mockups\redesign-preview.html - 7-tab interactive mockup, opens in any browser.
- D:\Coding\SemperAdminPortal\public\logo.jpg - palette extraction source.
- Polish benchmark: UUPM at uupm.cc.
- D:\Coding\SemperAdminPortal\src\lib\roles.ts - canonical role registry.
- D:\Coding\SemperAdminPortal\src\lib\role-trees.ts - per-role navigation trees.
- D:\Coding\SemperAdminPortal\src\lib\content\schemas.ts - zod schemas for every collection.

## 9. Phase 6 Carry-Over (Closed 2026-07-05)

All three items shipped. Verified against the codebase on 2026-07-05.

- Badge migration complete. No `badge.tsx` primitive remains under `src/components/ui/` and no component imports Badge. Pill owns all tag surfaces.
- CrossRoleStrip is wired into all four role detail templates and resolves through `relatedRoles` in `roleContentSchema`.
- `role-trees.ts` reads generated nav. `scripts/generate-role-nav.mjs` emits `src/generated/role-nav.json` from the content catalogs during content sync.

End of instructions.
