"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { AlertOctagon, AlertTriangle, Shield, Clock } from "lucide-react";

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
  { id: "actions", label: "Required Actions" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "NCIS Notification", value: "Commands must notify NCIS of all positive drug results" },
  { label: "Mandatory Processing", value: "Zero Tolerance policy requires initiation of ADSEP processing" },
  { label: "Medical Review", value: "Positive for prescription drug may be cleared with valid, current prescription" },
  { label: "Dual Track", value: "Disciplinary (NJP/Court-Martial) and Administrative (ADSEP) actions run simultaneously" },
];

const IMMEDIATE_ACTIONS = [
  "Remove Marine from safety-sensitive duties (driving, armory, flight line)",
  "Notify NCIS of positive result",
  "Secure any government property issued to the Marine",
  "Consult with SJA on disciplinary options",
  "Initiate preliminary inquiry for valid prescription",
  "Schedule SACC screening within 48 hours",
];

const DISCIPLINARY_OPTIONS = [
  { option: "NJP (Article 15)", description: "Most common for first-time offenders; results in ADSEP with General characterization" },
  { option: "Summary Court-Martial", description: "For more serious cases; limited punishment authority" },
  { option: "Special Court-Martial", description: "For serious offenses or repeat offenders; significant punishment authority" },
  { option: "General Court-Martial", description: "For trafficking, distribution, or egregious cases" },
];

const PROCESS_STEPS = [
  "Receipt of Results: SACO/CO receives positive notification from the lab",
  "Preliminary Inquiry: Verify if Marine had valid medical prescription for the substance",
  "Immediate Actions: Remove from safety-sensitive duties, notify NCIS",
  "Legal Consultation: Consult with SJA on disciplinary options",
  "Disciplinary Action: Initiate NJP or prefer court-martial charges",
  "Administrative Action: Simultaneously initiate ADSEP processing (Notification of Separation)",
  "SACC Referral: Schedule screening within 48 hours",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Immediate", action: "Removal from safety-sensitive duties" },
  { requirement: "48 Hours", action: "SACC screening scheduled" },
  { requirement: "30 Days", action: "Target to complete NJP/disciplinary phase" },
];

const COMMON_ISSUES = [
  {
    issue: "Prescription 'ghost' claims",
    solution: "Marines claiming they used a spouse's prescription or 'old' medication. Valid prescriptions must be for the Marine specifically and be current (not expired). Verify through medical records.",
  },
  {
    issue: "Delayed action",
    solution: "Waiting too long to initiate disciplinary or administrative actions. Act promptly—delays can appear as inconsistent enforcement and complicate legal proceedings.",
  },
  {
    issue: "Forgetting ADSEP",
    solution: "Focusing only on NJP and forgetting to initiate ADSEP processing. Both actions should run simultaneously. ADSEP is mandatory per MCO 1900.16.",
  },
];

export function PositiveResultContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={AlertOctagon} title="Positive Result Procedures" variant="info">
          A confirmed positive result from the lab is a <strong>high-priority event</strong>.
          It triggers mandatory administrative and disciplinary actions. The Commander must
          act swiftly to address the misconduct while ensuring the Marine is still afforded
          due process.
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

        <InfoCard icon={Shield} title="Zero Tolerance Policy" variant="warning">
          Per the MARCORSEPMAN, the Marine Corps has a <strong>Zero Tolerance</strong>
          policy. The commander must initiate administrative separation (ADSEP) processing
          for any Marine who tests positive.
        </InfoCard>
      </div>
    ),

    actions: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Immediate Actions Required
          </h2>
          <ul className="mt-4 space-y-2">
            {IMMEDIATE_ACTIONS.map((action) => (
              <li key={action} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                {action}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Disciplinary Options
          </h3>
          <div className="mt-4 space-y-3">
            {DISCIPLINARY_OPTIONS.map((opt) => (
              <div key={opt.option} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{opt.option}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{opt.description}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="NCIS Notification Required" variant="warning">
          Commands <strong>must notify NCIS</strong> of all positive drug results.
          This is not optional and must be done promptly.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Positive Result Process
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

        <InfoCard icon={Clock} title="Dual Track Processing" variant="default">
          Disciplinary action (NJP/Court-Martial) and administrative action (ADSEP)
          should run <strong>simultaneously</strong>, not sequentially. Initiate both
          tracks promptly.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Prescription Verification
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Prescription must be in the Marine&apos;s name</li>
            <li>&bull; Prescription must be current (not expired)</li>
            <li>&bull; Verify through official medical records</li>
            <li>&bull; &quot;Old&quot; or borrowed prescriptions are not valid</li>
            <li>&bull; Consult with medical officer if uncertain</li>
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
