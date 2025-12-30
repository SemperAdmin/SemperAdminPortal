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
  { id: "coverage", label: "Coverage Options" },
  { id: "beneficiaries", label: "Beneficiaries" },
  { id: "updating", label: "Updating" },
  { id: "tsgli-fsgli", label: "TSGLI & FSGLI" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Maximum Coverage", description: "$500,000" },
  { element: "Monthly Premium", description: "$25 for $500,000 coverage" },
  { element: "Beneficiary Update", description: "SGLV 8286 or milConnect" },
  { element: "Effective", description: "Upon receipt by OSGLI" },
  { element: "Authority", description: "38 U.S.C. Chapter 19" },
];

const COVERAGE_OPTIONS = [
  { amount: "$500,000", premium: "$25.00" },
  { amount: "$450,000", premium: "$22.50" },
  { amount: "$400,000", premium: "$20.00" },
  { amount: "$350,000", premium: "$17.50" },
  { amount: "$300,000", premium: "$15.00" },
  { amount: "$250,000", premium: "$12.50" },
  { amount: "$200,000", premium: "$10.00" },
  { amount: "$150,000", premium: "$7.50" },
  { amount: "$100,000", premium: "$5.00" },
  { amount: "$50,000", premium: "$2.50" },
  { amount: "Declined", premium: "$0.00" },
];

const DESIGNATION_TYPES = [
  { type: "By name", description: "Specific person(s) named" },
  { type: "By relationship", description: '"My spouse" or "my children"' },
  { type: "Estate", description: "Paid to your estate" },
  { type: "Trust", description: "Paid to designated trust" },
];

const MILCONNECT_STEPS = [
  "Log into milConnect",
  "Navigate to Benefits",
  "Select SGLI Online Enrollment System (SOES)",
  "Update beneficiary information",
  "Submit changes",
  "Print confirmation",
];

const PAPER_FORM_STEPS = [
  "Obtain SGLV 8286 form",
  "Complete all sections",
  "Sign and date",
  "Submit to S-1 or IPAC",
  "S-1 forwards to OSGLI",
  "Keep copy for records",
];

const LIFE_EVENTS_UPDATE = [
  { event: "Marriage", action: "Add spouse as beneficiary" },
  { event: "Divorce", action: "Remove ex-spouse if desired" },
  { event: "Birth of child", action: "Add child or update allocation" },
  { event: "Death of beneficiary", action: "Designate new beneficiary" },
  { event: "Before deployment", action: "Verify current and accurate" },
];

const FSGLI_COVERAGE = [
  { dependent: "Spouse", maxCoverage: "$100,000", premium: "Age-based" },
  { dependent: "Child", maxCoverage: "$10,000", premium: "Free" },
];

const STATUTORY_ORDER = [
  "Surviving spouse",
  "Children in equal shares",
  "Parents in equal shares",
  "Executor of estate",
  "Next of kin under state law",
];

const COMMON_ISSUES = [
  { issue: "Beneficiary deceased", resolution: "Update immediately" },
  { issue: "Ex-spouse still listed", resolution: "Update if divorce final" },
  { issue: "No beneficiary designated", resolution: "Paid per statutory order" },
  { issue: "Outdated contact info", resolution: "Update beneficiary addresses" },
  { issue: "Coverage declined by mistake", resolution: "Re-enroll via SOES" },
];

const PREDEP_CHECKLIST = [
  "Log into milConnect",
  "Review current SGLI coverage amount",
  "Verify beneficiary designations current",
  "Update beneficiary contact information",
  "Verify FSGLI coverage for dependents",
  "Print confirmation of beneficiary designation",
  "Keep copy with important documents",
  "Inform beneficiaries of coverage",
];

export function SGLIBeneficiaryUpdatesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SGLI Beneficiary Updates Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Servicemembers&apos; Group Life Insurance (SGLI) provides low-cost life insurance coverage. Before
            deployment, verify your beneficiary designations are current. SGLI pays your designated
            beneficiaries upon your death. Incorrect or outdated beneficiaries cause payment delays
            and potential legal disputes.
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

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Critical Reminder</h4>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            Verify your SGLI beneficiaries are current before every deployment. Outdated designations
            can result in payment to unintended recipients.
          </p>
        </div>
      </>
    ),

    coverage: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SGLI Coverage Options
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You can select coverage in $50,000 increments up to $500,000.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Coverage Amount</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Monthly Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COVERAGE_OPTIONS.map((item) => (
                  <tr key={item.amount}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.amount}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    beneficiaries: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Designating Beneficiaries
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You can designate beneficiaries by name, relationship, or to your estate or trust.
            Percentage allocations must total 100%.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Designation Types
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
                {DESIGNATION_TYPES.map((item) => (
                  <tr key={item.type}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.type}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Statutory Order of Payment
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            If no beneficiary designated, SGLI pays in this order:
          </p>
          <ol className="mt-4 space-y-2">
            {STATUTORY_ORDER.map((item, index) => (
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

    updating: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Updating Beneficiaries
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You can update beneficiaries via milConnect (preferred) or paper form (SGLV 8286).
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Via milConnect (Preferred)
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
            Via Paper Form (SGLV 8286)
          </h3>
          <ol className="mt-4 space-y-2">
            {PAPER_FORM_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-400 text-xs font-bold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
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
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action Needed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {LIFE_EVENTS_UPDATE.map((item) => (
                  <tr key={item.event}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.event}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common SGLI Issues
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

    "tsgli-fsgli": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Traumatic Injury Protection (TSGLI)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            TSGLI is automatic coverage included with SGLI at $1/month. Pays $25,000 to $100,000 for
            qualifying injuries such as amputations, paralysis, burns, and blindness. Payment goes to
            you (not beneficiaries).
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Family SGLI (FSGLI)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            FSGLI provides optional life insurance coverage for your dependents.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Dependent</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Maximum Coverage</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {FSGLI_COVERAGE.map((item) => (
                  <tr key={item.dependent}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.dependent}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.maxCoverage}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Update via milConnect</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Both SGLI and FSGLI can be updated through the SGLI Online Enrollment System (SOES) in milConnect
            or via SGLV 8286A form.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pre-Deployment SGLI Checklist
          </h2>
          <div className="mt-4 space-y-2">
            {PREDEP_CHECKLIST.map((item) => (
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
