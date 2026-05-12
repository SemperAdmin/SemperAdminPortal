import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  findInspection,
  getInspectionsByTrack,
} from "@/lib/content/loader";
import { classifyInspectionStatus } from "@/lib/content/schemas";
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
  return getInspectionsByTrack("igmc").map((p) => ({
    programNumber: p.programNumber,
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ programNumber: string; slug: string }>;
}): Promise<Metadata> {
  const { programNumber, slug } = await params;
  const program = findInspection("igmc", programNumber, slug);
  if (!program) return { title: "IGMC Program" };
  return {
    title: `${program.programNumber} - ${program.title}`,
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

export default async function InspectionDetail({
  params,
}: {
  params: Promise<{ programNumber: string; slug: string }>;
}) {
  const { programNumber, slug } = await params;
  const program = findInspection("igmc", programNumber, slug);
  if (!program) notFound();

  const status = classifyInspectionStatus(program.lastVerified);
  const totalItems = program.subsections.reduce(
    (n, s) => n + s.items.length,
    0
  );
  const defaultOpen = program.subsections.map((s) => s.id);

  return (
    <article className="mx-auto max-w-4xl">
      <Link
        href="/inspections/igmc"
        className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
      >
        <ArrowLeft className="size-3" aria-hidden="true" />
        Back to IGMC programs
      </Link>

      <PageHeader
        eyebrow={`Inspections / IGMC / ${program.sponsor}`}
        tags={
          <>
            <span className="rounded-[var(--radius-xs)] border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-foreground)]">
              {program.programNumber}
            </span>
            <Pill variant="accent">{program.sponsor}</Pill>
            <StatusPill
              status={status}
              label={
                status === "fresh"
                  ? "Verified"
                  : status === "aging"
                  ? "Aging - 6 mo"
                  : "Stale - 12 mo"
              }
            />
          </>
        }
        title={program.title}
        summary={program.summary}
      >
        <MetaRow
          items={[
            ...(program.effectiveDate
              ? [{ label: "Effective", value: formatDate(program.effectiveDate) }]
              : []),
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
            { label: "Subsections", value: program.subsections.length },
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
          Run subsection by subsection. For each item, the parsed references show the originating policy. The evidence cue points to the artifact a Marine inspector expects to see. Capture findings in your own evidence binder.
        </p>
      </section>

      <Accordion
        type="multiple"
        defaultValue={defaultOpen}
        className="space-y-3"
      >
        {program.subsections.map((sub) => (
          <AccordionItem
            key={sub.id}
            value={sub.id}
            className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] px-4"
          >
            <AccordionTrigger className="py-3 text-left text-base font-bold tracking-tight">
              <span className="flex items-center gap-3">
                <span className="rounded-[var(--radius-xs)] border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wider">
                  {sub.id}
                </span>
                <span>{sub.title}</span>
                <span className="text-[11px] font-medium text-[var(--color-subtle-foreground)]">
                  {sub.items.length} {sub.items.length === 1 ? "item" : "items"}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-5">
              {sub.description && (
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  {sub.description}
                </p>
              )}
              <ol className="space-y-3">
                {sub.items.map((item) => (
                  <li
                    key={item.code}
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
                        {item.evidenceHint && (
                          <div className="mt-3 rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-2)] p-3">
                            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
                              Evidence cue
                            </p>
                            <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                              {item.evidenceHint}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="my-8 border-t border-[var(--color-border)]" />

      <SourceCitation
        title={program.source.title}
        publisher={program.source.publisher}
        url={program.source.url}
        publisherUrl="https://www.igmc.marines.mil/Divisions/Inspections-Division/Checklists/"
      />
    </article>
  );
}
