"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { AlertOctagon, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "types", label: "Harassment Types" },
  { id: "response", label: "Response Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Quid Pro Quo", value: "'This for that' harassment—typically sexual in nature" },
  { label: "Hostile Work Environment", value: "Pervasive behavior that interferes with an individual's work performance" },
  { label: "Mandatory Reporting", value: "All leaders who observe or receive a report of harassment are required to take action" },
  { label: "72-Hour Response", value: "Formal complaints must be acknowledged within 72 hours" },
];

const HARASSMENT_TYPES = [
  {
    type: "Sexual Harassment",
    description: "Unwelcome sexual advances, requests for sexual favors, or verbal/physical conduct of a sexual nature",
    examples: "Inappropriate comments, unwanted touching, sexual jokes, quid pro quo propositions",
  },
  {
    type: "Discriminatory Harassment",
    description: "Harassment based on race, color, religion, sex, national origin, or other protected characteristics",
    examples: "Slurs, offensive jokes, exclusion based on protected status",
  },
  {
    type: "Bullying",
    description: "Repeated, unreasonable actions intended to intimidate, degrade, or humiliate",
    examples: "Public belittling, spreading rumors, sabotaging work, threats",
  },
];

const RESPONSE_STEPS = [
  "Receive the complaint (Formal via NAVMC 11512 or Informal)",
  "Acknowledge formal complaints within 72 hours",
  "Implement interim measures—determine if subject and complainant need separation",
  "Appoint an Investigating Officer (IO) to gather facts",
  "Complete investigation within 14 duty days",
  "CO reviews investigation and meets with complainant",
  "CO decides on disciplinary action and documents final resolution",
  "Report outcome to higher headquarters as required",
];

const TIMELINE_ITEMS = [
  { requirement: "72 Hours", action: "Acknowledge receipt of formal complaint" },
  { requirement: "14 Duty Days", action: "Complete the investigation" },
  { requirement: "Immediate", action: "Implement interim protective measures if needed" },
];

const COMMON_ISSUES = [
  {
    issue: "Informal 'Talks'",
    solution: "Attempting to 'handle it at the shop level' when a formal complaint has been made. Formal complaints must follow the 5354.1G process—informal resolution is only appropriate if the complainant requests it.",
  },
  {
    issue: "Delayed investigation",
    solution: "Investigations exceeding 14 duty days erode trust and may allow continued harm. Prioritize and resource investigations appropriately.",
  },
  {
    issue: "Inadequate interim measures",
    solution: "Failing to separate complainant and subject during investigation. Always consider whether the work environment is safe for the complainant.",
  },
];

export function HarassmentResponseContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={AlertOctagon} title="Harassment Response" variant="info">
          Harassment includes sexual harassment and non-sexual harassment (bullying, discriminatory
          harassment). The Commander&apos;s response must be swift to protect the victim and
          preserve the integrity of the work environment.
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
                {TIMELINE_ITEMS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Mandatory Leader Action" variant="warning">
          All leaders who observe or receive a report of harassment are <strong>required</strong>
          to take action. Failure to act is itself a violation of the order.
        </InfoCard>
      </div>
    ),

    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of Harassment
          </h2>
          <div className="mt-4 space-y-4">
            {HARASSMENT_TYPES.map((item) => (
              <div key={item.type} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.type}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="mt-2 rounded bg-zinc-50 p-2 dark:bg-zinc-800/50">
                  <span className="text-xs font-medium text-zinc-500">Examples:</span>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Formal vs. Informal Complaints
          </h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Formal (NAVMC 11512)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>&bull; Written complaint filed</li>
                <li>&bull; Investigation required</li>
                <li>&bull; 14-day timeline applies</li>
                <li>&bull; Formal documentation</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Informal</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>&bull; Verbal or written request</li>
                <li>&bull; Resolution at lowest level</li>
                <li>&bull; No formal investigation</li>
                <li>&bull; Complainant may elevate later</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    response: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Command Response Process
          </h2>
          <div className="mt-6 space-y-4">
            {RESPONSE_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Clock} title="14 Duty Day Investigation" variant="warning">
          Investigations must be completed within <strong>14 duty days</strong>. Extensions
          require documentation and approval from higher headquarters.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Interim Measures
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Physical separation of complainant and subject</li>
            <li>&bull; Reassignment to different work sections</li>
            <li>&bull; Modified duty schedules</li>
            <li>&bull; No-contact orders</li>
            <li>&bull; Temporary duty assignment if necessary</li>
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

        <InfoCard icon={FileText} title="Documentation" variant="default">
          Document all actions taken, including interim measures, investigation steps, and
          final disposition. This protects the command and demonstrates due diligence.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
