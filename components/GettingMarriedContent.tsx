"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { Heart, Clock, FileText, AlertTriangle } from "lucide-react";

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

const KEY_POINTS = [
  { label: "Timeline", value: "Update records within 30 days to avoid losing benefits" },
  { label: "BAH", value: "Rate increases from 'without dependents' to 'with dependents'" },
  { label: "Healthcare", value: "Spouse eligible for TRICARE coverage" },
  { label: "SGLI", value: "Family SGLI coverage available for spouse" },
  { label: "ID Card", value: "Spouse eligible for dependent ID and base access" },
  { label: "Late Submission", value: "Benefits start from submission date (not marriage date)" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "steps", label: "Steps" },
  { id: "documents", label: "Documents" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Obtain certified marriage certificate",
    detail: "Request certified copy with raised seal from county clerk where you were married. Order at least 3 copies. Typical cost: $10-25 per copy.",
  },
  {
    step: 2,
    title: "Enroll spouse in DEERS",
    detail: "Visit ID card office (RAPIDS site) with your spouse present. Bring: certified marriage certificate, spouse birth certificate, spouse Social Security card, two forms of ID for both of you.",
  },
  {
    step: 3,
    title: "Get spouse dependent ID card",
    detail: "Issued during DEERS enrollment appointment. Spouse needs ID card for base access, TRICARE, commissary, and other benefits.",
  },
  {
    step: 4,
    title: "Submit NAVMC 10922 to admin",
    detail: "Dependency Application form processes the BAH rate change. Attach certified marriage certificate.",
  },
  {
    step: 5,
    title: "Update DD Form 93",
    detail: "Update Record of Emergency Data with spouse as emergency contact/next of kin.",
  },
  {
    step: 6,
    title: "Update SGLI beneficiaries",
    detail: "Review and update SGLV 8286 to add spouse as beneficiary if desired.",
  },
  {
    step: 7,
    title: "Enroll spouse in TRICARE",
    detail: "DEERS enrollment activates TRICARE eligibility. Select appropriate TRICARE plan.",
  },
];

const REQUIRED_DOCS = [
  { document: "Certified Marriage Certificate", copies: "3+", note: "Must have raised seal from issuing county" },
  { document: "Spouse Birth Certificate", copies: "1", note: "Certified copy" },
  { document: "Spouse Social Security Card", copies: "1", note: "Original or certified copy" },
  { document: "Spouse Photo ID", copies: "2", note: "Two forms of identification" },
  { document: "Your Military ID", copies: "1", note: "CAC required" },
];

const COMMON_ISSUES = [
  {
    issue: "Foreign marriage",
    solution: "Certificate must be translated to English and notarized",
  },
  {
    issue: "Previous marriage",
    solution: "Must provide final divorce decree or death certificate from prior marriage",
  },
  {
    issue: "Dual military",
    solution: "Coordinate BAH entitlements (only one receives with-dependents rate unless you have children)",
  },
  {
    issue: "Missing documents",
    solution: "ID card office will not process without all required documentation",
  },
];

export function GettingMarriedContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Heart} title="Updating Your Records" variant="info">
          When you get married, you must update your military records to receive dependent benefits.
          Your spouse becomes eligible for DEERS enrollment, TRICARE, ID card access, and you
          become eligible for BAH with dependents rate.
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

        <InfoCard icon={Clock} title="30-Day Deadline" variant="warning">
          Submit all documentation within 30 days of marriage to receive benefits from your
          marriage date. After 30 days, benefits start from submission date - you lose
          retroactive pay.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Benefits Your Spouse Receives
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Healthcare</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                TRICARE coverage for medical, dental, and pharmacy
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Base Access</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                Dependent ID card for installation access
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Commissary/Exchange</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                Shopping privileges at military stores
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">MWR Programs</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                Access to recreation and family programs
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    steps: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Step-by-Step Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {step.step}
                </span>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{step.title}</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    documents: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Documents
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Document</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Copies</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Notes</th>
                </tr>
              </thead>
              <tbody>
                {REQUIRED_DOCS.map((doc) => (
                  <tr key={doc.document} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{doc.document}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{doc.copies}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{doc.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={FileText} title="Forms to Submit" variant="default">
          <ul className="mt-2 space-y-1">
            <li>• <strong>NAVMC 10922</strong> - Dependency Application (for BAH change)</li>
            <li>• <strong>DD Form 93</strong> - Record of Emergency Data</li>
            <li>• <strong>SGLV 8286</strong> - SGLI beneficiary update (if adding spouse)</li>
          </ul>
        </InfoCard>
      </div>
    ),

    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Issues & Solutions
          </h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">{item.issue}</h4>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Dual Military Couples" variant="warning">
          If both spouses are active duty, coordinate BAH carefully. Only one member receives
          the with-dependents rate unless you have children. Both receive without-dependents
          rate at their respective duty stations.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
