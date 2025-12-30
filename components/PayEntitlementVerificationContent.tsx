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
  { id: "entitlements", label: "Entitlements" },
  { id: "verification", label: "Verification" },
  { id: "issues", label: "Issues" },
  { id: "sdp", label: "SDP Withdrawal" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Combat Pay End", description: "Day of departure from combat zone" },
  { element: "FSA End", description: "Day of return to dependents" },
  { element: "Tax Status", description: "Returns to normal withholding" },
  { element: "Timeline", description: "Changes appear 1-2 pay periods after return" },
  { element: "Action", description: "Verify LES, report discrepancies" },
];

const ENTITLEMENTS_END = [
  { entitlement: "Hostile Fire Pay (HFP)", when: "Day of departure from designated area" },
  { entitlement: "Imminent Danger Pay (IDP)", when: "Day of departure from designated area" },
  { entitlement: "Combat Zone Tax Exclusion", when: "Day of departure from combat zone" },
  { entitlement: "Family Separation Allowance", when: "Day of return to dependents" },
  { entitlement: "Hardship Duty Pay (if applicable)", when: "Day of departure from area" },
];

const ENTITLEMENTS_CONTINUE = [
  { entitlement: "Basic Pay", status: "Continues" },
  { entitlement: "BAH", status: "Continues (verify rate)" },
  { entitlement: "BAS", status: "Continues" },
  { entitlement: "Special pays (jump, dive, etc.)", status: "Resume normal status" },
];

const LES_CHECK_ITEMS = [
  "Basic Pay: Correct for grade",
  "BAH: Correct rate for location and dependency",
  "BAS: Present if entitled",
  "HFP/IDP: Should end on departure date",
  "FSA: Should end on return date",
  "Tax Withholding: Should resume normal rates",
  "Allotments: Still active and correct",
  "Deductions: SGLI, TSP, etc. correct",
];

const COMMON_ISSUES = [
  { issue: "HFP/IDP continuing", cause: "System not updated", resolution: "Report to S-1, will collect overpayment" },
  { issue: "FSA continuing", cause: "Return date not entered", resolution: "Report to S-1" },
  { issue: "Tax withholding not resumed", cause: "System delay", resolution: "Usually self-corrects, verify next LES" },
  { issue: "BAH rate incorrect", cause: "Dependent location change", resolution: "Update MCTFS, request correction" },
  { issue: "Missing pay", cause: "Deployment end not processed", resolution: "Contact S-1 to verify Unit Diary" },
];

const OVERPAYMENT_INFO = [
  "Overpayment will be collected",
  "Finance calculates amount owed",
  "Collection begins automatically",
  "May request payment plan if large amount",
];

const MINIMIZE_ISSUES = [
  "Report deployment return promptly",
  "Review LES immediately upon return",
  "Report discrepancies to S-1",
  "Do not spend money you know you are not entitled to",
];

const PAY_INQUIRY_PROCESS = [
  "Document specific issue",
  "Gather supporting documents (orders, LES history)",
  "Submit inquiry to S-1",
  "S-1 coordinates with Finance",
  "Track resolution",
  "Verify correction on future LES",
];

const SDP_WITHDRAWAL_STEPS = [
  "Deployment ends",
  "Interest stops accruing 90 days after departure",
  "Withdraw funds via myPay",
  "Funds transferred to designated account",
];

const FIRST_LES_CHECKLIST = [
  "Verify basic pay correct",
  "Check BAH rate and type",
  "Confirm HFP/IDP ended on correct date",
  "Confirm FSA ended on correct date",
  "Verify tax withholding resumed",
  "Check allotments correct",
  "Review for any unusual entries",
];

const IF_DISCREPANCY = [
  "Document specific issue",
  "Gather supporting documents",
  "Report to S-1",
  "Track correction",
  "Verify on next LES",
];

const SDP_CHECKLIST = [
  "Log into myPay",
  "Request SDP withdrawal",
  "Verify funds received",
];

export function PayEntitlementVerificationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pay Entitlement Verification Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Returning from deployment triggers multiple pay changes. Combat zone entitlements end, and
            regular pay resumes. Verify your pay is correct to avoid overpayments requiring collection
            or underpayments affecting your finances. Review your LES carefully in the months following return.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {KEY_POINTS.map((item) => (
                  <tr key={item.element}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.element}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    entitlements: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Entitlements That End
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Entitlement</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Ends When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {ENTITLEMENTS_END.map((item) => (
                  <tr key={item.entitlement}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.entitlement}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Entitlements That Continue or Resume
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Entitlement</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {ENTITLEMENTS_CONTINUE.map((item) => (
                  <tr key={item.entitlement}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.entitlement}</td>
                    <td className="py-3 text-green-600 dark:text-green-400">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    verification: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verifying Your Post-Deployment LES
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Check These Items:</p>
          <ul className="mt-4 space-y-2">
            {LES_CHECK_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    issues: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Post-Deployment Pay Issues
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Issue</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Cause</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COMMON_ISSUES.map((item) => (
                  <tr key={item.issue}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.issue}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.cause}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
            Overpayment and Collection
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">If You Were Overpaid:</p>
          <ul className="mt-4 space-y-2">
            {OVERPAYMENT_INFO.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            To Minimize Issues
          </h3>
          <ul className="mt-4 space-y-2">
            {MINIMIZE_ISSUES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pay Inquiry Process
          </h3>
          <ol className="mt-4 space-y-2">
            {PAY_INQUIRY_PROCESS.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </>
    ),

    sdp: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Savings Deposit Program (SDP) Withdrawal
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If you participated in SDP during deployment, you can withdraw your funds after returning.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Withdrawal Process
          </h3>
          <ol className="mt-4 space-y-2">
            {SDP_WITHDRAWAL_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Interest Accrual</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Interest continues accruing for 90 days after departure from the combat zone. Withdraw
            via myPay after this period for maximum benefit.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            First LES After Return
          </h2>
          <div className="mt-4 space-y-2">
            {FIRST_LES_CHECKLIST.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Discrepancy Found
          </h2>
          <div className="mt-4 space-y-2">
            {IF_DISCREPANCY.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SDP Withdrawal (if applicable)
          </h2>
          <div className="mt-4 space-y-2">
            {SDP_CHECKLIST.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
