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
  { id: "entitlement", label: "Entitlement" },
  { id: "verification", label: "Verification" },
  { id: "czte", label: "Tax Exclusion" },
  { id: "sdp", label: "Savings Deposit" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "HFP Rate", description: "$225/month" },
  { element: "IDP Rate", description: "$225/month (combined max $225)" },
  { element: "Tax Status", description: "Excluded from federal income tax in CZTE areas" },
  { element: "Start Date", description: "Day of entry into designated area" },
  { element: "End Date", description: "Day of departure from designated area" },
  { element: "Authority", description: "37 U.S.C. 310" },
];

const HFP_IDP_ENTITLEMENT = [
  { situation: "Enter designated area", entitlement: "Entitled from day of entry" },
  { situation: "Leave designated area", entitlement: "Entitled through day of departure" },
  { situation: "Any part of month in area", entitlement: "Full month entitlement" },
  { situation: "Multiple entries/exits", entitlement: "Entitled for all qualifying days" },
  { situation: "Hospitalized from injuries", entitlement: "Continues during hospitalization" },
];

const LES_CODES = [
  { code: "HFP", description: "Hostile Fire Pay" },
  { code: "IDP", description: "Imminent Danger Pay" },
  { code: "CZTE", description: "Combat Zone Tax Exclusion indicator" },
];

const RESOLUTION_STEPS = [
  "Document entry date to designated area (travel voucher, orders)",
  "Report discrepancy to unit S-1",
  "S-1 verifies deployment location in MCTFS",
  "S-1 coordinates with Finance",
  "Finance processes correction",
  "Verify correction on next LES",
];

const REQUIRED_DOCS = [
  "Deployment orders",
  "Travel voucher showing dates",
  "Unit diary entry (if available)",
  "Any orders or letters showing location",
];

const CZTE_BENEFITS = [
  "Enlisted: All pay excluded from federal income tax",
  "Officers: Excluded up to highest enlisted rate plus HFP/IDP",
  "Extends for hospitalization from combat injuries",
];

const SDP_BENEFITS = [
  "Deposit up to $10,000",
  "Earn 10% annual interest",
  "Interest compounds quarterly",
  "Withdraw after departure",
];

const SDP_ENROLLMENT = [
  "Deployed to designated area",
  "Request enrollment through Finance",
  "Allot funds to SDP",
  "Track balance via myPay",
];

const ARRIVAL_CHECKLIST = [
  "Note date of arrival",
  "Retain copy of travel documents",
  "Verify orders show correct location",
];

const FIRST_LES_CHECKLIST = [
  "Check for HFP/IDP entitlement",
  "Verify correct start date",
  "Confirm tax exclusion (if CZTE)",
  "Report discrepancies to S-1",
];

const THROUGHOUT_DEPLOYMENT = [
  "Review LES monthly",
  "Document any location changes",
  "Enroll in SDP if eligible",
];

export function HFPIDPVerificationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            HFP/IDP Verification Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Hostile Fire Pay (HFP) and Imminent Danger Pay (IDP) compensate service members serving in
            designated combat zones or hazardous areas. These entitlements begin on the day you enter
            the designated area. Verify your pay is correct on your Leave and Earnings Statement (LES)
            to ensure you receive proper compensation.
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

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Designated Areas</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Areas designated for HFP/IDP change based on operational conditions. Verify current
            designations through your S-1 or Finance.
          </p>
        </div>
      </>
    ),

    entitlement: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            HFP/IDP Entitlement
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Situation</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Entitlement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {HFP_IDP_ENTITLEMENT.map((item) => (
                  <tr key={item.situation}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.situation}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.entitlement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    verification: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verifying Your Pay
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Check your LES via myPay or MOL for HFP/IDP entitlements.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common LES Codes
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Code</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {LES_CODES.map((item) => (
                  <tr key={item.code}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.code}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Pay is Missing or Incorrect
          </h3>
          <ol className="mt-4 space-y-2">
            {RESOLUTION_STEPS.map((step, index) => (
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
            Required Documentation
          </h3>
          <ul className="mt-4 space-y-2">
            {REQUIRED_DOCS.map((doc) => (
              <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {doc}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    czte: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Combat Zone Tax Exclusion (CZTE)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Pay earned in designated combat zones is excluded from federal income tax. Tax exclusion
            should be automatic based on your deployment location.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CZTE Benefits
          </h3>
          <ul className="mt-4 space-y-2">
            {CZTE_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Automatic Processing</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Tax exclusion should be automatic based on location. Verify on LES by checking tax
            withholding amount and CZTE remarks.
          </p>
        </div>
      </>
    ),

    sdp: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Savings Deposit Program (SDP)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            While deployed to a designated combat zone, you can take advantage of the Savings Deposit
            Program for high-interest savings.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SDP Benefits
          </h3>
          <ul className="mt-4 space-y-2">
            {SDP_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Enrollment
          </h3>
          <ol className="mt-4 space-y-2">
            {SDP_ENROLLMENT.map((step, index) => (
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
            Upon Arrival in Designated Area
          </h2>
          <div className="mt-4 space-y-2">
            {ARRIVAL_CHECKLIST.map((item) => (
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
            First LES After Arrival
          </h2>
          <div className="mt-4 space-y-2">
            {FIRST_LES_CHECKLIST.map((item) => (
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
            Throughout Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {THROUGHOUT_DEPLOYMENT.map((item) => (
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
