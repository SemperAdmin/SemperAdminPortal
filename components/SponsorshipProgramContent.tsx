"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "process", label: "Process" },
  { id: "training", label: "Training" },
  { id: "resources", label: "Resources" },
  { id: "references", label: "References" },
];

const KEY_REQUIREMENTS = [
  { element: "Program", requirement: "Marine Corps Sponsorship Program (MCSP)" },
  { element: "Mandatory For", requirement: "E-1 through E-9, WO-1 through CWO-5, O-1 through O-6 (CONUS and OCONUS)" },
  { element: "Sponsor Assignment", requirement: "Within 60 days before transfer" },
  { element: "Welcome Letter", requirement: "Within 10 working days of sponsor assignment" },
  { element: "Request Form", requirement: "NAVMC 11799 (Sponsorship Request Form)" },
  { element: "Authority", requirement: "MCO 1320.11H" },
];

const SPONSOR_REQUIRED_DUTIES = [
  "Complete Sponsorship Training prior to commencing duties",
  "Provide training certificate to S-3 for MCTIMS documentation",
  "Contact inbound Marine via Welcome Aboard Letter within 10 working days of assignment",
  "Follow up via phone or email to ensure Marine received Command Welcome Aboard Letter",
  "Identify the Marine's specific needs",
];

const SPONSOR_ADDITIONAL_DUTIES = [
  "Greet inbound Marine upon arrival",
  "Assist in arranging transportation as needed",
  "Introduce Marine to key personnel at command",
  "Offer driving tour of key base and community locations",
  "Provide information and assistance for vehicle registration",
  "Provide information about local communities and housing market",
  "Share Marine and Family Program resources",
  "Provide IR&R office contact information for Welcome Aboard workshop registration",
  "Provide forwarding mail information and unit mailing address",
];

const SC_TRAINING_DUTIES = [
  "Complete Sponsorship Coordinator Training within 60 days of appointment",
  "Training available through IR&R Program and MarineNet",
  "Maintain training certificate on file",
];

const SC_PROGRAM_DUTIES = [
  "Provide updated contact information to IR&R Manager",
  "Coordinate with IR&R Manager for Sponsorship Training schedules",
  "Ensure sponsors complete training before performing duties",
  "Document training in MCTIMS using training event code \"US\"",
];

const SC_ASSIGNMENT_DUTIES = [
  "Upon receipt of NAVMC 11799, recommend appropriate sponsor",
  "Prepare Sponsorship Assignment Letter for Commanding Officer signature",
  "Ensure sponsor sends Welcome Aboard letter within 10 working days",
  "Maintain sponsor assignment rosters for tracking",
];

const SC_TURNOVER_ITEMS = [
  "Copy of MCO 1320.11H",
  "Sponsorship metrics form",
  "Master copies of NAVMC 11799 and NAVMC 11791",
  "Functional Area Checklist",
  "Links to MarineNet training",
  "IR&R Manager contact information",
];

const COMMAND_WELCOME_LETTER = [
  "Welcome message",
  "Unit mission and accomplishments",
  "Installation and MCCS website links",
  "Commanding officer contact information",
  "Assigned sponsor name and contact information",
  "Unit DRC/URC contact information",
];

const SPONSOR_WELCOME_LETTER = [
  "Brief unit mission and activities summary",
  "Sponsor contact information",
  "Reference to command welcome package",
  "Offer of assistance",
  "DRC/URC contact information",
  "IR&R office and resource links",
];

const OCONUS_ADDITIONAL = [
  "Area clearance and passport requirements",
  "Overseas Suitability Screening (OSS) requirements",
  "Medical and dental screening requirements",
  "Housing information and policies",
  "Pet importation requirements and restrictions",
  "Uniform requirements",
  "Financial preparation guidance",
  "Port call information card",
];

const RESERVE_PACKAGE_ITEMS = [
  "Personal welcome letter from unit commander",
  "Chain of command and points of contact",
  "Reserve command structure",
  "Command history and mission statement",
  "Reserve pay scale",
  "General Reserve information and benefits",
  "Reserve Referral Credit Program",
  "Reserve Career Options",
  "Annual Training Plan",
  "Quarterly Training Bulletin",
  "Mobilization Letter of Intent",
  "Family Support Activities",
];

const INBOUND_TIPS = [
  "Request a sponsor early. Submit NAVMC 11799 as soon as you receive orders.",
  "Communicate your needs. Let your sponsor know about family situation, housing preferences, and concerns.",
  "Use your sponsor. They are assigned to help you. Ask questions.",
  "Attend PCS workshop. Required 60-90 days before transfer.",
  "Register for Welcome Aboard. Contact IR&R office upon arrival.",
  "Complete the questionnaire. Your feedback improves the program.",
];

const SPONSOR_TIPS = [
  "Complete training first. Do not contact inbound Marine until trained.",
  "Send welcome letter promptly. Within 10 working days of assignment.",
  "Follow up. Phone or email to confirm letter received.",
  "Be available. Provide multiple contact methods.",
  "Know your resources. Familiarize yourself with IR&R, housing, and family services.",
  "Track expenses. You are authorized reimbursement for official duties.",
];

const ONLINE_RESOURCES = [
  { name: "MilitaryINSTALLATIONS", url: "https://installations.militaryonesource.mil", desc: "Installation information worldwide, base services and facilities, local area information" },
  { name: "Plan My Move", url: "https://planmymove.militaryonesource.mil", desc: "Customized moving checklists, timeline management, PCS planning tools" },
  { name: "MilLife Learning", url: "https://millifelearning.militaryonesource.mil", desc: "e-Sponsorship training, relocation resources, family support training" },
];

const IR_R_SERVICES = [
  "Sponsorship Training for sponsors",
  "Sponsorship Coordinator Training for SCs",
  "PCS workshops for transferring Marines",
  "Welcome Aboard workshops for new arrivals",
  "CONUS and OCONUS destination information",
  "Base and community information worldwide",
  "Lending Locker services (where available)",
  "Connection to community resources",
];

const QUICK_FACTS = [
  { label: "Authority", value: "MCO 1320.11H" },
  { label: "Form", value: "NAVMC 11799" },
  { label: "Assignment", value: "60 days before PCS" },
  { label: "Welcome Letter", value: "10 working days" },
  { label: "Training Code", value: "US (MCTIMS)" },
];

export function SponsorshipProgramContent({ data }: Props) {
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
                  Sponsorship Program Overview
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The Marine Corps Sponsorship Program (MCSP) is a mandatory program that pairs transferring Marines
                  and their families with experienced personnel at the gaining command. Sponsors provide direct support
                  during Permanent Change of Station (PCS) moves to reduce relocation stress and help Marines adapt to
                  their new duty station. The program is managed by Information, Referral and Relocation (IR&R) staff
                  and Unit Sponsorship Coordinators.
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
                          <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Who Receives a Sponsor
                </h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Per MCO 1320.11H, sponsorship is mandatory for all personnel executing CONUS or OCONUS orders:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>• E-1 through E-9</li>
                  <li>• WO-1 through CWO-5</li>
                  <li>• O-1 through O-6</li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Sponsor Matching Guidelines
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Commands are encouraged to match:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>• Equal or higher paygrade to inbound Marine</li>
                  <li>• Similar marital status (single sponsor for single Marine, married sponsor with children for married Marine with family)</li>
                  <li>• Sponsors must be uniformed military personnel, not civilians</li>
                  <li>• Sponsors should have minimum 6 months remaining at duty station</li>
                </ul>
              </section>
            </>
          )}

          {/* Responsibilities Tab */}
          {activeTab === "responsibilities" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Sponsor Responsibilities
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Per MCO 1320.11H, assigned sponsors have required and additional duties to support inbound Marines.
                </p>
              </section>

              <div className="grid gap-4 md:grid-cols-2">
                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Duties</h3>
                  <ol className="mt-3 space-y-2">
                    {SPONSOR_REQUIRED_DUTIES.map((duty, i) => (
                      <li key={duty} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        {duty}
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Additional Duties</h3>
                  <ul className="mt-3 space-y-1.5">
                    {SPONSOR_ADDITIONAL_DUTIES.map((duty) => (
                      <li key={duty} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-[var(--sa-red)]">•</span>
                        {duty}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Sponsorship Coordinator Responsibilities
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Per MCO 1320.11H, Unit Sponsorship Coordinators must manage the program at the unit level.
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Training & Certification</h4>
                    <ul className="mt-2 space-y-1">
                      {SC_TRAINING_DUTIES.map((duty) => (
                        <li key={duty} className="text-sm text-zinc-600 dark:text-zinc-400">• {duty}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Program Management</h4>
                    <ul className="mt-2 space-y-1">
                      {SC_PROGRAM_DUTIES.map((duty) => (
                        <li key={duty} className="text-sm text-zinc-600 dark:text-zinc-400">• {duty}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Sponsor Assignment</h4>
                    <ul className="mt-2 space-y-1">
                      {SC_ASSIGNMENT_DUTIES.map((duty) => (
                        <li key={duty} className="text-sm text-zinc-600 dark:text-zinc-400">• {duty}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Turnover Binder Items</h4>
                    <ul className="mt-2 space-y-1">
                      {SC_TURNOVER_ITEMS.map((item) => (
                        <li key={item} className="text-sm text-zinc-600 dark:text-zinc-400">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Sponsor Reimbursement</h4>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                  Commands must budget for and reimburse sponsors for allowable expenses including mileage for POVs
                  in execution of official duties, airport parking, and toll fees during transit.
                </p>
              </section>
            </>
          )}

          {/* Process Tab */}
          {activeTab === "process" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Requesting a Sponsor
                </h2>
                <div className="mt-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Outbound Marines</h3>
                  <ol className="mt-3 space-y-2">
                    {[
                      "Obtain NAVMC 11799 (Sponsorship Request Form) from your Sponsorship Coordinator or during PCS workshop",
                      "Complete all required information",
                      "Submit form to gaining command",
                      "Gaining command assigns sponsor within 60 days of transfer",
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">If You Do Not Have a Sponsor</h4>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                  Contact the gaining unit&apos;s Sponsorship Coordinator directly. Contact information should be on your
                  orders or available through: Installation IR&R office, Military OneSource, or MilitaryINSTALLATIONS website.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Welcome Aboard Letters
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Command Welcome Letter</h4>
                    <p className="mt-1 text-xs text-green-700 dark:text-green-300">Sent by CO upon receipt of NAVMC 11799</p>
                    <ul className="mt-2 space-y-1">
                      {COMMAND_WELCOME_LETTER.map((item) => (
                        <li key={item} className="text-sm text-green-700 dark:text-green-300">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Sponsor Welcome Letter</h4>
                    <p className="mt-1 text-xs text-blue-700 dark:text-blue-300">Sent within 10 working days of assignment</p>
                    <ul className="mt-2 space-y-1">
                      {SPONSOR_WELCOME_LETTER.map((item) => (
                        <li key={item} className="text-sm text-blue-700 dark:text-blue-300">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  OCONUS Welcome Aboard Letters
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  For accompanied overseas assignments, letters include additional information:
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {OCONUS_ADDITIONAL.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-[var(--sa-red)]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Reserve Component Sponsorship
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Reserve unit sponsors provide newly joined Marines with a Reserve Sponsorship Package including:
                </p>
                <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                  {RESERVE_PACKAGE_ITEMS.map((item) => (
                    <li key={item} className="text-sm text-zinc-700 dark:text-zinc-300">• {item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>MARFORRES Support:</strong> Liaison support through MARFORRES MCCS (toll-free 1-866-305-9058)
                </p>
              </section>
            </>
          )}

          {/* Training Tab */}
          {activeTab === "training" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Sponsorship Training
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Training is required before sponsors can perform their duties. Training is documented in MCTIMS with event code &quot;US&quot;.
                </p>
              </section>

              <div className="grid gap-4 md:grid-cols-2">
                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Sponsors</h3>
                  <ul className="mt-3 space-y-2">
                    <li className="text-sm text-zinc-700 dark:text-zinc-300">• Complete before performing sponsorship duties</li>
                    <li className="text-sm text-zinc-700 dark:text-zinc-300">• Available through IR&R Program workshops</li>
                    <li className="text-sm text-zinc-700 dark:text-zinc-300">• Available on MarineNet: &quot;USMC Sponsorship Training&quot;</li>
                    <li className="text-sm text-zinc-700 dark:text-zinc-300">• Alternative: millifelearning.militaryonesource.mil</li>
                    <li className="text-sm text-zinc-700 dark:text-zinc-300">• Training documented in MCTIMS with event code &quot;US&quot;</li>
                  </ul>
                </section>

                <section className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Sponsorship Coordinators</h3>
                  <ul className="mt-3 space-y-2">
                    <li className="text-sm text-zinc-700 dark:text-zinc-300">• Complete within 60 days of appointment</li>
                    <li className="text-sm text-zinc-700 dark:text-zinc-300">• Available through IR&R Program workshops</li>
                    <li className="text-sm text-zinc-700 dark:text-zinc-300">• Available on MarineNet: &quot;USMC Sponsorship Coordinator Training&quot;</li>
                    <li className="text-sm text-zinc-700 dark:text-zinc-300">• Training code provided by IR&R Manager</li>
                  </ul>
                </section>
              </div>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Tips for Inbound Marines
                </h3>
                <ul className="mt-4 space-y-2">
                  {INBOUND_TIPS.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Tips for Sponsors
                </h3>
                <ul className="mt-4 space-y-2">
                  {SPONSOR_TIPS.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {/* Resources Tab */}
          {activeTab === "resources" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  IR&R Services
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Information, Referral and Relocation (IR&R) Program staff serve as subject matter experts on sponsorship.
                </p>
                <ul className="mt-4 space-y-1">
                  {IR_R_SERVICES.map((service) => (
                    <li key={service} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-[var(--sa-red)]">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Online Resources
                </h3>
                <div className="mt-4 space-y-4">
                  {ONLINE_RESOURCES.map((resource) => (
                    <div key={resource.name} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[var(--sa-red)] hover:underline"
                      >
                        {resource.name}
                      </a>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{resource.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Geographically Isolated Marines
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  For Marines assigned to areas geographically isolated from Marine Corps installations:
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">East of Mississippi River</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">(except Wisconsin)</p>
                    <p className="mt-1 text-sm font-medium text-[var(--sa-red)]">MCB Quantico MCCS: 1-800-253-1624</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">West of Mississippi River</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">(and Wisconsin)</p>
                    <p className="mt-1 text-sm font-medium text-[var(--sa-red)]">Camp Pendleton MCCS: 1-833-657-2110</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <strong>24/7 Assistance:</strong> Military OneSource: 1-800-342-9647
                </p>
              </section>

              <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Program Questionnaire</h4>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                  NAVMC 11791 (Sponsorship Program Questionnaire) is provided to newly arrived Marines. Completion is
                  optional but encouraged. It&apos;s used to evaluate sponsor performance, identify trends, and is
                  retained in command files for 2 years.
                </p>
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
                  <li>• MCO 1320.11H - Marine Corps Sponsorship Program</li>
                  <li>• DoDI 1342.22 - Military Family Readiness</li>
                  <li>• SECNAVINST 1754.1B</li>
                  <li>• MCO 1754.9B - Unit, Personal and Family Readiness Program</li>
                </ul>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key Contacts
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Installation IR&R Office</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Marine and Family Programs</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">Military OneSource</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">1-800-342-9647</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">MilitaryINSTALLATIONS</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">installations.militaryonesource.mil</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">NAVMC Forms</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">forms.documentservices.dla.mil</p>
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
            <h4 className="font-semibold text-red-800 dark:text-red-200">Request Early!</h4>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Submit NAVMC 11799 as soon as you receive orders. Sponsors should be assigned within 60 days of your transfer date.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
