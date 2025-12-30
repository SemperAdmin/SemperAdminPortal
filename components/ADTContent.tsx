"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "adt-types", label: "ADT Types" },
  { id: "process", label: "Process" },
  { id: "references", label: "References", type: "references" as const },
];

export function ADTContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Active Duty for Training (ADT)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            ADT is active duty performed primarily for training purposes. This includes Annual Training, Initial Active Duty for Training, and other training assignments.
          </p>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Characteristics</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Full active duty pay and benefits</li>
              <li>• 1 retirement point per day</li>
              <li>• Counts toward active duty service time</li>
              <li>• Performance evaluations for periods over 90 days</li>
            </ul>
          </div>
        </div>
      </section>
    ),
    "adt-types": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            ADT Types
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">ADT Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Duration</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Annual Training (AT)</td>
                  <td className="py-2 pr-4">Mandatory yearly training</td>
                  <td className="py-2">12-30 days</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Initial Active Duty for Training (IADT)</td>
                  <td className="py-2 pr-4">Recruit training pipeline</td>
                  <td className="py-2">Varies by MOS</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Other Training Duty (OTD)</td>
                  <td className="py-2 pr-4">Schools and specialized courses</td>
                  <td className="py-2">Course dependent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Important Things to Know
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>IADT includes recruit training, MCT/SOI, and MOS school</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Incremental IADT (IIADT) allows training over multiple summers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>AT is the minimum training for SelRes Marines</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>OTD includes PME, specialty courses, and professional development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Training counts toward TIG/TIS requirements for promotion</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    process: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How It Works
          </h2>
          <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Training requirement identified (mandatory or requested)</li>
            <li>Orders generated in MROWS</li>
            <li>Marine reports to training location</li>
            <li>Complete training as scheduled</li>
            <li>Return to drilling status upon completion</li>
            <li>Training documented in service record</li>
          </ol>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
