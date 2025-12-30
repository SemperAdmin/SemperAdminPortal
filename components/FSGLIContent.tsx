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
  { id: "spouse", label: "Spouse Coverage" },
  { id: "children", label: "Child Coverage" },
  { id: "enrollment", label: "Enrollment" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Spouse Maximum", description: "$100,000" },
  { element: "Child Coverage", description: "$10,000 per child" },
  { element: "Spouse Premium", description: "Age-based" },
  { element: "Child Premium", description: "Free" },
  { element: "Enrollment", description: "Service member must be enrolled in SGLI" },
  { element: "Authority", description: "38 U.S.C. 1968" },
];

const SPOUSE_COVERAGE_OPTIONS = [
  "$100,000", "$90,000", "$80,000", "$70,000", "$60,000",
  "$50,000", "$40,000", "$30,000", "$20,000", "$10,000",
];

const SPOUSE_PREMIUM_RATES = [
  { age: "Under 35", rate: "$0.50" },
  { age: "35-39", rate: "$0.65" },
  { age: "40-44", rate: "$0.80" },
  { age: "45-49", rate: "$1.30" },
  { age: "50-54", rate: "$2.00" },
  { age: "55-59", rate: "$3.65" },
  { age: "60+", rate: "$6.00" },
];

const ELIGIBLE_CHILDREN = [
  "Biological children",
  "Legally adopted children",
  "Stepchildren",
  "Foster children",
  "Children for whom you have legal custody",
];

const SPOUSE_ENDS = [
  "Divorce (unless service member elects to continue for 1 year)",
  "Spouse reaches maximum age (coverage continues at higher rate)",
  "Service member loses SGLI eligibility",
  "Service member dies (spouse gets 120-day extension)",
];

const CHILD_ENDS = [
  "Child reaches age 18 (or 23 if student)",
  "Child marries",
  "Service member loses SGLI eligibility",
  "Service member dies (child gets 120-day extension)",
];

const CHECKLIST_SPOUSE = [
  "Verify enrolled in SGLI",
  "Access milConnect SOES or obtain SGLV 8286A",
  "Select coverage amount",
  "Complete health questions if required",
  "Submit and retain confirmation",
  "Verify premium on LES",
];

const CHECKLIST_CHILD = [
  "Confirm children in DEERS",
  "Verify SGLI enrollment (child coverage automatic)",
  "No premium should appear for child coverage",
];

export function FSGLIContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FSGLI Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            FSGLI provides life insurance coverage for spouses and dependent children of service members
            enrolled in SGLI. Spouse coverage requires a premium based on age. Child coverage is free.
            FSGLI provides financial protection for your family members at low group rates.
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
            FSGLI Beneficiary
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Coverage</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Beneficiary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">Spouse Coverage</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">Service member is automatic beneficiary (cannot be changed)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">Child Coverage</td>
                  <td className="py-3 text-zinc-700 dark:text-zinc-300">Service member is automatic beneficiary (cannot be changed)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">120-Day Conversion Period</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            After service member death, spouse can convert to individual policy. Child coverage can be
            converted. No health questions required. Contact commercial insurance company.
          </p>
        </div>
      </>
    ),

    spouse: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Spouse Coverage Options
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Coverage must be in $10,000 increments. Maximum coverage is $100,000.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SPOUSE_COVERAGE_OPTIONS.map((amount) => (
              <span key={amount} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {amount}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Spouse Premium Rates (Monthly per $10,000)
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Spouse Age</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Per $10,000 Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {SPOUSE_PREMIUM_RATES.map((item) => (
                  <tr key={item.age}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.age}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Example: Spouse age 32 with $100,000 coverage = $5.00/month
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When Spouse Coverage Ends
          </h3>
          <ul className="mt-4 space-y-2">
            {SPOUSE_ENDS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical Underwriting for Spouse
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">When Required:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Enrolling more than 240 days after marriage",
              "Increasing coverage after initial enrollment",
              "Previously declined for health reasons",
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

    children: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Child Coverage
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            $10,000 per eligible child. Free (no premium). Covers all eligible children.
            No individual enrollment required.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligible Children
          </h3>
          <ul className="mt-4 space-y-2">
            {ELIGIBLE_CHILDREN.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Age Limits
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "From birth to age 18",
              "Or up to age 23 if full-time student",
              "Must be unmarried",
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
            When Child Coverage Ends
          </h3>
          <ul className="mt-4 space-y-2">
            {CHILD_ENDS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="font-semibold text-green-800 dark:text-green-200">Automatic Coverage</h4>
          <p className="mt-1 text-sm text-green-800 dark:text-green-200">
            Child coverage is automatic if service member has SGLI. It covers all eligible children
            with no enrollment form needed and no premium cost.
          </p>
        </div>
      </>
    ),

    enrollment: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Enrolling in FSGLI
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Service member must be enrolled in SGLI to enroll family members in FSGLI.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Spouse Coverage Enrollment
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Service member must be enrolled in SGLI",
              "Access milConnect SOES or complete SGLV 8286A",
              "Select spouse coverage amount",
              "Spouse may need to complete health questions",
              "Submit and retain confirmation",
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
            Health Questions (Spouse)
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "May be required depending on timing",
              "If spouse is medically declined, can apply with proof of good health",
              "No health questions within 240 days of marriage",
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
            Filing a Claim
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">If Spouse or Child Dies:</p>
          <ol className="mt-4 space-y-2">
            {[
              "Service member notifies S-1",
              "S-1 assists with claim forms",
              "Submit death certificate and claim form to OSGLI",
              "OSGLI processes payment",
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
            Enrolling Spouse
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_SPOUSE.map((item) => (
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
            Verifying Child Coverage
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_CHILD.map((item) => (
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
