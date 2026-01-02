"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ClipboardCheck, AlertTriangle, Calendar, Users } from "lucide-react";

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
  { id: "inspectors", label: "Inspectors" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Non-Punitive Intent", value: "Primary goal is improvement and compliance, not punishment" },
  { label: "Standardization", value: "Uses same Functional Area Checklists (FACs) found in IGMC portal" },
  { label: "Continuous Process", value: "Not a one-time event but a cycle of inspections, feedback, and corrective actions" },
  { label: "Internal Tool", value: "Find and fix deficiencies before external inspections" },
];

const PROCESS_STEPS = [
  "Schedule: CO publishes annual inspection calendar",
  "Appoint Inspectors: SMEs from staff assigned to inspect functional areas",
  "Conduct Inspection: Inspectors use IGMC Functional Area Checklists to score compliance",
  "Document Findings: Record all discrepancies with specific references",
  "Debrief: Results provided to CO and section leaders to identify root causes",
  "Corrective Action: Track fixes until discrepancies are resolved",
];

const INSPECTOR_ASSIGNMENTS = [
  { area: "Administrative (S-1)", inspector: "Admin Chief/OIC" },
  { area: "Intelligence (S-2)", inspector: "Intel Chief/OIC" },
  { area: "Operations/Training (S-3)", inspector: "Ops Chief/OIC" },
  { area: "Logistics/Supply (S-4)", inspector: "Supply Officer/Chief" },
  { area: "Legal", inspector: "Command Legal Chief" },
  { area: "Safety", inspector: "Safety Officer/NCO" },
];

const COMMON_ISSUES = [
  {
    issue: "'Pencil whipping' inspections",
    solution: "Inspectors marking items as 'Compliant' without verifying source documentation. Require inspectors to document specific evidence reviewed for each checklist item.",
  },
  {
    issue: "Lack of follow-up on discrepancies",
    solution: "Identifying a discrepancy but never checking if it was fixed. Track all findings in a POA&M format and verify closure before marking complete.",
  },
  {
    issue: "Outdated checklists",
    solution: "Using last year's FACs. Always download current versions from IGMC portal before conducting inspections.",
  },
];

export function CIPOverviewContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ClipboardCheck} title="Command Inspection Program (CIP)" variant="info">
          The CIP is a commander&apos;s <strong>internal tool</strong> to assess the health,
          discipline, and efficiency of their unit. Unlike external IG inspections, the CIP is
          designed to find and fix deficiencies at the lowest level before they impact mission
          readiness or external evaluations.
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

        <InfoCard icon={Calendar} title="Annual Requirement" variant="warning">
          Commanders should ensure all functional areas are inspected internally <strong>at
          least once per fiscal year</strong>. Publish an annual inspection calendar.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CIP Process
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
            The CIP Cycle
          </h3>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Plan", "Inspect", "Document", "Debrief", "Correct", "Verify"].map((phase, index) => (
              <div key={phase} className="flex items-center">
                <span className="rounded-full bg-[var(--sa-navy)] px-4 py-2 text-sm font-medium text-white">
                  {phase}
                </span>
                {index < 5 && <span className="mx-2 text-zinc-400">→</span>}
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={ClipboardCheck} title="Use IGMC Checklists" variant="default">
          Use the same <strong>Functional Area Checklists (FACs)</strong> from the IGMC portal
          that external inspectors use. This ensures you&apos;re measuring against the same standard.
        </InfoCard>
      </div>
    ),

    inspectors: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Inspector Assignments by Functional Area
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Functional Area</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Typical Inspector</th>
                </tr>
              </thead>
              <tbody>
                {INSPECTOR_ASSIGNMENTS.map((item) => (
                  <tr key={item.area} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.area}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.inspector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Users} title="SME Inspectors" variant="default">
          Appoint <strong>Subject Matter Experts (SMEs)</strong> from your staff to inspect
          their functional areas. They know the requirements and can identify real issues.
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
