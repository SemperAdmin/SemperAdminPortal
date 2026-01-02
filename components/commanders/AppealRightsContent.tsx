"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "grounds", label: "Appeal Grounds" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Grounds for Appeal", value: "A Marine may appeal only on the grounds that the punishment was 'unjust' (it should not have been imposed) or 'disproportionate' (it was too severe for the offense)" },
  { label: "Appellate Authority", value: "The next superior commander in the chain of command reviews the appeal" },
  { label: "Legal Review", value: "Before an appellate authority can act, a Judge Advocate must review the appeal for legal sufficiency" },
];

const APPEAL_GROUNDS = [
  { ground: "Unjust", description: "The Marine contends the punishment should not have been imposed at all—either they didn't commit the offense or there was a procedural error" },
  { ground: "Disproportionate", description: "The Marine accepts responsibility but contends the punishment was too severe compared to similar cases or mitigating circumstances" },
];

const PROCESS_STEPS = [
  "Notification: At the conclusion of the NJP hearing, the commander must inform the Marine of their right to appeal",
  "Submission: The Marine submits a written appeal through the commander who imposed the punishment",
  "Command Endorsement: The imposing commander must forward the appeal with a written endorsement explaining why the punishment was appropriate",
  "SJA Review: The Staff Judge Advocate reviews the package for errors or bias",
  "Final Decision: The Appellate Authority may deny the appeal, set aside the findings, or decrease the punishment. They cannot increase it",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "5 Calendar Days", action: "The Marine has 5 days from the imposition of NJP to submit their appeal" },
  { requirement: "5-Day Restraint Rule", action: "If the appeal is not acted upon within 5 days of submission, the Marine can request that any restraint be stayed until the decision is made" },
];

const COMMON_ISSUES = [
  { issue: "Gatekeeping", solution: "A commander attempting to block or refuse to forward an appeal. Commanders are legally required to forward all appeals to the superior authority." },
  { issue: "New Evidence", solution: "An appeal is not a 're-trial,' but new evidence discovered after the NJP can be used as grounds for the 'unjust' argument." },
];

export function AppealRightsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Appeal Rights" variant="info">
          The right to appeal is a statutory protection that ensures NJP (Article 15) is not imposed in an arbitrary or capricious manner. It allows a Marine to have their case reviewed by a superior authority to ensure the punishment was both just and proportionate.
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
    grounds: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Grounds for Appeal</h2>
          <div className="mt-4 space-y-4">
            {APPEAL_GROUNDS.map((item) => (
              <div key={item.ground} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.ground}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={FileText} title="Appellate Authority Powers" variant="default">
          The Appellate Authority may:
          <ul className="mt-2 space-y-1">
            <li>&bull; Deny the appeal</li>
            <li>&bull; Set aside the findings entirely</li>
            <li>&bull; Decrease the punishment</li>
            <li>&bull; <strong>Cannot</strong> increase the punishment</li>
          </ul>
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Appeal Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Endorsement Contents</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Summary of the offense and evidence considered</li>
            <li>&bull; Rationale for the punishment imposed</li>
            <li>&bull; Response to the Marine&apos;s specific appeal arguments</li>
            <li>&bull; Recommendation to sustain, modify, or set aside</li>
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
        <InfoCard icon={AlertTriangle} title="Mandatory Forwarding" variant="warning">
          Commanders are <strong>legally required</strong> to forward all appeals to the superior authority. Refusing to forward an appeal is a serious procedural violation.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
