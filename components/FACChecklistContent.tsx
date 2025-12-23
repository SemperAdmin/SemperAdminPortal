"use client";

import { useState, useMemo } from "react";
import type { FunctionalAreaChecklist, FACCategory } from "../data/igmcFacs";
import type { FACChecklistData, FACSubsection, FACQuestion } from "../data/igmcFacChecklists";
import { getTotalQuestionCount } from "../data/igmcFacChecklists";
import Link from "next/link";

type Props = {
  fac: FunctionalAreaChecklist;
  checklist: FACChecklistData;
};

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

// Question card component
function QuestionCard({ question }: { question: FACQuestion }) {
  return (
    <div className="rounded-lg border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black/30">
      <div className="flex gap-3">
        <span className="flex h-7 w-14 shrink-0 items-center justify-center rounded-md bg-[var(--sa-navy)] font-mono text-xs font-bold text-white dark:bg-[var(--sa-gold)] dark:text-[var(--sa-navy)]">
          {question.number}
        </span>
        <div className="flex-1 space-y-3">
          {/* Question text */}
          <p className="text-sm font-medium leading-relaxed text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {question.text}
          </p>

          {/* Note/guidance if present */}
          {question.note && (
            <div className="rounded-md bg-[var(--sa-cream)]/50 p-3 dark:bg-white/5">
              <p className="text-xs italic text-zinc-600 dark:text-zinc-400">
                {question.note}
              </p>
            </div>
          )}

          {/* Reference */}
          <div className="flex items-start gap-2 text-xs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <div>
              <span className="font-semibold text-zinc-500 dark:text-zinc-400">Reference: </span>
              {question.reference.url ? (
                <a
                  href={question.reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-navy)] underline decoration-[var(--sa-navy)]/30 transition hover:decoration-[var(--sa-navy)] dark:text-[var(--sa-gold)] dark:decoration-[var(--sa-gold)]/30 dark:hover:decoration-[var(--sa-gold)]"
                >
                  {question.reference.text}
                </a>
              ) : (
                <span className="text-zinc-600 dark:text-zinc-400">{question.reference.text}</span>
              )}
            </div>
          </div>

          {/* Video link if present */}
          {question.video && (
            <a
              href={question.video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-600 transition hover:bg-red-500/20 dark:bg-red-500/20 dark:text-red-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M23 7l-7 5 7 5V7z" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              {question.video.title}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Collapsible subsection component
function SubsectionAccordion({
  subsection,
  isExpanded,
  onToggle,
}: {
  subsection: FACSubsection;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-black/40">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-4 text-left transition hover:bg-[var(--sa-cream)]/30 dark:hover:bg-white/5"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--sa-navy)] font-mono text-sm font-bold text-white dark:bg-[var(--sa-gold)] dark:text-[var(--sa-navy)]">
            {subsection.id}
          </div>
          <div>
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {subsection.title}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {subsection.questions.length} {subsection.questions.length === 1 ? "question" : "questions"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[var(--sa-navy)]/10 px-3 py-1 text-sm font-medium text-[var(--sa-navy)] dark:bg-[var(--sa-cream)]/10 dark:text-[var(--sa-cream)]">
            {subsection.questions.length}
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
            {subsection.questions.map((question) => (
              <QuestionCard key={question.number} question={question} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FACChecklistContent({ fac, checklist }: Props) {
  // Track which subsections are expanded
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    () => new Set(checklist.subsections.map((s) => s.id))
  );

  const totalQuestions = useMemo(() => getTotalQuestionCount(checklist), [checklist]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedSections(new Set(checklist.subsections.map((s) => s.id)));
  };

  const collapseAll = () => {
    setExpandedSections(new Set());
  };

  const allExpanded = expandedSections.size === checklist.subsections.length;

  return (
    <div className="space-y-6">
      {/* Header */}
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
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
          <CategoryBadge category={fac.category} />
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            FA {fac.faNumber} • {fac.sponsor} ({fac.sponsorAbbrev}) • Effective: {fac.effectiveDate}
          </span>
        </div>
        {checklist.applicabilityNote && (
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 dark:bg-blue-900/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-blue-600 dark:text-blue-400">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span className="text-sm text-blue-700 dark:text-blue-300">{checklist.applicabilityNote}</span>
          </div>
        )}
      </div>

      {/* SME Contact */}
      {checklist.sme && (
        <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black/40">
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Subject Matter Expert
          </div>
          <div className="mt-2 text-sm">
            <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{checklist.sme.name}</div>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-zinc-600 dark:text-zinc-400">
              <a href={`mailto:${checklist.sme.email}`} className="inline-flex items-center gap-1 hover:text-[var(--sa-navy)] dark:hover:text-[var(--sa-gold)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {checklist.sme.email}
              </a>
              {checklist.sme.phone && (
                <span className="inline-flex items-center gap-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {checklist.sme.phone}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Resources Section */}
      {checklist.resources && (
        <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black/40">
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Resources
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {/* Directives */}
            {checklist.resources.directives?.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--sa-navy)]/10 px-3 py-1.5 text-sm font-medium text-[var(--sa-navy)] transition hover:bg-[var(--sa-navy)]/20 dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)] dark:hover:bg-[var(--sa-gold)]/30"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                {resource.title}
              </a>
            ))}
            {/* SharePoints */}
            {checklist.resources.sharepoints?.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-600 transition hover:bg-blue-500/20 dark:text-blue-400"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                {resource.title}
              </a>
            ))}
            {/* Teams */}
            {checklist.resources.teams?.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-purple-500/10 px-3 py-1.5 text-sm font-medium text-purple-600 transition hover:bg-purple-500/20 dark:text-purple-400"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {resource.title}
              </a>
            ))}
            {/* Videos */}
            {checklist.resources.videos?.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-red-500/10 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-500/20 dark:text-red-400"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                {resource.title}
              </a>
            ))}
            {/* Other */}
            {checklist.resources.other?.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-500/10 px-3 py-1.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-500/20 dark:text-zinc-400"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                {resource.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Questions Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-zinc-200 py-4 dark:border-zinc-700">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
          <span className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {totalQuestions} Total Questions
          </span>
        </div>
        <button
          onClick={allExpanded ? collapseAll : expandAll}
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          {allExpanded ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" y1="10" x2="21" y2="3" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
              Collapse All
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
              Expand All
            </>
          )}
        </button>
      </div>

      {/* Subsections */}
      <div className="space-y-4">
        {checklist.subsections.map((subsection) => (
          <SubsectionAccordion
            key={subsection.id}
            subsection={subsection}
            isExpanded={expandedSections.has(subsection.id)}
            onToggle={() => toggleSection(subsection.id)}
          />
        ))}
      </div>
    </div>
  );
}
