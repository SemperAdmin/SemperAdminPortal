import * as React from "react";
import { StatusPill } from "@/components/ui/status-pill";

export interface LastVerifiedProps {
  date: Date | string;
  /** Reference date for staleness calculation. Defaults to now at render. */
  referenceDate?: Date;
  className?: string;
}

type Status = "fresh" | "aging" | "stale";

function classify(date: Date, ref: Date): Status {
  const months = (ref.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30);
  if (months >= 24) return "stale";
  if (months >= 12) return "aging";
  return "fresh";
}

const LABEL: Record<Status, string> = {
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
  const ref = referenceDate ?? new Date();
  const status = classify(d, ref);
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
