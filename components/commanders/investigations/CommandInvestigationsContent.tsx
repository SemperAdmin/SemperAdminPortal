"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "when-to-convene", label: "When to Convene" },
  { id: "selecting-io", label: "Selecting an IO" },
  { id: "convening-order", label: "Convening Order" },
  { id: "oversight", label: "Oversight Role" },
  { id: "reviewing-report", label: "Reviewing Report" },
  { id: "common-issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

export function CommandInvestigationsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is a Command Investigation?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A command investigation (Type One) is the most common formal administrative investigation.
            It uses informal procedures to gather facts and results in findings, opinions, and
            recommendations for your action.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Characteristics</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Convened by written convening order</li>
            <li>• Investigating Officer (IO) gathers evidence</li>
            <li>• No formal hearing procedure</li>
            <li>• 30-day standard completion time</li>
            <li>• Results in findings of fact, opinions, recommendations</li>
            <li>• You review and act on the report</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0209
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Role as Convening Authority</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Issue convening order</li>
            <li>• Select and appoint IO</li>
            <li>• Provide guidance and resources</li>
            <li>• Grant extensions if needed</li>
            <li>• Review completed report</li>
            <li>• Take action on report</li>
          </ul>
        </div>
      </section>
    ),
    "when-to-convene": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Convene a Command Investigation When:</h2>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>More facts are needed beyond preliminary inquiry</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Formal findings, opinions, and recommendations required</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Matter requires thorough documentation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Potential disciplinary or administrative action</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Complex situation with multiple parties</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Directed by higher authority</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Triggers</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Misconduct allegations</li>
            <li>• Accidents and injuries (non-claims situations)</li>
            <li>• Property loss or damage</li>
            <li>• Policy violations</li>
            <li>• Command climate issues</li>
            <li>• Line of duty determinations</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h3 className="font-semibold text-amber-800 dark:text-amber-200">When NOT to Use Command Investigation</h3>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Use Litigation-Report Instead When:</strong></p>
          <ul className="mt-1 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            <li>• Potential claims against government (FTCA)</li>
            <li>• Potential affirmative claims by government</li>
            <li>• Civil litigation anticipated</li>
            <li>• Matter involves potential government liability</li>
          </ul>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Use Court/Board of Inquiry When:</strong></p>
          <ul className="mt-1 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            <li>• Major incident</li>
            <li>• Hearing procedure needed</li>
            <li>• Party rights required</li>
            <li>• Subpoena power needed</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Critical Limitation:</strong> Once convened as a command investigation, it cannot
            be converted to a litigation-report investigation. Choose correctly from the start.
          </p>
        </div>
      </section>
    ),
    "selecting-io": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IO Qualifications (JAGMAN 0206)</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Select an individual who is best qualified by:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Age</li>
            <li>• Education</li>
            <li>• Training</li>
            <li>• Experience</li>
            <li>• Length of service</li>
            <li>• Temperament</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Can Serve</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Commissioned officer (most common)</li>
            <li>• Warrant officer</li>
            <li>• Senior enlisted (when appropriate)</li>
            <li>• Civilian employee (when appropriate)</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Seniority:</strong> Whenever practical, the IO should be senior in rank to any
            individual whose conduct is subject to inquiry.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Multiple IOs and Assistance</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You may appoint more than one IO if the investigation warrants it.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You may direct the IO to obtain assistance from:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Reporters</li>
            <li>• Interpreters</li>
            <li>• Experts</li>
            <li>• Administrative support personnel</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Conflicts to Avoid</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• IO should not have personal involvement in matter</li>
            <li>• IO should not have bias toward any party</li>
            <li>• IO should be able to complete within timeline</li>
          </ul>
        </div>
      </section>
    ),
    "convening-order": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Convening Order Should:</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Recite Specific Purposes</strong> - What you want investigated, what questions answered</li>
            <li><strong>Define Scope</strong> - Explicit instructions on what is included and excluded</li>
            <li><strong>Require Findings of Fact</strong> - Who, what, where, when, how, why</li>
            <li><strong>Identify Sources</strong> - Potential witnesses, documents to review</li>
            <li><strong>Specify Format</strong> - Normally letter report with enclosures</li>
            <li><strong>Require Opinions and Recommendations</strong> - Unless litigation-report</li>
            <li><strong>Set Due Date</strong> - Normally 30 calendar days</li>
            <li><strong>Direct Legal Assistance</strong> - IO should seek judge advocate guidance</li>
            <li><strong>Include Required Guidance</strong> - Privacy Act, Article 31, 10 USC 1219, NCIS coordination</li>
          </ol>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Sample Convening Order:</strong> See JAGMAN Appendix A-2-d
          </p>
        </div>
      </section>
    ),
    oversight: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">During the Investigation</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Monitor Progress</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Check in with IO periodically</li>
            <li>• Ensure timeline will be met</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Grant Extensions</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• IO may request more time</li>
            <li>• Need not be in writing</li>
            <li>• Must be documented in preliminary statement</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Modify Scope</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• You may amend convening order at any time</li>
            <li>• Change membership</li>
            <li>• Limit or expand scope</li>
            <li>• Provide additional instructions</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h3 className="font-semibold text-red-800 dark:text-red-200">Do NOT:</h3>
          <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
            <li>• Interfere with IO&apos;s independence</li>
            <li>• Direct specific findings</li>
            <li>• Pressure IO for certain outcome</li>
            <li>• Discuss findings with subjects before complete</li>
          </ul>
        </div>
      </section>
    ),
    "reviewing-report": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Review (30 calendar days, 20 for death cases)</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: Review for Completeness</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Are all questions in convening order answered?</li>
            <li>• Are findings supported by evidence?</li>
            <li>• Are opinions based on findings?</li>
            <li>• Are recommendations actionable?</li>
          </ul>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 italic">
            If Incomplete: Return to IO for further investigation, specifying what additional work is needed.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: Take Action</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">You may:</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Approve, disapprove, or modify findings of fact</li>
            <li>• Approve, disapprove, or modify opinions</li>
            <li>• Approve, disapprove, or modify recommendations</li>
            <li>• Add your own opinions and recommendations</li>
            <li>• Comment on recommendations you cannot implement</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: Endorse in Writing</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Your endorsement should:</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• State what corrective action is warranted</li>
            <li>• Provide timeline for implementation</li>
            <li>• Forward if interest beyond command</li>
            <li>• Or treat as internal report if no outside interest</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 4: Forward or Retain</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Forward to higher if:</strong></p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Interest to commands outside yours</li>
            <li>• Requires action above your level</li>
            <li>• Adverse LOD determination (to GCMCA)</li>
          </ul>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Retain internally if:</strong></p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• No interest outside command</li>
            <li>• No superior direction to forward</li>
            <li>• Retention: 2 years</li>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Convening Order Issues</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Scope too vague:</strong> Define specifically what to investigate</li>
            <li>• <strong>No deadline:</strong> Always set completion date</li>
            <li>• <strong>No legal guidance:</strong> Direct IO to consult JA</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IO Selection Issues</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>IO too junior:</strong> Select someone senior to subjects</li>
            <li>• <strong>IO lacks time:</strong> Ensure IO can dedicate time</li>
            <li>• <strong>IO has conflict:</strong> Check for bias or involvement</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Issues</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Taking too long:</strong> Check progress, grant extension if warranted</li>
            <li>• <strong>Scope creep:</strong> Amend convening order if scope needs to change</li>
            <li>• <strong>Criminal matter discovered:</strong> Stop, coordinate with NCIS</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Report Issues</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Findings not supported:</strong> Return for additional evidence</li>
            <li>• <strong>Opinions not based on findings:</strong> Return for correction</li>
            <li>• <strong>Recommendations impractical:</strong> Modify or comment</li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
