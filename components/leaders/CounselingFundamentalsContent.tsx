"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Types of Counseling" },
  { id: "process", label: "The Process" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function CounselingFundamentalsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is Counseling?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Counseling is two-way communication between a senior and junior Marine to help the junior achieve or maintain
            the highest possible level of performance. Counseling is positive and forward-looking. It focuses on improving
            future performance.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Counseling vs Performance Evaluation</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Activity</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Focus</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Performance Evaluation</td>
                  <td className="py-2">Past performance</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Counseling</td>
                  <td className="py-2">Improving and maintaining future performance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Per MCO 1500.61</h4>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Counseling allows the senior to identify areas of excellence and deficiency</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Counseling allows the junior to ask questions and seek guidance</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Counseling primarily focuses on actions that have already occurred, but teaching and coaching occur within counseling</span></li>
          </ul>
        </div>
      </section>
    ),
    types: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Counseling</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Choose the approach that best fits the situation and the Marine's maturity level.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Directive Counseling</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The senior carries the conversation, analyzes the situation, develops a solution, and tells the junior what to do.
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            <strong>When to use:</strong> When the situation requires immediate correction or the junior lacks experience.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Nondirective Counseling</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The senior asks questions, listens, and draws the junior out. The junior analyzes the situation and develops the solution.
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            <strong>When to use:</strong> To help the junior become more mature and develop personal resources.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Collaborative Counseling</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The senior and junior work as a team to diagnose problems and develop solutions.
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            <strong>When to use:</strong> This approach offers the most flexibility and promotes joint ownership of outcomes.
          </p>
        </div>
      </section>
    ),
    process: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The Counseling Process (NAVMC 2795)</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The counseling process has five steps:
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Preparation</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Review the Marine's performance. Determine objectives for the session. Have the Marine provide inputs. Set the agenda.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Opening</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">State expectations for the meeting. Establish a good climate.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Main Body</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Discuss performance. Set targets. Solve problems. Give feedback. Listen actively.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Closing</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Plan for improvement. Agree on targets for the next period.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Follow-Up</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Make personal counseling notes. Monitor performance. Continue the process.</p>
              </div>
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
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Conduct Initial Counseling Sessions (ICS) within 30 days of establishing a new senior/junior relationship</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Conduct follow-on counseling at regular intervals and when significant events occur</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Prepare for each session by reviewing the Marine's performance</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Set clear targets for the next period</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Document counseling sessions using Marine Leader Notebooks or similar tools</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Follow up on targets established in previous sessions</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
