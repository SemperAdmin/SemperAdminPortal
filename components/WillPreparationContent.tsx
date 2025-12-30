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
  { id: "contents", label: "Will Contents" },
  { id: "obtaining", label: "Obtaining" },
  { id: "storage", label: "Storage" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Preparation", description: "Legal Assistance Office" },
  { element: "Cost", description: "Free for service members" },
  { element: "Update Frequency", description: "After major life events" },
  { element: "Storage", description: "Safe location, copies to executor" },
  { element: "State Law", description: "Governs validity and execution" },
];

const WITHOUT_WILL = [
  "State law determines asset distribution",
  "Court appoints guardian for minor children",
  "May not align with your wishes",
  "Can cause family disputes",
  "May result in higher taxes/fees",
];

const WITH_WILL = [
  "You decide who receives assets",
  "You designate guardian for children",
  "You name executor to manage estate",
  "Reduces family conflict",
  "Can minimize probate costs",
];

const WILL_CONTENTS = [
  { section: "Identification", purpose: "Your legal name and address" },
  { section: "Revocation", purpose: "Revokes all prior wills" },
  { section: "Executor", purpose: "Person to manage your estate" },
  { section: "Beneficiaries", purpose: "Who receives your property" },
  { section: "Specific bequests", purpose: "Particular items to specific people" },
  { section: "Residuary clause", purpose: "Everything not specifically mentioned" },
  { section: "Guardian", purpose: "For minor children" },
  { section: "Signatures", purpose: "Your signature, witnesses, notary" },
];

const EXECUTOR_RESPONSIBILITIES = [
  "Locate and manage assets",
  "Pay debts and taxes",
  "Distribute property to beneficiaries",
  "Handle legal/administrative matters",
  "File court documents",
];

const EXECUTOR_CONSIDERATIONS = [
  "Trustworthy and responsible",
  "Organized and detail-oriented",
  "Accessible (location matters)",
  "Willing to serve",
  "Consider naming alternate",
];

const LEGAL_ASSISTANCE_PROCESS = [
  "Schedule appointment with Legal Assistance",
  "Complete will worksheet (provided by Legal)",
  "Consider asset distribution",
  "Identify executor and guardian",
  "Attorney prepares will",
  "Review will carefully",
  "Sign with witnesses present",
  "Will is notarized",
];

const BRING_TO_APPOINTMENT = [
  "Identification",
  "List of assets (property, accounts, vehicles)",
  "Beneficiary information (names, relationships)",
  "Executor information",
  "Guardian information (if minor children)",
];

const STORAGE_OPTIONS = [
  { location: "Safe deposit box", pros: "Secure", cons: "May be sealed at death" },
  { location: "Home safe", pros: "Accessible", cons: "Risk of loss/damage" },
  { location: "Attorney", pros: "Professional storage", cons: "Must locate attorney" },
  { location: "Executor", pros: "Ready access", cons: "Risk if executor unavailable" },
];

const WHEN_TO_UPDATE = [
  { event: "Marriage", action: "Update beneficiary, add spouse" },
  { event: "Divorce", action: "Remove ex-spouse, update beneficiaries" },
  { event: "Birth of child", action: "Add child, name guardian" },
  { event: "Death of beneficiary", action: "Name new beneficiary" },
  { event: "Major asset change", action: "Update specific bequests" },
  { event: "Move to new state", action: "Review for state law compliance" },
  { event: "Before deployment", action: "Verify current and accurate" },
];

const WILL_VS_BENEFICIARY = [
  { asset: "SGLI", controlledBy: "SGLV 8286 beneficiary form" },
  { asset: "TSP", controlledBy: "TSP-3 beneficiary form" },
  { asset: "Bank accounts", controlledBy: "Bank beneficiary designation" },
  { asset: "Retirement accounts", controlledBy: "Account beneficiary form" },
  { asset: "Other assets", controlledBy: "Your will" },
];

const PREDEP_REVIEW = [
  "Locate current will",
  "Review beneficiaries for accuracy",
  "Verify executor still appropriate",
  "Verify guardian designation (if children)",
  "Update if any life changes since last update",
  "Confirm executor knows will location",
  "Provide copy to executor",
  "Review SGLI and TSP beneficiary designations for consistency",
];

const NO_WILL_CHECKLIST = [
  "Schedule Legal Assistance appointment",
  "Complete will worksheet",
  "Gather asset information",
  "Identify executor and alternate",
  "Identify guardian (if children)",
  "Attend appointment and sign will",
  "Store original securely",
  "Provide copy to executor",
];

export function WillPreparationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Will Preparation Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A will is a legal document directing how your property and assets are distributed upon death.
            Every service member should have a current will, especially before deployment. Military legal
            assistance offices prepare wills at no cost. Dying without a will (intestate) means state law
            determines asset distribution, which may not match your wishes.
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

        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">Without a Will</h3>
            <ul className="mt-4 space-y-2">
              {WITHOUT_WILL.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">With a Will</h3>
            <ul className="mt-4 space-y-2">
              {WITH_WILL.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </>
    ),

    contents: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Will Contents
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Section</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {WILL_CONTENTS.map((item) => (
                  <tr key={item.section}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.section}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Choosing an Executor
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Executor Responsibilities:</p>
          <ul className="mt-4 space-y-2">
            {EXECUTOR_RESPONSIBILITIES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Executor Considerations
          </h3>
          <ul className="mt-4 space-y-2">
            {EXECUTOR_CONSIDERATIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Will vs. Beneficiary Designations
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Beneficiary designations on SGLI, TSP, and bank accounts override your will.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Asset</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Controlled By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {WILL_VS_BENEFICIARY.map((item) => (
                  <tr key={item.asset}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.asset}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.controlledBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Ensure consistency between your will and beneficiary designations to avoid confusion.
          </p>
        </div>
      </>
    ),

    obtaining: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Obtaining a Will
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Military Legal Assistance offices prepare wills at no cost for service members.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Legal Assistance Process
          </h3>
          <ol className="mt-4 space-y-2">
            {LEGAL_ASSISTANCE_PROCESS.map((step, index) => (
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
            Bring to Appointment
          </h3>
          <ul className="mt-4 space-y-2">
            {BRING_TO_APPOINTMENT.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When to Update Your Will
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
                {WHEN_TO_UPDATE.map((item) => (
                  <tr key={item.event}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.event}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    storage: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Will Storage Options
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Location</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Pros</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Cons</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {STORAGE_OPTIONS.map((item) => (
                  <tr key={item.location}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.location}</td>
                    <td className="py-3 text-green-600 dark:text-green-400">{item.pros}</td>
                    <td className="py-3 text-red-600 dark:text-red-400">{item.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Best Practice</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Store original in secure location, give copy to executor, inform family of location,
            and keep copy with deployment documents.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pre-Deployment Will Review
          </h2>
          <div className="mt-4 space-y-2">
            {PREDEP_REVIEW.map((item) => (
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
            If No Will Exists
          </h2>
          <div className="mt-4 space-y-2">
            {NO_WILL_CHECKLIST.map((item) => (
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
