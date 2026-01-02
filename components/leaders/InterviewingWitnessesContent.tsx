"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "preparation", label: "Preparation" },
  { id: "rights-warnings", label: "Rights Warnings" },
  { id: "conducting", label: "Conducting Interview" },
  { id: "documentation", label: "Documentation" },
  { id: "special-situations", label: "Special Situations" },
  { id: "references", label: "References", type: "references" as const },
];

export function InterviewingWitnessesContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Witness Interview Overview</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Witness interviews are typically the most important source of evidence in an investigation.
            The IO must conduct interviews professionally, thoroughly, and in accordance with applicable
            legal requirements to ensure testimony is admissible and reliable.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Key Principle:</strong> The goal of an interview is to obtain accurate, complete
            information—not to confirm a preconceived narrative.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Witnesses</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• <strong>Eyewitnesses:</strong> Directly observed the events</li>
            <li>• <strong>Ear witnesses:</strong> Heard relevant statements or sounds</li>
            <li>• <strong>Character witnesses:</strong> Can speak to reputation or behavior patterns</li>
            <li>• <strong>Expert witnesses:</strong> Provide specialized knowledge or opinions</li>
            <li>• <strong>Subjects:</strong> Persons whose conduct is at issue (special rules apply)</li>
          </ul>
        </div>
      </section>
    ),
    preparation: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Interview Preparation</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before the Interview</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Review all available evidence and information</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Prepare a list of topics and specific questions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Determine if rights warnings are required</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Arrange a private, neutral location</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Plan adequate time (don&apos;t rush)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Consider whether to record the interview</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Interview Order</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Generally interview witnesses in this order:
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Reporting party or complainant</li>
            <li>Neutral eyewitnesses</li>
            <li>Secondary witnesses (heard about events)</li>
            <li>Character witnesses (if needed)</li>
            <li>Subject or respondent (last, after gathering other evidence)</li>
          </ol>
        </div>
      </section>
    ),
    "rights-warnings": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Rights Warnings</h2>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Critical:</strong> Consult with JA before interviewing anyone who may be suspected
            of criminal misconduct. Failure to provide proper warnings can make statements inadmissible.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Article 31(b) Rights Warning</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Required when questioning a military member suspected of an offense:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Nature of the accusation</li>
            <li>• Right to remain silent</li>
            <li>• Any statement may be used as evidence</li>
            <li>• Right to consult with counsel</li>
          </ul>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 italic">
            Use NAVPERS 1070/891 or equivalent warning form.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">10 U.S.C. 1219 Warning</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Required when questioning anyone (military or civilian) about the origin,
            incurrence, or aggravation of a disease or injury:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Advise of the purpose of the interview</li>
            <li>• Statement may be used in determining entitlement to benefits</li>
            <li>• Not required to make a statement</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Civilian Employee Rights</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Civilian employees may have additional rights. Consult with JA, including:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Weingarten rights (union representation)</li>
            <li>• Kalkines warning (if compelled to answer)</li>
            <li>• Garrity warning (if not compelled)</li>
          </ul>
        </div>
      </section>
    ),
    conducting: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Conducting the Interview</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Opening the Interview</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Identify yourself and your role</li>
            <li>• Explain the purpose of the investigation</li>
            <li>• Provide any required warnings</li>
            <li>• Establish rapport before diving into substance</li>
            <li>• Explain how the interview will proceed</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Questioning Techniques</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Open-ended questions:</strong> &quot;Tell me what happened...&quot;</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Follow-up questions:</strong> Probe for details and clarification</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Closed questions:</strong> Use to confirm specific facts</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Avoid leading questions:</strong> Don&apos;t suggest the answer</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Tip:</strong> Let the witness talk. Don&apos;t interrupt. Take notes and circle back
            to clarify points after they finish their narrative.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Information to Obtain</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Who was involved</li>
            <li>• What happened (in detail)</li>
            <li>• When it occurred (dates, times)</li>
            <li>• Where it happened (specific locations)</li>
            <li>• How events unfolded (sequence)</li>
            <li>• Other witnesses present</li>
            <li>• Documentary or physical evidence</li>
          </ul>
        </div>
      </section>
    ),
    documentation: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Documenting Witness Statements</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command Investigation</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Summarize testimony or obtain written statement</li>
            <li>• Have witness read, correct, and sign statement</li>
            <li>• IO also signs authenticating the statement</li>
            <li>• Include date and time of interview</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Litigation-Report Investigation</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• IO summarizes the interview</li>
            <li>• <strong>DO NOT</strong> obtain signed statements (except from adverse party with JA approval)</li>
            <li>• IO authenticates the summary with own signature</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Statement Format</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Witness identification (name, rank, unit, contact info)</li>
            <li>• Date, time, and location of interview</li>
            <li>• Any warnings given and waiver of rights</li>
            <li>• Narrative of testimony</li>
            <li>• Attachments provided by witness</li>
            <li>• Signatures and date</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> Consider audio or video recording for complex investigations.
            Inform witnesses they are being recorded and note consent.
          </p>
        </div>
      </section>
    ),
    "special-situations": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reluctant Witnesses</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Military members can be ordered to cooperate</li>
            <li>• Explain the importance of their testimony</li>
            <li>• Address fears about retaliation</li>
            <li>• Remind of protection under whistleblower laws</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hostile Witnesses</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Remain professional and calm</li>
            <li>• Focus on specific facts, not opinions</li>
            <li>• Document demeanor and cooperation level</li>
            <li>• Consult JA if witness refuses to cooperate</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Emotional Witnesses</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Allow breaks as needed</li>
            <li>• Be patient and empathetic</li>
            <li>• Consider offering victim assistance resources</li>
            <li>• Document emotional state if relevant</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Witnesses Outside the Command</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Coordinate through their chain of command</li>
            <li>• Cannot order civilians to participate</li>
            <li>• May need to travel or use VTC</li>
            <li>• Consider written statements if in-person not feasible</li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
