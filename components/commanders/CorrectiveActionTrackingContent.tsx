"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Target, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "tracking", label: "Tracking System" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Accountability", value: "Assign a specific individual to each finding" },
  { label: "Evidence-Based Closure", value: "A finding is only 'Closed' when proof of the fix (e.g., a new signed SOP or an equipment repair order) is verified" },
  { label: "Root Cause", value: "Address why the failure happened (e.g., 'Clerk did not know the order') rather than just the failure itself" },
];

const TRACKING_ELEMENTS = [
  { element: "Finding ID", description: "Unique identifier linking to original inspection report" },
  { element: "Assigned OPR", description: "Office of Primary Responsibility - individual accountable for closure" },
  { element: "Root Cause", description: "Why the failure occurred (training, resources, process, etc.)" },
  { element: "Corrective Action", description: "Specific action taken to fix the issue" },
  { element: "Milestones", description: "Key dates for complex multi-step fixes" },
  { element: "Evidence", description: "Proof that the fix was implemented (signed SOP, screenshot, etc.)" },
  { element: "Verification", description: "Section OIC/MMO verification that the fix is complete" },
  { element: "CO Approval", description: "Commander sign-off for closure submission" },
];

const PROCESS_STEPS = [
  "Logging: Enter all inspection findings into a central tracker (typically the POA&M)",
  "Phasing: Set milestones for complex fixes (e.g., Milestone 1: Training; Milestone 2: Implementation; Milestone 3: Re-inspection)",
  "Verification: The Section OIC and MMO/Supply Officer verify the fix",
  "Commander's Sign-off: The CO reviews and signs the final closure report for submission to the higher HQ",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "Status updates to the CO on all open findings" },
  { requirement: "180 Days", action: "Target window for closing all CGIP/FSMAO findings" },
];

const MILESTONE_EXAMPLE = [
  { milestone: "M1", action: "Training conducted for all section personnel", target: "D+30" },
  { milestone: "M2", action: "New SOP implemented and signed by CO", target: "D+60" },
  { milestone: "M3", action: "Internal re-inspection verifies compliance", target: "D+90" },
  { milestone: "Close", action: "Evidence package submitted to higher HQ", target: "D+120" },
];

const COMMON_ISSUES = [
  { issue: "False Closure", solution: "Marking an item 'Done' because the paperwork was found, but failing to fix the bad process that led to it being lost in the first place. Address root causes, not just symptoms." },
  { issue: "Loss of Momentum", solution: "Ignoring findings once the 'stress' of the inspection is over. Maintain regular status updates and CO visibility until all findings are closed." },
];

export function CorrectiveActionTrackingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Target} title="Corrective Action Tracking" variant="info">
          Corrective Action Tracking is the process of closing the loop after an inspection. It ensures that identified deficiencies are not just &quot;penciled out&quot; but are fundamentally resolved through training, equipment repair, or process change.
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
    tracking: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POA&M Tracking Elements</h2>
          <div className="mt-4 space-y-3">
            {TRACKING_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Example Milestone Plan</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Milestone</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Action</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Target</th>
                </tr>
              </thead>
              <tbody>
                {MILESTONE_EXAMPLE.map((item) => (
                  <tr key={item.milestone} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.milestone}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Corrective Action Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={FileText} title="Evidence-Based Closure" variant="default">
          A finding is only closed when you can <strong>prove</strong> the fix was implemented. This means signed documents, screenshots, photos, or other tangible evidence—not just verbal confirmation.
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
        <InfoCard icon={AlertTriangle} title="Fix the Process, Not Just the Symptom" variant="warning">
          Finding a missing document doesn&apos;t close a finding. You must fix the <strong>process</strong> that allowed it to go missing and verify the new process works.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
