"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Gauge, AlertTriangle, Calculator, ClipboardCheck } from "lucide-react";

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
  { id: "levels", label: "C-Levels" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "C-Level", value: "Core Readiness—composite view of unit health across P, S, R, and T resources" },
  { label: "A-Level", value: "Assigned Mission Readiness—used when unit has mission different from core" },
  { label: "M-Rating Rule", value: "C-level cannot be higher than lowest resource level without subjective upgrade" },
  { label: "Subjective Assessment", value: "Commander determines if quantitative data matches actual capability" },
];

const C_LEVELS = [
  { level: "C-1", status: "Ready", description: "Can undertake the full mission for which organized/designed", color: "green" },
  { level: "C-2", status: "Substantially Ready", description: "Can undertake most of the wartime mission", color: "blue" },
  { level: "C-3", status: "Marginally Ready", description: "Can undertake many, but not all, portions of the mission", color: "amber" },
  { level: "C-4", status: "Not Ready", description: "Cannot undertake the mission; requires additional resources", color: "red" },
  { level: "C-5", status: "Service-Directed", description: "Unit is undergoing major reorganization or stand-up/stand-down", color: "gray" },
];

const RESOURCE_LEVELS = [
  { code: "P", name: "Personnel", description: "Percentage of authorized billets filled with qualified Marines" },
  { code: "S", name: "Supply", description: "Percentage of authorized equipment on hand" },
  { code: "R", name: "Equipment Readiness", description: "Percentage of equipment that is operational/mission capable" },
  { code: "T", name: "Training", description: "Proficiency level in Mission Essential Tasks" },
];

const PROCESS_STEPS = [
  "Calculate Resource Levels: Determine individual P, S, R, and T levels from source systems",
  "Apply M-Rating: Identify the lowest resource level—this sets the floor for C-level",
  "Subjective Assessment: Commander evaluates if quantitative data matches actual capability",
  "Consider Upgrades: If warranted, apply subjective upgrade with specific justification",
  "Document Remarks: Provide detailed remarks for any deficiencies or subjective changes",
  "CO Approval: Commanding Officer signs off on final composite rating",
];

const SUBJECTIVE_UPGRADE_CRITERIA = [
  "Specific, articulable mitigating factor (not just 'Marines have heart')",
  "Demonstrated workaround that maintains capability",
  "Temporary shortage with confirmed replacement timeline",
  "Cross-training that covers critical skill gaps",
  "Mission-specific factors that reduce impact of deficiency",
];

const COMMON_ISSUES = [
  {
    issue: "'Subjective upgrades' without detail",
    solution: "Upgrading a C-3 to C-2 because 'the Marines have heart' is not valid justification. It must be based on a specific, articulable mitigating factor that demonstrates maintained capability.",
  },
  {
    issue: "Ignoring T-Level",
    solution: "Focusing on P, S, and R while neglecting training proficiency. T-Level is often the limiting factor and requires honest assessment of MET proficiency.",
  },
  {
    issue: "Inconsistent assessments",
    solution: "Changing assessment criteria month-to-month. Use consistent standards and document rationale for any changes in methodology.",
  },
];

export function CLevelAssessmentContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Gauge} title="C-Level & A-Level Assessments" variant="info">
          The C-Level (Core Readiness) and A-Level (Assigned Mission Readiness) are the
          <strong> &quot;bottom line&quot; scores</strong> of a unit&apos;s readiness. They represent
          a composite view of unit health across four resources: Personnel, Supply,
          Equipment Readiness, and Training.
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
            Resource Areas (P-S-R-T)
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {RESOURCE_LEVELS.map((res) => (
              <div key={res.code} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                    {res.code}
                  </span>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{res.name}</h4>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{res.description}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Calculator} title="M-Rating Rule" variant="warning">
          The overall C-level <strong>cannot be higher than the lowest resource level</strong>
          unless the Commander provides a subjective upgrade with specific justification.
        </InfoCard>
      </div>
    ),

    levels: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            C-Level Definitions
          </h2>
          <div className="mt-4 space-y-3">
            {C_LEVELS.map((level) => (
              <div
                key={level.level}
                className={`rounded-lg border-l-4 p-4 ${
                  level.color === "green" ? "border-green-500 bg-green-50 dark:bg-green-900/20" :
                  level.color === "blue" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" :
                  level.color === "amber" ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20" :
                  level.color === "red" ? "border-red-500 bg-red-50 dark:bg-red-900/20" :
                  "border-gray-500 bg-gray-50 dark:bg-gray-900/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg font-bold ${
                    level.color === "green" ? "text-green-700 dark:text-green-400" :
                    level.color === "blue" ? "text-blue-700 dark:text-blue-400" :
                    level.color === "amber" ? "text-amber-700 dark:text-amber-400" :
                    level.color === "red" ? "text-red-700 dark:text-red-400" :
                    "text-gray-700 dark:text-gray-400"
                  }`}>
                    {level.level}
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">{level.status}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{level.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            A-Level (Assigned Mission)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The A-Level is used only when a unit has been assigned a specific mission
            different from its core mission. For example:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Infantry Battalion tasked as a Security Force</li>
            <li>&bull; Aviation unit tasked with humanitarian support</li>
            <li>&bull; Logistics unit tasked with convoy security</li>
          </ul>
        </section>

        <InfoCard icon={ClipboardCheck} title="Monthly Certification" variant="default">
          The C-Level assessment must be <strong>certified by the CO monthly</strong>.
          This is a command responsibility, not a staff function.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Assessment Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
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
            Valid Subjective Upgrade Criteria
          </h3>
          <ul className="mt-4 space-y-2">
            {SUBJECTIVE_UPGRADE_CRITERIA.map((criteria) => (
              <li key={criteria} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {criteria}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Document Everything" variant="warning">
          Subjective upgrades require <strong>detailed documentation</strong>. Vague
          justifications will be challenged by higher headquarters and inspectors.
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
