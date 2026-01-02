"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { GraduationCap, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "scope", label: "Scope & Focus" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Assistance Focus", value: "The goal is to identify systemic problems and provide 'over-the-shoulder' training to clerks and managers" },
  { label: "Scoping", value: "SMATs can be general or focused on specific high-risk areas like the Government Purchase Card (GPC) or armory procedures" },
  { label: "Requesting Support", value: "Commanders can request a SMAT through their MSC (Major Subordinate Command) to gauge the health of their logistics sections" },
];

const SMAT_FOCUS_AREAS = [
  { area: "Stock Control", description: "CMR accuracy, pending requisitions, due-in tracking", risk: "High" },
  { area: "Warehouse Operations", description: "Physical security, storage standards, inventory accuracy", risk: "Medium" },
  { area: "Government Purchase Card", description: "GPC authorization, reconciliation, and audit trail", risk: "High" },
  { area: "Armory Procedures", description: "Serial number verification, custody receipts, security", risk: "High" },
  { area: "Maintenance Documentation", description: "ERO completion, GCSS-MC accuracy, parts ordering", risk: "Medium" },
];

const PROCESS_STEPS = [
  "Request/Coordination: The unit S-4 coordinates with the MSC SMAT lead for a visit date",
  "Pre-Visit: The unit conducts a self-assessment and identifies known problem areas",
  "Execution: SMAT members spend 3-5 days reviewing records and physical property",
  "Feedback: A detailed 'Bridge Report' is provided to the Commander, highlighting training gaps and process failures",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "6-12 Months Prior", action: "Ideally conducted 6 to 12 months prior to a scheduled FSMAO analysis" },
  { requirement: "3-5 Days", action: "Typical duration of a SMAT visit" },
];

const COMMON_ISSUES = [
  { issue: "Treating SMAT as 'Pass/Fail'", solution: "Hiding problems from the SMAT team defeats the purpose of the assistance visit. Be transparent about known issues so the team can help fix them." },
  { issue: "Personnel Turnover", solution: "Failing to ensure all relevant clerks are present for the training portion of the visit. Schedule the SMAT around key personnel availability." },
];

export function SMATInspectionsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={GraduationCap} title="SMAT Inspections" variant="info">
          The Supply Management Assistance Team (SMAT) visit is a non-punitive, technical review of a unit&apos;s supply and maintenance management procedures. Unlike a formal IG inspection, a SMAT is a &quot;training-first&quot; event designed to help the unit prepare for higher-level evaluations like a FSMAO or CGIP.
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
    scope: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SMAT Focus Areas</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Area</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {SMAT_FOCUS_AREAS.map((item) => (
                  <tr key={item.area} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.area}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${item.risk === "High" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"}`}>
                        {item.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Users} title="Training Focus" variant="default">
          SMAT members provide <strong>over-the-shoulder training</strong> to clerks and managers. This is the most valuable aspect of the visit—ensure all relevant personnel are present.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SMAT Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Bridge Report Contents</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Training gaps identified</li>
            <li>&bull; Process failures and root causes</li>
            <li>&bull; Recommended corrective actions</li>
            <li>&bull; Best practices observed</li>
            <li>&bull; Areas requiring follow-up</li>
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
        <InfoCard icon={AlertTriangle} title="SMAT is Assistance, Not Inspection" variant="warning">
          The SMAT visit is designed to <strong>help</strong> the unit, not grade it. Hiding problems defeats the purpose and leaves the unit vulnerable at the actual FSMAO.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
