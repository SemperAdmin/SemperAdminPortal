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
  { id: "requirements", label: "Requirements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Definition of Adverse", value: "Includes any mark below the 'average' line for certain attributes or specific derogatory comments regarding character or performance" },
  { label: "Third Officer Requirement", value: "All adverse reports must be reviewed by a 'Senior Reviewer' (usually the first General Officer in the chain) to ensure the adversity is justified" },
  { label: "Fact-Based", value: "Adverse comments must be specific, objective, and supported by documented evidence (e.g., NJP, 6105, or poor counseling)" },
];

const ADVERSE_TRIGGERS = [
  { trigger: "Section A 'No'", description: "Any 'No' answer in the certification section" },
  { trigger: "Unsatisfactory Mark", description: "A mark in the 'Unsatisfactory' bubble for any attribute" },
  { trigger: "Section I Comments", description: "Derogatory comments in the individual character section" },
  { trigger: "Section K Comments", description: "Adverse comments in the Reporting Senior remarks" },
];

const PROCESS_STEPS = [
  "Notification: The Reporting Senior (RS) informs the Marine that the report will be adverse",
  "MRO Statement: The Marine Reported On (MRO) is given the opportunity to provide a written statement in response to the adversity",
  "Referral: The RS refers the report to the Reviewing Officer (RO) for adjudication",
  "Final Adjudication: If the RO remains adverse, the report is forwarded to the Senior Reviewer before submission to HQMC",
];

const COMMON_ISSUES = [
  { issue: "Surprise Adversity", solution: "Failing to counsel the Marine on their deficiencies throughout the period, making the adverse report the 'first' they've heard of the issue." },
  { issue: "Vague Language", solution: "Using phrases like 'poor attitude' without citing specific examples of how that attitude impacted the mission." },
];

export function AdverseFitrepsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileWarning} title="Adverse Fitness Reports" variant="info">
          An adverse fitness report is any report that contains a &quot;No&quot; in Section A, a mark in the &quot;Unsatisfactory&quot; bubble, or comments in Section I or K that reflect a Marine&apos;s failure to meet standards. Because an adverse report can end a career, it triggers strict due process requirements to ensure fairness and accuracy.
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
        <InfoCard icon={Clock} title="Timeline Requirements" variant="warning">
          <strong>5 Working Days:</strong> Standard timeframe for the MRO to submit a rebuttal statement
        </InfoCard>
      </div>
    ),
    requirements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Triggers Adverse Status</h2>
          <div className="mt-4 space-y-3">
            {ADVERSE_TRIGGERS.map((item) => (
              <div key={item.trigger} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.trigger}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={CheckCircle} title="Evidence Requirements" variant="default">
          Adverse comments must be supported by documented evidence such as:
          <ul className="mt-2 space-y-1">
            <li>&bull; NJP proceedings</li>
            <li>&bull; 6105 counseling entries</li>
            <li>&bull; Documented poor performance counselings</li>
            <li>&bull; Court-martial findings</li>
          </ul>
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Adverse FITREP Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Senior Reviewer Requirements</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Usually the first General Officer in the chain of command</li>
            <li>&bull; Must review ALL adverse reports before submission</li>
            <li>&bull; Ensures adversity is justified and properly documented</li>
            <li>&bull; Can remand the report for correction or additional justification</li>
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
        <InfoCard icon={AlertTriangle} title="No Surprises" variant="warning">
          An adverse report should never be the first time a Marine hears about their deficiencies. Counsel throughout the reporting period.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
