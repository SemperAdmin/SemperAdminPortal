"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  FilePlus2,
  Inbox,
  PencilLine,
  ShieldAlert,
} from "lucide-react";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { StatTile } from "@/components/domain/stat-tile";
import { FilterBar, type FilterChip } from "@/components/domain/filter-bar";
import { EmptyState } from "@/components/domain/empty-state";
import { RoleChip } from "@/components/domain/role-chip";
import { Pill, type PillProps } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import { ROLES, type Role } from "@/lib/roles";
import type { Update, UpdateImpact, UpdateKind } from "@/lib/content/schemas";
import { cn } from "@/lib/utils";

export interface CitationChip {
  id: string;
  label: string;
  href: string | null;
  external: boolean;
}

export interface UpdateRow extends Update {
  citationChips: CitationChip[];
}

export interface UpdatesClientProps {
  rows: UpdateRow[];
  windowDays: number;
  windowStart: string;
  buildDate: string;
}

const KIND_LABEL: Record<UpdateKind, string> = {
  "policy-change": "Policy change",
  "new-content": "Added",
  correction: "Correction",
  "verification-sweep": "Verification",
};

const IMPACT_LABEL: Record<UpdateImpact, string> = {
  "action-required": "Action required",
  awareness: "Awareness",
  reference: "Reference",
};

const IMPACT_VARIANT: Record<UpdateImpact, NonNullable<PillProps["variant"]>> = {
  "action-required": "danger",
  awareness: "accent",
  reference: "neutral",
};

/** Timeline kinds. Verification sweeps roll up separately below the list. */
const TIMELINE_KINDS: UpdateKind[] = [
  "policy-change",
  "new-content",
  "correction",
];

function formatDay(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatMonth(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
  });
}

/**
 * Route to a readable label. /marines/special-leave-accrual reads as
 * Marines / Special leave accrual. Keeps the affected-page list scannable
 * without a second lookup against the content catalogs.
 */
function routeLabel(route: string): string {
  const parts = route.split("/").filter(Boolean);
  const first = parts[0];
  const last = parts[parts.length - 1];
  if (!first || !last) return "Home";
  const sentence = (s: string) => {
    const words = s.replace(/-/g, " ");
    return words.charAt(0).toUpperCase() + words.slice(1);
  };
  if (parts.length === 1) return sentence(first);
  return sentence(first) + " / " + sentence(last);
}

/**
 * UpdatesClient - the /updates surface.
 *
 * Fixed trailing window, no window control. The page shows the last 90
 * days and nothing else. Role and kind chips narrow the list. Verification
 * sweeps stay collapsed under the timeline so a reader sees the policy
 * record first and the maintenance record only on request.
 */
export default function UpdatesClient({
  rows,
  windowDays,
  windowStart,
  buildDate,
}: UpdatesClientProps) {
  const [roleFilter, setRoleFilter] = React.useState<Role | "all">("all");
  const [kindFilter, setKindFilter] = React.useState<UpdateKind | "all">("all");

  const byRole = React.useMemo(
    () =>
      roleFilter === "all"
        ? rows
        : rows.filter((r) => r.roles.includes(roleFilter)),
    [rows, roleFilter]
  );

  const filtered = React.useMemo(
    () =>
      kindFilter === "all"
        ? byRole
        : byRole.filter((r) => r.kind === kindFilter),
    [byRole, kindFilter]
  );

  const timeline = filtered.filter((r) => TIMELINE_KINDS.includes(r.kind));
  const sweeps = filtered.filter((r) => r.kind === "verification-sweep");

  const countOf = (kind: UpdateKind) =>
    byRole.filter((r) => r.kind === kind).length;

  const roleChips: FilterChip[] = [
    { id: "all", label: "All roles", count: rows.length },
    ...ROLES.map((role) => ({
      id: role,
      label: role === "marine" ? "Marine" : role.charAt(0).toUpperCase() + role.slice(1),
      count: rows.filter((r) => r.roles.includes(role)).length,
    })),
  ];

  const kindChips: FilterChip[] = [
    { id: "all", label: "Everything", count: byRole.length },
    ...([...TIMELINE_KINDS, "verification-sweep"] as UpdateKind[]).map(
      (kind) => ({
        id: kind,
        label: KIND_LABEL[kind],
        count: countOf(kind),
      })
    ),
  ];

  // Month buckets, newest first. Entries arrive sorted by date descending
  // from the loader, so insertion order holds.
  const months: Array<{ key: string; label: string; items: UpdateRow[] }> = [];
  for (const row of timeline) {
    const key = row.date.slice(0, 7);
    const bucket = months.find((m) => m.key === key);
    if (bucket) bucket.items.push(row);
    else months.push({ key, label: formatMonth(row.date), items: [row] });
  }

  const anchored = new Set(rows.map((r) => r.slug));

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Reference"
        title="WHAT CHANGED, UPDATED, OR ADDED"
        tags={
          <>
            <Pill variant="outline">Last {windowDays} days</Pill>
            <Pill variant="neutral">{rows.length} entries</Pill>
          </>
        }
        summary={`Policy changes, corrections, and new coverage from the last ${windowDays} days, each one carrying the authority behind it. Older entries drop off this page and stay in the role content where they belong.`}
      >
        <MetaRow
          items={[
            { label: "Window", value: `${windowStart} to ${buildDate}` },
            { label: "Built", value: buildDate },
          ]}
        />
      </PageHeader>

      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatTile
          icon={ShieldAlert}
          value={countOf("policy-change")}
          label="Policy changes"
          meta="Authority moved or suspended"
        />
        <StatTile
          icon={FilePlus2}
          value={countOf("new-content")}
          label="New coverage"
          meta="Topics the portal now covers"
        />
        <StatTile
          icon={PencilLine}
          value={countOf("correction")}
          label="Corrections"
          meta="Published facts set right"
        />
      </section>

      <FilterBar
        label="Role"
        chips={roleChips}
        activeId={roleFilter}
        onChange={(id) => setRoleFilter(id as Role | "all")}
        className="mb-3"
      />
      <FilterBar
        label="Kind"
        chips={kindChips}
        activeId={kindFilter}
        onChange={(id) => setKindFilter(id as UpdateKind | "all")}
      />

      {timeline.length === 0 && sweeps.length === 0 ? (
        <EmptyState
          icon={Inbox}
          title={
            rows.length === 0
              ? `Nothing logged in the last ${windowDays} days`
              : "No entries match these filters"
          }
          description={
            rows.length === 0
              ? "Every policy change, correction, and new page lands here when it ships. A quiet window means a quiet quarter."
              : "Widen the role or kind filter, or read the full authority registry."
          }
          actions={
            <Button asChild variant="outline" size="sm">
              <Link href="/citations">
                Citations index
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          }
        />
      ) : (
        <div className="flex flex-col gap-8">
          {months.map((month) => (
            <section key={month.key}>
              <h2
                id={`month-${month.key}`}
                className="mb-4 border-b border-[var(--color-border)] pb-2 text-[22px] font-bold tracking-tight"
              >
                {month.label}
              </h2>
              <div className="flex flex-col gap-3">
                {month.items.map((row) => (
                  <UpdateCard
                    key={row.slug}
                    row={row}
                    supersededAnchored={
                      row.supersededBy ? anchored.has(row.supersededBy) : false
                    }
                  />
                ))}
              </div>
            </section>
          ))}

          {sweeps.length > 0 && <SweepRollup sweeps={sweeps} />}
        </div>
      )}
    </div>
  );
}

function UpdateCard({
  row,
  supersededAnchored,
}: {
  row: UpdateRow;
  supersededAnchored: boolean;
}) {
  const [showAllPages, setShowAllPages] = React.useState(false);
  const superseded = Boolean(row.supersededBy);
  const primary = row.affectedPages[0];
  const visiblePages = showAllPages
    ? row.affectedPages
    : row.affectedPages.slice(0, 3);
  const hiddenCount = row.affectedPages.length - visiblePages.length;

  return (
    <article
      id={`update-${row.slug}`}
      className={cn(
        "rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all duration-[120ms]",
        "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]",
        superseded && "opacity-60"
      )}
    >
      <div className="mb-2 flex flex-wrap items-center gap-1.5">
        <Pill variant="outline" size="xs">
          {KIND_LABEL[row.kind]}
        </Pill>
        <Pill variant={IMPACT_VARIANT[row.impact]} size="xs">
          {IMPACT_LABEL[row.impact]}
        </Pill>
        {row.roles.map((role) => (
          <RoleChip key={role} role={role} size="xs" />
        ))}
        {superseded && (
          <Pill variant="warning" size="xs">
            {supersededAnchored ? (
              <a href={`#update-${row.supersededBy}`}>Superseded</a>
            ) : (
              "Superseded"
            )}
          </Pill>
        )}
      </div>

      <h3 className="text-[17px] font-semibold tracking-tight">
        {primary ? (
          <Link
            href={primary}
            className="hover:text-[var(--color-usmc-scarlet)]"
          >
            {row.title}
          </Link>
        ) : (
          row.title
        )}
      </h3>

      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {row.summary}
      </p>

      <p className="mt-3 font-mono text-[11px] text-[var(--color-subtle-foreground)]">
        Posted {formatDay(row.date)}
        {row.effectiveDate && row.effectiveDate !== row.date && (
          <> &middot; Effective {formatDay(row.effectiveDate)}</>
        )}
      </p>

      {row.citationChips.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {row.citationChips.map((chip) =>
            chip.href === null ? (
              <Pill key={chip.id} variant="neutral" size="xs">
                {chip.label}
              </Pill>
            ) : chip.external ? (
              <a
                key={chip.id}
                href={chip.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pill variant="info" size="xs">
                  {chip.label}
                  <ExternalLink className="size-2.5" aria-hidden="true" />
                </Pill>
              </a>
            ) : (
              <Link key={chip.id} href={chip.href}>
                <Pill variant="info" size="xs">
                  {chip.label}
                </Pill>
              </Link>
            )
          )}
        </div>
      )}

      {row.affectedPages.length > 0 && (
        <div className="mt-3 border-t border-[var(--color-border)] pt-3">
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            Pages affected
          </p>
          <ul className="flex flex-col gap-1">
            {visiblePages.map((route) => (
              <li key={route}>
                <Link
                  href={route}
                  className="inline-flex items-center gap-1 text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                >
                  <ChevronRight className="size-3" aria-hidden="true" />
                  {routeLabel(route)}
                </Link>
              </li>
            ))}
          </ul>
          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setShowAllPages(true)}
              className="mt-1.5 text-xs font-semibold text-[var(--color-usmc-scarlet)]"
            >
              Show {hiddenCount} more
            </button>
          )}
        </div>
      )}
    </article>
  );
}

/**
 * Verification sweeps carry no reader action, so they collapse to one row.
 * The disclosure keeps the verification posture visible without pushing
 * policy changes below the fold.
 */
function SweepRollup({ sweeps }: { sweeps: UpdateRow[] }) {
  const pages = sweeps.reduce((total, s) => total + (s.count ?? 0), 0);
  const label =
    pages > 0
      ? `${pages} pages re-verified against source`
      : `${sweeps.length} verification sweeps`;

  return (
    <details className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-5 py-3">
      <summary className="cursor-pointer text-sm font-semibold text-[var(--color-muted-foreground)]">
        {label}
      </summary>
      <ul className="mt-3 flex flex-col gap-2 border-t border-[var(--color-border)] pt-3">
        {sweeps.map((sweep) => (
          <li key={sweep.slug} id={`update-${sweep.slug}`}>
            <p className="text-sm font-semibold">{sweep.title}</p>
            <p className="text-xs text-[var(--color-muted-foreground)]">
              {sweep.summary}
            </p>
            <p className="mt-0.5 font-mono text-[11px] text-[var(--color-subtle-foreground)]">
              {formatDay(sweep.date)}
            </p>
          </li>
        ))}
      </ul>
    </details>
  );
}
