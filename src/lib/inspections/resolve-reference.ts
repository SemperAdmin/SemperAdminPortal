/**
 * @deprecated Use src/lib/references/resolve.ts instead.
 *
 * Legacy inspection-only resolver. Returns a URL string from the 68k-alias
 * manifest at content/inspections/_reference-links.json. The new resolver
 * returns a Citation record, supports the full citation registry, and
 * powers the /citations/[id] detail routes.
 *
 * This module remains in place as a fallback URL source. ReferencePill
 * tries the new resolver first, falls back here when no citation record
 * exists yet. As the citations registry grows (see scripts/citations-import.py
 * and content/citations/), the fallback path shrinks. Plan a hard removal
 * once registry coverage crosses an agreed threshold (target 80 percent
 * of inspection references).
 *
 * Resolves an inspection reference string to a URL via the build-time
 * policy index. Tries the full string first, then progressively normalizes:
 * strip section/paragraph suffix, strip revision letter, common punctuation
 * variations. Returns the first URL found or null.
 *
 * The lookup table at content/inspections/_reference-links.json is keyed
 * by uppercased canonical document identifiers.
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const LINKS = require("@/generated/reference-links.json") as Record<
  string,
  string
>;

function normalize(s: string): string {
  return s
    .replace(/’/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

/**
 * Pull the canonical document identifier from a reference string.
 * Examples:
 *   "MCO 5210.11F, par 4b(5)(a)"     -> "MCO 5210.11F"
 *   "DODFMR Vol. 7A, Chap 26, par."  -> "DODFMR Vol. 7A, Chap 26"
 *   "MARADMIN 022/25"                -> "MARADMIN 022/25"
 */
function extractDocHead(ref: string): string[] {
  const trimmed = ref.trim();
  const candidates: string[] = [trimmed];

  // First chunk up to "par", "para", "paragraph", "sect", "section"
  const sectionCut = trimmed.split(
    /\s*,?\s*(?:par(?:a(?:graph)?)?\.?|sect(?:ion)?\.?)\s/i
  )[0];
  if (sectionCut && sectionCut !== trimmed) {
    candidates.push(sectionCut.replace(/,\s*$/, "").trim());
  }

  // First chunk before first comma
  const commaCut = trimmed.split(",")[0]?.trim();
  if (commaCut && !candidates.includes(commaCut)) {
    candidates.push(commaCut);
  }

  // First two whitespace-separated tokens (e.g., "MCO 5210.11F")
  const headWords = trimmed.split(/\s+/).slice(0, 2).join(" ");
  if (headWords && !candidates.includes(headWords)) {
    candidates.push(headWords);
  }

  // Strip trailing revision letter to surface the base form
  // (e.g., "MCO 5210.11F" -> "MCO 5210.11")
  const stripped = headWords.replace(/[A-Z](?:\s+CH\s+\d+)?$/i, "").trim();
  if (stripped && !candidates.includes(stripped)) {
    candidates.push(stripped);
  }

  return candidates;
}

export function resolveReference(ref: string): string | null {
  if (!ref) return null;
  for (const cand of extractDocHead(ref)) {
    const key = normalize(cand);
    if (LINKS[key]) return LINKS[key];
  }
  return null;
}
