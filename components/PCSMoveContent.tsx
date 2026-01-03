"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { Truck, Clock, FileText, AlertTriangle, DollarSign } from "lucide-react";

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

const KEY_POINTS = [
  { label: "HHG Shipment", value: "Government will ship household goods at no cost to you" },
  { label: "PPM/DITY", value: "Personally Procured Move available as alternative" },
  { label: "TLE", value: "Temporary Lodging Expense authorized for up to 14 days total" },
  { label: "DLA", value: "Dislocation Allowance is one-time payment for moving expenses" },
  { label: "Per Diem", value: "Authorized for travel days" },
  { label: "Weight Limit", value: "Based on pay grade" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "entitlements", label: "Entitlements" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const PROCESS_STEPS = [
  {
    title: "Receive PCS orders",
    detail: "Orders specify report date, gaining command, and authorized entitlements.",
  },
  {
    title: "Schedule transportation counseling",
    detail: "Visit Personal Property Office or use move.mil to schedule HHG pickup. Decide between government move or PPM.",
  },
  {
    title: "Complete checkout procedures",
    detail: "Clear all required offices per installation checkout sheet. Obtain required signatures.",
  },
  {
    title: "Request advance DLA (optional)",
    detail: "Dislocation Allowance can be advanced before departure. Submit request through admin.",
  },
  {
    title: "Travel to new duty station",
    detail: "Per diem and mileage authorized for official travel days. Use Defense Table of Official Distances (DTOD) for mileage calculation.",
  },
  {
    title: "Check in at new command",
    detail: "Report to gaining command by date specified in orders. Complete check-in procedures.",
  },
  {
    title: "Receive HHG delivery",
    detail: "Inspect all items for damage. Annotate damages on inventory form before signing.",
  },
  {
    title: "File travel claim",
    detail: "Submit travel voucher within 5 days of completing travel. Include all receipts for lodging and expenses over $75.",
  },
];

const ENTITLEMENTS = [
  {
    entitlement: "Dislocation Allowance (DLA)",
    description: "One-time payment for miscellaneous moving expenses",
    notes: "Amount based on with/without dependents status",
  },
  {
    entitlement: "Temporary Lodging Expense (TLE)",
    description: "Reimburses lodging and meals during transition",
    notes: "Up to 10 days at old PDS, 14 days at new PDS (combined max 14 days)",
  },
  {
    entitlement: "Per Diem",
    description: "Daily allowance for meals and incidental expenses while traveling",
    notes: "Rates vary by location",
  },
  {
    entitlement: "Mileage",
    description: "Reimbursement for POV travel",
    notes: "Based on official distance, not actual miles driven",
  },
  {
    entitlement: "HHG Shipment",
    description: "Government-paid household goods transportation",
    notes: "Weight limit based on pay grade",
  },
];

const TIMELINE = [
  { time: "Within 5 days of arrival", action: "File travel claim" },
  { time: "Within 75 days of delivery", action: "File claims for lost/damaged HHG" },
  { time: "TLE limits", action: "Up to 10 days at old PDS and 14 days at new PDS (combined max 14 days)" },
];

const COMMON_ISSUES = [
  {
    issue: "Damaged HHG",
    solution: "Document damage immediately on delivery inventory. File claim within 75 days",
  },
  {
    issue: "Weight overage",
    solution: "You pay for weight exceeding your allowance. Weigh before shipping",
  },
  {
    issue: "PPM documentation",
    solution: "Keep all receipts and weight tickets for reimbursement",
  },
  {
    issue: "TLE limits",
    solution: "Cannot exceed combined 14 days. Plan accordingly",
  },
];

export function PCSMoveContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Truck} title="PCS Move Overview" variant="info">
          A Permanent Change of Station (PCS) involves moving from one duty station to another.
          You are entitled to travel pay, household goods shipment, and temporary lodging
          allowances. The Joint Travel Regulations (JTR) govern all PCS entitlements.
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
            Move Options
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">Government Move (GBL)</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Government arranges and pays for moving company. You coordinate pickup/delivery dates.
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Personally Procured Move (PPM)</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                You move yourself. Get reimbursed based on what government would have paid. Keep weight tickets!
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Step-by-Step Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{step.title}</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Deadlines
          </h3>
          <div className="mt-4 space-y-3">
            {TIMELINE.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Clock className="h-5 w-5 shrink-0 text-[var(--sa-red)]" />
                <div>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.time}:</span>
                  <span className="ml-2 text-zinc-600 dark:text-zinc-400">{item.action}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    entitlements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PCS Entitlements
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Entitlement</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ENTITLEMENTS.map((item) => (
                  <tr key={item.entitlement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.entitlement}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={DollarSign} title="Weight Allowances by Grade" variant="default">
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div>E-1 to E-4: 8,000 lbs</div>
            <div>E-5: 9,000 lbs</div>
            <div>E-6: 11,000 lbs</div>
            <div>E-7: 13,000 lbs</div>
            <div>E-8: 14,000 lbs</div>
            <div>E-9: 15,000 lbs</div>
            <div>O-1/O-2: 10,000 lbs</div>
            <div>O-3: 13,000 lbs</div>
            <div>O-4: 14,000 lbs</div>
            <div>O-5: 16,000 lbs</div>
            <div>O-6: 18,000 lbs</div>
            <div>O-7+: 18,000 lbs</div>
          </div>
          <p className="mt-2 text-xs text-zinc-500">With dependents: Add 1,000-2,000 lbs. Check JTR for exact amounts.</p>
        </InfoCard>
      </div>
    ),

    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Issues & Solutions
          </h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">{item.issue}</h4>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Inspect Before Signing!" variant="warning">
          When your household goods are delivered, inspect EVERYTHING before signing the
          inventory. Once you sign, it&apos;s harder to prove damage occurred during the move.
          Note any damage on the inventory form immediately.
        </InfoCard>

        <InfoCard icon={FileText} title="75-Day Claims Deadline" variant="danger">
          You have only 75 days from delivery to file a claim for lost or damaged items.
          Document everything with photos and file your claim through the Defense Personal
          Property System (DPS) at move.mil.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
