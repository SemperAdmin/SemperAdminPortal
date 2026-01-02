"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Shield, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "elements", label: "Policy Elements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Command Philosophy", value: "Must integrate safety as an inherent part of all operations, not a separate task" },
  { label: "Stop-Settle Authority", value: "Explicitly grants every Marine, regardless of rank, the authority to stop a dangerous evolution" },
  { label: "ORM Focus", value: "Mandates the use of Operational Risk Management (ORM) in all on-duty and off-duty activities" },
];

const POLICY_ELEMENTS = [
  { element: "Commander's Intent", description: "Clear statement that safety is a command priority, not just a program" },
  { element: "Stop-Settle Authority", description: "Empowers every Marine to halt unsafe operations without fear of reprisal" },
  { element: "ORM Requirement", description: "Mandates ORM integration into all planning and execution" },
  { element: "Reporting Encouragement", description: "Emphasizes open reporting of hazards and near-misses" },
  { element: "Personal Responsibility", description: "Holds every Marine accountable for their own safety and their teammates'" },
];

const PROCESS_STEPS = [
  "Drafting: Consult with the Unit Safety Officer (USO) or Ground Safety Officer (GSO)",
  "Review: Ensure the policy reflects the unit's specific high-risk tasks (e.g., flight operations, live fire, or heavy vehicle maintenance)",
  "Promulgation: Signed and dated by the Commander",
  "Posting: Physically posted on all command boards and included in the unit check-in brief",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "30 Days", action: "Safety Policy must be published within 30 days of assuming command" },
];

const COMMON_ISSUES = [
  { issue: "Outdated Signatures", solution: "Leaving the previous commander's policy posted indicates a lack of emphasis on the safety program. Update immediately upon assuming command." },
  { issue: "Generic Language", solution: "Using a boilerplate policy that doesn't address unit-specific risks. Tailor the policy to your unit's mission and hazards." },
];

export function SafetyPolicyStatementDetailContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="Safety Policy Statement" variant="info">
          The Safety Policy Statement is the commander&apos;s public declaration of their commitment to the health and welfare of their Marines. It defines the unit&apos;s &quot;Safety Culture,&quot; establishes risk tolerance, and empowers every Marine with &quot;Stop-Settle&quot; authority.
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
          The Safety Policy must be published within <strong>30 days</strong> of assuming command.
        </InfoCard>
      </div>
    ),
    elements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Policy Elements</h2>
          <div className="mt-4 space-y-3">
            {POLICY_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={FileText} title="Posting Requirements" variant="default">
          The signed policy must be:
          <ul className="mt-2 space-y-1">
            <li>&bull; Posted on all command boards</li>
            <li>&bull; Included in the unit check-in brief</li>
            <li>&bull; Briefed during safety stand-downs</li>
          </ul>
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Policy Development Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
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
        <InfoCard icon={AlertTriangle} title="Stop-Settle is Non-Negotiable" variant="warning">
          The policy must explicitly grant every Marine the authority to stop dangerous evolutions. This is the foundation of a healthy safety culture.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
