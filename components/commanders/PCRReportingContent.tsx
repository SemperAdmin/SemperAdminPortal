"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "types", label: "Status Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Accuracy", value: "Errors can delay death gratuity or SGLI delivery to family" },
  { label: "Trigger", value: "PCR triggers all follow-on support including survivor benefits and NOK notification" },
  { label: "Privacy", value: "Never discuss over unclassified channels before NOK is notified" },
  { label: "Authority", value: "CO or XO must release the message to HQMC" },
];

const STATUS_TYPES = [
  { status: "Deceased", description: "Confirmed death of the Marine" },
  { status: "DUSTWUN", description: "Duty Status-Whereabouts Unknown" },
  { status: "VSI", description: "Very Seriously Ill/Injured - life threatening, uncertain survival" },
  { status: "SI", description: "Seriously Ill/Injured - serious but not immediately life threatening" },
];

const PROCESS_STEPS = [
  "Gather Facts: Confirm identity, location, and nature of the casualty",
  "Draft Message: Use DCIPS (Defense Casualty Information Processing System) or manual message",
  "Verification: Cross-check Marine's RED/DA for correct NOK information",
  "Legal Review: Ensure facts are accurate and appropriate for release",
  "Release: CO or XO releases message to HQMC immediately",
  "OPSEC Brief: Immediately brief unit on operational security—no social media",
];

const TIMELINE_ITEMS = [
  { requirement: "Within 4 Hours", action: "PCR submitted for death or life-threatening injury" },
  { requirement: "Within 24 Hours", action: "PCR submitted for all other reportable casualties" },
];

const COMMON_ISSUES = [
  {
    issue: "Social media leaks before NOK notification",
    solution: "Family members often find out via social media before PCR is processed. Brief unit on OPSEC immediately following an incident. No photos, no posts, no texts about the casualty.",
  },
  {
    issue: "Incorrect NOK data",
    solution: "If Marine's RED/DA is not updated, the wrong person may be notified. Verify RED/DA accuracy during check-in and annually. This is a critical document.",
  },
  {
    issue: "Delayed submission",
    solution: "PCR must be submitted within 4 hours for death/life-threatening injury. Have a checklist ready and know your DCIPS POC. Practice the process before you need it.",
  },
];

export function PCRReportingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="Personnel Casualty Reports (PCR)" variant="info">
          The PCR is the official message that notifies HQMC and the Casualty Section (MPC) of a
          Marine&apos;s death, injury, or serious illness. This document <strong>triggers all
          follow-on support</strong>, including survivor benefits and notification of next of kin.
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_ITEMS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="4-Hour Requirement" variant="warning">
          PCRs for <strong>death or life-threatening injury</strong> must be submitted within
          4 hours. Know your process and have your checklist ready before you need it.
        </InfoCard>
      </div>
    ),

    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Casualty Status Types
          </h2>
          <div className="mt-4 space-y-3">
            {STATUS_TYPES.map((type) => (
              <div key={type.status} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{type.status}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Shield} title="Privacy Critical" variant="warning">
          PCRs are <strong>highly sensitive</strong>. Never discuss casualty details over
          unclassified, non-secure channels before the Next of Kin is notified.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PCR Submission Process
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
            Critical Documents
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>RED/DA:</strong> Record of Emergency Data - contains NOK information</li>
            <li>&bull; <strong>DCIPS:</strong> Defense Casualty Information Processing System</li>
            <li>&bull; <strong>SGLV 8286:</strong> SGLI beneficiary designation</li>
          </ul>
        </section>

        <InfoCard icon={Clock} title="OPSEC Immediately" variant="default">
          Brief the unit on operational security <strong>immediately</strong> following an incident.
          Social media leaks before NOK notification cause significant additional trauma to families.
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
