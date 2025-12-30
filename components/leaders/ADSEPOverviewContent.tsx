"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "bases", label: "Separation Bases" },
  { id: "6105", label: "6105 Requirements" },
  { id: "key-points", label: "Key Points" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function ADSEPOverviewContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is Administrative Separation?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Administrative separation (ADSEP) removes a Marine from service without a court-martial. As a leader,
            you do not initiate separation. You document deficiencies, counsel Marines, and provide recommendations
            to the commander. The separation authority makes the final decision.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
            Your Role: Document, counsel, and recommend. The separation authority decides.
          </p>
        </div>
      </section>
    ),
    bases: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Bases for Enlisted Administrative Separation</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Convenience of the government</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Unsatisfactory performance</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Misconduct (minor disciplinary infractions, pattern of misconduct, commission of a serious offense)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Drug abuse</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Alcohol rehabilitation failure</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Weight control failure</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Entry-level performance and conduct (first 180 days)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Other designated physical or mental conditions</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pattern of Misconduct</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Two NJPs or counseling entries that could have resulted in NJP may justify administrative separation
            for pattern of misconduct.
          </p>
        </div>
      </section>
    ),
    "6105": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">6105 Counseling Requirement</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Before separation can be initiated for most bases, the Marine must receive a 6105 administrative
            separation counseling entry. This entry must contain four required elements:
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/10 p-4 dark:border-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Written Notification</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Written notification of the deficiency</p>
            </div>
            <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/10 p-4 dark:border-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Corrective Action</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Specific recommendations for corrective action and available assistance</p>
            </div>
            <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/10 p-4 dark:border-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Consequences</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Comprehensive explanation of consequences, including potential separation</p>
            </div>
            <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/10 p-4 dark:border-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4. Opportunity</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Reasonable opportunity to undertake corrective action</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Critical</h4>
          <p className="mt-2 text-sm text-red-700 dark:text-red-300">
            If any element is missing, the entry is considered a Page 11, not a 6105, and does not satisfy
            separation requirements.
          </p>
        </div>
      </section>
    ),
    "key-points": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Things to Know</h2>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>One 6105 is Sufficient:</strong> One 6105 entry can initiate separation processing.
                Multiple Page 11 entries alone cannot.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Enlisted Only:</strong> 6105 counseling applies only to enlisted Marines. Officers receive
                counseling under IRAM paragraph 3005, not paragraph 6105 of the MARCORSEPMAN.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Carry Over:</strong> 6105 entries from previous enlistments carry over and remain valid
                in the current enlistment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Rebuttal Rights:</strong> Marines have 5 working days to submit a rebuttal to a 6105 entry.</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Counsel Marines on deficiencies before recommending formal documentation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure 6105 entries contain all four required elements</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Allow the Marine time to correct deficiencies before recommending separation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Document continued deficiencies after counseling</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provide honest input to the commander on the Marine's potential for rehabilitation</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Recommending Separation</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Ask yourself:</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Did I clearly communicate the deficiency?</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Did I provide specific guidance for improvement?</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Did I give the Marine reasonable time to correct?</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Did I document continued deficiencies after counseling?</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Is there evidence of rehabilitation or continued failure?</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
