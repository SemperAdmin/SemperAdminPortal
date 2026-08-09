// Role navigation tree generator. Emits src/generated/role-nav.json, consumed
// by src/lib/role-trees.ts. Branch and leaf labels come from the TS label
// registries (marines-categories.ts, leader-categories.ts, admin-topics.ts),
// imported directly via Node type stripping.
//
// Runs in two modes:
// 1. Imported by scripts/sync-content.mjs on Node 22.18+ where type stripping
//    is on by default.
// 2. Re-executed by sync-content.mjs as a child process under
//    --experimental-strip-types on Node 22.6 through 22.17.
//
// Reads the content catalogs from src/generated/, so sync-content.mjs must
// emit those first.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "src", "generated");

function readCatalog(name) {
  const file = path.join(OUT, name + ".json");
  if (!fs.existsSync(file)) {
    throw new Error(
      "[role-nav] Missing catalog " +
        file +
        ". Run scripts/sync-content.mjs first."
    );
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

const libUrl = (file) =>
  pathToFileURL(path.join(ROOT, "src", "lib", file)).href;

const marinesLib = await import(libUrl("marines-categories.ts"));
const leaderLib = await import(libUrl("leader-categories.ts"));
const adminLib = await import(libUrl("admin-topics.ts"));

const marinesCatalog = readCatalog("marines");
const leaderCatalog = readCatalog("leader");
const adminCatalog = readCatalog("admin");

// --- Marine: parent-group branches, category leaves --------------------------
const { MARINES_PARENT_GROUPS, MARINES_CATEGORIES } = marinesLib;
const marineCatBySlug = new Map(MARINES_CATEGORIES.map((c) => [c.slug, c]));
const groupedMarineSlugs = new Set(
  MARINES_PARENT_GROUPS.flatMap((g) => g.children)
);
// Pages per container category, for ungrouped categories whose detail
// pages live one level below the category index.
const marinePagesByTopic = new Map();
for (const e of marinesCatalog) {
  if (e.topic && e.topic !== e.slug) {
    if (!marinePagesByTopic.has(e.topic)) marinePagesByTopic.set(e.topic, []);
    marinePagesByTopic.get(e.topic).push(e);
  }
}

// Hard gate: a group child slug with no category definition renders no card
// on the group landing and no sidebar leaf. Fail the build so the miss
// surfaces in CI instead of shipping as a silent 404.
const unresolvedMarineChildren = MARINES_PARENT_GROUPS.flatMap((g) =>
  g.children
    .filter((slug) => !marineCatBySlug.has(slug))
    .map((slug) => g.slug + " lists unknown child " + slug)
);
if (unresolvedMarineChildren.length > 0) {
  throw new Error(
    "[role-nav] Parent-group children missing from MARINES_CATEGORIES: " +
      unresolvedMarineChildren.join(", ")
  );
}

const groupItems = [...MARINES_PARENT_GROUPS].map((g) => ({
  label: g.label,
  href: `/marines/${g.slug}`,
  children: g.children
    .map((slug) => marineCatBySlug.get(slug))
    .filter(Boolean)
    .map((c) => ({ label: c.shortLabel, href: `/marines/${c.slug}` })),
}));

// Ungrouped categories sort into the same list as the groups. Container
// categories render as branches with their pages as children so every
// top-level item carries the same shape. Leaf categories stay leaves.
const ungroupedItems = MARINES_CATEGORIES.filter(
  (c) => !groupedMarineSlugs.has(c.slug)
).map((c) => {
  const pages = marinePagesByTopic.get(c.slug) ?? [];
  if (c.pageType !== "leaf" && pages.length > 0) {
    return {
      label: c.label,
      href: `/marines/${c.slug}`,
      children: pages
        .map((e) => ({
          label: e.title,
          href: `/marines/${c.slug}/${e.slug}`,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    };
  }
  return { label: c.shortLabel, href: `/marines/${c.slug}` };
});

const marine = [
  { label: "Overview", href: "/marines" },
  ...[...groupItems, ...ungroupedItems].sort((a, b) =>
    a.label.localeCompare(b.label)
  ),
];

// Drift guard: every marines.json topic should exist in the registry.
const knownMarineSlugs = new Set(MARINES_CATEGORIES.map((c) => c.slug));
const marineOrphans = [...new Set(marinesCatalog.map((e) => e.topic))].filter(
  (t) => !knownMarineSlugs.has(t)
);
if (marineOrphans.length > 0) {
  console.warn(
    "[role-nav] WARN " +
      marineOrphans.length +
      " marine topic(s) missing from marines-categories.ts and absent " +
      "from the sidebar: " +
      marineOrphans.join(", ")
  );
}

// --- Leader: parent-group branches, page leaves -------------------------------
const { LEADER_PARENT_GROUPS, LEADER_CATEGORIES } = leaderLib;
const leaderCatBySlug = new Map(LEADER_CATEGORIES.map((c) => [c.slug, c]));

// Hard gate, same rule as the marine groups above.
const unresolvedLeaderChildren = LEADER_PARENT_GROUPS.flatMap((g) =>
  g.children
    .filter((slug) => !leaderCatBySlug.has(slug))
    .map((slug) => g.slug + " lists unknown child " + slug)
);
if (unresolvedLeaderChildren.length > 0) {
  throw new Error(
    "[role-nav] Parent-group children missing from LEADER_CATEGORIES: " +
      unresolvedLeaderChildren.join(", ")
  );
}

const leader = [
  { label: "Overview", href: "/leader" },
  ...LEADER_PARENT_GROUPS.filter((g) => g.children.length > 0).map((g) => ({
    label: g.label,
    href: `/leader/${g.slug}`,
    children: g.children
      .map((slug) => leaderCatBySlug.get(slug))
      .filter(Boolean)
      .map((c) => ({
        label: c.shortLabel,
        href: `/leader/${c.parentGroup}/${c.leafSlug}`,
      })),
  })),
];

// Drift guard: every leader.json page should appear in the registry.
const knownLeaderHrefs = new Set(
  LEADER_CATEGORIES.map((c) => `/leader/${c.parentGroup}/${c.leafSlug}`)
);
const leaderOrphans = leaderCatalog
  .map((e) => `/leader/${e.topic}/${e.slug}`)
  .filter((href) => !knownLeaderHrefs.has(href));
if (leaderOrphans.length > 0) {
  console.warn(
    "[role-nav] WARN " +
      leaderOrphans.length +
      " leader page(s) missing from leader-categories.ts and absent " +
      "from the sidebar: " +
      leaderOrphans.join(", ")
  );
}

// --- Admin: unit type -> topic -> page, three levels --------------------------
// Admin is the only role with a third level. Marine and Leader put pages
// directly under a category, so two levels cover them. Admin routes as
// /admin/<unitType>/<topic>/<slug>, and stopping the tree at the topic left
// every page reachable only from the topic index.
const { UNIT_NAV_ORDER, UNIT_LABELS, toTopicLabel } = adminLib;
const topicsByUnit = new Map();
const pagesByUnitTopic = new Map();
for (const e of adminCatalog) {
  if (!topicsByUnit.has(e.unitType)) topicsByUnit.set(e.unitType, new Set());
  topicsByUnit.get(e.unitType).add(e.topic);
  const key = `${e.unitType}/${e.topic}`;
  if (!pagesByUnitTopic.has(key)) pagesByUnitTopic.set(key, []);
  pagesByUnitTopic.get(key).push(e);
}

// Overview first, then alphabetical by title. Mirrors the ordering in
// src/app/admin/[unitType]/[topic]/page.tsx so the sidebar and the topic
// index read in the same sequence.
function adminPageLeaves(unitType, topic) {
  const pages = pagesByUnitTopic.get(`${unitType}/${topic}`) ?? [];
  const isOverview = (e) =>
    String(e.slug).toLowerCase().includes("overview") ||
    String(e.title ?? "")
      .toLowerCase()
      .includes("overview");
  return [...pages]
    .sort((a, b) => {
      if (isOverview(a) && !isOverview(b)) return -1;
      if (!isOverview(a) && isOverview(b)) return 1;
      return String(a.title ?? a.slug).localeCompare(String(b.title ?? b.slug));
    })
    .map((e) => ({
      label: adminNavLabel(e),
      href: `/admin/${unitType}/${topic}/${e.slug}`,
    }));
}

// Admin titles run long. Median 49 characters, max 94, against a 268px
// sidebar that gives a third-level label around 180px. Two safe cuts:
// the topic overview reads as "Overview", and the boilerplate
// " - S-1 Procedural Page" suffix on 211 titles carries no information the
// tree does not already convey through its position.
let strippedSuffixCount = 0;
function adminNavLabel(entry) {
  if (entry.slug === "overview") return "Overview";
  const title = String(entry.title ?? entry.slug);
  const trimmed = title.replace(/\s-\sS-1 Procedural Page$/, "").trim();
  if (trimmed !== title) strippedSuffixCount++;
  return trimmed || title;
}

const admin = [
  { label: "Overview", href: "/admin" },
  ...UNIT_NAV_ORDER.filter((ut) => topicsByUnit.has(ut)).map((ut) => ({
    label: UNIT_LABELS[ut] ?? ut,
    href: `/admin/${ut}`,
    children: [...topicsByUnit.get(ut)]
      .map((t) => ({
        label: toTopicLabel(t),
        href: `/admin/${ut}/${t}`,
        children: adminPageLeaves(ut, t),
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
  })),
];
const unknownUnits = [...topicsByUnit.keys()].filter(
  (ut) => !UNIT_NAV_ORDER.includes(ut)
);
if (unknownUnits.length > 0) {
  console.warn(
    "[role-nav] WARN unit type(s) outside UNIT_NAV_ORDER and absent from " +
      "the sidebar: " +
      unknownUnits.join(", ")
  );
}

const roleNav = { marine, leader, admin };
fs.writeFileSync(
  path.join(OUT, "role-nav.json"),
  JSON.stringify(roleNav, null, 2)
);
// Counts every node at any depth. The old version summed one level of
// children and undercounted the admin tree once it grew a third.
const count = (items) =>
  items.reduce((n, i) => n + 1 + (i.children ? count(i.children) : 0), 0);
if (strippedSuffixCount > 0) {
  console.log(
    "[role-nav] shortened " +
      strippedSuffixCount +
      " admin labels by dropping the Procedural Page suffix"
  );
}
console.log(
  "[role-nav] marine " +
    count(marine) +
    ", leader " +
    count(leader) +
    ", admin " +
    count(admin) +
    " nav nodes"
);
