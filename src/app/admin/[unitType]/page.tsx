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
import { toTopicLabel } from "@/lib/admin-topics";
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

// Per-function color (from design token palette — no hardcoded hex)
const FUNCTION_COLORS: Record<string, string> = {
  PERA: "var(--color-role-admin)",       // admin green
  GENA: "var(--color-status-info)",      // navy blue
  OPER: "var(--color-status-aging)",     // amber
  MPMN: "var(--color-brass)",            // brass
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
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-6">
          <p className="text-sm">
            No content has been written for this unit type yet. Check back as
            content rolls out.
          </p>
        </div>
      ) : (
        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topicCards.map((card) => {
            const Icon = FUNCTION_ICON[card.functionCode] ?? FileText;
            const functionLabel =
              FUNCTION_LABELS[card.functionCode] ?? card.functionCode;
            const fnColor = FUNCTION_COLORS[card.functionCode] ?? FUNCTION_COLORS.GENA;
            return (
              <Link
                key={card.topic}
                href={`/admin/${ut}/${card.topic}`}
                className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-role-admin)] hover:shadow-[var(--shadow-md)]"
              >
                {/* Per-card radial bloom on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[var(--radius-md)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at top left, color-mix(in srgb, var(--color-role-admin) 6%, transparent) 0%, transparent 70%)` }}
                />
                <div className="relative mb-3 flex items-center justify-between">
                  <div
                    className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] transition-colors duration-200"
                    style={{
                      background: `color-mix(in srgb, ${fnColor} 14%, transparent)`,
                      color: fnColor,
                      border: `1px solid color-mix(in srgb, ${fnColor} 25%, transparent)`,
                    }}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="rounded-[var(--radius-xs)] px-1.5 py-0.5 font-mono text-xs font-bold tracking-wide"
                      style={{ background: `color-mix(in srgb, ${fnColor} 12%, transparent)`, color: fnColor }}
                    >
                      {card.functionCode}
                    </span>
                    {card.count > 0 && (
                      <span className="rounded-[var(--radius-xs)] bg-[var(--color-surface-2)] px-1.5 py-0.5 font-mono text-xs font-bold text-[var(--color-muted-foreground)]">
                        {card.count}
                      </span>
                    )}
                  </div>
                </div>
                <h2 className="relative text-base font-bold leading-snug tracking-tight">
                  {card.label}
                </h2>
                <p className="relative mt-1.5 line-clamp-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                  {card.summary}
                </p>
                <div className="relative mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3">
                  <span className="text-xs font-medium text-[var(--color-subtle-foreground)]">
                    {card.count} {card.count === 1 ? "page" : "pages"}
                    <span className="ml-1.5 text-[var(--color-muted-foreground)]/60">
                      {functionLabel}
                    </span>
                  </span>
                  <span
                    className="inline-flex items-center gap-1 rounded-[var(--radius-sm)] border px-2 py-0.5 text-xs font-semibold transition-colors duration-150 group-hover:border-transparent"
                    style={{
                      borderColor: `color-mix(in srgb, ${fnColor} 35%, transparent)`,
                      color: fnColor,
                      background: `color-mix(in srgb, ${fnColor} 0%, transparent)`,
                    }}
                  >
                    Open
                    <ArrowRight className="size-3 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
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
