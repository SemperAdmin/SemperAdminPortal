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
  { id: "milconnect", label: "Update via milConnect" },
  { id: "options", label: "Designation Options" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "SGLI Beneficiary", description: "SGLV 8286 or milConnect SOES" },
  { element: "VGLI Beneficiary", description: "SGLV 8712" },
  { element: "Update Frequency", description: "After any life event" },
  { element: "Overrides Will", description: "Yes, for insurance proceeds" },
  { element: "Effective Date", description: "Upon receipt by OSGLI" },
];

const WITHOUT_BENEFICIARY = [
  "Benefits paid to wrong person",
  "Delayed payment while sorting out issues",
  "Ex-spouse may receive benefits",
  "Unintended recipients",
  "Legal disputes among family",
];

const WITH_BENEFICIARY = [
  "Benefits paid quickly to intended person",
  "No disputes or delays",
  "Your wishes honored",
];

const UPDATE_METHODS = [
  { method: "milConnect SOES", speed: "Immediate", confirmation: "Instant printable", recommended: "Yes - Primary Method" },
  { method: "SGLV 8286 (Paper)", speed: "Weeks", confirmation: "None until processed", recommended: "Backup only" },
];

const MILCONNECT_STEPS = [
  "Go to https://milconnect.dmdc.osd.mil",
  "Log in with CAC, DS Logon Premium, or ID.me",
  "Select \"Benefits\" from top menu",
  "Select \"Life Insurance (SOES)\"",
  "Select \"Beneficiary Designation\"",
  "Review current beneficiaries",
  "Select \"Edit\" to modify or \"Add\" for new beneficiary",
  "Enter or update beneficiary information",
  "Ensure primary beneficiary percentages total 100%",
  "Add contingent beneficiaries (recommended)",
  "Review all entries for accuracy",
  "Select \"Submit\"",
  "Print confirmation page",
  "Save confirmation to personal records",
];

const DESIGNATION_TYPES = [
  { type: "By Name", description: "Specific person", example: "\"John Smith, SSN 123-45-6789\"" },
  { type: "By Relationship", description: "Relationship category", example: "\"My spouse\"" },
  { type: "Per Stirpes", description: "Descendants if beneficiary dies", example: "\"Children per stirpes\"" },
  { type: "Estate", description: "Your estate", example: "\"Estate of [your name]\"" },
  { type: "Trust", description: "Specific trust", example: "\"Smith Family Trust dated 1/1/2020\"" },
];

const COMMON_MISTAKES = [
  { mistake: "No designation", problem: "Statutory order applies", prevention: "Designate beneficiaries" },
  { mistake: "Ex-spouse listed", problem: "Ex may receive benefits", prevention: "Update after divorce" },
  { mistake: "Deceased beneficiary", problem: "Delays, statutory order may apply", prevention: "Update promptly" },
  { mistake: "Minor child as beneficiary", problem: "Court-appointed guardian manages funds", prevention: "Consider trust" },
  { mistake: "Percentages not 100%", problem: "Proportional distribution", prevention: "Verify math" },
];

const LIFE_EVENTS = [
  { event: "Marriage", action: "Add spouse as beneficiary" },
  { event: "Divorce", action: "Remove ex-spouse" },
  { event: "Birth of child", action: "Add child or update allocation" },
  { event: "Death of beneficiary", action: "Designate new beneficiary" },
  { event: "Before deployment", action: "Verify current" },
  { event: "Annually", action: "Review for accuracy" },
];

const CHECKLIST_REGULAR = [
  "Access milConnect SOES",
  "Review current beneficiary designation",
  "Verify names and percentages",
  "Confirm contact information current",
  "Update if any changes needed",
  "Print confirmation",
];

const CHECKLIST_LIFE_EVENT = [
  "Identify beneficiary changes needed",
  "Update via milConnect SOES (fastest)",
  "Or submit paper form (SGLV 8286)",
  "Verify update was processed",
  "Inform new beneficiaries of coverage",
];

const CHECKLIST_DEPLOYMENT = [
  "Review all beneficiary designations",
  "Update if needed",
  "Provide beneficiary contact info to family",
  "Ensure beneficiaries know coverage exists",
];

export function BeneficiaryUpdatesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Beneficiary Updates Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Beneficiary designations control who receives your life insurance proceeds. Your designated
            beneficiaries receive SGLI, FSGLI, and VGLI benefits when you die, regardless of what your
            will says. Keeping beneficiaries current prevents delays and ensures benefits go to the right people.
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
            Why Beneficiary Updates Matter
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Without Correct Beneficiary:</h4>
              <ul className="mt-2 space-y-1">
                {WITHOUT_BENEFICIARY.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-red-800 dark:text-red-200">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
              <h4 className="font-semibold text-green-800 dark:text-green-200">With Current Beneficiary:</h4>
              <ul className="mt-2 space-y-1">
                {WITH_BENEFICIARY.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-green-800 dark:text-green-200">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When to Update Beneficiaries
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Life Event</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {LIFE_EVENTS.map((item) => (
                  <tr key={item.event}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.event}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Important</h4>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            Your will does NOT override your life insurance beneficiary designation. To change who
            receives SGLI/VGLI, you must update the beneficiary form.
          </p>
        </div>
      </>
    ),

    milconnect: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Methods to Update Beneficiaries
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Method</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Speed</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Confirmation</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {UPDATE_METHODS.map((item) => (
                  <tr key={item.method}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.method}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.speed}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.confirmation}</td>
                    <td className={`py-3 font-medium ${item.recommended.includes("Yes") ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}>
                      {item.recommended}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Updating via milConnect SOES (Primary Method)
          </h3>
          <ol className="mt-4 space-y-2">
            {MILCONNECT_STEPS.map((step, index) => (
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
            What SOES Confirmation Shows
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Coverage amount",
              "Primary beneficiaries",
              "Contingent beneficiaries",
              "Percentages",
              "Last update date/time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Paper Form (Backup Only)</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Use paper form only if milConnect is unavailable (system outage, deployed without internet,
            technical issues). Paper forms create delays and risk of loss. Return to milConnect SOES
            as soon as possible.
          </p>
        </div>
      </>
    ),

    options: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Beneficiary Designation Options
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {DESIGNATION_TYPES.map((item) => (
                  <tr key={item.type}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.type}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Primary vs. Contingent Beneficiaries
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">Primary Beneficiary</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">First in line to receive benefits; receives full designated percentage if living</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">Contingent Beneficiary</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">Receives benefits if primary is deceased; important backup designation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Example:</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Primary: Spouse Jane Doe - 100%</li>
              <li>Contingent: Children equally per stirpes</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Beneficiary Mistakes
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Mistake</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Problem</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Prevention</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COMMON_MISTAKES.map((item) => (
                  <tr key={item.mistake}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.mistake}</td>
                    <td className="py-3 text-red-600 dark:text-red-400">{item.problem}</td>
                    <td className="py-3 text-green-600 dark:text-green-400">{item.prevention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Special Situations
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Minor Children:</h4>
              <ul className="mt-2 space-y-1">
                {[
                  "Can name as beneficiary",
                  "Court appoints guardian for funds",
                  "Consider naming adult trustee instead",
                  "Uniform Transfers to Minors Act (UTMA) option",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Trusts:</h4>
              <ul className="mt-2 space-y-1">
                {[
                  "Can name trust as beneficiary",
                  "Trust must exist and be properly established",
                  "Include trust name and date established",
                  "Consult estate planning attorney",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Divorced:</h4>
              <ul className="mt-2 space-y-1">
                {[
                  "Ex-spouse remains beneficiary unless you change it",
                  "Divorce does not automatically remove ex-spouse",
                  "Update immediately after divorce final",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    {item}
                  </li>
                ))}
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
            Regular Review
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_REGULAR.map((item) => (
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
            After Life Event
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_LIFE_EVENT.map((item) => (
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
            Before Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_DEPLOYMENT.map((item) => (
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
