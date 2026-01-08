"use client";

import { MCOLink } from "./ui/MCOLink";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";
import { ListItem } from "./ui/ListItem";
import { MCO_URLS } from "@/data/references";

type Ref = { title: string; url: string; isQuickLink?: boolean };

// Helper component for linked MCO references

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "child-types", label: "Child Types" },
  { id: "parental-leave", label: "Parental Leave" },
  { id: "processing", label: "Processing" },
  { id: "deers", label: "DEERS & TRICARE" },
  { id: "secondary", label: "Secondary Dependents" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
];

const KEY_POINTS = [
  { element: "Form", requirement: "NAVMC 10922 (Dependency Application)" },
  { element: "Submission Deadline", requirement: "Within 30 days of birth or adoption" },
  { element: "Required Document", requirement: "Birth certificate or adoption decree" },
  { element: "Secondary Dependency Form", requirement: "DD 137 (Dependency Statement)" },
  { element: "Approval Authority", requirement: "Commanding Officer" },
  { element: "Parental Leave", requirement: "Up to 12 weeks (primary) or 21 days (secondary caregiver)" },
  { element: "Authority", requirement: "MCO 1751.3 CH-1, MARADMIN 105/23" },
];

const LEGITIMATE_CHILD_DOCS = [
  "Completed NAVMC 10922 signed by member and attesting officer",
  "Birth certificate naming both parents",
];

const OUT_OF_WEDLOCK_DOCS = [
  "Completed NAVMC 10922 signed by member and attesting officer",
  "Birth certificate with member's name as parent, OR court order naming member as parent, OR signed statement by member indicating parentage",
  "DD 137 (Dependency Statement) completed by custodial parent with notarized signature",
];

const OUT_OF_WEDLOCK_ADDITIONAL = [
  "Residential lease or command letter authorizing off-base housing (for Marines normally assigned to barracks)",
  "Proof of monthly contribution (if deployed or child not residing with member)",
];

const ADOPTED_CHILD_DOCS = [
  "Completed NAVMC 10922 signed by member and attesting officer",
  "Adoption decree showing member is the child's legal parent",
];

const STEPCHILD_DOCS = [
  "Completed NAVMC 10922 signed by member and attesting officer",
  "Marriage certificate showing member is married to the child's legal parent",
  "Birth certificate or documentation showing spouse is the child's parent",
];

const PRE_ADOPTIVE_CHILD_DOCS = [
  "Completed NAVMC 10922 signed by member and attesting officer",
  "Court order or agency documentation showing placement",
  "Documentation of pending adoption proceedings",
];

const PROCESSING_TIMELINE = [
  { action: "Birth or adoption occurs", timeline: "Day 0" },
  { action: "Notify command", timeline: "Immediately" },
  { action: "Submit NAVMC 10922 with birth certificate or adoption decree", timeline: "Within 30 days" },
  { action: "Request parental leave", timeline: "Prior to or immediately after event" },
  { action: "Command processes NAVMC 10922", timeline: "1-5 business days" },
  { action: "MCTFS update (Unit Diary)", timeline: "Upon approval" },
  { action: "DEERS enrollment", timeline: "After MCTFS update" },
  { action: "BAH adjustment", timeline: "Effective date of birth or adoption" },
];

const BIRTH_MOTHER_LEAVE = [
  { type: "Convalescent Leave", duration: "6 weeks", isTotal: false },
  { type: "Primary Caregiver Leave", duration: "12 weeks", isTotal: false },
  { type: "Total Non-Chargeable Leave", duration: "18 weeks", isTotal: true },
];

const ACCEPTABLE_SUPPORT_PROOF = [
  "Money order receipts",
  "Cancelled checks",
  "Bank-to-bank transfers",
  "Wire transfers",
  "Dependent support allotments",
  "Billing statements with corresponding bank statements",
  "Joint account statements (in some cases)",
];

const DEERS_BENEFITS = [
  "TRICARE health coverage",
  "Access to military facilities",
  "Commissary and exchange privileges",
  "Dependent status verification",
];

const COMMON_ISSUES = [
  { issue: "Birth Certificate Delayed", solution: "Hospital provides birth certificate application. Temporary documentation (hospital birth record) may be accepted initially. Submit official birth certificate when received. Some states take 4-8 weeks to issue certificates." },
  { issue: "Father Not Listed on Birth Certificate", solution: "Member must provide signed statement of parentage. Court order establishing paternity may be required. DD 137 required from custodial parent." },
  { issue: "Overseas Birth", solution: "Birth certificate from host nation required with certified English translation. Report birth to nearest U.S. Embassy or Consulate. Obtain Consular Report of Birth Abroad (CRBA) for U.S. citizenship documentation." },
  { issue: "Adoption Not Finalized", solution: "Pre-adoptive placement may qualify for dependent status. Submit documentation of placement and pending adoption. May require CMC (MFP-1) determination. Update NAVMC 10922 when adoption is finalized." },
  { issue: "Failure to Validate Dependent Over Age 21", solution: "If you fail to provide documentation within 15 working days after notification, dependent will be removed from MCTFS. New NAVMC 10922 issued by admin office. If member fails to sign, CO annotates form with statement of failure to validate." },
];

const PARENTAL_LEAVE_STEPS = [
  "Notify Command - Inform supervisor and admin of expected birth or adoption",
  "Submit Leave Request - Request parental leave through MOL or unit leave system",
  "Designate Caregiver Status - Indicate primary or secondary caregiver",
  "Obtain Approval - Commanding officer approves parental leave",
  "Execute Leave - Begin leave after birth/adoption (and after convalescent leave for birth mothers)",
  "Return to Duty - Check in upon completion of parental leave",
];

export function BirthAdoptionContent({ data }: Props) {
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Birth/Adoption Overview</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  When you have a child through birth or adoption, you must document the new dependent using NAVMC 10922
                  (Dependency Application) within 30 days of the event. This documentation updates MCTFS for BAH entitlements,
                  DEERS enrollment, and travel allowances. Marines are also entitled to parental leave under the Military
                  Parental Leave Program (MPLP).
                </p>
                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Submit NAVMC 10922 with birth certificate or adoption decree within 30 days of the event.
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
            </>
          )}

          {/* Child Types Tab */}
          {activeTab === "child-types" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Legitimate Child (Born to Married Parents)</h2>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents:</h4>
                <ul className="mt-2 space-y-1">
                  {LEGITIMATE_CHILD_DOCS.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400"><strong>Approval:</strong> Commanding Officer</p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Child Born Out of Wedlock</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  A child born out of wedlock means the parents are not married to each other at the time of the child's birth.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents:</h4>
                <ul className="mt-2 space-y-1">
                  {OUT_OF_WEDLOCK_DOCS.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Additional Documentation (if requested):</h4>
                <ul className="mt-2 space-y-1">
                  {OUT_OF_WEDLOCK_ADDITIONAL.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400"><strong>Approval:</strong> Commanding Officer (submit doubtful cases to CMC MFP-1)</p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Adopted Child</h2>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents:</h4>
                <ul className="mt-2 space-y-1">
                  {ADOPTED_CHILD_DOCS.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400"><strong>Approval:</strong> Commanding Officer</p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Adoptive Child</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  A pre-adoptive child is placed in your home pending finalization of adoption.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents:</h4>
                <ul className="mt-2 space-y-1">
                  {PRE_ADOPTIVE_CHILD_DOCS.map((doc) => (
                    <ListItem key={doc}>{doc}</ListItem>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400"><strong>Approval:</strong> Commanding Officer (may require CMC MFP-1 review)</p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step-Child</h2>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents:</h4>
                <ul className="mt-2 space-y-1">
                  {STEPCHILD_DOCS.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400"><strong>Approval:</strong> Commanding Officer</p>
              </section>
            </>
          )}

          {/* Parental Leave Tab */}
          {activeTab === "parental-leave" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Parental Leave Program (MPLP)</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Per MARADMIN 105/23, the Marine Corps expanded the Military Parental Leave Program effective December 27, 2022.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Primary Caregiver Leave</h3>
                <div className="mt-3 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Entitlement: 12 weeks (84 days) of non-chargeable leave
                  </p>
                </div>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Member designated as primary caregiver
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Applies to birth, adoption, or long-term foster care placement
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Only one member per qualifying event may be designated primary caregiver
                  </li>
                </ul>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Usage:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Must be used within 12 months of qualifying birth or placement event
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Taken in one continuous period (no increments)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Begins after medical convalescent leave (for birth mothers)
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Secondary Caregiver Leave</h3>
                <div className="mt-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Entitlement: 21 days of non-chargeable leave
                  </p>
                </div>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Member designated as secondary caregiver
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Applies to birth, adoption, or long-term foster care placement
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Spouse or partner of primary caregiver
                  </li>
                </ul>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Usage:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Must be used within 12 months of qualifying birth or placement event
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    May be taken in increments (command approval required)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Minimum increment is 7 days
                  </li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Birth Mother Entitlements</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Birth mothers receive convalescent leave separate from parental leave (6 weeks for vaginal or cesarean delivery).
                  Convalescent leave begins immediately after delivery; primary caregiver leave begins after convalescent leave ends.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Total Leave (Birth Mother as Primary Caregiver):</h4>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-black/10 dark:border-white/10">
                        <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave Type</th>
                        <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BIRTH_MOTHER_LEAVE.map((item) => (
                        <tr key={item.type} className={`border-b border-black/5 dark:border-white/5 ${item.isTotal ? "font-semibold bg-green-50 dark:bg-green-900/20" : ""}`}>
                          <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">{item.type}</td>
                          <td className="py-2 text-zinc-900 dark:text-zinc-100">{item.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dual Military Couples</h3>
                <div className="mt-3 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <ul className="space-y-1 text-sm text-amber-800 dark:text-amber-200">
                    <li>• One member designated primary (12 weeks)</li>
                    <li>• Other member designated secondary (21 days)</li>
                    <li>• Cannot both claim primary caregiver status</li>
                  </ul>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Parental Leave Request Process</h3>
                <ol className="mt-4 space-y-2">
                  {PARENTAL_LEAVE_STEPS.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">BAH Entitlement Changes</h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Single Marine Without Dependents</h4>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                      Upon birth or adoption of first child: entitled to BAH with-dependent rate. Effective date is date of
                      birth or adoption (if documented within 30 days). May be authorized to move out of barracks.
                    </p>
                  </div>
                  <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Married Marine</h4>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                      Adding a child does not change BAH rate (already receiving with-dependent rate), but child must be
                      added to MCTFS for accurate records, DEERS enrollment, and travel entitlements for PCS.
                    </p>
                  </div>
                  <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Child Not Residing With Member</h4>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                      If child does not reside with you: may be entitled to BAH-DIFF (differential). Must provide proof of
                      support not less than BAH-DIFF amount. Support documentation required (no cash payments accepted as proof).
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Support Requirements</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Per <MCOLink mco="MCO 1751.3" url={MCO_URLS.DEPENDENCY_DETERMINATION} />, proof of dependent support is ordinarily not required for children residing with the member.
                  For children not in your physical custody:
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Acceptable Proof of Support:</h4>
                <ul className="mt-2 space-y-1">
                  {ACCEPTABLE_SUPPORT_PROOF.map((proof) => (
                    <li key={proof} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      {proof}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
                  <p className="text-sm text-red-800 dark:text-red-200">
                    <strong>Not Acceptable:</strong> Cash payments (no documentation)
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Multiple Births or Adoptions</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  For twins, triplets, or multiple adoptions:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Each child requires separate entry on NAVMC 10922
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Each child needs individual DEERS enrollment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Parental leave entitlement is the same (one qualifying event)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    BAH rate does not increase for multiple children (with-dependent rate is fixed)
                  </li>
                </ul>
              </section>
            </>
          )}

          {/* DEERS & TRICARE Tab */}
          {activeTab === "deers" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DEERS Enrollment</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  After MCTFS is updated with the new dependent:
                </p>
                <ol className="mt-4 space-y-2">
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
                    Visit the ID card office (RAPIDS site)
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
                    Bring birth certificate or adoption decree
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
                    Bring your military ID
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
                    Complete DEERS enrollment for the child
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
                    Child receives dependent ID card (age 10+) or is enrolled without card (under age 10)
                  </li>
                </ol>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DEERS Enrollment Provides</h3>
                <ul className="mt-4 space-y-2">
                  {DEERS_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Newborn Enrollment Act (TRICARE)</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Newborns are automatically covered by TRICARE for the first 60 days from date of birth if:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Birth mother is enrolled in TRICARE
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Birth occurs at a military or civilian facility
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>After 60 Days:</strong> Must enroll child in DEERS to continue TRICARE coverage. Submit NAVMC 10922
                    and update MCTFS before the 60-day deadline.
                  </p>
                </div>
              </section>
            </>
          )}

          {/* Secondary Dependents Tab */}
          {activeTab === "secondary" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Secondary Dependent Children</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Certain child dependents require additional documentation and CMC (MFP-1) determination. These are considered secondary dependents.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Ward of Court (Legal Guardianship)</h3>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    NAVMC 10922 signed by member and attesting officer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    DD 137 (Dependency Statement)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Court order placing ward in your custody (permanent or minimum 12 months)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Ward placed in custody before age 21
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Ward dependent on you for over 50% of support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Ward must reside with you (unless separated by military necessity or institutional care)
                  </li>
                </ul>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400"><strong>Approval:</strong> Submit to CMC (MFP-1) for determination</p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Incapacitated Child Over Age 21</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  An unmarried child incapable of self-support due to mental or physical incapacitation.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    NAVMC 10922 signed by member and attesting officer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    DD 137 with notarized member signature
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Medical or psychiatric evaluation (within 4 months)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Detailed medical summary with date and age at onset of incapacity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Current treatment and prognosis for recovery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    DSM-5 diagnosis for intellectual disability cases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Verification of child's income (SSA, wages, federal/state aid)
                  </li>
                </ul>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility Criteria:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Incapacitation must have existed before age 21, OR child was approved as full-time college student age 21-22 when incapacitation occurred
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    Child must be dependent on member for over 50% of support
                  </li>
                </ul>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400"><strong>Approval:</strong> Submit to CMC (MFP-1) for determination. Annual re-determination required.</p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Full-Time Student Age 21-22</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  An unmarried child enrolled full-time in higher education.
                </p>
                <h4 className="mt-4 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements:</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    NAVMC 10922 signed by member and attesting officer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    DD 137 with notarized signature
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Letter from institution confirming full-time enrollment and expected graduation date
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Proof of monthly contribution (if student does not reside with member)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Verification of student's income (wages, grants, scholarships, SSA)
                  </li>
                </ul>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400"><strong>Approval:</strong> Submit to CMC (MFP-1) for determination. Annual re-determination required.</p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DD 137 (Dependency Statement)</h3>
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
                    Download DD 137 Form
                  </a>
                </div>
                <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Note:</strong> All applicable blocks must be completed. Notarized signature required. Forms must be
                    current within 6 weeks from signature date to submission date.
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
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Resources and Contacts</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NAVMC 10922 Form:</span>
                    <a href="https://ehqmc.usmc.mil/sites/family/MFP/dependency/default.aspx" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">HQMC Family Policy (CAC required)</a>
                  </li>
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
                    For secondary dependency determinations
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DEERS/ID Card Office:</span>
                    For dependent enrollment
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IPAC:</span>
                    Installation Personnel Administration Center for NAVMC 10922 processing
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
                    <MCOLink mco="MCO 1751.3 CH-1" url={MCO_URLS.DEPENDENCY_DETERMINATION} />
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Marine Corps Dependency Determination and Support Program</p>
                  </li>
                  <li className="rounded-lg border border-black/10 p-3 dark:border-white/10">
                    <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MARADMIN 105/23</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Expansion of Military Parental Leave Program</p>
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
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Submission Deadline</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">30 days from event</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Primary Caregiver Leave</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">12 weeks (84 days)</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Secondary Caregiver Leave</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">21 days</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">TRICARE Auto-Coverage</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">60 days (newborns)</dd>
              </div>
            </dl>
          </section>

          {/* Key Reminder */}
          <section className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-800 dark:text-green-200">Birth Mother Total Leave</h4>
            <p className="mt-1 text-sm text-green-700 dark:text-green-300">
              Up to 18 weeks non-chargeable leave (6 weeks convalescent + 12 weeks primary caregiver).
            </p>
          </section>

          {/* Secondary Dependency Note */}
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200">DD 137 Required</h4>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              For secondary dependents (ward of court, incapacitated child, full-time student 21-22), submit DD 137 to CMC (MFP-1).
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
