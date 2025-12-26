"use client";
import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; url: string; isQuickLink?: boolean };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "rates", label: "2025 Rates" },
  { id: "malt", label: "MALT/PCS" },
  { id: "tdy", label: "TDY Mileage" },
  { id: "scenarios", label: "Scenarios" },
  { id: "dts", label: "DTS Entry" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const CURRENT_RATES = [
  { type: "MALT (PCS)", rate: "$0.21/mile", description: "Monetary Allowance in Lieu of Transportation for PCS moves" },
  { type: "TDY/TAD (Full Rate)", rate: "$0.70/mile", description: "When GOV is NOT available or POC is advantageous to government" },
  { type: "TDY/TAD (Reduced)", rate: "$0.21/mile", description: "When GOV IS available but member chooses POC" },
  { type: "Motorcycle", rate: "$0.68/mile", description: "Motorcycle rate for TDY travel" },
  { type: "Airplane (POV)", rate: "$1.76/mile", description: "When using privately owned aircraft" },
];

const MALT_INFO = {
  definition: "MALT (Monetary Allowance in Lieu of Transportation) is the mileage rate paid for PCS moves when you drive your POV instead of using government-arranged transportation.",
  calculation: [
    { step: "Determine official distance using DTOD (Defense Table of Official Distances)", details: "Example: Camp Pendleton, CA to Camp Lejeune, NC = 2,467 miles" },
    { step: "Apply MALT rate", details: "$0.21 × 2,467 miles = $518.07" },
    { step: "Add per diem for travel days", details: "Authorized 1 day per 350 miles (minimum 1 day)" },
    { step: "Calculate dependents (if applicable)", details: "Additional MALT for second POV if dependents included in orders" },
  ],
  keyPoints: [
    "MALT covers fuel, oil, maintenance, and wear on your vehicle",
    "Tolls and parking are reimbursed separately with receipts",
    "You may claim MALT for up to two POVs if dependents are included",
    "Travel days are calculated at 1 day per 350 miles (or fraction thereof)",
  ],
};

const TDY_RATES = {
  govNotAvailable: {
    rate: "$0.70/mile",
    conditions: [
      "No Government Owned Vehicle (GOV) available at duty station",
      "Mission requires POC use (equipment transport, multiple stops)",
      "POC use is more cost-effective than rental car",
      "Remote location with no rental car agencies",
    ],
  },
  govAvailable: {
    rate: "$0.21/mile",
    conditions: [
      "GOV was available but you chose to use POC",
      "Driving for personal convenience",
      "Must be authorized in advance",
      "May be limited to constructive cost if airfare was cheaper",
    ],
  },
  localMileage: {
    rules: [
      "Local travel within the TDY area may be reimbursable",
      "Must be for official business, not commuting",
      "Requires specific authorization in orders",
      "Typically limited to $25/day without receipts",
    ],
  },
};

const LOG_REQUIREMENTS = [
  { field: "Date", description: "Date of each trip" },
  { field: "Origin", description: "Starting point (duty station, lodging, etc.)" },
  { field: "Destination", description: "Ending point (meeting location, TDY site)" },
  { field: "Purpose", description: "Official reason for travel" },
  { field: "Miles", description: "DTOD distance (not odometer reading)" },
];

const COMMON_SCENARIOS = [
  { scenario: "PCS CONUS to CONUS", rate: "MALT ($0.21/mile)", notes: "Plus per diem for travel days. Second POV authorized if dependents included." },
  { scenario: "TDY with no GOV available", rate: "$0.70/mile", notes: "Full rate. Document GOV non-availability in DTS remarks." },
  { scenario: "TDY with GOV available, chose POC", rate: "$0.21/mile", notes: "Reduced rate. Must be pre-authorized." },
  { scenario: "Reserve IDT travel", rate: "$0.21/mile", notes: "Per MARADMIN 070/21. One-way distance × 2 for round trip." },
  { scenario: "Local official travel at TDY site", rate: "$0.70/mile", notes: "If authorized. Keep detailed mileage log." },
  { scenario: "POC to airport for TDY", rate: "$0.70/mile", notes: "Round trip to departure airport. Parking reimbursed separately." },
];

const DTS_ENTRY_STEPS = [
  { step: "Select POC as transportation mode", details: "In the 'Per Diem Entitlements' section, choose 'Privately Owned Conveyance' or 'POV'" },
  { step: "Enter origin and destination", details: "Use exact addresses or city/state. DTS will calculate official distance using DTOD." },
  { step: "Indicate GOV availability", details: "Select whether GOV was available. This determines your reimbursement rate." },
  { step: "Add mileage expenses", details: "System auto-calculates based on distance and rate. Verify calculation." },
  { step: "Document in remarks", details: "Explain why POC was used (advantageous to government, no GOV, etc.)" },
  { step: "Attach required documents", details: "Cost comparison (if required), toll receipts, parking receipts over $75" },
];

const POV_VS_RENTAL = [
  { factor: "Distance", povBetter: "Under 400 miles round trip", rentalBetter: "Over 400 miles or high-mileage TDY" },
  { factor: "Duration", povBetter: "Short TDY (1-3 days)", rentalBetter: "Extended TDY (1+ week)" },
  { factor: "Local travel needs", povBetter: "Minimal driving at TDY location", rentalBetter: "Significant local driving required" },
  { factor: "Cost comparison", povBetter: "POC reimbursement > rental + fuel", rentalBetter: "Rental + fuel < POC reimbursement" },
];

const TIPS = [
  { title: "Always Use DTOD", desc: "Never estimate mileage or use personal GPS. DTOD is the only authorized distance source." },
  { title: "Get Pre-Authorization", desc: "POC must be authorized BEFORE travel. Retroactive authorization is difficult to obtain." },
  { title: "Keep a Mileage Log", desc: "Document every official trip with date, locations, purpose, and miles. Required for local travel claims." },
  { title: "Save Toll Receipts", desc: "Tolls are reimbursed separately. Electronic toll records from E-ZPass or SunPass are acceptable." },
  { title: "Document GOV Availability", desc: "Note in DTS remarks whether GOV was available. This determines your rate." },
  { title: "Compare Costs for Long Trips", desc: "For trips over 400 miles, run a cost comparison between POC and rental car." },
];

export default function MileageReimbursementContent({ data }: { data: { references: Ref[] } }) {
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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mileage Reimbursement Overview</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">When you use your Privately Owned Vehicle (POV) for official travel, you can be reimbursed at government mileage rates. The rate you receive depends on the type of travel (PCS vs TDY) and whether a Government Owned Vehicle (GOV) was available.</p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/15">
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Rate Type</th>
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2025 Rate</th>
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When Applied</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">MALT (PCS)</td>
                    <td className="px-3 py-2 font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$0.21/mile</td>
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">Permanent Change of Station moves</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">TDY (No GOV)</td>
                    <td className="px-3 py-2 font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$0.70/mile</td>
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">GOV not available or POC advantageous</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">TDY (GOV Available)</td>
                    <td className="px-3 py-2 font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$0.21/mile</td>
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">GOV available but member chose POC</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Get POC authorization BEFORE traveling. Mileage is calculated using DTOD (Defense Table of Official Distances), not your odometer. Your rate depends on travel type and GOV availability. Keep a mileage log for local travel claims. Tolls and parking are reimbursed separately with receipts.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Pre-Authorize POC</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Use DTOD Distance</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Keep Mileage Log</span>
              </div>
            </div>
          </section>
        )}

        {tab === "rates" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2025 Mileage Rates</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Current POV mileage reimbursement rates effective January 1, 2025. Rates are set by GSA and updated annually.</p>

            <div className="mt-4 space-y-3">
              {CURRENT_RATES.map((rate) => (
                <div key={rate.type} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{rate.type}</h3>
                    <span className="rounded-lg bg-[var(--sa-navy)] px-3 py-1 text-lg font-bold text-[var(--sa-cream)]">{rate.rate}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{rate.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="font-semibold">Rate Selection Note</div>
              <p className="mt-1 text-sm">The rate you receive is determined by authorization, not just what you claim. Always document GOV availability and the reason for POC use in your DTS remarks section.</p>
            </div>
          </section>
        )}

        {tab === "malt" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MALT (PCS Mileage)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{MALT_INFO.definition}</p>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MALT Calculation Example</h3>
              <div className="mt-3 space-y-3">
                {MALT_INFO.calculation.map((calc, idx) => (
                  <div key={calc.step} className="flex gap-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-[var(--sa-cream)]">{idx + 1}</div>
                    <div>
                      <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{calc.step}</div>
                      <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{calc.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key MALT Points</h3>
              <ul className="mt-3 space-y-2">
                {MALT_INFO.keyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sa-red)]"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-black/10 bg-[var(--sa-navy)] p-4 text-[var(--sa-cream)] dark:border-white/15">
              <h3 className="font-bold">Reserve Component IDT Travel</h3>
              <p className="mt-2 text-sm opacity-90">Per MARADMIN 070/21, Reserve Marines may claim mileage reimbursement for IDT (drill weekend) travel at the $0.21/mile rate. Calculate round-trip distance using DTOD. This is separate from and in addition to any IDT travel pay entitlements.</p>
            </div>
          </section>
        )}

        {tab === "tdy" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TDY Mileage Rates</h2>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border-2 border-green-500 bg-green-50 p-4 dark:border-green-400 dark:bg-green-900/20">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-green-800 dark:text-green-300">GOV NOT Available</h3>
                  <span className="rounded-lg bg-green-600 px-3 py-1 font-bold text-white">{TDY_RATES.govNotAvailable.rate}</span>
                </div>
                <ul className="mt-3 space-y-1">
                  {TDY_RATES.govNotAvailable.conditions.map((condition) => (
                    <li key={condition} className="flex items-start gap-2 text-sm text-green-800 dark:text-green-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0"><path d="M9 12l2 2 4-4"/></svg>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-4 dark:border-amber-400 dark:bg-amber-900/20">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300">GOV Available (Chose POC)</h3>
                  <span className="rounded-lg bg-amber-600 px-3 py-1 font-bold text-white">{TDY_RATES.govAvailable.rate}</span>
                </div>
                <ul className="mt-3 space-y-1">
                  {TDY_RATES.govAvailable.conditions.map((condition) => (
                    <li key={condition} className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local Mileage at TDY Site</h3>
              <div className="mt-3 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <ul className="space-y-2">
                  {TDY_RATES.localMileage.rules.map((rule) => (
                    <li key={rule} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"><circle cx="12" cy="12" r="4"/></svg>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mileage Log Requirements</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">For local travel claims, maintain a detailed mileage log with:</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/15">
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Field</th>
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LOG_REQUIREMENTS.map((req) => (
                      <tr key={req.field} className="border-b border-black/5 dark:border-white/10">
                        <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{req.field}</td>
                        <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{req.description}</td>
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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Mileage Scenarios</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Quick reference for determining which rate applies to your situation.</p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/15">
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Scenario</th>
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Rate</th>
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {COMMON_SCENARIOS.map((s) => (
                    <tr key={s.scenario} className="border-b border-black/5 dark:border-white/10">
                      <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{s.scenario}</td>
                      <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{s.rate}</td>
                      <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{s.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POV vs. Rental Car Decision</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Use this guide to determine whether POV or rental car is more appropriate:</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/15">
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Factor</th>
                      <th className="px-3 py-2 font-semibold text-green-700 dark:text-green-400">POV Better When...</th>
                      <th className="px-3 py-2 font-semibold text-blue-700 dark:text-blue-400">Rental Better When...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POV_VS_RENTAL.map((row) => (
                      <tr key={row.factor} className="border-b border-black/5 dark:border-white/10">
                        <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{row.factor}</td>
                        <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{row.povBetter}</td>
                        <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{row.rentalBetter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {tab === "dts" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Entering Mileage in DTS</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Follow these steps to correctly enter POV mileage in your DTS authorization or voucher.</p>

            <div className="mt-4 space-y-3">
              {DTS_ENTRY_STEPS.map((item, idx) => (
                <div key={item.step} className="flex gap-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-sm font-bold text-[var(--sa-cream)]">{idx + 1}</div>
                  <div>
                    <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.step}</div>
                    <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.details}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="font-semibold">DTS Auto-Calculation</div>
              <p className="mt-1 text-sm">DTS automatically calculates mileage reimbursement using DTOD distances. If the calculated distance seems incorrect, verify your origin and destination addresses. You can request a manual distance override with proper justification.</p>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mileage Troubleshooter</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Getting $0.21 instead of $0.70?</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Check if GOV availability was marked correctly in DTS</li>
                  <li>Verify POC was authorized as &quot;advantageous to government&quot;</li>
                  <li>Review your authorization - rate is set at authorization, not voucher</li>
                  <li>Contact your DTS approving official to correct if needed</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Distance calculation seems wrong</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify addresses entered exactly as intended</li>
                  <li>Check DTOD directly at https://dtod.sddc.army.mil/</li>
                  <li>DTS uses point-to-point, may differ from actual route</li>
                  <li>Request manual override with justification if significantly off</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POC not authorized retroactively</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit amended authorization with justification</li>
                  <li>Explain why POC was necessary (emergency, no other option)</li>
                  <li>Provide cost comparison if applicable</li>
                  <li>May be limited to constructive cost of government transportation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reimbursement capped at airfare cost</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>This occurs when POC was &quot;member&apos;s convenience&quot; not advantageous</li>
                  <li>Constructive travel limits apply per JTR</li>
                  <li>Future trips: get &quot;advantageous to government&quot; designation</li>
                  <li>Document cost comparison showing POC saves money</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tips for Success</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {TIPS.map((tip) => (
                  <div key={tip.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{tip.title}</h4>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{tip.desc}</p>
                  </div>
                ))}
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TDY Full Rate</div>
              <div className="text-lg font-bold text-[var(--sa-red)]">$0.70/mile</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">When GOV not available</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MALT / Reduced Rate</div>
              <div className="text-lg font-bold text-[var(--sa-red)]">$0.21/mile</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">PCS or when GOV available</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Distance Tool</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">DTOD (Defense Table of Official Distances)</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCS Travel Days</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">1 day per 350 miles (min 1 day)</div>
            </li>
          </ul>
        </section>

        <QuickLinks references={data.references} />
      </aside>
    </div>
  );
}
