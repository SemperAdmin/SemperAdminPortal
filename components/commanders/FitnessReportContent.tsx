"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "roles", label: "RS/RO Roles" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Reporting Senior (RS)", value: "Usually the immediate supervisor; responsible for word picture and attribute marks" },
  { label: "Reviewing Officer (RO)", value: "Usually the RS's supervisor; provides comparative assessment and ensures fair marking" },
  { label: "RS Profile", value: "An RS is measured against their own history of marking; high marks for everyone devalues reports" },
  { label: "Relative Value", value: "The report's value depends on how the RS marks relative to their profile" },
];

const ROLES_DETAIL = [
  {
    role: "Reporting Senior (RS)",
    responsibilities: [
      "Establishes billet description with MRO at start of period",
      "Reviews MRO's Section I accomplishments submission",
      "Marks all attributes based on observed performance",
      "Writes Section I comments as a cohesive narrative",
      "Maintains consistent marking standards (profile management)",
    ],
  },
  {
    role: "Reviewing Officer (RO)",
    responsibilities: [
      "Reviews the RS's marks for fairness and accuracy",
      "Provides comparative assessment comments",
      "Stacks the MRO against others of the same grade",
      "Ensures the report reflects relative value within the command",
      "Returns reports with deficiencies for correction",
    ],
  },
];

const PROCESS_STEPS = [
  "Billet Description: RS and MRO establish a clear billet description at the start of the reporting period",
  "Section I Submission: The MRO submits their accomplishments to the RS",
  "RS Adjudication: The RS marks the attributes and writes the Section I comments",
  "RO Review: The RO reviews the report, adds comments, and stacks the MRO against peers",
  "Submission: Report is pushed through MOL to HQMC",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "30 Days", action: "Reports should be completed and pushed to the RO within 30 days of reporting period end" },
  { requirement: "90 Days", action: "Maximum time allowed for a report to reach HQMC before considered delinquent" },
];

const COMMON_ISSUES = [
  {
    issue: "Unclear comments",
    solution: "Using 'bullets' instead of a narrative. Section I comments should be a cohesive story of the Marine's impact on the unit, not a list of accomplishments.",
  },
  {
    issue: "Profile inflation",
    solution: "An RS who marks everyone 'outstanding' effectively hurts their best Marines by making their reports look average. Maintain marking discipline to preserve relative value.",
  },
  {
    issue: "Late submissions",
    solution: "Reports that exceed the 90-day window become delinquent and reflect poorly on the command. Build a tracking system to ensure timely submission.",
  },
];

export function FitnessReportContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="Fitness Report Responsibilities" variant="info">
          The Fitness Report (FITREP) is a commander&apos;s primary tool for <strong>force
          shaping</strong>. It provides the official record of a Marine&apos;s performance and
          ensures that the most capable leaders are identified for promotion and increased
          responsibility. <strong>Accuracy and relative value</strong> are the key metrics.
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

        <InfoCard icon={Clock} title="90-Day Delinquency Window" variant="warning">
          Reports that exceed <strong>90 days</strong> from the end of the reporting period
          to reach HQMC are considered delinquent. Build tracking systems to prevent this.
        </InfoCard>
      </div>
    ),

    roles: (
      <div className="space-y-6">
        {ROLES_DETAIL.map((role) => (
          <section key={role.role} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {role.role}
            </h2>
            <ul className="mt-4 space-y-2">
              {role.responsibilities.map((resp) => (
                <li key={resp} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                  {resp}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <InfoCard icon={Users} title="Profile Management" variant="default">
          The RS Profile is critical. An RS who marks everyone highly creates a <strong>&quot;thick&quot;
          profile</strong> that devalues every report they write. Maintain marking discipline
          to ensure your best Marines stand out.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Marking Philosophy
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Marks should reflect <strong>actual performance</strong> against standards</li>
            <li>&bull; &quot;Average&quot; marks for average performers preserve profile integrity</li>
            <li>&bull; Exceptional marks should be reserved for exceptional performance</li>
            <li>&bull; Section I comments should justify the marks given</li>
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Fitness Report Process
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
            Section I Best Practices
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Write a <strong>cohesive narrative</strong>, not bullet points</li>
            <li>&bull; Focus on <strong>impact to the unit</strong>, not just activities</li>
            <li>&bull; Quantify accomplishments where possible</li>
            <li>&bull; Address how the Marine demonstrated the marked attributes</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Billet Description" variant="warning">
          Establish the billet description <strong>at the start</strong> of the reporting
          period, not the end. This provides a clear standard against which performance
          can be measured.
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
