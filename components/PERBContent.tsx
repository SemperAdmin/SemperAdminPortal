"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "grounds", label: "Grounds for Appeal" },
  { id: "evidence", label: "Evidence Requirements" },
  { id: "dd-form-149", label: "DD Form 149" },
  { id: "submission", label: "Submission" },
  { id: "special-situations", label: "Special Situations" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function PERBContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Performance Evaluation Review Board (PERB)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Performance Evaluation Review Board (PERB) is your avenue to challenge fitness reports you believe contain errors, inaccuracies, or injustices. The PERB operates under the Manpower Management Records and Performance Branch (MMPB-21) at HQMC. A panel of three field grade officers reviews your case and votes on whether to approve, partially approve, or deny your appeal.
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Burden of Proof:</strong> You hold the burden of proof. The fitness report is presumed correct unless you prove otherwise. Submit your strongest evidence with your initial petition. Do not rely on the board to investigate on your behalf.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Facts
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Appeals take up to <strong>180 days</strong> to adjudicate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Denied petitions automatically forward to the <strong>Board for Correction of Naval Records (BCNR)</strong> for secondary review</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Your Reporting Senior (RS) and Reviewing Officer (RO) will <strong>not be informed</strong> of your appeal without your explicit permission</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Request corrections within <strong>3 years</strong> of discovering the error</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PERB Composition and Process
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Three field grade officers (LtCol or Col) must be present to form a quorum</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>No board member will be junior in grade to the petitioner or personally involved in the case</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Board actions are decided by majority vote</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Proceedings are administrative and non-adversarial — no in-person hearing option</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    grounds: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Grounds for Appeal
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your appeal must fall into one of three categories:
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrative Error</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Incorrect information in Section A (Administrative Information) or factual statements in Sections I and K that contain no opinion or interpretation.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Examples:</strong> Wrong dates, incorrect grade, wrong billet title
              </p>
              <div className="mt-2 rounded bg-blue-50 p-2 dark:bg-blue-900/20">
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> Administrative errors are resolved by CMC (MMSB) without full board review.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Substantive Inaccuracy</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Evaluative content that is factually wrong.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Examples:</strong> Marks that do not reflect actual performance, comments that misrepresent accomplishments or events
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Injustice</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Bias, prejudice, or unfair treatment in the evaluation process.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Examples:</strong> RS/RO personal conflict, documented retaliation, procedural violations such as failure to provide required counseling for adverse reports
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    evidence: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Evidence Requirements
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The burden of proof is on you. Collect all documentation that supports your claim before submitting your petition.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Evidence for Administrative Errors
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Assignment, travel, or TAD orders</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Unit diary extracts or service record book entries</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Leave records</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Organizational manning documents (T/O)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Hospital admission and disposition records</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Statements from personnel officers or individuals familiar with the situation</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Evidence for Substantive Inaccuracy or Injustice
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Third-party witness statements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Request mast documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Emails and text messages between you and your RS/RO</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Letters from your RS/RO acknowledging errors or providing correction</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Investigation reports (IG, EO, command investigations)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Medical or legal documents relevant to your case</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    "dd-form-149": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DD Form 149 Instructions
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Use the <strong>February 2025 version</strong> of DD Form 149. Appeals submitted without this form will be returned.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Critical Blocks to Complete
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Block</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Instructions</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Block 9</td>
                  <td className="py-2">Provide your best contact email and phone number. MMPB-21 will use this to reach you with questions. Update them if you deploy.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Block 13</td>
                  <td className="py-2">Be specific about your desired outcome. Include the occasion code and exact dates (e.g., "Remove fitness report 20220115-20220830 (TR) from my OMPF"). Vague requests delay processing.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Block 15</td>
                  <td className="py-2">Explain clearly why the report requires correction. State facts, not emotions. Reference specific sections or marks you dispute.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Block 18</td>
                  <td className="py-2">If more than 3 years have passed since the error, explain why you are submitting now and how you discovered the issue.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Block 19</td>
                  <td className="py-2">List every piece of supporting evidence you are attaching. This is your chance to prove your case.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Blocks 20-22</td>
                  <td className="py-2">Complete if filing on behalf of an incapacitated or deceased Marine.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Blocks 23-25</td>
                  <td className="py-2">If you have an attorney, list their name here. MMPB-21 may communicate with your legal counsel.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Block 27a</td>
                  <td className="py-2">Sign the form. Electronic signature is preferred. Unsigned petitions will be returned without action.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    submission: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Submission Process
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Email Submission (Preferred)</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Send your completed DD Form 149 and all supporting evidence to:
              </p>
              <p className="mt-2 font-mono text-sm text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                SMB_Manpower_MMRP_13@usmc.mil
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mail Submission</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                MMPB-21<br />
                2008 Elliot Rd (Room 224)<br />
                Quantico, VA 22134
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            After Submission
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>MMPB-21 will acknowledge receipt of your petition</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>After acknowledgment, do not inquire about status — frequent inquiries delay the process</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Processing takes up to 180 days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>You will receive the board's decision via email to the address in Block 9</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timing Considerations
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Submit corrections within <strong>3 years</strong> of discovering the error</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>If in the promotion zone:</strong> Submit at least 120 days before the board convenes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Indicate on DD Form 149 that you are in the promotion zone — MMPB-21 will prioritize but cannot guarantee resolution before selection board</span>
            </li>
          </ul>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Example:</strong> If the SSgt selection board convenes 8 April 2025, submit NLT 9 December 2024.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Privacy Protections
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>MMPB-21 will only communicate with you, the petitioner</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>They will not discuss your case with your CO, SgtMaj, spouse, or anyone else unless you designate legal counsel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Your RS and RO will not be contacted without your explicit permission</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>If a report is modified, your RS/RO likely will not know. If removed, they may notice but will not receive case information</span>
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
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Modifying Your Petition After Submission</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                You submitted a petition requesting specific comments be deleted but now want the entire report removed. You can change your request by submitting a new DD Form 149. Reference your existing Case ID when communicating with MMPB-21. Understand that changes may extend your processing time.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PERB Denial and BCNR Escalation</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                A denied petition is not the end. Denied and partially denied petitions automatically forward to the Board for Correction of Naval Records (BCNR) for secondary review. Your denial letter from MMPB-21 will include procedures and timelines for submitting new or additional evidence to the BCNR.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Filing on Behalf of an Incapacitated or Deceased Marine</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Complete Blocks 20-22 of the DD Form 149 if you are filing on behalf of a Marine who is incapacitated or deceased. MMPB-21 will communicate with you as the designated representative.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Using Legal Counsel</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                If you have an attorney, list their name in Blocks 23-25 of DD Form 149. MMPB-21 may communicate with your legal counsel regarding your case. If you do not have counsel, leave these blocks blank.
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
                  <td className="py-2 pr-4">Petition returned for incorrect form</td>
                  <td className="py-2">Use DD Form 149 dated February 2025. Older versions will not be accepted.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Petition returned for missing signature</td>
                  <td className="py-2">Sign Block 27a. Electronic signature is preferred.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Vague desired outcome in Block 13</td>
                  <td className="py-2">State exactly what you want: "Remove fitness report [dates] [occasion code] from my OMPF" or "Remove the following comment from Section I: [exact quote]."</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Petition denied for insufficient evidence</td>
                  <td className="py-2">Gather stronger documentation. Consider RS/RO letters, third-party statements, investigation results, or other official records. Submit new evidence to BCNR during secondary review.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Appeal filed more than 3 years after discovering error</td>
                  <td className="py-2">Explain in Block 18 why you waited and how you discovered the injustice. Reasonable explanations: newly discovered evidence, recent promotion board failure, or deployment preventing earlier action.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Not receiving status updates</td>
                  <td className="py-2">After MMPB-21 acknowledges receipt, do not inquire about status. Processing takes up to 180 days. Frequent inquiries delay the process.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Promotion board approaching before PERB decision</td>
                  <td className="py-2">Submit at least 120 days before board convening date. Annotate on DD Form 149 that you are in the promotion zone. MMPB-21 will prioritize but cannot guarantee resolution.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PERB Contact Information
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Email:</strong> SMB_Manpower_MMRP_13@usmc.mil</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Phone:</strong> 703-784-0475 (DSN: 278-0475)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Mailing Address:</strong> MMPB-21, 2008 Elliot Rd (Room 224), Quantico, VA 22134</span>
            </li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
