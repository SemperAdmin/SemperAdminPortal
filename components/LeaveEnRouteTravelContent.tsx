"use client";
import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "ler", label: "Leave En Route" },
  { id: "licwo", label: "LICWO" },
  { id: "circuitous", label: "Circuitous Travel" },
  { id: "entitlements", label: "Entitlements" },
  { id: "scenarios", label: "Scenarios" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const KEY_POINTS = [
  { element: "Travel Type", ler: "TDY or PCS", circuitous: "PCS only" },
  { element: "What Changes", ler: "Adds leave time", circuitous: "Changes the route" },
  { element: "Cost Responsibility", ler: "You pay leisure flight segments", circuitous: "You pay excess over direct route" },
  { element: "Approval Required", ler: "LICWO letter from Pax Travel", circuitous: "TMO memorandum and orders annotation" },
  { element: "Authority", ler: "MCO 1050.3J, JTR", circuitous: "MCO 1000.6, JTR" },
];

const LER_COSTS = {
  govPays: [
    "Airfare for the direct official route",
    "Per diem for official travel days",
    "Lodging at official TDY location",
  ],
  youPay: [
    "Additional airfare for leave destination",
    "Lodging during leave period",
    "Meals during leave period",
    "All personal expenses",
  ],
};

const LICWO_STEPS = [
  { step: "Request Authorization", details: "Contact Passenger Travel (Pax Travel) office before booking any travel" },
  { step: "Obtain Cost Comparison", details: "Pax Travel provides the government cost for direct official route" },
  { step: "Receive LICWO Letter", details: "Authorization letter details official route, your personal route, out-of-pocket amount, and leave dates" },
  { step: "Book Travel", details: "Use CTO for official segments, personal payment for leisure segments" },
  { step: "Execute Travel", details: "Follow itinerary as approved in LICWO letter" },
  { step: "Submit Voucher", details: "Claim only the authorized reimbursable amount" },
];

const LICWO_LETTER_REQUIREMENTS = [
  "Traveler name, grade, and EDIPI",
  "Official travel dates and destinations",
  "Personal travel dates and destinations",
  "Cost of direct official routing",
  "Cost of actual routing",
  "Difference payable by member",
  "Leave days to be charged",
  "Approving official signature",
];

const CIRCUITOUS_STEPS = [
  { step: "Determine desired indirect route", details: "Plan your preferred routing with personal stops" },
  { step: "Draft request memorandum", details: "Submit through your commander to CMC (MMIB-3)" },
  { step: "Allow processing time", details: "Submit with sufficient lead time for approval before travel" },
  { step: "Receive approval", details: "Ensure orders are annotated with circuitous travel authorization" },
  { step: "Coordinate with TMO", details: "Get cost calculation for direct vs. circuitous route" },
  { step: "Book travel through CTO", details: "Pay excess costs out of pocket" },
  { step: "Obtain visas/passports", details: "You are responsible for entry requirements on indirect route countries" },
  { step: "Execute travel and submit voucher", details: "Include DD Form 1131 itemizing excess costs" },
];

const CIRCUITOUS_RESTRICTIONS = [
  "U.S. carriers must be available on the direct route",
  "Foreign carriers on indirect route only if U.S. carriers unavailable",
  "Excess costs itemized on DD Form 1131 by CTO",
  "You are responsible for visa and passport requirements",
  "Excess travel time charged as leave (delay en route)",
];

const ENTITLEMENT_IMPACTS = [
  { entitlement: "Per Diem", impact: "No per diem during leave periods or circuitous travel days" },
  { entitlement: "Travel Time", impact: "Leave days do not count as travel time; excess circuitous time charged as leave" },
  { entitlement: "Proceed Time", impact: "Up to 4 days for PCS, separate from leave, not affected by routing" },
  { entitlement: "POV Shipment", impact: "Based on official route; not affected by leave en route or circuitous routing" },
];

const COMMON_SCENARIOS = [
  {
    title: "TDY to Germany with Leave in Italy",
    official: "Camp Lejeune → Ramstein, Germany → Camp Lejeune",
    withLeave: "Camp Lejeune → Ramstein → Rome (7 days leave) → Camp Lejeune",
    reimbursement: "Direct roundtrip cost Camp Lejeune to Ramstein",
    youPay: "Rome segments and 7 days leave expenses",
  },
  {
    title: "PCS to Okinawa via Hawaii",
    official: "Camp Pendleton → Okinawa (direct)",
    withLeave: "Camp Pendleton → Hawaii (4 days) → Okinawa",
    reimbursement: "Direct flight cost Camp Pendleton to Okinawa",
    youPay: "Excess airfare, Hawaii lodging, meals, 4 days leave charged",
  },
  {
    title: "Combined PCS Leave and Proceed Time",
    official: "4 days proceed time authorized",
    withLeave: "10 days leave en route requested",
    reimbursement: "Total delay: 14 days",
    youPay: "Proceed time: Not charged to leave. Leave: 10 days charged to balance",
  },
];

const COMPARISON = [
  { factor: "Primary Purpose", ler: "Add leave time to trip", circuitous: "Change travel route" },
  { factor: "Applies To", ler: "TDY and PCS", circuitous: "PCS only (primarily OCONUS)" },
  { factor: "Leave Charged", ler: "Yes, for days at leave location", circuitous: "Yes, for excess travel time" },
  { factor: "Route Changed", ler: "Yes, to reach leave destination", circuitous: "Yes, indirect route authorized" },
  { factor: "Approval Authority", ler: "Pax Travel (LICWO letter)", circuitous: "CMC (MMIB-3) via commander" },
  { factor: "Per Diem Impact", ler: "No per diem during leave", circuitous: "Per diem stops during indirect portion" },
  { factor: "POV Travel Days", ler: "May be affected", circuitous: "Lost for indirect portion" },
];

const TIPS = [
  { title: "Plan Early", desc: "Approval processes take time. Start 60-90 days before travel." },
  { title: "Get Everything in Writing", desc: "Obtain LICWO letter or circuitous approval before booking." },
  { title: "Know Your Costs", desc: "Get exact figures from Pax Travel or TMO before committing." },
  { title: "Use CTO for Official Segments", desc: "Keep official and personal bookings separate." },
  { title: "Track Your Leave Balance", desc: "Ensure you have sufficient leave for planned days." },
  { title: "Check Visa Requirements", desc: "You are responsible for entry requirements on indirect routes." },
  { title: "Keep All Receipts", desc: "Document both official and personal expenses for records." },
  { title: "Submit Voucher Promptly", desc: "Claim authorized reimbursement within 5 days of return." },
];

export default function LeaveEnRouteTravelContent({ data }: { data: { references: Ref[] } }) {
  const [tab, setTab] = useState<TabId>("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-md px-3 py-2 text-sm ${tab === t.id ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave En Route and Circuitous Travel</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Marines can combine official travel with personal leave or take indirect routes during PCS moves. Leave En Route allows you to take leave days during official travel. Circuitous travel permits an indirect PCS route for personal convenience. Both options require advance approval and may involve out-of-pocket costs for the personal portion of travel.</p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/15">
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Element</th>
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave En Route</th>
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Circuitous Travel</th>
                  </tr>
                </thead>
                <tbody>
                  {KEY_POINTS.map((row) => (
                    <tr key={row.element} className="border-b border-black/5 dark:border-white/10">
                      <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{row.element}</td>
                      <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{row.ler}</td>
                      <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{row.circuitous}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Get approval BEFORE you travel—LICWO letter for leave en route, CMC approval for circuitous travel. Government reimburses only the direct official route cost. You pay the difference for personal routing. Per diem stops during leave periods. Leave days are charged to your leave balance. Plan 60-90 days ahead for overseas travel with personal stops.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Pre-Approval Required</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Direct Route Reimbursed</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">You Pay Excess</span>
              </div>
            </div>
          </section>
        )}

        {tab === "ler" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave En Route (LER)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Leave En Route allows you to take ordinary leave during official travel without returning to your duty station first. You depart on official orders, take leave at an intermediate point, then continue to your destination.</p>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How It Works</h3>
              <ol className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-[var(--sa-cream)]">1</span>
                  You travel on official orders (TDY or PCS)
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-[var(--sa-cream)]">2</span>
                  Stop at a leave location (not on the official route)
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-[var(--sa-cream)]">3</span>
                  Use your leave balance for days at the leave location
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-[var(--sa-cream)]">4</span>
                  Continue to your official destination
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-[var(--sa-cream)]">5</span>
                  Government reimburses official travel portion only
                </li>
              </ol>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border-2 border-green-500 bg-green-50 p-4 dark:border-green-400 dark:bg-green-900/20">
                <h3 className="font-bold text-green-800 dark:text-green-300">Government Pays</h3>
                <ul className="mt-2 space-y-1">
                  {LER_COSTS.govPays.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0"><path d="M9 12l2 2 4-4"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-4 dark:border-amber-400 dark:bg-amber-900/20">
                <h3 className="font-bold text-amber-800 dark:text-amber-300">You Pay</h3>
                <ul className="mt-2 space-y-1">
                  {LER_COSTS.youPay.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0"><path d="M12 5v14M5 12h14"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Example</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Official travel: Camp Lejeune to Okinawa</p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300"><strong>With Leave En Route:</strong> Camp Lejeune → Hawaii (5 days leave) → Okinawa</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Government reimburses: Camp Lejeune to Okinawa direct airfare equivalent</li>
                <li>• You pay: Additional cost for Hawaii stopover flights</li>
                <li>• Leave charged: 5 days from your leave balance</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "licwo" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave in Connection with Overseas Travel (LICWO)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">LICWO specifically applies to travel involving overseas destinations. This program allows Marines to add personal travel to official overseas TDY or PCS.</p>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LICWO Process</h3>
              <div className="mt-3 space-y-3">
                {LICWO_STEPS.map((item, idx) => (
                  <div key={item.step} className="flex gap-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-sm font-bold text-[var(--sa-cream)]">{idx + 1}</div>
                    <div>
                      <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.step}</div>
                      <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LICWO Letter Requirements</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Your LICWO authorization letter must include:</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {LICWO_LETTER_REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sa-red)]"><path d="M9 12l2 2 4-4"/></svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="font-semibold">Contact Pax Travel First</div>
              <p className="mt-1 text-sm">Always contact your installation&apos;s Passenger Travel office before booking any travel. They provide the cost comparison and LICWO authorization letter required for reimbursement.</p>
            </div>
          </section>
        )}

        {tab === "circuitous" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Circuitous Travel (PCS Only)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Circuitous travel changes your PCS route for personal convenience. Instead of flying direct, you travel an indirect route with personal stops. Approval is required from CMC (MMIB-3) through your commander.</p>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Circuitous Travel Steps</h3>
              <div className="mt-3 space-y-3">
                {CIRCUITOUS_STEPS.map((item, idx) => (
                  <div key={item.step} className="flex gap-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-[var(--sa-cream)]">{idx + 1}</div>
                    <div>
                      <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.step}</div>
                      <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Restrictions</h3>
              <ul className="mt-3 space-y-2">
                {CIRCUITOUS_RESTRICTIONS.map((restriction) => (
                  <li key={restriction} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sa-red)]"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
                    {restriction}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-black/10 bg-[var(--sa-navy)] p-4 text-[var(--sa-cream)] dark:border-white/15">
              <h3 className="font-bold">Reimbursement Limit</h3>
              <p className="mt-2 text-sm opacity-90">Your transportation allowance is limited to the non-capacity controlled airfare (Category YCA) over the direct route. Any cost above this amount is your responsibility.</p>
              <div className="mt-3 rounded-lg bg-white/10 p-3">
                <div className="text-xs font-semibold">Example: PCS Camp Pendleton to MCAS Iwakuni</div>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>Direct route cost: $1,200</li>
                  <li>Circuitous route (via Thailand): $1,800</li>
                  <li>You pay: <strong>$600 difference</strong></li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "entitlements" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Impact on Entitlements</h2>

            <div className="mt-4 space-y-4">
              {ENTITLEMENT_IMPACTS.map((item) => (
                <div key={item.entitlement} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.entitlement}</h3>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.impact}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave En Route vs Circuitous Travel</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/15">
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Factor</th>
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave En Route</th>
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Circuitous Travel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row) => (
                      <tr key={row.factor} className="border-b border-black/5 dark:border-white/10">
                        <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{row.factor}</td>
                        <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{row.ler}</td>
                        <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{row.circuitous}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {tab === "scenarios" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Scenarios</h2>

            <div className="mt-4 space-y-4">
              {COMMON_SCENARIOS.map((scenario) => (
                <div key={scenario.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{scenario.title}</h3>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="font-medium text-zinc-600 dark:text-zinc-400">Official:</span>
                      <span className="text-zinc-700 dark:text-zinc-300">{scenario.official}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-zinc-600 dark:text-zinc-400">With Leave:</span>
                      <span className="text-zinc-700 dark:text-zinc-300">{scenario.withLeave}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-green-600 dark:text-green-400">Reimbursement:</span>
                      <span className="text-zinc-700 dark:text-zinc-300">{scenario.reimbursement}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-amber-600 dark:text-amber-400">You Pay:</span>
                      <span className="text-zinc-700 dark:text-zinc-300">{scenario.youPay}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tips for Success</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {TIPS.map((tip) => (
                  <div key={tip.title} className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{tip.title}</h4>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Troubleshooter</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LICWO letter not received in time</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Do not book personal segments without authorization</li>
                  <li>Contact Pax Travel to expedite</li>
                  <li>May need to adjust travel plans</li>
                  <li>Booking without approval risks non-reimbursement</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Circuitous travel not approved</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Must take direct route or reapply with additional justification</li>
                  <li>Consider leave en route as alternative</li>
                  <li>Allow more lead time for resubmission</li>
                  <li>Contact your commander for guidance</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Per diem calculated incorrectly</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify leave dates entered correctly in DTS</li>
                  <li>Check that leave status is properly marked</li>
                  <li>Ensure travel days are separate from leave days</li>
                  <li>Contact ODTA for system corrections</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Visa issues on indirect route</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>You are responsible for all visa requirements</li>
                  <li>Check requirements early—some visas take weeks</li>
                  <li>May need to adjust routing if visa not obtainable</li>
                  <li>Government does not reimburse visa costs for personal stops</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {data.references.map((ref) => (
                <a key={ref.title} href={ref.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                  <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 3v6h6"/></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{ref.title}</h4>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-300 transition group-hover:text-[var(--sa-red)]"><path d="M18 3h3v3M21 3l-9 9"/><path d="M21 21H3V3"/></svg>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      <aside className="space-y-6 lg:mt-12">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave En Route</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">TDY or PCS, LICWO letter required</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Circuitous Travel</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">PCS only, CMC approval required</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Per Diem</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Stops during leave periods</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reimbursement</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Direct route cost only</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Plan Ahead</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">60-90 days for overseas</div>
            </li>
          </ul>
        </section>

        <QuickLinks references={data.references} />
      </aside>
    </div>
  );
}
