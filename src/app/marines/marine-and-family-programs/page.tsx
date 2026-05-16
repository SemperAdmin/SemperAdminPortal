import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  type LucideIcon
} from "lucide-react";
import { getMarinesContent } from "@/lib/content/loader";
import {
  findMarinesParentGroup,
  getCategoriesForGroup
} from "@/lib/marines-categories";

const GROUP_SLUG = "marine-and-family-programs";

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
  CreditCard
};

export const metadata: Metadata = {
  title: "Marine and Family Programs (MF) - Marines",
  description:
    "MF Branch at HQMC. Casualty Assistance Program (CACO, LTAP, Gold Star, Funeral Honors, Repatriation, Investigation Tracking). EFMP, CYP, SLP. Family Readiness (UPFRP, MCFTB, IR&R, Sponsorship). PFMP. Career Services (FMEAP, COOL, USMAP). Education and Resilience (LSP, VolEd, Library, CREDO, Marine for Life)."
};

export default function MarineAndFamilyProgramsLanding() {
  const group = findMarinesParentGroup(GROUP_SLUG);
  if (!group) notFound();

  const children = getCategoriesForGroup(GROUP_SLUG);

  const pageCounts = new Map<string, number>();
  for (const entry of getMarinesContent()) {
    const t = entry.frontmatter.topic;
    pageCounts.set(t, (pageCounts.get(t) ?? 0) + 1);
  }

  const GroupIcon = ICON_MAP[group.icon] ?? Users;

  return (
    <div className="mx-auto max-w-6xl">
            <header className="mb-8 flex items-start gap-4">
        <div className="inline-flex size-12 items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          <GroupIcon className="size-6" aria-hidden="true" />
        </div>
        <div>
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {group.label}
          </h1>
          <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
            {group.description}
          </p>
        </div>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {children.map((cat) => {
          const Icon = ICON_MAP[cat.icon] ?? FileText;
          const count = pageCounts.get(cat.slug) ?? 0;
          return (
            <Link
              key={cat.slug}
              href={`/marines/${cat.slug}`}
              className="group flex flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]/40"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="inline-flex size-9 items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                {cat.pageType !== "leaf" && count > 0 && (
                  <span className="rounded-sm bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-[10px] font-bold text-[var(--color-primary)]">
                    {count}
                  </span>
                )}
              </div>
              <h2 className="text-sm font-bold leading-tight">{cat.label}</h2>
              <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                {cat.description}
              </p>
            </Link>
          );
        })}
      </div>

      <section className="mt-10 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-5">
        <h2 className="text-lg font-bold">Source authority</h2>
        <p className="mt-2 text-sm">
          Marine and Family Programs content sources from MCO 1754.9 (Unit,
          Personal and Family Readiness Program), MCO 1770.1 (Casualty
          Assistance Calls Program), MCO 3040.4 (Marine Corps Casualty
          Procedures Manual), MCO 1740.13 (Family Care Plan and Personal
          Financial Management), MCO 1700.30 (Marine Corps Community Services
          Policy), MCO 1700.31 (Marine Corps Voluntary Education Programs),
          MCO 1500.55 (Marine Corps Training and Education), MCO 1710.30
          (Marine Corps Child Development Programs), MCO 1754.5 (Marine Corps
          Exceptional Family Member Program), MCO 5360.3 (Marine Corps
          Casualty Procedures Funeral Honors), MCO 1730.6 (Marine Corps
          Religious Ministry), JAGMAN Part E (Investigations) and Part F
          Section 0229 (Survivor Benefit Program), DoDI 1300.18, DoDI 1315.19
          (EFMP), DoDI 1322.29 (Job Training and Education for Transitioning
          Service Members), DoDI 1322.25 (Voluntary Education Programs), DoDI
          1342.20 (School Liaison Program), DoDI 1342.22 (Military Family
          Readiness), DoDI 6060.02 (Child Development Programs), 10 USC 1491
          (Funeral Honors), 10 USC 1447-1455 (Survivor Benefit Plan), and 38
          USC 1310-1322 (DIC and Death Benefits). The Marine and Family
          Programs Branch (MF) operates from HQMC. Marine Corps Community
          Services (MCCS) delivers most programs at the installation level.
          The Family Readiness Officer (FRO) at every battalion and the
          installation Marine Corps Community Services office are your
          starting points. Casualty hotline 800-847-1597 (24/7). LTAP
          866-210-3421 ext 2. Repatriation 866-210-3421 Option 1. EFMP
          hqmc.efmp@usmc.mil.
        </p>
      </section>

      <section className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-5">
        <h2 className="text-lg font-bold">AI prompt reference</h2>
        <p className="mt-2 text-sm">
          The Semper Admin AI Field Manual Category 10 (Leadership and
          Decision Making) contains 10 prompts covering commander&apos;s
          assessment frameworks, ethical decision-making, climate assessment
          survey design, leader development plans, unit problem-solving
          briefs, succession planning, AAR facilitation guides, command
          philosophy development, difficult conversation preparation, and unit
          standard setting frameworks. See the{" "}
          <Link
            href="/marines/semper-admin-ai-field-manual"
            className="text-[var(--color-primary)] underline"
          >
            Semper Admin AI Field Manual
          </Link>{" "}
          for the full library, the 20 Laws of LLM Prompts, the Trust but
          Verify checklist, and the PDF download.
        </p>
      </section>
    </div>
  );
}
