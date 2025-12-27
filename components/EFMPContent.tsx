"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Who Qualifies" },
  { id: "enrollment", label: "Enrollment" },
  { id: "assignments", label: "Assignments" },
  { id: "resources", label: "Resources" },
  { id: "family-support", label: "Family Support" },
  { id: "references", label: "References" },
];

const KEY_FUNCTIONS = [
  {
    title: "Assignment Coordination",
    description: "Considers family special needs (medical/educational) during assignment processes to place families in locations where support exists.",
  },
  {
    title: "Resource Connection",
    description: "Links families with community, housing, educational (IEPs, 504s), and specialized medical/therapy services.",
  },
  {
    title: "Family Support",
    description: "Provides access to respite care (short-term relief for caregivers) and advocacy support.",
  },
];

const WHO_QUALIFIES = [
  "Dependents with chronic conditions needing specialist care",
  "Individuals with developmental, intellectual, emotional, or physical disorders",
  "Those requiring ongoing therapies (speech, occupational)",
  "Those requiring special equipment",
  "Those requiring significant behavioral health support",
  "Children with Individual Education Programs (IEPs) or 504 plans",
  "Dependents requiring ongoing medical treatment not available everywhere",
];

const QUALIFYING_CONDITIONS = [
  {
    category: "Medical Conditions",
    examples: [
      "Chronic illnesses requiring specialist care",
      "Physical disabilities",
      "Conditions requiring specialized equipment",
      "Conditions requiring ongoing medical treatment",
    ],
  },
  {
    category: "Developmental/Intellectual",
    examples: [
      "Autism Spectrum Disorder",
      "Intellectual disabilities",
      "Developmental delays",
      "Learning disabilities",
    ],
  },
  {
    category: "Behavioral/Mental Health",
    examples: [
      "ADHD requiring ongoing treatment",
      "Anxiety disorders",
      "Depression requiring ongoing care",
      "Other behavioral health conditions",
    ],
  },
  {
    category: "Educational Needs",
    examples: [
      "Special education services (IEP)",
      "504 accommodations",
      "Speech therapy",
      "Occupational therapy",
      "Physical therapy",
    ],
  },
];

const ENROLLMENT_STEPS = [
  {
    step: "Identification",
    description: "Family member is identified with qualifying needs by medical provider, school, or self-identification",
  },
  {
    step: "Medical Documentation",
    description: "Complete DD Form 2792 (Exceptional Family Member Medical Summary) with healthcare provider",
  },
  {
    step: "Educational Documentation",
    description: "Complete DD Form 2792-1 (Exceptional Family Member Special Education/EIS Summary) if applicable",
  },
  {
    step: "Submit to EFMP Office",
    description: "Submit completed forms to installation EFMP office for review and enrollment",
  },
  {
    step: "Category Assignment",
    description: "EFMP staff assigns category based on level of care required",
  },
  {
    step: "DEERS Update",
    description: "EFMP status is updated in DEERS for assignment coordination",
  },
];

const EFMP_CATEGORIES = [
  {
    category: "Category 1",
    description: "Mild conditions - may require minor accommodations but readily available at most locations",
  },
  {
    category: "Category 2",
    description: "Moderate conditions - requires specific services that may limit assignment locations",
  },
  {
    category: "Category 3",
    description: "Severe conditions - requires specialized care significantly limiting assignment options",
  },
  {
    category: "Category 4",
    description: "Very severe conditions - requires highly specialized care available at very few locations",
  },
  {
    category: "Category 5",
    description: "Extraordinary conditions - requires intensive, specialized care limiting assignments to specific areas",
  },
];

const ASSIGNMENT_PROCESS = [
  "EFMP enrollment is flagged in personnel system",
  "When orders are cut, EFMP office reviews potential duty station",
  "Medical and educational resources at gaining installation are verified",
  "If resources are inadequate, alternative assignments are considered",
  "Marine retains final decision but is informed of resource availability",
  "Mission requirements remain primary consideration",
];

const RESOURCES_AVAILABLE = [
  {
    resource: "Military OneSource - EFMP & Me",
    description: "Personalized checklists and information for EFMP families",
    access: "https://www.militaryonesource.mil",
  },
  {
    resource: "Respite Care",
    description: "Short-term relief care for primary caregivers, varying hours based on service and eligibility",
    access: "Contact installation EFMP office",
  },
  {
    resource: "TRICARE Extended Care Health Option (ECHO)",
    description: "Additional benefits for qualifying EFMP dependents beyond standard TRICARE",
    access: "https://www.tricare.mil/echo",
  },
  {
    resource: "Early Intervention Services",
    description: "Services for children birth to age 3 with developmental delays",
    access: "Contact installation EFMP office or school liaison",
  },
  {
    resource: "School Liaison Officers",
    description: "Assistance with educational transitions and IEP/504 coordination",
    access: "Contact installation school liaison office",
  },
];

const FAMILY_SUPPORT_SERVICES = [
  {
    service: "EFMP Family Support",
    description: "Non-medical case management, information, referral, and follow-up services",
  },
  {
    service: "Respite Care",
    description: "Temporary relief for caregivers - hours vary by installation and need",
  },
  {
    service: "Parent Support Groups",
    description: "Connection with other EFMP families for peer support",
  },
  {
    service: "Advocacy Support",
    description: "Help navigating systems and accessing entitled benefits",
  },
  {
    service: "PCS Transition Assistance",
    description: "Help coordinating care and services during permanent change of station",
  },
  {
    service: "IEP/504 Coordination",
    description: "Assistance ensuring educational services transfer to new schools",
  },
];

const COMMON_QUESTIONS = [
  {
    question: "Is EFMP enrollment mandatory?",
    answer: "Yes, EFMP is a mandatory DoD program. Service members must enroll family members who meet the criteria.",
  },
  {
    question: "Will EFMP enrollment hurt my career?",
    answer: "EFMP enrollment should not negatively impact career progression. It ensures your family has access to needed resources.",
  },
  {
    question: "Can I be assigned anywhere with EFMP?",
    answer: "Mission remains primary, but EFMP helps ensure families are assigned where resources exist. Some high-category enrollments may limit options.",
  },
  {
    question: "How often must I update EFMP documentation?",
    answer: "EFMP documentation should be updated annually or when there is a significant change in the family member's condition.",
  },
  {
    question: "What if resources aren't available at my new duty station?",
    answer: "Contact EFMP office immediately. They can help identify resources or, in some cases, request assignment reconsideration.",
  },
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
                  The Exceptional Family Member Program (EFMP) is a mandatory Department of Defense program for military
                  families with members needing specialized medical, educational, or behavioral support. EFMP ensures
                  these needs are considered for assignments and connects families to crucial community, housing, and
                  support services like respite care and specialized care coordination.
                </p>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Enrollment involves documenting conditions like chronic illnesses, disabilities, or ongoing therapies,
                  helping service members get stationed where resources (doctors, therapists, schools) are available to
                  meet those needs.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key Functions of EFMP
                </h3>
                <div className="mt-4 space-y-4">
                  {KEY_FUNCTIONS.map((func) => (
                    <div key={func.title} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{func.title}</h4>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{func.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Mandatory Program</h4>
                <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
                  EFMP is a mandatory DoD program. Active-duty service members must enroll family members who meet
                  the criteria. Enrollment helps ensure your family has access to needed resources at duty stations.
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
                  Dependents who require specialized medical, educational, or behavioral support may qualify for EFMP enrollment.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  General Eligibility
                </h3>
                <ul className="mt-4 space-y-2">
                  {WHO_QUALIFIES.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="space-y-4">
                {QUALIFYING_CONDITIONS.map((category) => (
                  <section
                    key={category.category}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      {category.category}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {category.examples.map((example) => (
                        <li key={example} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </>
          )}

          {activeTab === "enrollment" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP Enrollment Process
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Enrollment documents the special needs of family members to help personnel offices understand
                  requirements for medical and educational support during the assignment process.
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
                      Exceptional Family Member Medical Summary - completed by healthcare provider documenting
                      medical conditions and required care.
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">DD Form 2792-1</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Exceptional Family Member Special Education/EIS Summary - completed for dependents
                      receiving special education or early intervention services.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP Categories
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Category</th>
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                      {EFMP_CATEGORIES.map((cat) => (
                        <tr key={cat.category}>
                          <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{cat.category}</td>
                          <td className="py-3 text-zinc-700 dark:text-zinc-300">{cat.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}

          {activeTab === "assignments" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP and Assignments
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  EFMP staff work with personnel to match needs with available resources at potential duty stations.
                  Military mission remains the primary consideration, but EFMP helps ensure families are assigned
                  where needed resources exist.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Assignment Coordination Process
                </h3>
                <ol className="mt-4 space-y-3">
                  {ASSIGNMENT_PROCESS.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </section>

              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">Mission Remains Primary</h4>
                <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
                  While EFMP considers family needs, military mission requirements remain the primary factor in
                  assignment decisions. EFMP helps ensure families are informed about resource availability and
                  can plan accordingly.
                </p>
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  PCS Considerations
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Contact EFMP office at gaining installation before PCS
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Coordinate transfer of medical records and IEPs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Identify specialists and resources at new location
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Work with School Liaison Officer for education transitions
                  </li>
                </ul>
              </section>
            </>
          )}

          {activeTab === "resources" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP Resources
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  EFMP connects families with a variety of resources for medical, educational, and support services.
                </p>
              </section>

              <div className="space-y-4">
                {RESOURCES_AVAILABLE.map((resource) => (
                  <section
                    key={resource.resource}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      {resource.resource}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{resource.description}</p>
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <strong>Access:</strong> {resource.access}
                    </p>
                  </section>
                ))}
              </div>
            </>
          )}

          {activeTab === "family-support" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  EFMP Family Support Services
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  EFMP provides non-medical case management and connects families with community resources.
                </p>
              </section>

              <div className="space-y-4">
                {FAMILY_SUPPORT_SERVICES.map((service) => (
                  <section
                    key={service.service}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      {service.service}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{service.description}</p>
                  </section>
                ))}
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Common Questions
                </h3>
                <div className="mt-4 space-y-4">
                  {COMMON_QUESTIONS.map((qa) => (
                    <div key={qa.question} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{qa.question}</h4>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{qa.answer}</p>
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
                <dd className="text-zinc-600 dark:text-zinc-400">MCO 1754.4C</dd>
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
                <dd className="text-zinc-600 dark:text-zinc-400">Annually or upon change</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Military OneSource</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Access EFMP & Me at militaryonesource.mil for personalized checklists, resources, and information
              tailored to your family&apos;s needs.
            </p>
          </div>

          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200">Contact EFMP Office</h4>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              Your installation EFMP office can help with enrollment, resources, and PCS coordination.
              Contact them early when receiving orders.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
