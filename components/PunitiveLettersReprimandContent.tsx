"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Issuance Process" },
  { id: "plor-vs-nploc", label: "PLOR vs NPLOC" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function PunitiveLettersReprimandContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Punitive Letter of Reprimand (PLOR)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A Punitive Letter of Reprimand (PLOR) is formal written censure imposed as part of Non-Judicial Punishment under Article 15, UCMJ. Unlike administrative letters of caution or counseling, a PLOR carries punitive weight and becomes part of the official NJP record.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            PLORs document command disapproval of specific misconduct and serve as an official record of the disciplinary action. They differ from Non-Punitive Letters of Caution (NPLOC), which are administrative tools that do not require NJP proceedings.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Elements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Letterhead:</strong> Official command letterhead with unit designation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Subject Line:</strong> Punitive Letter of Reprimand</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Offense Description:</strong> Specific description of the misconduct and applicable UCMJ article</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Punitive Statement:</strong> Clear statement that this is punitive action under Article 15</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Filing Determination:</strong> Statement of local or permanent filing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Signatures:</strong> Commanding Officer signature and Marine's acknowledgment</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    process: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PLOR Issuance Process
          </h2>
          <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Commander determines PLOR is appropriate punishment following NJP hearing</li>
            <li>Admin drafts PLOR using command letterhead and approved format</li>
            <li>Letter specifies the offense, findings, and punitive nature of the reprimand</li>
            <li>Commanding Officer signs the PLOR</li>
            <li>Marine receives the letter and signs acknowledging receipt</li>
            <li>PLOR is attached to the Unit Punishment Book entry</li>
            <li>Copy filed in Marine's local service record</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Filing Determination
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Commanding Officer determines whether the PLOR is filed locally (unit file) or permanently (Official Military Personnel File). Permanent filing has greater career impact and is typically reserved for more serious offenses.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Special Situations
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PLOR as Sole Punishment</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                A PLOR may be the only punishment imposed at NJP. This typically occurs for first-time minor offenses where formal censure is sufficient. The PLOR still requires full NJP proceedings and documentation.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Combined with Other Punishments</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                PLORs are often imposed alongside other punishments such as restriction, extra duty, or forfeiture of pay. All punishments are documented on the Unit Punishment Book with the PLOR attached.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    "plor-vs-nploc": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PLOR vs NPLOC
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Characteristic</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PLOR</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NPLOC</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Nature</td>
                  <td className="py-2 pr-4">Punitive</td>
                  <td className="py-2">Non-punitive</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Requires NJP?</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">No</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Official Record</td>
                  <td className="py-2 pr-4">Part of NJP record</td>
                  <td className="py-2">Administrative tool</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Separation Impact</td>
                  <td className="py-2 pr-4">Counts toward pattern of misconduct</td>
                  <td className="py-2">May be considered</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Appeal/Rebuttal</td>
                  <td className="py-2 pr-4">Follows NJP appeal procedures</td>
                  <td className="py-2">May be rebutted</td>
                </tr>
              </tbody>
            </table>
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
                  <td className="py-2 pr-4">PLOR issued without NJP proceedings</td>
                  <td className="py-2">Invalid action. Conduct proper NJP proceedings or convert to NPLOC if appropriate.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Missing filing determination</td>
                  <td className="py-2">Obtain CO determination and add to letter before filing. Default is local filing.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Marine refuses to sign acknowledgment</td>
                  <td className="py-2">Annotate refusal with witness signature and date. Proceed with filing.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Confusion between PLOR and NPLOC</td>
                  <td className="py-2">Verify NJP proceedings occurred. If not, document is NPLOC regardless of title.</td>
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
