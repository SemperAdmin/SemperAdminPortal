"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Search, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "types", label: "Investigation Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Safety vs. Legal", value: "The Safety Investigation Board (SIB) conducts a privileged investigation to find the 'root cause' for prevention. The Command Investigation (CI) determines accountability and 'line of duty' status." },
  { label: "Privilege", value: "Statements given to a Safety Investigation Board cannot be used in a Command Investigation or for disciplinary action" },
  { label: "Line of Duty (LOD)", value: "Investigations are required for any mishap resulting in a permanent disability or death to determine survivor benefits and medical coverage" },
];

const INVESTIGATION_TYPES = [
  { type: "Safety Investigation Board (SIB)", purpose: "Privileged investigation to find root cause for prevention", authority: "Safety Officer/HQMC", privileged: true },
  { type: "Command Investigation (CI)", purpose: "Determine accountability and line of duty status", authority: "Commanding Officer", privileged: false },
  { type: "Line of Duty (LOD)", purpose: "Determine benefits eligibility for serious injury/death", authority: "Commanding Officer", privileged: false },
  { type: "JAGMAN Investigation", purpose: "Formal legal investigation for complex cases", authority: "GCMCA", privileged: false },
];

const PROCESS_STEPS = [
  "Immediate Action: Secure the mishap site and appoint a Guard Force to preserve physical evidence",
  "Appoint Investigators: Appoint a Command Investigator (for Class A/B mishaps) who is independent of the SIB",
  "Coordination: Ensure the CI investigator does not have access to privileged safety files or witness statements given under safety privilege",
  "Legal Review: Submit the completed CI to the Staff Judge Advocate (SJA) for a review of legal sufficiency",
  "Endorsement: The Commander reviews findings and recommendations, adding an endorsement before forwarding to the GCMCA",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Immediate", action: "Appoint investigators upon occurrence of a Class A or B mishap" },
  { requirement: "30 Days", action: "Target for completion and submission of the investigative report" },
];

const COMMON_ISSUES = [
  { issue: "Breaking Privilege", solution: "Commanders or investigators attempting to use safety-privileged information to punish a Marine. This is a major legal violation that can derail both investigations." },
  { issue: "Incomplete LODs", solution: "Failing to conduct a Line of Duty determination for serious injuries, which can delay or deny a Marine's VA benefits later." },
];

export function MishapInvestigationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Search} title="Mishap Investigation Requirements" variant="info">
          While a Safety Investigation Report (SIREP) is used for force-wide learning, a Command Investigation (CI) may be required for legal and administrative purposes. The Commander&apos;s role is to ensure the scene is preserved, evidence is collected, and the investigation is conducted without infringing on the &quot;Safety Privilege&quot; of the concurrent safety investigation.
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
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Types</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Purpose</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Authority</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Privileged</th>
                </tr>
              </thead>
              <tbody>
                {INVESTIGATION_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.purpose}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.authority}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${item.privileged ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"}`}>
                        {item.privileged ? "Yes" : "No"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Shield} title="Safety Privilege Protection" variant="warning">
          <strong>Critical:</strong> Safety-privileged information (statements, findings) from the SIB cannot be used for disciplinary action. Violating this privilege undermines the entire safety reporting culture.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander&apos;s Endorsement Includes</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Concurrence or non-concurrence with findings</li>
            <li>&bull; Actions taken or planned to prevent recurrence</li>
            <li>&bull; Disciplinary or administrative actions contemplated</li>
            <li>&bull; Line of duty determination (if applicable)</li>
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
        <InfoCard icon={AlertTriangle} title="Protect the Privilege" variant="warning">
          Breaking safety privilege is a <strong>major legal violation</strong>. Ensure CI investigators never access SIB materials, and brief all participants on the distinction between investigations.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
