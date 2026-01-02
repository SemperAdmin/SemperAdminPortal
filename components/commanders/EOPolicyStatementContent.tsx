"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { label: "Protected Categories", value: "Race, color, religion, sex (including pregnancy, sexual orientation, gender identity), national origin, age" },
  { label: "Accountability", value: "Leaders at all levels held accountable for section climate" },
  { label: "Access to Redress", value: "Every Marine has right to seek assistance without fear of reprisal" },
  { label: "Timeline", value: "Must be published within 90 days of assuming command" },
];

const PROTECTED_CATEGORIES = [
  "Race",
  "Color",
  "Religion",
  "Sex (including pregnancy)",
  "Sexual orientation",
  "Gender identity",
  "National origin",
  "Age",
];

const PROCESS_STEPS = [
  "Drafting: Commander, advised by EOA, drafts the policy statement",
  "Personalization: Tailor to reflect Commander's specific command philosophy",
  "Review: EOA and Legal review for compliance with MCO 5354.1G",
  "Posting: Physically post on Command Board in all common areas",
  "Digital: Upload to unit portal/SharePoint",
  "Annual Review: Re-sign annually or upon change of command",
];

const COMMON_ISSUES = [
  {
    issue: "Boilerplate language without personalization",
    solution: "Using a generic template signals Marines that the commander is merely 'checking a box.' Add personal commitment language that reflects your command philosophy.",
  },
  {
    issue: "Hidden postings in CO's office",
    solution: "Policy must be visible to all Marines in common areas (break rooms, workspaces, barracks). Conduct walk-throughs to verify visibility.",
  },
  {
    issue: "Outdated or unsigned policy",
    solution: "Review and re-sign annually. Immediately update upon change of command. IG inspections commonly cite this finding.",
  },
];

export function EOPolicyStatementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="EO Policy Statement" variant="info">
          The Equal Opportunity Policy Statement is a commander&apos;s formal commitment to a work
          environment free from discrimination. It establishes that merit, fitness, and capability
          are the <strong>only</strong> factors for advancement and treatment within the unit.
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

        <InfoCard icon={Clock} title="90-Day Requirement" variant="warning">
          The EO policy must be published and posted within <strong>90 days</strong> of assuming
          command. Mark this milestone in your transition calendar.
        </InfoCard>
      </div>
    ),

    requirements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Protected Categories
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The policy must explicitly prohibit discrimination based on:
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {PROTECTED_CATEGORIES.map((category) => (
              <div key={category} className="flex items-center gap-2 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800/50">
                <span className="h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{category}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Elements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Commander&apos;s personal commitment to equal opportunity</li>
            <li>&bull; List of all protected categories</li>
            <li>&bull; Statement on leader accountability at all levels</li>
            <li>&bull; Right to seek assistance without fear of reprisal</li>
            <li>&bull; Reporting chain and EOR/EOA contact information</li>
            <li>&bull; Commander&apos;s signature and date</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Posting Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Command Board in all common areas</li>
            <li>&bull; Workspaces and break rooms</li>
            <li>&bull; Barracks common areas</li>
            <li>&bull; Unit digital portal/SharePoint</li>
          </ul>
        </section>
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

        <InfoCard icon={FileText} title="Personalization Matters" variant="default">
          Your EO policy should reflect <strong>your</strong> command philosophy. Generic templates
          signal to Marines that you&apos;re merely checking a box. Add language that demonstrates
          your personal commitment to an environment of dignity and respect.
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
