import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react";
import { getAdminByUnit } from "@/lib/content/loader";
import { UNIT_TYPES, type UnitType } from "@/lib/content/schemas";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
import { StatusPill } from "@/components/ui/status-pill";

const UNIT_LABELS: Record<UnitType, string> = {
  "s1-g1": "S-1 / G-1",
  "i-and-i": "I&I Staff",
  pac: "PAC (IPAC)",
};

const UNIT_DESCRIPTIONS: Record<UnitType, string> = {
  "s1-g1":
    "Operating force admin work at the battalion, squadron, regiment, group, and MEF level.",
  "i-and-i": "Active duty admin support to Reserve units.",
  pac: "Consolidated installation admin center processing.",
};

const FUNCTION_ICON: Record<string, LucideIcon> = {
  GENA: FileText,
  OPER: Plane,
  MPMN: Users,
  PERA: ClipboardList,
};

const FUNCTION_LABELS: Record<string, string> = {
  GENA: "General Admin",
  OPER: "Operational Admin",
  MPMN: "Manpower Admin",
  PERA: "Personnel Admin",
};

export async function generateStaticParams() {
  return UNIT_TYPES.map((unitType) => ({ unitType }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ unitType: string }>;
}): Promise<Metadata> {
  const { unitType } = await params;
  if (!UNIT_TYPES.includes(unitType as UnitType)) {
    return { title: "Admin" };
  }
  return {
    title: UNIT_LABELS[unitType as UnitType],
    description: UNIT_DESCRIPTIONS[unitType as UnitType],
  };
}

const TOPIC_LABEL_OVERRIDES: Record<string, string> = {
  dts: "Defense Travel System",
  gtccp: "Government Travel Charge Card Program",
  gtcc: "Government Travel Charge Card",
  pes: "Performance Evaluation System",
  iram: "Individual Records Administration Manual",
  jagman: "JAGMAN",
  pcs: "Permanent Change of Station",
  tad: "TAD and TDY Travel",
  les: "Leave and Earnings Statement",
  bah: "Basic Allowance for Housing",
  bas: "Basic Allowance for Subsistence",
  "separation-retirement": "Separation and Retirement",
  "limited-duty": "Limited Duty",
};

function toTopicLabel(topic: string): string {
  const override = TOPIC_LABEL_OVERRIDES[topic.toLowerCase()];
  if (override) return override;
  return topic
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function UnitTypeLanding({
  params,
}: {
  params: Promise<{ unitType: string }>;
}) {
  const { unitType } = await params;
  if (!UNIT_TYPES.includes(unitType as UnitType)) notFound();
  const ut = unitType as UnitType;
  const entries = getAdminByUnit(ut);

  const byTopic = new Map<string, typeof entries>();
  for (const entry of entries) {
    const t = entry.frontmatter.topic;
    if (!byTopic.has(t)) byTopic.set(t, []);
    byTopic.get(t)!.push(entry);
  }

  const topicCards = Array.from(byTopic.entries())
    .map(([topic, items]) => {
      const overview =
        items.find(
          (e) =>
            e.frontmatter.slug === "overview" ||
            e.frontmatter.slug.toLowerCase().includes("overview"),
        ) ?? items[0]!;
      const fm = overview.frontmatter;
      return {
        topic,
        label: toTopicLabel(topic),
        summary: fm.summary,
        functionCode: fm.function,
        count: items.length,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  const totalPages = entries.length;
  const totalCategories = topicCards.length;

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Role view"
        tags={
          <>
            <Pill variant="admin">{UNIT_LABELS[ut]}</Pill>
            <StatusPill status="fresh" label="Updated May 2026" />
          </>
        }
        title={UNIT_LABELS[ut].toUpperCase()}
        summary={UNIT_DESCRIPTIONS[ut]}
      >
        <MetaRow
          items={[
            { label: "Pages", value: totalPages },
            { label: "Categories", value: totalCategories },
            { label: "Authority", value: "MCO 5000.14D", mono: false },
          ]}
        />
      </PageHeader>

      {topicCards.length === 0 ? (
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-6">
          <p className="text-sm">
            No content has been written for this unit type yet. Check back as
            content rolls out.
          </p>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topicCards.map((card) => {
            const Icon = FUNCTION_ICON[card.functionCode] ?? FileText;
            const functionLabel =
              FUNCTION_LABELS[card.functionCode] ?? card.functionCode;
            return (
              <Link
                key={card.topic}
                href={`/admin/${ut}/${card.topic}`}
                className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--color-role-admin)_30%,transparent)] bg-[var(--color-card)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--color-role-admin)] hover:shadow-[var(--shadow-md)]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-[color-mix(in_srgb,var(--color-role-admin)_14%,transparent)] text-[var(--color-role-admin)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Pill variant="admin" size="xs">
                      {card.functionCode}
                    </Pill>
                    {card.count > 0 && (
                      <span className="rounded-sm bg-[color-mix(in_srgb,var(--color-role-admin)_10%,transparent)] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[var(--color-role-admin)]">
                        {card.count}
                      </span>
                    )}
                  </div>
                </div>
                <h2 className="text-sm font-bold leading-tight">
                  {card.label}
                </h2>
                <p className="mt-1 line-clamp-3 text-xs leading-snug text-[var(--color-muted-foreground)]">
                  {card.summary}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-[var(--color-border)] pt-2 text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--color-subtle-foreground)]">
                  <span>
                    {card.count} {card.count === 1 ? "page" : "pages"}
                    <span className="ml-1.5 normal-case tracking-normal text-[var(--color-muted-foreground)]/70">
                      {functionLabel}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[var(--color-role-admin)]">
                    Open
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <section className="mt-10 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
        <h2 className="text-base font-bold">How content is organized</h2>
        <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
          Cards group by functional area. Each card opens to the topic index,
          where you find the procedural pages, the function code, the T-R event
          mapping, and the source policy citations. Function codes follow MCO
          5000.14D MCAP. GENA covers general admin. OPER covers operational
          admin. MPMN covers manpower. PERA covers personnel.
        </p>
        <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
          Every page cites source policy with chapter and section. Use the
          Search and Citations Index to find content by policy reference.
        </p>
      </section>
    </div>
  );
}
