import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Pill } from "@/components/ui/pill";
import {
  daysBetween,
  type Obligation,
} from "@/lib/commander-obligations";

/**
 * ObligationCard - v1.0
 *
 * Renders a single recurring obligation. Surfaces title, cadence, authority,
 * description, next deadline (where computable), non-delegable flag, and a
 * link to the deep portal page.
 *
 * Status color comes from days-until-next-deadline:
 *   - red: deadline within 7 days
 *   - amber: deadline within 30 days
 *   - green: deadline beyond 30 days or no deadline
 */

const CADENCE_LABEL: Record<Obligation["cadence"], string> = {
  monthly: "Monthly",
  quarterly: "Quarterly",
  annual: "Annual",
  "multi-year": "Multi-year",
  "event-driven": "Event-driven",
};

function statusFromDaysUntil(daysUntil: number | null): {
  variant: "fresh" | "aging" | "stale" | "info";
  label: string;
} {
  if (daysUntil === null) {
    return { variant: "info", label: "No fixed deadline" };
  }
  if (daysUntil < 0) {
    return { variant: "stale", label: `Overdue by ${Math.abs(daysUntil)} d` };
  }
  if (daysUntil <= 7) {
    return { variant: "stale", label: `Due in ${daysUntil} d` };
  }
  if (daysUntil <= 30) {
    return { variant: "aging", label: `Due in ${daysUntil} d` };
  }
  return { variant: "fresh", label: `Due in ${daysUntil} d` };
}

function formatDeadline(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export interface ObligationCardProps {
  obligation: Obligation;
  today: Date;
  className?: string;
}

export function ObligationCard({
  obligation,
  today,
  className,
}: ObligationCardProps) {
  const deadline = obligation.nextDeadline?.(today) ?? null;
  const daysUntil = deadline ? daysBetween(today, deadline) : null;
  const status = statusFromDaysUntil(daysUntil);

  const statusColor =
    status.variant === "stale"
      ? "var(--color-status-stale)"
      : status.variant === "aging"
      ? "var(--color-status-aging)"
      : status.variant === "fresh"
      ? "var(--color-status-fresh)"
      : "var(--color-status-info)";

  return (
    <Link
      href={obligation.detailLink}
      className={cn(
        "group relative flex flex-col gap-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all",
        "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1"
        style={{ backgroundColor: statusColor }}
      />

      <div className="flex items-start justify-between gap-2 pl-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <Pill size="xs">{CADENCE_LABEL[obligation.cadence]}</Pill>
          {obligation.nonDelegable && (
            <Pill variant="marine" size="xs">
              Non-delegable
            </Pill>
          )}
        </div>
        <span
          className="rounded-[var(--radius-xs)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
          style={{
            color: statusColor,
            borderColor: statusColor,
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          {status.label}
        </span>
      </div>

      <div className="pl-2">
        <h3 className="text-base font-bold tracking-tight">
          {obligation.title}
        </h3>
        <p className="mt-1 text-sm leading-snug text-[var(--color-muted-foreground)]">
          {obligation.description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-[var(--color-border)] pt-3 pl-2">
        <div className="flex flex-col text-[11px] text-[var(--color-subtle-foreground)]">
          <span className="font-mono">{obligation.authority}</span>
          {deadline && (
            <span className="mt-0.5">Next: {formatDeadline(deadline)}</span>
          )}
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-usmc-scarlet)]">
          Open
          <ArrowRight className="size-3" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
