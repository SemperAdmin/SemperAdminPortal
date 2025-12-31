"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Baby,
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
    id: "notify-command",
    title: "Notify Your Command",
    description: "Inform your chain of command about the birth/adoption",
    timeline: "As soon as possible",
    details: [
      "Inform your immediate supervisor about the birth or adoption",
      "Discuss any leave you plan to take (paternity/maternity leave)",
      "For adoptions, notify command when you receive placement notification",
    ],
    tip: "Service members are entitled to 12 weeks of parental leave following birth or adoption. Plan this with your supervisor.",
  },
  {
    id: "obtain-certificate",
    title: "Obtain Birth Certificate",
    description: "Get official documentation of the birth",
    timeline: "Within first week",
    details: [
      "Request the official birth certificate from the hospital or county vital records office",
      "Order multiple certified copies (you'll need them for various enrollments)",
      "For OCONUS births, obtain a Consular Report of Birth Abroad (CRBA) from the U.S. Embassy",
      "For adoptions, obtain the final adoption decree from the court",
    ],
    documents: [
      "Official Birth Certificate",
      "Hospital Birth Registration",
      "Adoption Decree (if applicable)",
    ],
    warning: "Hospital birth announcements are NOT official birth certificates. You need the certified copy from vital records.",
  },
  {
    id: "social-security",
    title: "Apply for Social Security Number",
    description: "Get your child's SSN for DEERS enrollment",
    timeline: "Within first 2 weeks",
    details: [
      "Most hospitals offer to submit the SSN application at birth",
      "If not done at hospital, visit your local Social Security office",
      "Bring the birth certificate and both parents' identification",
      "The SSN card typically arrives by mail within 2-4 weeks",
    ],
    documents: [
      "Birth Certificate",
      "Both Parents' IDs",
      "SS-5 Application (if applying separately)",
    ],
    links: [
      { title: "Social Security Office Locator", href: "https://www.ssa.gov/locator/" },
    ],
    tip: "You can proceed with DEERS enrollment before receiving the SSN card if you have the number from the hospital.",
  },
  {
    id: "complete-10922",
    title: "Complete NAVMC 10922",
    description: "Fill out the Dependency Application to add your child",
    timeline: "Within 30 days of birth",
    details: [
      "Obtain NAVMC 10922 from admin or download from Marine Online",
      "Complete Section 1 with your information",
      "Complete Section 2 with your child's information (name, DOB, SSN)",
      "Sign and date the form as the claimant",
      "If unmarried, additional documentation may be required (see warning)",
    ],
    documents: ["NAVMC 10922 (Dependency Application)"],
    warning: "For unmarried service members, you may need a court order establishing paternity or a voluntary acknowledgment of paternity.",
  },
  {
    id: "submit-admin",
    title: "Submit to Admin/IPAC",
    description: "Turn in your completed package",
    timeline: "Within 30 days of birth",
    details: [
      "Bring your completed NAVMC 10922 and birth certificate to admin",
      "The attesting officer will verify documents and sign the form",
      "Admin will process the Unit Diary entry to update MCTFS",
      "Keep copies of all submitted documents for your records",
    ],
    documents: [
      "Completed NAVMC 10922",
      "Original Birth Certificate",
      "Child's SSN (or number if card not yet received)",
    ],
    tip: "Submit within 30 days to ensure BAH starts from the date of birth, not the date of submission.",
  },
  {
    id: "enroll-deers",
    title: "Enroll Child in DEERS",
    description: "Register your child for healthcare benefits",
    timeline: "After MCTFS update",
    details: [
      "Go to the nearest ID Card office (RAPIDS site)",
      "Bring your child's birth certificate and SSN",
      "Enroll the child in DEERS (children under 10 don't get ID cards)",
      "Ensure TRICARE coverage is activated",
    ],
    documents: [
      "Birth Certificate",
      "Child's Social Security Card (or number)",
      "Your Military ID",
    ],
    links: [
      { title: "Find ID Card Office", href: "https://idco.dmdc.osd.mil/idco/" },
      { title: "TRICARE Young Children", href: "https://www.tricare.mil/Plans/Eligibility/ChildrenAndYoungAdults" },
    ],
    tip: "TRICARE Prime is automatic for most active duty dependents. Verify coverage is active after DEERS enrollment.",
  },
  {
    id: "update-sgli",
    title: "Update SGLI Beneficiaries",
    description: "Consider adding your child as a beneficiary",
    timeline: "Within 30 days",
    details: [
      "Review your current SGLI beneficiary designations",
      "Consider whether to add your child or update percentages",
      "Complete SGLV 8286 if making changes",
      "Submit the updated form to your admin section",
    ],
    documents: ["SGLV 8286 (SGLI Election and Certificate)"],
    links: [
      { title: "SGLI Information", href: "https://www.benefits.va.gov/insurance/sgli.asp" },
    ],
    tip: "Many parents split beneficiaries between spouse and children, or leave 100% to spouse with the understanding they will care for children.",
  },
  {
    id: "update-records",
    title: "Update Emergency Records",
    description: "Update DD 93 and other emergency data",
    timeline: "Within 30 days",
    details: [
      "Update your Record of Emergency Data (DD Form 93)",
      "Add child to vRED in Marine Online",
      "Update your Family Care Plan if applicable (single parents, dual-military)",
      "Consider updating your will to include provisions for your child",
    ],
    documents: [
      "DD Form 93",
      "Family Care Plan (if required)",
    ],
    links: [
      { title: "Update vRED in MOL", href: "https://mol.tfs.usmc.mil/" },
    ],
    warning: "Single parents and dual-military couples MUST have a valid Family Care Plan within 30 days of the birth.",
  },
];

export default function HavingABabyPage() {
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
            <div className="rounded-lg bg-sky-100 p-2 dark:bg-sky-900/30">
              <Baby className="h-6 w-6 text-sky-600 dark:text-sky-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Having a Baby
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Complete checklist for adding your child
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
            className="h-full rounded-full bg-sky-500 transition-all duration-300"
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
            Submit NAVMC 10922 within 30 days of birth for backdated BAH
          </p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
            <FileText className="h-4 w-4" />
            <span className="font-medium">Key Form</span>
          </div>
          <p className="mt-1 text-sm text-blue-600 dark:text-blue-300">
            NAVMC 10922 (Dependency Application)
          </p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            <span className="font-medium">Parental Leave</span>
          </div>
          <p className="mt-1 text-sm text-green-600 dark:text-green-300">
            12 weeks of non-chargeable leave for primary/secondary caregivers
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

              <div className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-zinc-800">
                <div className="ml-10 space-y-4">
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

                  {step.warning && (
                    <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                      <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                      <p className="text-sm text-amber-700 dark:text-amber-300">{step.warning}</p>
                    </div>
                  )}

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
            Congratulations on your new addition to the family!
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
            href="/roles/marines/dependency-management/birth-adoption-of-children"
            className="text-sm text-[var(--sa-red)] hover:underline"
          >
            Birth/Adoption Documentation
          </Link>
          <Link
            href="/roles/marines/dependency-management/family-care-plan"
            className="text-sm text-[var(--sa-red)] hover:underline"
          >
            Family Care Plan
          </Link>
          <Link
            href="/roles/marines/insurance-healthcare/tricare-enrollment"
            className="text-sm text-[var(--sa-red)] hover:underline"
          >
            TRICARE for Dependents
          </Link>
        </div>
      </div>
    </div>
  );
}
