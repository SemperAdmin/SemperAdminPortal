"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCOLink, KeyPoint } from "./ui/MCOLink";
import { MCO_URLS } from "@/data/references";


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

const KEY_POINTS: KeyPoint[] = [
  { label: "Definition", value: "Voluntary resignation from commissioned officer status" },
  { label: "Authority", value: "MCO 1900.16, 10 U.S.C. §§ 1181-1186", url: MCO_URLS.MARCORSEPMAN_PDF },
  { label: "Approval Authority", value: "Secretary of the Navy via CMC delegation" },
  { label: "MSO Requirement", value: "Must fulfill 8-year Military Service Obligation" },
  { label: "Typical Timeline", value: "Submit 6-12 months before desired separation date" },
];

const SERVICE_OBLIGATIONS = [
  {
    source: "Basic Commissioning",
    obligation: "3 years active duty minimum",
    details: "All newly commissioned officers owe 3 years active service"
  },
  {
    source: "The Basic School (TBS)",
    obligation: "3.5 years from TBS graduation",
    details: "Measured from completion of initial officer training"
  },
  {
    source: "MOS School",
    obligation: "Varies by school length",
    details: "Additional time for MOS producing schools (6+ months = 2:1 payback)"
  },
  {
    source: "Flight Training",
    obligation: "8 years from winging",
    details: "Naval aviators incur 8-year commitment from designation as aviator"
  },
  {
    source: "Graduate Education",
    obligation: "2:1 or 3:1 payback",
    details: "Service obligation for funded masters/PhD programs"
  },
  {
    source: "Post-9/11 GI Bill Transfer",
    obligation: "4 years from approval",
    details: "Must serve 4 additional years if transfer approved"
  },
];

const ELIGIBILITY_REQUIREMENTS = [
  "Fulfill all active duty service obligations (MSO, school, etc.)",
  "No pending investigations or disciplinary actions",
  "Not under court-martial charges or conviction",
  "Favorable fitness reports and duty performance",
  "Command endorsement (favorable recommendation)",
  "No outstanding financial obligations to government",
  "Not in receipt of critical skills retention bonus (CSRB)",
];

const RESIGNATION_LETTER_COMPONENTS = [
  "Current rank, name, designator, and EDIPI",
  "Current unit and duty assignment",
  "Date of commission and source of commission",
  "Summary of service obligations and fulfillment dates",
  "Requested resignation date and reason for resignation",
  "Plans after resignation (employment, education, etc.)",
  "Statement acknowledging loss of benefits and status",
  "Request for honorable characterization of service",
  "Contact information for correspondence",
];

const RESIGNATION_PROCESS_STEPS = [
  "Calculate service obligations and verify eligibility",
  "Discuss intentions with commanding officer",
  "Draft resignation letter per format requirements",
  "Submit letter via chain of command with endorsements",
  "Command conducts service record review",
  "CO provides detailed endorsement and recommendation",
  "Package forwarded through higher headquarters to HQMC",
  "MMOA reviews and makes recommendation to CMC",
  "CMC/SECNAV approval or disapproval (can take 3-6 months)",
  "If approved, resignation orders issued",
  "Complete TAP and transition requirements",
  "Execute standard separation clearing process",
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "service-obligations", label: "Service Obligations" },
  { id: "process", label: "Process" },
  { id: "references", label: "References", type: "references" as const },
];

export function ResignationOfficersContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Officer Resignation
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Commissioned officers may voluntarily resign from active duty after fulfilling all service
            obligations. The resignation process is formal and requires approval through the chain of
            command up to the Secretary of the Navy. Officers must submit a formal resignation letter
            and demonstrate completion of all obligated service before resignation can be approved.
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
                      {point.url ? <MCOLink mco={point.value} url={point.url} /> : point.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resignation vs. Other Separations
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Voluntary Resignation</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Officer-initiated separation after completing obligations. Requires formal letter and approval.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Release from Active Duty</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Separation at end of active duty service obligation (ADSO). Normal EAS for officers.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Involuntary Separation</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Non-selection for promotion, substandard performance, or misconduct-related separation.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Know Your Obligations</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Before considering resignation, work with your monitor and legal officer to calculate all
            service obligations. Officers with flight training, graduate education, or bonus agreements
            may have obligations extending 8+ years from commission. Resignation before fulfilling
            obligations is generally not approved.
          </p>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">8-Year MSO Requirement</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            All officers incur an 8-year Military Service Obligation (MSO) from their commissioning date.
            This can be fulfilled through active duty, reserve service, or Individual Ready Reserve (IRR)
            status. Upon resignation, officers may be required to complete remaining MSO time in the reserves.
          </p>
        </section>
      </div>
    ),

    eligibility: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligibility Requirements
          </h3>
          <ul className="mt-4 space-y-2">
            {ELIGIBILITY_REQUIREMENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Command Endorsement Factors
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your commanding officer&apos;s endorsement is critical to resignation approval. Commands consider:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Performance Factors</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Recent fitness report grades</li>
                <li>• Duty performance and achievements</li>
                <li>• Leadership and professionalism</li>
                <li>• Awards and recognition</li>
                <li>• Completion of assigned duties</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Administrative Factors</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Fulfillment of service obligations</li>
                <li>• No pending investigations</li>
                <li>• No adverse disciplinary actions</li>
                <li>• Financial responsibility</li>
                <li>• Reason for resignation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Disqualifying Factors
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The following factors will typically result in resignation denial:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Unfulfilled service obligations from training, education, or bonuses",
              "Pending or ongoing investigation (criminal or administrative)",
              "Court-martial conviction or pending charges",
              "Adverse fitness reports or documented performance issues",
              "Outstanding financial debts to the government",
              "Critical manning shortage in officer&apos;s MOS/designator",
              "Recent selection for command or key billet assignment",
              "Attempt to avoid deployment or difficult assignment",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 mt-0.5">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Timing Matters</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Submit resignation requests 6-12 months before desired separation date. Processing takes
            3-6 months minimum, and late requests may be denied due to insufficient time for proper
            transition and replacement. Early submission demonstrates professionalism and allows command
            to plan for your departure.
          </p>
        </section>
      </div>
    ),

    "service-obligations": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Service Obligations Overview
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Service obligations are additional time you owe the Marine Corps beyond your initial commitment,
            typically incurred through specialized training, education, or financial incentives. All obligations
            must be fulfilled before resignation can be approved.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Source</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Obligation</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Details</th>
                </tr>
              </thead>
              <tbody>
                {SERVICE_OBLIGATIONS.map((item) => (
                  <tr key={item.source} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.source}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.obligation}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Calculating Your Service Obligation End Date
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your total active duty service obligation (ADSO) is the latest of all individual obligations.
            Follow these steps to calculate:
          </p>
          <ol className="mt-4 space-y-2">
            {[
              "Identify your commissioning source and date",
              "List all obligating events (TBS, MOS school, flight training, etc.)",
              "Calculate end date for each obligation from its start date",
              "Identify the LATEST end date - this is your earliest resignation date",
              "Add 8-12 months for processing time to determine when to submit",
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
            Special Cases
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Naval Aviators</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Aviators incur an 8-year obligation from date of designation (winging). This is one of the
                longest service obligations. Additionally, aviators who received aviation continuation pay
                (AvB) incur additional obligated service based on the bonus agreement.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Graduate Education</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Officers who attend funded graduate programs (ECP, MECEP, postgraduate school) typically
                incur 2:1 or 3:1 payback. A 2-year master&apos;s program creates a 4-year obligation starting
                from program completion.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Critical Skills Retention Bonus</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Officers who accept CSRB cannot resign during the bonus commitment period. The obligation
                must be fulfilled or the bonus repaid (with potential interest/penalties) before resignation
                can be approved.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verifying Your Obligations
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            To verify your service obligations:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Review your Officer Qualification Record (OQR)",
              "Check Page 2 (Enlisted Record) for obligating events",
              "Consult with your monitor at MMOA for official calculation",
              "Review any bonus or special pay agreements",
              "Check MOL for recorded service agreements",
              "Consult with legal (SJA) if obligations are unclear",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Contact Your Monitor</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Before submitting a resignation, contact your monitor at Manpower Management Officer
            Assignments (MMOA) to obtain an official calculation of your service obligations. They can
            provide a definitive answer on your earliest possible resignation date.
          </p>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resignation Process
          </h3>
          <ol className="mt-4 space-y-2">
            {RESIGNATION_PROCESS_STEPS.map((step, index) => (
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
            Resignation Letter Components
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your resignation letter must be formal, professional, and complete. Include:
          </p>
          <ul className="mt-4 space-y-2">
            {RESIGNATION_LETTER_COMPONENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Letter Format and Routing
          </h3>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Proper Format:</h4>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Use official letter format (not email)</li>
              <li>• Address to Commandant of the Marine Corps (via chain of command)</li>
              <li>• Use proper military letter formatting (5 paragraphs minimum)</li>
              <li>• Include complete service summary</li>
              <li>• Professional tone throughout</li>
              <li>• Sign in original (not digital signature for initial submission)</li>
            </ul>
          </div>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Routing Path:</h4>
            <ol className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>1. Company/Battery Commander (endorsement)</li>
              <li>2. Battalion/Squadron Commander (endorsement)</li>
              <li>3. Regimental/Group Commander (endorsement if required)</li>
              <li>4. General Officer in chain (endorsement)</li>
              <li>5. MMOA (review and recommendation)</li>
              <li>6. CMC/SECNAV (final approval)</li>
            </ol>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            After Submission
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">While Pending</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Continue performing all duties professionally</li>
                <li>• Maintain fitness and standards</li>
                <li>• Do not make commitments based on approval</li>
                <li>• Respond to any requests for information</li>
                <li>• Track package status through chain</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">If Approved</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Receive resignation orders</li>
                <li>• Complete TAP within required timeline</li>
                <li>• Execute standard officer separation process</li>
                <li>• Complete clearing checklist</li>
                <li>• Obtain DD-214 and final documents</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Reasons for Denial
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Unfulfilled service obligations not properly calculated",
              "Unfavorable command endorsement due to performance",
              "Pending or recent disciplinary action",
              "Resignation appears to be avoiding deployment or difficult duty",
              "Critical manning needs in officer&apos;s designator/MOS",
              "Insufficient time to process before requested date",
              "Outstanding financial obligations or debts",
              "Recent acceptance of bonus or special pay requiring service",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 mt-0.5">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Denied
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Review the denial letter for specific reasons",
              "Consult with legal (SJA) about your options",
              "Determine if issues can be corrected and letter resubmitted",
              "Consider whether to wait until end of ADSO for normal release",
              "If obligations are in dispute, request review by MMOA",
              "Continue serving professionally until normal separation date",
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
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Consult Legal Assistance</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Before submitting your resignation, consult with your installation&apos;s legal assistance office.
            They can review your letter for proper format, help calculate service obligations, and ensure
            you&apos;re meeting all requirements. This increases your chances of approval.
          </p>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Professional Approach</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Maintain the highest standards of performance and professionalism throughout the resignation
            process. Your conduct during this period reflects on your entire service and affects the
            command&apos;s endorsement. A strong endorsement significantly improves approval chances.
          </p>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
