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
  { id: "coverage", label: "Coverage & Premiums" },
  { id: "milconnect", label: "milConnect SOES" },
  { id: "beneficiaries", label: "Beneficiaries" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Maximum Coverage", description: "$500,000" },
  { element: "Premium", description: "$0.05 per $1,000 monthly" },
  { element: "Full Coverage Cost", description: "$25/month for $500,000" },
  { element: "Automatic Enrollment", description: "Yes, at maximum coverage" },
  { element: "Beneficiary Designation", description: "SGLV 8286 or milConnect SOES" },
  { element: "Coverage Period", description: "While on active duty plus 120 days after separation" },
  { element: "Authority", description: "38 U.S.C. 1967" },
];

const COVERAGE_AMOUNTS = [
  { amount: "$500,000", premium: "$25.00" },
  { amount: "$450,000", premium: "$22.50" },
  { amount: "$400,000", premium: "$20.00" },
  { amount: "$350,000", premium: "$17.50" },
  { amount: "$300,000", premium: "$15.00" },
  { amount: "$250,000", premium: "$12.50" },
  { amount: "$200,000", premium: "$10.00" },
  { amount: "$150,000", premium: "$7.50" },
  { amount: "$100,000", premium: "$5.00" },
  { amount: "$50,000", premium: "$2.50" },
  { amount: "Declined", premium: "$0.00" },
];

const SOES_ACTIONS = [
  { action: "View current coverage amount", available: "Yes" },
  { action: "Change coverage amount", available: "Yes" },
  { action: "Designate beneficiaries", available: "Yes" },
  { action: "Update beneficiary information", available: "Yes" },
  { action: "Decline coverage", available: "Yes" },
  { action: "Restore coverage", available: "Yes" },
  { action: "View/print confirmation", available: "Yes" },
];

const ACCESS_STEPS = [
  "Go to https://milconnect.dmdc.osd.mil",
  "Log in using DS Logon, CAC, or ID.me",
  "Select \"Benefits\" from the top menu",
  "Select \"Life Insurance (SOES)\" under Benefits",
  "You are now in the SGLI Online Enrollment System",
];

const BENEFICIARY_STEPS = [
  "Access SOES in milConnect",
  "Select \"Beneficiary Designation\"",
  "Select \"Add Beneficiary\" or \"Edit\" existing",
  "Enter beneficiary information (name, SSN, DOB, relationship, address, percentage)",
  "Ensure primary beneficiary percentages total 100%",
  "Add contingent beneficiaries (recommended)",
  "Review all information for accuracy",
  "Select \"Submit\"",
  "Print confirmation page for your records",
];

const LIFE_EVENTS = [
  { event: "Marriage", action: "Consider adding spouse" },
  { event: "Divorce", action: "Consider removing ex-spouse" },
  { event: "Birth of child", action: "Consider adding child or updating allocation" },
  { event: "Death of beneficiary", action: "Designate new beneficiary" },
  { event: "Before deployment", action: "Verify current and accurate" },
];

const STATUTORY_ORDER = [
  "Surviving spouse",
  "Children in equal shares",
  "Parents in equal shares",
  "Duly appointed executor or administrator of estate",
  "Next of kin under laws of domicile state",
];

const CHECKLIST_INITIAL = [
  "Log into milConnect (https://milconnect.dmdc.osd.mil)",
  "Access SGLI Online Enrollment System (SOES)",
  "Verify coverage amount is $500,000 (or adjust as desired)",
  "Designate primary beneficiary(ies) with percentages totaling 100%",
  "Designate contingent beneficiary(ies)",
  "Submit and print confirmation",
  "Save confirmation to personal files",
  "Inform beneficiaries of coverage amount",
];

const CHECKLIST_ANNUAL = [
  "Log into milConnect SOES",
  "Verify coverage amount on LES matches SOES",
  "Review beneficiary designations for accuracy",
  "Verify beneficiary contact information is current",
  "Update if any life events occurred",
  "Print updated confirmation",
];

const CHECKLIST_DEPLOYMENT = [
  "Access SOES and review all information",
  "Verify beneficiaries are current",
  "Update contact information for beneficiaries",
  "Print confirmation",
  "Provide copy to beneficiaries or next of kin",
  "Ensure someone knows where confirmation is stored",
];

export function SGLIContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SGLI Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            SGLI provides low-cost group life insurance to eligible service members. Coverage is automatic
            upon entry to service unless you decline or reduce coverage. SGLI protects your family financially
            if you die while serving. The program is administered by the Office of Servicemembers&apos; Group
            Life Insurance (OSGLI) through Prudential Insurance Company.
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Automatic Coverage
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Upon Entering Active Duty:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Automatically enrolled at $500,000",
              "Premium deducted from pay",
              "No health screening required",
              "No action needed unless you want to decline or reduce",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">SGLI After Separation</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Full coverage continues 120 days after separation at the same coverage level. Premium-free
            during this period. You have the option to convert to VGLI within this period.
          </p>
        </div>
      </>
    ),

    coverage: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Coverage Amounts and Premiums
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Coverage must be in $50,000 increments. Premiums are automatically deducted from your pay.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Coverage Amount</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Monthly Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COVERAGE_AMOUNTS.map((item) => (
                  <tr key={item.amount}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.amount}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Coverage Change Options
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Process</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">Reduce coverage</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">Effective immediately</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">Increase coverage</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">May require good health certification</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">Decline coverage</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">Must acknowledge understanding</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">Restore after declining</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">May require good health certification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Accelerated Benefits Option
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">For Terminally Ill Members:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Receive up to 50% of coverage while living",
              "Must have life expectancy of 9 months or less",
              "Reduces death benefit by amount paid",
              "Request through OSGLI",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    milconnect: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Managing SGLI Through milConnect
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The SGLI Online Enrollment System (SOES) in milConnect is the fastest and most reliable way
            to manage your SGLI coverage. Changes made through SOES take effect immediately upon submission.
            Use milConnect for all SGLI actions.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What You Can Do in milConnect SOES
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Available in SOES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {SOES_ACTIONS.map((item) => (
                  <tr key={item.action}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.action}</td>
                    <td className="py-3 text-green-600 dark:text-green-400">{item.available}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Accessing milConnect SOES
          </h3>
          <ol className="mt-4 space-y-2">
            {ACCESS_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Login Options
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Method</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">CAC</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">CAC reader and PIN</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">DS Logon</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">DS Logon Premium account</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">ID.me</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">ID.me verified account</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Paper Form (SGLV 8286) - Backup Only</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Use paper form only if milConnect is unavailable. milConnect SOES is faster and provides
            immediate confirmation. Paper forms take weeks to process.
          </p>
        </div>
      </>
    ),

    beneficiaries: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Designating Beneficiaries in milConnect
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Required information for each beneficiary: Full legal name, Social Security Number,
            Date of birth, Relationship to you, Current address, Phone number, and Percentage allocation.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Step-by-Step Beneficiary Designation
          </h3>
          <ol className="mt-4 space-y-2">
            {BENEFICIARY_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When to Update Beneficiaries
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Life Event</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {LIFE_EVENTS.map((item) => (
                  <tr key={item.event}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.event}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Statutory Order of Payment
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            If no valid beneficiary designation exists, SGLI pays in this order:
          </p>
          <ol className="mt-4 space-y-2">
            {STATUTORY_ORDER.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Important</h4>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            SGLI beneficiary designation overrides your will for SGLI proceeds. To change who receives
            your SGLI benefits, you must update the beneficiary form, not your will.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Initial Setup (Use milConnect)
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_INITIAL.map((item) => (
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
            Annual Review (Use milConnect)
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_ANNUAL.map((item) => (
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
            Before Deployment (Verify via milConnect)
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_DEPLOYMENT.map((item) => (
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
