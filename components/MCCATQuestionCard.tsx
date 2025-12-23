import type { MCCATQuestion } from "../data/mcaatQuestions";

type Props = {
  question: MCCATQuestion;
  index: number;
};

export default function MCCATQuestionCard({ question, index }: Props) {
  // Check if link is a report (contains tfsbi which is the BI reporting system)
  const isReport = question.link?.toLowerCase().includes('tfsbi');

  return (
    <div className="rounded-lg border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black/30">
      <div className="flex gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-gold)] dark:text-[var(--sa-navy)]">
          {index + 1}
        </span>
        <div className="flex-1 space-y-2">
          <p className="text-sm font-medium leading-relaxed text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {question.question}
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold">Reference:</span> {question.reference}
          </p>
          {(question.link || question.video) && (
            <div className="flex flex-wrap gap-2 pt-1">
              {question.link && isReport && (
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-[var(--sa-gold)]/20 px-2 py-1 text-xs font-medium text-[var(--sa-gold)] transition hover:bg-[var(--sa-gold)]/30 dark:bg-[var(--sa-gold)]/20 dark:hover:bg-[var(--sa-gold)]/30"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Report
                </a>
              )}
              {question.link && !isReport && (
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-[var(--sa-navy)]/10 px-2 py-1 text-xs font-medium text-[var(--sa-navy)] transition hover:bg-[var(--sa-navy)]/20 dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)] dark:hover:bg-[var(--sa-gold)]/30"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  Link
                </a>
              )}
              {question.video && (
                <a
                  href={question.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-[var(--sa-red)]/10 px-2 py-1 text-xs font-medium text-[var(--sa-red)] transition hover:bg-[var(--sa-red)]/20 dark:bg-[var(--sa-red)]/20 dark:hover:bg-[var(--sa-red)]/30"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Video
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
