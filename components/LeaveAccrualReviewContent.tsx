"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: { references: Reference[] };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "accrual", label: "Accrual" },
  { id: "sla", label: "Special Leave Accrual" },
  { id: "planning", label: "Planning" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Accrual Rate", description: "2.5 days per month" },
  { element: "Normal Maximum", description: "60 days" },
  { element: "Combat Zone Maximum", description: "120 days (Special Leave Accrual)" },
  { element: "Fiscal Year", description: "October 1 - September 30" },
  { element: "Use or Lose", description: "Leave over 60 days lost at fiscal year end" },
  { element: "Sell Back", description: "Up to 60 days in career" },
];

const MONTHLY_ACCRUAL = [
  { day: "Day 6", earned: "0.5" },
  { day: "Day 12", earned: "0.5" },
  { day: "Day 18", earned: "0.5" },
  { day: "Day 24", earned: "0.5" },
  { day: "Day 30", earned: "0.5" },
  { day: "Monthly Total", earned: "2.5 days" },
];

const LES_FIELDS = [
  { field: "LV BF", description: "Leave brought forward" },
  { field: "EARNED", description: "Leave earned this period" },
  { field: "USED", description: "Leave used this period" },
  { field: "BAL", description: "Current balance" },
  { field: "MAX ACCRUAL", description: "Maximum allowed (60 or 120)" },
  { field: "USE/LOSE", description: "Amount that will be lost at FY end" },
];

const SLA_QUALIFYING = [
  "Serving in designated combat zone",
  "Or serving in direct support of combat operations",
  "Continuous duty of 120 days or more",
];

const SLA_BENEFITS = [
  "Accumulate up to 120 days (instead of 60)",
  "Applies to qualifying deployments",
  "Must use or sell within 3 fiscal years of return",
  "Prevents losing leave due to operational tempo",
];

const USE_OR_LOSE_RULES = [
  "Maximum 60 days at fiscal year start (October 1)",
  "Leave over 60 days on September 30 is lost",
  "SLA exception: Maximum is 120 days",
  "SLA leave must be used within 3 fiscal years",
  "After 3 years, reverts to 60-day rule",
];

const SELL_BACK_INFO = [
  "Maximum 60 days sold in career",
  "Track how many days you have sold",
  "Can sell upon reenlistment or separation/retirement",
  "Value: 1/30 of base pay per day",
  "No allowances included",
  "Taxable income",
];

const COMMON_ISSUES = [
  { issue: "Incorrect balance", resolution: "Review LES history, report to S-1" },
  { issue: "SLA not applied", resolution: "Verify deployment qualifies, request correction" },
  { issue: "Lost leave at FY end", resolution: "If operational, may request restoration" },
  { issue: "Sell back not processed", resolution: "Contact Finance, provide documentation" },
];

const UPON_RETURN = [
  "Check leave balance on LES",
  "Verify SLA applied (if eligible)",
  "Calculate use or lose before FY end",
  "Plan post-deployment leave",
  "Submit leave request",
];

const BEFORE_FY_END = [
  "Check use or lose balance",
  "Take leave to reduce below maximum",
  "Request restoration if operational conflict",
];

const REENLISTING_SEPARATING = [
  "Calculate sellable leave",
  "Consider terminal leave vs. sell back",
  "Submit sell back request if desired",
];

export function LeaveAccrualReviewContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Leave Accrual Review Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Leave accrues at 2.5 days per month throughout your deployment. You may have accumulated
            significant leave during deployment. Review your leave balance to plan post-deployment
            leave and avoid losing leave over 60 days at fiscal year end. Special rules apply for
            combat zone accrual.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {KEY_POINTS.map((item) => (
                  <tr key={item.element}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.element}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    accrual: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Leave Accrual During Deployment
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Day</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Days Earned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {MONTHLY_ACCRUAL.map((item) => (
                  <tr key={item.day} className={item.day === "Monthly Total" ? "font-bold" : ""}>
                    <td className="py-3 text-zinc-900 dark:text-zinc-100">{item.day}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.earned}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Checking Your Leave Balance
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Key LES Fields:</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Field</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {LES_FIELDS.map((item) => (
                  <tr key={item.field}>
                    <td className="py-3 font-medium font-mono text-zinc-900 dark:text-zinc-100">{item.field}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Example: 7 Month Deployment</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            7 months × 2.5 days = 17.5 days earned during deployment, plus your pre-deployment balance.
          </p>
        </div>
      </>
    ),

    sla: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Special Leave Accrual (SLA)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Combat zone deployments may qualify you for Special Leave Accrual, allowing you to accumulate
            more leave than the standard 60-day maximum.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Qualifying Conditions
          </h3>
          <ul className="mt-4 space-y-2">
            {SLA_QUALIFYING.map((condition) => (
              <li key={condition} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {condition}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SLA Benefits
          </h3>
          <ul className="mt-4 space-y-2">
            {SLA_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Use or Lose Rules
          </h3>
          <ul className="mt-4 space-y-2">
            {USE_OR_LOSE_RULES.map((rule) => (
              <li key={rule} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                {rule}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    planning: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Post-Deployment Leave Planning
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Consider your current balance, use or lose before fiscal year end, and any terminal leave
            plans when planning your leave.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Selling Back Leave
          </h3>
          <ul className="mt-4 space-y-2">
            {SELL_BACK_INFO.map((info) => (
              <li key={info} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {info}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Leave Issues
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Issue</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COMMON_ISSUES.map((item) => (
                  <tr key={item.issue}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.issue}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Leave Restoration</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            If leave is lost due to operational requirements, you may request restoration. Document
            the operational necessity and submit through chain of command.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Upon Return from Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {UPON_RETURN.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Fiscal Year End (September 30)
          </h2>
          <div className="mt-4 space-y-2">
            {BEFORE_FY_END.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Reenlisting or Separating
          </h2>
          <div className="mt-4 space-y-2">
            {REENLISTING_SEPARATING.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
