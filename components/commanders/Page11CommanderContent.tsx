"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Clock, CheckCircle } from "lucide-react";

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
  { id: "types", label: "Entry Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Permanent Record", value: "Once ran on the unit diary, these entries are visible to promotion boards and career monitors" },
  { label: "Types of Entries", value: "Can be positive (e.g., recognizing a volunteer effort) or negative (e.g., documenting a minor infraction)" },
  { label: "Counseling Tool", value: "Serves as the middle ground between a verbal warning and a formal 6105 counseling" },
];

const ENTRY_TYPES = [
  { type: "Positive Entries", examples: "Volunteer work, exceptional performance, school achievements", impact: "Can support promotion boards and reenlistment" },
  { type: "Negative Entries", examples: "Minor infractions, counseling records, administrative warnings", impact: "Visible to boards; can affect promotions" },
  { type: "Administrative Entries", examples: "Duty status changes, qualifications, special assignments", impact: "Part of the Marine's official record" },
];

const PROCESS_STEPS = [
  "Drafting: The S-1 or supervisor drafts the entry using the IRAM-standardized format",
  "Advisement: The Marine is counseled on the entry and their right to submit a rebuttal",
  "Signature: Both the CO (or designee) and the Marine sign the entry",
  "Reporting: The entry is reported on the unit diary and uploaded to the OMPF",
];

const COMMON_ISSUES = [
  { issue: "Missing Rebuttal Rights", solution: "Failing to include the required statement that the Marine has been advised of their right to a rebuttal. This statement is mandatory for all derogatory entries." },
  { issue: "Improper Signatures", solution: "Having an unauthorized person sign the 'Commanding Officer' line without a formal delegation of authority. Ensure proper signature authority is in place." },
];

export function Page11CommanderContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="Page 11 Entries (Administrative Remarks)" variant="info">
          A &quot;Page 11&quot; (Administrative Remarks) entry is used to document a Marine&apos;s strengths, weaknesses, or significant events that do not require an NJP but should be part of their permanent record.
        </InfoCard>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h2>
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
        <InfoCard icon={Clock} title="Rebuttal Timeline" variant="warning">
          <strong>5 Working Days:</strong> Timeframe for a Marine to submit a rebuttal statement for a derogatory entry
        </InfoCard>
      </div>
    ),
    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Page 11 Entries</h2>
          <div className="mt-4 space-y-4">
            {ENTRY_TYPES.map((item) => (
              <div key={item.type} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.type}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400"><strong>Examples:</strong> {item.examples}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Impact: </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={CheckCircle} title="Positive Recognition" variant="default">
          Page 11 entries are not only for negative documentation. Use them to recognize exceptional performance that should be part of the Marine&apos;s permanent record.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Entry Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Elements for Derogatory Entries</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Specific facts of the incident or behavior</li>
            <li>&bull; Reference to applicable orders or standards violated</li>
            <li>&bull; Statement advising of right to submit rebuttal</li>
            <li>&bull; Marine&apos;s signature acknowledging receipt</li>
            <li>&bull; CO (or designee) signature with proper authority</li>
          </ul>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={AlertTriangle} title="Rebuttal Rights" variant="warning">
          Every derogatory Page 11 entry MUST include a statement advising the Marine of their right to submit a rebuttal within 5 working days.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
