"use client";

import { useState } from "react";
import Link from "next/link";
import {
  functionalAreaChecklists,
  getCategoryCounts,
  type FACCategory,
  type FunctionalAreaChecklist,
} from "../../../data/igmcFacs";

// Constants moved outside component
const IGMC_SP = "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/Inspector%20General%20of%20the%20Marine%20Corps.aspx";
const FACS_URL = "https://www.igmc.marines.mil/Divisions/Inspections-Division/Checklists/";

// Category filter button data
const categoryCardsData = [
  {
    category: "CoRE" as FACCategory,
    title: "CoRE",
    description: "Core Readiness Evaluation",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    activeClasses: "border-[var(--sa-navy)] bg-[var(--sa-navy)]/10 dark:border-[var(--sa-gold)] dark:bg-[var(--sa-gold)]/10",
    inactiveClasses: "border-black/5 bg-white hover:border-[var(--sa-navy)]/30 dark:border-white/10 dark:bg-black/30 dark:hover:border-[var(--sa-gold)]/30",
    iconContainerClasses: "bg-[var(--sa-navy)] text-white",
    countBadgeClasses: "bg-[var(--sa-navy)] text-white",
    titleClasses: "font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]",
  },
  {
    category: "Non-CoRE" as FACCategory,
    title: "Non-CoRE",
    description: "Additional Functional Areas",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
    activeClasses: "border-zinc-500 bg-zinc-500/10",
    inactiveClasses: "border-black/5 bg-white hover:border-zinc-500/30 dark:border-white/10 dark:bg-black/30 dark:hover:border-zinc-500/30",
    iconContainerClasses: "bg-zinc-500 text-white",
    countBadgeClasses: "bg-zinc-500 text-white",
    titleClasses: "font-semibold text-zinc-700 dark:text-zinc-300",
  },
  {
    category: "CoRE+" as FACCategory,
    title: "CoRE+",
    description: "Enhanced Core Areas",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    activeClasses: "border-[var(--sa-gold)] bg-[var(--sa-gold)]/10",
    inactiveClasses: "border-black/5 bg-white hover:border-[var(--sa-gold)]/30 dark:border-white/10 dark:bg-black/30 dark:hover:border-[var(--sa-gold)]/30",
    iconContainerClasses: "bg-[var(--sa-gold)] text-[var(--sa-navy)]",
    countBadgeClasses: "bg-[var(--sa-gold)] text-[var(--sa-navy)]",
    titleClasses: "font-semibold text-[var(--sa-gold)]",
  },
];

// Category badge component
function CategoryBadge({ category }: { category: FACCategory }) {
  const styles = {
    CoRE: "bg-[var(--sa-navy)] text-white dark:bg-[var(--sa-navy)]",
    "Non-CoRE": "bg-zinc-500 text-white",
    "CoRE+": "bg-[var(--sa-gold)] text-[var(--sa-navy)]",
  };

  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${styles[category]}`}>
      {category}
    </span>
  );
}

// Category filter button component
function CategoryFilterButton(props: (typeof categoryCardsData)[number] & {
  count: number;
  currentFilter: FACCategory | "all";
  setFilter: (filter: FACCategory | "all") => void;
}) {
  const {
    category,
    title,
    description,
    icon,
    count,
    currentFilter,
    setFilter,
    activeClasses,
    inactiveClasses,
    iconContainerClasses,
    countBadgeClasses,
    titleClasses,
  } = props;
  const isActive = currentFilter === category;

  return (
    <button
      onClick={() => setFilter(isActive ? "all" : category)}
      className={`rounded-lg border p-4 text-left transition ${isActive ? activeClasses : inactiveClasses}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconContainerClasses}`}>
            {icon}
          </div>
          <div>
            <span className={titleClasses}>{title}</span>
            <p className="text-xs text-zinc-500">{description}</p>
          </div>
        </div>
        <span className={`rounded-full px-3 py-1 text-lg font-bold ${countBadgeClasses}`}>
          {count}
        </span>
      </div>
    </button>
  );
}

// FAC Card component
function FACCard({ fac }: { fac: FunctionalAreaChecklist }) {
  return (
    <Link
      href={`/inspections/igmc/${fac.slug}`}
      className="group flex flex-col rounded-xl border border-black/5 bg-white p-4 shadow-sm transition hover:border-[var(--sa-navy)]/30 hover:shadow-md dark:border-white/10 dark:bg-black/40 dark:hover:border-[var(--sa-gold)]/30"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="font-semibold text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:group-hover:text-[var(--sa-gold)]">
          {fac.name}
        </h3>
        <CategoryBadge category={fac.category} />
      </div>
      <div className="mt-auto space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="font-medium text-zinc-500 dark:text-zinc-500">FA Number:</span>
          <span className="font-mono">{fac.faNumber}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-zinc-500 dark:text-zinc-500">Sponsor:</span>
          <span>{fac.sponsor} ({fac.sponsorAbbrev})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-zinc-500 dark:text-zinc-500">Effective:</span>
          <span>{fac.effectiveDate}</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1 text-xs font-medium text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-gold)] dark:group-hover:text-[var(--sa-cream)]">
        <span>View Checklist</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </Link>
  );
}

export default function IGMCPage() {
  const [categoryFilter, setCategoryFilter] = useState<FACCategory | "all">("all");
  const counts = getCategoryCounts();

  // Filter FACs based on selected category
  const filteredFACs = categoryFilter === "all"
    ? functionalAreaChecklists
    : functionalAreaChecklists.filter((fac) => fac.category === categoryFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/inspections"
            className="mb-2 inline-flex items-center gap-1 text-sm text-zinc-600 transition hover:text-[var(--sa-navy)] dark:text-zinc-400 dark:hover:text-[var(--sa-cream)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Inspections
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Inspector General of the Marine Corps
          </h1>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Command IG tools and Functional Area Checklists (FACs)
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          IGMC Resources
        </h2>
        <div className="flex flex-wrap gap-2">
          <a
            href={IGMC_SP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--sa-navy)]/10 px-3 py-1.5 text-sm font-medium text-[var(--sa-navy)] transition hover:bg-[var(--sa-navy)]/20 dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)] dark:hover:bg-[var(--sa-gold)]/30"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            IGMC SharePoint
          </a>
          <a
            href={FACS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--sa-navy)]/10 px-3 py-1.5 text-sm font-medium text-[var(--sa-navy)] transition hover:bg-[var(--sa-navy)]/20 dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)] dark:hover:bg-[var(--sa-gold)]/30"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            All FACs (IGMC Website)
          </a>
          <a
            href={IGMC_SP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--sa-navy)]/10 px-3 py-1.5 text-sm font-medium text-[var(--sa-navy)] transition hover:bg-[var(--sa-navy)]/20 dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)] dark:hover:bg-[var(--sa-gold)]/30"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Grading Criteria
          </a>
          <a
            href={IGMC_SP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--sa-navy)]/10 px-3 py-1.5 text-sm font-medium text-[var(--sa-navy)] transition hover:bg-[var(--sa-navy)]/20 dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)] dark:hover:bg-[var(--sa-gold)]/30"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            IGMC MCO
          </a>
          <a
            href={IGMC_SP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--sa-navy)]/10 px-3 py-1.5 text-sm font-medium text-[var(--sa-navy)] transition hover:bg-[var(--sa-navy)]/20 dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)] dark:hover:bg-[var(--sa-gold)]/30"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
            CIP Management Toolkit
          </a>
        </div>
      </div>

      {/* Category Summary Cards - Data-driven */}
      <div className="grid gap-4 sm:grid-cols-3">
        {categoryCardsData.map((card) => (
          <CategoryFilterButton
            key={card.category}
            {...card}
            count={counts[card.category]}
            currentFilter={categoryFilter}
            setFilter={setCategoryFilter}
          />
        ))}
      </div>

      {/* Filter indicator */}
      {categoryFilter !== "all" && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Showing {filteredFACs.length} FACs for{" "}
            <span className="font-semibold">{categoryFilter}</span>
          </span>
          <button
            onClick={() => setCategoryFilter("all")}
            className="text-xs text-[var(--sa-navy)] underline hover:text-[var(--sa-red)] dark:text-[var(--sa-gold)] dark:hover:text-[var(--sa-cream)]"
          >
            Clear filter
          </button>
        </div>
      )}

      {/* FACs Grid */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Functional Area Checklists ({filteredFACs.length})
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFACs.map((fac) => (
            <FACCard key={fac.faNumber} fac={fac} />
          ))}
        </div>
      </div>
    </div>
  );
}
