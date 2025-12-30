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
  { id: "placement", label: "Placement" },
  { id: "reevaluation", label: "Reevaluation" },
  { id: "outcomes", label: "Outcomes" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Purpose", description: "Temporary status for unstable medical conditions" },
  { element: "Maximum Duration", description: "5 years on TDRL" },
  { element: "Minimum Pay", description: "50% of base pay" },
  { element: "Reevaluation Frequency", description: "At least every 18 months" },
  { element: "Final Outcomes", description: "Permanent retire, separate, or return to duty" },
  { element: "Authority", description: "10 U.S.C. 1202, 1210" },
];

const TDRL_CRITERIA = [
  "Unfit for duty due to physical disability",
  "Disability is not stable enough for permanent determination",
  "Condition may improve with time and treatment",
  "Disability rating at time of placement determines pay level",
  "Must have at least 30% disability rating OR 20+ years of service",
];

const PAY_CALCULATION = [
  {
    rating: "30-40%",
    calculation: "50% minimum applies",
    example: "Base pay $5,000 → $2,500/month minimum"
  },
  {
    rating: "50%+",
    calculation: "Disability % × base pay",
    example: "70% rating × $5,000 = $3,500/month"
  },
  {
    rating: "20+ Years Service",
    calculation: "Greater of disability % or longevity %",
    example: "Same as medical retirement calculation"
  },
];

const REEVALUATION_PROCESS = [
  "Scheduled every 18 months (may be more frequent)",
  "Notification sent 60-90 days before reevaluation",
  "Must attend all medical examinations",
  "Current disability rating reassessed",
  "Stability of condition evaluated",
  "PEB determines if condition is now stable",
];

const POSSIBLE_OUTCOMES = [
  {
    outcome: "Remain on TDRL",
    description: "Condition still unstable, continue temporary retirement",
    action: "Continue receiving TDRL pay, schedule next reevaluation"
  },
  {
    outcome: "Permanent Retirement",
    description: "Condition stabilized, rating 30%+ or 20+ years",
    action: "Transfer to permanent disability retired list, same or updated rating"
  },
  {
    outcome: "Separation with Severance",
    description: "Condition stabilized, rating under 30% and under 20 years",
    action: "Discharged with severance pay, return to civilian status"
  },
  {
    outcome: "Return to Duty",
    description: "Condition improved, now fit for duty",
    action: "Return to active duty if within high year tenure and service needs"
  },
];

const TDRL_BENEFITS = [
  { benefit: "Monthly Pay", status: "Yes (minimum 50% of base pay)" },
  { benefit: "TRICARE", status: "Yes (Prime or Select)" },
  { benefit: "Commissary/Exchange", status: "Yes" },
  { benefit: "Space-A Travel", status: "Yes" },
  { benefit: "ID Card", status: "Yes (TDRL retired ID card)" },
  { benefit: "SBP Coverage", status: "Optional (can elect at TDRL placement)" },
];

const CHECKLIST_PLACEMENT = [
  "Receive PEB determination for TDRL placement",
  "Review TDRL placement rating and pay calculation",
  "Accept or appeal TDRL determination (if disputing)",
  "Complete DD Form 2656 (Data for Payment of Retired Personnel)",
  "Make SBP election (spouse concurrence if married)",
  "Set up direct deposit for TDRL pay",
  "Obtain TDRL retired ID card",
  "Enroll in TRICARE coverage",
  "Apply for VA disability rating",
  "Complete out-processing from active duty",
];

const CHECKLIST_ONGOING = [
  "Attend all scheduled medical reevaluations",
  "Keep contact information current with DFAS and PEB",
  "Maintain all medical documentation and treatment records",
  "Respond to all reevaluation notices within required timeframes",
  "Continue treatment as prescribed by medical providers",
  "Report any significant changes in condition to TDRL monitor",
  "Track reevaluation schedule (every 18 months minimum)",
  "Prepare for final disposition (permanent retirement, separation, or return)",
];

export function TDRLContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TDRL Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Temporary Disability Retired List (TDRL) is for service members whose medical conditions
            are not stable enough to make a permanent fitness determination. TDRL provides temporary
            retirement status while the condition stabilizes. Members are reevaluated periodically to
            determine if they can return to duty, qualify for permanent retirement, or should be separated
            with severance pay.
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
            Why TDRL Exists
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Some medical conditions may improve, worsen, or stabilize over time. TDRL allows time for
            the condition to stabilize before making a final determination. Examples include:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Mental health conditions with uncertain prognosis",
              "Injuries still undergoing treatment and rehabilitation",
              "Conditions expected to improve with time and therapy",
              "Progressive diseases with unpredictable course",
              "Post-surgical recovery with uncertain outcome",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">5-Year Maximum</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            You cannot remain on TDRL for more than 5 years. Before the 5-year mark, you must be given
            a final disposition: permanent retirement, separation with severance, or return to duty.
            Most members receive final disposition within 2-3 years.
          </p>
        </div>
      </>
    ),

    placement: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TDRL Placement Criteria
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Physical Evaluation Board (PEB) determines if you should be placed on TDRL rather than
            permanent retirement or separation.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TDRL Placement Requirements
          </h3>
          <ul className="mt-4 space-y-2">
            {TDRL_CRITERIA.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TDRL Pay Calculation
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            TDRL pay is calculated the same as permanent medical retirement, with a minimum of 50% of
            base pay.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Rating/Service</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Calculation</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {PAY_CALCULATION.map((item) => (
                  <tr key={item.rating}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.rating}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.calculation}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TDRL Benefits
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Benefit</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {TDRL_BENEFITS.map((item) => (
                  <tr key={item.benefit}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.benefit}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">SBP Election on TDRL</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            You may elect SBP coverage when placed on TDRL. If you elect SBP and are later returned to
            duty, your SBP coverage terminates. If you decline SBP on TDRL and are later permanently
            retired, you must make a new SBP election at that time.
          </p>
        </div>
      </>
    ),

    reevaluation: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Periodic Reevaluation Process
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            While on TDRL, you are subject to periodic reevaluation at least every 18 months. The Navy
            may schedule more frequent reevaluations if warranted by your condition.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reevaluation Steps
          </h3>
          <ol className="mt-4 space-y-2">
            {REEVALUATION_PROCESS.map((step, index) => (
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
            What Happens During Reevaluation
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Medical examination by military or civilian providers",
              "Review of all medical records since last evaluation",
              "Assessment of current functional capacity",
              "Determination if condition has stabilized",
              "Updated disability rating if condition changed",
              "PEB recommendation for final disposition or continued TDRL",
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
            Your Responsibilities
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Keep DFAS and PEB updated with current contact information",
              "Respond promptly to all reevaluation notices",
              "Attend all scheduled medical appointments",
              "Provide complete medical documentation",
              "Continue prescribed treatment and therapy",
              "Report significant changes in your condition",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Failure to Cooperate</h4>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            If you fail to cooperate with reevaluation (miss appointments, don't respond to notices),
            the Navy may make a final disposition based on available information, which could result in
            removal from TDRL without your input.
          </p>
        </div>
      </>
    ),

    outcomes: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Possible TDRL Outcomes
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            After reevaluation, the PEB will make one of four determinations. Each outcome has different
            implications for your status, pay, and benefits.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Four Possible Outcomes
          </h3>
          <div className="mt-4 space-y-4">
            {POSSIBLE_OUTCOMES.map((item) => (
              <div key={item.outcome} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.outcome}</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Action:</strong> {item.action}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Permanent Retirement Details
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When transferred to permanent disability retirement:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Your disability rating may stay the same or be updated",
              "Pay recalculated based on permanent rating",
              "Transfer from TDRL to Permanent Disability Retired List (PDRL)",
              "No more periodic reevaluations",
              "All retiree benefits continue",
              "May now qualify for CRDP or CRSC (with VA rating)",
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
            Separation with Severance Details
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If separated with severance pay:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Rating stabilized under 30% with less than 20 years service",
              "Receive lump-sum severance payment",
              "TDRL pay stops upon separation",
              "TRICARE coverage continues 180 days (Transitional Assistance)",
              "Must repay severance if later receive VA disability pay",
              "May apply for reconsideration through BCNR",
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
            Return to Duty Details
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If found fit for duty and returned:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Must be within high year tenure limits",
              "Service must have manning requirement for your MOS/rate",
              "TDRL pay stops upon return to active duty",
              "Resume active duty pay and allowances",
              "May need to meet PFT/CFT standards",
              "All time on TDRL counts toward retirement eligibility",
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

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TDRL Placement Checklist
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Complete these items when initially placed on TDRL:
          </p>
          <div className="mt-4 space-y-2">
            {CHECKLIST_PLACEMENT.map((item) => (
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
            Ongoing TDRL Responsibilities
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Maintain these responsibilities while on TDRL:
          </p>
          <div className="mt-4 space-y-2">
            {CHECKLIST_ONGOING.map((item) => (
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

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">TDRL Time Counts</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            All time spent on TDRL counts as creditable service for retirement purposes. If you are later
            returned to duty and serve to 20 years, your TDRL time counts toward total years of service
            for active duty retirement.
          </p>
        </div>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
