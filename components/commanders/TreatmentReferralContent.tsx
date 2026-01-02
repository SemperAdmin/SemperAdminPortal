"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { HeartHandshake, AlertTriangle, Clock, UserCheck } from "lucide-react";

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
  { id: "levels", label: "Treatment Levels" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "SACO Assessment", value: "All Marines with substance abuse issues must be referred to the Substance Abuse Control Officer for assessment" },
  { label: "Treatment Levels", value: "Treatment ranges from Level I (education) to Level III (inpatient rehabilitation)" },
  { label: "Command Involvement", value: "Commanders remain responsible for the Marine's military duties and must support the treatment plan" },
];

const TREATMENT_LEVELS = [
  { level: "Level I", name: "Education", description: "Basic substance abuse education classes", duration: "8-12 hours", setting: "Unit" },
  { level: "Level II", name: "Outpatient", description: "Regular counseling while maintaining duties", duration: "Weeks to months", setting: "SACO/Counseling" },
  { level: "Level III", name: "Inpatient", description: "Intensive residential rehabilitation program", duration: "30-90 days", setting: "Treatment Facility" },
];

const PROCESS_STEPS = [
  "SACO Referral: Commander refers Marine to Substance Abuse Control Officer within 72 hours of incident/positive test",
  "Assessment: SACO conducts comprehensive assessment to determine level of care needed",
  "Treatment Plan: SACO develops treatment plan in coordination with medical and command",
  "Command Support: CO ensures Marine can attend required treatment sessions while maintaining military duties",
  "Monitoring: CO receives regular updates on Marine's progress from SACO",
  "Aftercare: Upon completion, Marine may have ongoing monitoring requirements",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "72 Hours", action: "Refer Marine to SACO following positive result or substance abuse incident" },
  { requirement: "7 Days", action: "SACO completes assessment and develops treatment recommendation" },
  { requirement: "Ongoing", action: "Commander receives regular progress updates from SACO" },
];

const COMMON_ISSUES = [
  { issue: "Delayed Referral", solution: "Waiting too long to refer to SACO. Make the referral within 72 hours—treatment effectiveness depends on timely intervention." },
  { issue: "Interfering with Treatment", solution: "Scheduling conflicts prevent Marine from attending sessions. Work with SACO to ensure the Marine can attend required treatment without career penalty." },
  { issue: "Lack of Follow-Up", solution: "Not monitoring the Marine's progress or aftercare compliance. Maintain communication with SACO and ensure aftercare requirements are met." },
];

export function TreatmentReferralContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={HeartHandshake} title="Treatment Referral" variant="info">
          When a Marine is identified as having a substance abuse problem, the commander must ensure they receive appropriate treatment through the Marine Corps Substance Abuse Program. Treatment is not a substitute for discipline, but it is a required component of the overall response.
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
    levels: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Treatment Levels</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Level</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Name</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Duration</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Setting</th>
                </tr>
              </thead>
              <tbody>
                {TREATMENT_LEVELS.map((item) => (
                  <tr key={item.level} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-bold text-zinc-900 dark:text-zinc-100">{item.level}</td>
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.name}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.duration}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.setting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={UserCheck} title="Treatment vs. Discipline" variant="default">
          Treatment is <strong>not a substitute</strong> for appropriate disciplinary action. A Marine may receive treatment while also facing administrative or UCMJ consequences.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Treatment Referral Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Responsibilities</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Ensure timely referral to SACO (within 72 hours)</li>
            <li>&bull; Allow Marine to attend required treatment sessions</li>
            <li>&bull; Maintain communication with SACO on progress</li>
            <li>&bull; Support reintegration after treatment completion</li>
            <li>&bull; Monitor aftercare compliance</li>
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
        <InfoCard icon={AlertTriangle} title="Self-Referral Protection" variant="warning">
          Marines who <strong>self-refer</strong> for substance abuse treatment before being caught may receive limited protection from UCMJ action. Encourage Marines to seek help early.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
