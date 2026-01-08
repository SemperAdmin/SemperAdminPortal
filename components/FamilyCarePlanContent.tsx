"use client";

import { MCOLink } from "./ui/MCOLink";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";
import { MCO_URLS } from "@/data/references";

type Ref = { title: string; url: string; isQuickLink?: boolean };

// Helper component for linked MCO references

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "who-requires", label: "Who Requires" },
  { id: "components", label: "FCP Components" },
  { id: "mol-module", label: "MOL Module" },
  { id: "caregivers", label: "Caregivers" },
  { id: "legal", label: "Legal Documents" },
  { id: "validation", label: "Validation" },
  { id: "efmp", label: "EFMP Considerations" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
];

const KEY_REQUIREMENTS = [
  { element: "Form", requirement: "NAVMC 11800 (Family Care Plan Certificate)" },
  { element: "System", requirement: "Marine Online (MOL) Family Care Plan Module" },
  { element: "Submission Deadline", requirement: "Within 30 days of reporting to new command" },
  { element: "Update Requirement", requirement: "Annually or within 30 days of any change" },
  { element: "Approval Authority", requirement: "Commanding Officer" },
  { element: "Authority", requirement: "MCO 1740.13D", url: MCO_URLS.FAMILY_CARE },
];

const MANDATORY_FCP_CATEGORIES = [
  "Single parents with custody of dependents",
  "Dual-military couples with dependents",
  "Marines married to civilians who deploy or travel frequently",
  "Marines with dependents requiring specialized care",
  "Marines with Exceptional Family Member Program (EFMP) enrolled dependents",
  "Civilian Expeditionary Workforce (CEW) employees with dependents",
];

const FCP_COMPONENTS = [
  {
    part: "Part 1: Service Member Acknowledgment",
    items: [
      "Marine's personal information",
      "Acknowledgment of FCP requirements",
      "Understanding of consequences for non-compliance",
    ],
  },
  {
    part: "Part 2: Dependent Information",
    items: [
      "Names and dates of birth of all dependents",
      "Relationship to Marine",
      "Special needs or medical requirements",
      "School information for children",
      "Custody arrangements (if applicable)",
    ],
  },
  {
    part: "Part 3: Short-Term Caregiver Designation",
    items: [
      "Name and contact information",
      "Relationship to dependents",
      "Physical address",
      "Acknowledgment of responsibilities",
    ],
  },
  {
    part: "Part 4: Long-Term Caregiver Designation",
    items: [
      "Name and contact information",
      "Relationship to dependents",
      "Physical address",
      "Legal documentation (Power of Attorney)",
      "Acknowledgment of responsibilities",
    ],
  },
  {
    part: "Part 5: Financial and Legal Arrangements",
    items: [
      "Bank account access for caregiver",
      "Allotment setup for dependent support",
      "Power of Attorney documents",
      "Will and estate planning",
      "SGLI beneficiary information",
    ],
  },
  {
    part: "Part 6: Command Validation",
    items: [
      "Unit FCP Coordinator review",
      "Commanding Officer approval",
      "Date of validation",
      "Next review date",
    ],
  },
];

const MOL_STEPS = [
  "Log into Marine Online (MOL) at https://mol.tfs.usmc.mil",
  "Select \"Family\" from the main menu",
  "Click \"Family Care Plan\"",
  "Complete all required sections",
  "Submit for command review",
];

const MOL_REQUIRED_INFO = [
  "Personal and dependent information",
  "Designated caregivers (short-term and long-term)",
  "Caregiver contact information and addresses",
  "Medical care instructions",
  "School and childcare information",
  "Financial arrangements",
  "Emergency contacts",
  "Special instructions for dependents with unique needs",
];

const SHORT_TERM_CAREGIVER_REQS = [
  "Must be 18 years or older",
  "Must be physically capable of providing care",
  "Must live within reasonable distance of dependents",
  "Must be available on short notice",
  "Must acknowledge responsibilities in writing",
];

const LONG_TERM_CAREGIVER_REQS = [
  "Must be 18 years or older",
  "Must be physically and financially capable of providing care",
  "Must have appropriate living arrangements for dependents",
  "Must have legal authority (Power of Attorney) for medical and educational decisions",
  "Must acknowledge responsibilities in writing",
  "Should not be another service member subject to deployment",
];

const LEGAL_DOCUMENTS = [
  {
    category: "Power of Attorney (POA)",
    items: [
      "General POA for financial matters",
      "Special POA for medical decisions",
      "Special POA for educational decisions",
      "Obtain from base legal services",
    ],
  },
  {
    category: "Guardianship Documents",
    items: [
      "Designation of guardian in will",
      "Temporary guardianship agreement",
      "Coordinate with legal assistance office",
    ],
  },
  {
    category: "Financial Documents",
    items: [
      "Joint bank account or authorized user status for caregiver",
      "Allotment authorization for dependent support",
      "Access to DEERS and TRICARE information",
    ],
  },
];

const INITIAL_VALIDATION_STEPS = [
  "Complete FCP in MOL within 30 days of reporting",
  "Print NAVMC 11800 for signatures",
  "Obtain caregiver signatures (notarized if required)",
  "Submit to Unit FCP Coordinator",
  "FCP Coordinator reviews for completeness",
  "Commanding Officer validates and approves",
  "Copy retained in unit files and by Marine",
];

const EVENT_DRIVEN_UPDATES = [
  "Birth or adoption of child",
  "Change in marital status",
  "Change of caregiver",
  "PCS to new duty station",
  "Change in dependent's medical needs",
  "Change in caregiver's contact information",
  "Death of designated caregiver",
];

const EFMP_DOCUMENTATION = [
  "Current Individual Education Program (IEP) for school-age children",
  "Medical care plans and provider information",
  "Medication lists and administration instructions",
  "Therapy schedules and provider contacts",
  "Specialized equipment needs",
  "Respite care arrangements",
];

const EFMP_CAREGIVER_REQS = [
  "Must be capable of meeting special needs",
  "Must understand medical conditions and treatments",
  "Must have access to appropriate medical care",
  "Must be trained on specialized equipment or procedures",
];

const NON_COMPLIANCE_CONSEQUENCES = [
  "Counseling from commanding officer",
  "Adverse fitness report or evaluation entries",
  "Administrative action",
  "Potential impact on deployability",
  "Assignment limitations",
  "In severe cases, administrative separation processing",
];

const PRE_DEPLOYMENT_CHECKLIST = [
  "Verify FCP is current and validated",
  "Confirm caregivers are still available and willing",
  "Update contact information",
  "Ensure legal documents are current",
  "Brief caregivers on deployment timeline",
  "Provide caregivers with unit contact information",
  "Establish communication plan with family",
  "Verify allotments are set up correctly",
];

const COMMON_ISSUES = [
  {
    issue: "Caregiver No Longer Available",
    solution: "Immediately identify replacement caregiver, update FCP in MOL within 30 days, obtain new signatures, submit for re-validation",
  },
  {
    issue: "Divorced or Separated Marines",
    solution: "FCP must account for custody arrangements. Non-custodial parent may not be appropriate caregiver. Court orders regarding custody must be followed. Coordinate with legal assistance if custody is disputed.",
  },
  {
    issue: "Dual-Military Couples",
    solution: "Both members must have validated FCPs. FCPs must be coordinated to avoid conflicts. Consider staggered deployment requirements. Identify caregivers for simultaneous deployment scenario.",
  },
  {
    issue: "Geographically Separated From Caregivers",
    solution: "Ensure caregiver can travel to dependents or dependents can travel to caregiver. Plan for transportation logistics. Consider financial arrangements for relocation. Have backup local caregiver for emergencies.",
  },
];

const FCP_TIPS = [
  { tip: "Choose reliable caregivers", detail: "Select people who are committed and capable of long-term care." },
  { tip: "Have backup caregivers", detail: "Primary caregivers may become unavailable." },
  { tip: "Keep documents current", detail: "Expired POAs or outdated contact information creates problems." },
  { tip: "Brief your caregivers", detail: "Ensure they understand daily routines, medical needs, and school requirements." },
  { tip: "Test your plan", detail: "Have caregivers provide care during short absences before deployment." },
  { tip: "Communicate with family", detail: "Ensure dependents know the plan and are comfortable with caregivers." },
  { tip: "Update immediately", detail: "Any change in family situation requires FCP update." },
];

const SUPPORT_RESOURCES = [
  {
    name: "Marine Corps Family Team Building (MCFTB)",
    services: "FCP training and workshops, deployment preparation classes, family readiness resources",
  },
  {
    name: "Unit FCP Coordinator",
    services: "Assists with FCP completion, reviews FCPs for completeness, tracks validation status, answers FCP questions",
  },
  {
    name: "Legal Assistance Office",
    services: "Power of Attorney preparation, will and estate planning, guardianship documentation, legal questions regarding FCP",
  },
  {
    name: "EFMP Office",
    services: "Support for families with special needs members, coordination of specialized care requirements, respite care resources",
  },
];

export function FamilyCarePlanContent({ data }: Props) {
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
                  Family Care Plan (FCP) Overview
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The Family Care Plan (FCP) is a mandatory written plan for Marines with dependents that ensures care
                  for family members during deployments, training, or emergencies. The FCP designates caregivers and
                  outlines logistics for childcare, medical care, finances, and education when the Marine or primary
                  caregiver becomes unavailable. All Marines with dependent family members must establish and maintain
                  an FCP through Marine Online (MOL).
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
                            {"url" in item && item.url ? (
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
                <h4 className="font-semibold text-red-800 dark:text-red-200">Mandatory Requirement</h4>
                <p className="mt-1 text-sm text-red-800 dark:text-red-200">
                  Per <MCOLink mco="MCO 1740.13D" url={MCO_URLS.FAMILY_CARE} />, all service members with dependent family members are required to establish and
                  maintain an FCP, regardless of marital status or family situation. This includes married Marines
                  with a stay-at-home spouse.
                </p>
              </div>
            </>
          )}

          {activeTab === "who-requires" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Who Requires a Family Care Plan
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  While all Marines with dependents must have an FCP, certain categories require particular attention
                  to ensure complete and realistic care arrangements.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Mandatory FCP Categories
                </h3>
                <ul className="mt-4 space-y-2">
                  {MANDATORY_FCP_CATEGORIES.map((category) => (
                    <li key={category} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {category}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Consequences of Non-Compliance
                </h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Failure to establish or maintain a valid FCP may result in:
                </p>
                <ul className="mt-4 space-y-2">
                  {NON_COMPLIANCE_CONSEQUENCES.map((consequence) => (
                    <li key={consequence} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                      {consequence}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {activeTab === "components" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  FCP Components
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The NAVMC 11800 Family Care Plan Certificate consists of six parts, each addressing critical aspects
                  of dependent care arrangements.
                </p>
              </section>

              <div className="space-y-4">
                {FCP_COMPONENTS.map((component, index) => (
                  <section
                    key={component.part}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                          {component.part}
                        </h3>
                        <ul className="mt-3 space-y-1">
                          {component.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </>
          )}

          {activeTab === "mol-module" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  MOL Family Care Plan Module
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The FCP is completed and maintained through Marine Online (MOL). Access requires a CAC card.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Accessing the FCP Module
                </h3>
                <ol className="mt-4 space-y-3">
                  {MOL_STEPS.map((step, index) => (
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
                  Required Information in MOL
                </h3>
                <ul className="mt-4 space-y-2">
                  {MOL_REQUIRED_INFO.map((info) => (
                    <li key={info} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {info}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Submitting Updates
                </h3>
                <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[var(--sa-red)]">1.</span>
                    Log into MOL Family Care Plan module
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[var(--sa-red)]">2.</span>
                    Select &quot;Update Family Care Plan&quot;
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[var(--sa-red)]">3.</span>
                    Make necessary changes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[var(--sa-red)]">4.</span>
                    Submit for command re-validation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[var(--sa-red)]">5.</span>
                    Print updated NAVMC 11800 for signatures
                  </li>
                </ol>
              </section>
            </>
          )}

          {activeTab === "caregivers" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Caregiver Requirements
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The FCP requires designation of both short-term and long-term caregivers. Each type has specific
                  requirements to ensure dependents receive appropriate care.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Short-Term Caregiver
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Provides care during brief absences such as field exercises, training, or temporary duty.
                </p>
                <ul className="mt-4 space-y-2">
                  {SHORT_TERM_CAREGIVER_REQS.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Long-Term Caregiver
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Provides care during extended deployments or emergencies.
                </p>
                <ul className="mt-4 space-y-2">
                  {LONG_TERM_CAREGIVER_REQS.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important Consideration</h4>
                <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
                  Long-term caregivers should not be another service member subject to deployment. Having a military
                  member as your only long-term caregiver creates risk if both members are deployed simultaneously.
                </p>
              </div>
            </>
          )}

          {activeTab === "legal" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Legal Documents Required
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Proper legal documentation ensures caregivers have authority to make decisions and access resources
                  on your behalf.
                </p>
              </section>

              {LEGAL_DOCUMENTS.map((doc) => (
                <section
                  key={doc.category}
                  className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                >
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    {doc.category}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {doc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Legal Assistance Available</h4>
                <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
                  Base Legal Services can prepare Power of Attorney documents, wills, and guardianship agreements
                  at no cost. Schedule an appointment with your installation&apos;s legal assistance office.
                </p>
              </div>
            </>
          )}

          {activeTab === "validation" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  FCP Validation Process
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The FCP must be validated by the commanding officer and revalidated annually or when changes occur.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Initial Validation
                </h3>
                <ol className="mt-4 space-y-3">
                  {INITIAL_VALIDATION_STEPS.map((step, index) => (
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
                  Annual Revalidation
                </h3>
                <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>1. Review FCP for accuracy</li>
                  <li>2. Update any changed information in MOL</li>
                  <li>3. Obtain new caregiver signatures if needed</li>
                  <li>4. Submit for command re-validation</li>
                  <li>5. Document revalidation date</li>
                </ol>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Event-Driven Updates
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Update FCP within 30 days of:
                </p>
                <ul className="mt-4 space-y-2">
                  {EVENT_DRIVEN_UPDATES.map((event) => (
                    <li key={event} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {event}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {activeTab === "efmp" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP Considerations
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Marines with EFMP-enrolled dependents have additional FCP requirements to ensure special needs
                  are addressed.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Required Documentation
                </h3>
                <ul className="mt-4 space-y-2">
                  {EFMP_DOCUMENTATION.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Caregiver Requirements for EFMP
                </h3>
                <ul className="mt-4 space-y-2">
                  {EFMP_CAREGIVER_REQS.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Coordination Requirements
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Work with EFMP Coordinator
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Ensure caregiver is briefed on all special requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Provide caregiver with copies of medical documentation
                  </li>
                </ul>
              </section>
            </>
          )}

          {activeTab === "troubleshooter" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Common Issues & Solutions
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Solutions for common FCP challenges and complex family situations.
                </p>
              </section>

              <div className="space-y-4">
                {COMMON_ISSUES.map((item) => (
                  <section
                    key={item.issue}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">{item.issue}</h3>
                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.solution}</p>
                  </section>
                ))}
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Pre-Deployment Checklist
                </h3>
                <div className="mt-4 space-y-2">
                  {PRE_DEPLOYMENT_CHECKLIST.map((item) => (
                    <label
                      key={item}
                      className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50"
                    >
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                      />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Tips for Effective Family Care Planning
                </h3>
                <div className="mt-4 space-y-3">
                  {FCP_TIPS.map((item) => (
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
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Support Resources
                </h2>
                <div className="mt-4 space-y-4">
                  {SUPPORT_RESOURCES.map((resource) => (
                    <div key={resource.name} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{resource.name}</h3>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{resource.services}</p>
                    </div>
                  ))}
                </div>
              </section>

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
            </>
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
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Form Required</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">NAVMC 11800</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">System</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">MOL Family Care Plan Module</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Initial Submission</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Within 30 days of reporting</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Revalidation</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Annually or upon change</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Governing Order</dt>
                <dd className="text-zinc-600 dark:text-zinc-400"><MCOLink mco="MCO 1740.13D" url={MCO_URLS.FAMILY_CARE} /></dd>
              </div>
            </dl>
          </section>

          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Mandatory Requirement</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              All Marines with dependents must have a validated FCP. Failure to maintain a current FCP
              may result in adverse administrative action.
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Need Help?</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Contact your Unit FCP Coordinator or S-1/Admin section for assistance with completing
              or updating your Family Care Plan.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
