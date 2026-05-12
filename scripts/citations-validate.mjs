// Build-time validator for the citations collection.
//
// Mirrors src/lib/content/schemas.ts citationSchema and the runtime resolver
// at src/lib/references/resolve.ts. Three definitions live in sync. The TS
// schema drives compile-time types for application code. The TS resolver
// powers runtime lookups. This JS module runs at content-sync time without
// a TS toolchain. Update all three on any field change.

import { z } from "zod";

const ROLES = ["marine", "leader", "commander", "admin"];
const ROLE_ENUM = z.enum(ROLES);

const CITATION_TYPES = [
  "MCO",
  "MARADMIN",
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

export function buildCitationIndex(items) {
  const byId = {};
  const byAlias = {};
  for (const item of items) {
    byId[item.id] = item;
    for (const raw of item.aliases) {
      byAlias[normalizeCitationAlias(raw)] = item.id;
    }
  }
  return { byId, byAlias };
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
  push(trimmed.split(/\s+/).slice(0, 2).join(" "));
  // First single token. Catches standalone-acronym docs (MCTFSPRIUM, JTR, MCM)
  // suffixed with a section number.
  push(trimmed.split(/\s+/)[0] || "");
  return out;
}

// Resolves a raw reference string to a citation id, or null. Used at build
// time to compute the reverse index of citing pages per citation.
export function resolveReferenceToId(input, byAlias) {
  if (!input) return null;
  for (const candidate of generateLookupCandidates(input)) {
    const id = byAlias[normalizeCitationAlias(candidate)];
    if (id) return id;
  }
  return null;
}
