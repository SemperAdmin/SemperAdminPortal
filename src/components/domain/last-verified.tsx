import * as React from "react";
import { StatusPill } from "@/components/ui/status-pill";
import { classifyFreshness, type FreshnessStatus } from "@/lib/verification";

export interface LastVerifiedProps {
  date: Date | string;
  /** Reference date for staleness calculation. Defaults to now at render. */
  referenceDate?: Date;
  className?: string;
}

const LABEL: Record<FreshnessStatus, string> = {
  fresh: "Verified",
  aging: "Aging",
  stale: "Stale",
};

/**
 * LastVerified - v1.3.
 * Wraps StatusPill with verification freshness classification.
 * No live region: the date is static at render, and aria-live on static
 * content announces noise on every page load.
 */
export function LastVerified({
  date,
  referenceDate,
  className,
}: LastVerifiedProps) {
  const d = typeof date === "string" ? new Date(date) : date;
  const status = classifyFreshness(d, referenceDate);
  const formatted = d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <StatusPill
      status={status}
      label={`${LABEL[status]} ${formatted}`}
      size="sm"
      className={className}
    />
  );
}
