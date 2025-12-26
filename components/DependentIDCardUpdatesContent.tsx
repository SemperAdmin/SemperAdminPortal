"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "card-types", label: "Card Types" },
  { id: "documentation", label: "Documentation" },
  { id: "process", label: "Process" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
];

const KEY_POINTS = [
  "All dependents must be enrolled in DEERS before obtaining an ID card",
  "ID card appointments are required at RAPIDS-equipped sites",
  "Cards must be renewed before expiration - allow 2-3 weeks lead time",
  "Sponsor presence or DD Form 1172-2 required for dependent ID issuance",
  "Lost or stolen cards must be reported and replaced immediately",
  "Child ID cards are required for base access and medical care",
];

const CARD_TYPES = [
  {
    type: "DD Form 1173 (Tan)",
    description: "Uniformed Services ID Card for dependents",
    eligibility: "Spouse, children under 21, children 21-22 (full-time students)",
    benefits: "Commissary, Exchange, MWR, medical care, base access",
    expiration: "Varies - typically matches sponsor's EAS or child's 21st birthday",
  },
  {
    type: "DD Form 1173-1 (Tan with Red Stripe)",
    description: "Guard/Reserve Dependent ID Card",
    eligibility: "Dependents of Guard/Reserve members not on active duty",
    benefits: "Limited benefits based on sponsor's duty status",
    expiration: "Varies based on sponsor's reserve status",
  },
  {
    type: "DD Form 2765 (Blue)",
    description: "Retired Uniformed Services ID Card (Dependent)",
    eligibility: "Dependents of retired service members",
    benefits: "Full commissary, Exchange, and medical care",
    expiration: "Indefinite for spouse; age-based for children",
  },
  {
    type: "TRICARE Young Adult Card",
    description: "For adult children ages 21-26 enrolled in TYA",
    eligibility: "Unmarried adult children enrolled in TRICARE Young Adult",
    benefits: "Medical care through TYA (purchased coverage)",
    expiration: "Age 26",
  },
];

const REQUIRED_DOCUMENTS = {
  newEnrollment: [
    "Two forms of ID for the sponsor (one must be photo ID)",
    "Marriage certificate for spouse enrollment",
    "Birth certificate or adoption decree for child enrollment",
    "Social Security card for dependent",
    "Court order for stepchildren (if required)",
    "DD Form 1172-2 if sponsor is not present",
  ],
  renewal: [
    "Current expired or expiring ID card",
    "One form of ID (can be the expiring ID)",
    "DD Form 1172-2 if sponsor is not present",
    "Updated documentation if information has changed",
  ],
  replacement: [
    "Police report if card was stolen",
    "Statement of loss if card was lost",
    "One form of ID (driver's license, passport, etc.)",
    "DD Form 1172-2 if sponsor is not present",
  ],
};

const DD_1172_2_SECTIONS = [
  {
    section: "Block 1-6",
    content: "Sponsor identification and contact information",
    notes: "Must match sponsor's CAC information",
  },
  {
    section: "Block 7-18",
    content: "Dependent information and relationship",
    notes: "Include SSN, DOB, and relationship type",
  },
  {
    section: "Block 19-23",
    content: "Benefits entitlement determination",
    notes: "Check appropriate boxes for authorized benefits",
  },
  {
    section: "Block 24-26",
    content: "Sponsor certification and signature",
    notes: "Sponsor must sign authorizing dependent ID issuance",
  },
  {
    section: "Block 27-30",
    content: "Verifying official certification",
    notes: "S-1/Admin verifies sponsor identity and authority",
  },
];

const RENEWAL_TIMELINE = [
  { timing: "90 days before expiration", action: "Schedule RAPIDS appointment" },
  { timing: "60 days before expiration", action: "Gather required documentation" },
  { timing: "30 days before expiration", action: "Attend ID card appointment" },
  { timing: "14 days before expiration", action: "Backup window if appointment rescheduled" },
  { timing: "Expiration date", action: "Card becomes invalid - benefits suspended" },
];

const COMMON_ISSUES = [
  {
    issue: "DEERS information mismatch",
    cause: "Dependent not enrolled or information outdated in DEERS",
    solution: "Update DEERS first through unit S-1 or RAPIDS site before ID card appointment",
  },
  {
    issue: "Missing sponsor authorization",
    cause: "Sponsor not present and no DD Form 1172-2",
    solution: "Obtain signed DD Form 1172-2 from sponsor and have it verified by S-1",
  },
  {
    issue: "Documentation rejected",
    cause: "Documents are copies, expired, or don't match DEERS",
    solution: "Bring original or certified copies of all required documents",
  },
  {
    issue: "Appointment not available",
    cause: "High demand at RAPIDS sites",
    solution: "Check multiple RAPIDS locations; appointments open 2 weeks in advance",
  },
  {
    issue: "Child turning 21",
    cause: "Automatic termination of benefits at age 21",
    solution: "If full-time student, bring enrollment verification for extension to 22",
  },
  {
    issue: "Divorce/legal separation",
    cause: "Former spouse status requires updated documentation",
    solution: "Bring divorce decree and verify 20/20/20 or 20/20/15 eligibility if applicable",
  },
];

const RAPIDS_LOCATIONS = [
  "On-base Personnel/S-1 offices",
  "ID Card facilities on military installations",
  "Some National Guard/Reserve centers",
  "Defense Finance and Accounting Service (DFAS) offices",
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
                  Dependent ID cards provide access to military installations, medical care, commissary,
                  exchange, and MWR facilities. This guide covers obtaining, renewing, and replacing
                  dependent ID cards through the DEERS/RAPIDS system.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key Points
                </h3>
                <ul className="mt-4 space-y-2">
                  {KEY_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {point}
                    </li>
                  ))}
                </ul>
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
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Appointment Required</h4>
                <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
                  ID card issuance requires an appointment at a RAPIDS-equipped site. Walk-ins
                  may not be available. Schedule appointments at least 2-3 weeks in advance,
                  especially before school breaks and PCS season.
                </p>
              </div>
            </>
          )}

          {activeTab === "card-types" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Dependent ID Card Types
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Different ID cards are issued based on the sponsor's status and the dependent's
                  relationship. Each card type provides different benefits and has different
                  expiration rules.
                </p>
              </section>

              <div className="space-y-4">
                {CARD_TYPES.map((card) => (
                  <section
                    key={card.type}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      {card.type}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{card.description}</p>
                    <div className="mt-4 grid gap-3">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Eligibility
                        </span>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">{card.eligibility}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Benefits
                        </span>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">{card.benefits}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Expiration
                        </span>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">{card.expiration}</p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </>
          )}

          {activeTab === "documentation" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Required Documentation
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Documentation requirements vary based on the type of action (new enrollment,
                  renewal, or replacement). Bring original or certified copies of all documents.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  New Enrollment
                </h3>
                <ul className="mt-4 space-y-2">
                  {REQUIRED_DOCUMENTS.newEnrollment.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Renewal
                </h3>
                <ul className="mt-4 space-y-2">
                  {REQUIRED_DOCUMENTS.renewal.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Replacement (Lost/Stolen)
                </h3>
                <ul className="mt-4 space-y-2">
                  {REQUIRED_DOCUMENTS.replacement.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  DD Form 1172-2 (Application for ID Card)
                </h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Required when the sponsor cannot be present. Must be signed by the sponsor
                  and verified by the unit S-1.
                </p>
                <div className="mt-4 space-y-3">
                  {DD_1172_2_SECTIONS.map((section) => (
                    <div
                      key={section.section}
                      className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50"
                    >
                      <div className="flex-shrink-0 font-mono text-sm font-bold text-[var(--sa-red)]">
                        {section.section}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{section.content}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">{section.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {activeTab === "process" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  ID Card Issuance Process
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Follow these steps to obtain, renew, or replace a dependent ID card.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Step-by-Step Process
                </h3>
                <ol className="mt-4 space-y-4">
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
                    <div>
                      <strong>Verify DEERS Enrollment</strong>
                      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        Confirm dependent is enrolled in DEERS with correct information.
                        Use milConnect or contact unit S-1 to verify.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
                    <div>
                      <strong>Schedule RAPIDS Appointment</strong>
                      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        Find a RAPIDS site and schedule an appointment. Check multiple
                        locations for earlier availability.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
                    <div>
                      <strong>Gather Documentation</strong>
                      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        Collect all required documents based on the type of action
                        (new, renewal, or replacement).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
                    <div>
                      <strong>Obtain DD Form 1172-2 (if needed)</strong>
                      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        If sponsor cannot attend, obtain signed and verified DD Form 1172-2
                        from unit S-1.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
                    <div>
                      <strong>Attend Appointment</strong>
                      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        Bring all documentation. Photo will be taken and card issued
                        on the spot if all documents are in order.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
                    <div>
                      <strong>Verify Card Information</strong>
                      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        Before leaving, verify all information on the card is correct.
                        Errors are easier to fix immediately.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Renewal Timeline
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timing</th>
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                      {RENEWAL_TIMELINE.map((item) => (
                        <tr key={item.timing}>
                          <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.timing}</td>
                          <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  RAPIDS Locations
                </h3>
                <ul className="mt-4 space-y-2">
                  {RAPIDS_LOCATIONS.map((location) => (
                    <li key={location} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {location}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                  Use the ID Card Office Locator at milConnect to find RAPIDS sites near you.
                </p>
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
                  These are common problems encountered during the ID card process and how to resolve them.
                </p>
              </section>

              <div className="space-y-4">
                {COMMON_ISSUES.map((item) => (
                  <section
                    key={item.issue}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">{item.issue}</h3>
                    <div className="mt-3 space-y-2">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Common Cause
                        </span>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">{item.cause}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Solution
                        </span>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">{item.solution}</p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">Pro Tips</h4>
                <ul className="mt-2 space-y-1 text-sm text-amber-800 dark:text-amber-200">
                  <li>- Call ahead to confirm appointment and document requirements</li>
                  <li>- Bring extra documentation in case of discrepancies</li>
                  <li>- Check DEERS information online before your appointment</li>
                  <li>- Schedule appointments early in the day in case issues arise</li>
                </ul>
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
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Appointment Required</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Yes - at RAPIDS site</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Renewal Lead Time</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">30-90 days before expiration</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Sponsor Not Present?</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">DD Form 1172-2 required</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">DEERS Verification</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">milConnect or unit S-1</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Lost or Stolen Cards</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Report lost or stolen ID cards immediately to prevent unauthorized use.
              File a police report for stolen cards, then schedule a RAPIDS appointment
              for replacement.
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Children Under 10</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Children under 10 do not require an ID card for TRICARE benefits but may
              need one for base access. Cards for young children are issued without photos.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
