"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: { references: Reference[] };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "health", label: "Health Assessment" },
  { id: "family", label: "Family Reintegration" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Timeline", description: "Begins upon return to CONUS/home station" },
  { element: "Components", description: "Administrative, medical, mental health, family" },
  { element: "Required Briefs", description: "Post-Deployment Health Assessment, briefs" },
  { element: "Pay Actions", description: "End combat entitlements, adjust allowances" },
  { element: "Leave", description: "Post-deployment leave (block leave)" },
  { element: "Authority", description: "MCO 3000.13, DODI 6490.03" },
];

const REINTEGRATION_TIMELINE = [
  { timeframe: "Day 1-3", actions: "Arrival processing, initial briefs" },
  { timeframe: "Day 1-7", actions: "Post-Deployment Health Assessment (PDHA)" },
  { timeframe: "Week 1-2", actions: "Administrative processing, pay verification" },
  { timeframe: "30 days", actions: "Block leave typically begins" },
  { timeframe: "90-180 days", actions: "Post-Deployment Health Reassessment (PDHRA)" },
];

const ADMIN_ACTIONS = [
  { action: "Check-in with unit", responsible: "Marine" },
  { action: "MCTFS update", responsible: "S-1" },
  { action: "Deployment end date", responsible: "S-1 via Unit Diary" },
  { action: "Gear turn-in", responsible: "Marine/Supply" },
  { action: "Travel voucher", responsible: "Marine/S-1" },
  { action: "Leave request (if applicable)", responsible: "Marine" },
];

const PDHA_SCREENING = [
  "Physical health concerns",
  "Mental health (depression, anxiety, PTSD)",
  "Traumatic Brain Injury (TBI)",
  "Exposures (environmental, blast)",
  "Current medications",
  "Deployment-related concerns",
];

const MENTAL_HEALTH_RESOURCES = [
  { resource: "Combat Operational Stress Control", description: "Unit-level support" },
  { resource: "Military OneSource", description: "Confidential counseling" },
  { resource: "Chaplain", description: "Spiritual/personal support" },
  { resource: "Medical (Mental Health)", description: "Clinical treatment" },
  { resource: "Vet Centers", description: "Readjustment counseling" },
];

const WARNING_SIGNS = [
  "Sleep difficulties",
  "Anger/irritability",
  "Withdrawal from family/friends",
  "Anxiety or depression",
  "Flashbacks or nightmares",
  "Substance use increase",
];

const FAMILY_CHALLENGES = [
  "Adjusting to family routines",
  "Reconnecting with spouse/children",
  "Role changes during absence",
  "Communication patterns",
];

const FAMILY_TIPS = [
  "Allow adjustment time",
  "Communicate openly",
  "Attend reintegration briefs together",
  "Seek help if struggling",
];

const BEFORE_LEAVE = [
  "Complete required reintegration briefs",
  "Complete PDHA",
  "Submit leave request",
  "Provide emergency contact information",
  "Understand recall procedures",
];

const GEAR_TURNIN = [
  { item: "Organizational gear", location: "Unit supply" },
  { item: "CIF gear", location: "CIF" },
  { item: "Ammunition", location: "Armory" },
  { item: "Communication equipment", location: "Comm" },
  { item: "Medical supplies", location: "Medical" },
];

const IMMEDIATELY_CHECKLIST = [
  "Check in with unit",
  "Complete PDHA (DD 2796)",
  "Begin administrative processing",
  "Turn in organizational gear",
  "Verify deployment end in MCTFS",
];

const FIRST_WEEK_CHECKLIST = [
  "Complete required briefs",
  "Submit travel voucher",
  "Verify pay adjustments on LES",
  "Turn in all issued gear",
  "Request post-deployment leave",
];

const LATER_CHECKLIST = [
  "Complete PDHRA (DD 2900)",
  "Follow up on any medical referrals",
  "Address any ongoing concerns",
];

export function ReintegrationProcessingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reintegration Processing Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Reintegration processing covers all administrative actions required when returning from deployment.
            Proper processing ensures your records are updated, entitlements are adjusted, and you transition
            smoothly back to garrison life. Reintegration also addresses physical, mental, and family
            readiness after deployment.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {KEY_POINTS.map((item) => (
                  <tr key={item.element}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.element}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    timeline: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reintegration Timeline
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {REINTEGRATION_TIMELINE.map((item) => (
                  <tr key={item.timeframe}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.timeframe}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.actions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Administrative Processing
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Responsible Party</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {ADMIN_ACTIONS.map((item) => (
                  <tr key={item.action}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.action}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.responsible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Gear and Equipment Turn-In
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Item</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Turn-In Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {GEAR_TURNIN.map((item) => (
                  <tr key={item.item}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.item}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    health: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Post-Deployment Health Assessment (PDHA)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Required for all returning Marines. Complete DD Form 2796 within 7 days of return.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Screening Areas
          </h3>
          <ul className="mt-4 space-y-2">
            {PDHA_SCREENING.map((area) => (
              <li key={area} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {area}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Mental Health Resources
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Resource</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {MENTAL_HEALTH_RESOURCES.map((item) => (
                  <tr key={item.resource}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.resource}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
            Warning Signs to Address
          </h3>
          <ul className="mt-4 space-y-2">
            {WARNING_SIGNS.map((sign) => (
              <li key={sign} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                {sign}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">PDHRA Required</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Complete DD Form 2900 (PDHRA) 90-180 days after return for follow-up health screening
            and mental health reassessment.
          </p>
        </div>
      </>
    ),

    family: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Family Reintegration
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Returning from deployment requires adjustment for both you and your family.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Challenges
          </h3>
          <ul className="mt-4 space-y-2">
            {FAMILY_CHALLENGES.map((challenge) => (
              <li key={challenge} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                {challenge}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Tips for Success
          </h3>
          <ul className="mt-4 space-y-2">
            {FAMILY_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Taking Post-Deployment Leave
          </h3>
          <ul className="mt-4 space-y-2">
            {BEFORE_LEAVE.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Immediately Upon Return
          </h2>
          <div className="mt-4 space-y-2">
            {IMMEDIATELY_CHECKLIST.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            First Week
          </h2>
          <div className="mt-4 space-y-2">
            {FIRST_WEEK_CHECKLIST.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            90-180 Days After Return
          </h2>
          <div className="mt-4 space-y-2">
            {LATER_CHECKLIST.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
