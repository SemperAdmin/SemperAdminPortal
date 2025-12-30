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
  { id: "retirement-systems", label: "Retirement Systems" },
  { id: "pay-calculation", label: "Pay Calculation" },
  { id: "benefits", label: "Benefits" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Eligibility", description: "20+ years of active duty service" },
  { element: "Retirement Systems", description: "Final Pay, High-3, or BRS" },
  { element: "High-3 Calculation", description: "2.5% per year of service" },
  { element: "BRS Calculation", description: "2.0% per year + TSP matching" },
  { element: "Immediate Pay", description: "Begins day after retirement" },
  { element: "Authority", description: "10 U.S.C. Chapter 71" },
];

const RETIREMENT_SYSTEMS = [
  {
    system: "Final Pay",
    applies: "Entered before Sept 8, 1980",
    multiplier: "2.5% per year",
    base: "Final basic pay"
  },
  {
    system: "High-3",
    applies: "Entered Sept 8, 1980 - Dec 31, 2017",
    multiplier: "2.5% per year",
    base: "Average of highest 36 months"
  },
  {
    system: "BRS",
    applies: "Entered on/after Jan 1, 2018 or opted in",
    multiplier: "2.0% per year",
    base: "Average of highest 36 months"
  },
];

const BRS_COMPONENTS = [
  "Defined Benefit Pension (2.0% multiplier)",
  "Automatic 1% TSP contribution after 60 days",
  "Up to 4% TSP matching after 2 years (vested)",
  "Continuation Pay at 12 YOS (USMC)",
  "Optional lump sum at retirement (25% or 50%)",
];

const RETIREMENT_BENEFITS = [
  { benefit: "TRICARE", description: "Health coverage for retiree and dependents" },
  { benefit: "Commissary Access", description: "Shopping privileges worldwide" },
  { benefit: "Exchange Access", description: "Military exchange privileges" },
  { benefit: "MWR Facilities", description: "Access to recreation facilities" },
  { benefit: "Space-A Travel", description: "Space-available military flights" },
  { benefit: "ID Card", description: "Blue retired military ID card" },
  { benefit: "VA Benefits", description: "Eligible for VA healthcare and benefits" },
];

const CHECKLIST_ITEMS = [
  "Verify years of service in MOL/OMPF (must have 20+ qualifying years)",
  "Determine which retirement system applies to you (Final Pay, High-3, or BRS)",
  "Review retirement pay calculation and estimated monthly amount",
  "Complete pre-retirement counseling (required)",
  "Submit retirement request (typically 12+ months in advance)",
  "Verify all service records are accurate and complete",
  "Update SGLV 8286 beneficiary designations",
  "Review SBP election options (must elect or decline at retirement)",
  "Ensure spouse concurrence for SBP election (if married)",
  "Complete final physical examination",
  "Schedule TAPS (Transition Assistance Program)",
  "Apply for VA disability rating before retirement",
  "Complete DD Form 2656 (Data for Payment of Retired Personnel)",
  "Set up direct deposit for retired pay",
  "Obtain retired military ID card",
];

export function ActiveDutyRetirementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Active Duty Retirement Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Active duty retirement is available to service members who complete 20 or more years of
            active service. Retired pay begins the day after retirement and continues for life. The
            amount is determined by your retirement system (Final Pay, High-3, or BRS), years of
            service, and base pay.
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
            Eligibility Requirements
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Complete 20 or more years of active duty service",
              "Receive honorable discharge",
              "Submit retirement request through chain of command",
              "Complete all pre-retirement requirements",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">20-Year Retirement</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            At 20 years of service under High-3, retired pay is 50% of your High-3 average basic pay.
            Under BRS, it's 40% plus TSP contributions. Each additional year of service increases
            your multiplier by 2.5% (High-3) or 2.0% (BRS).
          </p>
        </div>
      </>
    ),

    "retirement-systems": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Three Retirement Systems
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your retirement system is determined by when you entered military service. You cannot
            choose which system applies, except for those who were eligible to opt into BRS during
            the 2018 opt-in window.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Retirement System Comparison
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">System</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Applies To</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Multiplier</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Base Pay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {RETIREMENT_SYSTEMS.map((item) => (
                  <tr key={item.system}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.system}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.applies}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.multiplier}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.base}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            BRS Additional Components
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            BRS members receive additional retirement benefits:
          </p>
          <ul className="mt-4 space-y-2">
            {BRS_COMPONENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Check Your System</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Verify which retirement system applies to you in MOL or myPay. Contact your S-1/IPAC
            if you're unsure. This determines your entire retirement calculation.
          </p>
        </div>
      </>
    ),

    "pay-calculation": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            High-3 Retirement Pay Calculation
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The High-3 system (most common for current retirees) uses this formula:
          </p>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <p className="text-center font-mono text-sm text-zinc-900 dark:text-zinc-100">
              2.5% × Years of Service × High-3 Average Basic Pay
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            High-3 Calculation Example
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Example: 20 Years of Service</p>
              <div className="mt-2 space-y-1 text-zinc-700 dark:text-zinc-300">
                <p>Years of Service: 20</p>
                <p>High-3 Average: $6,000/month</p>
                <p>Calculation: 2.5% × 20 × $6,000 = 50% × $6,000 = $3,000/month</p>
                <p className="mt-2 font-semibold text-[var(--sa-red)]">Monthly Retired Pay: $3,000</p>
              </div>
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Example: 30 Years of Service</p>
              <div className="mt-2 space-y-1 text-zinc-700 dark:text-zinc-300">
                <p>Years of Service: 30</p>
                <p>High-3 Average: $7,000/month</p>
                <p>Calculation: 2.5% × 30 × $7,000 = 75% × $7,000 = $5,250/month</p>
                <p className="mt-2 font-semibold text-[var(--sa-red)]">Monthly Retired Pay: $5,250</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            BRS Retirement Pay Calculation
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            BRS uses a 2.0% multiplier instead of 2.5%:
          </p>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <p className="text-center font-mono text-sm text-zinc-900 dark:text-zinc-100">
              2.0% × Years of Service × High-3 Average Basic Pay
            </p>
          </div>
          <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
            At 20 years: BRS provides 40% vs. High-3's 50%. The difference is offset by TSP matching
            and continuation pay during your career.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            High-3 Average Calculation
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your High-3 average is calculated from the highest 36 consecutive months of basic pay.
            This is typically your last 3 years of service, but DFAS will automatically use whichever
            36-month period gives you the highest average.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Only basic pay counts (no BAH, BAS, or special pays)",
              "Promotions in your final years increase your High-3",
              "DFAS calculates this automatically - you don't choose the period",
              "Shown on your retirement pay estimate",
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

    benefits: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Active Duty Retirement Benefits
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            In addition to monthly retired pay, retirees receive lifetime benefits and privileges.
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
                {RETIREMENT_BENEFITS.map((item) => (
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
            TRICARE for Retirees
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Available Options:</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TRICARE Prime</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                HMO-style plan with enrollment fee. Requires PCM. Lower out-of-pocket costs.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TRICARE Select</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                PPO-style plan with annual deductible. More provider choice. Higher out-of-pocket costs.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TRICARE For Life (Age 65+)</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Medicare supplement. Must have Medicare Part A and B. No enrollment fee.
              </p>
            </div>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">COLA Increases</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Retired pay receives annual Cost of Living Adjustments (COLA) based on the Consumer Price
            Index. This helps your purchasing power keep pace with inflation throughout retirement.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Active Duty Retirement Checklist
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Complete these steps when planning and processing your retirement. Start at least 12-18
            months before your desired retirement date.
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
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">SBP Decision Required</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            You MUST make a Survivor Benefit Plan election at retirement. If married, spouse concurrence
            is required to decline or elect less than full coverage. This decision is largely irrevocable
            after retirement.
          </p>
        </div>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
