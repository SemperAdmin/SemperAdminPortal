"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileX, AlertTriangle, Scale, ClipboardList } from "lucide-react";
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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "bases", label: "Separation Bases" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS: { label: string; value: string; url?: string }[] = [
  { label: "Authority", value: "MCO 1900.16 governs enlisted administrative separations", url: MCO_URLS.MARCORSEPMAN_PDF },
  { label: "Characterization", value: "Honorable, General, or Other Than Honorable (OTH)" },
  { label: "Burden of Proof", value: "Preponderance of the evidence standard" },
  { label: "Due Process", value: "Rights increase with characterization severity and time in service" },
];

const SEPARATION_BASES = [
  {
    category: "Convenience of the Government",
    bases: [
      { name: "Pattern of Misconduct", description: "Discreditable involvement with civil or military authorities" },
      { name: "Commission of Serious Offense", description: "Single serious offense warranting separation" },
      { name: "Minor Offenses", description: "Pattern of minor disciplinary infractions" },
      { name: "Civilian Conviction", description: "Conviction by civilian court" },
      { name: "Drug Abuse", description: "Wrongful use, possession, or distribution of controlled substances" },
    ],
  },
  {
    category: "Other Bases",
    bases: [
      { name: "In Lieu of Trial", description: "Voluntary request to separate instead of facing court-martial" },
      { name: "Personality Disorder", description: "Documented pattern of behavior interfering with duty" },
      { name: "Adjustment Disorder", description: "Inability to meet military standards" },
      { name: "Secretarial Authority", description: "Separation in the best interest of the Marine Corps" },
    ],
  },
];

const CHARACTERIZATION_CRITERIA = [
  { type: "Honorable", criteria: "Service generally meets standards; isolated minor issues" },
  { type: "General (Under Honorable)", criteria: "Satisfactory service with significant departure from conduct expected" },
  { type: "Other Than Honorable", criteria: "Pattern of significant misconduct or one or more serious offenses" },
];

const PROCESS_STEPS = [
  "Identify Basis: Determine applicable separation authority from MCO 1900.16",
  "Gather Evidence: Compile counselings, NJPs, evaluations, and other documentation",
  "Draft Notification: Prepare separation notification letter with specific basis",
  "Legal Review: SJA reviews package for legal sufficiency",
  "Notify Marine: Deliver notification and advise of rights",
  "Response Period: Allow Marine time to respond (varies by characterization)",
  "Board or Waiver: Conduct board if required or process waiver",
  "Forward Package: Submit to separation authority for decision",
];

const COMMON_ISSUES = [
  {
    issue: "Insufficient documentation",
    solution: "Every separation must be supported by counselings, page 11 entries, or adjudicated misconduct. 'Verbal counselings' are not evidence. Document everything in writing from day one.",
  },
  {
    issue: "Wrong characterization for basis",
    solution: "Drug abuse requires minimum General characterization. Pattern of misconduct requires documented pattern, not one incident. Match your evidence to the characterization sought.",
  },
  {
    issue: "Missing due process steps",
    solution: "Marines with 6+ years are entitled to an administrative separation board. Failure to offer board rights can void the entire separation action.",
  },
];

export function SeparationBasesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileX} title="Administrative Separation Bases" variant="info">
          MCO 1900.16 establishes the grounds and procedures for enlisted administrative
          separations. Understanding the <strong>specific basis</strong> and the
          <strong> evidence required</strong> is critical to lawful separation actions.
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
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">
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
            Characterization of Service
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Criteria</th>
                </tr>
              </thead>
              <tbody>
                {CHARACTERIZATION_CRITERIA.map((char) => (
                  <tr key={char.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{char.type}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{char.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Scale} title="Burden of Proof" variant="warning">
          The command must prove the basis for separation by a <strong>preponderance of the
          evidence</strong> (more likely than not). This is lower than criminal &quot;beyond a
          reasonable doubt&quot; but still requires documented evidence.
        </InfoCard>
      </div>
    ),

    bases: (
      <div className="space-y-6">
        {SEPARATION_BASES.map((category) => (
          <section key={category.category} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {category.category}
            </h2>
            <div className="mt-4 space-y-3">
              {category.bases.map((basis) => (
                <div key={basis.name} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{basis.name}</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{basis.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <InfoCard icon={AlertTriangle} title="Drug Abuse Characterization" variant="warning">
          Drug abuse separations require a minimum characterization of <strong>General (Under
          Honorable Conditions)</strong>. An Honorable discharge is not authorized for drug
          offenses.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Separation Process
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

        <InfoCard icon={ClipboardList} title="Documentation Requirements" variant="default">
          Build your separation package with <strong>contemporaneous documentation</strong>:
          counselings, page 11 entries, NJP records, court-martial records, and performance
          evaluations that support the basis for separation.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Package Contents
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Separation notification letter with specific basis cited</li>
            <li>&bull; Counseling and page 11 entries (chronological)</li>
            <li>&bull; NJP records and court-martial orders (if applicable)</li>
            <li>&bull; Fitness reports/evaluations supporting pattern</li>
            <li>&bull; Marine&apos;s response or acknowledgment of rights</li>
            <li>&bull; SJA legal sufficiency review</li>
          </ul>
        </section>
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
