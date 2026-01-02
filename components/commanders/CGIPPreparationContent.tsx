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
  { id: "core", label: "CoRE Areas" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "CoRE vs. CoRE+", value: "Inspections focus on Common Readiness Events that are high-risk or high-impact" },
  { label: "The 'Find'", value: "A finding is non-compliance with an order; a 'Strength' exceeds the standard" },
  { label: "Command IG (CIG)", value: "Acts as the 'eyes and ears' of the Commanding General" },
  { label: "Frequency", value: "Standard frequency is once per 2 years (varies by MSC)" },
];

const CORE_AREAS = [
  "Administrative Programs (Personnel, Records)",
  "Legal Programs (NJP, Legal Hold, VWAP)",
  "Supply and Logistics",
  "Training and Readiness",
  "Safety Programs",
  "Equal Opportunity",
  "Sexual Assault Prevention and Response",
];

const PROCESS_STEPS = [
  "Notification: Unit receives Letter of Instruction (LOI) or inspection window notification",
  "Self-Assessment: Conduct 'mock' inspection using current IGMC checklists",
  "Source Document Prep: Build folders that mirror checklist questions",
  "In-Brief: CIG team meets with Commander to outline inspection scope",
  "Execution: Inspectors review records, conduct interviews, observe processes",
  "Out-Brief: CIG provides CO with preliminary report of findings",
  "POA&M: Submit Plan of Action and Milestones within 30 days",
];

const TIMELINE_ITEMS = [
  { requirement: "Every 2 Years", action: "Standard CGIP frequency (varies by MSC)" },
  { requirement: "30 Days", action: "Submit POA&M after receiving final report" },
  { requirement: "6 Months", action: "Target to close all findings" },
];

const COMMON_ISSUES = [
  {
    issue: "Records management failures",
    solution: "Most CGIP failures are not 'doing the work' but failing to 'document the work' per MCO 5210. Build source document folders that prove compliance.",
  },
  {
    issue: "Using outdated checklists",
    solution: "Always download the latest FAC version from the IGMC portal before self-assessment. Checklists are updated when orders change.",
  },
  {
    issue: "Unprepared for interviews",
    solution: "Inspectors will interview Marines at all levels. Ensure everyone knows their role and can articulate unit processes.",
  },
];

export function CGIPPreparationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="CGIP Preparation" variant="info">
          The Commanding General&apos;s Inspection Program (CGIP) is a formal, external evaluation
          of a unit&apos;s compliance with Marine Corps orders and statutory requirements. It is
          the primary way a CG assesses the <strong>readiness and legal compliance</strong> of
          subordinate commands.
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

        <InfoCard icon={Clock} title="30-Day POA&M Deadline" variant="warning">
          You have <strong>30 days</strong> after receiving the final report to submit your
          Plan of Action and Milestones. Start drafting during the inspection.
        </InfoCard>
      </div>
    ),

    core: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Readiness Events (CoRE)
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            These are mandatory items that every command is inspected on:
          </p>
          <ul className="mt-4 space-y-2">
            {CORE_AREAS.map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {area}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CoRE+ Areas
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Discretionary items a CG may choose to inspect based on unit mission:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Aviation-specific programs</li>
            <li>&bull; Ground combat element requirements</li>
            <li>&bull; Logistics/maintenance programs</li>
            <li>&bull; Unit-specific mission areas</li>
          </ul>
        </section>

        <InfoCard icon={FileText} title="Inspection Results" variant="default">
          <strong>Finding:</strong> Non-compliance with an order that must be corrected.
          <br />
          <strong>Strength:</strong> A process that exceeds the standard—share these best practices.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CGIP Process
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

        <InfoCard icon={AlertTriangle} title="Self-Assessment First" variant="warning">
          Conduct a thorough <strong>mock inspection</strong> using current IGMC checklists
          before the CGIP. Find and fix issues before the inspectors do.
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
