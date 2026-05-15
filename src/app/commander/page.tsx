import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, LayoutDashboard } from "lucide-react";
import { getCommanderContent } from "@/lib/content/loader";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
import { StatusPill } from "@/components/ui/status-pill";
import { EmptyState } from "@/components/domain/empty-state";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Commander",
  description:
    "Command-level admin authority, signing actions, and personnel decisions. Per MCO 5000.14D commanders are responsible for the accuracy of their Marines' military records.",
};

// Operational priority order. Topics not listed sort alphabetically after.
const TOPIC_PRIORITY: Record<string, number> = {
  "battle-rhythm": 1,
  "discipline-and-records": 2,
  "incident-playbooks": 3,
  "force-preservation": 4,
  "turnover": 5,
  "personnel-decisions": 6,
  "oversight-matrix": 7,
  "inspections-lifecycle": 8,
  "relationships": 9,
  "audit-posture": 10,
  "aviation": 11,
};

function topicOrder(topic: string): number {
  return TOPIC_PRIORITY[topic] ?? 99;
}

export default function CommanderLanding() {
  const all = getCommanderContent();
  const byTopic = new Map<string, typeof all>();
  for (const entry of all) {
    const t = entry.frontmatter.topic;
    if (!byTopic.has(t)) byTopic.set(t, []);
    byTopic.get(t)!.push(entry);
  }
  const topics = Array.from(byTopic.entries()).sort(
    (a, b) => topicOrder(a[0]) - topicOrder(b[0]) || a[0].localeCompare(b[0])
  );

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow="Role view"
        tags={
          <>
            <Pill variant="commander">XO / CoS / CO</Pill>
            <StatusPill status="fresh" label="Updated April 2026" />
          </>
        }
        title="COMMANDER"
        summary="Command authority on personnel decisions, discipline, awards, and relationships with IPAC and S-1. Per MCO 5000.14D Enclosure 3 you own 19 specific responsibilities for your Marines' records."
      >
        <MetaRow
          items={[
            { label: "Pages", value: all.length },
            { label: "Topics", value: topics.length },
            { label: "Authority", value: "MCO 5000.14D", mono: false },
          ]}
        />
      </PageHeader>

      {/* Quick access */}
      <div className="mb-8 grid gap-3 sm:grid-cols-2">
        <Link
          href="/commander/dashboard"
          className="group flex items-center gap-4 rounded-[var(--radius-md)] border border-[var(--color-role-commander)]/30 bg-[var(--color-role-commander)]/5 p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--color-role-commander)]/60 hover:shadow-[var(--shadow-md)]"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-role-commander)]/15">
            <LayoutDashboard className="size-5 text-[var(--color-role-commander)]" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-semibold tracking-tight">Compliance dashboard</p>
            <p className="mt-0.5 text-sm text-[var(--color-muted-foreground)]">
              Recurring obligations by cadence. Deadlines surfaced.
            </p>
          </div>
          <ChevronRight className="ml-auto size-4 shrink-0 text-[var(--color-subtle-foreground)] transition-colors group-hover:text-[var(--color-foreground)]" aria-hidden="true" />
        </Link>

        <Link
          href="/commander/oversight-matrix/overview"
          className="group flex items-center gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-muted)]">
            <BookOpen className="size-5 text-[var(--color-muted-foreground)]" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-semibold tracking-tight">Oversight matrix</p>
            <p className="mt-0.5 text-sm text-[var(--color-muted-foreground)]">
              Signature authorities and delegation boundaries.
            </p>
          </div>
          <ChevronRight className="ml-auto size-4 shrink-0 text-[var(--color-subtle-foreground)] transition-colors group-hover:text-[var(--color-foreground)]" aria-hidden="true" />
        </Link>
      </div>

      {topics.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No Commander content yet"
          description="Content has not been authored for the Commander role. Check back as the project rolls out new pages."
        />
      ) : (
        <div className="space-y-8">
          {topics.map(([topic, items]) => (
            <section key={topic}>
              <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-subtle-foreground)]">
                {topic.replace(/-/g, " ")}
              </h2>
              <ul className="space-y-2">
                {items.map((entry) => {
                  const fm = entry.frontmatter;
                  return (
                    <li key={fm.slug}>
                      <Link
                        href={`/commander/${fm.topic}/${fm.slug}`}
                        className="group flex items-start justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
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
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
