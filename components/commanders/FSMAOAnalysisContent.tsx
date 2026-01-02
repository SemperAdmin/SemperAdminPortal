"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Search, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "areas", label: "Functional Areas" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Systemic Analysis", value: "FSMAO looks beyond individual errors to see if unit processes (SOPs, Desktop Procedures) are functioning" },
  { label: "Mandatory Areas", value: "Includes Stock Control, Commodity Maintenance, Warehouse Operations, and Fiscal Management" },
  { label: "Direct Report", value: "The FSMAO team reports directly to the CG of the respective Marine Forces (MARFOR) regarding the unit's logistics health" },
];

const FUNCTIONAL_AREAS = [
  { area: "Stock Control", description: "CMR management, requisition processing, due-in tracking, and inventory accuracy", weight: "Critical" },
  { area: "Commodity Maintenance", description: "ERO documentation, parts ordering, GCSS-MC accuracy, and production metrics", weight: "Critical" },
  { area: "Warehouse Operations", description: "Physical security, storage standards, hazmat handling, and shelf-life management", weight: "Major" },
  { area: "Fiscal Management", description: "Budget execution, obligation tracking, and financial reconciliation", weight: "Major" },
  { area: "Property Accountability", description: "CMR accuracy, custody receipt management, and T/E reconciliation", weight: "Critical" },
];

const PROCESS_STEPS = [
  "Analysis Phase: FSMAO pulls data from GCSS-MC and SABRS months in advance to identify trends",
  "On-Site Review: A team of SMEs conducts a week-long (or longer) deep-dive into the unit's logistics files and gear",
  "Analysis Report: A formal report is issued with 'Findings' (critical failures) and 'Discrepancies' (minor errors)",
  "Corrective Action: The unit must respond with a formal POA&M",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "24 Months", action: "Standard cycle for a FSMAO analysis (once per 24 months)" },
  { requirement: "180 Days", action: "Target window for closing all FSMAO findings via POA&M" },
];

const FINDING_TYPES = [
  { type: "Finding", severity: "Critical", description: "A critical failure that indicates systemic problems requiring immediate command attention", color: "red" },
  { type: "Discrepancy", severity: "Minor", description: "A minor error that should be corrected but doesn't indicate systemic failure", color: "yellow" },
  { type: "Noteworthy", severity: "Positive", description: "Recognition of high technical proficiency and audit readiness", color: "green" },
];

const COMMON_ISSUES = [
  { issue: "Audit Trail Failure", solution: "Missing 'Source Documents' (signed receipts, DD-1348s) is the most common cause of a failed FSMAO. Maintain complete documentation for all transactions." },
  { issue: "Inactive Desktop Procedures", solution: "Having an SOP that doesn't match how the unit actually operates. Ensure written procedures reflect actual practice." },
];

export function FSMAOAnalysisContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Search} title="FSMAO Analysis" variant="info">
          The Field Supply and Maintenance Analysis Office (FSMAO) conducts rigorous, high-level analysis of unit supply and maintenance operations. A FSMAO &quot;Finding&quot; is a serious indicator of mismanagement, while a &quot;Noteworthy&quot; score reflects high technical proficiency and audit readiness.
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
    areas: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mandatory Functional Areas</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Area</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Weight</th>
                </tr>
              </thead>
              <tbody>
                {FUNCTIONAL_AREAS.map((item) => (
                  <tr key={item.area} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.area}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${item.weight === "Critical" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"}`}>
                        {item.weight}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Finding Categories</h3>
          <div className="mt-4 space-y-3">
            {FINDING_TYPES.map((item) => (
              <div key={item.type} className={`rounded-lg border-l-4 p-4 ${item.color === "red" ? "border-red-500 bg-red-50 dark:bg-red-900/20" : item.color === "yellow" ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20" : "border-green-500 bg-green-50 dark:bg-green-900/20"}`}>
                <h4 className={`font-medium ${item.color === "red" ? "text-red-800 dark:text-red-200" : item.color === "yellow" ? "text-yellow-800 dark:text-yellow-200" : "text-green-800 dark:text-green-200"}`}>{item.type} ({item.severity})</h4>
                <p className={`mt-1 text-sm ${item.color === "red" ? "text-red-700 dark:text-red-300" : item.color === "yellow" ? "text-yellow-700 dark:text-yellow-300" : "text-green-700 dark:text-green-300"}`}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">FSMAO Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={FileText} title="POA&M Required" variant="default">
          After receiving the FSMAO report, the unit must submit a formal <strong>Plan of Action and Milestones (POA&M)</strong> addressing all findings. Most commands expect closure within 180 days.
        </InfoCard>
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
        <InfoCard icon={AlertTriangle} title="Source Document Rule" variant="warning">
          The #1 cause of FSMAO failures is missing source documents. Every transaction must have a signed receipt, DD-1348, or other proof of action.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
