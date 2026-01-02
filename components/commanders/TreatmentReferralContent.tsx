"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Heart, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "levels", label: "Levels of Care" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "SACC", value: "Substance Abuse Counseling Center is the primary resource for screening and treatment" },
  { label: "Self-Referral", value: "Marines seeking help before being caught may have different career implications" },
  { label: "SACO Role", value: "Unit SACO acts as liaison between command and SACC clinicians" },
  { label: "Command Support", value: "CO must ensure Marine is available to attend all scheduled appointments" },
];

const LEVELS_OF_CARE = [
  {
    level: "Impact (Educational)",
    description: "Short-term educational program for first-time, low-risk individuals",
    duration: "Typically 4-8 hours",
    criteria: "Low-risk assessment, first-time incident",
  },
  {
    level: "Outpatient Treatment",
    description: "Regular counseling sessions while Marine remains on duty",
    duration: "Varies based on assessment",
    criteria: "Moderate risk, can maintain duty performance",
  },
  {
    level: "Intensive Outpatient",
    description: "More frequent sessions requiring significant time commitment",
    duration: "Multiple sessions per week",
    criteria: "Higher risk, requires more structured support",
  },
  {
    level: "Inpatient Treatment",
    description: "Residential treatment at specialized facility",
    duration: "30+ days typically",
    criteria: "High risk, requires 24/7 supervision and support",
  },
];

const PROCESS_STEPS = [
  "Scheduling: Marine scheduled for SACC screening within 48 hours of positive test or incident",
  "Screening: SACC conducts clinical assessment to determine level of care needed",
  "Level Determination: SACC determines if Marine needs Impact, outpatient, or inpatient treatment",
  "Command Coordination: SACC notifies SACO of treatment plan and schedule",
  "Command Support: CO ensures Marine is available to attend all scheduled appointments",
  "Completion: SACC provides completion report to command upon Marine's program completion",
];

const COMMAND_RESPONSIBILITIES = [
  "Ensure Marine is available for all treatment appointments",
  "Do not schedule conflicting duties during treatment times",
  "Maintain communication with SACO on Marine's progress",
  "Document any missed appointments",
  "Support reintegration after treatment completion",
];

const SELF_REFERRAL_INFO = [
  "Marine seeks help before testing positive or being caught",
  "May receive treatment without automatic separation",
  "Requires Marine to enroll and participate in treatment program",
  "Must not have pending investigation or positive test",
  "Career implications vary based on circumstances",
];

const COMMON_ISSUES = [
  {
    issue: "Missed appointments",
    solution: "If a Marine misses treatment, the CO must document it, as this constitutes a 'Treatment Failure' and is a separate basis for ADSEP. Track attendance closely.",
  },
  {
    issue: "Conflicting duty schedules",
    solution: "Scheduling the Marine for duty during treatment sessions. Treatment appointments take priority—coordinate with SACC on scheduling.",
  },
  {
    issue: "Lack of follow-through",
    solution: "Not tracking whether the Marine actually completed the program. Require completion documentation from SACC before considering treatment successful.",
  },
];

export function TreatmentReferralContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Heart} title="Treatment Referral" variant="info">
          While the Marine Corps may be separating a Marine for drug use, the Commander
          still has a responsibility to ensure the individual receives appropriate
          <strong> medical and clinical evaluation</strong> for substance use disorders.
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

        <InfoCard icon={Clock} title="48-Hour Scheduling Requirement" variant="warning">
          Within <strong>48 hours</strong> of a positive test or incident, the Marine
          should be scheduled for a SACC screening. Do not delay this referral.
        </InfoCard>
      </div>
    ),

    levels: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Levels of Care
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            SACC determines the appropriate level of care based on clinical assessment:
          </p>
        </section>

        {LEVELS_OF_CARE.map((level) => (
          <section key={level.level} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {level.level}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{level.description}</p>
            <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">Duration:</span>
                <p className="text-zinc-600 dark:text-zinc-400">{level.duration}</p>
              </div>
              <div>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">Criteria:</span>
                <p className="text-zinc-600 dark:text-zinc-400">{level.criteria}</p>
              </div>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Self-Referral Option
          </h3>
          <ul className="mt-4 space-y-2">
            {SELF_REFERRAL_INFO.map((info) => (
              <li key={info} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {info}
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
            Treatment Referral Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
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
            Command Responsibilities
          </h3>
          <ul className="mt-4 space-y-2">
            {COMMAND_RESPONSIBILITIES.map((resp) => (
              <li key={resp} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {resp}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={Users} title="SACO Coordination" variant="default">
          The Unit SACO acts as the <strong>liaison between the command and SACC clinicians</strong>.
          Maintain regular communication with the SACO on treatment progress and any issues.
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

        <InfoCard icon={AlertTriangle} title="Treatment Failure = ADSEP Basis" variant="warning">
          Missed appointments constitute a <strong>&quot;Treatment Failure&quot;</strong> which
          is a separate basis for administrative separation. Document all missed
          appointments carefully.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
