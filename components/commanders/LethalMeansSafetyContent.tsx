"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ShieldAlert, AlertTriangle, Clock, MessageSquare } from "lucide-react";

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
  { id: "conversation", label: "The Conversation" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Time and Distance", value: "Increasing time/distance between person in crisis and lethal method significantly increases survival chance" },
  { label: "Voluntary Nature", value: "Commanders cannot seize private property without legal cause—this must be voluntary" },
  { label: "Safety Planning", value: "Identify triggers and agree on plan to limit access to dangerous items" },
  { label: "Temporary", value: "This is a temporary measure during crisis—include plan for regaining access" },
];

const STORAGE_OPTIONS = [
  { option: "Unit Armory", description: "Temporary custody with formal receipt—most secure option" },
  { option: "Trusted Third Party", description: "Family member, friend, or neighbor stores firearms temporarily" },
  { option: "Trigger Locks", description: "Lock provided by command or purchased by Marine" },
  { option: "Commercial Storage", description: "Gun shop or shooting range that offers storage services" },
];

const CONVERSATION_ELEMENTS = [
  "Express genuine concern for the Marine's wellbeing",
  "Explain the concept of 'time and distance' without judgment",
  "Present options—don't demand or order compliance",
  "Discuss what items might be stored (firearms, ammunition, medications)",
  "Agree on storage location and method",
  "Establish clear plan for when/how access will be restored",
  "Document the conversation and agreement",
];

const PROCESS_STEPS = [
  "Recognition: Identify Marine in 'Red' risk status or period of acute crisis (e.g., first 48 hours post-breakup)",
  "The Conversation: Discuss benefits of temporary, voluntary storage of firearms with care and empathy",
  "Options: Present storage options—unit armory, trusted third party, trigger locks",
  "Execution: Facilitate chosen storage method with proper documentation",
  "Support: Ensure Marine has access to mental health resources and ongoing support",
  "Re-evaluation: Establish clear plan for when and how Marine will regain access once crisis has passed",
];

const HIGH_RISK_PERIODS = [
  "First 48-72 hours after relationship breakup",
  "Immediately following significant financial loss",
  "After receiving devastating news (death, diagnosis)",
  "During legal proceedings (divorce, custody, criminal)",
  "Following disciplinary action (NJP, relief)",
  "Transition periods (PCS, EAS, deployment return)",
];

const COMMON_ISSUES = [
  {
    issue: "Over-stepping",
    solution: "Commanders demanding a Marine surrender their weapons without a legal basis. This must be a voluntary, collaborative safety measure unless there is a formal MPO or legal seizure. Use persuasion, not orders.",
  },
  {
    issue: "No return plan",
    solution: "Storing firearms without a clear plan for when the Marine can retrieve them. Establish specific conditions or timeline for return at the outset.",
  },
  {
    issue: "Forgetting medications",
    solution: "Focusing only on firearms while ignoring stockpiled medications. Safety planning should address all potential lethal means.",
  },
];

export function LethalMeansSafetyContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ShieldAlert} title="Lethal Means Safety" variant="info">
          Lethal Means Safety is a <strong>voluntary process</strong> to reduce access to
          methods of self-harm during a period of high stress. For Marines, this most
          often involves the safe storage of privately owned firearms and ammunition.
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
            High-Risk Periods
          </h3>
          <ul className="mt-4 space-y-2">
            {HIGH_RISK_PERIODS.map((period) => (
              <li key={period} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                {period}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={Clock} title="Immediate Action" variant="warning">
          Access to lethal means should be addressed <strong>as soon as</strong> a
          high-risk indicator is identified. Don&apos;t wait for the next FPC.
        </InfoCard>
      </div>
    ),

    conversation: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            The Conversation
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Having this conversation requires empathy and tact. Include these elements:
          </p>
          <ul className="mt-4 space-y-2">
            {CONVERSATION_ELEMENTS.map((element) => (
              <li key={element} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {element}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Storage Options
          </h3>
          <div className="mt-4 space-y-3">
            {STORAGE_OPTIONS.map((opt) => (
              <div key={opt.option} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{opt.option}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{opt.description}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={MessageSquare} title="Approach with Care" variant="default">
          This conversation should be approached with <strong>genuine concern</strong>,
          not as an order or demand. The Marine is more likely to cooperate when they
          feel supported, not threatened.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Lethal Means Safety Process
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
            Documentation
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Record the conversation in CIRRAS</li>
            <li>&bull; If armory storage, use temporary custody receipt</li>
            <li>&bull; Document agreed-upon conditions for return</li>
            <li>&bull; Note any third-party storage arrangements</li>
            <li>&bull; Update at each FPC until items are returned</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Include Return Plan" variant="warning">
          Always establish a <strong>clear plan</strong> for when and how the Marine
          will regain access to their property once the crisis has passed. This is
          not permanent confiscation.
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
