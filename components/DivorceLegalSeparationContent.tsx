"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "documentation", label: "Documentation" },
  { id: "process", label: "Process" },
  { id: "benefits", label: "Benefits Impact" },
  { id: "stepchildren", label: "Stepchildren" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
];

const KEY_POINTS = [
  { element: "Form Required", requirement: "NAVMC 10922 (Dependency Application)" },
  { element: "Notification Deadline", requirement: "Within 30 days of divorce" },
  { element: "Primary Document", requirement: "Final divorce decree" },
  { element: "DEERS Update", requirement: "Required within 30 days" },
  { element: "Spouse Status", requirement: "Terminated upon divorce" },
  { element: "Authority", requirement: "MCO 1751.3 CH-1" },
];

const US_DIVORCE_DOCS = [
  "Final divorce decree signed by judge",
  "Certificate of divorce (if issued separately)",
  "NAVMC 10922 annotated to remove spouse",
];

const FOREIGN_DIVORCE_DOCS = [
  "Final divorce decree from foreign court",
  "Certified English translation of decree",
  "Documentation that divorce is recognized in the U.S.",
  "NAVMC 10922 annotated to remove spouse",
];

const FOREIGN_DIVORCE_REQUIREMENTS = [
  "Both parties must have been personally present before the foreign court OR valid service of process on absent party",
  "Divorce must be recognized as valid in the jurisdiction where it occurred",
  "Decree must contain jurisdictional statement",
  "English translation must be certified",
];

const PROCESSING_TIMELINE = [
  { action: "Divorce finalized by court", timeline: "Day 0" },
  { action: "Obtain certified copy of divorce decree", timeline: "Days 1-14" },
  { action: "Notify command of divorce", timeline: "Within 30 days" },
  { action: "Submit NAVMC 10922 to remove spouse", timeline: "Within 30 days" },
  { action: "Update SGLI beneficiary (if applicable)", timeline: "Within 30 days" },
  { action: "MCTFS update via Unit Diary", timeline: "Upon processing" },
  { action: "Former spouse removed from DEERS", timeline: "Upon MCTFS update" },
  { action: "BAH recalculation (if applicable)", timeline: "Effective date of divorce" },
];

const BENEFITS_IMPACT = [
  { benefit: "TRICARE", impact: "Terminated on date of divorce. Former spouse may qualify for Transitional Health Care (up to 180 days) or Continued Health Care Benefit Program (CHCBP) for 36 months." },
  { benefit: "BAH", impact: "If no other dependents, BAH may revert to single rate. If children remain dependents, with-dependent rate continues." },
  { benefit: "DEERS", impact: "Former spouse removed from DEERS upon MCTFS update. ID card must be surrendered." },
  { benefit: "Commissary/Exchange", impact: "Access terminated upon divorce (unless 20/20/20 rule applies)." },
  { benefit: "SGLI", impact: "Former spouse no longer automatic beneficiary. Update SGLI designation immediately." },
  { benefit: "SBP", impact: "Former spouse coverage may continue if court-ordered or elected. Notify DFAS within 1 year." },
];

const RULE_20_20_20 = [
  "Member performed at least 20 years of creditable service",
  "Marriage lasted at least 20 years",
  "At least 20 years of the marriage overlapped with the military service",
];

const COMMON_ISSUES = [
  { issue: "Divorce Decree Not Yet Final", solution: "Only final divorce decrees are accepted. Temporary orders, legal separation agreements, or pending divorces do not terminate spouse status. Continue to report spouse as dependent until final decree is issued." },
  { issue: "Foreign Divorce Recognition", solution: "Foreign divorces must meet U.S. recognition requirements. Both parties must have appeared before the court or valid service was made. If there are questions about validity, command may request JAG review." },
  { issue: "Cannot Locate Former Spouse for ID Card", solution: "If former spouse cannot be located to surrender ID card, report to command. ID card will be flagged as invalid in DEERS. Former spouse using expired ID may face legal consequences." },
  { issue: "Child Custody Affects BAH", solution: "If you have physical custody of children, you remain entitled to BAH with-dependent rate. If former spouse has sole physical custody and you are paying child support, you may be entitled to BAH-DIFF. Document custody arrangement." },
  { issue: "Stepchildren After Divorce", solution: "Stepchildren from the former marriage are no longer your dependents after divorce. They must be removed from MCTFS within 30 days. Stepchildren may qualify for transitional TRICARE coverage." },
  { issue: "Former Spouse Claims 20/20/20 Benefits", solution: "If former spouse believes they qualify under the 20/20/20 rule, they should contact a military legal assistance office. Eligibility is determined by DFAS, not the command." },
];

export function DivorceLegalSeparationContent({ data }: Props) {
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Divorce/Legal Separation Overview</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  When your marriage ends in divorce, you must update your dependent records within 30 days. Per MCO 1751.3 CH-1,
                  the former spouse loses dependent status upon final divorce decree. This page covers documentation requirements,
                  DEERS updates, benefits termination, and impact on stepchildren.
                </p>
                <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    Update MCTFS and DEERS within 30 days of divorce. Former spouse must surrender military ID card.
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
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Legal Separation vs. Divorce</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200">Legal Separation</h4>
                    <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                      Legal separation does NOT terminate dependent status. Spouse remains a dependent until final
                      divorce decree is issued. Continue to report spouse on NAVMC 10922.
                    </p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                    <h4 className="font-semibold text-red-800 dark:text-red-200">Divorce</h4>
                    <p className="mt-2 text-sm text-red-700 dark:text-red-300">
                      Divorce terminates spouse dependent status immediately upon final decree. Update records
                      within 30 days. Former spouse loses all benefits except transitional coverage.
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">U.S. Divorce Documentation</h2>
                <ul className="mt-4 space-y-2">
                  {US_DIVORCE_DOCS.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Foreign Divorce Documentation</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Foreign divorces require additional documentation to verify U.S. recognition:
                </p>
                <ul className="mt-4 space-y-2">
                  {FOREIGN_DIVORCE_DOCS.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Foreign Divorce Recognition Requirements</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Per MCO 1751.3 CH-1, foreign divorces must meet the following requirements:
                </p>
                <ul className="mt-3 space-y-2">
                  {FOREIGN_DIVORCE_REQUIREMENTS.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                      {req}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Note:</strong> "Quickie" divorces from foreign jurisdictions where neither party was
                    physically present may not be recognized. Consult JAG if there are questions about validity.
                  </p>
                </div>
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
                      <strong>Obtain Divorce Decree</strong>
                      <p className="mt-1">Get certified copy of final divorce decree from the court.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
                    <div>
                      <strong>Notify Command</strong>
                      <p className="mt-1">Inform your chain of command of the divorce within 30 days.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
                    <div>
                      <strong>Submit NAVMC 10922</strong>
                      <p className="mt-1">Complete NAVMC 10922 annotated to remove former spouse from records.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
                    <div>
                      <strong>Update SGLI</strong>
                      <p className="mt-1">Update SGLI beneficiary designation if former spouse was listed.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
                    <div>
                      <strong>MCTFS Update</strong>
                      <p className="mt-1">Admin processes Unit Diary entry to update MCTFS.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
                    <div>
                      <strong>DEERS Update</strong>
                      <p className="mt-1">Former spouse is removed from DEERS. Arrange for ID card surrender.</p>
                    </div>
                  </li>
                </ol>
              </section>
            </>
          )}

          {/* Benefits Impact Tab */}
          {activeTab === "benefits" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Benefits Impact</h2>
                <div className="mt-4 space-y-4">
                  {BENEFITS_IMPACT.map((item) => (
                    <div key={item.benefit} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.benefit}</h4>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.impact}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">20/20/20 Rule</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Former spouses may retain certain military benefits if ALL of the following conditions are met:
                </p>
                <ul className="mt-3 space-y-2">
                  {RULE_20_20_20.map((rule) => (
                    <li key={rule} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>20/20/20 Benefits:</strong> Unlimited commissary, exchange, and MWR access.
                    Full military medical care and TRICARE coverage (if not remarried before age 55).
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">20/20/15 Rule</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  If marriage overlapped with service for at least 15 years (but less than 20), former spouse
                  may be eligible for one year of transitional medical benefits only.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Transitional Health Care</h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Transitional Assistance (TA)</h4>
                    <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                      Up to 180 days of TRICARE coverage available to all former spouses immediately after divorce.
                      No premium required.
                    </p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200">CHCBP</h4>
                    <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                      Continued Health Care Benefit Program provides up to 36 months of premium-based
                      coverage after transitional coverage ends. Former spouse must enroll within 60 days.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Stepchildren Tab */}
          {activeTab === "stepchildren" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Stepchildren After Divorce</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Stepchildren from your former marriage are no longer your dependents after divorce.
                  The stepparent-stepchild relationship exists only through marriage.
                </p>
                <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    Remove stepchildren from MCTFS within 30 days of divorce. They must surrender ID cards.
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Actions</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Submit NAVMC 10922 removing stepchildren
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Coordinate surrender of stepchildren's ID cards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Update SGLI beneficiary if stepchildren were listed
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Stepchildren Transitional Benefits</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Stepchildren may be eligible for transitional TRICARE coverage similar to former spouses:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    Up to 180 days of transitional TRICARE
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    CHCBP available for up to 36 months (premium required)
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Biological/Adopted Children</h3>
                <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Important:</strong> Your biological or legally adopted children remain your dependents
                    regardless of divorce. Only stepchildren lose dependent status upon divorce.
                  </p>
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
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Resources</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Legal Assistance:</span>
                    Base legal for divorce questions and document review
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IPAC:</span>
                    NAVMC 10922 processing and MCTFS updates
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">ID Card Office:</span>
                    DEERS updates and ID card surrender
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TRICARE:</span>
                    Transitional health care options
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
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">10 U.S.C. 1072</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Definitions (Former Spouse Benefits)</p>
                  </li>
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">10 U.S.C. 1086</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Transitional Health Care</p>
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
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Notification Deadline</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">30 days from divorce</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Transitional TRICARE</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Up to 180 days</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">CHCBP</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Up to 36 months</dd>
              </div>
            </dl>
          </section>

          {/* Warning */}
          <section className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">30-Day Deadline</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Update records within 30 days of divorce. Failure to report may result in BAH overpayment and debt.
            </p>
          </section>

          {/* Reminder */}
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200">Update SGLI</h4>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              If former spouse was SGLI beneficiary, update your designation immediately after divorce.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
