import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Anchor, Landmark, ArrowRight } from "lucide-react";
import { getAdminContent } from "@/lib/content/loader";
import type { UnitType } from "@/lib/content/schemas";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
import { StatusPill } from "@/components/ui/status-pill";

export const metadata: Metadata = {
  title: "Admin",
  description:
    "T&R-aligned admin content for S-1/G-1, I&I, and PAC unit types. MOS 0102, 0111, 0170.",
};

interface UnitCard {
  unitType: UnitType;
  label: string;
  tagline: string;
  description: string;
  Icon: typeof Building2;
}

const UNITS: UnitCard[] = [
  {
    unitType: "s1-g1",
    label: "S-1 / G-1",
    tagline: "Operating Force Admin",
    description:
      "Battalion, squadron, regiment, group, MEF admin. GENA, OPER, MPMN, PERA work at the unit level.",
    Icon: Building2,
  },
  {
    unitType: "i-and-i",
    label: "I&I Staff",
    tagline: "Reserve Unit Support",
    description:
      "Active duty support to Reserve units. Drill weekends, AT cycles, MCRAMM, IDT pay.",
    Icon: Anchor,
  },
  {
    unitType: "pac",
    label: "PAC (IPAC)",
    tagline: "Personnel Administration Center",
    description:
      "Consolidated installation admin. High-volume PERA processing, joins, separations, audits, UD/MIPS.",
    Icon: Landmark,
  },
];

export default function AdminLanding() {
  const all = getAdminContent();
  const counts: Record<UnitType, number> = {
    "s1-g1": 0,
    "i-and-i": 0,
    pac: 0,
  };
  for (const entry of all) counts[entry.frontmatter.unitType] += 1;
  const total = all.length;

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow="Role view"
        tags={
          <>
            <Pill variant="admin">0102 / 0111 / 0170</Pill>
            <StatusPill status="fresh" label="Updated April 2026" />
          </>
        }
        title="ADMIN"
        summary="Training and Readiness aligned content for Marine admin work. Pick your unit type to see content scoped to your billet."
      >
        <MetaRow
          items={[
            { label: "Pages", value: total },
            { label: "Unit types", value: 3 },
            { label: "MOS coverage", value: "0102 / 0111 / 0170" },
          ]}
        />
      </PageHeader>

      <div className="grid gap-4 md:grid-cols-3">
        {UNITS.map((u) => {
          const Icon = u.Icon;
          const c = counts[u.unitType];
          return (
            <Link
              key={u.unitType}
              href={`/admin/${u.unitType}`}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: "var(--color-role-admin)" }}
              />
              <div className="mb-3 inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] bg-[color-mix(in_srgb,var(--color-role-admin)_14%,transparent)] text-[var(--color-role-admin)]">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
                {u.tagline}
              </p>
              <h2 className="mt-1 font-display text-2xl tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                {u.label}
              </h2>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                {u.description}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-xs">
                <span className="text-[var(--color-muted-foreground)]">
                  {c} {c === 1 ? "topic" : "topics"} available
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[var(--color-role-admin)]">
                  Open
                  <ArrowRight className="size-3" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <section className="mt-10 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
        <h2 className="text-base font-bold">How content is organized</h2>
        <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
          Every admin topic carries a T&R event code from NAVMC 3500.3E. Content
          is tagged by unit type, MCAP function (GENA, OPER, MPMN, PERA), skill
          level (1000, 2000, 2100), MOS, and grade band. You read the same
          underlying T&R event differently based on where you serve.
        </p>
      </section>
    </div>
  );
}
