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
  { label: "Document", value: "Official promotion authorization" },
  { label: "Authority", value: "CMC (via HQMC)" },
  { label: "Filing", value: "OMPF (Performance section)" },
  { label: "Retention", value: "Permanent record" },
  { label: "Copies", value: "Command, Marine, OMPF" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "receipt", label: "Receipt & Verification" },
  { id: "documentation", label: "Documentation" },
  { id: "filing", label: "Filing Requirements" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const WARRANT_ELEMENTS = [
  { element: "Marine's Name", description: "Full legal name as recorded in official records" },
  { element: "EDIPI", description: "DoD ID number" },
  { element: "Promoted From", description: "Previous grade" },
  { element: "Promoted To", description: "New grade" },
  { element: "Date of Rank", description: "Effective date of promotion" },
  { element: "Authority", description: "By direction of the Commandant" },
  { element: "Signature", description: "Authorizing official" },
];

const VERIFICATION_ITEMS = [
  "Name spelled correctly",
  "EDIPI matches records",
  "Previous rank is correct",
  "New rank is correct",
  "Date of rank is accurate",
  "MOS is correct (if listed)",
];

const FILING_STEPS = [
  "Receive original warrant from S-1",
  "Verify all information is correct",
  "Provide copy to Marine",
  "Submit for OMPF filing via ORMA",
  "Maintain command copy in unit records",
  "Update Unit Diary with promotion data",
];

const DISCREPANCY_RESOLUTION = [
  { issue: "Wrong name spelling", resolution: "Request corrected warrant from MMEA" },
  { issue: "Incorrect date of rank", resolution: "Submit DOR correction request" },
  { issue: "Wrong MOS listed", resolution: "Correct via Unit Diary; may need new warrant" },
  { issue: "Missing warrant", resolution: "Request duplicate from MMEA" },
];

export function PromotionWarrantsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Promotion Warrants
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            A promotion warrant is the official document authorizing a Marine&apos;s advancement in grade.
            It serves as legal proof of promotion and must be properly filed in the Marine&apos;s Official
            Military Personnel File (OMPF). Accurate warrants are essential for pay, benefits, and
            future career progression.
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
            Types of Promotion Warrants
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Regular Promotion</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Based on cutting score (E-4/E-5) or selection board (E-6+)
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Meritorious Promotion</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Commander-initiated for exceptional performance
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Frocking Authorization</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Wear insignia before official promotion date
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Historical Value</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Promotion warrants become part of your permanent military record. Many Marines
            frame their warrants or keep personal copies for posterity. Ensure you retain
            at least one personal copy of each promotion warrant.
          </p>
        </section>
      </div>
    ),

    receipt: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How Warrants Are Issued
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Marine selected for promotion (cutting score, board, or meritorious)",
              "HQMC generates promotion warrant",
              "Warrant transmitted to command via MCTFS/administrative channels",
              "S-1/Admin receives and prints warrant",
              "Marine presented warrant (often in ceremony)",
              "Warrant filed in official records",
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
            Warrant Elements
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
                {WARRANT_ELEMENTS.map((item) => (
                  <tr key={item.element} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.element}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verification Items
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Upon receipt, verify the following are correct:
          </p>
          <ul className="mt-4 space-y-2">
            {VERIFICATION_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Report Errors Immediately</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If any information on the warrant is incorrect, notify S-1 immediately. Corrections
            may require a new warrant to be issued. Do not sign for or accept a warrant with errors.
          </p>
        </section>
      </div>
    ),

    documentation: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Supporting Documentation
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The promotion warrant is supported by and generates additional documentation:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Unit Diary entry reflecting promotion",
              "MCTFS update with new grade and DOR",
              "Pay change processed through DFAS",
              "ID card update (if applicable)",
              "SGLI update (if coverage amount changes)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Discrepancy Resolution
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Issue</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Resolution</th>
                </tr>
              </thead>
              <tbody>
                {DISCREPANCY_RESOLUTION.map((item) => (
                  <tr key={item.issue} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.issue}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Duplicate Warrants
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If the original warrant is lost or damaged, a duplicate can be requested:
          </p>
          <ol className="mt-4 space-y-2">
            {[
              "Submit request through S-1/Admin",
              "Request routed to MMEA",
              "Duplicate warrant generated",
              "Mark as \"DUPLICATE\" on face",
              "File with original or in place of",
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

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Personal Copies</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Always retain personal copies of your promotion warrants. These may be needed for
            VA benefits, civilian employment verification, or personal records. Digital copies
            stored securely are recommended in addition to physical copies.
          </p>
        </section>
      </div>
    ),

    filing: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Filing Steps
          </h3>
          <ol className="mt-4 space-y-2">
            {FILING_STEPS.map((step, index) => (
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
            OMPF Filing
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Filing Location</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Performance section of OMPF</li>
                <li>• Permanent record</li>
                <li>• Filed chronologically</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Submission Method</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Via ORMA (primary)</li>
                <li>• Through S-1/IPAC</li>
                <li>• Scanned copy acceptable</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verifying Filing
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            After submission, verify the warrant appears in your OMPF:
          </p>
          <ol className="mt-4 space-y-2">
            {[
              "Access OMPF through MOL",
              "Navigate to Performance section",
              "Locate promotion warrant by date",
              "Verify document is legible",
              "Report if missing after 30 days",
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

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Missing Warrants</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If reviewing your OMPF and a promotion warrant is missing, work with S-1 to obtain
            a duplicate and file it. Missing warrants can cause issues during selection boards
            or at separation/retirement.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Upon Receiving Warrant
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Verify name is spelled correctly",
              "Confirm EDIPI/DoD ID is correct",
              "Check previous rank is accurate",
              "Verify new rank is correct",
              "Confirm date of rank",
              "Report any errors to S-1",
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
            Filing Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Obtain personal copy",
              "Ensure S-1 files in unit records",
              "Submit for OMPF filing via ORMA",
              "Verify Unit Diary updated",
              "Check MCTFS reflects promotion",
              "Verify pay updated",
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
            Follow-Up (30 Days)
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Verify warrant in OMPF via MOL",
              "Confirm pay reflects new grade",
              "Update ID card if needed",
              "Update SGLI if coverage changes",
              "Retain personal copies securely",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
