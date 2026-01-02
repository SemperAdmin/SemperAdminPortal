"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "when-required", label: "When Required" },
  { id: "ja-supervision", label: "JA Supervision" },
  { id: "differences", label: "Differences" },
  { id: "convening-order", label: "Convening Order" },
  { id: "forwarding", label: "Forwarding" },
  { id: "common-issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

export function LitigationReportInvestigationsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is a Litigation-Report Investigation?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A litigation-report investigation (Type Two) is conducted under judge advocate supervision
            when the investigation will be used in connection with claims or civil litigation.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Characteristics</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• JA supervision throughout</li>
            <li>• Protects attorney-client and work-product privilege</li>
            <li>• NO opinions or recommendations in IO report</li>
            <li>• Special witness interview procedures</li>
            <li>• For claims, litigation, or potential legal action</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0210
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Critical Rule:</strong> NEVER use litigation-report format for service member deaths.
            Use command investigation format (reports are releasable to families by law).
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Role as Convening Authority</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Contact JA before convening</li>
            <li>• Issue convening order designating supervisory JA</li>
            <li>• Support IO and JA throughout</li>
            <li>• Review completed report</li>
            <li>• Forward as directed</li>
          </ul>
        </div>
      </section>
    ),
    "when-required": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Convene Litigation-Report Investigation When:</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Federal Tort Claims Act (FTCA) Potential</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Government vehicle accident with injury</li>
            <li>• Government property caused injury</li>
            <li>• Government employee negligence alleged</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Affirmative Claims by Government</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Third party damaged government property</li>
            <li>• Recovery may be sought</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Civil Litigation Anticipated</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Lawsuit expected or filed</li>
            <li>• Legal defense needed</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4. Medical Care Recovery</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Government provided medical care</li>
            <li>• May seek recovery from third party</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Before Convening:</strong> You MUST contact a judge advocate or OJAG Code 15
            before convening to ensure it is the appropriate type.
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h3 className="font-semibold text-red-800 dark:text-red-200">When NOT to Use</h3>
          <p className="mt-2 text-sm text-red-700 dark:text-red-300">
            <strong>Death Cases:</strong> Never use litigation-report for active duty deaths.
            Reports are releasable to families by law. Use command investigation format.
          </p>
          <p className="mt-2 text-sm text-red-700 dark:text-red-300">
            <strong>No Claims Potential:</strong> If no claims or litigation anticipated,
            use command investigation.
          </p>
        </div>
      </section>
    ),
    "ja-supervision": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Judge Advocate Supervision</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The convening order must:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Identify the supervisory JA</li>
            <li>• Direct IO to report to JA before collecting evidence</li>
            <li>• Direct IO to comply with JA direction throughout</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Supervisory JA Responsibilities</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Direct and supervise investigation</li>
            <li>• Provide guidance to IO</li>
            <li>• Review draft report thoroughly</li>
            <li>• Draft opinions (for the report)</li>
            <li>• Ensure legal interests protected</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IO-JA Relationship</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• IO must consult frequently with JA</li>
            <li>• JA guides investigative approach</li>
            <li>• IO follows JA direction on legal matters</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Finding a Supervisory JA</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Your command&apos;s SJA</li>
            <li>• Regional Legal Service Office (RLSO)</li>
            <li>• Legal Services Support Section (LSSS)</li>
            <li>• OJAG Code 15 for complex matters</li>
          </ul>
        </div>
      </section>
    ),
    differences: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Differences from Command Investigation</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Element</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command Investigation</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Litigation-Report</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">JA Role</td>
                  <td className="py-2 pr-4">Consultation</td>
                  <td className="py-2">Supervision throughout</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Opinions</td>
                  <td className="py-2 pr-4">Included by IO</td>
                  <td className="py-2">NOT in IO report (JA drafts)</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Recommendations</td>
                  <td className="py-2 pr-4">Included</td>
                  <td className="py-2">NOT included</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Witness Statements</td>
                  <td className="py-2 pr-4">IO summarizes, signs</td>
                  <td className="py-2">IO summarizes, NO witness signatures</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Privilege</td>
                  <td className="py-2 pr-4">No privilege</td>
                  <td className="py-2">Attorney-client/work-product</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Release</td>
                  <td className="py-2 pr-4">May be released</td>
                  <td className="py-2">OJAG Code 15 sole release authority</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Conversion</td>
                  <td className="py-2 pr-4">Cannot convert to lit-report</td>
                  <td className="py-2">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Witness Statement Procedures</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• IO summarizes interview</li>
            <li>• IO authenticates with own signature</li>
            <li>• Witness does NOT sign</li>
            <li>• Exception: Adverse party (claimant) may sign with JA approval</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h3 className="font-semibold text-amber-800 dark:text-amber-200">Marking Requirements</h3>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Mark all documents: &quot;FOR OFFICIAL USE ONLY: LITIGATION/ATTORNEY WORK PRODUCT&quot;
          </p>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Safeguard against improper disclosure.
          </p>
        </div>
      </section>
    ),
    "convening-order": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Convening Order Must:</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Identify Supervisory JA</strong> - By name or billet; direct IO to report to JA before starting</li>
            <li><strong>State Purpose</strong> - &quot;This investigation is being convened and your report is being prepared in contemplation of litigation and for the express purpose of assisting attorneys representing the interests of the United States in this matter&quot;</li>
            <li><strong>Exclude Opinions and Recommendations</strong> - IO report should not contain opinions/recommendations; JA will include appropriate opinions</li>
            <li><strong>Include Confidentiality Caution</strong> - &quot;The investigation&apos;s conduct and results may be discussed only with personnel having an official need to know&quot;</li>
            <li><strong>Set Timeline</strong> - Normally 30 calendar days; extensions beyond 60 days only in extraordinary circumstances (for OJAG Code 15 requests)</li>
          </ol>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h3 className="font-semibold text-red-800 dark:text-red-200">Do NOT:</h3>
          <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
            <li>• Assign experts, reporters, interpreters (different from command investigation)</li>
            <li>• Direct opinions or recommendations</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Sample Convening Order:</strong> See JAGMAN Appendix A-2-f
          </p>
        </div>
      </section>
    ),
    forwarding: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Routing</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>IO Completes Report</strong> - Submits to supervisory JA</li>
            <li><strong>JA Review</strong> - Reviews for accuracy and thoroughness, coordinates further investigation if needed, adds opinions as appropriate</li>
            <li><strong>Forward to OJAG Code 15</strong> - Copy to Tort Claims Unit if claims potential, copy to Medical Care Recovery Unit if applicable</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Addresses</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>OJAG Code 15, Tort Claims Unit (TCU):</strong><br />9620 Maryland Avenue, Suite 205, Norfolk, VA 23511-2989</li>
            <li><strong>OJAG Code 15, Medical Care Recovery Unit (MCRU):</strong><br />9053 First St., Suite 100, Norfolk, VA 23511-3605</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Review Timeline</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• SJA review: Not later than 30 calendar days after receipt</li>
            <li>• No formal endorsement required for forwarding</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h3 className="font-semibold text-red-800 dark:text-red-200">Release Authority</h3>
          <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
            <li>• OJAG Code 15 is sole release authority for litigation-reports</li>
            <li>• OJAG Code 11 for Admiralty Letter Reports</li>
            <li>• You are NOT authorized to release</li>
          </ul>
        </div>
      </section>
    ),
    "common-issues": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Issues</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Convening Issues</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Failed to contact JA first:</strong> Always consult before convening</li>
            <li>• <strong>Wrong type chosen:</strong> Cannot convert command investigation to litigation-report</li>
            <li>• <strong>Death case:</strong> Never use litigation-report for deaths</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">During Investigation</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>IO not following JA direction:</strong> Reinforce supervisory relationship</li>
            <li>• <strong>Privilege compromise:</strong> Guard against improper disclosure</li>
            <li>• <strong>Delays:</strong> Extensions beyond 60 days only in extraordinary circumstances</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Report Issues</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Opinions included:</strong> IO report should not have opinions</li>
            <li>• <strong>Witness signed statements:</strong> Only adverse parties (with JA approval)</li>
            <li>• <strong>Improper release:</strong> Only OJAG Code 15 releases</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Coordination Issues</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Multiple commands involved:</strong> Single investigation, single supervisory JA</li>
            <li>• <strong>NCIS also investigating:</strong> Coordinate through JA</li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
