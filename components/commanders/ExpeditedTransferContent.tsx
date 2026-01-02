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
  { label: "Presumption of Approval", value: "Command policy is to approve these requests unless there are extraordinary circumstances" },
  { label: "72-Hour Clock", value: "The commander has a strict window to provide a written decision" },
  { label: "Types of Transfers", value: "Can include moves within the barracks, to a different company, or a Permanent Change of Station (PCS) to a different installation" },
];

const TRANSFER_TYPES = [
  { type: "Barracks Move", description: "Reassignment to a different room or building", timeline: "Immediate", complexity: "Low" },
  { type: "Unit Transfer", description: "Move to a different company or section", timeline: "Days", complexity: "Medium" },
  { type: "Installation Transfer", description: "PCS to a different base", timeline: "Weeks", complexity: "High" },
  { type: "Temporary Move", description: "Short-term relocation pending investigation", timeline: "Immediate", complexity: "Low" },
];

const PROCESS_STEPS = [
  "Request: Victim submits a written request for an expedited transfer",
  "Consultation: Commander consults with the SARC, SJA, and potentially NCIS to assess the request",
  "Decision: Commander approves or disapproves in writing within 72 hours",
  "Notification: If disapproved, the next higher commander must review the decision",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "72 Hours", action: "Total time allowed for the commander to issue a written decision" },
];

const COMMON_ISSUES = [
  { issue: "Delayed Decisions", solution: "Failing to meet the 72-hour deadline. Immediately calendar the deadline upon receipt of the request and begin consultations the same day." },
  { issue: "Disapproval Without Review", solution: "If disapproving, the decision MUST be reviewed by the next higher commander. Ensure this is built into your response timeline." },
];

function getComplexityStyle(complexity: string): string {
  if (complexity === "High") return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
  if (complexity === "Medium") return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
  return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
}

export function ExpeditedTransferContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ArrowRightLeft} title="Expedited Transfer Authority" variant="info">
          Victims who file an Unrestricted Report may request a temporary or permanent move to a different location. This is designed to provide the victim with a sense of safety and distance from the alleged offender.
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
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Clock className="h-5 w-5" />Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
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
      </div>
    ),
    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Transfer Types</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Timeline</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Complexity</th>
                </tr>
              </thead>
              <tbody>
                {TRANSFER_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.timeline}</td>
                    <td className="py-3">
                      <span className={"rounded-full px-2 py-1 text-xs font-medium " + getComplexityStyle(item.complexity)}>
                        {item.complexity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={CheckCircle} title="Presumption of Approval" variant="default">
          Policy favors <strong>approval</strong> of expedited transfer requests. Disapproval requires extraordinary circumstances and triggers automatic higher-level review.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Expedited Transfer Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Consultation Requirements</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>SARC:</strong> Victim advocacy perspective and support needs</li>
            <li>&bull; <strong>SJA:</strong> Legal implications and proper procedures</li>
            <li>&bull; <strong>NCIS:</strong> Impact on ongoing investigation (if applicable)</li>
            <li>&bull; <strong>S-1:</strong> Administrative and orders processing</li>
          </ul>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={AlertTriangle} title="72-Hour Deadline is Strict" variant="warning">
          Missing the 72-hour deadline is a serious compliance failure. Calendar it immediately and begin consultations the <strong>same day</strong> you receive the request.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
