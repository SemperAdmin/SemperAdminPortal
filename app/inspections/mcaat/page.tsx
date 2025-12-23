import CatalogGrid from "../../../components/CatalogGrid";
import type { CatalogGroup } from "../../../data/links";
import Link from "next/link";
import { mcaatQuestions, getCategoryQuestionCount } from "../../../data/mcaatQuestions";

// Icon components for MCAAT tools
function LinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: "navy" | "gold" | "red";
};

function ToolCard({ title, description, href, icon, color }: ToolCardProps) {
  const colorClasses = {
    navy: "from-[var(--sa-navy)]/10 to-[var(--sa-navy)]/5 hover:from-[var(--sa-navy)]/20 hover:to-[var(--sa-navy)]/10 border-[var(--sa-navy)]/10 hover:border-[var(--sa-navy)]/30",
    gold: "from-[var(--sa-gold)]/10 to-[var(--sa-gold)]/5 hover:from-[var(--sa-gold)]/20 hover:to-[var(--sa-gold)]/10 border-[var(--sa-gold)]/20 hover:border-[var(--sa-gold)]/40",
    red: "from-[var(--sa-red)]/10 to-[var(--sa-red)]/5 hover:from-[var(--sa-red)]/20 hover:to-[var(--sa-red)]/10 border-[var(--sa-red)]/10 hover:border-[var(--sa-red)]/30",
  };
  const iconColorClasses = {
    navy: "text-[var(--sa-navy)] dark:text-[var(--sa-gold)]",
    gold: "text-[var(--sa-gold)]",
    red: "text-[var(--sa-red)]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col rounded-xl border bg-gradient-to-br p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 dark:from-white/5 dark:to-white/[0.02] dark:border-white/10 dark:hover:border-white/20 ${colorClasses[color]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/80 shadow-sm dark:bg-black/30 ${iconColorClasses[color]}`}>
          {icon}
        </div>
        <ExternalLinkIcon className="h-4 w-4 text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h3 className="mt-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
        {title}
      </h3>
      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
        {description}
      </p>
    </a>
  );
}

function QuickLinkCard({ title, href, icon }: { title: string; href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 shadow-sm transition-all hover:border-[var(--sa-navy)]/20 hover:shadow-md hover:-translate-y-0.5 dark:border-white/10 dark:bg-black/30 dark:hover:border-[var(--sa-gold)]/30"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--sa-navy)]/10 text-[var(--sa-navy)] dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)]">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-medium text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:group-hover:text-[var(--sa-gold)] text-sm">
          {title}
        </span>
      </div>
      <ExternalLinkIcon className="h-4 w-4 shrink-0 text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}

export default function MCAATPage() {
  const MCAAT_SP = "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/Marine-Corps-Administrative-Analysis-Team-(MCAAT).aspx";

  const topLinks = [
    { title: "MCAAT POAM", href: MCAAT_SP, icon: <ClipboardIcon className="h-5 w-5" /> },
    { title: "FNF MCAAT SharePoint", href: MCAAT_SP, icon: <FolderIcon className="h-5 w-5" /> },
    { title: "MCAAT Marines.mil", href: MCAAT_SP, icon: <GlobeIcon className="h-5 w-5" /> },
  ];

  const tools = [
    { title: "Analysis Statistics (AS)", description: "View statistical analysis and metrics for MCAAT operations", href: MCAAT_SP, icon: <ChartIcon className="h-5 w-5" />, color: "navy" as const },
    { title: "Process Audit Case Overview (PACO)", description: "Track and manage individual audit cases", href: MCAAT_SP, icon: <ClipboardIcon className="h-5 w-5" />, color: "gold" as const },
    { title: "Process Audit Results Overview (PAR)", description: "Review comprehensive audit results and findings", href: MCAAT_SP, icon: <FileTextIcon className="h-5 w-5" />, color: "navy" as const },
    { title: "RUC Unit Results", description: "View results by Reporting Unit Code", href: MCAAT_SP, icon: <ChartIcon className="h-5 w-5" />, color: "gold" as const },
    { title: "Marine Focused Unit Data Results (UFDR)", description: "Individual Marine-level data analysis", href: MCAAT_SP, icon: <UsersIcon className="h-5 w-5" />, color: "navy" as const },
    { title: "Shared Unit Data Results (SU DR)", description: "Shared data across multiple units", href: MCAAT_SP, icon: <UsersIcon className="h-5 w-5" />, color: "gold" as const },
    { title: "Team Analysis Results (TAR)", description: "Team-level performance and analysis", href: MCAAT_SP, icon: <ChartIcon className="h-5 w-5" />, color: "navy" as const },
    { title: "Admin POC / POCN Compliance", description: "Point of contact compliance tracking", href: MCAAT_SP, icon: <UsersIcon className="h-5 w-5" />, color: "gold" as const },
    { title: "Admin Schedule", description: "View and manage MCAAT schedules", href: MCAAT_SP, icon: <CalendarIcon className="h-5 w-5" />, color: "navy" as const },
  ];

  const financeChecklist: CatalogGroup[] = [
    {
      name: "MCAAT Finance Checklist",
      items: [
        { title: "Administrative Management", href: MCAAT_SP },
        { title: "Fiscal Processes", href: MCAAT_SP },
        { title: "Internal Audit Processes", href: MCAAT_SP },
        { title: "Pay Processes", href: MCAAT_SP },
        { title: "Separation Processes", href: MCAAT_SP },
        { title: "Travel Processes", href: MCAAT_SP },
      ],
    },
  ];

  const totalQuestions = mcaatQuestions.reduce((sum, cat) => sum + getCategoryQuestionCount(cat), 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Marine Corps Administrative Analysis Team (MCAAT)
        </h1>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Top links, tools, and inspection question checklists aligned with MCAAT requirements.
        </p>
      </div>

      {/* Top Links Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center gap-2 mb-4">
          <LinkIcon className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MCAAT Top Links
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topLinks.map((link) => (
            <QuickLinkCard key={link.title} {...link} />
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center gap-2 mb-4">
          <ChartIcon className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MCAAT Tools
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </section>

      {/* Admin Inspection Questions Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Admin Inspection Questions by Category
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Select a category to view questions organized by unit type (Reporting, IPAC, Supporting)
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-[var(--sa-navy)]/10 px-3 py-1.5 dark:bg-[var(--sa-cream)]/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {totalQuestions} Total Questions
            </span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mcaatQuestions.map((category) => {
            const questionCount = getCategoryQuestionCount(category);
            return (
              <Link
                key={category.slug}
                href={`/inspections/mcaat/questions/${category.slug}`}
                className="group flex flex-col rounded-lg border border-black/5 bg-[var(--sa-cream)]/20 p-4 transition hover:border-[var(--sa-navy)]/20 hover:bg-[var(--sa-cream)]/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-[var(--sa-gold)]/30 dark:hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:group-hover:text-[var(--sa-gold)]">
                    {category.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-[var(--sa-navy)]/10 px-2 py-0.5 text-xs font-bold text-[var(--sa-navy)] dark:bg-[var(--sa-cream)]/10 dark:text-[var(--sa-cream)]">
                    {questionCount}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs text-[var(--sa-navy)]/60 dark:text-[var(--sa-cream)]/60">
                  <span>View questions</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition group-hover:translate-x-0.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Finance Checklist Section */}
      <CatalogGrid groups={financeChecklist} columns stackTitles />
    </div>
  );
}
