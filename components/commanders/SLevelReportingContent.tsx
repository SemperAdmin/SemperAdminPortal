"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Target, AlertTriangle, Clock, CheckCircle } from "lucide-react";

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
  { id: "scale", label: "T-Rating Scale" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "MET-Based", value: "The T-level is a composite of individual MET assessments (Yes, Qualified Yes, No)" },
  { label: "T-Rating Scale", value: "Ranges from T-1 (fully trained) to T-4 (untrained)" },
  { label: "Pillar of Readiness", value: "Even if a unit has all its people (P-level) and gear (S-level), it can still be T-4 if it hasn't conducted the required collective training events" },
];

const T_RATING_SCALE = [
  { level: "T-1", description: "Fully trained - unit can perform all METs to standard", percentage: "85-100%" },
  { level: "T-2", description: "Substantially trained - minor deficiencies in some METs", percentage: "70-84%" },
  { level: "T-3", description: "Marginally trained - significant training gaps", percentage: "55-69%" },
  { level: "T-4", description: "Untrained - unit cannot perform assigned METs", percentage: "Below 55%" },
];

const PROCESS_STEPS = [
  "MCTIMS Review: Pull the Unit Training Management (UTM) data from the Marine Corps Training Information Management System",
  "Task Assessment: Evaluate each MET based on recent training exercises (e.g., 'Did we successfully execute a Live Fire Platoon Attack?')",
  "T-Level Calculation: Determine the percentage of METs the unit is proficient in",
  "Commander's Remark: Provide a narrative explaining the T-level and what training is planned to increase proficiency",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "Updated as part of the DRRS-MC cycle" },
];

const COMMON_ISSUES = [
  { issue: "Inflated Assessments", solution: "Rating METs as 'Yes' without conducting the actual training event. Be honest—the T-level drives training resource allocation." },
  { issue: "No Narrative", solution: "Submitting the T-level without the Commander's Remark. The narrative explains the 'why' and the plan to improve." },
];

export function TLevelReportingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Target} title="T-Level Reporting (Training)" variant="info">
          The T-Level represents the Commander&apos;s subjective and objective assessment of the unit&apos;s ability to execute its Mission Essential Tasks (METs). It is a measure of how well the unit has trained against the standards established in the community-specific T&amp;R Manual.
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
    scale: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">T-Rating Scale</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Level</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">MET Proficiency</th>
                </tr>
              </thead>
              <tbody>
                {T_RATING_SCALE.map((item) => (
                  <tr key={item.level} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-bold text-zinc-900 dark:text-zinc-100">{item.level}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={CheckCircle} title="MET Assessment Options" variant="default">
          Each MET is assessed as: <strong>Yes</strong> (trained to standard), <strong>Qualified Yes</strong> (minor deficiencies), or <strong>No</strong> (not trained).
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">T-Level Assessment Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander&apos;s Remark Should Include</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Explanation of current T-level rating</li>
            <li>&bull; Training events completed since last report</li>
            <li>&bull; Planned training to address deficiencies</li>
            <li>&bull; Resource or scheduling constraints affecting training</li>
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
        <InfoCard icon={AlertTriangle} title="Be Honest About Training Readiness" variant="warning">
          An inflated T-level can lead to a unit being assigned missions it cannot execute. <strong>Accurate reporting</strong> drives proper resource allocation.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
