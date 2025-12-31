"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "pillars", label: "Four Pillars" },
  { id: "bonus", label: "Bonus Points" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function JEPESOverviewContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">JEPES Overview (E-1 through E-4)</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Junior Enlisted Performance Evaluation System (JEPES) is the means by which Marines in the grades of
            Private through Corporal are evaluated and recommended for promotion. JEPES replaced the legacy Proficiency
            and Conduct system on 1 February 2021. Per MCO 1616.1, JEPES supports the promotion and retention of the
            highest quality Marines.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Concepts of JEPES</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 1616.1:</p>
          <div className="mt-3 space-y-3">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Transparency</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">The objective data and subjective command input attributes are viewable to the MRO and chain of command.</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Accuracy</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">75 percent of the PES score comes from objective scores recorded in MCTFS. The MRO and leadership must verify all information is current and accurate.</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Consistency</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">The chain of command must apply JEPES command input evaluation metrics uniformly. Personal biases and double standards are not acceptable.</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Accessibility</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">JEPES is accessible via MOL from government and personal devices.</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Efficient Processing</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">JEPES maximizes automated processes while facilitating appropriate human input.</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">How JEPES Works</h4>
          <ol className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Marine checks into unit. FLS establishes reporting chain.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>FLS provides initial written counseling within 30 days.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>MRO and FLS validate objective scores.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Reporting occasion occurs (SA, AN, TR, etc.).</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>FLS drafts command input marks no earlier than 45 days before end of reporting period.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Evaluation routes through Evaluator, Reviewer, to Approver.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Approver approves final marks.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>MRO is debriefed on the evaluation.</span></li>
          </ol>
        </div>
      </section>
    ),
    pillars: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The Four Pillars of JEPES</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1616.1, the PES score is comprised of four equally weighted pillars, each worth 25 percent (maximum 250 points):
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Reference</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Pillar</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Weight</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Components</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Warfighting</td>
                  <td className="py-2 pr-4">25%</td>
                  <td className="py-2">Rifle (12.5%), MCMAP (12.5%)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Physical Toughness</td>
                  <td className="py-2 pr-4">25%</td>
                  <td className="py-2">PFT (12.5%), CFT (12.5%)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Mental Agility</td>
                  <td className="py-2 pr-4">25%</td>
                  <td className="py-2">MOS Courses (50%), MarineNet (20%), Degrees (10%), Self-Ed (20%)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Command Input</td>
                  <td className="py-2 pr-4">25%</td>
                  <td className="py-2">Character, MOS/Mission, Leadership (0.0-5.0 scales)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mental Agility Breakdown</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>MOS Courses/Qualifications: 50% of Mental Agility (100 pts max)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>MarineNet: 20% of Mental Agility (40 pts max)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Degrees: 10% of Mental Agility (20 pts max)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Self-Education In-Grade: 10% of Mental Agility (20 pts max)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Self-Education In-Service: 10% of Mental Agility (20 pts max)</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command Input Categories</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Individual Character:</strong> 0.0-5.0 scale</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>MOS/Mission Accomplishment:</strong> 0.0-5.0 scale</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Leadership:</strong> 0.0-5.0 scale</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Average of three categories multiplied to max 250 points</span></li>
          </ul>
        </div>
      </section>
    ),
    bonus: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Bonus Points</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marines may earn bonus points added to the total PES score:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>DI School: 50 points</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Recruiter School: 50 points</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>MSG School: 50 points</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Combat Instructor: 50 points</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>MC Security Forces: 50 points</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Command Recruiting Bonus: Up to 100 points</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Maximum PES Score</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Maximum PES Score: 1000 points (plus up to 100 bonus points from Command Recruiting)
          </p>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Establish reporting chains for all E-4 and below Marines</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provide initial counseling within 30 days of relationship</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Verify objective scores are accurate in MCTFS</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Submit recommended marks no earlier than 45 days before reporting period ends</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Debrief Marines on their evaluations</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
