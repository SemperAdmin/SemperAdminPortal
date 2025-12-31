"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "categories", label: "Categories" },
  { id: "marking", label: "Marking Guidelines" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function JEPESCommandInputMetricsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">JEPES Command Input Evaluation Metrics</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Command Input is one of the four pillars of JEPES, accounting for 25 percent of the PES score (maximum 250
            points). Per MCO 1616.1, the command input marks represent the chain of command&apos;s assessment of the
            Marine&apos;s performance during the reporting period.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">How Command Input Works</h4>
          <ol className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>FLS drafts marks (0.0-5.0) for each of three categories</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Evaluator reviews and recommends marks</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Reviewer reviews and recommends marks</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Approver approves final marks</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Average of three categories is converted to max 250 points</span></li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Score Calculation</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The three category marks are averaged and multiplied to produce the Command Input score (max 250 points).
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            <strong>Example:</strong> Individual Character 3.5 + MOS/Mission 3.5 + Leadership 3.0 = 10.0 ÷ 3 = 3.33 average × 50 = 166.5 points
          </p>
        </div>
      </section>
    ),
    categories: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command Input Categories</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1616.1, each category is marked on a scale of 0.0 to 5.0. Evaluators should consider the definitions below when assigning marks.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Individual Character</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Evaluates the Marine&apos;s adherence to Marine Corps core values: Honor, Courage, and Commitment.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Integrity, honesty, and ethical conduct</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Military bearing and appearance</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Respect for authority and peers</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Self-discipline and accountability</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Adherence to regulations and standards</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MOS/Mission Accomplishment</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Evaluates the Marine&apos;s ability to perform their assigned duties and contribute to mission success.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Technical proficiency in primary MOS</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Quality of work produced</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Initiative and problem-solving</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Reliability and dependability</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Contribution to unit mission</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leadership</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Evaluates the Marine&apos;s ability to lead, influence, and develop others regardless of rank.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ability to motivate and inspire</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Communication skills</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Decision-making under pressure</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Development of subordinates</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Teamwork and collaboration</span></li>
            </ul>
          </div>
        </div>
      </section>
    ),
    marking: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marking Guidelines</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1616.1, marks should reflect the Marine&apos;s performance during the reporting period:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Range</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Guidance</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">5.0-4.1</td>
                  <td className="py-2 pr-4">Exceptional</td>
                  <td className="py-2">Performance far exceeds standards. Reserved for top performers.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">4.0-3.1</td>
                  <td className="py-2 pr-4">Exceeds Standards</td>
                  <td className="py-2">Performance regularly exceeds what is expected.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">3.0-2.0</td>
                  <td className="py-2 pr-4">Meets Standards</td>
                  <td className="py-2">Performance meets expectations. Default starting point is 2.5.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">1.9-1.0</td>
                  <td className="py-2 pr-4">Working Toward Standards</td>
                  <td className="py-2">Performance does not yet meet standards. Requires improvement plan.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">0.9-0.1</td>
                  <td className="py-2 pr-4">Below Standards</td>
                  <td className="py-2">Significant deficiencies. Requires immediate intervention.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">0.0</td>
                  <td className="py-2 pr-4">Non Rec / Adverse</td>
                  <td className="py-2">Not recommended for promotion. Triggers NOT REC.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Distribution Guidance</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Per MCO 1616.1, marks should reflect actual performance, not forced distribution. However, leaders should be
            realistic: most Marines performing their duties competently should receive marks in the 2.5-3.5 range.
            Exceptional marks (4.0+) should be reserved for truly outstanding performance.
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Mark Inflation Warning</h4>
          <p className="mt-2 text-sm text-red-700 dark:text-red-300">
            Inflated marks harm Marines by creating unrealistic expectations and undermine the integrity of JEPES.
            Accurate marks serve both the Marine and the institution. Document specific examples to support marks above
            or below the "meets standards" range.
          </p>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Understand the three command input categories and their definitions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Apply marks consistently across all Marines</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Document specific examples to justify marks above or below "meets standards"</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Avoid mark inflation. Accurate marks serve Marines better than inflated ones.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Counsel Marines on areas for improvement before marking below standards</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
