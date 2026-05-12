/**
 * Citation registry resolver.
 *
 * Reads the build-time registry at src/generated/citations.json and exposes
 * lookups for the runtime resolver layer. Phase 2 of the centralized citations
 * project. Replaces direct manifest lookups for surfaces wired through this
 * module. The legacy inspections resolver at src/lib/inspections/resolve-reference
 * remains in place as a fallback URL source until Phase 5 deprecation.
 *
 * Resolver contract.
 *   resolveReference(input) returns the Citation record for any author-written
 *   reference string that normalizes to a registered alias, or null.
 *   getCitationById(id) returns the record keyed by canonical id, or null.
 *
 * Normalization. Uppercases, collapses runs of whitespace, strips trailing
 * chapter, section, paragraph metadata, parenthetical commentary, and the
 * comma-prefixed tail that authors append for context. Each candidate form is
 * tried in turn against the registry alias map.
 */

import citationIndex from "@/generated/citations.json";
import type { Citation } from "@/lib/content/schemas";

interface CitationIndexShape {
  byId: Record<string, Citation>;
  byAlias: Record<string, string>;
}

const INDEX = citationIndex as CitationIndexShape;

/**
 * Mirror of normalizeCitationAlias in src/lib/content/schemas.ts and
 * scripts/citations-validate.mjs. Keep the three in lockstep. The runtime
 * resolver composes this with section-suffix stripping for author input.
 */
function normalize(input: string): string {
  return input
    .toUpperCase()
    .replace(
      /\b(VOL|VOLS|CH|CHAP|CHAPTER|SEC|SECT|SECTION|PAR|PARA|PARAGRAPH|ENCL|ENCLOSURE|APP|APPENDIX|ART|ARTICLE)\./g,
      "$1 "
    )
    .replace(/,/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Generates progressively coarser lookup candidates from a raw reference
 * string. The author writes one of many forms. The resolver tries each
 * candidate against the alias map and returns the first match.
 *
 * Examples.
 *   "MCO 5800.16, Vol. 8 Para 4b"      -> ["MCO 5800.16, Vol. 8 Para 4b",
 *                                          "MCO 5800.16, Vol. 8",
 *                                          "MCO 5800.16"]
 *   "DODFMR Vol. 7A Chap 26 par 5"     -> ["DODFMR Vol. 7A Chap 26 par 5",
 *                                          "DODFMR Vol. 7A Chap 26",
 *                                          "DODFMR Vol. 7A"]
 *   "MARADMIN 022/25 (subject line)"   -> ["MARADMIN 022/25 (subject line)",
 *                                          "MARADMIN 022/25"]
 */
function generateLookupCandidates(input: string): string[] {
  const trimmed = input.trim();
  const candidates: string[] = [];
  const seen = new Set<string>();

  const push = (value: string): void => {
    const clean = value.replace(/[,\s]+$/, "").trim();
    if (clean && !seen.has(clean)) {
      seen.add(clean);
      candidates.push(clean);
    }
  };

  push(trimmed);

  // Strip parenthetical metadata. "MARADMIN 022/25 (subject)" -> "MARADMIN 022/25".
  push(trimmed.replace(/\s*\([^)]*\).*$/, ""));

  // Strip the paragraph or section suffix and everything after it.
  const sectionCut = trimmed.split(
    /\s*,?\s*(?:par(?:a(?:graph)?)?\.?|sect(?:ion)?\.?|art(?:icle)?\.?)\s/i
  )[0];
  push(sectionCut ?? "");

  // Strip the chapter suffix and everything after it. Matches "ch", "chap",
  // "chapter" (each optionally with a trailing period) as a word boundary.
  const chapterCut = trimmed.split(/\s*,?\s*\bch(?:ap(?:ter)?)?\.?\s/i)[0];
  push(chapterCut ?? "");

  // Strip the enclosure suffix.
  const enclosureCut = trimmed.split(/\s*,?\s*encl(?:osure)?\.?\s/i)[0];
  push(enclosureCut ?? "");

  // Comma-separated tail. "MCO 5800.16, Vol. 8" stays. "MCO 5800.16, par. 4" splits.
  // The earlier cuts handle paragraph and chapter. The plain comma cut catches the
  // residual case of trailing free-text commentary.
  const commaCut = trimmed.split(",")[0];
  push(commaCut ?? "");

  // First two whitespace tokens. Catches "MCO 5210.11F MCRAMM Chapter 3".
  const headWords = trimmed.split(/\s+/).slice(0, 2).join(" ");
  push(headWords);

  // First single token. Catches standalone-acronym docs like MCTFSPRIUM,
  // JTR, MCM, MCRAMM, LSAM, IRAM that authors suffix with a section number.
  const firstToken = trimmed.split(/\s+/)[0];
  push(firstToken ?? "");

  return candidates;
}

/**
 * Resolves a reference string to the matching Citation record.
 *
 * Returns null when no candidate form matches a registered alias. The caller
 * decides what to do with a miss. The Citation component renders a plain
 * chip. ReferencePill falls back to the legacy manifest URL.
 */
export function resolveReference(input: string | null | undefined): Citation | null {
  if (!input) return null;
  for (const candidate of generateLookupCandidates(input)) {
    const key = normalize(candidate);
    const id = INDEX.byAlias[key];
    if (id) {
      const record = INDEX.byId[id];
      if (record) return record;
    }
  }
  return null;
}

/**
 * Returns the Citation record keyed by canonical id, or null. Use this for
 * SourceCitation enrichment and any surface that already carries the id.
 */
export function getCitationById(id: string | null | undefined): Citation | null {
  if (!id) return null;
  return INDEX.byId[id] ?? null;
}

/**
 * Returns the full set of citation ids registered in the index. Use this
 * sparingly. Pagefind and similar surfaces should iterate Object.values
 * directly to avoid an extra Map allocation.
 */
export function listCitationIds(): string[] {
  return Object.keys(INDEX.byId);
}

/**
 * Returns the in-memory registry. Exported for the citations index page and
 * the reverse-index builder that lands in Phase 3.
 */
export function getCitationIndex(): CitationIndexShape {
  return INDEX;
}
