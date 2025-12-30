"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

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

const KEY_POINTS = [
  { label: "SRB", value: "Enlisted Marines (black cover)" },
  { label: "OQR", value: "Officers (green cover)" },
  { label: "Custodian", value: "Commanding Officer" },
  { label: "Correction Authority", value: "CO or designated officer" },
  { label: "Marine Access", value: "Unlimited, in presence of custodian" },
  { label: "Authority", value: "MCO P1070.12K (IRAM)" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "errors", label: "Common Errors" },
  { id: "corrections", label: "Requesting Corrections" },
  { id: "mctfs", label: "MCTFS Corrections" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const ENTRY_REQUIREMENTS = [
  { requirement: "Format", standard: "Typewritten, stamped, or neatly printed" },
  { requirement: "Erasures", standard: "Not permitted" },
  { requirement: "Strikeovers", standard: "Not permitted" },
  { requirement: "Correction fluid/tape", standard: "Not permitted" },
  { requirement: "Abbreviations", standard: "Standard abbreviations per IRAM only" },
  { requirement: "Date format", standard: "YYMMDD" },
  { requirement: "Authentication", standard: "CO or designated officer only" },
];

const PERSONAL_ERRORS = [
  "Name - Misspelling, missing suffix, wrong legal name",
  "SSN - Transposed digits, incorrect number",
  "Date of Birth - Wrong date",
  "Place of Birth - Incorrect city, state, or country",
  "Home of Record - Wrong address",
];

const SERVICE_ERRORS = [
  "Enlistment Date - Incorrect PEBD",
  "EAS - Wrong date calculated",
  "Rank/Grade - Incorrect DOR",
  "MOS - Wrong primary or additional MOS",
  "Unit Assignment - Incorrect duty station history",
];

const TRAINING_ERRORS = [
  "PME - Missing school completion",
  "MOS School - Incorrect graduation date",
  "Rifle/Pistol Qual - Wrong score or classification",
  "PFT/CFT - Incorrect score",
  "Certifications - Missing or incorrect entries",
];

const BIR_CORRECTIONS = [
  { field: "Personal data", method: "Unit Diary entry via S-1" },
  { field: "Contract data", method: "IPAC with documentation" },
  { field: "Service data", method: "Unit Diary entry" },
  { field: "Dependent data", method: "NAVMC 10922 submission" },
];

const BTR_CORRECTIONS = [
  { field: "PFT/CFT scores", method: "Unit Diary entry" },
  { field: "Rifle/Pistol qual", method: "Unit Diary entry" },
  { field: "Training completion", method: "Unit Diary with certificate" },
  { field: "Security clearance", method: "Security Manager coordination" },
];

const TIMELINE = [
  { action: "Identify error", timeframe: "Immediately upon discovery" },
  { action: "Gather documentation", timeframe: "1-7 days" },
  { action: "Submit to S-1", timeframe: "Within 30 days of discovery" },
  { action: "Unit processing", timeframe: "5-10 working days" },
  { action: "MCTFS update", timeframe: "1-2 pay periods" },
  { action: "OMPF update", timeframe: "30-60 days via ORMA" },
  { action: "BCNR decision", timeframe: "6-12 months" },
];

const DOCS_TO_MAINTAIN = [
  "Enlistment/reenlistment contracts",
  "All orders (PCS, TAD, promotion)",
  "Award citations and certificates",
  "School completion certificates",
  "Fitness reports (endorsed copies)",
  "Training certificates",
  "Marriage/birth certificates",
  "Any official correspondence",
];

export function SRBCorrectionsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SRB Corrections Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            The Service Record Book (SRB) for enlisted Marines and Officer Qualification Record (OQR)
            for officers is the primary source of information concerning a Marine at the unit level.
            Corrections to the SRB/OQR ensure your record accurately reflects your service history,
            qualifications, and achievements. Errors in your SRB/OQR can affect promotions, assignments,
            and benefits. You have the right to review your record and request corrections for inaccuracies.
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
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
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
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Contains standard pages identified by NAVMC form numbers</li>
                <li>• May consist of more than one page</li>
                <li>• Often identified by form number rather than title</li>
                <li>• Specific format requirements apply</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Document Side (Left)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Contains supporting documents</li>
                <li>• Superseded standard pages</li>
                <li>• Official letters and certificates</li>
                <li>• Documents of permanent value</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Entry Format Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Standard</th>
                </tr>
              </thead>
              <tbody>
                {ENTRY_REQUIREMENTS.map((row) => (
                  <tr key={row.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.requirement}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Making Corrections</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            When an error exists:
          </p>
          <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-blue-600 dark:text-blue-400">
            <li>Draw a single line through the invalid entry</li>
            <li>Place correct entry nearby</li>
            <li>Authenticate correction with signature and date</li>
            <li>Do not use erasures, correction fluid, or tape</li>
          </ol>
        </section>
      </div>
    ),

    errors: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Personal Information Errors
          </h3>
          <ul className="mt-4 space-y-2">
            {PERSONAL_ERRORS.map((error) => (
              <li key={error} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 mt-0.5">•</span>
                {error}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Service Information Errors
          </h3>
          <ul className="mt-4 space-y-2">
            {SERVICE_ERRORS.map((error) => (
              <li key={error} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 mt-0.5">•</span>
                {error}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Training and Qualification Errors
          </h3>
          <ul className="mt-4 space-y-2">
            {TRAINING_ERRORS.map((error) => (
              <li key={error} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 mt-0.5">•</span>
                {error}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Record Book Audit
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Tri-Annual Audit</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Month corresponds to last digit of SSN</li>
                <li>• Required by MCO P1070.12K</li>
                <li>• Verifies accuracy and completeness</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Self-Audit</h4>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                <li>Request to review SRB/OQR with custodian present</li>
                <li>Compare entries to personal records</li>
                <li>Identify discrepancies</li>
                <li>Submit correction requests for errors</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    ),

    corrections: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Unit-Level Corrections
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            For administrative errors correctable at unit level:
          </p>
          <ol className="mt-4 space-y-2">
            {[
              "Identify the error in your SRB/OQR",
              "Gather supporting documentation",
              "Submit request to S-1/Admin",
              "S-1 verifies documentation",
              "Correction made by CO or designated officer",
              "Entry authenticated with signature and date",
            ].map((step, index) => (
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
            Page 11 (Administrative Remarks) Corrections
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Rebuttal Statement</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• 5 working days after acknowledgment to submit written rebuttal</li>
                <li>• Rebuttal filed on document side of SRB</li>
                <li>• Does not remove original entry</li>
              </ul>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Removal Requests</h4>
              <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
                <li>• Page 11 entries not meeting ORMA criteria → submit to MMPB-21</li>
                <li>• Email: smb.manpower.mmrp-13@usmc.mil</li>
                <li>• Include justification and supporting documentation</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-800 dark:text-red-200">BCNR Appeals</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                For entries you believe are unjust or incorrect, submit DD Form 149 with supporting evidence to BCNR.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Escalating Corrections
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            If your unit cannot make the correction:
          </p>
          <ol className="mt-4 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
            <li>Request written explanation of denial</li>
            <li>Elevate to higher headquarters</li>
            <li>Contact IPAC for MCTFS issues</li>
            <li>Submit to MMRP for OMPF issues</li>
            <li>File with BCNR if all else fails</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Correction Timeline
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE.map((row) => (
                  <tr key={row.action} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.action}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.timeframe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    mctfs: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MCTFS Record Corrections
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            For errors in MCTFS data:
          </p>
          <ol className="mt-4 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
            <li>Identify discrepancy between SRB/OQR and MCTFS</li>
            <li>Provide documentation to S-1</li>
            <li>S-1 submits Unit Diary correction</li>
            <li>IPAC processes correction</li>
            <li>Verify correction on BIR/BTR</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            BIR Corrections
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Field</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Correction Method</th>
                </tr>
              </thead>
              <tbody>
                {BIR_CORRECTIONS.map((row) => (
                  <tr key={row.field} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.field}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            BTR Corrections
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Field</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Correction Method</th>
                </tr>
              </thead>
              <tbody>
                {BTR_CORRECTIONS.map((row) => (
                  <tr key={row.field} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.field}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resources and Contacts
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { name: "Unit S-1/Admin", desc: "First point of contact for corrections" },
              { name: "IPAC", desc: "MCTFS corrections, record book issues" },
              { name: "MMRP", desc: "smb.manpower.mmrp-13@usmc.mil" },
              { name: "BCNR", desc: "Formal record correction appeals" },
              { name: "MOL", desc: "View MCTFS data (BIR, BTR)" },
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

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Identify the Error
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Review SRB/OQR with custodian",
              "Compare to personal records",
              "Document specific discrepancy",
              "Note location in record (page, section)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Gather Documentation
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Obtain original documents",
              "Make copies (keep originals)",
              "Gather witness statements if needed",
              "Organize chronologically",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Submit Request
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Prepare written correction request",
              "Attach supporting documentation",
              "Submit to S-1/Admin",
              "Obtain receipt or tracking number",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Follow Up
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Check status after 10 working days",
              "Verify correction made",
              "Confirm MCTFS updated",
              "Retain copy of corrected entry",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Documentation to Maintain
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Keep personal copies of:</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {DOCS_TO_MAINTAIN.map((doc) => (
              <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-red)] mt-0.5">•</span>
                {doc}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
