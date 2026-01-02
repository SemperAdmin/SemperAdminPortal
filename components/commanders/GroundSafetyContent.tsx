"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { HardHat, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "structure", label: "Program Structure" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Ground Safety Officer", value: "The GSO is the primary advisor to the commander for all ground-related safety matters" },
  { label: "Safety Councils", value: "Recurring meetings (Executive Safety Council) to review trends and mishap data" },
  { label: "Workplace Inspections", value: "Regular walkthroughs of shops, armories, and motor pools to identify physical hazards" },
];

const PROGRAM_ELEMENTS = [
  { element: "Ground Safety Officer (GSO)", description: "Primary advisor on ground safety; must complete formal GSO course", role: "Commander's Staff" },
  { element: "Ground Safety Specialist", description: "Enlisted safety professional assisting the GSO", role: "Safety Section" },
  { element: "Executive Safety Council", description: "Senior leadership review of safety trends and policies", role: "Quarterly meeting" },
  { element: "Enlisted Safety Committee", description: "NCO/SNCO-level safety discussions and feedback", role: "Monthly meeting" },
  { element: "Hazard Reporting System", description: "NAVMC 11401 for anonymous hazard reporting", role: "All hands" },
];

const PROCESS_STEPS = [
  "Appointment: Appoint a GSO and/or Ground Safety Specialist in writing",
  "Council Meetings: Convene the Enlisted Safety Committee and the Executive Safety Council",
  "Hazard Reporting: Maintain a 'NAVMC 11401' (Hazard Report) system where Marines can report issues without fear of reprisal",
  "Training: Ensure all hands complete annual safety training and specialized training for hazardous roles",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Quarterly", action: "Frequency for Executive Safety Council (ESC) meetings" },
  { requirement: "Annual", action: "Comprehensive workplace safety inspections" },
];

const COMMON_ISSUES = [
  { issue: "Collateral Duty GSOs", solution: "Appointing a junior officer who has not attended the formal Ground Safety Officer course. Send the GSO to training before they assume duties." },
  { issue: "Inactive Safety Councils", solution: "Letting council meetings lapse or become 'check-the-box' events. Ensure meaningful discussions and follow-up on action items." },
];

export function GroundSafetyContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={HardHat} title="Ground Safety Program" variant="info">
          The Ground Safety Program encompasses all non-aviation safety efforts within the command. It is designed to prevent mishaps through hazard identification, workplace inspections, and the appointment of qualified safety professionals.
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
    structure: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Program Structure</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Role</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAM_ELEMENTS.map((item) => (
                  <tr key={item.element} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.element}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Users} title="Hazard Reporting" variant="default">
          Marines must be able to report hazards <strong>without fear of reprisal</strong>. The NAVMC 11401 system provides a mechanism for anonymous reporting.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Ground Safety Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Workplace Inspection Focus Areas</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Motor pools and vehicle maintenance areas</li>
            <li>&bull; Armories and weapons storage</li>
            <li>&bull; Communications shops</li>
            <li>&bull; Field maintenance areas</li>
            <li>&bull; Administrative spaces (ergonomics)</li>
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
        <InfoCard icon={AlertTriangle} title="Trained GSO Required" variant="warning">
          The GSO must complete the formal Ground Safety Officer course. An untrained collateral-duty officer cannot provide effective safety oversight.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
