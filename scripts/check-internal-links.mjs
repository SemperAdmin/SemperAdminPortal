/**
 * check-internal-links.mjs
 *
 * Verifies every internal href and src in the static export resolves to a
 * file in out/. Covers what check-crossrole-links.mjs does not reach. MDX
 * body links, breadcrumbs, the 404 page, and component-rendered anchors all
 * ship as plain HTML, and a dead target ships as a 404 with no build error.
 *
 * Mirrors the basePath switch in next.config.mjs. DEPLOY_TARGET=cloudgov
 * serves at the host root, every other build under /SemperAdminPortal.
 *
 * Default mode warns and exits 0. --strict exits 1 on any dead target.
 *
 * Run after next build: node scripts/check-internal-links.mjs [--strict]
 */

import fs from "fs";
import path from "path";

const OUT = path.resolve("out");
const STRICT = process.argv.includes("--strict");
const BASE =
  process.env.DEPLOY_TARGET === "cloudgov" ? "" : "/SemperAdminPortal";

if (!fs.existsSync(OUT)) {
  console.log("[links] no out/ directory. Run next build first. Skipping.");
  process.exit(0);
}

// Asset folders hold no pages to scan.
const SKIP_DIRS = new Set(["_next", "pagefind", "thumbnails"]);

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (!SKIP_DIRS.has(name)) walk(full, files);
    } else if (name.endsWith(".html")) files.push(full);
  }
  return files;
}

function decodeEntities(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

const cache = new Map();
function resolves(route) {
  if (cache.has(route)) return cache.get(route);
  let rel;
  try {
    rel = decodeURIComponent(route);
  } catch {
    rel = route;
  }
  const target = path.join(OUT, rel);
  const ok =
    (fs.existsSync(target) && fs.statSync(target).isFile()) ||
    fs.existsSync(path.join(target, "index.html")) ||
    fs.existsSync(`${target}.html`);
  cache.set(route, ok);
  return ok;
}

const ATTR = /\s(?:href|src)="([^"]+)"/g;
const dead = new Map();
let total = 0;

for (const file of walk(OUT)) {
  const html = fs.readFileSync(file, "utf8");
  const page = "/" + path.relative(OUT, file).replace(/index\.html$/, "");
  for (const match of html.matchAll(ATTR)) {
    const url = decodeEntities(match[1]);
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    if (BASE && url !== BASE && !url.startsWith(`${BASE}/`)) continue;
    const route = url.slice(BASE.length).split("#")[0].split("?")[0] || "/";
    total += 1;
    if (resolves(route)) continue;
    if (!dead.has(route)) dead.set(route, new Set());
    dead.get(route).add(page);
  }
}

if (dead.size === 0) {
  console.log(`[links] ${total} internal links, all resolve.`);
  process.exit(0);
}

const pages = new Set([...dead.values()].flatMap((s) => [...s])).size;
console.log(
  `[links] ${STRICT ? "FAIL" : "WARN"} ${dead.size} internal targets ` +
    `point at no file, linked from ${pages} pages.`
);
for (const [route, from] of [...dead]
  .sort((a, b) => b[1].size - a[1].size)
  .slice(0, 20)) {
  console.log(
    `    ${String(from.size).padStart(4)}  ${route}  <- ${[...from]
      .slice(0, 2)
      .join(", ")}`
  );
}
process.exit(STRICT ? 1 : 0);
