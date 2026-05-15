import { ListChecks, Lock, Clock, CalendarCheck } from "lucide-react";
import { ObligationCard } from "./obligation-card";
import { StatTile } from "./stat-tile";
import {
  OBLIGATIONS,
  nonDelegableCount,
  obligationsByCadence,
  upcomingDeadlines,
  type ObligationCadence,
} from "@/lib/commander-obligations";

/**
 * ComplianceDashboard - v1.0
 *
 * Composes the Commander compliance dashboard. Renders:
 *   - Summary stats (total obligations, non-delegable count, upcoming deadlines)
 *   - Cards grouped by cadence (monthly, quarterly, annual, multi-year, event-driven)
 *
 * Static reference. No user-provided state. Calendar-aware on annual windows.
 *
 * Future iteration: user-provided last-completed dates feed a status check
 * for multi-year obligations (e.g., fund control training). For now the
 * dashboard surfaces the obligations themselves with deadlines for items
 * with fixed annual windows.
 */

const CADENCE_GROUPS: Array<{
  cadence: ObligationCadence;
  label: string;
  summary: string;
}> = [
  {
    cadence: "monthly",
    label: "Monthly obligations",
    summary:
      "Non-delegable forums and recurring monthly submissions. Highest cadence pressure.",
  },
  {
    cadence: "quarterly",
    label: "Quarterly obligations",
    summary:
      "Quarter-end reconciliations and reviews. CO signature drives these forward.",
  },
  {
    cadence: "annual",
    label: "Annual obligations",
    summary:
      "Annual cycles tied to fiscal year, climate assessment window, or training cadence.",
  },
  {
    cadence: "multi-year",
    label: "Multi-year obligations",
    summary:
      "Long-cycle training and certifications. Easy to forget. Track manually.",
  },
  {
    cadence: "event-driven",
    label: "Event-driven obligations",
    summary:
      "Triggered by events, not by calendar. Open the corresponding incident playbook or topic page.",
  },
];

export interface ComplianceDashboardProps {
  today: Date;
}

export function ComplianceDashboard({ today }: ComplianceDashboardProps) {
  const total = OBLIGATIONS.length;
  const nonDel = nonDelegableCount();
  const upcoming = upcomingDeadlines(today, 5);

  return (
    <div className="space-y-10">
      {/* Summary stats */}
      <section
        aria-label="Summary"
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        <StatTile
          icon={ListChecks}
          value={total}
          label="Recurring obligations"
          meta="Total tracked"
        />
        <StatTile
          icon={Lock}
          value={nonDel}
          label="Non-delegable"
          meta="CO must execute personally"
        />
        <StatTile
          icon={Clock}
          value={CADENCE_GROUPS.length}
          label="Cadences"
          meta="Monthly to event-driven"
        />
        <StatTile
          icon={CalendarCheck}
          value={upcoming.length}
          label="Upcoming deadlines"
          meta="Surfaced below"
        />
      </section>

      {/* Upcoming deadlines */}
      {upcoming.length > 0 && (
        <section aria-label="Upcoming deadlines">
          <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            Upcoming deadlines
          </h2>
          <ul className="space-y-2">
            {upcoming.map(({ obligation, deadline, daysUntil }) => (
              <li
                key={obligation.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-3"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{obligation.title}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-muted-foreground)]">
                    {obligation.authority}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm font-bold">
                    {deadline.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-[11px] text-[var(--color-muted-foreground)]">
                    {daysUntil} d
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Cadence groups */}
      {CADENCE_GROUPS.map((group) => {
        const items = obligationsByCadence(group.cadence);
        if (items.length === 0) return null;
        return (
          <section key={group.cadence} aria-label={group.label}>
            <div className="mb-3">
              <h2 className="text-xl font-bold tracking-tight">
                {group.label}
              </h2>
              <p className="mt-0.5 text-sm text-[var(--color-muted-foreground)]">
                {group.summary}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((o) => (
                <ObligationCard key={o.id} obligation={o} today={today} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}


