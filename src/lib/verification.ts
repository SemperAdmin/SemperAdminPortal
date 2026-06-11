/**
 * Shared verification freshness classification.
 *
 * Single source for the 12-month aging and 24-month stale thresholds from
 * the verification policy. Consumed by LastVerified and the tools, links,
 * and reports list pages. Inspections run a tighter 6/12 cadence through
 * classifyInspectionStatus in content/schemas.
 */

export type FreshnessStatus = "fresh" | "aging" | "stale";

const MONTH_MS = 1000 * 60 * 60 * 24 * 30;

export function classifyFreshness(
  date: Date | string,
  referenceDate?: Date
): FreshnessStatus {
  const d = typeof date === "string" ? new Date(date) : date;
  const ref = referenceDate ?? new Date();
  const months = (ref.getTime() - d.getTime()) / MONTH_MS;
  if (months >= 24) return "stale";
  if (months >= 12) return "aging";
  return "fresh";
}
