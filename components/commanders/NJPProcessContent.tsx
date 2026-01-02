"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, FileText, Users, AlertTriangle } from "lucide-react";

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
  { id: "steps", label: "Process Steps" },
  { id: "rights", label: "Accused Rights" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const PROCESS_STEPS = [
  "Commander reviews preliminary inquiry and determines NJP is appropriate",
  "Commander notifies accused in writing of alleged offenses",
  "Accused receives rights advisement form (JAGMAN A-1-b through A-1-d)",
  "Accused is offered opportunity to consult with counsel",
  "Accused indicates acceptance or refusal of NJP in writing",
  "Commander schedules and conducts NJP hearing",
  "Accused presents matters in defense, extenuation, and mitigation",
  "Commander announces findings and any punishment",
  "Accused signs acknowledgment of appeal rights (JAGMAN A-1-g)",
  "Unit administrators complete NAVMC 10132 and report via unit diary",
];

const ACCUSED_RIGHTS = [
  "Written notification of allegations before NJP",
  "Right to consult with a judge advocate before accepting or refusing",
  "Right to refuse NJP and demand court-martial (except aboard vessels)",
  "Personal appearance before the NJP authority",
  "Present matters in defense, extenuation, and mitigation",
  "Call witnesses and present documentary evidence",
  "Request private conference with NJP authority for personal matters",
  "Right to appeal within 5 working days",
];

const COMMON_ISSUES = [
  {
    issue: "Accused requests court-martial",
    solution: "Commander forwards charges to appropriate court-martial convening authority.",
  },
  {
    issue: "Accused unavailable for personal appearance",
    solution: "Use alternatives such as video teleconference or telephonic appearance with approval.",
  },
  {
    issue: "Counsel not available",
    solution: "Telephonic consultation with a judge advocate satisfies the requirement.",
  },
];

export function NJPProcessContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="NJP Process Requirements" variant="info">
          The NJP process requires specific procedural steps to protect the accused&apos;s rights.
          The accused must be informed of all rights, receive an opportunity to consult counsel,
          and appear before the NJP authority.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Requirements
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-green-500">&#10003;</span>
              <span>Personal appearance before the NJP authority is required</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">&#10003;</span>
              <span>Command observers may be present to demonstrate integrity and fairness</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">&#10003;</span>
              <span>NJP record must be maintained in the Unit Punishment Book</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Preparation Time:</span>
              <span className="text-zinc-600 dark:text-zinc-400">At least 24 hours before NJP</span>
            </div>
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Statute of Limitations:</span>
              <span className="text-zinc-600 dark:text-zinc-400">Within 2 years of offense</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Appeal Deadline:</span>
              <span className="text-zinc-600 dark:text-zinc-400">5 working days after imposition</span>
            </div>
          </div>
        </section>
      </div>
    ),

    steps: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NJP Process Steps
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

        <InfoCard icon={FileText} title="Required Forms" variant="default">
          <ul className="mt-2 space-y-1 text-sm">
            <li>&bull; <strong>JAGMAN A-1-b through A-1-d</strong> - Rights Advisement</li>
            <li>&bull; <strong>JAGMAN A-1-g</strong> - Appeal Rights Acknowledgment</li>
            <li>&bull; <strong>NAVMC 10132</strong> - Unit Punishment Book</li>
          </ul>
        </InfoCard>
      </div>
    ),

    rights: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="Rights of the Accused" variant="info">
          Marines facing NJP have specific rights that must be honored throughout the process.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Accused Rights
          </h2>
          <ul className="mt-4 space-y-3">
            {ACCUSED_RIGHTS.map((right) => (
              <li key={right} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 text-green-500">&#10003;</span>
                <span>{right}</span>
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Exception: Vessel Attachment" variant="warning">
          Marines attached to or embarked on a vessel may NOT refuse NJP and demand court-martial.
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
