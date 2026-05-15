import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  getCommanderContent,
  getRoleContentByTopic
} from "@/lib/content/loader";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
export async function generateStaticParams() {
  const seen = new Set<string>();
  const params: { topic: string }[] = [];
  for (const entry of getCommanderContent()) {
    if (seen.has(entry.frontmatter.topic)) continue;
    seen.add(entry.frontmatter.topic);
    params.push({ topic: entry.frontmatter.topic });
  }
  return params;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const label = topic.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${label} - Commander`,
    description: `Commander reference for ${label}. Authority-anchored policy summaries, signing actions, and procedures.`
  };
}

export default async function CommanderTopicIndex({
  params
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const sortedEntries = getRoleContentByTopic(getCommanderContent(), topic);
  if (sortedEntries.length === 0) notFound();

  const topicLabel = topic
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow="Commander"
        tags={<Pill variant="commander">{topicLabel}</Pill>}
        title={topicLabel.toUpperCase()}
        summary={`${topicLabel} reference for battalion and squadron commanders. Authority-anchored policy summaries and signing actions.`}
        compact
      >
        <MetaRow
          items={[{ label: "Pages", value: sortedEntries.length }]}
        />
      </PageHeader>

      <ul className="space-y-2">
        {sortedEntries.map((entry) => {
          const fm = entry.frontmatter;
          return (
            <li key={fm.slug}>
              <Link
                href={`/commander/${topic}/${fm.slug}`}
                className="group flex items-start justify-between gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
              >
                <div className="min-w-0">
                  <p className="font-semibold tracking-tight">{fm.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted-foreground)] leading-snug">
                    {fm.summary}
                  </p>
                </div>
                <ChevronRight
                  className="mt-1 size-4 shrink-0 text-[var(--color-subtle-foreground)] transition-colors group-hover:text-[var(--color-foreground)]"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
