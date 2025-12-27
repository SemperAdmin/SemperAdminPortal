"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "enrollment", label: "DEERS Enrollment" },
  { id: "online-renewal", label: "Online Renewal" },
  { id: "in-person", label: "In-Person Updates" },
  { id: "documents", label: "Documents" },
  { id: "card-info", label: "Card Info" },
  { id: "situations", label: "Common Situations" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
];

const KEY_REQUIREMENTS = [
  { element: "Database", requirement: "DEERS (Defense Enrollment Eligibility Reporting System)" },
  { element: "Card Issuance System", requirement: "RAPIDS (Real Time Automated Personnel Identification System)" },
  { element: "Online Portal", requirement: "ID Card Office Online (IDCO) at idco.dmdc.osd.mil" },
  { element: "Card Type", requirement: "USID (Uniformed Services ID) - plastic card" },
  { element: "Sponsor Requirement", requirement: "Sponsor presence or DD Form 1172-2/POA for updates" },
  { element: "Authority", requirement: "DoD Manual 1000.13" },
];

const WHO_MUST_BE_ENROLLED = [
  "Spouse",
  "Children (biological, adopted, step-children)",
  "Wards of the court",
  "Parents or parents-in-law (if claimed as dependents)",
  "Full-time students age 21-22",
  "Incapacitated children over age 21",
];

const WHEN_TO_UPDATE_DEERS = [
  "Marriage or divorce",
  "Birth or adoption of child",
  "Child reaches age 21 (or 23 if full-time student)",
  "Death of dependent",
  "Change of address",
  "Change of phone number",
  "Name change",
  "Custody changes",
];

const ONLINE_RENEWAL_ELIGIBLE = [
  "Current dependent in DEERS",
  "Card expiring or recently expired",
  "No changes to dependent information needed",
  "Valid mailing address on file",
];

const ONLINE_RENEWAL_NOT_ELIGIBLE = [
  "New dependents not yet in DEERS",
  "Dependents requiring information updates",
  "First-time card issuance",
  "Lost or stolen cards (some cases)",
];

const IDCO_RENEWAL_STEPS = [
  { step: "Access IDCO", detail: "Go to https://idco.dmdc.osd.mil and select \"Family ID Cards\"" },
  { step: "Check Eligibility", detail: "Click \"Request ID Card\" to verify the dependent is eligible for online renewal" },
  { step: "Submit Request", detail: "Select the card to be renewed, choose reason, review information, confirm mailing address, and submit" },
  { step: "Receive and Activate", detail: "New card arrives by mail (7-10 business days). Activate online through IDCO. Destroy old card after activation." },
];

const IN_PERSON_REQUIRED = [
  "Adding new dependents to DEERS",
  "Removing dependents from DEERS",
  "First-time ID card issuance",
  "Name changes",
  "Correcting DEERS information",
  "Lost or stolen card replacement (some cases)",
  "Adding or updating EFMP information",
];

const RAPIDS_LOCATOR_STEPS = [
  "Visit https://idco.dmdc.osd.mil",
  "Select \"ID Card Office Locator\"",
  "Enter ZIP code or installation name",
  "View available locations and hours",
  "Schedule appointment online",
];

const REQUIRED_DOCS = {
  sponsor: [
    "Two forms of ID (one must be photo ID)",
    "Valid CAC or military ID",
    "Driver's license or state ID",
  ],
  spouse: [
    "Marriage certificate (certified copy)",
    "Spouse's government-issued photo ID",
    "Spouse's Social Security card or documentation",
  ],
  childBirth: [
    "Birth certificate (certified copy)",
    "Child's Social Security card or documentation",
  ],
  childAdoption: [
    "Adoption decree",
    "Child's birth certificate (if available)",
    "Child's Social Security card or documentation",
  ],
  stepChild: [
    "Marriage certificate",
    "Child's birth certificate showing spouse as parent",
    "Child's Social Security card or documentation",
  ],
  divorce: [
    "Divorce decree (final)",
    "Spouse's ID card for destruction",
  ],
  nameChange: [
    "Court order for name change, OR",
    "Marriage certificate, OR",
    "Divorce decree showing name restoration",
    "Social Security card with new name (recommended)",
  ],
};

const SPONSOR_PRESENCE_REQUIRED = [
  "Initial DEERS enrollment of new dependent",
  "Adding dependents for the first time",
  "Making significant changes to dependent records",
];

const SPONSOR_NOT_REQUIRED = [
  "Dependent renewing their own card online",
  "Dependent updating address or phone (online)",
  "Card activation",
];

const SPONSOR_ALTERNATIVES = [
  {
    option: "DD Form 1172-2 (Application for DOD Common Access Card)",
    requirements: ["Signed by sponsor", "Notarized (within 90 days)", "Completed with dependent information"],
  },
  {
    option: "Power of Attorney (POA)",
    requirements: ["Specific POA authorizing DEERS/ID card actions", "General POA may be accepted", "Must be current and valid"],
  },
];

const CARD_EXPIRATION = [
  { dependentType: "Spouse", expiration: "4 years from issuance or sponsor's EAS" },
  { dependentType: "Child under 14", expiration: "Child's 14th birthday" },
  { dependentType: "Child 14-20", expiration: "Child's 21st birthday or 4 years" },
  { dependentType: "Child 21-22 (student)", expiration: "End of school year or 23rd birthday" },
  { dependentType: "Incapacitated child", expiration: "4 years (requires re-certification)" },
];

const ONLINE_UPDATES = [
  "Mailing address",
  "Phone numbers",
  "Email address",
  "Emergency contact information",
];

const COMMON_SITUATIONS = [
  {
    situation: "Child Turning 21",
    details: [
      "Dependent status ends unless full-time student or incapacitated",
      "If full-time student: Submit DD 137 and school enrollment verification",
      "ID card will expire on 21st birthday unless extended",
      "Update DEERS before birthday to avoid coverage gap",
    ],
  },
  {
    situation: "Divorce",
    details: [
      "Former spouse loses eligibility (with exceptions)",
      "Remove ex-spouse from DEERS",
      "Collect and destroy ex-spouse's ID card",
      "Update dependent children's information if custody changes",
    ],
  },
  {
    situation: "Remarriage",
    details: [
      "Add new spouse to DEERS with marriage certificate",
      "Issue new spouse ID card",
      "Add step-children if applicable",
    ],
  },
  {
    situation: "Lost or Stolen Card",
    details: [
      "Report lost/stolen card immediately",
      "Request replacement through IDCO online, OR",
      "Visit RAPIDS office in person",
      "May require police report for stolen cards",
    ],
  },
  {
    situation: "Dependent Living Overseas",
    details: [
      "Can request card through overseas RAPIDS location",
      "Some installations have limited hours",
      "Coordinate with installation ID card office",
      "May require additional documentation for foreign-born dependents",
    ],
  },
];

const TROUBLESHOOTING = [
  {
    issue: "Dependent Not Showing in DEERS",
    solutions: [
      "Verify NAVMC 10922 was processed",
      "Check MCTFS for dependent entry",
      "Contact IPAC to verify unit diary submission",
      "Allow 24-48 hours for system updates",
    ],
  },
  {
    issue: "Name Mismatch",
    solutions: [
      "DEERS name must match Social Security records",
      "Update Social Security first, then DEERS",
      "Bring Social Security card to RAPIDS appointment",
    ],
  },
  {
    issue: "Card Will Not Activate",
    solutions: [
      "Verify card was issued to correct person",
      "Check that old card was deactivated",
      "Contact IDCO help desk",
      "May need to visit RAPIDS office",
    ],
  },
  {
    issue: "Denied Renewal Online",
    solutions: [
      "Dependent information may need updating",
      "Visit RAPIDS office in person",
      "Bring all supporting documentation",
    ],
  },
];

const TRICARE_DEERS_NOTES = [
  "No DEERS enrollment = No TRICARE coverage",
  "Keep DEERS address current for TRICARE correspondence",
  "Update DEERS when changing TRICARE plans",
  "Newborns automatically covered for 60 days, then must enroll",
];

export function DependentIDCardUpdatesContent({ data }: Props) {
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
                  Dependent ID Card Updates Overview
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The Defense Enrollment Eligibility Reporting System (DEERS) is the primary DoD database for verifying
                  eligibility for military benefits including health care, commissary, exchange, and other entitlements.
                  The Real Time Automated Personnel Identification System (RAPIDS) connects ID card offices to DEERS for
                  enrollment and card issuance. Sponsors must keep DEERS information current and ensure dependents have
                  valid ID cards.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key Information
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
                          <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  DEERS vs RAPIDS
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">DEERS</h4>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      Defense Enrollment Eligibility Reporting System - the database that stores
                      dependent eligibility information. Dependents must be enrolled in DEERS
                      before obtaining an ID card.
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">RAPIDS</h4>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      Real-time Automated Personnel Identification System - the system used to
                      produce military ID cards. RAPIDS sites are where ID cards are actually issued.
                    </p>
                  </div>
                </div>
              </section>

              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">TRICARE Requires DEERS</h4>
                <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
                  DEERS enrollment is required for TRICARE eligibility. No DEERS enrollment means no TRICARE coverage.
                  Newborns are automatically covered for 60 days, then must be enrolled.
                </p>
              </div>
            </>
          )}

          {activeTab === "enrollment" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  DEERS Enrollment Requirements
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  All eligible dependents must be enrolled in DEERS to receive military benefits and obtain ID cards.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Who Must Be Enrolled
                </h3>
                <ul className="mt-4 space-y-2">
                  {WHO_MUST_BE_ENROLLED.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  When to Update DEERS
                </h3>
                <ul className="mt-4 space-y-2">
                  {WHEN_TO_UPDATE_DEERS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  TRICARE and DEERS
                </h3>
                <ul className="mt-4 space-y-2">
                  {TRICARE_DEERS_NOTES.map((note) => (
                    <li key={note} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {note}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {activeTab === "online-renewal" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Online ID Card Renewal
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  For existing dependents with expiring cards, use the ID Card Office Online (IDCO) system at
                  idco.dmdc.osd.mil to renew without visiting an office.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  IDCO Renewal Steps
                </h3>
                <div className="mt-4 space-y-4">
                  {IDCO_RENEWAL_STEPS.map((item, index) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.step}</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid gap-4 sm:grid-cols-2">
                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">
                    Eligible for Online Renewal
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {ONLINE_RENEWAL_ELIGIBLE.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
                    Not Eligible for Online Renewal
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {ONLINE_RENEWAL_NOT_ELIGIBLE.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Information You Can Update Online
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Through milConnect or IDCO without visiting an office:
                </p>
                <ul className="mt-4 space-y-2">
                  {ONLINE_UPDATES.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {activeTab === "in-person" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  In-Person Updates
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Certain actions require an in-person visit to a RAPIDS ID card office.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Actions Requiring In-Person Visit
                </h3>
                <ul className="mt-4 space-y-2">
                  {IN_PERSON_REQUIRED.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Finding a RAPIDS Location
                </h3>
                <ol className="mt-4 space-y-3">
                  {RAPIDS_LOCATOR_STEPS.map((step, index) => (
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
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">Appointment Tips</h4>
                <ul className="mt-2 space-y-1 text-sm text-amber-800 dark:text-amber-200">
                  <li>- Appointments are strongly recommended</li>
                  <li>- Walk-ins may experience long wait times</li>
                  <li>- Some locations are appointment-only</li>
                  <li>- Schedule through IDCO website or by phone</li>
                </ul>
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Sponsor Presence Requirements
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Sponsor Must Be Present</h4>
                    <ul className="mt-2 space-y-1">
                      {SPONSOR_PRESENCE_REQUIRED.map((item) => (
                        <li key={item} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Sponsor Not Required</h4>
                    <ul className="mt-2 space-y-1">
                      {SPONSOR_NOT_REQUIRED.map((item) => (
                        <li key={item} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  If Sponsor Cannot Be Present
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  The dependent must bring one of the following:
                </p>
                <div className="mt-4 space-y-4">
                  {SPONSOR_ALTERNATIVES.map((alt) => (
                    <div key={alt.option} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{alt.option}</h4>
                      <ul className="mt-2 space-y-1">
                        {alt.requirements.map((req) => (
                          <li key={req} className="text-sm text-zinc-600 dark:text-zinc-400">• {req}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {activeTab === "documents" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Required Documents
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Bring original or certified copies of all required documents to your RAPIDS appointment.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Sponsor Identification
                </h3>
                <ul className="mt-4 space-y-2">
                  {REQUIRED_DOCS.sponsor.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="grid gap-4 sm:grid-cols-2">
                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Adding Spouse
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {REQUIRED_DOCS.spouse.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Adding Child (Birth)
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {REQUIRED_DOCS.childBirth.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Adding Child (Adoption)
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {REQUIRED_DOCS.childAdoption.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Adding Step-Child
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {REQUIRED_DOCS.stepChild.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Divorce or Removal of Spouse
                </h3>
                <ul className="mt-4 space-y-2">
                  {REQUIRED_DOCS.divorce.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Name Change
                </h3>
                <ul className="mt-4 space-y-2">
                  {REQUIRED_DOCS.nameChange.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {activeTab === "card-info" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  USID Card Information
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The DoD has transitioned to more secure plastic USID cards replacing older laminated cards.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  New Plastic USID Cards
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Features include:</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Plastic card similar to CAC
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Enhanced security features
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Photo of dependent
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Barcode for scanning
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Expiration date
                  </li>
                </ul>
              </section>

              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">Replacing &quot;INDEF&quot; Cards</h4>
                <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
                  Older cards marked &quot;INDEF&quot; (indefinite) are being replaced. Cards are still valid until replaced,
                  but replacement is required at next update or when directed. New cards will have expiration dates.
                </p>
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Card Expiration by Dependent Type
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Dependent Type</th>
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Expiration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                      {CARD_EXPIRATION.map((item) => (
                        <tr key={item.dependentType}>
                          <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.dependentType}</td>
                          <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.expiration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}

          {activeTab === "situations" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Common ID Card Situations
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Guidance for common life events affecting dependent ID cards and DEERS enrollment.
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
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </>
          )}

          {activeTab === "troubleshooter" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Troubleshooting Common Issues
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Solutions for common DEERS and ID card problems.
                </p>
              </section>

              <div className="space-y-4">
                {TROUBLESHOOTING.map((item) => (
                  <section
                    key={item.issue}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">{item.issue}</h3>
                    <ul className="mt-4 space-y-2">
                      {item.solutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Need Help?</h4>
                <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
                  Contact DEERS Support at 1-800-538-9552 or visit your installation IPAC for assistance
                  with MCTFS and dependency questions.
                </p>
              </div>
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
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Online Portal</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">idco.dmdc.osd.mil</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">DEERS Support</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">1-800-538-9552</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Online Updates</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">milConnect</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Sponsor Not Present?</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">DD 1172-2 or POA required</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Lost or Stolen Cards</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Report lost or stolen ID cards immediately. Request replacement through IDCO online or visit a
              RAPIDS office in person.
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Online Renewal</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Existing dependents with expiring cards can renew online at idco.dmdc.osd.mil.
              New cards arrive in 7-10 business days.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
