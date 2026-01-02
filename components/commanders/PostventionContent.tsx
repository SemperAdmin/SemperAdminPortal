"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Heart, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "first48", label: "First 48 Hours" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Contagion Prevention", value: "Avoid glamorizing the act; focus on mental health complexity and available resources" },
  { label: "The 'First 48'", value: "Immediate response focuses on emotional safety of the unit" },
  { label: "Investigation", value: "Separate from command response—formal Line of Duty/Command Investigation initiated" },
  { label: "Survivor Support", value: "Support fellow Marines and family—they are the survivors" },
];

const FIRST_48_ACTIONS = [
  "Notify HQMC and Chaplain/Medical team immediately",
  "Implement social media blackout regarding the incident",
  "CO and Chaplain meet with Marine's immediate peers and work section",
  "Coordinate with COMMSTRAT for any public messaging (safe messaging guidelines)",
  "Identify Marines who may be particularly affected",
  "Increase Chaplain and MFLC availability",
  "Conduct initial unit-wide meeting within 24 hours",
];

const SAFE_MESSAGING = [
  { do: "Focus on resources and help available", dont: "Describe method or location in detail" },
  { do: "Emphasize complexity of mental health", dont: "Simplify to a single cause" },
  { do: "Express condolences to family/unit", dont: "Glamorize or romanticize the death" },
  { do: "Encourage those struggling to seek help", dont: "Speculate on motive" },
  { do: "Refer to as 'died by suicide'", dont: "Use 'committed' or 'successful'" },
];

const PROCESS_STEPS = [
  "Notification: Notify HQMC and Chaplain/Medical team immediately",
  "Social Media: Implement social media blackout regarding the incident",
  "Peer Outreach: Commander and Chaplain meet with Marine's immediate peers",
  "Communication: Coordinate with COMMSTRAT for public messaging (safe messaging guidelines)",
  "Unit Meeting: Conduct unit-wide meeting within 24 hours—led by CO and Chaplain",
  "Resource Surge: Increase OSCAR team and MFLC presence for minimum 30 days",
  "Investigation: Initiate Line of Duty/Command Investigation (separate process)",
  "Long-term Support: Monitor unit for extended period; watch for delayed reactions",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Immediate", action: "4-hour PCR (Personnel Casualty Report) for a suicide" },
  { requirement: "Within 24 Hours", action: "Initial unit-wide meeting led by Commander and Chaplain" },
  { requirement: "30+ Days", action: "Increase OSCAR/MFLC presence within the unit" },
];

const COMMON_ISSUES = [
  {
    issue: "Speculation",
    solution: "Commanders speculating on the 'motive' before an investigation is complete. Say: 'We don't know all the factors yet, and the investigation will help us understand.' Focus on supporting survivors.",
  },
  {
    issue: "Silence",
    solution: "Ignoring the event in hopes it will 'blow over.' This creates a vacuum of information that leads to rumors and increased stress. Address the unit directly with compassion and resources.",
  },
  {
    issue: "Memorial overemphasis",
    solution: "Creating elaborate memorials or excessive tributes can inadvertently glamorize the death. Keep memorials appropriate and focus on celebrating the Marine's life and service.",
  },
];

export function PostventionContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Heart} title="Postvention Procedures" variant="info">
          Postvention refers to the actions a command takes following a suicide or suicide
          attempt. It is designed to <strong>support the survivors</strong> (fellow Marines
          and family), <strong>reduce the risk of suicide contagion</strong>, and restore
          the unit&apos;s readiness.
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

        <InfoCard icon={Clock} title="4-Hour PCR" variant="warning">
          Submit the Personnel Casualty Report (PCR) within <strong>4 hours</strong>
          for a suicide. This is the same timeline as any other casualty.
        </InfoCard>
      </div>
    ),

    first48: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            First 48 Hours
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The immediate response focuses on the emotional safety of the unit:
          </p>
          <ul className="mt-4 space-y-2">
            {FIRST_48_ACTIONS.map((action) => (
              <li key={action} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {action}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Safe Messaging Guidelines
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-green-700 dark:text-green-400">Do</th>
                  <th className="py-2 text-left font-semibold text-red-700 dark:text-red-400">Don&apos;t</th>
                </tr>
              </thead>
              <tbody>
                {SAFE_MESSAGING.map((item, index) => (
                  <tr key={step} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.do}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.dont}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Users} title="Identify Vulnerable Marines" variant="default">
          Pay special attention to Marines who were close to the deceased, those with
          similar stressors, and those who may feel guilt. These individuals are at
          higher risk during the postvention period.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Postvention Process
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
            Resource Surge
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Increase OSCAR team presence within the unit</li>
            <li>&bull; Request additional MFLC support for minimum 30 days</li>
            <li>&bull; Chaplain increases availability and visibility</li>
            <li>&bull; Consider stand-down for immediate work section</li>
            <li>&bull; Monitor unit morale and climate closely</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Investigation is Separate" variant="warning">
          The Line of Duty/Command Investigation is a <strong>separate process</strong>
          from the postvention response. Don&apos;t let investigation needs delay or
          interfere with supporting the unit.
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
