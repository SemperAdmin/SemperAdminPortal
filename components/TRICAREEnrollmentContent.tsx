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
  { id: "plans", label: "Plans" },
  { id: "enrollment", label: "Enrollment" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Active Duty", description: "TRICARE Prime (automatic, no cost)" },
  { element: "Dependents", description: "TRICARE Prime, Select, or other options" },
  { element: "Enrollment", description: "Via milConnect or Beneficiary Web Enrollment" },
  { element: "Eligibility", description: "Must be registered in DEERS" },
  { element: "Authority", description: "10 U.S.C. Chapter 55" },
];

const PLAN_OPTIONS = [
  { plan: "TRICARE Prime", bestFor: "Families near MTF", cost: "Lowest", providerChoice: "Limited, PCM required" },
  { plan: "TRICARE Select", bestFor: "Families wanting choice", cost: "Higher", providerChoice: "Any TRICARE-authorized provider" },
  { plan: "TRICARE Prime Remote", bestFor: "Families 50+ miles from MTF", cost: "Lowest", providerChoice: "PCM assigned in civilian network" },
];

const PRIME_FEATURES = [
  "Lowest out-of-pocket costs",
  "Primary Care Manager (PCM) assigned",
  "Referrals required for specialty care",
  "Point-of-service option for out-of-network care",
  "Enhanced access to military treatment facilities",
];

const SELECT_FEATURES = [
  "More provider choice",
  "No PCM required",
  "Self-refer to specialists",
  "Higher cost shares than Prime",
  "Can use any TRICARE-authorized provider",
];

const ENROLLMENT_STEPS = [
  "Log into milConnect (https://milconnect.dmdc.osd.mil)",
  "Navigate to Benefits",
  "Select \"Beneficiary Web Enrollment\"",
  "Select dependents to enroll",
  "Choose TRICARE plan",
  "Select Primary Care Manager (for Prime)",
  "Complete enrollment",
  "Print confirmation",
];

const QUALIFYING_EVENTS = [
  "Marriage or divorce",
  "Birth or adoption",
  "PCS move",
  "Loss of other coverage",
  "Other qualifying events",
];

const COMMON_ISSUES = [
  { issue: "Dependent not in DEERS", resolution: "Visit ID card office, add to DEERS" },
  { issue: "Wrong plan enrolled", resolution: "Contact regional contractor to change" },
  { issue: "PCM not accepting patients", resolution: "Request different PCM" },
  { issue: "Coverage denied", resolution: "Verify DEERS eligibility, contact contractor" },
  { issue: "Claims not paid", resolution: "Verify enrollment dates and provider network" },
];

const REGIONAL_CONTACTS = [
  { region: "West", contractor: "Health Net Federal Services", phone: "1-844-866-9378" },
  { region: "East", contractor: "Humana Military", phone: "1-800-444-5445" },
  { region: "Overseas", contractor: "International SOS", phone: "1-877-678-1207" },
];

const CHECKLIST_INITIAL = [
  "Add dependents to DEERS",
  "Obtain ID cards",
  "Choose TRICARE plan",
  "Enroll via milConnect or phone",
  "Select PCM (if Prime)",
  "Print enrollment confirmation",
];

const CHECKLIST_ANNUAL = [
  "Verify enrollment current",
  "Evaluate plan during open season",
  "Update if PCS or life event",
  "Confirm PCM still available",
];

export function TRICAREEnrollmentContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TRICARE Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            TRICARE is the healthcare program for uniformed service members, retirees, and their families.
            Active duty service members receive TRICARE Prime automatically. Dependents must enroll in a
            TRICARE plan to receive coverage. Understanding TRICARE options ensures you and your family
            receive appropriate healthcare coverage.
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
            Active Duty Coverage (Automatic)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">TRICARE Prime for Service Members:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Automatic enrollment upon entry",
              "No enrollment action required",
              "No cost for healthcare",
              "Primary Care Manager (PCM) at MTF",
              "Referrals required for specialty care",
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
            TRICARE Contacts
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Region</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Contractor</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Phone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {REGIONAL_CONTACTS.map((item) => (
                  <tr key={item.region}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.region}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.contractor}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    plans: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TRICARE Plans for Active Duty Families
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Plan</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Best For</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Cost</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Provider Choice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {PLAN_OPTIONS.map((item) => (
                  <tr key={item.plan}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.plan}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.bestFor}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.cost}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.providerChoice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TRICARE Prime Features
          </h3>
          <ul className="mt-4 space-y-2">
            {PRIME_FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Enrollment Fees (Active Duty Dependents): $0
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TRICARE Select Features
          </h3>
          <ul className="mt-4 space-y-2">
            {SELECT_FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Enrollment Fees: Vary by sponsor status (check TRICARE website for current rates)
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TRICARE Prime Remote
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">For Families Living 50+ Miles from MTF:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Same benefits as Prime",
              "PCM in civilian network",
              "Priority access standards apply",
              "Available to AD family members in remote areas",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Eligibility: Live more than 50 miles from MTF or more than 1 hour drive time.
          </p>
        </section>
      </>
    ),

    enrollment: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Dependent Enrollment
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Who Must Enroll:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Spouses",
              "Children under 21 (or 23 if student)",
              "Other eligible dependents",
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
            Enrolling Dependents via milConnect
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
            Changing Plans
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Open Season:</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Annual period to change plans (typically November-December)</li>
            <li>Changes effective January 1</li>
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Qualifying Life Events (QLE):</p>
          <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Can change plans outside open season for:</p>
          <ul className="mt-2 space-y-2">
            {QUALIFYING_EVENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common TRICARE Issues
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
            Initial Enrollment (New Dependents)
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_INITIAL.map((item) => (
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
            Annual Review
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_ANNUAL.map((item) => (
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
