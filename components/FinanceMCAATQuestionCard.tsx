import type { FinanceMCAATQuestion } from "../data/financeMcaatQuestions";

type Props = {
  question: FinanceMCAATQuestion;
};

// Applicability badge component
function ApplicabilityBadge({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
        active
          ? "bg-[var(--sa-navy)]/10 text-[var(--sa-navy)] dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)]"
          : "bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-600"
      }`}
    >
      {label}
    </span>
  );
}

export default function FinanceMCAATQuestionCard({ question }: Props) {
  return (
    <div className="rounded-lg border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black/30">
      <div className="flex gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-gold)] dark:text-[var(--sa-navy)]">
          {question.number}
        </span>
        <div className="flex-1 space-y-3">
          {/* Question text */}
          <p className="text-sm font-medium leading-relaxed text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {question.question}
          </p>

          {/* Reference */}
          <div className="text-xs text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold">Reference: </span>
            <span>{question.reference}</span>
          </div>

          {/* Applicability badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">Applies to:</span>
            <ApplicabilityBadge label="DO" active={question.applicability.DO} />
            <ApplicabilityBadge label="FO" active={question.applicability.FO} />
            <ApplicabilityBadge label="Outside Agency" active={question.applicability.outsideAgency} />
          </div>

          {/* Fiscal Year history */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">FY History:</span>
            {Object.entries(question.fiscalYears).map(([year, active]) => (
              <span
                key={year}
                className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium ${
                  active
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-zinc-100 text-zinc-400 line-through dark:bg-zinc-800 dark:text-zinc-600"
                }`}
              >
                {year}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
