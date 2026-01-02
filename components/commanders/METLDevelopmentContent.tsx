"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Target, AlertTriangle, Calendar, FileText } from "lucide-react";

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
  { id: "types", label: "METL Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Core METL", value: "Based on unit's Table of Organization and Equipment (TO&E)" },
  { label: "Assigned METL", value: "Tasks assigned by higher commander for specific deployment or contingency" },
  { label: "T&R Manuals", value: "Every MET is supported by T&R standards in NAVMC 3500 series" },
  { label: "Focus", value: "Identify 5-7 most critical tasks—if everything is essential, nothing is" },
];

const METL_COMPONENTS = [
  {
    component: "Task",
    description: "The specific action the unit must be able to perform",
    example: "Conduct offensive operations in an urban environment",
  },
  {
    component: "Conditions",
    description: "Environmental or operational circumstances under which task is performed",
    example: "Day/night, degraded communications, contested airspace",
  },
  {
    component: "Standard",
    description: "Measurable criteria from T&R Manual defining successful performance",
    example: "Clear objective within 4 hours, less than 10% casualties",
  },
];

const METL_TYPES = [
  {
    type: "Core METL",
    description: "Derived from unit's TO&E mission statement; represents fundamental wartime mission",
    source: "Table of Organization and Equipment",
    changes: "Rarely changes unless unit is reorganized",
  },
  {
    type: "Assigned METL",
    description: "Additional tasks assigned by higher commander for specific mission or deployment",
    source: "Higher headquarters tasking",
    changes: "Changes with mission assignment",
  },
  {
    type: "Supporting Tasks",
    description: "Lower-level collective tasks that must be trained to support high-level METs",
    source: "T&R Manual task hierarchy",
    changes: "Derived from Core/Assigned METL",
  },
];

const PROCESS_STEPS = [
  "Analyze Mission: Review unit's Mission Statement in the TO&E",
  "Select Tasks: Identify 5-7 most critical tasks required to achieve the mission",
  "Link Conditions: Define environmental/operational conditions for task performance",
  "Finalize Standards: Attach specific performance metrics from T&R Manual",
  "Identify Supporting Tasks: Determine lower-level tasks that enable MET execution",
  "Validate: Route through higher HQ for approval",
  "Document: Publish METL in unit training plan",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Within 30 Days", action: "New commander must review and validate unit's METL" },
  { requirement: "Annual", action: "Formal review and recertification of METL required" },
  { requirement: "Upon Mission Change", action: "Update Assigned METL when new missions are assigned" },
];

const COMMON_ISSUES = [
  {
    issue: "Task overload",
    solution: "Trying to list too many tasks as 'Essential.' A METL should contain 5-7 tasks. If everything is essential, nothing is. Prioritize ruthlessly.",
  },
  {
    issue: "Lack of supporting tasks",
    solution: "Failing to identify lower-level collective tasks that must be trained to support the high-level MET. Use the T&R Manual hierarchy to identify enabling tasks.",
  },
  {
    issue: "Generic conditions",
    solution: "Using vague conditions like 'in a combat environment.' Conditions should be specific to your operating environment and likely contingencies.",
  },
];

export function METLDevelopmentContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Target} title="METL Development" variant="info">
          The Mission Essential Task List (METL) is the specialized list of tasks a unit
          must be able to perform to accomplish its <strong>wartime mission</strong>. It is
          derived from the unit&apos;s Core Mission and any specifically assigned missions.
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

        <InfoCard icon={Calendar} title="30-Day Commander Validation" variant="warning">
          A new commander must review and validate the unit&apos;s METL within
          <strong> 30 days</strong> of assuming command.
        </InfoCard>
      </div>
    ),

    types: (
      <div className="space-y-6">
        {METL_TYPES.map((type) => (
          <section key={type.type} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {type.type}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{type.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">Source:</span>
                <p className="text-zinc-600 dark:text-zinc-400">{type.source}</p>
              </div>
              <div>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">Changes:</span>
                <p className="text-zinc-600 dark:text-zinc-400">{type.changes}</p>
              </div>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            METL Components
          </h3>
          <div className="mt-4 space-y-3">
            {METL_COMPONENTS.map((comp) => (
              <div key={comp.component} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{comp.component}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{comp.description}</p>
                <div className="mt-2 rounded bg-zinc-50 p-2 dark:bg-zinc-800/50">
                  <span className="text-xs font-medium text-zinc-500">Example:</span>
                  <p className="text-sm italic text-zinc-600 dark:text-zinc-400">{comp.example}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={FileText} title="T&R Manual Standards" variant="default">
          Every MET must be linked to specific <strong>T&R Manual standards</strong>
          from the NAVMC 3500 series. These provide the measurable criteria for
          assessing proficiency.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            METL Development Process
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
            Task Selection Criteria
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Is this task essential to accomplishing the wartime mission?</li>
            <li>&bull; Does the task require significant training to maintain proficiency?</li>
            <li>&bull; Is the task supported by T&R Manual standards?</li>
            <li>&bull; Does failure in this task mean mission failure?</li>
            <li>&bull; Can the task be measured and assessed objectively?</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="5-7 Tasks Maximum" variant="warning">
          A METL should contain <strong>5-7 tasks</strong>. More than this indicates
          a lack of prioritization. Focus on what is truly essential.
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
