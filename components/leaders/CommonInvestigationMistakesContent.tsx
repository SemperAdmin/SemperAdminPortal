"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "procedural", label: "Procedural Errors" },
  { id: "evidence", label: "Evidence Errors" },
  { id: "witness", label: "Witness Errors" },
  { id: "report", label: "Report Errors" },
  { id: "prevention", label: "Prevention Tips" },
  { id: "references", label: "References", type: "references" as const },
];

export function CommonInvestigationMistakesContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Investigation Mistakes</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Even experienced IOs can make mistakes that compromise investigations.
            Understanding common errors helps you avoid them and produce a thorough,
            legally sufficient investigation.
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Impact:</strong> Investigation errors can result in the report being
            returned for correction, delay command action, compromise legal proceedings,
            or deny due process to subjects.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Top 10 Investigation Errors</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Exceeding the scope of the convening order</li>
            <li>Failing to give required warnings</li>
            <li>Not interviewing key witnesses</li>
            <li>Opinions masquerading as findings of fact</li>
            <li>Findings not supported by enclosures</li>
            <li>Missing or unsigned witness statements</li>
            <li>Inadequate evidence documentation</li>
            <li>Missing the deadline</li>
            <li>Not consulting with a judge advocate</li>
            <li>Failing to address all issues in the convening order</li>
          </ol>
        </div>
      </section>
    ),
    procedural: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Procedural Errors</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Exceeding Scope</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Investigating matters beyond what the convening
            order directed, or making findings on issues not within your scope.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> Re-read your convening order before writing your report.
            If you discover matters requiring investigation outside your scope, notify the
            convening authority and request an amended order.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Missing Deadlines</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Submitting the investigation late without
            requesting an extension.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> Track your deadline from day one. If you need more
            time, request an extension IN WRITING before the deadline expires. Explain
            why and propose a new deadline.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Not Consulting JAG</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Failing to consult with a judge advocate,
            especially on complex legal issues or before interviewing suspects.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> Contact JAG early and often. They can help you avoid
            problems before they occur. For litigation-reports, JAG supervision is required.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Tip:</strong> Create a checklist at the start of your investigation
            with all procedural requirements and deadlines.
          </p>
        </div>
      </section>
    ),
    evidence: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evidence Errors</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4. Inadequate Documentation</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Not obtaining or preserving key documentary
            evidence, or failing to photograph physical evidence.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> At the start, list all documents you might need.
            Request them early—some take time to obtain. Photograph evidence immediately;
            conditions change. Get certified copies of official records.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5. Findings Without Support</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Making findings of fact that aren&apos;t supported
            by evidence in the enclosures.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> Cite the specific enclosure supporting each finding.
            Before finalizing, verify each citation—does the enclosure actually say what
            you claim it says?
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">6. Poor Enclosure Organization</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Enclosures not numbered, not labeled, or in
            illogical order. Missing enclosure list.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> Number enclosures sequentially. Convening order is
            always Enclosure 1. Create a detailed enclosure list. Tab each enclosure
            clearly.
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Critical:</strong> If evidence supports a finding, it MUST be an
            enclosure. The convening authority cannot rely on evidence not in the record.
          </p>
        </div>
      </section>
    ),
    witness: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Witness Errors</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">7. Missing Key Witnesses</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Failing to interview witnesses with direct
            knowledge of the incident, or not interviewing the subject.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> Early in the investigation, identify everyone who
            might have relevant information. Interview witnesses in logical order—
            peripheral witnesses first, subject last. Document attempts to interview
            unavailable witnesses.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">8. Warning Failures</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Failing to give Article 31(b) warnings to suspects,
            or 10 U.S.C. 1219 warnings for LOD investigations.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> When in doubt, give the warning. Document warnings
            on the witness statement. A witness who wasn&apos;t a suspect can become one—
            recognize when status changes and provide warnings.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">9. Unsigned Statements</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Submitting witness statements that aren&apos;t
            signed by the witness, or statements without required attestations.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> Have witnesses sign immediately after the interview.
            If you transcribe notes later, have the witness review and sign. Include
            &quot;I have read this statement and it is true and correct&quot; language.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Refusal to Sign:</strong> If a witness refuses to sign, note this on
            the statement with the date, and have another person witness the refusal.
          </p>
        </div>
      </section>
    ),
    report: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Report Writing Errors</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">10. Opinions as Facts</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Including opinions, conclusions, or characterizations
            in the &quot;Findings of Fact&quot; section.
          </p>
          <div className="mt-2 space-y-2 text-sm">
            <div className="rounded-lg bg-red-50 p-2 dark:bg-red-900/20">
              <p className="text-red-800 dark:text-red-200">
                <strong>Wrong:</strong> &quot;Sergeant Jones negligently failed to supervise his Marines.&quot;
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-2 dark:bg-green-900/20">
              <p className="text-green-800 dark:text-green-200">
                <strong>Right:</strong> &quot;Sergeant Jones was assigned as the duty NCO from 0800-1600 on 15 June.
                At 1030, three Marines under his supervision departed the duty area without permission.&quot;
              </p>
            </div>
          </div>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> Save characterizations like &quot;negligent,&quot; &quot;reckless,&quot; or
            &quot;willful&quot; for the Opinions section. Findings state what happened; opinions
            interpret what it means.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Not Answering the Mail</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Failing to address all questions or issues
            raised in the convening order.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> Before submitting, compare your findings to each
            question in the convening order. Can the CA answer each question based on
            your findings? If not, you have more work to do.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Vague Findings</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Mistake:</strong> Findings that lack specificity—no dates, times,
            names, or specific details.
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>The Fix:</strong> Include the 5 W&apos;s: Who, What, When, Where, Why
            (or How). Be precise: &quot;on 15 June 2024 at approximately 0230&quot; not
            &quot;sometime in June.&quot;
          </p>
        </div>
      </section>
    ),
    prevention: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Prevention Tips</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before You Start</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>☐ Read the convening order carefully—understand your scope</li>
            <li>☐ Contact a judge advocate for guidance</li>
            <li>☐ Check for other ongoing investigations (NCIS, safety, IG)</li>
            <li>☐ Create a timeline and milestone checklist</li>
            <li>☐ Identify all potential witnesses and evidence sources</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">During the Investigation</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>☐ Give proper warnings before questioning suspects</li>
            <li>☐ Get witness statements signed immediately</li>
            <li>☐ Document everything—including failed attempts</li>
            <li>☐ Request extension BEFORE deadline if needed</li>
            <li>☐ Consult JAG when questions arise</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Submitting</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>☐ Verify each finding cites a supporting enclosure</li>
            <li>☐ Confirm findings are facts, not opinions</li>
            <li>☐ Check that all convening order questions are answered</li>
            <li>☐ Ensure all statements are signed</li>
            <li>☐ Number and organize all enclosures</li>
            <li>☐ Create complete enclosure list</li>
            <li>☐ Have JAG review for legal sufficiency</li>
            <li>☐ Proofread for clarity and completeness</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Best Practice:</strong> Before submitting, ask yourself: &quot;If I were
            the convening authority, would this report give me everything I need to make
            an informed decision?&quot; If not, keep working.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
