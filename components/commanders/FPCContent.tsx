"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Users, AlertTriangle, Shield, Calendar } from "lucide-react";

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
  { id: "tiers", label: "Risk Tiers" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Individual Focus", value: "Every Marine must be reviewed and categorized into a risk tier (Green, Amber, Red)" },
  { label: "Multi-Disciplinary", value: "Requires input from entire Small Staff and medical/spiritual providers" },
  { label: "Confidentiality", value: "Information shared is sensitive—for force preservation, not disciplinary gossip" },
  { label: "Proactive", value: "Data-driven meeting to identify struggling Marines before crisis occurs" },
];

const RISK_TIERS = [
  {
    tier: "Green",
    description: "Low risk - No significant stressors identified",
    indicators: ["Stable personal life", "Good performance", "Engaged with unit", "No concerning behaviors"],
    action: "Continue routine leadership engagement",
  },
  {
    tier: "Amber",
    description: "Moderate risk - Stressors present that require monitoring",
    indicators: ["Recent life changes (divorce, financial issues)", "Performance decline", "Isolation from peers", "Minor disciplinary issues"],
    action: "Assign specific mitigation strategies, increased leadership contact",
  },
  {
    tier: "Red",
    description: "High risk - Immediate intervention required",
    indicators: ["Suicidal ideation", "Recent attempt or crisis", "Multiple compounding stressors", "Substance abuse"],
    action: "Immediate referral, buddy watch, lethal means safety discussion",
  },
];

const FPC_ATTENDEES = [
  { role: "Commanding Officer", responsibility: "Chairs the meeting, makes final decisions on mitigation" },
  { role: "Executive Officer", responsibility: "Coordinates staff input, tracks action items" },
  { role: "Sergeant Major", responsibility: "Provides enlisted perspective, drives NCO engagement" },
  { role: "Chaplain", responsibility: "Spiritual support resources, confidential counseling option" },
  { role: "Medical Officer", responsibility: "Clinical resources, medical referral options" },
  { role: "SARC/SACO", responsibility: "SAPR and substance abuse resources" },
];

const PROCESS_STEPS = [
  "Data Collection: Subordinate leaders gather data on Marines using CIRRAS or unit tracking sheets",
  "Pre-Meeting: XO consolidates inputs and prepares roster for discussion",
  "The Council: CO chairs with XO, SgtMaj, Chaplain, Medical Officer, and SARC/SACO",
  "Triage: Each Marine discussed; Amber/Red status Marines assigned specific mitigation strategies",
  "Documentation: Record decisions and assigned resources in CIRRAS",
  "Follow-up: Review previous risk cases to assess mitigation effectiveness",
];

const COMMON_ISSUES = [
  {
    issue: "'Check-the-box' mentality",
    solution: "Rushing through the roster without meaningful discussion. A good FPC focuses on the 'why' behind a Marine's behavior, not just checking names off a list.",
  },
  {
    issue: "Missing key players",
    solution: "Conducting an FPC without the Chaplain or Medical Officer present limits the resources available to the Commander. Ensure all required members attend.",
  },
  {
    issue: "Information leaks",
    solution: "FPC discussions becoming unit gossip. Reinforce that information shared is sensitive and strictly for force preservation purposes only.",
  },
];

export function FPCContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="Force Preservation Council (FPC)" variant="info">
          The FPC is the commander&apos;s primary forum for assessing the <strong>risk levels
          of individual Marines</strong>. It is a proactive, data-driven meeting designed to
          identify Marines who are struggling with stressors and assign resources to mitigate
          that risk before it leads to a crisis.
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
            Required Attendees
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Role</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Responsibility</th>
                </tr>
              </thead>
              <tbody>
                {FPC_ATTENDEES.map((attendee) => (
                  <tr key={attendee.role} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{attendee.role}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{attendee.responsibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Calendar} title="Monthly Requirement" variant="warning">
          FPCs must be conducted at least <strong>once per month</strong> for all units.
          Higher-level HQs must review subordinate command FPC processes quarterly.
        </InfoCard>
      </div>
    ),

    tiers: (
      <div className="space-y-6">
        {RISK_TIERS.map((tier) => (
          <section
            key={tier.tier}
            className={`rounded-xl border p-6 shadow-sm ${
              tier.tier === "Green"
                ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                : tier.tier === "Amber"
                ? "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20"
                : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
            }`}
          >
            <h2
              className={`text-xl font-semibold ${
                tier.tier === "Green"
                  ? "text-green-800 dark:text-green-200"
                  : tier.tier === "Amber"
                  ? "text-amber-800 dark:text-amber-200"
                  : "text-red-800 dark:text-red-200"
              }`}
            >
              {tier.tier} - {tier.description}
            </h2>
            <div className="mt-4 space-y-3">
              <div>
                <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Indicators:</h4>
                <ul className="mt-2 space-y-1">
                  {tier.indicators.map((indicator) => (
                    <li key={indicator} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          tier.tier === "Green"
                            ? "bg-green-500"
                            : tier.tier === "Amber"
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                      />
                      {indicator}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-white/50 p-3 dark:bg-black/20">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Action:</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{tier.action}</p>
              </div>
            </div>
          </section>
        ))}

        <InfoCard icon={Shield} title="Every Marine Reviewed" variant="default">
          Every Marine in the unit must be reviewed and categorized into a risk tier.
          This is not just for &quot;problem Marines&quot;—even high performers may be
          facing hidden stressors.
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
            Mitigation Strategies
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Referral to MFLC (Military and Family Life Counselor)</li>
            <li>&bull; Buddy watch assignment</li>
            <li>&bull; Chaplain engagement</li>
            <li>&bull; Medical/mental health referral</li>
            <li>&bull; Increased leadership contact</li>
            <li>&bull; Financial counseling referral</li>
            <li>&bull; Lethal means safety discussion</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Follow-Up Required" variant="warning">
          Previous risk cases must be reviewed at each FPC to assess whether mitigation
          strategies were effective. Don&apos;t assume a Marine is &quot;fixed&quot; after one intervention.
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
