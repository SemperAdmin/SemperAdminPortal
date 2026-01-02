"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose & Scope" },
  { id: "report-format", label: "Report Format" },
  { id: "recommendations", label: "Recommendations" },
  { id: "sample", label: "Sample Format" },
  { id: "references", label: "References", type: "references" as const },
];

export function PreliminaryInquiryIOContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is a Preliminary Inquiry?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A preliminary inquiry (PI) is a quick, informal investigation to gather enough information for a commander
            to decide what action to take. It is not a full investigation but a fact-gathering tool to help commanders
            make informed decisions.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0204
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3-Day Timeline</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Preliminary inquiries should normally be completed within <strong>3 working days</strong></span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Extensions may be granted on a case-by-case basis</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Major incidents may take longer</span></li>
          </ul>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 italic">
            Note: The 3-day timeline recognizes the limited nature of the PI. It is not meant to be exhaustive.
          </p>
        </div>
      </section>
    ),
    "purpose": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Purpose</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Gather initial facts about an incident</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provide commander with sufficient information to decide next steps</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Identify witnesses and preserve evidence</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Determine if formal investigation is needed</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Scope</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Limited fact-finding</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Identify key witnesses</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Locate and preserve evidence</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provide preliminary assessment of what occurred</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">A PI is NOT:</p>
          <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            <li>• A full investigation</li>
            <li>• A substitute for command investigation</li>
            <li>• A tool to make final determinations</li>
            <li>• A formal proceeding with party rights</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Triggers a Preliminary Inquiry</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Commanders may direct a PI when:</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>An incident occurs requiring fact-finding</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>There is a report of misconduct</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>There is an injury or property damage</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>An allegation requires initial assessment</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>The commander needs information to decide how to proceed</span></li>
          </ul>
        </div>
      </section>
    ),
    "report-format": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PI Report Format</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The PI report is a brief document. Per JAGMAN, it should include:
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Appointing Order Reference (if any)</h3>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Personnel Contacted</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Name, rank, title, unit, telephone number
            </p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Materials Reviewed</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Documents, objects, materials reviewed</li>
              <li>• Location of evidence and responsible individual</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4. Summary of Findings</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Brief summary (may be one paragraph)</li>
              <li>• What occurred (who, what, when, where, how, why)</li>
              <li>• What is not known</li>
              <li>• Should support your recommendations</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5. Recommendation</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              What further action is needed (see Recommendations tab)
            </p>
          </div>
        </div>
      </section>
    ),
    "recommendations": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Possible Recommendations</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your recommendation should be one of the following:
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. No Further Action</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Facts are clear</li>
              <li>• No misconduct or liability involved</li>
              <li>• Matter is resolved</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Consult a Judge Advocate</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Legal questions exist</li>
              <li>• Potential criminal matter</li>
              <li>• Complex legal issues</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Command Investigation</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• More facts needed</li>
              <li>• Formal investigation required</li>
              <li>• Findings, opinions, recommendations needed</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4. Litigation-Report Investigation</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Potential claims against the government</li>
              <li>• Potential affirmative claims by the government</li>
              <li>• Judge advocate supervision needed</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5. Board of Inquiry</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Major incident</li>
              <li>• Complex matter requiring formal proceedings</li>
              <li>• Party rights may be needed</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">6. Court of Inquiry</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Most serious matters</li>
              <li>• Convened by General/Flag officer</li>
              <li>• Formal judicial-like proceedings</li>
            </ul>
          </div>
        </div>
      </section>
    ),
    "sample": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sample PI Report Format</h2>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 font-mono text-sm dark:bg-zinc-800">
            <pre className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-300">{`5830
[Date]

From: [Name and rank of individual conducting PI]
To:   [Title of authority ordering PI]

Subj: PRELIMINARY INQUIRY INTO [DESCRIPTION OF INCIDENT]

Ref:  (a) JAGMAN, Section 0203

Encl: (1) Appointing order (if any)
      (2) [Any other evidence]

1. This reports completion of the preliminary inquiry
   conducted in accordance with reference (a) into
   [description of incident].

2. Personnel contacted: [List individuals with name,
   rank, title, unit, telephone number]

3. Materials reviewed: [List documents, objects,
   materials reviewed]

4. Summary of findings: [Brief summary of what
   occurred and what is not known]

5. Recommendation: [Your recommendation for
   further action]

[Signature]`}</pre>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
