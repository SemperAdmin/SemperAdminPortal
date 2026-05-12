import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicies, findBySlug } from "@/lib/content/loader";
import { MdxContent } from "@/components/domain/mdx-content";
import { PolicyBadge } from "@/components/domain/policy-badge";
import { LastVerified } from "@/components/domain/last-verified";
import { SourceCitation } from "@/components/domain/source-citation";
import { RoleChip } from "@/components/domain/role-chip";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Callout } from "@/components/domain/callout";
import { TableOfContents } from "@/components/domain/toc";

export async function generateStaticParams() {
  return getPolicies().map((p) => ({ slug: p.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = findBySlug(getPolicies(), slug);
  if (!entry) return { title: "Policy" };
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
  };
}

export default async function PolicyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = findBySlug(getPolicies(), slug);
  if (!entry) notFound();
  const fm = entry.frontmatter;

  // Classify staleness for source-check callout
  const verifiedDate = new Date(fm.lastVerified);
  const monthsOld =
    (Date.now() - verifiedDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
  const isStale = monthsOld >= 24;
  const isAging = monthsOld >= 12 && monthsOld < 24;

  return (
    <div className="flex gap-10 xl:gap-14">
      <article className="min-w-0 max-w-3xl flex-1">
        <PageHeader
          compact
          tags={
            <>
              <PolicyBadge kind={fm.kind} number={fm.number} />
              {fm.roles.map((r) => (
                <RoleChip key={r} role={r} size="sm" />
              ))}
              <LastVerified date={fm.lastVerified} />
            </>
          }
          title={fm.title}
          summary={fm.summary}
        >
          <MetaRow
            items={[
              { label: "Effective", value: fm.effectiveDate },
              ...(fm.supersedes
                ? [{ label: "Supersedes", value: fm.supersedes }]
                : []),
              { label: "Authority", value: `${fm.kind} ${fm.number}`, mono: false },
            ]}
          />
        </PageHeader>

        {(isStale || isAging) && (
          <Callout
            variant={isStale ? "danger" : "warning"}
            title={isStale ? "Stale source" : "Aging source"}
          >
            This policy was last verified{" "}
            {Math.round(monthsOld)} months ago. Confirm against the current
            authority before action.
          </Callout>
        )}

        <Callout variant="source-check">
          Always verify against the source order. This summary aggregates open-source
          policy and is not an official Department of the Navy or Marine Corps
          publication.
        </Callout>

        <MdxContent source={entry.body} />

        <div className="mt-10 border-t border-[var(--color-border)] pt-5">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            Source
          </p>
          <SourceCitation
            title={fm.source.title}
            publisher={fm.source.publisher}
            url={fm.source.url}
          />
        </div>
      </article>

      <TableOfContents containerSelector="article" minHeadings={3} />
    </div>
  );
}
