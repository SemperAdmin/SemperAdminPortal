"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "when-required", label: "When Required" },
  { id: "supervision", label: "JA Supervision" },
  { id: "differences", label: "Key Differences" },
  { id: "format", label: "Format & Procedures" },
  { id: "references", label: "References", type: "references" as const },
];

export function LitigationReportIOContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is a Litigation-Report Investigation?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A litigation-report investigation is conducted under the direction and supervision of a judge advocate.
            It is used when the investigation may be used in connection with claims against or by the government,
            civil litigation, or other legal proceedings.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0210
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Important Restriction:</strong> Litigation-report investigations should NEVER be conducted into the
            death of active-duty military members or civilians killed while accompanying military personnel.
          </p>
        </div>
      </section>
    ),
    "when-required": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When This Type is Required</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Litigation-report investigations are appropriate when:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>There is a potential claim against the United States (Federal Tort Claims Act)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>There is a potential affirmative claim by the government against a third party</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>The investigation will be used in civil litigation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>The government may pursue recovery for damage to property</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Medical care has been furnished and government may recover costs</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Note:</strong> The merits of any potential claim are irrelevant in determining whether to initiate
            a litigation-report. If there is potential for legal action, use this format.
          </p>
        </div>
      </section>
    ),
    "supervision": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Judge Advocate Supervision Requirements</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Unlike command investigations, litigation-report investigations require:
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Supervisory Judge Advocate</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Assigned to supervise the investigation</li>
              <li>• Provides ongoing guidance</li>
              <li>• Reviews work product throughout</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Frequent Consultation</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• IO shall consult frequently with supervisory JA</li>
              <li>• Report progress and findings</li>
              <li>• Get guidance on legal issues</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Legal Review</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• JA reviews all aspects of the investigation</li>
              <li>• Ensures legal sufficiency</li>
              <li>• Reviews final report before submission</li>
            </ul>
          </div>
        </div>
      </section>
    ),
    "differences": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Differences from Command Investigation</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Aspect</th>
                <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command Investigation</th>
                <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Litigation-Report</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700 dark:text-zinc-300">
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-4 font-medium">Supervision</td>
                <td className="py-2 pr-4">IO works independently with occasional legal consultation</td>
                <td className="py-2">Continuous JA supervision throughout</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-4 font-medium">Opinions & Recommendations</td>
                <td className="py-2 pr-4">Includes opinions and recommendations</td>
                <td className="py-2">May NOT include (unless specifically directed)</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-4 font-medium">Witness Statements</td>
                <td className="py-2 pr-4">IO summarizes and signs</td>
                <td className="py-2">IO summarizes without obtaining signed statements</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-2 pr-4 font-medium">Purpose</td>
                <td className="py-2 pr-4">General fact-finding</td>
                <td className="py-2">Preserve evidence for potential legal proceedings</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Conversion</td>
                <td className="py-2 pr-4" colSpan={2}>Once convened as command investigation, cannot be converted to litigation-report</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    ),
    "format": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Format and Procedures</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Convening Order Requirements</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Appoint IO</li>
            <li>• Designate supervisory JA</li>
            <li>• Direct IO to work under JA supervision</li>
            <li>• Specify scope and issues</li>
            <li>• Set due date (normally 30 days)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Witness Interview Procedures</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Determine rights warnings with JA guidance</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Article 31 warnings if suspect of crime</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>10 USC 1219 warning if asking about injury</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>DO NOT</strong> ask witnesses to sign statements</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Summarize interview and authenticate with IO signature</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><em>Exception:</em> May obtain signed statement from adverse party (claimant) with JA approval</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Report Format</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Preliminary statement</li>
            <li>• Findings of fact</li>
            <li>• <strong>NO opinions</strong> (unless CA directs otherwise)</li>
            <li>• <strong>NO recommendations</strong> (unless CA directs otherwise)</li>
            <li>• Enclosures</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">FTCA Cases</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            FTCA claims require litigation-report investigations when:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Government vehicle was involved in accident</li>
            <li>• Government property caused injury</li>
            <li>• Government employee negligence alleged</li>
            <li>• Potential for settlement or judgment</li>
          </ul>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Copy of report provided to OJAG (Code 15), Tort Claims Unit
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
