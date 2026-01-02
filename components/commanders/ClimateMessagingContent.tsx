"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Megaphone, AlertTriangle, Users, Calendar } from "lucide-react";

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
  { id: "channels", label: "Channels" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Internal Focus", value: "Messaging aimed at the Marines and Sailors within the unit (Town Halls, All-Hands, Plan of the Day)" },
  { label: "External Focus", value: "Messaging aimed at families and the local community to build support and pride in the unit" },
  { label: "Consistency", value: "The message must be consistent across all platforms (e.g., the Commander's 'Open Door Policy' must be mentioned in the policy letter AND the safety brief)" },
];

const COMMUNICATION_CHANNELS = [
  { channel: "Plan of the Day (POD)", audience: "Internal - All Hands", frequency: "Daily" },
  { channel: "Unit Newsletter", audience: "Internal/Families", frequency: "Monthly" },
  { channel: "Town Halls/All-Hands", audience: "Internal - All Hands", frequency: "Quarterly or as needed" },
  { channel: "Commander's Cup/PT", audience: "Internal - All Hands", frequency: "Weekly/Monthly" },
  { channel: "Family Day Events", audience: "Families/Community", frequency: "Quarterly" },
  { channel: "Official Social Media", audience: "External/Families", frequency: "As needed" },
];

const PROCESS_STEPS = [
  "Identify Core Themes: Select 2-3 themes based on the Command Philosophy (e.g., 'Disciplined Readiness,' 'Family First')",
  "Multi-Channel Delivery: Use a variety of tools: Plan of the Day (POD) notes, unit newsletters, and 'Commander's Cups'",
  "Feedback Loop: Use the DEOCS or informal sensing sessions to see if the Marines are actually receiving and understanding the message",
  "Lead by Example: Ensure the command team's actions mirror the messaging (e.g., if the message is 'Physical Fitness,' the CO should be seen PT'ing with the unit)",
];

const TIMELINE_REQUIREMENTS = [
  { period: "First 90 Days", action: "The initial command climate message should be firmly established and communicated" },
  { period: "Monthly", action: "Reiterate key themes during scheduled unit formations" },
];

const COMMON_ISSUES = [
  { issue: "Tone-Deafness", solution: "Issuing a message about 'Work-Life Balance' while simultaneously demanding 18-hour workdays for non-essential tasks. Ensure your actions match your words." },
  { issue: "Bureaucratic Language", solution: "Using 'corporate' speak that doesn't resonate with junior Marines. Keep messaging 'Marine-to-Marine'—direct, clear, and authentic." },
];

export function ClimateMessagingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Megaphone} title="Command Climate Messaging" variant="info">
          Command Climate Messaging is the intentional use of communication to reinforce the Commander&apos;s values, expectations, and the unit&apos;s culture. It aligns the &quot;word&quot; with the &quot;deed&quot; to ensure all Marines understand the command&apos;s identity and standards.
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
            <Calendar className="h-5 w-5" />Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.period} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.period}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
    channels: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Communication Channels</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Channel</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Audience</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {COMMUNICATION_CHANNELS.map((item) => (
                  <tr key={item.channel} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.channel}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.audience}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Users} title="Multi-Channel Approach" variant="default">
          Different Marines consume information differently. Use multiple channels to ensure your message reaches everyone.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Messaging Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Example Core Themes</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Disciplined Readiness:</strong> Always prepared, always professional</li>
            <li>&bull; <strong>Family First:</strong> Taking care of our families enables mission success</li>
            <li>&bull; <strong>Safety is Non-Negotiable:</strong> Every Marine goes home</li>
            <li>&bull; <strong>Leader Development:</strong> Growing tomorrow&apos;s leaders today</li>
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
        <InfoCard icon={AlertTriangle} title="Actions Speak Louder" variant="warning">
          Marines watch what you do, not just what you say. If your messaging doesn&apos;t match your behavior, the message is meaningless.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
