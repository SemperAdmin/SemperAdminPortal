"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ArrowRightLeft, AlertTriangle, Clock, CheckCircle } from "lucide-react";

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
  { id: "types", label: "Transfer Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Commander's Decision", value: "O-5 or above must approve or disapprove within 72 hours" },
  { label: "Presumption of Approval", value: "Requests should be approved unless extraordinary circumstances exist" },
  { label: "Transfer Types", value: "Local (different company/barracks) or Permanent (different base/location)" },
  { label: "Victim Safety", value: "Primary purpose is to move victim away from alleged offender or to safer location" },
];

const TRANSFER_TYPES = [
  {
    type: "Local Transfer",
    description: "Moving within the same installation",
    examples: [
      "Different company within the battalion",
      "Different barracks building",
      "Different work section",
      "Temporary reassignment to another unit",
    ],
  },
  {
    type: "Permanent Transfer",
    description: "Moving to a different geographic location",
    examples: [
      "PCS to a different installation",
      "Transfer to a different coast",
      "Assignment to a different MOS school",
      "Move to be closer to support network",
    ],
  },
];

const PROCESS_STEPS = [
  "Request: Victim submits a written request for transfer to the Commanding Officer",
  "Consultation: CO consults with SARC and SJA (Legal)",
  "Assessment: Evaluate victim's safety needs and available options",
  "Decision: CO approves or disapproves in writing within 72 hours",
  "Execution: If approved, S-1/Manpower coordinates with HQMC (MMIB) for permanent transfers",
  "Follow-up: Ensure victim's services continue at new location",
];

const APPROVAL_CONSIDERATIONS = [
  "Victim's stated safety concerns",
  "Proximity to alleged offender",
  "Victim's preference for transfer location",
  "Availability of SAPR services at new location",
  "Impact on victim's career progression",
];

const DISAPPROVAL_REQUIREMENTS = [
  "Must be in writing with specific reasons",
  "Must demonstrate extraordinary circumstances",
  "Mission necessity rarely accepted by HQMC",
  "Must document consultation with SARC and SJA",
  "Victim may appeal to next higher commander",
];

const COMMON_ISSUES = [
  {
    issue: "Disapproval errors",
    solution: "Disapproving a transfer because 'the Marine is too critical to the mission.' HQMC rarely views mission necessity as a valid reason to deny a victim's safety request. The presumption is approval.",
  },
  {
    issue: "72-hour deadline missed",
    solution: "Failing to provide written decision within 72 hours. Build internal tracking and prioritize these requests. Late decisions may be escalated to higher headquarters.",
  },
  {
    issue: "Incomplete consultation",
    solution: "Making a decision without consulting SARC and SJA. Both must be consulted and their input documented before the commander's decision.",
  },
];

export function ExpeditedTransferContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ArrowRightLeft} title="Expedited Transfer Authority" variant="info">
          Victims of sexual assault who file an Unrestricted report may request an
          <strong> Expedited Transfer</strong> from their current unit or installation.
          This is a critical tool to move a victim away from their alleged offender or
          to a location where they feel safer.
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

        <InfoCard icon={Clock} title="72-Hour Decision Required" variant="warning">
          The Commander must provide a <strong>written decision</strong> to the victim
          within <strong>72 hours</strong> of receiving the request. This deadline is
          strictly enforced.
        </InfoCard>
      </div>
    ),

    types: (
      <div className="space-y-6">
        {TRANSFER_TYPES.map((transfer) => (
          <section key={transfer.type} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {transfer.type}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{transfer.description}</p>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Examples:</h4>
              <ul className="mt-2 space-y-1">
                {transfer.examples.map((example) => (
                  <li key={example} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Approval Considerations
          </h3>
          <ul className="mt-4 space-y-2">
            {APPROVAL_CONSIDERATIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={CheckCircle} title="Presumption of Approval" variant="default">
          Expedited transfer requests should be <strong>approved</strong> unless there
          are truly extraordinary circumstances. The victim&apos;s safety is the priority.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Expedited Transfer Process
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Disapproval is Considered
          </h3>
          <ul className="mt-4 space-y-2">
            {DISAPPROVAL_REQUIREMENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="HQMC Coordination" variant="warning">
          For permanent transfers, S-1/Manpower must coordinate with <strong>HQMC (MMIB)</strong>
          to execute the move. Start coordination immediately upon approval to minimize
          delays.
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
