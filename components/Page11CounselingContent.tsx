"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "requirements", label: "Entry Requirements" },
  { id: "special-situations", label: "Special Situations" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function Page11CounselingContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Page 11 Administrative Remarks
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Page 11 entries (Administrative Remarks) are permanent entries in a Marine's Official Military Personnel File (OMPF). These entries document significant events, counseling, achievements, and administrative actions throughout a Marine's career.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Page 11 entries related to counseling provide official documentation of performance or conduct deficiencies and corrective guidance provided. They serve as the foundation for administrative separation proceedings when patterns of misconduct develop.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Entry Process
          </h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Supervisor identifies event or deficiency requiring documentation</li>
            <li>Admin drafts Page 11 entry using required format from MCO P1070.12K</li>
            <li>Entry includes date, factual statement, and any required acknowledgments</li>
            <li>Marine signs acknowledging receipt (signature does not indicate agreement)</li>
            <li>Commanding Officer or designated representative signs the entry</li>
            <li>Entry is uploaded to Marine Online (MOL) for OMPF filing</li>
            <li>Marine receives copy and retains right to submit rebuttal statement</li>
          </ol>
        </div>
      </section>
    ),
    requirements: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Elements for Counseling Entries
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Date of Entry:</strong> Date entry is made in YYYYMMDD format</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Factual Statement:</strong> Clear description of incident, deficiency, or event being documented</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Counseling Provided:</strong> Specific guidance or corrective action discussed with Marine</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Consequences Statement:</strong> Warning of potential adverse action if behavior continues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Marine Acknowledgment:</strong> Signature block for Marine to acknowledge receipt</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Authority Signature:</strong> CO or designated representative signature and date</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Rules
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Entries must be factual and objective with no opinions or speculation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Marine's signature indicates receipt, not agreement with content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Marines have right to submit rebuttal statements within 30 days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Entries become permanent part of OMPF</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Counseling entries establish pattern for separation proceedings</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    "special-situations": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Special Situations
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine Refuses to Sign</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When a Marine refuses to sign, annotate the entry with the statement: "Marine refused to sign." Include a witness signature with rank, name, and date. The entry remains valid and is processed normally.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Rebuttal Statement Submitted</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Marines have 30 days to submit a rebuttal statement. The rebuttal is filed with the original entry in the OMPF. Neither document is removed. The Commanding Officer is not required to take action on the rebuttal.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Correcting Erroneous Entries</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Factual errors are corrected via NAVMC 11035 (Administrative Change Request). Disputes about the substance or characterization of events require a request through the Board for Correction of Naval Records (BCNR).
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NJP Documentation</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Page 11 entries documenting NJP follow specific formatting requirements. The entry references the Unit Punishment Book and summarizes punishments imposed. Some commands require NJP Page 11 entries while others do not.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    troubleshooting: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems and Solutions
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Problem</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Solution</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Entry contains opinion or speculation</td>
                  <td className="py-2">Revise to include only documented facts. Use specific dates, times, and events.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Entry not uploaded to MOL</td>
                  <td className="py-2">Upload via MOL Page 11 module. Maintain hard copy until confirmed in system.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Wrong date format used</td>
                  <td className="py-2">Use YYYYMMDD format per MCO P1070.12K. Correct and reprocess entry.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Rebuttal submitted after 30 days</td>
                  <td className="py-2">Late rebuttals are not required to be filed. CO determines acceptance.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
