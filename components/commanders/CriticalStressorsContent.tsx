"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { AlertTriangle, Clock, Heart, DollarSign } from "lucide-react";

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
  { id: "matrix", label: "Stressor Matrix" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "The 'First 90 Days'", value: "Period following significant disciplinary action (like NJP) or legal trouble is the highest-risk window" },
  { label: "Relationship Distress", value: "Divorce, breakups, or family deaths are primary drivers of emotional crises" },
  { label: "Financial Strain", value: "Heavy debt or inability to provide for family can lead to a sense of hopelessness" },
  { label: "Combined Stressors", value: "Multiple simultaneous stressors multiply risk exponentially" },
];

const STRESSOR_MATRIX = [
  { type: "Legal/Disciplinary", window: "0–90 Days post-event", action: "Increased check-ins; peer buddy assigned" },
  { type: "Relationship Loss", window: "Immediate (72 hours)", action: "Chaplain/MFLC referral; safety planning" },
  { type: "Transition (PCS/EAS)", window: "30 Days before/after", action: "Warm handoff via CIRRAS" },
  { type: "Medical/Chronic Pain", window: "Ongoing", action: "Medical Officer liaison and light duty monitoring" },
  { type: "Financial Crisis", window: "Ongoing until resolved", action: "PFM referral; command financial assistance" },
  { type: "Death in Family", window: "30–90 days", action: "Chaplain support; emergency leave; grief counseling" },
];

const PROCESS_STEPS = [
  "Identification: Leaders at all levels identify a Marine experiencing a stressor",
  "Assessment: Use the Force Preservation Council to determine the 'Risk Tier' (Green, Amber, Red)",
  "Mitigation: Implement a specific support plan (counseling, financial classes, Chaplain support)",
  "Monitoring: Continue to track the Marine until the acute phase of the stressor has passed",
  "Follow-up: Document in CIRRAS and review at subsequent FPCs",
];

const STRESSOR_CATEGORIES = [
  {
    category: "Legal/Disciplinary",
    icon: "⚖️",
    examples: ["NJP", "Court-Martial", "Article 15", "Page 11", "Relief for Cause"],
    notes: "First 90 days post-action is highest risk period",
  },
  {
    category: "Relationship",
    icon: "💔",
    examples: ["Divorce", "Breakup", "Custody battle", "Infidelity discovery", "Separation"],
    notes: "First 72 hours are critical—immediate support needed",
  },
  {
    category: "Financial",
    icon: "💰",
    examples: ["Bankruptcy", "Garnishment", "Debt collection", "Failed security clearance", "Pay issues"],
    notes: "Can compound other stressors significantly",
  },
  {
    category: "Loss/Grief",
    icon: "🖤",
    examples: ["Death of parent", "Death of child", "Death of spouse", "Suicide of friend", "Combat loss"],
    notes: "May resurface around anniversaries",
  },
  {
    category: "Career/Performance",
    icon: "📉",
    examples: ["Passed over for promotion", "Adverse fitrep", "MOS disqualification", "Failing PFT/CFT"],
    notes: "Can trigger identity crisis for career-focused Marines",
  },
];

const COMMON_ISSUES = [
  {
    issue: "The 'Double Whammy'",
    solution: "Failing to recognize that a Marine facing NJP (Legal) is often simultaneously facing a breakup (Relationship). Combined stressors multiply risk exponentially. Always ask: 'What else is going on?'",
  },
  {
    issue: "Delayed Recognition",
    solution: "Waiting until a Marine is in crisis to act. The point of identifying stressors is early intervention—within 24 hours of recognition, a conversation should occur.",
  },
  {
    issue: "Assuming Resolution",
    solution: "Assuming a stressor is 'resolved' because time has passed. Continue monitoring through the full risk window, especially for legal/disciplinary actions (90 days).",
  },
];

export function CriticalStressorsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={AlertTriangle} title="Critical Stressors" variant="warning">
          Certain events, known as &quot;Critical Stressors,&quot; are statistically linked to an
          increased risk of suicide or self-harm. Identifying these moments allows a command
          to provide <strong>&quot;intrusive leadership&quot;</strong> and extra support when a Marine
          is most vulnerable.
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

        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard icon={Clock} title="First 90 Days" variant="default">
            The period following NJP or legal trouble is the <strong>highest-risk window</strong>.
          </InfoCard>
          <InfoCard icon={Heart} title="Relationship Loss" variant="default">
            Divorce and breakups are <strong>primary drivers</strong> of emotional crises.
          </InfoCard>
          <InfoCard icon={DollarSign} title="Financial Strain" variant="default">
            Debt and inability to provide can lead to <strong>hopelessness</strong>.
          </InfoCard>
        </div>
      </div>
    ),

    matrix: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Critical Stressor Matrix
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Event Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Risk Window</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Command Action</th>
                </tr>
              </thead>
              <tbody>
                {STRESSOR_MATRIX.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.window}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Stressor Categories
          </h3>
          <div className="mt-4 space-y-4">
            {STRESSOR_CATEGORIES.map((cat) => (
              <div key={cat.category} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{cat.icon}</span>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{cat.category}</h4>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {ex}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm italic text-zinc-500 dark:text-zinc-400">{cat.notes}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Response Process
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
            Timeline Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Immediate:</strong> Recognition of a stressor should trigger a conversation with the Marine within 24 hours</li>
            <li>&bull; <strong>Ongoing:</strong> Monitor through the full risk window for the stressor type</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="24-Hour Response" variant="warning">
          When a critical stressor is identified, initiate a supportive conversation with
          the Marine <strong>within 24 hours</strong>. Early intervention is key.
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
