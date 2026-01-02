"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { LogOut, Clock, FileText, AlertTriangle, CheckCircle } from "lucide-react";

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
  { label: "TRP", value: "Transition Readiness Program is mandatory for all separating Marines" },
  { label: "DD-214", value: "Your most important document - verify accuracy before signing" },
  { label: "Terminal Leave", value: "Must be requested and approved in advance" },
  { label: "VA Benefits", value: "Require enrollment - not automatic" },
  { label: "SBP Election", value: "If retiring, must be made before separation" },
  { label: "VGLI", value: "Application must be submitted within 240 days of separation" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "checklist", label: "Checklist" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const TIMELINE = [
  { time: "365 days before EAS", action: "Begin TRP process" },
  { time: "180 days before EAS", action: "Complete Career Readiness Standards" },
  { time: "90 days before EAS", action: "Complete Capstone requirements" },
  { time: "Within 240 days after EAS", action: "Apply for VGLI (no proof of health required)" },
  { time: "Within 2 weeks after EAS", action: "Provide DD-214 to VA MSC for benefits" },
];

const CHECKLIST = [
  {
    step: 1,
    title: "Complete Transition Readiness Program (TRP)",
    detail: "Mandatory training covering career readiness, financial planning, and VA benefits. Select your pathway: employment, education, or entrepreneur.",
  },
  {
    step: 2,
    title: "Schedule separation physical",
    detail: "Complete medical and dental examinations. Obtain copies of your medical and dental records.",
  },
  {
    step: 3,
    title: "File VA disability claim (if applicable)",
    detail: "Start your VA disability claim before separating. File through eBenefits or work with a Veterans Service Organization (VSO).",
  },
  {
    step: 4,
    title: "Request terminal leave",
    detail: "Submit leave request through chain of command. Terminal leave starts after final checkout.",
  },
  {
    step: 5,
    title: "Complete checkout procedures",
    detail: "Clear all required offices: supply, housing, medical, dental, legal, finance, and others per installation checkout sheet.",
  },
  {
    step: 6,
    title: "Verify DD-214 accuracy",
    detail: "Review every block for accuracy before signing. Verify service dates, characterization of service, awards, and RE code. Errors are difficult to correct after signing.",
  },
  {
    step: 7,
    title: "Enroll in VA healthcare",
    detail: "Complete VA Form 10-10EZ. Submit online at va.gov or call 877-222-8387.",
  },
  {
    step: 8,
    title: "Register for eBenefits",
    detail: "Create account at ebenefits.va.gov to track benefits, download DD-214, and check claim status.",
  },
];

const COMMON_ISSUES = [
  {
    issue: "DD-214 errors",
    solution: "Review carefully before signing. Request correction immediately if errors found",
  },
  {
    issue: "Missing medical records",
    solution: "Obtain copies before separating. Records transfer to VA is not automatic",
  },
  {
    issue: "GI Bill transfer",
    solution: "Must be done while on active duty. Cannot transfer after separation",
  },
  {
    issue: "VGLI deadline",
    solution: "If 240-day window passes, you need proof of good health to enroll",
  },
];

export function GettingOutEASContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={LogOut} title="End of Active Service (EAS)" variant="info">
          EAS requires completing the Transition Readiness Program (TRP), final checkout
          procedures, and ensuring all benefits and documents are in order before separating
          from the Marine Corps.
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

        <InfoCard icon={FileText} title="Your DD-214" variant="warning">
          Your DD-214 is the most important document you receive. It proves your military
          service for the rest of your life. Review EVERY block before signing. Errors are
          extremely difficult to correct after you sign.
        </InfoCard>
      </div>
    ),

    timeline: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Transition Timeline
          </h2>
          <div className="mt-6 space-y-4">
            {TIMELINE.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)]">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.time}</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TRP Pathways
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">Employment</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Resume writing, interview skills, job search strategies
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Education</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                GI Bill usage, school selection, application process
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <h4 className="font-medium text-purple-800 dark:text-purple-200">Entrepreneur</h4>
              <p className="mt-1 text-sm text-purple-700 dark:text-purple-300">
                Business planning, SBA resources, veteran-owned business programs
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Separation Checklist
          </h2>
          <div className="mt-6 space-y-4">
            {CHECKLIST.map((item) => (
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

        <InfoCard icon={CheckCircle} title="Don't Forget" variant="success">
          <ul className="mt-2 space-y-1">
            <li>• Get copies of ALL medical and dental records</li>
            <li>• File VA disability claim BEFORE separating</li>
            <li>• Register on eBenefits for access to VA services</li>
            <li>• Keep multiple copies of your DD-214 in safe locations</li>
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

        <InfoCard icon={AlertTriangle} title="Critical: GI Bill Transfer" variant="danger">
          If you want to transfer GI Bill benefits to your spouse or children, you MUST do
          this while on active duty. You cannot transfer benefits after separation. This
          requires a 4-year service commitment from the date of transfer.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
