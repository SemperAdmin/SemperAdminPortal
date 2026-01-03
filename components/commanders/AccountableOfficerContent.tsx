"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Wallet, AlertTriangle, Calendar, ClipboardCheck } from "lucide-react";

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
  { id: "duties", label: "Duties" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Ultimate Responsibility", value: "While execution is delegated to the Supply Officer and Responsible Officers (ROs), the Commander remains legally responsible for the entire account" },
  { label: "Pecuniary Liability", value: "Commanders can be held personally and financially liable for the loss, damage, or destruction of government property resulting from negligence or misconduct" },
  { label: "Fiduciary Oversight", value: "Ensuring that every expenditure meets the 'Purpose, Time, and Amount' (PTA) legal standards" },
];

const ACCOUNTABLE_DUTIES = [
  { duty: "Appoint Supply Officer and ROs", description: "Formally designate personnel responsible for property sub-accounts in writing" },
  { duty: "Oversee Inventories", description: "Ensure annual and quarterly inventories are conducted properly" },
  { duty: "Review CMR", description: "Sign the Consolidated Memorandum Receipt quarterly" },
  { duty: "Initiate FLIPLs", description: "Start Financial Liability Investigations for missing or damaged gear" },
];

const PROCESS_STEPS = [
  "Appointment: Appoint a Supply Officer and Responsible Officers (ROs) in writing",
  "Inventory Management: Oversee the conduct of annual and quarterly inventories",
  "Audit Readiness: Review and sign the Consolidated Memorandum Receipt (CMR) every quarter",
  "Property Loss: Initiate Financial Liability Investigations of Property Loss (FLIPL) via the VCE for any missing or damaged gear",
];

const TIMELINE_REQUIREMENTS = [
  { frequency: "Annual", action: "100% wall-to-wall physical inventory of all unit property" },
  { frequency: "Quarterly", action: "Review and signature of the CMR by the RO and Commander" },
];

const COMMON_ISSUES = [
  { issue: "Delegation without Supervision", solution: "Assuming the Supply Officer is handling all aspects without performing spot-checks, which can lead to significant discrepancies during a CGIP. Conduct regular spot-checks." },
  { issue: "Delayed FLIPLs", solution: "Failing to initiate an investigation immediately upon discovery of loss, which complicates the evidence-gathering process. Initiate FLIPLs immediately upon discovery." },
];

export function AccountableOfficerContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Wallet} title="Accountable Officer Responsibilities" variant="info">
          The Commander is the Accountable Officer for all government property and financial resources assigned to the unit. This role involves a non-delegable fiduciary duty to ensure that all assets are used for their intended purpose and are strictly accounted for in accordance with federal law and Marine Corps policy.
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
    duties: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Accountable Officer Duties</h2>
          <div className="mt-4 space-y-3">
            {ACCOUNTABLE_DUTIES.map((item) => (
              <div key={item.duty} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.duty}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={ClipboardCheck} title="PTA Standards" variant="default">
          Every expenditure must meet the <strong>Purpose, Time, and Amount</strong> legal standards—the funds must be used for their designated purpose, within the appropriate fiscal year, and not exceed authorized amounts.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Accountability Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">FLIPL Process</h3>
          <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Report loss immediately to the Supply Officer</li>
            <li>Secure the scene and preserve evidence</li>
            <li>Initiate investigation through VCE</li>
            <li>Determine liability and corrective actions</li>
            <li>Document findings and recommendations</li>
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
        <InfoCard icon={AlertTriangle} title="Personal Liability" variant="warning">
          Commanders can be held personally and financially liable for property losses resulting from negligence. Stay engaged with your property accounts.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
