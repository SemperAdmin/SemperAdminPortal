"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileSearch, AlertTriangle, Clock, CheckCircle } from "lucide-react";

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
  { id: "types", label: "ULO Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Definition", value: "Commitment of funds where goods/services ordered but payment not yet finalized" },
  { label: "Liquidation", value: "Process of vendor being paid and obligation cleared from the books" },
  { label: "Stale ULOs", value: "Obligations sitting on books for months without payment—often a broken contract or un-submitted claim" },
  { label: "De-obligation", value: "If ULO is no longer valid, funds should be returned for other priorities" },
];

const ULO_TYPES = [
  {
    type: "Travel ULOs",
    description: "Open travel authorizations where the trip occurred but voucher not submitted",
    source: "DTS",
    action: "Contact traveler to submit voucher or cancel authorization",
  },
  {
    type: "Contract ULOs",
    description: "Open purchase orders or contracts awaiting final delivery/payment",
    source: "PR Builder/GCSS-MC",
    action: "Contact contracting or vendor to determine status",
  },
  {
    type: "Supply ULOs",
    description: "Requisitions for supplies that haven't been received/paid",
    source: "GCSS-MC",
    action: "Verify receipt of goods or cancel requisition",
  },
  {
    type: "Service ULOs",
    description: "Ongoing service contracts with unbilled portions",
    source: "SABRS",
    action: "Verify services rendered and invoice submission",
  },
];

const PROCESS_STEPS = [
  "Review: Supply Officer identifies all ULOs older than 60-90 days",
  "Research: Contact vendor or traveler (in case of DTS) to determine why bill hasn't been paid",
  "Documentation: Document the status and expected resolution for each ULO",
  "Certification: Commander (or designee) certifies that remaining ULOs are still valid",
  "Cleanup: Direct de-obligation of funds where requirement was cancelled or fulfilled for less than estimate",
  "Reporting: Update the SOF briefing with current ULO status",
];

const TIMELINE_REQUIREMENTS = [
  { frequency: "Quarterly", action: "Mandated validation of all unliquidated obligations" },
  { frequency: "Tri-Annual", action: "Formal Tri-Annual Review required by Comptroller" },
  { frequency: "Monthly", action: "Review ULOs older than 60 days during SOF briefing" },
];

const COMMON_ISSUES = [
  {
    issue: "DTS Vouchers",
    solution: "Marines failing to file travel vouchers upon return leaves thousands in 'Unliquidated' travel funds. Establish a unit policy requiring voucher submission within 5 working days of return.",
  },
  {
    issue: "Ghost Orders",
    solution: "Requisitions that were cancelled but never de-obligated in the system. Review all ULOs older than 180 days for potential de-obligation.",
  },
  {
    issue: "Partial Deliveries",
    solution: "Contractor delivered part of an order, but the remaining balance sits as a ULO. Coordinate with contracting to close out completed portions.",
  },
];

export function ULOValidationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileSearch} title="Unliquidated Orders Validation" variant="info">
          An Unliquidated Order (ULO) is a commitment of funds where the goods or services
          have been ordered, but the payment hasn&apos;t been finalized. Validating ULOs is
          critical to ensure that &quot;tied-up&quot; money is either used or returned for
          other training requirements.
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
            Validation Frequency
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

        <InfoCard icon={AlertTriangle} title="Tied-Up Money" variant="warning">
          ULOs tie up funds that could be used for other requirements. Regular validation
          frees up money for mission-critical needs.
        </InfoCard>
      </div>
    ),

    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of ULOs
          </h2>
          <div className="mt-4 space-y-4">
            {ULO_TYPES.map((item) => (
              <div key={item.type} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.type}</h3>
                  <span className="rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {item.source}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Action: </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.action}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={CheckCircle} title="Age Thresholds" variant="default">
          <strong>60-90 days:</strong> Requires review<br />
          <strong>180+ days:</strong> Requires commander certification or de-obligation
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            ULO Validation Process
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
            Certification Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Document number and amount</li>
            <li>&bull; Original obligation date</li>
            <li>&bull; Purpose of the obligation</li>
            <li>&bull; Reason for continued validity</li>
            <li>&bull; Expected liquidation date</li>
            <li>&bull; Commander or designee signature</li>
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
