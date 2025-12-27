"use client";

import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "systems", label: "Systems" },
  { id: "when-to-update", label: "When to Update" },
  { id: "process", label: "Update Process" },
  { id: "verification", label: "Verification" },
  { id: "references", label: "References" },
];

const KEY_POINTS = [
  "Emergency contact information must be current in all required systems",
  "Updates required within 30 days of any change",
  "Annual verification required during unit musters",
  "vRED (DD Form 93) is the official Record of Emergency Data",
  "SGLI beneficiaries must be designated separately from emergency contacts",
  "Spouse notification in vRED is legally required for certain actions",
];

const SYSTEMS_TO_UPDATE = [
  {
    name: "vRED (DD Form 93)",
    description: "Virtual Record of Emergency Data - Official emergency contact and notification preferences",
    access: "Self-Service through MOL or unit S-1",
    importance: "Primary document for casualty notification and emergency contact",
  },
  {
    name: "SGLI Online",
    description: "Servicemembers' Group Life Insurance beneficiary designations",
    access: "milConnect (https://milconnect.dmdc.osd.mil)",
    importance: "Determines who receives SGLI benefits - separate from emergency contacts",
  },
  {
    name: "MOL (Marine Online)",
    description: "Personal information and contact details in MCTFS",
    access: "https://mol.tfs.usmc.mil",
    importance: "Official address of record for correspondence and orders",
  },
  {
    name: "Unit Recall Roster",
    description: "Unit-level emergency contact list for recalls and emergencies",
    access: "Through unit admin section",
    importance: "Used for unit accountability and emergency recalls",
  },
  {
    name: "Page 2 (NAVMC 118)",
    description: "Emergency Data and Designation of Beneficiaries",
    access: "Through unit admin section",
    importance: "Part of official service record book",
  },
];

const WHEN_TO_UPDATE_EVENTS = [
  {
    event: "Marriage or Divorce",
    action: "Update all systems within 30 days",
    notes: "Spouse becomes primary contact; update beneficiaries separately",
  },
  {
    event: "Birth/Adoption of Child",
    action: "Update emergency contacts and beneficiaries",
    notes: "Consider adding children as contingent beneficiaries",
  },
  {
    event: "Death of Emergency Contact",
    action: "Designate new emergency contact immediately",
    notes: "Ensure alternate contacts are current",
  },
  {
    event: "Address/Phone Change",
    action: "Update contact information in all systems",
    notes: "Ensure family members know new contact info",
  },
  {
    event: "Deployment/PCS Orders",
    action: "Verify all information before departure",
    notes: "Ensure contacts can be reached during absence",
  },
  {
    event: "Annual Verification",
    action: "Review and confirm all information",
    notes: "Required during unit musters and PHA",
  },
  {
    event: "Estrangement from Family",
    action: "Update to reflect actual next of kin wishes",
    notes: "May need commander involvement for sensitive situations",
  },
];

const VRED_SECTIONS = [
  {
    section: "Part I - Emergency Contacts",
    content: "Primary and alternate persons to notify in emergency",
    required: true,
  },
  {
    section: "Part II - Disposition of Remains",
    content: "Person authorized to direct disposition of remains (PADD)",
    required: true,
  },
  {
    section: "Part III - Benefits",
    content: "Unpaid pay and allowances beneficiary (not SGLI)",
    required: true,
  },
  {
    section: "Part IV - Spouse Notification",
    content: "Spouse acknowledgment of beneficiary designations",
    required: "If married",
  },
];

const UPDATE_CHECKLIST = [
  { system: "vRED (DD Form 93)", action: "Verify emergency contacts, PADD, benefits designations" },
  { system: "SGLI Online", action: "Verify beneficiary designations and coverage amount" },
  { system: "MOL", action: "Update address, phone, and personal information" },
  { system: "Unit Recall Roster", action: "Provide current contact info to unit admin" },
  { system: "Page 2", action: "Ensure SRB reflects current information" },
  { system: "TSP (if applicable)", action: "Verify beneficiary designations" },
];

export function EmergencyContactUpdatesContent({ data }: Props) {
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
          {activeTab === "overview" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Emergency Contact Updates Overview
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Maintaining accurate emergency contact information is critical for casualty notification,
                  emergency assistance, and ensuring your family can be reached when needed. This guide covers
                  all systems requiring emergency contact information and when updates are required.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Key Points
                </h3>
                <ul className="mt-4 space-y-2">
                  {KEY_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important Distinction</h4>
                <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
                  <strong>Emergency Contacts</strong> (who to notify in an emergency) are separate from
                  <strong> SGLI Beneficiaries</strong> (who receives life insurance benefits). Both must be
                  updated separately when changes occur.
                </p>
              </div>
            </>
          )}

          {activeTab === "systems" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Systems Requiring Updates
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Multiple systems track emergency contact and beneficiary information. Each serves a
                  different purpose and must be updated separately.
                </p>
              </section>

              <div className="space-y-4">
                {SYSTEMS_TO_UPDATE.map((system) => (
                  <section
                    key={system.name}
                    className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
                  >
                    <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      {system.name}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{system.description}</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Access
                        </span>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">{system.access}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Importance
                        </span>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">{system.importance}</p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </>
          )}

          {activeTab === "when-to-update" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  When to Update Emergency Contacts
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Certain life events require immediate updates to emergency contact information.
                  Updates should be completed within 30 days of the triggering event.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Triggering Events
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Event</th>
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action Required</th>
                        <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                      {WHEN_TO_UPDATE_EVENTS.map((item) => (
                        <tr key={item.event}>
                          <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.event}</td>
                          <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.action}</td>
                          <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}

          {activeTab === "process" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  vRED (DD Form 93) Update Process
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  The virtual Record of Emergency Data (vRED) is the official document for emergency
                  contacts, disposition of remains, and beneficiary designations for unpaid pay.
                </p>
                <div className="mt-4 space-y-3">
                  {VRED_SECTIONS.map((section, index) => (
                    <div
                      key={section.section}
                      className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50"
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{section.section}</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{section.content}</p>
                        <span className={`text-xs ${section.required === true ? "text-red-600" : "text-amber-600"}`}>
                          {section.required === true ? "Required" : `Required: ${section.required}`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Step-by-Step Update Process
                </h3>
                <ol className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
                    <span><strong>Access vRED</strong> through MOL Self-Service or contact unit S-1</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
                    <span><strong>Review current information</strong> and identify what needs to be updated</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
                    <span><strong>Enter updated information</strong> for emergency contacts, PADD, and beneficiaries</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
                    <span><strong>If married:</strong> Spouse must acknowledge changes (Part IV)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
                    <span><strong>Submit and verify</strong> the update was processed correctly</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
                    <span><strong>Update other systems</strong> (SGLI, MOL, unit roster) as needed</span>
                  </li>
                </ol>
              </section>

              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                <h4 className="font-semibold text-red-800 dark:text-red-200">SGLI Updates Require Separate Action</h4>
                <p className="mt-1 text-sm text-red-800 dark:text-red-200">
                  SGLI beneficiary changes must be made through SGLI Online at milConnect, not through vRED.
                  These are separate systems with separate beneficiary designations.
                </p>
              </div>
            </>
          )}

          {activeTab === "verification" && (
            <>
              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Annual Verification Requirements
                </h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Emergency contact information must be verified annually, typically during unit musters,
                  Periodic Health Assessments (PHA), or pre-deployment processing.
                </p>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Verification Checklist
                </h3>
                <div className="mt-4 space-y-3">
                  {UPDATE_CHECKLIST.map((item, index) => (
                    <label
                      key={item.system}
                      className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50"
                    >
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                      />
                      <div>
                        <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.system}</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.action}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Pre-Deployment Verification
                </h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Before any deployment or extended TDY, verify the following:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Emergency contacts have current phone numbers and addresses
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    PADD (Person Authorized to Direct Disposition) designation is current
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    SGLI coverage and beneficiaries are accurate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Family members know how to contact the unit and Red Cross
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                    Power of Attorney documents are in place if needed
                  </li>
                </ul>
              </section>
            </>
          )}

          {activeTab === "references" && (
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                References & Resources
              </h2>
              <ul className="mt-4 space-y-2">
                {data.references.map((ref) => (
                  <li key={ref.title}>
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
          )}
        </div>

        <aside className="space-y-6">
          <QuickLinks references={data.references} />

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Quick Facts
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Update Timeline</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Within 30 days of change</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">vRED Access</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">MOL Self-Service or unit S-1</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">SGLI Updates</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">milConnect (separate system)</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-900 dark:text-zinc-100">Verification Required</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">Annually or pre-deployment</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Spouse Notification</h4>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              If married, your spouse must acknowledge beneficiary designations in vRED Part IV.
              This is a legal requirement, not just a policy.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
