import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
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
  type LucideIcon,
} from "lucide-react";
import { getMarinesContent } from "@/lib/content/loader";
import {
  findMarinesParentGroup,
  getCategoriesForGroup,
} from "@/lib/marines-categories";

const GROUP_SLUG = "artificial-intelligence";

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

export const metadata: Metadata = {
  title: "Artificial Intelligence (AI) - Marines",
  description:
    "Marine Corps data and AI framework. MCO 5231.4 governance. DC I as service lead. Service Data Office (SDO). Mandatory Basic AI Course (CDETBAIC01). GenAI.mil enterprise platform. NPS AI Fellowship. Responsible AI principles. Per MCO 5231.4 and MARADMIN ecosystem (214/26, 635/24, 270/25, 018/26, 135/26).",
};

export default function ArtificialIntelligenceLanding() {
  const group = findMarinesParentGroup(GROUP_SLUG);
  if (!group) notFound();

  const children = getCategoriesForGroup(GROUP_SLUG);

  const pageCounts = new Map<string, number>();
  for (const entry of getMarinesContent()) {
    const t = entry.frontmatter.topic;
    pageCounts.set(t, (pageCounts.get(t) ?? 0) + 1);
  }

  const GroupIcon = ICON_MAP[group.icon] ?? Star;

  return (
    <div className="mx-auto max-w-6xl">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm">
        <ol className="flex items-center gap-1.5 text-[var(--color-muted-foreground)]">
          <li>
            <Link href="/marines" className="hover:text-[var(--color-foreground)]">
              Marines
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-3.5" />
          </li>
          <li className="text-[var(--color-foreground)]">{group.label}</li>
        </ol>
      </nav>

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
          Artificial Intelligence content sources from MCO 5231.4 (Marine
          Corps Data and Artificial Intelligence, signed 11 March 2024), the
          USMC AI Implementation Plan approved by DC I on 23 April 2025, and
          the active MARADMIN ecosystem. Active MARADMINs include 214/26
          (Mandatory Basic AI Course, NLT 31 December 2026), 635/24 (Ethical
          Use of AI by COMMSTRAT, supersedes 602/24), 270/25 (Available AI
          and Data Management Training), 018/26 (Enterprise GenAI.mil
          Platform, supersedes 496/24), and 135/26 (FY26-2 AI Fellowship at
          NPS). Supporting policy includes the DoD Responsible AI Strategy
          and Implementation Pathway (June 2022), DEPSECDEF Memorandum on
          Implementing Responsible AI (26 May 2021), Executive Order 14110
          (Safe, Secure, and Trustworthy Development and Use of AI, 30
          October 2023), OMB Memorandum M-24-10 (Advancing Governance for
          Agency Use of AI, 28 March 2024), and the OSD CDAO/OUSD(R&E)
          Memorandum on DA&AI Workforce Roles (5 January 2024). The Deputy
          Commandant for Information (DC I) is the service lead. The
          Service Data Office (SDO) under DC I owns policy, governance, and
          oversight. The Marine Corps Service Data Officer (MC SDO) is the
          principal advisor to the CMC and chairs the Functional Data
          Working Group (FDWG) and Artificial Intelligence Working Group
          (AIWG). GenAI.mil at https://genai.mil is the enterprise platform.
          CamoGPT and other previously authorized tools continue under
          MARADMIN 018/26 paragraph 4.c. The Basic AI Course is CDETBAIC01
          on MCELE. Approximately 45 minutes. One-time mandatory training
          for all Active Duty and Reserve Marines NLT 31 December 2026,
          tracked via MCTFS BTR in MOL.
        </p>
      </section>
    </div>
  );
}
