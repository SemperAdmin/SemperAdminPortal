"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "citation-errors", label: "Citation Errors" },
  { id: "date-errors", label: "Date Errors" },
  { id: "authority-errors", label: "Authority Errors" },
  { id: "iaps-errors", label: "iAPS Errors" },
  { id: "content-errors", label: "Content Errors" },
  { id: "references", label: "References", type: "references" as const },
];

export function CommonAwardErrorsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Most Delays Are Avoidable</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Most award delays result from avoidable errors. These mistakes are identified annually by HQMC and command awards administrators. Understanding and checking for these common errors before submission will save time and ensure your Marines receive their recognition on schedule.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Remember</h4>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
            A thorough review before submission prevents delays. Use a checklist approach: dates match, format correct, sentences correct, authority verified.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Review packages for common errors before submission</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Use checklist approach: dates match, format correct, sentences correct, authority verified</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Have second set of eyes review the package</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Reference SECNAV M-1650.1 sample citations</span></li>
          </ul>
        </div>
      </section>
    ),
    "citation-errors": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Citation and Format Errors</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Citation formatting is strictly regulated. These errors are among the most common reasons for package returns.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Detailed Format Requirements</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            For complete citation format requirements including character limits, font specifications, opening/closing
            sentences, and capitalization rules by award level, see <strong>Awards & Recognition → Citation Format Requirements</strong>.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Top Citation Errors That Cause Returns</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Wrong Opening/Closing Sentence</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Using NAM opening sentence for NCM or vice versa. Always verify the correct template from SECNAV M-1650.1.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">&quot;Great Credit&quot; Misuse</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Using &quot;great credit&quot; on NAM/NCM. This phrase is only authorized for Air Medal and above.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Character/Line Limit Exceeded</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Citation exceeds maximum characters or lines. Use iAPS &quot;Print PDF&quot; to verify before submission.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Acronyms or Abbreviations</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Using &quot;USMC,&quot; &quot;CO,&quot; or unit abbreviations. All terms must be spelled out completely.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Wrong Capitalization</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                NAM/NCM not in ALL CAPS, or MSM/above not in sentence case. Each award level has specific capitalization rules.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    "date-errors": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Date Errors</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Date discrepancies are one of the most common errors and cause significant delays. All dates must match across all documents.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Action Date Consistency</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Common Error</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Different action dates on NAVMC 11533, SOA, citation, and certificate. All four documents must show the exact same action date.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Approval Date Consistency</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Common Error</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Different approval dates in iAPS versus the certificate. The approval date in the system must match what appears on the certificate presented to the Marine.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MCTFS Processing Deadlines</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Common Error</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Action dates too late for MCTFS processing, especially for separating Marines. Awards must be submitted with sufficient time for approval and processing before the Marine's separation date.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Pro Tip</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Create a simple checklist to verify all dates match before submitting. Check NAVMC 11533, SOA, citation, and certificate side-by-side.
          </p>
        </div>
      </section>
    ),
    "authority-errors": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authority Errors</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Commanders can only approve awards they have authority to approve. Authority errors delay packages and require rerouting to the proper approval authority.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Authority Errors</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Exceeding Authority</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Commander approving award they don't have authority for. Verify the commander's award approval authority before submission.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Improper Downgrade</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Commander directing originator to rescind and originate lesser award. Only the approval authority can downgrade an award - the originator cannot be directed to rescind and resubmit at a lower level.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Foreign Service Member PMD</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Marine commander approving DoN PMD for foreign service member. CMC retains approval authority for personal military decorations awarded to foreign service members.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">"By Direction" Signatures</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Signing awards "By direction" is not authorized per MARADMIN 077/25. The approval authority must personally sign or use proper delegation procedures.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Acting Commander Authority</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Acting commander exercising authority above their own grade. An acting commander can only exercise authorities appropriate to their own rank, not the rank of the position they are temporarily filling.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Pro Tip</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Verify the commander's award approval authority before starting the package. This prevents having to reroute later.
          </p>
        </div>
      </section>
    ),
    "iaps-errors": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">iAPS Errors</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Improved Awards Processing System (iAPS) has specific requirements for document uploads and processing. Errors in iAPS delay final approval and OMPF updates.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common iAPS Errors</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Incorrect Document Attachments</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Attaching documents other than signed citation/certificate to "certificate" field. Only the final signed certificate belongs in this field. Supporting documents go elsewhere in the package.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">SOA Length Exceeded</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                SOA exceeding two pages. Use the "print PDF" button in iAPS to verify the SOA is within the two-page limit before submission.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Award Mismatch</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Award approved in iAPS doesn't match certificate/citation presented. The award level and all details in iAPS must match what the Marine receives at the ceremony.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Unsigned Certificates</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Unsigned certificates uploaded to OMPF. Only fully signed certificates should be uploaded. Unsigned certificates create confusion in the Marine's official record.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Missing Permissions</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Commander not granted iAPS permissions after assuming command. New commanders must be granted appropriate iAPS permissions by the S-1 immediately upon assuming command.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Pro Tip</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Print a PDF from iAPS before final submission to verify all documents appear correctly and the SOA doesn't exceed two pages.
          </p>
        </div>
      </section>
    ),
    "content-errors": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Content Errors</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The content of the award package must support the recommended award level. Content errors often result in downgrades or disapprovals.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Content Errors</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Unsupported Citation Info</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Citation info not supported by SOA. Every accomplishment mentioned in the citation must be documented in detail in the Summary of Action.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Vague Achievements</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Vague achievements without quantifiable results. Use specific numbers, percentages, dollar amounts, and measurable outcomes.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Award Level Not Commensurate</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Award level not commensurate with accomplishments. The achievements described must justify the recommended award level. Recommending too high or too low undermines the package.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Dual-Hatted Awards</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Dual-hatted members receiving separate awards for each billet. A Marine serving in multiple billets during a single tour should receive one end-of-tour award covering all duties, not separate awards for each role.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Pro Tip</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Have someone unfamiliar with the Marine's work read the SOA. If they can't understand the specific impact and measurable results, it needs more detail.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
