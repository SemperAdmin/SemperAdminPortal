"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Users, AlertTriangle, Calendar, BookOpen } from "lucide-react";

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
  { id: "curriculum", label: "Curriculum" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Required Attendees", value: "CO, XO, and SgtMaj/SEA (Senior Enlisted Advisor)" },
  { label: "Curriculum", value: "Legal authorities, casualty affairs, family readiness, prohibited activities/conduct" },
  { label: "Standardization", value: "Facilitated by installation L.I.N.K.S. or Marine Corps Family Team Building (MCFTB) staff" },
  { label: "Documentation", value: "Completion is documented and filed for the Command Inspection Program (CIP)" },
];

const CURRICULUM_TOPICS = [
  { topic: "Legal Authorities", description: "Commander's authority under the UCMJ, NJP, and administrative actions" },
  { topic: "Casualty Affairs", description: "CACO procedures, notification requirements, and survivor support" },
  { topic: "Family Readiness", description: "UPFRP requirements, ombudsman/L.I.N.K.S. coordination" },
  { topic: "SAPR Program", description: "Reporting options, victim support, and command responsibilities" },
  { topic: "Equal Opportunity", description: "EO policy, complaint procedures, and climate assessment" },
  { topic: "Force Preservation", description: "Suicide prevention, CIRRAS, and high-risk Marine identification" },
  { topic: "Prohibited Activities", description: "Hazing, discrimination, fraternization, and political activity" },
];

const PROCESS_STEPS = [
  "XO or Adjutant coordinates with local installation training provider (L.I.N.K.S./MCFTB)",
  "Schedule training to accommodate all command team members",
  "Core command team (CO, XO, SgtMaj) attends facilitated sessions together",
  "Complete required blocks of instruction on all curriculum topics",
  "Obtain certificates of completion for each attendee",
  "File documentation for Command Inspection Program (CIP) compliance",
];

const COMMON_ISSUES = [
  {
    issue: "Staggered Arrivals",
    solution: "Difficulty in getting the entire team into one session due to different check-in dates. Consider scheduling multiple sessions or coordinate with the installation to offer flexible timing.",
  },
  {
    issue: "Treating it as a 'check-the-box' exercise",
    solution: "The command team must engage with the material and discuss how it applies to their specific unit. Use the training as a foundation for developing command philosophy.",
  },
  {
    issue: "Missing documentation",
    solution: "Ensure certificates are obtained and filed immediately. Missing CTT documentation is a common IG finding.",
  },
];

export function CommandTeamTrainingClimateContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="Command Team Training" variant="info">
          The Command Team Training (CTT) ensures that the Commander, Executive Officer,
          Sergeant Major, and other key staff are aligned on the legal and administrative
          requirements of their roles. It focuses on the integrated management of programs
          like SAPR, EO, and Force Preservation.
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

        <InfoCard icon={Calendar} title="30-Day Requirement" variant="warning">
          Command team members should complete CTT within <strong>30 days</strong> of
          assuming their respective positions.
        </InfoCard>
      </div>
    ),

    curriculum: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Training Curriculum
          </h2>
          <div className="mt-4 space-y-3">
            {CURRICULUM_TOPICS.map((item) => (
              <div key={item.topic} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.topic}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={BookOpen} title="Integrated Approach" variant="default">
          CTT emphasizes how programs like SAPR, EO, and Force Preservation are interconnected.
          The command team must understand how these programs support overall unit readiness.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CTT Completion Process
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
            Training Providers
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; L.I.N.K.S. (Lifestyle, Insights, Networking, Knowledge, Skills)</li>
            <li>&bull; Marine Corps Family Team Building (MCFTB)</li>
            <li>&bull; Installation Family Readiness Officers</li>
            <li>&bull; Higher HQ G-1/S-1 staff</li>
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
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
