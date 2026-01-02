"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "preponderance", label: "Preponderance" },
  { id: "clear-convincing", label: "Clear & Convincing" },
  { id: "evaluating", label: "Evaluating Findings" },
  { id: "return-investigation", label: "Return for More" },
  { id: "commander-actions", label: "Actions on Findings" },
  { id: "common-issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

export function StandardsOfProofContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Why Standards of Proof Matter</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            As the convening authority, you review the IO&apos;s findings and make final determinations.
            Understanding the applicable standard of proof ensures your decisions are legally sound
            and defensible.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Role</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Review IO findings</li>
            <li>• Evaluate if standard of proof is met</li>
            <li>• Approve, modify, or disapprove findings</li>
            <li>• Return for additional investigation if evidence insufficient</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0207
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Key Point:</strong> Administrative investigations do not use formal rules of evidence.
            The standard is generally &quot;preponderance of the evidence&quot; with some exceptions requiring
            higher standards.
          </p>
        </div>
      </section>
    ),
    preponderance: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preponderance of the Evidence</h2>
          <h3 className="mt-4 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Definition</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Preponderance of the evidence means &quot;more likely than not&quot; - greater than 50% probability.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">In Practice</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• If evidence tips slightly in one direction, that is a preponderance</li>
            <li>• You do not need certainty</li>
            <li>• You need to believe it is more likely true than not</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Comparison</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Preponderance (administrative):</strong> &gt;50%</li>
            <li>• <strong>Clear and convincing:</strong> Highly probable</li>
            <li>• <strong>Beyond reasonable doubt (criminal):</strong> Near certainty</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Application:</strong> Most findings of fact in administrative investigations
            require only preponderance of the evidence.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Example</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If three witnesses say event occurred and two say it did not, and there is no reason
            to disbelieve any witness, preponderance supports finding that event occurred.
          </p>
        </div>
      </section>
    ),
    "clear-convincing": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Clear and Convincing Evidence</h2>
          <h3 className="mt-4 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When Required</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Clear and convincing evidence is required to:
          </p>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Rebut LOD Presumption</strong> - Injury/disease presumed in line of duty; clear and convincing needed to find &quot;not in line of duty&quot;</li>
            <li><strong>Rebut Mental Responsibility Presumption</strong> - Member presumed mentally responsible; clear and convincing needed to rebut</li>
            <li><strong>Rebut UA Presumption (less than 24 hours)</strong> - UA less than 24 hours presumed not to interfere with duties; clear and convincing needed to rebut</li>
            <li><strong>Find Deceased&apos;s Acts Caused Harm</strong> - Clear and convincing needed to find deceased&apos;s intentional acts caused harm or loss of life</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Definition</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            &quot;Clear and convincing&quot; means highly probable. The truth of the facts asserted leaves
            no serious or substantial doubt in the mind of objective persons.
          </p>
        </div>
      </section>
    ),
    evaluating: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Review Process</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Check Each Finding</strong>
              <ul className="mt-1 ml-4 list-disc">
                <li>Is it a statement of fact (not opinion)?</li>
                <li>Is it supported by evidence in the enclosures?</li>
                <li>Is the evidence cited?</li>
              </ul>
            </li>
            <li><strong>Verify Evidence Support</strong>
              <ul className="mt-1 ml-4 list-disc">
                <li>Review cited enclosures</li>
                <li>Does evidence actually support the finding?</li>
                <li>Is evidence credible and reliable?</li>
              </ul>
            </li>
            <li><strong>Apply Correct Standard</strong>
              <ul className="mt-1 ml-4 list-disc">
                <li>Most findings: Preponderance</li>
                <li>LOD/misconduct adverse findings: Clear and convincing</li>
                <li>Other special cases: As applicable</li>
              </ul>
            </li>
            <li><strong>Assess Conflicting Evidence</strong>
              <ul className="mt-1 ml-4 list-disc">
                <li>Did IO address conflicting evidence?</li>
                <li>Is resolution reasonable?</li>
                <li>Is reasoning documented?</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evaluating Credibility</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Consider:</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Opportunity to observe</strong></li>
            <li>• <strong>Consistency with other evidence</strong></li>
            <li>• <strong>Bias or motive</strong></li>
            <li>• <strong>Internal consistency</strong></li>
            <li>• <strong>Documentary vs. testimonial evidence</strong></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Weighing Evidence</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Documentary evidence often more reliable than memory</li>
            <li>• Contemporaneous records more reliable than later recollections</li>
            <li>• Corroborated evidence carries more weight</li>
          </ul>
        </div>
      </section>
    ),
    "return-investigation": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Return Investigation When:</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Findings Not Supported</strong> - Evidence insufficient for finding; wrong standard applied; key evidence missing</li>
            <li><strong>Incomplete Investigation</strong> - Key witnesses not interviewed; important documents not reviewed; scope not fully addressed</li>
            <li><strong>Conflicting Evidence Not Resolved</strong> - IO did not address conflict; resolution not explained; additional evidence could resolve</li>
            <li><strong>Questions Not Answered</strong> - Convening order questions unanswered; additional questions arose</li>
            <li><strong>Procedural Deficiencies</strong> - Required warnings not given; Privacy Act not followed; coordination not completed</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Return</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Identify specific deficiencies</li>
            <li>Direct what additional investigation needed</li>
            <li>Set new deadline</li>
            <li>Return to same IO if possible</li>
          </ol>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200">Your Endorsement When Returning</h3>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300 italic">
            &quot;This investigation is returned for further inquiry. Specifically, the IO will:
            [list required actions]. Submit supplemental report by [date].&quot;
          </p>
        </div>
      </section>
    ),
    "commander-actions": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Options</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Approve Findings</strong> - Findings are supported by evidence; proper standard applied; no modification needed</li>
            <li><strong>Disapprove Findings</strong> - Evidence does not support finding; wrong standard applied; finding is incorrect</li>
            <li><strong>Modify Findings</strong> - Adjust finding to reflect evidence; correct minor errors; clarify language</li>
            <li><strong>Add Findings</strong> - Evidence supports additional finding; IO missed relevant fact; document your reasoning</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Opinions and Recommendations</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Opinions:</strong> Based on findings of fact; may approve/disapprove/modify; may add your own opinions</li>
            <li>• <strong>Recommendations:</strong> Based on findings and opinions; may approve/disapprove/modify; comment on those you cannot implement</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h3 className="font-semibold text-amber-800 dark:text-amber-200">Documentation</h3>
          <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            <li>• State your action in endorsement</li>
            <li>• Explain modifications or disapprovals</li>
            <li>• Document reasoning for reviewers</li>
          </ul>
        </div>
      </section>
    ),
    "common-issues": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evidence Issues</h2>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Hearsay Without Corroboration:</strong> Administrative investigations can consider hearsay, but findings based solely on hearsay are weak. Look for corroborating evidence.</li>
            <li><strong>Conflicting Testimony:</strong> IO should explain how conflict was resolved. If not resolved, return for additional investigation or note conflict in your endorsement.</li>
            <li><strong>Missing Evidence:</strong> Key documents not obtained, witnesses not available. Consider whether additional effort warranted.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard of Proof Issues</h2>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Wrong Standard Applied:</strong> IO applied preponderance when clear and convincing required. Return for analysis under correct standard.</li>
            <li><strong>LOD Presumption Not Addressed:</strong> IO did not acknowledge presumption. Finding may not be sustainable.</li>
            <li><strong>Insufficient Evidence for Adverse Finding:</strong> Not enough to rebut presumption. Cannot sustain &quot;not in line of duty&quot; or &quot;misconduct.&quot;</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Procedural Issues</h2>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>No Rights Warning Given:</strong> Article 31 or 10 USC 1219 warning required but not given. May affect admissibility of statements. Consult legal.</li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
