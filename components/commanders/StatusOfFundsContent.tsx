"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { BarChart3, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "components", label: "SOF Components" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Visibility", value: "Shows total authorized funding, current obligations, and 'unobligated balance'" },
  { label: "Burn Rate", value: "Measures how fast the unit is spending funds compared to time remaining" },
  { label: "Audit Trail", value: "Ensures all transactions are documented and aligned with SABRS" },
  { label: "Decision Tool", value: "Enables Commander to direct re-programming of funds as needed" },
];

const SOF_COMPONENTS = [
  {
    component: "Total Target",
    description: "The total amount of funding authorized for the command",
    source: "Comptroller/Higher HQ",
  },
  {
    component: "Obligations",
    description: "Funds that have been committed through contracts, orders, or travel",
    source: "SABRS/SMARTS",
  },
  {
    component: "Expenditures",
    description: "Funds that have actually been paid out (bills paid)",
    source: "SABRS",
  },
  {
    component: "Unobligated Balance",
    description: "Funds available to be spent (Target minus Obligations)",
    source: "Calculated",
  },
  {
    component: "Unliquidated Orders",
    description: "Obligations that haven't been paid yet (pending bills)",
    source: "SABRS/SMARTS",
  },
];

const PROCESS_STEPS = [
  "Data Extraction: Fiscal Officer pulls current reports from SABRS/SMARTS",
  "Reconciliation: Compare SABRS data against unit's internal commitment ledgers",
  "Analysis: Calculate burn rate and compare execution to phasing plan",
  "Briefing: Fiscal Officer briefs Commander on unit's financial posture",
  "Highlight Issues: Identify any 'over-spent' or 'under-spent' areas",
  "Decision: Commander directs necessary re-programming of funds between sections",
];

const TIMELINE_REQUIREMENTS = [
  { frequency: "Monthly", action: "Formal SOF briefing to Commander" },
  { frequency: "Weekly", action: "During Q4 (July-September) to ensure 100% execution" },
  { frequency: "As Needed", action: "Before major spending decisions or reprogramming" },
];

const COMMON_ISSUES = [
  {
    issue: "Hidden Costs",
    solution: "Forgetting to account for 'open' travel orders or outstanding contracts that haven't yet 'posted' to the official accounting system. Maintain a commitment ledger separate from SABRS to capture all pending obligations.",
  },
  {
    issue: "Stale Data",
    solution: "Briefing with data that's weeks old. Pull fresh data from SABRS within 24-48 hours of the SOF briefing.",
  },
  {
    issue: "Lack of Section Detail",
    solution: "Briefing only the aggregate numbers without breaking down by section. Provide section-level detail so the Commander can identify problem areas.",
  },
];

export function StatusOfFundsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={BarChart3} title="Status of Funds Briefing" variant="info">
          The Status of Funds (SOF) briefing is the Commander&apos;s primary mechanism for
          financial oversight. It ensures the unit is executing its budget according to the
          approved plan and identifies funding gaps or surpluses that need to be addressed
          with higher headquarters.
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
            <Clock className="h-5 w-5" />
            Briefing Frequency
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.frequency} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.frequency}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Q4 Vigilance" variant="warning">
          During the 4th Quarter (July-September), SOF briefings should occur <strong>weekly</strong>
          to ensure 100% execution before the fiscal year ends.
        </InfoCard>
      </div>
    ),

    components: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SOF Components
          </h2>
          <div className="mt-4 space-y-3">
            {SOF_COMPONENTS.map((item) => (
              <div key={item.component} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.component}</h3>
                  <span className="rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {item.source}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={FileText} title="Burn Rate Calculation" variant="default">
          <strong>Burn Rate</strong> = (Obligations to Date) / (Days Elapsed in FY) × 365<br />
          Compare this to your total target to assess if you&apos;re on track.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SOF Briefing Process
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
            Key Questions for Commander
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Are we on track with our phasing plan?</li>
            <li>&bull; What is our current burn rate?</li>
            <li>&bull; Are any sections over or under their allocation?</li>
            <li>&bull; What are the top unfunded requirements?</li>
            <li>&bull; Are there any ULOs that need attention?</li>
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
