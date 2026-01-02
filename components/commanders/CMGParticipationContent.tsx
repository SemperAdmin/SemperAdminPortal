"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UsersRound, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "members", label: "CMG Members" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Mandatory Attendance", value: "The victim's commander (O-5 level) is required to attend the CMG for cases involving their Marines" },
  { label: "Privacy", value: "Cases are discussed using Case Control Numbers (CCNs) to protect PII" },
  { label: "Outcome Focus", value: "The CMG identifies barriers to care, safety risks, and provides a venue for CO to hear from NCIS and SJA simultaneously" },
];

const CMG_MEMBERS = [
  { role: "SARC", responsibility: "Chairs the meeting and provides victim advocacy perspective" },
  { role: "SJA", responsibility: "Legal guidance on case progress and commander actions" },
  { role: "NCIS", responsibility: "Investigation status updates (without compromising investigation)" },
  { role: "Victim's Commander", responsibility: "Command actions, victim support, and safety measures" },
  { role: "Victim Advocate", responsibility: "Direct victim support and needs assessment" },
  { role: "Medical Representative", responsibility: "Healthcare status and referrals as appropriate" },
];

const PROCESS_STEPS = [
  "Notification: SARC notifies the commander of scheduled CMG meeting",
  "Preparation: Commander reviews current status of any pending command actions",
  "Attendance: Commander attends CMG at the O-5 level (or designated representative)",
  "Reporting: Commander provides updates on victim support measures and unit climate",
  "Action Items: Commander takes assigned actions to address barriers to care",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "CMG meets at least once every 30 days for each open Unrestricted case" },
  { requirement: "As Needed", action: "Additional meetings for urgent safety concerns" },
];

const COMMON_ISSUES = [
  { issue: "Non-Attendance", solution: "Commander fails to attend CMG meetings. This is a mandatory requirement—send a designated representative only when absolutely necessary." },
  { issue: "Seeking Case Details", solution: "Pressing for investigation details that should remain confidential. Trust the process—NCIS will share appropriate information." },
];

export function CMGParticipationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UsersRound} title="Case Management Group (CMG)" variant="info">
          The Case Management Group (CMG) is the formal oversight body for all Unrestricted sexual assault cases. It ensures that the victim is receiving required services and that the investigation is proceeding without command interference.
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
            <Clock className="h-5 w-5" />Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
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
      </div>
    ),
    members: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CMG Members</h2>
          <div className="mt-4 space-y-3">
            {CMG_MEMBERS.map((member) => (
              <div key={member.role} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{member.role}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{member.responsibility}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Shield} title="PII Protection" variant="default">
          Cases are discussed using <strong>Case Control Numbers (CCNs)</strong> rather than names to protect victim privacy during CMG discussions.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CMG Participation Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander&apos;s Role at CMG</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Report on victim support measures implemented</li>
            <li>&bull; Provide unit climate assessment related to case</li>
            <li>&bull; Identify any barriers to victim care or safety</li>
            <li>&bull; Receive guidance on appropriate command actions</li>
            <li>&bull; Coordinate with NCIS and SJA on case timeline</li>
          </ul>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={AlertTriangle} title="Mandatory Attendance" variant="warning">
          CMG attendance is <strong>required</strong> for commanders with Marines involved in Unrestricted cases. Only send a designated representative when absolutely unavoidable.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
