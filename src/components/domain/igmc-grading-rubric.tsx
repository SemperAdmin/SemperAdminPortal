import * as React from "react";
import { ShieldCheck, AlertTriangle, ShieldAlert } from "lucide-react";

/**
 * IGMC grading rubric. Three cards explain the three grade ladders an
 * inspector applies during a Command Inspection.
 *
 *   1. Command tier  - Tier I / Tier II / Tier III, computed from the share
 *      of FAs deemed Effective across CoRE, CoRE+, and non-CoRE.
 *   2. FA grade      - Effective / Ineffective, applied per functional area.
 *   3. FAC question  - Compliant / Discrepancy / Finding, applied per item.
 *
 * The Compliant / Discrepancy / Finding palette mirrors the CalloutChip in
 * the inspector guide so users learn the visual vocabulary once.
 */
export function IgmcGradingRubric() {
  return (
    <section
      aria-label="IGMC grading rubric"
      className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5"
    >
      <header className="mb-4 flex items-center gap-2">
        <ShieldCheck
          className="size-4 text-[var(--color-usmc-scarlet)]"
          aria-hidden="true"
        />
        <h2 className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-foreground)]">
          Grading rubric
        </h2>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <RubricCard
          title="Command tier"
          subtitle="Share of FAs assessed as Effective"
          rows={[
            {
              label: "Tier I",
              meta: "90 to 100 percent",
              tone: "fresh",
              note: "Commendatory",
            },
            {
              label: "Tier II",
              meta: "80 to 89 percent",
              tone: "aging",
              note: "Satisfactory",
            },
            {
              label: "Tier III",
              meta: "0 to 79 percent",
              tone: "stale",
              note: "Unsatisfactory",
            },
          ]}
        />

        <RubricCard
          title="FA grade"
          subtitle="Per functional area"
          rows={[
            {
              label: "Effective",
              meta: "Program in compliance and assured forward",
              tone: "fresh",
              note: "May still carry findings or discrepancies",
            },
            {
              label: "Ineffective",
              meta: "Does not meet intent of the directive",
              tone: "stale",
              note: "Includes FAs that exist in name only",
            },
          ]}
        />

        <RubricCard
          title="FAC question grade"
          subtitle="Per checklist item"
          rows={[
            {
              label: "Compliant",
              meta: "Meets the rule or standard",
              tone: "fresh",
              note: "No action required",
            },
            {
              label: "Discrepancy",
              meta: "Minor deviation, FA manager can fix",
              tone: "aging",
              note: "Minor risk to the command",
            },
            {
              label: "Finding",
              meta: "Significant problem, requires CO involvement",
              tone: "stale",
              note: "Greater than minor risk",
            },
          ]}
        />
      </div>
    </section>
  );
}

type Tone = "fresh" | "aging" | "stale";

interface RubricRow {
  label: string;
  meta: string;
  tone: Tone;
  note: string;
}

function RubricCard({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle: string;
  rows: RubricRow[];
}) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
        {title}
      </p>
      <p className="mt-0.5 text-[11px] text-[var(--color-muted-foreground)]">
        {subtitle}
      </p>
      <ul className="mt-3 space-y-2">
        {rows.map((row) => (
          <li key={row.label} className="flex items-start gap-2">
            <RubricBadge tone={row.tone}>{row.label}</RubricBadge>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[var(--color-foreground)]">
                {row.meta}
              </p>
              <p className="text-[11px] text-[var(--color-muted-foreground)]">
                {row.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RubricBadge({
  tone,
  children,
}: {
  tone: Tone;
  children: React.ReactNode;
}) {
  const Icon =
    tone === "fresh"
      ? ShieldCheck
      : tone === "aging"
      ? AlertTriangle
      : ShieldAlert;
  const cls =
    tone === "fresh"
      ? "border-[color-mix(in_srgb,var(--color-status-fresh)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-status-fresh)_10%,transparent)] text-[var(--color-status-fresh-700)] dark:text-[var(--color-status-fresh-300)]"
      : tone === "aging"
      ? "border-[color-mix(in_srgb,var(--color-status-aging)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-status-aging)_10%,transparent)] text-[var(--color-status-aging-700)] dark:text-[var(--color-brass-300)]"
      : "border-[color-mix(in_srgb,var(--color-status-stale)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-status-stale)_10%,transparent)] text-[var(--color-status-stale-700)] dark:text-[var(--color-status-stale-300)]";
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1 rounded-[var(--radius-xs)] border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] ${cls}`}
    >
      <Icon className="size-3" aria-hidden="true" />
      {children}
    </span>
  );
}
