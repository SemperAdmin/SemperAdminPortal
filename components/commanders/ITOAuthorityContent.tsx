"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Plane, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "eligibility", label: "Eligibility" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Eligibility", value: "Triggered by medical determination of VSI (Very Seriously Ill/Injured) or SI (Seriously Ill/Injured)" },
  { label: "Authorizing Authority", value: "Managed through HQMC Casualty Section (MPC) based on command and medical input" },
  { label: "Scope", value: "Covers transportation, per diem, and lodging for up to 3 designated family members" },
  { label: "Urgency", value: "PCR must be submitted within 4 hours for VSI/SI status to initiate process" },
];

const MEDICAL_STATUS_DEFINITIONS = [
  {
    status: "VSI - Very Seriously Ill/Injured",
    definition: "Illness or injury is of such severity that life is imminently endangered",
    priority: "Highest priority for ITO issuance",
  },
  {
    status: "SI - Seriously Ill/Injured",
    definition: "Illness or injury is of such severity that there is cause for immediate concern, but not life-threatening",
    priority: "High priority for ITO consideration",
  },
  {
    status: "NSI - Not Seriously Ill/Injured",
    definition: "Illness or injury requires hospitalization but is not serious or critical",
    priority: "ITOs generally not authorized",
  },
];

const ITO_COVERAGE = [
  "Round-trip transportation (typically air travel)",
  "Per diem for meals",
  "Lodging near the medical facility",
  "Ground transportation at destination",
  "Up to 3 designated family members (typically spouse, parents, or children)",
];

const PROCESS_STEPS = [
  "Medical Determination: Medical facility designates Marine as VSI or SI",
  "PCR Submission: Unit S-1 submits the Personnel Casualty Report (PCR) within 4 hours with specific medical status and NOK info",
  "Request: Command or family requests travel assistance through HQMC MPC",
  "Issuance: HQMC issues the ITOs to designated family members",
  "Coordination: Unit/installation travel office facilitates bookings",
  "Execution: Family travels to bedside; command provides local support",
];

const COMMON_ISSUES = [
  {
    issue: "Delayed PCRs",
    solution: "Failing to submit the PCR promptly prevents the family from getting to the bedside of a dying or critically injured Marine in time. Treat VSI/SI PCRs as the highest priority administrative action.",
  },
  {
    issue: "Incomplete NOK Information",
    solution: "Missing or inaccurate NOK contact information delays ITO issuance. Verify SGLI/Record of Emergency Data (RED) is current for all Marines.",
  },
  {
    issue: "Lack of Local Support",
    solution: "Family arrives at unfamiliar installation with no guidance. Coordinate with receiving installation to provide a liaison, lodging assistance, and transportation.",
  },
];

export function ITOAuthorityContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Plane} title="Invitational Travel Orders (ITO)" variant="info">
          Invitational Travel Orders allow for government-funded travel of family members to
          the bedside of a Marine who is Very Seriously Ill/Injured (VSI) or Seriously
          Ill/Injured (SI). Time is critical—prompt action can mean the difference between
          family being present or absent during a Marine&apos;s final moments.
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

        <InfoCard icon={Clock} title="4-Hour PCR Requirement" variant="warning">
          PCR submission must occur within <strong>4 hours</strong> for VSI/SI status to
          initiate the ITO process. Every hour of delay is time the family could be at the bedside.
        </InfoCard>
      </div>
    ),

    eligibility: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical Status Definitions
          </h2>
          <div className="mt-4 space-y-4">
            {MEDICAL_STATUS_DEFINITIONS.map((item) => (
              <div key={item.status} className={`rounded-lg border-l-4 p-4 ${
                item.status.includes("VSI")
                  ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                  : item.status.includes("SI -")
                  ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                  : "border-zinc-300 bg-zinc-50 dark:bg-zinc-900/20"
              }`}>
                <h3 className={`font-semibold ${
                  item.status.includes("VSI")
                    ? "text-red-800 dark:text-red-200"
                    : item.status.includes("SI -")
                    ? "text-amber-800 dark:text-amber-200"
                    : "text-zinc-800 dark:text-zinc-200"
                }`}>{item.status}</h3>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.definition}</p>
                <p className="mt-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  ITO Priority: {item.priority}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <FileText className="h-5 w-5" />
            ITO Coverage
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {ITO_COVERAGE.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {item}
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
            ITO Process
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
            PCR Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Marine's identifying information</li>
            <li>&bull; Medical status designation (VSI/SI)</li>
            <li>&bull; Medical facility location</li>
            <li>&bull; NOK contact information</li>
            <li>&bull; Prognosis (when available)</li>
            <li>&bull; Circumstances of illness/injury</li>
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
