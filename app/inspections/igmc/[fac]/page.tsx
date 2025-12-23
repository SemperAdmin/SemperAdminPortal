import Link from "next/link";
import { notFound } from "next/navigation";
import {
  functionalAreaChecklists,
  getFACBySlug,
  type FACCategory,
} from "../../../../data/igmcFacs";

// Generate static params for all FACs
export function generateStaticParams() {
  return functionalAreaChecklists.map((fac) => ({
    fac: fac.slug,
  }));
}

// Category badge component
function CategoryBadge({ category }: { category: FACCategory }) {
  const styles = {
    CoRE: "bg-[var(--sa-navy)] text-white",
    "Non-CoRE": "bg-zinc-500 text-white",
    "CoRE+": "bg-[var(--sa-gold)] text-[var(--sa-navy)]",
  };

  const descriptions = {
    CoRE: "Core Readiness Evaluation",
    "Non-CoRE": "Additional Functional Area",
    "CoRE+": "Enhanced Core Area",
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`rounded-full px-3 py-1 text-sm font-bold ${styles[category]}`}>
        {category}
      </span>
      <span className="text-sm text-zinc-500 dark:text-zinc-400">
        {descriptions[category]}
      </span>
    </div>
  );
}

export default async function FACPage({
  params,
}: {
  params: Promise<{ fac: string }>;
}) {
  const { fac: slug } = await params;
  const fac = getFACBySlug(slug);

  if (!fac) {
    notFound();
  }

  return (
    <div className="space-y-6">
      {/* Header with back link */}
      <div>
        <Link
          href="/inspections/igmc"
          className="mb-4 inline-flex items-center gap-1 text-sm text-zinc-600 transition hover:text-[var(--sa-navy)] dark:text-zinc-400 dark:hover:text-[var(--sa-cream)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to IGMC
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          {fac.name}
        </h1>
        <div className="mt-2">
          <CategoryBadge category={fac.category} />
        </div>
      </div>

      {/* FAC Details Card */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Functional Area Details
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-zinc-50 p-4 dark:bg-black/30">
            <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              FA Number
            </div>
            <div className="mt-1 font-mono text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {fac.faNumber}
            </div>
          </div>
          <div className="rounded-lg bg-zinc-50 p-4 dark:bg-black/30">
            <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Sponsor
            </div>
            <div className="mt-1 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {fac.sponsor}
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              {fac.sponsorAbbrev}
            </div>
          </div>
          <div className="rounded-lg bg-zinc-50 p-4 dark:bg-black/30">
            <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Effective Date
            </div>
            <div className="mt-1 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {fac.effectiveDate}
            </div>
          </div>
          <div className="rounded-lg bg-zinc-50 p-4 dark:bg-black/30">
            <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Category
            </div>
            <div className="mt-1 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {fac.category}
            </div>
          </div>
        </div>
      </div>

      {/* External Reference */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          External Resources
        </h2>
        <a
          href={fac.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--sa-navy)] px-4 py-2 font-medium text-white transition hover:bg-[var(--sa-navy)]/90 dark:bg-[var(--sa-gold)] dark:text-[var(--sa-navy)] dark:hover:bg-[var(--sa-gold)]/90"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          View on IGMC Website
        </a>
      </div>

      {/* Checklist Section Placeholder */}
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-700 dark:bg-black/20">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto h-12 w-12 text-zinc-400">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          Checklist Items Coming Soon
        </h3>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
          Detailed checklist items for this functional area will be added here.
        </p>
      </div>
    </div>
  );
}
