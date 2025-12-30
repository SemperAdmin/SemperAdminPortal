"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: { references: Reference[] };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "requirements", label: "Transfer Requirements" },
  { id: "process", label: "Process" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function EducationBenefitsTransferContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Post-9/11 GI Bill Transfer of Entitlement
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Transfer of Entitlement (TOE) option allows service members to transfer unused Post-9/11 GI Bill benefits to their spouse or dependent children. This is a powerful benefit that can provide educational opportunities for your family, but it requires active duty status and a service commitment.
          </p>
          <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-800 dark:text-red-200">
              CRITICAL: You MUST transfer benefits while still on active duty. You CANNOT transfer benefits after separation. This decision must be made before your EAS/retirement.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Element</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirement</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Eligibility</td>
                  <td className="py-2">Active duty service members with Post-9/11 GI Bill eligibility</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Service Commitment</td>
                  <td className="py-2">4 additional years of service required</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Transfer Timing</td>
                  <td className="py-2">MUST be done while on active duty - cannot transfer after separation</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Recipients</td>
                  <td className="py-2">Spouse and/or dependent children</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Process</td>
                  <td className="py-2">Submit request via milConnect website</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Authority</td>
                  <td className="py-2">38 U.S.C. § 3319</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Can Receive Transferred Benefits</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Spouse</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Can use benefits immediately (even while you're still on active duty)</li>
                <li>No age restriction</li>
                <li>Benefits remain valid after divorce (if already transferred)</li>
                <li>Must be married at time of transfer approval</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dependent Children</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Cannot use benefits until you complete 10 years of service (or separate, if earlier)</li>
                <li>Must be enrolled in DEERS at time of transfer</li>
                <li>Can use until age 26 (regardless of dependency status)</li>
                <li>Each child can receive separate allocation of months</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Considerations</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span><strong>Cannot Undo:</strong> Once transferred and command approves service commitment, you cannot revoke the transfer (but you can change allocation amounts or recipients)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span><strong>You Keep Remainder:</strong> Any unused months remain yours to use after you separate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span><strong>Total = 36 Months:</strong> Combined use between you and family members cannot exceed 36 months total</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span><strong>Must Complete Commitment:</strong> If you fail to complete the 4-year obligation, transfer may be revoked</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Example Scenario</h3>
          <div className="mt-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              SSgt Smith has 8 years of service and is eligible for the full 36 months of Post-9/11 GI Bill. She decides to transfer:
            </p>
            <ul className="mt-2 text-sm text-blue-700 dark:text-blue-300 list-disc list-inside">
              <li>12 months to spouse (for associate degree)</li>
              <li>12 months to child #1 (for bachelor's degree)</li>
              <li>12 months to child #2 (for vocational training)</li>
            </ul>
            <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
              She incurs a 4-year service commitment. If her spouse only uses 10 months and child #1 uses all 12 months, SSgt Smith can reallocate the 2 unused months from spouse to herself or other family members before they use them.
            </p>
          </div>
        </section>
      </div>
    ),

    requirements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Transfer Requirements
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            To transfer Post-9/11 GI Bill benefits to family members, you must meet specific eligibility requirements and incur a service commitment.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility Requirements</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">You Must:</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Be eligible for Post-9/11 GI Bill (at least 90 days of aggregate service after Sept 10, 2001)</li>
                <li>Be serving on active duty or in Selected Reserve on date of approval</li>
                <li>Have completed at least 6 years of service (active or Selected Reserve)</li>
                <li>Agree to serve 4 additional years from date of election</li>
                <li>Complete transfer request while still on active duty</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family Members Must:</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Be enrolled in DEERS at time of transfer</li>
                <li>Spouse: Married at time of transfer</li>
                <li>Children: Listed as dependents in DEERS</li>
                <li>Apply for and use benefits according to VA rules</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Service Commitment</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Transferring benefits requires a 4-year service commitment. Understanding this obligation is critical.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Situation</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Service Commitment</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Active Duty Member</td>
                  <td className="py-2">4 years from date of election/approval</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Selected Reserve Member</td>
                  <td className="py-2">4 years from date of election/approval</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Cannot Complete 4 Years (retiring)</td>
                  <td className="py-2">Commitment until retirement if less than 4 years until mandatory retirement</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Fail to Complete Commitment</td>
                  <td className="py-2">Transfer may be revoked (unless separated for hardship, medical, force shaping, etc.)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
              The 4-year commitment starts when your transfer request is approved, NOT when you submit it. Plan accordingly if you're close to your EAS.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-red)]">Approaching Retirement</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                If you're within 4 years of mandatory retirement, you can still transfer benefits but your commitment extends only to your retirement date. For example, if you have 2 years until mandatory retirement, your commitment is 2 years, not 4.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-red)]">Pending EAS</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                If your current contract ends before you could complete 4 years, you MUST extend or reenlist to fulfill the commitment. The transfer will not be approved without sufficient obligated service.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-red)]">Involuntary Separation</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                If you're involuntarily separated (RIF, medical separation, etc.) before completing the 4-year obligation, the transfer typically remains valid. Voluntary separation may result in revocation.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-red)]">Divorce After Transfer</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                If you divorce after transfer is approved, your ex-spouse retains the transferred benefits. You cannot revoke them. However, you can reallocate any unused months to other family members or yourself.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timeline Restrictions</h3>
          <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Critical Deadline</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              You CANNOT transfer benefits after separation from active duty. Even if you're eligible and previously qualified, once you separate, the option to transfer is permanently closed. This is the most common mistake Marines make—waiting too long to decide.
            </p>
          </div>
          <div className="mt-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Best Practice</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              If you're on the fence about transferring, submit the request while you're still on active duty and have time remaining. You can always modify the amount or recipients later, but you cannot initiate transfer after separation.
            </p>
          </div>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Transfer Process
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The transfer process is completed online through the milConnect website. The process requires command approval and creates a service obligation.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step-by-Step Transfer Process</h3>
          <ol className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <div>
                <strong>Verify Eligibility</strong>
                <p className="mt-1">Ensure you meet all requirements: 6+ years service, Post-9/11 GI Bill eligible, on active duty, can incur 4-year commitment</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <div>
                <strong>Ensure Family Members in DEERS</strong>
                <p className="mt-1">Verify spouse and children are enrolled in DEERS. Update DEERS at IPAC/admin if needed.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <div>
                <strong>Access milConnect</strong>
                <p className="mt-1">Log into <a href="https://milconnect.dmdc.osd.mil" className="text-[var(--sa-red)] underline hover:no-underline">milconnect.dmdc.osd.mil</a> using your CAC or DS Logon</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <div>
                <strong>Navigate to Transfer of Education Benefits (TEB)</strong>
                <p className="mt-1">Select "Education" then "Transfer of Education Benefits" from the menu</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <div>
                <strong>Review Your Information</strong>
                <p className="mt-1">Verify your service history, Post-9/11 GI Bill eligibility, and family member information</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
              <div>
                <strong>Select Recipients and Allocate Months</strong>
                <p className="mt-1">Choose spouse and/or children. Allocate months to each (total cannot exceed 36 months). You can change allocations later.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">7</span>
              <div>
                <strong>Acknowledge Service Commitment</strong>
                <p className="mt-1">Agree to 4-year service obligation. Read carefully - this is a binding commitment.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">8</span>
              <div>
                <strong>Submit Request</strong>
                <p className="mt-1">Electronically submit your transfer request through milConnect</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">9</span>
              <div>
                <strong>Command Approval</strong>
                <p className="mt-1">Your command reviews and approves/disapproves the request. This typically takes a few days to weeks.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">10</span>
              <div>
                <strong>Receive Notification</strong>
                <p className="mt-1">You'll be notified via milConnect when approved. Service commitment begins on approval date.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">After Transfer is Approved</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family Members Apply for Benefits</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Recipients must apply for VA education benefits using VA Form 22-1990e (Dependents' Application). They apply when ready to use benefits, not immediately after transfer.
              </p>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Spouse: Can use immediately</li>
                <li>Children: Can use after you complete 10 years or separate (whichever is first)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Modify Transfer</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                You can log back into milConnect to:
              </p>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Change month allocations (reallocate unused months)</li>
                <li>Add new family members (if you marry or have children)</li>
                <li>Revoke unused months from one recipient and give to another</li>
                <li>Revoke all transferred benefits back to yourself (only unused months)</li>
              </ul>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 italic">
                Note: Once a family member uses months, those months are gone. You can only modify unused months.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Transfer Scenarios</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Scenario 1: Transfer All to Spouse</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Marine transfers all 36 months to spouse for bachelor's degree. Spouse uses 30 months. Marine can reclaim the 6 unused months for personal use after separation.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Scenario 2: Split Among Children</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Marine transfers 18 months each to two children. Child #1 uses all 18 months. Child #2 uses only 12 months. Marine can take back the 6 unused months or reallocate to another family member.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Scenario 3: Initial Transfer, Later Addition</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Marine transfers 20 months to spouse while on active duty. After separation, has first child. While Marine can no longer add new transfers after separation, can modify the existing transfer while still on active duty to include the new child (if on active duty when child is born) or reallocate unused spouse months after separation.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Need Help?</h3>
          <div className="mt-3 space-y-2">
            <div className="rounded-lg border border-black/10 p-3 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Education Center</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Your base education center can walk you through the transfer process and answer questions
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-3 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VA Education Call Center</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                1-888-GIBILL-1 (1-888-442-4551) for questions about GI Bill and transfer
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-3 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">milConnect Support</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Technical issues with milConnect: contact DMDC support at 1-800-538-9552
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Transfer of Benefits Checklist
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before You Transfer</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Verify you have at least 6 years of service",
              "Confirm Post-9/11 GI Bill eligibility",
              "Ensure you can incur 4-year service commitment (or extend/reenlist)",
              "Verify all family members are in DEERS",
              "Decide how many months to transfer and to whom",
              "Discuss with family members (especially spouse if considering transfer to children)",
              "Understand you CANNOT transfer after separation",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Transfer Process</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Access milConnect website (https://milconnect.dmdc.osd.mil)",
              "Navigate to Transfer of Education Benefits (TEB)",
              "Select recipients and allocate months",
              "Review and accept 4-year service commitment",
              "Submit transfer request",
              "Wait for command approval",
              "Receive confirmation of approval and service commitment start date",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">After Transfer Approved</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Notify family members of transfer approval",
              "Provide recipients with information on VA Form 22-1990e",
              "Ensure family members understand when they can use benefits (spouse: now, children: after 10 years service)",
              "Track your service commitment end date",
              "Monitor family member usage via milConnect",
              "Modify allocations if needed (reallocate unused months)",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family Member Application (After Transfer)</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Family member completes VA Form 22-1990e (Dependents' Application)",
              "Submit application to VA when ready to use benefits",
              "Receive Certificate of Eligibility from VA",
              "Enroll in VA-approved school/program",
              "School certifies enrollment to VA",
              "VA pays benefits directly (tuition to school, BAH to student)",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
