"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Users, AlertTriangle, Shield, BarChart3 } from "lucide-react";

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
  { id: "structure", label: "Council Structure" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Individual Focus", value: "Every Marine in the unit must be reviewed and categorized into a risk tier (Green, Amber, or Red)" },
  { label: "Multi-Disciplinary", value: "Requires input from the entire 'Small Staff' and medical/spiritual providers" },
  { label: "Confidentiality", value: "Information shared is sensitive—intended for force preservation, not disciplinary 'gossip'" },
  { label: "Proactive", value: "Data-driven meeting designed to identify struggling Marines before crisis occurs" },
];

const RISK_TIERS = [
  { tier: "Green", description: "Low risk—no significant stressors identified", action: "Standard leadership engagement" },
  { tier: "Amber", description: "Elevated risk—one or more stressors present", action: "Increased check-ins; resource referral" },
  { tier: "Red", description: "High risk—immediate concern for wellbeing", action: "Active mitigation; daily monitoring" },
];

const COUNCIL_MEMBERS = [
  { role: "Commanding Officer", function: "Chairs the FPC; final authority on mitigation strategies" },
  { role: "Executive Officer", function: "Tracks action items and ensures follow-through" },
  { role: "Sergeant Major", function: "Provides SNCO perspective on enlisted Marines" },
  { role: "Chaplain", function: "Spiritual advisor; resource for confidential counseling" },
  { role: "Medical Officer/Corpsman", function: "Medical perspective on health-related stressors" },
  { role: "SARC", function: "Input on sexual assault survivors and related cases" },
  { role: "SACO", function: "Substance abuse perspective and treatment options" },
  { role: "SPPO", function: "Suicide prevention resources and training status" },
];

const PROCESS_STEPS = [
  "Data Collection: Subordinate leaders gather data on their Marines using CIRRAS or unit-specific tracking sheets",
  "The Council: CO chairs meeting with XO, SgtMaj, Chaplain, Medical Officer, SARC, and SACO",
  "Roster Review: Every Marine is reviewed; those showing stressors are categorized into risk tiers",
  "Triage: Marines in 'Amber' or 'Red' status are assigned specific mitigation strategies",
  "Follow-up: Previous risk cases are reviewed to assess if mitigation was successful",
  "Documentation: Update CIRRAS and track mitigation strategies for next FPC",
];

const MITIGATION_STRATEGIES = [
  { strategy: "Peer Buddy Assignment", description: "Pair at-risk Marine with trusted peer for daily check-ins" },
  { strategy: "MFLC Referral", description: "Non-medical counseling for situational stress" },
  { strategy: "Chaplain Engagement", description: "Spiritual support and confidential counseling" },
  { strategy: "Financial Counseling", description: "PFM or command financial specialist referral" },
  { strategy: "Medical Referral", description: "Behavioral health or medical evaluation as needed" },
  { strategy: "Leadership Engagement", description: "Increased check-ins from NCO chain" },
  { strategy: "Lethal Means Safety", description: "Voluntary firearm storage discussion" },
];

const COMMON_ISSUES = [
  {
    issue: "Check-the-Box Mentality",
    solution: "Rushing through the roster without meaningful discussion. A good FPC focuses on the 'why' behind a Marine's behavior, not just checking names off a list.",
  },
  {
    issue: "Missing Key Players",
    solution: "Conducting an FPC without the Chaplain or Medical Officer present limits the resources available to the Commander. All key members must attend.",
  },
  {
    issue: "Gossip vs. Force Preservation",
    solution: "FPC information is for force preservation, not gossip. Emphasize confidentiality and the protective purpose of the discussion.",
  },
];

export function ForcePreservationCouncilContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="Force Preservation Council (FPC)" variant="info">
          The FPC is the commander&apos;s primary forum for assessing the risk levels of
          individual Marines. It is a <strong>proactive, data-driven meeting</strong> designed
          to identify Marines who are struggling with stressors and to assign resources to
          mitigate that risk before it leads to a crisis.
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
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Risk Tiers
          </h2>
          <div className="mt-4 space-y-3">
            {RISK_TIERS.map((tier) => (
              <div
                key={tier.tier}
                className={`rounded-lg p-4 ${
                  tier.tier === "Green"
                    ? "bg-green-50 dark:bg-green-900/20"
                    : tier.tier === "Amber"
                    ? "bg-amber-50 dark:bg-amber-900/20"
                    : "bg-red-50 dark:bg-red-900/20"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${
                      tier.tier === "Green"
                        ? "bg-green-500"
                        : tier.tier === "Amber"
                        ? "bg-amber-500"
                        : "bg-red-500"
                    }`}
                  >
                    {tier.tier[0]}
                  </span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{tier.tier}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{tier.description}</p>
                <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">Action: {tier.action}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    structure: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Council Members
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Role</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Function</th>
                </tr>
              </thead>
              <tbody>
                {COUNCIL_MEMBERS.map((member) => (
                  <tr key={member.role} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{member.role}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{member.function}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Mitigation Strategies
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {MITIGATION_STRATEGIES.map((item) => (
              <div key={item.strategy} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.strategy}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Shield} title="Confidentiality" variant="warning">
          Information shared in the FPC is <strong>sensitive</strong>. It is intended for
          force preservation, not for disciplinary or administrative purposes. Emphasize
          the protective nature of the discussion.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FPC Process
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
            <li>&bull; <strong>Monthly:</strong> FPCs must be conducted at least once per month for all units</li>
            <li>&bull; <strong>Quarterly:</strong> Higher-level HQs must review the FPC process of subordinate commands</li>
          </ul>
        </section>

        <InfoCard icon={BarChart3} title="Data-Driven Decisions" variant="default">
          Use CIRRAS data and subordinate leader input to ensure the FPC discussion is
          grounded in facts, not assumptions. Track mitigation effectiveness over time.
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
