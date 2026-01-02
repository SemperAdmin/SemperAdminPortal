"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Brain, Users, AlertTriangle, Activity } from "lucide-react";

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
  { id: "continuum", label: "Stress Continuum" },
  { id: "oscar", label: "OSCAR Teams" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "OSCAR Teams", value: "Select Marines, Sailors (Corpsmen), and Medical/Religious personnel trained to identify and manage stress reactions early" },
  { label: "Stress Continuum", value: "Color-coded model (Green-Ready, Yellow-Reacting, Orange-Injured, Red-Ill) to describe a Marine's mental state" },
  { label: "Peer-Led", value: "Strength of OSCAR is that it relies on peers and immediate supervisors to recognize changes in behavior" },
  { label: "Prevention Focus", value: "Designed to identify and address stress reactions before they become clinical issues" },
];

const STRESS_CONTINUUM = [
  {
    zone: "Green (Ready)",
    color: "green",
    indicators: ["Calm and steady", "In control", "Sleeping well", "Physically healthy", "Socially active"],
    action: "Maintain—standard leadership engagement",
  },
  {
    zone: "Yellow (Reacting)",
    color: "amber",
    indicators: ["Nervous or irritable", "Trouble sleeping", "Low energy", "Muscle tension", "Social withdrawal beginning"],
    action: "Support—peer check-ins, MFLC referral option",
  },
  {
    zone: "Orange (Injured)",
    color: "orange",
    indicators: ["Excessive anxiety/guilt/anger", "Persistent sleep problems", "Fatigue affecting duty", "Physical symptoms", "Avoiding people/places"],
    action: "Rest & Restore—active intervention, leader engagement, possible light duty",
  },
  {
    zone: "Red (Ill)",
    color: "red",
    indicators: ["Panic attacks", "Uncontrolled rage", "Inability to function", "Self-medication", "Complete isolation", "Suicidal thoughts"],
    action: "Medical Referral—immediate behavioral health intervention required",
  },
];

const OSCAR_COMPOSITION = [
  { role: "OSCAR Team Lead", description: "Senior leader who coordinates the team and liaises with command" },
  { role: "Peer Support Marines", description: "Trained Marines who monitor peers and provide initial support" },
  { role: "Corpsman", description: "Medical perspective and triage capability" },
  { role: "Chaplain/RP", description: "Spiritual support and privileged communication option" },
];

const OSCAR_ACTIVITIES = [
  "Monitor peers for changes in behavior during high-stress periods",
  "Provide 'psychological first aid' to stressed Marines",
  "Facilitate peer-to-peer support conversations",
  "Identify Marines who may need additional resources",
  "Support unit reintegration following deployment",
  "Conduct stress inoculation training before high-stress events",
  "Brief leadership on unit stress trends",
];

const PROCESS_STEPS = [
  "Team Formation: CO appoints an OSCAR team (usually 5% of the unit's strength)",
  "Training: Team members attend the OSCAR training course",
  "Integration: OSCAR team is introduced to the unit and their role explained",
  "Deployment/Execution: During high-stress periods, OSCAR members monitor peers",
  "Intervention: Provide psychological first aid and refer to appropriate resources",
  "Reintegration: OSCAR teams play vital role in Warrior Transition process post-deployment",
];

const COMMON_ISSUES = [
  {
    issue: "Stigmatizing 'Orange' Status",
    solution: "Treating a Marine in the 'Injured' category as a malingerer rather than someone needing temporary 'rest and restoration.' Orange zone Marines are not broken—they need recovery time to return to Green.",
  },
  {
    issue: "OSCAR as Collateral Duty",
    solution: "Treating OSCAR as just another collateral duty instead of an embedded capability. OSCAR members should be integrated into daily unit activities, not just activated during deployments.",
  },
  {
    issue: "Lack of Refresher Training",
    solution: "OSCAR team members should receive annual refresher training or participate in unit drills to maintain skills and knowledge of available resources.",
  },
];

export function COSCOscarContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Brain} title="COSC / OSCAR" variant="info">
          Combat and Operational Stress Control (COSC) is a program designed to maintain
          the <strong>psychological readiness</strong> of the force. It is executed at the
          unit level through the Operational Stress Control and Readiness (OSCAR) program.
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

        <InfoCard icon={Users} title="Peer-Led Model" variant="default">
          The strength of OSCAR is that it relies on <strong>peers and immediate supervisors</strong>
          to recognize changes in behavior before they become clinical issues. Marines are
          more likely to open up to trusted peers.
        </InfoCard>
      </div>
    ),

    continuum: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Stress Continuum Model
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The color-coded stress continuum helps identify where a Marine is mentally and what support they need.
          </p>
          <div className="mt-6 space-y-4">
            {STRESS_CONTINUUM.map((zone) => (
              <div
                key={zone.zone}
                className={`rounded-lg p-4 ${
                  zone.color === "green"
                    ? "bg-green-50 border-l-4 border-green-500 dark:bg-green-900/20"
                    : zone.color === "amber"
                    ? "bg-amber-50 border-l-4 border-amber-500 dark:bg-amber-900/20"
                    : zone.color === "orange"
                    ? "bg-orange-50 border-l-4 border-orange-500 dark:bg-orange-900/20"
                    : "bg-red-50 border-l-4 border-red-500 dark:bg-red-900/20"
                }`}
              >
                <h3 className={`font-semibold ${
                  zone.color === "green"
                    ? "text-green-800 dark:text-green-200"
                    : zone.color === "amber"
                    ? "text-amber-800 dark:text-amber-200"
                    : zone.color === "orange"
                    ? "text-orange-800 dark:text-orange-200"
                    : "text-red-800 dark:text-red-200"
                }`}>
                  {zone.zone}
                </h3>
                <div className="mt-2">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Indicators:</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {zone.indicators.map((ind) => (
                      <span key={ind} className="rounded-full bg-white/50 px-2 py-0.5 text-xs text-zinc-700 dark:bg-black/20 dark:text-zinc-300">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  <strong>Action:</strong> {zone.action}
                </p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Activity} title="Movement Through the Continuum" variant="default">
          Marines can move in <strong>both directions</strong> on the continuum. The goal
          is to identify when someone is moving toward Orange/Red and intervene to help
          them return to Green.
        </InfoCard>
      </div>
    ),

    oscar: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OSCAR Team Composition
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Role</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {OSCAR_COMPOSITION.map((item) => (
                  <tr key={item.role} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.role}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OSCAR Activities
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {OSCAR_ACTIVITIES.map((activity) => (
              <li key={activity} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)]" />
                {activity}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Implementation Process
          </h3>
          <div className="mt-4 space-y-3">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Annual:</strong> OSCAR team members should receive refresher training or participate in unit drills</li>
            <li>&bull; <strong>5% Strength:</strong> OSCAR team size typically 5% of unit strength</li>
          </ul>
        </section>
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

        <InfoCard icon={AlertTriangle} title="Orange ≠ Broken" variant="warning">
          Marines in the &quot;Orange&quot; (Injured) zone are <strong>not broken or malingering</strong>.
          They need temporary &quot;rest and restoration&quot; to return to full readiness.
          Treat them with support, not skepticism.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
