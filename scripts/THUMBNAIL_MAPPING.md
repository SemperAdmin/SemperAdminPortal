# Thumbnail Mapping Configuration

This document explains how to maintain thumbnail mappings between MCeLE series names and actual folder names.

## Architecture

The thumbnail mapping system separates configuration from code:

1. **`series-folder-mapping.json`** - Configuration file mapping MCeLE series names to actual folder paths
2. **`generate-videos.js`** - Build script that loads the mapping and generates video entries

At build time, `npm run content:sync` reads the mapping and generates posterUrl paths that point to actual thumbnail files in `public/thumbnails/`.

## How It Works

When you run `npm run content:sync`:

1. `generate-videos.js` loads `series-folder-mapping.json`
2. For each video in `data/videos-marinenet.json`:
   - Extract the series name from `source.title`
   - Look up the mapped folder name (e.g., "Excel Intermediate" → "Excel")
   - Normalize the video title to a filename (spaces to underscores, remove special chars)
   - Generate posterUrl: `/thumbnails/{mappedFolder}/{normalizedTitle}.jpg`
3. The videos catalog includes posterUrl values pointing to actual files

## Maintaining the Mapping

### When Adding a New Series

1. Add an entry to `scripts/series-folder-mapping.json`:
   ```json
   "New Series Name": "actual_folder_name"
   ```
2. Ensure the folder exists at `public/thumbnails/actual_folder_name/`
3. Run `npm run content:sync` to regenerate video entries
4. Verify thumbnails load with 200 status in dev server

### When Renaming a Folder

1. Rename the folder in `public/thumbnails/`
2. Update the mapping in `scripts/series-folder-mapping.json`:
   ```json
   "Series Name": "new_folder_name"
   ```
3. Run `npm run content:sync` to regenerate video entries

### When a Series Has No Thumbnails

Set the mapping value to `null`:
```json
"Series Name": null
```

Videos in this series will have no posterUrl, and the VideoCard component will show a placeholder pattern instead.

### Special Cases

Some series map to shared folders:
- Excel Beginner, Excel Intermediate, Excel Challenge all use folder "Excel"
- SharePoint O365 Beginner, SharePoint O365 Intermediate both use folder "SharePoint"

This is intentional for DRY storage (no duplicate thumbnails).

## Files to Edit

- **Add/rename series**: `scripts/series-folder-mapping.json`
- **Change generation logic**: `scripts/generate-videos.js`
- **View result**: `src/generated/videos.json` (auto-generated, do not edit)

## Debugging

If thumbnails return 404 after running `npm run content:sync`:

1. Check that the series name in `data/videos-marinenet.json` matches a key in the mapping
2. Verify the mapped folder exists in `public/thumbnails/`
3. Verify the normalized filename matches an actual file in that folder
4. Check the dev server log for which URLs returned 404

Example:
- Series in JSON: "MISSA/MISSO"
- Mapped to: "MISSA_MISSO" (in series-folder-mapping.json)
- Video title: "Accessing training guides"
- Normalized title: "Accessing_training_guides"
- Expected file: `public/thumbnails/MISSA_MISSO/Accessing_training_guides.jpg`
