# Semper Admin Portal

> **Status: Proof of Concept.** This repository is a personal subject-matter-expert project, not an official Marine Corps product. The content is not authoritative for pay, records, leave, separation, or any other administrative decision. Every claim is sourced from public MCO and MARADMIN material via citation chips, and contributors are individual SMEs acting in their personal capacity, not as government employees in official capacity. Verify against the underlying source before relying on anything here.

Sourced, role-tagged USMC administrative reference and tools for Marines, leaders, commanders, and admin specialists.

Live URL: https://semperadmin.github.io/SemperAdminPortal/

## Stack

- Next.js 15 App Router, TypeScript strict, static export targeting GitHub Pages.
- Tailwind CSS 4 with shadcn-style component layer, Radix primitives, lucide-react.
- Zustand store with persist middleware for the role state.
- Custom MDX content loader using gray-matter and zod schemas, plus a build-time JSON sync script for client components.
- Pagefind for build-time full-text search, indexed against the static `out/` directory.
- @react-pdf/renderer for PDF generation, docx and file-saver for DOCX exports. Both lazy-loaded.
- next-themes for dark mode, cmdk for the Cmd+K and Ctrl+K command palette.
- next-sitemap for sitemap.xml and robots.txt.

## Local development

Prereqs: Node 22, npm 10 or newer.

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000/SemperAdminPortal/`

## Build and preview

- Type check: `npm run type-check`
- Lint: `npm run lint`
- Format: `npm run format`
- Production build (with content sync, sitemap, Pagefind index): `npm run build`

The build emits to `out/` with the Pagefind index at `out/pagefind/`.

## Deploy

Push to `main`. GitHub Actions runs `npm ci`, `npm run build`, then publishes via `actions/deploy-pages`.

Repo settings:

1. Settings, Pages, Source = GitHub Actions.
2. Settings, Actions, General, Workflow permissions = Read and write.

## Routes

- `/` Home with role-aware hero and surface cards.
- `/knowledge` Three-bullet snippets grouped by topic.
- `/policy` Policy index plus dynamic `/policy/[slug]` detail pages.
- `/situations` Situation index plus dynamic `/situations/[slug]` detail pages.
- `/videos` Video index plus dynamic `/videos/[slug]` detail with chapters and transcript.
- `/references` Forms, calculators, and checklists.
- `/tools` Tools index plus first four tools at `/tools/eas-countdown`, `/tools/pft-score`, `/tools/pdf-letter-builder`, `/tools/docx-counseling`, `/tools/separation-checklist`.
- `/search` Pagefind UI bound to the static index.
- `/about` Mission, sources, update cadence.
- `/styleguide` Design system reference.

## Content authoring

See CONTRIBUTING.md for the full role-tagged content workflow, frontmatter schema, and verification policy.

## Project layout

```
.
├── content/                  MDX content collections, six folders
├── next.config.mjs           Static export, basePath, assetPrefix
├── next-sitemap.config.cjs   Sitemap and robots
├── postcss.config.mjs        Tailwind 4 PostCSS plugin
├── scripts/sync-content.mjs  Regenerates src/generated/*.json catalogs
├── public/                   Static assets, logo
├── src/
│   ├── app/                  App Router routes
│   ├── components/
│   │   ├── domain/           Domain components (RoleChip, PolicyBadge, etc.)
│   │   ├── shell/            App shell, top nav, side nav, palette
│   │   ├── theme/            Theme provider and toggle
│   │   └── ui/               shadcn-style primitives
│   ├── generated/            Built JSON catalogs (gitignored)
│   ├── hooks/                use-mounted, future hooks
│   ├── lib/                  utils, navigation, content loader, role store
│   └── styles/               (tokens live in src/app/globals.css)
└── .github/workflows/        Pages deploy pipeline
```

## Reference folder

`D:\Coding\SemperAdminPortal-OldReference` was specified for content mining. Not yet mounted in this build session, mount it to extend content collections.
