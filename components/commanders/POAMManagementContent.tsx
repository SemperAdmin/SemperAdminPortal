"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Target, AlertTriangle, Clock, CheckCircle } from "lucide-react";

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
  { id: "elements", label: "POA&M Elements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Specific & Measurable", value: "Every milestone must have a clear 'Done' state and responsible person" },
  { label: "Root Cause Analysis", value: "Identify why the failure happened, not just fix the symptom" },
  { label: "Closing the Loop", value: "POA&M only closed when Inspecting Authority accepts evidence of fix" },
  { label: "Commander's Roadmap", value: "Formal commitment to reach compliance" },
];

const POAM_ELEMENTS = [
  { element: "Finding", description: "The specific discrepancy identified during inspection" },
  { element: "Root Cause", description: "Why the failure occurred (training, turnover, resources, etc.)" },
  { element: "Corrective Action", description: "Specific steps to fix the problem" },
  { element: "Responsible Party", description: "Name and billet of person accountable" },
  { element: "Milestone Dates", description: "Target completion dates for each action" },
  { element: "Evidence of Completion", description: "Documentation proving the fix is complete" },
];

const ROOT_CAUSES = [
  "Lack of training or knowledge",
  "Personnel turnover without proper handoff",
  "Insufficient resources (time, equipment, personnel)",
  "Unclear policy or guidance",
  "Process failure or lack of SOP",
  "Leadership oversight gap",
];

const PROCESS_STEPS = [
  "Drafting: Section owners draft POA&M for each finding",
  "Root Cause: Identify why the failure happened (not just the symptom)",
  "Milestones: Set specific, measurable completion dates",
  "Review: CO reviews to ensure timelines are realistic and resources allocated",
  "Submission: POA&M submitted through chain of command to CIG",
  "Updates: Regular (monthly/quarterly) progress reports until closure",
  "Closure: Submit evidence of fix; CIG accepts and closes finding",
];

const TIMELINE_ITEMS = [
  { requirement: "30-45 Days", action: "Submit initial POA&M after inspection" },
  { requirement: "Monthly/Quarterly", action: "Submit progress reports" },
  { requirement: "6 Months", action: "Target to close all findings" },
];

const COMMON_ISSUES = [
  {
    issue: "Unrealistic timelines",
    solution: "Setting a completion date for next week for a problem requiring a year of training. Be honest about what it takes to fix the root cause.",
  },
  {
    issue: "POA&M stagnation",
    solution: "Submitting the POA&M then forgetting until next inspection. Track progress monthly and update CIG regularly.",
  },
  {
    issue: "Fixing symptoms not causes",
    solution: "Correcting the immediate issue without addressing why it happened. Conduct proper root cause analysis for lasting fixes.",
  },
];

export function POAMManagementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Target} title="POA&M Management" variant="info">
          A Plan of Action and Milestones (POA&M) is the commander&apos;s roadmap for fixing
          discrepancies found during an inspection. It is a <strong>formal commitment</strong>
          to the inspecting authority that the command has a plan to reach compliance.
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

        <InfoCard icon={Clock} title="6-Month Target" variant="warning">
          Most CGs expect findings to be <strong>closed within 6 months</strong> of the inspection.
          Start working on fixes immediately—don&apos;t wait for the final report.
        </InfoCard>
      </div>
    ),

    elements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            POA&M Elements
          </h2>
          <div className="mt-4 space-y-3">
            {POAM_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Root Causes
          </h3>
          <ul className="mt-3 space-y-2">
            {ROOT_CAUSES.map((cause) => (
              <li key={cause} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                {cause}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={CheckCircle} title="NAVMC 11333" variant="default">
          Use <strong>NAVMC 11333</strong> as the POA&M template to ensure all required elements
          are included and formatting is consistent.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            POA&M Process
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

        <InfoCard icon={AlertTriangle} title="Closing the Loop" variant="warning">
          A POA&M is only closed when the <strong>Inspecting Authority accepts the evidence</strong>
          of the fix. Submitting a progress report is not the same as closure.
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
