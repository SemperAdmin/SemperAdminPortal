import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ClipboardCheck } from "lucide-react";
import { getInspectionsByTrack } from "@/lib/content/loader";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
import { StatusPill } from "@/components/ui/status-pill";
import { cn } from "@/lib/utils";

const SUBSECTION_TO_AUDIENCE: Record<string, string> = {
  "01.0": "IPAC",
  "02.0": "REPORTING",
  "03.0": "SUPPORTING",
  "04.0": "DO",
  "05.0": "FO",
  "06.0": "OUTSIDE_AGENCY",
};

const AUDIENCE_LABEL: Record<string, string> = {
  IPAC: "IPAC",
  REPORTING: "Reporting",
  SUPPORTING: "Supporting",
  DO: "DO",
  FO: "FO",
  OUTSIDE_AGENCY: "Outside Agency",
};

export async function generateStaticParams() {
  const sections = new Set<string>();
  for (const p of getInspectionsByTrack("mcaat")) {
    sections.add(p.programNumber);
  }
  return Array.from(sections).map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  return {
    title: `MCAAT ${section.toUpperCase()}`,
    description: `MCAAT ${section} categories.`,
  };
}

export default async function McaatSection({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const all = getInspectionsByTrack("mcaat").filter(
    (p) => p.programNumber === section
  );
  if (all.length === 0) notFound();

  const sectionLabel = all[0]?.section ?? section;

  // Sum unique items - subsections may duplicate the same item across audiences,
  // so use the subsection with the largest item count as the unique total.
  const total = all.reduce(
    (n, p) =>
      n +
      p.subsections.reduce((m, s) => Math.max(m, s.items.length), 0),
    0
  );

  // Build audience counts by walking subsections.
  const audienceCounts: Record<string, number> = {};
  for (const p of all) {
    for (const sub of p.subsections) {
      const aud = SUBSECTION_TO_AUDIENCE[sub.id];
      if (!aud) continue;
      audienceCounts[aud] = (audienceCounts[aud] ?? 0) + sub.items.length;
    }
  }
  const audiencesPresent = Object.keys(audienceCounts).sort((a, b) => {
    const order = ["IPAC", "REPORTING", "SUPPORTING", "DO", "FO", "OUTSIDE_AGENCY"];
    return order.indexOf(a) - order.indexOf(b);
  });

  const sorted = [...all].sort((a, b) =>
    (a.categoryLabel ?? a.title).localeCompare(
      b.categoryLabel ?? b.title,
      undefined,
      { sensitivity: "base" }
    )
  );

  return (
    <div className="mx-auto max-w-6xl">
      <Link
        href="/inspections/mcaat"
        className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
      >
        <ArrowLeft className="size-3" aria-hidden="true" />
        Back to MCAAT
      </Link>

      <PageHeader
        eyebrow={`Inspections / MCAAT / ${sectionLabel}`}
        tags={
          <>
            <Pill variant="commander">MCAAT</Pill>
            <StatusPill status="fresh" label={`${all.length} categories`} />
          </>
        }
        title={`MCAAT ${sectionLabel.toUpperCase()}`}
        summary="Pick a category. Each category groups items by audience."
      >
        <MetaRow
          items={[
            { label: "Categories", value: all.length },
            { label: "Items", value: total },
            ...audiencesPresent.map((a) => ({
              label: AUDIENCE_LABEL[a] ?? a,
              value: audienceCounts[a] ?? 0,
            })),
          ]}
        />
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sorted.map((p) => {
          const uniqueItems = p.subsections.reduce(
            (m, s) => Math.max(m, s.items.length),
            0
          );
          const audienceTallies = p.subsections.map((s) => ({
            audience: SUBSECTION_TO_AUDIENCE[s.id] ?? s.id,
            count: s.items.length,
          }));
          return (
            <Link
              key={`${p.programNumber}-${p.slug}`}
              href={`/inspections/mcaat/${p.programNumber}/${p.slug}`}
              className={cn(
                "group relative flex flex-col gap-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all",
                "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
              )}
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: "var(--color-marine-blue)" }}
              />
              <div className="flex items-center gap-2">
                <div
                  className="inline-flex size-8 items-center justify-center rounded-[var(--radius-sm)]"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-marine-blue) 14%, transparent)",
                    color: "var(--color-marine-blue)",
                  }}
                >
                  <ClipboardCheck className="size-4" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold tracking-tight">
                  {p.categoryLabel ?? p.title}
                </h3>
              </div>
              <p className="text-sm leading-snug text-[var(--color-muted-foreground)]">
                {uniqueItems} unique items.{" "}
                {audienceTallies
                  .map((a) => `${AUDIENCE_LABEL[a.audience] ?? a.audience} ${a.count}`)
                  .join(", ")}
                .
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-xs">
                <span className="text-[var(--color-muted-foreground)]">
                  {p.subsections.length}{" "}
                  {p.subsections.length === 1 ? "audience" : "audiences"}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[var(--color-marine-blue)] dark:text-[#B5C4DC]">
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
