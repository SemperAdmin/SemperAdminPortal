"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  CheckCircle2,
  Circle,
  Clock,
  FileText,
  AlertTriangle,
  ExternalLink,
  ChevronLeft,
  Printer,
} from "lucide-react";

type Step = {
  id: string;
  title: string;
  description: string;
  timeline: string;
  details: string[];
  documents?: string[];
  links?: { title: string; href: string }[];
  warning?: string;
  tip?: string;
};

const STEPS: Step[] = [
  {
    id: "gather-docs",
    title: "Gather Required Documents",
    description: "Collect all documents needed before visiting admin",
    timeline: "Before wedding or immediately after",
    details: [
      "Obtain your official marriage certificate from the county clerk or vital records office",
      "Make copies of your marriage certificate (keep the original safe)",
      "Have your spouse's Social Security card ready",
      "Have your spouse's birth certificate or passport for citizenship verification",
    ],
    documents: [
      "Original Marriage Certificate",
      "Spouse's Social Security Card",
      "Spouse's Birth Certificate or Passport",
      "Your Military ID",
    ],
    tip: "Foreign marriage certificates must include a certified English translation by a certified translator.",
  },
  {
    id: "complete-10922",
    title: "Complete NAVMC 10922",
    description: "Fill out the Dependency Application form",
    timeline: "Within 30 days of marriage",
    details: [
      "Obtain NAVMC 10922 from your admin section or download from Marine Online",
      "Complete Section 1 with your information (name, grade, EDIPI, SSN, unit)",
      "Complete Section 2 with your spouse's information",
      "Sign and date the form as the claimant",
    ],
    documents: ["NAVMC 10922 (Dependency Application)"],
    links: [
      {
        title: "NAVMC 10922 Form",
        href: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899289/navmc-10922-dependency-application/",
      },
    ],
    warning: "Self-attestation is no longer allowed as of July 2021. An admin clerk must sign as the attesting officer.",
  },
  {
    id: "submit-admin",
    title: "Submit to Admin/IPAC",
    description: "Turn in your completed package for processing",
    timeline: "Within 30 days of marriage",
    details: [
      "Bring your completed NAVMC 10922 and original marriage certificate to admin",
      "The attesting officer will view the original certificate and sign the form",
      "Admin will submit the transaction to MCTFS via Unit Diary",
      "Request a copy of your processed paperwork for your records",
    ],
    documents: [
      "Completed NAVMC 10922",
      "Original Marriage Certificate",
      "Spouse's supporting documents",
    ],
    tip: "Ask admin to provide an estimated processing timeline. Standard processing is 1-5 business days.",
  },
  {
    id: "verify-mctfs",
    title: "Verify MCTFS Update",
    description: "Confirm your dependent is in the system",
    timeline: "3-5 business days after submission",
    details: [
      "Log into Marine Online (MOL) and check your personal information",
      "Verify your spouse appears as a dependent",
      "Check your BAH entitlement has updated to 'with dependent' rate",
      "Review your next LES to confirm BAH change",
    ],
    links: [
      { title: "Marine Online (MOL)", href: "https://mol.tfs.usmc.mil/" },
    ],
    warning: "If your spouse doesn't appear within 5 business days, follow up with admin immediately.",
  },
  {
    id: "enroll-deers",
    title: "Enroll Spouse in DEERS",
    description: "Get your spouse in the system for ID card and TRICARE",
    timeline: "After MCTFS update",
    details: [
      "Go to the nearest ID Card office (RAPIDS site) with your spouse",
      "Bring your marriage certificate and spouse's identification",
      "Your spouse will be enrolled in DEERS and receive a military dependent ID card",
      "Select a TRICARE health plan during enrollment",
    ],
    documents: [
      "Marriage Certificate",
      "Spouse's Driver's License or Passport",
      "Spouse's Social Security Card",
      "Your Military ID",
    ],
    links: [
      { title: "Find ID Card Office", href: "https://idco.dmdc.osd.mil/idco/" },
      { title: "TRICARE Plans", href: "https://www.tricare.mil/Plans" },
    ],
    tip: "Schedule an appointment at the ID card office in advance to reduce wait times.",
  },
  {
    id: "update-records",
    title: "Update Additional Records",
    description: "Don't forget these important updates",
    timeline: "Within 30 days",
    details: [
      "Update your SGLI beneficiary designation if desired",
      "Update your Record of Emergency Data (DD Form 93)",
      "Consider adding spouse to TSP beneficiary",
      "Update your vRED (virtual Record of Emergency Data) in MOL",
    ],
    documents: [
      "SGLV 8286 (if changing beneficiaries)",
      "DD Form 93 (Record of Emergency Data)",
    ],
    links: [
      { title: "SGLI Online", href: "https://www.benefits.va.gov/insurance/sgli.asp" },
      { title: "Update vRED in MOL", href: "https://mol.tfs.usmc.mil/" },
    ],
  },
];

export default function GettingMarriedPage() {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const toggleStep = (stepId: string) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepId)) {
        next.delete(stepId);
      } else {
        next.add(stepId);
      }
      return next;
    });
  };

  const progress = (completedSteps.size / STEPS.length) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Link
            href="/life-events"
            className="mb-4 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Life Events
          </Link>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-rose-100 p-2 dark:bg-rose-900/30">
              <Heart className="h-6 w-6 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Getting Married
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Complete checklist for adding your spouse
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => window.print()}
          className="hidden sm:flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          <Printer className="h-4 w-4" />
          Print
        </button>
      </div>

      {/* Progress Bar */}
      <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Your Progress
          </span>
          <span className="text-zinc-500 dark:text-zinc-400">
            {completedSteps.size} of {STEPS.length} steps complete
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div
            className="h-full rounded-full bg-rose-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Key Info */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Deadline</span>
          </div>
          <p className="mt-1 text-sm text-amber-600 dark:text-amber-300">
            Submit within 30 days of marriage to receive BAH effective from your wedding date
          </p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
            <FileText className="h-4 w-4" />
            <span className="font-medium">Key Form</span>
          </div>
          <p className="mt-1 text-sm text-blue-600 dark:text-blue-300">
            NAVMC 10922 (Dependency Application) - Required for all dependent additions
          </p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            <span className="font-medium">Benefits</span>
          </div>
          <p className="mt-1 text-sm text-green-600 dark:text-green-300">
            BAH with-dependent rate, TRICARE for spouse, DEERS enrollment
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {STEPS.map((step, index) => {
          const isCompleted = completedSteps.has(step.id);

          return (
            <div
              key={step.id}
              className={`rounded-xl border bg-white shadow-sm transition dark:bg-black/40 ${
                isCompleted
                  ? "border-green-200 dark:border-green-800"
                  : "border-black/5 dark:border-white/15"
              }`}
            >
              {/* Step Header */}
              <button
                onClick={() => toggleStep(step.id)}
                className="flex w-full items-start gap-4 p-4 text-left"
              >
                <div className="mt-0.5">
                  {isCompleted ? (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6 text-zinc-300 dark:text-zinc-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                      Step {index + 1}
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">•</span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                      {step.timeline}
                    </span>
                  </div>
                  <h3
                    className={`mt-1 font-semibold ${
                      isCompleted
                        ? "text-green-700 dark:text-green-400 line-through"
                        : "text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </button>

              {/* Step Details (always visible for print) */}
              <div className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-zinc-800">
                <div className="ml-10 space-y-4">
                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Documents */}
                  {step.documents && (
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                        Documents Needed
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {step.documents.map((doc) => (
                          <span
                            key={doc}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  {step.links && (
                    <div className="flex flex-wrap gap-3">
                      {step.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-[var(--sa-red)] hover:underline"
                        >
                          {link.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Warning */}
                  {step.warning && (
                    <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                      <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                      <p className="text-sm text-amber-700 dark:text-amber-300">{step.warning}</p>
                    </div>
                  )}

                  {/* Tip */}
                  {step.tip && (
                    <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <span className="font-medium">Tip:</span> {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion */}
      {completedSteps.size === STEPS.length && (
        <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-900/20">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="mt-4 text-xl font-semibold text-green-800 dark:text-green-200">
            All steps complete!
          </h2>
          <p className="mt-2 text-green-700 dark:text-green-300">
            You&apos;ve completed all the steps to add your spouse. Congratulations on your marriage!
          </p>
        </div>
      )}

      {/* Related Links */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Related Topics
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/roles/marines/dependency-management/marriage-documentation"
            className="text-sm text-[var(--sa-red)] hover:underline"
          >
            Marriage Documentation Details
          </Link>
          <Link
            href="/roles/marines/pay-allowances/basic-allowance-for-housing"
            className="text-sm text-[var(--sa-red)] hover:underline"
          >
            BAH Information
          </Link>
          <Link
            href="/roles/marines/insurance-healthcare/tricare-enrollment"
            className="text-sm text-[var(--sa-red)] hover:underline"
          >
            TRICARE Enrollment
          </Link>
        </div>
      </div>
    </div>
  );
}
