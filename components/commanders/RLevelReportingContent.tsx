"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Activity, AlertTriangle, Clock, Gauge } from "lucide-react";

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
  { id: "calculation", label: "Calculation" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Composite Measure", value: "R-level is derived from P, S, and T levels—the overall 'deployability' of the unit" },
  { label: "Lowest Level Rules", value: "The R-level is typically the lowest of the P, S, or T levels" },
  { label: "Commander's Override", value: "Commanders can override the calculated R-level with justification" },
];

const R_RATING_SCALE = [
  { level: "R-1", description: "Fully ready - can accomplish all assigned missions", color: "green" },
  { level: "R-2", description: "Substantially ready - minor limitations", color: "yellow" },
  { level: "R-3", description: "Marginally ready - significant limitations", color: "orange" },
  { level: "R-4", description: "Not ready - cannot accomplish assigned missions", color: "red" },
];

const CALCULATION_FACTORS = [
  { factor: "P-Level", description: "Personnel readiness (quantity, MOS fill, deployability)", weight: "Equal" },
  { factor: "S-Level", description: "Supply/equipment readiness (T/E fill, MEE)", weight: "Equal" },
  { factor: "T-Level", description: "Training readiness (MET proficiency)", weight: "Equal" },
  { factor: "Commander Override", description: "Subjective assessment based on unique factors", weight: "Optional" },
];

const PROCESS_STEPS = [
  "Assess P-Level: Calculate personnel readiness based on T/O fill and deployability",
  "Assess S-Level: Calculate equipment readiness based on T/E fill and MEE status",
  "Assess T-Level: Calculate training readiness based on MET proficiency",
  "Determine R-Level: The R-level is the lowest of P, S, or T (unless commander override applies)",
  "Commander's Override: If the calculated R-level doesn't reflect true capability, apply override with justification",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "Updated as part of the DRRS-MC reporting cycle" },
];

const COMMON_ISSUES = [
  { issue: "Ignoring the Lowest Level", solution: "Reporting an R-level higher than the lowest P/S/T without commander override. The R-level should reflect the weakest pillar." },
  { issue: "Unjustified Override", solution: "Using commander override without proper justification. Overrides should be documented with specific reasons." },
];

export function RLevelReportingContent({ data }: Props) {
  const getRatingColor = (color: string) => {
    switch (color) {
      case "green": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "yellow": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "orange": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
      case "red": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Activity} title="R-Level Reporting (Overall Readiness)" variant="info">
          The R-Level is the composite measure of a unit&apos;s overall readiness to accomplish its assigned missions. It is derived from the P-Level (Personnel), S-Level (Supply), and T-Level (Training), and represents the commander&apos;s assessment of the unit&apos;s deployability.
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
    calculation: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">R-Rating Scale</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Level</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Status</th>
                </tr>
              </thead>
              <tbody>
                {R_RATING_SCALE.map((item) => (
                  <tr key={item.level} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-bold text-zinc-900 dark:text-zinc-100">{item.level}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3">
                      <span className={"rounded-full px-2 py-1 text-xs font-medium " + getRatingColor(item.color)}>
                        {item.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">R-Level Calculation Factors</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Factor</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Weight</th>
                </tr>
              </thead>
              <tbody>
                {CALCULATION_FACTORS.map((item) => (
                  <tr key={item.factor} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.factor}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Gauge} title="Lowest Level Rules" variant="default">
          The R-level is typically the <strong>lowest</strong> of P, S, or T. A unit with P-1, S-2, T-3 would normally be R-3.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">R-Level Assessment Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Override Justifications</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Unique mission-specific factors not captured in P/S/T</li>
            <li>&bull; Cross-leveling or augmentation arrangements</li>
            <li>&bull; Known shortfalls that won&apos;t impact specific assigned missions</li>
            <li>&bull; Temporary conditions expected to improve shortly</li>
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
        <InfoCard icon={AlertTriangle} title="Honest Reporting Matters" variant="warning">
          An inflated R-level can lead to a unit being assigned missions it cannot execute. <strong>Accurate readiness reporting</strong> protects both the unit and the mission.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
