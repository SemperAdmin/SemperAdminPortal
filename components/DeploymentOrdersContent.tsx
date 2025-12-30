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
  { id: "contents", label: "Order Contents" },
  { id: "verification", label: "Verification" },
  { id: "modifications", label: "Modifications" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Order Type", description: "Individual or unit movement orders" },
  { element: "Authorization", description: "Commanding General or designated authority" },
  { element: "System", description: "Marine Online Basic Orders System (BOS)" },
  { element: "Lead Time", description: "Typically 30-90 days before deployment" },
  { element: "Modification", description: "Via order modification request" },
];

const ORDER_CONTENTS = [
  { section: "Reporting Information", info: "Where and when to report" },
  { section: "Duration", info: "Estimated deployment length" },
  { section: "Location", info: "Deployed location (may be general for OPSEC)" },
  { section: "Entitlements", info: "Authorized allowances and per diem" },
  { section: "Travel", info: "Mode of travel, routing" },
  { section: "Accounting Data", info: "Funding information" },
];

const VERIFICATION_STEPS = [
  "Verify name, rank, and EDIPI are correct",
  "Confirm reporting date and location",
  "Check deployment duration matches unit timeline",
  "Verify dependent information is accurate",
  "Confirm entitlements match deployment location",
  "Report errors to S-1 immediately",
];

const COMMON_ERRORS = [
  { error: "Wrong rank", impact: "Pay issues", resolution: "Request order modification" },
  { error: "Wrong location", impact: "Entitlement errors", resolution: "Request order modification" },
  { error: "Missing dependents", impact: "BAH/FSA issues", resolution: "Update MCTFS, modify orders" },
  { error: "Wrong dates", impact: "Leave/pay calculation errors", resolution: "Request order modification" },
];

const MODIFICATION_TRIGGERS = [
  "Deployment dates change",
  "Location changes",
  "Duration extends or shortens",
  "Personal information incorrect",
  "Entitlements need adjustment",
];

const MODIFICATION_PROCESS = [
  "Identify needed change",
  "Request modification through S-1",
  "S-1 processes modification",
  "Receive amended orders",
  "Verify correction",
];

const CHECKLIST_ITEMS = [
  "Verify all personal information correct",
  "Confirm reporting date and location",
  "Check deployment duration",
  "Verify dependent information",
  "Confirm entitlements listed",
  "Report any errors to S-1",
  "Keep copy with personal records",
];

export function DeploymentOrdersContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Deployment Orders Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Deployment orders are the official authorization for your deployment. Your orders contain critical
            information affecting pay, entitlements, and legal protections. Review your orders carefully and
            report discrepancies immediately to your S-1.
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
      </>
    ),

    contents: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Your Orders Contain
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your deployment orders contain critical information that affects your pay, entitlements, and
            administrative processing throughout the deployment.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Order Sections
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Section</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Information</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {ORDER_CONTENTS.map((item) => (
                  <tr key={item.section}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.section}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.info}</td>
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
            Verifying Your Orders
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Before deployment, carefully review your orders to ensure all information is accurate.
            Errors can cause significant pay and entitlement issues.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verification Steps
          </h3>
          <ol className="mt-4 space-y-2">
            {VERIFICATION_STEPS.map((step, index) => (
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
            Common Errors
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Error</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Impact</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COMMON_ERRORS.map((item) => (
                  <tr key={item.error}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.error}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.impact}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    modifications: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Order Modifications
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If your orders contain errors or circumstances change, you may need to request an order modification.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When Required
          </h3>
          <ul className="mt-4 space-y-2">
            {MODIFICATION_TRIGGERS.map((trigger) => (
              <li key={trigger} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {trigger}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Modification Process
          </h3>
          <ol className="mt-4 space-y-2">
            {MODIFICATION_PROCESS.map((step, index) => (
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
            Upon Receiving Orders Checklist
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

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Report any discrepancies to your S-1 immediately. Do not wait until deployment to resolve order errors.
          </p>
        </div>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
