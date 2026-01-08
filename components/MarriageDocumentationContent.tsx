"use client";

import { MCOLink } from "./ui/MCOLink";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";
import { ListItem } from "./ui/ListItem";
import { TimeRequired } from "./ui/TimeRequired";
import { LastUpdated } from "./ui/LastUpdated";
import { Acronym } from "./ui/Acronym";
import { MCO_URLS } from "@/data/references";


type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Marriage Types" },
  { id: "special", label: "Special Types" },
  { id: "form-guide", label: "Form Guide" },
  { id: "processing", label: "Processing" },
  { id: "entitlements", label: "Entitlements" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
];

const KEY_POINTS: { element: string; requirement: string; url?: string }[] = [
  { element: "Form", requirement: "NAVMC 10922 (Dependency Application)" },
  { element: "Submission Deadline", requirement: "Within 30 days of marriage" },
  { element: "Required Document", requirement: "Original marriage certificate (viewed by attesting officer)" },
  { element: "Approval Authority", requirement: "Commanding Officer (for U.S. ceremonial marriages)" },
  { element: "Doubtful Cases", requirement: "Forward to CMC (MFP-1) for determination" },
  { element: "Authority", requirement: "MCO 1751.3 CH-1, 37 U.S.C. 403", url: MCO_URLS.DEPENDENCY_DETERMINATION },
];

const US_MARRIAGE_REQUIREMENTS = [
  "Completed NAVMC 10922 signed by member and attesting officer",
  "Original marriage certificate viewed by commanding officer",
  "Commanding officers are not authorized to disapprove U.S. ceremonial marriages",
];

const FOREIGN_MARRIAGE_REQUIREMENTS = [
  "Completed NAVMC 10922 signed by member and attesting officer",
  "Original marriage certificate viewed by attesting officer",
  "Certified English translation of marriage certificate (by certified translator)",
  "Commanding officers cannot disapprove foreign marriages",
];

const ATTESTING_OFFICER_RESPONSIBILITIES = [
  "View original marriage certificate",
  "Verify document authenticity",
  "Ensure NAVMC 10922 is properly completed",
  "Sign as attesting officer",
  "Forward questionable cases to legal or CMC (MFP-1)",
];

const PROCESSING_TIMELINE = [
  { action: "Marriage occurs", timeline: "Day 0" },
  { action: "Submit NAVMC 10922 with marriage certificate", timeline: "Within 30 days" },
  { action: "Command processes NAVMC 10922", timeline: "1-5 business days" },
  { action: "MCTFS update (Unit Diary)", timeline: "Upon approval" },
  { action: "DEERS enrollment", timeline: "After MCTFS update" },
  { action: "BAH adjustment", timeline: "Effective date of marriage" },
];

const ENTITLEMENT_IMPACTS = [
  { category: "Basic Allowance for Housing (BAH)", impacts: ["Entitled to BAH with-dependent rate", "Effective date is date of marriage (if submitted within 30 days)", "Rate based on duty station ZIP code"] },
  { category: "DEERS Enrollment", impacts: ["Spouse eligible for enrollment after MCTFS update", "Required for military ID card", "Required for TRICARE health coverage"] },
  { category: "Travel and Transportation", impacts: ["Spouse entitled to PCS travel allowances", "Dependent travel on official orders", "Household goods shipment entitlement increases"] },
];

const COMMON_ISSUES = [
  { issue: "Missing Marriage Certificate", solution: "Obtain certified copy from county clerk or vital records office where married. Foreign certificates require certified English translation." },
  { issue: "Name Discrepancy", solution: "Legal name on marriage certificate must match MCTFS records. If spouse changed name, may need court order or updated Social Security card." },
  { issue: "Prior Marriage Not Dissolved", solution: "Cannot add new spouse until prior divorce is finalized and documented. Submit divorce documentation before remarriage documentation." },
  { issue: "Foreign Documents Without Translation", solution: "All foreign documents require certified English translation. Use certified translator services. Notarized translations from family members are not acceptable." },
];

const FORM_SECTIONS = [
  { section: "Section 1: Member Information", fields: ["Full name, grade, and EDIPI", "Social Security Number", "Unit and duty station"] },
  { section: "Section 2: Dependent Information", fields: ["Spouse full legal name", "Date of birth", "Social Security Number", "Relationship (Spouse)"] },
  { section: "Section 3: Supporting Documentation", fields: ["Type of document (Marriage Certificate)", "Date of document", "Issuing authority"] },
  { section: "Section 7: Certification", fields: ["Member signature and date", "Attesting officer signature and date", "Commanding officer approval (if required)"] },
];

const FOREIGN_DIVORCE_DOCS = [
  "NAVMC 10922",
  "Certified true copies of original marriage certificate",
  "Certified true copies of original divorce decree",
  "English translation of all foreign documents",
  "Proof of residency",
  "Submit to CMC (MFP-1) for determination",
];

const FOREIGN_DIVORCE_MARRIAGE_REQS = [
  "Submit to CMC (MFP-1) for validity determination before approval",
  "Include all documentation of prior divorce",
  "Await determination before processing dependent enrollment",
];

export function MarriageDocumentationContent({ data }: Props) {
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
              {/* Time and Authority Info */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <TimeRequired time="15-30 minutes" label="Form completion" />
                <LastUpdated date="December 2025" authority="MCO 1751.3 CH-1" />
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NAVMC 10922 Overview</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The NAVMC 10922 (Dependency Application) is the official Marine Corps form used to add, change, or remove
                  dependents in the <Acronym title="Marine Corps Total Force System">MCTFS</Acronym>. For marriage, this form documents your spouse
                  as a dependent for <Acronym title="Basic Allowance for Housing">BAH</Acronym>, <Acronym title="Defense Enrollment Eligibility Reporting System">DEERS</Acronym> enrollment, and travel/transportation entitlements.
                </p>
                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Submit the NAVMC 10922 with your marriage certificate within 30 days of the marriage.
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
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fraudulent Claims Warning</h3>
                <div className="mt-2 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                  <p className="text-sm text-red-800 dark:text-red-200">
                    Per MCO 1751.3, any member who submits a claim for housing allowance containing false statements is subject to
                    court-martial or criminal prosecution. Additionally, civilian recipients accepting benefits under fraudulent
                    circumstances may be subject to criminal prosecution.
                  </p>
                </div>
              </section>
            </>
          )}

          {/* Marriage Types Tab */}
          {activeTab === "types" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">United States Ceremonial Marriage</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Commanding officers may approve a NAVMC 10922 for marriages contracted within the United States or its
                  territories by a legal civil or religious ceremony.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1">
                  {US_MARRIAGE_REQUIREMENTS.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {req}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Questionable Cases:</strong> Seek assistance through the local legal office. If determination cannot
                    be made locally, submit NAVMC 10922 and supporting documentation to CMC (MFP-1).
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Foreign Marriage</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Commanding officers may approve a NAVMC 10922 for marriages contracted in a foreign country.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1">
                  {FOREIGN_MARRIAGE_REQUIREMENTS.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {req}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Questionable Cases:</strong> Seek assistance through local legal office. Submit NAVMC 10922, marriage
                    certificate, and certified translation to CMC (MFP-1) for determination.
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marriage Preceded by Foreign Nation Divorce</h2>
                <div className="mt-2 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    Commanding officers may NOT approve any marriage where either the member or spouse obtained a foreign nation divorce.
                  </p>
                </div>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1">
                  {FOREIGN_DIVORCE_MARRIAGE_REQS.map((req) => (
                    <ListItem key={req}>{req}</ListItem>
                  ))}
                </ul>
              </section>
            </>
          )}

          {/* Special Types Tab */}
          {activeTab === "special" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common-Law Marriage</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  A common-law marriage is an informal marriage recognized in some states and foreign countries.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Valid only if contracted in accordance with state law where common-law marriage is recognized
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Submit NAVMC 10922 to CMC (MFP-1)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Include certified true copies of declaration and registration of informal marriage from the contracted state
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Common-law marriages can only be dissolved by legal divorce
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Proxy Marriage</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  A proxy marriage uses agents or proxies acting for one or both parties during the ceremony.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Valid if performed in a jurisdiction recognizing common-law marriages with no statute prohibiting proxy marriages
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Submit NAVMC 10922 to CMC (MFP-1)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Include certified true copy of license and certificate of marriage from the state where contracted
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Telephone Marriage</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  A telephone marriage is recognized only if authorized by statute or court decision in the jurisdiction where performed.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Submit NAVMC 10922 to CMC (MFP-1)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Include documentation showing legal authority for telephone marriages in that jurisdiction
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Indian Tribunal Marriage</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  In states recognizing Indian tribal law and custom, tribal marriages are acceptable if both parties were members of Indian tribes.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Submit NAVMC 10922 to CMC (MFP-1) for determination
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Tribal marriages/divorces not recognized for persons not living as part of the tribe or on a reservation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Persons of Indian blood not living tribally are governed by state law of their domicile
                  </li>
                </ul>
              </section>
            </>
          )}

          {/* Form Guide Tab */}
          {activeTab === "form-guide" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NAVMC 10922 Completion Guide</h2>
                <div className="mt-4 space-y-4">
                  {FORM_SECTIONS.map((section) => (
                    <div key={section.section} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{section.section}</h4>
                      <ul className="mt-2 space-y-1">
                        {section.fields.map((field) => (
                          <li key={field} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                            {field}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Attesting Officer Requirements</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Per MCO 1751.3 CH-1, an attesting officer is defined as the certifying official designated by the commanding
                  officer to certify entitlement to BAH within their reporting unit.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Attesting Officer Responsibilities:</h4>
                <ul className="mt-2 space-y-1">
                  {ATTESTING_OFFICER_RESPONSIBILITIES.map((resp) => (
                    <li key={resp} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Self-Attestation:</strong> Per MCO 1751.3 CH-1 (1 July 2021), self-attestation is no longer allowed.
                    All members may complete an application and sign as the claimant, but only administrative personnel with
                    authority to sign by direction are required to sign as the attesting officer.
                  </p>
                </div>
              </section>
            </>
          )}

          {/* Processing Tab */}
          {activeTab === "processing" && (
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Voided Marriage</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  A marriage is not valid if prohibited in the state where performed (example: marriage without dissolution of pre-existing marriage).
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Member may retain payments already received if validated under DoD FMR 7000.14-R, Section 5006
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Submit questionable cases to CMC (MFP-1) for determination
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Annulled Marriage</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  A marriage may be annulled as determined by state or country laws upon petition of one party.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Submit NAVMC 10922 documenting dependent loss
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Include petition and decree of annulment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Forward to CMC (MFP-1) for determination
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Member may retain payments already received if validated
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Divorce Documentation</h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">United States Divorce</h4>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                      Commanding officers may approve divorce documentation with NAVMC 10922 (documenting dependent loss),
                      original divorce decree, and additional supporting documentation as deemed necessary.
                    </p>
                  </div>
                  <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Foreign Nation Divorce</h4>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                      Foreign nation divorces may or may not be recognized as valid in the U.S. depending on place of residence,
                      whether parties appeared in person, and application of state laws.
                    </p>
                    <h5 className="mt-3 text-sm font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documentation:</h5>
                    <ul className="mt-2 space-y-1">
                      {FOREIGN_DIVORCE_DOCS.map((doc) => (
                        <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Entitlements Tab */}
          {activeTab === "entitlements" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Impact on Entitlements</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Upon approval of NAVMC 10922 for marriage, the following entitlements are affected:
                </p>
              </section>

              {ENTITLEMENT_IMPACTS.map((ent) => (
                <section key={ent.category} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{ent.category}</h3>
                  <ul className="mt-3 space-y-1">
                    {ent.impacts.map((impact) => (
                      <li key={impact} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        {impact}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
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
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NAVMC 10922 Form:</span>
                    <a href="https://ehqmc.usmc.mil/sites/family/MFP/dependency/default.aspx" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">HQMC Family Policy (CAC required)</a>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CMC (MFP-1):</span>
                    For doubtful relationship determinations
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local Legal Office:</span>
                    For questionable marriages or divorces
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DEERS/ID Card Office:</span>
                    For dependent enrollment after MCTFS update
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IPAC:</span>
                    Installation Personnel Administration Center for form submission and processing
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
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">37 U.S.C. 403</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Basic Allowance for Housing</p>
                  </li>
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DoD FMR 7000.14-R, Volume 7A, Chapter 26</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Housing Allowances</p>
                  </li>
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MCTFS PRIUM</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Personnel Reporting Instructions</p>
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
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Submission Deadline</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">30 days from marriage</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Approval Authority</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Commanding Officer</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Doubtful Cases</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">CMC (MFP-1)</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Primary Authority</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">MCO 1751.3 CH-1</dd>
              </div>
            </dl>
          </section>

          {/* Key Reminder */}
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200">Self-Attestation Prohibited</h4>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              As of 1 July 2021, self-attestation is no longer allowed. Only designated administrative personnel may sign as attesting officer.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
