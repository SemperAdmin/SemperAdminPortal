"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { CreditCard, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "usage", label: "Authorized Use" },
  { id: "process", label: "Oversight Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Authorized Use", value: "Only for expenses incurred while on official travel orders (DTS)" },
  { label: "Mandatory Use", value: "Required for all travel-related expenses (airfare, lodging, rental cars)" },
  { label: "Split Disbursement", value: "Commanders can direct payment directly to bank from travel claim" },
  { label: "Suspension", value: "Cards suspended by bank if 60 days past due" },
];

const AUTHORIZED_USES = [
  { use: "Airfare", authorized: true },
  { use: "Lodging", authorized: true },
  { use: "Rental cars", authorized: true },
  { use: "Meals while on travel", authorized: true },
  { use: "ATM withdrawals while on orders", authorized: true },
  { use: "Personal purchases", authorized: false },
  { use: "ATM withdrawals not on orders", authorized: false },
  { use: "Gifts or entertainment", authorized: false },
];

const PROCESS_STEPS = [
  "Appointment: Appoint an Agency Program Coordinator (APC) to manage unit accounts",
  "Monthly Review: CO or APC reviews 'Delinquency' and 'Misuse' reports monthly",
  "IBE Reports: Review Intelligent Business Entries reports for misuse indicators",
  "Disciplinary Action: Address misuse through counseling or NJP as appropriate",
  "Account Management: Place cards in 'Mission Critical' status for long deployments",
];

const TIMELINE_ITEMS = [
  { requirement: "5 Days", action: "File DTS voucher within 5 days of return from travel" },
  { requirement: "Monthly", action: "Review IBE reports for misuse" },
  { requirement: "60 Days", action: "Cards suspended by bank if payment past due" },
  { requirement: "120 Days", action: "Account may be cancelled and reported to credit bureaus" },
];

const COMMON_ISSUES = [
  {
    issue: "ATM withdrawals for personal use",
    solution: "Marines withdrawing cash while not on orders. Monitor ATM transactions in IBE reports. Address immediately through counseling.",
  },
  {
    issue: "Delayed voucher submission",
    solution: "Failure to file DTS voucher within 5 days of return leads to GTCC delinquency. Track return dates and follow up on voucher completion.",
  },
  {
    issue: "Cards not in Mission Critical status",
    solution: "During long deployments, cards accrue late fees. Ensure APC places cards in Mission Critical status before deployment.",
  },
];

export function GTCCOversightContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={CreditCard} title="GTCC Program Oversight" variant="info">
          The Government Travel Charge Card (GTCC) is used <strong>only for official
          travel-related expenses</strong>. Commanders are responsible for monitoring their
          Marines&apos; use to prevent delinquency and misuse, which can degrade unit readiness.
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

        <InfoCard icon={AlertTriangle} title="60-Day Suspension" variant="warning">
          Cards are <strong>suspended by the bank</strong> if payment is 60 days past due.
          This impacts Marine readiness and can affect credit scores.
        </InfoCard>
      </div>
    ),

    usage: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Authorized vs. Unauthorized Use
          </h2>
          <div className="mt-4 space-y-2">
            {AUTHORIZED_USES.map((item) => (
              <div key={item.use} className={`flex items-center gap-3 rounded-lg p-3 ${
                item.authorized
                  ? "bg-green-50 dark:bg-green-900/20"
                  : "bg-red-50 dark:bg-red-900/20"
              }`}>
                <span className={`h-3 w-3 rounded-full ${
                  item.authorized ? "bg-green-500" : "bg-red-500"
                }`} />
                <span className={`text-sm ${
                  item.authorized
                    ? "text-green-800 dark:text-green-200"
                    : "text-red-800 dark:text-red-200"
                }`}>
                  {item.use}
                </span>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={FileText} title="Mandatory Use" variant="default">
          Marines are <strong>required</strong> to use the GTCC for all travel-related expenses
          while on official orders. Personal credit cards should not be used.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Oversight Process
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
            Split Disbursement
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Commanders have the authority to direct <strong>Split Disbursement</strong> in DTS
            to ensure the bank is paid directly from the travel claim. This prevents delinquency
            caused by Marines failing to pay their card after reimbursement.
          </p>
        </section>

        <InfoCard icon={Clock} title="5-Day Voucher Requirement" variant="warning">
          Marines must file their DTS voucher within <strong>5 days of return</strong> from travel.
          Track return dates and follow up to prevent delinquency.
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
