"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Search, AlertTriangle, Clock, FileText, Scale } from "lucide-react";

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
  { id: "requirements", label: "IO Requirements" },
  { id: "process", label: "Investigation Process" },
  { id: "timeline", label: "Timeline" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Appointing Order", value: "Commander must appoint IO in writing" },
  { label: "IO Requirements", value: "Must be senior to subject and have no personal involvement" },
  { label: "Standard of Proof", value: "Preponderance of the Evidence (more likely than not)" },
  { label: "Legal Review", value: "Completed investigation must be reviewed by SJA" },
];

const IO_REQUIREMENTS = [
  "Senior in rank to the subject of the complaint",
  "No personal involvement in the incident",
  "No close personal relationship with subject or complainant",
  "Completed appropriate investigation training",
  "Available to complete investigation within timeline",
];

const PROCESS_STEPS = [
  "Appoint IO: Commander signs appointing order with specific instructions",
  "Legal Brief: IO is briefed by SJA or EOA on conducting PAC investigations",
  "Plan Investigation: IO develops interview list and evidence collection plan",
  "Fact Gathering: Interview witnesses and collect digital/physical evidence",
  "Document Findings: Compile evidence and draft investigation report",
  "Legal Review: Completed investigation reviewed for legal sufficiency by SJA",
  "CO Decision: Commander reviews findings and makes final determination",
];

const EVIDENCE_TYPES = [
  "Witness statements (sworn and unsworn)",
  "Digital communications (texts, emails, social media)",
  "Physical evidence",
  "Surveillance footage (if available)",
  "Personnel records",
  "Previous complaints or counselings",
];

const TIMELINE_ITEMS = [
  { requirement: "14 Duty Days", action: "Standard window to complete investigation" },
  { requirement: "Every 6 Days", action: "Provide status update to complainant" },
  { requirement: "Before Deadline", action: "Request extension if needed" },
];

const COMMON_ISSUES = [
  {
    issue: "Incomplete investigations",
    solution: "Failing to interview key witnesses or not following up on digital evidence (texts/social media). Create comprehensive witness list and evidence collection plan.",
  },
  {
    issue: "Bias in IO selection",
    solution: "Appointing an IO who is a close friend of the subject compromises the investigation. Select IO with no personal connection to parties involved.",
  },
  {
    issue: "Missing legal review",
    solution: "All EO investigations must be reviewed by SJA for legal sufficiency before CO makes final determination. Never skip this step.",
  },
  {
    issue: "Failure to preserve evidence",
    solution: "Issue preservation notices immediately. Digital evidence (texts, emails) can be deleted. Act quickly to secure all relevant materials.",
  },
];

export function EOInvestigationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Search} title="EO Investigation Requirements" variant="info">
          When a formal EO complaint is filed, a commander is legally and procedurally required to
          initiate an inquiry. This ensures an objective factual basis for any subsequent command action.
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

        <InfoCard icon={Scale} title="Standard of Proof" variant="warning">
          EO investigations use <strong>Preponderance of the Evidence</strong> standard—meaning
          the incident &quot;more likely than not&quot; occurred. This is a lower standard than
          &quot;beyond a reasonable doubt&quot; used in criminal cases.
        </InfoCard>
      </div>
    ),

    requirements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Investigating Officer Requirements
          </h2>
          <ul className="mt-4 space-y-3">
            {IO_REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of Evidence to Collect
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {EVIDENCE_TYPES.map((type) => (
              <li key={type}>&bull; {type}</li>
            ))}
          </ul>
        </section>

        <InfoCard icon={FileText} title="Appointing Order" variant="default">
          The IO appointment must be <strong>in writing</strong> with specific instructions on
          scope and timeline. Use standard appointing order format from JAGMAN.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Investigation Process
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

        <InfoCard icon={AlertTriangle} title="SJA Review Required" variant="warning">
          The completed investigation <strong>must be reviewed by SJA</strong> for legal sufficiency
          before the Commander makes a final determination. Never skip this step.
        </InfoCard>
      </div>
    ),

    timeline: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_ITEMS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Clock} title="Extension Requests" variant="default">
          If more time is needed, request an extension <strong>before the deadline expires</strong>.
          Document the reason for the extension and communicate to all parties.
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
