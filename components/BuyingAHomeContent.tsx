"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { Home, FileText, AlertTriangle, CheckCircle } from "lucide-react";

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
  { label: "Down Payment", value: "None required on most VA-backed purchase loans" },
  { label: "PMI", value: "No private mortgage insurance required" },
  { label: "Interest Rates", value: "Competitive rates compared to conventional loans" },
  { label: "Closing Costs", value: "Some costs are capped by VA" },
  { label: "Funding Fee", value: "Required (can be financed into loan)" },
  { label: "BAH Impact", value: "BAH does not change when you buy a home" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Apply for your Certificate of Eligibility (COE)",
    detail: "Request your COE through eBenefits, your lender, or by mail using VA Form 26-1880. Your COE proves you qualify for the VA home loan benefit.",
  },
  {
    step: 2,
    title: "Review your finances",
    detail: "Check your credit profile, income, expenses, and monthly budget. Decide your comfortable mortgage payment range. Include closing costs in your overall budget.",
  },
  {
    step: 3,
    title: "Choose a lender",
    detail: "Shop around for interest rates and fees. You go through a private lender (bank, mortgage company, credit union), not the VA directly. Many lenders charge a 1% loan origination fee.",
  },
  {
    step: 4,
    title: "Get pre-approved",
    detail: "Pre-approval shows sellers you are a serious buyer with financing lined up.",
  },
  {
    step: 5,
    title: "Choose a real estate agent",
    detail: "Find an agent familiar with VA loans. Read all agreements before signing.",
  },
  {
    step: 6,
    title: "Shop for a home",
    detail: "Look at houses in your price range. Consider commute, schools, and neighborhood.",
  },
  {
    step: 7,
    title: "Make an offer with VA escape clause",
    detail: "Your purchase agreement must include the VA escape clause. This lets you void the contract if the property does not appraise for the contract price.",
  },
  {
    step: 8,
    title: "Get inspection and appraisal",
    detail: "A VA-approved appraiser checks property value and minimum property requirements (MPRs). Get a separate home inspection for defects.",
  },
  {
    step: 9,
    title: "Review Closing Disclosure",
    detail: "Your lender gives you this at least 3 business days before closing. It shows loan terms, fees, and estimated monthly payments.",
  },
  {
    step: 10,
    title: "Close on your home",
    detail: "Sign documents at a title company, escrow office, or attorney's office. Be prepared for extensive paperwork.",
  },
];

const COMMON_ISSUES = [
  {
    issue: "Low appraisal",
    solution: "Request Reconsideration of Value (ROV), renegotiate price, or pay the difference at closing",
  },
  {
    issue: "MPR failures",
    solution: "Seller must fix issues or you can walk away using VA escape clause",
  },
  {
    issue: "COE delays",
    solution: "Apply early and check status through eBenefits",
  },
  {
    issue: "Funding fee exemption",
    solution: "Verify your disability rating if you believe you qualify for waiver",
  },
];

export function BuyingAHomeContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Home} title="VA Home Loan Benefit" variant="info">
          The VA home loan program helps you buy a home with no down payment and competitive
          interest rates. You use a private lender (bank or mortgage company) to get your loan.
          The VA guarantees part of the loan against loss, allowing your lender to give you
          better terms than conventional mortgages.
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
            How It Works
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">You Apply</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Get your Certificate of Eligibility and work with a private lender
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">VA Guarantees</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                VA backs a portion of the loan, reducing lender risk
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">You Benefit</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                No down payment, no PMI, competitive rates
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    process: (
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

        <InfoCard icon={FileText} title="Key Documents" variant="default">
          <ul className="mt-2 space-y-1">
            <li>• <strong>VA Form 26-1880</strong> - Request for Certificate of Eligibility</li>
            <li>• <strong>COE</strong> - Certificate of Eligibility (proves your VA loan entitlement)</li>
            <li>• <strong>Closing Disclosure</strong> - Final loan terms and costs</li>
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

        <InfoCard icon={AlertTriangle} title="Important: VA Escape Clause" variant="warning">
          Always include the VA escape clause in your purchase agreement. This protects you if
          the home appraises for less than the contract price - you can walk away without penalty.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
