# Build health and deploy drift

Audit date: 2026-10-20 (local CDT, 2026-10-21 UTC for live and remote data).
Worktree: D:\Coding\SemperAdminPortal\.claude\worktrees\application-audit-0bb871
Branch: claude/application-audit-0bb871. HEAD and origin/main both at 1f8f8b7 (committed 2026-10-21 01:23:41 UTC).

## Summary table

| Check | Result | Detail |
|---|---|---|
| npm ci | Pass, exit 0 | 769 packages added in 9m 02s. 7 high advisories reported at install. 4 EBADENGINE warnings (local Node v22.17.0). |
| npm run lint | Pass, exit 0 | 0 errors, 5 warnings. Script ceiling is --max-warnings=10, so 5 headroom. All 5 are react-hooks/set-state-in-effect. Runtime 2m 02s. |
| npm test | Pass, exit 0 | Vitest: 2 files passed, 16 tests passed. |
| npm run type-check | Pass, exit 0 | 0 TypeScript errors. Runtime 1m 17s. |
| npm run build | Not run | Skipped. Install alone took 9m. Build, pagefind, and postbuild link checks were judged likely to push total time past the 15 minute threshold. Route count and link-check results not captured. |
| Content sync warnings | 2 warnings, 1 info | Citations coverage 86.1% (1088 of 7842 references unresolved). Thumbnails index missing. Videos catalog pulled 2026-10-16. No aged-out updates. No routeless content. No alias collision lines. |
| Live homepage | Reachable, 112,864 bytes | Footer reads "Build 2026-10-21 v1.2.0". Matches origin/main deploy. |
| Live sitemap | 1987 loc entries | Newest lastmod 2026-10-21T01:26:02Z, consistent with the 01:23:26Z main deploy. |
| Pages deploy (main) | Success | Run 39527029884, commit b9ffbed (PR #134 merge), 3m 39s. Latest on origin/main. |
| Mirror to GitLab | Failing | Last 8 of 8 runs since 2026-10-20 21:08Z failed, including the main push. Last success: 2026-10-20 13:58Z (schedule) and 01:07Z (push). |
| npm audit --omit=dev | 0 vulnerabilities | Production dependencies clean. |
| npm audit (all) | 7 high, 0 critical | All 7 are dev-only. Packages: @next/eslint-plugin-next, braces, eslint-config-next, fast-glob, micromatch, next-sitemap, vite. |
| npm outdated | Updates exist | next 16.3.8 to 16.4.2 (latest). react 19.3.0 to 19.3.1 (patch). typescript 5.9.3 to 7.0.2 (latest, major). tailwindcss at latest (4.3.3, not listed). |
| git status | 493 tracked files modified | 493 content/videos/*.mdx. Diff is line endings only (zero diff with --ignore-cr-at-eol). Caused by prelint generate-videos.js. Untracked: audit/2026-10-20/ (this report) and docs/superpowers/ (pre-existing). |

## Findings table

| ID | Sev | Area | Issue | Evidence |
|---|---|---|---|---|
| BD-01 | High | Deploy, GitLab mirror | Mirror to GitLab fails on every run since 2026-10-20 21:08Z. GitLab main is stale. The failure is server-side on the GitLab host, not an auth failure. | Run 39528215031 (head 6bab80f, 2026-10-21 01:35:34Z) and run 39527029919 (main, head b9ffbed, 01:23:26Z). Log: "error: remote unpack failed: unable to create temporary object directory" from web.git.mil. Push got past credentials and was rejected for main, dependabot/vite-8.3.4, and the feature branch. Last successful push 01:07Z (run 39351620320). Scheduled run succeeded 13:58Z (run 39435058007). |
| BD-02 | Medium | Content, citations | Citations coverage is 86.1%. 1088 of 7842 references do not resolve. | content-sync line: "WARN citations coverage 86.1%. 6754 of 7842 references resolved. 1088 unresolved." Run scripts/citations-audit.py for detail. |
| BD-03 | Medium | Repo hygiene | Every lint and type-check run rewrites 493 tracked video MDX files, dirtying the worktree. Only line endings change. | git status shows 493 M under content/videos. git diff --ignore-cr-at-eol returns zero changed files. Git warns LF will be replaced by CRLF on those files. prelint runs scripts/generate-videos.js. |
| BD-04 | Medium | Dependencies, dev | 7 high advisories in dev dependencies. Production is clean. npm's suggested fixes are semver-major downgrades, so do not apply them as written. | npm audit --json. next-sitemap (direct, fix suggested as 4.0.9, a downgrade). eslint-config-next (direct, fix suggested as 14.2.35, a downgrade). Transitive: braces, fast-glob, micromatch, @next/eslint-plugin-next. vite 8.3.0 to 8.3.2 (launch-editor advisories, fix available). Dependabot PR for vite 8.3.4 is open, CodeQL passed, but its Mirror run failed. |
| BD-05 | Low | Lint | 5 react-hooks/set-state-in-effect warnings. Lint passes only because the ceiling is 10. Five more warnings would break the gate. | inspector-guide.tsx:242, toc.tsx:54, tree-nav.tsx:130, theme-toggle.tsx:15, use-mounted.ts:10. |
| BD-06 | Low | Toolchain | Local Node v22.17.0 is below the engines of several installed packages. Tests passed anyway. CI Node version was not checked. | npm ci EBADENGINE: jsdom@30.1.1, @asamuzakjp/dom-selector@9.2.2, w3c-xmlserializer@6.0.0 need ^22.22.2 or later. undici@8.10.2 needs 22.19.0 or later. |
| BD-07 | Low | Thumbnails | Thumbnail index missing. Videos render without the generated thumbnail index. | content-sync: "WARN thumbnails: no index found. Run npm run sync:thumbnails." Source E:\Videos\Photos\Thumbnails was not checked. |
| BD-08 | Low | Video catalog | Video catalog is 5 days old. 8 recorded assets carry no MCeLE URL and are excluded. | content-sync: "videos: 493 of 493 published assets in the catalog, pulled 2026-10-16 (5 days ago)" and "8 recorded assets carry no MCeLE URL". |
| BD-09 | Low | Deploy, Pages config | Legacy pages-build-deployment workflow still runs. Its last run failed on 2026-07-03 (run 28643137401). Confirm the Pages source is GitHub Actions only. | gh workflow list shows pages-build-deployment active. gh run list shows the failure on 2026-07-03. |
| BD-10 | Info | Deploy drift | No drift for main. Live site matches origin/main. Two branch commits (e2d1bac, 6bab80f) sit ahead of main and are not live. This is expected because Pages deploys main only. | Homepage footer Build 2026-10-21 v1.2.0. Sitemap lastmod 2026-10-21T01:26:02Z. Deploy run 39527029884 success. git rev-list --count 1f8f8b7..6bab80f = 2. |
| BD-11 | Info | Deploy, footer | Footer build date is the UTC date. Local date is 2026-10-20. | Footer string "Build 2026-10-21". Deploy at 01:23Z. |
| BD-12 | Info | Build | Full build not run. Postbuild link checks (check-crossrole-links, check-internal-links --strict) and route count are unverified this run. | Command log, step 2. |
| BD-13 | Info | Dependencies | Outdated list for requested packages. next and react patches and minors are available. typescript 6 and 7 are major moves. | npm outdated output in command log. tailwindcss is current. |

## Command log

Trimmed outputs. Lines of npm and Git warnings are reduced.

1. npm ci. Exit 0. "added 769 packages, and audited 770 packages in 9m". "7 high severity vulnerabilities". 4 EBADENGINE blocks. One deprecation warning for eslint@9.39.5. Real time 9m 02s.

2. npm run lint. Exit 0. Prelint ran scripts/generate-videos.js (493 videos) and scripts/sync-content.mjs. Content sync printed counts (videos 505 entries, marines 223, leader 89, commander 49, admin 391, updates 34, citations 559 entries, 2404 aliases, reverse index 3484 links). Warnings printed: citations coverage 86.1%, thumbnails index missing. ExperimentalWarning for type stripping and MODULE_TYPELESS_PACKAGE_JSON for src/lib/marines-categories.ts. Result: "5 problems (0 errors, 5 warnings)". Warnings at inspector-guide.tsx:242, toc.tsx:54, tree-nav.tsx:130, theme-toggle.tsx:15, use-mounted.ts:10. Real time 2m 02s.

3. npm test. Exit 0. Test Files 2 passed (2). Tests 16 passed (16). Vite native config warning only.

4. npm run type-check. Exit 0. No "error TS" lines. Prelint ran video, content, and thumbnail sync. Real time 1m 17s.

5. curl https://semperadmin.github.io/SemperAdminPortal/. Exit 0. 112,864 bytes. Footer contains "Build 2026-10-21 v1.2.0".

6. curl sitemap-0.xml. Exit 0. 1987 occurrences of loc. lastmod values cluster at 2026-10-21T01:26:02Z.

7. git log -1 origin/main. "2026-10-21 01:23:41 +0000 1f8f8b7 chore: update code.json for code.gov sync".

8. gh run list --limit 30. 22 success, 8 failure. All 8 failures are Mirror to GitLab, run IDs 39528215031, 39527866947, 39527261205, 39527029919, 39526675175, 39526313099, 39525389363, 39497932526.

9. gh workflow list --all. Active: Sync code.json with code.gov, CodeQL, Dependency audit, Deploy to cloud.gov, Deploy to GitHub Pages, Mirror to GitLab, Dependabot Updates, Dependency Graph, pages-build-deployment.

10. Latest Mirror failure log, run 39528215031. Tail shows: "error: remote unpack failed: unable to create temporary object directory", then remote rejected for claude/message-value-analysis-tu7xdc, main, and dependabot/npm_and_yarn/vite-8.3.4 with unpacker error. Exit 1.

11. Pages workflow history. Deploy to GitHub Pages latest success 39527029884 (2026-10-21 01:23:26Z, 3m 39s). Prior successes 39351620246 (2026-10-20 01:07Z), 38951439944 (2026-10-16), 38943533744 (2026-10-16). Deploy to cloud.gov last success 38828678613 (2026-10-16, workflow_dispatch). Dependency audit last success 39245729023 (2026-10-19, schedule). Sync code.json last success 39527029881.

12. npm audit --omit=dev --json. Exit 0. Summary: info 0, low 0, moderate 0, high 0, critical 0, total 0.

13. npm audit --json (all). Summary: info 0, low 0, moderate 0, high 7, critical 0, total 7.

14. npm outdated next react tailwindcss typescript. Exit 1 (outdated present). next 16.3.8 wanted 16.3.8 latest 16.4.2. react 19.3.0 wanted 19.3.1 latest 19.3.1. typescript 5.9.3 wanted 6.0.3 latest 7.0.2 (rows for eslint-config-next and ts-api-utils list wanted 7.0.2). tailwindcss not listed. Installed tailwindcss 4.3.3.

15. git status --porcelain. 495 lines. 493 " M content/videos/*.mdx". "?? docs/superpowers/" (pre-existing). "?? audit/2026-10-20/" (this report). git diff --ignore-cr-at-eol --name-only -- content/videos returned 0 files.

16. git merge-base --is-ancestor 1f8f8b7 6bab80f. Ancestor confirmed. git rev-list --count 1f8f8b7..6bab80f = 2.

Commands that changed tracked files: npm run lint, npm test, npm run type-check (through prelint). All three ran generate-videos.js and rewrote the 493 video MDX files. No other tracked file changed. No commits or pushes were made.

## Out of scope

- Full npm run build, postbuild link checks, route count, pagefind index. Not run (step 2 threshold).
- Fixing the vulnerability set. npm audit fix --force would downgrade next-sitemap and eslint-config-next. Not recommended.
- Verifying the GitLab host configuration or its unpacker and temp directory. The failure is on the remote side. Owner of web.git.mil must check disk or tmp space and the receive pack limits.
- Verifying the E:\Videos thumbnail source.
- Verifying CI Node version against the engines list.
- Content accuracy of the 1088 unresolved citations. Covered by citations-audit.
