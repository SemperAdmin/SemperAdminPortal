"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Gavel, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "rights", label: "Marine's Rights" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Standard of Proof", value: "Commander should be convinced 'beyond a reasonable doubt' per MC policy" },
  { label: "Right to Refuse", value: "Marines may refuse NJP and demand court-martial (except when embarked)" },
  { label: "Right to Counsel", value: "Must be given opportunity to consult Area Defense Counsel (ADC)" },
  { label: "Purpose", value: "Maintain discipline for minor offenses without court-martial stigma" },
];

const MARINE_RIGHTS = [
  "Right to be informed of the specific charges",
  "Right to remain silent (cannot be compelled to make a statement)",
  "Right to consult with Area Defense Counsel before deciding",
  "Right to refuse NJP and demand trial by court-martial",
  "Right to present evidence and call witnesses",
  "Right to examine evidence against them",
  "Right to have a spokesperson present at the hearing",
];

const PROCESS_STEPS = [
  "Preliminary Inquiry: Commander investigates facts to ensure UCMJ violation occurred",
  "Article 31(b) Rights: If questioning suspect, read rights before any interrogation",
  "Notification: Marine formally notified via NAVMC 118(11) of intent and rights",
  "Counsel Consultation: Marine given opportunity to consult with ADC",
  "Decision: Marine decides to accept NJP or demand court-martial (5 days)",
  "Hearing: Commander conducts formal hearing; Marine presents defense/mitigation",
  "Adjudication: Commander makes Guilty/Not Guilty finding and determines punishment",
  "Entry: Results recorded in Unit Punishment Book (UPB)",
];

const TIMELINE_ITEMS = [
  { requirement: "48 Hours", action: "Minimum time for Marine to consult with counsel before hearing" },
  { requirement: "5 Days", action: "Timeframe for Marine to decide: accept NJP or demand court-martial" },
];

const COMMON_ISSUES = [
  {
    issue: "Article 31(b) violations",
    solution: "Questioning a suspect without first reading rights makes evidence inadmissible. Always read rights before any interrogation of a suspect.",
  },
  {
    issue: "Insufficient preliminary inquiry",
    solution: "Rushing to NJP without gathering facts. Conduct thorough investigation to ensure UCMJ violation actually occurred.",
  },
  {
    issue: "Denying access to counsel",
    solution: "Marine must be given real opportunity to consult ADC, not just a phone number. Document the opportunity provided.",
  },
];

export function NJPProceduresContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Gavel} title="NJP Procedures (Office Hours)" variant="info">
          Non-Judicial Punishment is a tool used by commanders to maintain discipline for minor
          offenses without the lasting stigma of a court-martial conviction. Following correct
          procedural steps is <strong>vital</strong> to ensure the punishment is legally sustainable.
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_ITEMS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Right to Refuse" variant="warning">
          Except for Marines attached to or embarked on a vessel, any Marine may <strong>refuse
          NJP and demand trial by court-martial</strong>. Ensure this right is clearly explained.
        </InfoCard>
      </div>
    ),

    rights: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Marine&apos;s Rights at NJP
          </h2>
          <ul className="mt-4 space-y-3">
            {MARINE_RIGHTS.map((right) => (
              <li key={right} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {right}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={Shield} title="NAVMC 118(11)" variant="default">
          Use <strong>NAVMC 118(11)</strong> to formally notify the Marine of the intent to
          impose NJP and document their rights. Keep a signed copy in the case file.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Area Defense Counsel (ADC)
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Marines must be given opportunity to consult with ADC</li>
            <li>&bull; ADC consultation is confidential</li>
            <li>&bull; ADC can advise on whether to accept NJP or demand court-martial</li>
            <li>&bull; Document that the opportunity was provided</li>
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NJP Process
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

        <InfoCard icon={Clock} title="Unit Punishment Book" variant="default">
          Results are recorded in the <strong>Unit Punishment Book (UPB)</strong>. Maintain
          accurate records for tracking patterns and supporting future actions.
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
