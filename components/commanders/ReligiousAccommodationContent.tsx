"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, FileText, Clock } from "lucide-react";

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
  { id: "authority", label: "Adjudication Authority" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Legal Basis", value: "Religious Freedom Restoration Act (RFRA)" },
  { label: "Request Form", value: "NAVMC 10274 AA" },
  { label: "Dietary/Time Off", value: "SPCMCA - 30 days" },
  { label: "Grooming/Apparel/Medical", value: "DC M&RA - 60 days" },
  { label: "Appeal Deadline", value: "5 business days from denial" },
  { label: "Accommodation Duration", value: "Entire career unless rescinded" },
];

const ADJUDICATION_AUTHORITIES = [
  { type: "Dietary practices", authority: "SPCMCA", timeline: "30 days" },
  { type: "Time off requests", authority: "SPCMCA", timeline: "30 days" },
  { type: "Grooming standards", authority: "DC M&RA", timeline: "60 days" },
  { type: "Religious apparel", authority: "DC M&RA", timeline: "60 days" },
  { type: "Medical waivers", authority: "DC M&RA", timeline: "60 days" },
];

const PROCESS_STEPS = [
  "Marine submits accommodation request on NAVMC 10274 AA",
  "Chaplain conducts interview and completes checklist",
  "Chaplain prepares memorandum for the record",
  "Request forwarded through chain of command",
  "Adjudication authority consults with SJA",
  "Adjudication authority makes determination",
  "Marine notified of decision within 5 business days",
  "If denied, Marine may appeal within 5 business days",
  "Appeal forwarded to appellate authority",
  "Appellate authority decision is final",
];

const COMMON_ISSUES = [
  {
    issue: "Request involves uniform standards",
    solution: "Forward to DC M&RA for determination.",
  },
  {
    issue: "Exigent circumstances require temporary revocation",
    solution: "GCMCA may suspend accommodation with notification to DC M&RA within 3 business days.",
  },
];

export function ReligiousAccommodationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Religious Accommodation" variant="info">
          The Marine Corps accommodates sincerely held religious beliefs unless such accommodation
          erodes a compelling government interest. The Religious Freedom Restoration Act requires
          accommodation unless compelling government interest exists.
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
            Compelling Government Interests
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Military readiness</li>
            <li>&bull; Unit cohesion</li>
            <li>&bull; Good order and discipline</li>
            <li>&bull; Health and safety</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Least Restrictive Means" variant="warning">
          Marine Corps must use the <strong>least restrictive means</strong> of furthering
          compelling government interest when denying accommodations.
        </InfoCard>
      </div>
    ),

    authority: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Adjudication Authorities
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Request Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Authority</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {ADJUDICATION_AUTHORITIES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.type}</td>
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.authority}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Appellate Authorities
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">SPCMCA Decisions</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Appealed to GCMCA</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">DC M&RA Decisions</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Appealed to CMC</p>
            </div>
          </div>
        </section>

        <InfoCard icon={FileText} title="Accommodation Duration" variant="default">
          Approved accommodations remain in effect for the Marine&apos;s <strong>entire career</strong>
          unless rescinded by the appropriate authority.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Accommodation Request Process
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

        <InfoCard icon={Clock} title="Timeline Requirements" variant="default">
          <div className="mt-2 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>SPCMCA determination:</span>
              <span className="font-medium">Within 30 days</span>
            </div>
            <div className="flex justify-between">
              <span>DC M&RA determination:</span>
              <span className="font-medium">Within 60 days</span>
            </div>
            <div className="flex justify-between">
              <span>Notification of decision:</span>
              <span className="font-medium">Within 5 business days</span>
            </div>
            <div className="flex justify-between">
              <span>Appeal submission:</span>
              <span className="font-medium">Within 5 business days</span>
            </div>
          </div>
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
