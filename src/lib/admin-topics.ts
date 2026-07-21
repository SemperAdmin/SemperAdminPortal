/**
 * Shared admin navigation vocabulary.
 *
 * Single source for unit-type labels and topic label formatting. Consumed by
 * the admin route pages and by the role-nav generator in
 * scripts/sync-content.mjs, which imports this file directly under Node type
 * stripping. Keep this module dependency-free and erasable-syntax-only.
 */

/** Unit types in sidebar and landing-page display order. */
export const UNIT_NAV_ORDER = ["s1-g1", "i-and-i", "pac"] as const;

export const UNIT_LABELS: Record<string, string> = {
  "s1-g1": "S-1 / G-1",
  "i-and-i": "I&I Staff",
  pac: "PAC (IPAC)",
};

/**
 * Topic slugs whose display label is not a simple title-cased slug.
 * Acronyms stay acronyms. Program names expand.
 */
export const TOPIC_LABEL_OVERRIDES: Record<string, string> = {
  dts: "Defense Travel System",
  gtccp: "Government Travel Charge Card Program",
  gtcc: "Government Travel Charge Card",
  pes: "Performance Evaluation System",
  iram: "Individual Records Administration Manual",
  jagman: "JAGMAN",
  pcs: "Permanent Change of Station",
  tad: "TAD and TDY Travel",
  les: "Leave and Earnings Statement",
  bah: "Basic Allowance for Housing",
  bas: "Basic Allowance for Subsistence",
  "separation-retirement": "Separation and Retirement",
  "limited-duty": "Limited Duty",
  selres: "SELRES (SMCR)",
  irr: "IRR",
  tricare: "TRICARE",
  ucmj: "UCMJ",
  vwap: "VWAP",
};

/** Formats a topic slug for display, honoring the override table. */
export function toTopicLabel(topic: string): string {
  const override = TOPIC_LABEL_OVERRIDES[topic.toLowerCase()];
  if (override) return override;
  return topic
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
