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
  { id: "classification", label: "Classification" },
  { id: "common-issues", label: "Common Issues" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Required Class", description: "Class 1 or Class 2" },
  { element: "Exam Frequency", description: "Annual minimum" },
  { element: "Tracking", description: "Dental Readiness System" },
  { element: "Timeline", description: "Complete 90+ days before deployment" },
  { element: "Authority", description: "MCO 6100.13" },
];

const DENTAL_CLASSES = [
  { classNum: "Class 1", description: "No treatment needed", deployable: "Yes" },
  { classNum: "Class 2", description: "Treatment needed, unlikely to cause emergency within 12 months", deployable: "Yes" },
  { classNum: "Class 3", description: "Treatment needed, likely to cause emergency within 12 months", deployable: "No" },
  { classNum: "Class 4", description: "No exam within past 13 months", deployable: "No" },
];

const CLASS_3_CONDITIONS = [
  { condition: "Active decay", description: "Cavities requiring filling" },
  { condition: "Broken teeth", description: "Fractured teeth needing repair" },
  { condition: "Impacted wisdom teeth", description: "Symptomatic or infection risk" },
  { condition: "Root canal needed", description: "Tooth requiring endodontic treatment" },
  { condition: "Periodontal disease", description: "Active gum disease" },
  { condition: "Dental abscess", description: "Active infection" },
];

const CHECK_STATUS_MOL = [
  "Log into Marine Online",
  "Navigate to Medical Readiness",
  "View dental classification",
  "Note any required treatment",
];

const ACHIEVING_DEPLOYABLE = [
  "Schedule dental appointment immediately",
  "Complete all required treatment",
  "Request re-classification after treatment",
  "Verify Class 1 or 2 status",
  "Confirm in MOL",
];

const PACK_LIST = [
  "Toothbrush and toothpaste",
  "Dental floss",
  "Mouthwash",
  "Temporary filling material (from dental clinic)",
];

const CHECKLIST_90_DAYS = [
  "Check dental class in MOL",
  "Schedule exam if Class 4",
  "Begin treatment if Class 3",
  "Address elective procedures",
];

const CHECKLIST_30_DAYS = [
  "Verify Class 1 or 2 status",
  "Complete any pending treatment",
  "Final dental check",
  "Obtain deployment dental supplies",
];

export function DentalReadinessContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Dental Readiness Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Dental readiness is a deployment requirement. You must be Dental Class 1 or 2 to deploy.
            Dental emergencies in theater are preventable through proper pre-deployment care. Non-deployable
            dental status delays deployments and affects unit readiness.
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
          <h4 className="font-semibold text-red-800 dark:text-red-200">Deployment Requirement</h4>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            Only Class 1 or Class 2 Marines are deployable. Class 3 and Class 4 Marines cannot deploy
            until their dental status is resolved.
          </p>
        </div>
      </>
    ),

    classification: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Dental Classification
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marines are classified into one of four dental classes based on their current dental health
            and treatment needs.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Dental Classes
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Class</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Deployable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {DENTAL_CLASSES.map((item) => (
                  <tr key={item.classNum}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.classNum}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                    <td className={`py-3 font-medium ${item.deployable === "Yes" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                      {item.deployable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Checking Your Dental Status
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Via MOL:</p>
          <ol className="mt-4 space-y-2">
            {CHECK_STATUS_MOL.map((step, index) => (
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

    "common-issues": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Class 3 Conditions
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            These conditions typically result in Class 3 (non-deployable) status:
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Condition</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {CLASS_3_CONDITIONS.map((item) => (
                  <tr key={item.condition}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.condition}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Achieving Deployable Status
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">If Class 3 or 4:</p>
          <ol className="mt-4 space-y-2">
            {ACHIEVING_DEPLOYABLE.map((step, index) => (
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
            Pack for Deployment
          </h3>
          <ul className="mt-4 space-y-2">
            {PACK_LIST.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Timeline Considerations</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Some treatments require multiple visits. Extractions need healing time. Root canals may take
            weeks. Start early to allow completion time.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            90+ Days Before Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_90_DAYS.map((item) => (
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
            30 Days Before Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_30_DAYS.map((item) => (
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
