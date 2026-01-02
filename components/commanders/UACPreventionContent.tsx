"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Ban, AlertTriangle, FileText, DollarSign } from "lucide-react";

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
  { id: "triggers", label: "Common Triggers" },
  { id: "process", label: "Prevention & Response" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Definition", value: "Marine without legal authority agrees to purchase goods/services from vendor" },
  { label: "Apparent Authority", value: "Vendors may assume uniformed Marine has authority to order—Marine must know they do not" },
  { label: "Ratification", value: "Process to 'fix' a UAC is long, painful, and requires General Officer review" },
  { label: "Violation", value: "UAC is a violation of federal law with severe administrative/financial consequences" },
];

const COMMON_TRIGGERS = [
  { trigger: "Maintenance 'add-ons'", example: "Mechanic asks if you want additional work done beyond the contract" },
  { trigger: "Emergency rentals", example: "Renting equipment or vehicles without contracting approval" },
  { trigger: "Food for events", example: "Ordering catering without approved funding string" },
  { trigger: "IT purchases", example: "Buying software or equipment directly from vendors" },
  { trigger: "Training materials", example: "Ordering books or supplies without GPC or contract" },
];

const PREVENTION_STEPS = [
  "Training: All personnel involved in procurement must complete basic fiscal training",
  "Verification: Before any work begins, ensure GPC holder or Contracting Officer has issued formal order",
  "Clear Authority: Only warranted Contracting Officers can bind the government",
  "Documentation: Always have a contract, purchase order, or GPC transaction before work starts",
];

const RESPONSE_STEPS = [
  "Immediate Stop: Tell vendor to stop work immediately upon discovery",
  "Notify Supply/Comptroller: Report potential UAC to Supply Officer or Comptroller immediately",
  "Document Everything: Gather all communications, invoices, and statements",
  "Ratification Package: CO must submit package including statement from individual who made commitment",
  "General Officer Review: Package reviewed at GO level for ratification decision",
];

const COMMON_ISSUES = [
  {
    issue: "'Handshake deals' before contract signed",
    solution: "Units allowing contractor to start work before contract is signed due to 'mission-critical' timeline. No work should begin until proper authorization is in place—no exceptions.",
  },
  {
    issue: "Assuming uniform conveys authority",
    solution: "Train all Marines that wearing the uniform does not grant contracting authority. Only warranted Contracting Officers can obligate government funds.",
  },
  {
    issue: "Verbal agreements with vendors",
    solution: "Never make verbal agreements or promises to vendors. All commitments must go through proper contracting channels with written documentation.",
  },
];

export function UACPreventionContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Ban} title="Unauthorized Commitment (UAC) Prevention" variant="info">
          An Unauthorized Commitment occurs when a Marine <strong>without legal authority</strong>
          to bind the government agrees to purchase goods or services from a vendor. This is a
          violation of federal law with severe administrative and financial consequences.
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

        <InfoCard icon={AlertTriangle} title="Ratification is Painful" variant="warning">
          The ratification process requires the CO to explain the failure to a <strong>General
          Officer</strong>. Prevention is far easier than ratification.
        </InfoCard>
      </div>
    ),

    triggers: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common UAC Triggers
          </h2>
          <div className="mt-4 space-y-3">
            {COMMON_TRIGGERS.map((item) => (
              <div key={item.trigger} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-red-700 dark:text-red-400">{item.trigger}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.example}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={DollarSign} title="Who Can Obligate Funds?" variant="default">
          Only <strong>warranted Contracting Officers</strong> can legally bind the government.
          GPC holders have limited authority. When in doubt, contact your Contracting Office.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Prevention Steps
          </h2>
          <div className="mt-6 space-y-4">
            {PREVENTION_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If a UAC Occurs - Response Steps
          </h3>
          <div className="mt-6 space-y-4">
            {RESPONSE_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={FileText} title="Immediate Reporting" variant="warning">
          Report potential UACs to Supply Officer or Comptroller <strong>immediately</strong>.
          Tell the vendor to stop work until proper authorization can be obtained.
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
