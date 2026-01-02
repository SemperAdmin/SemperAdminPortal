"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UserCheck, AlertTriangle, Clock, MessageSquare } from "lucide-react";

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
  { id: "responsibilities", label: "Responsibilities" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Direct Access", value: "DRC/URC has direct access to the Commander for family readiness matters" },
  { label: "Non-Clinical", value: "Provides information and referrals (I&R) but not clinical counseling or legal advice" },
  { label: "Official Communication", value: "Authorized managers of unit's mass communication tools and official family social media" },
  { label: "Training Required", value: "Must complete HQMC-standardized readiness coordinator training within 45 days" },
];

const DRC_RESPONSIBILITIES = [
  "Serve as the professional link between command and unit families",
  "Manage the unit's mass communication tools (newsletters, email lists)",
  "Maintain official unit family social media pages",
  "Provide information and referrals to appropriate resources",
  "Attend all Family Planning Councils (FPCs) and planning briefs",
  "Coordinate family events and outreach activities",
  "Maintain the family contact database (with Privacy Act compliance)",
  "Brief the command on family readiness status",
];

const PROCESS_STEPS = [
  "Appointment: CO appoints a qualified civilian (DRC) or Marine (URC) in writing",
  "Training: Appointee must complete HQMC-standardized readiness coordinator training",
  "Integration: DRC/URC is integrated into the staff and attends all FPCs and planning briefs",
  "Outreach: Proactive communication is maintained with families through authorized channels",
];

const COMMON_ISSUES = [
  {
    issue: "Privacy Violations",
    solution: "Improperly handling PII from the family database. The DRC/URC must be well-versed in Privacy Act requirements. Use only authorized communication channels and protect family contact information.",
  },
  {
    issue: "Scope Creep",
    solution: "DRC/URC attempting to provide clinical counseling or legal advice. They are I&R specialists only—they connect families to resources, not provide the services themselves.",
  },
  {
    issue: "Isolation from Staff",
    solution: "DRC/URC operating in a vacuum without staff integration. Ensure they attend planning meetings and have access to deployment schedules and unit information.",
  },
];

export function DRCOversightContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UserCheck} title="Deployment Readiness Coordinator" variant="info">
          The DRC (at the O-5 level and above) or Uniformed Readiness Coordinator (URC) is
          the professional link between the command and unit families. They ensure families
          have the information and resources necessary to remain resilient during all phases
          of the deployment cycle.
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

        <InfoCard icon={Clock} title="45-Day Training Requirement" variant="warning">
          The URC must complete the required training curriculum within <strong>45 days</strong>
          of appointment.
        </InfoCard>
      </div>
    ),

    responsibilities: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DRC/URC Responsibilities
          </h2>
          <ul className="mt-4 space-y-2">
            {DRC_RESPONSIBILITIES.map((resp) => (
              <li key={resp} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {resp}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={MessageSquare} title="Information & Referral" variant="default">
          The DRC/URC provides <strong>Information and Referrals (I&R)</strong> only.
          They connect families to resources—they do not provide clinical counseling,
          legal advice, or financial planning services directly.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Referral Resources
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Military OneSource (1-800-342-9647)</li>
            <li>&bull; Marine Corps Family Team Building (MCFTB)</li>
            <li>&bull; Military & Family Life Counseling (MFLC)</li>
            <li>&bull; Fleet & Family Support Center</li>
            <li>&bull; Legal Assistance Office</li>
            <li>&bull; Personal Financial Management Program</li>
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Appointment & Integration Process
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
            Appointment Letter Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Use NAVMC 11654 template</li>
            <li>&bull; Specify duties and responsibilities</li>
            <li>&bull; Include training completion requirements</li>
            <li>&bull; Define reporting relationships</li>
            <li>&bull; Signed by the Commanding Officer</li>
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
