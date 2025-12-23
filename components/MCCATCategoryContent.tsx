"use client";

import type { MCCATCategory } from "../data/mcaatQuestions";
import { getCategoryQuestionCount } from "../data/mcaatQuestions";
import MCCATUnitAccordion from "./MCCATUnitAccordion";
import Link from "next/link";

type Props = {
  category: MCCATCategory;
};

export default function MCCATCategoryContent({ category }: Props) {
  const totalQuestions = getCategoryQuestionCount(category);
  const nonEmptySections = category.sections.filter((s) => s.questions.length > 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/inspections/mcaat"
            className="mb-2 inline-flex items-center gap-1 text-sm text-zinc-600 transition hover:text-[var(--sa-navy)] dark:text-zinc-400 dark:hover:text-[var(--sa-cream)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to MCAAT
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {category.name}
          </h1>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">{category.description}</p>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-[var(--sa-navy)]/10 px-4 py-2 dark:bg-[var(--sa-cream)]/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {totalQuestions} Total Questions
          </span>
        </div>
      </div>

      {/* Unit Type Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        {category.sections.map((section) => (
          <div
            key={section.unitType}
            className={`rounded-lg border p-4 ${
              section.questions.length === 0
                ? "border-zinc-200 bg-zinc-50 opacity-50 dark:border-zinc-700 dark:bg-zinc-800/50"
                : "border-black/5 bg-white dark:border-white/10 dark:bg-black/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {section.unitType}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                  section.unitType === "REPORTING"
                    ? "bg-[var(--sa-navy)]/10 text-[var(--sa-navy)] dark:bg-[var(--sa-navy)]/30 dark:text-[var(--sa-cream)]"
                    : section.unitType === "IPAC"
                    ? "bg-[var(--sa-red)]/10 text-[var(--sa-red)]"
                    : "bg-[var(--sa-gold)]/20 text-[var(--sa-gold)] dark:text-[var(--sa-gold)]"
                }`}
              >
                {section.questions.length}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {nonEmptySections.map((section, idx) => (
          <MCCATUnitAccordion key={section.unitType} section={section} defaultOpen={idx === 0} />
        ))}
      </div>

      {nonEmptySections.length === 0 && (
        <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-600 dark:bg-zinc-800/30">
          <p className="text-zinc-600 dark:text-zinc-400">No questions available for this category yet.</p>
        </div>
      )}
    </div>
  );
}
