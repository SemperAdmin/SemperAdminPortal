/**
 * sync-thumbnails.mjs
 *
 * Copies thumbnails from a local source root into public/thumbnails/,
 * matches each video in src/generated/videos.json to its thumbnail,
 * and writes src/generated/thumbnails.json as { [slug]: "/thumbnails/..." }.
 *
 * Source root is resolved from the THUMBNAILS_SRC environment variable.
 * When unset, the script writes an empty thumbnails.json and exits 0 so
 * CI builds without the local thumbnail drive still succeed.
 *   PowerShell: $env:THUMBNAILS_SRC = "X:\path\to\Thumbnails"
 *   bash:       export THUMBNAILS_SRC="/path/to/Thumbnails"
 *
 * Run: node scripts/sync-thumbnails.mjs
 */

import fs from "fs";
import path from "path";

const SRC_ROOT = process.env.THUMBNAILS_SRC || "";
const DEST_ROOT = path.resolve("public/thumbnails");
const VIDEOS_JSON = path.resolve("src/generated/videos.json");
const OUT_JSON = path.resolve("src/generated/thumbnails.json");

// Manual overrides: source.title → folder name under SRC_ROOT
const FOLDER_OVERRIDES = {
  "Casualty Affairs": "Casualty  Affaires",
  "FITREPS": "FITREP",
  "MISSA/MISSO": "MISSA_MISSO",
  "SharePoint O365 Beginner": "SharePoint",
  "SharePoint O365 Intermediate": "SharePoint",
  "Excel Beginner": "Excel",
  "Excel Challenge": "Excel",
  "Excel Intermediate": "Excel",
  // Custom videos with " source" suffix — route to Semper Admin folder
  "Fitrep self input source": "FITREP",
  "NAVMC 11000 walkthrough source": "Semper Admin",
  "PFT grading overview source": "Semper Admin",
  "Promotion board records review source": "Semper Admin",
  "Separation packet flow source": "Semper Admin",
};

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"]);

function normalize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Build index of all files per folder: { folderName: [ { base, file, ext } ] }
function buildFolderIndex() {
  const index = {};
  if (!fs.existsSync(SRC_ROOT)) {
    console.error(`Source not found: ${SRC_ROOT}`);
    process.exit(1);
  }
  const entries = fs.readdirSync(SRC_ROOT, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const folderPath = path.join(SRC_ROOT, entry.name);
    const files = fs.readdirSync(folderPath, { withFileTypes: true })
      .filter(f => f.isFile() && IMAGE_EXTS.has(path.extname(f.name)))
      .map(f => ({
        base: path.basename(f.name, path.extname(f.name)),
        file: f.name,
        full: path.join(folderPath, f.name),
      }));
    index[entry.name] = files;
  }
  return index;
}

function resolveFolder(sourceTitle, folderIndex) {
  if (FOLDER_OVERRIDES[sourceTitle]) {
    const override = FOLDER_OVERRIDES[sourceTitle];
    if (folderIndex[override]) return override;
  }
  // Exact match
  if (folderIndex[sourceTitle]) return sourceTitle;
  // Case-insensitive match
  const lower = sourceTitle.toLowerCase();
  const match = Object.keys(folderIndex).find(k => k.toLowerCase() === lower);
  if (match) return match;
  // Normalized fuzzy match
  const normSrc = normalize(sourceTitle);
  const fuzzy = Object.keys(folderIndex).find(k => normalize(k) === normSrc);
  return fuzzy || null;
}

function resolveFile(title, files) {
  if (!files || files.length === 0) return null;
  // Exact base name match
  const exact = files.find(f => f.base === title);
  if (exact) return exact;
  // Case-insensitive
  const lower = title.toLowerCase();
  const ci = files.find(f => f.base.toLowerCase() === lower);
  if (ci) return ci;
  // Normalized
  const normTitle = normalize(title);
  const norm = files.find(f => normalize(f.base) === normTitle);
  if (norm) return norm;
  // Starts-with (for truncated names)
  const startsWith = files.find(f => f.base.toLowerCase().startsWith(lower.substring(0, 20)));
  return startsWith || null;
}

function copyFile(srcPath, destFolder, fileName) {
  fs.mkdirSync(destFolder, { recursive: true });
  const dest = path.join(destFolder, fileName);
  // COPYFILE_EXCL makes the copy fail with EEXIST when dest already exists,
  // collapsing the existsSync-then-copy race CodeQL flags into one syscall.
  try {
    fs.copyFileSync(srcPath, dest, fs.constants.COPYFILE_EXCL);
  } catch (err) {
    if (err.code !== "EEXIST") throw err;
  }
  return dest;
}

// ── Main ───────────────────────────────────────────────────────────────────

// Build the slug-to-path index of every image already in public/thumbnails.
// Shared between the absent-source CI branch below and the main copy branch.
function indexPublicThumbnails(publicRoot) {
  const index = {};
  if (!fs.existsSync(publicRoot)) return index;
  const entries = fs.readdirSync(publicRoot, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const folderPath = path.join(publicRoot, entry.name);
    index[entry.name] = fs
      .readdirSync(folderPath, { withFileTypes: true })
      .filter((f) => f.isFile() && IMAGE_EXTS.has(path.extname(f.name)))
      .map((f) => ({
        base: path.basename(f.name, path.extname(f.name)),
        file: f.name,
      }));
  }
  return index;
}

// When THUMBNAILS_SRC is missing (CI, fresh clones, contributors without the
// local drive), do not give up. The 335 thumbnail files already live under
// public/thumbnails and are tracked in git. Rebuild the slug-to-path map from
// those committed files so the live site renders posters without depending
// on the original source drive.
if (!fs.existsSync(SRC_ROOT)) {
  const publicIndex = indexPublicThumbnails(DEST_ROOT);
  const videos = JSON.parse(fs.readFileSync(VIDEOS_JSON, "utf8"));
  const fallbackMap = {};
  let fallbackMatched = 0;
  let fallbackUnmatched = 0;

  for (const video of videos) {
    const sourceTitle = video.source?.title || "";
    const folderName = resolveFolder(sourceTitle, publicIndex);
    if (!folderName) {
      fallbackUnmatched++;
      continue;
    }
    const fileEntry = resolveFile(video.title, publicIndex[folderName]);
    if (!fileEntry) {
      fallbackUnmatched++;
      continue;
    }
    fallbackMap[video.slug] =
      `/thumbnails/${encodeURIComponent(folderName)}/${encodeURIComponent(fileEntry.file)}`;
    fallbackMatched++;
  }

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(fallbackMap, null, 2));
  console.log(
    `[thumbnails] source not found - rebuilt from public/thumbnails: matched ${fallbackMatched}, unmatched ${fallbackUnmatched}, total ${videos.length}`
  );
  process.exit(0);
}

const folderIndex = buildFolderIndex();
const videos = JSON.parse(fs.readFileSync(VIDEOS_JSON, "utf8"));
const thumbnailMap = {};

let matched = 0;
let unmatched = 0;
const unmatchedList = [];

for (const video of videos) {
  const sourceTitle = video.source?.title || "";
  const folderName = resolveFolder(sourceTitle, folderIndex);

  if (!folderName) {
    unmatched++;
    unmatchedList.push({ slug: video.slug, sourceTitle, reason: "no folder" });
    continue;
  }

  const files = folderIndex[folderName];
  const fileEntry = resolveFile(video.title, files);

  if (!fileEntry) {
    unmatched++;
    unmatchedList.push({ slug: video.slug, title: video.title, sourceTitle, folder: folderName, reason: "no file" });
    continue;
  }

  // Copy to public/thumbnails/<folderName>/<file>
  const destFolder = path.join(DEST_ROOT, folderName);
  copyFile(fileEntry.full, destFolder, fileEntry.file);

  const publicPath = `/thumbnails/${encodeURIComponent(folderName)}/${encodeURIComponent(fileEntry.file)}`;
  thumbnailMap[video.slug] = publicPath;
  matched++;
}

fs.writeFileSync(OUT_JSON, JSON.stringify(thumbnailMap, null, 2));

console.log(`[thumbnails] matched: ${matched}  unmatched: ${unmatched}  total: ${videos.length}`);