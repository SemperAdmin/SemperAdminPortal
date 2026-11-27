# Semper Admin Portal

A sourced, role-tagged reference for Marine Corps administration, with policy summaries, situation guides, checklists and small tools, for Marines, leaders, commanders and admin specialists.

**Live:** https://semper-admin-portal.app.cloud.gov
**Also on GitHub Pages:** https://semperadmin.github.io/SemperAdminPortal/

## What it does

- Organizes content by role (Marine, leader, commander, admin) and shows the pages for the role you pick first.
- Summarizes policy (MCOs, MARADMINs and related orders) with citations to the source, and marks pages that are aging or stale by their last-verified date.
- Provides situation guides, quick references, checklists, inspection material and a library of links.
- Lists video pages with chapters. The video files are hosted by the Marine Corps eLearning platform (see Privacy and security).
- Includes browser-based tools, including PDF and Word (DOCX) document builders.
- Searches all content in the browser, and offers a command palette (Ctrl+K or Cmd+K) and a dark theme.

## Using it

Open the live site in a current browser and choose a role. No account is needed. Content is a reference prepared by individual subject-matter experts and is not authoritative: verify against the cited order before relying on it for a pay, records, leave, separation or other administrative decision.

## Privacy and security

- **Data flow:** nothing you enter is sent to a server. Search runs in your browser against content bundled with the site, and the site makes no `fetch` or other background requests of its own. Three things reach other hosts only because of what you open or click. Video pages point the video player at the Marine Corps eLearning portal (a .mil host that needs a .mil network), so opening one makes your browser contact that host. Links to other sites, such as the other Semper Admin apps, the TemplateToolBox and the Feedback form, send nothing until you follow them. The contact link on the MCAAT page opens your own mail program.
- The browser stores your selected role, a list of up to 12 recently viewed pages, your acceptance of the terms, inspector-guide checklist progress, and a per-tab session log of role changes and exports that never leaves the browser. There are no accounts, analytics or cookies. The in-site [Cookies and Browser Storage](https://semper-admin-portal.app.cloud.gov/legal/cookies-and-storage/) page lists every key.
- The hosting platforms (cloud.gov and GitHub Pages) keep standard web server access logs, such as IP address, time, requested page and browser type, for operations and security. Semper Admin does not add tracking of its own.

See the in-site [Privacy Policy](https://semper-admin-portal.app.cloud.gov/legal/privacy-policy/) and [Security](SECURITY.md).

## Development

Requires a current LTS Node (CI uses Node 22) and npm. The site is Next.js 16 with TypeScript, exported as static files.

```bash
npm ci
npm run dev          # http://localhost:3000/SemperAdminPortal/
npm test             # vitest
npm run type-check
npm run lint
npm run build        # static export to out/, sitemap, search index and link checks
```

`npm run build:cloudgov` builds for the cloud.gov route root and stages the bundle in `out/` for `cf push`: the site under `out/public`, the nginx configuration, and a generated set of permanent redirects for pages that have moved (from `deploy/legacy-redirects.json`). GitHub Pages builds do not get those redirects. Contributing content and the project layout are described in [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/CONTRIBUTING-CONTENT.md](docs/CONTRIBUTING-CONTENT.md).

## Deployment

| Environment | URL | How |
|---|---|---|
| cloud.gov | https://semper-admin-portal.app.cloud.gov | `manifest.yml` (staticfile buildpack); manual **Deploy to cloud.gov** workflow (`.github/workflows/deploy-cloudgov.yml`); sandbox managed by the private cloudgov-redeploy repository |
| GitHub Pages | https://semperadmin.github.io/SemperAdminPortal/ | `.github/workflows/deploy.yml` on push to `main`, served under `/SemperAdminPortal` |

## Documentation

- [CONTRIBUTING.md](CONTRIBUTING.md): content workflow, frontmatter, video pipeline and code style.
- [docs/CONTRIBUTING-CONTENT.md](docs/CONTRIBUTING-CONTENT.md): site sections and source layout.

## Feedback and support

[Open an issue](https://github.com/SemperAdmin/SemperAdminPortal/issues), or use **Feedback** in the site menu (the form needs a .mil network). Report security problems as described in [SECURITY.md](SECURITY.md).

## License and disclaimer

MIT (see [LICENSE](LICENSE)).

> This is an independent tool built to help Marines with administrative
> work. It is not an official Department of the Navy or U.S. Marine Corps
> system and is not endorsed by, affiliated with, or approved by either.
> Always confirm requirements against the current governing orders.

## Part of Semper Admin

One of the tools in the Semper Admin suite. Start at the
[Semper Admin Portal](https://semper-admin-portal.app.cloud.gov) for the
full set.
