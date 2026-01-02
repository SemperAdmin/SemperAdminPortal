"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Users, AlertTriangle, Clock, UserCheck } from "lucide-react";

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
  { id: "factors", label: "P-Level Factors" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Total Strength", value: "The raw number of bodies assigned" },
  { label: "MOS Fill", value: "Having the right Marines in the right 'primary' MOS slots (e.g., having enough 0311s in a rifle company)" },
  { label: "Deployability", value: "Subtracting Marines who are LIMDU, non-deployable for legal reasons, or pending EAS" },
];

const P_LEVEL_FACTORS = [
  { factor: "Total Strength", description: "Total Marines assigned vs T/O requirements", impact: "High" },
  { factor: "Critical MOS Fill", description: "Key positions filled with properly trained Marines", impact: "High" },
  { factor: "Deployability Rate", description: "Percentage of Marines available for deployment", impact: "Medium" },
  { factor: "Grade Distribution", description: "Proper mix of ranks per T/O", impact: "Medium" },
];

const PROCESS_STEPS = [
  "DSR Reconciliation: Compare the Unit Activity Report (UAR) or Duty Status Report (DSR) against the T/O",
  "Critical MOS Check: Identify 'low-density' MOS gaps that prevent mission accomplishment",
  "Calculate Percentage: P-level is determined by the lowest percentage of either total strength or critical MOS fill",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "Reconciliation required by the S-1 and CO" },
];

const COMMON_ISSUES = [
  { issue: "Counting Non-Deployables", solution: "Including Marines who cannot deploy (LIMDU, legal holds) in readiness calculations. Only count those who can fight." },
  { issue: "Ignoring Critical MOS Gaps", solution: "Having 100% total strength but missing key specialties (e.g., no radio operators). The P-level should reflect the lowest critical MOS fill." },
];

export function PLevelReportingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="P-Level Reporting (Personnel)" variant="info">
          The P-Level measures the quantity and quality of personnel assigned to the unit compared to its Table of Organization (T/O) requirements. It focuses on total strength, MOS fill, and deployability.
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
    factors: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">P-Level Factors</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Factor</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Impact</th>
                </tr>
              </thead>
              <tbody>
                {P_LEVEL_FACTORS.map((item) => (
                  <tr key={item.factor} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.factor}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3">
                      <span className={"rounded-full px-2 py-1 text-xs font-medium " + (item.impact === "High" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300")}>
                        {item.impact}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={UserCheck} title="Deployability Matters" variant="default">
          A Marine on the roster but unable to deploy (LIMDU, legal hold, pending EAS) should <strong>not</strong> count toward your deployable strength.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">P-Level Assessment Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Critical MOS Examples</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; 0311 (Rifleman) in an infantry company</li>
            <li>&bull; 0621 (Radio Operator) for communications</li>
            <li>&bull; 3531 (Motor Vehicle Operator) for logistics</li>
            <li>&bull; 0861 (Fire Support Marine) for fire coordination</li>
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
        <InfoCard icon={AlertTriangle} title="Lowest Percentage Rules" variant="warning">
          Your P-level is determined by the <strong>lowest</strong> percentage—either total strength or critical MOS fill. A unit at 100% strength but 50% critical MOS fill is effectively at 50%.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
