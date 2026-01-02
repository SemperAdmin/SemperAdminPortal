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
  { id: "process", label: "Process" },
  { id: "timeline", label: "Timeline" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Confidentiality", value: "Individual responses protected to encourage honest feedback" },
  { label: "Census Requirement", value: "Full census required for units with 50+ personnel" },
  { label: "Commander Responsibility", value: "Must debrief unit and create Action Plan" },
  { label: "Minimum Responses", value: "16 respondents required for report generation" },
];

const PROCESS_STEPS = [
  "Unit survey administrator (typically EOA) registers unit on DEOCS portal",
  "Survey window opens for set period (typically 21 days)",
  "Marines complete survey confidentially",
  "Commander and EOA review report to identify trends and hot spots",
  "Commander conducts Town Hall or small group sessions to discuss results",
  "CO submits Action Plan to higher HQ within 30 days of receipt",
];

const TIMELINE_ITEMS = [
  { event: "Change of Command", requirement: "Initiate DEOCS within 120 days" },
  { event: "Annual Requirement", requirement: "Conduct DEOCS every 12 months thereafter" },
  { event: "Action Plan", requirement: "Submit within 30 days of receiving results" },
  { event: "Survey Window", requirement: "Typically 21 days for completion" },
];

const COMMON_ISSUES = [
  {
    issue: "Low participation (below 16 respondents)",
    solution: "Report cannot be generated due to anonymity protections. Commanders must actively encourage participation and ensure Marines have time to complete.",
  },
  {
    issue: "Survey fatigue affecting quality",
    solution: "Avoid running multiple surveys (Safety, DEOCS, etc.) simultaneously. Coordinate timing with higher HQ.",
  },
  {
    issue: "No follow-up after results",
    solution: "Marines lose trust in the process. Commander must debrief results and demonstrate action on concerns.",
  },
];

export function DEOCSRequirementsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={BarChart3} title="Defense Organizational Climate Survey" variant="info">
          DEOCS is a critical sensor for commanders to measure unit health regarding harassment,
          discrimination, morale, and leadership. It provides a confidential avenue for Marines
          to report concerns directly to the command team.
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
            What DEOCS Measures
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Harassment and discrimination climate</li>
            <li>&bull; Unit morale and cohesion</li>
            <li>&bull; Leadership effectiveness</li>
            <li>&bull; Equal opportunity environment</li>
            <li>&bull; Trust in reporting processes</li>
          </ul>
        </section>

        <InfoCard icon={Users} title="Anonymity Protection" variant="warning">
          Individual responses are <strong>strictly protected</strong>. Commanders receive aggregate
          data only. Any attempt to identify individual respondents violates policy and erodes trust.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DEOCS Administration Process
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
            Action Plan Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Identify specific areas for improvement from survey results</li>
            <li>&bull; Develop measurable goals and milestones</li>
            <li>&bull; Assign responsibility for each action item</li>
            <li>&bull; Brief the unit on the Action Plan</li>
            <li>&bull; Submit to higher HQ within 30 days</li>
          </ul>
        </section>

        <InfoCard icon={BarChart3} title="Results Debrief" variant="default">
          Commanders should conduct a <strong>Town Hall</strong> or small group sessions to discuss
          results with Marines. This demonstrates leadership commitment and builds trust in the process.
        </InfoCard>
      </div>
    ),

    timeline: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DEOCS Timeline Requirements
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Event</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_ITEMS.map((item) => (
                  <tr key={item.event} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.event}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Clock} title="120-Day Requirement" variant="warning">
          New commanders must initiate a DEOCS within <strong>120 days</strong> of assuming command.
          Mark this on your calendar during the transition process.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Best Practices for Timing
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Avoid major exercises or deployment periods</li>
            <li>&bull; Do not overlap with other unit surveys</li>
            <li>&bull; Ensure maximum personnel availability</li>
            <li>&bull; Coordinate with higher HQ on timing</li>
          </ul>
        </section>
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
