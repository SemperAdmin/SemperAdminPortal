"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { FileText, AlertTriangle, Clock, Scale } from "lucide-react";

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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Entry Types" },
  { id: "rebuttal", label: "Rebuttal Rights" },
  { id: "actions", label: "What You Should Do" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Permanent Record", value: "Once signed and run on the unit diary, a Page 11 becomes a permanent part of your OMPF" },
  { label: "Rebuttal Rights", value: "If given a derogatory (negative) Page 11, you have the legal right to submit a written rebuttal" },
  { label: "Non-Punitive", value: "A Page 11 is not a 'punishment' like NJP, but is a documented warning that can affect promotion or reenlistment" },
  { label: "Timeline", value: "You typically have 5 working days to submit a rebuttal after receiving a negative entry" },
];

const ENTRY_TYPES = [
  { type: "Positive/Commendatory", description: "Recognition of achievements, awards, or exceptional performance", examples: "Meritorious mast, sustained superior performance, community service recognition", impact: "Positive" },
  { type: "Administrative", description: "Neutral documentation of events, assignments, or status changes", examples: "Duty assignment changes, temporary additional duty, special qualifications", impact: "Neutral" },
  { type: "Counseling", description: "Formal warning or notification of deficiency", examples: "Performance counseling, weight/BCP counseling, professional conduct warning", impact: "Negative" },
  { type: "Derogatory", description: "Documentation of misconduct or failure to meet standards", examples: "Unauthorized absence, failure to obey order, violation of regulations", impact: "Negative" },
];

const REBUTTAL_PROCESS = [
  "Receive the Page 11 and carefully read every word of the entry",
  "Check the 'I intend to submit a written rebuttal' box before signing",
  "You have 5 working days from signing to submit your rebuttal",
  "Seek advice from a JAG officer, trusted NCO, or legal assistance office",
  "Write a clear, factual, professional rebuttal addressing each point",
  "Submit the rebuttal to the issuing authority (usually your CO)",
  "The rebuttal is attached to the Page 11 in your permanent record",
];

const REBUTTAL_TIPS = [
  "Remain professional and avoid emotional language",
  "Address each specific allegation or statement in the entry",
  "Provide factual context or mitigating circumstances",
  "Include supporting documentation if available",
  "Have someone review your rebuttal before submission",
  "Keep a copy of your signed rebuttal for personal records",
];

const ACTION_ITEMS = [
  "Read Before Signing: Never sign a Page 11 without reading the specific text. Ensure the 'Rebuttal' box is checked correctly",
  "Use Your Timeline: You typically have 5 working days to submit a rebuttal. Use this time to seek advice from JAG or a trusted NCO",
  "Keep a Copy: Always ask for a copy of the signed entry for your personal files",
  "Understand the Impact: Know that derogatory entries can affect promotion, reenlistment, and security clearance eligibility",
  "Seek Legal Advice: For serious entries, consult legal assistance before signing anything",
];

const COMMON_ISSUES = [
  { issue: "Signed Without Reading", solution: "Always read the entire entry before signing. Once signed, you cannot claim you didn't understand the content." },
  { issue: "Missed Rebuttal Deadline", solution: "The 5 working day timeline is typically firm. Request an extension in writing if you have good cause, but it's not guaranteed." },
  { issue: "Didn't Check Rebuttal Box", solution: "If you checked 'I do not intend to submit' but change your mind, you may still submit a rebuttal within the timeline. The box only indicates initial intent." },
  { issue: "Entry Contains Errors", solution: "Point out factual errors in your rebuttal. If the error is significant, you can request the entry be corrected or removed through your chain of command." },
  { issue: "Retaliation Concerns", solution: "Document any perceived retaliation. Retaliatory Page 11s can be challenged through the IG or EO channels." },
];

export function Page11EntriesContent({ data }: Props) {
  return (
    <TabbedContentLayout
      tabs={TABS}
      data={data}
      content={{
        overview: (
          <div className="space-y-6">
            <InfoCard icon={FileText} title="Page 11 Entries (Administrative Remarks)" variant="info">
              A &quot;Page 11&quot; is a formal entry in your Service Record Book (SRB) used to document administrative remarks. These can be &quot;Positive&quot; (recognizing an achievement) or &quot;Negative&quot; (documenting a deficiency or counseling). Once signed and processed, they become a <strong>permanent part</strong> of your Official Military Personnel File (OMPF).
            </InfoCard>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <tbody>
                    {KEY_POINTS.map((point) => (
                      <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                        <td className="py-3 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important Distinction</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                A Page 11 is <strong>not punishment</strong> like Non-Judicial Punishment (NJP/Article 15). It is an administrative tool for documentation. However, derogatory entries can still significantly impact your career, affecting promotion eligibility, reenlistment recommendations, and security clearance determinations.
              </p>
            </section>
          </div>
        ),
        types: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Page 11 Entries</h2>
              <div className="mt-4 space-y-3">
                {ENTRY_TYPES.map((item) => (
                  <div key={item.type} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.type}</h3>
                      <span className={"rounded-full px-2 py-1 text-xs font-medium " +
                        (item.impact === "Positive" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                         item.impact === "Neutral" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" :
                         "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300")}>
                        {item.impact}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500"><strong>Examples:</strong> {item.examples}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Can Issue a Page 11?</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>&bull; <strong>Commanding Officer (CO):</strong> Any type of entry</li>
                <li>&bull; <strong>Officer-in-Charge (OIC):</strong> Any type of entry</li>
                <li>&bull; <strong>Staff NCOs/NCOs:</strong> May draft entries, but CO/OIC must sign derogatory entries</li>
              </ul>
            </section>
            <InfoCard icon={Scale} title="Boards and Promotions" variant="default">
              Promotion boards and reenlistment authorities <strong>will review</strong> Page 11 entries in your record. Positive entries can help your case; derogatory entries will be weighed against your overall performance.
            </InfoCard>
          </div>
        ),
        rebuttal: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Rebuttal Rights</h2>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                If you receive a derogatory (negative) Page 11, you have the legal right to submit a written rebuttal. This rebuttal will be permanently attached to the entry in your record, ensuring that anyone who reads the negative entry will also see your response.
              </p>
              <div className="mt-6 space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  <Clock className="h-5 w-5" />Rebuttal Process
                </h3>
                {REBUTTAL_PROCESS.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tips for Writing an Effective Rebuttal</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {REBUTTAL_TIPS.map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="text-[var(--sa-red)] mt-0.5">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
            <InfoCard icon={AlertTriangle} title="5 Working Days" variant="warning">
              You have <strong>5 working days</strong> from the date you sign the Page 11 to submit your rebuttal. Don&apos;t wait until the last day—start immediately and use the full time to craft a thoughtful, professional response.
            </InfoCard>
          </div>
        ),
        actions: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What You Should Do</h2>
              <div className="mt-6 space-y-4">
                {ACTION_ITEMS.map((action, index) => (
                  <div key={action} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{action}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When Signing the Page 11</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <h4 className="font-medium text-green-800 dark:text-green-200">Do This</h4>
                  <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                    <li>• Read every word carefully</li>
                    <li>• Ask for clarification if unclear</li>
                    <li>• Check the rebuttal intent box correctly</li>
                    <li>• Request a copy immediately</li>
                    <li>• Note the date you signed</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                  <h4 className="font-medium text-red-800 dark:text-red-200">Don&apos;t Do This</h4>
                  <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                    <li>• Sign without reading</li>
                    <li>• Assume you can&apos;t rebut</li>
                    <li>• Let emotions guide your response</li>
                    <li>• Wait until the last day to rebut</li>
                    <li>• Forget to keep a copy</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Legal Assistance</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                For serious derogatory entries, visit your installation&apos;s Legal Assistance Office. JAG officers can review the entry, advise on your rights, and help you draft an effective rebuttal. This service is <strong>free</strong> for all service members.
              </p>
            </section>
          </div>
        ),
        issues: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
              <div className="mt-4 space-y-4">
                {COMMON_ISSUES.map((item) => (
                  <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                    <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                    <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Removing or Correcting a Page 11</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                In rare cases, an improper or erroneous Page 11 can be removed or corrected:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>&bull; <strong>Chain of Command:</strong> Request removal through your CO if the entry was made in error</li>
                <li>&bull; <strong>Board for Correction of Naval Records (BCNR):</strong> For substantive errors or injustices</li>
                <li>&bull; <strong>Inspector General (IG):</strong> If the entry was retaliatory or improper</li>
              </ul>
            </section>
            <InfoCard icon={AlertTriangle} title="Permanent Record" variant="warning">
              Once processed, a Page 11 is <strong>extremely difficult</strong> to remove. Even with a successful BCNR petition, the process can take months or years. Your best protection is to ensure you understand what you&apos;re signing and exercise your rebuttal rights.
            </InfoCard>
          </div>
        ),
      }}
    />
  );
}
