"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Database, AlertTriangle, ArrowRightLeft, Shield } from "lucide-react";

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
  { id: "usage", label: "System Usage" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Warm Handoff", value: "Allows incoming commander to see Marine's stressor history—prevents 'reset' at new unit" },
  { label: "Non-Clinical", value: "Command tool, not a medical record—documents command observations and admin actions" },
  { label: "Privacy Act Protected", value: "Access strictly limited to those with need to know (CO, SgtMaj, etc.)" },
  { label: "PCS Continuity", value: "Critical information follows the Marine during Permanent Change of Station" },
];

const DOCUMENTABLE_STRESSORS = [
  { category: "Disciplinary", examples: ["NJP", "Court-Martial", "Page 11 entries", "EMI"] },
  { category: "Personal/Family", examples: ["Divorce/separation", "Death in family", "Relationship issues", "Custody disputes"] },
  { category: "Financial", examples: ["Bankruptcy", "Debt issues", "Pay problems", "Garnishment"] },
  { category: "Performance", examples: ["Relief for cause", "Failing PFT/CFT", "MOS issues", "Adverse fitrep"] },
  { category: "Health", examples: ["Substance abuse incident", "Mental health referral", "Significant injury", "LIMDU status"] },
];

const PROCESS_STEPS = [
  "Account Creation: CO appoints a CIRRAS Administrator",
  "Data Entry: Document stressors and the unit's response/mitigation efforts",
  "Regular Updates: Update within 24 hours of significant risk changes",
  "FPC Integration: Use CIRRAS data to inform Force Preservation Council discussions",
  "PCS Transfer: Finalize record and 'push' to gaining command's digital bin before departure",
  "Reception: Review CIRRAS records for all incoming check-ins within first 72 hours",
];

const ACCESS_LEVELS = [
  { role: "Commanding Officer", access: "Full read/write access to unit Marines" },
  { role: "Executive Officer", access: "Full read/write access to unit Marines" },
  { role: "Sergeant Major", access: "Full read/write access to enlisted Marines" },
  { role: "CIRRAS Administrator", access: "Administrative access for data entry" },
  { role: "Chaplain/Medical", access: "Read access as needed for FPC" },
];

const COMMON_ISSUES = [
  {
    issue: "Blank records",
    solution: "Gaining units receiving Marines with no CIRRAS history, only to find out the Marine was 'High Risk' at their previous command. This is a failure of the 'Warm Handoff'—ensure records are complete before PCS.",
  },
  {
    issue: "Outdated information",
    solution: "Not updating CIRRAS when a Marine's situation changes. Significant risk changes should be updated within 24 hours.",
  },
  {
    issue: "Over-documentation",
    solution: "Documenting minor issues that don't represent actual risk factors. Focus on meaningful stressors that impact the Marine's wellbeing.",
  },
];

export function CIRRASOversightContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Database} title="CIRRAS Oversight" variant="info">
          The Command Individual Risk and Resiliency Assessment System (CIRRAS) is the
          digital tool used to document a Marine&apos;s <strong>risk factors</strong> and the
          command&apos;s <strong>mitigation efforts</strong>. It ensures that critical information
          &quot;follows&quot; the Marine during a Permanent Change of Station (PCS).
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

        <InfoCard icon={ArrowRightLeft} title="The 'Warm Handoff'" variant="warning">
          CIRRAS enables the <strong>&quot;Warm Handoff&quot;</strong>—ensuring that a Marine&apos;s
          risk history transfers with them to their new unit. Don&apos;t let critical
          information get lost at PCS.
        </InfoCard>
      </div>
    ),

    usage: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Documentable Stressors
          </h2>
          <div className="mt-4 space-y-4">
            {DOCUMENTABLE_STRESSORS.map((cat) => (
              <div key={cat.category} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{cat.category}</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Access Levels
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Role</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Access</th>
                </tr>
              </thead>
              <tbody>
                {ACCESS_LEVELS.map((level) => (
                  <tr key={level.role} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{level.role}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{level.access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Shield} title="Privacy Act Protected" variant="default">
          CIRRAS data is <strong>Privacy Act protected</strong>. Access is strictly limited
          to those with a legitimate need to know. Do not share CIRRAS information
          outside authorized personnel.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CIRRAS Process
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
            Timeline Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Within 24 Hours:</strong> Update for significant risk changes</li>
            <li>&bull; <strong>Before PCS:</strong> Finalize and transfer records prior to departure</li>
            <li>&bull; <strong>Within 72 Hours:</strong> Review incoming Marines&apos; CIRRAS records at check-in</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="72-Hour Reception Review" variant="warning">
          Review CIRRAS records for all incoming check-ins within the <strong>first
          72 hours</strong>. Don&apos;t wait for the FPC to discover a high-risk Marine
          just arrived at your unit.
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
