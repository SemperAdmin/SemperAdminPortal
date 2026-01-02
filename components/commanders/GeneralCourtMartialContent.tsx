"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, Users, FileText } from "lucide-react";

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
  { label: "Convening Authority", value: "General officers in command or designated by SECNAV" },
  { label: "Composition", value: "Military judge + 8 members, or judge alone" },
  { label: "Jurisdiction", value: "All UCMJ offenses including capital" },
  { label: "Maximum Punishment", value: "No limit except as provided by MCM" },
  { label: "Death Penalty", value: "Authorized for certain offenses (unanimous members)" },
  { label: "Preliminary Hearing", value: "Article 32 required before referral" },
];

const PROCESS_STEPS = [
  "Charges preferred",
  "Article 32 preliminary hearing conducted",
  "Preliminary hearing report forwarded to GCMCA",
  "SJA provides pretrial advice",
  "GCMCA (or STC for covered offenses) refers charges",
  "Trial counsel and defense counsel detailed",
  "Military judge assigned",
  "Members detailed and impaneled",
  "Trial conducted",
  "Sentencing (if guilty)",
  "Post-trial processing and appellate review",
];

const COMMON_ISSUES = [
  {
    issue: "GCMCA is the accuser",
    solution: "Forward to next superior GCMCA or Secretary of the Navy.",
  },
  {
    issue: "Classified information involved",
    solution: "Coordinate with national security case procedures.",
  },
];

export function GeneralCourtMartialContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="General Court-Martial" variant="info">
          General court-martial is the highest level of military court. It has jurisdiction over
          all persons subject to the UCMJ and all offenses under the UCMJ, including capital offenses.
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

        <InfoCard icon={AlertTriangle} title="Covered Offenses" variant="warning">
          Covered offenses are referred by the Special Trial Counsel, not the convening authority.
        </InfoCard>
      </div>
    ),

    jurisdiction: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who Has GCMCA
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; General officers in command</li>
            <li>&bull; Commanding officers designated by SECNAV</li>
            <li>&bull; Commanding officers designated by the President</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Composition Options
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">With Members</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Military judge + at least 8 members</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Judge Alone</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">At accused&apos;s request (except capital cases)</p>
            </div>
          </div>
        </section>

        <InfoCard icon={Users} title="Enlisted Members" variant="default">
          Enlisted accused may request one-third enlisted members on the panel.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Death Penalty Cases
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Death penalty is authorized only for certain offenses and requires <strong>unanimous
            members</strong>. Judge-alone trial is not permitted in capital cases.
          </p>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            General Court-Martial Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
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
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Speedy Trial:</span>
              <span className="text-zinc-600 dark:text-zinc-400">120 days from preferral or restraint</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Charges to Accused:</span>
              <span className="text-zinc-600 dark:text-zinc-400">Within 8 days</span>
            </div>
          </div>
        </section>

        <InfoCard icon={FileText} title="Article 32 Preliminary Hearing" variant="default">
          An Article 32 preliminary hearing is required before referral to general court-martial.
          SJA pretrial advice is also required.
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
