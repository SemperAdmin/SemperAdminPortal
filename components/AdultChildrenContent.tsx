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
  { id: "age-out", label: "Age-Out Rules" },
  { id: "student", label: "Full-Time Student" },
  { id: "incapacitated", label: "Incapacitated Child" },
  { id: "tricare-ya", label: "TRICARE Young Adult" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
];

const KEY_POINTS: { element: string; requirement: string; url?: string }[] = [
  { element: "Standard Age Limit", requirement: "Age 21 (loses dependent status)" },
  { element: "Full-Time Student Extension", requirement: "Age 21-22 (with CMC approval)" },
  { element: "Incapacitated Child", requirement: "No age limit if incapacity existed before 21" },
  { element: "TRICARE Young Adult", requirement: "Age 21-26 (premium-based)" },
  { element: "Form Required", requirement: "DD 137 (for extensions)" },
  { element: "Authority", requirement: "MCO 1751.3 CH-1", url: MCO_URLS.DEPENDENCY_DETERMINATION },
];

const AGE_OUT_TIMELINE = [
  { age: "Under 21", status: "Full dependent status - no special documentation required" },
  { age: "21", status: "Loses dependent status on 21st birthday (unless student or incapacitated)" },
  { age: "21-22", status: "May continue as dependent if full-time student (CMC approval required)" },
  { age: "23+", status: "Loses dependent status at 23 even if student. TRICARE Young Adult available 21-26" },
];

const STUDENT_REQUIREMENTS = [
  "Unmarried",
  "Enrolled full-time in accredited institution of higher learning",
  "Dependent on member for over 50% of support",
  "DD 137 (Dependency Statement) with notarized signature",
  "NAVMC 10922 signed by member and attesting officer",
  "Letter from institution confirming full-time enrollment and expected graduation",
  "Verification of student's income (wages, grants, scholarships, SSA)",
];

const INCAPACITATED_REQUIREMENTS = [
  "Unmarried",
  "Incapable of self-support due to mental or physical incapacity",
  "Incapacity existed before age 21 (or age 23 if was approved as full-time student)",
  "Dependent on member for over 50% of support",
  "DD 137 (Dependency Statement) with notarized signature",
  "NAVMC 10922 signed by member and attesting officer",
  "Medical or psychiatric evaluation within 4 months of submission",
  "Detailed medical summary with date/age of incapacity onset",
  "Current treatment and prognosis for recovery",
  "DSM-5 diagnosis (for intellectual disability cases)",
  "Verification of child's income (SSA, wages, federal/state aid)",
];

const TRICARE_YA_FEATURES = [
  { feature: "Age Range", detail: "21-26 years old" },
  { feature: "Premium", detail: "Monthly premium required (paid by sponsor or adult child)" },
  { feature: "Options", detail: "TRICARE Young Adult Prime or TRICARE Young Adult Select" },
  { feature: "Eligibility", detail: "Unmarried, not eligible for employer-sponsored health plan" },
  { feature: "DEERS", detail: "Must be registered in DEERS" },
  { feature: "Enrollment", detail: "Enroll through milConnect or contact TRICARE regional contractor" },
];

const COMMON_ISSUES = [
  { issue: "Child Approaching 21st Birthday", solution: "If child will be full-time student at age 21, submit DD 137 and enrollment verification to CMC (MFP-1) BEFORE the 21st birthday. Processing takes 30-60 days. If documentation is not received before birthday, dependent status will terminate." },
  { issue: "Student Drops Below Full-Time", solution: "If the student child drops below full-time status (e.g., drops classes), they lose dependent status. Notify command within 30 days. TRICARE Young Adult may be available as an alternative." },
  { issue: "Student Graduates Before Age 23", solution: "Dependent status terminates upon graduation, even if before age 23. Update MCTFS within 30 days. TRICARE Young Adult is available until age 26." },
  { issue: "Child Has Income from Job", solution: "Part-time employment is acceptable, but total income from all sources is considered when determining if member provides over 50% of support. Document all income sources on DD 137." },
  { issue: "Incapacitated Child Turns 21", solution: "If incapacity existed before age 21 and child is dependent on member for over 50% of support, child may continue as dependent indefinitely. Submit DD 137 with medical documentation to CMC (MFP-1). Annual re-determination required." },
  { issue: "Annual Re-Determination Missed", solution: "Both full-time student and incapacitated child status require annual re-determination. If you miss the deadline, dependent status may be terminated. Set calendar reminders 60 days before due date." },
  { issue: "Marriage of Adult Child", solution: "If an adult child (student or incapacitated) gets married, they lose dependent status immediately. Update MCTFS within 30 days." },
];

const PROCESSING_TIMELINE = [
  { action: "Child approaches 21st birthday", timeline: "60-90 days before" },
  { action: "Gather documentation (enrollment letter, DD 137)", timeline: "60 days before" },
  { action: "Submit package to command", timeline: "45+ days before" },
  { action: "Command forwards to CMC (MFP-1)", timeline: "Upon receipt" },
  { action: "CMC determination", timeline: "30-60 days" },
  { action: "Notification of approval/denial", timeline: "Upon determination" },
  { action: "Annual re-determination", timeline: "Every 12 months" },
];

export function AdultChildrenContent({ data }: Props) {
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Adult Children (Age 21+) Overview</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Per MCO 1751.3 CH-1, children lose dependent status at age 21 unless they qualify for an extension
                  as a full-time student (age 21-22) or incapacitated adult child. TRICARE Young Adult provides
                  premium-based health coverage for adult children ages 21-26 who are no longer dependents.
                </p>
                <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                    Plan ahead! Submit extension documentation 60+ days before child's 21st birthday.
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
                          <td className="py-2 text-zinc-700 dark:text-zinc-300">
                            {point.url ? <MCOLink mco={point.requirement} url={point.url} /> : point.requirement}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Options for Adult Children</h3>
                <div className="mt-4 grid gap-4">
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Full-Time Student (21-22)</h4>
                    <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                      Continue as dependent if enrolled full-time in higher education. Requires CMC approval and annual re-determination.
                    </p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Incapacitated Child (No Age Limit)</h4>
                    <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                      Continue as dependent if incapacity existed before age 21 and child is dependent for over 50% of support.
                    </p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200">TRICARE Young Adult (21-26)</h4>
                    <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                      Premium-based health coverage for adult children who no longer qualify as dependents.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Age-Out Tab */}
          {activeTab === "age-out" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Age-Out Rules</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Children automatically lose dependent status at age 21 unless they qualify for an extension.
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-black/10 dark:border-white/10">
                        <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Age</th>
                        <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {AGE_OUT_TIMELINE.map((item) => (
                        <tr key={item.age} className="border-b border-black/5 dark:border-white/5">
                          <td className="py-2 pr-4 font-medium text-zinc-900 dark:text-zinc-100">{item.age}</td>
                          <td className="py-2 text-zinc-700 dark:text-zinc-300">{item.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Happens at Age 21</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                    Child is automatically removed from MCTFS
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                    TRICARE coverage terminates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                    ID card expires
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                    Commissary/exchange access ends
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Note:</strong> BAH with-dependent rate continues if you have other dependents (spouse or other children).
                    BAH only reverts to single rate if the child at age 21 was your only dependent.
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Failure to Validate</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Per MCO 1751.3 CH-1, if admin notifies you that documentation is required to validate a dependent over age 21:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    You have 15 working days to provide documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    If you fail to respond, dependent will be removed from MCTFS
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    A new NAVMC 10922 will be issued; if you fail to sign, CO annotates form
                  </li>
                </ul>
              </section>
            </>
          )}

          {/* Full-Time Student Tab */}
          {activeTab === "student" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Full-Time Student (Age 21-22)</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Unmarried children age 21-22 may continue as dependents if enrolled full-time in an accredited
                  institution of higher learning and dependent on the member for over 50% of support.
                </p>
                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Approval Authority: CMC (MFP-1) — Not command level
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements</h3>
                <ul className="mt-4 space-y-2">
                  {STUDENT_REQUIREMENTS.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Processing Timeline</h3>
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
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Annual Re-Determination</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Full-time student status requires annual re-determination. You must submit updated documentation each year:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    New enrollment verification letter
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Updated DD 137 with current financial information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Verification of student's current income
                  </li>
                </ul>
              </section>
            </>
          )}

          {/* Incapacitated Child Tab */}
          {activeTab === "incapacitated" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Incapacitated Child (Over 21)</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  An unmarried child incapable of self-support due to mental or physical incapacity may continue
                  as a dependent beyond age 21 if the incapacity existed before age 21 (or age 23 if previously
                  approved as full-time student when incapacity occurred).
                </p>
                <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    No age limit for incapacitated children who meet the requirements.
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements</h3>
                <ul className="mt-4 space-y-2">
                  {INCAPACITATED_REQUIREMENTS.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Medical Documentation</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The medical evaluation must include:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    Date and age at onset of incapacity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    Detailed description of the incapacitating condition
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    Current treatment regimen
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    Prognosis for recovery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    DSM-5 diagnosis (for intellectual disability)
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Important:</strong> Medical evaluation must be dated within 4 months of submission to CMC (MFP-1).
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Annual Re-Determination</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Incapacitated child status requires annual re-determination with updated:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Medical evaluation (within 4 months)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    DD 137 with current financial information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Verification of child's income
                  </li>
                </ul>
              </section>
            </>
          )}

          {/* TRICARE Young Adult Tab */}
          {activeTab === "tricare-ya" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TRICARE Young Adult (TYA)</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  TRICARE Young Adult is a premium-based health coverage option for adult children ages 21-26
                  who are no longer eligible for regular TRICARE coverage as dependents.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TYA Features</h3>
                <div className="mt-4 space-y-3">
                  {TRICARE_YA_FEATURES.map((item) => (
                    <div key={item.feature} className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.feature}</h4>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility Requirements</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Age 21-26 (or 23-26 if previously extended as full-time student)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Unmarried
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Not eligible for employer-sponsored health coverage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Registered in DEERS as the sponsor's child
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TYA Options</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">TYA Prime</h4>
                    <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                      HMO-style coverage. Must use network providers. Lower out-of-pocket costs.
                      Available in Prime Service Areas.
                    </p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">TYA Select</h4>
                    <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                      PPO-style coverage. More provider flexibility. Higher out-of-pocket costs.
                      Available nationwide.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Enroll</h3>
                <ol className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
                    <div>
                      <strong>Ensure DEERS Registration</strong>
                      <p className="mt-1">Adult child must be registered in DEERS as sponsor's child.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
                    <div>
                      <strong>Purchase TYA Coverage</strong>
                      <p className="mt-1">Enroll through milConnect or contact TRICARE regional contractor.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
                    <div>
                      <strong>Pay Monthly Premium</strong>
                      <p className="mt-1">Premium can be paid by sponsor or adult child.</p>
                    </div>
                  </li>
                </ol>
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
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Resources</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CMC (MFP-1):</span>
                    Secondary dependency and extension determinations
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TRICARE:</span>
                    Young Adult enrollment and coverage questions
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">milConnect:</span>
                    DEERS updates and TYA enrollment
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
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">10 U.S.C. 1110b</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">TRICARE Young Adult</p>
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
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Age-Out</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">21st birthday</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Student Extension</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Age 21-22</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">TYA Age Range</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">21-26</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Form Required</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">DD 137</dd>
              </div>
            </dl>
          </section>

          {/* Warning */}
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200">Plan Ahead</h4>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              Submit extension documentation 60+ days before child's 21st birthday. CMC processing takes 30-60 days.
            </p>
          </section>

          {/* Annual Reminder */}
          <section className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Annual Re-Determination</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Both student and incapacitated child status require annual re-determination. Set calendar reminders.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
