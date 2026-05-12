# Centralized Citations Repository - Implementation Prompt

Use this prompt to drive the build of a portal-wide citations registry. The Citations page becomes the canonical home for every parent policy and authority URL. Every other surface that cites a policy resolves through that registry instead of carrying its own URL.

---

## Mission

Promote `/citations` from an aggregation view to the canonical repository of parent policies and authority URLs. Make every other page that cites a policy look up into the registry. A URL fix in one record propagates to every page that references it.

## Why the inversion matters

The portal currently stores reference URLs in three places that do not share code.

1. Inspections detail pages resolve references through a 68,629-alias manifest at `content/inspections/_reference-links.json`, built by `scripts/build-ref-links.py` from 10 policy indexes under `content/inspections/_policy-indexes/` and patched by `content/inspections/_reference-link-overrides.json`.
2. Role MDX content under `content/admin/`, `content/marines/`, `content/leader/`, `content/commander/` carries `references[]` arrays of free-text citation strings with no URL data.
3. `/citations` walks role MDX, builds a policy-to-pages map, and renders an index without links.

Failure modes that flow from this.
- A URL fix in the inspections manifest does not reach role-content pages.
- A role page citing MCO 5210.11F shows plain text. The inspection page citing the same MCO shows a link to the PDF.
- The citations index page has no clickable destinations.
- Adding a new authority document means updating multiple files in multiple shapes.

## Target architecture

One authored registry. One resolver. Three component layers. Every URL lives in exactly one place.

### Registry as canonical data

Create `content/citations/<doc-slug>.mdx` as the new collection. Each MDX file is one parent policy. The frontmatter carries every fact about the policy. The body carries optional summary, scope, and key-clause prose.

Required frontmatter fields, validated by a new `citationSchema` in `src/lib/content/schemas.ts`.

- `id` - canonical document identifier. URL-safe slug. Example: `mco-5210-11f`, `maradmin-022-25`, `dodfmr-vol-7a-ch-26`.
- `aliases` - array of strings that route to this citation. Example: `["MCO 5210.11F", "MCO 5210.11", "MCO 5210.11 F"]`. The resolver matches against this list. Every form an author might write goes here.
- `title` - human title.
- `type` - enum: `MCO`, `MARADMIN`, `ALMAR`, `ALNAV`, `NAVMC`, `DODFMR`, `DODI`, `DODD`, `DODM`, `SECNAV`, `SECNAVINST`, `JAGINST`, `FPM`, `MCTFSPRIUM`, `DD-FORM`, `NAVMC-FORM`, `FAC`, `OTHER`.
- `number` - the document number, free-form. Example: `5210.11F`, `022/25`, `Vol 7A Ch 26`.
- `publisher` - originating staff agency.
- `effectiveDate` - ISO date when applicable.
- `lastVerified` - ISO date for staleness tracking.
- `externalUrl` - the authority URL. Optional. When absent, the citation entry exists for reference but renders without a link.
- `supersedes` - array of citation ids that this entry supersedes. Optional.
- `roles` - array from `marine`, `leader`, `commander`, `admin`. Drives role-tree exposure.

Body content is optional prose. When present, the `/citations/<id>` detail route renders it.

### Resolver and lookup index

Generate `src/generated/citations.json` from the MDX collection at content sync time. Shape:

```ts
type CitationIndex = {
  byId: Record<string, CitationEntry>;
  byAlias: Record<string, string>;
};
```

Add `src/lib/references/resolve.ts` exposing one function `resolveReference(input: string): CitationEntry | null`. The function normalizes input (uppercase, single space, strip section suffix), looks up `byAlias`, returns the matching `CitationEntry` or null.

The existing `_reference-links.json` manifest demotes to an **enrichment source** consumed only during a one-time import. The `npm run citations:import` script reads the policy indexes and overrides, scaffolds stub citation MDX files for documents that do not yet have an authored entry, and pre-fills the `externalUrl` field. You review and merge the stubs. The 68k auto-imported aliases stop shipping as the runtime source.

### Citations page surfaces

`/citations` becomes the entry point.

- Top: stat tiles for total citations, total cited documents with no URL yet, total citations referenced by at least one in-portal page.
- Filter bar: chips for type, role, has-URL.
- Search input: matches against title, number, aliases.
- Result list: one row per citation. Number, title, type, publisher, external link, count of pages citing it, last verified status.

`/citations/<id>` is the detail route. Renders the body MDX plus a back-link list of every page that references this citation, grouped by content collection.

### Component refactor

Three citation components, one resolver.

- `Citation` inline superscript chip. Takes `source: string`. Calls `resolveReference(source)`. When matched, wraps the chip in an anchor to `/citations/<id>`. The citation detail page exposes the external authority URL. Add an optional `externalDirect` boolean for the rare case where the inline chip should link directly to the PDF.
- `ReferencePill` becomes a thin wrapper around `Citation` styled for the inspection list surface. Same resolver. Same routing behavior.
- `SourceCitation` continues to render the page footer chip with title, publisher, publisherUrl. Updated to optionally accept a citation `id`, in which case it pulls publisher and publisherUrl from the registry. Inline props remain valid for non-registry surfaces.

Every detail page that currently passes raw reference strings to these components keeps doing so. The resolver layer absorbs the lookup. No author changes required for already-shipped pages.

### Authoring affordance

`npm run citations:audit` scans every catalog for cited documents that the registry cannot resolve. Output groups by citation string, lists the first three citing pages per miss. Use it to drive new citation MDX authoring.

`npm run content:sync` emits a warning when MDX `references[]` arrays contain entries that the registry does not resolve. Build does not fail.

## Constraints

Follow `D:\Coding\SemperAdminPortal\CLAUDE.md` strictly.

- TypeScript strict. No `any`. No eslint-disable without a PR reason.
- Tokens from `src/app/globals.css`. No hardcoded hex outside test files.
- Component file names lowercase with hyphens.
- Pill, not Badge. PageHeader, not custom header. Callout for asides.
- Active voice, periods, commas, hyphens only. No em-dashes, no semicolons, no asterisks. No banned words from CLAUDE.md section 6.2.
- Role separation rule still applies. `/citations` stays a reference surface outside the four role roots.

Schema rules. The new `citationSchema` lives alongside `policySchema` and `inspectionSchema` in `src/lib/content/schemas.ts`. The new collection takes its place in the collections list in CLAUDE.md section 4.2.

## Phased plan

Phase 1. Schema and collection. Land `citationSchema`. Create `content/citations/` directory. Seed five citation MDX files manually for the top-five most-cited documents to prove the shape (MCO 5210.11F, MCO 1900.16, DODFMR Vol 7A Ch 26, MARADMIN 015/20, NAVMC 10922). Land `src/generated/citations.json` via content sync.

Phase 2. Resolver. Add `src/lib/references/resolve.ts`. Wire `Citation`, `ReferencePill`, and `SourceCitation` to it. Verify visual parity on the styleguide page.

Phase 3. Citations page rebuild. New layout, filter chips, search, detail route at `/citations/<id>`. Reverse-index of citing pages computed at build time.

Phase 4. Bulk import. Build `scripts/citations-import.py` that reads the existing policy indexes and override files, scaffolds stub MDX files for documents that lack an authored entry. Review the stubs. Merge in batches.

Phase 5. Authoring discipline. Land the `citations:audit` script. Land the content-sync warning. Update CLAUDE.md section 4.2 to document the new collection. Deprecate the old inspection-only manifest. Land migration notes.

## Verification criteria

- `npm run lint` clean.
- `npx tsc --noEmit` clean.
- `npm run content:sync` flows policies, citations, and inspections.
- `npm run build` exports the static site.
- The same MCO reference rendered in an inspection page, a role page body, and the citations index resolves to the same citation detail route.
- `npm run citations:audit` reports a coverage rate. The rate climbs as authored citation entries land.

## What not to do

- Do not propose a database, CMS, or server.
- Do not move the policy indexes off the local filesystem.
- Do not change the route surface under `/marines`, `/leader`, `/commander`, `/admin` beyond what the citations consolidation strictly requires.
- Do not invent reference URLs. Authoring lands them or imports source them.
- Do not break the inspection routes. They are the highest-traffic surface today.

## Hand-off

Before writing code in any phase, restate the phase deliverable and confirm understanding of the constraints. After each phase, report lint output, tsc output, content-sync output, and a screenshot or page diff. Pause for sign-off between phases.
