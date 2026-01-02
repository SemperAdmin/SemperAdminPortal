"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "preliminary", label: "Preliminary Statement" },
  { id: "findings", label: "Findings of Fact" },
  { id: "opinions", label: "Opinions" },
  { id: "recommendations", label: "Recommendations" },
  { id: "enclosures", label: "Enclosures" },
  { id: "references", label: "References", type: "references" as const },
];

export function InvestigationReportFormatIOContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Report Format</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The investigation report is the formal product of the investigation. It must be
            organized, thorough, and clearly written to allow the convening authority and
            reviewers to understand what happened and why.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0208 prescribes the format for
            command investigation reports.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Report Sections</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Preliminary Statement</li>
            <li>Findings of Fact</li>
            <li>Opinions (Command Investigation only, if CA directed)</li>
            <li>Recommendations (Command Investigation only, if CA directed)</li>
            <li>Enclosures</li>
          </ol>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Litigation-Report Note:</strong> Litigation-report investigations do NOT
            include opinions or recommendations unless specifically directed by the CA.
          </p>
        </div>
      </section>
    ),
    preliminary: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preliminary Statement</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The preliminary statement sets the stage for the report. It provides essential
            context and administrative information about the investigation.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Elements</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Authority:</strong> Reference the convening order (date, issuing command)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Purpose:</strong> State what the investigation was directed to determine</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Background:</strong> Brief factual summary of events leading to investigation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Scope:</strong> What was investigated, any limitations</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Evidence Summary:</strong> Overview of evidence gathered (witnesses, documents, etc.)</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sample Opening</h3>
          <div className="mt-2 rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
            <p className="text-sm text-zinc-700 dark:text-zinc-300 font-mono">
              &quot;1. Preliminary Statement: By letter dated [date], the Commanding Officer,
              [Command], appointed the undersigned to conduct a command investigation
              into the circumstances surrounding [subject matter]. The investigation was
              directed to determine [specific questions from convening order].&quot;
            </p>
          </div>
        </div>
      </section>
    ),
    findings: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Findings of Fact</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Findings of fact are the heart of the report. Each finding is a statement of
            fact established by the evidence. They should directly address the issues
            raised in the convening order.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Characteristics of Good Findings</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Factual:</strong> Statements of fact, not opinion or conjecture</li>
            <li>• <strong>Supported:</strong> Each finding based on evidence in the enclosures</li>
            <li>• <strong>Specific:</strong> Include dates, times, names, places</li>
            <li>• <strong>Clear:</strong> Understandable without reference to enclosures</li>
            <li>• <strong>Complete:</strong> Address all issues in the convening order</li>
            <li>• <strong>Numbered:</strong> Sequentially numbered for easy reference</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Best Practice:</strong> Cite the enclosure that supports each finding.
            Example: &quot;(Encl 3)&quot; after the finding.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sample Findings Format</h3>
          <div className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p><strong>Finding 1:</strong> On 15 June 2024, Corporal John Smith was assigned to guard duty at Post 3, Building 1142. (Encl 2)</p>
            <p><strong>Finding 2:</strong> At approximately 0230 on 16 June 2024, Corporal Smith departed Post 3 without authorization or relief. (Encls 4, 5)</p>
            <p><strong>Finding 3:</strong> Corporal Smith&apos;s absence was discovered at 0315 during the Sergeant of the Guard&apos;s rounds. (Encl 6)</p>
          </div>
        </div>
      </section>
    ),
    opinions: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Opinions</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Opinions are the IO&apos;s conclusions drawn from the findings of fact.
            They interpret the facts and draw reasonable inferences about what happened
            and why.
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Important:</strong> Litigation-report investigations do NOT include opinions
            unless specifically directed by the CA. Command investigations may include them.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Writing Effective Opinions</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Base opinions only on the findings of fact</li>
            <li>• Reference the findings that support each opinion</li>
            <li>• Address causation, fault, responsibility as appropriate</li>
            <li>• State whether conduct violated regulations or standards</li>
            <li>• Be direct and avoid equivocation when evidence supports a conclusion</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sample Opinion Format</h3>
          <div className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p><strong>Opinion 1:</strong> Based on Findings 1-3, Corporal Smith abandoned his post in violation of UCMJ Article 113.</p>
            <p><strong>Opinion 2:</strong> Based on Findings 4-6, the Sergeant of the Guard failed to conduct timely rounds, contributing to the delayed discovery of Corporal Smith&apos;s absence.</p>
          </div>
        </div>
      </section>
    ),
    recommendations: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Recommendations</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Recommendations suggest actions the convening authority should consider
            based on the findings and opinions. They are advisory—the CA decides
            what action to take.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Note:</strong> Like opinions, recommendations are NOT included in
            litigation-report investigations unless specifically directed.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Recommendations</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Disciplinary:</strong> NJP, courts-martial referral, administrative action</li>
            <li>• <strong>Administrative:</strong> Counseling, retraining, reassignment</li>
            <li>• <strong>Corrective:</strong> Policy changes, procedure updates</li>
            <li>• <strong>Preventive:</strong> Training, inspections, supervision improvements</li>
            <li>• <strong>Further investigation:</strong> If additional inquiry is warranted</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sample Recommendation Format</h3>
          <div className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p><strong>Recommendation 1:</strong> That Corporal Smith be referred to NJP for violation of Article 113, UCMJ.</p>
            <p><strong>Recommendation 2:</strong> That the Guard Force SOP be revised to require more frequent supervisory checks.</p>
            <p><strong>Recommendation 3:</strong> That the Sergeant of the Guard receive counseling regarding proper supervision.</p>
          </div>
        </div>
      </section>
    ),
    enclosures: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Enclosures</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Enclosures contain all the evidence supporting the investigation.
            They are numbered sequentially and referenced in the findings.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard Enclosure Order</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Enclosure 1:</strong> Convening Order (always first)</li>
            <li><strong>Enclosure 2:</strong> Appointing Order (if different from convening order)</li>
            <li><strong>Enclosures 3+:</strong> Witness statements (usually next)</li>
            <li><strong>Subsequent:</strong> Documentary evidence, photos, records, etc.</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Enclosure List Format</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Include an enclosure list at the end of the report:
          </p>
          <div className="mt-2 rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
            <p className="text-sm text-zinc-700 dark:text-zinc-300 font-mono">
              Enclosure (1): Convening Order dtd 20 Jun 2024<br />
              Enclosure (2): Statement of Cpl John Smith, USMC<br />
              Enclosure (3): Statement of Sgt Jane Doe, USMC<br />
              Enclosure (4): Guard Force Duty Log, 15-16 Jun 2024<br />
              Enclosure (5): Photographs of Post 3
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Best Practice:</strong> Tab and label each enclosure clearly.
            Include a cover sheet for each major category of evidence.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
