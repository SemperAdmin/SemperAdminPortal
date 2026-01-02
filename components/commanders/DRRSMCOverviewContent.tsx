"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { BarChart3, AlertTriangle, Clock, Database } from "lucide-react";

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
  { id: "data", label: "Data Sources" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Mission-Focused", value: "Readiness is about how well you can perform your specific mission, not just gear counts" },
  { label: "Capabilities-Based", value: "Measures unit's ability to provide specific capabilities to Combatant Commander" },
  { label: "Objective + Subjective", value: "System pulls objective data (P, S, R) while Commander provides subjective assessment (T, C-level)" },
  { label: "Strategic Impact", value: "Data used by Joint Staff and SecDef for deployment and resourcing decisions" },
];

const DATA_SOURCES = [
  { system: "MCTFS", data: "Personnel (P-Level)", description: "Total Manpower Management System - fills vs authorized billets" },
  { system: "GCSS-MC", data: "Supply (S-Level)", description: "Supply chain data, equipment on-hand percentages" },
  { system: "MCTIMS", data: "Training (T-Level)", description: "Individual and collective training currency" },
  { system: "GCSS-MC", data: "Equipment Readiness (R-Level)", description: "Equipment operational status, maintenance data" },
];

const MET_ASSESSMENT_OPTIONS = [
  { code: "Y", meaning: "Yes", description: "Unit can fully execute the MET to standard" },
  { code: "Q", meaning: "Qualified Yes", description: "Unit can execute with minor limitations—remarks required" },
  { code: "N", meaning: "No", description: "Unit cannot execute the MET to standard—remarks required" },
];

const PROCESS_STEPS = [
  "Data Extraction: System pulls data from MCTFS (Personnel), GCSS-MC (Supply), and MCTIMS (Training)",
  "Data Validation: Verify all source systems are current before the DRRS-MC pull",
  "MET Assessment: Commander assesses each Mission Essential Task as Y, Q, or N",
  "Remarking: Provide detailed remarks for any MET assessed as 'Q' or 'N'",
  "CO Review: Commander reviews composite levels and applies subjective judgment",
  "Submission: Report pushed through chain of command to HQMC",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "Reports due no later than the 15th of each month" },
  { requirement: "24 Hours", action: "Submit within 24 hours of any event that changes overall C-level" },
];

const COMMON_ISSUES = [
  {
    issue: "Stale data",
    solution: "Failing to ensure MCTIMS and GCSS-MC are updated before the DRRS-MC pull. Coordinate with staff sections to update source systems 5-7 days prior to submission deadline.",
  },
  {
    issue: "Optimistic reporting",
    solution: "Assessing a MET as 'Yes' when the unit lacks personnel or equipment to execute under combat conditions. Be realistic—inflated readiness reports undermine strategic decision-making.",
  },
  {
    issue: "Vague remarks",
    solution: "Providing generic remarks like 'training ongoing' for Q or N assessments. Remarks must be specific, actionable, and include projected resolution dates.",
  },
];

export function DRRSMCOverviewContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={BarChart3} title="DRRS-MC Overview" variant="info">
          The Defense Readiness Reporting System - Marine Corps (DRRS-MC) is the
          <strong> official system of record</strong> for measuring and reporting the
          readiness of Marine Corps units to execute their Mission Essential Tasks (METs).
          This data is used by the Joint Staff and SecDef to make strategic deployment
          and resourcing decisions.
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

        <InfoCard icon={Clock} title="Monthly Deadline" variant="warning">
          Reports are due no later than the <strong>15th of each month</strong>.
          Significant changes require a report within 24 hours.
        </InfoCard>
      </div>
    ),

    data: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Data Sources
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">System</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Data</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {DATA_SOURCES.map((source) => (
                  <tr key={source.system + source.data} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-mono font-medium text-zinc-700 dark:text-zinc-300">{source.system}</td>
                    <td className="py-3 pr-4 text-zinc-700 dark:text-zinc-300">{source.data}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{source.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MET Assessment Options
          </h3>
          <div className="mt-4 space-y-3">
            {MET_ASSESSMENT_OPTIONS.map((opt) => (
              <div key={opt.code} className="flex items-start gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
                  opt.code === "Y" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                  opt.code === "Q" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }`}>
                  {opt.code}
                </span>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{opt.meaning}</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{opt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Database} title="Update Source Systems First" variant="default">
          DRRS-MC <strong>pulls data</strong> from source systems. Ensure MCTFS, GCSS-MC,
          and MCTIMS are updated 5-7 days before the reporting deadline.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DRRS-MC Reporting Process
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
            Remark Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Required for all &quot;Q&quot; and &quot;N&quot; assessments</li>
            <li>&bull; Must be specific and actionable</li>
            <li>&bull; Include projected resolution date</li>
            <li>&bull; Identify required resources or support</li>
            <li>&bull; Update remarks when situation changes</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Significant Change Reporting" variant="warning">
          Any event that changes the unit&apos;s overall C-level requires a report
          within <strong>24 hours</strong>. Don&apos;t wait for the monthly cycle.
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
