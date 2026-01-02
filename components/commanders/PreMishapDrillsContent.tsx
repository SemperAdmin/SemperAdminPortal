"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Siren, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "elements", label: "Plan Elements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Communication", value: "Who gets called first? (Medical, PMO, Higher HQ, Safety)" },
  { label: "Scene Security", value: "Procedures for cordoning off the area and preserving evidence" },
  { label: "Notification Teams", value: "Pre-identifying the personnel who will handle PCRs and casualty notification" },
];

const PLAN_ELEMENTS = [
  { element: "Notification Matrix", description: "Who calls whom, in what order, with what information" },
  { element: "Scene Security Procedures", description: "How to cordon the area and preserve evidence for investigation" },
  { element: "Medical Response", description: "Coordination with base medical and civilian EMS" },
  { element: "Family Notification", description: "CACO/PCR procedures for notifying next of kin" },
  { element: "Media Response", description: "PAO coordination and information release procedures" },
  { element: "Investigation Handoff", description: "Transition from response to formal investigation" },
];

const PROCESS_STEPS = [
  "Drafting: The Safety Officer drafts the PMP for Ground and/or Aviation operations",
  "Coordination: Ensure the plan aligns with the installation's Emergency Operations Center (EOC)",
  "Execution: Conduct a walk-through or full-scale drill (e.g., simulated helicopter crash or motor pool fire)",
  "Debrief: Identify failures in communication or response times and update the PMP",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Annual", action: "All units must conduct at least one Pre-Mishap Drill" },
  { requirement: "Pre-Deployment", action: "Highly recommended before any major exercise or deployment" },
];

const COMMON_ISSUES = [
  { issue: "Outdated Contact Lists", solution: "Discovering during a drill that phone numbers for the SJA or Medical Officer are incorrect. Review and update contact lists quarterly." },
  { issue: "No Debrief", solution: "Conducting the drill but failing to capture lessons learned. Every drill must end with a formal debrief and plan updates." },
];

export function PreMishapDrillsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Siren} title="Pre-Mishap Drills" variant="info">
          A Pre-Mishap Plan (PMP) is a written document outlining exactly what the command will do if an accident occurs. Drills ensure that the command team and first responders can execute the plan under stress.
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
    elements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Mishap Plan Elements</h2>
          <div className="mt-4 space-y-3">
            {PLAN_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Users} title="EOC Coordination" variant="default">
          The Pre-Mishap Plan must align with the installation&apos;s <strong>Emergency Operations Center (EOC)</strong> procedures for seamless response.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Drill Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Drill Scenarios</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Simulated vehicle accident with casualties</li>
            <li>&bull; Aircraft emergency/crash response</li>
            <li>&bull; Range/live-fire mishap</li>
            <li>&bull; Motor pool fire or HAZMAT spill</li>
            <li>&bull; Training injury requiring medevac</li>
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
        <InfoCard icon={AlertTriangle} title="Annual Drill Required" variant="warning">
          All units must conduct at least one Pre-Mishap Drill annually. Conduct additional drills before major exercises or deployments.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
