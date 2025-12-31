"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "who-requires", label: "Who Requires" },
  { id: "components", label: "Components" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function FamilyCarePlanRequirementsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family Care Plan Requirements</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Single parents with custody of children and dual-military couples with dependents must maintain a current
            Family Care Plan. Per MCO 1040.31, failure to maintain a Family Care Plan is a disqualifying factor for
            reenlistment and affects worldwide deployability.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">How It Works</h4>
          <ol className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Marine identifies need for Family Care Plan</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Marine completes Family Care Plan documentation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Marine briefs Commander or designated representative on the plan</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Commander certifies the plan is adequate</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Marine tests the plan during unit training events</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Marine updates the plan when circumstances change</span></li>
          </ol>
        </div>
      </section>
    ),
    "who-requires": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Requires a Family Care Plan</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Single parents with custody of children</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Dual-military couples with dependents</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marines with dependents who require special care (EFMP)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Any Marine whose family situation requires pre-planned care arrangements during deployment or TAD</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Consequences of Non-Compliance</h4>
          <p className="mt-2 text-sm text-red-700 dark:text-red-300">
            Per MCO 1040.31, failure to maintain a Family Care Plan is a disqualifying factor for reenlistment
            and affects worldwide deployability. Marines who cannot deploy due to family care issues may face
            administrative separation.
          </p>
        </div>
      </section>
    ),
    components: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family Care Plan Components</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 1754.6 (Family Care Plan Policy):</p>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Short-Term Care Provider</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Person who will care for dependents during short-term absences (less than 30 days)</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Long-Term Care Provider</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Person who will care for dependents during deployment or extended TAD</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Financial Arrangements</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Plan for financial support of dependents during absence</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Legal Documentation</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Power of Attorney, guardianship documents as required</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Medical Care</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Access to medical care for dependents, special needs considerations</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Transportation</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Plan for transporting dependents to care provider</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">7</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Contact Information</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Updated contact information for all parties</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Common Problems</h4>
          <ul className="mt-2 space-y-2 text-sm text-red-700 dark:text-red-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Care provider is unavailable when needed</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Financial arrangements are inadequate</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Legal documents are missing or expired</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Plan has not been tested</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Plan is not updated after changes in family circumstances</span></li>
          </ul>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Identify Marines who require Family Care Plans</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Verify plans are complete and certified before deployment</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure Marines test their plans during unit training</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Report deficiencies up the chain</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Refer Marines to legal assistance for documentation needs</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Testing the Plan</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Family Care Plans must be tested during unit training events to ensure they work. A plan that looks
            good on paper may fail when the care provider is unavailable or transportation is not feasible.
            Test the plan before deployment, not during.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
