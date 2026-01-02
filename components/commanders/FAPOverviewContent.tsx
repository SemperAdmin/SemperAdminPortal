"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Heart, AlertTriangle, Clock, Users, FileText } from "lucide-react";

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
  { id: "idc", label: "IDC Review" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Case Review Committee", value: "Commanders or representatives participate in determining clinical criteria for abuse" },
  { label: "Non-Punitive Nature", value: "FAP is clinical, not legal. 'Substantiated' is separate from 'guilty' at NJP/Court-Martial" },
  { label: "IDC", value: "Incident Determination Committee reviews evidence for central registry entry" },
  { label: "Readiness Issue", value: "FAP provides clinical tools to address family violence within the ranks" },
];

const PROCESS_STEPS = [
  "Report: Suspected abuse reported to FAP office (and PMO/Local Law Enforcement)",
  "Safety Assessment: FAP clinicians conduct immediate assessment for victim danger",
  "Command Notification: FAP office notifies Marine's CO within 24 hours",
  "IDC Review: CO (or rep) attends IDC to review facts and provide input on Marine's performance",
  "Treatment Plan: If substantiated, CO ensures Marine attends all required clinical appointments",
];

const IDC_PROCESS = [
  "FAP gathers evidence and clinical assessments",
  "IDC is convened (target: within 30 days of report)",
  "CO or designated representative attends to provide character/performance input",
  "Committee determines if incident meets clinical criteria for abuse",
  "If substantiated, case entered into central registry",
  "Treatment plan developed and CO ensures compliance",
];

const TIMELINE_ITEMS = [
  { requirement: "24 Hours", action: "Immediate reporting of suspected abuse to installation FAP office" },
  { requirement: "30 Days", action: "Target timeframe for IDC to meet after report initiated" },
];

const COMMON_ISSUES = [
  {
    issue: "Confusing IDC with UCMJ",
    solution: "Commanders sometimes try to 'veto' a FAP finding because they lack NJP evidence. The IDC uses a clinical standard, which is lower than a legal standard. These are separate processes.",
  },
  {
    issue: "Failure to protect confidentiality",
    solution: "Never discuss FAP case details in open staff meetings. FAP information is protected and should only be shared on a need-to-know basis.",
  },
  {
    issue: "Not attending IDC",
    solution: "Commander or designated representative must attend IDC meetings. Your input on the Marine's character and performance is valuable to the clinical determination.",
  },
];

export function FAPOverviewContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Heart} title="Family Advocacy Program (FAP)" variant="info">
          FAP is a congressionally mandated program intended to prevent and respond to domestic abuse,
          child abuse, and neglect. For Commanders, FAP is a <strong>readiness issue</strong>—it
          provides the clinical assessment and treatment tools necessary to address family violence.
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

        <InfoCard icon={AlertTriangle} title="Clinical vs. Legal Standards" variant="warning">
          A &quot;substantiated&quot; FAP finding uses a <strong>clinical standard</strong>, which is
          separate from a legal finding at NJP or Court-Martial. You can have a substantiated FAP
          case without enough evidence for UCMJ action, and vice versa.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FAP Response Process
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

        <InfoCard icon={Clock} title="24-Hour Notification" variant="default">
          The FAP office will notify the Marine&apos;s CO within <strong>24 hours</strong> of a report.
          Be prepared to provide input and ensure the Marine complies with any treatment requirements.
        </InfoCard>
      </div>
    ),

    idc: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Incident Determination Committee (IDC)
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The IDC is the formal body that reviews evidence to determine if an incident should
            be entered into the central registry. The CO or representative attends to provide input.
          </p>
          <div className="mt-6 space-y-4">
            {IDC_PROCESS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-gold)] text-sm font-bold text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Users} title="Commander's Role at IDC" variant="default">
          Your input on the Marine&apos;s <strong>character and duty performance</strong> is valuable
          to the clinical determination. Attend or send a knowledgeable representative.
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
