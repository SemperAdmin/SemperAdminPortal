"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "key-points", label: "Key Points" },
  { id: "commander-permissions", label: "Commander Permissions" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "references", label: "References", type: "references" as const },
];

export function IAPSSubmissionContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">iAPS: Improved Awards Processing System</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            iAPS is the mandatory system for submitting Marine Corps awards. All DoN Personal Military Decorations
            for Marine Corps commands must be originated in iAPS. This system streamlines the awards process and
            ensures proper routing through the chain of command to the appropriate awarding authority.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">System Requirement</h4>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
            iAPS is not optional. Every Marine Corps award nomination must be processed through this system.
            Paper submissions will not be accepted.
          </p>
        </div>
      </section>
    ),
    process: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">iAPS Submission Process</h2>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Obtain iAPS account through unit S-1</li>
            <li>Create new award nomination in iAPS</li>
            <li>Complete all required fields on NAVMC 11533</li>
            <li>Enter Summary of Action (SOA) in SOA tab - use "print PDF" to verify not over 2 pages</li>
            <li>Enter citation following format requirements</li>
            <li>Attach signed certificate in "certificate" field once approved</li>
            <li>Submit for chain of command review</li>
            <li>Award routes to appropriate authority</li>
            <li>After approval, certificate uploads to OMPF</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Verification Tools</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Use the "print PDF" function in iAPS to verify formatting and ensure your SOA does not exceed two pages.
            This prevents delays caused by formatting issues discovered during command review.
          </p>
        </div>
      </section>
    ),
    "key-points": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Things to Know</h2>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Meritorious Masts:</strong> Auto-forward to MMPB-31 upon O-3 commander approval. Upload signed certificate before approval.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Certificate of Commendation and Below:</strong> Type "SOA not required" in SOA field.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Certificate Upload:</strong> Certificate/citation uploaded must match what was presented to the Marine.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Certificate Field:</strong> Only attach signed citation/certificate to "certificate" field. Do not attach to other fields.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Letter of Appreciation and Certificate of Esteem:</strong> May be entered by anyone if end date within past 3 years. Outside 3 years, submit to MMPB-3.</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Duties</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Establish iAPS account upon arrival at command</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Learn command's internal review process</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Use "print PDF" to verify formatting before submission</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Track submitted awards and follow up on delays</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure new commanders submit Assumption of Command letters</span></li>
          </ul>
        </div>
      </section>
    ),
    "commander-permissions": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander iAPS Permissions (Per MARADMIN 077/25)</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Commanders must be granted iAPS permissions before they can approve awards. This is not automatic.
          </p>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Required Action:</strong> Command must provide Assumption of Command letter to CMC, MMPB-3.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Required Information:</strong> Commander's full name, rank, EDIPI, Unit Name, iAPS UIC.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Submission:</strong> Email as PDF after commander has been joined to iAPS UIC.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Frocked Commanders:</strong> May be granted authority with frocking authorization letter.</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Critical Timing</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Submit the Assumption of Command letter immediately after change of command. Awards cannot be approved
            by the new commander until permissions are granted, causing delays in the awards process.
          </p>
        </div>
      </section>
    ),
    "common-mistakes": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mistakes to Avoid</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">SOA Exceeds Two Pages</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Failing to verify SOA length using "print PDF" results in delayed processing when the package is returned for correction.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Inconsistent Dates</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Different dates on award form, SOA, citation, and certificate will cause the package to be returned. All dates must match.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Incorrect Opening/Closing Sentences</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Citations must follow prescribed format. Review SECNAV M-1650.1 for required opening and closing sentences.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Attaching Unsigned Certificates</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Only signed certificates should be uploaded to the "certificate" field. Unsigned certificates delay OMPF upload.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Wrong Award Code Selected</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Selecting the incorrect award code causes routing errors and processing delays. Verify the correct code before submission.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Commander Not Granted Permissions After Assuming Command</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Failing to submit Assumption of Command letter prevents new commanders from approving awards, creating a backlog.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
