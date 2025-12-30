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
  { id: "pay-calculation", label: "Pay Calculation" },
  { id: "va-compensation", label: "VA Compensation" },
  { id: "benefits", label: "Benefits" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Disability Threshold", description: "30%+ rating OR 20+ years of service" },
  { element: "Pay Calculation", description: "Greater of disability % or longevity %" },
  { element: "CRDP", description: "Concurrent receipt for 50%+ and 20+ years" },
  { element: "CRSC", description: "Combat-Related Special Compensation" },
  { element: "Minimum Pay", description: "50% of base pay regardless of rating" },
  { element: "Authority", description: "10 U.S.C. Chapter 61" },
];

const ELIGIBILITY_CRITERIA = [
  {
    scenario: "30%+ Disability Rating",
    years: "Any years of service",
    result: "Qualify for medical retirement"
  },
  {
    scenario: "Less than 30% Disability",
    years: "Less than 20 years",
    result: "Separation with severance pay (not retirement)"
  },
  {
    scenario: "Less than 30% Disability",
    years: "20+ years of service",
    result: "Qualify for medical retirement"
  },
];

const PAY_CALCULATION_METHODS = [
  "Disability %: Your disability rating × base pay",
  "Longevity %: 2.5% × years of service × High-3 average (or 2.0% if BRS)",
  "Minimum: 50% of base pay regardless of above calculations",
  "You receive whichever method results in the highest monthly pay",
];

const CONCURRENT_RECEIPT_PROGRAMS = [
  {
    program: "CRDP",
    fullName: "Concurrent Retirement and Disability Pay",
    eligibility: "50%+ VA rating AND 20+ years of service",
    benefit: "Receive full military retired pay AND full VA compensation"
  },
  {
    program: "CRSC",
    fullName: "Combat-Related Special Compensation",
    eligibility: "Combat-related disabilities (any rating %)",
    benefit: "Additional tax-free payment for combat-related disabilities"
  },
];

const MEDICAL_RETIREMENT_BENEFITS = [
  { benefit: "Monthly Retired Pay", description: "Immediate pay at retirement (taxable)" },
  { benefit: "TRICARE", description: "Health coverage for retiree and dependents" },
  { benefit: "Commissary/Exchange", description: "Shopping privileges" },
  { benefit: "Space-A Travel", description: "Military flight privileges" },
  { benefit: "ID Card", description: "Blue retired military ID card" },
  { benefit: "VA Compensation", description: "Tax-free disability compensation (if concurrent receipt)" },
];

const CHECKLIST_ITEMS = [
  "Undergo Medical Evaluation Board (MEB) process",
  "Attend all MEB appointments and examinations",
  "Review MEB findings and narrative summary",
  "Proceed to Physical Evaluation Board (PEB) if referred",
  "Review PEB findings and proposed rating/disposition",
  "Decide whether to accept or appeal PEB findings",
  "If appealing, request formal PEB hearing",
  "Apply for VA disability rating simultaneously",
  "Complete DD Form 2656 (Data for Payment of Retired Personnel)",
  "Make SBP election (spouse concurrence required if married)",
  "Set up direct deposit for retired pay",
  "Determine CRDP or CRSC eligibility",
  "Obtain retired military ID card",
  "Enroll in TRICARE coverage",
  "Complete TAPS (Transition Assistance Program)",
];

export function MedicalRetirementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical Retirement Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Medical retirement applies to service members who are determined to be unfit for duty due
            to disability. To qualify for medical retirement (rather than separation with severance),
            you must have either a disability rating of 30% or higher, OR have 20 or more years of
            service regardless of rating. The process involves Medical Evaluation Board (MEB) and
            Physical Evaluation Board (PEB) determinations.
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
            Retirement vs. Separation Eligibility
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Scenario</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Years of Service</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {ELIGIBILITY_CRITERIA.map((item) => (
                  <tr key={item.scenario + item.years}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.scenario}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.years}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">MEB/PEB Process</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            The MEB determines if you are medically qualified to continue service. If found not medically
            qualified, your case goes to PEB. The PEB determines if you are fit or unfit for duty, assigns
            a disability rating, and recommends retirement or separation.
          </p>
        </div>
      </>
    ),

    "pay-calculation": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical Retirement Pay Calculation
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Medical retirement pay is calculated using three methods, and you receive whichever results
            in the highest monthly payment. There is also a minimum of 50% of base pay.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Three Calculation Methods
          </h3>
          <ul className="mt-4 space-y-2">
            {PAY_CALCULATION_METHODS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Calculation Examples
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Example 1: High Disability, Short Service</p>
              <div className="mt-2 space-y-1 text-zinc-700 dark:text-zinc-300">
                <p>Years of Service: 8</p>
                <p>Disability Rating: 70%</p>
                <p>Base Pay: $5,000</p>
                <p className="mt-2">Method 1 (Disability): 70% × $5,000 = $3,500</p>
                <p>Method 2 (Longevity): 2.5% × 8 × $5,000 = $1,000</p>
                <p>Method 3 (Minimum): 50% × $5,000 = $2,500</p>
                <p className="mt-2 font-semibold text-[var(--sa-red)]">Monthly Retired Pay: $3,500 (highest)</p>
              </div>
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Example 2: Low Disability, Long Service</p>
              <div className="mt-2 space-y-1 text-zinc-700 dark:text-zinc-300">
                <p>Years of Service: 22</p>
                <p>Disability Rating: 40%</p>
                <p>High-3 Average: $6,000</p>
                <p className="mt-2">Method 1 (Disability): 40% × $6,000 = $2,400</p>
                <p>Method 2 (Longevity): 2.5% × 22 × $6,000 = $3,300</p>
                <p>Method 3 (Minimum): 50% × $6,000 = $3,000</p>
                <p className="mt-2 font-semibold text-[var(--sa-red)]">Monthly Retired Pay: $3,300 (highest)</p>
              </div>
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Example 3: Very Low Disability</p>
              <div className="mt-2 space-y-1 text-zinc-700 dark:text-zinc-300">
                <p>Years of Service: 6</p>
                <p>Disability Rating: 30%</p>
                <p>Base Pay: $4,000</p>
                <p className="mt-2">Method 1 (Disability): 30% × $4,000 = $1,200</p>
                <p>Method 2 (Longevity): 2.5% × 6 × $4,000 = $600</p>
                <p>Method 3 (Minimum): 50% × $4,000 = $2,000</p>
                <p className="mt-2 font-semibold text-[var(--sa-red)]">Monthly Retired Pay: $2,000 (minimum applies)</p>
              </div>
            </div>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">DFAS Calculates Automatically</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            You don't need to choose which calculation method. DFAS will automatically calculate all three
            methods and pay you the highest amount. Your retired pay account will show which method applies.
          </p>
        </div>
      </>
    ),

    "va-compensation": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            VA Compensation and Concurrent Receipt
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Historically, military retired pay and VA compensation could not be received simultaneously
            (offset required). Two programs now allow concurrent receipt of both: CRDP and CRSC. You must
            apply separately for VA disability rating.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Concurrent Receipt Programs
          </h3>
          <div className="mt-4 space-y-4">
            {CONCURRENT_RECEIPT_PROGRAMS.map((item) => (
              <div key={item.program} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.program}</h4>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">({item.fullName})</span>
                </div>
                <div className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <p><strong>Eligibility:</strong> {item.eligibility}</p>
                  <p><strong>Benefit:</strong> {item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CRDP (Concurrent Retirement and Disability Pay)
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Requires 50%+ VA disability rating AND 20+ years of service",
              "Receive full military retired pay (no offset)",
              "Receive full VA compensation (tax-free)",
              "Automatic enrollment if you meet criteria",
              "No separate application required",
              "Both payments deposited monthly",
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
            CRSC (Combat-Related Special Compensation)
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Available for combat-related disabilities at any rating %",
              "Must apply through your service branch",
              "Disabilities must be combat-related or from hazardous duty",
              "Tax-free payment in addition to retired pay",
              "Cannot receive both CRDP and CRSC (you get whichever is higher)",
              "Application required with supporting documentation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Apply for VA Rating Before Retirement</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            File your VA disability claim while still on active duty, ideally during the MEB/PEB process.
            This ensures your VA rating is in place when you retire. The VA rating may differ from your
            military disability rating.
          </p>
        </div>
      </>
    ),

    benefits: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical Retirement Benefits
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Medical retirees receive the same benefits as regular retirees, with immediate eligibility
            regardless of years of service.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Retiree Benefits
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Benefit</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {MEDICAL_RETIREMENT_BENEFITS.map((item) => (
                  <tr key={item.benefit}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.benefit}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Taxation of Benefits
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Retired Pay</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Taxable income. Federal and state taxes apply (unless state exempts military retirement).
                Reported on IRS Form 1099-R.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VA Disability Compensation</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Tax-free. Not reported as income. No federal or state taxes.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CRSC Payments</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Tax-free. Combat-related special compensation is not taxable income.
              </p>
            </div>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">SBP Coverage</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Medical retirees must make SBP election at retirement. If married, spouse concurrence is
            required to decline coverage. Consider your family's needs carefully as this decision is
            largely irrevocable.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical Retirement Processing Checklist
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The MEB/PEB process can take several months. Stay engaged throughout the process and track
            all deadlines for appeals and responses.
          </p>
          <div className="mt-4 space-y-2">
            {CHECKLIST_ITEMS.map((item) => (
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

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Appeal Rights</h4>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            You have the right to appeal PEB findings. If you disagree with the disability rating or
            fitness determination, request a formal PEB hearing. You may also apply to the Board for
            Correction of Naval Records (BCNR) for additional review.
          </p>
        </div>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
