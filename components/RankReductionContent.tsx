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
  { label: "Types", value: "NJP, Administrative, Court-Martial, Voluntary" },
  { label: "Authority", value: "UCMJ Art. 15, MCO P1900.16", url: MCO_URLS.MARCORSEPMAN_PDF },
  { label: "Impact", value: "Pay, TIG, promotion eligibility, benefits" },
  { label: "Documentation", value: "Unit Diary, SRB, OMPF" },
  { label: "Contact", value: "S-1/Admin, Legal Assistance" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Types of Reduction" },
  { id: "process", label: "Process" },
  { id: "impact", label: "Impact" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const REDUCTION_TYPES = [
  { type: "NJP Reduction", authority: "UCMJ Art. 15", description: "Imposed by commander as part of non-judicial punishment" },
  { type: "Administrative Reduction", authority: "MCO P1900.16", description: "For administrative reasons (failure to complete training, etc.)" },
  { type: "Court-Martial", authority: "UCMJ", description: "Adjudged as part of court-martial sentence" },
  { type: "Voluntary", authority: "MCO P1900.16", description: "Marine requests reduction (rare)" },
];

const NJP_REDUCTION_LIMITS = [
  { imposingOfficer: "O-4 (Major) and above", maxReduction: "Two grades (but not below E-1)" },
  { imposingOfficer: "O-3 (Captain)", maxReduction: "One grade" },
  { imposingOfficer: "O-2 (1stLt)", maxReduction: "One grade (E-4 and below only)" },
  { imposingOfficer: "O-1 (2ndLt)", maxReduction: "Cannot impose reduction" },
];

const ADMINISTRATIVE_REASONS = [
  "Failure to complete MOS school",
  "Loss of security clearance",
  "Failure to maintain qualifications",
  "Reduction upon reenlistment (if applicable)",
  "Medical/physical disqualification",
  "Failure to advance within time limits",
];

const IMPACT_AREAS = [
  { area: "Pay", impact: "Immediate reduction to new grade pay rate" },
  { area: "Time in Grade", impact: "TIG resets at new lower grade" },
  { area: "Promotion Eligibility", impact: "Must meet TIG for next higher grade again" },
  { area: "Retirement", impact: "May affect high-3 retirement calculation" },
  { area: "Benefits", impact: "BAH and other allowances may change" },
  { area: "Career", impact: "Reduction documented in permanent record" },
];

export function RankReductionContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Rank Reduction
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Rank reduction (demotion) can occur through various means including non-judicial punishment,
            administrative action, or court-martial. Understanding the types, processes, and impacts
            of reduction is important for both Marines facing reduction and administrators processing them.
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

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Seek Legal Assistance</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If facing potential reduction, especially through NJP or court-martial, consult with
            legal assistance or a defense counsel immediately. You have rights throughout the process
            and should understand them fully before any proceedings.
          </p>
        </section>
      </div>
    ),

    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of Reduction
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Authority</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {REDUCTION_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.authority}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NJP Reduction Limits
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Imposing Officer</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Maximum Reduction</th>
                </tr>
              </thead>
              <tbody>
                {NJP_REDUCTION_LIMITS.map((item) => (
                  <tr key={item.imposingOfficer} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.imposingOfficer}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.maxReduction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Administrative Reduction Reasons
          </h3>
          <ul className="mt-4 space-y-2">
            {ADMINISTRATIVE_REASONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Suspended Reductions</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            At NJP, the imposing officer may suspend all or part of a reduction. If the Marine
            completes the suspension period without further misconduct, the suspended reduction
            is not executed. Violations during the suspension period can result in vacation of
            the suspension.
          </p>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NJP Reduction Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Commander prefers charges under UCMJ Art. 15",
              "Marine notified and provided rights",
              "Marine may request court-martial instead (ship-based exception)",
              "NJP hearing conducted",
              "Commander determines guilt and imposes punishment",
              "Reduction effective immediately (unless suspended)",
              "Appeal rights explained (24-48 hours to appeal)",
              "Unit Diary processed reflecting reduction",
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
            Administrative Reduction Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Condition warranting reduction identified",
              "Marine notified and given opportunity to respond",
              "Command reviews circumstances",
              "Reduction approved by appropriate authority",
              "Unit Diary processed",
              "Pay adjusted effective date of reduction",
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
            Documentation
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Unit Diary Entry</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Transaction showing reduction</li>
                <li>• Effective date</li>
                <li>• Authority for reduction</li>
                <li>• Previous and new grade</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Permanent Record</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• NJP record (if applicable)</li>
                <li>• Page 11 entry</li>
                <li>• Court-martial documentation</li>
                <li>• OMPF filing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Appeal Rights</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Marines reduced via NJP have the right to appeal to the next higher commander.
            Appeals must be filed within the specified time limit (typically 5 days).
            Consult with legal assistance before deciding whether to appeal.
          </p>
        </section>
      </div>
    ),

    impact: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Impact Areas
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Area</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Impact</th>
                </tr>
              </thead>
              <tbody>
                {IMPACT_AREAS.map((item) => (
                  <tr key={item.area} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.area}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pay Impact
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Reduction in grade results in immediate adjustment to the pay rate for the new grade:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Base pay reduced to new grade level",
              "Longevity (years of service) still applies",
              "BAH may change if entitlement differs by grade",
              "BAS typically unchanged for enlisted",
              "SGLI coverage may need review",
              "Allotments may need adjustment",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Career Impact
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-800 dark:text-red-200">Immediate Effects</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                <li>• Loss of grade and authority</li>
                <li>• TIG reset at new grade</li>
                <li>• Removal from leadership positions</li>
                <li>• Potential unit transfer</li>
              </ul>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Long-Term Effects</h4>
              <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
                <li>• Permanent record documentation</li>
                <li>• Selection board consideration</li>
                <li>• Reenlistment eligibility impact</li>
                <li>• Retirement calculation effect</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Recovery</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Marines can recover from reduction through dedicated performance. Promotion is still
            possible through regular channels. Some Marines have gone on to successful careers
            after early-career reductions. Focus on learning from the experience and demonstrating
            improved conduct.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Facing Reduction
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Consult legal assistance immediately",
              "Understand your rights",
              "Review the charges/reasons",
              "Gather any exculpatory evidence",
              "Consider character witnesses",
              "Prepare for hearing/proceedings",
              "Understand appeal rights",
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
            After Reduction
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Verify Unit Diary accuracy",
              "Check pay adjustment is correct",
              "Review BAH/allowance changes",
              "Update ID card if needed",
              "Review SGLI coverage",
              "Adjust allotments if necessary",
              "Understand new promotion timeline",
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
            Admin Processing (S-1)
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Prepare Unit Diary entry",
              "Process pay change",
              "Update MCTFS",
              "File documentation in SRB",
              "Notify IPAC as required",
              "Brief Marine on changes",
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
