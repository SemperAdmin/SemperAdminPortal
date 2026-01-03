"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileWarning, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "classes", label: "Mishap Classes" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Class A", value: "Fatality, permanent total disability, or >$2.5M in damage" },
  { label: "Class B", value: "Permanent partial disability, 3+ people hospitalized, or $600k–$2.5M in damage" },
  { label: "Class C", value: "Any non-fatal injury resulting in 1+ days away from work or $60k–$600k in damage" },
  { label: "Privilege", value: "Safety investigations are 'privileged' to encourage honest testimony; they cannot be used for disciplinary action" },
];

const MISHAP_CLASSES = [
  { class: "A", criteria: "Fatality, permanent total disability, or >$2.5M damage", notification: "8 hours", color: "red" },
  { class: "B", criteria: "Permanent partial disability, 3+ hospitalized, or $600k–$2.5M damage", notification: "24 hours", color: "orange" },
  { class: "C", criteria: "1+ days away from work or $60k–$600k damage", notification: "5 days", color: "yellow" },
  { class: "D", criteria: "<$60k damage, no lost time", notification: "30 days", color: "green" },
];

const PROCESS_STEPS = [
  "Immediate Response: Secure the scene and provide medical aid",
  "Notification: Notify the higher HQ and the Safety Office immediately",
  "WESS/RMI Entry: The Safety Officer enters the mishap data into the Risk Management Information (RMI) system",
  "Safety Investigation: A Safety Investigation Board (SIB) is convened for serious mishaps",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "8 Hours", action: "Initial voice/electronic notification for Class A mishaps" },
  { requirement: "30 Days", action: "Target for completion of the formal SIREP (Safety Investigation Report)" },
];

const COMMON_ISSUES = [
  { issue: "Delayed Reporting", solution: "Waiting to 'be sure' of the damage cost before reporting violates the 8-hour requirement for serious events. Report immediately and update later." },
  { issue: "Privilege Confusion", solution: "Commanders attempting to use safety investigation testimony for disciplinary purposes. Safety investigations are privileged and separate from command investigations." },
];

const mishapColorClasses: Record<string, string> = {
  red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
};

export function MishapReportingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileWarning} title="Mishap Reporting" variant="info">
          A mishap is an unplanned event that results in death, injury, occupational illness, or property damage. Immediate and accurate reporting is required to identify root causes and prevent recurrence across the force.
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
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Clock className="h-5 w-5" />Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
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
      </div>
    ),
    classes: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mishap Classification</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Class</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Criteria</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Notification</th>
                </tr>
              </thead>
              <tbody>
                {MISHAP_CLASSES.map((item) => (
                  <tr key={item.class} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4">
                      <span className={`rounded-full px-3 py-1 text-sm font-bold ${mishapColorClasses[item.color] || mishapColorClasses.green}`}>
                        Class {item.class}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.criteria}</td>
                    <td className="py-3 font-medium text-zinc-700 dark:text-zinc-300">{item.notification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Shield} title="Safety Investigation Privilege" variant="default">
          Safety investigations are <strong>privileged</strong> to encourage honest testimony. They cannot be used for disciplinary action—this is separate from command investigations.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mishap Response Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Notification Chain</h3>
          <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Medical/Emergency Services</li>
            <li>Provost Marshal Office (PMO)</li>
            <li>Higher Headquarters</li>
            <li>Safety Office</li>
            <li>Staff Judge Advocate (if applicable)</li>
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
        <InfoCard icon={AlertTriangle} title="8-Hour Rule for Class A" variant="warning">
          Class A mishaps require notification within <strong>8 hours</strong>. Do not wait to confirm damage costs—report immediately and update later.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
