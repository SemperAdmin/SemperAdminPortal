import Link from "next/link";
import { missoCategories, getCategoryById, type MISSOCategory } from "../../../../data/missoChecklist";
import { notFound } from "next/navigation";

type Params = { category: string };

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function ChecklistItem({ id, question, trainingCode }: { id: string; question: string; trainingCode?: string }) {
  return (
    <div className="flex gap-3 rounded-lg border border-black/5 bg-white p-4 dark:border-white/10 dark:bg-black/30">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[var(--sa-red)]/30 text-[var(--sa-red)]/50">
        <span className="text-[10px] font-bold">{id}</span>
      </div>
      <div className="flex-1">
        <p className="text-sm text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          {question}
        </p>
        {trainingCode && (
          <div className="mt-2 flex items-center gap-2">
            <BookOpenIcon className="h-3.5 w-3.5 text-[var(--sa-gold)]" />
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Training Code: <span className="font-bold text-[var(--sa-gold)]">{trainingCode}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function MISSOCategoryPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const category = getCategoryById(p.category);

  if (!category) {
    notFound();
  }

  const itemsWithTraining = category.items.filter((item) => item.trainingCode);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/inspections/misso"
          className="mb-2 inline-flex items-center gap-1 text-sm text-zinc-600 transition hover:text-[var(--sa-navy)] dark:text-zinc-400 dark:hover:text-[var(--sa-cream)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to MISSO
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--sa-red)] text-white">
            <CheckCircleIcon className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {category.name}
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2 rounded-lg bg-[var(--sa-red)]/10 px-3 py-1.5">
          <span className="text-sm font-semibold text-[var(--sa-red)]">
            {category.items.length} Checklist Items
          </span>
        </div>
        {itemsWithTraining.length > 0 && (
          <div className="flex items-center gap-2 rounded-lg bg-[var(--sa-gold)]/10 px-3 py-1.5">
            <BookOpenIcon className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm font-semibold text-[var(--sa-gold)]">
              {itemsWithTraining.length} Training Available
            </span>
          </div>
        )}
      </div>

      {/* Checklist Items */}
      <section className="rounded-xl border border-black/5 bg-[var(--sa-cream)]/30 p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <h2 className="mb-4 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Site Visit Checklist
        </h2>
        <div className="space-y-3">
          {category.items.map((item) => (
            <ChecklistItem
              key={item.id}
              id={item.id}
              question={item.question}
              trainingCode={item.trainingCode}
            />
          ))}
        </div>
      </section>

      {/* Training Codes Summary */}
      {itemsWithTraining.length > 0 && (
        <section className="rounded-xl border border-[var(--sa-gold)]/20 bg-[var(--sa-gold)]/5 p-4 dark:border-[var(--sa-gold)]/30 dark:bg-[var(--sa-gold)]/10">
          <h3 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Available Training for This Section
          </h3>
          <div className="flex flex-wrap gap-2">
            {itemsWithTraining.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 dark:bg-black/30"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded bg-[var(--sa-navy)] text-[10px] font-bold text-white">
                  {item.trainingCode}
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  Request via TTS
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        <Link
          href="/inspections/misso"
          className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10"
        >
          View All Categories
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams(): { category: string }[] {
  return missoCategories.map((cat) => ({ category: cat.id }));
}
