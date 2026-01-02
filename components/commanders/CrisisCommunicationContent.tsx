"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { AlertCircle, AlertTriangle, Clock, MessageSquare } from "lucide-react";

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
  { id: "messages", label: "Key Messages" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Centralized Messaging", value: "All information must flow through a single authorized point (the PAO/COMMSTRAT) to prevent conflicting reports" },
  { label: "Speed vs. Accuracy", value: "The goal is to be first with the facts, but never at the expense of accuracy. Use 'Holding Statements' if full details are not yet known" },
  { label: "Proactive Engagement", value: "Addressing a crisis early allows the command to 'own the narrative' rather than reacting to external speculation" },
];

const KEY_MESSAGE_ELEMENTS = [
  { element: "What Happened", description: "Brief, factual statement of the incident without speculation" },
  { element: "What Is Being Done", description: "Actions the command is taking in response" },
  { element: "When More Info Available", description: "Commitment to provide updates as information becomes available" },
];

const PROCESS_STEPS = [
  "Notification: Inform the higher headquarters COMMSTRAT office immediately upon the occurrence of a crisis event",
  "Verify Facts: Gather the '5 W's' (Who, What, When, Where, Why) from reliable on-scene sources",
  "Develop Key Messages: Create three concise talking points that address what happened, what is being done, and when more info will be available",
  "Dissemination: Release the statement through official channels (press releases, social media, or town halls)",
  "Monitor & Adjust: Track media and social media reactions to correct misinformation in real-time",
];

const COMMON_ISSUES = [
  { issue: "'No Comment' Syndrome", solution: "Using 'No Comment' is often interpreted by the public as an admission of guilt or a cover-up. Use 'The matter is under investigation and we will share more as soon as we can' instead." },
  { issue: "Internal Leaks", solution: "Marines sharing cell phone footage or details of an incident before the official statement is released. Brief all hands on the importance of letting the official statement lead." },
];

export function CrisisCommunicationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={AlertCircle} title="Crisis Communication" variant="info">
          Crisis communication is the strategic effort to provide accurate, timely information during an unexpected event that threatens the unit&apos;s reputation, morale, or safety. Effective communication prevents the spread of rumors and maintains public trust in the Marine Corps&apos; transparency and accountability.
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
        <InfoCard icon={Clock} title="The Golden Hour" variant="warning">
          The first <strong>60 minutes</strong> after a crisis are critical for issuing an initial statement to preempt social media rumors.
        </InfoCard>
      </div>
    ),
    messages: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Message Elements</h2>
          <div className="mt-4 space-y-3">
            {KEY_MESSAGE_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={MessageSquare} title="Holding Statement" variant="default">
          When full details are not yet available, use a holding statement: &quot;We are aware of the situation and are gathering information. We will provide an update as soon as we have verified facts.&quot;
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Crisis Response Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The 5 W&apos;s</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Who</strong> is involved?</li>
            <li>&bull; <strong>What</strong> happened?</li>
            <li>&bull; <strong>When</strong> did it occur?</li>
            <li>&bull; <strong>Where</strong> did it happen?</li>
            <li>&bull; <strong>Why</strong> did it happen (if known)?</li>
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
        <InfoCard icon={AlertTriangle} title="Own the Narrative" variant="warning">
          If you don&apos;t tell your story first, someone else will tell it for you—and probably not as accurately.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
