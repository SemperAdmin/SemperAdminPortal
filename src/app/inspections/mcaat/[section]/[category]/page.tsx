import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  findInspection,
  getInspectionsByTrack,
} from "@/lib/content/loader";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
import { StatusPill } from "@/components/ui/status-pill";
import { RoleChip } from "@/components/domain/role-chip";
import { SourceCitation } from "@/components/domain/source-citation";
import { ReferencePill } from "@/components/domain/reference-pill";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export async function generateStaticParams() {
  return getInspectionsByTrack("mcaat").map((p) => ({
    section: p.programNumber,
    category: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; category: string }>;
}): Promise<Metadata> {
  const { section, category } = await params;
  const program = findInspection("mcaat", section, category);
  if (!program) return { title: "MCAAT Category" };
  return {
    title: `MCAAT ${program.section ?? section} - ${program.categoryLabel ?? program.title}`,
    description: program.summary,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

type Audience =
  | "IPAC"
  | "REPORTING"
  | "SUPPORTING"
  | "DO"
  | "FO"
  | "OUTSIDE_AGENCY";

const AUDIENCE_VARIANT: Record<
  Audience,
  "marine" | "accent" | "info" | "warning" | "success" | "neutral"
> = {
  IPAC: "marine",
  REPORTING: "accent",
  SUPPORTING: "info",
  DO: "warning",
  FO: "success",
  OUTSIDE_AGENCY: "neutral",
};

const AUDIENCE_LABEL: Record<Audience, string> = {
  IPAC: "IPAC",
  REPORTING: "Reporting Unit",
  SUPPORTING: "Supporting Unit",
  DO: "DO",
  FO: "FO",
  OUTSIDE_AGENCY: "Outside Agency",
};

const SUBSECTION_TO_AUDIENCE: Record<string, Audience> = {
  "01.0": "IPAC",
  "02.0": "REPORTING",
  "03.0": "SUPPORTING",
  "04.0": "DO",
  "05.0": "FO",
  "06.0": "OUTSIDE_AGENCY",
};

export default async function McaatCategoryDetail({
  params,
}: {
  params: Promise<{ section: string; category: string }>;
}) {
  const { section, category } = await params;
  const program = findInspection("mcaat", section, category);
  if (!program) notFound();

  const totalItems = program.subsections.reduce(
    (n, s) => n + s.items.length,
    0
  );
  const defaultOpen = program.subsections.map((s) => s.id);
  const sectionLabel = program.section ?? section;
  const categoryLabel = program.categoryLabel ?? program.title;

  return (
    <article className="mx-auto max-w-4xl">
      <Link
        href={`/inspections/mcaat/${program.programNumber}`}
        className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
      >
        <ArrowLeft className="size-3" aria-hidden="true" />
        Back to MCAAT {sectionLabel}
      </Link>

      <PageHeader
        eyebrow={`Inspections / MCAAT / ${sectionLabel}`}
        tags={
          <>
            <Pill variant="commander">MCAAT</Pill>
            <StatusPill
              status="fresh"
              label={`${totalItems} items`}
            />
          </>
        }
        title={categoryLabel}
        summary={program.summary}
      >
        <MetaRow
          items={[
            { label: "Verified", value: formatDate(program.lastVerified) },
            ...(program.applicabilityLevel
              ? [
                  {
                    label: "Applies to",
                    value: program.applicabilityLevel,
                    mono: false,
                  },
                ]
              : []),
            { label: "Items", value: totalItems },
            { label: "Audiences", value: program.subsections.length },
          ]}
        />
      </PageHeader>

      <div className="mb-6 flex flex-wrap items-center gap-1.5">
        {program.roles.map((r) => (
          <RoleChip key={r} role={r} size="sm" />
        ))}
      </div>

      <section className="mb-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
          How to use this checklist
        </p>
        <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
          Items group by audience. Admin sections route to IPAC, Reporting Unit, and Supporting Unit. Finance sections route to Disbursing Officer, Finance Officer, and Outside Agency. A single item appears under every audience it applies to.
        </p>
      </section>

      <Accordion
        type="multiple"
        defaultValue={defaultOpen}
        className="space-y-3"
      >
        {program.subsections.map((sub) => {
          const audience = SUBSECTION_TO_AUDIENCE[sub.id];
          return (
            <AccordionItem
              key={sub.id}
              value={sub.id}
              className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] px-4"
            >
              <AccordionTrigger className="py-3 text-left text-base font-bold tracking-tight">
                <span className="flex items-center gap-3">
                  {audience && (
                    <Pill variant={AUDIENCE_VARIANT[audience]} size="xs">
                      {AUDIENCE_LABEL[audience]}
                    </Pill>
                  )}
                  <span>{sub.title}</span>
                  <span className="text-[11px] font-medium text-[var(--color-subtle-foreground)]">
                    {sub.items.length}{" "}
                    {sub.items.length === 1 ? "item" : "items"}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-5">
                <ol className="space-y-3">
                  {sub.items.map((item, idx) => (
                    <li
                      key={`${sub.id}-${item.code}-${idx}`}
                      className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="shrink-0 rounded-[var(--radius-xs)] border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[var(--color-foreground)]">
                          {item.code}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-medium leading-snug text-[var(--color-foreground)]">
                            {item.question}
                          </p>
                          {item.references.length > 0 && (
                            <div className="mt-2 flex flex-wrap items-center gap-1.5">
                              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
                                References
                              </span>
                              {item.references.map((ref, i) => (
                                <ReferencePill key={i} reference={ref} />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <div className="my-8 border-t border-[var(--color-border)]" />

      <SourceCitation
        title={program.source.title}
        publisher={program.source.publisher}
        url={program.source.url}
        publisherUrl="https://www.manpower.marines.mil/Divisions/Plans-and-Policies/Manpower-Strategy/MCAAT/"
      />
    </article>
  );
}
