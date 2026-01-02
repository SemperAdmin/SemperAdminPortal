"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Calculator, AlertTriangle, Calendar, TrendingUp } from "lucide-react";

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
  { id: "development", label: "Development" },
  { id: "execution", label: "Execution" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Phasing", value: "Budgets developed based on 'phasing' (e.g., more spending in Q2 for a large exercise)" },
  { label: "Operational Integration", value: "S-4 and Supply Officer must be integrated into S-3 planning cycle" },
  { label: "Prioritization", value: "Requirements often exceed funding; Commander establishes a 'Prioritized Buy List'" },
  { label: "Development Timeline", value: "Initial budget formulation occurs in April/May for next fiscal year" },
];

const DEVELOPMENT_STEPS = [
  "Requirement Identification: Section heads submit annual requirements based on Training & Readiness (T&R) plan",
  "Review & Consolidation: Supply Officer and Comptroller consolidate requirements and compare to projected 'Target'",
  "Gap Analysis: Identify shortfalls between requirements and available funding",
  "Prioritization: Commander approves the 'Prioritized Buy List' based on mission criticality",
  "Approval: Commander approves the Annual Budget Plan",
  "Phasing: Distribute spending across quarters based on training schedule",
];

const EXECUTION_PHASES = [
  {
    quarter: "Q1 (Oct-Dec)",
    focus: "Initial execution, contracts for recurring services",
    target: "~20-25% of annual budget",
  },
  {
    quarter: "Q2 (Jan-Mar)",
    focus: "Major training exercises, equipment purchases",
    target: "~25-30% of annual budget",
  },
  {
    quarter: "Q3 (Apr-Jun)",
    focus: "Continued operations, summer training prep",
    target: "~25-30% of annual budget",
  },
  {
    quarter: "Q4 (Jul-Sep)",
    focus: "Year-end closeout, 100% execution goal",
    target: "~20-25% of annual budget",
  },
];

const TIMELINE_REQUIREMENTS = [
  { period: "April/May", action: "Initial budget formulation for next fiscal year" },
  { period: "Monthly", action: "Reconciliation to ensure execution is on track with phasing plan" },
  { period: "Quarterly", action: "Formal review of execution rate and adjustments" },
];

const COMMON_ISSUES = [
  {
    issue: "Under-execution",
    solution: "Failing to spend authorized funds in early quarters may lead to HQMC reducing the unit's budget in following years. Execute early and consistently according to the phasing plan.",
  },
  {
    issue: "S-3/S-4 Disconnect",
    solution: "Operations plans training without considering fiscal impact. Integrate the Supply Officer into all training planning meetings to capture costs early.",
  },
  {
    issue: "Unfunded Requirements",
    solution: "Critical requirements emerge after the budget is set. Maintain a prioritized 'unfunded requirements list' for opportunities when additional funds become available.",
  },
];

export function BudgetExecutionContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Calculator} title="Budget Development & Execution" variant="info">
          Budget Development is the process of translating the Commander&apos;s training
          plan and operational requirements into a financial requirement. Execution is the
          actual spending of those funds to meet mission requirements throughout the fiscal year.
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
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Calendar className="h-5 w-5" />
            Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.period} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.period}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    development: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Budget Development Process
          </h2>
          <div className="mt-6 space-y-4">
            {DEVELOPMENT_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={TrendingUp} title="Integration with T&R" variant="default">
          The budget must directly support the Training & Readiness (T&R) plan. Every
          training event should have associated costs identified during budget development.
        </InfoCard>
      </div>
    ),

    execution: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Quarterly Execution Phases
          </h2>
          <div className="mt-4 space-y-4">
            {EXECUTION_PHASES.map((phase) => (
              <div key={phase.quarter} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{phase.quarter}</h3>
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    {phase.target}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{phase.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Execute Early" variant="warning">
          Under-execution in early quarters signals to HQMC that your unit doesn&apos;t
          need all its funding. Execute consistently throughout the year to protect future budgets.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Execution Systems
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; PR Builder - Purchase Request submission</li>
            <li>&bull; SABRS - Standard Accounting, Budgeting, and Reporting System</li>
            <li>&bull; DTS - Defense Travel System for travel funds</li>
            <li>&bull; GCSS-MC - Supply chain and requisition tracking</li>
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
