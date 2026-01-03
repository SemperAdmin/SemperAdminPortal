"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { CreditCard, AlertTriangle, Calendar, Users } from "lucide-react";

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
  { id: "management", label: "Management" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Authorized Use Only", value: "The card is strictly for official travel-related expenses (lodging, airfare, meals) while under official orders" },
  { label: "Mandatory Split-Disbursement", value: "All travel claims in DTS must be set to pay the GTCC bank (Citi) directly for all travel-related charges" },
  { label: "Commanders' Reports", value: "Accessing IBE reports to identify Marines who are delinquent or using the card for personal expenses" },
];

const PROGRAM_ELEMENTS = [
  { element: "APC Appointment", description: "Designate an Agency Program Coordinator to manage the unit's GTCC program" },
  { element: "Cardholder Training", description: "Ensure all cardholders complete required training and sign Statement of Understanding" },
  { element: "IBE Reports", description: "Review delinquency and misuse reports monthly" },
  { element: "Disciplinary Action", description: "Address misuse through counseling or administrative/UCMJ action" },
];

const PROCESS_STEPS = [
  "APC Appointment: Appoint an Agency Program Coordinator (APC) to manage the unit's program",
  "Mandatory Training: Ensure all cardholders complete the required training and sign a Statement of Understanding (SOU)",
  "Monthly Review: The CO or APC reviews the 'Delinquency' and 'Misuse' reports",
  "Disciplinary Action: Address misuse (e.g., ATM withdrawals not related to travel) via counseling or NJP",
];

const TIMELINE_REQUIREMENTS = [
  { frequency: "Monthly", action: "Review of the IBE reports for delinquency and misuse" },
  { frequency: "5 Days", action: "Travel vouchers must be submitted within 5 days of returning from travel" },
];

const COMMON_ISSUES = [
  { issue: "Personal Use", solution: "Marines using the GTCC for personal retail purchases or local meals while not in a travel status. Immediately counsel and consider card suspension." },
  { issue: "Failure to Deactivate", solution: "Leaving cards in an 'Open' status for Marines who do not travel regularly, increasing the risk of fraud. Deactivate cards when not in use." },
];

export function GTCCOversightContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={CreditCard} title="GTCC Program Oversight" variant="info">
          The Government Travel Charge Card (GTCC) is a mandatory tool for all official travel. Commanders are responsible for monitoring the program to prevent delinquency and misuse, which can affect a Marine&apos;s credit, security clearance, and the unit&apos;s fiscal reputation.
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
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Calendar className="h-5 w-5" />Timeline Requirements
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
      </div>
    ),
    management: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Program Management Elements</h2>
          <div className="mt-4 space-y-3">
            {PROGRAM_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Users} title="Split Disbursement" variant="default">
          All travel claims must use <strong>split disbursement</strong> to pay the GTCC bank directly for charged expenses. This prevents delinquency caused by Marines receiving funds and not paying the card.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">GTCC Oversight Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IBE Report Review</h3>
          <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li><strong>Delinquency Report:</strong> Identifies cardholders with past-due balances</li>
            <li><strong>Misuse Report:</strong> Flags potential unauthorized transactions</li>
            <li><strong>Transaction Detail:</strong> Shows specific purchases for investigation</li>
            <li><strong>Status Report:</strong> Tracks card activation/deactivation status</li>
          </ul>
        </section>
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
        <InfoCard icon={AlertTriangle} title="Credit & Clearance Impact" variant="warning">
          GTCC delinquency can negatively impact a Marine&apos;s credit score and trigger a security clearance review. Monitor and address delinquency immediately.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
