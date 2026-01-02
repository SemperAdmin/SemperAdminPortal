"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { BarChart3, AlertTriangle, Plane, Shield } from "lucide-react";

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
  { id: "types", label: "Survey Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "CSA/MCAS", value: "Command Safety Assessment and Marine Corps Aviation Survey for aviation units" },
  { label: "ASPA", value: "Aviation Safety Proactive Analysis identifies specific hazards before Class A mishaps" },
  { label: "Ground Safety", value: "Non-aviation units utilize Ground Safety Self-Assessment for 'Safety Pulse'" },
  { label: "Anonymous Feedback", value: "Marines and Sailors provide confidential feedback on safety leadership" },
];

const SURVEY_TYPES = [
  {
    name: "Command Safety Assessment (CSA)",
    audience: "Aviation units",
    focus: "Command safety climate and leadership effectiveness",
    frequency: "Within 30 days of change of command",
  },
  {
    name: "Marine Corps Aviation Survey (MCAS)",
    audience: "Aviation units",
    focus: "Aviation-specific safety culture and operational risk",
    frequency: "Within 30 days of change of command",
  },
  {
    name: "Aviation Safety Proactive Analysis (ASPA)",
    audience: "Aviation units",
    focus: "Identifies specific hazards before mishaps occur",
    frequency: "As needed based on operational tempo",
  },
  {
    name: "Ground Safety Self-Assessment",
    audience: "Non-aviation units",
    focus: "Unit safety climate and risk management practices",
    frequency: "Annually recommended",
  },
];

const PROCESS_STEPS = [
  "Safety Officer (Ground or Aviation) registers the survey window with the appropriate portal",
  "Marines and Sailors provide anonymous feedback on safety leadership and risk management",
  "Results are compiled and reviewed by the Commander and Safety Council",
  "Identify trends such as 'maintenance pressure' or 'lack of supervision'",
  "Commander implements changes to SOPs or operational tempo based on findings",
  "Follow-up assessment to measure improvement",
];

const COMMON_ISSUES = [
  {
    issue: "Normalization of Deviance",
    solution: "Surveys may reveal Marines are cutting corners because 'that's how we've always done it.' Commanders must address these cultural failures immediately—they represent the early stages of a mishap chain.",
  },
  {
    issue: "Survey fatigue",
    solution: "Avoid running multiple surveys simultaneously. Coordinate with higher HQ on timing to ensure Marines provide thoughtful, quality responses.",
  },
  {
    issue: "No action on results",
    solution: "If Marines see no changes after reporting concerns, they lose faith in the process. Debrief results publicly and demonstrate action on identified issues.",
  },
];

export function ClimateSurveysContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={BarChart3} title="Command Climate Surveys" variant="info">
          In addition to the DEOCS, specialized climate surveys are used—particularly in aviation
          communities—to measure safety culture and operational risk. These surveys identify
          &quot;blind spots&quot; where perceived pressure or poor communication might lead to
          mishaps or equipment loss.
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

        <InfoCard icon={Plane} title="Aviation Units - 30-Day Requirement" variant="warning">
          Aviation unit commanders must initiate an MCAS/CSA within <strong>30 days</strong> of
          assuming command to establish a baseline safety climate assessment.
        </InfoCard>
      </div>
    ),

    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Survey Types
          </h2>
          <div className="mt-4 space-y-4">
            {SURVEY_TYPES.map((survey) => (
              <div key={survey.name} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{survey.name}</h3>
                <div className="mt-2 grid gap-2 text-sm sm:grid-cols-3">
                  <div>
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Audience:</span>
                    <p className="text-zinc-600 dark:text-zinc-400">{survey.audience}</p>
                  </div>
                  <div>
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Focus:</span>
                    <p className="text-zinc-600 dark:text-zinc-400">{survey.focus}</p>
                  </div>
                  <div>
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Frequency:</span>
                    <p className="text-zinc-600 dark:text-zinc-400">{survey.frequency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Shield} title="Ground Safety Self-Assessment" variant="default">
          Non-aviation units should conduct annual Ground Safety Self-Assessments to evaluate
          the unit&apos;s &quot;Safety Pulse&quot; and identify areas for improvement.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Survey Administration Process
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
            Key Analysis Areas
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Maintenance pressure and operational tempo</li>
            <li>&bull; Supervision quality and availability</li>
            <li>&bull; Communication effectiveness up and down the chain</li>
            <li>&bull; Risk management integration</li>
            <li>&bull; Safety reporting culture</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Act on Findings" variant="warning">
          Survey results should drive tangible changes to SOPs or operational tempo.
          Marines must see that their feedback results in action.
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
