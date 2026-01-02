"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, FileText } from "lucide-react";

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
  { id: "jurisdiction", label: "Jurisdiction" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Composition", value: "One commissioned officer" },
  { label: "Accused Consent", value: "Required (accused may refuse)" },
  { label: "Officers Eligible", value: "No - officers cannot be tried by SCM" },
  { label: "Max Confinement", value: "30 days (E-4 and below)" },
  { label: "Max Forfeiture", value: "Two-thirds pay for one month" },
  { label: "Max Reduction", value: "To lowest enlisted grade" },
  { label: "Punitive Discharge", value: "Not authorized" },
];

const PROCESS_STEPS = [
  "Commander forwards charges to summary court-martial convening authority",
  "Convening authority refers charges to summary court-martial",
  "Accused is notified and asked to consent",
  "If accused consents, summary court-martial officer is appointed",
  "Summary court-martial officer advises accused of rights",
  "Trial proceeds with presentation of evidence",
  "Summary court-martial officer announces findings and sentence",
  "Record of trial prepared and forwarded for review",
  "Judge advocate conducts Article 64 review",
];

const COMMON_ISSUES = [
  {
    issue: "Accused refuses consent",
    solution: "Refer case to higher level court-martial or dispose of by other means (NJP, admin action).",
  },
  {
    issue: "Summary court-martial officer unfamiliar with procedures",
    solution: "Consult with servicing legal office for guidance before proceeding.",
  },
];

export function SummaryCourtMartialContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Summary Court-Martial" variant="info">
          Summary court-martial is the lowest level of court-martial. It consists of one
          commissioned officer who acts as judge, jury, and counsel. It tries minor offenses
          and requires the accused&apos;s consent.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h2>
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

        <InfoCard icon={AlertTriangle} title="Accused Consent Required" variant="warning">
          If the accused refuses summary court-martial, the case may be referred to special or
          general court-martial, or disposed of by NJP.
        </InfoCard>
      </div>
    ),

    jurisdiction: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Jurisdiction and Authority
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-green-500">&#10003;</span>
              <span>May try any person subject to the UCMJ (except officers)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">&#10003;</span>
              <span>Tries minor offenses under the UCMJ</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">&#10007;</span>
              <span>Officers cannot be tried by summary court-martial</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">&#10007;</span>
              <span>No punitive discharge authorized</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Maximum Punishments
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Confinement</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">30 days (E-4 and below)</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Forfeiture</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Two-thirds pay for one month</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reduction</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">To lowest enlisted grade</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Hard Labor</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Up to 45 days without confinement</p>
            </div>
          </div>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Summary Court-Martial Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={FileText} title="Post-Trial Review" variant="default">
          Summary court-martial results are reviewed under Article 64, UCMJ. The record is
          forwarded to a judge advocate for review.
        </InfoCard>
      </div>
    ),

    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems & Solutions
          </h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
