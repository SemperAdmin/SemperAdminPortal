"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "ompf", label: "OMPF" },
  { id: "orma", label: "ORMA" },
  { id: "updates", label: "Updates" },
  { id: "checklists", label: "Checklists" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Primary System", desc: "OMPF Records Management Application (ORMA)" },
  { element: "View-Only Access", desc: "OMPF Viewer on MOL (internet accessible)" },
  { element: "Update Access", desc: "ORMA (requires .mil domain connection)" },
  { element: "Personal Info Updates", desc: "MOL Personal Info tab and milConnect" },
  { element: "Review Frequency", desc: "Upon check-in, before boards, before separation" },
  { element: "Authority", desc: "MCO 1070.1, MCO P1070.12K (IRAM)" },
];

const OMPF_ELEMENTS = [
  { element: "MCTFS Data", desc: "Information collected and stored in the Marine Corps Total Force System, represented in the Header Data on the Master Brief Sheet (MBS)" },
  { element: "Digital Documents", desc: "Copies of original documents required to be kept permanently for validating MCTFS information and verifying service and entitlements" },
];

const OMPF_PURPOSE_ACTIVE = [
  "Serves as your advocate at Headquarters Marine Corps (HQMC)",
  "Used for promotion boards",
  "Used for selection boards",
  "Used for assignment decisions",
];

const OMPF_PURPOSE_SEPARATED = [
  "Provides validation and information when requested",
  "Verifies service for veterans benefits",
  "Supports agency verification requests",
];

const OMPF_SECTIONS = [
  { section: "Service Folder", contents: "Contract information, discharge documents, reserve documents, orders to active duty, general administrative documents" },
  { section: "Commendatory/Derogatory Folder", contents: "Civilian and military education, personal awards, courts-martial/NJP, significant achievements or adverse material" },
  { section: "Performance Folder", contents: "Fitness reports, standard addendum pages (Sgt and above), memoranda from CMC (MMRP)" },
  { section: "Field Folder (SRB/OQR)", contents: "Documents from previous SRB/OQRs, partial listing of documents suitable for OMPF inclusion" },
  { section: "Health Folder", contents: "Only maintained for broken service prior to 1994 or TDRL status" },
];

const ORMA_COMPARISON = [
  { feature: "Purpose", viewer: "View documents only", orma: "View and update documents" },
  { feature: "Access", viewer: "Any internet-connected computer", orma: ".mil domain connection required" },
  { feature: "Login", viewer: "CAC or username/password", orma: "CAC required" },
  { feature: "Actions", viewer: "View and print", orma: "Request removal, replacement, and additions" },
  { feature: "Tracking", viewer: "None", orma: "Track and view requests" },
];

const ORMA_ACCESS_STEPS = [
  "Connect to a .mil domain network (MCEN or any DoD network)",
  "Log into Marine Online (MOL) with CAC",
  "Navigate to OMPF/Records Management section",
  "Select ORMA application",
];

const ORMA_CAPABILITIES = [
  "View all documents in your OMPF",
  "Request document additions",
  "Request document replacements",
  "Request document removals (with criteria)",
  "Track request status",
  "View request history",
];

const REMOVALS_ORMA = [
  "Duplicate documents",
  "Documents requiring administrative correction",
  "Unnecessary documents in Commendatory/Derogatory folder (MarineNet courses that are not PME, sub-courses from Distance Education courses)",
];

const REMOVALS_EMAIL = [
  { type: "Documents belonging to another Marine", action: "Email james.west@usmc.mil with EDIPI of record containing incorrect documents and folder/subfolder location" },
  { type: "Page 11 entries and UPBs not meeting ORMA criteria", action: "Submit to MMPB-21 at smb.manpower.mmrp-13@usmc.mil" },
];

const MOL_PERSONAL_UPDATES = [
  "Contact Information (mailing address, phone numbers, email)",
  "Family Care Plan",
  "Family Readiness",
  "Foreign Travel",
  "Gas Mask and Helmet size",
  "Personnel Accountability Information",
  "Race/Ethnic designation",
  "Religion",
  "Self-professed Language Skills",
  "Record of Emergency Data (RED)",
];

const MILCONNECT_UPDATES = [
  "Update personal contact info",
  "Transfer education benefits",
  "View health care coverage",
  "View Primary Care Manager (PCM)",
  "Update work contact info (GAL)",
  "Obtain proof of health coverage",
  "Update family members in DEERS",
  "Update name in DEERS",
  "Retrieve correspondence",
  "Update SGLI beneficiary information",
];

const SRB_PURPOSES = [
  "Record significant events, duties, and pertinent information for historical purposes",
  "Assist commanders in making decisions on assignments, promotions, and school eligibility",
  "Protect privacy by consolidating information and limiting access to chain of command",
];

const COMMON_RECORDS = [
  { record: "MCTFS Basic Individual Record (BIR)", purpose: "Contract info, service info, personal info, dependents" },
  { record: "MCTFS Basic Training Record (BTR)", purpose: "PFT, rifle/pistol qual, training certifications, security clearance" },
  { record: "MCTFS Record of Service", purpose: "Pro/Con marks, composite scores" },
  { record: "Chronological Record (NAVMC 118-3)", purpose: "Unit assignments, duties, remarks" },
];

const CHECKLIST_CHECKIN = [
  "Access OMPF Viewer to review all documents",
  "Verify service folder contains correct contract and orders",
  "Verify commendatory folder contains all awards and schools",
  "Verify performance folder contains all fitness reports/evaluations",
  "Check for missing documents",
  "Check for incorrect documents",
  "Update contact information in MOL",
  "Update Record of Emergency Data (RED)",
  "Verify DEERS information is current",
  "Verify SGLI beneficiary is correct",
];

const CHECKLIST_BOARD = [
  "Review entire OMPF for completeness",
  "Ensure all awards are documented",
  "Verify all PME completion is recorded",
  "Check fitness report continuity",
  "Submit missing documents via ORMA",
  "Allow processing time before board convenes",
];

const CHECKLIST_SEPARATION = [
  "Conduct thorough OMPF review",
  "Ensure all service is documented",
  "Verify all awards and decorations are recorded",
  "Check for accuracy of all dates and information",
  "Submit corrections for any discrepancies",
  "Download copies of important documents",
];

const LES_SECTIONS = [
  { section: "Section A: ID Info", items: ["Name, SSN, rank, service", "Pay Entry Base Date (PEBD)", "EAS/ECC dates"] },
  { section: "Section E: Leave Information", items: ["Leave balance", "Leave earned/used", "Maximum accrual"] },
  { section: "Section O: Remarks", items: ["Entitlements (Base Pay, BAH, BAS)", "Deductions (taxes, allotments, insurance)", "Payments"] },
];

const LES_ISSUES = [
  "Incorrect BAH rate or dependency status",
  "Missing or incorrect special pays",
  "Incorrect tax withholdings",
  "Allotment errors",
  "Leave balance discrepancies",
];

const TIPS = [
  { tip: "Review regularly", detail: "Do not wait for boards or separation to check your record." },
  { tip: "Keep copies", detail: "Maintain personal copies of all important documents." },
  { tip: "Submit promptly", detail: "Add documents to OMPF as soon as you receive them." },
  { tip: "Track submissions", detail: "Use ORMA to monitor document processing." },
  { tip: "Verify accuracy", detail: "Check that submitted documents appear correctly." },
  { tip: "Update contact info", detail: "Keep MOL and milConnect information current." },
  { tip: "Check RED annually", detail: "Ensure emergency data and beneficiaries are correct." },
  { tip: "Know your LES", detail: "Review every month for accuracy." },
];

const CONTACTS = [
  { office: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil" },
  { office: "milConnect", url: "https://milconnect.dmdc.osd.mil" },
  { office: "OMPF Document Corrections", email: "james.west@usmc.mil" },
  { office: "Page 11/UPB Removals", email: "smb.manpower.mmrp-13@usmc.mil" },
  { office: "BCNR", purpose: "For formal record corrections (DD Form 149)" },
  { office: "Unit S-1/Admin", purpose: "For immediate records questions" },
  { office: "IPAC", purpose: "For MCTFS and record book issues" },
];

export function RecordsReviewContent({ data }: Props) {
  const content = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Records review is a critical check-in task requiring you to verify and update your Official Military
            Personnel File (OMPF) and personal information in Marine Online (MOL). Your OMPF serves as your permanent
            record from initial enlistment through final separation and is used for promotions, selections, assignments,
            and benefits verification. It is your personal responsibility to ensure your record is accurate and complete.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((item) => (
                  <tr key={item.element} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.element}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What the OMPF Contains
          </h3>
          <div className="mt-4 space-y-4">
            {OMPF_ELEMENTS.map((item, index) => (
              <div key={item.element} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.element}</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">While on Active Duty</h4>
            <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
              {OMPF_PURPOSE_ACTIVE.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-800 dark:text-green-200">After Separation</h4>
            <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
              {OMPF_PURPOSE_SEPARATED.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>
        </div>
      </>
    ),

    ompf: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OMPF Sections
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Your OMPF is organized into sections, each containing specific types of documents.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Section</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Contents</th>
                </tr>
              </thead>
              <tbody>
                {OMPF_SECTIONS.map((item) => (
                  <tr key={item.section} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.section}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.contents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Service Record Book (SRB) / Officer Qualification Record (OQR)
          </h3>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            The SRB (enlisted) or OQR (officer) is the best source of information concerning a Marine and serves
            three purposes:
          </p>
          <ol className="mt-4 space-y-3">
            {SRB_PURPOSES.map((purpose, index) => (
              <li key={purpose} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{purpose}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Records for Review
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Record</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_RECORDS.map((item) => (
                  <tr key={item.record} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.record}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SRB/OQR Structure
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Standard Side (Right)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• Standard pages identified by NAVMC form numbers</li>
                <li>• Entries must be typewritten, stamped, or neatly printed</li>
                <li>• No erasures, strikeovers, or correction fluid</li>
                <li>• Standard abbreviations per IRAM</li>
                <li>• Dates in YYMMDD format</li>
                <li>• Only CO or designated officer may authenticate entries</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Document Side (Left)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• Superseded standard pages</li>
                <li>• Official letters</li>
                <li>• Certificates</li>
                <li>• Various documents of permanent value</li>
                <li>• No mandatory filing sequence (command determines order)</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    ),

    orma: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OMPF Records Management Application (ORMA)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            ORMA is the application that allows Marines to take control of their OMPF and ensure timely updates.
            ORMA provides significant reduction in turnaround time from submission to document integration.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            ORMA vs OMPF Viewer
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Feature</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">OMPF Viewer</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">ORMA</th>
                </tr>
              </thead>
              <tbody>
                {ORMA_COMPARISON.map((item) => (
                  <tr key={item.feature} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.feature}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.viewer}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.orma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Accessing ORMA
          </h3>
          <ol className="mt-4 space-y-3">
            {ORMA_ACCESS_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            ORMA Capabilities
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {ORMA_CAPABILITIES.map((cap) => (
              <li key={cap} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-500">✓</span>
                {cap}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Document Removal Requests
          </h3>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Removals Allowed via ORMA</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                {REMOVALS_ORMA.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Removals Requiring Email to MMRP</h4>
              <ul className="mt-2 space-y-2 text-sm text-amber-700 dark:text-amber-300">
                {REMOVALS_EMAIL.map((item) => (
                  <li key={item.type}>
                    <span className="font-medium">{item.type}:</span> {item.action}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-800 dark:text-red-200">Removals Requiring BCNR</h4>
              <p className="mt-2 text-sm text-red-700 dark:text-red-300">
                All other document removal requests must be submitted to the Board for Correction of Naval Records (BCNR).
                Submit DD Form 149 with supporting documentation directly to BCNR for adjudication.
              </p>
            </div>
          </div>
        </section>
      </>
    ),

    updates: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Updating Personal Information
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Keep your personal information current in both MOL and milConnect to ensure accurate records and benefits.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              MOL Personal Info Tab
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Access from MOL Home Page by selecting &quot;Personal Info&quot; to view and update:
            </p>
            <ul className="mt-4 space-y-2">
              {MOL_PERSONAL_UPDATES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-[var(--sa-red)] mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              milConnect Updates
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Use milConnect (https://milconnect.dmdc.osd.mil) to:
            </p>
            <ul className="mt-4 space-y-2">
              {MILCONNECT_UPDATES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-[var(--sa-red)] mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Leave and Earnings Statement (LES) Review
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Review your LES monthly to verify accuracy of pay and entitlements.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {LES_SECTIONS.map((section) => (
              <div key={section.section} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{section.section}</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {section.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Common LES Issues</h4>
          <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            {LES_ISSUES.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Tips for Records Management
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {TIPS.map((item) => (
              <div key={item.tip} className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.tip}</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    ),

    checklists: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Records Review Checklists
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Use these checklists to ensure complete records review at key career milestones.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Upon Check-In
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {CHECKLIST_CHECKIN.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Promotion/Selection Board
          </h3>
          <ul className="mt-4 space-y-2">
            {CHECKLIST_BOARD.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Separation
          </h3>
          <ul className="mt-4 space-y-2">
            {CHECKLIST_SEPARATION.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resources & Contacts
          </h3>
          <div className="mt-4 space-y-3">
            {CONTACTS.map((contact) => (
              <div key={contact.office} className="flex items-start gap-2 text-sm">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">{contact.office}:</span>
                {"url" in contact && contact.url && (
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--sa-red)] underline hover:no-underline"
                  >
                    {contact.url}
                  </a>
                )}
                {"email" in contact && contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[var(--sa-red)] underline hover:no-underline"
                  >
                    {contact.email}
                  </a>
                )}
                {"purpose" in contact && contact.purpose && (
                  <span className="text-zinc-600 dark:text-zinc-400">{contact.purpose}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Record Book Audit</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            <strong>Tri-Annual Audit:</strong> The office maintaining record books conducts audits during the month
            corresponding to the last digit of the Marine&apos;s SSN.
          </p>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
            <strong>Monthly Audits:</strong> Platoon sergeants should conduct monthly audits on selected record books
            to correct discrepancies.
          </p>
        </section>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
