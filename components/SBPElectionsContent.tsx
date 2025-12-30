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
  { id: "coverage-options", label: "Coverage Options" },
  { id: "cost-benefits", label: "Cost & Benefits" },
  { id: "election-process", label: "Election Process" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Purpose", description: "Income protection for survivors after retiree death" },
  { element: "Cost", description: "6.5% of elected base amount" },
  { element: "Survivor Benefit", description: "55% of elected base amount" },
  { element: "COLA", description: "Annual cost of living adjustments" },
  { element: "Spouse Concurrence", description: "Required for decline or reduced coverage" },
  { element: "Authority", description: "10 U.S.C. Chapter 73" },
];

const COVERAGE_OPTIONS = [
  {
    option: "Full Coverage (Spouse)",
    baseAmount: "100% of retired pay",
    survivorBenefit: "55% of retired pay to spouse",
    cost: "6.5% of full retired pay"
  },
  {
    option: "Reduced Coverage (Spouse)",
    baseAmount: "Any amount from $300 to full retired pay",
    survivorBenefit: "55% of elected base amount",
    cost: "6.5% of elected base amount"
  },
  {
    option: "Spouse + Children",
    baseAmount: "Same as spouse-only options",
    survivorBenefit: "Spouse receives benefit; if no spouse, children receive until age 18/22",
    cost: "Additional cost for children coverage"
  },
  {
    option: "Children Only",
    baseAmount: "Elected base amount",
    survivorBenefit: "Children receive benefit until age 18/22",
    cost: "Lower premium than spouse coverage"
  },
  {
    option: "Insurable Interest",
    baseAmount: "Elected amount",
    survivorBenefit: "Any person with insurable interest",
    cost: "Based on age difference between retiree and beneficiary"
  },
];

const COST_EXAMPLES = [
  {
    retiredPay: "$3,000/month",
    coverage: "Full (spouse)",
    monthlyCost: "$195 (6.5% of $3,000)",
    survivorBenefit: "$1,650/month (55% of $3,000)"
  },
  {
    retiredPay: "$3,000/month",
    coverage: "Reduced to $2,000",
    monthlyCost: "$130 (6.5% of $2,000)",
    survivorBenefit: "$1,100/month (55% of $2,000)"
  },
  {
    retiredPay: "$5,000/month",
    coverage: "Full (spouse)",
    monthlyCost: "$325 (6.5% of $5,000)",
    survivorBenefit: "$2,750/month (55% of $5,000)"
  },
];

const ELECTION_REQUIREMENTS = [
  "Election must be made at retirement",
  "DD Form 2656 (Data for Payment of Retired Personnel) is the election form",
  "If married, spouse must concur to decline or elect reduced coverage",
  "Spouse concurrence requires spouse's signature witnessed by authorized person",
  "Election is irrevocable except in specific circumstances (divorce, death of spouse)",
  "Declining SBP cannot be undone later in most cases",
];

const SPECIAL_SITUATIONS = [
  {
    situation: "Not Married at Retirement",
    rule: "Cannot elect spouse coverage. May elect children-only or insurable interest. If you marry after retirement, you have 1 year to elect spouse coverage (deemed election)."
  },
  {
    situation: "Spouse Refuses to Concur",
    rule: "You cannot decline or reduce coverage without spouse concurrence. If spouse refuses to sign, you must elect full coverage. Deemed election applies."
  },
  {
    situation: "Divorce After Retirement",
    rule: "May request discontinuation of SBP or designate former spouse. Former spouse SBP may be required by divorce decree. Submit request within 1 year of divorce."
  },
  {
    situation: "Remarriage After Retirement",
    rule: "Have 1 year to elect spouse coverage for new spouse. If you don't elect within 1 year, you cannot add new spouse later."
  },
  {
    situation: "Death of Spouse After Retirement",
    rule: "SBP coverage terminates. Premium payments stop. If you remarry, you have 1 year to elect coverage for new spouse."
  },
];

const CHECKLIST_ITEMS = [
  "Review SBP information during pre-retirement counseling (required)",
  "Understand the cost (6.5% of elected base amount)",
  "Understand the benefit (55% to survivor, with COLA)",
  "Calculate your specific cost and benefit amounts",
  "Discuss SBP election with spouse/family members",
  "Consider other insurance options (SGLI, VGLI, commercial life insurance)",
  "Determine if full, reduced, or decline is appropriate for your situation",
  "Complete DD Form 2656 accurately",
  "If married: ensure spouse concurrence section is completed and witnessed",
  "Submit DD Form 2656 with retirement application",
  "Verify SBP election appears correctly on first retired pay statement",
  "Verify SBP premium deduction is correct amount",
  "Keep copy of DD Form 2656 for your records",
  "Inform spouse/beneficiary of SBP coverage details",
  "Update beneficiary information if life changes occur (marriage, divorce, remarriage)",
];

export function SBPElectionsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Survivor Benefit Plan (SBP) Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Survivor Benefit Plan (SBP) provides monthly income to your survivors after your death.
            It is a monthly annuity purchased through premium deductions from your retired pay. At your
            death, your designated beneficiary receives 55% of your elected base amount as a monthly
            payment for life (spouse) or until a specified age (children). SBP payments include annual
            COLA increases.
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
            Why SBP Matters
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Your retired pay stops at your death - survivors receive nothing",
              "SBP provides continuing income to your spouse/children",
              "SBP is more cost-effective than commercial life insurance for this purpose",
              "SBP benefits include automatic COLA increases",
              "SBP premiums are pre-tax (reduces taxable income)",
              "SBP benefits are taxable income to survivor (but often at lower tax rate)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Irrevocable Decision</h4>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            Your SBP election at retirement is largely irrevocable. If you decline SBP, you generally
            cannot elect it later. If married, your spouse must concur in writing to any decline or
            reduction of coverage. Take time to understand this important decision.
          </p>
        </div>
      </>
    ),

    "coverage-options": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SBP Coverage Options
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You may elect different types of SBP coverage depending on your family situation. Each option
            has different costs and benefits.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Coverage Types
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Option</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Base Amount</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Survivor Benefit</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COVERAGE_OPTIONS.map((item) => (
                  <tr key={item.option}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.option}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.baseAmount}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.survivorBenefit}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Full vs. Reduced Coverage
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Full Coverage</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Base amount = 100% of your retired pay
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Survivor receives 55% of your full retired pay
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Maximum protection for your family
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Highest premium cost
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reduced Coverage</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Base amount = Any amount from $300 to less than full retired pay
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Survivor receives 55% of elected base amount
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Lower premium than full coverage
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Requires spouse concurrence if married
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Children Coverage
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Child beneficiaries receive SBP until:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Age 18 (or 22 if full-time student)",
              "Marriage",
              "Death",
              "If multiple children: benefit divides equally among eligible children",
              "When last child ages out or loses eligibility, payments stop",
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

    "cost-benefits": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SBP Cost and Benefits
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            SBP costs 6.5% of your elected base amount, deducted monthly from your retired pay. Your
            survivor receives 55% of the elected base amount as a monthly annuity.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Cost Examples
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Retired Pay</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Coverage</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Monthly Cost</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Survivor Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COST_EXAMPLES.map((item, index) => (
                  <tr key={index}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.retiredPay}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.coverage}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.monthlyCost}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.survivorBenefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Paid-Up Coverage at Age 70
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            SBP premiums stop at age 70 or after 360 months of payments (30 years), whichever comes first.
            Coverage continues for life at no additional cost after paid-up date.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Premium payments automatically stop at age 70",
              "If you retire before age 40, you pay for 30 years maximum",
              "Full coverage continues after premiums stop",
              "Survivor still receives 55% benefit if you die after paid-up",
              "COLA continues for survivor even after paid-up",
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
            Tax Considerations
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Retiree (While Living)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  SBP premiums are pre-tax deductions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Reduces taxable retired pay
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Lowers federal and state income tax
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Survivor</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  SBP annuity is taxable income
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Reported on IRS Form 1099-R
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                  Survivor may be in lower tax bracket
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">COLA Protection</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            SBP benefits receive the same annual Cost of Living Adjustments (COLA) as military retired
            pay. This helps your survivor's purchasing power keep pace with inflation over time, unlike
            most commercial life insurance which pays a fixed amount.
          </p>
        </div>
      </>
    ),

    "election-process": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SBP Election Process
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You make your SBP election at retirement using DD Form 2656 (Data for Payment of Retired
            Personnel). This is a required part of the retirement process.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Election Requirements
          </h3>
          <ul className="mt-4 space-y-2">
            {ELECTION_REQUIREMENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Spouse Concurrence Requirement
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If you are married, your spouse must concur (agree) in writing to:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Declining SBP coverage entirely",
              "Electing reduced coverage (less than full retired pay)",
              "Electing children-only coverage instead of spouse coverage",
              "Spouse signature must be witnessed by authorized person (notary, officer, etc.)",
              "Without spouse concurrence, you must elect full spouse coverage",
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
            Special Situations
          </h3>
          <div className="mt-4 space-y-4">
            {SPECIAL_SITUATIONS.map((item) => (
              <div key={item.situation} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.situation}</h4>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.rule}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Deemed Election</h4>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            If you are married and do not provide spouse concurrence to decline or reduce SBP, the law
            requires "deemed election" of full spouse coverage. Even if you want to decline, you cannot
            do so without spouse's signed concurrence. This protects the non-military spouse's interests.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SBP Election Checklist
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Complete these steps when making your SBP election at retirement. Take time to understand
            this important decision before finalizing your election.
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

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Get Professional Advice</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Consider consulting a financial advisor who understands military benefits before making your
            SBP election. This decision has long-term implications for your family's financial security.
            Pre-retirement counseling is required and will cover SBP in detail.
          </p>
        </div>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
