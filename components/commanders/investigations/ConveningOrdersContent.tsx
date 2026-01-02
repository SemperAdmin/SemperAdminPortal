"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "elements", label: "Required Elements" },
  { id: "scope", label: "Scope Definition" },
  { id: "timeline", label: "Timeline" },
  { id: "appointing-io", label: "Appointing IO" },
  { id: "modifications", label: "Modifications" },
  { id: "sample", label: "Sample Outline" },
  { id: "references", label: "References", type: "references" as const },
];

export function ConveningOrdersContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is a Convening Order?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A convening order is your written directive that formally appoints an investigating officer
            and establishes the parameters of the investigation. It is the foundation document that
            guides the entire investigation.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Functions</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Appoints the IO</li>
            <li>• Defines scope and purpose</li>
            <li>• Sets timeline</li>
            <li>• Provides legal guidance</li>
            <li>• Establishes format requirements</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0206
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Responsibilities</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Issue written convening order (or memorialize verbal order)</li>
            <li>• Sign the convening order</li>
            <li>• Ensure order is appended to final report</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Verbal Orders:</strong> You may use verbal order or naval message to initially
            direct an investigation. You must then memorialize the convening order in writing.
          </p>
        </div>
      </section>
    ),
    elements: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Elements</h2>
          <ol className="mt-2 list-decimal space-y-3 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Designation of IO</strong> - By name and rank, or by billet if individual not yet identified</li>
            <li><strong>Specific Purposes</strong> - What you want investigated; what questions must be answered</li>
            <li><strong>Scope Instructions</strong> - Explicit instructions about scope; what is included; what is excluded (if applicable)</li>
            <li><strong>Findings of Fact Required</strong> - Direct IO to determine: who, what, where, when, how, why; all circumstances surrounding the event</li>
            <li><strong>Witnesses and Sources</strong> - Identify potential witnesses; identify documents to review; other sources of information</li>
            <li><strong>Format</strong> - Specify format (normally letter report with enclosures)</li>
            <li><strong>Opinions and Recommendations</strong> - Direct whether required (for command investigations); NOT required for litigation-report</li>
            <li><strong>Due Date</strong> - Normally 30 calendar days; 20 calendar days for death cases</li>
            <li><strong>Legal Guidance</strong> - Direct IO to seek JA assistance; include Privacy Act requirements; include Article 31 guidance (if applicable); include 10 USC 1219 guidance (for injury cases); include NCIS coordination (if required)</li>
            <li><strong>NCIS Coordination (if applicable)</strong> - Direct coordination with NCIS; report any conflict to CA for resolution</li>
          </ol>
        </div>
      </section>
    ),
    scope: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Defining Scope Properly</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Too Narrow</h3>
            <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
              <li>• IO cannot investigate relevant matters</li>
              <li>• May miss important facts</li>
              <li>• May need to amend convening order</li>
            </ul>
          </div>
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200">Too Broad</h3>
            <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
              <li>• Investigation takes too long</li>
              <li>• Wastes resources</li>
              <li>• May exceed your authority</li>
            </ul>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h3 className="font-semibold text-green-800 dark:text-green-200">Properly Scoped</h3>
            <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
              <li>• Addresses the specific incident</li>
              <li>• Allows investigation of related matters</li>
              <li>• Sets reasonable boundaries</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Examples</h3>
          <div className="mt-2 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <p><strong className="text-red-600 dark:text-red-400">Too Narrow:</strong> &quot;Investigate whether PFC Smith was speeding.&quot;</p>
            <p><strong className="text-amber-600 dark:text-amber-400">Too Broad:</strong> &quot;Investigate all vehicle operations in the battalion.&quot;</p>
            <p><strong className="text-green-600 dark:text-green-400">Properly Scoped:</strong> &quot;Investigate the circumstances surrounding the motor vehicle accident on 15 January 2025 involving government vehicle #12345, including the actions of all personnel involved, compliance with applicable regulations, and any contributing factors.&quot;</p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Scope Tips</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Focus on the incident, not the person</li>
            <li>• Allow investigation of related circumstances</li>
            <li>• Be specific enough to guide IO</li>
            <li>• Be broad enough to capture relevant facts</li>
          </ul>
        </div>
      </section>
    ),
    timeline: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard Timelines</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Type</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timeline</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Command Investigation</td>
                  <td className="py-2">30 calendar days</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Litigation-Report</td>
                  <td className="py-2">30 calendar days</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Death Investigation</td>
                  <td className="py-2">20 calendar days</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Courts/Boards of Inquiry</td>
                  <td className="py-2">As prescribed based on complexity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What the Timeline Covers</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• From convening order to IO submission of report</li>
            <li>• Does not include your review time</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Setting Realistic Timelines</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Consider:</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Complexity of the matter</li>
            <li>• Number of witnesses</li>
            <li>• Geographic dispersion</li>
            <li>• Availability of evidence</li>
            <li>• IO&apos;s other duties</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h3 className="font-semibold text-amber-800 dark:text-amber-200">If More Time Needed</h3>
          <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            <li>• IO should request extension before deadline</li>
            <li>• You grant extensions as needed</li>
            <li>• Extensions need not be in writing</li>
            <li>• Must be documented in preliminary statement</li>
          </ul>
        </div>
      </section>
    ),
    "appointing-io": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IO Selection Criteria (JAGMAN 0206)</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Best qualified by:</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Age</li>
            <li>• Education</li>
            <li>• Training</li>
            <li>• Experience</li>
            <li>• Length of service</li>
            <li>• Temperament</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Seniority:</strong> IO should be senior to any individual whose conduct is
            subject to inquiry. Practical, not absolute requirement.
          </p>
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
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Appointment Process</h3>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Identify Qualified Individual</strong> - Review qualifications, check availability, verify no conflicts</li>
            <li><strong>Issue Convening Order</strong> - Name IO in the order, provide order to IO</li>
            <li><strong>Provide Resources</strong> - Time to conduct investigation, access to witnesses and evidence, administrative support if needed</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Multiple IOs and Assistance</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• May appoint more than one if warranted</li>
            <li>• May assign specific issues to each IO</li>
            <li>• May direct IO to obtain assistance (reporters, interpreters, experts, support)</li>
          </ul>
        </div>
      </section>
    ),
    modifications: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Amending Convening Orders</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">You may amend at any time to:</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Change membership (appoint different IO)</li>
            <li>• Limit or increase scope</li>
            <li>• Provide additional instructions</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When to Amend</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• IO discovers matters beyond original scope</li>
            <li>• Need to add or remove issues</li>
            <li>• Original scope was too narrow or broad</li>
            <li>• IO recommends modification</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Amendment Process</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Issue written amendment</li>
            <li>• Or verbal amendment memorialized in writing</li>
            <li>• IO notes in preliminary statement</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Critical Limitation:</strong> Once convened, a command investigation cannot be
            converted into a litigation-report investigation. If claims potential discovered, consult JA.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Granting Extensions</h3>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">When IO Requests:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Evaluate the request</li>
            <li>• Consider reasons (complexity, witness availability, etc.)</li>
            <li>• Grant reasonable extensions</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Documentation:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Who requested</li>
            <li>• When granted</li>
            <li>• Length of extension</li>
            <li>• Reason</li>
          </ul>
        </div>
      </section>
    ),
    sample: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sample Convening Order Outline</h2>
          <div className="mt-4 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
            <pre className="text-xs text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap font-mono">
{`COMMAND INVESTIGATION CONVENING ORDER

From: [Your Title]
To:   [IO Name and Rank]

Subj: COMMAND INVESTIGATION INTO [DESCRIPTION OF INCIDENT]

Ref:  (a) JAGINST 5800.7G

1. You are hereby appointed to conduct a command investigation
   into [description of incident] that occurred on [date] at
   [location].

2. The purpose of this investigation is to [state purpose and
   questions to answer].

3. Scope. You will investigate [define scope]. You are
   specifically directed to determine:
   a. [Specific question 1]
   b. [Specific question 2]
   c. [Continue as needed]

4. You will submit findings of fact that fully explain all
   circumstances surrounding the event, including who, what,
   where, when, how, and why.

5. You will provide your opinions based on your findings of
   fact and make recommendations for action.

6. Potential witnesses include [list names/billets]. Documents
   to review include [list documents].

7. Your report will be in letter format with enclosures as
   appropriate.

8. You will seek the assistance of a judge advocate in
   conducting this investigation.

9. Comply with the Privacy Act when collecting personal
   information. [Add Article 31 and 10 USC 1219 guidance
   as applicable].

10. [If applicable: Coordinate this investigation with NCIS
    and report any conflicts to me for resolution.]

11. Submit your report to me no later than [date - 30 days
    from order].

[Signature]
[Name]
[Rank], USMC
[Title]`}
            </pre>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
