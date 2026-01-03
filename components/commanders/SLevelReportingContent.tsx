"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Package, AlertTriangle, Clock, Wrench } from "lucide-react";

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
  { id: "categories", label: "Equipment Categories" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Equipment Based", value: "The S-level measures readiness of supplies and equipment against the Table of Equipment (T/E)" },
  { label: "S-Rating Scale", value: "Ranges from S-1 (fully equipped) to S-4 (not equipped)" },
  { label: "Degraders", value: "Focus on Mission Essential Equipment (MEE) shortages that directly impact mission capability" },
];

const EQUIPMENT_CATEGORIES = [
  { category: "Principal End Items", description: "Major equipment like vehicles, weapons systems", impact: "High" },
  { category: "Mission Essential Equipment", description: "Equipment critical to mission accomplishment", impact: "High" },
  { category: "Secondary Items", description: "Support equipment and supplies", impact: "Medium" },
  { category: "Consumables", description: "Expendable supplies and materials", impact: "Low" },
];

const S_RATING_SCALE = [
  { level: "S-1", description: "Fully equipped - unit has all T/E requirements", percentage: "90-100%" },
  { level: "S-2", description: "Substantially equipped - minor shortages", percentage: "80-89%" },
  { level: "S-3", description: "Marginally equipped - significant shortages", percentage: "65-79%" },
  { level: "S-4", description: "Not equipped - critical shortages prevent mission", percentage: "Below 65%" },
];

const PROCESS_STEPS = [
  "T/E Comparison: Compare on-hand equipment against the Table of Equipment requirements",
  "MEE Assessment: Identify shortages in Mission Essential Equipment categories",
  "Readiness Impact: Determine how equipment shortages affect mission capability",
  "Commander's Remark: Provide narrative explaining shortages and mitigation efforts",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "Updated as part of the DRRS-MC reporting cycle" },
];

const COMMON_ISSUES = [
  { issue: "Unreported Shortages", solution: "Equipment deficiencies not captured in reporting. Conduct regular T/E reconciliation with the Supply Officer." },
  { issue: "Maintenance Status Not Included", solution: "Equipment on-hand but not operational should degrade the S-level. Track maintenance status alongside inventory." },
];

const impactLevelClasses: Record<string, string> = {
  High: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
};

export function SLevelReportingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Package} title="S-Level Reporting (Supply)" variant="info">
          The S-Level measures the unit&apos;s equipment and supply readiness by comparing on-hand assets against the Table of Equipment (T/E) requirements. It focuses on Mission Essential Equipment that directly impacts the unit&apos;s ability to accomplish its assigned missions.
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
    categories: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">S-Rating Scale</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Level</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">T/E Fill</th>
                </tr>
              </thead>
              <tbody>
                {S_RATING_SCALE.map((item) => (
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
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Equipment Categories</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Category</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Impact</th>
                </tr>
              </thead>
              <tbody>
                {EQUIPMENT_CATEGORIES.map((item) => (
                  <tr key={item.category} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.category}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${impactLevelClasses[item.impact] || impactLevelClasses.Medium}`}>
                        {item.impact}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Wrench} title="Maintenance Matters" variant="default">
          Equipment that is <strong>deadlined</strong> or in extended maintenance should be counted as a shortage until operational.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">S-Level Assessment Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander&apos;s Remark Should Include</h3>
          <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Specific equipment shortages affecting mission capability</li>
            <li>Status of requisitions to fill shortages</li>
            <li>Maintenance status of major end items</li>
            <li>Mitigation measures for critical shortages</li>
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
        <InfoCard icon={AlertTriangle} title="MEE Shortages Are Critical" variant="warning">
          Even a single <strong>Mission Essential Equipment</strong> shortage can degrade your S-level. Track MEE items separately and prioritize their fill.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
