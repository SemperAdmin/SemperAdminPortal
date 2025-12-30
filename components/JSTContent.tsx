"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: { references: Reference[] };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "what-jst-contains", label: "What JST Contains" },
  { id: "accessing-and-sending", label: "Accessing & Sending" },
  { id: "maximizing-credit", label: "Maximizing Credit" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function JSTContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Joint Services Transcript (JST)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Joint Services Transcript (JST) is the official document for translating your military training and experience into college credit recommendations. Colleges use the JST to award credit for military courses. Obtaining and using your JST maximizes college credit and reduces time to degree completion.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Element</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Purpose</td>
                  <td className="py-2">Military-to-college credit conversion</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Credit Basis</td>
                  <td className="py-2">ACE recommendations</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Access</td>
                  <td className="py-2">https://jst.doded.mil</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Cost</td>
                  <td className="py-2">Free</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Updates</td>
                  <td className="py-2">Automatic as training completes</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Recipients</td>
                  <td className="py-2">Send to colleges for evaluation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    "what-jst-contains": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What the JST Contains
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Training</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Formal school completions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>PME courses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>MOS-producing training</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Specialty courses</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Experience</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>MOS descriptions (may translate to credit)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Assignments (some colleges credit)</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">ACE Recommendations</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            American Council on Education evaluates military training and recommends college credit equivalents.
          </p>
        </section>
      </div>
    ),

    "accessing-and-sending": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Accessing Your JST
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Via JST Website</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Go to https://jst.doded.mil</li>
            <li>Log in with CAC or DS Logon</li>
            <li>View your transcript</li>
            <li>Review training and credit recommendations</li>
            <li>Send to schools electronically</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">First Time Access</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Create account if needed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Verify personal information</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Review transcript for accuracy</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sending Your JST to Schools</h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Electronic Delivery</h4>
              <ol className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                <li>Log into JST website</li>
                <li>Select &quot;Request Transcript&quot;</li>
                <li>Search for receiving school</li>
                <li>Select school</li>
                <li>Submit request</li>
                <li>School receives electronically</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PDF Download</h4>
              <ol className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                <li>Log into JST website</li>
                <li>Select &quot;View/Print Transcript&quot;</li>
                <li>Download PDF</li>
                <li>Send to school manually (if needed)</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    ),

    "maximizing-credit": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Maximizing JST Credit
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Credit Evaluation Process</h3>
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How Schools Evaluate</h4>
              <ol className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                <li>Receive your JST</li>
                <li>Review ACE credit recommendations</li>
                <li>Compare to school&apos;s courses</li>
                <li>Award credit based on school policy</li>
                <li>Notify you of credits awarded</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Credit Award Varies</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Each school has own policy</li>
                <li>Some accept all ACE recommendations</li>
                <li>Some accept partial credit</li>
                <li>Some require additional review</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tips for Maximizing Credit</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Send JST early in admission process</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Discuss with academic advisor</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Appeal if credits not awarded</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Consider schools with military-friendly policies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Compare credit policies before choosing school</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Verifying JST Accuracy</h3>
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Review Your Transcript</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>All formal schools listed</li>
                <li>PME courses included</li>
                <li>MOS producing courses present</li>
                <li>Dates accurate</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">If Missing Information</h4>
              <ol className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                <li>Verify training in MCTFS (BTR)</li>
                <li>Contact Education Center</li>
                <li>Request correction through JST help desk</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            JST Checklists
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Accessing JST</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Go to https://jst.doded.mil",
              "Log in with CAC or DS Logon",
              "Review transcript for accuracy",
              "Note ACE credit recommendations",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sending to Schools</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Research schools' military credit policies",
              "Identify schools for application",
              "Send JST electronically",
              "Follow up with admissions",
              "Discuss credits with advisor",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
