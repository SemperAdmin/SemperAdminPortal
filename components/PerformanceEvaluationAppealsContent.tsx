"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCO_URLS } from "@/data/references";

const MCOLink = ({ mco, url }: { mco: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[var(--sa-navy)] underline decoration-1 underline-offset-2 hover:text-[var(--sa-gold)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]"
  >
    {mco}
  </a>
);

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

const KEY_POINTS: { label: string; value: string; url?: string }[] = [
  { label: "Applies To", value: "FitReps and JEPES evaluations" },
  { label: "Authority", value: "MCO 1610.7A (Performance Evaluation System)", url: MCO_URLS.PES_PDF },
  { label: "Time Limit", value: "Varies by appeal type (see details)" },
  { label: "Level", value: "Administrative through BCNR" },
  { label: "Contact", value: "Legal Assistance, MMRP" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "grounds", label: "Grounds for Appeal" },
  { id: "process", label: "Appeal Process" },
  { id: "evidence", label: "Evidence Requirements" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const APPEAL_LEVELS = [
  { level: "Administrative Review", description: "Request correction through MMRP/HQMC", timeline: "No formal time limit, but sooner is better" },
  { level: "PERB (Performance Evaluation Review Board)", description: "Formal board review of evaluation", timeline: "Within 15 months of report ending date" },
  { level: "BCNR", description: "Board for Correction of Naval Records", timeline: "Within 3 years (waivable)" },
];

const VALID_GROUNDS = [
  { ground: "Factual Error", description: "Incorrect data that can be proven wrong", example: "Wrong dates, incorrect unit, wrong billet" },
  { ground: "Procedural Violation", description: "Proper evaluation procedures not followed", example: "No observation period, wrong occasion code" },
  { ground: "Bias or Prejudice", description: "Evaluation influenced by improper factors", example: "Discrimination, reprisal for protected activity" },
  { ground: "Inequitable Treatment", description: "Inconsistent application of standards", example: "Different standards applied to similar performers" },
];

const INVALID_GROUNDS = [
  "Disagreement with subjective assessment",
  "Belief you deserved higher marks",
  "Different opinion about performance",
  "Comparison to how others were rated",
  "General dissatisfaction with evaluation",
];

const APPEAL_PROCESS_STEPS = [
  "Review evaluation and identify specific grounds",
  "Consult legal assistance for advice",
  "Gather supporting evidence and documentation",
  "Prepare written appeal with specific relief requested",
  "Submit through appropriate channel (MMRP or PERB)",
  "Respond to any requests for additional information",
  "Receive decision and consider further appeal if denied",
];

const EVIDENCE_TYPES = [
  { type: "Documentary Evidence", examples: "Orders, certificates, official records contradicting report" },
  { type: "Witness Statements", examples: "Sworn statements from those with firsthand knowledge" },
  { type: "Performance Records", examples: "Awards, commendations, other performance documentation" },
  { type: "Procedural Documentation", examples: "Evidence of process violations" },
  { type: "Comparative Evidence", examples: "Records showing different treatment of similarly situated Marines" },
];

export function PerformanceEvaluationAppealsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Performance Evaluation Appeals
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Marines who believe their fitness report or JEPES evaluation is unfair, inaccurate, or
            improperly prepared have the right to appeal. Appeals must be based on specific grounds
            and supported by evidence. The process varies depending on the type of evaluation and
            the nature of the complaint.
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
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">
                      {point.url ? <MCOLink mco={point.value} url={point.url} /> : point.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Appeal Levels
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Level</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {APPEAL_LEVELS.map((item) => (
                  <tr key={item.level} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.level}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Consult Legal Assistance First</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Before filing an appeal, consult with legal assistance. They can help you understand
            whether you have valid grounds, guide you through the process, and help prepare a strong
            case. Appeals without valid grounds or proper evidence are routinely denied.
          </p>
        </section>
      </div>
    ),

    grounds: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Valid Grounds for Appeal
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Ground</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Example</th>
                </tr>
              </thead>
              <tbody>
                {VALID_GROUNDS.map((item) => (
                  <tr key={item.ground} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.ground}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NOT Valid Grounds for Appeal
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            These reasons alone are insufficient to overturn an evaluation:
          </p>
          <ul className="mt-4 space-y-2">
            {INVALID_GROUNDS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 mt-0.5">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FitRep vs. JEPES Appeals
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">FitRep Appeals</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Through PERB or BCNR</li>
                <li>• Can request removal or modification</li>
                <li>• May request supplemental report</li>
                <li>• Strong evidence required</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">JEPES Appeals</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Through chain of command initially</li>
                <li>• Commander review of scoring</li>
                <li>• Data correction through S-1</li>
                <li>• BCNR for unresolved issues</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Burden of Proof</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            The burden is on the Marine filing the appeal to prove the evaluation is erroneous or unjust.
            Evaluations are presumed to be correct. You must provide clear, convincing evidence to
            overcome this presumption.
          </p>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Appeal Process Steps
          </h3>
          <ol className="mt-4 space-y-2">
            {APPEAL_PROCESS_STEPS.map((step, index) => (
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
            PERB Process
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Performance Evaluation Review Board reviews fitness report appeals:
          </p>
          <ol className="mt-4 space-y-2">
            {[
              "Submit written appeal within 15 months of report ending date",
              "Include specific grounds and requested relief",
              "PERB reviews records and evidence",
              "May contact RS/RO for response",
              "Board deliberates and votes",
              "Decision issued (usually within 60-90 days)",
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
            Possible Outcomes
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">If Granted</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• Report may be removed from OMPF</li>
                <li>• Report may be modified/corrected</li>
                <li>• Supplemental report may be ordered</li>
                <li>• Back-dated promotion consideration</li>
              </ul>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">If Denied</h4>
              <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
                <li>• Report remains as filed</li>
                <li>• May appeal to BCNR (higher level)</li>
                <li>• May submit with new evidence</li>
                <li>• Decision becomes final if not appealed</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Timeline Matters</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            File appeals promptly. While BCNR can waive its 3-year time limit, PERB&apos;s 15-month
            limit is generally firm. Evidence becomes harder to gather and memories fade over time.
            The sooner you act, the better your chances.
          </p>
        </section>
      </div>
    ),

    evidence: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of Evidence
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Examples</th>
                </tr>
              </thead>
              <tbody>
                {EVIDENCE_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Strong Evidence Characteristics
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Directly addresses the claimed error or injustice",
              "From sources with firsthand knowledge",
              "Contemporary to the time period in question",
              "Objective and verifiable",
              "Official records preferred over personal statements",
              "Clear and specific, not general or vague",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Weak Evidence Characteristics
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "General statements without specifics",
              "Self-serving assertions without corroboration",
              "Hearsay from those without direct knowledge",
              "Opinions about what should have happened",
              "Evidence obtained after the appeal decision",
              "Character references unrelated to the issue",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 mt-0.5">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Written Statement Tips
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Structure</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• State specific error or injustice clearly</li>
                <li>• Provide chronological factual narrative</li>
                <li>• Reference supporting evidence</li>
                <li>• State specific relief requested</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Tone</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Professional and objective</li>
                <li>• Focus on facts, not emotions</li>
                <li>• Avoid attacking individuals</li>
                <li>• Let evidence speak for itself</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Legal Assistance</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Legal assistance attorneys can help you organize evidence, prepare your statement,
            and ensure your appeal meets all requirements. Their assistance significantly improves
            the quality and effectiveness of appeals.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Filing Appeal
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Identify specific grounds for appeal",
              "Review evaluation for all errors",
              "Consult with legal assistance",
              "Determine appropriate appeal level",
              "Verify time limits not exceeded",
              "Begin gathering evidence",
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
            Preparing Appeal Package
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Prepare written appeal statement",
              "Identify specific relief requested",
              "Gather documentary evidence",
              "Obtain witness statements (if applicable)",
              "Organize evidence chronologically",
              "Review package for completeness",
              "Have legal review before submission",
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
              "Retain copy of complete submission",
              "Note submission date for tracking",
              "Respond promptly to any requests",
              "Submit additional evidence if discovered",
              "Track status through appropriate channels",
              "Review decision carefully when received",
              "Consider further appeal if denied",
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
