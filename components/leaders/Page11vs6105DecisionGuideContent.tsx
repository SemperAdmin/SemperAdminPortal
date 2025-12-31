"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "decision-matrix", label: "Decision Matrix" },
  { id: "key-differences", label: "Key Differences" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function Page11vs6105DecisionGuideContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Page 11 vs 6105 Decision Guide</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Page 11 entries and 6105 counseling entries are both documented in the Marine's Official Military Personnel File (OMPF),
            but they serve different purposes and carry different consequences. Choosing the wrong tool undermines your corrective
            action and creates problems if separation becomes necessary.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Page 11 Entry</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Per MCO P1070.12K (IRAM)</p>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Documents events, counseling, achievements, and administrative actions. Becomes part of the permanent record.
              Applies to all Marines (enlisted and officer).
            </p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">6105 Entry</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Per MCO P1900.16 (MARCORSEPMAN) Paragraph 6105</p>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              A formal written warning that failure to correct deficiencies may result in administrative separation.
              Applies only to enlisted Marines.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Four Required Elements of a 6105</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Per MCO P1900.16, a valid 6105 must contain all four elements. If any element is missing, the entry is a Page 11, not a 6105, regardless of what it is titled:
          </p>
          <ol className="mt-3 space-y-2 text-sm text-amber-700 dark:text-amber-300">
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800 dark:bg-amber-800 dark:text-amber-200">1</span>
              <span>Written notification of the specific deficiency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800 dark:bg-amber-800 dark:text-amber-200">2</span>
              <span>Specific recommendations for corrective action and available assistance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800 dark:bg-amber-800 dark:text-amber-200">3</span>
              <span>Comprehensive explanation of consequences, including potential separation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800 dark:bg-amber-800 dark:text-amber-200">4</span>
              <span>Reasonable opportunity to undertake corrective action</span>
            </li>
          </ol>
        </div>
      </section>
    ),
    "decision-matrix": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Decision Matrix</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Use this matrix to determine the appropriate documentation tool based on the situation.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/15 dark:bg-black/40">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Situation</th>
                <th className="px-4 py-3 text-center font-semibold text-zinc-900 dark:text-zinc-100">Page 11</th>
                <th className="px-4 py-3 text-center font-semibold text-zinc-900 dark:text-zinc-100">6105</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <tr>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">First minor performance deficiency</td>
                <td className="px-4 py-3 text-center text-green-600 dark:text-green-400">Yes</td>
                <td className="px-4 py-3 text-center text-red-600 dark:text-red-400">No</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-800/25">
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Pattern of minor deficiencies after counseling</td>
                <td className="px-4 py-3 text-center text-amber-600 dark:text-amber-400">Consider</td>
                <td className="px-4 py-3 text-center text-green-600 dark:text-green-400">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Single serious misconduct incident</td>
                <td className="px-4 py-3 text-center text-amber-600 dark:text-amber-400">Depends on severity</td>
                <td className="px-4 py-3 text-center text-green-600 dark:text-green-400">Yes</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-800/25">
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">PFT/CFT failure</td>
                <td className="px-4 py-3 text-center text-blue-600 dark:text-blue-400">Required per MCO 6100.13A</td>
                <td className="px-4 py-3 text-center text-blue-600 dark:text-blue-400">Required per MCO 6100.13A</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Failure affecting reenlistment eligibility</td>
                <td className="px-4 py-3 text-center text-green-600 dark:text-green-400">Yes</td>
                <td className="px-4 py-3 text-center text-green-600 dark:text-green-400">Yes</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-800/25">
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Conduct warranting separation consideration</td>
                <td className="px-4 py-3 text-center text-red-600 dark:text-red-400">No</td>
                <td className="px-4 py-3 text-center text-green-600 dark:text-green-400">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Officer misconduct</td>
                <td className="px-4 py-3 text-center text-green-600 dark:text-green-400">Yes</td>
                <td className="px-4 py-3 text-center text-red-600 dark:text-red-400">No (6105 is enlisted only)</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-800/25">
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Achievement or positive event</td>
                <td className="px-4 py-3 text-center text-green-600 dark:text-green-400">Yes</td>
                <td className="px-4 py-3 text-center text-red-600 dark:text-red-400">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Use a Page 11 When</h4>
            <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Documenting a first-time minor deficiency</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Recording positive events or achievements</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Documenting incidents for the record without separation intent</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Counseling an officer on conduct or performance issues</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Recording administrative actions (NJP results, waivers, etc.)</span></li>
            </ul>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Use a 6105 When</h4>
            <ul className="mt-2 space-y-2 text-sm text-red-700 dark:text-red-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>The deficiency is serious enough to warrant separation if not corrected</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Previous counseling (formal or informal) failed to correct behavior</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>You need to establish a formal record for potential separation</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>The Marine's conduct or performance falls below retention standards</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Consecutive PFT/CFT failures occur (separation consideration required)</span></li>
            </ul>
          </div>
        </div>
      </section>
    ),
    "key-differences": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Differences</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Understanding these differences is critical to selecting the appropriate documentation tool.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/15 dark:bg-black/40">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Question</th>
                <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Page 11</th>
                <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">6105</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Who does it apply to?</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">All Marines</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Enlisted only</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-800/25">
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Triggers separation?</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">No</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Yes (if uncorrected)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Rebuttal timeline</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">30 days</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">5 working days</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-800/25">
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Required elements</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Factual statement, counseling provided</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Four specific elements</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Affects reenlistment?</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Depends on content</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Page 11 Entry Details</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Documents facts and counseling provided</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marine signs acknowledging receipt (not agreement)</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marine has 30 days to submit rebuttal</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Becomes permanent part of OMPF</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Does not by itself trigger separation processing</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Applies to all Marines (enlisted and officer)</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">6105 Entry Details</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Formal warning of potential administrative separation</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Must contain four required elements</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marine has 5 working days to submit rebuttal</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>One valid 6105 is sufficient to initiate separation processing</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Applies only to enlisted Marines</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Creates promotion and reenlistment restrictions</span></li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Impact on Fitness Reports</h4>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">Per MCO 1610.7B Chapter 5:</p>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Receipt of a Page 11 formal counseling (6105) does not automatically constitute derogatory material on the next fitness report</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Reporting officials must consider the substance of the entry to determine if it renders the fitness report adverse</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>The entry must be in the Marine's OMPF prior to submission of the fitness report</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>All Page 11 and 6105 counselings should be submitted to the OMPF regardless of content</span></li>
          </ul>
        </div>
      </section>
    ),
    "common-mistakes": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Mistakes</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Avoid these common errors that can undermine your corrective action or create legal problems.
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Mistakes to Avoid</h4>
          <ul className="mt-3 space-y-3 text-sm text-red-700 dark:text-red-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <div>
                <span className="font-medium">Using 6105 as a "stronger" Page 11</span>
                <p className="mt-1 text-red-600 dark:text-red-400">A 6105 is not just a more serious Page 11—it carries separation implications. If you don't intend to consider separation, use a Page 11.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <div>
                <span className="font-medium">Issuing a 6105 to an officer</span>
                <p className="mt-1 text-red-600 dark:text-red-400">6105 applies only to enlisted Marines. Officers receive Page 11 entries for conduct and performance issues.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <div>
                <span className="font-medium">Missing one of the four required elements</span>
                <p className="mt-1 text-red-600 dark:text-red-400">If any of the four elements is missing, the entry is legally a Page 11, not a 6105, regardless of the title.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <div>
                <span className="font-medium">Failing to give reasonable time to correct deficiencies</span>
                <p className="mt-1 text-red-600 dark:text-red-400">The Marine must have a reasonable opportunity to correct behavior before separation can be initiated.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <div>
                <span className="font-medium">Using a Page 11 when separation should be considered</span>
                <p className="mt-1 text-red-600 dark:text-red-400">For serious or repeated deficiencies, a 6105 establishes the proper foundation for separation if necessary.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <div>
                <span className="font-medium">Not documenting informal counseling first</span>
                <p className="mt-1 text-red-600 dark:text-red-400">For minor issues, attempt informal counseling first and document it in your leader notebook before escalating.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">When in Doubt</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            If you're unsure which tool to use, consult with your legal office before issuing the entry.
            The legal office can review the situation and ensure you're using the appropriate documentation tool
            with all required elements properly addressed.
          </p>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Follow this progression when addressing performance or conduct deficiencies.
          </p>
        </div>
        <ol className="space-y-3">
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Attempt Informal Counseling First</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">For minor issues, start with verbal counseling. Address the issue directly and set clear expectations.</p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Document Informal Counseling</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Record the date, topic, and outcome of informal counseling in your leader notebook for future reference.</p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Select the Appropriate Tool</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Based on severity and separation intent, choose Page 11 or 6105. Use the decision matrix to guide your choice.</p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Ensure All Required Elements</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">For 6105 entries, verify all four required elements are present before submission.</p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Give Opportunity to Correct</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Allow the Marine reasonable time to correct deficiencies. Follow up to verify improvement.</p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Follow Up and Document</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Document improvement or continued deficiency. If deficiency continues after 6105, initiate separation processing.</p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">7</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Consult Legal When Unsure</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">If unsure which tool to use or how to proceed, consult with your legal office before issuing the entry.</p>
              </div>
            </div>
          </li>
        </ol>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
