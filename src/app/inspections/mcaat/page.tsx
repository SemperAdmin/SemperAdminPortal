import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Scale } from "lucide-react";
import { getInspectionsByTrack } from "@/lib/content/loader";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
import { StatusPill } from "@/components/ui/status-pill";
import { EmptyState } from "@/components/domain/empty-state";

export const metadata: Metadata = {
  title: "MCAAT",
  description:
    "Marine Corps Administrative Analysis Team checklists. Sections, categories, audience-tagged items.",
};

interface SectionEntry {
  programNumber: string;
  section: string;
  categoryCount: number;
  itemCount: number;
}

export default function McaatHub() {
  const programs = getInspectionsByTrack("mcaat");

  const sectionMap = new Map<string, SectionEntry>();
  for (const p of programs) {
    const key = p.programNumber;
    const total = p.subsections.reduce((n, s) => n + s.items.length, 0);
    const existing = sectionMap.get(key);
    if (existing) {
      existing.categoryCount += 1;
      existing.itemCount += total;
    } else {
      sectionMap.set(key, {
        programNumber: key,
        section: p.section ?? key,
        categoryCount: 1,
        itemCount: total,
      });
    }
  }
  const sections = Array.from(sectionMap.values()).sort((a, b) =>
    a.section.localeCompare(b.section)
  );

  return (
    <div className="mx-auto max-w-5xl">
      <Link
        href="/inspections"
        className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
      >
        <ArrowLeft className="size-3" aria-hidden="true" />
        Back to inspections
      </Link>

      <PageHeader
        eyebrow="Inspections / MCAAT"
        tags={
          <>
            <Pill variant="commander">MCAAT</Pill>
            <StatusPill
              status="fresh"
              label={`${sections.length} ${sections.length === 1 ? "section" : "sections"} loaded`}
            />
          </>
        }
        title="MCAAT PROGRAMS"
        summary="Marine Corps Administrative Analysis Team checklists. Pick a section to see its categories."
      >
        <MetaRow
          items={[
            { label: "Sections", value: sections.length },
            { label: "Categories", value: sections.reduce((n, s) => n + s.categoryCount, 0) },
            { label: "Items", value: sections.reduce((n, s) => n + s.itemCount, 0) },
          ]}
        />
      </PageHeader>

      {sections.length === 0 ? (
        <EmptyState
          icon={Scale}
          title="No MCAAT material loaded yet"
          description="Drop authored programs into content/inspections/mcaat/ as JSON files."
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((s) => (
            <Link
              key={s.programNumber}
              href={`/inspections/mcaat/${s.programNumber}`}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: "var(--color-marine-blue)" }}
              />
              <div
                className="mb-3 inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)]"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--color-marine-blue) 14%, transparent)",
                  color: "var(--color-marine-blue)",
                }}
              >
                <Scale className="size-5" aria-hidden="true" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
                Section
              </p>
              <h2 className="mt-1 font-display text-2xl tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                {s.section}
              </h2>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                {s.categoryCount} categories, {s.itemCount} items grouped by audience.
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-xs">
                <span className="text-[var(--color-muted-foreground)]">
                  {s.categoryCount} {s.categoryCount === 1 ? "category" : "categories"} loaded
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[var(--color-marine-blue)] dark:text-[#B5C4DC]">
                  Open
                  <ArrowRight className="size-3" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
