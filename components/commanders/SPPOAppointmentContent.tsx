"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UserCheck, AlertTriangle, GraduationCap, Users } from "lucide-react";

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
  { id: "selection", label: "Selection Criteria" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Selection", value: "High-performing officer or SNCO (typically Captain or Master Sergeant) who has the trust of the command" },
  { label: "Liaison", value: "Acts as link between the unit and installation's Suicide Prevention Program Manager (SPPM)" },
  { label: "Training Management", value: "Tracks and ensures 100% completion of annual evidence-based suicide prevention training" },
  { label: "FPC Integration", value: "Mandatory attendee for all Force Preservation Councils" },
];

const SELECTION_CRITERIA = [
  { criterion: "Rank", description: "O-3/E-8 or above preferred—sufficient experience and credibility" },
  { criterion: "Character", description: "High moral character and maturity—trusted by Marines at all levels" },
  { criterion: "Availability", description: "Able to dedicate time to the role without conflicting primary duties" },
  { criterion: "Communication", description: "Excellent interpersonal skills—can discuss sensitive topics appropriately" },
  { criterion: "Training", description: "Willing and able to complete SPPO training course" },
];

const SPPO_RESPONSIBILITIES = [
  "Attend installation SPPO training course",
  "Track unit suicide prevention training completion",
  "Coordinate with installation SPPM on resources and trends",
  "Attend all Force Preservation Councils as mandatory member",
  "Advise the Commander on behavioral health trends",
  "Ensure unit complies with annual training requirements",
  "Maintain current knowledge of available resources (MFLC, Chaplain, Medical)",
  "Assist in postvention response following a suicide or attempt",
];

const COMMON_ISSUES = [
  {
    issue: "Junior Appointments",
    solution: "Avoid appointing a junior Lieutenant or Sergeant who lacks the experience to advise the Commander on complex behavioral health trends. Select someone with maturity and credibility.",
  },
  {
    issue: "Paper-Only SPPO",
    solution: "An SPPO who only tracks training but does not actively participate in the unit's risk-mitigation discussions is ineffective. The SPPO must be engaged in FPC and force preservation efforts.",
  },
  {
    issue: "Collateral Duty Overload",
    solution: "Don't pile this duty onto someone already overwhelmed with collateral duties. This role requires genuine attention and time.",
  },
];

export function SPPOAppointmentContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UserCheck} title="SPPO Appointment" variant="info">
          The Suicide Prevention Program Officer (SPPO) is the commander&apos;s primary advisor
          for the unit&apos;s suicide prevention efforts. This role is critical for ensuring
          the command is compliant with annual training requirements and that the unit&apos;s
          suicide prevention resources are integrated into the Force Preservation Council (FPC).
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

        <InfoCard icon={Users} title="FPC Integration" variant="warning">
          The SPPO must be a <strong>mandatory attendee</strong> at all Force Preservation
          Councils. Their insight on training completion and resource availability is essential
          for effective force preservation.
        </InfoCard>
      </div>
    ),

    selection: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Selection Criteria
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Criterion</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {SELECTION_CRITERIA.map((item) => (
                  <tr key={item.criterion} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.criterion}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SPPO Responsibilities
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {SPPO_RESPONSIBILITIES.map((resp) => (
              <li key={resp} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)]" />
                {resp}
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
            Appointment Process
          </h2>
          <div className="mt-6 space-y-4">
            {[
              "Identification: CO selects a Marine of high character and maturity",
              "Training: The SPPO must attend the installation's SPPO training course",
              "Appointment: CO signs a formal Letter of Appointment",
              "Integration: The SPPO is introduced as a mandatory attendee for all Force Preservation Councils",
            ].map((step, index) => (
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
            <li>&bull; <strong>Within 30 Days:</strong> Of a vacancy, a new SPPO must be appointed</li>
            <li>&bull; <strong>Prior to Assuming Duties:</strong> SPPO must complete installation training course</li>
          </ul>
        </section>

        <InfoCard icon={GraduationCap} title="Required Training" variant="default">
          The SPPO must complete the installation&apos;s SPPO training course before
          fully assuming duties. This training covers resources, reporting requirements,
          and best practices for suicide prevention.
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
