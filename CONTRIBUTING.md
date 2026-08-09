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

## Video pipeline

Video pages are generated. Do not hand-edit `content/videos/*.mdx`, the next
`npm run content:sync` overwrites them.

```
vanguard.db  ->  data/videos-marinenet.json  ->  content/videos/*.mdx
(source facts)   (committed build input)        (generated, disposable)
```

Two environment variables drive it. Set both once in your shell profile.

| Variable | Points at | Used by |
| --- | --- | --- |
| `VANGUARD_DB` | `vanguard.db` in the Vanguard video database folder | `videos:pull`, `videos:audit` |
| `THUMBNAILS_SRC` | the thumbnail image root, `E:\Videos\Photos\Thumbnails` | `sync:thumbnails` |

PowerShell, persisted for your user:

```powershell
[Environment]::SetEnvironmentVariable("VANGUARD_DB", "E:\Videos\Video Database\Video Database\data\vanguard.db", "User")
[Environment]::SetEnvironmentVariable("THUMBNAILS_SRC", "E:\Videos\Photos\Thumbnails", "User")
```

Commands.

- `npm run videos:pull` rewrites the catalog from the database. Add `--dry-run`
  to preview, `--prune` to drop entries with no database row.
- `npm run videos:audit` compares the committed catalog against the database
  and exits non-zero when a published video has no entry or a URL disagrees.
  Run it before opening a PR that touches video content.
- `npm run content:sync` regenerates the pages and prints video and thumbnail
  coverage lines.
- `npm run sync:thumbnails` copies images from `THUMBNAILS_SRC` and rewrites
  `src/generated/thumbnails.json`.

Field ownership. The database owns `title`, `videoUrl`, `mceleUrl`, and
`source.title`. Humans own `roles`, `summary`, `durationSeconds`, and
`lastVerified`. The pull merges the human-owned fields forward by slug, so
editorial work survives. Make those edits in `data/videos-marinenet.json`.

Two silent-failure traps to know about.

- `sync:thumbnails` with no reachable source rebuilds the index from whatever
  already sits in `public/thumbnails` and exits 0. It prints one line saying so.
  A stale index looks like a successful run. This is how 30 pages lost their
  thumbnails in August 2026.
- The catalog goes stale on its own. New MCeLE uploads stay invisible until
  someone runs the pull. `content:sync` warns once the last pull passes 30 days.

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

## Refreshing the lockfile on Windows (WSL trick)

`npm install` on Windows hits npm CLI issue 4828: the resulting `package-lock.json` omits Linux-only platform-specific optional binaries (lightningcss, sharp, @tailwindcss/oxide, @next/swc). CI on `ubuntu-latest` then cannot install them, and the build fails on a `Cannot find native binding` error.

Two options, ranked by preference.

Option A. Regenerate inside WSL's native filesystem, then copy the artifact back.

```bash
# Inside a WSL Ubuntu prompt
mkdir -p ~/sap-lockfile-regen
cd ~/sap-lockfile-regen
cp /mnt/d/Coding/SemperAdminPortal/package.json .
rm -rf node_modules package-lock.json
npm install --include=optional --no-audit --no-fund
cp package-lock.json /mnt/d/Coding/SemperAdminPortal/package-lock.json
```

Why home directory and not `/mnt/d` directly: WSL on `/mnt/*` cannot `chmod` on NTFS files, and `npm install` aborts mid-extract with EPERM. Running the install on ext4 inside `~` sidesteps that.

After copying back, return to PowerShell, delete Windows-side `node_modules`, and reinstall so Windows sees fresh state:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

Then commit just `package-lock.json`. Do not commit anything from `~/sap-lockfile-regen`.

Option B. If you do not have WSL, run the same flow inside Docker:

```powershell
docker run --rm -v "${PWD}:/app" -w /app node:22 sh -c "rm -rf node_modules package-lock.json && npm install --include=optional"
```

This produces a Linux-aware lockfile in place. Slower than Option A by 30-60 seconds for the container pull.

When to regenerate. Whenever a major dep bump introduces new platform-specific optional packages (e.g. a Next.js major upgrade, a Tailwind major upgrade, a new image processor). The CI workaround in `.github/workflows/deploy.yml` (the `npm install --no-save --include=optional --force ...` line) papers over the gap, but the durable fix is a proper Linux-generated lockfile.

If CI starts failing on `Cannot find module ../<package>.linux-x64-gnu.node` for a new family, either add that family to the CI force-install list or regenerate the lockfile via the steps above.
