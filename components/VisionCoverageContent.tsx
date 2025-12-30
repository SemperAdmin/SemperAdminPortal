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
  { id: "benefits", label: "Benefits" },
  { id: "enrollment", label: "Enrollment" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Program", description: "FEDVIP Vision" },
  { element: "Eligibility", description: "Family members, retirees, reservists" },
  { element: "Enrollment", description: "Annual open season or QLE" },
  { element: "Coverage", description: "Exams, glasses, contacts" },
  { element: "Website", description: "https://www.benefeds.com" },
];

const COVERAGE_COMPARISON = [
  { service: "Eye disease/injury", tricare: "Covered", fedvip: "Not primary" },
  { service: "Routine eye exam", tricare: "Limited coverage", fedvip: "Covered" },
  { service: "Glasses", tricare: "Not covered", fedvip: "Covered" },
  { service: "Contact lenses", tricare: "Not covered", fedvip: "Covered" },
  { service: "LASIK", tricare: "Not covered", fedvip: "Discount may apply" },
];

const ELIGIBILITY = [
  { category: "Active duty service members", eligible: "No (use military optometry)" },
  { category: "Active duty family members", eligible: "Yes" },
  { category: "Retired service members", eligible: "Yes" },
  { category: "Retired family members", eligible: "Yes" },
  { category: "Reserve/Guard members", eligible: "Yes (if not on active duty)" },
  { category: "Reserve/Guard family members", eligible: "Yes" },
];

const COVERAGE_LEVELS = [
  { level: "Self Only", description: "Just the enrollee" },
  { level: "Self Plus One", description: "Enrollee plus one family member" },
  { level: "Self and Family", description: "Enrollee plus all eligible family members" },
];

const TYPICAL_BENEFITS = [
  { service: "Eye exam", coverage: "Covered every 12 months" },
  { service: "Glasses (frames)", coverage: "Allowance (e.g., $150)" },
  { service: "Glasses (lenses)", coverage: "Covered or allowance" },
  { service: "Contact lenses", coverage: "Allowance (e.g., $150)" },
  { service: "Lens options (progressive, coatings)", coverage: "Discounted" },
];

const RETAIL_CHAINS = [
  "LensCrafters",
  "Pearle Vision",
  "Target Optical",
  "Walmart Vision Center",
  "Costco Optical",
];

const CONTACT_LENS_COVERAGE = [
  { type: "Contacts instead of glasses", coverage: "Allowance (typically $150)" },
  { type: "Medically necessary contacts", coverage: "Higher allowance" },
  { type: "Contact lens exam", coverage: "May require additional copay" },
];

const PREMIUM_RANGES = [
  { level: "Self Only", range: "$10-$30" },
  { level: "Self Plus One", range: "$20-$50" },
  { level: "Self and Family", range: "$30-$70" },
];

const CHECKLIST_ENROLLMENT = [
  "Verify eligibility",
  "Go to BENEFEDS.com",
  "Compare vision plans",
  "Check provider networks (especially preferred retailers)",
  "Select plan and coverage level",
  "Complete enrollment",
  "Set up premium payment",
];

const CHECKLIST_USING = [
  "Find in-network provider",
  "Schedule annual exam",
  "Understand frame/lens allowances",
  "Use benefits before year end",
];

export function VisionCoverageContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Vision Coverage Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Vision coverage through FEDVIP provides benefits for eye exams, glasses, and contact lenses.
            TRICARE covers medically necessary eye care, but routine vision care requires separate coverage.
            FEDVIP vision plans offer affordable options for routine eye care and eyewear.
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
            Vision Coverage vs. TRICARE
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Service</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">TRICARE</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">FEDVIP Vision</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COVERAGE_COMPARISON.map((item) => (
                  <tr key={item.service}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.service}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.tricare}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.fedvip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who is Eligible
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
      </>
    ),

    benefits: (
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
            Typical Vision Benefits
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Service</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Typical Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {TYPICAL_BENEFITS.map((item) => (
                  <tr key={item.service}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.service}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Note: Specific coverage varies by plan. Check your plan details.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Frame and Lens Allowances
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">How Allowances Work:</h4>
              <ol className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>1. Select frames and lenses</li>
                <li>2. Allowance applied to cost</li>
                <li>3. You pay amount over allowance</li>
              </ol>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Example:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Frames selected: $200</li>
                <li>Plan allowance: $150</li>
                <li>You pay: $50</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Maximizing Allowance:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Ask about in-network discounts</li>
                <li>Consider store brands</li>
                <li>Use full allowance each year</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Contact Lens Coverage
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {CONTACT_LENS_COVERAGE.map((item) => (
                  <tr key={item.type}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.type}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Contact Lens Exam: Separate from routine eye exam. Required for contact lens fitting.
            May have additional cost.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Retail Chains
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Many plans include national chains:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {RETAIL_CHAINS.map((chain) => (
              <span key={chain} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {chain}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Check your plan&apos;s network.
          </p>
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
                Same as dental (November-December). Coverage effective January 1.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Qualifying Life Events:</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Same events as dental. 60 days to enroll from QLE.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Enroll
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Go to https://www.benefeds.com",
              "Create account or log in",
              "Compare vision plans",
              "Select plan and coverage level",
              "Complete enrollment",
              "Set up premium payment",
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
            Combining Dental and Vision
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">You Can:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Enroll in vision only",
              "Enroll in dental only",
              "Enroll in both (different carriers allowed)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Same enrollment process through BENEFEDS. Can enroll in both during same session. Separate premiums.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Premium Costs
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Typical Ranges:</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Coverage Level</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Monthly Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {PREMIUM_RANGES.map((item) => (
                  <tr key={item.level}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.level}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Actual premiums vary by carrier and plan. Check BENEFEDS for current rates.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Using Vision Coverage
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">In-Network Providers:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Lower out-of-pocket costs</li>
                <li>Full benefit application</li>
                <li>Find via plan&apos;s provider directory</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Out-of-Network Providers:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Reimbursement up to plan allowance</li>
                <li>You pay balance</li>
                <li>Must file claims</li>
              </ul>
            </div>
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
