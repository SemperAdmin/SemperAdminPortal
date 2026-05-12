import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  getCommanderContent,
  getRoleContentByTopic
} from "@/lib/content/loader";

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
  return {
    title: `${topic.replace(/-/g, " ")} - Commander`,
    description: `Commander content for ${topic}.`
};
}

export default async function CommanderTopicIndex({
  params
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  // getRoleContentByTopic returns entries in canonical order:
  // Overview first, then alphabetical by title.
  const sortedEntries = getRoleContentByTopic(getCommanderContent(), topic);
  if (sortedEntries.length === 0) notFound();

  const topicLabel = topic
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="mx-auto max-w-5xl">
            <header className="mb-6">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {topicLabel}
        </h1>
        <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
          Commander content tagged for {topicLabel}.
        </p>
      </header>

      <ul className="space-y-2">
        {sortedEntries.map((entry) => {
          const fm = entry.frontmatter;
          return (
            <li key={fm.slug}>
              <Link
                href={`/commander/${topic}/${fm.slug}`}
                className="group flex items-start justify-between gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]/40"
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
    </div>
  );
}
