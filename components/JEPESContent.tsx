"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCOLink } from "./ui/MCOLink";
import { MCO_URLS } from "@/data/references";


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
  { id: "overview", label: "Your Score" },
  { id: "what-you-control", label: "What You Control" },
  { id: "improve-score", label: "Improve Your Score" },
  { id: "check-score", label: "Check & Fix Issues" },
  { id: "understand-marks", label: "Understanding Your Marks" },
  { id: "references", label: "References", type: "references" as const },
];

export function JEPESContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Your JEPES Score Determines Your Promotion
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            If you're an E-2 through E-5, JEPES (Junior Enlisted Performance Evaluation System) is how the Marine Corps
            decides if you get promoted. Your JEPES score is compared to the monthly cutting score for your MOS.
            If your score meets or exceeds the cutting score, you get promoted.
          </p>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Good news: You have direct control over a significant portion of your score. Understanding JEPES
              helps you focus your efforts where they matter most.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            The Four Pillars of Your Score (Max 2100 pts)
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border-l-4 border-rose-500 bg-rose-50 p-4 dark:bg-rose-900/20">
              <h4 className="font-semibold text-rose-800 dark:text-rose-200">Mission Performance (50%)</h4>
              <p className="mt-1 text-sm text-rose-700 dark:text-rose-300">
                How well you do your job. Based on your supervisor's evaluation of your daily performance and accomplishments.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200">Individual Character (25%)</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Your discipline, integrity, and conduct. Based on how you carry yourself on and off duty.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-4 dark:bg-emerald-900/20">
              <h4 className="font-semibold text-emerald-800 dark:text-emerald-200">Warrior Skills (15%)</h4>
              <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">
                PFT, CFT, and rifle qualification. <strong>You directly control this.</strong>
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">PME Completion (10%)</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Professional Military Education. <strong>You directly control this.</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Where to Check Your Score
          </h3>
          <ol className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">1</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Log into <strong>Marine Online (MOL)</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">2</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Navigate to <strong>JEPES</strong> under Performance Evaluation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">3</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">View your current composite score and breakdown by pillar</span>
            </li>
          </ol>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Tip:</strong> Check your score regularly, especially before cutting scores are published.
              If something looks wrong, you have time to get it fixed.
            </p>
          </div>
        </section>
      </div>
    ),

    "what-you-control": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What YOU Directly Control (25%)
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            You have <strong>complete control</strong> over 25% of your score through Warrior Skills (15%) and PME (10%).
            These are objective measures - you earn points based on your scores, not someone's opinion.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Warrior Skills (15% of Your Score)
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Event</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Max Points</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">How to Maximize</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">PFT</td>
                  <td className="py-2 pr-4">Up to 7%</td>
                  <td className="py-2">Score 285+ for 1st Class points</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">CFT</td>
                  <td className="py-2 pr-4">Up to 5%</td>
                  <td className="py-2">Score 285+ for 1st Class points</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Rifle Qualification</td>
                  <td className="py-2 pr-4">Up to 3%</td>
                  <td className="py-2">Shoot Expert for maximum points</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Action:</strong> If you're not already maxing these events, here's where focused PT and range time pays off directly in promotion points.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PME Completion (10% of Your Score)
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Course</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">For Rank</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Points</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Lance Corporal's Seminar</td>
                  <td className="py-2 pr-4">LCpl</td>
                  <td className="py-2">2.5%</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Corporal's Course</td>
                  <td className="py-2 pr-4">Cpl</td>
                  <td className="py-2">5%</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Career Course (Resident)</td>
                  <td className="py-2 pr-4">Cpl/Sgt</td>
                  <td className="py-2">7.5%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Sergeant's Course</td>
                  <td className="py-2 pr-4">Sgt</td>
                  <td className="py-2">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Action:</strong> Complete your PME as early as possible. Don't wait until you need the points - they're "free" points you can earn ahead of time.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What You Influence (75%)
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Mission Performance (50%) and Individual Character (25%) are based on your supervisor's and commander's evaluation.
            You don't directly control the marks, but you absolutely influence them through your actions.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">How to Influence Your Marks</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Excel at your job duties</li>
                <li>• Take initiative on tasks</li>
                <li>• Document your accomplishments</li>
                <li>• Keep your supervisor informed</li>
                <li>• Maintain good conduct on and off duty</li>
                <li>• Request regular feedback</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Things That Hurt Your Marks</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• NJP or other disciplinary action</li>
                <li>• Page 11 entries</li>
                <li>• Poor performance on duties</li>
                <li>• Negative counseling</li>
                <li>• Problems with conduct</li>
                <li>• Not informing supervisor of accomplishments</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    "improve-score": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Improve Your JEPES Score
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Here's a practical action plan to maximize your score in each area.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Immediate Actions (This Month)
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Check your current JEPES score in MOL - know where you stand",
              "Verify your PFT, CFT, and rifle qual scores are correct and current",
              "Confirm your PME completion is recorded in the system",
              "If anything is wrong, go to S-1 NOW to get it fixed",
              "Calculate how many points you could gain from Warrior Skills improvements",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" readOnly />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Physical Training Plan
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            If you're not scoring 1st Class, focus here first - it's the biggest portion of what you directly control.
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Calculate your current PFT/CFT points vs. potential max",
              "Identify your weakest events (pullups, crunches, run, etc.)",
              "Create a training plan targeting weak areas",
              "Train consistently - improvement takes time",
              "Don't skip the CFT - it's 5% of your total score",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" readOnly />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PME Strategy
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Check what PME you've completed and what's next",
              "Enroll in MarineNet courses if available",
              "Put your name in for resident courses when eligible",
              "Complete PME EARLY - don't wait until you need the points",
              "Follow up to ensure completion is recorded in MCTFS",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" readOnly />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Mission Performance & Character (Supervisor Marks)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            This is 75% of your score. While you don't control the marks directly, you absolutely influence them.
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Document your accomplishments and share with your supervisor monthly",
              "Volunteer for challenging tasks and additional responsibilities",
              "Request regular feedback - don't wait for formal counseling",
              "If you mess up, own it and demonstrate improvement",
              "Maintain good conduct on AND off duty",
              "Build a positive relationship with your supervisor and chain of command",
              "Ask your supervisor directly: 'What can I do to get better marks?'",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" readOnly />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Rifle Qualification
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              "Know when your next qual is scheduled",
              "Practice fundamentals before range week",
              "Get extra coaching if needed",
              "Shoot Expert for maximum points (3% of total score)",
              "Verify your qual score is recorded correctly after qualification",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" readOnly />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),

    "check-score": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Check Your Score
          </h2>
          <ol className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">1</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Log into <strong>Marine Online (MOL)</strong> at mol.tfs.usmc.mil</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">2</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Click on <strong>Performance Evaluation</strong> → <strong>JEPES</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">3</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">View your <strong>Composite Score</strong> and breakdown by pillar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">4</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Compare to current <strong>Cutting Score</strong> for your MOS (published via MARADMIN monthly)</span>
            </li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What to Check for Errors
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              { check: "PFT score matches your last official PFT", common: "Score from old PFT or not entered at all" },
              { check: "CFT score matches your last official CFT", common: "Score missing or outdated" },
              { check: "Rifle qualification is current and correct", common: "Shows old qual or wrong score" },
              { check: "PME completion is recorded", common: "Completed PME but not in system" },
              { check: "Commander input has been entered", common: "Missing evaluation input" },
            ].map((item) => (
              <li key={item.check} className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" readOnly />
                  <div>
                    <div className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{item.check}</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Common issue: {item.common}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Something Is Wrong
          </h3>
          <ol className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">1</span>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Gather proof:</strong> Get a copy of your PFT/CFT scorecard, rifle qual card, PME certificate - whatever shows the correct information
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">2</span>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Go to S-1/Admin:</strong> Bring your documentation and explain the discrepancy
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">3</span>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Request correction in MCTFS:</strong> They will submit the correction to update your record
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">4</span>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Follow up:</strong> Check MOL in a few days to confirm the correction was made
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">5</span>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Allow processing time:</strong> Get corrections in well before cutting scores are published
              </div>
            </li>
          </ol>
        </section>

        <section className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Don't Wait</h4>
          <p className="mt-1 text-sm text-red-700 dark:text-red-300">
            Corrections take time. If you notice an error, get it fixed immediately. If you wait until cutting
            scores drop and you're below because of an error, you may miss that promotion month even if the
            error gets fixed later.
          </p>
        </section>
      </div>
    ),

    "understand-marks": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Understanding Your Commander Input Marks
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Your supervisor and commander evaluate you on Mission Performance (50%) and Individual Character (25%).
            Here's what those marks mean and how to view them.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who Evaluates You
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Immediate Supervisor</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Your NCO or team leader who sees your daily work. They provide the initial assessment.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reporting Senior</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Usually an SNCO who reviews and can modify the supervisor's assessment.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Commanding Officer</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Final approval authority. The CO signs off on your evaluation.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When You Get Evaluated
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
              <span><strong>At least annually</strong> - you should get evaluated every year minimum</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
              <span><strong>When you transfer</strong> - to a new unit or duty station</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
              <span><strong>When your supervisor changes</strong> - so the old supervisor can document your performance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
              <span><strong>Upon promotion</strong> - captures your performance at current grade</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
              <span><strong>For recognition</strong> - commander may direct an eval to capture exceptional performance</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If You Disagree With Your Marks
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If you believe your evaluation is unfair or doesn't accurately reflect your performance:
          </p>
          <ol className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">1</span>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Talk to your supervisor first:</strong> Ask what you can do to improve. Sometimes marks reflect things you weren't aware of.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">2</span>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Document specific concerns:</strong> Write down specific examples that counter the evaluation.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">3</span>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Request a formal review:</strong> You can request review through your chain of command.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">4</span>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Appeal if warranted:</strong> Formal performance evaluation appeals follow the process in <MCOLink mco="MCO 1610.7A" url={MCO_URLS.PES_PDF} />.
              </div>
            </li>
          </ol>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Proactive Is Better</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Don't wait for an evaluation to find out how you're doing. Request regular feedback from your
            supervisor. Keep them informed of your accomplishments. If there's an issue, you want to know
            about it and have a chance to fix it BEFORE it shows up in your evaluation.
          </p>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
