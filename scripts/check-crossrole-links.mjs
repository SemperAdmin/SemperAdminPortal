/**
 * check-crossrole-links.mjs
 *
 * Verifies every relatedRoles target in content frontmatter resolves to a
 * page in the static export. CrossRoleStrip renders relatedRoles hrefs as
 * given, with no route check, so an unknown target ships as a 404.
 *
 * Reads out/ after next build. The export runs with trailingSlash, so a
 * route /x/y resolves when out/x/y/index.html exists.
 *
 * Default mode warns and exits 0. --strict exits 1 on any unknown target.
 *
 * Run: node scripts/check-crossrole-links.mjs [--strict]
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT = path.resolve("content");
const OUT = path.resolve("out");
const STRICT = process.argv.includes("--strict");

if (!fs.existsSync(OUT)) {
  console.log("[crossrole] no out/ directory. Run next build first. Skipping.");
  process.exit(0);
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".") || name.startsWith("_")) continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (name.endsWith(".mdx")) files.push(full);
  }
  return files;
}

function resolves(href) {
  const route = href.split("#")[0].replace(/\/+$/, "");
  return fs.existsSync(path.join(OUT, route, "index.html"));
}

const dead = [];
let total = 0;
for (const file of walk(CONTENT)) {
  const fm = matter(fs.readFileSync(file, "utf8")).data;
  for (const [role, href] of Object.entries(fm.relatedRoles ?? {})) {
    total += 1;
    if (typeof href !== "string" || !resolves(href)) {
      dead.push({ file: path.relative(process.cwd(), file), role, href });
    }
  }
}

if (dead.length === 0) {
  console.log(`[crossrole] ${total} relatedRoles links, all resolve.`);
  process.exit(0);
}

const byTarget = new Map();
for (const d of dead) byTarget.set(d.href, (byTarget.get(d.href) ?? 0) + 1);
const files = new Set(dead.map((d) => d.file)).size;
console.log(
  `[crossrole] ${STRICT ? "FAIL" : "WARN"} ${dead.length} of ${total} relatedRoles links ` +
    `point at no page, across ${files} files and ${byTarget.size} targets.`
);
for (const [href, n] of [...byTarget].sort((a, b) => b[1] - a[1]).slice(0, 10)) {
  console.log(`    ${String(n).padStart(4)}  ${href}`);
}
process.exit(STRICT ? 1 : 0);
