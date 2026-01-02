"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { Baby, Clock, FileText, AlertTriangle } from "lucide-react";

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
  { label: "DEERS Enrollment", value: "Enroll newborn within 30 days of birth" },
  { label: "TRICARE", value: "Child automatically covered for 60 days after birth" },
  { label: "SGLI", value: "Update beneficiaries to include new child" },
  { label: "DD Form 93", value: "Update with new dependent" },
  { label: "BAH", value: "Single Marines now qualify for with-dependents rate" },
  { label: "Paternity Leave", value: "12 days of non-chargeable leave" },
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
    title: "Obtain birth certificate",
    detail: "Request certified copy from vital records office. Birth certificate with file number required for DEERS enrollment.",
  },
  {
    step: 2,
    title: "Obtain Social Security number",
    detail: "Apply for SSN at hospital during birth registration or at local Social Security office. Required for DEERS enrollment.",
  },
  {
    step: 3,
    title: "Enroll child in DEERS",
    detail: "Visit ID card office with: certified birth certificate, child's SSN, sponsor military ID. Sponsor must be present.",
  },
  {
    step: 4,
    title: "Submit NAVMC 10922 to admin",
    detail: "Dependency Application form adds child to your record. Required if this is your first child and you are single (for BAH change).",
  },
  {
    step: 5,
    title: "Update DD Form 93",
    detail: "Add child to Record of Emergency Data.",
  },
  {
    step: 6,
    title: "Update SGLI beneficiaries",
    detail: "Review SGLV 8286 to add child as beneficiary or update percentages.",
  },
  {
    step: 7,
    title: "Enroll child in TRICARE plan",
    detail: "DEERS enrollment activates TRICARE eligibility. Child is covered for 60 days automatically but must be enrolled for continued coverage.",
  },
];

const COMMON_ISSUES = [
  {
    issue: "SSN delay",
    solution: "Hospital may take 2-4 weeks to process. Follow up if not received",
  },
  {
    issue: "Birth certificate delay",
    solution: "Request expedited copy if needed for enrollment",
  },
  {
    issue: "TRICARE gap",
    solution: "If 60-day window passes, child may need retroactive enrollment",
  },
  {
    issue: "Paternity establishment",
    solution: "Unmarried fathers must establish paternity for child to be enrolled",
  },
];

export function HavingABabyContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Baby} title="Registering Your Child" variant="info">
          When you have a baby, you must register your child as a dependent to receive benefits.
          Your child becomes eligible for DEERS enrollment, TRICARE coverage, and you may become
          eligible for BAH with dependents rate if not already receiving it.
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
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Within 60 days</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Automatic TRICARE coverage expires - enroll before deadline
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">Within 30 days</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Complete DEERS enrollment to avoid benefit gaps
              </p>
            </div>
          </div>
        </section>

        <InfoCard icon={Clock} title="60-Day TRICARE Window" variant="warning">
          Your newborn is automatically covered by TRICARE for 60 days after birth. You MUST
          enroll your child before this window expires or coverage will lapse.
        </InfoCard>
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
            Required Documents for DEERS Enrollment
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Certified Birth Certificate</span>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">With file number from vital records</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Child&apos;s Social Security Number</span>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Card or official SSA document</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Sponsor Military ID (CAC)</span>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Sponsor must be present at enrollment</p>
              </div>
            </li>
          </ul>
        </section>

        <InfoCard icon={FileText} title="Forms to Submit" variant="default">
          <ul className="mt-2 space-y-1">
            <li>• <strong>NAVMC 10922</strong> - Dependency Application (for BAH if single parent)</li>
            <li>• <strong>DD Form 93</strong> - Record of Emergency Data update</li>
            <li>• <strong>SGLV 8286</strong> - SGLI beneficiary update</li>
          </ul>
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Paternity Leave
          </h3>
          <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-medium text-green-800 dark:text-green-200">12 Days Non-Chargeable</h4>
            <p className="mt-1 text-sm text-green-700 dark:text-green-300">
              Fathers are entitled to 12 days of non-chargeable paternity leave. Must be taken
              within the first year of the child&apos;s birth or adoption.
            </p>
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

        <InfoCard icon={AlertTriangle} title="Unmarried Parents" variant="warning">
          If parents are not married, the father must establish paternity before the child
          can be enrolled in DEERS under his sponsorship. This requires legal documentation
          (acknowledgment of paternity or court order).
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
