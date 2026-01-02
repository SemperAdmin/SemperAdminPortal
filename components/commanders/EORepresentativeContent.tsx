"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UserCheck, AlertTriangle, FileText, Users } from "lucide-react";

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
  { id: "selection", label: "Selection & Training" },
  { id: "process", label: "Appointment Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Rank Requirement", value: "Must be SGT (E-5) or above" },
  { label: "Training", value: "Must complete command-sponsored EOR course" },
  { label: "Role Scope", value: "Assists with informal resolutions; formal complaints elevated to EOA" },
  { label: "Coverage", value: "Maintain at least one trained EOR per Company/Battery" },
];

const EOR_DUTIES = [
  "Primary point of contact for Marines seeking EO information",
  "Assist with informal resolution of EO concerns",
  "Maintain visibility and accessibility to all unit members",
  "Brief the command on EO climate indicators",
  "Coordinate with Regimental/Group EOA on formal matters",
  "Assist with DEOCS administration and action plans",
  "Conduct EO awareness training as directed",
];

const SELECTION_CRITERIA = [
  "High character and integrity",
  "Approachable and respected by the unit",
  "Strong communication skills",
  "No pending adverse actions or investigations",
  "Willingness to serve as an advocate",
  "Available time to dedicate to EOR duties",
];

const PROCESS_STEPS = [
  "Selection: CO selects a Marine of high character who is approachable and respected",
  "Training: Ensure nominee attends local EOR training provided by installation EOA",
  "Appointment Letter: CO signs formal Letter of Appointment (NAVMC 11432)",
  "Introduction: EOR introduced to entire unit during formation or safety brief",
  "Posting: Post EOR name and contact info on all Command Boards",
];

const COMMON_ISSUES = [
  {
    issue: "Collateral duty overload",
    solution: "Avoid appointing a Marine who is already Training NCO, Hazmat NCO, and Mail Clerk. EOR duties require dedicated time and attention.",
  },
  {
    issue: "Lack of visibility among junior Marines",
    solution: "Formally introduce EOR during formation. Post name/photo on Command Boards. Include in welcome aboard briefs.",
  },
  {
    issue: "Untrained EOR in position",
    solution: "Track training completion dates. Schedule replacements for training before current EOR rotates. Never have an untrained Marine in the role.",
  },
];

export function EORepresentativeContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UserCheck} title="EO Representative (EOR)" variant="info">
          The Equal Opportunity Representative is the commander&apos;s &quot;eyes and ears&quot; at the
          company or battery level. They serve as the primary point of contact for Marines seeking
          information on EO policies and informal resolution.
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
            EOR Duties & Responsibilities
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {EOR_DUTIES.map((duty) => (
              <li key={duty}>&bull; {duty}</li>
            ))}
          </ul>
        </section>

        <InfoCard icon={Users} title="Continuous Requirement" variant="warning">
          Units must maintain at least <strong>one trained EOR at all times</strong>. Plan for
          replacements before current EOR PCSs or rotates out of the billet.
        </InfoCard>
      </div>
    ),

    selection: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Selection Criteria
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The EOR should be carefully selected based on:
          </p>
          <ul className="mt-4 space-y-2">
            {SELECTION_CRITERIA.map((criterion) => (
              <li key={criterion} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                {criterion}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Training Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Complete command-sponsored EOR course (installation EOA)</li>
            <li>&bull; Understand informal vs. formal complaint processes</li>
            <li>&bull; Know when to elevate to EOA</li>
            <li>&bull; Annual refresher training recommended</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Rank Requirement" variant="default">
          EORs must be <strong>SGT (E-5) or above</strong>. This ensures they have the maturity
          and experience to handle sensitive matters and command respect among junior Marines.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Appointment Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={FileText} title="NAVMC 11432" variant="default">
          Use <strong>NAVMC 11432</strong> as the standard template for the EOR appointment letter.
          Ensure the letter is signed by the CO and a copy is retained in unit files.
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
