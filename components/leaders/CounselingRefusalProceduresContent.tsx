"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "page11-refusal", label: "Page 11 Refusal" },
  { id: "fitrep-refusal", label: "Fitness Report Refusal" },
  { id: "sample-language", label: "Sample Language" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function CounselingRefusalProceduresContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Counseling Refusal Procedures</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marines sometimes refuse to sign counseling documents, fitness reports, or other administrative paperwork.
            A refusal to sign does not invalidate the document. You must follow specific procedures to document the
            refusal and proceed with processing.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Key Principle</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            <strong>Signature means acknowledgment, not agreement.</strong> Marines often refuse because they disagree
            with the content. Explain that signature only acknowledges receipt. The rebuttal process exists for Marines
            to dispute content.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Refusals</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Page 11 Entry Refusal</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Marine refuses to acknowledge receipt of counseling entry</li>
                <li>• Entry remains valid with proper documentation</li>
                <li>• Annotate refusal with witness signature</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Fitness Report Refusal (Section J, Item 2)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• MRO refuses to sign acknowledgment of adverse report</li>
                <li>• RS must counsel Marine on ramifications</li>
                <li>• Specific directed comments required</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Fitness Report Refusal (Section K, Item 6)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• MRO refuses to sign after RO comments</li>
                <li>• RO must document refusal</li>
                <li>• Same directed comment requirements apply</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">6105 Entry Refusal</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Marine refuses to acknowledge separation warning</li>
                <li>• Entry remains valid with refusal annotation</li>
                <li>• Does not prevent separation processing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Rebuttal Rights</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Even if a Marine refuses to sign, they retain rebuttal rights:
          </p>
          <table className="mt-4 min-w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Document Type</th>
                <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Rebuttal Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Page 11 Entry</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">30 days</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Fitness Report (adverse)</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">5 working days after referral</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">6105 Entry</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">5 working days</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm text-amber-600 dark:text-amber-400">
            <strong>Note:</strong> Per MCO 1610.7B, the CMC will not accept statements after the fact if the MRO
            indicated "no statement to make" or refused to sign.
          </p>
        </div>
      </section>
    ),
    "page11-refusal": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Page 11 Refusal Procedures</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When a Marine refuses to sign a Page 11 entry, follow these steps to properly document the refusal
            and proceed with processing.
          </p>
        </div>
        <ol className="space-y-3">
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Counsel on Signature Purpose</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Explain that the signature acknowledges receipt, not agreement with the content.</p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Inform of Rebuttal Rights</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Inform the Marine they have the right to submit a rebuttal within 30 days.</p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Annotate the Refusal</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">If Marine still refuses, annotate the entry: "Marine refused to sign"</p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Obtain Witness Signature</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Have a witness sign with rank, name, and date to verify the refusal occurred.</p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Process Normally</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">The entry remains valid and is uploaded to MOL following normal procedures.</p>
              </div>
            </div>
          </li>
        </ol>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">6105 Entry Refusal</h4>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
            The same procedures apply for 6105 entries. The Marine's refusal to acknowledge a 6105 does not prevent
            separation processing. Document the refusal with a witness and proceed with the entry.
          </p>
        </div>
      </section>
    ),
    "fitrep-refusal": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fitness Report Refusal Procedures</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1610.7B Chapter 5, Paragraph 6g, specific steps are required when a Marine refuses to sign
            a fitness report.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: Counsel the Marine</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Explain the following per MCO 1610.7B:</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Acknowledging the report and making a statement is the MRO's opportunity to communicate with the CMC and rebut the report</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>When the MRO refuses to sign, it is assumed the MRO has no statement to make and the report is accurate as written</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>The MRO will not be able to submit a statement after the fact</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Refusal to sign constitutes a violation of a written order and potentially subjects the Marine to punishment under Article 92, UCMJ</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: If Marine Still Refuses</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The RS must provide a directed comment that clarifies three things:
          </p>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <span>The MRO was notified that the report was routed to them for review and signature (include date and method of communication)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <span>The MRO was counseled on the purpose of the statement and the ramifications of not signing the report</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <span>The MRO still refused to sign after communication and counseling</span>
            </li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: Process the Report</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Forward the report to the RO for review, adjudication, and 3OS sighting. The report proceeds normally
            despite the refusal.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Section K, Item 6 Refusal</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            If the RO adds adverse comments in Section K that the RS did not address, route the report back to
            the MRO. If MRO refuses to sign Section K, Item 6, the RO provides the same three-point directed
            comment and forwards to 3OS for sighting.
          </p>
        </div>
      </section>
    ),
    "sample-language": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sample Directed Comment Language</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Use these templates when documenting a refusal to sign. Customize with specific dates and methods of communication.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Section J (RS Section)</h3>
          <div className="mt-3 rounded-lg bg-zinc-50 p-4 font-mono text-sm text-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-200">
            "Directed Comment, Section J, Item 2: The MRO was notified via email on [DATE] that the report was routed
            for review and signature. The MRO was counseled on [DATE] regarding the purpose of the statement and the
            ramifications of not signing the report. The MRO refused to sign after communication and counseling."
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Section K (RO Section)</h3>
          <div className="mt-3 rounded-lg bg-zinc-50 p-4 font-mono text-sm text-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-200">
            "Directed Comment, Section K, Item 6: The MRO was notified in person on [DATE] that the report was ready
            for review. The MRO was counseled on [DATE] regarding the purpose of the statement and the ramifications
            of not signing. The MRO refused to sign after communication and counseling."
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Situations</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Marine says they need more time</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Grant reasonable requests for additional time in writing. Per MCO 1610.7B, the RS should normally
                grant reasonable requests. Document the extension and new deadline.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Marine refuses and demands a lawyer</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Marines have no right to counsel for administrative actions. Explain this is not a legal proceeding.
                Proceed with refusal documentation if they still refuse.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Marine is deployed or unavailable</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Mail or email the document for acknowledgment. Document the method and date sent. If no response
                after reasonable time, document and proceed.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Marine indicates statement attached but none included</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                RS must comment if MRO indicates a statement is attached but none is included. Forward to RO and
                inform them of the situation.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Key points to remember when handling counseling refusals.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Refusal Does Not Stop Processing</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Documents proceed with proper annotation</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Refusal does not invalidate the entry or report</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>HQMC will accept properly documented refusals</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document Everything</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Record date, time, and location of counseling on refusal</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Note who was present as witnesses</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Keep copies of all communications</span></li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Potential UCMJ Implications</h4>
          <ul className="mt-2 space-y-2 text-sm text-red-700 dark:text-red-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Refusal to sign a lawful order is potentially punishable under Article 92</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>This is rarely enforced but should be explained to the Marine</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>The goal is compliance, not punishment</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Best Practices</h4>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Stay calm and professional when faced with a refusal</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Clearly explain the signature means acknowledgment, not agreement</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Emphasize the rebuttal process is the proper venue to dispute content</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Have a witness present when possible</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Follow the three-point directed comment format precisely for fitness reports</span></li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
