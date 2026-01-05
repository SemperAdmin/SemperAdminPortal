"use client";
import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; desc: string; url: string; type: string; isQuickLink?: boolean };
type Tab = "overview" | "rates" | "mie" | "longterm" | "important" | "troubleshooter" | "references";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "rates", label: "Rates" },
  { key: "mie", label: "M&IE" },
  { key: "longterm", label: "Long-Term" },
  { key: "important", label: "Important" },
  { key: "troubleshooter", label: "Troubleshooter" },
  { key: "references", label: "References" },
];

const MIE_BREAKDOWNS = [
  { rate: 68, breakfast: 16, lunch: 19, dinner: 28, incidentals: 5, label: "Standard" },
  { rate: 74, breakfast: 18, lunch: 20, dinner: 31, incidentals: 5, label: "$74" },
  { rate: 80, breakfast: 20, lunch: 22, dinner: 33, incidentals: 5, label: "$80" },
  { rate: 86, breakfast: 22, lunch: 23, dinner: 36, incidentals: 5, label: "$86" },
  { rate: 92, breakfast: 23, lunch: 26, dinner: 38, incidentals: 5, label: "$92" },
];

const LOOKUP_STEPS = [
  { title: "Go to GSA Per Diem Lookup Tool", desc: "Visit www.gsa.gov/perdiem for CONUS rates." },
  { title: "Select the Fiscal Year", desc: "Choose FY 2025 (Oct 1, 2024 - Sep 30, 2025)." },
  { title: "Enter Your TDY Location", desc: "Enter the city, state, or ZIP code of your destination." },
  { title: "View Lodging and M&IE Rates", desc: "Review the maximum lodging rate and daily M&IE for that location." },
];

export default function PerDiemRatesContent({ data }: { data: { references: Ref[] } }) {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-md px-3 py-2 text-sm ${tab === t.key ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Is Per Diem?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per diem is a daily allowance to cover lodging, meals, and incidental expenses while you travel on official orders. The government sets these rates based on location. You receive reimbursement up to the per diem rate for your TDY location.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">Lodging</h3>
                <p className="mt-2 text-sm text-green-700 dark:text-zinc-300">Actual cost of your room (plus tax), up to the maximum locality rate.</p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-blue-800 dark:text-blue-400">M&IE (Meals & Incidentals)</h3>
                <p className="mt-2 text-sm text-blue-700 dark:text-zinc-300">Fixed daily rate for food and incidentals.</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Sets Per Diem Rates?</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>GSA</strong> - Sets CONUS rates (Continental United States)</li>
                <li><strong>DTMO</strong> - Sets non-foreign OCONUS rates (Alaska, Hawaii, U.S. Territories)</li>
                <li><strong>Department of State</strong> - Sets foreign OCONUS rates (international)</li>
              </ul>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Lodging is reimbursed at actual cost up to the locality rate. M&IE is a flat rate based on location. First and last day of travel receive 75% M&IE. Look up rates at GSA.gov for CONUS or DTMO for OCONUS.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Locality-Based Rates</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">75% First/Last Day</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Not Taxable</span>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">FY 2025 Fiscal Year</div>
              <div className="mt-1 text-xs">October 1, 2024 through September 30, 2025</div>
            </div>
          </section>
        )}

        {tab === "rates" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard CONUS Rates (FY 2025)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">For locations without a specific locality rate, the standard CONUS per diem applies:</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Lodging</div>
                <div className="mt-1 text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$110</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Per night</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">M&IE</div>
                <div className="mt-1 text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$68</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Per day</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Total</div>
                <div className="mt-1 text-2xl font-bold text-[var(--sa-red)]">$178</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Per day</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non-Standard Area (NSA) Rates</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Many military-heavy locations have higher per diem rates. Use the GSA Per Diem Lookup Tool to find the exact rate for your destination.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/60 px-3 py-1 dark:border-white/15 dark:bg-white/10">San Diego, CA</span>
                <span className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/60 px-3 py-1 dark:border-white/15 dark:bg-white/10">Washington, DC</span>
                <span className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/60 px-3 py-1 dark:border-white/15 dark:bg-white/10">Jacksonville, NC</span>
                <span className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/60 px-3 py-1 dark:border-white/15 dark:bg-white/10">Virginia Beach, VA</span>
                <span className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/60 px-3 py-1 dark:border-white/15 dark:bg-white/10">Honolulu, HI</span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Look Up Per Diem Rates</h3>
              <div className="mt-3 space-y-3">
                {LOOKUP_STEPS.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">{index + 1}</div>
                    <div>
                      <p className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{step.title}</p>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">For OCONUS locations, use the DTMO Per Diem Rate Lookup at www.travel.dod.mil</p>
            </div>
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-green-800 dark:text-green-400">POV Mileage Rate (CY 2026)</h3>
              <div className="mt-2 text-2xl font-bold text-green-800 dark:text-[var(--sa-cream)]">$0.725 <span className="text-sm font-normal">per mile</span></div>
              <p className="mt-1 text-xs text-green-700 dark:text-zinc-300">TDY rate effective January 1, 2026. MALT rate: $0.205/mile.</p>
            </div>
          </section>
        )}

        {tab === "mie" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">M&IE Breakdown (CONUS)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">M&IE is broken down into meal categories. If meals are provided (mess hall, conference, etc.), you must deduct that meal from your M&IE.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/15">
                    <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">M&IE Rate</th>
                    <th className="py-2 px-2 text-center font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Breakfast</th>
                    <th className="py-2 px-2 text-center font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lunch</th>
                    <th className="py-2 px-2 text-center font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dinner</th>
                    <th className="py-2 pl-2 text-center font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Incidentals</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 dark:text-zinc-300">
                  {MIE_BREAKDOWNS.map((mie) => (
                    <tr key={mie.rate} className="border-b border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4 font-semibold">${mie.rate} {mie.label === "Standard" && <span className="text-xs font-normal">(Standard)</span>}</td>
                      <td className="py-2 px-2 text-center">${mie.breakfast}</td>
                      <td className="py-2 px-2 text-center">${mie.lunch}</td>
                      <td className="py-2 px-2 text-center">${mie.dinner}</td>
                      <td className="py-2 pl-2 text-center">${mie.incidentals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-amber-800 dark:text-amber-400">First and Last Day of Travel</h3>
              <p className="mt-2 text-sm text-amber-800 dark:text-zinc-300">You receive <strong>75%</strong> of the applicable M&IE rate on your departure day and return day. This rule applies regardless of what time you depart or return.</p>
              <div className="mt-3 rounded-lg bg-white/60 p-3 text-sm dark:bg-black/20">
                <p className="font-medium text-amber-900 dark:text-[var(--sa-cream)]">Example (Standard M&IE $68):</p>
                <ul className="mt-1 text-amber-800 dark:text-zinc-300">
                  <li>Full day: $68</li>
                  <li>First/Last day (75%): $51</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Incidentals Cover</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">The incidental expense portion ($5 at standard rate) covers tips to hotel staff, porters, and other service charges. Laundry, dry cleaning, and tips to food servers are part of the M&IE meal rates, not incidentals.</p>
            </div>
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-blue-800 dark:text-blue-400">Meals Provided</h3>
              <p className="mt-2 text-sm text-blue-800 dark:text-zinc-300">If a meal is provided at no cost (conference registration, government mess, etc.), you must deduct that meal from your M&IE claim. <strong>Complimentary hotel breakfast or airline meals do not require deduction.</strong></p>
            </div>
          </section>
        )}

        {tab === "longterm" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Long-Term TDY Rates</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per diem rates are reduced for extended TDY assignments:</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-green-800 dark:text-green-400">Days 1-30</h3>
                  <span className="rounded-full bg-green-800 px-3 py-1 text-sm font-bold text-white">100%</span>
                </div>
                <p className="mt-2 text-sm text-green-700 dark:text-zinc-300">Full per diem rate</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-amber-800 dark:text-amber-400">Days 31-180</h3>
                  <span className="rounded-full bg-amber-700 px-3 py-1 text-sm font-bold text-white">~75%</span>
                </div>
                <p className="mt-2 text-sm text-amber-700 dark:text-zinc-300">Flat rate per diem, typically 75% of locality rate</p>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-red-800 dark:text-red-400">Days 181+</h3>
                  <span className="rounded-full bg-red-700 px-3 py-1 text-sm font-bold text-white">~55%</span>
                </div>
                <p className="mt-2 text-sm text-red-700 dark:text-zinc-300">Flat rate per diem, typically 55% of locality rate</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">Your orders will specify the applicable reduced rate for long-term TDY.</p>
            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS Rates</h3>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non-Foreign OCONUS</h4>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Alaska, Hawaii, U.S. Territories. DTMO sets these rates.</p>
                </div>
                <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Foreign OCONUS</h4>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">International locations. Department of State sets rates monthly based on currency and local costs.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "important" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Things to Know</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lodging Reimbursement</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">You are reimbursed for actual lodging costs up to the locality rate. If your hotel costs less than the maximum, you receive the actual cost. If your hotel costs more, you pay the difference out of pocket.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Government Quarters Directed</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If your orders direct government quarters and they are available, you must use them. You are reimbursed for the actual cost of the government lodging, not the locality rate.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Government Mess Directed</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If your orders direct government messing and it is available, you must use it. Your M&IE is reduced to the Proportional Meal Rate (PMR) or Government Meal Rate (GMR).</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
                <h3 className="font-bold">Certificate of Non-Availability (CNA)</h3>
                <p className="mt-2 text-sm">If government quarters are directed but not available, obtain a CNA from the billeting office. The CNA authorizes you to use commercial lodging at the full locality rate.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Taxes</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Lodging taxes are reimbursable in addition to the per diem rate. Present your government travel tax exemption form to avoid state taxes where applicable.</p>
              </div>
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">Per Diem is Not Taxable</h3>
                <p className="mt-2 text-sm text-green-700 dark:text-zinc-300">Per diem reimbursement for official travel is not taxable income.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Per diem rate is too low for the TDY location</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Your command can request Actual Expense Allowance (AEA) through your Authorizing Official. AEA allows reimbursement up to 300% of the locality rate with proper justification.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hotel costs more than the per diem lodging rate</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> You pay the difference out of pocket. Search for DoD Preferred Hotels or government lodging to stay within your rate.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Government quarters directed but none available</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Obtain a Certificate of Non-Availability (CNA) from the billeting office before checking into a commercial hotel.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Meals provided at a conference but unsure how to claim</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Deduct the meals provided from your M&IE. Use the M&IE breakdown table to determine the deduction amount.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TDY location is not listed in the per diem lookup</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> If no specific rate exists, the standard CONUS rate applies ($110 lodging, $68 M&IE).</p>
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
                    {ref.type === "Policy" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 3v6h6"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{ref.title}</h4>
                      <span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">{ref.type}</span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{ref.desc}</p>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-300 transition group-hover:text-[var(--sa-red)]"><path d="M18 3h3v3M21 3l-9 9"/><path d="M21 21H3V3"/></svg>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      <aside className="space-y-6 lg:mt-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Contacts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DTS Help Desk</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">1-888-HELP1GO (1-888-435-7146)</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DTMO Travel Assistance</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">travel.dod.mil/Support</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local Disbursing Office</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Contact your installation finance</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">FY 2025 Standard Rates</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-red-700 dark:text-[var(--sa-cream)]">$110 Lodging</div>
              <div className="text-xs text-red-600 dark:text-zinc-300">Standard CONUS rate</div>
            </li>
            <li className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-amber-700 dark:text-[var(--sa-cream)]">$68 M&IE</div>
              <div className="text-xs text-amber-600 dark:text-zinc-300">Standard daily rate</div>
            </li>
            <li className="rounded-md border border-green-200 bg-green-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-green-700 dark:text-[var(--sa-cream)]">$0.725/mile</div>
              <div className="text-xs text-green-600 dark:text-zinc-300">POV mileage rate (TDY)</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">75%</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">First/last day M&IE</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CONUS Lookup</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">gsa.gov/perdiem</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS Lookup</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">travel.dod.mil</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Incidentals</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">$5/day (no receipts)</div>
            </li>
          </ul>
        </section>

        <QuickLinks references={data.references} />
      </aside>
    </div>
  );
}
