"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "preponderance", label: "Preponderance" },
  { id: "clear-convincing", label: "Clear & Convincing" },
  { id: "beyond-reasonable-doubt", label: "Beyond Reasonable Doubt" },
  { id: "application", label: "Applying Standards" },
  { id: "references", label: "References", type: "references" as const },
];

export function StandardsOfProofIOContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standards of Proof</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Standards of proof define how certain you must be that a fact is true before making
            a finding. Different types of investigations and different determinations require
            different standards of proof. Understanding which standard applies is essential
            for proper findings.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Key Principle:</strong> Most administrative investigations use the
            &quot;preponderance of the evidence&quot; standard—more likely than not (greater than 50%).
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standards Comparison</h3>
          <div className="mt-2 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Certainty Level</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Used For</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Preponderance</td>
                  <td className="py-2 pr-4">&gt;50%</td>
                  <td className="py-2">Most admin investigations</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Clear & Convincing</td>
                  <td className="py-2 pr-4">~75%</td>
                  <td className="py-2">Certain admin actions</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Beyond Reasonable Doubt</td>
                  <td className="py-2 pr-4">~95%+</td>
                  <td className="py-2">Criminal trials only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    preponderance: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preponderance of the Evidence</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The &quot;preponderance of the evidence&quot; standard is met when the evidence shows that
            something is more likely true than not true. Think of it as tipping the scales
            just slightly in one direction—51% or greater.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When Used</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Command investigations (JAGMAN)</li>
            <li>• Most administrative fact-finding</li>
            <li>• LOD determinations</li>
            <li>• Misconduct determinations</li>
            <li>• Most administrative separation boards</li>
            <li>• Federal tort claims investigations</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Practical Test:</strong> Is it more likely than not that this happened?
            If the answer is yes, the preponderance standard is met.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Example</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Two witnesses say the Marine was at the scene; one says he was elsewhere.
            Based on the weight and credibility of the evidence, you find it more likely
            that the Marine was present. The preponderance standard is satisfied.
          </p>
        </div>
      </section>
    ),
    "clear-convincing": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Clear and Convincing Evidence</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            This is a higher standard than preponderance. The evidence must be highly and
            substantially more probable to be true than not. It must produce in the mind
            a firm belief or conviction.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When Used</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Some administrative separation cases (e.g., pattern of misconduct)</li>
            <li>• Certain disability determinations</li>
            <li>• Some security clearance matters</li>
            <li>• Specific cases where regulation requires this standard</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> Always check the applicable regulation or order to determine
            which standard applies to your specific investigation.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Practical Application</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You should be left with no substantial doubt. While not as demanding as
            &quot;beyond a reasonable doubt,&quot; this standard requires more than a bare majority
            of the evidence—you need to be fairly certain.
          </p>
        </div>
      </section>
    ),
    "beyond-reasonable-doubt": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Beyond a Reasonable Doubt</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            This is the highest standard of proof in the legal system. It applies only to
            criminal trials at courts-martial. The evidence must be so strong that there
            is no reasonable doubt that the accused committed the offense.
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Important:</strong> Administrative investigations do NOT use this standard.
            Do not confuse your role as an IO with that of a court-martial panel.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When It Applies</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Summary courts-martial</li>
            <li>• Special courts-martial</li>
            <li>• General courts-martial</li>
            <li>• NOT administrative investigations</li>
            <li>• NOT administrative separation boards</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Mistake</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            IOs sometimes mistakenly think they need to prove things &quot;beyond a reasonable doubt.&quot;
            This is incorrect. If a preponderance of the evidence supports a finding, you should
            make that finding—even if some doubt remains.
          </p>
        </div>
      </section>
    ),
    application: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Applying Standards of Proof</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step-by-Step Process</h3>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Identify the applicable standard</strong> from the convening order, regulation, or applicable instruction</li>
            <li><strong>Gather all relevant evidence</strong>—both supporting and contradicting the proposition</li>
            <li><strong>Evaluate credibility</strong>—consider demeanor, consistency, corroboration, bias</li>
            <li><strong>Weigh the evidence</strong>—consider quality, not just quantity</li>
            <li><strong>Make your finding</strong>—does the evidence meet the required standard?</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Weighing Credibility</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Consider these factors when evaluating evidence:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Consistency:</strong> Is the testimony consistent internally and with other evidence?</li>
            <li>• <strong>Corroboration:</strong> Is it supported by other witnesses or documentary evidence?</li>
            <li>• <strong>Opportunity:</strong> Was the witness in a position to observe?</li>
            <li>• <strong>Bias:</strong> Does the witness have a reason to shade the truth?</li>
            <li>• <strong>Demeanor:</strong> How did the witness present during the interview?</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Remember:</strong> Document your reasoning. Explain in your report why you
            found certain evidence more credible or persuasive than other evidence.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
