"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Mail, AlertTriangle, FileText, Scale } from "lucide-react";

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
  { id: "types", label: "Letter Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "NPLOC", value: "Non-Punitive Letter of Caution - A private 'warning' that is not put into the Marine's permanent OMPF" },
  { label: "LOA", value: "Letter of Admonition - A more severe warning; can be administrative or punitive (if awarded at NJP)" },
  { label: "LOR", value: "Letter of Reprimand - The most severe administrative letter; almost always results in a permanent entry in the OMPF" },
];

const LETTER_TYPES = [
  { type: "Non-Punitive Letter of Caution (NPLOC)", placement: "Private (CO's file)", purpose: "Immediate correction; not a career-ender", severity: "Lowest" },
  { type: "Letter of Admonition (LOA)", placement: "Variable (can be private or permanent)", purpose: "Serious warning regarding a specific failure", severity: "Moderate" },
  { type: "Letter of Reprimand (LOR)", placement: "Permanent (OMPF)", purpose: "Formal censure; significant impact on promotions", severity: "Highest" },
];

const PROCESS_STEPS = [
  "Determination: CO determines the appropriate level of the letter based on the offense",
  "Drafting: The Adjutant or SJA drafts the letter with specific facts of the misconduct",
  "Delivery: The CO personally delivers the letter to the Marine in a formal setting",
  "Filing: Depending on the type, the letter is either kept in the CO's personal file or sent to HQMC for the OMPF",
];

const COMMON_ISSUES = [
  { issue: "Filing Errors", solution: "Mistakenly filing a private NPLOC in a Marine's official record, which violates the 'non-punitive' intent. Ensure clear procedures for letter filing." },
  { issue: "Delayed Delivery", solution: "Waiting too long to deliver the letter diminishes its corrective impact. Letters should be delivered as close to the incident as possible." },
];

export function AdverseLettersContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Mail} title="Letters of Caution/Admonition/Reprimand" variant="info">
          Administrative letters provide a tiered approach to discipline. They are used to formally correct behavior that does not necessarily rise to the level of NJP but requires more weight than a Page 11 entry.
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
        <InfoCard icon={Scale} title="Timeline" variant="warning">
          <strong>Immediate:</strong> Letters should be delivered as close to the incident as possible for maximum corrective effect
        </InfoCard>
      </div>
    ),
    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Disciplinary Letter Types</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Letter Type</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Placement</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Purpose</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Severity</th>
                </tr>
              </thead>
              <tbody>
                {LETTER_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.placement}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.purpose}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.severity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={FileText} title="Choosing the Right Level" variant="default">
          Consider the severity of the offense, the Marine&apos;s prior record, and the desired impact when selecting between NPLOC, LOA, and LOR.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Letter Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Letter Content Requirements</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Specific facts of the misconduct or failure</li>
            <li>&bull; Reference to the standard or order violated</li>
            <li>&bull; Expected corrective actions</li>
            <li>&bull; Consequences if behavior continues</li>
            <li>&bull; Acknowledgment of receipt by the Marine</li>
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
        <InfoCard icon={AlertTriangle} title="NPLOC Filing" variant="warning">
          An NPLOC is by definition &quot;non-punitive&quot; and should NEVER be placed in the Marine&apos;s official record. Keep it in the CO&apos;s personal file only.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
