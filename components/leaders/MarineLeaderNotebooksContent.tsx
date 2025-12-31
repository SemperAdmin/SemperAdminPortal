"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "what-to-document", label: "What to Document" },
  { id: "guidelines", label: "Guidelines" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function MarineLeaderNotebooksContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine Leader Notebooks</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marine Leader Notebooks are the primary tool for documenting counseling sessions, tracking goals, and
            maintaining records of Marine development. NAVMC 2795 provides guidance on their use. Documentation
            supports continuity, accountability, and informed decision-making.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Why Document?</h4>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Tracks progress toward goals over time</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Provides continuity when leadership changes</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Supports fitness report and JEPES mark justification</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Creates a record for administrative actions if needed</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Demonstrates that leadership development is occurring</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Documentation</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Document</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Purpose</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Retention</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Marine Leader Notebook</td>
                  <td className="py-2 pr-4">Counseling notes, goals, observations</td>
                  <td className="py-2">Duration of RS relationship</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Counseling Worksheet (NAVMC 2795)</td>
                  <td className="py-2 pr-4">Formal session documentation</td>
                  <td className="py-2">1 year minimum</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Page 11 Entry</td>
                  <td className="py-2 pr-4">Official counseling record</td>
                  <td className="py-2">Permanent record</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    "what-to-document": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What to Document</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Document information that supports Marine development and leadership decision-making:
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Counseling Sessions</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Date, time, and type of session</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Topics discussed</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Goals established or reviewed</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Progress on previous goals</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Targets for the next period</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Follow-up actions required</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Performance Observations</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Specific examples of excellence or deficiency</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Mission accomplishments</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Training achievements</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Leadership demonstrated</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Corrective actions taken</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SMART Goals by Functional Area</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Goals in each of the six functional areas</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Target dates and milestones</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Progress updates at each session</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Goal completions and new goals set</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrative Information</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>PME status and completion dates</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>PFT/CFT scores</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Training qualifications</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Awards submitted and received</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Key career milestones</span></li>
          </ul>
        </div>
      </section>
    ),
    guidelines: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Documentation Guidelines (NAVMC 2795)</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Follow these guidelines to maintain effective and appropriate documentation:
          </p>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Be Objective</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Document facts and specific observations. Avoid subjective opinions or judgments that cannot be supported.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Be Specific</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Use specific examples with dates, times, and circumstances. "Good performance" is vague; "Led the platoon's top squad in the competition on 15 Jan" is specific.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Be Timely</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Document observations and sessions as soon as possible. Memory fades, and timely documentation is more accurate.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Be Balanced</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Document both positive and negative observations. A notebook with only negative entries does not reflect reality.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Maintain Confidentiality</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Keep notebooks secure. Information shared in counseling is sensitive. Only share with those who have a need to know.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Facilitate Transitions</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">When transferring responsibility, provide relevant notes to the gaining leader. This ensures continuity of development.</p>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Privacy Considerations</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Marine Leader Notebooks may contain sensitive personal information. Store them securely and dispose of them
            properly when no longer needed. Some information shared in counseling should not be documented in writing.
          </p>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Maintain a Marine Leader Notebook for each subordinate</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Document counseling sessions within 24-48 hours</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Record significant observations as they occur</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Use documentation to support fitness reports and JEPES marks</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Transfer relevant information to gaining leaders during turnover</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Protect sensitive information and maintain confidentiality</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Common Mistakes</h4>
          <ul className="mt-2 space-y-2 text-sm text-red-700 dark:text-red-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Not keeping a notebook at all</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Only documenting negative events</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Waiting too long to document, leading to inaccurate records</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Using vague language that cannot support evaluations</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Failing to transfer notes during leadership transitions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Leaving notebooks unsecured</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="font-semibold text-green-800 dark:text-green-200">Best Practices</h4>
          <ul className="mt-2 space-y-2 text-sm text-green-700 dark:text-green-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span>Review your notes before each counseling session</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span>Use a consistent format for easy reference</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span>Back up digital notebooks regularly</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span>Create a turnover brief for the gaining leader</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span>Schedule time weekly to update and organize notes</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
