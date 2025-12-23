"use client";

import { useState } from "react";
import type { MCCATUnitSection } from "../data/mcaatQuestions";
import MCCATQuestionCard from "./MCCATQuestionCard";

type Props = {
  section: MCCATUnitSection;
  defaultOpen?: boolean;
};

const unitLabels: Record<string, { label: string; description: string }> = {
  REPORTING: {
    label: "Reporting Unit",
    description: "Questions for IPAC/reporting units responsible for unit diary entries",
  },
  IPAC: {
    label: "IPAC",
    description: "Questions specific to Installation Personnel Administration Center",
  },
  SUPPORTING: {
    label: "Supporting Unit",
    description: "Questions for S-1/Admin sections supporting their Marines",
  },
};

export default function MCCATUnitAccordion({ section, defaultOpen = false }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const info = unitLabels[section.unitType] || { label: section.unitType, description: "" };
  const questionCount = section.questions.length;

  if (questionCount === 0) {
    return null;
  }

  return (
    <div className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-black/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left transition hover:bg-[var(--sa-cream)]/30 dark:hover:bg-white/5"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${
              section.unitType === "REPORTING"
                ? "bg-[var(--sa-navy)] text-white dark:bg-[var(--sa-navy)]"
                : section.unitType === "IPAC"
                ? "bg-[var(--sa-red)] text-white"
                : "bg-[var(--sa-gold)] text-[var(--sa-navy)]"
            }`}
          >
            {section.unitType === "REPORTING" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            ) : section.unitType === "IPAC" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {info.label}
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">{info.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[var(--sa-navy)]/10 px-3 py-1 text-sm font-medium text-[var(--sa-navy)] dark:bg-[var(--sa-cream)]/10 dark:text-[var(--sa-cream)]">
            {questionCount} {questionCount === 1 ? "question" : "questions"}
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`h-5 w-5 text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="border-t border-black/5 p-4 dark:border-white/10">
          <div className="space-y-3">
            {section.questions.map((question, idx) => (
              <MCCATQuestionCard key={question.id} question={question} index={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
