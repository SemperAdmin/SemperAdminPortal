# Links Page Ingestion Plan

Source: SharePoint Important Links page at `usmc.sharepoint-mil.us/sites/DCMRA_mra_SemperAdmin`.
Source extract: `outputs/sharepoint-links-extracted.md` (124 unique URLs, 131 raw items, 8 sections).
Target surface: `src/app/links/page.tsx` (already implemented, currently empty).
Target collection: `content/links/` (does not yet exist).
Target generated catalog: `src/generated/links.json` (currently `[]`).

## 1. Categories Locked

Use the 8 SharePoint section names verbatim. Source order preserved.

1. semper-admin (Semper Admin Links) - 4 source items
2. educational (Educational Links) - 18 source items
3. reference (Reference Links) - 21 source items
4. system (System Links) - 23 source items
5. ai (AI Links) - 7 source items
6. teams-channels (Teams Channels) - 14 source items
7. sharepoints (SharePoints) - 10 source items
8. more-great-links (More Great Links) - 34 source items

## 2. Role Visibility Locked

- Every entry carries `roles: ["marine", "leader", "commander", "admin"]`. Every Marine sees every link.
- Each entry carries an optional `audience` enum value (marine, leader, commander, admin). Audience drives a soft chip on the card and a soft filter. Audience never hides a link.

## 3. Schema Extension

Replace the current 2-field `linkSchema` at `src/lib/content/schemas.ts` lines 61-64.

```ts
export const linkSchema = baseFrontmatter.extend({
  url: z.string().url(),
  category: z.enum([
    "semper-admin", "educational", "reference",
    "system", "ai", "teams-channels",
    "sharepoints", "more-great-links",
  ]),
  additionalCategories: z.array(z.enum([
    "semper-admin", "educational", "reference",
    "system", "ai", "teams-channels",
    "sharepoints", "more-great-links",
  ])).default([]),
  audience: z.enum(["marine", "leader", "commander", "admin"]).optional(),
  access: z.enum(["public", "cac", "sharepoint", "teams", "intranet", "unknown"]),
  needsAccessReview: z.boolean().default(false),
  provider: z.string().optional(),
  requiresCac: z.boolean().default(false),
  aliases: z.array(z.string()).default([]),
});
```

Notes.

- `additionalCategories` handles cross-section appearances. Source has 5 cross-section duplicates (Semper Admin Teams, Intelink/COL Training, MPAB, plus the 4 RFF advisories within Reference Links). Entry renders in primary `category` plus each `additionalCategories` value.
- `aliases` captures alternate labels for the same URL. Used by the search index and by the RFF advisory consolidation.
- `access: "unknown"` plus `needsAccessReview: true` is the importer's default when the heuristic cannot tell. Surfaces an amber Verify Access pill on the card. Stephen resolves these during review.
- `roles` lives on `baseFrontmatter` already. Importer writes `["marine", "leader", "commander", "admin"]` for every entry.

## 4. Duplicate Handling

| Source duplicates | Decision |
|---|---|
| 4 RFF advisory entries (FANs, ICANs, PAANs, TANs) at one URL | One entry titled RFF Advisory Notifications, category `reference`, aliases hold the 4 labels |
| Semper Admin Teams Channel in 2 sections | One entry, category `semper-admin`, additionalCategories `["teams-channels"]` |
| Intelink and COL Training at one URL | One entry, category `educational`, aliases hold both labels, additionalCategories `["more-great-links"]` |
| MPAB in 2 sections | One entry, category `sharepoints`, additionalCategories `["more-great-links"]` |
| EHA and PHA at one URL | One entry titled Electronic and Periodic Health Assessment, category `more-great-links`, aliases hold both labels |

After dedupe: 124 unique entries become roughly 119 entries (4 RFF collapse, EHA/PHA collapse, others stay one entry with additional category tags).

## 5. URL Cleanup During Import

Importer applies these fixes and logs each rewrite in the stub frontmatter under `_importNotes`.

- ChestyBot - strip trailing `%22` and prepend `https://usmc.sharepoint-mil.us`
- ChatGPT via Menlo - strip trailing `%22`
- Claude AI via Menlo - strip trailing `%22`, fix label spelling Claud to Claude
- Command Legal Action - rewrite `landing.x%20html` to `landing.xhtml`
- Command Profile - replace leaked `window.open` snippet with the canonical Marine Profile URL. Flag for Stephen to verify the intended destination is `https://www2.manpower.usmc.mil/ncp/`
- MOS Roadmaps - strip the nested URL repetition inside `<...>` brackets
- 5 site-relative URLs - prepend `https://usmc.sharepoint-mil.us`:
  - ChestyBot, GTCC P&R RFF, ARDB Directives Management, ARDB Directives Resources, JAG JET SharePoint

## 6. Access Heuristic

Importer infers `access` by hostname and writes `needsAccessReview: true` when the host falls outside these known buckets.

- public: `*.gsa.gov`, `*.gov`, `studentaid.gov`, `*.archives.gov`, `*.redcross.org`, `safe.menlosecurity.com`, `linktr.ee`, `marines.dev`, `dodmwrlibraries.org`
- cac: `*.mil` not under SharePoint or Teams (MOL, OMPF, MarineNet, MyNavy, DTS, JKO, JST, manpower.usmc.mil, mctims.usmc.mil, manpower.marines.mil)
- sharepoint: `usmc.sharepoint-mil.us`, `*.sharepoint-mil.us`
- teams: `dod.teams.microsoft.us`, `*.teams.microsoft.us`
- intranet: `*.osd.mil`, `*.disa.mil`, `*.navy.mil`, `safe.apps.mil`, `portal.apps.mil`
- unknown plus needsAccessReview: anything not matched, including `play.apps.appsplatform.us` (CROSS), `usmc.percipio.com`, `home.cards.citidirect.com`, `intelshare.intelink.gov`

## 7. Importer Scope

- One pass. All 124 source items processed in a single run. Output directory `content/links/_stubs/`.
- `content:sync` excludes `_stubs/`. The build stays green during review.
- Each stub carries:
  - title from SharePoint label (cleaned).
  - slug as URL-safe kebab-case of the cleaned label.
  - summary as a one-sentence placeholder. Stephen edits each.
  - roles as all four.
  - lastVerified as the import date.
  - source as `{ title: "Semper Admin SharePoint - Important Links", publisher: "DC MRA", url: "<source page URL>" }`.
  - category, additionalCategories, audience (unset by default), access, needsAccessReview, requiresCac, provider, aliases, url.
  - `_importNotes` array listing any URL rewrite, dedupe action, or heuristic uncertainty.

## 8. Audience Default Guidance

Importer leaves `audience` unset by default. Stephen assigns during review. Suggested affinity defaults per category to speed the review:

- semper-admin - admin
- educational - marine
- reference - admin
- system - admin
- ai - leader
- teams-channels - admin
- sharepoints - admin
- more-great-links - mixed, leave unset

## 9. Page Surface Tasks (deferred until content lands)

The current `page.tsx` renders simple cards filtered by role. Once content is populated, upgrade to match the UUPM polish layer.

- Stat tile row: total links, count by access (Public, CAC, SharePoint, Teams, Unknown), last refreshed date. Use `StatTile`.
- `FilterBar`: search input plus 8 category pills plus 6 access pills plus 4 audience pills. Persist filter state in URL query.
- Section grouping in source order. Sticky h2 per category.
- Card refresh: title, summary, category Pill, access Pill, audience chip when set, `LastVerified` dot, external-link icon. Migrate from any Badge usage to Pill.
- Right `TableOfContents` listing the 8 category headings.
- `EmptyState` when filters yield zero.
- All tokens from `src/app/globals.css`. No hardcoded hex.

## 10. Build and Validation

1. `npm run content:sync` rebuilds `src/generated/links.json` after stubs move into `content/links/`.
2. `npm run lint` confirms zero new eslint issues.
3. `npm run build` confirms zod validation passes for every entry.
4. Static export deploys via the existing GitHub Pages pipeline.

## 11. Open Items After Stub Generation

- Stephen reviews each stub. Sets summary, fixes audience, resolves `needsAccessReview` flags, expands aliases where useful.
- Promote approved stubs from `_stubs/` into `content/links/`.
- Run sync, lint, build, ship.
