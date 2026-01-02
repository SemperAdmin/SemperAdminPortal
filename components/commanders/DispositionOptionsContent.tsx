"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, FileText } from "lucide-react";

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
  { id: "options", label: "Disposition Options" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const DISPOSITION_OPTIONS = [
  { option: "No action", description: "Close case without action" },
  { option: "Administrative action", description: "Counseling, EMI, adverse fitness report" },
  { option: "Nonpunitive measures", description: "Letter of instruction, nonpunitive letter of caution" },
  { option: "Nonjudicial punishment", description: "Article 15 NJP" },
  { option: "Administrative separation", description: "Separation processing" },
  { option: "Summary court-martial", description: "Lowest level court-martial" },
  { option: "Special court-martial", description: "Intermediate level court-martial" },
  { option: "General court-martial", description: "Highest level court-martial" },
  { option: "Civilian authorities", description: "Referral for civilian prosecution" },
];

const PROCESS_STEPS = [
  "Receive report of alleged misconduct",
  "Conduct preliminary inquiry",
  "Evaluate evidence and nature of offense",
  "Consider Marine's record and circumstances",
  "Consult with Staff Judge Advocate",
  "Obtain victim input if required",
  "Select appropriate disposition",
  "Document decision and rationale",
  "Execute selected disposition",
  "Monitor for compliance and rehabilitation",
];

const COMMON_ISSUES = [
  {
    issue: "Multiple offenses by same Marine",
    solution: "Select disposition appropriate for most serious offense.",
  },
  {
    issue: "Victim preference differs from commander recommendation",
    solution: "Document victim input and explain rationale for disposition.",
  },
];

export function DispositionOptionsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Disposition Options" variant="info">
          Commanders have multiple options for addressing misconduct. The appropriate disposition
          depends on the nature of the offense, the evidence, the needs of good order and discipline,
          and the interests of justice.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Considerations
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Nature and seriousness of the offense</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Quality and admissibility of evidence</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Marine&apos;s service record and rehabilitation potential</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Impact on good order and discipline</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Victim input (required for sex-related offenses)</span>
            </li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Victim Input Required" variant="warning">
          Victim input is required for sex-related offenses before making a disposition decision.
          Commander input is considered for covered offenses handled by STC.
        </InfoCard>
      </div>
    ),

    options: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Available Disposition Options
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Option</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {DISPOSITION_OPTIONS.map((item) => (
                  <tr key={item.option} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.option}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={FileText} title="Combinations Authorized" variant="default">
          Combinations of disposition options may be appropriate. For example, NJP followed by
          administrative separation, or administrative action combined with transfer.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Disposition Decision Process
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
            Timeline Considerations
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Promptly:</strong> Preliminary inquiry should be initiated promptly</li>
            <li>&bull; <strong>Statute of limitations:</strong> Varies by offense - charges must be preferred within this period</li>
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
