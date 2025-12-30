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
  { id: "losses", label: "Qualifying Losses" },
  { id: "application", label: "Application" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Coverage", description: "Automatic with SGLI" },
  { element: "Premium", description: "$1.00/month" },
  { element: "Payment Range", description: "$25,000 to $100,000" },
  { element: "Paid To", description: "Injured service member" },
  { element: "Coverage Period", description: "While covered by SGLI" },
  { element: "Time Limit", description: "Must survive 7 days post-injury" },
  { element: "Authority", description: "38 U.S.C. 1980A" },
];

const LOSS_CATEGORIES = [
  { category: "Amputation", examples: "Loss of hand, foot, arm, leg" },
  { category: "Sight", examples: "Total blindness in one or both eyes" },
  { category: "Hearing", examples: "Total deafness in one or both ears" },
  { category: "Speech", examples: "Total and permanent loss" },
  { category: "Paralysis", examples: "Quadriplegia, paraplegia, hemiplegia" },
  { category: "Burns", examples: "2nd or 3rd degree covering 30%+ of body or face" },
  { category: "Traumatic Brain Injury", examples: "Resulting in inability to perform ADLs" },
  { category: "Coma", examples: "Resulting from traumatic injury" },
  { category: "Other", examples: "Hospitalization in ICU for 15+ consecutive days" },
];

const PAYMENT_SCHEDULE = [
  { loss: "Quadriplegia", payment: "$100,000" },
  { loss: "Loss of 2 or more limbs", payment: "$100,000" },
  { loss: "Total blindness (both eyes)", payment: "$100,000" },
  { loss: "Burns 30%+ of body or face", payment: "$100,000" },
  { loss: "Paraplegia or hemiplegia", payment: "$75,000" },
  { loss: "Loss of 1 limb + 1 eye", payment: "$100,000" },
  { loss: "Loss of 1 hand or foot at/above wrist/ankle", payment: "$50,000" },
  { loss: "Loss of sight in 1 eye", payment: "$50,000" },
  { loss: "Loss of thumb and index finger same hand", payment: "$50,000" },
  { loss: "TBI with ADL loss", payment: "$25,000 to $100,000" },
  { loss: "Coma", payment: "$25,000 to $100,000" },
];

const ELIGIBILITY_REQUIREMENTS = [
  "Must be covered by SGLI when injury occurs",
  "Injury must be traumatic (physical, not illness)",
  "Injury must result in scheduled loss",
  "Must survive at least 7 full days after injury",
  "Loss must occur within 2 years of injury (most losses)",
  "Not result of self-inflicted injury or illegal activity",
];

const APPLICATION_STEPS = [
  "Obtain SGLV 8600 (TSGLI Application)",
  "Complete Part A (service member or representative)",
  "Physician completes Part B",
  "Commanding Officer certifies Part C",
  "Submit to branch TSGLI office",
];

const TIMELINE = [
  { timeframe: "Submission", status: "As soon as loss is confirmed" },
  { timeframe: "Initial Review", status: "30-60 days typical" },
  { timeframe: "Decision", status: "Approval, denial, or request for more info" },
  { timeframe: "Payment", status: "Within 30 days of approval" },
  { timeframe: "Appeal", status: "Within 1 year of denial" },
];

const CHECKLIST_ITEMS = [
  "Ensure medical documentation of injury",
  "Obtain SGLV 8600 form",
  "Complete Part A (service member section)",
  "Have physician complete Part B",
  "Have CO complete Part C",
  "Submit to Marine Corps TSGLI office",
  "Track claim status",
  "Appeal if denied and you disagree",
];

export function TSGLIContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TSGLI Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            TSGLI provides payment for traumatic injuries resulting in qualifying losses. TSGLI is
            automatic with SGLI enrollment and pays between $25,000 and $100,000 depending on the injury.
            Benefits are paid to the injured service member (not beneficiaries) to assist with recovery
            and rehabilitation.
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
            TSGLI and Other Benefits
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">TSGLI Does Not Affect:</p>
          <ul className="mt-4 space-y-2">
            {[
              "VA disability compensation",
              "Social Security disability",
              "Military retired pay",
              "Workers' compensation",
              "Other insurance payments",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
            TSGLI is in addition to other benefits you may receive.
          </p>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Multiple Losses</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            If you have multiple qualifying losses, you are paid for each qualifying loss. Maximum
            total payment is $100,000. Example: Loss of hand ($50,000) + loss of eye ($50,000) = $100,000.
          </p>
        </div>
      </>
    ),

    losses: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Qualifying Losses
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            TSGLI pays for these losses resulting from traumatic injuries:
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Loss Categories
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Category</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {LOSS_CATEGORIES.map((item) => (
                  <tr key={item.category}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.category}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Payment Schedule
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Loss</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {PAYMENT_SCHEDULE.map((item) => (
                  <tr key={item.loss}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.loss}</td>
                    <td className="py-3 text-green-600 dark:text-green-400">{item.payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Payment amounts vary based on severity. See TSGLI schedule for complete details.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligibility Requirements
          </h3>
          <ol className="mt-4 space-y-2">
            {ELIGIBILITY_REQUIREMENTS.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>
      </>
    ),

    application: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Apply
          </h2>
          <ol className="mt-4 space-y-2">
            {APPLICATION_STEPS.map((step, index) => (
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
            Marine Corps TSGLI Office
          </h3>
          <div className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p>Headquarters Marine Corps (MMSR-5)</p>
            <p>3280 Russell Road</p>
            <p>Quantico, VA 22134-5103</p>
            <p className="mt-4">Phone: 1-877-216-0825</p>
            <p>Email: TSGLI@usmc.mil</p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Application Timeline
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {TIMELINE.map((item) => (
                  <tr key={item.timeframe}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.timeframe}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Denied Claims
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">If Your Claim is Denied:</p>
          <ol className="mt-4 space-y-2">
            {[
              "Review denial letter for reason",
              "Gather additional evidence if available",
              "Submit written appeal within 1 year",
              "Appeal reviewed by OSGLI",
              "Further appeal available through Board of Veterans Appeals",
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
            If Traumatically Injured
          </h2>
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
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
