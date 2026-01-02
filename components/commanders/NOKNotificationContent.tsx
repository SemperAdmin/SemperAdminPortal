"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UserCheck, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "team", label: "Notification Team" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "In-Person Only", value: "Death notifications are never conducted via telephone" },
  { label: "The Team", value: "Field Grade Officer (if possible), Chaplain, and medical representative or CACO" },
  { label: "Confidentiality", value: "No information released until PNOK notified and 24-hour waiting period has passed" },
  { label: "Notification Hours", value: "Standard hours 0600-2200 to avoid late-night surprises" },
];

const NOTIFICATION_TEAM = [
  { role: "Notification Officer", description: "Field Grade Officer (O-4 or above) when possible; delivers the official message", uniform: "Service Alphas" },
  { role: "Chaplain", description: "Provides spiritual support and comfort to the family", uniform: "Service Alphas" },
  { role: "Medical/CACO", description: "Answers medical questions if applicable; transitions to ongoing support", uniform: "Service Alphas" },
];

const PROCESS_STEPS = [
  "Coordination: HQMC (MPC) coordinates with the command closest to the NOK's residence to form the notification team",
  "Preparation: The team reviews all available facts and identifies the specific script to be used",
  "The Visit: The team arrives at the residence in Service Alphas to deliver the news",
  "Support: The team stays until the family is stable",
  "Transition: Support transitions to the assigned CACO for ongoing assistance",
];

const COMMON_ISSUES = [
  { issue: "Speculation", solution: "Notification teams providing 'guesses' as to the cause of death. Teams must only provide the facts authorized by HQMC—nothing more, nothing less." },
  { issue: "Social Media Leaks", solution: "Family members finding out via unofficial social media posts before the team arrives. Enforce strict OPSEC during the notification window." },
  { issue: "Wrong Residence", solution: "Outdated address in the Record of Emergency Data (RED). Verify NOK information before notification." },
];

export function NOKNotificationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UserCheck} title="Next of Kin Notification" variant="info">
          Notification of a Marine&apos;s death is a sacred duty. It is conducted in person by a uniformed team to ensure the family receives the news with the highest level of dignity, respect, and support.
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
        <InfoCard icon={Clock} title="Timeline Requirements" variant="warning">
          <strong>Within 24 Hours:</strong> Target window for notification following a death<br />
          <strong>0600-2200:</strong> Standard notification hours (unless exceptional circumstances)
        </InfoCard>
      </div>
    ),
    team: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Notification Team Composition</h2>
          <div className="mt-4 space-y-4">
            {NOTIFICATION_TEAM.map((member) => (
              <div key={member.role} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{member.role}</h3>
                  <span className="rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">{member.uniform}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Shield} title="Never by Phone" variant="default">
          Death notifications are <strong>NEVER</strong> made by telephone. Always in person, always in uniform.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Notification Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">24-Hour Media Blackout</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">No information about the death is released to the public or media until:</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; The PNOK has been officially notified</li>
            <li>&bull; A 24-hour waiting period has passed</li>
            <li>&bull; Release is authorized by HQMC Public Affairs</li>
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
