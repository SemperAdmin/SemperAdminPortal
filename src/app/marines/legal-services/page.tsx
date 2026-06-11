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

const GROUP_SLUG = "legal-services";

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
  title: "Legal Services - Marines",
  description:
    "Marine-focused legal topics. JAG services, Article 31 rights, NJP, court-martial, administrative separation, powers of attorney and wills, SCRA, family law, complaints, sexual assault reporting, claims, foreign jurisdiction. Per MCO 5800.16 (LEGADMINMAN) Vols 1-17 and JAGMAN."
};

export default function LegalServicesLanding() {
  const group = findMarinesParentGroup(GROUP_SLUG);
  if (!group) notFound();

  const children = getCategoriesForGroup(GROUP_SLUG);

  const pageCounts = new Map<string, number>();
  for (const entry of getMarinesContent()) {
    const t = entry.frontmatter.topic;
    pageCounts.set(t, (pageCounts.get(t) ?? 0) + 1);
  }

  const GroupIcon = ICON_MAP[group.icon] ?? LifeBuoy;

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
          Legal Services content sources from the Marine Corps Legal
          Administration Manual (MCO 5800.16) Volumes 1 through 17 covering
          general provisions, administrative law, personal legal services,
          claims, court-martial procedure, non-judicial punishment,
          investigations, administrative separation, victim rights, and foreign
          jurisdiction. Plus the Manual of the Judge Advocate General (JAGMAN,
          MCO 5800.7G). Plus the Uniform Code of Military Justice (UCMJ),
          Manual for Courts-Martial (MCM), and Military Rules of Evidence.
          Plus the Servicemembers Civil Relief Act (50 U.S.C. Chapter 50),
          Uniformed Services Former Spouses&apos; Protection Act (USFSPA, 10
          U.S.C. 1408), MARADMINs, and applicable Status of Forces Agreements.
          The Office of the Judge Advocate of the Marine Corps oversees the
          program. Free legal services are provided through Personal Services
          Attorneys, Defense Counsel, Trial Counsel, and Special Victims&apos;
          Counsel at every installation Legal Services Support Section (LSSS)
          or Office of the Staff Judge Advocate (OSJA).
        </p>
      </section>

      <section className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5">
        <h2 className="text-lg font-bold">AI prompt reference</h2>
        <p className="mt-2 text-sm">
          The Semper Admin AI Field Manual Category 05 (Legal and Disciplinary)
          contains 10 prompts covering NJP preliminary inquiry, NJP
          notification and rights advisement, NJP punishment worksheets, admin
          sep notification procedures, admin sep board referral, Page 6
          counseling statements, no contact orders, non-punitive LOIs, IG
          complaint intake, and evidence inventory and chain of custody. See
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
