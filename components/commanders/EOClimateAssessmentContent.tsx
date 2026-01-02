"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { BarChart3, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "methods", label: "Assessment Methods" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Holistic Approach", value: "Combines DEOCS surveys, focus groups, and workplace observations" },
  { label: "Identify Friction", value: "Looks for institutional barriers like perceived favoritism or biased disciplinary trends" },
  { label: "Continuous Monitoring", value: "Assessments are recurring requirements to measure impact of command interventions" },
  { label: "Initial Requirement", value: "Assessment required within 120 days of Change of Command" },
];

const ASSESSMENT_METHODS = [
  {
    method: "DEOCS Survey",
    description: "Defense Organizational Climate Survey - standardized quantitative assessment",
    purpose: "Provides measurable data on organizational climate factors",
  },
  {
    method: "Focus Groups",
    description: "Small group discussions led by the EOA",
    purpose: "Adds qualitative context to survey numbers and identifies specific concerns",
  },
  {
    method: "Workplace Observations",
    description: "Direct observation of work environment and interactions",
    purpose: "Identifies visible climate indicators that surveys may miss",
  },
  {
    method: "Interviews",
    description: "One-on-one discussions with Marines at all levels",
    purpose: "Provides confidential venue for individual concerns",
  },
];

const PROCESS_STEPS = [
  "Survey Administration: Register and execute the DEOCS census for all unit members",
  "Qualitative Gathering: EOA conducts interviews or focus groups to add context to survey numbers",
  "Data Analysis: EOA analyzes both quantitative and qualitative data for patterns",
  "Command Debrief: EOA briefs the Commander on the 'State of the Command,' highlighting concerns and strengths",
  "Action Planning: Commander develops a Plan of Action and Milestones (POA&M) to address identified deficiencies",
  "Communication: Brief Marines on results and planned actions to close the feedback loop",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Within 120 Days", action: "Initial assessment required upon Change of Command" },
  { requirement: "Annually", action: "Subsequent assessments must be conducted every 12 months" },
  { requirement: "As Needed", action: "Additional assessments following significant unit events or concerns" },
];

const COMMON_ISSUES = [
  {
    issue: "Feedback Gap",
    solution: "Collecting data but failing to brief the Marines on the results leads to survey fatigue and lack of trust. Always close the loop by sharing findings and action plans with the unit.",
  },
  {
    issue: "Data Misinterpretation",
    solution: "Assuming a 'Green' survey score means there are no issues while ignoring qualitative warnings from the EOA. Survey scores are one data point—combine with focus group and observation data.",
  },
  {
    issue: "One-and-Done Mentality",
    solution: "Treating the assessment as a checkbox rather than continuous monitoring. Climate assessment is an ongoing process, not a single event.",
  },
];

export function EOClimateAssessmentContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={BarChart3} title="Climate Assessment" variant="info">
          Climate assessment is the systematic process of evaluating &quot;command health&quot;
          regarding equal opportunity, inclusion, and morale. It combines quantitative data
          from standardized surveys with qualitative observations to provide a comprehensive
          view of the unit&apos;s social and professional environment.
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
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Clock className="h-5 w-5" />
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

        <InfoCard icon={AlertTriangle} title="120-Day Requirement" variant="warning">
          Initial climate assessment required within <strong>120 days</strong> of assuming
          command, with annual reassessments thereafter.
        </InfoCard>
      </div>
    ),

    methods: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Assessment Methods
          </h2>
          <div className="mt-4 space-y-4">
            {ASSESSMENT_METHODS.map((item) => (
              <div key={item.method} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.method}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Purpose: </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.purpose}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Users} title="EOA Role" variant="default">
          The Equal Opportunity Advisor (EOA) is the subject matter expert who conducts
          qualitative assessments and provides the Command Debrief on the &quot;State of the Command.&quot;
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
            POA&M Development
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Address each identified deficiency with specific actions</li>
            <li>&bull; Assign responsible parties for each milestone</li>
            <li>&bull; Set realistic completion dates</li>
            <li>&bull; Track progress and adjust as needed</li>
            <li>&bull; Brief progress at subsequent assessments</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Close the Loop" variant="warning">
          Always brief Marines on assessment results and planned actions. Failing to
          communicate results leads to survey fatigue and erodes trust in the process.
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
