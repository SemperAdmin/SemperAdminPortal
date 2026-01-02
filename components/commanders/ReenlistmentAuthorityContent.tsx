"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UserCheck, AlertTriangle, Calendar, FileText } from "lucide-react";

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
  { id: "recommendations", label: "Recommendations" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Quality Force", value: "Retaining Marines who meet high standards of performance, conduct, and physical fitness" },
  { label: "Commander's Recommendation", value: "Can be 'Recommended,' 'Recommended with Reservations,' or 'Not Recommended'" },
  { label: "Waivers", value: "Commanders can recommend waivers for certain disqualifiers if the Marine is otherwise exceptional" },
];

const RECOMMENDATION_TYPES = [
  { type: "Recommended", description: "Marine fully meets all standards; command endorses retention", impact: "Strongest support for HQMC approval" },
  { type: "Recommended with Reservations", description: "Marine has minor issues but overall value warrants retention", impact: "Requires explanation of reservations in comments" },
  { type: "Not Recommended", description: "Marine does not meet standards for retention", impact: "Almost always results in denial by HQMC" },
];

const PROCESS_STEPS = [
  "Career Counseling: The Career Planner interviews the Marine and reviews their eligibility",
  "Command Review: The CO reviews the Marine's record, JEPES scores, and FITREP profile",
  "Interview: The CO (or SgtMaj) conducts a formal retention interview with the Marine",
  "Submission: The request (RELM) is pushed via the Total Force Retention System (TFRS) to HQMC",
];

const COMMON_ISSUES = [
  { issue: "Late Submissions", solution: "Failing to push the RELM before the boat spaces for a specific MOS are filled. Work with the Career Planner to submit early in the fiscal year window." },
  { issue: "Vague Reservations", solution: "Recommending a Marine 'with reservations' but failing to explain what those reservations are in the comments. Be specific about concerns." },
];

export function ReenlistmentAuthorityContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UserCheck} title="Reenlistment Authority" variant="info">
          The Commander serves as the primary &quot;gatekeeper&quot; for the career force. Reenlistment is a privilege, not a right, and the Commander&apos;s recommendation is the most influential factor in HQMC&apos;s decision to retain a Marine.
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
        <InfoCard icon={Calendar} title="Timeline" variant="warning">
          <strong>Fiscal Year Cycle:</strong> Reenlistment windows usually open in July for the upcoming fiscal year cohort. Early submission is critical as MOS boat spaces fill quickly.
        </InfoCard>
      </div>
    ),
    recommendations: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Recommendation Types</h2>
          <div className="mt-4 space-y-4">
            {RECOMMENDATION_TYPES.map((item) => (
              <div key={item.type} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.type}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Impact: </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={FileText} title="Waiver Authority" variant="default">
          Commanders can recommend waivers for certain disqualifiers (e.g., medical issues, minor legal history) if the Marine is otherwise exceptional. Waivers require strong justification.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reenlistment Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility Factors</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Current PFT/CFT scores</li>
            <li>&bull; Height/weight standards (not on BCP)</li>
            <li>&bull; JEPES standing and ranking</li>
            <li>&bull; Disciplinary record (NJP, courts-martial)</li>
            <li>&bull; Required PME completion</li>
            <li>&bull; MOS boat space availability</li>
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
        <InfoCard icon={AlertTriangle} title="Early Submission" variant="warning">
          MOS boat spaces fill quickly. Work with your Career Planner to ensure RELMs are submitted early in the fiscal year window.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
