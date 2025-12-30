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
  { id: "premiums", label: "Premiums" },
  { id: "application", label: "Application" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Maximum Coverage", description: "Amount of SGLI at separation (up to $500,000)" },
  { element: "Conversion Period", description: "240 days from separation (1 year 120 days with medical)" },
  { element: "Premium Basis", description: "Age-based, increases every 5 years" },
  { element: "Renewal", description: "Renewable for life" },
  { element: "Underwriting", description: "None if applied within 240 days" },
  { element: "Administrator", description: "OSGLI (Prudential)" },
  { element: "Authority", description: "38 U.S.C. 1977" },
];

const PREMIUM_RATES = [
  { age: "Under 30", rate: "$0.08" },
  { age: "30-34", rate: "$0.10" },
  { age: "35-39", rate: "$0.13" },
  { age: "40-44", rate: "$0.19" },
  { age: "45-49", rate: "$0.30" },
  { age: "50-54", rate: "$0.49" },
  { age: "55-59", rate: "$0.75" },
  { age: "60-64", rate: "$1.10" },
  { age: "65-69", rate: "$1.73" },
  { age: "70-74", rate: "$2.38" },
  { age: "75+", rate: "$4.00" },
];

const APPLICATION_TIMELINE = [
  { timeframe: "0-240 days post-separation", requirements: "No health questions, guaranteed acceptance" },
  { timeframe: "241 days to 1 year 120 days", requirements: "Must answer health questions, may be declined" },
  { timeframe: "After 1 year 120 days", requirements: "Not eligible to convert" },
];

const PAYMENT_OPTIONS = [
  { method: "Monthly EFT", description: "Automatic bank withdrawal" },
  { method: "Quarterly", description: "Pay every 3 months" },
  { method: "Semi-annually", description: "Pay every 6 months" },
  { method: "Annually", description: "Pay once per year" },
  { method: "Allotment", description: "From VA disability or retired pay" },
];

const COMPARISON = [
  { factor: "Medical underwriting", vgli: "None (within 240 days)", commercial: "Required" },
  { factor: "Premium", vgli: "Age-based, increases", commercial: "Risk-based, may be level" },
  { factor: "Guaranteed acceptance", vgli: "Yes (within 240 days)", commercial: "No" },
  { factor: "Portability", vgli: "Continues regardless of health", commercial: "May lose if health declines" },
];

const CHECKLIST_BEFORE = [
  "Note SGLI coverage amount",
  "Understand 240-day conversion window",
  "Research VGLI rates for your age",
  "Compare with commercial insurance options",
];

const CHECKLIST_WITHIN = [
  "Apply for VGLI online or via SGLV 8714",
  "Select coverage amount",
  "Set up premium payment method",
  "Designate beneficiaries (SGLV 8712)",
  "Retain confirmation",
];

const CHECKLIST_AFTER = [
  "Verify premium payments",
  "Review coverage periodically",
  "Update beneficiaries as needed",
  "Compare rates at 5-year age increases",
];

export function VGLIContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            VGLI Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            VGLI allows you to convert your SGLI coverage to a renewable term life insurance policy
            after separation from service. VGLI provides continued life insurance protection without
            medical underwriting if you apply within 240 days of separation. Premiums are based on age
            and increase every 5 years.
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
            Eligibility
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">You Can Convert to VGLI If You:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Had SGLI when separated",
              "Are within 240 days of separation (no medical underwriting)",
              "Are within 1 year 120 days of separation (with medical underwriting)",
              "Were released from SGLI due to disability",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            VGLI vs. Commercial Insurance
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Factor</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">VGLI</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Commercial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COMPARISON.map((item) => (
                  <tr key={item.factor}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.factor}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.vgli}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.commercial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Consider Your Options</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Compare VGLI with commercial options. If healthy, commercial may be cheaper long-term
            since VGLI premiums increase every 5 years based on age.
          </p>
        </div>
      </>
    ),

    premiums: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Premium Rates (Monthly per $1,000 Coverage)
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Age</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {PREMIUM_RATES.map((item) => (
                  <tr key={item.age}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.age}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Example: Age 35 with $400,000 coverage = $52/month
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Coverage Amounts
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Initial Coverage:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Maximum is your SGLI amount at separation",
              "Can choose less coverage",
              "Coverage in $10,000 increments",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Increasing Coverage:</p>
          <ul className="mt-2 space-y-2">
            {[
              "Can increase up to $25,000 every 5 years",
              "Maximum $500,000 total",
              "Increases may require medical underwriting",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Premium Payment Options
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Method</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {PAYMENT_OPTIONS.map((item) => (
                  <tr key={item.method}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.method}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Discount available for annual payment.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            VGLI and Disability
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">If Totally Disabled:</p>
          <ul className="mt-4 space-y-2">
            {[
              "May qualify for premium waiver",
              "Must apply within 1 year of becoming disabled",
              "Submit evidence of disability",
              "If approved, premiums waived during disability",
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

    application: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Application Timeline
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {APPLICATION_TIMELINE.map((item) => (
                  <tr key={item.timeframe}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.timeframe}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.requirements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Apply
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Online Application:</p>
          <ol className="mt-4 space-y-2">
            {[
              "Go to https://www.benefits.va.gov/insurance/vgli.asp",
              "Select \"Apply Online\"",
              "Complete application",
              "Select coverage amount",
              "Set up premium payment",
              "Submit application",
            ].map((step, index) => (
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
            Paper Application (SGLV 8714)
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Obtain form from VA website or OSGLI",
              "Complete all sections",
              "Mail to OSGLI",
              "Await confirmation",
            ].map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Apply Early</h4>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            Start before your 120-day SGLI extension ends. Applying within 240 days of separation
            means no health questions and guaranteed acceptance.
          </p>
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Beneficiary Designation
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Complete SGLV 8712 (VGLI Beneficiary Designation)",
              "Mail to OSGLI",
              "Or update through OSGLI online account",
            ].map((step, index) => (
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

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Separation
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_BEFORE.map((item) => (
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
            Within 240 Days of Separation
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_WITHIN.map((item) => (
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
            After Enrollment
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_AFTER.map((item) => (
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
