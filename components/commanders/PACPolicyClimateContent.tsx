"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Clock, CheckCircle } from "lucide-react";

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
  { id: "requirements", label: "Requirements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Timeline", value: "Must be signed within 90 days of assuming command" },
  { label: "Visibility", value: "Posted on all unit bulletin boards and unit website" },
  { label: "Mandatory Language", value: "Must explicitly prohibit hazing, bullying, and intimate image distribution" },
  { label: "Reporting Chain", value: "Policy must clearly outline reporting chain for victims" },
];

const MANDATORY_ELEMENTS = [
  "Explicit prohibition of hazing in any form",
  "Explicit prohibition of bullying",
  "Prohibition of wrongful distribution of intimate images",
  "Clear statement on discrimination and harassment",
  "Reporting chain for victims",
  "Anti-retaliation statement",
  "Commander's personal commitment to zero tolerance",
];

const PROCESS_STEPS = [
  "Drafting: CO drafts policy with input from EOA and Sergeant Major",
  "Review: Legal and EOA review to ensure all MCO 5354.1G elements are included",
  "Signature: CO signs and dates the policy within 90 days of taking command",
  "Posting: Policy posted on all unit bulletin boards and unit website",
  "Education: CO personally speaks to the policy at first All-Hands formation",
];

const COMMON_ISSUES = [
  {
    issue: "Outdated signatures left on bulletin boards",
    solution: "Remove previous CO's policy immediately upon assuming command. This is a common IG inspection finding.",
  },
  {
    issue: "Missing mandatory language elements",
    solution: "Use NAVMC 11432 template and have EOA/Legal verify all required elements before signing.",
  },
  {
    issue: "Policy not visible or accessible",
    solution: "Verify posting in all workspaces, common areas, and on unit SharePoint/website. Conduct periodic spot checks.",
  },
];

export function PACPolicyClimateContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="PAC Policy Statement (90 Days)" variant="info">
          Each commander is required to issue a personal policy statement on Prohibited Activities
          and Conduct. This is not just a signature on a template—it is a declaration of the
          commander&apos;s expectations and the unit&apos;s floor for acceptable behavior.
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

        <InfoCard icon={Clock} title="90-Day Deadline" variant="warning">
          The PAC policy must be signed and posted within <strong>90 days</strong> of assuming
          command. Mark this milestone in your transition calendar.
        </InfoCard>
      </div>
    ),

    requirements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Mandatory Policy Elements
          </h2>
          <ul className="mt-4 space-y-3">
            {MANDATORY_ELEMENTS.map((element) => (
              <li key={element} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 text-green-500">
                  <CheckCircle className="h-4 w-4" />
                </span>
                <span>{element}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Posting Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; All unit bulletin boards in workspaces</li>
            <li>&bull; Common areas (barracks, break rooms, recreation areas)</li>
            <li>&bull; Unit website or SharePoint</li>
            <li>&bull; Accessible to all hands at all times</li>
          </ul>
        </section>

        <InfoCard icon={FileText} title="NAVMC 11432" variant="default">
          Use <strong>NAVMC 11432</strong> as the template for your PAC policy. This ensures all
          mandatory elements from MCO 5354.1G are included.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Policy Development Process
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
            Commander&apos;s Engagement
          </h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            The CO should personally speak to the policy during the first &quot;Commander&apos;s Cup&quot;
            or All-Hands formation. This demonstrates personal commitment and ensures all Marines
            understand the standards and reporting procedures.
          </p>
        </section>

        <InfoCard icon={AlertTriangle} title="Personal Ownership" variant="warning">
          This policy is the commander&apos;s personal statement, not just an administrative requirement.
          Marines will take it as seriously as the commander presents it.
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
