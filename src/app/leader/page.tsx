import type { Metadata } from "next";
import Link from "next/link";
import {
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
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { getLeaderContent } from "@/lib/content/loader";
import {
  LEADER_PARENT_GROUPS,
  getCategoriesForLeaderGroup,
} from "@/lib/leader-categories";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
import { StatusPill } from "@/components/ui/status-pill";

export const metadata: Metadata = {
  title: "Leader",
  description:
    "NCO, SNCO, and Officer content. How leaders coach Marines, verify records, run section readiness, counsel against MCO 1500.61 and NAVMC 2795, and bridge members to S-1 and PAC processes.",
};

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

export default function LeaderLanding() {
  const all = getLeaderContent();

  // Page count per parent group, derived from MDX topic field.
  const pageCounts = new Map<string, number>();
  for (const entry of all) {
    const t = entry.frontmatter.topic;
    pageCounts.set(t, (pageCounts.get(t) ?? 0) + 1);
  }

  const groups = [...LEADER_PARENT_GROUPS].sort((a, b) =>
    a.label.localeCompare(b.label, undefined, { sensitivity: "base" })
  );

  const totalPages = all.length;
  const totalGroups = groups.length;

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Role view"
        tags={
          <>
            <Pill variant="leader">NCO / SNCO / Officer</Pill>
            <StatusPill status="fresh" label="Updated April 2026" />
          </>
        }
        title="LEADER"
        summary="You coach your Marines, verify their records, run counseling against MCO 1500.61, and bridge members to S-1 and PAC. Groups below cover your role across the section."
      >
        <MetaRow
          items={[
            { label: "Pages", value: totalPages },
            { label: "Groups", value: totalGroups },
            { label: "Audience", value: "E-4 to E-9", mono: false },
          ]}
        />
      </PageHeader>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {groups.map((group) => {
          const Icon = ICON_MAP[group.icon] ?? FileText;
          const count = pageCounts.get(group.slug) ?? 0;
          const childCount = getCategoriesForLeaderGroup(group.slug).length;
          return (
            <Link
              key={group.slug}
              href={`/leader/${group.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-brass)]/30 bg-[var(--color-card)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--color-brass)] hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-[color-mix(in_srgb,var(--color-brass)_14%,transparent)] text-[var(--color-brass)]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Pill variant="leader" size="xs">
                    Group
                  </Pill>
                  {count > 0 && (
                    <span className="rounded-sm bg-[color-mix(in_srgb,var(--color-brass)_10%,transparent)] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[var(--color-brass)]">
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
                <span>
                  {childCount > 0
                    ? `${childCount} ${childCount === 1 ? "topic" : "topics"}`
                    : "Coming soon"}
                </span>
                <span className="inline-flex items-center gap-1 text-[var(--color-brass)]">
                  Open
                  <ArrowRight className="size-3" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <section className="mt-10 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
        <h2 className="text-base font-bold">How leader content works</h2>
        <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
          You see the procedural how-to. The Marine view of the same topic shows what the individual owns. The Admin view shows the processing path through S-1 and PAC. The Commander view shows authorities and decisions. Every page surfaces the other role views through the cross-role strip.
        </p>
        <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
          Counseling cites MCO 1500.61 and NAVMC 2795. Performance evaluation cites MCO 1610.7 and the JEPES MARADMINs. Records and discipline cite MCO 5000.14D, IRAM, and MCO P5800.16.
        </p>
      </section>
    </div>
  );
}
