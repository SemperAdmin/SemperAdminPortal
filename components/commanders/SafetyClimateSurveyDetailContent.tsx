"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ClipboardList, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "survey", label: "Survey Elements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Confidentiality", value: "Mandatory to ensure honest feedback from all unit members" },
  { label: "Aviation Requirements", value: "Often utilizes the MCAS (Marine Corps Aviation Survey)" },
  { label: "Ground Requirements", value: "Utilizes the Ground Safety Survey tool" },
];

const SURVEY_ELEMENTS = [
  { element: "Safety Culture", description: "Do Marines feel safety is a genuine command priority?" },
  { element: "Reporting Climate", description: "Are Marines comfortable reporting hazards and near-misses?" },
  { element: "Pressure Perceptions", description: "Do Marines feel pressured to cut corners or skip controls?" },
  { element: "Leadership Commitment", description: "Does the CO's behavior match the safety policy?" },
  { element: "Training Adequacy", description: "Do Marines feel adequately trained for hazardous tasks?" },
  { element: "Resource Availability", description: "Are proper PPE and safety equipment available?" },
];

const PROCESS_STEPS = [
  "Initiation: The CO or Safety Officer registers the survey",
  "Participation: Provide time and access for all unit members to complete the survey",
  "Analysis: Review the raw data and comments to identify 'hot spots' (e.g., specific work shifts or sections with high stress)",
  "Town Hall: Brief the unit on the results and the command's plan to address concerns",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "90 Days", action: "O-5 and O-6 commanders must conduct safety climate survey within 90 days of assuming command" },
];

const COMMON_ISSUES = [
  { issue: "Low Response Rate", solution: "If participation is low, the data is statistically insignificant. The CO must emphasize the importance of the survey and provide dedicated time for completion." },
  { issue: "No Follow-Up", solution: "Conducting the survey but never briefing results or addressing concerns. Marines will lose trust in the process if their feedback is ignored." },
];

export function SafetyClimateSurveyDetailContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ClipboardList} title="Safety Climate Survey" variant="info">
          The Safety Climate Survey (or Command Safety Assessment) provides the commander with an honest, anonymous look at how Marines perceive the unit&apos;s safety culture. It measures whether Marines feel pressured to cut corners or if they believe the CO is truly committed to safety.
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
        <InfoCard icon={Clock} title="90-Day Requirement" variant="warning">
          O-5 and O-6 commanders must conduct a Safety Climate Survey within <strong>90 days</strong> of assuming command.
        </InfoCard>
      </div>
    ),
    survey: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Survey Focus Areas</h2>
          <div className="mt-4 space-y-3">
            {SURVEY_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Users} title="Confidentiality is Critical" variant="default">
          Survey responses must be <strong>confidential</strong> to ensure honest feedback. Marines must trust that their responses cannot be traced back to them.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Survey Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Analysis Focus</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Identify &quot;hot spots&quot; (sections/shifts with concerning responses)</li>
            <li>&bull; Compare results to Marine Corps-wide benchmarks</li>
            <li>&bull; Review free-text comments for specific concerns</li>
            <li>&bull; Track trends from previous surveys</li>
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
        <InfoCard icon={AlertTriangle} title="Brief the Results" variant="warning">
          Marines must see that their feedback matters. Brief the results and your plan to address concerns in a town hall format.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
