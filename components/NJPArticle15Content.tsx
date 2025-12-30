"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "NJP Process" },
  { id: "documents", label: "Required Documents" },
  { id: "special-situations", label: "Special Situations" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function NJPArticle15Content({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Non-Judicial Punishment (NJP)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Non-Judicial Punishment under Article 15 of the Uniform Code of Military Justice (UCMJ) allows commanders to discipline service members for minor offenses without court-martial proceedings. NJP provides a rapid, efficient alternative to formal judicial action while preserving the Marine's right to refuse NJP and demand trial by court-martial.
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Admin Role:</strong> Administrative specialists process NJP documentation, maintain the Unit Punishment Book, and ensure proper routing of all associated forms. Accurate documentation protects both the command's disciplinary authority and the Marine's due process rights.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Timelines
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Appeal submission:</strong> 5 calendar days from punishment imposition</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Appeal decision:</strong> Typically 30 days from receipt</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Suspended punishment:</strong> Automatically remitted after 6 months if no further misconduct</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    process: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Enlisted NJP Process
          </h2>
          <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Commander identifies offense and determines NJP is appropriate</li>
            <li>Marine receives written Notice of Intent to Impose NJP with rights advisement</li>
            <li>Marine consults with a lawyer and decides to accept or refuse NJP</li>
            <li>If accepted, NJP hearing occurs before the imposing commander</li>
            <li>Commander announces findings and any punishment imposed</li>
            <li>Admin completes Unit Punishment Book (NAVMC 10132) and routes for signatures</li>
            <li>Marine may appeal within 5 days of punishment imposition</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Officer NJP Process
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Officers do not use the Unit Punishment Book. Officer NJP uses specific notification forms found in MCO 5800.16, Volume 15, Figures 15-1 or 15-2. The process follows similar steps but with different documentation requirements.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Maximum Punishments
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Maximum punishments vary by imposing officer grade. A Commanding Officer (O-4 and above) can impose more severe punishments than an Officer in Charge. Available punishments include:
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Reduction in grade</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Forfeitures of pay</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Extra duty</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Restriction</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Correctional custody</span>
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
                  <td className="py-2 pr-4 font-medium">NAVMC 10132 (Unit Punishment Book)</td>
                  <td className="py-2">Official record of enlisted NJP proceedings (MCO 5800.16 Vol 14)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Notice of Intent to Impose NJP</td>
                  <td className="py-2">Written notification with rights advisement (MCO 5800.16 para 011101)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Summary Transcript of Proceedings</td>
                  <td className="py-2">Written summary of NJP hearing (JAGINST 5800.7F App A-1-f)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Page 11 Entry (if required)</td>
                  <td className="py-2">Permanent record of NJP in service record (MCO P1070.12K)</td>
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
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine Refuses NJP</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When a Marine refuses NJP and demands trial by court-martial, the case transfers to the Legal Services Support Section for formal prosecution. Document the refusal on the Notice of Intent form and route the package to the Staff Judge Advocate.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NJP While Attached (Not Assigned)</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Marines attached to a command for temporary duty may receive NJP from either their parent command or the attached command. Coordinate with both commands to determine jurisdiction and ensure proper documentation routing.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Summarized NJP</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Summarized NJP uses abbreviated procedures for E-4 and below. Maximum punishments are reduced, and the Marine waives certain procedural rights. This option provides faster resolution for minor offenses.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NJP Appeal</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Marines may appeal NJP within 5 days on grounds of injustice or disproportionate punishment. The appeal goes to the next superior authority in the chain of command. Prepare the appeal package with all original documentation and the Marine's written grounds for appeal.
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
                  <td className="py-2 pr-4">Incomplete Unit Punishment Book entries</td>
                  <td className="py-2">Use NAVMC 10132 checklist. Verify all blocks completed before routing for signatures.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Missing rights advisement documentation</td>
                  <td className="py-2">Marine must sign acknowledgment of rights before NJP hearing. Recreate if lost and have Marine sign.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Appeal submitted after 5-day deadline</td>
                  <td className="py-2">Late appeals require good cause justification. Route with explanation for reviewing authority consideration.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Punishment exceeds authority limits</td>
                  <td className="py-2">Verify imposing officer's grade and maximum punishment authority. Notify SJA if limits exceeded.</td>
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
