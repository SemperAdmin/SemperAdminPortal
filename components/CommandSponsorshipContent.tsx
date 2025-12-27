"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "who-needs", label: "Who Needs" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "efmp-screening", label: "EFMP Screening" },
  { id: "tour-requirements", label: "Tour Requirements" },
  { id: "denial", label: "Denial & Appeals" },
  { id: "special-situations", label: "Special Situations" },
  { id: "references", label: "References" },
];

const KEY_REQUIREMENTS = [
  { element: "Application Timeline", requirement: "2-4 months before PCS execution" },
  { element: "Primary Form", requirement: "DD Form 2792 (EFMP Medical Summary)" },
  { element: "Screening Requirement", requirement: "EFMP screening for all dependents" },
  { element: "Tour Length", requirement: "Typically 12 months remaining after family arrival" },
  { element: "Approval Authority", requirement: "Gaining command overseas" },
  { element: "Authority", requirement: "MCO 1300.8, DoDI 1315.19" },
];

const TRAVEL_ENTITLEMENTS = [
  "Government-funded travel for dependents to overseas location",
  "Per diem during travel",
  "Temporary lodging allowance at old and new duty stations",
  "Transportation of household goods at full weight allowance",
];

const HOUSING_ENTITLEMENTS = [
  "Overseas Housing Allowance (OHA) at with-dependent rate",
  "Eligibility for government family housing on installation",
  "Move-In Housing Allowance (MIHA) for housing setup costs",
  "Utility allowance for off-base housing",
];

const OTHER_BENEFITS = [
  "TRICARE coverage overseas",
  "Access to military medical facilities",
  "Commissary and exchange privileges",
  "Dependent education (DoDEA schools)",
  "Legal protections under Status of Forces Agreement (SOFA)",
  "Military postal service (APO/FPO)",
  "Access to Morale, Welfare, and Recreation (MWR) facilities",
];

const DEPENDENTS_REQUIRING_SPONSORSHIP = [
  "Spouse",
  "Children (biological, adopted, step-children)",
  "Other dependents enrolled in DEERS",
];

const SITUATIONS_REQUIRING_APPLICATION = [
  "PCS orders to OCONUS location",
  "Extension of overseas tour with family",
  "Adding dependents during overseas assignment (marriage, birth)",
  "Dependents joining you after initial unaccompanied period",
];

const APPLICATION_STEPS = [
  {
    step: 1,
    title: "Receive OCONUS Orders",
    actions: [
      "Review orders for accompanied or unaccompanied status",
      "If orders show unaccompanied, begin sponsorship request immediately",
      "Note report date and any screening requirements listed",
    ],
  },
  {
    step: 2,
    title: "Initiate EFMP Screening",
    description: "All dependents must complete EFMP screening regardless of enrollment status.",
    actions: [
      "Obtain DD Form 2792 from medical provider",
      "Complete DD Form 2792-1 if dependent receives special education",
      "Submit forms to installation EFMP office",
      "EFMP Coordinator initiates overseas screening",
    ],
  },
  {
    step: 3,
    title: "Gather Required Documents",
    actions: [
      "Collect sponsor documents (orders, LES, Page 11)",
      "Gather dependent documents (certificates, custody papers)",
      "Obtain medical documents (DD 2792, immunizations)",
      "Apply for no-fee passports and visas if needed",
    ],
  },
  {
    step: 4,
    title: "Submit Application Package",
    actions: [
      "Submit complete package to your S-1/Admin section",
      "Include command sponsorship request letter",
      "Attach all required documents",
      "Include EFMP screening results when complete",
    ],
  },
  {
    step: 5,
    title: "Screening and Review",
    actions: [
      "EFMP: Gaining installation reviews medical/educational needs",
      "EFMP: Verifies resources available at overseas location",
      "Command: Reviews complete package and verifies tour length",
      "Command: Confirms housing and school availability",
    ],
  },
  {
    step: 6,
    title: "Receive Approval",
    actions: [
      "Command sponsorship approval message received",
      "Orders amended to reflect accompanied status",
      "Proceed with PCS planning for family",
    ],
  },
];

const SPONSOR_DOCUMENTS = [
  "Copy of PCS orders",
  "Leave and Earnings Statement (LES)",
  "Page 11 (Service Record Entry) acknowledging tour length",
];

const DEPENDENT_DOCUMENTS = [
  "Marriage certificate (for spouse)",
  "Birth certificates (for children)",
  "Adoption decrees (for adopted children)",
  "Custody documents (if applicable)",
  "Divorce decrees (if previously married)",
  "Passports (or applications in progress)",
  "No-Fee passport applications",
  "Visas (if required by host country)",
];

const MEDICAL_DOCUMENTS = [
  "DD Form 2792 for each dependent",
  "DD Form 2792-1 for dependents with IEP/504 Plan",
  "Immunization records",
  "Current medical records summary",
];

const DD_2792_INFO = [
  "Current health status",
  "Ongoing medical conditions",
  "Medications",
  "Specialist care requirements",
  "Therapy needs",
  "Medical equipment",
];

const SPECIAL_NEEDS_DOCS = [
  "Detailed medical summaries",
  "DD Form 2792-1 for educational needs",
  "Current IEP or 504 Plan",
  "Letters from specialists",
  "Documentation of required therapies",
];

const TOUR_LENGTH_EXAMPLES = [
  { orderedTour: "36 months", familyArrival: "Month 3", remaining: "33 months remaining", status: "approved" },
  { orderedTour: "24 months", familyArrival: "Month 3", remaining: "21 months remaining", status: "approved" },
  { orderedTour: "24 months", familyArrival: "Month 15", remaining: "9 months remaining", status: "may be denied" },
];

const MEDICAL_DENIAL_REASONS = [
  "Required medical specialists not available at location",
  "Specialized medical equipment not supportable",
  "Educational services not available for special needs",
  "Medical condition incompatible with overseas environment",
];

const ADMIN_DENIAL_REASONS = [
  "Insufficient tour length remaining",
  "Housing not available for accompanied personnel",
  "School capacity exceeded",
  "Location designated as unaccompanied only",
  "Security restrictions",
];

const DENIAL_ACTIONS = [
  "Request specific reason for denial in writing",
  "Determine if condition can be remedied",
  "Consider appeal through chain of command",
  "Explore alternatives (designated place, defer family travel)",
  "Consult with EFMP Coordinator and legal assistance",
];

const ACCOMPANIED_BENEFITS = [
  "Family travels at government expense",
  "Full housing allowance (OHA with dependents)",
  "Full household goods weight allowance",
  "Family has access to all installation services",
  "Family covered under SOFA",
];

const UNACCOMPANIED_LIMITATIONS = [
  "Marine travels alone at government expense",
  "Family remains in CONUS at designated place",
  "BAH paid for family location",
  "Reduced OHA or no housing allowance overseas",
  "Reduced household goods weight",
  "Family must pay own way if they choose to travel",
];

const TIMELINE_ITEMS = [
  { action: "Receive OCONUS orders", timeline: "Day 0" },
  { action: "Begin EFMP screening", timeline: "Within 1 week" },
  { action: "Gather all documents", timeline: "Weeks 1-2" },
  { action: "Submit sponsorship package", timeline: "Week 2-3" },
  { action: "EFMP screening complete", timeline: "Weeks 4-8" },
  { action: "Command sponsorship decision", timeline: "Weeks 6-10" },
  { action: "Orders amended", timeline: "After approval" },
  { action: "Execute PCS", timeline: "Per orders" },
];

const SUCCESS_TIPS = [
  { tip: "Start early", detail: "Begin process immediately upon receiving orders." },
  { tip: "Complete EFMP screening first", detail: "This is often the longest step." },
  { tip: "Gather documents in advance", detail: "Have certificates and records ready." },
  { tip: "Communicate with gaining command", detail: "Contact overseas sponsor or EFMP office." },
  { tip: "Follow up regularly", detail: "Track screening status weekly." },
  { tip: "Keep copies", detail: "Maintain copies of all submitted documents." },
  { tip: "Plan for delays", detail: "Build buffer time into your PCS schedule." },
  { tip: "Know your alternatives", detail: "Understand options if sponsorship is denied." },
];

export function CommandSponsorshipContent({ data }: Props) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-black/10 dark:border-white/10">
        <nav className="-mb-px flex gap-4 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "border-[var(--sa-red)] text-[var(--sa-red)]"
                  : "border-transparent text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Command Sponsorship (OCONUS) Overview
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Command sponsorship is official approval for military family members to accompany you on an
                  overseas assignment at government expense. This authorization provides accompanied orders,
                  travel reimbursement, housing allowances, and full access to installation services. Command
                  sponsorship is not automatic and requires application through your command with EFMP screening
                  for all dependents.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key Requirements
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                        <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {KEY_REQUIREMENTS.map((item, idx) => (
                        <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-800">
                          <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.element}</td>
                          <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  What Command Sponsorship Provides
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Travel Entitlements</h4>
                    <ul className="mt-2 space-y-1">
                      {TRAVEL_ENTITLEMENTS.map((item, idx) => (
                        <li key={idx} className="text-sm text-green-700 dark:text-green-300 flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Housing Entitlements</h4>
                    <ul className="mt-2 space-y-1">
                      {HOUSING_ENTITLEMENTS.map((item, idx) => (
                        <li key={idx} className="text-sm text-blue-700 dark:text-blue-300 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">Other Benefits</h4>
                    <ul className="mt-2 space-y-1">
                      {OTHER_BENEFITS.map((item, idx) => (
                        <li key={idx} className="text-sm text-purple-700 dark:text-purple-300 flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Who Needs Tab */}
          {activeTab === "who-needs" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Who Needs Command Sponsorship
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  All dependents traveling to an overseas duty station at government expense require command sponsorship approval.
                </p>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Dependents Requiring Sponsorship
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {DEPENDENTS_REQUIRING_SPONSORSHIP.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">
                          {idx + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Situations Requiring Application
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {SITUATIONS_REQUIRING_APPLICATION.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-[var(--sa-red)] mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important Note</h4>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                  Command sponsorship is not automatic with OCONUS orders. You must apply through your command
                  and receive explicit approval before your family can travel at government expense.
                </p>
              </section>
            </>
          )}

          {/* Process Tab */}
          {activeTab === "process" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Command Sponsorship Process
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Follow these steps to apply for command sponsorship for your dependents.
                </p>
              </section>

              <div className="space-y-4">
                {APPLICATION_STEPS.map((step) => (
                  <section
                    key={step.step}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-lg font-bold text-white">
                        {step.step}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step.description}</p>
                        )}
                        <ul className="mt-3 space-y-1">
                          {step.actions.map((action, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                              <span className="text-[var(--sa-red)] mt-0.5">✓</span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Typical Timeline
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                        <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TIMELINE_ITEMS.map((item, idx) => (
                        <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-800">
                          <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">{item.action}</td>
                          <td className="py-2 font-medium text-zinc-600 dark:text-zinc-400">{item.timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Required Documents
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Gather all required documents before submitting your command sponsorship package.
                </p>
              </section>

              <div className="grid gap-6 md:grid-cols-3">
                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Sponsor Documents
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {SPONSOR_DOCUMENTS.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Dependent Documents
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {DEPENDENT_DOCUMENTS.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Medical Documents
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {MEDICAL_DOCUMENTS.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Document Tips</h4>
                <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                  <li>• Make copies of all documents before submission</li>
                  <li>• Ensure all certificates are certified copies or originals</li>
                  <li>• Translations required for foreign-language documents</li>
                  <li>• Start passport applications early - processing takes 6-8 weeks</li>
                </ul>
              </section>
            </>
          )}

          {/* EFMP Screening Tab */}
          {activeTab === "efmp-screening" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP Screening Requirements
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Every dependent requires EFMP screening for OCONUS moves, even those without special needs.
                  This ensures medical and educational resources are available at the overseas location.
                </p>
              </section>

              <section className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                <h4 className="font-semibold text-red-800 dark:text-red-200">Critical Requirement</h4>
                <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                  Allow 4-8 weeks for EFMP screening completion. Complex cases may take longer.
                  Start screening immediately upon receiving orders - this is often the longest step.
                </p>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    DD Form 2792 Required Information
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    The DD Form 2792 captures medical information for each dependent:
                  </p>
                  <ul className="mt-4 space-y-2">
                    {DD_2792_INFO.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-[var(--sa-red)]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Special Needs Documentation
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Additional documentation required for dependents with special needs:
                  </p>
                  <ul className="mt-4 space-y-2">
                    {SPECIAL_NEEDS_DOCS.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-[var(--sa-red)]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP Screening Process
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                    1. Obtain DD Form 2792 from MTF
                  </span>
                  <span className="text-zinc-400">→</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                    2. Submit to installation EFMP
                  </span>
                  <span className="text-zinc-400">→</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                    3. Forwarded to gaining EFMP
                  </span>
                  <span className="text-zinc-400">→</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                    4. Resources verified
                  </span>
                  <span className="text-zinc-400">→</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                    5. Approval/Denial returned
                  </span>
                </div>
              </section>
            </>
          )}

          {/* Tour Requirements Tab */}
          {activeTab === "tour-requirements" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Tour Length Requirements
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Command sponsorship typically requires a minimum of 12 months remaining on station after dependents arrive.
                  Some locations require 24 months remaining. Tour length varies by location and billet.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Tour Length Examples
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Ordered Tour</th>
                        <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Family Arrival</th>
                        <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Remaining</th>
                        <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TOUR_LENGTH_EXAMPLES.map((item, idx) => (
                        <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-800">
                          <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">{item.orderedTour}</td>
                          <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">{item.familyArrival}</td>
                          <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">{item.remaining}</td>
                          <td className="py-2">
                            <span
                              className={`rounded-full px-2 py-1 text-xs font-medium ${
                                item.status === "approved"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Extending Tour for Sponsorship
                </h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  If your tour length is insufficient for command sponsorship:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">1.</span>
                    Request tour extension through your command
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">2.</span>
                    Extension must be approved before sponsorship request
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">3.</span>
                    Some locations have minimum extension requirements
                  </li>
                </ul>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                <section className="rounded-xl border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
                  <h4 className="font-semibold text-green-800 dark:text-green-200">Accompanied Orders</h4>
                  <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                    {ACCOMPANIED_BENEFITS.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200">Unaccompanied Orders</h4>
                  <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
                    {UNACCOMPANIED_LIMITATIONS.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </>
          )}

          {/* Denial & Appeals Tab */}
          {activeTab === "denial" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Reasons for Denial
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Command sponsorship may be denied for medical/EFMP reasons or administrative reasons.
                </p>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Medical/EFMP Denial Reasons
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {MEDICAL_DENIAL_REASONS.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-red-500 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Administrative Denial Reasons
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {ADMIN_DENIAL_REASONS.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-red-500 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  What To Do If Denied
                </h3>
                <ol className="mt-4 space-y-3">
                  {DENIAL_ACTIONS.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{action}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Alternative Options</h4>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                  If command sponsorship is denied, your family may remain at a designated place in CONUS where
                  you will receive BAH. They may also travel overseas at their own expense as non-command sponsored,
                  but will not have access to government housing, schools, or full installation privileges.
                </p>
              </section>
            </>
          )}

          {/* Special Situations Tab */}
          {activeTab === "special-situations" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Special Situations
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Guidance for unique circumstances during the command sponsorship process.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Newborn or Unborn Child
                </h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    Begin sponsorship request with documentation of pregnancy
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    Conditional approval may be granted pending birth
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    Finalize sponsorship after birth with birth certificate
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    Expedited processing available for newborns overseas
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Marriage During Overseas Tour
                </h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    Submit command sponsorship request after marriage
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    Include marriage certificate and spouse documents
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    EFMP screening required for new spouse
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    Approval not guaranteed mid-tour
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Adding Dependents Overseas
                </h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    Command sponsorship required for any new dependent
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    Process same as initial sponsorship request
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    Housing and school availability verified
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)]">•</span>
                    May require temporary separation if denied
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">Concurrent Travel Not Authorized</h4>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                  If concurrent travel is not authorized, your family travels after you report to the overseas
                  duty station. Coordinate travel dates with your command and ensure housing is secured before
                  your family arrives.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Tips for Success
                </h3>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {SUCCESS_TIPS.map((item, idx) => (
                    <div key={idx} className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                      <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.tip}</p>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* References Tab */}
          {activeTab === "references" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  References & Resources
                </h2>
                <ul className="mt-4 space-y-2">
                  {data.references.map((ref) => (
                    <li key={ref.title}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--sa-red)] underline hover:no-underline"
                      >
                        {ref.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key Contacts
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Installation EFMP Office</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">For EFMP screening initiation</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">S-1/Admin Section</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">For sponsorship application submission</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Gaining Command EFMP</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">For resource availability questions</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Legal Assistance</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">For custody or dependent status questions</p>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <QuickLinks references={data.references} />

          <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Quick Facts
            </h3>
            <dl className="mt-3 space-y-3 text-sm">
              <div>
                <dt className="text-zinc-500 dark:text-zinc-400">Primary Form</dt>
                <dd className="font-medium text-zinc-900 dark:text-zinc-100">DD Form 2792</dd>
              </div>
              <div>
                <dt className="text-zinc-500 dark:text-zinc-400">Timeline</dt>
                <dd className="font-medium text-zinc-900 dark:text-zinc-100">6-10 weeks total</dd>
              </div>
              <div>
                <dt className="text-zinc-500 dark:text-zinc-400">Tour Requirement</dt>
                <dd className="font-medium text-zinc-900 dark:text-zinc-100">12+ months remaining</dd>
              </div>
              <div>
                <dt className="text-zinc-500 dark:text-zinc-400">EFMP Screening</dt>
                <dd className="font-medium text-zinc-900 dark:text-zinc-100">Required for all</dd>
              </div>
              <div>
                <dt className="text-zinc-500 dark:text-zinc-400">Authority</dt>
                <dd className="font-medium text-zinc-900 dark:text-zinc-100">MCO 1300.8</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-xl border-l-4 border-[var(--sa-red)] bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Start Early!</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Begin command sponsorship process immediately upon receiving OCONUS orders. EFMP screening
              alone can take 4-8 weeks.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
