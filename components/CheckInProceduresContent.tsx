"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";
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

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "required-stops", label: "Required Stops" },
  { id: "tips", label: "Tips & Issues" },
  { id: "references", label: "References" },
];

const KEY_REQUIREMENTS: { element: string; requirement: string; url?: string }[] = [
  { element: "Reporting Uniform", requirement: "Service Alphas (verify with gaining command)" },
  { element: "Timeframe", requirement: "Complete within 10 working days" },
  { element: "Initial Location", requirement: "S-1/Admin or designated reception point" },
  { element: "Key Documents", requirement: "Original orders, military ID, medical/dental records" },
  { element: "After Hours", requirement: "Report to Officer of the Day (OOD)" },
  { element: "Authority", requirement: "MCO 1000.6, Unit SOPs", url: MCO_URLS.ACTS_MANUAL },
];

const ORDERS_DOCS = [
  "Original PCS orders (all copies and endorsements)",
  "All previous orders (boot camp, MOS school, previous duty stations)",
  "Military ID card (CAC)",
  "Dependent ID cards",
  "No-fee passport (if applicable)",
  "Driver's license",
];

const SERVICE_RECORDS_DOCS = [
  "Service Record Book (SRB) or digital copies",
  "Page 11 entries",
  "Training records and certificates",
  "Awards documentation",
  "Fitness reports (if officer) or proficiency/conduct marks documentation",
];

const MEDICAL_DOCS = [
  "Medical records (or verification of electronic transfer)",
  "Dental records (or Panograph)",
  "Immunization records",
  "Physical examination documentation",
  "Deployment health records (if applicable)",
];

const FINANCIAL_DOCS = [
  "Travel voucher receipts (airline, hotel, rental car)",
  "Fuel receipts (if POV travel)",
  "Temporary lodging receipts",
  "Pet quarantine receipts (OCONUS)",
  "DTS authorization printout",
  "Leave and Earnings Statement (LES)",
];

const PERSONAL_DOCS = [
  "Marriage certificate",
  "Birth certificates (for dependents)",
  "Divorce decree (if applicable)",
  "Custody documents (if applicable)",
  "Power of Attorney documents",
  "Will and estate documents",
  "Vehicle registration and insurance",
  "Pet vaccination records",
];

const TRAINING_CERTS = [
  "Cyber Awareness Certificate (current)",
  "PII Certificate",
  "Annual training completion records",
  "MOS-specific certifications",
  "PME completion certificates",
];

const CHECK_IN_TIMELINE = [
  { day: "Day 1", action: "Report to S-1, receive check-in sheet, begin required stops" },
  { day: "Days 1-3", action: "Complete administrative stops (S-1, S-3, S-6, Security)" },
  { day: "Days 3-5", action: "Complete medical, dental, TRICARE enrollment" },
  { day: "Days 5-7", action: "Complete housing, transportation, family support stops" },
  { day: "Days 7-10", action: "Complete unit-specific check-ins, return sheet to S-1" },
];

const ADMIN_STOPS = ["S-1 (Personnel)", "S-3 (Operations/Training)", "S-6 (Communications/IT)", "Security Manager", "Legal", "Safety"];
const MEDICAL_STOPS = ["Medical records", "Dental records", "TRICARE enrollment", "Medical screening (if required)"];
const SUPPORT_STOPS = ["Housing office", "Transportation (vehicle registration)", "Family Readiness", "EFMP (if enrolled)", "SGLI/VGLI verification"];
const UNIT_STOPS = ["Company/Battery/Squadron office", "Platoon/Section leader", "Immediate supervisor", "Supply (gear issue)"];

const REQUIRED_STOPS_DETAILS = [
  {
    title: "S-1 (Personnel/Admin)",
    tasks: [
      "Verify orders and reporting date",
      "Update contact information",
      "Verify dependent information in MCTFS",
      "Confirm BAH entitlement",
      "Receive check-in sheet",
      "Schedule welcome aboard brief",
    ],
  },
  {
    title: "S-6 (Communications)",
    prereq: "Check in with Security Manager first. Verify MCEN account status. Have current Cyber Awareness certificate ready.",
    tasks: [
      "Establish network account",
      "Receive computer access",
      "Set up official email",
      "Complete any required IT training",
    ],
  },
  {
    title: "Security Manager",
    tasks: [
      "Verify security clearance transfer",
      "Update access requirements",
      "Complete any required security briefings",
      "Confirm clearance status for billet",
    ],
  },
  {
    title: "Medical",
    tasks: [
      "Transfer or verify medical records",
      "Update emergency contact information",
      "Schedule any required screenings",
      "Verify immunization status",
      "Complete deployment health assessment (if returning)",
    ],
  },
  {
    title: "Dental",
    tasks: [
      "Transfer dental records",
      "Schedule dental examination (if required)",
      "Verify dental readiness classification",
    ],
  },
  {
    title: "TRICARE",
    tasks: [
      "Verify enrollment status",
      "Update Primary Care Manager (PCM)",
      "Enroll dependents (if needed)",
      "Obtain new PCM assignment",
    ],
  },
  {
    title: "Housing",
    tasks: [
      "Determine housing eligibility",
      "Apply for government quarters (if desired)",
      "Obtain BAH certification (if living off-base)",
      "Complete housing application",
      "Schedule housing brief",
    ],
  },
  {
    title: "Transportation/PMO",
    tasks: [
      "Register POV on base",
      "Obtain vehicle decal",
      "Verify driver's license status",
      "Complete motorcycle safety course (if applicable)",
    ],
  },
];

const COMMON_ISSUES = [
  {
    issue: "Orders Not in System",
    solutions: [
      "Provide original hard copy orders",
      "Contact losing command for verification",
      "S-1 can manually enter arrival",
      "Follow up to ensure orders are posted",
    ],
  },
  {
    issue: "Medical Records Not Transferred",
    solutions: [
      "Provide any hard copies you have",
      "Request records transfer from previous MTF",
      "Schedule records screening",
      "Some locations accept electronic verification",
    ],
  },
  {
    issue: "Housing Not Available",
    solutions: [
      "Request temporary lodging allowance",
      "Contact housing office for waiting list",
      "Explore off-base options",
      "Document all temporary lodging expenses",
    ],
  },
  {
    issue: "BAH Not Started",
    solutions: [
      "Verify dependent documentation is complete",
      "Check MCTFS for dependent entries",
      "Provide NAVMC 10922 if not on file",
      "Follow up with S-1 within 5 days",
    ],
  },
];

const SUCCESS_TIPS = [
  "Arrive during working hours. Avoid weekend or holiday arrivals if possible.",
  "Hand-carry everything. Do not ship critical documents with household goods.",
  "Make copies. Keep copies of all documents before submitting originals.",
  "Dress appropriately. Verify uniform requirement before reporting.",
  "Contact sponsor early. Reach out 2-4 weeks before arrival.",
  "Know the deadline. Complete all stops within 10 working days.",
  "Update certificates. Ensure Cyber Awareness and annual training are current.",
  "Track your sheet. Keep check-in sheet with you until complete.",
  "Ask questions. Use S-1 and sponsor for guidance.",
];

const SPONSOR_DUTIES = [
  "Contacting you before arrival",
  "Providing installation and unit information",
  "Arranging temporary lodging",
  "Meeting you upon arrival",
  "Guiding you through check-in process",
  "Introducing you to key personnel",
  "Answering questions about the area",
];

const QUICK_FACTS: { label: string; value: string; url?: string }[] = [
  { label: "Timeframe", value: "10 working days" },
  { label: "Uniform", value: "Service Alphas" },
  { label: "Start Point", value: "S-1 Admin" },
  { label: "Hours", value: "M-F, 0700-1600" },
  { label: "Authority", value: "MCO 1000.6", url: MCO_URLS.ACTS_MANUAL },
];

export function CheckInProceduresContent({ data }: Props) {
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
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Check-In Procedures Overview
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Check-in is the administrative process of reporting to your new duty station and completing required
                  actions to establish yourself in the unit. You must report with original orders, identification, and
                  supporting documents to receive your check-in sheet. Complete all required stops within the designated
                  timeframe to finalize your arrival and begin receiving proper entitlements.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key Requirements
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
                      {KEY_REQUIREMENTS.map((item) => (
                        <tr key={item.element} className="border-b border-zinc-100 dark:border-zinc-800">
                          <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.element}</td>
                          <td className="py-2 text-zinc-600 dark:text-zinc-400">
                            {item.url ? (
                              <><MCOLink mco="MCO 1000.6" url={item.url} />, Unit SOPs</>
                            ) : (
                              item.requirement
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
                  Sponsor Responsibilities
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Your sponsor assists with check-in by:
                </p>
                <ul className="mt-3 space-y-1">
                  {SPONSOR_DUTIES.map((duty) => (
                    <li key={duty} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-[var(--sa-red)]">•</span>
                      {duty}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>If no sponsor assigned:</strong> Contact S-1 for sponsor assignment, request installation
                  newcomer&apos;s guide, or use installation website for information.
                </p>
              </section>
            </>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Documents to Hand-Carry
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Ensure you have all required documents hand-carried (not shipped) when reporting to your new duty station.
                </p>
              </section>

              <div className="grid gap-4 md:grid-cols-2">
                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Orders & Identification</h3>
                  <ul className="mt-3 space-y-1.5">
                    {ORDERS_DOCS.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Service Records</h3>
                  <ul className="mt-3 space-y-1.5">
                    {SERVICE_RECORDS_DOCS.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Medical & Dental</h3>
                  <ul className="mt-3 space-y-1.5">
                    {MEDICAL_DOCS.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Financial & Travel</h3>
                  <ul className="mt-3 space-y-1.5">
                    {FINANCIAL_DOCS.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Personal Documents</h3>
                  <ul className="mt-3 space-y-1.5">
                    {PERSONAL_DOCS.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Training Certificates</h3>
                  <ul className="mt-3 space-y-1.5">
                    {TRAINING_CERTS.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important</h4>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                  Keep all original documents with you during travel. Do not pack them in checked luggage or ship
                  them with household goods. Make copies of everything before departing your previous duty station.
                </p>
              </section>
            </>
          )}

          {/* Process Tab */}
          {activeTab === "process" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Check-In Process
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Follow your check-in sheet and complete all required stops within the designated timeframe.
                </p>
              </section>

              <div className="grid gap-4 md:grid-cols-2">
                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-green-700 dark:text-green-400">During Working Hours</h3>
                  <ol className="mt-3 space-y-2">
                    {["Report to S-1/Admin office in prescribed uniform", "Present orders and military ID", "Receive check-in sheet and installation map", "Get briefed on required stops and deadlines"].map((step, i) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-amber-700 dark:text-amber-400">After Working Hours</h3>
                  <ol className="mt-3 space-y-2">
                    {["Report to Officer of the Day (OOD) or Staff Duty", "Present orders and military ID", "Ensure arrival is logged in duty logbook", "Have orders endorsed with date/time of arrival", "Report to S-1 next working day"].map((step, i) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </section>
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Check-In Timeline
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Day</th>
                        <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CHECK_IN_TIMELINE.map((item) => (
                        <tr key={item.day} className="border-b border-zinc-100 dark:border-zinc-800">
                          <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.day}</td>
                          <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Common Check-In Stops
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Administrative</h4>
                    <ul className="mt-2 space-y-1">
                      {ADMIN_STOPS.map((stop) => (
                        <li key={stop} className="text-sm text-zinc-600 dark:text-zinc-400">• {stop}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Medical/Dental</h4>
                    <ul className="mt-2 space-y-1">
                      {MEDICAL_STOPS.map((stop) => (
                        <li key={stop} className="text-sm text-zinc-600 dark:text-zinc-400">• {stop}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Support Services</h4>
                    <ul className="mt-2 space-y-1">
                      {SUPPORT_STOPS.map((stop) => (
                        <li key={stop} className="text-sm text-zinc-600 dark:text-zinc-400">• {stop}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Unit-Specific</h4>
                    <ul className="mt-2 space-y-1">
                      {UNIT_STOPS.map((stop) => (
                        <li key={stop} className="text-sm text-zinc-600 dark:text-zinc-400">• {stop}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Required Stops Tab */}
          {activeTab === "required-stops" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Required Stops Details
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Detailed information for each check-in stop on your sheet.
                </p>
              </section>

              <div className="space-y-4">
                {REQUIRED_STOPS_DETAILS.map((stop) => (
                  <section key={stop.title} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                    <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{stop.title}</h3>
                    {stop.prereq && (
                      <p className="mt-2 text-sm text-amber-700 dark:text-amber-400">
                        <strong>Before visiting:</strong> {stop.prereq}
                      </p>
                    )}
                    <ul className="mt-3 space-y-1">
                      {stop.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <span className="text-[var(--sa-red)]">✓</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Family Readiness
                </h3>
                <ul className="mt-3 space-y-1">
                  {["Register with unit Family Readiness Officer", "Update Family Care Plan (if required)", "Enroll in EFMP (if applicable)", "Receive family support information"].map((task) => (
                    <li key={task} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-[var(--sa-red)]">✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {/* Tips & Issues Tab */}
          {activeTab === "tips" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Tips for Smooth Check-In
                </h2>
                <ul className="mt-4 space-y-2">
                  {SUCCESS_TIPS.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Common Check-In Issues
                </h3>
                <div className="mt-4 space-y-4">
                  {COMMON_ISSUES.map((item) => (
                    <div key={item.issue} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                      <h4 className="font-medium text-red-700 dark:text-red-400">{item.issue}</h4>
                      <ul className="mt-2 space-y-1">
                        {item.solutions.map((solution) => (
                          <li key={solution} className="text-sm text-zinc-600 dark:text-zinc-400">• {solution}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Check-Out Connection</h4>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                  When you complete check-in at your new command, verify that your losing command check-out was
                  properly completed: ensure no outstanding obligations, verify final fitness report was submitted,
                  confirm all gear was turned in, and check that forwarding address is on file.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Installation-Specific Procedures
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Check-in procedures vary by installation. Verify specific requirements through gaining unit contact,
                  installation website, welcome aboard package, or your sponsor.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Common Variations:</h4>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Reporting location (S-1, Reception Center, Quarterdeck)</li>
                    <li>• Required uniform</li>
                    <li>• Check-in hours</li>
                    <li>• Specific briefings required</li>
                    <li>• Additional training requirements</li>
                  </ul>
                </div>
              </section>
            </>
          )}

          {/* References Tab */}
          {activeTab === "references" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  References & Resources
                </h2>
                <ul className="mt-4 space-y-2">
                  {data.references.map((ref) => (
                    <li key={ref.url}>
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

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key References
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>• <MCOLink mco="MCO 1000.6" url={MCO_URLS.ACTS_MANUAL} /> - Assignment, Classification, and Travel Systems Manual</li>
                  <li>• Unit Standing Operating Procedures (SOP)</li>
                  <li>• Installation Newcomer&apos;s Guide</li>
                  <li>• MCTFS PRIUM - Personnel Reporting Instructions</li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key Contacts
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Unit S-1</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Primary check-in point</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Installation Website</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Newcomer information and contacts</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Housing Office</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Quarters application and BAH questions</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">OOD/Staff Duty</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">After-hours reporting</p>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <QuickLinks references={data.references} />

          <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Quick Facts
            </h3>
            <dl className="mt-3 space-y-3 text-sm">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-zinc-500 dark:text-zinc-400">{fact.label}</dt>
                  <dd className="font-medium text-zinc-900 dark:text-zinc-100">
                    {fact.url ? (
                      <MCOLink mco={fact.value} url={fact.url} />
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-xl border-l-4 border-[var(--sa-red)] bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Don&apos;t Forget!</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Complete all check-in requirements within 10 working days. Hand-carry all documents - do not ship with HHG.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
