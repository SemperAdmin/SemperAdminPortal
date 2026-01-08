"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";
import { MCO_URLS } from "@/data/references";

const MCOLink = ({ mco, url }: { mco: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[var(--sa-navy)] underline decoration-1 underline-offset-2 hover:text-[var(--sa-gold)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]"
  >
    {mco}
  </a>
);

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Who Qualifies" },
  { id: "enrollment", label: "Enrollment" },
  { id: "categories", label: "Categories" },
  { id: "assignments", label: "Assignments" },
  { id: "resources", label: "Resources" },
  { id: "pcs", label: "PCS Moves" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
];

const KEY_REQUIREMENTS: { element: string; requirement: string; url?: string }[] = [
  { element: "Program Type", requirement: "Mandatory DoD enrollment" },
  { element: "Enrollment Form", requirement: "DD Form 2792 (Exceptional Family Member Medical Summary)" },
  { element: "Educational Form", requirement: "DD Form 2792-1 (Special Education/Early Intervention Summary)" },
  { element: "Update Requirement", requirement: "Every 3 years or when condition changes" },
  { element: "Coordination", requirement: "EFMP staff coordinate with monitors during assignment process" },
  { element: "Authority", requirement: "MCO 1754.4C", url: MCO_URLS.EFMP },
];

const MEDICAL_CONDITIONS = [
  "Chronic illnesses requiring ongoing specialist care",
  "Physical disabilities or impairments",
  "Conditions requiring regular therapy (physical, occupational, speech)",
  "Conditions requiring specialized medical equipment",
  "Diagnosed mental health conditions requiring ongoing treatment",
  "Conditions requiring frequent hospitalization or medical appointments",
];

const DEVELOPMENTAL_CONDITIONS = [
  "Autism spectrum disorders",
  "Intellectual or developmental disabilities",
  "Attention deficit disorders (ADD/ADHD) requiring treatment",
  "Emotional or behavioral disorders",
  "Learning disabilities requiring specialized intervention",
];

const EDUCATIONAL_NEEDS = [
  "Children receiving special education services",
  "Children with Individualized Education Programs (IEP)",
  "Children with 504 Plans",
  "Children requiring early intervention services",
  "Children needing specialized school placements",
];

const ENROLLMENT_STEPS = [
  {
    step: "Identification",
    description: "Family member identified through medical provider diagnosis, school evaluation, self-identification by sponsor, or command referral",
  },
  {
    step: "Medical Documentation",
    description: "Complete DD Form 2792 with treating physician documenting diagnosis, treatment requirements, medications, therapies, and equipment needs",
  },
  {
    step: "Educational Documentation (if applicable)",
    description: "Complete DD Form 2792-1 with school or early intervention provider documenting IEP, 504 Plan, and specialized services",
  },
  {
    step: "Submit to EFMP Office",
    description: "Submit completed forms to installation EFMP office for review and enrollment into EFMP system",
  },
  {
    step: "Assignment Coordination",
    description: "EFMP status flagged in personnel system; future assignments screened for resource availability",
  },
];

const EFMP_CATEGORIES = [
  {
    category: "Category 1: Medical Conditions Only",
    description: "Family member has medical condition requiring ongoing specialist care, regular therapy/treatment, or specialized equipment. No educational special needs.",
  },
  {
    category: "Category 2: Educational Needs Only",
    description: "Family member has educational needs requiring special education services (IEP), 504 Plan accommodations, or early intervention services. No significant medical needs.",
  },
  {
    category: "Category 3: Medical and Educational Needs",
    description: "Family member requires both ongoing medical care or treatment AND special education or early intervention services.",
  },
  {
    category: "Category 4: Severe/Intensive Needs",
    description: "Family member has severe conditions requiring intensive medical intervention or highly specialized care not available at all locations. May limit assignment options significantly.",
  },
];

const ASSIGNMENT_SCREENING = [
  "Marine receives projected assignment",
  "EFMP Coordinator reviews family's documented needs",
  "Gaining installation screened for medical and educational resources",
  "If resources unavailable, alternate assignment may be considered",
  "Final assignment decision made by Headquarters Marine Corps",
];

const FAMILY_SUPPORT_SERVICES = [
  { service: "Information and Referral", description: "Assistance navigating medical and educational systems" },
  { service: "Community Resources", description: "Connection to local support services and programs" },
  { service: "Support Groups", description: "Support groups and family events for EFMP families" },
  { service: "PCS Transition Assistance", description: "Help during permanent change of station moves" },
];

const RESPITE_CARE_INFO = [
  "Short-term relief for caregivers",
  "Available through installation EFMP or MCCS",
  "Hours vary by installation and funding",
  "May cover in-home or center-based care",
  "Adults with disabilities may qualify in some cases",
];

const TRICARE_ECHO_BENEFITS = [
  "Additional benefits for qualifying dependents beyond basic TRICARE",
  "Applied behavior analysis (ABA) for autism",
  "Respite care coverage",
  "Assistive technology and equipment",
  "Extended home health care",
];

const PCS_PRE_ACTIONS = [
  "Verify EFMP enrollment is current",
  "Update documentation if older than 12 months",
  "Contact gaining installation EFMP office",
  "Research medical and educational resources at new location",
  "Request school records and IEP documentation",
];

const PCS_DURING_ACTIONS = [
  "Hand-carry medical records and IEP documents",
  "Contact new school district before arrival",
  "Schedule appointments with new medical providers",
  "Register with gaining installation EFMP office",
  "Connect with School Liaison Officer",
];

const PCS_POST_ACTIONS = [
  "Complete EFMP check-in at new installation",
  "Establish care with new medical providers",
  "Enroll children in school and initiate IEP transfer",
  "Update DEERS and TRICARE information",
  "Connect with local support resources",
];

const FCP_EFMP_REQUIREMENTS = [
  "Current IEP or educational plan",
  "Medical care plans and provider information",
  "Medication lists and administration instructions",
  "Therapy schedules and provider contacts",
  "Specialized equipment needs",
  "Respite care arrangements",
];

const COMMON_SITUATIONS = [
  {
    situation: "Newly Diagnosed Condition",
    actions: [
      "Obtain diagnosis documentation from provider",
      "Contact EFMP office for enrollment",
      "Complete DD Form 2792",
      "Enrollment typically completed within 30 days",
    ],
  },
  {
    situation: "Child Starting Special Education",
    actions: [
      "Obtain IEP or evaluation documentation from school",
      "Contact EFMP office to add educational component",
      "Complete DD Form 2792-1",
      "Update enrollment category if needed",
    ],
  },
  {
    situation: "PCS to Location Without Resources",
    actions: [
      "EFMP Coordinator identifies resource gap",
      "Alternate assignment may be requested",
      "Consider Designated Place (family remains at current location)",
      "Geographic Bachelor status or unaccompanied tour may be options",
    ],
  },
  {
    situation: "Disagreement With Assignment Decision",
    actions: [
      "Discuss concerns with EFMP Coordinator",
      "Request review of screening determination",
      "Work with assignment monitor through chain of command",
      "Document specific resource requirements",
    ],
  },
];

const EFMP_TIPS = [
  { tip: "Keep documentation current", detail: "Outdated forms delay assignment screening." },
  { tip: "Be specific on forms", detail: "List exact services needed, not general descriptions." },
  { tip: "Research before PCS", detail: "Contact gaining EFMP office early." },
  { tip: "Maintain copies", detail: "Keep copies of all medical and educational records." },
  { tip: "Use School Liaison", detail: "They help navigate school transitions." },
  { tip: "Connect with support", detail: "EFMP family support services provide valuable assistance." },
  { tip: "Update after changes", detail: "New diagnoses or treatments require documentation updates." },
  { tip: "Plan for respite", detail: "Know your respite care options before you need them." },
];

const UPDATE_TRIGGERS = [
  "Every 3 years (mandatory re-enrollment)",
  "When condition significantly changes",
  "When new diagnosis is received",
  "When treatment requirements change",
  "Before PCS to new duty station",
];

export function EFMPContent({ data }: Props) {
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
          {activeTab === "overview" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Exceptional Family Member Program (EFMP) Overview
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The Exceptional Family Member Program (EFMP) is a mandatory DoD program for military families with
                  members requiring specialized medical, educational, or behavioral support. EFMP ensures family needs
                  are considered during assignment processes and connects families to essential resources and services.
                  Enrollment documents conditions requiring ongoing care so Marines are stationed where appropriate
                  support exists.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key Requirements
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                      {KEY_REQUIREMENTS.map((item) => (
                        <tr key={item.element}>
                          <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.element}</td>
                          <td className="py-3 text-zinc-700 dark:text-zinc-300">
                            {item.url ? (
                              <MCOLink mco={item.requirement} url={item.url} />
                            ) : (
                              item.requirement
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                <h4 className="font-semibold text-red-800 dark:text-red-200">Mandatory Enrollment</h4>
                <p className="mt-1 text-sm text-red-800 dark:text-red-200">
                  EFMP enrollment is mandatory for all qualifying family members. Failure to enroll may result
                  in assignment to locations without needed resources. EFMP enrollment does not negatively impact
                  career progression.
                </p>
              </div>
            </>
          )}

          {activeTab === "eligibility" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Who Qualifies as an Exceptional Family Member
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Dependents requiring specialized medical, educational, or behavioral support may qualify
                  for EFMP enrollment.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Medical Conditions
                </h3>
                <ul className="mt-4 space-y-2">
                  {MEDICAL_CONDITIONS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Developmental and Behavioral Conditions
                </h3>
                <ul className="mt-4 space-y-2">
                  {DEVELOPMENTAL_CONDITIONS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Educational Needs
                </h3>
                <ul className="mt-4 space-y-2">
                  {EDUCATIONAL_NEEDS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {activeTab === "enrollment" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP Enrollment Process
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Enrollment documents the special needs of family members to ensure appropriate resources
                  are available at duty stations.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Enrollment Steps
                </h3>
                <div className="mt-4 space-y-4">
                  {ENROLLMENT_STEPS.map((item, index) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.step}</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Required Forms
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">DD Form 2792</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Exceptional Family Member Medical Summary - completed by treating physician documenting
                      diagnosis, treatment requirements, medications, therapies, and equipment needs.
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">DD Form 2792-1</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Special Education/Early Intervention Summary - completed for dependents receiving
                      special education services, IEP, 504 Plan, or early intervention services.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  When to Update EFMP
                </h3>
                <ul className="mt-4 space-y-2">
                  {UPDATE_TRIGGERS.map((trigger) => (
                    <li key={trigger} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {trigger}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {activeTab === "categories" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP Categories
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  EFMP enrollment is categorized based on the type and severity of needs, which affects
                  assignment screening.
                </p>
              </section>

              <div className="space-y-4">
                {EFMP_CATEGORIES.map((cat, index) => (
                  <section
                    key={cat.category}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                          {cat.category}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{cat.description}</p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">Category 4 Impact</h4>
                <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
                  Category 4 (Severe/Intensive Needs) may significantly limit assignment options. Some overseas
                  and remote locations cannot support intensive care requirements. Discuss options with EFMP
                  Coordinator and career planner.
                </p>
              </div>
            </>
          )}

          {activeTab === "assignments" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP and Assignments
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  EFMP does not guarantee specific duty stations. Military mission remains the primary consideration.
                  EFMP ensures screening of potential duty stations for resource availability and identification of
                  locations that cannot support family needs.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Assignment Screening Process
                </h3>
                <ol className="mt-4 space-y-3">
                  {ASSIGNMENT_SCREENING.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Overseas Screening
                </h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  OCONUS assignments require additional screening:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Medical and educational resources verified at overseas location
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Some overseas locations cannot support certain conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Screening completed before orders are issued
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Family may be enrolled as &quot;non-command sponsored&quot; if resources limited
                  </li>
                </ul>
              </section>

              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Mission Remains Primary</h4>
                <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
                  While EFMP considers family needs, military mission requirements remain the primary factor
                  in assignment decisions. EFMP helps ensure families are informed about resource availability.
                </p>
              </div>
            </>
          )}

          {activeTab === "resources" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP Services and Resources
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  EFMP connects families with medical, educational, and support resources.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Family Support Services
                </h3>
                <div className="mt-4 space-y-3">
                  {FAMILY_SUPPORT_SERVICES.map((svc) => (
                    <div key={svc.service} className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                      <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{svc.service}</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{svc.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Respite Care
                </h3>
                <ul className="mt-4 space-y-2">
                  {RESPITE_CARE_INFO.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  TRICARE Extended Care Health Option (ECHO)
                </h3>
                <ul className="mt-4 space-y-2">
                  {TRICARE_ECHO_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Educational Resources
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">School Liaison Officers</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Assist with school transitions during PCS, help obtain educational records,
                      coordinate IEP transfers, and advocate for appropriate services.
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Early Intervention Services</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Services for children birth to age 3 including developmental screenings,
                      therapy services, and coordination with civilian early intervention programs.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "pcs" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP and PCS Moves
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  PCS moves require careful coordination to ensure continuity of care and services for
                  EFMP-enrolled family members.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Pre-PCS Actions
                </h3>
                <ul className="mt-4 space-y-2">
                  {PCS_PRE_ACTIONS.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {action}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  During PCS
                </h3>
                <ul className="mt-4 space-y-2">
                  {PCS_DURING_ACTIONS.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {action}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Post-PCS Actions
                </h3>
                <ul className="mt-4 space-y-2">
                  {PCS_POST_ACTIONS.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {action}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Family Care Plan and EFMP
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Marines with EFMP-enrolled dependents have additional Family Care Plan requirements:
                </p>
                <ul className="mt-4 space-y-2">
                  {FCP_EFMP_REQUIREMENTS.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {activeTab === "troubleshooter" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Common EFMP Situations
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Guidance for handling common EFMP enrollment and assignment situations.
                </p>
              </section>

              <div className="space-y-4">
                {COMMON_SITUATIONS.map((item) => (
                  <section
                    key={item.situation}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      {item.situation}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {item.actions.map((action) => (
                        <li key={action} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Tips for EFMP Families
                </h3>
                <div className="mt-4 space-y-3">
                  {EFMP_TIPS.map((item) => (
                    <div key={item.tip} className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                      <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.tip}</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {activeTab === "references" && (
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
          )}
        </div>

        <aside className="space-y-6">
          <QuickLinks references={data.references} />

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Quick Facts
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Governing Order</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">
                  <MCOLink mco="MCO 1754.4C" url={MCO_URLS.EFMP} />
                </dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Primary Form</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">DD Form 2792</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Program Type</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Mandatory DoD Program</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Update Frequency</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Every 3 years or upon change</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">TRICARE ECHO</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Qualifying EFMP dependents may be eligible for TRICARE Extended Care Health Option (ECHO)
              providing additional benefits beyond standard TRICARE coverage.
            </p>
          </div>

          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200">Contact EFMP Office</h4>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              Contact your installation EFMP office early when receiving orders. They coordinate with
              gaining installation to verify resource availability.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-800 dark:text-green-200">Military OneSource</h4>
            <p className="mt-1 text-sm text-green-700 dark:text-green-300">
              Access EFMP & Me tool at militaryonesource.mil for personalized checklists and resources
              tailored to your family&apos;s needs.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
