"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "areas", label: "The Six Areas" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function SixFunctionalAreasContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine Leader Development Framework</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            MCO 1500.61 establishes a holistic framework for developing Marines across six functional areas. These areas
            provide structure for coaching and counseling sessions. The sixth area, Future, ties all others together
            through goal-setting.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">How It Works</h4>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Leaders take a holistic approach to developing subordinates</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Use the six functional areas as a framework for counseling sessions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Address each area over time based on the Marine's needs and circumstances</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Set goals in each functional area during counseling sessions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Track progress and adjust goals as needed</span></li>
          </ul>
        </div>
      </section>
    ),
    areas: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Reference</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Functional Area</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Focus</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Example Topics</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Fidelity</td>
                  <td className="py-2 pr-4">Core values, ethics, heritage</td>
                  <td className="py-2">Integrity, moral courage, traditions</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Fighter</td>
                  <td className="py-2 pr-4">MOS proficiency, PME, skills</td>
                  <td className="py-2">Training, education, qualifications</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Fitness</td>
                  <td className="py-2 pr-4">Physical, mental, spiritual, social</td>
                  <td className="py-2">PFT/CFT, resilience, wellness</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Family</td>
                  <td className="py-2 pr-4">Relationships, support systems</td>
                  <td className="py-2">Spouse, children, dependents</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Finances</td>
                  <td className="py-2 pr-4">Financial responsibility</td>
                  <td className="py-2">Budgeting, savings, debt</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Future</td>
                  <td className="py-2 pr-4">Goal-setting in all areas</td>
                  <td className="py-2">SMART goals, career roadmap</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fidelity</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Faithfulness to one another, the Corps, and the Nation. This area addresses core values, leadership traits
            and principles, heritage, and ethical conduct. Fidelity is expressed through our motto "Semper Fidelis."
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fighter</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The skill-sets and knowledge that make Marines well-rounded warriors. This includes PME, MOS proficiency,
            interpersonal communication skills, and on and off-duty education. Fighter focuses on both individual and team training.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fitness</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Physical, mental, spiritual, and social health and well-being. Holistic well-being boosts morale, cohesiveness,
            and resiliency. Fitness helps Marines execute tough challenges and recuperate faster.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The fundamental social relationships from which Marines draw strength. Military life requires families to be
            resilient. Strong families make a stronger Corps.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Finances</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The disciplined practice of personal financial responsibility. Financially responsible Marines mitigate stress
            and are better prepared for deployments, family changes, major purchases, and transition to civilian life.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Future</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The practice of setting and accomplishing goals in all of the other five functional areas. Goal-setting maximizes
            the likelihood of personal and professional success. This carries through to civilian life.
          </p>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Know your Marines across all six functional areas</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Use each counseling session to address relevant functional areas</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Identify subject matter experts in your command who can assist (Chaplain, Family Readiness Officer, Force Fitness Instructor, Command Financial Specialist)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Share best practices with higher, adjacent, and subordinate commands</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Use Marine Leader Notebooks to track goals and progress</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Command Resources</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Leverage subject matter experts in your command: Chaplains for spiritual wellness, Family Readiness Officers
            for family support, Force Fitness Instructors for physical training, and Command Financial Specialists for
            money management.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
