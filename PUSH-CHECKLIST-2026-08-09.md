# Push to GitHub and Cloud.gov

Run every command from `D:\Coding\SemperAdminPortal` in PowerShell. Git writes
have to run on the Windows side. The Cowork bridge cannot unlink files, so any
git operation that replaces a tracked file fails from my end.

Branch is `main`. Last commit is `bd12267`. Remote is
`https://github.com/SemperAdmin/SemperAdminPortal.git`.

---

## 1. Gate. Do not skip, none of these has passed since the changes landed

```powershell
npm run type-check
npm run lint
npm run build
```

`type-check` failed earlier on the corrupt Turbopack artifacts and `build` failed
on the same files. Both causes are fixed, neither has been re-run green. The
build is also where the `TreeBranch` type widening gets verified for the first
time, since `tsc` never finished through the bridge.

If `build` succeeds, open the local preview and check three things:

- `/videos` renders 375 cards, the series and sort dropdowns work, the freshness chips read Fresh 174 and Aging 201
- `/admin`, expand a unit type, then a topic, and confirm pages appear at the third level
- `/videos` shows a thumbnail on `Advance Pay Incident to a PCS`

---

## 2. Do NOT stage everything

`git add -A` would sweep in work that is not part of this effort.

Leave these alone. They are yours, from 2026-08-07, and unrelated:

| Path | What it is |
| --- | --- |
| `package-lock.json` | 91 real changed lines from your dependency work |
| `code.json` | whole-file diff, CRLF in the working tree against LF in HEAD |
| `.github/workflows/mirror-to-gitlab.yml` | same, pure line-ending churn, 166 lines |
| `content/citations/_stubs/*.mdx` | ~160 untracked citation stubs |
| `CITATIONS-NEEDS-INPUT-2026-06-12.md`, `citations-*.py`, `citations-url-*`, `split-compound-refs.py`, `audit-and-backfill-urls.py`, `docs/citations-revision-wildcard-PATCH.md`, `MARADMIN-325-26-ANALYSIS.md` | citation work in flight |
| `._crlf.mjs`, `._iso.mjs`, `._mdxcheck.mjs`, `._mdxpos.mjs`, `._show.mjs`, `._verify.mjs`, `.__unlink_probe_5` | scratch files, safe to delete |
| `data/videos-marinenet.backup-2026-08-08.json` | one-time backup, delete it once the deploy is verified |

`code.json` and `mirror-to-gitlab.yml` carry no content change at all. There is no
`.gitattributes` in the repo, so line endings drift per tool. Adding
`* text=auto eol=lf` fixes it permanently, but it renormalizes every file, so do
that on its own branch, never bundled with this.

---

## 3. Five commits

### 3.1 Catalog reconciliation

```powershell
git add data/videos-marinenet.json data/videos-catalog-status.json
git add content/videos
git add content/updates/manpower-readiness-video-cluster-added.mdx
git add content/updates/video-links-repointed-to-mcele-portal.mdx
git commit -m "fix(videos): reconcile the catalog against the Vanguard database

Adds 28 recorded videos that were published to MCeLE with no portal page,
including the 23-video Manpower T/O and readiness cluster, the Promotions
Page 11 trio, and two Meeting of the Minds sessions.

Repoints every video URL at one canonical host,
portal.mcele.usmc.mil/content/mcele-portal/en/media/detail.html?Id=. That
replaces 277 legacy www.mcele.usmc.mil/mvs links and repairs 58 invented
marinenet.marines.mil addresses built from the page slug rather than a
media id, none of which resolved.

Removes 9 duplicate pages rendering the same video under two slugs, and
corrects a mistyped media id on index-function."
```

### 3.2 The pipeline and its guardrails

```powershell
git add scripts/sync-videos.py scripts/generate-videos.js scripts/sync-content.mjs
git add src/lib/content/schemas.ts src/lib/content/__tests__
git add package.json CLAUDE.md CONTRIBUTING.md scripts/THUMBNAIL_MAPPING.md
git rm --cached scripts/series-folder-mapping.json
git commit -m "refactor(videos): single writer from the database to the catalog

content/videos MDX had two writers with two slug rules. generate-videos.js
read the JSON catalog and ran on every sync. sync-videos.py read the
database, ran manually, and never touched the JSON, so its output was
reverted by the next sync. Its slug rule stripped punctuation instead of
replacing it, turning T/O Validation into to-validation and FDP&E into
fdpe, which produced every one of the 9 duplicate pairs.

sync-videos.py now emits data/videos-marinenet.json and writes no MDX.
Human-owned fields, roles, summary, durationSeconds, and lastVerified,
merge forward by slug so editorial work survives a pull. generate-videos.js
prunes pages whose slug left the catalog, scoped to a manifest so it never
removes a page it did not create.

Adds npm run videos:audit, which fails when a published video has no
catalog entry or a URL disagrees with the database. It lives inside the
same script on purpose, since a separate auditor with its own slug rule
would rebuild the bug it exists to catch.

content:sync now prints video and thumbnail coverage and warns when the
catalog was last pulled over 30 days ago.

videoSchema rejects URLs that are not on an MCeLE host. Twelve legacy
pages sit in a quarantine list that only shrinks.

Retires scripts/series-folder-mapping.json, 45 entries no code read, and
rewrites THUMBNAIL_MAPPING.md, which documented that dead mapping."
```

### 3.3 Thumbnails

```powershell
git add scripts/sync-thumbnails.mjs public/thumbnails
git commit -m "fix(thumbnails): sync from source and drop the duplicate tree

sync-thumbnails.mjs falls back to rebuilding its index from whatever
already sits in public/thumbnails when the source is unreachable, prints
one line, and exits 0. A stale index looked like a clean run, which is how
30 pages lost their thumbnails. It now defaults THUMBNAILS_SRC to the
known drive, joins the prebuild and predev hooks, and reports coverage.

Zero-byte source images are skipped and named rather than mapped, since a
mapping to an empty file renders a broken-image icon while an absent
mapping renders the intended placeholder. COPYFILE_EXCL also refused to
replace a zero-byte destination, which permanently pinned a bad copy.

Removes 21 folders holding 174 files and 24.9 MB. Every series folder
existed twice, once with spaces and once with underscores, and the index
only ever pointed at the space form. Coverage held at 368 through the
removal.

Wiring sync-thumbnails into prebuild also closes the clean-tree
build:cloudgov failure, since src/generated/thumbnails.json is gitignored
and page-client.tsx requires it."
```

### 3.4 Navigation and the videos page

```powershell
git add scripts/generate-role-nav.mjs src/lib/role-trees.ts src/components/shell/tree-nav.tsx
git add src/app/videos/page-client.tsx
git commit -m "feat(nav): three-level admin sidebar, filters on the videos index

TreeNav rendered every branch child as a leaf with no recursion, so the
sidebar was capped at two levels regardless of the data. Admin routes as
/admin/unitType/topic/slug, which left all 387 pages reachable only from a
topic index. BranchNode now recurses and subtreeActive walks nested
branches, so a page three levels down opens both ancestors on load.

Admin nav grows from 64 nodes to 452. Labels drop the boilerplate
Procedural Page suffix on 204 entries and render a topic overview as
Overview, cutting median label length from 49 to 33 against a 268px rail.

Adds the missing commander page aviation/flight-performance-boards, which
brings that hand-maintained tree to 47 of 47.

The videos index gains a series dropdown with live counts, freshness chips
sharing classifyFreshness with the card badges, and four sort options
defaulting to series then title. Search now covers the summary. The
duration badge hides when the catalog has no runtime, which is 370 of 375
videos, since a grid of --:-- reads as broken rather than absent."
```

### 3.5 Build config and the cloud.gov path fix

```powershell
git add tsconfig.json eslint.config.mjs .prettierignore .gitignore next.config.mjs
git add src/app/layout.tsx
git add VIDEO-GAP-2026-08-08.md VIDEO-REMEDIATION-PLAN-2026-08-08.md
git commit -m "chore: quarantine excludes, cloud.gov frame-buster path

layout.tsx hardcoded /SemperAdminPortal/security/frame-buster.js. On
cloud.gov the file serves from the root, so the script 404ed and
clickjacking protection was silently absent there. It now reads
NEXT_PUBLIC_BASE_PATH, which next.config.mjs already sets per target.

Excludes _to_delete from tsc, eslint, prettier, and git. Files moved there
pending deletion were still being compiled, and two corrupt Turbopack
artifacts failed type-check from their new home. Also ignores __pycache__.

next.config.mjs marks gray-matter external so Turbopack stops tracing into
coffee-script, whose bin does a computed require it refuses. Remove that
line once gray-matter moves to 4.x."
```

---

## 4. Verify, then push

```powershell
git status --short
git log --oneline -6
git push origin main
```

`git status --short` should now show only the untracked work listed in section 2.
If it shows anything from `content/videos`, `public/thumbnails`, `data/`, or
`src/`, a commit missed a file.

Watch the Actions run. CI does `type-check`, then `lint`, then `build`, then
Pagefind. It has no `THUMBNAILS_SRC`, so `sync-thumbnails` falls back and rebuilds
an identical index from the 500 committed images. It has no `VANGUARD_DB` either,
and nothing in the build lifecycle needs one.

---

## 5. Cloud.gov

```powershell
npm run build:cloudgov
cf target -o sandbox-usmc -s stephen.shorter
cf push
```

Never set `DEPLOY_TARGET` by hand. The 2026-07-07 deploy shipped with every asset
pointing at `/SemperAdminPortal/` because `set` syntax ran in PowerShell and the
variable never reached Node.

Confirm before you push:

```powershell
Select-String -Path out\index.html -Pattern "/SemperAdminPortal/" | Select-Object -First 5
```

No matches is correct for cloud.gov. Any match means the base path did not clear
and the deploy will 404 its own assets.

After `cf push`, load the site and confirm the browser console shows no 404 for
`/security/frame-buster.js`. That is the fix from commit 3.5, and cloud.gov is the
only place it was broken.

Remember the sandbox space wipes every 90 days with a 5-day email warning.

---

## 6. Known and deliberately not fixed

- `src/app/not-found.tsx` still hardcodes `PORTAL_ROOT = "/SemperAdminPortal/"`. Low cloud.gov impact, since the bare-root branch rarely fires where the root serves index.html directly. Making it base-path aware turns it into `"/"` on cloud.gov, which risks a redirect loop. It needs its own look.
- `next-sitemap.config.js` hardwires the Pages domain, so the cloud.gov sitemap carries Pages URLs.
- Seven video pages have no working link and no thumbnail. They are quarantined in the schema, they build, and they need your retire-or-record decision.
- `gray-matter` is still at 2.x. `npm i gray-matter@^4.0.3` drops coffee-script and lets you delete the `serverExternalPackages` line.
