"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Clock, Lock, Unlock } from "lucide-react";

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
  { id: "types", label: "Report Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Restricted Reporting", value: "Allows disclosure to SARC, SAPR VA, or healthcare provider without triggering investigation or command notification" },
  { label: "Unrestricted Reporting", value: "Triggers command notification, NCIS investigation, and access to all legal/administrative protections" },
  { label: "Conversion", value: "Restricted can convert to Unrestricted at any time; Unrestricted cannot revert to Restricted" },
  { label: "Mandatory Reporting", value: "Marines in the chain of command are mandatory reporters—disclosure to NCO/Officer becomes Unrestricted" },
];

const REPORT_TYPES = [
  {
    type: "Restricted",
    description: "Maximum privacy while accessing care",
    investigation: "No",
    commandNotified: "No",
    services: "Medical, counseling, SARC/VA support"
  },
  {
    type: "Unrestricted",
    description: "Full investigation and command support",
    investigation: "Yes (NCIS)",
    commandNotified: "Yes",
    services: "All services plus legal, MPO, expedited transfer"
  },
];

const PROCESS_STEPS = [
  "Initial Contact: The victim meets with a SARC or SAPR VA",
  "Options Brief: The SARC/VA explains both reporting types in detail",
  "Selection: The victim signs DD Form 2910 to document their choice",
  "Action: If Unrestricted, the SARC notifies NCIS and the Commander within 24 hours",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "24 Hours", action: "SARC notifies NCIS and Commander for Unrestricted reports" },
  { requirement: "Anytime", action: "Victim may convert Restricted to Unrestricted" },
];

const COMMON_ISSUES = [
  { issue: "Accidental Disclosure to Command", solution: "If a victim discloses to their NCO or Officer, it becomes Unrestricted. Train leaders on proper response: immediately connect victim with SARC." },
  { issue: "Pressure to Convert", solution: "Victims should never be pressured to convert to Unrestricted. The choice is theirs alone. Commanders should support either decision." },
];

export function SAPRReportingTypesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="SAPR Reporting Types" variant="info">
          The Marine Corps provides two distinct avenues for reporting sexual assault. The primary goal is to empower victims by providing a choice between maximum privacy (Restricted) or an official investigation and command support (Unrestricted).
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
    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reporting Types Comparison</h2>
          <div className="mt-4 space-y-4">
            {REPORT_TYPES.map((item) => (
              <div key={item.type} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center gap-3">
                  {item.type === "Restricted" ? (
                    <Lock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Unlock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  )}
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.type} Reporting</h3>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Investigation:</span>
                    <span className="ml-2 text-zinc-600 dark:text-zinc-400">{item.investigation}</span>
                  </div>
                  <div>
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Command Notified:</span>
                    <span className="ml-2 text-zinc-600 dark:text-zinc-400">{item.commandNotified}</span>
                  </div>
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Services Available:</span>
                  <span className="ml-2 text-zinc-600 dark:text-zinc-400">{item.services}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Lock} title="Restricted Report Confidentiality" variant="default">
          A Restricted report is kept <strong>completely confidential</strong> from the command. Only the SARC, VA, and healthcare providers have access to the information.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reporting Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Forms</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>DD Form 2910:</strong> Victim Reporting Preference Statement</li>
            <li>&bull; <strong>DD Form 2911:</strong> Sexual Assault Forensic Examination Report</li>
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
        <InfoCard icon={AlertTriangle} title="Mandatory Reporters" variant="warning">
          All Marines in the chain of command are <strong>mandatory reporters</strong>. If a victim discloses to their NCO or Officer, it automatically becomes an Unrestricted report. Train your leaders on this requirement.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
