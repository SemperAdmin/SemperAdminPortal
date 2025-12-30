"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "How It Works" },
  { id: "key-points", label: "Key Points" },
  { id: "leader-duties", label: "Leader Duties" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "references", label: "References", type: "references" as const },
];

export function WritingAwardRecommendationsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Role in Awards</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Award recommendations begin with you. Your job is to identify Marines who performed above expectations
            and document their achievements in a way that justifies the award level. A well-written recommendation
            moves quickly through the chain of command. A poorly written one gets returned or delayed.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Remember</h4>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
            Not every Marine deserves an end-of-tour award. The act or service must exceed normal expectations
            to preserve the prestige of military decorations.
          </p>
        </div>
      </section>
    ),
    process: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Award Recommendation Process</h2>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Identify a Marine whose performance clearly exceeded expectations for their grade and experience</li>
            <li>Determine the appropriate award level based on the achievement or service period</li>
            <li>Complete the award recommendation form (NAVMC 11533 or OPNAV 1650/3)</li>
            <li>Write the Summary of Action (SOA) describing the specific achievements</li>
            <li>Draft the citation following required format and sentence structure</li>
            <li>Submit through iAPS (Improved Awards Processing System)</li>
            <li>The chain of command reviews and endorses</li>
            <li>The awarding authority approves, downgrades, or disapproves</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Summary of Action (SOA)</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Required for all Marine Corps personnel nominations</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Limited to two pages maximum</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Use the "print PDF" button in iAPS to verify length</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>All information in the citation must come from the SOA</span></li>
          </ul>
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
              <span><strong>Award Level:</strong> Must match the level of responsibility and impact, not just rank or time in billet.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>One Action, One Award:</strong> Each action or service period is covered by one award only. Do not submit separate awards for a collateral duty performed throughout an entire tour.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Sample Citations:</strong> Review sample citations in SECNAV M-1650.1, Appendix B, Chapter 2.</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quantify Achievements</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Strong award packages include measurable results:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Number of Marines trained or supervised</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Dollars saved or managed</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Missions completed or supported</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Equipment value maintained</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Percentage improvements achieved</span></li>
          </ul>
        </div>
      </section>
    ),
    "leader-duties": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Know your Marines and their accomplishments throughout their tour, not just at PCS time</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Document significant achievements as they occur - do not rely on memory at the end of tour</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Coordinate with S-1 early to understand command processing timelines</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Track pending awards on a spreadsheet and brief status to leadership regularly</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Review sample citations to understand correct format before writing</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Pro Tip</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Keep a running document for each of your Marines with notable achievements, dates, and quantifiable results.
            This makes award writing much easier when the time comes.
          </p>
        </div>
      </section>
    ),
    "common-mistakes": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mistakes to Avoid</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Waiting Until the Last Minute</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Starting an award package too late means it will not be ready for presentation before the Marine departs.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Overstating Accomplishments</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Inflating language or overstating achievements damages credibility and may result in downgrade or disapproval.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Vague Language</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Using vague terms instead of specific, measurable achievements weakens the justification.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Award Level Mismatch</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Recommending an award level that does not match the Marine's actual impact. The achievement must justify the level.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">No Quantified Results</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Failing to quantify results (number of Marines trained, dollars saved, missions completed) makes the package weak.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
