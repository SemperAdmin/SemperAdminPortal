"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: {
    references: Reference[];
  };
}

const KEY_POINTS = [
  { label: "System", value: "Integrated Disability Evaluation System (IDES)" },
  { label: "Authority", value: "10 U.S.C. Chapter 61, SECNAVINST 1850.4" },
  { label: "Boards", value: "MEB (Medical), PEB (Physical)" },
  { label: "Threshold", value: "30% disability rating for retirement" },
  { label: "Support", value: "Wounded Warrior Regiment (WWR)" },
];

const IDES_STEPS = [
  { step: "Referral", description: "Medical provider refers Marine to MEB", timeframe: "As needed" },
  { step: "Medical Evaluation Board (MEB)", description: "Determines if condition meets retention standards", timeframe: "Variable" },
  { step: "Physical Evaluation Board (PEB)", description: "Determines fitness for duty and disability rating", timeframe: "45 days" },
  { step: "VA Rating", description: "VA provides disability rating (may differ from PEB)", timeframe: "Concurrent" },
  { step: "PEB Decision", description: "Fit for duty, separated, or retired", timeframe: "30 days" },
  { step: "Appeal/Final", description: "Accept or appeal PEB findings", timeframe: "10 days" },
];

const PEB_OUTCOMES = [
  {
    outcome: "Fit for Duty",
    description: "Condition does not prevent performance of duties",
    result: "Return to duty, retain in service",
    rating: "N/A"
  },
  {
    outcome: "Unfit, <30%",
    description: "Unfit for duty but disability rated below 30%",
    result: "Medical separation with severance pay",
    rating: "0-20%"
  },
  {
    outcome: "Unfit, 30%+",
    description: "Unfit for duty with disability 30% or higher",
    result: "Medical retirement with retired pay",
    rating: "30-100%"
  },
  {
    outcome: "TDRL",
    description: "Temporary Disability Retired List (unstable condition)",
    result: "Temporary retirement, reevaluated in 18-24 months",
    rating: "30%+ (temporary)"
  },
];

const MEDICAL_VS_RETIREMENT = [
  { aspect: "Medical Separation", description: "Less than 30% disability rating", payment: "One-time severance pay" },
  { aspect: "Medical Retirement", description: "30% or higher disability rating", payment: "Monthly retired pay for life" },
  { aspect: "TDRL", description: "Unstable condition requiring reevaluation", payment: "Temporary monthly payments" },
];

const SEVERANCE_CALCULATION = [
  { component: "Base Pay", description: "Monthly base pay at time of separation" },
  { component: "Years of Service", description: "Full and fractional years of service" },
  { component: "Formula", description: "2 × base pay × years of service" },
  { component: "Minimum", description: "Minimum one year's base pay" },
  { component: "Maximum", description: "Maximum determined by law and rating" },
  { component: "Tax Treatment", description: "May be partially tax-free if combat-related" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "ides", label: "IDES Process" },
  { id: "outcomes", label: "PEB Outcomes" },
  { id: "severance", label: "Severance Pay" },
  { id: "references", label: "References", type: "references" as const },
];

export function MedicalSeparationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical Separation and Retirement
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Medical separation or retirement occurs when a Marine has a medical condition that prevents
            them from performing their military duties. The Integrated Disability Evaluation System (IDES)
            determines whether a Marine is fit for duty and, if not, whether they qualify for separation
            with severance pay or retirement with monthly benefits.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MEB vs PEB
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Medical Evaluation Board (MEB)</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Reviews medical records and examinations. Determines if the Marine&apos;s condition meets
                medical retention standards. Does not make fitness determination.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Physical Evaluation Board (PEB)</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Determines fitness for duty. Assigns disability rating. Recommends separation, retirement,
                or return to duty. Decision is binding unless appealed.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            The 30% Threshold
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The critical threshold for medical retirement is a 30% disability rating:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-900 dark:text-red-100">Below 30%</h4>
              <p className="mt-2 text-sm text-red-800 dark:text-red-200">
                Medical separation with one-time severance pay. No monthly retired pay. Must leave service.
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-900 dark:text-green-100">30% or Higher</h4>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                Medical retirement with monthly retired pay for life. Full retiree benefits and privileges.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Wounded Warrior Regiment Support</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            If you are going through the IDES process, contact the Wounded Warrior Regiment (WWR). They
            provide Recovery Care Coordinators who guide you through the process, ensure you receive
            proper medical care, and help you prepare for transition. WWR support is invaluable during
            this challenging time.
          </p>
        </section>
      </div>
    ),

    ides: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            IDES Process Steps
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Step</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                </tr>
              </thead>
              <tbody>
                {IDES_STEPS.map((item) => (
                  <tr key={item.step} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.step}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.timeframe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Triggers IDES?
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A Marine enters the IDES process when:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Medical provider determines condition does not meet retention standards",
              "Marine has limited duty for extended period (typically 365+ days)",
              "Permanent physical profile prevents performance of duties",
              "Condition is unlikely to improve sufficiently for full duty",
              "Referral can be initiated by provider or command",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Your Role in IDES
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            As a Marine in the IDES process, you must:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Attend all scheduled medical appointments",
              "Provide complete and accurate medical history",
              "Submit all medical documentation from civilian providers",
              "Participate in VA examinations (concurrent with DoD process)",
              "Review and acknowledge all MEB and PEB documents",
              "Meet all deadlines for responses and appeals",
              "Stay in contact with Recovery Care Coordinator",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Concurrent VA Rating
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Under IDES, the VA evaluates your conditions at the same time as the PEB:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">DoD (PEB) Rating</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Rates only unfitting conditions</li>
                <li>• Determines separation or retirement</li>
                <li>• May be lower than VA rating</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">VA Rating</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Rates all service-connected conditions</li>
                <li>• Determines VA compensation</li>
                <li>• Usually higher than PEB rating</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Document Everything</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Keep copies of all medical records, especially documentation of how your condition affects
            your ability to perform duties. The PEB only rates conditions that make you unfit for duty,
            so clear documentation of functional limitations is critical. Even minor conditions should
            be documented for potential VA rating.
          </p>
        </section>
      </div>
    ),

    outcomes: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Possible PEB Outcomes
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Outcome</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Result</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Rating</th>
                </tr>
              </thead>
              <tbody>
                {PEB_OUTCOMES.map((item) => (
                  <tr key={item.outcome} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.outcome}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.result}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Separation vs. Retirement
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Payment</th>
                </tr>
              </thead>
              <tbody>
                {MEDICAL_VS_RETIREMENT.map((item) => (
                  <tr key={item.aspect} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.aspect}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Temporary Disability Retired List (TDRL)
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            TDRL is used when a condition is not stable enough for a final determination:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Condition is rated 30% or higher but unstable",
              "Placed on TDRL with temporary retired status",
              "Receive monthly retired pay based on current rating",
              "Reevaluated every 18-24 months",
              "Maximum 5 years on TDRL",
              "Final disposition: permanent retirement, separation, or return to duty",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Appeal Rights
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You have the right to appeal PEB findings:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Informal PEB</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Review findings in writing</li>
                <li>• Submit rebuttal or request reconsideration</li>
                <li>• 10 days to respond</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Formal PEB</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Request formal hearing</li>
                <li>• Appear in person with counsel</li>
                <li>• Present evidence and witnesses</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Know Your Rating</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Understand how the PEB calculated your disability rating. If you disagree with the rating
            or the unfitting conditions, you should appeal. The difference between a 20% rating (separation)
            and 30% rating (retirement) is monthly retired pay for life. Consult with legal assistance
            and your Recovery Care Coordinator before accepting an unfavorable finding.
          </p>
        </section>
      </div>
    ),

    severance: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Severance Pay Calculation
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Component</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {SEVERANCE_CALCULATION.map((item) => (
                  <tr key={item.component} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.component}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Severance Pay Formula
          </h3>
          <div className="mt-4 rounded-lg bg-zinc-50 p-6 dark:bg-zinc-800/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Severance Pay = 2 × Monthly Base Pay × Years of Service
              </div>
              <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                Minimum: 1 year of base pay
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Example Calculation</h4>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              E-5 with 6 years service, monthly base pay $3,000:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Base pay: $3,000</li>
              <li>• Years of service: 6</li>
              <li>• Calculation: 2 × $3,000 × 6 = $36,000</li>
              <li>• <strong>Total severance: $36,000 (one-time payment)</strong></li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Severance Pay and VA Compensation
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Important information about receiving both severance pay and VA disability compensation:
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <h4 className="font-medium text-amber-900 dark:text-amber-100">Recoupment</h4>
            <p className="mt-2 text-sm text-amber-800 dark:text-amber-200">
              VA will withhold (recoup) monthly disability compensation payments until the full amount
              of severance pay is recovered. This means you will not receive VA compensation payments
              initially, but will eventually receive them once the severance is recouped.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Tax Treatment
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Severance pay may be partially or fully tax-free:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-900 dark:text-green-100">Combat-Related</h4>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                If your disability is combat-related, severance pay may be tax-free. Consult with a
                tax professional for specific guidance.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Non-Combat</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                For non-combat disabilities, severance pay is generally taxable income. Taxes will
                be withheld at separation.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Payment Timeline
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Severance pay is paid as a lump sum at final pay settlement",
              "Payment typically received within 30-60 days of separation",
              "Ensure direct deposit information is current",
              "Review final pay statement for accuracy",
              "Contact DFAS if payment is delayed beyond 60 days",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Financial Planning Essential</h4>
          <p className="mt-1 text-sm text-red-700 dark:text-red-300">
            Severance pay is a one-time payment, not ongoing income. Create a financial plan before
            separation. Consider that VA compensation may be withheld during recoupment. Budget carefully,
            avoid large purchases immediately after receiving severance, and consult with a financial
            counselor through Personal Financial Management Services.
          </p>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
