"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCOLink, KeyPoint } from "./ui/MCOLink";
import { MCO_URLS } from "@/data/references";


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

const KEY_POINTS: KeyPoint[] = [
  { label: "Definition", value: "Involuntary change of MOS by Marine Corps direction" },
  { label: "Authority", value: "MCO 1220.1 (MOS Manual)", url: MCO_URLS.MOS_MANUAL },
  { label: "Reasons", value: "Force shaping, MOS elimination, medical, misconduct" },
  { label: "Process", value: "HQMC directed → Screening → School → Redesignation" },
  { label: "Contact", value: "Career Planner, MMEA, S-1" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "reasons", label: "Reasons" },
  { id: "process", label: "Process" },
  { id: "rights", label: "Marine's Rights" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const RECLASSIFICATION_REASONS = [
  { reason: "Force Shaping", description: "MOS overmanned; Marines reclassified to balance force" },
  { reason: "MOS Elimination", description: "MOS disestablished; all Marines reclassified" },
  { reason: "Medical Disqualification", description: "No longer meets physical standards for current MOS" },
  { reason: "Security Clearance Loss", description: "Lost clearance required for current MOS" },
  { reason: "Misconduct", description: "Removed from MOS due to disciplinary issues" },
  { reason: "Needs of the Service", description: "Critical shortages require involuntary moves" },
];

const PROCESS_STEPS = [
  "HQMC identifies need for reclassification",
  "Marine notified through chain of command",
  "Screening for available MOSs",
  "Marine input considered (preferences)",
  "New MOS assigned based on needs/qualifications",
  "Orders to MOS school (if required)",
  "Complete training and redesignate",
];

const MARINE_RIGHTS = [
  "Right to understand reasons for reclassification",
  "Right to express preferences for new MOS",
  "Right to screening for multiple potential MOSs",
  "Right to counseling by Career Planner",
  "Right to know impact on career/promotion",
  "Right to complete required training",
  "Right to administrative review (if applicable)",
];

const POTENTIAL_IMPACTS = [
  { area: "Career Progression", impact: "May restart at entry level in new field" },
  { area: "Promotion", impact: "May affect board eligibility timelines" },
  { area: "Duty Stations", impact: "New MOS may have different billet locations" },
  { area: "Reenlistment", impact: "May affect SRB or reenlistment options" },
  { area: "Skills", impact: "Must learn new technical skills" },
  { area: "Retirement", impact: "Late-career changes may affect assignment options" },
];

const CONSIDERATIONS = [
  { title: "Grade Retention", description: "Marines typically retain their grade during reclassification" },
  { title: "Training", description: "Full MOS school attendance may be required" },
  { title: "TIG/TIS", description: "Time continues to accrue during transition" },
  { title: "Preferences", description: "Marine preferences considered but not guaranteed" },
];

export function MOSReclassificationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MOS Reclassification
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            MOS reclassification is an involuntary change of Military Occupational Specialty directed
            by the Marine Corps. Unlike voluntary lateral moves, reclassification is initiated by
            HQMC based on force needs, MOS elimination, or individual circumstances such as medical
            disqualification or loss of security clearance.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">
                      {point.url ? <MCOLink mco={point.value} url={point.url} /> : point.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reclassification vs. Lateral Move
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reclassification</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Involuntary (directed by HQMC)</li>
                <li>• Needs of the Marine Corps</li>
                <li>• Marine has limited choice</li>
                <li>• May be due to disqualification</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Lateral Move</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Voluntary (Marine-initiated)</li>
                <li>• Marine chooses new MOS</li>
                <li>• Requires approval</li>
                <li>• Based on Marine&apos;s desires</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Career Planner First</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If you&apos;re notified of potential reclassification, immediately contact your Career
            Planner. They can explain your options, help you understand the process, and advocate
            for your preferences where possible.
          </p>
        </section>
      </div>
    ),

    reasons: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reasons for Reclassification
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Reason</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {RECLASSIFICATION_REASONS.map((item) => (
                  <tr key={item.reason} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.reason}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Force Shaping Details
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Force shaping reclassifications occur when:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Current MOS is significantly overmanned",
              "No promotion opportunities in current MOS",
              "Marine Corps needs Marines in other fields",
              "Typically affects specific grades/MOSs",
              "Marines may have choice among available MOSs",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical/Clearance Disqualification
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Medical</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• No longer meets physical standards</li>
                <li>• Permanent profile/limitation</li>
                <li>• Medical board determination</li>
                <li>• New MOS must accommodate</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Security Clearance</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Clearance revoked or downgraded</li>
                <li>• Current MOS requires clearance</li>
                <li>• Must move to non-cleared MOS</li>
                <li>• May affect career options</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Not Punishment</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Force shaping reclassification is not punishment. It&apos;s a management tool to balance
            the force. Marines reclassified for force shaping should understand this is about
            Marine Corps needs, not their performance.
          </p>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reclassification Process
          </h3>
          <ol className="mt-4 space-y-2">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Considerations
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {CONSIDERATIONS.map((item) => (
              <div key={item.title} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Screening Process
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marines undergoing reclassification are screened for:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "ASVAB line scores for target MOSs",
              "Physical/medical requirements",
              "Security clearance (current or obtainable)",
              "Available school seats",
              "Marine Corps needs vs. Marine preferences",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Express Preferences</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            While reclassification is involuntary, Marines are typically given opportunity to
            express preferences among available MOSs. Be prepared to discuss what MOSs interest
            you and align with your ASVAB scores.
          </p>
        </section>
      </div>
    ),

    rights: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Marine&apos;s Rights
          </h3>
          <ul className="mt-4 space-y-2">
            {MARINE_RIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Potential Impacts
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Area</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Impact</th>
                </tr>
              </thead>
              <tbody>
                {POTENTIAL_IMPACTS.map((item) => (
                  <tr key={item.area} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.area}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Separation Option
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            In some cases, Marines may be offered the option to separate rather than reclassify:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Typically offered when nearing EAS",
              "May include early separation incentives",
              "Decision should consider all factors",
              "Consult Career Planner before deciding",
              "Consider impact on benefits and transition",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Making the Best of It</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            While involuntary, reclassification can open new opportunities. Many Marines who
            were initially resistant found their new MOS rewarding. Approach the transition
            with a positive mindset and focus on excelling in your new field.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Upon Notification
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Contact Career Planner immediately",
              "Understand reason for reclassification",
              "Review available MOS options",
              "Check ASVAB scores for qualifications",
              "Consider separation option (if offered)",
              "Document preferences in writing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            During Process
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Complete required screenings",
              "Express MOS preferences",
              "Complete any required medical exams",
              "Verify security clearance status",
              "Prepare for MOS school orders",
              "Plan for potential PCS",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            After Reclassification
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Complete MOS school training",
              "Verify new PMOS in MCTFS",
              "Update career plan with Career Planner",
              "Learn about new field promotion opportunities",
              "Identify new career development milestones",
              "Excel in new MOS",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
