// Build-time content snapshot for client components.
// Reads MDX frontmatter and emits JSON catalogs plus role-nav under src/generated/.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import matter from "gray-matter";
import {
  citationSchema,
  assertUniqueCitationAliases,
  buildCitationIndex,
  resolveReferenceToId,
} from "./citations-validate.mjs";

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, "content");
const OUT = path.join(ROOT, "src", "generated");
fs.mkdirSync(OUT, { recursive: true });

function loadDir(dir) {
  const full = path.join(CONTENT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("."))
    .map((f) => {
      const raw = fs.readFileSync(path.join(full, f), "utf8");
      const m = matter(raw);
      return { ...m.data, slug: m.data.slug ?? f.replace(/\.mdx$/, "") };
    });
}

const mdxCollections = [
  "policies",
  "situations",
  "snippets",
  "videos",
  "references",
  "tools",
  "external-tools",
  "links",
  "reports",
  "admin",
  "marines",
  "leader",
  "commander",
];

const loaded = {};
for (const c of mdxCollections) {
  const items = loadDir(c);
  loaded[c] = items;
  fs.writeFileSync(path.join(OUT, c + ".json"), JSON.stringify(items, null, 2));
  console.log("[content-sync] " + c + ": " + items.length + " entries");
}

// Inspections collection ships JSON, not MDX. Flatten every file under
// content/inspections/<track>/ into a single catalog at src/generated/inspections.json.
const INSPECTIONS_DIR = path.join(CONTENT, "inspections");
const TRACKS = ["igmc", "mcaat"];
const inspections = [];
if (fs.existsSync(INSPECTIONS_DIR)) {
  for (const track of TRACKS) {
    const trackDir = path.join(INSPECTIONS_DIR, track);
    if (!fs.existsSync(trackDir)) continue;
    const files = fs
      .readdirSync(trackDir)
      .filter((f) => f.endsWith(".json") && !f.startsWith("."));
    for (const file of files) {
      const raw = fs.readFileSync(path.join(trackDir, file), "utf8");
      const data = JSON.parse(raw);
      inspections.push({
        ...data,
        track,
        slug: data.slug ?? file.replace(/\.json$/, ""),
      });
    }
  }
}
fs.writeFileSync(
  path.join(OUT, "inspections.json"),
  JSON.stringify(inspections, null, 2)
);
console.log("[content-sync] inspections: " + inspections.length + " entries");

// Reference link manifest for inspection citations.
const REF_LINKS_SRC = path.join(CONTENT, "inspections", "_reference-links.json");
if (fs.existsSync(REF_LINKS_SRC)) {
  const refLinks = JSON.parse(fs.readFileSync(REF_LINKS_SRC, "utf8"));
  fs.writeFileSync(
    path.join(OUT, "reference-links.json"),
    JSON.stringify(refLinks, null, 2)
  );
  console.log(
    "[content-sync] reference-links: " +
      Object.keys(refLinks).length +
      " aliases"
  );
}


// Inspector guide sidecars. One JSON per FA (or per FA+slug when one FA serves
// multiple inspection programs) under content/inspections/igmc-guides/.
// The catalog is keyed by filename stem so the detail page can disambiguate
// between programs that share a faNumber. Example: 5800.16-legal-administration
// and 5800.16-victim-and-witness-assistance-program both ride FA 5800.16 but
// carry different items. The detail page looks up by ${fa}-${slug} first and
// falls back to ${fa} so existing single-program FAs keep working.
const GUIDES_DIR = path.join(CONTENT, "inspections", "igmc-guides");
const guidesByFa = {};
if (fs.existsSync(GUIDES_DIR)) {
  for (const file of fs.readdirSync(GUIDES_DIR)) {
    if (!file.endsWith(".json") || file.startsWith(".") || file.startsWith("_")) continue;
    const raw = fs.readFileSync(path.join(GUIDES_DIR, file), "utf8");
    const data = JSON.parse(raw);
    const stem = file.replace(/\.json$/, "");
    guidesByFa[stem] = data;
  }
}
fs.writeFileSync(
  path.join(OUT, "inspector-guides.json"),
  JSON.stringify(guidesByFa, null, 2)
);
console.log(
  "[content-sync] inspector-guides: " +
    Object.keys(guidesByFa).length +
    " FAs"
);

// IGMC news payload. Single sidecar at content/inspections/igmc-news.json with
// MARADMIN list and FY25 Trends report URL. Emitted as-is to src/generated/
// so the IGMC index can render the Latest from IGMC strip without an MDX load.
const IGMC_NEWS_SRC = path.join(CONTENT, "inspections", "igmc-news.json");
if (fs.existsSync(IGMC_NEWS_SRC)) {
  const data = JSON.parse(fs.readFileSync(IGMC_NEWS_SRC, "utf8"));
  fs.writeFileSync(
    path.join(OUT, "igmc-news.json"),
    JSON.stringify(data, null, 2)
  );
  console.log(
    "[content-sync] igmc-news: " +
      (data.maradmins ? data.maradmins.length : 0) +
      " MARADMINs"
  );
}

// IGMC CoRE / CoRE+ taxonomy. Single sidecar with four buckets. The index
// renders this in an accordion. Items in each bucket are matched against the
// inspection catalog by title at runtime so present-in-catalog items link to
// detail pages and not-yet-shipped items render as plain text.
const MCAAT_RES_SRC = path.join(CONTENT, "inspections", "mcaat-resources.json");
if (fs.existsSync(MCAAT_RES_SRC)) {
  const data = JSON.parse(fs.readFileSync(MCAAT_RES_SRC, "utf8"));
  fs.writeFileSync(
    path.join(OUT, "mcaat-resources.json"),
    JSON.stringify(data, null, 2)
  );
  const sectionCount = data.sections ? Object.keys(data.sections).length : 0;
  console.log(
    "[content-sync] mcaat-resources: " + sectionCount + " sections"
  );
}
const IGMC_CORE_SRC = path.join(CONTENT, "inspections", "igmc-core-taxonomy.json");
if (fs.existsSync(IGMC_CORE_SRC)) {
  const data = JSON.parse(fs.readFileSync(IGMC_CORE_SRC, "utf8"));
  fs.writeFileSync(
    path.join(OUT, "igmc-core-taxonomy.json"),
    JSON.stringify(data, null, 2)
  );
  const totalItems = (data.buckets || []).reduce(
    (n, b) => n + (b.items ? b.items.length : 0),
    0
  );
  console.log(
    "[content-sync] igmc-core-taxonomy: " +
      (data.buckets ? data.buckets.length : 0) +
      " buckets, " +
      totalItems +
      " FAs"
  );
}

// Citations collection. Each MDX file under content/citations/ is one parent
// policy or authority document. Frontmatter validated against citationSchema.
// Alias uniqueness enforced across the collection. Emits a byId and byAlias
// index at src/generated/citations.json.
const CITATIONS_DIR = path.join(CONTENT, "citations");
let citationIndex = null;
if (fs.existsSync(CITATIONS_DIR)) {
  const citationFiles = fs
    .readdirSync(CITATIONS_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_") && !f.startsWith("."));
  const citations = [];
  for (const file of citationFiles) {
    const raw = fs.readFileSync(path.join(CITATIONS_DIR, file), "utf8");
    const parsed = matter(raw);
    const result = citationSchema.safeParse(parsed.data);
    if (!result.success) {
      const issues = result.error.issues
        .map((i) => "  " + i.path.join(".") + ": " + i.message)
        .join("\n");
      throw new Error(
        "[content-sync] Citation frontmatter failed validation in " +
          file +
          ":\n" +
          issues
      );
    }
    const filename = file.replace(/\.mdx$/, "");
    if (result.data.id !== filename) {
      throw new Error(
        "[content-sync] Citation id " +
          JSON.stringify(result.data.id) +
          " must match filename " +
          JSON.stringify(filename) +
          " in content/citations/" +
          file
      );
    }
    citations.push(result.data);
  }
  assertUniqueCitationAliases(citations);
  citationIndex = buildCitationIndex(citations);
  fs.writeFileSync(
    path.join(OUT, "citations.json"),
    JSON.stringify(citationIndex, null, 2)
  );
  console.log(
    "[content-sync] citations: " +
      citations.length +
      " entries, " +
      Object.keys(citationIndex.byAlias).length +
      " aliases"
  );
}

// Citation reverse index. Maps citation id to the list of pages that cite it.
// Walks every loaded MDX collection's references arrays plus inspection
// item-level references. Each entry runs through the same resolver as the
// runtime Citation component for parity.
if (citationIndex) {
  const reverse = {};
  for (const id of Object.keys(citationIndex.byId)) {
    reverse[id] = [];
  }
  let totalHits = 0;
  const dedupKey = new Set();
  function push(id, entry) {
    const key = id + "|" + entry.url;
    if (dedupKey.has(key)) return;
    dedupKey.add(key);
    reverse[id].push(entry);
    totalHits++;
  }
  function urlForAdmin(fm) {
    return "/admin/" + fm.unitType + "/" + fm.topic + "/" + fm.slug;
  }
  function urlForRole(role, fm) {
    return "/" + role + "/" + fm.topic + "/" + fm.slug;
  }
  function urlForPolicy(fm) {
    return "/policy/" + fm.slug;
  }
  function urlForSituation(fm) {
    return "/situations/" + fm.slug;
  }
  function urlForInspection(p) {
    return "/inspections/" + p.track + "/" + p.programNumber + "/" + p.slug;
  }
  let scanResolved = 0;
  let scanUnresolved = 0;
  function scanRefs(refs, payload) {
    if (!Array.isArray(refs)) return;
    for (const ref of refs) {
      const id = resolveReferenceToId(ref, citationIndex.byAlias);
      if (id && reverse[id]) {
        push(id, payload);
        scanResolved++;
      } else {
        scanUnresolved++;
      }
    }
  }
  for (const fm of loaded.admin) {
    const entry = { title: fm.title, url: urlForAdmin(fm), collection: "admin" };
    scanRefs(fm.references, entry);
    if (fm.sourcePolicy) scanRefs([fm.sourcePolicy], entry);
  }
  for (const fm of loaded.marines) {
    const entry = { title: fm.title, url: urlForRole("marines", fm), collection: "marines" };
    scanRefs(fm.references, entry);
    if (fm.sourcePolicy) scanRefs([fm.sourcePolicy], entry);
  }
  for (const fm of loaded.leader) {
    const entry = { title: fm.title, url: urlForRole("leader", fm), collection: "leader" };
    scanRefs(fm.references, entry);
    if (fm.sourcePolicy) scanRefs([fm.sourcePolicy], entry);
  }
  for (const fm of loaded.commander) {
    const entry = { title: fm.title, url: urlForRole("commander", fm), collection: "commander" };
    scanRefs(fm.references, entry);
    if (fm.sourcePolicy) scanRefs([fm.sourcePolicy], entry);
  }
  for (const fm of loaded.policies) {
    const entry = { title: fm.title, url: urlForPolicy(fm), collection: "policies" };
    if (fm.source && fm.source.title) scanRefs([fm.source.title], entry);
  }
  for (const fm of loaded.situations) {
    const entry = { title: fm.title, url: urlForSituation(fm), collection: "situations" };
    scanRefs(fm.relatedPolicies, entry);
  }
  for (const program of inspections) {
    const entry = {
      title: program.title,
      url: urlForInspection(program),
      collection: "inspections",
    };
    for (const sub of program.subsections || []) {
      for (const item of sub.items || []) {
        scanRefs(item.references, entry);
      }
    }
  }
  for (const id of Object.keys(reverse)) {
    reverse[id].sort((a, b) => a.title.localeCompare(b.title));
  }
  fs.writeFileSync(
    path.join(OUT, "citations-reverse.json"),
    JSON.stringify(reverse, null, 2)
  );
  console.log(
    "[content-sync] citations-reverse: " +
      totalHits +
      " page-citation links across " +
      Object.keys(reverse).length +
      " citations"
  );
  const totalScanned = scanResolved + scanUnresolved;
  const coverage = totalScanned > 0
    ? ((scanResolved / totalScanned) * 100).toFixed(1)
    : "0.0";
  if (scanUnresolved > 0) {
    console.warn(
      "[content-sync] WARN citations coverage " +
        coverage +
        "%. " +
        scanResolved +
        " of " +
        totalScanned +
        " references resolved. " +
        scanUnresolved +
        " unresolved. Run scripts/citations-audit.py for detail."
    );
  } else if (totalScanned > 0) {
    console.log(
      "[content-sync] citations coverage 100%. " +
        totalScanned +
        " references resolved."
    );
  }
}

// ---------------------------------------------------------------------------
// Client search index. Slim records only, so the full catalogs stay out of
// the client bundle. Consumed by src/components/domain/client-search.tsx.
// One record per page across the four role collections.
// ---------------------------------------------------------------------------
{
  // Lowercase, tokenize, and dedupe. Citations repeat the same order numbers
  // across references, so unique tokens cut the index size with no loss for
  // per-term substring matching.
  const joinLower = (arr) =>
    Array.isArray(arr)
      ? [...new Set(arr.join(" ").toLowerCase().split(/\s+/))].join(" ")
      : "";
  const searchIndex = [];
  for (const e of loaded.admin) {
    const badges = [];
    if (e.unitType) badges.push(String(e.unitType).toUpperCase());
    if (e.function) badges.push(e.function);
    if (e.skillLevel) badges.push("L" + e.skillLevel);
    if (e.trEventCode) badges.push(e.trEventCode);
    searchIndex.push({
      title: e.title,
      url: "/admin/" + e.unitType + "/" + e.topic + "/" + e.slug,
      summary: e.summary ?? "",
      category: "Admin",
      badges,
      roles: e.roles ?? [],
      slug: e.slug,
      topic: e.topic ?? "",
      tr: e.trEventCode ?? "",
      policy: e.sourcePolicy ?? "",
      refs: joinLower(e.references),
      mos: joinLower(e.mosPerforming),
    });
  }
  const roleEntry = (e, category, url) => ({
    title: e.title,
    url,
    summary: e.summary ?? "",
    category,
    badges: e.topic ? [e.topic] : [],
    roles: e.roles ?? [],
    slug: e.slug,
    topic: e.topic ?? "",
    tr: "",
    policy: e.sourcePolicy ?? "",
    refs: joinLower(e.references),
    mos: "",
  });
  for (const e of loaded.marines) {
    // Leaves under parent groups carry topic equal to slug. The
    // single-segment route /marines/[slug] handles them.
    const url =
      !e.topic || e.topic === e.slug
        ? "/marines/" + e.slug
        : "/marines/" + e.topic + "/" + e.slug;
    searchIndex.push(roleEntry(e, "Marines", url));
  }
  for (const e of loaded.leader) {
    searchIndex.push(
      roleEntry(e, "Leader", "/leader/" + e.topic + "/" + e.slug)
    );
  }
  for (const e of loaded.commander) {
    searchIndex.push(
      roleEntry(e, "Commander", "/commander/" + e.topic + "/" + e.slug)
    );
  }
  fs.writeFileSync(
    path.join(OUT, "search-index.json"),
    JSON.stringify(searchIndex)
  );
  console.log(
    "[content-sync] search-index: " + searchIndex.length + " entries"
  );
}

// ---------------------------------------------------------------------------
// Role navigation trees. Delegates to scripts/generate-role-nav.mjs, which
// imports the TS label registries via Node type stripping. On Node 22.18+
// the direct import works. On Node 22.6 through 22.17 the .ts import fails,
// so the generator re-runs as a child process under
// --experimental-strip-types. Below Node 22.6 both paths fail loudly.
// ---------------------------------------------------------------------------
try {
  await import("./generate-role-nav.mjs");
} catch (err) {
  const generator = path.join(ROOT, "scripts", "generate-role-nav.mjs");
  const result = spawnSync(
    process.execPath,
    ["--experimental-strip-types", generator],
    { stdio: "inherit" }
  );
  if (result.status !== 0) {
    console.error(
      "[content-sync] FATAL role-nav generation failed twice. Direct import " +
        "error: " +
        (err && err.message ? err.message : String(err)) +
        ". Fallback under --experimental-strip-types also failed. Node 22.6 " +
        "or newer is required. Current version: " +
        process.version
    );
    process.exit(1);
  }
}
