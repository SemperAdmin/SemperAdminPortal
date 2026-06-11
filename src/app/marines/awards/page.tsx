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

const GROUP_SLUG = "awards";

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
  title: "Awards - Marines",
  description:
    "Personal Military Decorations (PMDs), unit awards, foreign awards, joint service awards, marksmanship badges, campaign and service medals. Submission, ceremony, OMPF verification. Per MCO P1650.19J and SECNAV M-1650.1."
};

export default function AwardsLanding() {
  const group = findMarinesParentGroup(GROUP_SLUG);
  if (!group) notFound();

  const children = getCategoriesForGroup(GROUP_SLUG);

  const pageCounts = new Map<string, number>();
  for (const entry of getMarinesContent()) {
    const t = entry.frontmatter.topic;
    pageCounts.set(t, (pageCounts.get(t) ?? 0) + 1);
  }

  const GroupIcon = ICON_MAP[group.icon] ?? Trophy;

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
          Awards content sources from MCO P1650.19J w/ CH 1 (Administrative
          and Issue Procedures for Decorations, Medals, and Awards), SECNAV
          M-1650.1 (Department of the Navy Awards Manual), MCO 1020.34H
          (Marine Corps Uniform Regulations), DoD Manual 1348.33 (Manual of
          Military Decorations and Awards), 5 USC 7342 (Receipt of Foreign
          Gifts), 10 USC (Title 10 Awards Provisions), MARADMIN 077/25
          (Approval Authority Updates), MARADMIN 093/25 (Military Awards
          Guidance for Permanent Change of Station Season), ALNAV 055/17 (V/C/
          R Devices), and Marine Corps Manpower Management Awards Branch
          (MMPB-3) published guidance. The Awards Branch (MMPB-3) at HQMC
          adjudicates Personal Military Decorations and complex submissions.
          Unit S-1 originates most submissions. NAVMC 11533 is the standard
          template for Combat Action Ribbon nominations. Verify your awards
          in OMPF and MCTFS regularly via Marine Online (MOL).
        </p>
      </section>

      <section className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5">
        <h2 className="text-lg font-bold">AI prompt reference</h2>
        <p className="mt-2 text-sm">
          The Semper Admin AI Field Manual Category 04 (Awards and Evaluations)
          contains 10 prompts covering NAVCOMM citations, NAM citations,
          Meritorious Mast (NAVMC 10935), FITREP Sections B/C/I drafting,
          adverse FITREP narratives, FITREP Section I prohibited comments
          scanner, CONDUS narratives, award package pre-submission review, MSM
          citations, and promotion recommendation letters. See the{" "}
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
