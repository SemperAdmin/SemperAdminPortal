"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Investigation Types" },
  { id: "documents", label: "Required Documents" },
  { id: "special-situations", label: "Special Situations" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function AdministrativeInvestigationsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Administrative Investigations
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Administrative investigations are command-directed inquiries to gather facts about incidents, allegations, or events affecting good order and discipline. These investigations differ from criminal investigations conducted by NCIS or law enforcement.
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Admin Role:</strong> Administrative specialists support investigations by preparing appointing orders, tracking progress, maintaining evidence custody, and processing final reports. Proper documentation protects the integrity of the investigation and any resulting administrative actions.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Administrative Support Process
          </h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Commander directs investigation and identifies appointing authority</li>
            <li>Admin prepares appointing order with investigation scope and deadline</li>
            <li>Investigating Officer (IO) receives appointment and begins inquiry</li>
            <li>Admin tracks progress and provides administrative support as needed</li>
            <li>IO submits findings and recommendations to appointing authority</li>
            <li>Admin routes final report for legal review and command action</li>
            <li>Final report and action endorsements are filed per retention requirements</li>
          </ol>
        </div>
      </section>
    ),
    types: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Investigation Types
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command Investigation (CI)</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Formal investigation for serious matters requiring detailed findings. Used when the matter may result in adverse action or significant liability.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preliminary Inquiry (PI)</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Initial inquiry to determine if formal investigation is warranted. Typically 10-14 days to complete.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">JAGMAN Investigation</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Investigation conducted per JAG Manual procedures for matters requiring formal legal process.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Line of Duty (LOD) Determination</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Investigation for injuries or illnesses to determine if they occurred in the line of duty.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Timelines
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Preliminary Inquiry:</strong> Typically 10-14 days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Command Investigation:</strong> 30 days standard, extensions available</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Legal Review:</strong> 10-14 days after report submission</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Command Endorsement:</strong> Within 30 days of legal review</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    documents: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Documents
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Purpose/Authority</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Appointing Order</td>
                  <td className="py-2">Formally appoints IO and defines scope (JAGINST 5800.7F)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Witness Statements</td>
                  <td className="py-2">Sworn statements from witnesses (JAGINST 5800.7F)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Evidence Log</td>
                  <td className="py-2">Chain of custody documentation (Local SOP)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Investigation Report</td>
                  <td className="py-2">Findings, conclusions, recommendations (JAGINST 5800.7F)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Endorsement Letters</td>
                  <td className="py-2">Command action on recommendations (JAGINST 5800.7F)</td>
                </tr>
              </tbody>
            </table>
          </div>
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
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Reveals Criminal Activity</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                If the administrative investigation reveals potential criminal conduct, the IO must stop immediately and notify the appointing authority. NCIS or appropriate law enforcement takes over criminal matters. The administrative investigation may resume after criminal investigation concludes.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Extension Requests</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                IOs may request extensions through the appointing authority. Admin prepares extension endorsement letters documenting the reason for delay and new completion date. Extensions are tracked to ensure timely completion.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Collateral Investigations</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When multiple commands are involved, a collateral investigation may be appointed. Each command provides an IO who coordinates with the primary investigating officer. Admin ensures proper routing between commands.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Privacy Act Considerations</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Investigation records contain Privacy Act protected information. Access is limited to those with official need to know. Admin maintains control of investigation files and limits distribution per SECNAVINST 5211.5E.
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
                  <td className="py-2 pr-4">Appointing order scope too vague</td>
                  <td className="py-2">Coordinate with SJA for specific, actionable language. Include clear questions for IO to answer.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Investigation exceeds deadline</td>
                  <td className="py-2">Process extension request immediately. Track weekly until complete.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Missing evidence chain of custody</td>
                  <td className="py-2">Document all handling retroactively. Note gaps in custody log. May affect evidence admissibility.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">IO has conflict of interest</td>
                  <td className="py-2">Notify appointing authority immediately. New IO must be appointed. Work completed may need to be redone.</td>
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
