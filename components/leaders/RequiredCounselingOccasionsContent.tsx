"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "mandatory", label: "Mandatory" },
  { id: "recommended", label: "Recommended" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function RequiredCounselingOccasionsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Understanding Required Counseling</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Certain occasions require formal counseling. These serve as minimum requirements. Effective leaders counsel
            more frequently based on circumstances and the needs of individual Marines.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Reference</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Occasion</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timing</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Initial Counseling Session</td>
                  <td className="py-2 pr-4">Within 30 days of new relationship</td>
                  <td className="py-2">Mandatory</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Fitness Report</td>
                  <td className="py-2 pr-4">Before submission</td>
                  <td className="py-2">Mandatory</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">JEPES Debrief</td>
                  <td className="py-2 pr-4">After marks approved</td>
                  <td className="py-2">Mandatory</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Promotion Eligibility</td>
                  <td className="py-2 pr-4">Upon eligibility</td>
                  <td className="py-2">Mandatory</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Joining New Unit</td>
                  <td className="py-2 pr-4">Within 30 days</td>
                  <td className="py-2">Mandatory</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">PCS</td>
                  <td className="py-2 pr-4">Before transfer</td>
                  <td className="py-2">Mandatory</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Force Preservation Assignment</td>
                  <td className="py-2 pr-4">Upon assignment</td>
                  <td className="py-2">Mandatory</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Billet Change</td>
                  <td className="py-2 pr-4">Upon significant change</td>
                  <td className="py-2">Mandatory</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Reenlistment Eligibility</td>
                  <td className="py-2 pr-4">Upon eligibility</td>
                  <td className="py-2">Recommended</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Major Life Events</td>
                  <td className="py-2 pr-4">As they occur</td>
                  <td className="py-2">Recommended</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    mandatory: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mandatory Counseling Occasions</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1500.61 and supporting references:
          </p>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">1. Establishment of RS/MRO Relationship</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Conduct initial counseling within 30 days of establishing a new senior/junior relationship.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">2. Issuance of Fitness Report</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Counsel the Marine on their fitness report before submission.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">3. Assignment of JEPES Marks (E-4 and below)</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Debrief the Marine on their JEPES worksheet after command input marks are approved.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">4. Eligibility for Promotion</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Counsel Marines on their promotion eligibility and what they need to do to improve competitiveness.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">5. Joining a New Unit</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Conduct initial counseling to establish expectations, duties, and goals.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">6. Permanent Change of Station (PCS)</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Counsel Marines on the transition, new assignment, and family readiness.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">7. Assignment to Force Preservation</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Counsel Marines assigned to medical, legal, or administrative holds.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">8. Major Changes in Billet Responsibilities</h4>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Counsel when duties change significantly.</p>
          </div>
        </div>
      </section>
    ),
    recommended: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Recommended Counseling Occasions</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            MCO 1500.61 identifies milestones and events that present opportunities for teaching and coaching:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Eligibility for reenlistment</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Birth of a child</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>PCS move</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Buying a first car or house</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Selection to a resident school</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Completion of special training</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">How It Works</h4>
          <ol className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Know when required counseling occasions occur</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Schedule formal sessions in advance</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Prepare an agenda for each session</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Document the session using Marine Leader Notebooks or counseling worksheets</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Set targets for the next period</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Follow up at the next session</span></li>
          </ol>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Track upcoming counseling occasions for all subordinates</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Schedule sessions in advance to allow preparation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Use the six functional areas as a framework for discussion</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Document all formal counseling sessions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Do not limit counseling to mandatory occasions. Effective leaders counsel continuously</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Common Mistakes</h4>
          <ul className="mt-2 space-y-2 text-sm text-red-700 dark:text-red-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Only counseling when something goes wrong</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Not preparing for formal counseling sessions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Not documenting counseling</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Not following up on targets from previous sessions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Treating counseling as a negative event rather than a development opportunity</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
