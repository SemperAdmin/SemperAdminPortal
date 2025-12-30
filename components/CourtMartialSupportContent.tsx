"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "admin-support", label: "Admin Support Tasks" },
  { id: "documents", label: "Required Documents" },
  { id: "special-situations", label: "Special Situations" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function CourtMartialSupportContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Court-Martial Administrative Support
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Court-martial proceedings require extensive administrative support from the unit level. While legal professionals handle the judicial aspects, administrative personnel manage documentation, scheduling, witness coordination, and post-trial processing.
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Admin Role:</strong> Administrative specialists coordinate witness travel, maintain case files, process post-trial paperwork, and ensure proper filing of court-martial orders. Accuracy in documentation is critical as these are permanent legal records.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of Courts-Martial
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Summary Court-Martial (SCM):</strong> One officer, minor offenses, maximum 30 days confinement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Special Court-Martial (SPCM):</strong> Military judge and members, intermediate offenses, up to 1 year confinement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>General Court-Martial (GCM):</strong> Military judge and members, serious offenses, maximum punishments including death for certain offenses</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    "admin-support": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Administrative Support Tasks
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Trial Support</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Maintain accused's service record book availability</li>
                <li>• Coordinate witness travel orders and funding</li>
                <li>• Process pre-trial confinement paperwork if applicable</li>
                <li>• Track case milestones and report to command</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">During Trial</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Ensure witness availability and attendance</li>
                <li>• Provide service record documents as requested</li>
                <li>• Support command representative requirements</li>
                <li>• Track accused's duty status throughout proceedings</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Post-Trial Processing</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Process court-martial order upon receipt from LSSS</li>
                <li>• Update service record with conviction and sentence</li>
                <li>• Process pay adjustments for forfeitures</li>
                <li>• Coordinate with brig for confinement transfers</li>
                <li>• Initiate administrative separation if applicable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    ),
    documents: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Documents
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Purpose/Authority</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Witness Travel Orders</td>
                  <td className="py-2">Authorize witness travel to court location (JTR Chapter 7)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Court-Martial Convening Order</td>
                  <td className="py-2">Establishes the court and appoints members (MCM R.C.M. 504)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Court-Martial Order (CMO)</td>
                  <td className="py-2">Official record of conviction and sentence (MCM R.C.M. 1114)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">DD 214 (if applicable)</td>
                  <td className="py-2">Discharge document following punitive discharge</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Page 11 Entry</td>
                  <td className="py-2">Service record documentation of conviction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    "special-situations": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Special Situations
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Trial Confinement</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When the accused is in pre-trial confinement, admin coordinates with the brig for muster reports, mail routing, and visitation scheduling. Process DD 510 for confinement orders and ensure pay and allowances are properly adjusted.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Witness from Another Command</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When witnesses are assigned to other commands, coordinate through those commands for TAD orders. Ensure proper funding authorization and provide travel itinerary to the court. The witness's parent command retains responsibility for the member.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Appellate Leave</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Following conviction with a punitive discharge, the accused may be placed on appellate leave pending appeal. Admin processes the leave paperwork and maintains contact information. The Marine remains in the Marine Corps until appellate review is complete.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reduction in Grade</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When a court-martial sentence includes reduction in grade, admin processes the reduction effective on the date the sentence is adjudged (or approved, if sentence includes confinement). Update MOL and submit pay documents immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    troubleshooting: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems and Solutions
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Problem</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Solution</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Witness travel funding not available</td>
                  <td className="py-2">Coordinate with LSSS for central funding. May require unfunded travel order with reimbursement.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Court-martial order delayed</td>
                  <td className="py-2">Track with LSSS. Do not process pay forfeitures until CMO received.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Service record missing documents</td>
                  <td className="py-2">Reconstruct from unit files, previous commands, and OMPF. Notify trial counsel of any gaps.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Accused's pay continuing incorrectly</td>
                  <td className="py-2">Submit pay adjustment with CMO. Coordinate with IPAC for recoupment if overpaid.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
