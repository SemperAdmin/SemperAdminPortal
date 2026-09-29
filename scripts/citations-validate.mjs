// Build-time validator for the citations collection.
//
// Mirrors src/lib/content/schemas.ts citationSchema and the runtime resolver
// at src/lib/references/resolve.ts. Three definitions live in sync. The TS
// schema drives compile-time types for application code. The TS resolver
// powers runtime lookups. This JS module runs at content-sync time without
// a TS toolchain. Update all three on any field change.
// PAA added to CITATION_TYPES 2026-05-22.

import { z } from "zod";

const ROLES = ["marine", "leader", "commander", "admin"];
const ROLE_ENUM = z.enum(ROLES);

const CITATION_TYPES = [
  "MCO",
  "MARADMIN",
  "PAA",
  "PAAN",
  "ALMAR",
  "ALNAV",
  "NAVMC",
  "DODFMR",
  "DODI",
  "DODD",
  "DODM",
  "SECNAV",
  "SECNAVINST",
  "JAGINST",
  "FPM",
  "MCTFSPRIUM",
  "DD-FORM",
  "NAVMC-FORM",
  "FAC",
  "USC",
  "CFR",
  "MCBUL",
  "OTHER",
];

export const citationSchema = z.object({
  id: z
    .string()
    .min(1)
    .regex(
      /^[a-z0-9-]+$/,
      "Citation id must be lowercase letters, digits, and hyphens"
    ),
  aliases: z.array(z.string().min(1)).min(1),
  title: z.string().min(2),
  type: z.enum(CITATION_TYPES),
  number: z.string().min(1),
  publisher: z.string().min(2),
  effectiveDate: z.string().optional(),
  lastVerified: z.string(),
  externalUrl: z.string().url().optional(),
  gatedSource: z.boolean().default(false),
  supersedes: z.array(z.string()).default([]),
  roles: z.array(ROLE_ENUM).min(1),
  hidden: z.boolean().default(false),
});

export function normalizeCitationAlias(input) {
  return String(input)
    .toUpperCase()
    .replace(
      /\b(VOL|VOLS|CH|CHAP|CHAPTER|SEC|SECT|SECTION|PAR|PARA|PARAGRAPH|ENCL|ENCLOSURE|APP|APPENDIX|ART|ARTICLE)\./g,
      "$1 "
    )
    .replace(/,/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Order and instruction series revise by trailing letter. MCO 1500.59,
// MCO 1500.59A, and a future MCO 1500.59B name one document series. DODI,
// MARADMIN, USC, and forms carry no letter revision and stay literal, so
// DODI 1332.30 never collapses.
const REVISION_GATED = new Set([
  "MCO",
  "SECNAVINST",
  "OPNAVINST",
  "MCBUL",
  "NAVMCDIR",
  "JAGINST",
]);

// Collapses the trailing revision letter of a normalized key to a single
// base slot. A number ending in a digit gains the same slot. Embedded
// letters survive, so MCO 1001R.1L and MCO 1001R.1 both become MCO 1001R.1_.
// Returns the key unchanged when the type is not revision-gated.
export function collapseRevision(key) {
  const parts = key.split(" ");
  if (parts.length < 2 || !REVISION_GATED.has(parts[0])) return key;
  const num = parts[1];
  if (/^P?\d[\dA-Z.\-/]*[A-Z]$/.test(num)) {
    parts[1] = num.slice(0, -1) + "_";
  } else if (/^P?\d[\dA-Z.\-/]*\d$/.test(num)) {
    parts[1] = num + "_";
  } else {
    return key;
  }
  return parts.join(" ");
}

// Revision letter as a rank. A bare number ranks 0, A ranks 1, B ranks 2.
function revisionRank(key) {
  const num = key.split(" ")[1] || "";
  const last = num.slice(-1);
  return /[A-Z]/.test(last) ? last.charCodeAt(0) - 64 : 0;
}

export function assertUniqueCitationAliases(items) {
  const owners = new Map();
  for (const item of items) {
    for (const raw of item.aliases) {
      const key = normalizeCitationAlias(raw);
      const prior = owners.get(key);
      if (prior && prior.id !== item.id) {
        throw new Error(
          "Duplicate citation alias " +
            JSON.stringify(raw) +
            " claimed by both " +
            prior.id +
            " and " +
            item.id +
            ". Resolve in content/citations/."
        );
      }
      owners.set(key, { id: item.id, raw });
    }
  }
}

// byAlias holds exact keys and stays unique. byBase is the revision wildcard
// fallback. Several entries share a base when the registry carries more than
// one revision of a series, so the base goes to the visible entry with the
// highest revision letter. Ties keep the first entry seen.
export function buildCitationIndex(items) {
  const byId = {};
  const byAlias = {};
  const byBase = {};
  const baseScore = {};
  for (const item of items) {
    byId[item.id] = item;
    for (const raw of item.aliases) {
      const key = normalizeCitationAlias(raw);
      byAlias[key] = item.id;
      const base = collapseRevision(key);
      if (base === key) continue;
      const score = (item.hidden ? 0 : 100) + revisionRank(key);
      if (!(base in baseScore) || score > baseScore[base]) {
        baseScore[base] = score;
        byBase[base] = item.id;
      }
    }
  }
  return { byId, byAlias, byBase };
}

// One candidate against the index. Exact alias first, revision wildcard second.
function lookupCandidate(candidate, index) {
  const key = normalizeCitationAlias(candidate);
  return index.byAlias[key] || index.byBase[collapseRevision(key)] || null;
}

// Mirror of generateLookupCandidates in src/lib/references/resolve.ts.
// Produces progressively coarser lookup candidates so the resolver matches
// author-written strings that wrap a parent doc in section, paragraph,
// chapter, enclosure, or parenthetical suffix metadata.
export function generateLookupCandidates(input) {
  const trimmed = String(input).trim();
  const out = [];
  const seen = new Set();
  function push(value) {
    const clean = String(value).replace(/[,\s]+$/, "").trim();
    if (clean && !seen.has(clean)) {
      seen.add(clean);
      out.push(clean);
    }
  }
  push(trimmed);
  push(trimmed.replace(/\s*\([^)]*\).*$/, ""));
  push(
    trimmed.split(
      /\s*,?\s*(?:par(?:a(?:graph)?)?\.?|sect(?:ion)?\.?|art(?:icle)?\.?)\s/i
    )[0] || ""
  );
  push(trimmed.split(/\s*,?\s*\bch(?:ap(?:ter)?)?\.?\s/i)[0] || "");
  push(trimmed.split(/\s*,?\s*encl(?:osure)?\.?\s/i)[0] || "");
  push(trimmed.split(",")[0] || "");
  // Sentence cut. Keyword periods (Vol., Ch., Sec.) convert to spaces first
  // so the split lands on the sentence boundary, not the abbreviation.
  push(
    trimmed
      .replace(
        /\b(Vol|Vols|Ch|Chap|Chapter|Sec|Sect|Section|Par|Para|Paragraph|Encl|Enclosure|App|Appendix|Art|Article)\./gi,
        "$1 "
      )
      .split(/\.\s/)[0] || ""
  );
  // Four-token and three-token head cuts. Volume-level cites with a trailing
  // subject resolve to the volume entry before the two-token parent cut.
  push(trimmed.split(/\s+/).slice(0, 4).join(" "));
  push(trimmed.split(/\s+/).slice(0, 3).join(" "));
  push(trimmed.split(/\s+/).slice(0, 2).join(" "));
  // First single token. Catches standalone-acronym docs (MCTFSPRIUM, JTR, MCM)
  // suffixed with a section number.
  push(trimmed.split(/\s+/)[0] || "");
  return out;
}

// A segment opens a new document when it starts with one of these types.
const DOC_TYPE_START =
  /^(?:MCO|MCBUL|NAVMC|NAVMCDIR|SECNAVINST|SECNAV|OPNAVINST|OPNAV|JAGINST|DODI|DODD|DODM|DOD ?FMR|DD ?FORM|MARADMIN|ALMAR|ALNAV|NAVADMIN|JTR|FPM|MCTFSPRIUM|PAAN|PAA|\d+ U\.?S\.?C|\d+ CFR)\b/i;
const COMPOUND_BOUNDARY = /\s*[;,&]\s*(?:and\s+)?|\s+and\s+/gi;

// Mirror of splitCompoundReference in src/lib/references/resolve.ts.
// Splits "DoDI 1000.04, 3.1.b(1), MCO 1742.1C, par 4b" into one segment per
// document. A boundary counts only when the next text opens with a document
// type and the boundary sits outside parentheses, so "MCO 5800.16, Vol. 8"
// and "Ch. 5, 6, 7" stay whole. Each segment keeps its tail for the
// candidate cuts. Authored reference text never changes.
export function splitCompoundReference(input) {
  const text = String(input).trim();
  const parts = [];
  const boundary = new RegExp(COMPOUND_BOUNDARY.source, "gi");
  let start = 0;
  let match;
  while ((match = boundary.exec(text)) !== null) {
    const end = match.index + match[0].length;
    if (!DOC_TYPE_START.test(text.slice(end))) continue;
    const before = text.slice(0, match.index);
    const depth = (before.match(/\(/g) || []).length - (before.match(/\)/g) || []).length;
    if (depth > 0) continue;
    const segment = text.slice(start, match.index).trim();
    if (segment) parts.push(segment);
    start = end;
  }
  const tail = text.slice(start).trim();
  if (tail) parts.push(tail);
  return parts.length > 0 ? parts : [text];
}

function resolveSingleToId(input, index) {
  for (const candidate of generateLookupCandidates(input)) {
    const id = lookupCandidate(candidate, index);
    if (id) return id;
  }
  return null;
}

// Resolves each document segment of a raw reference string. Returns one
// entry per segment, the citation id or null, in authored order. Used at
// build time for the reverse index of citing pages and the coverage count.
export function resolveReferenceSegments(input, index) {
  if (!input) return [];
  return splitCompoundReference(input).map((part) => resolveSingleToId(part, index));
}
