"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: {
    references: Reference[];
  };
}

const KEY_POINTS = [
  { label: "Full Name", value: "Board for Correction of Naval Records" },
  { label: "Authority", value: "10 U.S.C. § 1552" },
  { label: "Form Required", value: "DD Form 149" },
  { label: "Time Limit", value: "3 years from discovery (waivable)" },
  { label: "Cost", value: "Free to apply" },
  { label: "Legal Rep", value: "Not required but recommended for complex cases" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "when-to-use", label: "When to Use BCNR" },
  { id: "process", label: "Application Process" },
  { id: "evidence", label: "Evidence & Support" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const BCNR_ACTIONS = [
  { action: "Change Discharge Characterization", description: "Upgrade other than honorable to honorable" },
  { action: "Change RE Code", description: "Allow reenlistment eligibility" },
  { action: "Remove Adverse Material", description: "Remove unjust Page 11 entries, NJP, etc." },
  { action: "Correct Erroneous Data", description: "Fix dates, ranks, awards when other avenues failed" },
  { action: "Add Missing Awards/Decorations", description: "When documentation supports entitlement" },
  { action: "Upgrade Evaluations/Fitness Reports", description: "When procedures were violated" },
  { action: "Disability Rating Changes", description: "Medical/disability retirement issues" },
  { action: "Promotion Corrections", description: "Restore lost promotion eligibility" },
];

const NOT_BCNR_ACTIONS = [
  "Routine administrative corrections (use unit S-1/IPAC)",
  "MCTFS data corrections (use Unit Diary)",
  "OMPF document additions (use ORMA)",
  "Security clearance issues (use DCSA)",
  "Courts-martial convictions (limited review)",
];

const DD149_SECTIONS = [
  { section: "Block 1-7", content: "Personal identification information" },
  { section: "Block 8", content: "Type of discharge and RE code" },
  { section: "Block 9", content: "Organization/command at time of error" },
  { section: "Block 10", content: "Specific relief requested" },
  { section: "Block 11", content: "Justification/argument for relief" },
  { section: "Block 12", content: "List of enclosures" },
  { section: "Block 13", content: "Counsel information (if any)" },
  { section: "Signature", content: "Applicant signature and date" },
];

const EVIDENCE_TYPES = [
  "Personal statement explaining injustice/error",
  "Buddy statements from those with firsthand knowledge",
  "Medical records supporting claims",
  "Service records documenting discrepancies",
  "Character references",
  "Documentation of post-service achievements",
  "Legal opinions or analysis",
  "Expert statements (medical, legal, military)",
];

const PROCESSING_TIMELINE = [
  { stage: "Application received", timeframe: "Acknowledgment within 30 days" },
  { stage: "Initial review", timeframe: "60-90 days" },
  { stage: "Advisory opinion request", timeframe: "If needed, add 60-90 days" },
  { stage: "Board deliberation", timeframe: "Variable" },
  { stage: "Decision issued", timeframe: "6-18 months total average" },
  { stage: "Reconsideration", timeframe: "If denied, can reapply with new evidence" },
];

const STRONG_CASE_ELEMENTS = [
  "Clear documentation of error or injustice",
  "Specific regulation or policy violation",
  "Witness statements supporting claims",
  "Demonstrated impact on Marine's record/career",
  "Evidence that issue was raised at time it occurred",
  "Post-service conduct showing character",
  "Medical evidence for PTSD/TBI related claims",
];

export function BCNRContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Board for Correction of Naval Records (BCNR)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            The BCNR is the highest level of administrative review for Navy and Marine Corps records.
            It has the authority to correct any military record when the correction is necessary to
            remedy an error or remove an injustice. This is the last resort when normal administrative
            channels cannot resolve a records issue. The BCNR acts on behalf of the Secretary of the Navy.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Error vs. Injustice
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Error</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                A mistake in the record - incorrect information, missing data, or administrative
                oversight that does not reflect the true facts.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Injustice</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                An action that was inconsistent with policy, regulations, or was unduly harsh
                considering all circumstances at the time.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Statute of Limitations</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Applications must be submitted within 3 years of discovering the error or injustice.
            However, the BCNR may waive this time limit in the interest of justice. Include an
            explanation if your application is beyond the 3-year limit and explain why the Board
            should consider it.
          </p>
        </section>
      </div>
    ),

    "when-to-use": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When to Use BCNR
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {BCNR_ACTIONS.map((row) => (
                  <tr key={row.action} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.action}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When NOT to Use BCNR
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Use other channels for these issues first:
          </p>
          <ul className="mt-4 space-y-2">
            {NOT_BCNR_ACTIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 mt-0.5">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Prerequisites
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Before applying to BCNR:
          </p>
          <ol className="mt-4 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
            <li>Exhaust unit-level correction options</li>
            <li>Work with S-1/IPAC for administrative corrections</li>
            <li>Use ORMA for OMPF issues</li>
            <li>Contact MMRP for records matters</li>
            <li>Document all attempts and denials</li>
          </ol>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Discharge Review Board (DRB)</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            For discharge upgrades only, Marines may first apply to the Naval Discharge Review Board (NDRB).
            NDRB decisions can be appealed to BCNR. NDRB is often faster but has less authority than BCNR.
            BCNR can grant relief that NDRB cannot.
          </p>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Application Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Obtain DD Form 149 (Application for Correction of Military Record)",
              "Complete all sections of the form",
              "Write detailed personal statement",
              "Gather supporting evidence and documentation",
              "Submit to BCNR (mail or online)",
              "Receive acknowledgment letter",
              "Board reviews application and evidence",
              "Receive decision letter",
            ].map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DD Form 149 Sections
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Section</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Content</th>
                </tr>
              </thead>
              <tbody>
                {DD149_SECTIONS.map((row) => (
                  <tr key={row.section} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.section}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Processing Timeline
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Stage</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                </tr>
              </thead>
              <tbody>
                {PROCESSING_TIMELINE.map((row) => (
                  <tr key={row.stage} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.stage}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.timeframe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Submission Methods</h4>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            <div>
              <h5 className="font-medium text-amber-800 dark:text-amber-200">Online</h5>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Submit via BCNR website portal (preferred method)
              </p>
            </div>
            <div>
              <h5 className="font-medium text-amber-800 dark:text-amber-200">Mail</h5>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Board for Correction of Naval Records<br />
                701 S. Courthouse Road, Suite 1001<br />
                Arlington, VA 22204-2490
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    evidence: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of Evidence
          </h3>
          <ul className="mt-4 space-y-2">
            {EVIDENCE_TYPES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Elements of a Strong Case
          </h3>
          <ul className="mt-4 space-y-2">
            {STRONG_CASE_ELEMENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Personal Statement Tips
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Structure</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• State the error or injustice clearly</li>
                <li>• Explain the circumstances</li>
                <li>• Describe impact on your record/life</li>
                <li>• Request specific relief</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Tone</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Be factual and objective</li>
                <li>• Avoid emotional language</li>
                <li>• Reference specific regulations/policies</li>
                <li>• Accept responsibility where appropriate</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Legal Assistance
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Free Resources</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Base legal assistance (if eligible)</li>
                <li>• Veterans Service Organizations</li>
                <li>• Law school clinics</li>
                <li>• Pro bono military law attorneys</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">When to Seek Counsel</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Complex legal issues</li>
                <li>• Discharge upgrades</li>
                <li>• Cases involving NJP/CM</li>
                <li>• Medical/disability issues</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">PTSD/TBI Considerations</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Under liberal consideration policies, the BCNR gives special attention to applications involving
            PTSD, TBI, or other mental health conditions. Include all relevant medical documentation and
            explain how the condition may have contributed to the circumstances leading to the adverse action.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before You Apply
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Exhaust all other administrative remedies",
              "Document all prior correction attempts",
              "Obtain copies of relevant service records",
              "Request medical records if applicable",
              "Consider consulting legal assistance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DD Form 149 Completion
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Complete all personal information blocks",
              "Specify exact relief requested",
              "Write detailed justification statement",
              "List all enclosures/evidence",
              "Sign and date the form",
              "Make copies before submitting",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Evidence Package
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Personal statement (detailed)",
              "Copies of relevant service records",
              "Medical records (if applicable)",
              "Buddy/witness statements",
              "Character references",
              "Post-service accomplishments",
              "Prior denial letters (if any)",
              "Legal briefs (if represented)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            After Submission
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Receive and retain acknowledgment letter",
              "Note assigned case number",
              "Respond promptly to any BCNR requests",
              "Submit additional evidence if discovered",
              "Track processing timeline",
              "Review decision carefully when received",
              "Consider reconsideration if denied",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
