import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  findRoleContentByTopicAndSlug,
  getMarinesContent,
  getRoleContentByTopic
} from "@/lib/content/loader";
import {
  findMarinesCategory,
  findParentGroupForCategory
} from "@/lib/marines-categories";
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

export async function generateStaticParams() {
  // Skip leaf-category topics. Leaf topics render their single MDX file at
  // /marines/[topic] directly, so no /marines/[topic]/[slug] sub-pages exist
  // for them.
  return getMarinesContent()
    .filter((entry) => {
      const cat = findMarinesCategory(entry.frontmatter.topic);
      return cat?.pageType !== "leaf";
    })
    .map((entry) => ({
      topic: entry.frontmatter.topic,
      slug: entry.frontmatter.slug
}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ topic: string; slug: string }>;
}): Promise<Metadata> {
  const { topic, slug } = await params;
  const entry = findRoleContentByTopicAndSlug(getMarinesContent(), topic, slug);
  if (!entry) return { title: "Marines" };
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary
};
}

export default async function MarinesDetail({
  params
}: {
  params: Promise<{ topic: string; slug: string }>;
}) {
  const { topic, slug } = await params;
  const entry = findRoleContentByTopicAndSlug(getMarinesContent(), topic, slug);
  if (!entry) notFound();
  const fm = entry.frontmatter;

  // If the topic is a leaf category, the slug page should not be reachable.
  // Send users to /marines/[topic] instead.
  const cat = findMarinesCategory(topic);
  if (cat?.pageType === "leaf") notFound();

  const topicLabel = cat?.label ?? topic
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const _parentGroup = cat ? findParentGroupForCategory(cat.slug) : undefined;

  // Compute prev/next within topic
  const topicEntries = getRoleContentByTopic(getMarinesContent(), topic);
  const idx = topicEntries.findIndex((e) => e.frontmatter.slug === fm.slug);
  let prev: PrevNextItem | undefined;
  let next: PrevNextItem | undefined;
  const prevEntry = idx > 0 ? topicEntries[idx - 1] : undefined;
  const nextEntry =
    idx >= 0 && idx < topicEntries.length - 1 ? topicEntries[idx + 1] : undefined;
  if (prevEntry) {
    const p = prevEntry.frontmatter;
    prev = { title: p.title, url: `/marines/${topic}/${p.slug}` };
  }
  if (nextEntry) {
    const n = nextEntry.frontmatter;
    next = { title: n.title, url: `/marines/${topic}/${n.slug}` };
  }

  // Build cross-role links from relatedRoles frontmatter
  const crossRoleLinks: CrossRoleLink[] = [];
  if (fm.relatedRoles) {
    if (fm.relatedRoles.admin)
      crossRoleLinks.push({ role: "admin", title: "Admin view", href: fm.relatedRoles.admin });
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
            <LastVerified date={fm.lastVerified} />
            {fm.sourcePolicy && (
              <span className="rounded-sm bg-[var(--color-muted)] px-2 py-1 text-[10px] font-semibold text-[var(--color-muted-foreground)]">
                <ReferenceLink text={fm.sourcePolicy} noIcon />
                {fm.sourceChapter && <span>Ch {fm.sourceChapter}</span>}
                {fm.sourceSection && <span>Sec {fm.sourceSection}</span>}
              </span>
            )}
            {fm.trEventCode && (
              <span className="rounded-sm border border-[var(--color-border)] px-2 py-1 font-mono text-[10px] text-[var(--color-foreground)]">
                T&R {fm.trEventCode}
              </span>
            )}
          </>
        }
        title={fm.title}
        summary={fm.summary}
        compact
      />

      {fm.performanceSteps.length > 0 && (
        <section className="mb-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
            Quick Steps
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
            {fm.performanceSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      <MdxContent source={entry.body} />

      <CrossRoleStrip links={crossRoleLinks} />

      {fm.references.length > 0 && (
        <section className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
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
