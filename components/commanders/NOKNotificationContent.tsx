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
  { id: "team", label: "Notification Team" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "In-Person Only", value: "Death notifications are NEVER done over the phone" },
  { label: "Notification Team", value: "Field-grade officer, Chaplain, and medical representative (if available)" },
  { label: "Uniform", value: "Service Alpha (or appropriate seasonal equivalent)" },
  { label: "Stay", value: "Team stays with family until friend or relative arrives" },
];

const TEAM_COMPOSITION = [
  { role: "Notifying Officer", requirement: "Field-grade officer if possible; senior officer available" },
  { role: "Chaplain", requirement: "Provides spiritual support and presence" },
  { role: "Medical Representative", requirement: "If available, especially for injury/illness cases" },
];

const PROCESS_STEPS = [
  "Identify Team: HQMC Casualty Section (MPC) coordinates with closest Marine Corps activity to family",
  "Verify Address: Ensure team is at the correct residence before proceeding",
  "Approach: Approach the residence in uniform, together as a team",
  "The Announcement: Deliver using prescribed script: 'The Commandant of the Marine Corps has entrusted me to express his deep regret...'",
  "Support: Stay with family until a friend or relative arrives to support them",
  "Provide Resources: Leave contact information for CACO and casualty assistance",
];

const TIMELINE_ITEMS = [
  { requirement: "0600-2200", action: "Standard hours for notification" },
  { requirement: "Exceptions Only", action: "Notifications outside these hours only in exceptional circumstances" },
  { requirement: "Within 24 Hours", action: "Target for notification following receipt of death PCR" },
];

const COMMON_ISSUES = [
  {
    issue: "Leaving the family alone immediately after notification",
    solution: "The team should NEVER leave the family immediately after delivering the news. Stay until a friend, relative, or support person arrives.",
  },
  {
    issue: "Speculation about cause of death",
    solution: "Only provide facts authorized in the PCR. Speculating on cause before investigation is complete causes significant legal and emotional distress.",
  },
  {
    issue: "Wrong address or wrong person notified",
    solution: "Verify address and NOK identity before notification. Cross-reference with RED/DA. If uncertain, contact MPC for clarification.",
  },
];

export function NOKNotificationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Heart} title="Next of Kin Notification" variant="info">
          The notification of a Marine&apos;s death is the <strong>most solemn duty</strong> the
          Marine Corps performs. It must be done in person, with dignity, and by a uniformed representative.
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

        <InfoCard icon={AlertTriangle} title="In-Person Only" variant="warning">
          Death notifications are <strong>NEVER</strong> done over the phone. This is a
          non-negotiable requirement regardless of circumstances.
        </InfoCard>
      </div>
    ),

    team: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Notification Team Composition
          </h2>
          <div className="mt-4 space-y-3">
            {TEAM_COMPOSITION.map((member) => (
              <div key={member.role} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{member.role}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{member.requirement}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Uniform Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Service Alpha</strong> (or appropriate seasonal equivalent)</li>
            <li>&bull; Ribbons, badges, and name tags properly positioned</li>
            <li>&bull; Clean, pressed, and inspection-ready</li>
            <li>&bull; The uniform conveys the gravity and respect of the occasion</li>
          </ul>
        </section>

        <InfoCard icon={Users} title="MPC Coordination" variant="default">
          HQMC Casualty Section (MPC) will coordinate with the closest Marine Corps activity
          to the family&apos;s location to identify and dispatch the notification team.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Notification Process
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
            The Announcement
          </h3>
          <div className="mt-3 rounded-lg bg-zinc-50 p-4 italic text-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300">
            &quot;The Commandant of the Marine Corps has entrusted me to express his deep regret
            that your [relationship], [Rank and Name], [died/was killed] [circumstances] on [date]
            at [location]...&quot;
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Use only the prescribed script. Do not improvise or add personal commentary.
          </p>
        </section>

        <InfoCard icon={Clock} title="Stay Until Support Arrives" variant="warning">
          The team must <strong>stay with the family</strong> until a friend, relative, or other
          support person arrives. Never leave the family alone immediately after notification.
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
