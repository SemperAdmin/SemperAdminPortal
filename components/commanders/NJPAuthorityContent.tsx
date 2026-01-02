"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, Users, AlertTriangle, FileText } from "lucide-react";

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
  { label: "Legal Basis", value: "Article 15, UCMJ" },
  { label: "Standard of Proof", value: "Preponderance of evidence" },
  { label: "Statute of Limitations", value: "2 years from offense" },
  { label: "Appeal Deadline", value: "5 working days after imposition" },
  { label: "Suspension Period", value: "Up to 6 months maximum" },
  { label: "Rights Form", value: "NAVMC 10132" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "authority", label: "Who Has Authority" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const NJP_AUTHORITY_HOLDERS = [
  "Commanding officers over Marines assigned or attached to their command",
  "Superior operational or administrative commanders over all subordinate Marines",
  "Officers-in-charge designated by departmental orders or GO/FO orders",
  "Warrant officers (W-1 through CWO-5) - except cannot reduce in grade",
  "Flag/general officers with CMC approval may delegate to principal assistant",
  "Joint commanders over Naval service members via orders",
];

const NJP_PROCESS_STEPS = [
  "Commander receives report of offense and conducts preliminary inquiry",
  "Commander determines preponderance of evidence supports the alleged offense",
  "Accused receives notification and rights advisement (NAVMC 10132)",
  "Accused consults with counsel if available (telephonic authorized)",
  "Accused decides to accept NJP or demand court-martial",
  "Commander conducts NJP hearing with accused present",
  "Commander makes findings and imposes punishment if warranted",
  "Commander advises accused of appeal rights",
];

const COMMON_ISSUES = [
  {
    issue: "Accused was not properly notified of right to refuse NJP",
    solution: "Document the advisement on NAVMC 10132 with accused signature before proceeding.",
  },
  {
    issue: "Accused is assigned to multiple commands",
    solution: "Coordinate with both commands to determine which commander will handle the NJP.",
  },
  {
    issue: "Commander is uncertain about authority",
    solution: "Verify NJP authority through the chain of command and consult with Staff Judge Advocate.",
  },
];

export function NJPAuthorityContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Nonjudicial Punishment (Article 15)" variant="info">
          NJP gives commanders a tool to address minor misconduct without court-martial. It maintains
          good order and discipline while allowing Marines to continue service. Only commanders with
          designated authority may impose NJP.
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

        <InfoCard icon={AlertTriangle} title="Exception: STC Authority" variant="warning">
          NJP authority does not include offenses where a Special Trial Counsel has exercised and
          not deferred authority over covered offenses.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Right to Refuse NJP
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Marines may refuse NJP and demand court-martial, <strong>except</strong> those attached
            to or embarked on a vessel. If the accused refuses NJP, forward charges to the
            appropriate court-martial convening authority.
          </p>
        </section>
      </div>
    ),

    authority: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="Who Holds NJP Authority" variant="info">
          NJP authority is granted to specific commanders and officers based on their position
          and the relationship to the accused Marine.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Authority Holders
          </h2>
          <ul className="mt-4 space-y-3">
            {NJP_AUTHORITY_HOLDERS.map((holder) => (
              <li key={holder} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 text-green-500">&#10003;</span>
                <span>{holder}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Attachment and TDY
          </h3>
          <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              <strong>Permanent/Temporary Orders:</strong> Marines attached via orders fall under
              the NJP authority of that command.
            </p>
            <p>
              <strong>Multiple Commands:</strong> A Marine attached to multiple commands for TDY
              is subject to NJP authority of both parent and TDY commands.
            </p>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Warrant Officer Limitation" variant="warning">
          Warrant officers (W-1 through CWO-5) hold NJP authority but cannot reduce enlisted
          Marines in grade under any circumstances.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NJP Process Steps
          </h2>
          <div className="mt-6 space-y-4">
            {NJP_PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Statute of Limitations:</span>
              <span className="text-zinc-600 dark:text-zinc-400">Within 2 years of offense</span>
            </div>
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Appeal Deadline:</span>
              <span className="text-zinc-600 dark:text-zinc-400">5 working days after imposition</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Max Suspension Period:</span>
              <span className="text-zinc-600 dark:text-zinc-400">6 months</span>
            </div>
          </div>
        </section>

        <InfoCard icon={FileText} title="Required Documentation" variant="default">
          <ul className="mt-2 space-y-1 text-sm">
            <li>&bull; <strong>NAVMC 10132</strong> - Unit Punishment Book</li>
            <li>&bull; <strong>NAVPERS 1626/7</strong> - Report and Disposition of Offense</li>
            <li>&bull; <strong>JAGMAN A-1-b through A-1-g</strong> - Rights Advisement Forms</li>
          </ul>
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
