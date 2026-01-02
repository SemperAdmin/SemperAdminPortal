"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ShieldAlert, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "members", label: "Team Members" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Trigger", value: "Activated when a SARC or Commander identifies 'lethality indicators' (e.g., threats of suicide/homicide, weapons access, history of violence)" },
  { label: "Members", value: "Includes the CO, SARC, NCIS, SJA, and Victim Advocate" },
  { label: "Safety Priority", value: "The team focuses on immediate physical safety over the administrative or legal timeline" },
];

const TEAM_MEMBERS = [
  { role: "Commanding Officer", responsibility: "Convenes the team and executes command-level safety measures" },
  { role: "SARC", responsibility: "Provides victim advocacy perspective and conducts risk assessment" },
  { role: "Victim Advocate", responsibility: "Direct support to victim and communicates their needs" },
  { role: "NCIS", responsibility: "Law enforcement perspective and threat assessment" },
  { role: "SJA", responsibility: "Legal guidance on protective orders and pretrial restraint" },
];

const LETHALITY_INDICATORS = [
  "Threats of suicide by victim or alleged offender",
  "Threats of homicide or violence",
  "Access to weapons",
  "History of violence or domestic abuse",
  "Stalking behavior",
  "Recent separation or relationship conflict escalation",
];

const PROCESS_STEPS = [
  "Assessment: SARC/VA uses the High-Risk Assessment tool to determine the risk level",
  "Activation: CO formally convenes the HRRT",
  "Plan Development: The team creates a tailored safety plan (e.g., increased supervision, MPO, pretrial restraint)",
  "Execution: CO ensures all command-level safety measures are enforced",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Immediate", action: "Activation must occur as soon as high-risk factors are identified" },
];

const COMMON_ISSUES = [
  { issue: "Delayed Activation", solution: "Waiting too long to convene the HRRT when lethality indicators are present. When in doubt, activate the team—it can always be stood down if risk is assessed as low." },
  { issue: "Incomplete Team", solution: "Not including all required members. Ensure NCIS and SJA are present to provide law enforcement and legal perspectives on the safety plan." },
];

export function HRRTContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ShieldAlert} title="High Risk Response Team (HRRT)" variant="info">
          An HRRT is a multi-disciplinary team activated when a sexual assault case is assessed as &quot;high risk&quot; for further violence or lethality. The commander plays a central role in executing the safety plan developed by this team.
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
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Clock className="h-5 w-5" />Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
    members: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HRRT Team Members</h2>
          <div className="mt-4 space-y-3">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.role} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{member.role}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{member.responsibility}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <AlertTriangle className="h-5 w-5 text-red-500" />Lethality Indicators
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {LETHALITY_INDICATORS.map((indicator) => (
              <li key={indicator}>&bull; {indicator}</li>
            ))}
          </ul>
        </section>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HRRT Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Safety Plan Options</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>MPO:</strong> Military Protective Order</li>
            <li>&bull; <strong>Barracks Relocation:</strong> Move victim or alleged offender</li>
            <li>&bull; <strong>Increased Supervision:</strong> Enhanced monitoring of alleged offender</li>
            <li>&bull; <strong>Pretrial Restraint:</strong> Restriction or confinement if warranted</li>
            <li>&bull; <strong>Weapons Seizure:</strong> Remove access to weapons</li>
          </ul>
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
        <InfoCard icon={AlertTriangle} title="When in Doubt, Activate" variant="warning">
          If lethality indicators are present, <strong>activate the HRRT immediately</strong>. The team can always be stood down if risk is assessed as low, but delayed activation could have tragic consequences.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
