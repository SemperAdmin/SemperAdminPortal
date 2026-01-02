"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, FileText, AlertTriangle } from "lucide-react";

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
  { id: "process", label: "Appeal Process" },
  { id: "authority", label: "Appeal Authority" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Appeal Deadline", value: "5 working days after imposition" },
  { label: "Grounds for Appeal", value: "Punishment unjust or disproportionate" },
  { label: "Appeal Authority", value: "Next superior in chain of command" },
  { label: "Stay of Punishment", value: "If no action within 5 days of filing" },
];

const APPEAL_STEPS = [
  "Accused submits written appeal within 5 working days",
  "Officer who imposed NJP prepares forwarding endorsement",
  "Endorsement includes completed NAVMC 10132 and all documents considered",
  "Appeal forwarded to next superior in chain of command",
  "Judge advocate reviews appeal if punishment exceeds certain thresholds",
  "Appeal authority reviews all materials",
  "Appeal authority takes action (approve, disapprove, modify)",
  "Action forwarded to accused",
];

const APPEAL_AUTHORITY_ACTIONS = [
  "Set aside (completely nullify) the punishment",
  "Reduce the punishment",
  "Mitigate (change type of punishment to lesser type)",
  "Suspend all or part of punishment",
  "Approve original punishment as imposed",
];

const COMMON_ISSUES = [
  {
    issue: "Appeal submitted late",
    solution: "Officer acting on appeal determines whether good cause exists for delay.",
  },
  {
    issue: "Appeal authority junior to imposing officer",
    solution: "Forward to the nearest Marine Corps general officer senior to the imposing officer.",
  },
  {
    issue: "Appeal authority was the one who delegated NJP authority",
    solution: "That officer cannot act on appeal of punishment imposed by the delegate. Forward to next superior.",
  },
];

export function NJPAppealsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="NJP Appeal Procedures" variant="info">
          Marines have the right to appeal NJP within 5 working days of imposition. Appeals are
          based on punishment being unjust or disproportionate. The appeal authority is the next
          superior in the chain of command.
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

        <InfoCard icon={AlertTriangle} title="Cannot Increase Punishment" variant="warning">
          The appeal authority may set aside, reduce, mitigate, or suspend punishment but
          <strong> cannot increase punishment</strong> on appeal.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Appeal Process Steps
          </h2>
          <div className="mt-6 space-y-4">
            {APPEAL_STEPS.map((step, index) => (
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
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Appeal Filing:</span>
              <span className="text-zinc-600 dark:text-zinc-400">Within 5 working days</span>
            </div>
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Stay of Punishment:</span>
              <span className="text-zinc-600 dark:text-zinc-400">If no action within 5 days of filing</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Announcement:</span>
              <span className="text-zinc-600 dark:text-zinc-400">Within 30 days authorized</span>
            </div>
          </div>
        </section>
      </div>
    ),

    authority: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="Appeal Authority Actions" variant="info">
          The appeal authority reviews all materials and may take any of the following actions:
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Available Actions
          </h2>
          <ul className="mt-4 space-y-3">
            {APPEAL_AUTHORITY_ACTIONS.map((action) => (
              <li key={action} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 text-green-500">&#10003;</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who is the Appeal Authority?
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Next superior in the <strong>operational</strong> chain of command</li>
            <li>&bull; Must be <strong>senior in grade</strong> to the officer who imposed NJP</li>
            <li>&bull; Certain punishments require <strong>judge advocate review</strong> before action</li>
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
