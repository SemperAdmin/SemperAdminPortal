"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Issuance Process" },
  { id: "ncic", label: "NCIC Registration" },
  { id: "special-situations", label: "Special Situations" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function MilitaryProtectiveOrdersContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Military Protective Orders (MPO)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A Military Protective Order is a written order issued by a military commander that orders a service member to avoid contact with specified persons. MPOs are command tools to protect victims, witnesses, and others from potential harm and are enforceable under the UCMJ.
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Admin Role:</strong> Administrative specialists prepare MPO documentation, coordinate NCIC registration, and maintain MPO files. Accurate documentation and timely registration protect both the victim and ensure command accountability.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MPO vs Civilian Protective Orders
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Aspect</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MPO</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Civilian Order</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Issuing Authority</td>
                  <td className="py-2 pr-4">Military Commander</td>
                  <td className="py-2">Civilian Court</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Enforcement</td>
                  <td className="py-2 pr-4">UCMJ (Article 90/92)</td>
                  <td className="py-2">State/Federal Law</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Duration</td>
                  <td className="py-2 pr-4">Until rescinded by command</td>
                  <td className="py-2">As ordered by court</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Geographic Scope</td>
                  <td className="py-2 pr-4">Applies worldwide</td>
                  <td className="py-2">May be limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    process: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MPO Issuance Process
          </h2>
          <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Commander determines MPO is necessary to protect victim or witness</li>
            <li>Admin drafts MPO using approved format (DD Form 2873 or command format)</li>
            <li>MPO specifies protected persons and prohibited conduct</li>
            <li>Commander signs the MPO</li>
            <li>Service member receives the MPO and signs acknowledgment</li>
            <li>Admin provides copy to protected person(s)</li>
            <li>MPO is registered in NCIC within 24 hours</li>
            <li>Copy retained in unit legal file</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Elements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Identification:</strong> Full name and identifying information of service member</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Protected Persons:</strong> Names and relationship of individuals protected</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Prohibited Conduct:</strong> Specific actions prohibited (contact, proximity, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Consequences:</strong> Warning that violation constitutes UCMJ offense</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Duration:</strong> Effective date and conditions for termination</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Signatures:</strong> Commander signature and service member acknowledgment</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    ncic: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NCIC Registration
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Federal law requires MPOs to be registered in the National Crime Information Center (NCIC) Protection Order File. This ensures civilian law enforcement can access MPO information during encounters with the subject.
          </p>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Requirement:</strong> MPOs must be registered in NCIC within 24 hours of issuance per DoDI 6400.06.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Registration Process
          </h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Complete DD Form 2873 (Military Protective Order) or equivalent</li>
            <li>Submit to installation Provost Marshal Office (PMO)</li>
            <li>PMO enters MPO into NCIC Protection Order File</li>
            <li>Obtain NCIC confirmation number for unit file</li>
            <li>Update NCIC when MPO modified or rescinded</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Information Required for NCIC
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Subject's full name, DOB, SSN, and physical description</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Protected person(s) information</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Order effective and expiration dates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Conditions/terms of the order</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Issuing command and point of contact</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    "special-situations": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Special Situations
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Subject PCSing</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When the subject of an MPO PCS's, the losing command notifies the gaining command. The new commander may issue a new MPO or continue the existing one. Update NCIC with new command contact information. Ensure protected person is notified of the transfer.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Both Parties Are Service Members</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When both parties are service members, coordinate between both commands. Each commander may issue MPOs against the member in their command. Ensure no-contact provisions apply equally. Both MPOs must be registered in NCIC.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MPO Violation</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                MPO violations are punishable under UCMJ Article 90 (willful disobedience) or Article 92 (failure to obey). Report violations immediately to the commander. Document the violation with witness statements and preserve any evidence.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Modification or Termination</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Only the issuing commander (or successor) can modify or terminate an MPO. Coordinate with protected persons before modifications. Update NCIC immediately when MPO terms change or order is terminated.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    troubleshooting: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems and Solutions
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Problem</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Solution</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">MPO not registered in NCIC</td>
                  <td className="py-2">Contact PMO immediately. Submit DD 2873 or command format with required information.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Subject claims unawareness of MPO</td>
                  <td className="py-2">Verify acknowledgment signature on file. If missing, re-serve MPO with proper documentation.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Protected person requests termination</td>
                  <td className="py-2">Inform commander. Termination decision rests with command, not protected person.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Civilian court issues conflicting order</td>
                  <td className="py-2">Both orders remain valid. Coordinate with SJA. Subject must comply with most restrictive provisions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
