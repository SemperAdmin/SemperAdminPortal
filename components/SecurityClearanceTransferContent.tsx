"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "investigations", label: "Investigations" },
  { id: "guidelines", label: "Guidelines" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Verification System", requirement: "Defense Information System for Security (DISS)" },
  { element: "Secret Reinvestigation", requirement: "Every 10 years" },
  { element: "Top Secret Reinvestigation", requirement: "Every 5 years" },
  { element: "Confidential Reinvestigation", requirement: "Every 15 years" },
  { element: "Non-Disclosure Agreement", requirement: "SF-312 (executed before access granted)" },
  { element: "Issuing Authority", requirement: "Department of Defense" },
  { element: "Authority", requirement: "DoD 5200.2-R, SECNAV M-5510.30" },
];

const CLEARANCE_LEVELS = [
  { level: "Confidential", access: "Lowest classification level", investigation: "NACLC" },
  { level: "Secret", access: "Middle classification level", investigation: "Tier 3 (NACLC)" },
  { level: "Top Secret", access: "Highest classification level", investigation: "Tier 5 (SSBI)" },
];

const ADDITIONAL_ACCESS = [
  {
    type: "Sensitive Compartmented Information (SCI)",
    items: [
      "Requires Top Secret clearance plus additional approval",
      "Access to intelligence sources and methods",
      "Separate adjudication process",
    ],
  },
  {
    type: "Special Access Programs (SAP)",
    items: [
      "Requires clearance plus specific read-on",
      "May require polygraph examination",
      "Program-specific access controls",
    ],
  },
];

const TRANSFER_STEPS = [
  {
    step: 1,
    title: "Notify Current Security Manager",
    description: "Before PCS",
    actions: [
      "Inform your current unit Security Manager of upcoming transfer",
      "Request security clearance verification letter (if needed)",
      "Confirm your status is current in DISS",
      "Ensure all required training is documented",
    ],
  },
  {
    step: 2,
    title: "Gaining Command Verification",
    description: "Your new unit's Security Manager",
    actions: [
      "Accesses DISS to verify your eligibility",
      "Confirms investigation date is within valid timeframe",
      "Verifies clearance level meets billet requirements",
      "Checks for any flags or issues on record",
    ],
  },
  {
    step: 3,
    title: "Reciprocity Determination",
    description: "If clearance is current",
    actions: [
      "No new investigation required",
      "No new SF-86 submission needed",
      "Access granted based on existing eligibility",
      "New SF-312 may be required at gaining command",
    ],
  },
  {
    step: 4,
    title: "Access Granted",
    description: "Upon verification",
    actions: [
      "Security Manager grants access to classified information",
      "SF-312 annotated in DISS (if new execution required)",
      "Indoctrination brief conducted (if required)",
      "Access to secure spaces and systems authorized",
    ],
  },
];

const NACLC_CHECKS = [
  "FBI fingerprint check",
  "National agency database checks",
  "Local law enforcement records",
  "Credit history review",
];

const SSBI_CHECKS = [
  "All NACLC checks",
  "Personal interviews (subject and references)",
  "Employment verification",
  "Education verification",
  "Neighborhood checks",
  "Foreign travel and contact investigation",
];

const REINVESTIGATION_PERIODS = [
  { level: "Confidential", period: "Every 15 years" },
  { level: "Secret", period: "Every 10 years" },
  { level: "Top Secret", period: "Every 5 years" },
];

const ADJUDICATIVE_GUIDELINES = [
  "Allegiance to the United States",
  "Foreign Influence",
  "Foreign Preference",
  "Sexual Behavior",
  "Personal Conduct",
  "Financial Considerations",
  "Alcohol Consumption",
  "Drug Involvement",
  "Psychological Conditions",
  "Criminal Conduct",
  "Handling Protected Information",
  "Outside Activities",
  "Use of Information Technology",
];

const DENIAL_FACTORS = [
  "Financial irresponsibility (excessive debt, bankruptcy, failure to pay taxes)",
  "Criminal conduct",
  "Drug use or involvement",
  "Alcohol abuse",
  "Foreign influence or preference",
  "Dishonesty during investigation",
  "Security violations",
  "Mental health conditions affecting judgment (case-by-case)",
];

const MITIGATION_FACTORS = [
  "How recent the conduct occurred",
  "Circumstances surrounding the conduct",
  "Evidence of rehabilitation",
  "Whole-person factors",
];

const BEFORE_DEPARTING = [
  "Verify clearance status with Security Manager",
  "Ensure all security training is current",
  "Report any changes in personal situation (marriage, foreign contacts, financial issues)",
  "Complete any required debriefs",
];

const UPON_ARRIVAL = [
  "Check in with Security Manager as part of check-in process",
  "Execute new SF-312 if required",
  "Complete command indoctrination brief",
  "Verify access is properly established in DISS",
];

const ONGOING_RESPONSIBILITIES = [
  "Report foreign travel (as required by command)",
  "Report foreign contacts",
  "Report changes in personal status",
  "Report any security incidents or concerns",
  "Complete annual security training",
];

const INFO_TO_GATHER = [
  "Complete names, addresses, phone numbers for references",
  "Dates and locations of residences (10 years)",
  "Employment history (10 years)",
  "Education information",
  "Foreign travel details",
  "Relative information (names, DOB, citizenship)",
];

const SPECIAL_SITUATIONS = [
  {
    situation: "Break in Service",
    details: "If break exceeds 2 years, clearance eligibility may have lapsed. New investigation may be required. Contact gaining command Security Manager early.",
  },
  {
    situation: "Special Access Programs (SAPs)",
    details: "May require additional background checks, polygraph examination, specific program indoctrination, and separate access approval process.",
  },
  {
    situation: "Spouse or Cohabitant Checks",
    details: "For Top Secret clearances, national agency checks conducted on spouse/cohabitant. Additional investigation if spouse/cohabitant is foreign national.",
  },
];

export function SecurityClearanceTransferContent({ data }: Props) {
  const content = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            A personnel security clearance is an administrative determination that you are eligible for access
            to classified information. When you PCS to a new command, your existing clearance transfers through
            the Defense Information System for Security (DISS). Your gaining command&apos;s Security Manager verifies
            your eligibility and ensures it meets the new billet requirements. Reciprocity between federal agencies
            allows clearances to transfer without new investigations if current and within valid timeframes.
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
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((item) => (
                  <tr key={item.element} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.element}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Security Clearance Levels
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Level</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Access Authorized</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Investigation Type</th>
                </tr>
              </thead>
              <tbody>
                {CLEARANCE_LEVELS.map((item) => (
                  <tr key={item.level} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.level}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.access}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.investigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          {ADDITIONAL_ACCESS.map((access) => (
            <section key={access.type} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {access.type}
              </h4>
              <ul className="mt-3 space-y-1">
                {access.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important Note</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            &quot;For Official Use Only&quot; (FOUO) is not a security classification. It protects Privacy Act information
            and other sensitive data but does not require a security clearance.
          </p>
        </section>
      </>
    ),

    process: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Clearance Transfer Process
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Follow these steps to ensure your security clearance transfers smoothly to your new command.
          </p>
        </section>

        <div className="space-y-4">
          {TRANSFER_STEPS.map((step) => (
            <section
              key={step.step}
              className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-lg font-bold text-white">
                  {step.step}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step.description}</p>
                  <ul className="mt-3 space-y-1">
                    {step.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-[var(--sa-red)] mt-0.5">✓</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SF-312 Non-Disclosure Agreement
          </h3>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            You must execute an SF-312 (Classified Information Non-Disclosure Agreement) prior to being granted
            access to classified information.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Military Personnel</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Commandant of the Marine Corps<br />
                Headquarters U.S. Marine Corps (MMSB-20)<br />
                2008 Elliot Road<br />
                Quantico, VA 22134-5030
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Civilian Personnel</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Office of Civilian Human Resources<br />
                San Diego Operations Center<br />
                PO Box 452015<br />
                San Diego, CA 92145-2015
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligibility Requirements
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">Citizenship Requirement</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Only U.S. citizens are eligible for personnel security clearances. Under rare circumstances,
                non-U.S. citizens may receive a Limited Access Authorization (LAA) per the NISPOM.
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <h4 className="font-medium text-purple-800 dark:text-purple-200">Need-to-Know Requirement</h4>
              <p className="mt-1 text-sm text-purple-700 dark:text-purple-300">
                Having a clearance does not authorize access to all classified information at that level.
                You must have an appropriate level of clearance AND a bona fide need-to-know for specific information.
              </p>
            </div>
          </div>
        </section>
      </>
    ),

    investigations: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Investigation Types
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Different clearance levels require different types of background investigations.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              NACLC (Tier 3)
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              National Agency Check with Local Agency Checks and Credit
            </p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
              Used for: Confidential and Secret clearances
            </p>
            <h4 className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">Checks Include:</h4>
            <ul className="mt-2 space-y-1">
              {NACLC_CHECKS.map((check) => (
                <li key={check} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-[var(--sa-red)] mt-0.5">•</span>
                  {check}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              SSBI (Tier 5)
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Single Scope Background Investigation
            </p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
              Used for: Top Secret and SCI access
            </p>
            <h4 className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">Checks Include:</h4>
            <ul className="mt-2 space-y-1">
              {SSBI_CHECKS.map((check) => (
                <li key={check} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-[var(--sa-red)] mt-0.5">•</span>
                  {check}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reinvestigation Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Clearance Level</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Reinvestigation Period</th>
                </tr>
              </thead>
              <tbody>
                {REINVESTIGATION_PERIODS.map((item) => (
                  <tr key={item.level} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.level}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Continuous Evaluation</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            DoD has implemented Continuous Evaluation (CE) to supplement periodic reinvestigations. This includes
            automated record checks between investigations, monitoring criminal records, financial issues, and
            foreign travel. May trigger interim actions if concerns are identified.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Information to Have Ready
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Gather this information in advance if a new investigation is required:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {INFO_TO_GATHER.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    guidelines: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Adjudicative Guidelines
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Clearance determinations are based on evaluation of 13 adjudicative guidelines. Adjudication examines
            a sufficient period of your life to determine if you are an acceptable security risk using the
            whole-person concept.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            13 Adjudicative Guidelines
          </h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {ADJUDICATIVE_GUIDELINES.map((guideline, index) => (
              <div key={guideline} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-white">
                  {index + 1}
                </span>
                {guideline}
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
              Common Reasons for Denial or Revocation
            </h3>
            <ul className="mt-4 space-y-2">
              {DENIAL_FACTORS.map((factor) => (
                <li key={factor} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-red-500 mt-0.5">✕</span>
                  {factor}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
              Mitigation Factors Considered
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Issues do not automatically result in denial. Adjudicators consider:
            </p>
            <ul className="mt-4 space-y-2">
              {MITIGATION_FACTORS.map((factor) => (
                <li key={factor} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {factor}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Clearance Denial or Revocation
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Military and Civilian Personnel</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• Process prescribed by Executive Order 12968</li>
                <li>• Opportunity to respond to concerns</li>
                <li>• Appeal through chain of command</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Contractor Personnel</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• Process per Executive Order 10865</li>
                <li>• May request hearing before DOHA Administrative Judge</li>
                <li>• Appeal to DOHA Appeal Board if denied</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Reapplication After Denial</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            After final denial or revocation, you cannot reapply for one year from the final decision date.
            You must demonstrate circumstances have been rectified. The central adjudication facility decides
            whether to accept reapplication.
          </p>
        </section>
      </>
    ),

    responsibilities: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Responsibilities During Transfer
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Maintain your security clearance during PCS by following these responsibilities.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-3">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Before Departing
            </h3>
            <ul className="mt-4 space-y-2">
              {BEFORE_DEPARTING.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Upon Arrival
            </h3>
            <ul className="mt-4 space-y-2">
              {UPON_ARRIVAL.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Ongoing Responsibilities
            </h3>
            <ul className="mt-4 space-y-2">
              {ONGOING_RESPONSIBILITIES.map((item) => (
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
            Special Situations
          </h3>
          <div className="mt-4 space-y-4">
            {SPECIAL_SITUATIONS.map((situation) => (
              <div key={situation.situation} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{situation.situation}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{situation.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Expediting the Process</h4>
          <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
            <li>• Submit complete security application packages</li>
            <li>• Ensure fingerprints are properly rolled and legible</li>
            <li>• Provide accurate and thorough information on SF-86</li>
            <li>• Have stateside references who can verify foreign activities</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resources & Contacts
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-zinc-700 dark:text-zinc-300">
              <span className="font-medium">Unit Security Manager:</span> Primary contact for clearance questions
            </li>
            <li>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">DCSA:</span>{" "}
              <a
                href="https://www.dcsa.mil/Personnel-Vetting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--sa-red)] underline hover:no-underline"
              >
                https://www.dcsa.mil/Personnel-Vetting/
              </a>
            </li>
            <li className="text-zinc-700 dark:text-zinc-300">
              <span className="font-medium">SF-86 Preview:</span> Available at OPM website for information gathering
            </li>
            <li className="text-zinc-700 dark:text-zinc-300">
              <span className="font-medium">HQMC (MMSB-20):</span> For military SF-312 submissions
            </li>
            <li className="text-zinc-700 dark:text-zinc-300">
              <span className="font-medium">e-QIP:</span> Electronic questionnaire system for SF-86 submission
            </li>
          </ul>
        </section>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
