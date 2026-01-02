"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Shield, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "mpo", label: "MPO Issuance" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "MPO Authority", value: "Written order (DD Form 2873) issued by CO to Marine to stay away from spouse, partner, or child" },
  { label: "Reporting Options", value: "Victims have restricted vs. unrestricted options similar to SAPR (with limitations)" },
  { label: "Victim Advocacy", value: "Victims must be offered services of FACR or Victim Advocate" },
  { label: "Immediate Action", value: "MPO issued immediately if threat of violence exists" },
];

const MPO_ELEMENTS = [
  "Marine's identifying information",
  "Protected person(s) identification",
  "Specific prohibited conduct (no contact, distance requirements)",
  "Duration of the order",
  "Consequences of violation (UCMJ)",
  "CO signature and date",
];

const PROCESS_STEPS = [
  "Stabilization: If an incident occurs, separate the parties immediately (e.g., move the Marine to the barracks)",
  "MPO Issuance: CO evaluates the risk and issues an MPO using DD Form 2873",
  "Notification: Ensure the MPO is entered into the system and the victim is notified of the order's terms",
  "Follow-up: Review the MPO regularly to determine if it needs to be extended, modified, or rescinded",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Immediate", action: "Issuance of MPO if threat of violence exists" },
  { requirement: "72 Hours", action: "MPOs must be reviewed by CO to ensure still necessary and appropriate" },
  { requirement: "Ongoing", action: "Regular monitoring for violations" },
];

const COMMON_ISSUES = [
  { issue: "Enforceability Confusion", solution: "An MPO is only enforceable against the service member. If the victim is a civilian, a Civilian Protective Order (CPO) may also be required." },
  { issue: "Lack of Monitoring", solution: "Failing to check if the Marine is violating the MPO via social media or third-party contact. Assign someone to periodically check for violations." },
  { issue: "Premature Rescission", solution: "Rescinding the MPO because 'things have calmed down.' Consult with FAP before modifying or rescinding any MPO." },
];

export function DomesticAbuseResponseContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="Domestic Abuse Response" variant="info">
          When domestic abuse is reported, the Commander&apos;s priority is the immediate safety of the victim and any children involved. The Commander has the unique authority to issue Military Protective Orders (MPOs) to create a &quot;cooling-off&quot; period and prevent further violence.
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
    mpo: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Protective Order (DD Form 2873)</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">The MPO is the Commander&apos;s primary tool for protecting victims of domestic abuse.</p>
          <div className="mt-4">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Required Elements:</h3>
            <ul className="mt-2 space-y-2">
              {MPO_ELEMENTS.map((element) => (
                <li key={element} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />{element}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <InfoCard icon={AlertTriangle} title="72-Hour Review" variant="warning">
          MPOs must be reviewed by the CO within <strong>72 hours</strong> to ensure they are still necessary and appropriate.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Response Process</h2>
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
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <FileText className="h-5 w-5" />Victim Services
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Family Advocacy Command Representative (FACR)</li>
            <li>&bull; Victim Advocate (VA)</li>
            <li>&bull; Safety planning assistance</li>
            <li>&bull; Emergency shelter information</li>
            <li>&bull; Legal assistance referral</li>
          </ul>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
