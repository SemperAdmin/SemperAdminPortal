// Spoken-term synonyms for the client search index.
//
// The portal titles content with policy vocabulary. Marines search with the
// words they say out loud. SELRES is correct per MCRAMM. Nobody types it.
// This table bridges the two without changing a single page title.
//
// Each key is a trigger token. When a page's indexed text (title, summary,
// topic, slug, source policy) contains the trigger, sync-content.mjs appends
// the listed aliases to that page's `alias` field. The client search scores
// `alias` below `summary`, so a synonym hit never outranks a direct title or
// summary match.
//
// Build-time only, so this lives in scripts/ alongside citations-validate.mjs
// rather than src/lib/. sync-content.mjs runs as plain node with no type
// stripping and cannot import a .ts module.
//
// Rules for adding entries.
//
// - Keys and values stay lowercase. The sync script lowercases before matching.
// - Keys must be specific enough to avoid false positives. Bare "at" and "ad"
//   would fire on nearly every page. Use them only inside longer keys.
// - Aliases name the same thing. They are not related-topic suggestions.
//   Cross-topic discovery belongs in CrossRoleStrip, not here.
// - An alias wrong on some pages does not belong in the table. Tighten the
//   trigger instead of accepting the false positives.

export const SEARCH_SYNONYMS = {
  // Reserve component vocabulary. SELRES is the policy term. SMCR and
  // "the Reserves" are what Marines say. SELRES is broader than SMCR, which
  // is why the smcr entry does not claim the two are interchangeable.
  selres: [
    "smcr",
    "selected marine corps reserve",
    "selected reserve",
    "reserves",
    "reservist",
    "drilling reserve",
    "drilling",
  ],
  smcr: ["selres", "selected reserve", "reserves", "reservist"],
  irr: ["individual ready reserve", "non-drilling", "reserves", "reservist"],
  "standby reserve": ["standby", "reserves", "reservist"],
  usmcr: ["marine corps reserve", "reserves", "reserve component"],
  "active reserve": ["ar marine", "full time support", "fts", "selres"],
  ima: ["individual mobilization augmentee", "selres"],

  // Drill and training vocabulary.
  idt: ["drill", "drill weekend", "inactive duty training", "battle assembly"],
  "annual training": ["at", "two week", "summer camp", "adt"],
  adt: ["active duty for training", "annual training", "orders"],
  mobilization: ["mob", "activation", "recall", "title 10"],
  demobilization: ["demob", "deactivation", "release from active duty"],
};

// Triggers match on whole words only. Plain substring matching fires "ima" on
// primary, reprimand, approximately, and imagery, which tagged 32 unrelated
// pages with Reserve aliases. Short acronym triggers require the boundary.
const TRIGGER_PATTERNS = Object.entries(SEARCH_SYNONYMS).map(
  ([trigger, aliases]) => [
    new RegExp(`\\b${trigger.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`),
    aliases,
  ]
);

/**
 * Returns the deduped alias token string for one indexed page.
 * `haystack` is the page's already-lowercased title, summary, topic, slug,
 * and source policy joined together.
 */
export function aliasesFor(haystack) {
  const out = new Set();
  for (const [pattern, aliases] of TRIGGER_PATTERNS) {
    if (!pattern.test(haystack)) continue;
    for (const a of aliases) out.add(a);
  }
  return [...out].join(" ");
}
