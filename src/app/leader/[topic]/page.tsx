import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  MessageSquare,
  Users,
  FileText,
  ClipboardList,
  AlertCircle,
  Heart,
  DollarSign,
  Award,
  TrendingUp,
  Target,
  Workflow,
  ShieldAlert,
  Briefcase,
  BookOpen,
  Compass,
  ListChecks,
  Eye,
  Calendar,
  FileSearch,
  Plane,
  Map as MapIcon,
  type LucideIcon,
} from "lucide-react";
import {
  getLeaderContent,
  getRoleContentByTopic,
} from "@/lib/content/loader";
import {
  findLeaderParentGroup,
  getCategoriesForLeaderGroup,
  LEADER_PARENT_GROUPS,
} from "@/lib/leader-categories";

const ICON_MAP: Record<string, LucideIcon> = {
  MessageSquare,
  Users,
  FileText,
  ClipboardList,
  AlertCircle,
  Heart,
  DollarSign,
  Award,
  TrendingUp,
  Target,
  Workflow,
  ShieldAlert,
  Briefcase,
  BookOpen,
  Compass,
  ListChecks,
  Eye,
  Calendar,
  FileSearch,
  Plane,
  Map: MapIcon,
};

export async function generateStaticParams() {
  // Generate one route per parent group plus one per MDX topic in case the
  // registry lags behind content.
  const params = new Set<string>();
  for (const group of LEADER_PARENT_GROUPS) {
    params.add(group.slug);
  }
  for (const entry of getLeaderContent()) {
    params.add(entry.frontmatter.topic);
  }
  return Array.from(params).map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const group = findLeaderParentGroup(topic);
  if (group) {
    return {
      title: `${group.label} - Leader`,
      description: group.description,
    };
  }
  return {
    title: `${topic.replace(/-/g, " ")} - Leader`,
    description: `Leader content for ${topic}.`,
  };
}

export default async function LeaderTopicIndex({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const group = findLeaderParentGroup(topic);
  const sortedEntries = getRoleContentByTopic(getLeaderContent(), topic);

  // No registered group and no content. 404.
  if (!group && sortedEntries.length === 0) notFound();

  const topicLabel = group?.label
    ? group.label
    : topic
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

  const GroupIcon = group ? ICON_MAP[group.icon] ?? FileText : FileText;

  // If the parent group is registered with children, render category cards.
  // Otherwise fall back to the leaf banner list driven by MDX.
  const childCategories = group ? getCategoriesForLeaderGroup(group.slug) : [];
  const hasRegisteredChildren = childCategories.length > 0;

  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-8 flex items-start gap-4">
        <div className="inline-flex size-12 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-brass)_14%,transparent)] text-[var(--color-brass)]">
          <GroupIcon className="size-6" aria-hidden="true" />
        </div>
        <div>
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {topicLabel}
          </h1>
          <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
            {group?.description ?? `Leader content tagged for ${topicLabel}.`}
          </p>
        </div>
      </header>

      {hasRegisteredChildren ? (
        (() => {
          // Group children by subtype. Items without a subtype render in a default lead group.
          const groups = new Map<string, typeof childCategories>();
          const ungrouped: typeof childCategories = [];
          for (const cat of childCategories) {
            if (cat.subtype) {
              const list = groups.get(cat.subtype) ?? [];
              list.push(cat);
              groups.set(cat.subtype, list);
            } else {
              ungrouped.push(cat);
            }
          }
          const renderCard = (cat: typeof childCategories[number]) => {
            const Icon = ICON_MAP[cat.icon] ?? FileText;
            return (
              <Link
                key={cat.slug}
                href={`/leader/${cat.parentGroup}/${cat.leafSlug}`}
                className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--color-brass)] hover:shadow-[var(--shadow-md)]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-[color-mix(in_srgb,var(--color-brass)_14%,transparent)] text-[var(--color-brass)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <h2 className="text-sm font-bold leading-tight">{cat.label}</h2>
                <p className="mt-1 text-xs text-[var(--color-muted-foreground)] leading-snug">
                  {cat.description}
                </p>
              </Link>
            );
          };
          const subtypeOrder = Array.from(groups.keys());
          return (
            <div className="space-y-8">
              {ungrouped.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {ungrouped.map(renderCard)}
                </div>
              )}
              {subtypeOrder.map((subtype) => (
                <section key={subtype}>
                  <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
                    {subtype}
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {groups.get(subtype)!.map(renderCard)}
                  </div>
                </section>
              ))}
            </div>
          );
        })()
      ) : sortedEntries.length > 0 ? (
        <ul className="space-y-2">
          {sortedEntries.map((entry) => {
            const fm = entry.frontmatter;
            return (
              <li key={fm.slug}>
                <Link
                  href={`/leader/${topic}/${fm.slug}`}
                  className="group flex items-start justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-brass)] hover:bg-[var(--color-muted)]/40"
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
      ) : (
        <section className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] p-8 text-center text-sm text-[var(--color-muted-foreground)]">
          Content for this group is on the build plan. Check back as the next
          phase rolls out.
        </section>
      )}
    </div>
  );
}
