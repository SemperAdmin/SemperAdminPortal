"use client";
import { useState } from "react";

export default function TSPContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "eligibility"
    | "contributions"
    | "tax"
    | "investments"
    | "withdrawals"
    | "resources"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility & Enrollment</button>
          <button onClick={() => setTab("contributions")} className={`rounded-md px-3 py-2 text-sm ${tab === "contributions" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Contribution Sources</button>
          <button onClick={() => setTab("tax")} className={`rounded-md px-3 py-2 text-sm ${tab === "tax" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Tax Options</button>
          <button onClick={() => setTab("investments")} className={`rounded-md px-3 py-2 text-sm ${tab === "investments" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Investment Options</button>
          <button onClick={() => setTab("withdrawals")} className={`rounded-md px-3 py-2 text-sm ${tab === "withdrawals" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Withdrawals & Loans</button>
          <button onClick={() => setTab("resources")} className={`rounded-md px-3 py-2 text-sm ${tab === "resources" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Contact & Resources</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Thrift Savings Plan (TSP)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">The TSP is a Federal Government‑sponsored defined contribution retirement plan. Similar to a 401(k), it lets uniformed service members and federal employees save part of their income for long‑term retirement security.</p>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility & Enrollment</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Can Participate</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Federal employees under FERS or CSRS</li>
                  <li>Members of the uniformed services (BRS and non‑BRS)</li>
                  <li>Certain other civilian categories</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Enrollment & Vesting</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Automatic enrollment at 5% if you began/rejoined service on/after Oct 1, 2020</li>
                  <li>Always 100% vested in your own contributions</li>
                  <li>Agency/Service Automatic 1% typically vests after 2 years</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "contributions" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contribution Sources</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Member Contributions</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Deducted from basic pay</li>
                  <li>Uniformed members may contribute 100% of incentive/special/bonus pay if contributing at least 1% from basic pay</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Agency/Service Contributions</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Available for FERS and BRS participants</li>
                  <li>1% automatic plus up to 4% matching (total 5% when you contribute 5%)</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "tax" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tax Treatment Options</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Traditional (Pre‑tax)</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Reduces current taxable income</li>
                  <li>Taxes due on contributions and earnings at withdrawal</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Roth (After‑tax)</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contributions taxed now; withdrawals of contributions are tax‑free</li>
                  <li>Earnings tax‑free if 5‑year rule met and age ≥ 59½</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Combat Zone Tax Exclusion</div>
              <div className="mt-1 text-xs">TSP contributions from tax‑exempt combat zone pay are also tax‑exempt.</div>
            </div>
          </section>
        )}

        {tab === "investments" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investment Options</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lifecycle (L) Funds</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Target‑date funds that automatically adjust your mix of G, F, C, S, and I over time to become more conservative as you approach your planned retirement date.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Individual Funds</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>G Fund: Government securities; principal preservation</li>
                  <li>F Fund: Bonds (government, corporate, mortgage‑backed)</li>
                  <li>C Fund: U.S. large/medium stocks (S&P 500)</li>
                  <li>S Fund: U.S. small/mid stocks (not in C Fund)</li>
                  <li>I Fund: International stocks (developed markets)</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "withdrawals" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Withdrawals & Loans</h2>
            <div className="mt-3 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Early Withdrawals</div>
                <div className="mt-1">May trigger a 10% penalty tax in addition to regular income tax.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Loans</div>
                <div className="mt-1">Borrow from your own contributions and earnings while active; repaid with interest (G Fund rate) via payroll deduction.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">In‑Service Withdrawals</div>
                <div className="mt-1">Available at age 59½ or for certified financial hardships.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Post‑Separation Options</div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Installment payments</li>
                  <li>Single lump‑sum withdrawal</li>
                  <li>Purchase a life annuity</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "resources" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contact & Resources</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Official Website: <a className="text-[var(--sa-red)] hover:underline" href="https://www.tsp.gov/" target="_blank" rel="noopener noreferrer">tsp.gov</a></li>
              <li>ThriftLine: <a className="text-[var(--sa-red)] hover:underline" href="tel:+18779683778">1‑877‑968‑3778</a></li>
              <li>Mailing: ThriftLine Service Center, C/O Broadridge Processing, PO Box 1600, Newark, NJ 07101‑1600</li>
            </ul>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.tsp.gov/" target="_blank" rel="noopener noreferrer">Official TSP Website</a></li>
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.tsp.gov/" target="_blank" rel="noopener noreferrer">tsp.gov</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="tel:+18779683778">ThriftLine: 1‑877‑968‑3778</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

