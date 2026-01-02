"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, FileText, Users, Lock } from "lucide-react";

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
  { id: "process", label: "Process" },
  { id: "confidential", label: "Confidential Mast" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Right", value: "Every Marine may request mast up to CG" },
  { label: "Form", value: "NAVMC 11296" },
  { label: "Time Limit at Each Level", value: "No more than 1 working day delay" },
  { label: "Denial Report", value: "Within 5 working days to first GO" },
  { label: "Interference", value: "Subject to UCMJ action" },
];

const PROCESS_STEPS = [
  "Marine prepares NAVMC 11296 with reasons for request",
  "Marine submits to first commander in chain of command",
  "Each intermediate commander offers to resolve issue",
  "If unresolved, commander provides written statement and forwards",
  "Request reaches addressed commander",
  "Commander conducts request mast hearing",
  "Commander takes action or explains why no action taken",
  "Marine initials NAVMC 11296 acknowledging disposition",
  "Original NAVMC 11296 filed per records schedule",
];

const CONFIDENTIAL_STEPS = [
  "Marine seals NAVMC 11296 marked to be opened by CG only",
  "Marine includes statement explaining why subject not revealed",
  "Each commander forwards without opening",
  "CG or designated RMRA opens and reviews",
  "CG takes appropriate action",
];

const COMMON_ISSUES = [
  {
    issue: "Marine requests mast about pending UCMJ action",
    solution: "Commander may deny and explain alternative avenue through UCMJ appeals process.",
  },
  {
    issue: "Marine refuses to reveal subject to intermediate commanders",
    solution: "Forward sealed request mast to addressed commander without opening.",
  },
];

export function RequestMastContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Request Mast Procedures" variant="info">
          Request mast is the primary formal process for Marines to seek assistance from or
          communicate grievances to their commander. Every Marine has the right to request mast
          up to and including the Commanding General.
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
            Commander Responsibilities
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; All commanders with NJP authority implement a request mast program</li>
            <li>&bull; Each intermediate commander offers to resolve the issue</li>
            <li>&bull; No more than one working day delay at any level</li>
            <li>&bull; Commander may deny only if other specific avenue of redress exists</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Interference Prohibited" variant="warning">
          Interference or retaliation against a Marine requesting mast is <strong>prohibited</strong>
          and subjects violators to UCMJ action. CG may suspend request mast during operational
          commitments if necessary.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Request Mast Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Delay at each level:</span>
              <span className="text-zinc-600 dark:text-zinc-400">No more than 1 working day</span>
            </div>
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Denial report to GO:</span>
              <span className="text-zinc-600 dark:text-zinc-400">Within 5 working days</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Emergency cases:</span>
              <span className="text-zinc-600 dark:text-zinc-400">Earliest reasonable time</span>
            </div>
          </div>
        </section>

        <InfoCard icon={FileText} title="Denial Limitations" variant="default">
          Request mast may <strong>not</strong> be used to attack UCMJ proceedings or
          administrative separation processing. Commander denying request mast reports
          denial to first GO within 5 working days.
        </InfoCard>
      </div>
    ),

    confidential: (
      <div className="space-y-6">
        <InfoCard icon={Lock} title="Confidential Request Mast" variant="info">
          Marines may seal a request mast to be opened only by the Commanding General.
          This allows sensitive matters to bypass intermediate commanders.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Confidential Request Mast Process
          </h2>
          <div className="mt-6 space-y-4">
            {CONFIDENTIAL_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; NAVMC 11296 must be marked &quot;To be opened by CG only&quot;</li>
            <li>&bull; Marine must include statement explaining why subject not revealed</li>
            <li>&bull; Each commander forwards <strong>without opening</strong></li>
            <li>&bull; CG or designated RMRA opens and reviews</li>
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
