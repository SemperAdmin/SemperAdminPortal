"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileCheck, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "inventory", label: "Joint Inventory" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Purpose", value: "Transfers property accountability from outgoing to incoming CO" },
  { label: "Legal Shield", value: "Protects outgoing CO from liability for issues after departure" },
  { label: "Joint Responsibility", value: "Both commanders must participate in or review inventory" },
  { label: "Discrepancies", value: "Missing gear must be documented and FLIPL initiated before relief" },
];

const INVENTORY_REQUIREMENTS = [
  "100% physical count of all property on CMR",
  "Reconciliation of physical count against CMR",
  "Documentation of all discrepancies",
  "FLIPL initiation for missing items",
  "Both COs present or review results",
  "Supply Officer coordinates and documents",
];

const PROCESS_STEPS = [
  "Joint Inventory: Conduct within 30 days prior to Change of Command",
  "Reconciliation: Supply Officer compares physical counts to CMR",
  "Discrepancy Resolution: Document all missing/damaged items",
  "FLIPL Initiation: Start investigation for any missing items",
  "Draft Letter: Outgoing CO drafts Certificate of Relief",
  "Signature: Both COs sign the document",
  "Forward: Submit to next higher commander",
];

const CERTIFICATE_OPTIONS = [
  { status: "Correct as Is", description: "All property accounted for with no discrepancies" },
  { status: "With Discrepancies", description: "Lists specific deficiencies and status of FLIPLs" },
];

const COMMON_ISSUES = [
  {
    issue: "Rushed inventories",
    solution: "Attempting to inventory Battalion-sized CMR in 48 hours leads to significant errors that incoming CO 'inherits.' Start inventory 30 days out and don't compress timeline.",
  },
  {
    issue: "Signing without completing FLIPL",
    solution: "Outgoing CO should not be relieved until FLIPLs are initiated for all missing items. Document status of each investigation in the relief letter.",
  },
  {
    issue: "Incomplete reconciliation",
    solution: "CMR must match physical count before signing. Any discrepancies must be documented and explained. Don't sign if reconciliation is incomplete.",
  },
];

export function CertificateOfReliefFiscalContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileCheck} title="Certificate of Relief" variant="info">
          The Certificate of Relief is the formal document that transfers property accountability
          from the Outgoing Commander to the Incoming Commander. It is the <strong>legal shield</strong>
          for the outgoing CO, ensuring they are not held liable for issues after departure.
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
            Certificate Status Options
          </h3>
          <div className="mt-4 space-y-3">
            {CERTIFICATE_OPTIONS.map((option) => (
              <div key={option.status} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{option.status}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{option.description}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Clock} title="30-Day Requirement" variant="warning">
          The joint inventory must be completed within <strong>30 days</strong> of the Change
          of Command. Start early to avoid rushed, error-prone inventories.
        </InfoCard>
      </div>
    ),

    inventory: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Joint Inventory Requirements
          </h2>
          <ul className="mt-4 space-y-3">
            {INVENTORY_REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {req}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={Users} title="Both COs Must Participate" variant="default">
          Both the incoming and outgoing commanders must participate in the joint inventory
          or, at minimum, review and acknowledge the inventory results before signing.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Discrepancy Handling
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Document all missing or damaged items</li>
            <li>&bull; Initiate FLIPL before outgoing CO is relieved</li>
            <li>&bull; Note status of each investigation in relief letter</li>
            <li>&bull; Do not sign until discrepancies are properly documented</li>
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Certificate of Relief Process
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

        <InfoCard icon={AlertTriangle} title="FLIPL Before Relief" variant="warning">
          Missing gear must be documented and <strong>FLIPL initiated before</strong> the
          outgoing CO is relieved of responsibility. Don&apos;t let discrepancies become
          the incoming CO&apos;s problem.
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
