"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "process", label: "The Process" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function FollowOnCounselingSessionsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Follow-On Counseling Sessions</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Follow-on counseling sessions continue the development process established in the Initial Counseling Session.
            These sessions review progress, adjust goals, and address new challenges. Effective leaders counsel continuously,
            not just at required intervals.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Counseling Frequency</h4>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>At minimum, conduct formal counseling at required occasions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Monthly follow-on sessions are a good standard</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Counsel more frequently for new Marines or those needing additional guidance</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Informal coaching and mentoring occurs daily</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Formal vs Informal</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Setting</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Documentation</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Formal</td>
                  <td className="py-2 pr-4">Scheduled, private setting</td>
                  <td className="py-2">Documented in Marine Leader Notebook</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Informal</td>
                  <td className="py-2 pr-4">On-the-spot, during daily operations</td>
                  <td className="py-2">Brief notes as needed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    purpose: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Purpose of Follow-On Sessions</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Follow-on sessions serve multiple purposes in the Marine Leader Development framework:
          </p>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Review Progress on Goals</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Assess progress toward SMART goals established in previous sessions. Celebrate successes and identify obstacles.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Adjust Goals as Needed</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Circumstances change. Adjust goals to remain achievable while still challenging the Marine to grow.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Set New Targets</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Establish new short-term goals for the next period. Continue progress across all six functional areas.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Address Current Challenges</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Discuss any issues affecting performance, morale, or readiness. Problem-solve together.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Provide Feedback</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Give specific, constructive feedback on performance. Reinforce positive behaviors and address deficiencies.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Maintain the Relationship</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Regular sessions reinforce that you are invested in the Marine's development and well-being.</p>
          </div>
        </div>
      </section>
    ),
    process: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Conducting the Session</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Follow the same counseling process as outlined in NAVMC 2795:
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Preparation</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Review notes from previous sessions. Assess progress on goals. Identify topics to discuss. Have the Marine prepare inputs.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Opening</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Set the agenda. Create a positive climate. Review the purpose of the session.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Main Body</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Review progress on previous goals. Discuss performance since last session. Address any challenges. Provide feedback and guidance.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Closing</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Set new targets for the next period. Agree on action items. Schedule the next session.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Follow-Up</h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Document the session. Monitor progress. Continue informal coaching until the next formal session.</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Session Agenda Template</h4>
          <ol className="mt-2 space-y-2 text-sm text-amber-700 dark:text-amber-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Review previous goals and progress</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Discuss current performance</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Address any functional area concerns</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Set new SMART goals</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Schedule next session</span></li>
          </ol>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Schedule follow-on sessions in advance</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Review previous session notes before each meeting</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Track progress on goals across all six functional areas</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provide specific, actionable feedback</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Adjust counseling frequency based on individual needs</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Document all formal counseling sessions</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Common Mistakes</h4>
          <ul className="mt-2 space-y-2 text-sm text-red-700 dark:text-red-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Canceling or rescheduling counseling sessions too often</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Not reviewing previous session notes</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Failing to follow up on goals from previous sessions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Only counseling when problems arise</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Using counseling as punishment rather than development</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="font-semibold text-green-800 dark:text-green-200">Signs of Effective Counseling</h4>
          <ul className="mt-2 space-y-2 text-sm text-green-700 dark:text-green-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span>Marines look forward to counseling sessions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span>Goals are being achieved or adjusted appropriately</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span>Marines proactively seek guidance</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span>Performance and morale improve over time</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
