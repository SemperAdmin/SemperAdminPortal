import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Gauge, ListChecks, Scale, ShieldCheck } from "lucide-react";
import { getInspections } from "@/lib/content/loader";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { StatTile } from "@/components/domain/stat-tile";
import { Pill } from "@/components/ui/pill";
import { Callout } from "@/components/domain/callout";
import { StatusPill } from "@/components/ui/status-pill";
import { classifyInspectionStatus } from "@/lib/content/schemas";

export const metadata: Metadata = {
  title: "Inspections",
  description:
    "IGMC and MCAAT inspection programs. Functional area checklists, parsed references, evidence cues.",
};

interface TrackCard {
  href: string;
  label: string;
  tagline: string;
  description: string;
  Icon: typeof ClipboardCheck;
  accent: string;
  count: number;
  available: boolean;
}

export default function InspectionsHub() {
  const all = getInspections();
  const igmcCount = all.filter((p) => p.track === "igmc").length;
  const mcaatCount = all.filter((p) => p.track === "mcaat").length;
  const totalItems = all.reduce(
    (sum, p) =>
      sum + p.subsections.reduce((s, sub) => s + sub.items.length, 0),
    0
  );
  const lastRefresh = all
    .map((p) => new Date(p.lastVerified).getTime())
    .reduce((a, b) => (b > a ? b : a), 0);
  const lastRefreshLabel = lastRefresh
    ? new Date(lastRefresh).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    : "No data";

  const oldestStatus = all
    .map((p) => classifyInspectionStatus(p.lastVerified))
    .reduce<"fresh" | "aging" | "stale">((worst, cur) => {
      const order = { fresh: 0, aging: 1, stale: 2 } as const;
      return order[cur] > order[worst] ? cur : worst;
    }, "fresh");

  const cards: TrackCard[] = [
    {
      href: "/inspections/igmc",
      label: "IGMC",
      tagline: "Inspector General",
      description:
        "Functional area checklists from the Inspector General of the Marine Corps. Parsed references and evidence space per item.",
      Icon: ShieldCheck,
      accent: "var(--color-usmc-scarlet)",
      count: igmcCount,
      available: true,
    },
    {
      href: "/inspections/mcaat",
      label: "MCAAT",
      tagline: "Admin Analysis Team",
      description:
        "Marine Corps Administrative Analysis Team checklists and findings. Material lands here as it ships.",
      Icon: Scale,
      accent: "var(--color-marine-blue)",
      count: mcaatCount,
      available: false,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow="Reference"
        tags={
          <>
            <Pill variant="accent">IGMC and MCAAT</Pill>
            <StatusPill
              status={oldestStatus}
              label={
                oldestStatus === "fresh"
                  ? "Programs current"
                  : oldestStatus === "aging"
                  ? "Aging programs present"
                  : "Stale programs present"
              }
            />
          </>
        }
        title={
          <>
            <span className="gradient-accent">Inspections</span>
          </>
        }
        summary="Pick a track. Run the checklist. Each item carries parsed references and an evidence cue. Inspections roll annually, so the staleness cadence is tighter than the rest of the portal."
      >
        <MetaRow
          items={[
            { label: "Tracks", value: 2 },
            { label: "Programs", value: all.length },
            { label: "Cadence", value: "6 / 12 mo", mono: false },
          ]}
        />
      </PageHeader>

      <section className="mb-10 grid gap-4 sm:grid-cols-3">
        <StatTile
          icon={ClipboardCheck}
          value={all.length}
          label="Total checklists"
          meta={`${igmcCount} IGMC, ${mcaatCount} MCAAT`}
        />
        <StatTile
          icon={ListChecks}
          value={totalItems}
          label="Total items"
          meta="Across every loaded program"
        />
        <StatTile
          icon={Gauge}
          value={lastRefreshLabel}
          label="Last refresh"
          meta="Most recent verified date"
        />
      </section>

      <Callout variant="info" title="Governing authority">
        Every IGMC inspection on this surface derives from{' '}
        <Link
          href="/citations/mco-5040-6k"
          className="font-semibold underline-offset-2 hover:underline"
        >
          MCO 5040.6K
        </Link>
        . The Order anchors the CoRE classification, the FAC repository, the grading rubric, and the FIR and CAR reporting cycle.
      </Callout>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {cards.map((c) => {
          const Icon = c.Icon;
          return (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: c.accent }}
              />
              <div
                className="mb-3 inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)]"
                style={{
                  backgroundColor: `color-mix(in srgb, ${c.accent} 14%, transparent)`,
                  color: c.accent,
                }}
              >
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
                {c.tagline}
              </p>
              <h2
                className="mt-1 font-display text-2xl tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c.label}
              </h2>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                {c.description}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-xs">
                <span className="text-[var(--color-muted-foreground)]">
                  {c.available
                    ? `${c.count} ${c.count === 1 ? "program" : "programs"} loaded`
                    : "No material loaded yet"}
                </span>
                <span
                  className="inline-flex items-center gap-1 font-semibold"
                  style={{ color: c.accent }}
                >
                  Open
                  <ArrowRight className="size-3" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
