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

const GROUP_SLUG = "performance-evaluation";

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
  title: "Performance Evaluation (FITREP and JEPES) - Marines",
  description:
    "Marine Corps performance evaluation framework. FITREPs for Sergeants and above (MCO 1610.7B), JEPES for E-1 through E-4 (MCO 1616.1), body composition reporting (MARADMIN 066/26), MRO/RS/RO chain, PERB appeals, Master Brief Sheet."
};

export default function PerformanceEvaluationLanding() {
  const group = findMarinesParentGroup(GROUP_SLUG);
  if (!group) notFound();

  const children = getCategoriesForGroup(GROUP_SLUG);

  const pageCounts = new Map<string, number>();
  for (const entry of getMarinesContent()) {
    const t = entry.frontmatter.topic;
    pageCounts.set(t, (pageCounts.get(t) ?? 0) + 1);
  }

  const GroupIcon = ICON_MAP[group.icon] ?? ClipboardList;

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
          Performance Evaluation content sources from MCO 1610.7B (Performance
          Evaluation System Manual, June 2023) for FITREPs covering Sergeants
          and above, MCO 1616.1 (Junior Enlisted Performance Evaluation System)
          for E-1 through E-4, and MARADMIN 066/26 (Change 1 to Advance
          Notification of Changes to PFT and Body Composition Evaluation
          Process, 26 February 2026) for body composition reporting effective 1
          January 2026. Supporting authorities include MCO 6110.3A (Body
          Composition and Military Appearance Program), MCBUL 6110 (BIA
          Implementation), DoDI 1320.04 (Officer Promotions), MCO 1400.32E
          (Enlisted Promotions), and the SECWAR Memorandum on Military Fitness
          Standards dated 18 December 2025. The Performance Evaluation Section
          (PES) at HQMC Manpower and Reserve Affairs runs the program. Reach
          PES at smb_hqmc_a-pes@usmc.mil.
        </p>
      </section>

      <section className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5">
        <h2 className="text-lg font-bold">AI prompt reference</h2>
        <p className="mt-2 text-sm">
          The Semper Admin AI Field Manual Category 04 (Awards and Evaluations)
          contains 10 prompts covering FITREP Sections B/C/I drafts, adverse
          FITREP narratives, the FITREP Section I prohibited comments scanner,
          CONDUS narratives, and award package pre-submission review. See the{" "}
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
