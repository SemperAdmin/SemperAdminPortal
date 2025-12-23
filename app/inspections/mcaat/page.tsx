import CatalogGrid from "../../../components/CatalogGrid";
import type { CatalogGroup } from "../../../data/links";
import Link from "next/link";
import { mcaatQuestions, getCategoryQuestionCount } from "../../../data/mcaatQuestions";

export default function MCAATPage() {
  const MCAAT_SP = "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/Marine-Corps-Administrative-Analysis-Team-(MCAAT).aspx";
  const groups: CatalogGroup[] = [
    {
      name: "MCAAT Top Links",
      items: [
        { title: "MCAAT POAM", href: MCAAT_SP },
        { title: "FNF MCAAT SharePoint", href: MCAAT_SP },
        { title: "MCAAT Marines.mil", href: MCAAT_SP },
      ],
    },
    {
      name: "MCAAT Tools",
      items: [
        { title: "MCAAT Analysis Statistics (AS)", href: MCAAT_SP },
        { title: "MCAAT Process Audit Case Overview (PACO)", href: MCAAT_SP },
        { title: "MCAAT Process Audit Results Overview (PAR)", href: MCAAT_SP },
        { title: "MCAAT RUC Unit Results", href: MCAAT_SP },
        { title: "MCAAT Marine Focused Unit Data Results (UFDR)", href: MCAAT_SP },
        { title: "MCAAT Shared Unit Data Results (SU DR)", href: MCAAT_SP },
        { title: "MCAAT Team Analysis Results (TAR)", href: MCAAT_SP },
        { title: "MCAAT Admin POC / POCN COMPLIANCE", href: MCAAT_SP },
        { title: "MCAAT Admin Schedule", href: MCAAT_SP },
      ],
    },
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

      {/* Inspection Questions Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Inspection Questions by Category
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

      {/* External Links Section */}
      <CatalogGrid groups={groups} columns stackTitles />
    </div>
  );
}
