"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "administrative", label: "Administrative" },
  { id: "medical", label: "Medical/Dental" },
  { id: "training", label: "Training" },
  { id: "family", label: "Family & Finance" },
  { id: "references", label: "References", type: "references" as const },
];

export function PreDeploymentChecklistContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Deployment Checklist for Leaders</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Use this checklist to ensure your Marines are prepared for deployment. Address deficiencies early
            to avoid last-minute problems. Review with each Marine 60-90 days before deployment.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Leader Responsibilities</h4>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Review checklist with each Marine 60-90 days before deployment</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Identify and correct deficiencies</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Track completion status</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Report persistent problems up the chain</span></li>
          </ul>
        </div>
      </section>
    ),
    administrative: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrative Readiness Checklist</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>CAC/ID Card current (check expiration date)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>SGLI beneficiary designation current</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Page 2 (Record of Emergency Data) current</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>NAVMC 11654 (Contact Authorization) complete</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Power of Attorney executed (if desired)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Will executed (if desired)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Voter registration current (if desired)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Vehicle registration and insurance current</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Personal property secured or stored</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Legal Readiness Checklist</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>No pending legal actions that preclude deployment</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Security clearance current (if required)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>No civil restraining orders affecting assignability</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Child support/custody obligations addressed</span></li>
          </ul>
        </div>
      </section>
    ),
    medical: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Medical/Dental Readiness Checklist</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Periodic Health Assessment (PHA) current</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Immunizations current for deployment location</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>HIV screening current</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Dental Class 1 or 2 (Class 3 requires treatment before deployment)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Prescription medications sufficient for deployment</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Eyeglasses/inserts on hand (if required)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>No pending MEB/PEB actions</span></li>
          </ul>
        </div>
      </section>
    ),
    training: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Training Readiness Checklist</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>PFT current and passing</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>CFT current and passing</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Rifle qualification current</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>MOS-specific training complete</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Pre-deployment training complete</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>SERE training (if required)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Theater-specific training (if required)</span></li>
          </ul>
        </div>
      </section>
    ),
    family: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family Readiness Checklist</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Family Care Plan current (if required)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Family Care Plan tested</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Authorized Contacts identified in NAVMC 11654</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Family briefed on communication plan</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Family aware of DRC/URC contact information</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>DEERS enrollment verified for dependents</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>TRICARE coverage confirmed</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Financial Readiness Checklist</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Allotments set up (if desired)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Bills arranged for payment during deployment</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Emergency fund established</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Authorized users on accounts (if desired)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-zinc-300 dark:border-zinc-600" /><span>Tax documents organized</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
