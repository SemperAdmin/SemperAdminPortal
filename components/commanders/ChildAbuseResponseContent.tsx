"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ShieldAlert, AlertTriangle, Phone, Users } from "lucide-react";

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
  { id: "reporting", label: "Mandatory Reporting" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Zero Tolerance", value: "Marine Corps has zero-tolerance policy for child abuse and neglect" },
  { label: "Mandatory Reporting", value: "All Marines and civilian employees are 'mandated reporters'" },
  { label: "CPS Coordination", value: "Child abuse cases almost always involve local civilian Child Protective Services" },
  { label: "Protective Measures", value: "May include removing Marine from home or restricting contact via MPO" },
];

const MANDATED_REPORTERS = [
  "All active duty service members",
  "All DoD civilian employees",
  "Contractors working with children",
  "Healthcare providers",
  "Chaplains (with limitations)",
  "Teachers and childcare workers",
];

const PROCESS_STEPS = [
  "Immediate Report: Contact PMO/Local Law Enforcement and the FAP office immediately upon suspicion or report",
  "De-confliction: Coordinate with NCIS or CID before conducting any command-level interviews to avoid compromising the investigation",
  "Safety Plan: Ensure a safety plan is in place via FAP and/or CPS to protect the child",
  "IDC Participation: Commander provides input on the Marine's performance and reliability during the case review",
];

const REPORTING_CONTACTS = [
  { agency: "PMO/Military Police", role: "Initial report and crime scene response" },
  { agency: "FAP Office", role: "Clinical assessment and family services" },
  { agency: "NCIS", role: "Criminal investigation of serious cases" },
  { agency: "Local CPS", role: "Civilian child welfare coordination" },
];

const COMMON_ISSUES = [
  {
    issue: "'Reasonable Suspicion' Standard",
    solution: "Commanders waiting for 'proof' before reporting. The law only requires 'reasonable suspicion' to trigger a report and investigation. When in doubt, report.",
  },
  {
    issue: "Overstepping Investigation",
    solution: "Attempting to conduct an 'informal' investigation into child abuse rather than letting specialized investigators (NCIS/CPS) handle it. Command interviews can contaminate evidence.",
  },
  {
    issue: "Delayed Protective Action",
    solution: "Waiting for investigation results before separating the Marine from the home. If a child is at risk, take immediate protective action.",
  },
];

export function ChildAbuseResponseContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ShieldAlert} title="Child Abuse Response" variant="info">
          The Marine Corps has a zero-tolerance policy for child abuse and neglect.
          Commanders must act decisively to ensure the safety of minors while coordinating
          with both military and civilian law enforcement and social services.
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

        <InfoCard icon={AlertTriangle} title="Immediate Reporting Required" variant="warning">
          Any suspected child abuse must be reported <strong>immediately</strong> to FAP
          and Law Enforcement. Do not wait for additional information or conduct your own investigation.
        </InfoCard>
      </div>
    ),

    reporting: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who Must Report
          </h2>
          <ul className="mt-4 space-y-2">
            {MANDATED_REPORTERS.map((reporter) => (
              <li key={reporter} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                {reporter}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Phone className="h-5 w-5" />
            Reporting Contacts
          </h3>
          <div className="mt-4 space-y-3">
            {REPORTING_CONTACTS.map((contact) => (
              <div key={contact.agency} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{contact.agency}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{contact.role}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Users} title="Reasonable Suspicion Standard" variant="default">
          You do <strong>not</strong> need proof to report. The legal standard is
          &quot;reasonable suspicion&quot;—if you suspect abuse, report it. Let the
          investigators determine the facts.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Response Process
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
            Protective Measures
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Military Protective Order (MPO) restricting contact with child</li>
            <li>&bull; Move Marine to barracks or alternate housing</li>
            <li>&bull; Coordinate with CPS on placement if needed</li>
            <li>&bull; Restrict access to on-base childcare facilities</li>
            <li>&bull; Notify DEERS if custody changes occur</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Do Not Interview the Child" variant="warning">
          Let trained investigators interview the child. Command-level questioning can
          contaminate evidence and traumatize the victim.
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
