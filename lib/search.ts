import { SECTIONS, LEADER_SECTIONS, ADMIN_ONLY_SECTIONS } from "../data/sections";

export type SearchResult = {
  title: string;
  description: string;
  href: string;
  section: string;
  sectionSlug: string;
  category: "general" | "leaders" | "admin";
  keywords?: string[];
};

/**
 * Build a searchable index from all sections data.
 * Categorizes results by role type for better organization.
 */
export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const [sectionSlug, section] of Object.entries(SECTIONS)) {
    if (!section.groups) continue;

    // Determine the category and base role for URLs
    let category: "general" | "leaders" | "admin";
    let baseRole: string;

    if (LEADER_SECTIONS.has(sectionSlug)) {
      category = "leaders";
      baseRole = "leaders";
    } else if (ADMIN_ONLY_SECTIONS.has(sectionSlug)) {
      category = "admin";
      baseRole = "administrators";
    } else {
      category = "general";
      baseRole = "marines";
    }

    for (const group of section.groups) {
      for (const item of group.items) {
        if (!item.slug) continue;

        results.push({
          title: item.title,
          description: item.desc,
          href: `/roles/${baseRole}/${sectionSlug}/${item.slug}`,
          section: section.title,
          sectionSlug,
          category,
          keywords: extractKeywords(item.title, item.desc),
        });
      }
    }
  }

  return results;
}

/**
 * Extract keywords from title and description for better matching.
 */
function extractKeywords(title: string, desc: string): string[] {
  const text = `${title} ${desc}`.toLowerCase();
  // Common military/admin terms to boost
  const boostTerms = [
    "bah", "bas", "pcs", "tad", "leave", "pay", "orders", "jepes",
    "fitness", "report", "promotion", "award", "counseling", "mctfs",
    "mol", "deers", "tricare", "sgli", "tsp", "retirement", "separation",
    "deployment", "efmp", "marriage", "divorce", "dependent", "travel",
  ];

  return boostTerms.filter(term => text.includes(term));
}

/**
 * Search the index with a query string.
 * Returns results sorted by relevance.
 */
export function search(query: string, index: SearchResult[], limit = 10): SearchResult[] {
  if (!query || query.length < 2) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);

  // Score each result
  const scored = index.map(result => {
    let score = 0;
    const titleLower = result.title.toLowerCase();
    const descLower = result.description.toLowerCase();
    const sectionLower = result.section.toLowerCase();

    // Exact title match (highest priority)
    if (titleLower === normalizedQuery) {
      score += 100;
    }
    // Title starts with query
    else if (titleLower.startsWith(normalizedQuery)) {
      score += 50;
    }
    // Title contains query
    else if (titleLower.includes(normalizedQuery)) {
      score += 30;
    }

    // Word-by-word matching
    for (const word of queryWords) {
      if (word.length < 2) continue;

      if (titleLower.includes(word)) {
        score += 20;
      }
      if (descLower.includes(word)) {
        score += 10;
      }
      if (sectionLower.includes(word)) {
        score += 5;
      }
      if (result.keywords?.includes(word)) {
        score += 15;
      }
    }

    // Acronym matching (e.g., "bah" matches "Basic Allowance for Housing")
    const acronym = titleLower
      .split(/\s+/)
      .map(w => w[0])
      .join("");
    if (acronym === normalizedQuery) {
      score += 40;
    }

    return { result, score };
  });

  // Filter and sort by score
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.result);
}

// Pre-built search index (built once, reused)
let cachedIndex: SearchResult[] | null = null;

export function getSearchIndex(): SearchResult[] {
  if (!cachedIndex) {
    cachedIndex = buildSearchIndex();
  }
  return cachedIndex;
}
