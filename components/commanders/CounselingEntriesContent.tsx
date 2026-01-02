"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileWarning, AlertTriangle, Clock, CheckCircle } from "lucide-react";

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
  { id: "elements", label: "Required Elements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Purpose", value: "Formal administrative remark serving as a 'final warning' before separation" },
  { label: "Prerequisite", value: "Required before separating a Marine for Unsatisfactory Performance or Pattern of Misconduct" },
  { label: "Rebuttal Right", value: "Marine has 5 working days to submit a written rebuttal" },
  { label: "Opportunity", value: "Marine must be given reasonable time to correct the deficiency" },
];

const MANDATORY_ELEMENTS = [
  {
    element: "Statement of Deficiency",
    description: "Clear description of the specific behavior or performance issue",
    example: "Marine failed to meet physical fitness standards by scoring below 200 on the PFT",
  },
  {
    element: "Corrective Action Required",
    description: "Specific actions the Marine must take to correct the deficiency",
    example: "Marine will attend remedial PT and achieve a minimum PFT score of 200",
  },
  {
    element: "Available Assistance",
    description: "Resources and support available to help the Marine improve",
    example: "Unit fitness trainer, remedial PT program, nutritional counseling",
  },
  {
    element: "Consequences of Failure",
    description: "Must specifically mention the possibility of an OTH discharge",
    example: "Failure to correct may result in administrative separation with an Other Than Honorable characterization",
  },
];

const PROCESS_STEPS = [
  "Drafting: The supervisor drafts the entry using the standardized 6105 template",
  "S-1 Review: Admin reviews the entry for proper format and required language",
  "Legal Review: SJA reviews to ensure all mandatory elements are included",
  "Counseling Session: Commander or designated officer meets with the Marine and explains the entry",
  "Signature: Marine signs acknowledging receipt (signature does not indicate agreement)",
  "Rebuttal Period: Marine has 5 working days to submit written rebuttal",
  "Submission: Signed entry ran on unit diary and uploaded to Marine's OMPF",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "5 Working Days", action: "Timeframe for the Marine to submit their rebuttal" },
  { requirement: "Immediate", action: "Entry should be ran on unit diary as soon as rebuttal period ends" },
  { requirement: "Reasonable Time", action: "Marine must be given adequate time to correct the deficiency" },
];

const COMMON_ISSUES = [
  {
    issue: "Missing language",
    solution: "Omitting the statement that the Marine is 'not recommended for reenlistment' or the OTH warning language. This can invalidate future separation attempts. Use the standardized template.",
  },
  {
    issue: "Stale 6105s",
    solution: "Trying to separate a Marine for an incident that happened 18 months ago without any intervening counseling. Document ongoing performance issues; don't let entries go stale.",
  },
  {
    issue: "Vague deficiencies",
    solution: "Writing 'Marine has a bad attitude' instead of specific, observable behaviors. Be concrete: dates, times, specific incidents that demonstrate the deficiency.",
  },
];

export function CounselingEntriesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileWarning} title="6105 Counseling Entries" variant="info">
          A &quot;6105&quot; entry (named after the paragraph in the MARCORSEPMAN) is a formal
          administrative remark that serves as a <strong>&quot;final warning.&quot;</strong> It is a
          prerequisite for separating a Marine for &quot;Unsatisfactory Performance&quot; or
          &quot;Pattern of Misconduct.&quot;
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
            Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Clock} title="5 Working Days for Rebuttal" variant="warning">
          The Marine has <strong>5 working days</strong> to submit a written rebuttal,
          which must be uploaded to the OMPF along with the entry. This right cannot
          be waived by the command.
        </InfoCard>
      </div>
    ),

    elements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Mandatory Elements
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            To be legally valid, a 6105 entry must contain all of the following:
          </p>
        </section>

        {MANDATORY_ELEMENTS.map((item) => (
          <section key={item.element} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {item.element}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
            <div className="mt-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Example:</span>
              <p className="mt-1 text-sm italic text-zinc-600 dark:text-zinc-400">{item.example}</p>
            </div>
          </section>
        ))}

        <InfoCard icon={CheckCircle} title="Use the Template" variant="default">
          Always use the standardized 6105 template to ensure all mandatory language is
          included. Have legal review before counseling the Marine.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            6105 Entry Process
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

        <InfoCard icon={AlertTriangle} title="Signature Does Not Mean Agreement" variant="warning">
          The Marine&apos;s signature only acknowledges <strong>receipt</strong> of the entry,
          not agreement with its contents. If the Marine refuses to sign, have a witness
          annotate the refusal and the entry remains valid.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            After the Counseling
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Document the Marine&apos;s progress (or lack thereof)</li>
            <li>&bull; Conduct follow-up counseling at regular intervals</li>
            <li>&bull; If behavior improves, document in a subsequent entry</li>
            <li>&bull; If behavior does not improve, initiate separation proceedings</li>
          </ul>
        </section>
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
