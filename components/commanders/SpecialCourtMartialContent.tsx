"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, Users } from "lucide-react";

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
  { id: "jurisdiction", label: "Jurisdiction" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Convening Authority", value: "SPCMCA designated by SECNAV or regulation" },
  { label: "Composition", value: "Military judge + 4 members, or judge alone" },
  { label: "Jurisdiction", value: "Any noncapital offense" },
  { label: "Max Confinement", value: "12 months" },
  { label: "Max Forfeiture", value: "Two-thirds pay for 12 months" },
  { label: "Max Reduction", value: "To E-1" },
  { label: "Punitive Discharge", value: "Bad-conduct discharge (with BCD authority)" },
];

const PROCESS_STEPS = [
  "Preliminary inquiry conducted",
  "Charges preferred (sworn)",
  "Charges forwarded to SPCMCA",
  "SJA provides pretrial advice (for BCD cases)",
  "Preliminary hearing conducted if required",
  "SPCMCA refers charges to special court-martial",
  "Military judge and members detailed",
  "Trial conducted",
  "Sentencing (if guilty)",
  "Post-trial processing",
];

const COMMON_ISSUES = [
  {
    issue: "Convening authority is the accuser",
    solution: "Forward charges to next superior convening authority.",
  },
  {
    issue: "Covered offense identified",
    solution: "Forward to Special Trial Counsel for determination.",
  },
];

export function SpecialCourtMartialContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Special Court-Martial" variant="info">
          Special court-martial is an intermediate-level court with authority to try any noncapital
          offense. It consists of a military judge and at least four members, or military judge
          alone at the accused&apos;s request.
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

        <InfoCard icon={AlertTriangle} title="Special Trial Counsel" variant="warning">
          Charges alleging covered offenses over which STC exercises authority cannot be referred
          by the convening authority. Forward such cases to the STC.
        </InfoCard>
      </div>
    ),

    jurisdiction: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who Has SPCMCA
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Special court-martial convening authority is designated by the Secretary of the Navy
            or by regulation. This includes:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Commanding officers of Marine Corps districts</li>
            <li>&bull; Commanding officers of brigades</li>
            <li>&bull; Commanding officers of regiments</li>
            <li>&bull; Commanding officers of separate battalions</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Composition Options
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">With Members</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Military judge + at least 4 members</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Judge Alone</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Military judge alone at accused&apos;s request</p>
            </div>
          </div>
        </section>

        <InfoCard icon={Users} title="Enlisted Members" variant="default">
          Enlisted accused may request one-third enlisted members on the panel.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Special Court-Martial Process
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Speedy Trial:</span>
              <span className="text-zinc-600 dark:text-zinc-400">120 days from preferral or restraint</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Charges to Accused:</span>
              <span className="text-zinc-600 dark:text-zinc-400">Within 8 days</span>
            </div>
          </div>
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
