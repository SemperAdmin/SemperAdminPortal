"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "when-to-direct", label: "When to Direct" },
  { id: "timeline", label: "3-Day Timeline" },
  { id: "what-to-determine", label: "What PI Determines" },
  { id: "escalation", label: "When to Escalate" },
  { id: "commander-actions", label: "Commander Actions" },
  { id: "references", label: "References", type: "references" as const },
];

export function PreliminaryInquiryContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is a Preliminary Inquiry?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A preliminary inquiry (PI) is a quick, informal investigation to gather enough facts for you
            to decide what action to take. It is your first step in fact-finding after an incident occurs.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Characteristics</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Informal fact-gathering (not a formal investigation)</li>
            <li>• Typically completed within 3 working days</li>
            <li>• No convening order required</li>
            <li>• Results in recommendation for further action (or no action)</li>
            <li>• Commander makes final decision based on PI results</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0203
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Role as Commander</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Direct who conducts the PI</li>
            <li>• Review the PI results</li>
            <li>• Decide what action to take based on results</li>
          </ul>
        </div>
      </section>
    ),
    "when-to-direct": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Direct a Preliminary Inquiry When:</h2>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>An incident occurs requiring fact-finding</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>You receive a report of misconduct</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>There is injury to a service member</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Property is lost, damaged, or missing</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>You receive a complaint or allegation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Any situation requiring command attention</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Examples</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Vehicle accident</li>
            <li>• Injury during training</li>
            <li>• Report of harassment</li>
            <li>• Missing equipment</li>
            <li>• Alleged misconduct</li>
            <li>• Workplace incident</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h3 className="font-semibold text-amber-800 dark:text-amber-200">When NOT to Use PI Alone</h3>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            If the matter clearly requires formal investigation from the start:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            <li>• Death of service member (requires investigation)</li>
            <li>• Major incident (likely needs Court/Board of Inquiry)</li>
            <li>• Known claims situation (requires litigation-report)</li>
          </ul>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            In these cases, you may still direct a PI first to preserve evidence and identify witnesses,
            but plan for formal investigation to follow.
          </p>
        </div>
      </section>
    ),
    timeline: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard Timeline: 3 Working Days</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The PI should normally be completed within 3 working days. This timeline recognizes
            the limited nature of the inquiry.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Extensions</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• You may grant extensions on a case-by-case basis</li>
            <li>• Major incidents may take longer</li>
            <li>• Keep the limited nature of the PI in mind</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Why 3 Days?</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Quick fact-gathering, not exhaustive investigation</li>
            <li>• Allows timely command decision</li>
            <li>• Preserves evidence while fresh</li>
            <li>• Identifies witnesses early</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Gets Done in 3 Days</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Contact key witnesses</li>
            <li>• Review available documents</li>
            <li>• Identify and preserve evidence</li>
            <li>• Provide summary of what happened</li>
            <li>• Recommend further action</li>
          </ul>
        </div>
      </section>
    ),
    "what-to-determine": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The PI Should Provide:</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Summary of What Happened</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Who was involved</li>
            <li>• What occurred</li>
            <li>• When it happened</li>
            <li>• Where it occurred</li>
            <li>• How it happened</li>
            <li>• Why (if known)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. What Is NOT Known</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Gaps in information</li>
            <li>• Unresolved questions</li>
            <li>• Areas needing further investigation</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Recommendation for Further Action</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• No further action needed</li>
            <li>• Consult a judge advocate</li>
            <li>• Command investigation</li>
            <li>• Litigation-report investigation</li>
            <li>• Board of inquiry</li>
            <li>• Court of inquiry</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PI Report Format</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Personnel contacted (name, rank, title, unit, phone)</li>
            <li>Materials reviewed (documents, evidence, location)</li>
            <li>Summary of findings (brief summary of what occurred)</li>
            <li>Recommendation (what further action is needed)</li>
          </ol>
        </div>
      </section>
    ),
    escalation: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When to Escalate to Full Investigation</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Escalate to Command Investigation When:</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• More facts are needed</li>
            <li>• Formal findings, opinions, and recommendations required</li>
            <li>• Matter is complex</li>
            <li>• Multiple parties involved</li>
            <li>• Potential disciplinary action</li>
            <li>• Potential claims (but see litigation-report below)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Escalate to Litigation-Report Investigation When:</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Potential claims against the government (FTCA)</li>
            <li>• Potential affirmative claims by government</li>
            <li>• Civil litigation is anticipated</li>
            <li>• JA supervision is needed</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Escalate to Board/Court of Inquiry When:</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Major incident</li>
            <li>• Death case meeting major incident definition</li>
            <li>• Hearing procedure needed</li>
            <li>• Party rights may be required</li>
            <li>• Subpoena power needed (Court of Inquiry only)</li>
          </ul>
        </div>
        <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <h3 className="font-semibold text-green-800 dark:text-green-200">No Further Action When:</h3>
          <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
            <li>• Facts are clear</li>
            <li>• No misconduct or liability</li>
            <li>• Matter is resolved</li>
            <li>• No interest outside command</li>
            <li>• Adequately documented elsewhere (NCIS, safety investigation)</li>
          </ul>
        </div>
      </section>
    ),
    "commander-actions": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Actions</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: Direct the PI</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Assign an officer or senior enlisted to conduct PI</li>
            <li>• Provide general guidance on what to investigate</li>
            <li>• No formal convening order required</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: Receive the PI Report</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Review within a few days of completion</li>
            <li>• Evaluate the summary and recommendation</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: Decide on Action</h3>
          <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">Your Options (JAGMAN 0204):</p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Take no further action</li>
            <li>Make LOD determination (for injuries)</li>
            <li>Convene command investigation</li>
            <li>Convene litigation-report investigation</li>
            <li>Convene Court or Board of Inquiry (or request from higher)</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 4: Document Your Decision</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Endorse PI as memo for record if no further action</li>
            <li>• Issue convening order if investigation required</li>
            <li>• Consult legal before convening litigation-report</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h3 className="font-semibold text-amber-800 dark:text-amber-200">Key Reminders</h3>
          <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            <li>• Coordinate with NCIS before PI if criminal matter suspected</li>
            <li>• Coordinate with safety if mishap investigation ongoing</li>
            <li>• Consult legal if complex or unclear</li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
