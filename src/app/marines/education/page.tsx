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

const GROUP_SLUG = "education";

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
  title: "Education - Marines",
  description:
    "Marine Corps voluntary education. Tuition Assistance (TA), Post-9/11 GI Bill, Montgomery GI Bill, MarineNet, Marine Corps University, JPME, civilian degree pursuit, DANTES testing. Per MCO 1560.25, 38 USC Chapter 33, 38 USC Chapter 30, and 10 USC Chapter 1606."
};

export default function EducationLanding() {
  const group = findMarinesParentGroup(GROUP_SLUG);
  if (!group) notFound();

  const children = getCategoriesForGroup(GROUP_SLUG);

  const pageCounts = new Map<string, number>();
  for (const entry of getMarinesContent()) {
    const t = entry.frontmatter.topic;
    pageCounts.set(t, (pageCounts.get(t) ?? 0) + 1);
  }

  const GroupIcon = ICON_MAP[group.icon] ?? GraduationCap;

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
              className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]/40"
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

      <section className="mt-10 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-5">
        <h2 className="text-lg font-bold">Source authority</h2>
        <p className="mt-2 text-sm">
          Education content sources from MCO 1560.25 (Marine Corps Voluntary
          Education Program), MCO 1553.1 (Marine Corps Distance Learning
          Program), MCO 1553.4 (Marine Corps Professional Military Education),
          MCO 1500.55 (Marine Corps Training and Education), DoDI 1322.25
          (Voluntary Education Programs), DoDI 1322.20 (DANTES), DoDI 1322.29
          (Job Training and Education for Transitioning Service Members),
          CJCS Instruction 1800.01 (Officer Professional Military Education
          Policy), 38 USC Chapter 30 (Montgomery GI Bill Active Duty), 38 USC
          Chapter 33 (Post-9/11 GI Bill), 38 USC Chapter 31 (Vocational
          Rehabilitation and Employment), 10 USC Chapter 1606 (Montgomery GI
          Bill Selected Reserve), 10 USC 661-665 (Joint Officer Management),
          and 38 CFR Part 21 (VA Educational Assistance Programs). Marine
          Corps University at Quantico delivers EWS, CSC, MCWAR, and SNCO
          Academy. Installation Education Centers at Marine Corps Community
          Services administer Tuition Assistance, GI Bill counseling, and
          DANTES testing. MarineNet at marinenet.usmc.mil delivers online
          courses with ACE-recommended college credit. NOTE. Most leaves in
          this parent group are SKELETON PLACEHOLDERS pending full content
          build.
        </p>
      </section>

      <section className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5">
        <h2 className="text-lg font-bold">AI prompt reference</h2>
        <p className="mt-2 text-sm">
          The Semper Admin AI Field Manual Category 03 (Training
          Administration) contains 10 prompts covering training plan
          development, T&R event briefs, MCTIMS documentation, training
          deficiency reports, individual training record audits, readiness
          report narratives, pre-deployment training plans, annual training
          plans, training safety risk assessments, and training event AARs. See
          the{" "}
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
