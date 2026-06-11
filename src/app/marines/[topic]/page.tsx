import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, FileText } from "lucide-react";
import {
  findRoleContentBySlug,
  getMarinesContent,
  getRoleContentByTopic,
} from "@/lib/content/loader";
import {
  MARINES_CATEGORIES,
  findMarinesCategory,
  findMarinesParentGroup,
  findParentGroupForCategory,
  getCategoriesForGroup,
  type MarinesParentGroup,
  type MarinesCategory,
} from "@/lib/marines-categories";
import { MdxContent } from "@/components/domain/mdx-content";
import { LastVerified } from "@/components/domain/last-verified";
import { SourceCitation } from "@/components/domain/source-citation";
import { RoleChip } from "@/components/domain/role-chip";
import { RelatedPages } from "@/components/domain/related-pages";
import { PrevNextNav, type PrevNextItem } from "@/components/domain/prev-next-nav";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  // Generate static params for ALL 21 categories so empty categories render an empty state
  return MARINES_CATEGORIES.map((c) => ({ topic: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const cat = findMarinesCategory(topic);
  if (!cat) {
    // Check for parent group slugs before falling back to generic title.
    const group = findMarinesParentGroup(topic);
    if (group) {
      return {
        title: `${group.label} - Marines`,
        description: group.description,
      };
    }
    return {
      title: `${topic.replace(/-/g, " ")} - Marines`,
      description: `Marines content for ${topic}.`,
    };
  }

  // For leaf categories, prefer the underlying MDX page's title and summary
  if (cat.pageType === "leaf") {
    const entry = findRoleContentBySlug(getMarinesContent(), cat.slug);
    if (entry) {
      return {
        title: `${entry.frontmatter.title} - Marines`,
        description: entry.frontmatter.summary,
      };
    }
  }

  return {
    title: `${cat.label} - Marines`,
    description: cat.description,
  };
}

export default async function MarinesTopicIndex({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const cat = findMarinesCategory(topic);

  // Turbopack dev-mode can route parent group slugs (e.g. /marines/promotions)
  // to this dynamic segment instead of the dedicated static route files.
  // Render the group landing here so the user sees content instead of a 404.
  // In production (output:export) the static files always win, so this branch
  // is only ever reached in dev mode.
  if (!cat) {
    const group = findMarinesParentGroup(topic);
    if (group) {
      const categories = getCategoriesForGroup(topic);
      const pageCounts = new Map<string, number>();
      for (const entry of getMarinesContent()) {
        const t = entry.frontmatter.topic;
        pageCounts.set(t, (pageCounts.get(t) ?? 0) + 1);
      }
      return <MarinesGroupFallback group={group} categories={categories} pageCounts={pageCounts} />;
    }
    notFound();
  }

  // Leaf categories render the single MDX wiki page directly.
  // The MDX file has slug equal to the topic slug.
  if (cat.pageType === "leaf") {
    return <LeafTopicPage topic={topic} />;
  }

  // Container categories render the list of sub-pages.
  // getRoleContentByTopic returns entries in canonical order:
  // Overview first, then alphabetical by title.
  const sortedEntries = getRoleContentByTopic(getMarinesContent(), topic);
  const _containerParentGroup = findParentGroupForCategory(cat.slug);

  return (
    <div className="mx-auto max-w-5xl">
            <header className="mb-6">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {cat.label}
        </h1>
        <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
          {cat.description}
        </p>
      </header>

      {sortedEntries.length === 0 ? (
        <div className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] bg-[var(--color-muted)]/40 p-8 text-center">
          <FileText
            className="mx-auto size-8 opacity-40"
            aria-hidden="true"
          />
          <p className="mt-3 text-sm font-semibold">
            No content yet for this category
          </p>
          <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">
            Pages will be added here as content is published.
          </p>
          <Link
            href="/marines"
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            <ChevronRight className="size-3.5 rotate-180" aria-hidden="true" />
            Back to All Categories
          </Link>
        </div>
      ) : (
        <ul className="space-y-2">
          {sortedEntries.map((entry) => {
            const fm = entry.frontmatter;
            return (
              <li key={fm.slug}>
                <Link
                  href={`/marines/${topic}/${fm.slug}`}
                  className="group flex items-start justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]/40"
                >
                  <div className="min-w-0">
                    <p className="font-semibold">{fm.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                      {fm.summary}
                    </p>
                  </div>
                  <ChevronRight
                    className="mt-1 size-4 shrink-0 opacity-40 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/**
 * Fallback render for parent group slugs intercepted by the dynamic segment.
 * Mirrors the structure of the dedicated static route pages without the
 * group-specific source authority text (that lives in the static files).
 */
function MarinesGroupFallback({
  group,
  categories,
  pageCounts,
}: {
  group: MarinesParentGroup;
  categories: MarinesCategory[];
  pageCounts: Map<string, number>;
}) {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-8">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {group.label}
        </h1>
        <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
          {group.description}
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((child) => {
          const count = pageCounts.get(child.slug) ?? 0;
          return (
            <Link
              key={child.slug}
              href={`/marines/${child.slug}`}
              className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]/40"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="inline-flex size-9 items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <FileText className="size-5" aria-hidden="true" />
                </div>
                {child.pageType !== "leaf" && count > 0 && (
                  <span className="rounded-sm bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-[10px] font-bold text-[var(--color-primary)]">
                    {count}
                  </span>
                )}
              </div>
              <h2 className="text-sm font-bold leading-tight">{child.label}</h2>
              <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                {child.description}
              </p>
            </Link>
          );
        })}
      </div>

      {categories.length === 0 && (
        <div className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] bg-[var(--color-muted)]/40 p-8 text-center">
          <FileText className="mx-auto size-8 opacity-40" aria-hidden="true" />
          <p className="mt-3 text-sm font-semibold">No categories yet</p>
          <Link
            href="/marines"
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            <ChevronRight className="size-3.5 rotate-180" aria-hidden="true" />
            Back to All Categories
          </Link>
        </div>
      )}
    </div>
  );
}

/**
 * Renders a leaf category as a single wiki page.
 * The MDX file with slug == topic slug provides the content.
 */
function LeafTopicPage({ topic }: { topic: string }) {
  const cat = findMarinesCategory(topic);
  if (!cat) notFound();

  const parentGroup = findParentGroupForCategory(cat.slug);
  const entry = findRoleContentBySlug(getMarinesContent(), topic);
  if (!entry || entry.frontmatter.topic !== topic) {
    // Leaf category exists but content not yet published. Render an empty state.
    return (
      <div className="mx-auto max-w-3xl">
              <header className="mb-6">
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {cat.label}
          </h1>
          <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
            {cat.description}
          </p>
        </header>

        <div className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] bg-[var(--color-muted)]/40 p-8 text-center">
          <FileText
            className="mx-auto size-8 opacity-40"
            aria-hidden="true"
          />
          <p className="mt-3 text-sm font-semibold">
            Content for this page is not yet published.
          </p>
          <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">
            Check back soon.
          </p>
          <Link
            href="/marines"
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            <ChevronRight className="size-3.5 rotate-180" aria-hidden="true" />
            Back to All Categories
          </Link>
        </div>
      </div>
    );
  }

  const fm = entry.frontmatter;

  // Compute prev/next within the parent group's children list (alphabetical
  // order as defined in marines-categories.ts). Only renders if the leaf
  // belongs to a parent group.
  let prev: PrevNextItem | undefined;
  let next: PrevNextItem | undefined;
  if (parentGroup) {
    const siblings = getCategoriesForGroup(parentGroup.slug);
    const idx = siblings.findIndex((c) => c.slug === cat.slug);
    if (idx > 0) {
      const p = siblings[idx - 1];
      if (p) prev = { title: p.label, url: `/marines/${p.slug}` };
    }
    if (idx >= 0 && idx < siblings.length - 1) {
      const n = siblings[idx + 1];
      if (n) next = { title: n.label, url: `/marines/${n.slug}` };
    }
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
            {fm.sourcePolicy}
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
        <section className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4">
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

      <Separator className="my-6" />

      <MdxContent source={entry.body} />

      {fm.relatedRoles && (
        <section className="mt-8 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
            How other roles handle this
          </p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {fm.relatedRoles.admin && (
              <li>
                <Link
                  href={fm.relatedRoles.admin}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Admin view
                </Link>{" "}
                <span className="text-[var(--color-muted-foreground)]">
                  - the processing side
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
                  - your NCO and SNCO oversight
                </span>
              </li>
            )}
            {fm.relatedRoles.commander && (
              <li>
                <Link
                  href={fm.relatedRoles.commander}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Commander view
                </Link>{" "}
                <span className="text-[var(--color-muted-foreground)]">
                  - command authority and decisions
                </span>
              </li>
            )}
          </ul>
        </section>
      )}

      {fm.references.length > 0 && (
        <section className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
            References
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {fm.references.map((r, i) => (
              <li key={i} className="font-mono text-xs">
                {r}
              </li>
            ))}
          </ul>
        </section>
      )}

      <RelatedPages currentSlug={fm.slug} current={fm} />

      <PrevNextNav
        prev={prev}
        next={next}
        topicLabel={parentGroup?.label}
      />

      <Separator className="my-6" />
      <SourceCitation
        title={fm.source.title}
        publisher={fm.source.publisher}
        url={fm.source.url}
      />
    </article>
  );
}
