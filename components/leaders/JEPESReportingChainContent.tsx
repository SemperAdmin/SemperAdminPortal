"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "roles", label: "Roles" },
  { id: "process", label: "Process" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function JEPESReportingChainContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">JEPES Reporting Chain and Roles</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The JEPES reporting chain provides the Marine a clear understanding of their role in the unit and provides
            the Approver accurate recommendations on command input marks. Per MCO 1616.1, none of the reporting chain
            assignments have a required rank or billet.
          </p>
        </div>
      </section>
    ),
    roles: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reporting Chain Roles</h2>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Marine Reported On (MRO)</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">The subject of the JEPES Worksheet. The MRO:</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>May submit billet accomplishments during the reporting period</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensures objective scores are accurate</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Must understand JEPES concepts, their role, and expectations</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">First Line Supervisor (FLS)</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">A leader with direct supervision over the MRO. The FLS:</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provides initial written counseling within 30 days</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Reviews MRO's objective scores for accuracy</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provides recommended command input marks and comments</span></li>
            </ul>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400"><strong>Example:</strong> Team Leader, Squad Leader, Section Leader</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Evaluator</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">A leader with supervision over the FLS and responsibility for the MRO. The Evaluator:</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensures FLS is performing JEPES responsibilities</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provides recommended command input marks and comments</span></li>
            </ul>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400"><strong>Example:</strong> Platoon Commander, OIC, SNCOIC</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Senior Enlisted Reviewer (SER)</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">An E-6 or above who reviews JEPES worksheets for accuracy. The SER:</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provides comments and recommendations to FLS, Evaluator, Reviewer</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Cannot submit draft marks, return reports, or stop evaluation flow</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>SER review is encouraged but not required</span></li>
            </ul>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400"><strong>Example:</strong> Platoon Sergeant, First Sergeant</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reviewer</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">A leader with supervision over the Evaluator and responsibility for the MRO. The Reviewer:</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensures FLS and Evaluator are performing responsibilities</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provides recommended command input marks and comments</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Last to recommend marks before Approver</span></li>
            </ul>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400"><strong>Example:</strong> Company Commander, Company First Sergeant</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Approver</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">The O-5 level commander or OIC equivalent. The Approver:</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Has final approval authority for JEPES worksheets</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ultimately responsible for accuracy and integrity</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>May delegate to one trusted leader via appointment letter</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Inputs "NOT REC" as required with every reporting occasion</span></li>
            </ul>
          </div>
        </div>
      </section>
    ),
    process: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evaluation Flow</h2>
          <ol className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">FLS drafts marks for command input attributes</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">FLS submits to SER (optional) and Evaluator</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Evaluator reviews and submits to Reviewer</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Reviewer reviews and submits to Approver</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Approver approves final command input marks</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">MRO is debriefed</p>
            </li>
          </ol>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Know your role in the reporting chain</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Understand and apply JEPES command input evaluation metrics</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Submit marks within 45 days of reporting period end</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Do not inflate marks. Accuracy serves the Marine and the institution.</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
