# Contributing to Semper Admin Portal

Thanks for helping. The portal lives or dies on accurate, sourced, role-tagged content.

## Stack quick map

- Next.js 15 App Router with TypeScript strict
- Tailwind CSS 4 with shadcn-style component layer
- Zustand for the role store, persisted to localStorage
- contentlayer-style MDX collections via a custom loader at `src/lib/content/`
- Pagefind for build-time search
- @react-pdf/renderer for PDF, docx for Word output

## Authoring content

Every entry sits in `content/<collection>/<slug>.mdx` with frontmatter:

- `policies/` MARADMIN, MCO, ALMAR, NAVMC, DODI breakdowns
- `situations/` Scenario walkthroughs
- `snippets/` Three-bullet quick references
- `videos/` Video metadata and chapters
- `references/` Forms, calculators, checklists
- `tools/` Interactive tool registry

Required frontmatter on every entry:

- `title` Short, plain-language headline.
- `slug` URL-safe identifier, must match the filename.
- `summary` One or two sentences, under 160 chars.
- `roles` Array from `marine`, `leader`, `commander`, `admin`. At least one.
- `lastVerified` ISO date. Drives the staleness banner.
- `source` Object with `title`, optional `publisher`, optional `url`.

Collection-specific fields documented in `src/lib/content/schemas.ts`. Frontmatter is validated by zod at build time. Bad frontmatter fails the build.

## Workflow

1. Branch from `main`.
2. Add or edit MDX in `content/`.
3. Run `npm run content:sync` to regenerate the JSON catalog used by client components.
4. Run `npm run lint` and `npm run build` locally.
5. Open a PR. CI builds and Pagefind reindexes on merge.

## Adding shadcn components

`components.json` is set up for the New York style. Run:

- `npx shadcn@latest add <component>` to install a new primitive.

Components land under `src/components/ui/` and wire through the cn helper at `src/lib/utils.ts`.

## Code style

- TypeScript strict. No `any`.
- No `// eslint-disable` without a reason in the PR description.
- Component file names lowercase with hyphens.
- Tokens live in `src/app/globals.css`. Avoid hardcoded hex except in tests.
- Active voice in user-facing strings. Short sentences. No filler.

## Verification policy

A page flips to `aging` after 12 months past `lastVerified` and `stale` after 24 months. Refresh `lastVerified` only after a real source check. The `LastVerified` component renders the badge on every entry.
