"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileWarning, AlertTriangle, Clock, Scale } from "lucide-react";

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
  { id: "steps", label: "Required Steps" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Notification", value: "CO is notified by the Drug Testing Laboratory of a confirmed positive result" },
  { label: "Counseling", value: "Marine must be formally counseled (Page 11 entry) and informed of their rights" },
  { label: "Legal Review", value: "Coordinate with SJA to determine appropriate disposition (administrative vs. court-martial)" },
];

const REQUIRED_STEPS = [
  { step: "Receive Notification", description: "Drug Testing Lab notifies CO of confirmed positive", timeline: "Day 0", mandatory: true },
  { step: "Legal Consultation", description: "Consult SJA for disposition guidance", timeline: "Within 24 hours", mandatory: true },
  { step: "Formal Counseling", description: "Page 11 entry documenting positive result", timeline: "Within 48 hours", mandatory: true },
  { step: "Rights Advisement", description: "Inform Marine of rights under Article 31, UCMJ", timeline: "Before questioning", mandatory: true },
  { step: "SACO Referral", description: "Refer Marine to Substance Abuse Control Officer", timeline: "Within 72 hours", mandatory: true },
  { step: "Disposition Decision", description: "CO determines administrative or UCMJ action", timeline: "As guided by SJA", mandatory: true },
];

const PROCESS_STEPS = [
  "Notification Receipt: Receive official notification from the Drug Testing Laboratory with chain of custody documentation",
  "SJA Coordination: Immediately consult with the Staff Judge Advocate to review the case and determine disposition options",
  "Page 11 Entry: Document the positive result in the Marine's service record with formal counseling",
  "Rights Advisement: If questioning the Marine, advise them of their Article 31, UCMJ rights",
  "SACO Referral: Refer the Marine to the Substance Abuse Control Officer for assessment",
  "Disposition: Execute the appropriate action—administrative separation, NJP, or referral to court-martial",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "24 Hours", action: "Consult with SJA upon receipt of positive result" },
  { requirement: "48 Hours", action: "Complete Page 11 entry and formal counseling" },
  { requirement: "72 Hours", action: "Refer Marine to SACO for substance abuse assessment" },
];

const COMMON_ISSUES = [
  { issue: "Delayed Documentation", solution: "Failing to complete the Page 11 entry promptly. Document the positive result and counseling within 48 hours to preserve the administrative record." },
  { issue: "Missing Rights Advisement", solution: "Questioning the Marine without Article 31 advisement can compromise UCMJ action. Always advise rights before any questioning." },
  { issue: "Skipping SACO Referral", solution: "Even if separation is likely, the Marine must be referred to SACO for assessment. This is a mandatory step regardless of disposition." },
];

export function PositiveResultProceduresContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileWarning} title="Positive Result Procedures" variant="info">
          When a Marine tests positive for an illegal substance, the commander must follow specific procedures to ensure proper documentation, protect the Marine&apos;s rights, and execute appropriate disciplinary or administrative action. Failure to follow these procedures can compromise the case.
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
    steps: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Steps</h2>
          <div className="mt-4 space-y-3">
            {REQUIRED_STEPS.map((item) => (
              <div key={item.step} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.step}</h3>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      {item.timeline}
                    </span>
                    {item.mandatory && (
                      <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
                        Mandatory
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Scale} title="Disposition Options" variant="default">
          Disposition options include: <strong>Administrative Separation</strong>, <strong>Non-Judicial Punishment (NJP)</strong>, or <strong>Court-Martial</strong>. SJA guidance is critical in determining the appropriate path.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Positive Result Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Documentation Requirements</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Official notification from Drug Testing Laboratory</li>
            <li>&bull; Page 11 entry documenting counseling</li>
            <li>&bull; Article 31 rights advisement (if applicable)</li>
            <li>&bull; SACO assessment results</li>
            <li>&bull; Disposition documentation (NJP, separation, etc.)</li>
          </ul>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={AlertTriangle} title="Article 31 Rights" variant="warning">
          <strong>Always</strong> advise Article 31 rights before any questioning about the positive result. Failure to do so can compromise UCMJ action.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
