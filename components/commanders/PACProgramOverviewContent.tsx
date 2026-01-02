"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Shield, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "reporting", label: "Reporting Channels" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Zero Tolerance", value: "Any PAC violation is a potential UCMJ violation (Article 92)" },
  { label: "Scope", value: "Applies to all military personnel; sometimes civilians/contractors" },
  { label: "Deciding Officials", value: "Commanders are primary decision-makers for PAC complaints" },
  { label: "Standard of Proof", value: "Preponderance of evidence" },
];

const PROHIBITED_CONDUCT = [
  "Harassment (sexual, racial, or other protected categories)",
  "Discrimination based on race, color, religion, sex, national origin",
  "Hazing in any form",
  "Bullying",
  "Wrongful distribution of intimate images",
  "Retaliation against reporters or witnesses",
];

const REPORTING_CHANNELS = [
  { type: "Informal", description: "Marine attempts to resolve issue directly or with chain of command assistance" },
  { type: "Formal", description: "Written complaint using NAVMC 11512 initiating official investigation" },
  { type: "Anonymous", description: "Report without identifying oneself; limited investigation capability" },
];

const PROCESS_STEPS = [
  "Reporting: Marine reports via Informal, Formal, or Anonymous channel",
  "Intake: EOA or Command Team receives report and conducts initial assessment",
  "Inquiry: Command Investigation (CI) or Preliminary Inquiry (PI) initiated",
  "Adjudication: Commander determines if allegation is substantiated",
  "Resolution: Corrective actions, NJP, or admin sep if substantiated",
];

const TIMELINE_ITEMS = [
  { requirement: "3 Duty Days", action: "Acknowledge receipt of formal complaint" },
  { requirement: "14 Duty Days", action: "Complete investigation (extensions may be requested)" },
];

const COMMON_ISSUES = [
  {
    issue: "Failure to protect the reporter from retaliation",
    solution: "Retaliation is the most common follow-on issue. Commanders must actively monitor for 'social ostracism' after a report is filed. Brief the unit on anti-retaliation requirements.",
  },
  {
    issue: "Delayed acknowledgment of complaint",
    solution: "Ensure the EOA or designated official acknowledges receipt within 3 duty days. Create a tracking system for all complaints.",
  },
  {
    issue: "Investigation exceeds 14-day limit",
    solution: "Request extension from appropriate authority before deadline. Document reason for delay.",
  },
];

export function PACProgramOverviewContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="Prohibited Activities and Conduct (PAC)" variant="info">
          The PAC program consolidates the Marine Corps&apos; approach to preventing and responding
          to harassment, discrimination, hazing, bullying, and retaliation. It ensures every Marine
          is treated with dignity and respect to maintain combat readiness.
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
            Prohibited Conduct Categories
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {PROHIBITED_CONDUCT.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Zero Tolerance" variant="warning">
          Any violation of the PAC order is a <strong>potential UCMJ violation</strong> under
          Article 92. Commanders must take all allegations seriously and investigate promptly.
        </InfoCard>
      </div>
    ),

    reporting: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reporting Channels
          </h2>
          <div className="mt-4 space-y-4">
            {REPORTING_CHANNELS.map((channel) => (
              <div key={channel.type} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{channel.type}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{channel.description}</p>
              </div>
            ))}
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

        <InfoCard icon={FileText} title="NAVMC 11512" variant="default">
          Formal complaints are submitted using <strong>NAVMC 11512</strong>. Ensure the form is
          complete and includes all relevant details to support the investigation.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PAC Complaint Process
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
            Adjudication Outcomes
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Substantiated</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                Allegation proven by preponderance of evidence. Corrective action required.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Unsubstantiated</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Insufficient evidence to prove allegation. Document findings thoroughly.
              </p>
            </div>
          </div>
        </section>

        <InfoCard icon={Clock} title="14-Day Investigation" variant="default">
          Investigations should be completed within <strong>14 duty days</strong>. Extensions may
          be requested from the appropriate authority before the deadline expires.
        </InfoCard>
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
