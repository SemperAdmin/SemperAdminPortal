"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Car, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "programs", label: "Programs" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Motorcycle Mentorship", value: "Mandatory MMP for all riders; provides peer-to-peer training and safety checks" },
  { label: "Driver Training", value: "Requirements for Marines under age 26 (Alive at 25 or similar courses)" },
  { label: "Inspections", value: "Pre-holiday or seasonal vehicle inspections to ensure mechanical safety" },
];

const PROGRAM_ELEMENTS = [
  { program: "Motorcycle Mentorship Program (MMP)", description: "Peer-to-peer training and mentorship for all motorcycle riders", requirement: "All riders" },
  { program: "Basic Rider Course (BRC)", description: "Foundational motorcycle safety training", requirement: "Before operating on base" },
  { program: "Advanced Rider Course (ARC)", description: "Advanced skills training for experienced riders", requirement: "Within 1 year of BRC" },
  { program: "Alive at 25", description: "Driver safety course for young Marines", requirement: "Marines under 26" },
  { program: "TRiPS", description: "Travel Risk Planning System for long-distance travel", requirement: "96+ hour liberty" },
];

const PROCESS_STEPS = [
  "Identification: Maintain a roster of all licensed drivers and motorcycle riders",
  "Training Verification: Ensure riders have completed BRC (Basic Rider Course) and ARC (Advanced Rider Course) as required",
  "Mentorship: Appoint a Motorcycle Club President to lead the MMP",
  "TRiPS Reports: Mandate the use of the Travel Risk Planning System (TRiPS) for all Marines taking leave or liberty involving long-distance driving",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Quarterly", action: "Recommended frequency for Motorcycle Mentorship rides/meetings" },
  { requirement: "Pre-Holiday", action: "Seasonal vehicle inspections for all Marines" },
];

const COMMON_ISSUES = [
  { issue: "Unlicensed Riders", solution: "Marines purchasing motorcycles without notifying the command or completing the required safety courses. Require registration of all motorcycles with the unit." },
  { issue: "TRiPS Non-Compliance", solution: "Marines departing on liberty without submitting TRiPS. Make TRiPS verification part of the liberty brief process." },
];

export function MotorVehicleSafetyContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Car} title="Motor Vehicle Safety" variant="info">
          Private Motor Vehicle (PMV) and motorcycle accidents are among the leading causes of non-combat deaths in the Marine Corps. This program manages the training, inspection, and mentorship required to reduce the risk of roadway mishaps.
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
    programs: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Safety Programs</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Program</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAM_ELEMENTS.map((item) => (
                  <tr key={item.program} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.program}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Users} title="Motorcycle Mentorship" variant="default">
          The Motorcycle Mentorship Program provides <strong>peer-to-peer training</strong> and safety checks. Appoint a Motorcycle Club President to lead the program.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Motor Vehicle Safety Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Vehicle Inspection Checklist</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Tires (tread depth, pressure, condition)</li>
            <li>&bull; Brakes (function, wear indicators)</li>
            <li>&bull; Lights (headlights, brake lights, signals)</li>
            <li>&bull; Wipers and fluids</li>
            <li>&bull; Registration and insurance current</li>
          </ul>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={AlertTriangle} title="PMV Mishaps are Preventable" variant="warning">
          Motor vehicle accidents are the leading cause of non-combat deaths. Aggressive enforcement of training requirements and TRiPS saves lives.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
