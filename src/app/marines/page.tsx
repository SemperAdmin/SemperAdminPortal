import type { Metadata } from "next";
import Link from "next/link";
import {
  Trophy,
  Home,
  Utensils,
  DollarSign,
  Plane,
  Users,
  FileText,
  Heart,
  LifeBuoy,
  LogIn,
  CalendarDays,
  HeartHandshake,
  AlertCircle,
  Truck,
  TrendingUp,
  ClipboardList,
  RefreshCcw,
  LogOut,
  Star,
  Briefcase,
  GraduationCap,
  Shirt,
  CreditCard,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { getMarinesContent } from "@/lib/content/loader";
import {
  MARINES_PARENT_GROUPS,
  getCategoriesForGroup,
  getUngroupedCategories,
} from "@/lib/marines-categories";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
import { StatusPill } from "@/components/ui/status-pill";

export const metadata: Metadata = {
  title: "Marines",
  description:
    "What every Marine needs to know about pay, records, life events, and admin work. 21 categories covering the full lifecycle.",
};

const ICON_MAP: Record<string, LucideIcon> = {
  Trophy,
  Home,
  Utensils,
  DollarSign,
  Plane,
  Users,
  FileText,
  Heart,
  Heart2: HeartHandshake,
  LifeBuoy,
  LogIn,
  CalendarDays,
  AlertCircle,
  Truck,
  TrendingUp,
  ClipboardList,
  RefreshCcw,
  LogOut,
  Star,
  Briefcase,
  GraduationCap,
  Shirt,
  CreditCard,
};

export default function MarinesLanding() {
  const pageCounts = new Map<string, number>();
  for (const entry of getMarinesContent()) {
    const t = entry.frontmatter.topic;
    pageCounts.set(t, (pageCounts.get(t) ?? 0) + 1);
  }

  const parentGroups = [...MARINES_PARENT_GROUPS].sort((a, b) =>
    a.label.localeCompare(b.label, undefined, { sensitivity: "base" })
  );
  const ungroupedCategories = [...getUngroupedCategories()].sort((a, b) =>
    a.label.localeCompare(b.label, undefined, { sensitivity: "base" })
  );

  const groupCounts = new Map<string, number>();
  for (const group of parentGroups) {
    let total = 0;
    for (const childSlug of group.children) {
      total += pageCounts.get(childSlug) ?? 0;
    }
    groupCounts.set(group.slug, total);
  }

  const totalPages = Array.from(pageCounts.values()).reduce(
    (sum, n) => sum + n,
    0
  );
  const totalCategories = parentGroups.length + ungroupedCategories.length;

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Role view"
        tags={
          <>
            <Pill variant="marine">All Marines</Pill>
            <StatusPill status="fresh" label="Updated April 2026" />
          </>
        }
        title="ALL MARINES"
        summary="What every Marine needs to know about pay, records, life events, and admin work. Categories cover the full lifecycle from joining to retirement."
      >
        <MetaRow
          items={[
            { label: "Pages", value: totalPages },
            { label: "Categories", value: totalCategories },
            { label: "Authority", value: "MCO 5000.14D", mono: false },
          ]}
        />
      </PageHeader>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {parentGroups.map((group) => {
          const Icon = ICON_MAP[group.icon] ?? FileText;
          const count = groupCounts.get(group.slug) ?? 0;
          const childCount = getCategoriesForGroup(group.slug).length;
          return (
            <Link
              key={group.slug}
              href={`/marines/${group.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-usmc-scarlet)]/30 bg-[var(--color-card)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--color-usmc-scarlet)] hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-[color-mix(in_srgb,var(--color-usmc-scarlet)_14%,transparent)] text-[var(--color-usmc-scarlet)]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Pill variant="marine" size="xs">Group</Pill>
                  {count > 0 && (
                    <span className="rounded-sm bg-[color-mix(in_srgb,var(--color-usmc-scarlet)_10%,transparent)] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[var(--color-usmc-scarlet)]">
                      {count}
                    </span>
                  )}
                </div>
              </div>
              <h2 className="text-sm font-bold leading-tight">{group.shortLabel}</h2>
              <p className="mt-1 text-xs text-[var(--color-muted-foreground)] leading-snug">
                {group.description}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-[var(--color-border)] pt-2 text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--color-subtle-foreground)]">
                <span>{childCount} topics</span>
                <span className="inline-flex items-center gap-1 text-[var(--color-usmc-scarlet)]">
                  Open
                  <ArrowRight className="size-3" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}

        {ungroupedCategories.map((cat) => {
          const Icon = ICON_MAP[cat.icon] ?? FileText;
          const count = pageCounts.get(cat.slug) ?? 0;
          return (
            <Link
              key={cat.slug}
              href={`/marines/${cat.slug}`}
              className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-surface-2)] text-[var(--color-muted-foreground)]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                {cat.pageType !== "leaf" && count > 0 && (
                  <span className="rounded-sm bg-[var(--color-surface-2)] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[var(--color-muted-foreground)]">
                    {count}
                  </span>
                )}
              </div>
              <h2 className="text-sm font-bold leading-tight">{cat.shortLabel}</h2>
              <p className="mt-1 text-xs text-[var(--color-muted-foreground)] leading-snug">
                {cat.description}
              </p>
            </Link>
          );
        })}
      </div>

      <section className="mt-10 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
        <h2 className="text-base font-bold">How content is organized</h2>
        <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
          Same topic, different role. A Marine sees BAH eligibility. A leader
          sees how to coach Marines on BAH errors. Admin sees BAH processing
          procedures. Commander sees BAH approval authority and audit posture.
          Cross-links surface other role views on every page.
        </p>
        <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
          Every page cites source policy with chapter and section. Use the
          Search and Citations Index to find content by policy reference.
        </p>
      </section>
    </div>
  );
}
