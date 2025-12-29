"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "considerations", label: "Considerations" },
  { id: "references", label: "References" },
];

const GENERAL_STEPS = [
  { step: "Gather Documents", desc: "Hand-carry all original orders (including boot camp, MOS school), ID, Medical/Dental records, travel receipts (airline, hotel, pet quarantine), vehicle docs (if applicable), and vital records (marriage/birth certificates)." },
  { step: "Report In", desc: "During working hours, report to your unit's designated check-in location (e.g., S-1, Quarterdeck, Reception Center) in the appropriate uniform." },
  { step: "Get Your Sheet", desc: "Receive a check-in sheet or list of required stops from the admin clerk." },
  { step: "Complete Stops", desc: "Visit required locations (Medical, Dental, TRICARE, Housing, etc.) to get stamps/signatures." },
  { step: "Return Sheet", desc: "Return the completed sheet to the S-1 within about 10 business days." },
];

const DOCUMENTS_TO_BRING = [
  "Original Orders (all levels - boot camp, MOS school, PCS)",
  "Military ID Card",
  "Medical Records",
  "Dental Records",
  "Travel Receipts (airline, hotel, pet quarantine)",
  "Vehicle Registration/Insurance (if applicable)",
  "Pet Records (if applicable)",
  "Marriage Certificate",
  "Birth Certificates (dependents)",
  "Wills and Power of Attorney",
];

const ITEMS_TO_HAVE = [
  "Cash/card for initial expenses",
  "Packed seabag",
  "Hygiene gear",
  "Uniforms (Service 'A' for entry-level)",
  "Fitness attire",
  "Locks for gear",
];

const CHECK_IN_STOPS = [
  { location: "S-1 (Admin)", purpose: "Receive check-in sheet, submit orders, update records" },
  { location: "Medical", purpose: "Transfer medical records, schedule appointments" },
  { location: "Dental", purpose: "Transfer dental records, update status" },
  { location: "TRICARE", purpose: "Verify/update healthcare enrollment" },
  { location: "Security Manager", purpose: "Verify clearance transfer, MCEN account setup" },
  { location: "S-6 (Communications)", purpose: "Get network accounts, email setup" },
  { location: "Housing Office", purpose: "If applicable, verify housing assignment" },
  { location: "IPAC/PAC", purpose: "Personnel administration processing" },
];

const CONSIDERATIONS = [
  { title: "Sponsor Coordination", desc: "Coordinate with your assigned sponsor for guidance on base-specific procedures and housing." },
  { title: "Installation Specifics", desc: "Procedures vary by base; check the installation's website for details before arrival." },
  { title: "Working Hours", desc: "Check-in usually happens Monday-Friday, 0700-1600." },
  { title: "Proper Reporting", desc: "Know how to report in (knock, attention, greeting) per Marine Corps customs and courtesies." },
  { title: "Time Limit", desc: "Complete all check-in requirements within approximately 10 business days." },
];

const QUICK_FACTS = [
  { label: "Typical Timeline", value: "10 business days" },
  { label: "Dress Code", value: "Service Alphas" },
  { label: "Primary Office", value: "S-1 Admin" },
  { label: "Hours", value: "M-F, 0700-1600" },
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
                  USMC check-in involves reporting to your new unit (often the S-1 or Duty) with your Original Orders,
                  ID, medical/dental records, travel receipts, and other important documents to get your check-in sheet,
                  then completing required admin, medical, and potentially housing/vehicle tasks, usually within 10 days,
                  using your sponsor&apos;s help and specific installation procedures.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  General Check-In Steps
                </h3>
                <div className="mt-4 space-y-4">
                  {GENERAL_STEPS.map((item, index) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.step}</p>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Pro Tip</h4>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                  Contact your sponsor before arriving at your new duty station. They can provide guidance on
                  base-specific procedures, temporary lodging, and help you prepare for a smooth check-in process.
                </p>
              </section>
            </>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Required Documents
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Ensure you have all required documents hand-carried (not shipped) when reporting to your new duty station.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Documents Checklist
                </h3>
                <ul className="mt-4 space-y-2">
                  {DOCUMENTS_TO_BRING.map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Other Items to Have Ready
                </h3>
                <ul className="mt-4 space-y-2">
                  {ITEMS_TO_HAVE.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-[var(--sa-red)]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

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

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Common Check-In Stops
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Location</th>
                        <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CHECK_IN_STOPS.map((stop) => (
                        <tr key={stop.location} className="border-b border-zinc-100 dark:border-zinc-800">
                          <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{stop.location}</td>
                          <td className="py-2 text-zinc-600 dark:text-zinc-400">{stop.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Check-In Sequence (Example: Henderson Hall)
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">1. Initial Check-In</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      Begin at the S-1 office. Receive check-in sheet and map. Personnel must check in wearing Service Alphas.
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">2. Security Manager</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      Before proceeding to S-6, check in with the Security Manager to avoid delays and confirm your MCEN account is properly set up.
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">3. Required Certificates</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      Ensure you have an up-to-date Cyber Awareness Certificate along with the PII Certificate, CyberM0000 Certificate, or Cyber Intel.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                <h4 className="font-semibold text-red-800 dark:text-red-200">After Hours Check-In</h4>
                <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                  If checking in after hours, report to the Officer of the Day (OOD). Ensure your check-in is
                  annotated in the logbook and on your orders. You will complete full check-in during normal working hours.
                </p>
              </section>
            </>
          )}

          {/* Considerations Tab */}
          {activeTab === "considerations" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Important Considerations
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Keep these important factors in mind during your check-in process.
                </p>
              </section>

              <div className="grid gap-4 md:grid-cols-2">
                {CONSIDERATIONS.map((item) => (
                  <section key={item.title} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                    <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                  </section>
                ))}
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Common Check-In Locations
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Procedures vary by base. Check your specific installation&apos;s website for details:
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["MCB Hawaii", "MCB Quantico", "MCB Camp Lejeune", "MCB Camp Pendleton", "MCAS Miramar", "MCRD San Diego", "MCRD Parris Island"].map((base) => (
                    <span key={base} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {base}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
                <h4 className="font-semibold text-green-800 dark:text-green-200">Success Tips</h4>
                <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                  <li>• Arrive early to check-in locations to avoid long lines</li>
                  <li>• Keep all documents organized in a folder or binder</li>
                  <li>• Take photos of your completed check-in sheet as backup</li>
                  <li>• Ask questions if unsure about any requirement</li>
                </ul>
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
                  Key Contacts
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">S-1 Admin Office</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Primary check-in point</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Unit Sponsor</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Pre-arrival coordination</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Officer of the Day (OOD)</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">After-hours reporting</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">IPAC/PAC</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Personnel admin support</p>
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
                  <dd className="font-medium text-zinc-900 dark:text-zinc-100">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-xl border-l-4 border-[var(--sa-red)] bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Don&apos;t Forget!</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Complete all check-in requirements within 10 business days. Contact your sponsor before arrival
              for base-specific guidance.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
