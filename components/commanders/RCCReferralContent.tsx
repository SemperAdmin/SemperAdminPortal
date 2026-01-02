"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { HeartHandshake, AlertTriangle, FileText, Users } from "lucide-react";

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
  { id: "services", label: "RCC Services" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "WWR Integration", value: "RCC is often a civilian professional assigned by the Wounded Warrior Regiment" },
  { label: "CRP", value: "Helps Marine and family develop a Comprehensive Recovery Plan covering medical, financial, and career goals" },
  { label: "Referral Scope", value: "Commanders should refer any Marine with a life-altering injury or chronic condition" },
  { label: "Duration", value: "Support remains in place as long as Marine is in medical hold or undergoing PEB process" },
];

const RCC_SERVICES = [
  "Non-medical case management for Marines with complex WII",
  "Development of Comprehensive Recovery Plan (CRP)",
  "Coordination between medical, administrative, and family support resources",
  "Attendance at medical boards and FPCs",
  "Connection to adaptive sports and recreation programs",
  "Career transition planning and VA coordination",
  "Family caregiver support and resources",
  "Financial counseling and benefits coordination",
];

const CRP_COMPONENTS = [
  { area: "Medical Goals", description: "Recovery milestones, treatment plan, rehabilitation objectives" },
  { area: "Financial Goals", description: "Benefits enrollment, TSGLI, PAC, debt management" },
  { area: "Career Goals", description: "Return to duty, MOS reclassification, or transition planning" },
  { area: "Education Goals", description: "Vocational training, degree programs, credentialing" },
  { area: "Family Goals", description: "Caregiver support, dependent care, housing stability" },
];

const PROCESS_STEPS = [
  "Referral: Command notifies the WWR of a Marine in need of specialized support",
  "Intake: RCC meets with the Marine and command to assess needs",
  "Plan Development: A CRP is created identifying necessary resources (e.g., TSGLI, adaptive housing)",
  "Execution: RCC coordinates with all stakeholders to execute the plan",
  "Monitoring: RCC attends medical boards and FPCs to provide updates on recovery status",
  "Transition: RCC supports Marine through discharge process or return to duty",
];

const REFERRAL_CRITERIA = [
  "Life-altering combat injuries",
  "Serious non-combat injuries (e.g., training accidents, MVAs)",
  "Chronic illnesses requiring extended treatment",
  "PTSD or TBI requiring comprehensive support",
  "Any condition likely to result in a Medical Evaluation Board (MEB)",
  "Marines with complex family situations requiring additional support",
];

const COMMON_ISSUES = [
  {
    issue: "Under-utilization",
    solution: "Only referring 'combat wounded' Marines. The WWR and RCCs support any Marine with a serious, non-combat-related illness or injury as well. Refer early and often.",
  },
  {
    issue: "Late Referrals",
    solution: "Waiting until the Marine is deep into the MEB process to involve the RCC. Early referral allows for better planning and smoother transitions.",
  },
  {
    issue: "Command Disconnect",
    solution: "Failing to include the RCC in FPCs and command meetings. The RCC is a critical member of the recovery team and needs visibility into command decisions.",
  },
];

export function RCCReferralContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={HeartHandshake} title="Recovery Care Coordinator (RCC)" variant="info">
          For Marines with complex wounds, illnesses, or injuries (WII), the Recovery Care
          Coordinator provides non-medical case management. They work with the Wounded Warrior
          Regiment (WWR) to ensure a seamless transition back to duty or to civilian life.
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

        <InfoCard icon={AlertTriangle} title="Refer Early" variant="warning">
          Don&apos;t wait until the Marine is deep into the MEB process. Early referral to
          the WWR allows for better planning and smoother transitions.
        </InfoCard>
      </div>
    ),

    services: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            RCC Services
          </h2>
          <ul className="mt-4 space-y-2">
            {RCC_SERVICES.map((service) => (
              <li key={service} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {service}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <FileText className="h-5 w-5" />
            Comprehensive Recovery Plan (CRP) Components
          </h3>
          <div className="mt-4 space-y-3">
            {CRP_COMPONENTS.map((item) => (
              <div key={item.area} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.area}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Users className="h-5 w-5" />
            Referral Criteria
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {REFERRAL_CRITERIA.map((criteria) => (
              <li key={criteria} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                {criteria}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            RCC Referral Process
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

        <InfoCard icon={HeartHandshake} title="Wounded Warrior Regiment Contact" variant="default">
          To refer a Marine, contact the Wounded Warrior Regiment at <strong>(877) 487-6299</strong>
          or visit the WWR website. Early referral is encouraged.
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
