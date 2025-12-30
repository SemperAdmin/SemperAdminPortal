"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "stops", label: "Checkout Stops" },
  { id: "tmo", label: "TMO & Workshop" },
  { id: "issues", label: "Issues & Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Start Timeline", requirement: "30 days before departure" },
  { element: "Primary Document", requirement: "Unit Checkout Sheet" },
  { element: "Orders Endorsement", requirement: "Required before departure" },
  { element: "PCS Workshop", requirement: "60-90 days before transfer" },
  { element: "Sponsor Contact", requirement: "Coordinate with gaining command" },
  { element: "Authority", requirement: "MCO 1320.11H, MCO 1000.6" },
];

const PCS_TIMELINE = [
  { timeframe: "90 days", action: "Receive PCS orders" },
  { timeframe: "60-90 days", action: "Attend PCS workshop with IR&R" },
  { timeframe: "60 days", action: "Submit NAVMC 11799 (Sponsorship Request) to gaining command" },
  { timeframe: "30 days", action: "Obtain checkout sheet from S-1" },
  { timeframe: "30-14 days", action: "Complete checkout stops" },
  { timeframe: "14-7 days", action: "Final S-1 interview, orders endorsement" },
  { timeframe: "7 days", action: "Confirm travel arrangements, HHG pickup scheduled" },
  { timeframe: "Departure date", action: "Depart duty station" },
];

const PCA_TIMELINE = [
  { timeframe: "Upon receipt of orders", action: "Notify current and gaining command" },
  { timeframe: "14 days", action: "Obtain checkout sheet from S-1" },
  { timeframe: "14-7 days", action: "Complete checkout stops" },
  { timeframe: "7 days", action: "Final S-1 interview" },
  { timeframe: "Report date", action: "Check in to new command" },
];

const CHECKOUT_STOPS = [
  { stop: "S-1/Admin", purpose: "Outbound interview, records verification, orders endorsement" },
  { stop: "S-2/Security", purpose: "Security transfer verification, access termination for current spaces" },
  { stop: "S-3/Training", purpose: "Training records verification, PME documentation" },
  { stop: "S-4/Supply", purpose: "CIF turn-in or transfer, gear accountability" },
  { stop: "S-6/Communications", purpose: "Equipment turn-in, account transfer, network access" },
  { stop: "Armory", purpose: "Weapons accountability, serialized gear verification" },
  { stop: "Medical", purpose: "Medical records transfer or hand-carry documentation" },
  { stop: "Dental", purpose: "Dental records transfer" },
  { stop: "Legal", purpose: "Power of Attorney updates, will review" },
  { stop: "Finance/Disbursing", purpose: "Travel advance, pay account verification" },
  { stop: "Housing", purpose: "Quarters inspection, key turn-in, BAH verification" },
  { stop: "Transportation (TMO)", purpose: "HHG shipment scheduling, travel arrangements" },
  { stop: "IPAC", purpose: "Orders processing, MCTFS update" },
];

const ROLE_REQUIREMENTS = [
  { role: "Enlisted Personnel (E-1 to E-5)", requirement: "Meet with Career Planner before checkout" },
  { role: "SNCO Personnel", requirement: "Meet with Battalion Sergeant Major prior to departure" },
  { role: "Personnel in Government Housing", requirement: "Schedule housing inspection, complete move-out checklist, turn in keys and access cards" },
];

const ENDORSEMENT_REQUIREMENTS = [
  "Checkout sheet fully completed with all signatures",
  "No outstanding debts or obligations",
  "CIF gear turned in or transferred",
  "Government housing cleared (if applicable)",
  "Security clearance transfer initiated",
  "Medical and dental records prepared for transfer",
];

const ENDORSEMENT_PROCESS = [
  "Present completed checkout sheet to S-1",
  "S-1 verifies all stops completed",
  "S-1 endorses orders with detachment date",
  "Receive endorsed orders copy",
  "Provide copy to gaining command upon arrival",
];

const TMO_HHG_STEPS = [
  "Bring PCS orders to TMO",
  "Schedule pre-move survey",
  "Select pickup date",
  "Coordinate delivery at destination",
  "Track shipment through move.mil",
];

const TMO_TRAVEL_SERVICES = [
  "Government air travel booking",
  "Rental car authorization",
  "Port call arrangements (OCONUS)",
  "Dependent travel coordination",
];

const WORKSHOP_CONTENT = [
  "Entitlements overview (DLA, MALT, per diem, TLE)",
  "HHG shipment procedures",
  "Travel claim submission",
  "Sponsorship program information",
  "Gaining command resources",
  "DEERS and dependent updates",
];

const COMMON_ISSUES = [
  {
    issue: "Incomplete Checkout Sheet",
    resolution: "Verify all stops are signed/stamped. Return to any missed locations. S-1 will not endorse orders without complete checkout.",
  },
  {
    issue: "CIF Shortage",
    resolution: "Pay for missing items or obtain statement of charges. Provide receipt to S-1. Clear CIF before departure.",
  },
  {
    issue: "Outstanding Debts",
    resolution: "Pay debts before checkout completion. Obtain clearance documentation. Provide to S-1 and Finance.",
  },
  {
    issue: "Housing Not Cleared",
    resolution: "Schedule inspection with housing office. Complete any required cleaning or repairs. Obtain clearance letter.",
  },
];

const CHECKLIST_30_DAYS = [
  "Obtain checkout sheet from S-1",
  "Schedule all appointments (CIF, housing, medical)",
  "Begin clearing through offices",
  "Contact sponsor at gaining command",
  "Schedule HHG pickup with TMO",
];

const CHECKLIST_14_DAYS = [
  "Complete majority of checkout stops",
  "Turn in CIF gear",
  "Clear government housing (if applicable)",
  "Verify travel arrangements",
  "Confirm sponsor has your arrival information",
];

const CHECKLIST_7_DAYS = [
  "Complete remaining checkout stops",
  "Final S-1 interview",
  "Receive endorsed orders",
  "Confirm HHG pickup date",
  "Verify travel reservations",
];

const CHECKLIST_DEPARTURE = [
  "Final checkout sheet review",
  "Receive orders endorsement",
  "Depart duty station",
];

const RESOURCES = [
  { name: "Unit S-1/Admin", purpose: "Checkout sheet, orders endorsement" },
  { name: "IPAC", purpose: "MCTFS updates, orders processing" },
  { name: "TMO", purpose: "HHG shipment, travel arrangements" },
  { name: "CIF", purpose: "Gear turn-in" },
  { name: "Housing Office", purpose: "Quarters clearance" },
  { name: "IR&R Office", purpose: "PCS workshop, sponsorship coordination" },
];

export function CheckoutProceduresContent({ data }: Props) {
  const content = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Checkout is a mandatory process you must complete before departing your current duty station for a
            Permanent Change of Station (PCS) or Permanent Change of Assignment (PCA). The process ensures you
            have cleared all administrative, logistical, and financial obligations with your command and supporting
            agencies. Your checkout sheet documents completion of each required stop and must be finalized before
            you receive orders endorsement.
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
            Orders Endorsement
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Requirements for Endorsement</h4>
              <ul className="mt-2 space-y-1">
                {ENDORSEMENT_REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)] mt-0.5">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Endorsement Process</h4>
              <ol className="mt-2 space-y-1">
                {ENDORSEMENT_PROCESS.map((step, index) => (
                  <li key={step} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resources & Contacts
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((res) => (
              <div key={res.name} className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{res.name}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{res.purpose}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    ),

    timeline: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PCS Checkout Timeline
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {PCS_TIMELINE.map((item) => (
                  <tr key={item.timeframe} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.timeframe}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PCA Checkout Timeline
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            PCA (Permanent Change of Assignment) involves moving within the same installation or geographic area.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {PCA_TIMELINE.map((item) => (
                  <tr key={item.timeframe} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.timeframe}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">PCS vs PCA</h4>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">PCS (Permanent Change of Station)</p>
              <ul className="mt-1 space-y-1 text-sm text-blue-600 dark:text-blue-400">
                <li>• Move to different duty station</li>
                <li>• HHG shipment authorized</li>
                <li>• Travel entitlements apply</li>
                <li>• 30+ day checkout process</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">PCA (Permanent Change of Assignment)</p>
              <ul className="mt-1 space-y-1 text-sm text-blue-600 dark:text-blue-400">
                <li>• Move within same installation</li>
                <li>• No HHG shipment</li>
                <li>• No travel entitlements</li>
                <li>• Shortened checkout process</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    ),

    stops: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Checkout Sheet Stops
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Your checkout sheet lists required stops. Complete each and obtain signature or stamp.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Stop</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {CHECKOUT_STOPS.map((item) => (
                  <tr key={item.stop} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.stop}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Role-Specific Requirements
          </h3>
          <div className="mt-4 space-y-3">
            {ROLE_REQUIREMENTS.map((item) => (
              <div key={item.role} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.role}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.requirement}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    ),

    tmo: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Transportation Management Office (TMO)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            TMO coordinates your household goods shipment and travel arrangements for PCS moves.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              HHG Shipment Process
            </h3>
            <ol className="mt-4 space-y-2">
              {TMO_HHG_STEPS.map((step, index) => (
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
              Travel Arrangements
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">TMO assists with:</p>
            <ul className="mt-4 space-y-2">
              {TMO_TRAVEL_SERVICES.map((service) => (
                <li key={service} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-[var(--sa-red)] mt-0.5">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PCS Workshop
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Attend PCS workshop 60-90 days before your transfer date. Contact your installation&apos;s
            Information, Referral and Relocation (IR&R) office through Marine and Family Programs.
          </p>
          <div className="mt-4">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Workshop Content</h4>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {WORKSHOP_CONTENT.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-[var(--sa-red)] mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </>
    ),

    issues: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Checkout Issues
          </h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((issue) => (
              <div key={issue.issue} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-red-700 dark:text-red-400">{issue.issue}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-green-700 dark:text-green-400">Resolution:</span> {issue.resolution}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Checkout Checklists
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">30 Days Before</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_30_DAYS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">14 Days Before</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_14_DAYS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">7 Days Before</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_7_DAYS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Day of Departure</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_DEPARTURE.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
