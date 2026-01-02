"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ClipboardCheck, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "programs", label: "Programs" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "MMIIP", value: "Marine Corps Maintenance Independent Inspection Program - formal program where qualified internal inspectors verify maintenance actions meet technical standards" },
  { label: "Supply Audits", value: "Recurring checks of Consolidated Memorandum Receipt (CMR), voucher files, and pending requisition files" },
  { label: "Objectivity", value: "Internal inspectors must be empowered to report discrepancies without fear of reprisal from section OICs" },
];

const PROGRAM_ELEMENTS = [
  { program: "MMIIP", description: "Independent maintenance inspectors verify that maintenance actions meet technical standards and are properly documented in GCSS-MC", scope: "All maintenance-producing sections" },
  { program: "Supply Internal Audits", description: "Recurring checks of CMR accuracy, voucher file completeness, and pending requisition status", scope: "S-4, Supply sections" },
  { program: "Armory Spot-Checks", description: "Verification of serial number accuracy, custody receipts, and security procedures", scope: "Armory, small arms" },
  { program: "GCSS-MC Reconciliation", description: "Monthly comparison of physical assets to system records", scope: "All accountable property" },
];

const PROCESS_STEPS = [
  "Appointment: The CO appoints a Maintenance Management Officer (MMO) and Supply Officer to oversee internal programs",
  "Scheduling: Establish a monthly or quarterly schedule for internal spot-checks and audits",
  "Execution: Use the IGMC Functional Area Checklists (FACs) to conduct the inspection",
  "Reporting: Discrepancies are briefed to the CO and tracked until corrected",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "MMOs must conduct a reconciliation of the unit's maintenance production reports" },
  { requirement: "Quarterly", action: "ROs must conduct a spot-check of 25% of their assigned equipment" },
];

const COMMON_ISSUES = [
  { issue: "Lack of Independence", solution: "Allowing a section to 'inspect itself,' which leads to overlooked errors. Ensure inspectors are independent of the section being inspected." },
  { issue: "Documentation Gaps", solution: "Fixing the physical issue but failing to record the corrective action in GCSS-MC. Document all corrective actions in the system of record." },
];

export function InternalInspectionsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ClipboardCheck} title="Internal Inspections" variant="info">
          Internal inspections are the commander&apos;s self-assessment tool to ensure day-to-day compliance with maintenance and supply regulations. The Marine Corps Maintenance Independent Inspection Program (MMIIP) and internal supply audits are designed to catch procedural &quot;drift&quot; before it degrades combat readiness or results in property loss.
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
    programs: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Internal Inspection Programs</h2>
          <div className="mt-4 space-y-4">
            {PROGRAM_ELEMENTS.map((item) => (
              <div key={item.program} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.program}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Scope: </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Users} title="Inspector Independence" variant="default">
          Internal inspectors must be <strong>independent</strong> of the section being inspected. Allowing a section to inspect itself defeats the purpose of the internal inspection program.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Internal Inspection Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Inspection Tools</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; IGMC Functional Area Checklists (FACs)</li>
            <li>&bull; GCSS-MC reports and queries</li>
            <li>&bull; Physical inventory sheets</li>
            <li>&bull; Unit SOP checklists</li>
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
        <InfoCard icon={AlertTriangle} title="Document Everything" variant="warning">
          If it isn&apos;t documented, it didn&apos;t happen. Ensure all corrective actions are recorded in GCSS-MC, not just fixed physically.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
