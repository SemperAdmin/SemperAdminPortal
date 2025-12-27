"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "documentation", label: "Documentation" },
  { id: "process", label: "Process" },
  { id: "entitlements", label: "Entitlements" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
];

const KEY_POINTS = [
  { element: "Form Required", requirement: "NAVMC 10922 (Dependency Application)" },
  { element: "Triggering Event", requirement: "Marriage to stepchild's legal parent" },
  { element: "Submission Deadline", requirement: "Within 30 days of marriage" },
  { element: "Residence Requirement", requirement: "Stepchild must be member of household" },
  { element: "Age Limit", requirement: "Under 21 (or 21-23 if full-time student)" },
  { element: "Approval Authority", requirement: "Commanding Officer" },
  { element: "Authority", requirement: "MCO 1751.3 CH-1" },
];

const REQUIRED_DOCUMENTS = [
  "Completed NAVMC 10922 signed by member and attesting officer",
  "Marriage certificate showing member is married to the child's legal parent",
  "Birth certificate or documentation showing spouse is the child's biological or adoptive parent",
  "Custody documentation (if applicable) showing spouse has legal custody",
];

const ELIGIBILITY_CRITERIA = [
  { criterion: "Legal Marriage", description: "Member must be legally married to the stepchild's parent" },
  { criterion: "Household Membership", description: "Stepchild must be a member of the Marine's household" },
  { criterion: "Age Requirement", description: "Under 21, or under 23 if enrolled full-time in higher education" },
  { criterion: "Unmarried Status", description: "Stepchild must be unmarried" },
  { criterion: "Parent's Custody", description: "Spouse must have legal custody or parental rights to the child" },
];

const PROCESSING_TIMELINE = [
  { action: "Marriage occurs", timeline: "Day 0" },
  { action: "Gather documentation (marriage certificate, birth certificate)", timeline: "Days 1-7" },
  { action: "Complete and submit NAVMC 10922", timeline: "Within 30 days" },
  { action: "Command reviews and approves", timeline: "1-5 business days" },
  { action: "Unit Diary entry processed", timeline: "Upon approval" },
  { action: "MCTFS updated", timeline: "1-3 business days" },
  { action: "DEERS enrollment at ID card office", timeline: "After MCTFS update" },
];

const ENTITLEMENTS_GAINED = [
  { entitlement: "BAH with-Dependent Rate", description: "If first dependent, BAH rate increases from single to with-dependent rate" },
  { entitlement: "TRICARE Coverage", description: "Stepchild eligible for TRICARE health benefits" },
  { entitlement: "DEERS Enrollment", description: "Access to military facilities, commissary, and exchange" },
  { entitlement: "Dependent ID Card", description: "ID card issued for stepchildren age 10 and older" },
  { entitlement: "PCS Travel Entitlements", description: "Travel and transportation allowances for PCS moves" },
  { entitlement: "SGLI Family Coverage", description: "Eligible for Family SGLI (FSGLI) coverage" },
];

const COMMON_ISSUES = [
  { issue: "Spouse Does Not Have Custody", solution: "Stepchild must reside with the member and spouse. If the other biological parent has sole custody and the child resides with them, the stepchild may not qualify as a dependent. Documentation of shared custody or visitation arrangements may be required." },
  { issue: "Child From Previous Relationship (Not Spouse's)", solution: "A child from your previous relationship (before current marriage) is not a stepchild—they are your biological or adopted child. Use the appropriate documentation path for biological or adopted children." },
  { issue: "Marriage Certificate Delayed", solution: "Some jurisdictions delay issuing marriage certificates. Submit NAVMC 10922 with available documentation and a statement explaining the delay. Provide the official certificate when received." },
  { issue: "Foreign Marriage or Birth Certificate", solution: "Foreign documents require certified English translations. Marriage must be recognized as valid in the jurisdiction where it occurred." },
  { issue: "Stepchild Turns 21", solution: "Stepchild loses dependent status at age 21 unless enrolled full-time in higher education (extends to age 23). Submit documentation for full-time student status before the 21st birthday." },
  { issue: "Divorce or Separation", solution: "If you divorce the stepchild's parent, the stepchild is no longer your dependent. Update MCTFS within 30 days of divorce. Stepchild may retain TRICARE for 36 months under transitional rules." },
];

const HOUSEHOLD_REQUIREMENTS = [
  "Stepchild physically resides with member and spouse",
  "Stepchild is part of the family unit",
  "Member provides support for the stepchild",
  "Temporary absences (school, summer visits to other parent) do not disqualify",
];

export function StepchildrenAdditionContent({ data }: Props) {
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Stepchildren Addition Overview</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  When you marry someone who has children from a previous relationship, those children become your stepchildren.
                  Per MCO 1751.3 CH-1, stepchildren who are members of your household qualify as primary dependents and are
                  entitled to the same benefits as biological children.
                </p>
                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Submit NAVMC 10922 with marriage certificate and stepchild's birth certificate within 30 days of marriage.
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
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Definition</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  A <strong>stepchild</strong> is the biological or adopted child of your spouse from a relationship prior
                  to your marriage. The stepchild relationship is established through your marriage to the child's parent
                  and exists only while the marriage remains valid.
                </p>
                <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Important:</strong> If you divorce the stepchild's parent, the stepchild is no longer your
                    dependent. Update records within 30 days of divorce.
                  </p>
                </div>
              </section>
            </>
          )}

          {/* Eligibility Tab */}
          {activeTab === "eligibility" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility Criteria</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Per MCO 1751.3 CH-1, a stepchild qualifies as a primary dependent when all of the following criteria are met:
                </p>
                <div className="mt-4 space-y-3">
                  {ELIGIBILITY_CRITERIA.map((item) => (
                    <div key={item.criterion} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.criterion}</h4>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Household Membership</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The stepchild must be a member of the Marine's household. This means:
                </p>
                <ul className="mt-3 space-y-2">
                  {HOUSEHOLD_REQUIREMENTS.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Age Limits</h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Under Age 21</h4>
                    <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                      Stepchildren under 21 qualify as dependents without additional requirements.
                    </p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Age 21-22 (Full-Time Student)</h4>
                    <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                      Stepchildren age 21-22 may continue as dependents if enrolled full-time in higher education.
                      Requires annual verification and submission to CMC (MFP-1).
                    </p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200">Incapacitated Stepchild</h4>
                    <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                      An incapacitated stepchild may remain a dependent beyond age 21 if the incapacity existed
                      before age 21 and prevents self-support. Requires CMC (MFP-1) determination.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Documentation Tab */}
          {activeTab === "documentation" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents</h2>
                <ul className="mt-4 space-y-2">
                  {REQUIRED_DOCUMENTS.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NAVMC 10922 - Dependency Application</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The NAVMC 10922 is the primary form for documenting stepchildren as dependents.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Information:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Member's personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Stepchild's full name and date of birth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Relationship (stepchild)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Date of marriage to stepchild's parent
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Member's signature and attesting officer's signature
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Attesting Officer:</strong> Must witness member's signature and verify supporting documentation.
                    The attesting officer is responsible for ensuring documentation is authentic and complete.
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marriage Certificate</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The marriage certificate establishes the legal relationship between you and the stepchild's parent.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Acceptable Documents:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                    Certified copy of marriage certificate from issuing jurisdiction
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                    Foreign marriage certificates with certified English translation
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Birth Certificate or Parentage Documentation</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Documentation must show your spouse is the legal parent of the child.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Acceptable Documents:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                    Birth certificate naming your spouse as a parent
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                    Adoption decree showing your spouse adopted the child
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                    Court order establishing parentage
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
                      <strong>Get Married</strong>
                      <p className="mt-1">Marriage to the stepchild's parent creates the stepparent-stepchild relationship.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
                    <div>
                      <strong>Gather Documentation</strong>
                      <p className="mt-1">Obtain certified marriage certificate and stepchild's birth certificate.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
                    <div>
                      <strong>Complete NAVMC 10922</strong>
                      <p className="mt-1">Fill out the Dependency Application for both spouse and stepchild(ren).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
                    <div>
                      <strong>Submit to Admin (S-1/IPAC)</strong>
                      <p className="mt-1">Submit NAVMC 10922 with all supporting documents within 30 days of marriage.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
                    <div>
                      <strong>Command Approval</strong>
                      <p className="mt-1">Commanding Officer reviews and approves the dependency application.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
                    <div>
                      <strong>MCTFS Update</strong>
                      <p className="mt-1">Admin processes Unit Diary entry to update MCTFS with new dependents.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">7</span>
                    <div>
                      <strong>DEERS Enrollment</strong>
                      <p className="mt-1">Visit ID card office with documentation to enroll stepchild in DEERS.</p>
                    </div>
                  </li>
                </ol>
              </section>
            </>
          )}

          {/* Entitlements Tab */}
          {activeTab === "entitlements" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Entitlements for Stepchildren</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Stepchildren who are members of your household receive the same entitlements as biological or adopted children.
                </p>
                <div className="mt-4 space-y-3">
                  {ENTITLEMENTS_GAINED.map((item) => (
                    <div key={item.entitlement} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.entitlement}</h4>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">BAH Considerations</h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Already Married (Adding Stepchild)</h4>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                      If you are already receiving BAH with-dependent rate for your spouse, adding a stepchild does not
                      change your BAH rate. However, the stepchild must be documented for DEERS and travel entitlements.
                    </p>
                  </div>
                  <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">New Marriage (First Dependent)</h4>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                      If this is your first marriage and you are adding both a spouse and stepchild, you become entitled
                      to BAH with-dependent rate effective the date of marriage.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TRICARE Coverage</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Stepchildren enrolled in DEERS are eligible for TRICARE coverage. Coverage options include:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    TRICARE Prime (if in Prime service area)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    TRICARE Select
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    TRICARE Young Adult (for stepchildren age 21-26 not eligible as dependents)
                  </li>
                </ul>
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
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IPAC:</span>
                    Installation Personnel Administration Center for NAVMC 10922 processing
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">ID Card Office:</span>
                    DEERS enrollment and dependent ID cards
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TRICARE:</span>
                    Health benefit enrollment and questions
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CMC (MFP-1):</span>
                    For extended student status or incapacity determinations
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
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">37 U.S.C. 401</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Definitions (Dependent)</p>
                  </li>
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DoD 7000.14-R, Volume 7A</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Military Pay Policy - Active Duty Pay</p>
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
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Form Required</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">NAVMC 10922</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Triggering Event</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Marriage</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Submission Deadline</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">30 days from marriage</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Approval Authority</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Commanding Officer</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Age Limit</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Under 21 (or 23 if student)</dd>
              </div>
            </dl>
          </section>

          {/* Key Reminder */}
          <section className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Household Requirement</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Stepchild must be a member of your household to qualify as a dependent.
            </p>
          </section>

          {/* Warning */}
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200">Divorce Terminates Status</h4>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              If you divorce the stepchild's parent, the stepchild is no longer your dependent. Update records within 30 days.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
