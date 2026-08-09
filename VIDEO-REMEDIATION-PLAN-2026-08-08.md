# Video System Remediation Plan

Created 2026-08-08. Status updated 2026-08-08 end of session.

Legend for Owner: S is Stephen, C is Claude, S+C is a decision from Stephen then execution by Claude.
Status: DONE, OPEN, BLOCKED.

## Scoreboard

| Segment | State |
| --- | --- |
| 0 Land what is on disk | OPEN, all of it yours |
| 1 Kill the two-generator split | DONE |
| 2 Unbreak the dev server | PARTIAL, mitigation in place, real fix needs a network |
| 3 Retire the zombie pages | 3.3 DONE, the rest blocked on 11 decisions |
| 4 Finish the deletions | Moved to `_to_delete/`, deletion is yours |
| 5 Role tagging | BLOCKED on your review |
| 6 Source data hygiene | SQL written, running it is yours |
| 7 Make the gap impossible to reopen | DONE |
| 8 Verify only | 8.2 DONE, 8.1 needs a build |

Nothing left in the plan is blocked on me. Every open item needs either a decision, a network, or a local build.

---

## Segment 0 - Land what is already on disk. OPEN

353 modified, 222 untracked, 184 deleted on main. Uncommitted and unbuilt.

| # | Action | Owner | State |
| --- | --- | --- | --- |
| 0.1 | Run `npm run build` to completion | S | OPEN |
| 0.2 | Spot check three new video routes and `/admin` in the browser | S | OPEN |
| 0.3 | Commit in separate commits: content and data, thumbnails, scripts and schema, sidebar | S or C | OPEN |
| 0.4 | Push, confirm the Pages deploy and the GitLab mirror | S | OPEN |

---

## Segment 1 - Kill the two-generator split. DONE

`sync-videos.py` emits the catalog and writes no MDX. `generate-videos.js` prunes
through `src/generated/videos-manifest.json`, scoped so it never removes a page
it did not create. `videos:sync` renamed `videos:pull`. Human-owned fields merge
forward by slug. Documented as CLAUDE.md section 4.7.

Root cause on record: two writers with two slug rules. The Python rule turned
`T/O Validation` into `to-validation` and `FDP&E` into `fdpe`, which is every one
of the 9 duplicate pairs.

---

## Segment 2 - Unbreak the dev server. PARTIAL

| # | Action | Owner | State |
| --- | --- | --- | --- |
| 2.1 | Run `npm run dev` and load the homepage | S | OPEN |
| 2.2 | Fall back to `npx next dev --webpack` if 2.1 still fails | S | OPEN |
| 2.3 | `npm i gray-matter@^4.0.3`, drops coffee-script from the tree | S | OPEN, needs a network the bridge lacks |
| 2.4 | Delete the `serverExternalPackages` line from `next.config.mjs` after 2.3 | C | BLOCKED on 2.3 |
| 2.5 | Audit other carets pinned below a major. `gray-matter` at `^2.0.1` never resolves to 4.x and survived three dependency-hardening passes | S+C | OPEN |

---

## Segment 3 - Retire the zombie pages. BLOCKED on 11 decisions

| # | Action | Owner | State |
| --- | --- | --- | --- |
| 3.1 | Decide per page: delete, or schedule a re-record | S | OPEN, this gates 3.2 |
| 3.2 | Execute and add an `/updates` correction entry | C | BLOCKED |
| 3.3 | Schema guard on `videoUrl` | C | DONE |

The 11 pages, all with no working video:

| Slug | Defect |
| --- | --- |
| fitrep-self-input | example.com placeholder |
| navmc-11000-walkthrough | example.com placeholder |
| pft-grading-overview | example.com placeholder |
| promotion-board-records | example.com placeholder |
| separation-packet-flow | example.com placeholder |
| how-to-set-alerts-for-new-videos | literal string `Video Outdated` in the URL field |
| hqmc-ardb-directives-monthly-training-20240731 | dead marinenet.marines.mil, DB says Video concept for ARDB |
| administrative-separation-process-preparer | dead marinenet.marines.mil, DB says Video Outdated |
| policy-and-software-updates | dead marinenet.marines.mil, DB says Video Outdated |
| requesting-access | dead marinenet.marines.mil, DB says Video Outdated |
| skillbridge-program-policy-update-navmc-1700-2b | dead marinenet.marines.mil, DB says Video Outdated |

A twelfth, `how-to-read-an-les-msg-focused`, has no database row at all.

3.3 shipped as a `superRefine` on `videoSchema` rejecting non-URL values and any
host outside portal.mcele.usmc.mil, www.mcele.usmc.mil, and mcele.usmc.mil.
The 12 above sit in `VIDEO_URL_QUARANTINE`, a list that only shrinks. Every
retirement above removes a line from it. When it empties, delete the constant.
Test at `src/lib/content/__tests__/video-url.test.ts`.

---

## Segment 4 - Finish the deletions. OPEN

The bridge refuses `rm` on mounted folders, so everything was moved. `_to_delete/`
holds 26 MB across three folders.

| # | Action | Owner | State |
| --- | --- | --- | --- |
| 4.1 | Delete `_to_delete/videos-duplicate-slugs/`, 9 legacy duplicate MDX | S | OPEN |
| 4.2 | Delete `_to_delete/thumbnails-unreferenced-folders/`, 21 folders, 174 files, 24.9 MB. `public/thumbnails` already dropped 99.4 MB to 76 MB with coverage held at 368 | S | OPEN |
| 4.3 | Delete `_to_delete/dead-thumbnail-mapping/`, `series-folder-mapping.json` with 45 entries no code reads | S | OPEN |

`scripts/THUMBNAIL_MAPPING.md` documented that dead mapping and claimed
`generate-videos.js` loaded it, which was false. Rewritten to describe what
`sync-thumbnails.mjs` does.

---

## Segment 5 - Role tagging on the 28 new pages. BLOCKED

All 28 shipped as `roles: ["leader"]`, matching their series convention. That was
a safe default, not a judgment.

| # | Action | Owner | State |
| --- | --- | --- | --- |
| 5.1 | Review the 23 Manpower pages for `admin` and `commander` | S | OPEN |
| 5.2 | Confirm the 3 Promotions Page 11 pages stay leader only | S | OPEN |
| 5.3 | Apply retags in `data/videos-marinenet.json`, not the MDX | C | BLOCKED |
| 5.4 | Confirm they land in the right role trees | C | BLOCKED |

The merge-forward fix from Segment 1 is in, so retags now survive every pull.

---

## Segment 6 - Source data hygiene. OPEN

SQL is written and sits next to the database at
`E:\Videos\Video Database\Video Database\data\vanguard-title-cleanup-2026-08-08.sql`.
Close the Vanguard app and back up first. I did not run it, that database is your
system of record.

| # | Action | Owner | State |
| --- | --- | --- | --- |
| 6.1 | Trim 12 titles carrying leading or trailing whitespace | S | OPEN, SQL ready |
| 6.2 | Collapse doubled internal spaces in 3 titles | S | OPEN, SQL ready |
| 6.3 | Review the duplicate exposed by the trim. `_id` 679 and 680 are the same planned video, kept apart only by a trailing space | S | OPEN, review query in the SQL |
| 6.4 | Add a real publish-state column so status text stops living in the URL column | S+C | OPEN |
| 6.5 | Decide the fate of `Broken URLs`, null across all 1,073 rows | S | OPEN |
| 6.6 | Chase the MCeLE upload for `MCPP and FDP&E - When You Get Called`, recorded 2026-04-08 | S | OPEN |

---

## Segment 7 - Make the gap impossible to reopen. DONE

`npm run videos:audit` exits non-zero when a published video has no catalog entry
or a URL disagrees. It lives as `--check` inside `sync-videos.py` on purpose, since
a separate auditor with its own slug rule would rebuild the bug it exists to catch.

`videos:pull` writes the committed stamp `data/videos-catalog-status.json`.
`content:sync` prints video and thumbnail coverage and warns once the last pull
passes 30 days. `sync:thumbnails` joined `prebuild` and `predev`, which also closes
the `build:cloudgov` clean-tree failure since that wrapper calls `npm run build`.
CONTRIBUTING.md documents both environment variables and both silent-failure traps.

---

## Segment 8 - Verify. 8.2 DONE

| # | Action | Owner | State |
| --- | --- | --- | --- |
| 8.1 | Confirm Pagefind indexes video pages after a full build. `search-index.json` holds zero video entries by design, so `/search` coverage rides entirely on Pagefind reading built HTML | S | OPEN, needs 0.1 |
| 8.2 | Navigation reachability | C | DONE |

Admin came back clean. The topic index page enumerates its children, all 61
unitType and topic pairs have a sidebar node, and the sidebar now carries all 387
pages directly after the three-level change.

---

## New work found after the plan was written

| # | Item | Owner | State |
| --- | --- | --- | --- |
| N.1 | Admin sidebar third level. `BranchNode` was hard-capped at two levels with no recursion. Now recursive, admin nav 64 nodes to 452, all 387 pages present | C | DONE |
| N.2 | `npm run type-check` never completed through the bridge after the `TreeBranch` type widening. Prettier passes, grep confirms only two files touch those types | S | OPEN, run it locally |
| N.3 | 4 marines pages have no sidebar link: `_deprecated_dts_single_page`, `_deprecated_gtcc_single_page`, `life-events-overview/family-docs`, `records-and-personal-data/review-mctfs`. The two deprecated ones still render | S+C | OPEN |
| N.4 | Commander page `aviation/flight-performance-boards` added to the hand tree. Commander is 47 of 47. The tree is still hand-maintained and drifts by default | C | DONE, recurrence risk stands |
| N.5 | `index-function` carried a mistyped media id and a dead link. Fixed by deriving URLs from the database | C | DONE |
| N.6 | `src/lib/role-trees.ts` fails `prettier --check` on HEAD. A formatting pass belongs in its own commit, never bundled with a content change | S | OPEN |

---

## What to do next, in order

1. Segment 0.1 and 0.2. Build and look at it.
2. Segment 2.1 through 2.3. Working dev server.
3. Segment 3.1. The 11 decisions. This unblocks the largest remaining chunk.
4. Segment 4. Three folder deletions, 26 MB.
5. Segment 6.1 through 6.3. Run the SQL.
6. Segment 5.1 and 5.2. The role review.
7. Segment 0.3 and 0.4. Commit and push.
