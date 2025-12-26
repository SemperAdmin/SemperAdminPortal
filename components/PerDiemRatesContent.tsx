"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };

export default function PerDiemRatesContent({ data }: { data: { references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "rates" | "lodging" | "mie" | "calculations" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("rates")} className={`rounded-md px-3 py-2 text-sm ${tab === "rates" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Rate Types</button>
          <button onClick={() => setTab("lodging")} className={`rounded-md px-3 py-2 text-sm ${tab === "lodging" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Lodging</button>
          <button onClick={() => setTab("mie")} className={`rounded-md px-3 py-2 text-sm ${tab === "mie" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>M&IE</button>
          <button onClick={() => setTab("calculations")} className={`rounded-md px-3 py-2 text-sm ${tab === "calculations" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Calculations</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Is Per Diem?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per diem is a daily allowance to cover lodging, meals, and incidental expenses while on official travel. Rates vary by location and are set by the General Services Administration (GSA) for CONUS and the Department of Defense for OCONUS.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Component</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lodging</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Actual cost up to limit</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Component</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">M&IE</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Meals & Incidentals</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Standard</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$110 / $79</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">CONUS standard lodging/M&IE</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Lodging is reimbursed at actual cost up to the locality rate. M&IE is a flat rate based on location. Travel and departure days receive 75% M&IE. Look up rates at GSA.gov for CONUS or DTMO for OCONUS.</p>
              <div className="mt-4 flex gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Locality-Based</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">75% First/Last Day</span>
              </div>
            </div>
          </section>
        )}

        {tab === "rates" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Per Diem Rates</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CONUS Standard</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Default rate for locations without a specific rate. FY2024 standard: $110 lodging / $79 M&IE. Most common rate outside major cities.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CONUS Non-Standard</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Higher rates for high-cost areas. Examples: Washington DC, San Francisco, New York. Rates can exceed $300 for lodging in some locations.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS Per Diem</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Set by DTMO for overseas locations. Includes currency considerations. Rates vary significantly by country and city.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Incidental Only</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Used when lodging and meals are provided. Only the incidental portion of M&IE is paid. Typically $5 per day.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "lodging" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lodging Per Diem</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reimbursement Method</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Actual expense reimbursement</li>
                  <li>Up to the locality maximum rate</li>
                  <li>Receipts required</li>
                  <li>Taxes included in reimbursement</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When Lodging is Reduced</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Government quarters available and directed</li>
                  <li>Lodging provided by conference/school</li>
                  <li>Extended TAD flat-rate locations</li>
                  <li>Sharing room (split cost)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Actual Expense Authorization</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">When lodging exceeds the locality rate due to special circumstances (conference hotel, no availability), Actual Expense (AE) may be authorized. Requires pre-approval and documentation.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "mie" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Meals & Incidental Expenses (M&IE)</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">M&IE Breakdown (Standard Rate Example)</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Breakfast: $18</li>
                  <li>Lunch: $20</li>
                  <li>Dinner: $36</li>
                  <li>Incidentals: $5</li>
                  <li>Total: $79</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Travel Day M&IE</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">First and last day of travel receive 75% of M&IE. Example: 75% of $79 = $59.25. This applies regardless of actual travel time.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Meal Deductions</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">When meals are provided (conference, government mess), the meal value is deducted from M&IE. Free hotel breakfast = breakfast deduction.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Incidentals Include</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Tips to baggage handlers</li>
                  <li>Hotel staff tips</li>
                  <li>Laundry/dry cleaning</li>
                  <li>No receipts required</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "calculations" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Per Diem Calculations</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Example: 3-Day Trip to DC</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <p className="font-medium">Assumptions: Lodging rate $258, M&IE $79, Lodging cost $220/night</p>
                  <ul className="mt-2 space-y-1">
                    <li>Day 1 (travel): $220 lodging + $59.25 M&IE = $279.25</li>
                    <li>Day 2 (full day): $220 lodging + $79 M&IE = $299</li>
                    <li>Day 3 (travel): $0 lodging + $59.25 M&IE = $59.25</li>
                    <li className="font-semibold">Total: $637.50</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Proportional M&IE</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">When traveling through multiple locations in one day, M&IE is based on where you spend the night. If no overnight, use the location where most time is spent.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Extended TAD (30+ Days)</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">After 30 days at one location, lodging may be reduced by 25% and M&IE by 25%. Applies to locations in the Per Diem Flat Rate Plus areas.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lodging exceeds per diem rate</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Request actual expense authorization before travel</li>
                  <li>Document reason (conference hotel, no availability)</li>
                  <li>Without approval, only get up to locality rate</li>
                  <li>Consider alternative lodging if possible</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Wrong per diem rate applied</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify the correct location in DTS</li>
                  <li>Check if seasonal rate applies</li>
                  <li>Look up rate at GSA.gov or DTMO</li>
                  <li>Request correction from ODTA</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">M&IE reduced unexpectedly</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Check if meals were provided</li>
                  <li>Verify travel day 75% applied correctly</li>
                  <li>Review if extended TAD reduction applies</li>
                  <li>Government mess availability may reduce rate</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Staying with friends/family</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>No lodging reimbursement</li>
                  <li>Still receive full M&IE</li>
                  <li>Document in DTS as &quot;staying with friends/family&quot;</li>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CONUS Rate Lookup</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">gsa.gov/perdiem</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS Rate Lookup</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">travel.dod.mil</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Travel Day M&IE</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">75% of locality rate</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard M&IE</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">$79/day (FY2024)</div>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
