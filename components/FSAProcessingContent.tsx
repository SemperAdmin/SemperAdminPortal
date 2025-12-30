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
  { id: "eligibility", label: "Eligibility" },
  { id: "processing", label: "Processing" },
  { id: "verification", label: "Verification" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "FSA Rate", description: "$250/month" },
  { element: "Start Date", description: "31st day of separation" },
  { element: "Eligibility", description: "Marines with dependents on orders over 30 days" },
  { element: "Types", description: "FSA-R (Restricted), FSA-S (Ship), FSA-T (TDY)" },
  { element: "Authority", description: "37 U.S.C. 427" },
];

const FSA_TYPES = [
  { type: "FSA-R", description: "Restricted from dependents at PDS", situations: "Dependent-restricted duty station" },
  { type: "FSA-S", description: "Ship-based duty", situations: "Navy ships, MEU deployment" },
  { type: "FSA-T", description: "TDY/deployment", situations: "Deployment, extended TDY" },
];

const ELIGIBILITY_REQUIREMENTS = [
  "Dependents (spouse or children)",
  "Dependents in DEERS",
  "Orders causing separation over 30 days",
  "Physical separation from dependents",
];

const NOT_ELIGIBLE = [
  "No dependents",
  "Dependents reside with you",
  "Separation is voluntary (not order-related)",
  "Separation under 30 days",
];

const FSA_DATES = [
  { event: "Day 1-30 of separation", status: "Not entitled" },
  { event: "Day 31 of separation", status: "FSA begins" },
  { event: "Return to dependents", status: "FSA ends on return date" },
  { event: "Leave (with dependents)", status: "FSA continues if duty station restricts" },
];

const IF_NOT_AUTOMATIC = [
  "Verify dependents in DEERS",
  "Submit request to S-1",
  "Provide deployment orders",
  "S-1 initiates FSA",
  "Finance processes",
  "Verify on LES",
];

const LES_CHECK = [
  "FSA entitlement listed",
  "Correct start date (31st day of separation)",
  "Amount ($250/month)",
  "Correct type (FSA-R, FSA-S, or FSA-T)",
];

const IF_MISSING = [
  "Document separation dates",
  "Verify dependents in DEERS",
  "Report to S-1",
  "Provide orders showing separation",
  "Track correction",
];

const LEAVE_STATUS = [
  { location: "At deployed location", status: "FSA continues" },
  { location: "With dependents at home", status: "FSA continues (if deployment ongoing)" },
  { location: "Environmental morale leave", status: "FSA continues" },
];

const BEFORE_DEPLOYMENT = [
  "Verify dependents in DEERS",
  "Ensure dependent information current",
  "Understand FSA eligibility",
];

const DURING_DEPLOYMENT = [
  "Check LES after day 30 for FSA",
  "Verify start date is correct",
  "Report discrepancies to S-1",
];

const POST_DEPLOYMENT = [
  "Verify FSA ends on return date",
  "Check for any over/underpayment",
  "Report issues to Finance",
];

export function FSAProcessingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FSA Processing Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Family Separation Allowance (FSA) compensates service members separated from their dependents
            due to military orders. FSA begins after 30 continuous days of separation. Proper processing
            ensures you receive this entitlement while supporting your family during deployment.
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
            FSA Types
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Common Situations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {FSA_TYPES.map((item) => (
                  <tr key={item.type}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.type}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.situations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    eligibility: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FSA Eligibility Requirements
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">You Must Have:</p>
          <ul className="mt-4 space-y-2">
            {ELIGIBILITY_REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
            You Are NOT Eligible If
          </h3>
          <ul className="mt-4 space-y-2">
            {NOT_ELIGIBLE.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FSA Start and End Dates
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Event</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">FSA Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {FSA_DATES.map((item) => (
                  <tr key={item.event}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.event}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FSA and Leave
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Leave Location</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">FSA Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {LEAVE_STATUS.map((item) => (
                  <tr key={item.location}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.location}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Dual-Military Couples</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Both members receive FSA if separated from each other and dependents. Each must be on
            qualifying orders. Dependents must be cared for by non-military caregiver.
          </p>
        </div>
      </>
    ),

    processing: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FSA Processing
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            FSA should start automatically based on deployment orders in system, dependent status in DEERS,
            and MCTFS deployment entry.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If FSA Not Automatic
          </h3>
          <ol className="mt-4 space-y-2">
            {IF_NOT_AUTOMATIC.map((step, index) => (
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

    verification: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verifying FSA on LES
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Check Your LES For:</p>
          <ul className="mt-4 space-y-2">
            {LES_CHECK.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Missing or Incorrect
          </h3>
          <ol className="mt-4 space-y-2">
            {IF_MISSING.map((step, index) => (
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
            Before Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {BEFORE_DEPLOYMENT.map((item) => (
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
            During Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {DURING_DEPLOYMENT.map((item) => (
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
            Post-Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {POST_DEPLOYMENT.map((item) => (
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
