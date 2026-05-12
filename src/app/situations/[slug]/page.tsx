import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSituations, findBySlug } from "@/lib/content/loader";
import { MdxContent } from "@/components/domain/mdx-content";
import { LastVerified } from "@/components/domain/last-verified";
import { SourceCitation } from "@/components/domain/source-citation";
import { RoleChip } from "@/components/domain/role-chip";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { TableOfContents } from "@/components/domain/toc";
import { Pill } from "@/components/ui/pill";

export async function generateStaticParams() {
  return getSituations().map((s) => ({ slug: s.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = findBySlug(getSituations(), slug);
  if (!entry) return { title: "Situation" };
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
  };
}

export default async function SituationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = findBySlug(getSituations(), slug);
  if (!entry) notFound();
  const fm = entry.frontmatter;

  return (
    <div className="flex gap-10 xl:gap-14">
      <article className="min-w-0 max-w-3xl flex-1">
        <PageHeader
          compact
          tags={
            <>
              <Pill variant="neutral">{fm.scenario}</Pill>
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
              { label: "Scenario", value: fm.scenario, mono: false },
              { label: "Authority", value: fm.source.title, mono: false },
            ]}
          />
        </PageHeader>

        {fm.prerequisites && fm.prerequisites.length > 0 && (
          <section className="mb-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
              Prerequisites
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm marker:text-[var(--color-usmc-scarlet)]">
              {fm.prerequisites.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        )}

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
