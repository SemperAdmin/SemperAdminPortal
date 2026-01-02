"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Plane, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "review", label: "Review Elements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "ORM Validation", value: "The CO ensures that every flight has a corresponding risk assessment" },
  { label: "Crew Maturity", value: "The CO reviews the 'Crew Mix' to ensure experienced pilots/crew are paired with juniors appropriately" },
  { label: "Operational Tempo", value: "Monitoring for 'pilot fatigue' or 'maintenance burnout'" },
];

const REVIEW_ELEMENTS = [
  { element: "Weather", description: "Current and forecasted conditions for all mission areas" },
  { element: "Crew Rest", description: "Verification that all aircrew meet minimum rest requirements" },
  { element: "Mission Complexity", description: "Risk level of planned evolutions (NVG, low-level, etc.)" },
  { element: "Crew Mix", description: "Experience levels and qualification status of assigned crews" },
  { element: "Aircraft Status", description: "Maintenance readiness and any known discrepancies" },
  { element: "T&R Requirements", description: "Training and readiness events scheduled" },
];

const PROCESS_STEPS = [
  "Preparation: The Operations (S-3) department drafts the schedule based on T&R requirements",
  "S-3/S-4 Review: Ensure aircraft are available and crews are qualified",
  "Commander's Review: CO looks at weather, crew rest, and mission complexity",
  "Signature: The CO (or acting CO) signs the schedule, authorizing the flights",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Daily", action: "Schedules are typically signed the evening prior to the flight day" },
];

const COMMON_ISSUES = [
  { issue: "Last-Minute Changes", solution: "Adding a 'training' task to a mission at the last minute without re-running the ORM process. Any significant change requires a new risk assessment." },
  { issue: "Crew Fatigue", solution: "Approving schedules that push crews beyond recommended duty day limits. Monitor cumulative fatigue over weeks, not just daily hours." },
];

export function FlightScheduleApprovalContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Plane} title="Flight Schedule Approval" variant="info">
          In aviation units, the daily Flight Schedule is a legal document and a risk-management tool. The commander&apos;s signature on the flight schedule is the final &quot;Go/No-Go&quot; decision for all operations.
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
    review: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander&apos;s Review Elements</h2>
          <div className="mt-4 space-y-3">
            {REVIEW_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={FileText} title="Legal Document" variant="default">
          The flight schedule is a <strong>legal document</strong>. The CO&apos;s signature authorizes all scheduled flights and acknowledges acceptance of the associated risk.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Schedule Approval Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Go/No-Go Factors</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Weather minimums for planned missions</li>
            <li>&bull; Crew currency and qualification status</li>
            <li>&bull; Aircraft maintenance status</li>
            <li>&bull; Cumulative crew fatigue</li>
            <li>&bull; Mission-essential requirement</li>
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
        <InfoCard icon={AlertTriangle} title="Changes Require New ORM" variant="warning">
          Any significant last-minute change to a mission requires a <strong>new risk assessment</strong>. Never add training tasks without re-evaluating the risk.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
