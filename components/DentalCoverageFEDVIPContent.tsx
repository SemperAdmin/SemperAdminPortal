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
  { id: "plans", label: "Plan Options" },
  { id: "enrollment", label: "Enrollment" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Eligibility", description: "Family members, retirees, reservists" },
  { element: "Active Duty Members", description: "Not eligible (covered by military dental)" },
  { element: "Enrollment", description: "Annual open season or QLE" },
  { element: "Plans", description: "Multiple carriers and options" },
  { element: "Premium", description: "Based on plan and enrollment type" },
  { element: "Website", description: "https://www.benefeds.com" },
];

const ELIGIBILITY = [
  { category: "Active duty service members", eligible: "No (use MTF)" },
  { category: "Active duty family members", eligible: "Yes" },
  { category: "Retired service members", eligible: "Yes" },
  { category: "Retired family members", eligible: "Yes" },
  { category: "Reserve/Guard members", eligible: "Yes (if not on active duty)" },
  { category: "Reserve/Guard family members", eligible: "Yes" },
  { category: "Survivors", eligible: "Yes" },
];

const COVERAGE_LEVELS = [
  { level: "Self Only", description: "Just the enrollee" },
  { level: "Self Plus One", description: "Enrollee plus one family member" },
  { level: "Self and Family", description: "Enrollee plus all eligible family members" },
];

const TYPICAL_COVERAGE = [
  { service: "Preventive (cleanings, exams)", coverage: "100%" },
  { service: "Basic (fillings, extractions)", coverage: "80%" },
  { service: "Major (crowns, bridges)", coverage: "50%" },
  { service: "Orthodontia", coverage: "50% (if covered)" },
];

const PLAN_CONSIDERATIONS = [
  "Anticipated dental needs",
  "Preferred dentists (in-network)",
  "Monthly premium cost",
  "Coverage levels and percentages",
  "Annual maximum benefits",
  "Deductibles",
  "Orthodontia coverage (if needed)",
];

const ENROLLMENT_STEPS = [
  "Go to https://www.benefeds.com",
  "Create account or log in",
  "Verify eligibility",
  "Compare plans",
  "Select plan and coverage level",
  "Complete enrollment",
  "Set up premium payment",
];

const PAYMENT_OPTIONS = [
  "Allotment from military pay",
  "Automatic bank withdrawal",
  "Direct billing",
];

const COMMON_ISSUES = [
  { issue: "Claim denied", resolution: "Verify coverage, appeal if appropriate" },
  { issue: "Out-of-network surprise", resolution: "Check provider network before visit" },
  { issue: "Annual maximum reached", resolution: "Pay out-of-pocket or wait for new year" },
  { issue: "Premium payment failed", resolution: "Update payment method at BENEFEDS" },
];

const CHECKLIST_ENROLLMENT = [
  "Verify eligibility",
  "Go to BENEFEDS.com",
  "Compare available plans",
  "Check provider networks",
  "Select plan and coverage level",
  "Complete enrollment",
  "Set up premium payment",
  "Save confirmation",
];

const CHECKLIST_USING = [
  "Find in-network provider",
  "Present insurance information",
  "Verify coverage before major procedures",
  "Track annual maximum usage",
];

export function DentalCoverageFEDVIPContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FEDVIP Dental Coverage Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Federal Employees Dental and Vision Insurance Program (FEDVIP) provides dental coverage
            for military family members and retirees. Active duty service members receive dental care
            through military treatment facilities. FEDVIP offers multiple plan options from various
            carriers with different levels of coverage and premiums.
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
            Who is Eligible for FEDVIP Dental
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Category</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Eligible</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {ELIGIBILITY.map((item) => (
                  <tr key={item.category}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.category}</td>
                    <td className={`py-3 font-medium ${item.eligible.includes("Yes") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                      {item.eligible}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">TRICARE Dental Program</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            The TRICARE Dental Program (TDP) is no longer offered. FEDVIP is now the dental coverage
            option for dependents of active duty service members.
          </p>
        </div>
      </>
    ),

    plans: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Coverage Levels
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Level</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COVERAGE_LEVELS.map((item) => (
                  <tr key={item.level}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.level}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Plan Types
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "High Option: Higher premiums, lower out-of-pocket costs",
              "Standard Option: Balanced premiums and costs",
              "Basic Option: Lower premiums, higher out-of-pocket costs",
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
            Typical Coverage by Service Type
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Service Type</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Typical Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {TYPICAL_COVERAGE.map((item) => (
                  <tr key={item.service}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.service}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Coverage varies by plan. Check your specific plan details.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Selecting a Plan
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Consider:</p>
          <ul className="mt-4 space-y-2">
            {PLAN_CONSIDERATIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            BENEFEDS Plan Comparison: Visit https://www.benefeds.com to use plan comparison tool,
            enter location for network providers, and compare costs and coverage.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Annual Maximum and Deductibles
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Annual Maximum:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Maximum plan pays per year per person</li>
                <li>Typically $1,000 to $2,500</li>
                <li>You pay 100% after maximum reached</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Deductible:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Amount you pay before coverage begins</li>
                <li>Typically $0-$100 for individuals</li>
                <li>Higher for families</li>
                <li>Preventive care often exempt from deductible</li>
              </ul>
            </div>
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
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Open Season:</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Typically November through early December. Coverage effective January 1.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Qualifying Life Events (QLE):</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Marriage or divorce</li>
                <li>Birth or adoption</li>
                <li>Loss of other coverage</li>
                <li>PCS move</li>
                <li>60 days from QLE to enroll</li>
              </ul>
            </div>
          </div>
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
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Premium Payment Options
          </h3>
          <ul className="mt-4 space-y-2">
            {PAYMENT_OPTIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Premium rates vary by carrier, plan, and coverage level. Check BENEFEDS for current rates.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Using Your Dental Coverage
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">In-Network Providers:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Lower out-of-pocket costs</li>
                <li>No claim filing (usually)</li>
                <li>Find via plan&apos;s provider directory</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Out-of-Network Providers:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Higher costs</li>
                <li>May need to file claims</li>
                <li>May be subject to balance billing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Dental Coverage Issues
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
            Using Coverage
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_USING.map((item) => (
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
