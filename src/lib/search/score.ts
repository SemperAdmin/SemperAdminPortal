/**
 * Shared ranking for the static search index. /search and the command
 * palette score through this one module so both surfaces return the same
 * order for the same query.
 */

/**
 * Slim search record emitted by scripts/sync-content.mjs. One per page
 * across the marine, leader, commander, and admin collections. Full
 * catalogs stay out of the client bundle.
 */
export interface IndexEntry {
  title: string;
  url: string;
  summary: string;
  category: string;
  badges: string[];
  roles: string[];
  slug: string;
  topic: string;
  tr: string;
  policy: string;
  refs: string;
  mos: string;
  /**
   * Spoken-term synonyms for the page, built at sync time from
   * scripts/search-synonyms.mjs. Lets "SMCR" and "drill" find pages titled
   * "SELRES" and "IDT". Scored below summary so a synonym never outranks a
   * direct match.
   */
  alias: string;
}

export interface SearchResult {
  title: string;
  url: string;
  summary: string;
  category: string;
  badges: string[];
  score: number;
}

/** Minimum trimmed query length before any scoring runs. */
export const MIN_QUERY_LENGTH = 2;

/** Score boost for pages tagged with the user's active role. */
const ACTIVE_ROLE_BOOST = 25;

function scoreEntry(
  entry: IndexEntry,
  q: string,
  activeRole: string | null
): number {
  const query = q.toLowerCase().trim();
  if (!query) return 0;
  const terms = query.split(/\s+/).filter(Boolean);

  let score = 0;
  const title = entry.title.toLowerCase();
  const summary = entry.summary.toLowerCase();
  const slug = entry.slug.toLowerCase();
  const topic = entry.topic.toLowerCase();
  const tr = entry.tr.toLowerCase();
  const policy = entry.policy.toLowerCase();

  for (const term of terms) {
    if (title.includes(term)) score += 100;
    if (slug.includes(term)) score += 80;
    if (topic.includes(term)) score += 50;
    if (summary.includes(term)) score += 40;
    if (tr.includes(term)) score += 60;
    if (policy.includes(term)) score += 50;
    if (entry.refs.includes(term)) score += 30;
    if (entry.mos.includes(term)) score += 30;
    if (entry.alias.includes(term)) score += 20;
  }
  if (score === 0) return 0;

  // Boost exact matches
  if (title === query) score += 200;
  if (slug === query) score += 200;

  // Active-role pages rank ahead of cross-role matches at equal relevance.
  if (activeRole && entry.roles.includes(activeRole))
    score += ACTIVE_ROLE_BOOST;

  return score;
}

export function searchEntries(
  index: IndexEntry[],
  query: string,
  activeRole: string | null,
  limit = 50
): SearchResult[] {
  if (!query || query.trim().length < MIN_QUERY_LENGTH) return [];

  const results: SearchResult[] = [];
  for (const entry of index) {
    const score = scoreEntry(entry, query, activeRole);
    if (score === 0) continue;
    results.push({
      title: entry.title,
      url: entry.url,
      summary: entry.summary,
      category: entry.category,
      badges: entry.badges,
      score,
    });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}

let indexPromise: Promise<IndexEntry[]> | null = null;

/**
 * Lazy loader for surfaces mounted on every page, such as the command
 * palette. The index runs near 700 KB, so it loads on first use instead of
 * riding in the shared layout bundle.
 */
export function loadSearchIndex(): Promise<IndexEntry[]> {
  indexPromise ??= import("@/generated/search-index.json").then(
    (mod) => mod.default as IndexEntry[]
  );
  return indexPromise;
}
