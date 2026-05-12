import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { } from "lucide-react";
import {
  findRoleContentByTopicAndSlug,
  getCommanderContent,
  getRoleContentByTopic
} from "@/lib/content/loader";
import { MdxContent } from "@/components/domain/mdx-content";
import { LastVerified } from "@/components/domain/last-verified";
import { SourceCitation } from "@/components/domain/source-citation";
import { ReferenceLink } from "@/components/domain/reference-link";
import { RoleChip } from "@/components/domain/role-chip";
import { RelatedPages } from "@/components/domain/related-pages";
import { PrevNextNav, type PrevNextItem } from "@/components/domain/prev-next-nav";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  return getCommanderContent().map((entry) => ({
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
  const entry = findRoleContentByTopicAndSlug(getCommanderContent(), topic, slug);
  if (!entry) return { title: "Commander" };
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary
};
}

export default async function CommanderDetail({
  params
}: {
  params: Promise<{ topic: string; slug: string }>;
}) {
  const { topic, slug } = await params;
  const entry = findRoleContentByTopicAndSlug(getCommanderContent(), topic, slug);
  if (!entry) notFound();
  const fm = entry.frontmatter;

  const topicLabel = topic
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Compute prev/next within topic
  const topicEntries = getRoleContentByTopic(getCommanderContent(), topic);
  const idx = topicEntries.findIndex((e) => e.frontmatter.slug === fm.slug);
  let prev: PrevNextItem | undefined;
  let next: PrevNextItem | undefined;
  const prevEntry = idx > 0 ? topicEntries[idx - 1] : undefined;
  const nextEntry =
    idx >= 0 && idx < topicEntries.length - 1 ? topicEntries[idx + 1] : undefined;
  if (prevEntry) {
    const p = prevEntry.frontmatter;
    prev = { title: p.title, url: `/commander/${topic}/${p.slug}` };
  }
  if (nextEntry) {
    const n = nextEntry.frontmatter;
    next = { title: n.title, url: `/commander/${topic}/${n.slug}` };
  }

  return (
    <article className="mx-auto max-w-3xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
        {fm.trEventCode && (
          <span className="rounded-sm border border-[var(--color-border)] px-2 py-1 font-mono text-[10px] text-[var(--color-foreground)]">
            T&R {fm.trEventCode}
          </span>
        )}
        {fm.sourcePolicy && (
          <span className="rounded-sm bg-[var(--color-muted)] px-2 py-1 text-[10px] font-semibold text-[var(--color-muted-foreground)]">
            <ReferenceLink text={fm.sourcePolicy} noIcon />
            {fm.sourceChapter && ` Ch ${fm.sourceChapter}`}
            {fm.sourceSection && ` Sec ${fm.sourceSection}`}
          </span>
        )}
        <LastVerified date={fm.lastVerified} />
      </div>

      <h1
        className="text-4xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {fm.title}
      </h1>
      <p className="mt-2 text-[var(--color-muted-foreground)]">{fm.summary}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {fm.roles.map((r) => (
          <RoleChip key={r} role={r} size="sm" />
        ))}
      </div>

      {fm.performanceSteps.length > 0 && (
        <section className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
            Command Actions
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

      {fm.relatedRoles && (
        <section className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
            How other roles handle this
          </p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {fm.relatedRoles.marine && (
              <li>
                <Link
                  href={fm.relatedRoles.marine}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Marine view
                </Link>{" "}
                <span className="text-[var(--color-muted-foreground)]">
                  - what individual Marines own
                </span>
              </li>
            )}
            {fm.relatedRoles.admin && (
              <li>
                <Link
                  href={fm.relatedRoles.admin}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Admin view
                </Link>{" "}
                <span className="text-[var(--color-muted-foreground)]">
                  - the processing side at S-1 or PAC
                </span>
              </li>
            )}
            {fm.relatedRoles.leader && (
              <li>
                <Link
                  href={fm.relatedRoles.leader}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Leader view
                </Link>{" "}
                <span className="text-[var(--color-muted-foreground)]">
                  - NCO and SNCO oversight
                </span>
              </li>
            )}
          </ul>
        </section>
      )}

      {fm.references.length > 0 && (
        <section className="mt-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-4">
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
