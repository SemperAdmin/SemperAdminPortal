"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
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

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: {
    references: Reference[];
  };
}

const KEY_POINTS: { label: string; value: string; urls?: { text: string; url: string }[] }[] = [
  { label: "Components", value: "MCTFS data and digital document copies" },
  { label: "Purpose (Active Duty)", value: "Promotion, selection, and assignment decisions" },
  { label: "Purpose (Post-Separation)", value: "Service verification for veterans and agencies" },
  { label: "Access", value: "MOL OMPF Viewer (view only), ORMA (view and update)" },
  { label: "Responsibility", value: "Individual Marine" },
  { label: "Authority", value: "MCO 1070.1, MCO P1070.12K (IRAM)", urls: [
    { text: "MCO 1070.1", url: MCO_URLS.OMPF },
    { text: "MCO P1070.12K (IRAM)", url: MCO_URLS.IRAM_PDF },
  ]},
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "structure", label: "Structure" },
  { id: "access", label: "Access & ORMA" },
  { id: "updates", label: "Adding/Removing" },
  { id: "issues", label: "Issues & Tips" },
  { id: "references", label: "References", type: "references" as const },
];

const OMPF_FOLDERS = [
  { folder: "Service Folder", contents: "Contract info, enlistment/reenlistment docs, discharge docs, reserve docs, orders to active duty, general admin docs" },
  { folder: "Commendatory/Derogatory", contents: "Civilian education, military education/PME, awards, courts-martial, NJP, significant achievements or adverse material" },
  { folder: "Performance Folder", contents: "Fitness reports, proficiency/conduct marks, standard addendum pages, memos from CMC (MMRP)" },
  { folder: "Field Folder (SRB/OQR)", contents: "Documents from previous SRB/OQRs (broken service), filed in Service Folder upon separation" },
  { folder: "Health Folder", contents: "Only for Marines with broken service pre-1994 or on TDRL; records sent to VA upon discharge" },
];

const VIEWER_VS_ORMA = [
  { feature: "View documents", viewer: "Yes", orma: "Yes" },
  { feature: "Print documents", viewer: "Yes", orma: "Yes" },
  { feature: "Add documents", viewer: "No", orma: "Yes" },
  { feature: "Replace documents", viewer: "No", orma: "Yes" },
  { feature: "Remove documents", viewer: "No", orma: "Yes (with criteria)" },
  { feature: "Track requests", viewer: "No", orma: "Yes" },
  { feature: "Internet access", viewer: "Yes", orma: "No (.mil only)" },
  { feature: "CAC required", viewer: "No (username/password option)", orma: "Yes" },
];

const REQUIRED_REVIEWS = [
  { event: "Upon check-in", action: "Verify records transferred correctly" },
  { event: "Before promotion board", action: "Ensure all documents present" },
  { event: "Before selection board", action: "Verify career documentation complete" },
  { event: "Before separation", action: "Confirm accuracy for DD-214" },
  { event: "Annually", action: "General accuracy check" },
];

const COMMON_ISSUES = [
  { issue: "Missing Awards", cause: "Award not submitted to OMPF after presentation", resolution: "Obtain copy of award citation/certificate, submit via ORMA to Commendatory/Derogatory folder" },
  { issue: "Missing PME", cause: "School completion not reported to OMPF", resolution: "Obtain completion certificate or transcript, submit via ORMA, verify entry in BTR" },
  { issue: "Fitness Report Gap", cause: "Report not submitted or lost in processing", resolution: "Contact reporting senior, verify with MMRP if report was received, request reconstruction if needed" },
  { issue: "Incorrect Documents", cause: "Misfiled documents, documents belonging to another Marine", resolution: "If duplicate/admin error, remove via ORMA; if belongs to another Marine, email james.west@usmc.mil; if adverse, submit to BCNR" },
];

const TIPS = [
  "Review regularly. Do not wait until you need something to check your record.",
  "Keep personal copies. Maintain copies of all important documents.",
  "Submit promptly. Add documents to OMPF as soon as you receive them.",
  "Track submissions. Use ORMA to monitor document processing.",
  "Verify accuracy. Check that submitted documents appear correctly.",
  "Act before boards. Ensure record is complete before promotion or selection boards.",
  "Know access methods. Use OMPF Viewer for quick checks, ORMA for updates.",
];

export function OMPFManagementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OMPF Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            The Official Military Personnel File (OMPF) is your permanent record from initial enlistment
            through final separation. It contains data stored in the Marine Corps Total Force System (MCTFS)
            and digital copies of original documents that validate your service. The OMPF serves as your
            advocate at Headquarters Marine Corps for promotion boards, selection boards, and assignment
            decisions. After separation, it provides verification of service for veterans benefits and
            agency requests. You are personally responsible for ensuring your OMPF is accurate and complete.
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
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">
                      {point.urls ? (
                        <>
                          {point.urls.map((link, i) => (
                            <span key={link.text}>
                              <MCOLink mco={link.text} url={link.url} />
                              {i < point.urls!.length - 1 && ", "}
                            </span>
                          ))}
                        </>
                      ) : (
                        point.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Two Primary Elements
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">1. MCTFS Data</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Information collected and stored in the Marine Corps Total Force System:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Represented in Header Data on Master Brief Sheet (MBS)</li>
                <li>• Includes personal data, service data, training data</li>
                <li>• Updates through Unit Diary entries</li>
                <li>• Transfers electronically between commands</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">2. Digital Documents</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Copies of original documents kept permanently:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Validate information in MCTFS</li>
                <li>• Provide verification of service and entitlements</li>
                <li>• Required for active duty and post-separation needs</li>
                <li>• Authority for inclusion provided by <MCOLink mco="MCO 1070.1" url={MCO_URLS.OMPF} /></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When to Review Your OMPF
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Event</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {REQUIRED_REVIEWS.map((row) => (
                  <tr key={row.event} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.event}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    structure: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OMPF Folders
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Your OMPF is organized into five sections:
          </p>
          <div className="mt-4 space-y-3">
            {OMPF_FOLDERS.map((folder) => (
              <div key={folder.folder} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{folder.folder}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{folder.contents}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Health Folder Note</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Marines are not authorized to remove, enter, or alter health or dental records.
            Health and dental records are sent to the Department of Veterans Affairs upon discharge.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What to Verify
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "All awards and decorations documented",
              "PME completion recorded",
              "Fitness report continuity (no gaps)",
              "Correct personal information",
              "Training certifications present",
              "No incorrect or duplicate documents",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),

    access: (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              OMPF Viewer (MOL)
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Purpose: View documents only</p>
            <div className="mt-4">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Access Requirements</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Any internet-connected computer</li>
                <li>• CAC or username/password login</li>
                <li>• Access through MOL interface</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">How to Access</h4>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                <li>Log into Marine Online (MOL)</li>
                <li>Select &quot;My OMPF&quot; from menu</li>
                <li>Navigate through folders</li>
                <li>View and print documents</li>
              </ol>
            </div>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              ORMA
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Purpose: View and update documents</p>
            <div className="mt-4">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Access Requirements</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Computer connected to .mil domain (MCEN or any DoD network)</li>
                <li>• CAC required</li>
                <li>• Cannot access from personal computer</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">How to Access</h4>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                <li>Connect to .mil network</li>
                <li>Log into MOL with CAC</li>
                <li>Navigate to OMPF/Records Management</li>
                <li>Select ORMA application</li>
              </ol>
            </div>
          </section>
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            ORMA vs OMPF Viewer Comparison
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
                {VIEWER_VS_ORMA.map((row) => (
                  <tr key={row.feature} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.feature}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{row.viewer}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.orma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    updates: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Adding Documents to OMPF
          </h3>
          <div className="mt-4">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Via ORMA</h4>
            <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
              <li>Access ORMA on .mil network</li>
              <li>Select &quot;Add Document&quot; option</li>
              <li>Upload scanned document (PDF format)</li>
              <li>Select appropriate folder for filing</li>
              <li>Submit request</li>
              <li>Track status in ORMA</li>
            </ol>
          </div>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Document Requirements</h4>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Clear, legible scans</li>
              <li>• PDF format preferred</li>
              <li>• Correct folder selection</li>
              <li>• Accurate document identification</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Removing Documents from OMPF
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Removals Allowed via ORMA</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• Duplicate documents</li>
                <li>• Documents requiring administrative correction</li>
                <li>• Unnecessary documents in Commendatory/Derogatory folder (MarineNet courses that are not PME, sub-courses from Distance Education courses)</li>
              </ul>
            </div>

            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Removals Requiring Email</h4>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-300">Documents belonging to another Marine:</p>
                  <p className="text-sm text-amber-600 dark:text-amber-400">Email: james.west@usmc.mil</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-300">Page 11 entries and UPBs not meeting ORMA criteria:</p>
                  <p className="text-sm text-amber-600 dark:text-amber-400">Email: smb.manpower.mmrp-13@usmc.mil</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-800 dark:text-red-200">Removals Requiring BCNR</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                All other removal requests require DD Form 149 submission to Board for Correction of Naval Records.
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common OMPF Issues
          </h3>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-red-700 dark:text-red-400">{item.issue}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium">Cause:</span> {item.cause}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-green-700 dark:text-green-400">Resolution:</span> {item.resolution}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Tips for OMPF Management
          </h3>
          <ul className="mt-4 space-y-2">
            {TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-red)] mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resources and Contacts
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { name: "OMPF Viewer", desc: "Access through MOL (any internet connection)" },
              { name: "ORMA", desc: "Access through MOL (.mil connection required)" },
              { name: "Document Corrections", desc: "james.west@usmc.mil" },
              { name: "Page 11/UPB Removals", desc: "smb.manpower.mmrp-13@usmc.mil" },
              { name: "Unit S-1/Admin", desc: "Immediate records questions" },
              { name: "IPAC", desc: "MCTFS and record processing" },
            ].map((res) => (
              <div key={res.name} className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{res.name}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{res.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
