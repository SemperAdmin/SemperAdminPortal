"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "examples", label: "Examples by Area" },
  { id: "guidelines", label: "Guidelines" },
  { id: "references", label: "References", type: "references" as const },
];

export function SMARTGoalsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is a SMART Goal?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Effective development requires effective goal-setting. NAVMC 2795 and MCO 1500.61 both emphasize that goals
            must be clear, measurable, and actionable. SMART goals provide a framework that applies across all six functional areas.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SMART Framework</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Question</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Example</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Specific</td>
                  <td className="py-2 pr-4">What exactly will be done?</td>
                  <td className="py-2">"Complete Corporals Course DEP"</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Measurable</td>
                  <td className="py-2 pr-4">How will success be determined?</td>
                  <td className="py-2">"Score 80% or higher on all exams"</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Achievable</td>
                  <td className="py-2 pr-4">Is this realistic given resources?</td>
                  <td className="py-2">"Yes, with 2 hours study per week"</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Relevant</td>
                  <td className="py-2 pr-4">Does this support the mission?</td>
                  <td className="py-2">"Yes, required for promotion"</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Time-Bound</td>
                  <td className="py-2 pr-4">When will this be accomplished?</td>
                  <td className="py-2">"By 31 March"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SMART Explained</h3>
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Specific</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">The goal clearly defines what will be accomplished. Use action verbs: "to complete," "to achieve," "to pass," "to start." Define exactly what the Marine will do.</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Measurable</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">The goal includes standards to determine whether it has been achieved. Standards address quantity (how much), quality (how well), timeliness (when), or manner (how).</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Achievable</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">The goal is challenging but attainable. It should stretch the Marine to bring out their best, but not be impossible to accomplish.</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Relevant</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">The goal relates to the unit's mission, the Marine's duties, or their personal and professional development. The Marine should have a sense of ownership.</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Time-Bound</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">The goal includes a deadline or target date. This creates urgency and allows both leader and Marine to track progress.</p>
            </div>
          </div>
        </div>
      </section>
    ),
    examples: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SMART Goals by Functional Area</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Compare poor goals with SMART alternatives for each of the six functional areas.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fidelity</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p className="text-red-600 dark:text-red-400"><strong>Poor:</strong> "Improve your integrity."</p>
            <p className="text-green-600 dark:text-green-400"><strong>SMART:</strong> "Complete the Leading Marines DEP course on Marine Online by 15 March to strengthen your understanding of ethical leadership."</p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fighter</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p className="text-red-600 dark:text-red-400"><strong>Poor:</strong> "Get better at your MOS."</p>
            <p className="text-green-600 dark:text-green-400"><strong>SMART:</strong> "Achieve Combat Marksmanship Trainer qualification by the end of this quarter to increase your value to the section."</p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fitness</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p className="text-red-600 dark:text-red-400"><strong>Poor:</strong> "Get in shape."</p>
            <p className="text-green-600 dark:text-green-400"><strong>SMART:</strong> "Increase your PFT score from 245 to 270 by the July PFT by running three times per week and completing two additional crunches each session."</p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p className="text-red-600 dark:text-red-400"><strong>Poor:</strong> "Spend more time with family."</p>
            <p className="text-green-600 dark:text-green-400"><strong>SMART:</strong> "Establish a weekly family dinner on Wednesday evenings starting this month to maintain connection during the workup cycle."</p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Finances</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p className="text-red-600 dark:text-red-400"><strong>Poor:</strong> "Save more money."</p>
            <p className="text-green-600 dark:text-green-400"><strong>SMART:</strong> "Set up an automatic allotment of $200 per month to your savings account starting with the next pay period to build a $2,400 emergency fund by year's end."</p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Future</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p className="text-red-600 dark:text-red-400"><strong>Poor:</strong> "Think about your career."</p>
            <p className="text-green-600 dark:text-green-400"><strong>SMART:</strong> "Complete a written career roadmap identifying three goals for the next 12 months in each functional area by the end of this counseling cycle."</p>
          </div>
        </div>
      </section>
    ),
    guidelines: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Goal-Setting Guidelines from NAVMC 2795</h2>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <span>Targets should be challenging but attainable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <span>The Marine should have the authority and resources needed to achieve the targets</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <span>Targets should be important and related to the unit's mission or the Marine's duties</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <span>Limit targets to three to five per counseling session</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <span>The Marine should participate in the target-setting process to build ownership</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
              <span>Targets are not fixed. Adjust them if circumstances change</span>
            </li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Help Marines set SMART goals in each functional area</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Write goals down during counseling sessions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Review progress at each follow-on session</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Adjust goals when circumstances change</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Encourage Marines to take ownership of their goals</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Common Mistakes</h4>
          <ul className="mt-2 space-y-2 text-sm text-red-700 dark:text-red-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Setting vague goals without measurable standards</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Setting too many goals at once</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Not writing goals down</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Not following up on goals at subsequent sessions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Setting goals that are impossible given available resources or time</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
