"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UserX, AlertTriangle, Calendar, FileText } from "lucide-react";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: {
    references: Reference[];
  };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "authority", label: "Authority" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Subjective Judgment", value: "Commander determines if Marine possesses leadership and character for next rank" },
  { label: "Effect", value: "NOT REC prevents promotion during that specific month/cycle" },
  { label: "Not Permanent", value: "Must be re-evaluated each month; not a permanent 'death sentence'" },
  { label: "Documentation", value: "Must be supported by a Page 11 entry explaining the deficiency" },
];

const VALID_REASONS = [
  { reason: "Pending Legal Action", description: "Marine is under investigation or has pending charges" },
  { reason: "Failing PME", description: "Marine has not completed required Professional Military Education" },
  { reason: "Lack of Leadership", description: "Marine has not demonstrated leadership qualities for the next grade" },
  { reason: "Recent Disciplinary Action", description: "Recent NJP or adverse action indicating lack of readiness" },
  { reason: "Performance Deficiencies", description: "Documented performance issues that have not been corrected" },
];

const PROCESS_STEPS = [
  "Identify Deficiency: Chain of command identifies why Marine is not ready for promotion",
  "Document Reason: Prepare Page 11 entry explaining the specific deficiency",
  "Counseling: Marine must be counseled in writing on why they are being NOT REC'd",
  "MOL Entry: S-1 marks the Marine as 'NOT REC' in the select grade module on MOL",
  "Monthly Review: Commander reviews status monthly to determine if Marine has corrected deficiency",
  "Remove NOT REC: Once deficiency is corrected, remove the NOT REC and document improvement",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Before the 15th", action: "NOT REC entries must be finalized in MOL before the 15th of the month preceding promotion" },
  { requirement: "Monthly", action: "Commander reviews NOT REC status monthly" },
  { requirement: "Upon Correction", action: "Remove NOT REC and update Page 11 when deficiency is corrected" },
];

const COMMON_ISSUES = [
  {
    issue: "Lack of documentation",
    solution: "Marking a Marine NOT REC without a supporting Page 11 entry. This will be flagged by an IG inspection. Always document the reason in writing before entering in MOL.",
  },
  {
    issue: "'Automatic' NOT RECs",
    solution: "Using a NOT REC as a punishment for NJP. While often related, the NOT REC must be based on a lack of promotion readiness, not just a punitive response. Evaluate the Marine's overall fitness for the next grade.",
  },
  {
    issue: "Forgetting to remove",
    solution: "Leaving a NOT REC in place after the Marine has corrected the deficiency. Review monthly and remove promptly when the Marine demonstrates readiness.",
  },
];

export function NotRecAuthorityContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UserX} title="NOT REC Authority" variant="info">
          Commanders have the authority and responsibility to <strong>&quot;Not Recommend&quot;
          (NOT REC)</strong> a Marine for promotion if they do not meet the standards of
          the next higher grade, even if the Marine is otherwise &quot;fully qualified&quot; by
          time-in-service and time-in-grade.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Calendar} title="Monthly Review Required" variant="warning">
          A NOT REC is <strong>not permanent</strong>. The commander must review the
          Marine&apos;s status monthly and remove the NOT REC once the deficiency is corrected.
        </InfoCard>
      </div>
    ),

    authority: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Valid Reasons for NOT REC
          </h2>
          <div className="mt-4 space-y-3">
            {VALID_REASONS.map((item) => (
              <div key={item.reason} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.reason}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={FileText} title="Documentation is Mandatory" variant="default">
          Every NOT REC must be supported by a <strong>Page 11 entry</strong> that
          specifically explains the deficiency. The entry should identify what the
          Marine must do to become promotable.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NOT REC vs. Punishment
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; NOT REC is an <strong>administrative action</strong>, not punishment</li>
            <li>&bull; Based on <strong>fitness for next grade</strong>, not retribution</li>
            <li>&bull; NJP alone does not automatically warrant NOT REC</li>
            <li>&bull; Evaluate the Marine&apos;s overall readiness for increased responsibility</li>
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NOT REC Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Before the 15th" variant="warning">
          NOT REC entries must be finalized in MOL <strong>before the 15th</strong> of
          the month preceding the promotion. Late entries may not take effect for
          the current cycle.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Page 11 Entry Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Specific statement of deficiency</li>
            <li>&bull; What the Marine must do to become promotable</li>
            <li>&bull; Resources available to help the Marine improve</li>
            <li>&bull; Statement that Marine is NOT REC for promotion</li>
            <li>&bull; Marine&apos;s signature acknowledging receipt</li>
          </ul>
        </section>
      </div>
    ),

    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems & Solutions
          </h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
