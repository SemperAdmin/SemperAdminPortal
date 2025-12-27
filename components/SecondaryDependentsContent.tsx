"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Dependent Types" },
  { id: "dd137", label: "DD 137 Form" },
  { id: "process", label: "Process" },
  { id: "support", label: "Support Requirements" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
];

const KEY_POINTS = [
  { element: "Primary Form", requirement: "DD 137 (Dependency Statement)" },
  { element: "Marine Corps Form", requirement: "NAVMC 10922 (Dependency Application)" },
  { element: "Support Requirement", requirement: "Over 50% of dependent's support" },
  { element: "Approval Authority", requirement: "CMC (MFP-1)" },
  { element: "Re-Determination", requirement: "Annual (for most secondary dependents)" },
  { element: "Authority", requirement: "MCO 1751.3 CH-1, DoD FMR 7000.14-R" },
];

const SECONDARY_DEPENDENT_TYPES = [
  {
    type: "Parent",
    description: "Biological, adoptive, or stepparent of the member",
    requirements: ["Dependent on member for over 50% of support", "DD 137 with financial documentation", "Parent's income verification"]
  },
  {
    type: "Parent-in-Law",
    description: "Parent of the member's current spouse",
    requirements: ["Dependent on member for over 50% of support", "DD 137 with financial documentation", "Marriage certificate to establish relationship", "Parent-in-law's income verification"]
  },
  {
    type: "Ward of Court",
    description: "Person placed in member's legal custody by court order",
    requirements: ["Court order establishing guardianship (permanent or 12+ months)", "Ward placed in custody before age 21", "Ward dependent on member for over 50% of support", "Ward resides with member"]
  },
  {
    type: "Incapacitated Child Over 21",
    description: "Unmarried child incapable of self-support due to mental or physical incapacity",
    requirements: ["Incapacity existed before age 21 (or before age 23 if full-time student)", "Medical evaluation within 4 months", "DSM-5 diagnosis for intellectual disability", "Annual re-determination required"]
  },
  {
    type: "Full-Time Student Age 21-22",
    description: "Unmarried child enrolled full-time in higher education",
    requirements: ["Full-time enrollment in accredited institution", "Letter from school confirming enrollment", "Student's income verification", "Annual re-determination required"]
  },
];

const DD137_SECTIONS = [
  { section: "Section I", content: "Service member identification and contact information" },
  { section: "Section II", content: "Proposed dependent's identification and relationship to member" },
  { section: "Section III", content: "Financial data - dependent's income from all sources" },
  { section: "Section IV", content: "Member's contribution to dependent's support" },
  { section: "Section V", content: "Dependent's expenses and financial obligations" },
  { section: "Section VI", content: "Certification and signatures (notarized)" },
];

const ACCEPTABLE_SUPPORT_PROOF = [
  "Bank-to-bank electronic transfers",
  "Wire transfer receipts",
  "Money order receipts with carbon copies",
  "Cancelled checks (front and back)",
  "Allotment documentation (LES showing allotment)",
  "Joint account statements showing regular deposits",
  "Billing statements with corresponding payment proof",
];

const NOT_ACCEPTABLE_PROOF = [
  "Cash payments (no documentation trail)",
  "Verbal agreements",
  "Personal IOUs",
  "Unverifiable third-party statements",
];

const PROCESSING_TIMELINE = [
  { action: "Gather financial documentation", timeline: "2-4 weeks" },
  { action: "Complete DD 137 and NAVMC 10922", timeline: "1-2 days" },
  { action: "Obtain notarized signatures", timeline: "1-3 days" },
  { action: "Submit to command", timeline: "Within 30 days of event" },
  { action: "Command review and endorsement", timeline: "5-10 business days" },
  { action: "Forward to CMC (MFP-1)", timeline: "Upon command approval" },
  { action: "CMC determination", timeline: "30-60 days" },
  { action: "Notification of decision", timeline: "Upon determination" },
];

const COMMON_ISSUES = [
  { issue: "DD 137 Older Than 6 Weeks", solution: "Forms must be current within 6 weeks from signature date to submission date. If your DD 137 is older than 6 weeks, you must complete a new form with updated financial information and obtain new notarized signatures." },
  { issue: "Incomplete Financial Documentation", solution: "CMC (MFP-1) requires comprehensive proof of support. Gather 12 months of bank statements, cancelled checks, money order receipts, or allotment documentation showing regular support payments." },
  { issue: "Parent Receives Social Security/Pension", solution: "Parent's Social Security, pension, and other income must be documented. If member still provides over 50% of total support despite parent's income, the claim may be approved. Document all of parent's expenses to show member's contribution exceeds 50%." },
  { issue: "Parent-in-Law After Divorce", solution: "If you divorce your spouse, your former parent-in-law is no longer eligible as your secondary dependent. Update records within 30 days of divorce." },
  { issue: "Incapacitated Child Re-Determination", solution: "Incapacitated child status requires annual re-determination. Medical evaluation must be within 4 months of submission. Set calendar reminders to submit renewal documentation before expiration." },
  { issue: "Student Child Graduates or Drops Below Full-Time", solution: "If the student child graduates, drops below full-time status, or turns 23, they lose secondary dependent status. Update MCTFS within 30 days. TRICARE Young Adult may be available for ages 23-26." },
  { issue: "Ward of Court Custody Order Expires", solution: "If the court order establishing guardianship expires and is not renewed, the ward loses dependent status. Obtain a new court order or permanent guardianship before expiration." },
];

const INCOME_SOURCES_TO_DOCUMENT = [
  "Social Security (SSA-1099)",
  "Pension income",
  "Wages or self-employment income",
  "Rental income",
  "Investment income (dividends, interest)",
  "VA benefits",
  "State or federal assistance",
  "Alimony or child support received",
];

export function SecondaryDependentsContent({ data }: Props) {
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Secondary Dependents Overview</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Secondary dependents are individuals who are not primary dependents (spouse/children) but are financially
                  dependent on the Marine for over 50% of their support. Per MCO 1751.3 CH-1, secondary dependency claims
                  require DD 137 (Dependency Statement) and are determined by CMC (MFP-1).
                </p>
                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Secondary dependency requires CMC (MFP-1) determination—not command level approval.
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-black/10 dark:border-white/10">
                        <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Element</th>
                        <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {KEY_POINTS.map((point) => (
                        <tr key={point.element} className="border-b border-black/5 dark:border-white/5">
                          <td className="py-2 pr-4 font-medium text-zinc-900 dark:text-zinc-100">{point.element}</td>
                          <td className="py-2 text-zinc-700 dark:text-zinc-300">{point.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Primary vs Secondary Dependents</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Primary Dependents</h4>
                    <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                      <li>• Spouse</li>
                      <li>• Unmarried children under 21</li>
                      <li>• Unmarried children 21-22 (full-time students)</li>
                      <li>• Incapacitated children</li>
                    </ul>
                    <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                      <strong>Approval:</strong> Commanding Officer
                    </p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Secondary Dependents</h4>
                    <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                      <li>• Parents</li>
                      <li>• Parents-in-law</li>
                      <li>• Ward of court</li>
                      <li>• Other qualifying relatives</li>
                    </ul>
                    <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                      <strong>Approval:</strong> CMC (MFP-1)
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Dependent Types Tab */}
          {activeTab === "types" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Secondary Dependent Types</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The following categories of individuals may qualify as secondary dependents if they meet the financial
                  dependency requirements:
                </p>
              </section>

              {SECONDARY_DEPENDENT_TYPES.map((depType) => (
                <section key={depType.type} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{depType.type}</h3>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{depType.description}</p>
                  <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                  <ul className="mt-2 space-y-1">
                    {depType.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </>
          )}

          {/* DD 137 Form Tab */}
          {activeTab === "dd137" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DD Form 137 - Dependency Statement</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The DD 137 is the consolidated dependency statement form used for all secondary dependency claims.
                  This form replaced the previous DD 137-3 through DD 137-7 series.
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.esd.whs.mil/portals/54/documents/dd/forms/dd/dd0137.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--sa-navy)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--sa-navy)]/90 dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]"
                  >
                    Download DD 137 Form (PDF)
                  </a>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Form Sections</h3>
                <div className="mt-4 space-y-3">
                  {DD137_SECTIONS.map((item) => (
                    <div key={item.section} className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.section}</h4>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Critical Requirements</h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200">Notarized Signature Required</h4>
                    <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                      The member's signature on the DD 137 must be notarized. The proposed dependent's signature
                      must also be notarized if they are completing portions of the form.
                    </p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                    <h4 className="font-semibold text-red-800 dark:text-red-200">6-Week Currency Requirement</h4>
                    <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                      Forms must be current within 6 weeks from signature date to submission date.
                      Expired forms must be resubmitted with new signatures and updated financial data.
                    </p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Complete All Applicable Blocks</h4>
                    <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                      All applicable blocks must be completed. If a block does not apply, enter "N/A" rather than
                      leaving it blank. Incomplete forms will be returned.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Supporting Documentation</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The following documentation should accompany the DD 137:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    NAVMC 10922 (Dependency Application) signed by member and attesting officer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    12 months of proof of support (bank transfers, cancelled checks, money orders)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Proposed dependent's income documentation (SSA-1099, pension statements, tax returns)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Court order (for ward of court claims)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Medical evaluation within 4 months (for incapacitated child claims)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Full-time enrollment letter from institution (for student claims)
                  </li>
                </ul>
              </section>
            </>
          )}

          {/* Process Tab */}
          {activeTab === "process" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Processing Timeline</h2>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-black/10 dark:border-white/10">
                        <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Action</th>
                        <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PROCESSING_TIMELINE.map((item) => (
                        <tr key={item.action} className="border-b border-black/5 dark:border-white/5">
                          <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">{item.action}</td>
                          <td className="py-2 font-medium text-zinc-900 dark:text-zinc-100">{item.timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step-by-Step Process</h3>
                <ol className="mt-4 space-y-4">
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
                    <div>
                      <strong>Gather Financial Documentation</strong>
                      <p className="mt-1">Collect 12 months of proof of support and the proposed dependent's income documentation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
                    <div>
                      <strong>Complete DD 137</strong>
                      <p className="mt-1">Fill out all applicable sections with accurate financial information.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
                    <div>
                      <strong>Obtain Notarized Signatures</strong>
                      <p className="mt-1">Have the member's signature notarized. Proposed dependent's signature may also require notarization.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
                    <div>
                      <strong>Complete NAVMC 10922</strong>
                      <p className="mt-1">Fill out the Dependency Application and have it signed by the attesting officer.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
                    <div>
                      <strong>Submit to Command</strong>
                      <p className="mt-1">Submit all documentation to S-1/IPAC for command review and endorsement.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
                    <div>
                      <strong>Forward to CMC (MFP-1)</strong>
                      <p className="mt-1">Command forwards the complete package to CMC (MFP-1) for determination.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">7</span>
                    <div>
                      <strong>Await CMC Determination</strong>
                      <p className="mt-1">CMC (MFP-1) reviews all documentation and makes a dependency determination.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">8</span>
                    <div>
                      <strong>Update Records (if Approved)</strong>
                      <p className="mt-1">Upon approval, MCTFS is updated and DEERS enrollment can proceed.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Annual Re-Determination</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Most secondary dependency claims require annual re-determination. You will receive notification
                  when re-determination is due. Failure to submit re-determination documentation will result in
                  termination of secondary dependent status.
                </p>
                <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Tip:</strong> Set calendar reminders 60 days before your annual re-determination date
                    to allow time to gather updated financial documentation.
                  </p>
                </div>
              </section>
            </>
          )}

          {/* Support Requirements Tab */}
          {activeTab === "support" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Over 50% Support Requirement</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  To qualify as a secondary dependent, the proposed dependent must receive over 50% of their total
                  support from the Marine. This is calculated by comparing the member's contribution to the
                  dependent's total income and expenses.
                </p>
                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Formula:</strong> Member's contribution ÷ Dependent's total expenses = Support percentage
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Acceptable Proof of Support</h3>
                <ul className="mt-4 space-y-2">
                  {ACCEPTABLE_SUPPORT_PROOF.map((proof) => (
                    <li key={proof} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      {proof}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Not Acceptable as Proof</h3>
                <ul className="mt-4 space-y-2">
                  {NOT_ACCEPTABLE_PROOF.map((proof) => (
                    <li key={proof} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                      {proof}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                  <p className="text-sm text-red-800 dark:text-red-200">
                    <strong>Important:</strong> Cash payments cannot be verified and are not accepted as proof of support.
                    If you have been providing cash support, transition to traceable payment methods immediately.
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dependent's Income Sources to Document</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  All income received by the proposed dependent must be documented:
                </p>
                <ul className="mt-3 space-y-1">
                  {INCOME_SOURCES_TO_DOCUMENT.map((source) => (
                    <li key={source} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                      {source}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Calculating Support Percentage</h3>
                <div className="mt-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
                  <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Example Calculation</h4>
                  <div className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <p><strong>Dependent's Monthly Expenses:</strong> $2,000</p>
                    <p><strong>Dependent's Monthly Income:</strong> $800 (Social Security)</p>
                    <p><strong>Member's Monthly Contribution:</strong> $1,200</p>
                    <p className="pt-2 border-t border-black/10 dark:border-white/10">
                      <strong>Support Percentage:</strong> $1,200 ÷ $2,000 = 60%
                    </p>
                    <p className="text-green-600 dark:text-green-400">
                      <strong>Result:</strong> Qualifies (over 50%)
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Troubleshooter Tab */}
          {activeTab === "troubleshooter" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Issues and Solutions</h2>
                <div className="mt-4 space-y-4">
                  {COMMON_ISSUES.map((item) => (
                    <div key={item.issue} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                      <h4 className="font-semibold text-[var(--sa-red)]">{item.issue}</h4>
                      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Resources and Contacts</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DD 137 Form:</span>
                    <a href="https://www.esd.whs.mil/portals/54/documents/dd/forms/dd/dd0137.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">DoD Forms</a>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DFAS Secondary Dependency:</span>
                    <a href="https://www.dfas.mil/MilitaryMembers/SecondaryDependency/SDC/" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">DFAS SDC</a>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CMC (MFP-1):</span>
                    Secondary dependency determinations
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IPAC:</span>
                    Installation Personnel Administration Center
                  </li>
                </ul>
              </section>
            </>
          )}

          {/* References Tab */}
          {activeTab === "references" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Governing References</h2>
                <ul className="mt-4 space-y-3">
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MCO 1751.3 CH-1</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Marine Corps Dependency Determination and Support Program</p>
                  </li>
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DoD FMR 7000.14-R, Volume 7A, Chapter 26</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Housing Allowances</p>
                  </li>
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">37 U.S.C. 401</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Definitions (Dependent)</p>
                  </li>
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DoDI 1341.09</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">DEERS Enrollment</p>
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Additional Resources</h2>
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

          {/* Quick Facts Card */}
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Primary Form</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">DD 137</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Marine Corps Form</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">NAVMC 10922</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Support Required</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Over 50%</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Approval Authority</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">CMC (MFP-1)</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Form Currency</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Within 6 weeks</dd>
              </div>
            </dl>
          </section>

          {/* Key Reminder */}
          <section className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">CMC Determination Required</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Secondary dependency claims are determined by CMC (MFP-1), not at the command level.
            </p>
          </section>

          {/* Warning */}
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200">Annual Re-Determination</h4>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              Most secondary dependency claims require annual re-determination. Set reminders to avoid loss of status.
            </p>
          </section>

          {/* Notarization Reminder */}
          <section className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Notarized Signature</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              DD 137 requires notarized signature. Forms without proper notarization will be returned.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
