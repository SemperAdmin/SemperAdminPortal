"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UserCheck, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "requirements", label: "Requirements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Appointment", value: "Must be appointed in writing by the CO" },
  { label: "Rank Requirement", value: "Usually a Sergeant (E-5) or above. For smaller units, a Corporal (E-4) may be used with a waiver" },
  { label: "Integrity", value: "The UUC cannot be a Marine who has a history of substance abuse or a drug-related conviction" },
];

const UUC_REQUIREMENTS = [
  { requirement: "Rank", description: "E-5 or above (E-4 with waiver for small units)", mandatory: true },
  { requirement: "Clean Record", description: "No history of substance abuse or drug convictions", mandatory: true },
  { requirement: "Training", description: "Completed installation UUC certification course", mandatory: true },
  { requirement: "Attention to Detail", description: "Meticulous record-keeping ability", mandatory: true },
  { requirement: "Alternate UUC", description: "Unit must have at least one alternate", mandatory: true },
];

const PROCESS_STEPS = [
  "Selection: CO identifies a Marine with high attention to detail and zero disciplinary issues",
  "Training: The Marine must complete the local installation's UUC certification course and obtain a certificate",
  "Appointment: CO signs the formal Appointment Letter and ensures it is kept on file for Inspector General (IG) reviews",
  "Oversight: The CO or SACO (Substance Abuse Control Officer) must regularly audit the UUC's ledger and supply levels",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Continuous", action: "A unit must have at least one primary and one alternate UUC at all times" },
];

const COMMON_ISSUES = [
  { issue: "Lapsed Training", solution: "UUC certification expires and is not renewed. Track expiration dates and schedule recertification before lapse." },
  { issue: "No Alternate", solution: "Unit has only one UUC who then goes on leave or PCS. Always maintain a trained alternate." },
];

export function UUCAppointmentContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UserCheck} title="Unit Urinalysis Coordinator (UUC)" variant="info">
          The UUC is the commander&apos;s primary agent for ensuring the integrity of the Biochemical Test Program. Because drug testing involves the collection of forensic evidence, the UUC must be a Marine of impeccable integrity who is meticulously trained to avoid procedural errors that could invalidate positive results.
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
    requirements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">UUC Requirements</h2>
          <div className="mt-4 space-y-3">
            {UUC_REQUIREMENTS.map((item) => (
              <div key={item.requirement} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.requirement}</h3>
                  {item.mandatory && (
                    <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
                      Mandatory
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Shield} title="Forensic Evidence" variant="warning">
          Drug testing involves forensic evidence. Any procedural error by the UUC can <strong>invalidate</strong> a positive result and prevent disciplinary action.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">UUC Appointment Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CO/SACO Oversight Duties</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Regularly audit the UUC ledger for accuracy</li>
            <li>&bull; Verify adequate supply levels (bottles, seals, forms)</li>
            <li>&bull; Ensure proper chain of custody procedures</li>
            <li>&bull; Maintain appointment letters for IG review</li>
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
        <InfoCard icon={AlertTriangle} title="Always Have an Alternate" variant="warning">
          Never let your unit have only one trained UUC. If they PCS or go on leave, testing stops and you risk missing monthly requirements.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
