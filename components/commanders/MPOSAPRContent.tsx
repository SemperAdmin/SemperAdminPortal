"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Shield, AlertTriangle, Clock, FileSignature } from "lucide-react";

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
  { id: "scope", label: "MPO Scope" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Victim Request", value: "A commander should strongly consider issuing an MPO if requested by a victim or recommended by NCIS" },
  { label: "Scope", value: "Must be specific (e.g., stay 100 feet away, no digital contact, no third-party contact)" },
  { label: "Duration", value: "Valid for 10 days initially, but can be extended in 10-day increments or made indefinite until the case is resolved" },
];

const MPO_PROVISIONS = [
  { provision: "No Contact", description: "No direct communication with the victim by any means" },
  { provision: "Physical Distance", description: "Maintain specific distance (e.g., 100 feet) from victim" },
  { provision: "No Digital Contact", description: "No contact via phone, text, email, or social media" },
  { provision: "No Third-Party Contact", description: "No contact through intermediaries or mutual friends" },
  { provision: "Location Restrictions", description: "Stay away from victim's barracks, workspace, or other locations" },
];

const PROCESS_STEPS = [
  "Issuance: CO signs DD Form 2873 (Military Protective Order)",
  "Service: The order is formally served to the subject (alleged offender)",
  "Notification: The victim and PMO are provided copies of the signed order immediately",
  "Entry: The MPO must be entered into the NCIC (National Crime Information Center) database via PMO",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "10 Days", action: "Initial MPO duration; can be extended" },
  { requirement: "Immediately", action: "Serve order to subject and notify victim" },
  { requirement: "24 Hours", action: "Enter MPO into NCIC database via PMO" },
];

const COMMON_ISSUES = [
  { issue: "Vague Provisions", solution: "MPO not specific enough to be enforceable. Include specific distances, prohibited contact methods, and protected locations." },
  { issue: "NCIC Entry Delay", solution: "MPO not entered into NCIC promptly. Coordinate with PMO immediately upon issuance to ensure database entry." },
  { issue: "No Extension", solution: "MPO expires without review. Calendar the expiration date and review with SJA before it lapses." },
];

export function MPOSAPRContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="Military Protective Orders (MPO)" variant="info">
          An MPO is an administrative tool used by the commander to protect a victim by ordering the alleged offender to have &quot;no contact&quot; with the victim and to stay away from specific locations.
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
    scope: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MPO Provisions</h2>
          <div className="mt-4 space-y-3">
            {MPO_PROVISIONS.map((item) => (
              <div key={item.provision} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.provision}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={FileSignature} title="Be Specific" variant="default">
          An enforceable MPO must be <strong>specific and measurable</strong>. Vague orders like &quot;stay away&quot; are difficult to enforce—specify exact distances and prohibited actions.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MPO Issuance Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Notifications</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Subject:</strong> Formal service of the order with signature</li>
            <li>&bull; <strong>Victim:</strong> Copy of signed order immediately</li>
            <li>&bull; <strong>PMO:</strong> Copy for NCIC database entry</li>
            <li>&bull; <strong>SARC:</strong> Notification of MPO issuance</li>
            <li>&bull; <strong>SJA:</strong> Copy for legal tracking</li>
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
        <InfoCard icon={AlertTriangle} title="NCIC Entry is Critical" variant="warning">
          An MPO not entered into <strong>NCIC</strong> may not be enforceable by civilian law enforcement. Coordinate with PMO immediately to ensure database entry.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
