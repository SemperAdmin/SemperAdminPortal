"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { CheckSquare, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "preparation", label: "Preparation Steps" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Early Start", value: "Preparation should begin months in advance, integrated into the unit's Long-Range Training Plan (LRTP)" },
  { label: "Source Document Rule", value: "If it isn't documented, it didn't happen. Preparation is 90% records management" },
  { label: "Mock Inspections", value: "Conducting an internal 'full-dress' inspection using external SMEs if possible" },
];

const PREPARATION_ELEMENTS = [
  { task: "Appoint FAC Owners", description: "Assign a primary and alternate for every IGMC Functional Area Checklist", timing: "D-120" },
  { task: "Gap Analysis", description: "Conduct a 'blind' self-assessment to find missing records", timing: "D-90" },
  { task: "Binder/Folder Builds", description: "Organize evidence (digital or physical) to match the sequence of the checklist questions", timing: "D-60" },
  { task: "Mock Inspection", description: "Conduct full-dress rehearsal using external SMEs if available", timing: "D-45" },
  { task: "Commander's Review", description: "CO personally spot-checks 2-3 high-risk functional areas (e.g., Legal, Supply)", timing: "D-30" },
  { task: "Final Brief", description: "Present inspection readiness status to the Commander", timing: "D-15" },
];

const PROCESS_STEPS = [
  "Appoint FAC Owners: Assign a primary and alternate for every IGMC Functional Area Checklist",
  "Gap Analysis: Conduct a 'blind' self-assessment to find missing records",
  "Binder/Folder Builds: Organize evidence (digital or physical) to match the sequence of the checklist questions",
  "Commander's Review: CO personally spot-checks 2-3 high-risk functional areas (e.g., Legal, Supply) 30 days prior",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "D-90", action: "Complete initial self-assessment" },
  { requirement: "D-30", action: "All source document folders finalized" },
  { requirement: "D-15", action: "Final brief to the Commander" },
];

const HIGH_RISK_AREAS = [
  "Legal (NJP records, investigations)",
  "Supply (CMR, property accountability)",
  "Training (MCTIMS records, T&R compliance)",
  "Safety (mishap reports, safety surveys)",
  "Admin (Page 11s, FITREPs, awards)",
];

const COMMON_ISSUES = [
  { issue: "Last-Minute Scrubbing", solution: "Trying to 'fix' months of missing paperwork in the week before the IG arrives. Start preparation early and maintain records continuously." },
  { issue: "Lack of NCO Involvement", solution: "Keeping preparation at the Officer/SNCO level. NCOs are the ones executing the processes and must know the checklists." },
];

export function PreInspectionPrepContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={CheckSquare} title="Pre-Inspection Preparation" variant="info">
          Effective pre-inspection preparation minimizes unit stress and maximizes the chances of a &quot;Mission Capable&quot; rating. It involves a systematic review of all functional areas, ensuring that documentation is organized and personnel are briefed on the inspection process.
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
    preparation: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preparation Timeline</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Timing</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Task</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {PREPARATION_ELEMENTS.map((item) => (
                  <tr key={item.task} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.timing}</td>
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.task}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">High-Risk Functional Areas</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">These areas typically have the most findings and require extra attention:</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {HIGH_RISK_AREAS.map((area) => (
              <li key={area}>&bull; {area}</li>
            ))}
          </ul>
        </section>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preparation Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Users} title="NCO Involvement Critical" variant="default">
          NCOs execute the day-to-day processes being inspected. They <strong>must</strong> know the checklists and be able to explain their section&apos;s procedures to inspectors.
        </InfoCard>
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
        <InfoCard icon={AlertTriangle} title="Start Early" variant="warning">
          Preparation is 90% records management. You cannot create months of missing documentation in the week before the inspection. Start early and maintain records continuously.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
