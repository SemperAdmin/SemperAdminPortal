"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "framework", label: "ORM Framework" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Five Steps", value: "Identify Hazards, Assess Hazards, Make Risk Decisions, Implement Controls, and Supervise" },
  { label: "Three Levels", value: "Time-critical, Deliberate, and In-depth" },
  { label: "Risk Decision Authority", value: "The level of risk (Low, Medium, High) determines who has the authority to approve the evolution" },
];

const ORM_STEPS = [
  { step: "1. Identify Hazards", description: "List all potential hazards associated with the operation", output: "Hazard list" },
  { step: "2. Assess Hazards", description: "Determine probability and severity of each hazard", output: "Risk matrix score" },
  { step: "3. Make Risk Decisions", description: "Decide if risk is acceptable or if controls are needed", output: "Risk decision" },
  { step: "4. Implement Controls", description: "Put measures in place to reduce or eliminate risk", output: "Control measures" },
  { step: "5. Supervise", description: "Monitor execution to ensure controls are working", output: "Continuous oversight" },
];

const RISK_LEVELS = [
  { level: "Low", color: "green", authority: "Section Leader", description: "Minimal impact if mishap occurs" },
  { level: "Medium", color: "yellow", authority: "Department Head/OIC", description: "Moderate impact; requires additional controls" },
  { level: "High", color: "red", authority: "CO/XO", description: "Significant impact; CO approval required" },
  { level: "Extremely High", color: "red", authority: "Higher HQ", description: "Mission-critical; may require general officer approval" },
];

const PROCESS_STEPS = [
  "Integration: Require a signed Risk Assessment Worksheet (RAW) for all training events",
  "Validation: The CO or XO reviews the RAW to ensure controls are realistic and effective",
  "Communication: Brief the risk controls down to the lowest level (the Marine executing the task)",
  "Supervision: Monitor the evolution to ensure Marines are actually following the controls (e.g., wearing PPE)",
];

const COMMON_ISSUES = [
  { issue: "'Paper' ORM", solution: "Generating a RAW after the plan is already finished defeats the purpose of risk mitigation. ORM must be integrated from the start of planning." },
  { issue: "Unrealistic Controls", solution: "Listing controls that cannot actually be implemented (e.g., 'maintain 100% accountability' with no plan). Controls must be specific and executable." },
];

const riskLevelClasses: Record<string, string> = {
  green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

export function ORMIntegrationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="ORM Integration" variant="info">
          Operational Risk Management (ORM) is a decision-making process to systematically evaluate risks and benefits. Commanders must ensure ORM is not a &quot;checkbox&quot; at the end of planning, but a foundational element of the mission-planning process.
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
        <InfoCard icon={Clock} title="Continuous Process" variant="default">
          ORM is used <strong>throughout all phases</strong> of planning and execution—not just at the beginning.
        </InfoCard>
      </div>
    ),
    framework: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Five-Step ORM Process</h2>
          <div className="mt-4 space-y-3">
            {ORM_STEPS.map((item) => (
              <div key={item.step} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.step}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Output: </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.output}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Risk Decision Authority</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Risk Level</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Approval Authority</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {RISK_LEVELS.map((item) => (
                  <tr key={item.level} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${riskLevelClasses[item.color] || riskLevelClasses.green}`}>
                        {item.level}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.authority}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">ORM Integration Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={FileText} title="Risk Assessment Worksheet" variant="default">
          Every training event should have a signed RAW that identifies hazards, assesses risk, and documents control measures.
        </InfoCard>
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
        <InfoCard icon={AlertTriangle} title="ORM is Not a Checkbox" variant="warning">
          ORM must be integrated from the <strong>start</strong> of planning. A RAW generated after the plan is complete provides no value.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
