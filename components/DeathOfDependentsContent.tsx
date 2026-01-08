"use client";

import { MCOLink } from "./ui/MCOLink";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";
import { MCO_URLS } from "@/data/references";


type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "documentation", label: "Documentation" },
  { id: "process", label: "Process" },
  { id: "benefits", label: "Benefits & Entitlements" },
  { id: "support", label: "Support Resources" },
  { id: "references", label: "References" },
];

const KEY_POINTS: { element: string; requirement: string; url?: string }[] = [
  { element: "Form Required", requirement: "NAVMC 10922 (Dependency Application)" },
  { element: "Primary Document", requirement: "Death certificate" },
  { element: "Notification", requirement: "Notify command immediately" },
  { element: "MCTFS Update", requirement: "Upon receipt of death certificate" },
  { element: "SGLI Claim", requirement: "Submit within 1 year" },
  { element: "Authority", requirement: "MCO 1751.3 CH-1", url: MCO_URLS.DEPENDENCY_DETERMINATION },
];

const REQUIRED_DOCUMENTS = [
  "Certified copy of death certificate",
  "NAVMC 10922 annotated to remove deceased dependent",
  "SGLI claim form (SGLV 8283) if applicable",
  "DD 1300 (Report of Casualty) for dependents who die overseas",
];

const PROCESSING_TIMELINE = [
  { action: "Death of dependent occurs", timeline: "Day 0" },
  { action: "Notify chain of command", timeline: "Immediately" },
  { action: "Obtain death certificate", timeline: "When available (varies by jurisdiction)" },
  { action: "Submit NAVMC 10922 with death certificate", timeline: "Upon receipt of certificate" },
  { action: "MCTFS update via Unit Diary", timeline: "Upon processing" },
  { action: "DEERS update", timeline: "Upon MCTFS update" },
  { action: "Submit SGLI claim (if applicable)", timeline: "Within 1 year" },
  { action: "BAH recalculation (if applicable)", timeline: "Effective date of death" },
];

const BENEFITS_CONSIDERATIONS = [
  { benefit: "SGLI Family Coverage", description: "If deceased was covered under FSGLI, submit claim form SGLV 8283 to receive death benefit. Spouse coverage: up to $100,000. Child coverage: $10,000." },
  { benefit: "BAH", description: "If deceased was the only dependent, BAH may revert to single rate. If other dependents remain, with-dependent rate continues. Effective date is date of death." },
  { benefit: "TRICARE", description: "Deceased dependent is removed from TRICARE coverage. Surviving dependents retain TRICARE eligibility." },
  { benefit: "Bereavement Leave", description: "Up to 14 days of emergency leave may be authorized for death of immediate family member." },
  { benefit: "Casualty Assistance", description: "Casualty Assistance Calls Officer (CACO) may be assigned to assist with arrangements and benefits." },
];

const SUPPORT_RESOURCES = [
  { resource: "Chaplain Services", description: "Spiritual support, counseling, and memorial service coordination available through base chapel." },
  { resource: "Military OneSource", description: "24/7 counseling services and referrals. Call 1-800-342-9647 or visit militaryonesource.mil." },
  { resource: "Marine Corps Community Services (MCCS)", description: "Family support programs, counseling, and assistance with benefits." },
  { resource: "Tragedy Assistance Program for Survivors (TAPS)", description: "Peer-based emotional support for those grieving military loss. Visit taps.org." },
  { resource: "Fleet and Family Support Center", description: "Counseling, financial assistance, and support services." },
  { resource: "Casualty Assistance Calls Officer (CACO)", description: "Assigned to help navigate benefits and administrative requirements." },
];

const COMMON_ISSUES = [
  { issue: "Death Certificate Delayed", solution: "Notify command of the death immediately. Administrative processing can begin with notification. Submit NAVMC 10922 when death certificate is received. Some jurisdictions take weeks to issue certificates." },
  { issue: "Death Overseas", solution: "For dependents who die overseas, a DD 1300 (Report of Casualty) may be required in addition to foreign death certificate. Foreign death certificates require certified English translation." },
  { issue: "SGLI Claim Process", solution: "Submit SGLV 8283 (Claim for Death Benefits) to the Office of Servicemembers' Group Life Insurance (OSGLI). Include certified death certificate. Claims should be submitted within 1 year of death." },
  { issue: "Surviving Spouse and Children", solution: "If spouse dies, surviving children remain dependents. No change to their status. Update SGLI beneficiary designation if spouse was listed." },
];

export function DeathOfDependentsContent({ data }: Props) {
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Death of Dependents Overview</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  When a dependent passes away, administrative records must be updated to reflect the change.
                  Per <MCOLink mco="MCO 1751.3 CH-1" url={MCO_URLS.DEPENDENCY_DETERMINATION} />, the command should be notified immediately, and MCTFS updated upon
                  receipt of the death certificate. This page provides guidance on documentation, benefits,
                  and available support resources.
                </p>
                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Notify your chain of command immediately. Take care of yourself and your family first—administrative matters can wait.
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
                            {point.url ? (
                              <MCOLink mco={point.requirement} url={point.url} />
                            ) : (
                              point.requirement
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Immediate Steps</h3>
                <ol className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
                    <div>
                      <strong>Take Care of Yourself and Family</strong>
                      <p className="mt-1">Administrative matters can wait. Focus on immediate needs and support.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
                    <div>
                      <strong>Notify Chain of Command</strong>
                      <p className="mt-1">Inform your supervisor or command as soon as practical.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
                    <div>
                      <strong>Request Support</strong>
                      <p className="mt-1">Chaplain services, counseling, and bereavement leave are available.</p>
                    </div>
                  </li>
                </ol>
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
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Death Certificate</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  A certified copy of the death certificate is required to update MCTFS and process any claims.
                </p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Obtaining Death Certificate</h4>
                    <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                      Death certificates are issued by the vital records office in the state or jurisdiction
                      where the death occurred. Processing time varies by location—some may take several weeks.
                    </p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200">Multiple Copies Recommended</h4>
                    <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                      Obtain multiple certified copies. You may need them for SGLI claims, DEERS, insurance,
                      financial institutions, and other administrative purposes.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Death Overseas</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  If a dependent dies overseas:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Foreign death certificate with certified English translation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    DD 1300 (Report of Casualty) may be required
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Report death to nearest U.S. Embassy or Consulate
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
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrative Process</h3>
                <ol className="mt-4 space-y-4">
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
                    <div>
                      <strong>Notify Command</strong>
                      <p className="mt-1">Inform your chain of command of the dependent's death.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
                    <div>
                      <strong>Request Leave (if needed)</strong>
                      <p className="mt-1">Emergency leave of up to 14 days may be authorized for bereavement.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
                    <div>
                      <strong>Obtain Death Certificate</strong>
                      <p className="mt-1">Request multiple certified copies from vital records office.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
                    <div>
                      <strong>Submit NAVMC 10922</strong>
                      <p className="mt-1">Provide death certificate to admin to update dependency records.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
                    <div>
                      <strong>File SGLI Claim (if applicable)</strong>
                      <p className="mt-1">Submit SGLV 8283 for Family SGLI death benefit within 1 year.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
                    <div>
                      <strong>Update SGLI Beneficiary</strong>
                      <p className="mt-1">If deceased was your SGLI beneficiary, update your designation.</p>
                    </div>
                  </li>
                </ol>
              </section>
            </>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Benefits & Entitlements</h2>
                <div className="mt-4 space-y-4">
                  {BENEFITS_CONSIDERATIONS.map((item) => (
                    <div key={item.benefit} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.benefit}</h4>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family SGLI (FSGLI) Claim</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  If the deceased dependent was covered under Family SGLI:
                </p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Coverage Amounts</h4>
                    <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                      <li>• Spouse: Up to $100,000 (in $10,000 increments)</li>
                      <li>• Each Child: $10,000</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">How to File</h4>
                    <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                      Submit SGLV 8283 (Claim for Death Benefits) with certified death certificate to
                      OSGLI. Claims should be filed within 1 year of death.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Support Resources Tab */}
          {activeTab === "support" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Support Resources</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The following resources are available to help you and your family during this difficult time:
                </p>
                <div className="mt-4 space-y-4">
                  {SUPPORT_RESOURCES.map((item) => (
                    <div key={item.resource} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.resource}</h4>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Issues</h3>
                <div className="mt-4 space-y-4">
                  {COMMON_ISSUES.map((item) => (
                    <div key={item.issue} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                      <h4 className="font-semibold text-[var(--sa-red)]">{item.issue}</h4>
                      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.solution}</p>
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Governing References</h2>
                <ul className="mt-4 space-y-3">
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <MCOLink mco="MCO 1751.3 CH-1" url={MCO_URLS.DEPENDENCY_DETERMINATION} />
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Marine Corps Dependency Determination and Support Program</p>
                  </li>
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">38 U.S.C. Chapter 19</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Servicemembers' Group Life Insurance (SGLI)</p>
                  </li>
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <MCOLink mco="MCO 1050.3J" url={MCO_URLS.LEAVE_LIBERTY} />
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Regulations for Leave, Liberty, and Administrative Absence</p>
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
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Key Document</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Death Certificate</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">SGLI Claim Form</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">SGLV 8283</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Bereavement Leave</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Up to 14 days</dd>
              </div>
            </dl>
          </section>

          {/* Support Reminder */}
          <section className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Military OneSource</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              24/7 counseling and support available at 1-800-342-9647 or militaryonesource.mil
            </p>
          </section>

          {/* Chaplain Services */}
          <section className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-800 dark:text-green-200">Chaplain Services</h4>
            <p className="mt-1 text-sm text-green-700 dark:text-green-300">
              Available 24/7 for spiritual support, counseling, and memorial service coordination.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
