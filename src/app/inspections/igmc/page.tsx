"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import { Callout } from "@/components/domain/callout";
import { StatusPill } from "@/components/ui/status-pill";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { FilterBar, type FilterChip } from "@/components/domain/filter-bar";
import { EmptyState } from "@/components/domain/empty-state";
import { Input } from "@/components/ui/input";
import { IgmcGradingRubric } from "@/components/domain/igmc-grading-rubric";
import { CoreTaxonomyExplainer } from "@/components/domain/core-taxonomy-explainer";
import { IgmcNewsStrip } from "@/components/domain/igmc-news-strip";
import { classifyInspectionStatus, type Inspection } from "@/lib/content/schemas";
import { cn } from "@/lib/utils";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const NEWS = require("@/generated/igmc-news.json") as {
  fy26Schedule: { number: string; title: string; url: string };
  checklistsLanding: { title: string; url: string };
};

// eslint-disable-next-line @typescript-eslint/no-require-imports
const RAW = require("@/generated/inspections.json") as Inspection[];

function countItems(p: Inspection): number {
  return p.subsections.reduce((n, s) => n + s.items.length, 0);
}

export default function IgmcIndex() {
  const data = React.useMemo(
    () => RAW.filter((p) => p.track === "igmc"),
    []
  );

  const sponsors = React.useMemo(() => {
    const set = new Set<string>();
    for (const p of data) if (p.sponsor) set.add(p.sponsor);
    return Array.from(set).sort();
  }, [data]);

  const categories = React.useMemo(() => {
    const set = new Set<string>();
    for (const p of data) if (p.category) set.add(p.category);
    return Array.from(set).sort();
  }, [data]);

  const [sponsor, setSponsor] = React.useState<string>("all");
  const [category, setCategory] = React.useState<string>("all");
  const [query, setQuery] = React.useState<string>("");

  const visible = React.useMemo(() => {
    let list = data;
    if (sponsor !== "all") list = list.filter((p) => p.sponsor === sponsor);
    if (category !== "all") list = list.filter((p) => p.category === category);
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.programNumber.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q)
      );
    }
    return [...list].sort((a, b) =>
      a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
    );
  }, [data, sponsor, category, query]);

  const sponsorChips: FilterChip[] = [
    { id: "all", label: "All sponsors", count: data.length },
    ...sponsors.map((s) => ({
      id: s,
      label: s,
      count: data.filter((p) => p.sponsor === s).length,
    })),
  ];

  const categoryChips: FilterChip[] = [
    { id: "all", label: "All categories", count: data.length },
    ...categories.map((c) => ({
      id: c,
      label: c,
      count: data.filter((p) => p.category === c).length,
    })),
  ];

  const categoryVariant = (
    cat: string | undefined
  ): "marine" | "accent" | "neutral" => {
    if (cat === "CoRE") return "marine";
    if (cat === "CoRE+") return "accent";
    return "neutral";
  };

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Inspections / IGMC"
        tags={
          <>
            <Pill variant="marine">IGMC</Pill>
            <StatusPill status="fresh" label={`${data.length} programs loaded`} />
          </>
        }
        title="IGMC PROGRAMS"
        summary="Functional area checklists from the Inspector General of the Marine Corps. Filter by sponsor or search by program number."
      >
        <MetaRow
          items={[
            { label: "Programs", value: data.length },
            { label: "Sponsors", value: sponsors.length },
            { label: "FY26 schedule", value: NEWS.fy26Schedule.number, mono: true },
            { label: "Cadence", value: "6 / 12 mo", mono: false },
          ]}
        />
      </PageHeader>

      <Callout variant="info" title="Governing authority">
        <p>
          These programs are issued under{' '}
          <Link
            href="/citations/mco-5040-6k"
            className="font-semibold underline-offset-2 hover:underline"
          >
            MCO 5040.6K
          </Link>
          . Run each FAC against the grading rubric in Chapter 4 of the Order.
        </p>
        <p className="mt-2 text-[12px]">
          Source list at{' '}
          <a
            href={NEWS.checklistsLanding.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
          >
            {NEWS.checklistsLanding.title}
          </a>
          .
        </p>
      </Callout>

      <IgmcGradingRubric />

      <CoreTaxonomyExplainer inspections={data} />

      <div className="mb-5 mt-6 flex flex-col gap-3">
        <label className="relative block">
          <span className="sr-only">Search by program number or title</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-muted-foreground)]"
          />
          <Input
            type="search"
            placeholder="Search program number or title"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </label>

        <FilterBar
          label="Category"
          chips={categoryChips}
          activeId={category}
          onChange={setCategory}
        />

        <FilterBar
          label="Sponsor"
          chips={sponsorChips}
          activeId={sponsor}
          onChange={setSponsor}
        />
      </div>

      {visible.length === 0 ? (
        <EmptyState
          icon={ShieldCheck}
          title="No programs match the current filter"
          description="Reset the sponsor filter or clear the search."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((p) => {
            const status = classifyInspectionStatus(p.lastVerified);
            const items = countItems(p);
            return (
              <Link
                key={`${p.programNumber}-${p.slug}`}
                href={`/inspections/igmc/${p.programNumber}/${p.slug}`}
                className={cn(
                  "group relative flex flex-col gap-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all",
                  "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ backgroundColor: "var(--color-usmc-scarlet)" }}
                />
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="rounded-[var(--radius-xs)] border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-foreground)]">
                      {p.programNumber}
                    </span>
                    {p.category && (
                      <Pill variant={categoryVariant(p.category)} size="xs">
                        {p.category}
                      </Pill>
                    )}
                  </div>
                  <StatusPill
                    status={status}
                    label={
                      status === "fresh"
                        ? "Verified"
                        : status === "aging"
                        ? "Aging"
                        : "Stale"
                    }
                    size="xs"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-[var(--color-muted-foreground)]">
                    {p.summary}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Pill variant="accent" size="xs">
                      {p.sponsor}
                    </Pill>
                    <span className="text-[11px] text-[var(--color-subtle-foreground)]">
                      {p.subsections.length} subsections, {items} items
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-usmc-scarlet)]">
                    Open
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <IgmcNewsStrip />
    </div>
  );
}
