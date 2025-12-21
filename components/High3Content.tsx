"use client";
import { useState } from "react";

export default function High3Content() {
  const [tab, setTab] = useState<"overview" | "eligibility" | "calculation" | "how" | "rules" | "situations" | "problems">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("calculation")} className={`rounded-md px-3 py-2 text-sm ${tab === "calculation" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Calculation</button>
          <button onClick={() => setTab("how")} className={`rounded-md px-3 py-2 text-sm ${tab === "how" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>How It Works</button>
          <button onClick={() => setTab("rules")} className={`rounded-md px-3 py-2 text-sm ${tab === "rules" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Important Rules</button>
          <button onClick={() => setTab("situations")} className={`rounded-md px-3 py-2 text-sm ${tab === "situations" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Special Situations</button>
          <button onClick={() => setTab("problems")} className={`rounded-md px-3 py-2 text-sm ${tab === "problems" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Problems & Solutions</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Legacy High‑3 Retirement System</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Traditional military retirement for Marines who entered service after September 7, 1980 and before January 1, 2018, and did not opt into BRS. Provides a monthly pension for life after 20 years of service.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Official Name</div>
                <div className="mt-1 text-sm">High‑36 Month Average Retirement System</div>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sponsor</div>
                <div className="mt-1 text-sm">M&RA MMSR</div>
              </div>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-zinc-600 dark:text-zinc-400">
                    <th className="py-2 pr-4">Feature</th>
                    <th className="py-2 pr-4">Legacy High‑3</th>
                    <th className="py-2 pr-4">Blended Retirement (BRS)</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 dark:text-zinc-300">
                  <tr><td className="py-2 pr-4">Multiplier</td><td className="py-2 pr-4">2.5%</td><td className="py-2 pr-4">2.0%</td></tr>
                  <tr><td className="py-2 pr-4">Matching</td><td className="py-2 pr-4">None</td><td className="py-2 pr-4">Up to 5% (1% auto + up to 4% match)</td></tr>
                  <tr><td className="py-2 pr-4">Vesting</td><td className="py-2 pr-4">20 years (pension)</td><td className="py-2 pr-4">2 years (TSP) / 20 years (pension)</td></tr>
                  <tr><td className="py-2 pr-4">Continuation Pay</td><td className="py-2 pr-4">None</td><td className="py-2 pr-4">Yes (service policy; USMC ~12 YOS)</td></tr>
                  <tr><td className="py-2 pr-4">Lump Sum</td><td className="py-2 pr-4">No</td><td className="py-2 pr-4">Yes (optional at retirement)</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Qualifies</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Entered Service Dates</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Entered after Sep 7, 1980</li>
                  <li>Entered before Jan 1, 2018</li>
                  <li>Did not opt into BRS during 2018</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Grandfathered Marines</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>12+ years as of Dec 31, 2017: remained in High‑3; could not opt in to BRS</li>
                  <li>Less than 12 years as of Dec 31, 2017: had the option to opt into BRS during 2018; if not, remain in High‑3</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Not Eligible</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Entered before Sep 8, 1980 (Final Pay system)</li>
                <li>Entered on/after Jan 1, 2018 (automatically BRS)</li>
                <li>Opted into BRS during 2018</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "calculation" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How Much You Get</h2>
            <div className="mt-3 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Formula</div>
                <div className="mt-1 font-medium">Years of Service × 2.5% × High‑3 Average Basic Pay</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">High‑3 Average Base Pay</div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Average of highest 36 consecutive months of basic pay</li>
                  <li>Usually last 3 years</li>
                  <li>Uses the actual dollars paid during those months; not simply your final rate × 36</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">2.5% Multiplier</div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Each year of service = 2.5%</li>
                  <li>20 years = 50%</li>
                  <li>30 years = 75%</li>
                  <li>More than 40 years can exceed 100%</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Example</div>
                <div className="mt-2 text-xs">If you receive a raise 12 months before retirement, the first 24 months in the High‑3 average are at the prior rate and the last 12 months at the new rate.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Examples</div>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>20 years × 2.5% = 50%; High‑3 $5,000 → $2,500/month</li>
                  <li>25 years × 2.5% = 62.5%; High‑3 $5,500 → $3,437.50/month</li>
                  <li>30 years × 2.5% = 75%; High‑3 $6,000 → $4,500/month</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "how" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How High‑3 Works</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: Serve 20 Years</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Minimum 20 years of service; no pension before 20 years</li>
                  <li>Officers: 10 years must be as a commissioned officer</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: Calculate High‑3 Average</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Identify highest 36 consecutive months of basic pay</li>
                  <li>Add them and divide by 36 to get High‑3 average</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: Years of Service Multiplier</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Count years and months from PEBD; convert months ÷ 12</li>
                  <li>Multiply total years by 2.5% to get the percentage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 4: Monthly Pension</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>High‑3 average × multiplier = monthly pension</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 5: Receive Payments</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Start first day of month after retirement; monthly for life</li>
                  <li>Annual COLA adjustments based on CPI</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "rules" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Rules</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">20‑Year Requirement</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Must serve 20 years; no partial pension before 20</li>
                  <li>High‑3 is cliff‑vested</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">2.5% Per Year</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>20 years = 50%; 30 years = 75%; 40 years = 100%</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Highest 36 Months</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Average of best 36 consecutive months; usually last 3 years</li>
                  <li>Based on basic pay only</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Only Basic Pay Counts</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>BAH, BAS, special pays, bonuses do not count</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Reserve Component</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Based on retirement points</li>
                  <li>Formula: (Points ÷ 360) × 2.5% × High‑3</li>
                  <li>Payments usually start at age 60 (earlier with qualifying service)</li>
                  <li>High‑3 is based on pay tables in effect when retired pay begins, not when drilling stops</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Time‑In‑Grade (TIG) to Retire At Grade</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Officers O‑1–O‑4: 6 months in grade</li>
                  <li>Officers O‑5 and above: 3 years in grade</li>
                  <li>Enlisted E‑7 to E‑9: generally 2 years in grade</li>
                  <li>If a LtCol (O‑5) retires with only 2 years TIG, retired grade is Major (O‑4) unless waived</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Tax & SBP</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Pension is taxable income; state tax varies</li>
                  <li>No Social Security tax on retired pay</li>
                  <li>SBP optional; premiums deducted from pension</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "situations" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Extraordinary Heroism Pay</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Enlisted only; FMCR or disability retirement</li>
                  <li>Credited by Secretary of Navy; up to +10%</li>
                  <li>Cannot exceed 75% of base pay</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Disability Retirement</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>May use disability percentage instead of 2.5% formula, whichever is higher</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fractional Months</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Every full month counts; 29 days or less do not</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reserve Points On Active Duty</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Inactive duty points may add to multiplier</li>
                  <li>Drill, correspondence courses, membership</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reduced In Grade</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Must serve satisfactorily in grade</li>
                  <li>May retire in lower grade based on rules and time‑in‑grade</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Opted Into BRS During 2018</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>No longer under High‑3; now under BRS with 2.0% multiplier</li>
                  <li>TSP matching applies; cannot switch back to High‑3</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "problems" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Not sure if under High‑3 or BRS</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Check MOL/MCTFS or myPay</li>
                  <li>Entered after Sep 7, 1980 and before Jan 1, 2018: High‑3 unless opted into BRS</li>
                  <li>12+ years as of Dec 31, 2017: High‑3</li>
                  <li>Entered on/after Jan 1, 2018: BRS</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Find High‑3 Average</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Look at last 36 months of basic pay</li>
                  <li>Add and divide by 36; MCTFS HI36 screen calculates automatically</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Do BAH/BAS count?</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">No. Only basic pay counts.</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">19 years — partial retirement?</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">No. Must complete 20 years; cliff‑vested.</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When do payments start?</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">First day of month after retirement; officers retire the 1st of month; payments begin next month.</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">18 Active + 2 Reserve — immediate pension?</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Active‑duty retirement requires 20 years of active service. With 18 active and 2 reserve, you generally transfer to the Reserve and start retired pay at age 60 (earlier with qualifying service).</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Will retirement increase?</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Yes. Annual COLA based on CPI, typically each year.</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contribute to TSP?</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Yes, voluntarily. No government matching under High‑3.</div>
              </div>
            </div>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://comptroller.defense.gov/FMR/Volume_7b.aspx" target="_blank" rel="noopener noreferrer">DoD FMR Vol 7B (Retired Pay)</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title10-section1406" target="_blank" rel="noopener noreferrer">10 U.S.C. § 1406 (High‑36)</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title10-section1370" target="_blank" rel="noopener noreferrer">10 U.S.C. § 1370 (Retired grade TIG)</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.manpower.usmc.mil/webcenter/portal/MMSR/pages_home" target="_blank" rel="noopener noreferrer">MCO 1900.16 (MARCORSEPMAN)</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://comptroller.defense.gov/FMR/Volume_7b.aspx" target="_blank" rel="noopener noreferrer">DoD FMR Vol 7B, Ch 1 & Ch 3</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
