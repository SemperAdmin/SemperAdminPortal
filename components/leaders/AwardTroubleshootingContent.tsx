"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "common-causes", label: "Common Causes" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "documentation", label: "Documentation" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function AwardTroubleshootingContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Award Troubleshooting (Stuck Awards)</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Awards delayed in processing create frustration for Marines and leaders. Most delays result from
            administrative errors, missing documentation, or routing issues in iAPS. This guide helps you
            identify and resolve common problems with stuck awards.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Checking Award Status in iAPS</h3>
          <ol className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <div>
                <span className="font-medium">Access iAPS through MOL</span>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">Navigate to Marine Online and select the iAPS link.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <div>
                <span className="font-medium">Check Award Status</span>
                <ul className="mt-1 space-y-1 text-zinc-600 dark:text-zinc-400">
                  <li>• <strong>Pending:</strong> Award is waiting for action at a routing level</li>
                  <li>• <strong>Returned:</strong> Award was sent back for corrections</li>
                  <li>• <strong>Approved:</strong> Award is complete and should appear in MCTFS</li>
                  <li>• <strong>Disapproved:</strong> Award was denied</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <div>
                <span className="font-medium">Identify Where Award Is Stuck</span>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">The routing history shows which official currently has the award for action. Contact that office directly.</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Escalation Path</h4>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">If normal troubleshooting fails:</p>
          <ol className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
            <li>1. <strong>Admin Section</strong> - First point of contact for status checks</li>
            <li>2. <strong>S-1/Adjutant</strong> - Can contact higher headquarters</li>
            <li>3. <strong>Chain of Command</strong> - Request command emphasis</li>
            <li>4. <strong>MMMA</strong> - Final authority for awards in MCTFS</li>
          </ol>
          <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">MMMA Contact: (703) 784-9313 or MMMA website through MOL</p>
        </div>
      </section>
    ),
    "common-causes": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Causes of Stuck Awards</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/15 dark:bg-black/40">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50">
                <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Problem</th>
                <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Cause</th>
                <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <tr>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Award not appearing on MBS</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">iAPS not approved or MCTFS not updated</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Verify approval in iAPS, contact MMMA</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-800/25">
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Award stuck in routing</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Approving official has not acted</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Contact routing authority directly</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Award returned for corrections</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Format errors, missing information</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Review SECNAVINST 1650.1H requirements</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-800/25">
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Award waiting months</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Backlog at approval authority</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Escalate through chain of command</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Joint/other service award not showing</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Not entered in MCTFS</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Submit to MMMA for entry</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-800/25">
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Award approved but no certificate</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Certificate not generated</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">Request through admin section</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timeline Management</h3>
          <table className="mt-4 min-w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Award Type</th>
                <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Recommended Lead Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">End of Tour</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">90 days before transfer</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Retirement</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">120 days before retirement date</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Meritorious</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">30 days after achievement</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Combat/Valor</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">Submit as soon as feasible</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Posthumous</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">Priority processing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    ),
    troubleshooting: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Troubleshooting by Problem Type</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Award Stuck in Routing</h3>
          <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">Symptoms:</p>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Award shows "Pending" status for extended period</li>
            <li>• No action taken by approving authority</li>
          </ul>
          <p className="mt-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">Actions:</p>
          <ol className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>1. Identify current routing level in iAPS</li>
            <li>2. Contact that section directly (phone or email)</li>
            <li>3. Request status update and estimated timeline</li>
            <li>4. Escalate to your chain of command if no response</li>
            <li>5. Request expedited processing if Marine is PCSing or separating</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Award Returned for Corrections</h3>
          <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">Symptoms:</p>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Award shows "Returned" status</li>
            <li>• Comments indicate specific errors</li>
          </ul>
          <div className="mt-3 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Common Errors:</h4>
            <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
              <li>• Citation exceeds character limit (NAM: 240 characters, NCM: 300 characters)</li>
              <li>• Summary of Action does not support award level</li>
              <li>• Date discrepancies between documents</li>
              <li>• Missing or incorrect personal information</li>
              <li>• Improper formatting per SECNAVINST 1650.1H</li>
            </ul>
          </div>
          <p className="mt-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">Actions:</p>
          <ol className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>1. Review return comments carefully</li>
            <li>2. Correct all identified errors</li>
            <li>3. Review SECNAVINST 1650.1H for format requirements</li>
            <li>4. Resubmit through iAPS</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Award Approved but Not on MBS</h3>
          <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">Symptoms:</p>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• iAPS shows "Approved" status</li>
            <li>• Award does not appear on Master Brief Sheet</li>
          </ul>
          <p className="mt-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">Actions:</p>
          <ol className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>1. Verify approval date in iAPS (MCTFS update takes time)</li>
            <li>2. Check if Unit Diary entry was processed</li>
            <li>3. Contact MMMA if award is not showing after 30 days</li>
            <li>4. Per MCO 1610.7B, MMMA is the only unit authorized to run UD entries for personal awards</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Joint or Other Service Award Not Showing</h3>
          <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">Actions:</p>
          <ol className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>1. Obtain copy of award documentation (certificate, orders)</li>
            <li>2. Submit to MMMA for USMC concurrence</li>
            <li>3. MMMA enters into MCTFS and provides copy to MMRP for OMPF</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Award Pending for PCS or EAS Marine</h3>
          <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">Actions:</p>
          <ol className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>1. Request expedited processing through chain of command</li>
            <li>2. Contact gaining command admin to track award</li>
            <li>3. Ensure forwarding address is current in MOL</li>
            <li>4. Follow up after transfer to verify award posted</li>
          </ol>
        </div>
      </section>
    ),
    documentation: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documentation</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1610.7B Appendix H, personal awards processed via iAPS must have specific documentation
            to be considered complete.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Awards Since 12 February 2018</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Completed NAVMC 11533 (Personal Award Recommendation, Summary of Action, Citation)</li>
              <li>• Signed certificate</li>
            </ul>
            <p className="mt-2 text-sm text-amber-600 dark:text-amber-400">
              Lack of NAVMC 11533 and/or signed certificate constitutes an incomplete record.
            </p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Awards 1 March 2008 to 12 February 2018</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Completed NAVMC 11533</li>
              <li>• Signed certificate beneficial but not required for OMPF completeness</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Awards 1 October 2000 to 1 March 2008</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• HQMC APS 1650 (may be in iAPS archive if missing)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Awards Prior to 1 October 2000</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• OPNAV 1650 or signed certificate</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OMPF Completeness Check</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Verify these documents are in the Marine's OMPF:</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>NAVMC 11533 or HQMC APS 1650 (depending on award date)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Summary of Action</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Citation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Signed certificate (required for awards after 12 Feb 2018)</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">What Awards Appear on MBS</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">Per MCO 1610.7B Appendix H:</p>
          <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            <li>• All personal awards (NAM and higher)</li>
            <li>• Combat Action Ribbons (CAR)</li>
            <li>• No unit awards display on MBS</li>
          </ul>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When Submitting Awards</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Verify all personal data matches MCTFS</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Check citation character count before submission</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure Summary of Action supports award level</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Review SECNAVINST 1650.1H formatting requirements</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Submit with adequate lead time (90 days for PCS/retirement awards)</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When Tracking Awards</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Check iAPS weekly for status updates</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Document all communications about the award</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Follow up immediately on returned awards</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Notify Marine of approval and certificate availability</span></li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Correcting Award Errors After Approval</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Wrong Information on Certificate</h4>
              <ul className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Contact admin section for correction</li>
                <li>• Reprint certificate with correct information</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Award Not in OMPF</h4>
              <ul className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Submit copy of award documentation to MMRP</li>
                <li>• Include cover letter requesting inclusion</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Wrong Award Level Approved</h4>
              <ul className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Cannot upgrade after approval</li>
                <li>• New award recommendation required for higher level</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
