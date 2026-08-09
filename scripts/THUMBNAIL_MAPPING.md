# Video Thumbnails

How a video page gets its image.

## Owner

`scripts/sync-thumbnails.mjs`. Nothing else touches thumbnails.
`generate-videos.js` does not, despite what an earlier version of this file
claimed. The `posterUrl` frontmatter field exists in the schema and is unused.

## Flow

```
THUMBNAILS_SRC/<Series>/<Video Title>.jpg
        |  npm run sync:thumbnails
        v
public/thumbnails/<Series>/<Video Title>.jpg   (committed)
        |
        v
src/generated/thumbnails.json   { slug: "/thumbnails/..." }   (gitignored)
        |
        v
src/app/videos/page-client.tsx
```

`THUMBNAILS_SRC` defaults to `E:\Videos\Photos\Thumbnails` when the variable is
unset and the path exists. Set it explicitly on any other machine.

`sync:thumbnails` runs as part of `prebuild`, `predev`, and `pretype-check`. It
reads `src/generated/videos.json`, so it has to run after `sync-content.mjs`,
never before. Run it alone with `npm run sync:thumbnails` after adding videos.

## Matching

For each video, resolve the folder from `source.title`, then resolve the file
from the video title. File matching tries these in order and stops at the first
hit: exact base name, case-insensitive, normalized with non-alphanumerics
collapsed to spaces, condensed with whitespace removed, substring, word overlap
at 60 percent or better, and finally a 20-character prefix.

The condensed pass is what matches `T/O Validation - The Unit-Level Review` to
`TO Validation - The Unit-Level Review.jpg`, where the source filename drops a
character illegal in a Windows path.

Folder names outside the simple case live in `FOLDER_OVERRIDES` at the top of
`scripts/sync-thumbnails.mjs`. Add new ones there. There is no separate mapping
file. `series-folder-mapping.json` was retired on 2026-08-08 after confirming no
code read it.

## Adding a thumbnail

1. Drop the image in `THUMBNAILS_SRC/<Series>/`, named to match the video title.
2. Run `npm run sync:thumbnails`.
3. Confirm the run reports it under matched rather than UNMATCHED.
4. Commit the copy that landed in `public/thumbnails/`.

## Silent failure to watch for

With no reachable source the script rebuilds the index from whatever already
sits in `public/thumbnails`, prints one line saying so, and exits 0. A stale
index looks like a clean run. Thirty pages lost their thumbnails this way in
August 2026. Read the summary line, do not assume exit 0 means current.

## Coverage

`npm run content:sync` prints a coverage line and names up to 10 pages with no
image. Pages carrying no thumbnail today are the ones with no recorded video,
tracked in `VIDEO-REMEDIATION-PLAN-2026-08-08.md` Segment 3.

## Housekeeping note

Every series folder used to exist twice, once with spaces and once with
underscores, from an older naming scheme. The underscore copies were never
referenced and shipped 24.9 MB of duplicate images in every static export. They
were removed on 2026-08-08. Keep one folder per series, spaces only.
