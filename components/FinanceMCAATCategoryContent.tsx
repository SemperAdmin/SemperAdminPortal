"use client";

import { useState, useMemo } from "react";
import type { FinanceCategory, FinanceMCAATQuestion } from "../data/financeMcaatQuestions";
import FinanceMCAATQuestionCard from "./FinanceMCAATQuestionCard";
import Link from "next/link";

type Props = {
  category: FinanceCategory;
  questions: FinanceMCAATQuestion[];
};

type FilterType = "all" | "DO" | "FO" | "outsideAgency";

export default function FinanceMCAATCategoryContent({ category, questions }: Props) {
  const [filter, setFilter] = useState<FilterType>("all");
  const [isExpanded, setIsExpanded] = useState(true);

  // Memoize counts to avoid recalculating on every render
  const { doCount, foCount, outsideCount } = useMemo(() => {
    return questions.reduce(
      (counts, q) => {
        if (q.applicability.DO) counts.doCount++;
        if (q.applicability.FO) counts.foCount++;
        if (q.applicability.outsideAgency) counts.outsideCount++;
        return counts;
      },
      { doCount: 0, foCount: 0, outsideCount: 0 }
    );
  }, [questions]);

  // Memoize filtered questions to prevent re-filtering when only isExpanded changes
  const filteredQuestions = useMemo(() => {
    if (filter === "all") {
      return questions;
    }
    return questions.filter((q) => {
      switch (filter) {
        case "DO":
          return q.applicability.DO;
        case "FO":
          return q.applicability.FO;
        case "outsideAgency":
          return q.applicability.outsideAgency;
        default:
          return false;
      }
    });
  }, [questions, filter]);

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
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Finance MCAAT Inspection Questions
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-[var(--sa-navy)]/10 px-4 py-2 dark:bg-[var(--sa-cream)]/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {questions.length} Total Questions
          </span>
        </div>
      </div>

      {/* Applicability Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <button
          onClick={() => setFilter(filter === "DO" ? "all" : "DO")}
          className={`rounded-lg border p-4 text-left transition ${
            filter === "DO"
              ? "border-[var(--sa-navy)] bg-[var(--sa-navy)]/10 dark:border-[var(--sa-gold)] dark:bg-[var(--sa-gold)]/10"
              : "border-black/5 bg-white hover:border-[var(--sa-navy)]/30 dark:border-white/10 dark:bg-black/30 dark:hover:border-[var(--sa-gold)]/30"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--sa-navy)] text-white dark:bg-[var(--sa-navy)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Disbursing Officer (DO)
              </span>
            </div>
            <span className="rounded-full bg-[var(--sa-navy)]/10 px-2 py-0.5 text-xs font-bold text-[var(--sa-navy)] dark:bg-[var(--sa-cream)]/10 dark:text-[var(--sa-cream)]">
              {doCount}
            </span>
          </div>
        </button>

        <button
          onClick={() => setFilter(filter === "FO" ? "all" : "FO")}
          className={`rounded-lg border p-4 text-left transition ${
            filter === "FO"
              ? "border-[var(--sa-red)] bg-[var(--sa-red)]/10"
              : "border-black/5 bg-white hover:border-[var(--sa-red)]/30 dark:border-white/10 dark:bg-black/30 dark:hover:border-[var(--sa-red)]/30"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--sa-red)] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Finance Officer (FO)
              </span>
            </div>
            <span className="rounded-full bg-[var(--sa-red)]/10 px-2 py-0.5 text-xs font-bold text-[var(--sa-red)]">
              {foCount}
            </span>
          </div>
        </button>

        <button
          onClick={() => setFilter(filter === "outsideAgency" ? "all" : "outsideAgency")}
          className={`rounded-lg border p-4 text-left transition ${
            filter === "outsideAgency"
              ? "border-[var(--sa-gold)] bg-[var(--sa-gold)]/10"
              : "border-black/5 bg-white hover:border-[var(--sa-gold)]/30 dark:border-white/10 dark:bg-black/30 dark:hover:border-[var(--sa-gold)]/30"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--sa-gold)] text-[var(--sa-navy)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Outside Agency
              </span>
            </div>
            <span className="rounded-full bg-[var(--sa-gold)]/20 px-2 py-0.5 text-xs font-bold text-[var(--sa-gold)]">
              {outsideCount}
            </span>
          </div>
        </button>
      </div>

      {/* Filter indicator */}
      {filter !== "all" && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Showing {filteredQuestions.length} questions for{" "}
            <span className="font-semibold">
              {filter === "DO" ? "Disbursing Officer" : filter === "FO" ? "Finance Officer" : "Outside Agency"}
            </span>
          </span>
          <button
            onClick={() => setFilter("all")}
            className="text-xs text-[var(--sa-navy)] underline hover:text-[var(--sa-red)] dark:text-[var(--sa-gold)] dark:hover:text-[var(--sa-cream)]"
          >
            Clear filter
          </button>
        </div>
      )}

      {/* Questions Section */}
      <div className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-black/40">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between p-4 text-left transition hover:bg-[var(--sa-cream)]/30 dark:hover:bg-white/5"
          aria-expanded={isExpanded}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--sa-navy)] text-white dark:bg-[var(--sa-navy)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {category.name}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Finance MCAAT inspection checklist questions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[var(--sa-navy)]/10 px-3 py-1 text-sm font-medium text-[var(--sa-navy)] dark:bg-[var(--sa-cream)]/10 dark:text-[var(--sa-cream)]">
              {filteredQuestions.length} {filteredQuestions.length === 1 ? "question" : "questions"}
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`h-5 w-5 text-zinc-500 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </button>
        {isExpanded && (
          <div className="border-t border-black/5 p-4 dark:border-white/10">
            <div className="space-y-3">
              {filteredQuestions.map((question) => (
                <FinanceMCAATQuestionCard key={question.id} question={question} />
              ))}
            </div>
          </div>
        )}
      </div>

      {filteredQuestions.length === 0 && (
        <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-600 dark:bg-zinc-800/30">
          <p className="text-zinc-600 dark:text-zinc-400">No questions match the current filter.</p>
        </div>
      )}
    </div>
  );
}
