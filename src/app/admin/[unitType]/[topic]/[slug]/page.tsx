import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  findAdminBySlug,
  getAdminContent,
  getAdminByUnitAndTopic
} from "@/lib/content/loader";
import { UNIT_TYPES, type UnitType } from "@/lib/content/schemas";
import { PageHeader } from "@/components/domain/page-header";
import { MdxContent } from "@/components/domain/mdx-content";
import { LastVerified } from "@/components/domain/last-verified";
import { SourceCitation } from "@/components/domain/source-citation";
import { ReferenceLink } from "@/components/domain/reference-link";
import { RoleChip } from "@/components/domain/role-chip";
import { RelatedPages } from "@/components/domain/related-pages";
import { PrevNextNav, type PrevNextItem } from "@/components/domain/prev-next-nav";
import { CrossRoleStrip, type CrossRoleLink } from "@/components/domain/cross-role-strip";
import { Separator } from "@/components/ui/separator";

const _UNIT_LABELS: Record<UnitType, string> = {
  "s1-g1": "S-1 / G-1",
  "i-and-i": "I&I Staff",
  pac: "PAC (IPAC)"
};

const FUNCTION_LABELS: Record<string, string> = {
  GENA: "General Administration",
  OPER: "Operational Administration",
  MPMN: "Manpower Administration",
  PERA: "Personnel Administration"
};

export async function generateStaticParams() {
  return getAdminContent().map((entry) => ({
    unitType: entry.frontmatter.unitType,
    topic: entry.frontmatter.topic,
    slug: entry.frontmatter.slug
}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ unitType: string; topic: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = findAdminBySlug(slug);
  if (!entry) return { title: "Admin" };
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary
};
}

export default async function AdminDetail({
  params
}: {
  params: Promise<{ unitType: string; topic: string; slug: string }>;
}) {
  const { unitType, topic, slug } = await params;
  if (!UNIT_TYPES.includes(unitType as UnitType)) notFound();
  const entry = findAdminBySlug(slug);
  if (!entry) notFound();
  const fm = entry.frontmatter;
  if (fm.unitType !== unitType || fm.topic !== topic) notFound();

  const ut = unitType as UnitType;
  const topicLabel = topic
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Compute prev/next within topic
  const topicEntries = getAdminByUnitAndTopic(ut, topic);
  const idx = topicEntries.findIndex((e) => e.frontmatter.slug === fm.slug);
  let prev: PrevNextItem | undefined;
  let next: PrevNextItem | undefined;
  const prevEntry = idx > 0 ? topicEntries[idx - 1] : undefined;
  const nextEntry =
    idx >= 0 && idx < topicEntries.length - 1 ? topicEntries[idx + 1] : undefined;
  if (prevEntry) {
    const p = prevEntry.frontmatter;
    prev = { title: p.title, url: `/admin/${ut}/${topic}/${p.slug}` };
  }
  if (nextEntry) {
    const n = nextEntry.frontmatter;
    next = { title: n.title, url: `/admin/${ut}/${topic}/${n.slug}` };
  }

  // Build cross-role links from relatedRoles frontmatter
  const crossRoleLinks: CrossRoleLink[] = [];
  if (fm.relatedRoles) {
    if (fm.relatedRoles.marine)
      crossRoleLinks.push({ role: "marine", title: "Marine view", href: fm.relatedRoles.marine });
    if (fm.relatedRoles.leader)
      crossRoleLinks.push({ role: "leader", title: "Leader view", href: fm.relatedRoles.leader });
    if (fm.relatedRoles.commander)
      crossRoleLinks.push({ role: "commander", title: "Commander view", href: fm.relatedRoles.commander });
  }

  return (
    <article className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow={topicLabel}
        tags={
          <>
            {fm.roles.map((r) => (
              <RoleChip key={r} role={r} size="sm" />
            ))}
            <span className="rounded-sm bg-[var(--color-primary)]/10 px-2 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
              {fm.function} - {FUNCTION_LABELS[fm.function] ?? fm.function}
            </span>
            <span className="rounded-sm bg-[var(--color-muted)] px-2 py-1 text-xs font-semibold text-[var(--color-muted-foreground)]">
              {fm.skillLevel}-level
            </span>
            <LastVerified date={fm.lastVerified} />
            {fm.sourcePolicy && (
              <span className="rounded-sm bg-[var(--color-muted)] px-2 py-1 text-xs font-semibold text-[var(--color-muted-foreground)]">
                <ReferenceLink text={fm.sourcePolicy} noIcon />
                {fm.sourceChapter && " Ch " + fm.sourceChapter}
                {fm.sourceSection && " Sec " + fm.sourceSection}
              </span>
            )}
            {fm.trEventCode && (
              <span className="rounded-sm border border-[var(--color-border)] px-2 py-1 font-mono text-xs text-[var(--color-foreground)]">
                {fm.trEventCode}
              </span>
            )}
          </>
        }
        title={fm.title}
        summary={fm.summary}
        compact
      />

      <section className="mb-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
          {fm.trEventCode ? "T&R Event Details" : "Reference Information"}
        </p>
        <dl className="mt-2 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          {fm.trEventCode && (
            <div>
              <dt className="text-xs font-semibold text-[var(--color-muted-foreground)]">
                Event Code
              </dt>
              <dd className="font-mono">{fm.trEventCode}</dd>
            </div>
          )}
          {fm.sourcePolicy && (
            <div>
              <dt className="text-xs font-semibold text-[var(--color-muted-foreground)]">
                Source Policy
              </dt>
              <dd>
                {fm.sourcePolicy}
                {fm.sourceChapter && " Ch " + fm.sourceChapter}
                {fm.sourceSection && " Sec " + fm.sourceSection}
              </dd>
            </div>
          )}
          <div>
            <dt className="text-xs font-semibold text-[var(--color-muted-foreground)]">
              MOS Performing
            </dt>
            <dd>{fm.mosPerforming.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold text-[var(--color-muted-foreground)]">
              Grades
            </dt>
            <dd>
              {fm.gradesPerforming.length > 0
                ? fm.gradesPerforming.join(", ")
                : "All grades"}
            </dd>
          </div>
          {fm.trEventCode && (
            <>
              <div>
                <dt className="text-xs font-semibold text-[var(--color-muted-foreground)]">
                  Sustainment Interval
                </dt>
                <dd>{fm.sustainmentInterval}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[var(--color-muted-foreground)]">
                  Evaluation-Coded
                </dt>
                <dd>{fm.evaluationCoded ? "Yes" : "No"}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[var(--color-muted-foreground)]">
                  Readiness-Coded
                </dt>
                <dd>{fm.readinessCoded ? "Yes" : "No"}</dd>
              </div>
            </>
          )}
        </dl>
      </section>

      {fm.performanceSteps.length > 0 && (
        <section className="mt-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
            {fm.trEventCode ? "Performance Steps (T&R)" : "Key Steps"}
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
            {fm.performanceSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      <Separator className="my-6" />

      <MdxContent source={entry.body} />

      <CrossRoleStrip links={crossRoleLinks} />

      {fm.references.length > 0 && (
        <section className="mt-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
            References
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {fm.references.map((r, i) => (
              <li key={i} className="font-mono text-xs">
                <ReferenceLink text={r} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <RelatedPages currentSlug={fm.slug} current={fm} />

      <PrevNextNav prev={prev} next={next} topicLabel={topicLabel} />

      <Separator className="my-6" />
      <SourceCitation
        title={fm.source.title}
        publisher={fm.source.publisher}
        url={fm.source.url}
      />
    </article>
  );
}
