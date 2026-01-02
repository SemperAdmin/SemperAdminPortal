"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileCheck, AlertTriangle, Clock, ClipboardList } from "lucide-react";

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
  { label: "Joint Inventory", value: "Both the outgoing and incoming COs must satisfy themselves that the account is accurate" },
  { label: "Disclosure", value: "Any known discrepancies, missing items, or ongoing FLIPLs must be documented in the certificate" },
  { label: "Relief Letter", value: "A formal letter accompanying the inventory that states the account has been reviewed and accepted" },
];

const INVENTORY_ELEMENTS = [
  { element: "High-Value Items", description: "Physical count of weapons, serialized items, and controlled assets" },
  { element: "CMR Review", description: "Comparison of the Consolidated Memorandum Receipt against physical inventory" },
  { element: "Discrepancy Log", description: "Documentation of any items missing or mismatched" },
  { element: "FLIPL Status", description: "Status of any ongoing property loss investigations" },
];

const PROCESS_STEPS = [
  "Joint Review: Conduct a physical inventory of high-value items and a record review of the CMR",
  "Discrepancy Reporting: Identify any items that are missing or mismatched between the CMR and the physical count",
  "Certification: Both commanders sign the Certificate of Relief and the CMR",
  "Filing: A copy is forwarded to the next higher headquarters and maintained in the supply files",
];

const COMMON_ISSUES = [
  { issue: "Signing without Verification", solution: "The incoming CO signing the certificate based solely on the Supply Officer's word without conducting a personal spot-check. Always physically verify critical items." },
  { issue: "Unresolved Losses", solution: "Leaving missing gear for the 'next guy' to handle instead of initiating the FLIPL process prior to the relief. Initiate all FLIPLs before the transfer." },
];

export function CertificateOfReliefFiscalContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileCheck} title="Certificate of Relief" variant="info">
          The Certificate of Relief is the formal document that transfers accountability for government property from the outgoing Commander to the incoming Commander. It serves as the legal &quot;clean break,&quot; protecting both parties from liability for discrepancies occurring before or after the relief.
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
        <InfoCard icon={Clock} title="30-Day Requirement" variant="warning">
          The joint inventory and relief process must be completed within <strong>30 days</strong> of the Change of Command.
        </InfoCard>
      </div>
    ),
    inventory: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Joint Inventory Elements</h2>
          <div className="mt-4 space-y-3">
            {INVENTORY_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={ClipboardList} title="Personal Verification" variant="default">
          The incoming Commander should personally spot-check critical items (weapons, crypto, high-value equipment) rather than relying solely on staff reports.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Relief Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Certificate Contents</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Statement that joint inventory was conducted</li>
            <li>&bull; List of any known discrepancies</li>
            <li>&bull; Status of ongoing FLIPLs</li>
            <li>&bull; Both commanders&apos; signatures and dates</li>
            <li>&bull; Witness signatures as required</li>
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
        <InfoCard icon={AlertTriangle} title="Liability Transfer" variant="warning">
          Once signed, the incoming Commander assumes full accountability for all property. Don&apos;t sign until you&apos;re confident in the account&apos;s accuracy.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
