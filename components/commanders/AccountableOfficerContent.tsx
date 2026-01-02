"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Shield, AlertTriangle, Clock, FileText, Package } from "lucide-react";

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
  { id: "responsibilities", label: "Responsibilities" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Personal Liability", value: "Commanders can be held pecuniarily liable for loss/damage if negligence proven" },
  { label: "Fiduciary Responsibility", value: "Funds spent in accordance with Purpose, Time, and Amount (PTA) rules" },
  { label: "Command Climate", value: "Establish culture where 'gear adrift' is not tolerated" },
  { label: "Ultimate Responsibility", value: "While tasks are delegated, CO bears legal and moral responsibility" },
];

const DELEGATED_ROLES = [
  { role: "Supply Officer", responsibility: "Day-to-day property management and CMR maintenance" },
  { role: "Responsible Officers (ROs)", responsibility: "Custody and accountability for assigned property accounts" },
  { role: "Fiscal Officer", responsibility: "Budget execution and funds control" },
  { role: "GPC Holder", responsibility: "Government Purchase Card transactions" },
];

const PROCESS_STEPS = [
  "Appointment: Formally appoint Supply Officer, ROs, and Fiscal Officer in writing",
  "Inventory Oversight: Ensure 100% property accounted for during Change of Command",
  "CMR Review: Regularly review Consolidated Memorandum Receipt to match physical assets",
  "Wall-to-Wall: Conduct annual 100% inventory of all unit property",
  "FLIPL: Initiate Financial Liability Investigation of Property Loss when items missing",
];

const TIMELINE_ITEMS = [
  { requirement: "Annual", action: "100% of unit property must be inventoried" },
  { requirement: "Quarterly", action: "ROs conduct 25% or 100% inventory of assigned accounts" },
  { requirement: "Change of Command", action: "Joint inventory with incoming/outgoing COs" },
];

const COMMON_ISSUES = [
  {
    issue: "Signature without sight",
    solution: "ROs signing for gear they haven't personally seen is a primary cause of property loss during transitions. Never sign for property you haven't physically verified.",
  },
  {
    issue: "Outdated CMR",
    solution: "CMR not reconciled with physical inventory. Conduct regular spot checks and ensure all transactions are posted promptly.",
  },
  {
    issue: "Incomplete appointment letters",
    solution: "ROs operating without proper written appointment. Maintain current appointment letters for all personnel with property/fiscal responsibilities.",
  },
];

export function AccountableOfficerContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="Accountable Officer Responsibilities" variant="info">
          The Commander is the &quot;Accountable Officer&quot; for all government property and funds
          assigned to the unit. While tasks are delegated to the Supply Officer and Comptroller,
          the Commander bears the <strong>ultimate legal and moral responsibility</strong> for
          ensuring these resources are used only for authorized purposes.
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

        <InfoCard icon={AlertTriangle} title="Personal Liability" variant="warning">
          Commanders can be held <strong>pecuniarily (financially) liable</strong> for loss,
          damage, or destruction of government property if negligence is proven.
        </InfoCard>
      </div>
    ),

    responsibilities: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Delegated Roles
          </h2>
          <div className="mt-4 space-y-3">
            {DELEGATED_ROLES.map((item) => (
              <div key={item.role} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.role}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.responsibility}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
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
                {TIMELINE_ITEMS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={FileText} title="Written Appointments Required" variant="default">
          All personnel with property or fiscal responsibilities must be <strong>formally
          appointed in writing</strong>. Maintain current appointment letters on file.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Accountability Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
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
            FLIPL Process
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            When property is missing or damaged, initiate a Financial Liability Investigation
            of Property Loss (FLIPL):
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Document circumstances of loss/damage</li>
            <li>&bull; Appoint investigating officer</li>
            <li>&bull; Determine if negligence or willful misconduct occurred</li>
            <li>&bull; Assess financial liability if appropriate</li>
          </ul>
        </section>

        <InfoCard icon={Package} title="CMR Reconciliation" variant="default">
          Regularly review the <strong>Consolidated Memorandum Receipt (CMR)</strong> to ensure
          it matches physical assets. Discrepancies must be investigated and resolved.
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
