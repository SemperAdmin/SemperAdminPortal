"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Clock, Scale } from "lucide-react";

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
  { id: "channels", label: "Reporting Channels" },
  { id: "process", label: "Process" },
  { id: "timeline", label: "Timeline" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Informal vs. Formal", value: "Informal resolution encouraged but never mandatory" },
  { label: "Formal Complaint", value: "Requires NAVMC 11512" },
  { label: "Direct Access", value: "Marines may bypass chain of command to go directly to EOA or IG" },
  { label: "Standard of Proof", value: "Preponderance of evidence" },
];

const REPORTING_CHANNELS = [
  {
    type: "Informal",
    description: "Direct approach or mediation through EOR/chain of command",
    when: "Minor issues that can be resolved at the lowest level",
  },
  {
    type: "Formal",
    description: "Written complaint using NAVMC 11512",
    when: "Serious allegations or when informal resolution fails",
  },
  {
    type: "Anonymous",
    description: "Report without identifying oneself",
    when: "Marine fears reprisal (note: limits investigation capability)",
  },
];

const PROCESS_STEPS = [
  "Submission: Marine submits complaint (informal to EOR/Chain, or formal via NAVMC 11512)",
  "Initial Assessment: EOA/Commander determines if complaint falls under PAC/EO purview",
  "Acknowledgment: Commander acknowledges formal complaint within 3 duty days",
  "Notification: Commander of the subject (accused) is notified",
  "Investigation: IO appointed to gather facts and interview witnesses",
  "Adjudication: Commander decides if complaint is substantiated based on evidence",
  "Resolution: Appropriate action taken (corrective, NJP, admin sep, etc.)",
];

const TIMELINE_ITEMS = [
  { requirement: "3 Duty Days", action: "Acknowledge formal complaint to complainant" },
  { requirement: "14 Duty Days", action: "Complete investigation and provide decision" },
  { requirement: "6 Duty Days", action: "Provide status update to complainant during investigation" },
];

const COMMON_ISSUES = [
  {
    issue: "Confusing grievances with EO complaints",
    solution: "Marines often try to use EO for 'bad leadership' or 'fairness' issues not based on protected categories. Conduct intake screening to clarify scope.",
  },
  {
    issue: "Bypassing the EOA",
    solution: "Commanders attempting to 'handle it internally' without notifying EOA is a reporting violation. Always notify EOA of formal complaints.",
  },
  {
    issue: "Delayed acknowledgment to complainant",
    solution: "Track all complaints and acknowledgment dates. Failure to acknowledge within 3 duty days is a common inspection finding.",
  },
];

export function EOComplaintProcessContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="EO Complaint Process" variant="info">
          The EO complaint process provides a standardized way for Marines to report discrimination
          or harassment. The goal is to resolve issues at the lowest level possible while ensuring
          the safety and dignity of the reporter.
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

        <InfoCard icon={AlertTriangle} title="Direct Access Rights" variant="warning">
          Marines have the right to <strong>bypass the chain of command</strong> and go directly
          to the EOA or IG if the complaint involves their immediate leadership.
        </InfoCard>
      </div>
    ),

    channels: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reporting Channels
          </h2>
          <div className="mt-4 space-y-4">
            {REPORTING_CHANNELS.map((channel) => (
              <div key={channel.type} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{channel.type}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{channel.description}</p>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                  <strong>When to use:</strong> {channel.when}
                </p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={FileText} title="NAVMC 11512" variant="default">
          Formal complaints require <strong>NAVMC 11512</strong>. Ensure the form is complete
          and includes all relevant details to support the investigation.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Complaint Resolution Process
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
            Adjudication Outcomes
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Substantiated</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                Evidence supports allegation. Corrective action required.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Unsubstantiated</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Insufficient evidence. Document findings thoroughly.
              </p>
            </div>
          </div>
        </section>
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

        <InfoCard icon={Clock} title="Status Updates" variant="warning">
          The Commander must provide the complainant with a <strong>status update every 6 duty days</strong>
          while the investigation is ongoing. Document all updates.
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
