"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { Plane, FileText, Shield, AlertTriangle } from "lucide-react";

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
  { label: "Readiness", value: "Complete all deployment readiness requirements before deploying" },
  { label: "Legal Documents", value: "Update or create will, POA, and advance medical directive" },
  { label: "SGLI", value: "Verify coverage and beneficiary designations" },
  { label: "Family Care Plan", value: "Ensure current (if required for single parents/dual-military)" },
  { label: "DD Form 93", value: "Update Record of Emergency Data" },
  { label: "Legal Assistance", value: "Free pre-deployment legal services available" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "checklist", label: "Checklist" },
  { id: "legal", label: "Legal Documents" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const CHECKLIST_ITEMS = [
  {
    step: 1,
    title: "Complete deployment readiness screening",
    detail: "Verify medical, dental, and administrative readiness. Complete all required training and immunizations.",
  },
  {
    step: 2,
    title: "Visit Legal Assistance",
    detail: "Schedule appointment with base Legal Assistance office for: will preparation, powers of attorney (financial and healthcare), advance medical directives, SGLI advice, and DD Form 93 review.",
  },
  {
    step: 3,
    title: "Update SGLI beneficiaries",
    detail: "Review SGLV 8286 (SGLI Election and Certificate). Verify beneficiary names, percentages, and contact information are current.",
  },
  {
    step: 4,
    title: "Update DD Form 93",
    detail: "Verify emergency contacts, next of kin, and notification preferences. Ensure addresses and phone numbers are current.",
  },
  {
    step: 5,
    title: "Complete Family Care Plan (if required)",
    detail: "Single parents and dual-military couples must have approved Family Care Plan on file. Verify short-term and long-term caregivers are still available.",
  },
  {
    step: 6,
    title: "Set up allotments",
    detail: "Ensure bills are paid during deployment. Set up automatic payments or allotments for mortgage, utilities, and other recurring expenses.",
  },
  {
    step: 7,
    title: "Notify creditors of deployment",
    detail: "The Servicemembers Civil Relief Act (SCRA) provides protections for deployed service members. Notify creditors in writing.",
  },
];

const LEGAL_DOCUMENTS = [
  {
    document: "Will",
    purpose: "Directs distribution of your property if you die",
    where: "Legal Assistance office - FREE",
  },
  {
    document: "General Power of Attorney",
    purpose: "Allows someone to handle your financial affairs",
    where: "Legal Assistance office - FREE",
  },
  {
    document: "Special Power of Attorney",
    purpose: "Allows specific actions (e.g., sell car, manage property)",
    where: "Legal Assistance office - FREE",
  },
  {
    document: "Healthcare Power of Attorney",
    purpose: "Allows someone to make medical decisions if you cannot",
    where: "Legal Assistance office - FREE",
  },
  {
    document: "Advance Medical Directive",
    purpose: "States your wishes for end-of-life care",
    where: "Legal Assistance office - FREE",
  },
];

const COMMON_ISSUES = [
  {
    issue: "Outdated beneficiaries",
    solution: "Review SGLI after major life events (marriage, divorce, birth)",
  },
  {
    issue: "Power of attorney scope",
    solution: "Ensure POA covers specific needs (banking, real estate, childcare)",
  },
  {
    issue: "Family Care Plan gaps",
    solution: "Verify backup caregiver availability and documentation",
  },
  {
    issue: "SCRA protections",
    solution: "Keep copies of deployment orders for creditor requests",
  },
];

export function DeployingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Plane} title="Pre-Deployment Preparation" variant="info">
          Deployment requires completing readiness requirements, updating legal documents, and
          ensuring your family has support systems in place. Pre-deployment preparation protects
          you and your family financially and legally.
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

        <InfoCard icon={Shield} title="SCRA Protections" variant="success">
          The Servicemembers Civil Relief Act (SCRA) provides legal protections during deployment:
          interest rate caps (6%), protection from eviction, ability to terminate leases, and more.
          Notify creditors in writing with a copy of your orders.
        </InfoCard>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pre-Deployment Checklist
          </h2>
          <div className="mt-6 space-y-4">
            {CHECKLIST_ITEMS.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    legal: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="Free Legal Services" variant="info">
          Base Legal Assistance provides FREE pre-deployment legal services. Schedule your
          appointment early - demand increases before major deployments.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Legal Documents to Prepare
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Document</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Purpose</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Where</th>
                </tr>
              </thead>
              <tbody>
                {LEGAL_DOCUMENTS.map((doc) => (
                  <tr key={doc.document} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{doc.document}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{doc.purpose}</td>
                    <td className="py-3 text-green-600 dark:text-green-400">{doc.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Forms to Update
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">DD Form 93</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Record of Emergency Data - lists who gets notified in emergencies
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">SGLV 8286</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                SGLI Election and Certificate - designates life insurance beneficiaries
              </p>
            </div>
          </div>
        </section>
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

        <InfoCard icon={AlertTriangle} title="Don't Wait" variant="warning">
          Complete all legal documents and updates BEFORE deployment. Legal Assistance offices
          get very busy before major deployments. Schedule early.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
