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
  { id: "expenses", label: "Eligible Expenses" },
  { id: "enrollment", label: "Enrollment" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Annual Maximum", description: "$3,300 (2025, check current year)" },
  { element: "Tax Benefit", description: "Contributions are pre-tax" },
  { element: "Eligible Expenses", description: "Medical, dental, vision not covered by insurance" },
  { element: "Use It or Lose It", description: "Limited carryover allowed" },
  { element: "Enrollment", description: "FSAFEDS during open season" },
  { element: "Authority", description: "26 U.S.C. 125" },
];

const TAX_COMPARISON = [
  { item: "Gross pay", without: "$4,000", with: "$4,000" },
  { item: "HCFSA contribution", without: "-", with: "$200" },
  { item: "Taxable amount", without: "$4,000", with: "$3,800" },
  { item: "Taxes (22%)", without: "$880", with: "$836" },
  { item: "Net pay", without: "$3,120", with: "$2,964" },
  { item: "Pay medical expense", without: "$200", with: "Paid by HCFSA" },
  { item: "Remaining", without: "$2,920", with: "$2,964" },
];

const MEDICAL_EXPENSES = [
  "Copays and deductibles",
  "Prescription medications",
  "Medical equipment",
  "Lab fees",
  "Ambulance services",
  "Physical therapy",
  "Chiropractic care",
];

const DENTAL_EXPENSES = [
  "Copays and deductibles",
  "Orthodontia (braces)",
  "Dental procedures not covered",
  "Dentures",
];

const VISION_EXPENSES = [
  "Eye exams",
  "Glasses and contact lenses",
  "Laser eye surgery",
  "Contact lens solution",
];

const OTHER_EXPENSES = [
  "Hearing aids",
  "Mental health services",
  "Smoking cessation programs",
  "Weight loss programs (if prescribed)",
  "Over-the-counter medications (with prescription or if qualifying)",
];

const INELIGIBLE = [
  "Cosmetic procedures",
  "Gym memberships (unless prescribed)",
  "Teeth whitening",
  "Health insurance premiums",
  "Items covered by insurance",
];

const ENROLLMENT_STEPS = [
  "Go to https://www.fsafeds.com",
  "Create account or log in",
  "Select HCFSA",
  "Enter contribution amount",
  "Complete enrollment",
  "Confirm via email",
];

const ACCOUNT_COMPARISON = [
  { account: "HCFSA", forUse: "Medical expenses", taxBenefit: "Pre-tax", rollover: "Limited ($640)", requiresHDHP: "No", militaryEligible: "Yes" },
  { account: "HSA", forUse: "Medical expenses", taxBenefit: "Pre-tax + growth", rollover: "Unlimited", requiresHDHP: "Yes", militaryEligible: "Limited" },
  { account: "DCFSA", forUse: "Dependent care", taxBenefit: "Pre-tax", rollover: "Limited", requiresHDHP: "No", militaryEligible: "Yes" },
];

const COMMON_ISSUES = [
  { issue: "Claim denied", resolution: "Verify expense is eligible, resubmit with documentation" },
  { issue: "Card declined", resolution: "Check account balance, verify expense is eligible" },
  { issue: "Lost receipt", resolution: "Contact provider for duplicate" },
  { issue: "Funds remaining at year end", resolution: "Use during grace period or forfeit excess" },
];

const CHECKLIST_ENROLLMENT = [
  "Estimate annual eligible expenses",
  "Go to FSAFEDS.com during open season",
  "Enroll in HCFSA",
  "Select contribution amount",
  "Confirm enrollment",
];

const CHECKLIST_DURING = [
  "Use FSAFEDS card for eligible purchases",
  "Save receipts",
  "Submit claims if not using card",
  "Track balance throughout year",
  "Plan to use balance before year end",
];

export function HCFSAContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            HCFSA Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Healthcare Flexible Spending Account (HCFSA) allows you to set aside pre-tax dollars
            for eligible medical expenses not covered by TRICARE. Using an HCFSA reduces your taxable
            income while paying for out-of-pocket healthcare costs. Enrollment is through the Federal
            Flexible Spending Account Program (FSAFEDS).
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
            Tax Savings Example
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Without HCFSA</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Gross pay: $4,000</li>
                <li>Taxes (22%): $880</li>
                <li>Net pay: $3,120</li>
                <li>Pay medical: $200</li>
                <li className="font-medium">Remaining: $2,920</li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">With HCFSA</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-800 dark:text-green-200">
                <li>Gross pay: $4,000</li>
                <li>HCFSA contribution: $200</li>
                <li>Taxable: $3,800</li>
                <li>Taxes (22%): $836</li>
                <li>Net pay: $2,964</li>
                <li>Medical paid by HCFSA: $200</li>
                <li className="font-medium">Savings: $44/month</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Use It or Lose It Rule
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Carryover:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Up to $640 (2025, check current year) carries to next year</li>
                <li>Amounts over carryover limit are forfeited</li>
                <li>Plan contributions carefully</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Grace Period:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>2.5 months after plan year to incur expenses</li>
                <li>Claims for grace period expenses due by April 30</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    ),

    expenses: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligible Expenses
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical
          </h3>
          <ul className="mt-4 space-y-2">
            {MEDICAL_EXPENSES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Dental
          </h3>
          <ul className="mt-4 space-y-2">
            {DENTAL_EXPENSES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Vision
          </h3>
          <ul className="mt-4 space-y-2">
            {VISION_EXPENSES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Other
          </h3>
          <ul className="mt-4 space-y-2">
            {OTHER_EXPENSES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
            Ineligible Expenses
          </h3>
          <ul className="mt-4 space-y-2">
            {INELIGIBLE.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            HCFSA vs. Other Options
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Account</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">For</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Rollover</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Military Eligible</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {ACCOUNT_COMPARISON.map((item) => (
                  <tr key={item.account}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.account}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.forUse}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.rollover}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.militaryEligible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    enrollment: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Enrollment
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">When to Enroll:</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Federal Benefits Open Season (November-December)</li>
            <li>Within 60 days of Qualifying Life Event</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Enroll
          </h3>
          <ol className="mt-4 space-y-2">
            {ENROLLMENT_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Payroll Deduction: Annual amount divided by pay periods. Deducted pre-tax from each paycheck.
            Full annual amount available immediately.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Using Your HCFSA
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">FSAFEDS Card:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Debit card linked to your account</li>
                <li>Use at point of sale for eligible expenses</li>
                <li>Swipe like regular debit card</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reimbursement:</h4>
              <ol className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>1. Pay for eligible expense</li>
                <li>2. Submit claim via FSAFEDS website or app</li>
                <li>3. Include receipt and documentation</li>
                <li>4. Receive reimbursement to bank account</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Documentation Required:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Itemized receipt</li>
                <li>Date of service</li>
                <li>Description of service</li>
                <li>Provider name</li>
                <li>Amount paid</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common HCFSA Issues
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Issue</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COMMON_ISSUES.map((item) => (
                  <tr key={item.issue}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.issue}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Tip</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Start conservative your first year. You can increase next year based on actual expenses.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Enrollment
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_ENROLLMENT.map((item) => (
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
            During Year
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_DURING.map((item) => (
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
