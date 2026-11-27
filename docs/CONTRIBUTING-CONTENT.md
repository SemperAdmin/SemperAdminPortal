# Site sections and source layout

Companion to [CONTRIBUTING.md](../CONTRIBUTING.md), which covers the content workflow, frontmatter, the video pipeline and code style. This page lists what is in the site and where it lives in the source.

## Site sections

Top-level routes under `src/app/`:

| Route | Content |
|---|---|
| `/` | Home |
| `/admin`, `/leader`, `/commander` | Role sections |
| `/marines` | Marine-focused topics |
| `/inspections` | Inspection material |
| `/reports` | Reports |
| `/citations` | Source citations |
| `/links` | Library of links |
| `/videos` | Video index, with a detail page per video |
| `/tools` | Browser-based tools, including PDF and DOCX builders |
| `/search` | Search, run in the browser against bundled content |
| `/updates` | Updates |
| `/recent` | Recently viewed pages |
| `/legal` | Disclaimer, terms, privacy policy, cookies and browser storage |
| `/about` | About |
| `/styleguide` | Design system reference |

Content for these routes comes from the MDX collections in `content/`. The routes are exported with a trailing slash. On GitHub Pages every route is served under `/SemperAdminPortal`; on cloud.gov they are at the root.

## Source layout

```
content/                  MDX collections (admin, citations, commander, external-tools,
                          inspections, leader, legal, links, marines, reports, updates, videos)
data/                     Committed build inputs, such as the video catalog
deploy/                   cloud.gov bundle inputs: Staticfile, nginx include,
                          legacy-redirects.json
scripts/                  Build and maintenance scripts (content sync, cloud.gov build,
                          link checks, citation tooling)
public/                   Static assets
src/
  app/                    App Router routes
  components/             domain, security, shell, theme and ui components
  hooks/
  lib/                    Content loader, navigation, search, role store, helpers
  types/
next.config.mjs           Static export; base path switches on DEPLOY_TARGET
manifest.yml              cloud.gov application manifest
.github/workflows/        GitHub Pages deploy, cloud.gov deploy, CodeQL, dependency audit
```

`src/generated/` holds catalogs produced by `npm run content:sync` and is not committed; the dev and build scripts regenerate it.
