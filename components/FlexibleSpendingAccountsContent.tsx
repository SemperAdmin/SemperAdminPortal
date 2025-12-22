"use client";
import { useState } from "react";

export default function FlexibleSpendingAccountsContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "hcfsa"
    | "dcfsa"
    | "eligibility"
    | "enrollment"
    | "dates"
    | "videos"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("hcfsa")} className={`rounded-md px-3 py-2 text-sm ${tab === "hcfsa" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Health Care FSA</button>
          <button onClick={() => setTab("dcfsa")} className={`rounded-md px-3 py-2 text-sm ${tab === "dcfsa" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Dependent Care FSA</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("enrollment")} className={`rounded-md px-3 py-2 text-sm ${tab === "enrollment" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Enrollment</button>
          <button onClick={() => setTab("dates")} className={`rounded-md px-3 py-2 text-sm ${tab === "dates" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Critical Dates</button>
          <button onClick={() => setTab("videos")} className={`rounded-md px-3 py-2 text-sm ${tab === "videos" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Videos</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Flexible Spending Accounts (FSA)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">FSAs let you pay for eligible health and dependent care costs with pre‑tax dollars, lowering your taxable income. The DoD has expanded availability, allowing Service members to save significantly on federal taxes for essential expenses.</p>
          </section>
        )}

        {tab === "hcfsa" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Health Care FSA (HCFSA)</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contribution Limits</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>2025: Up to $3,300 per individual</li>
                  <li>2026: Increases to $3,400</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Availability & Carryover</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Full annual election available on January 1</li>
                  <li>Carry over up to $660 in 2025 or $680 in 2026 (re‑enrollment required)</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
              <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligible Expenses</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Medical, dental, and vision out‑of‑pocket costs</li>
                <li>Orthodontia, contact lenses, acupuncture, chiropractic care</li>
                <li>OTC items such as bandages and pregnancy tests</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "dcfsa" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dependent Care FSA (DCFSA)</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contribution Limits</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>2025: Up to $5,000 per household</li>
                  <li>2026: Increases to $7,500 per household</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fund Access & Rules</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Funds available as deducted from pay</li>
                  <li>Use‑It‑or‑Lose‑It (no carryover); Grace Period until March 15 of the following year</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
              <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligible Dependents</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Children under 13</li>
                <li>Dependents incapable of self‑care</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Is Eligible (2025)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Regular (Active) Component members</li>
              <li>Active Guard Reserve (AGR) members (Title 10 or Title 32)</li>
              <li>U.S. Coast Guard Reserve on active duty for 180+ days</li>
              <li>DoD Civilians</li>
            </ul>
          </section>
        )}

        {tab === "enrollment" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Enroll</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Platform</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Enrollment is managed through FSAFEDS.gov.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                  <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Annual Open Season</div>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Typically mid‑November through mid‑December (e.g., Nov 10 – Dec 8, 2025, for the 2026 plan year).</p>
                </div>
                <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                  <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Qualifying Life Events (QLE)</div>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Enroll or change elections outside Open Season for events like PCS, marriage, or birth/adoption.</p>
                </div>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Enrollment (Historical)</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">A first‑time special enrollment window occurred in March 2025 for eligible members to begin HCFSA.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "dates" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Critical Dates</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dec 31</div>
                <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Last day to incur HCFSA expenses for the plan year</div>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mar 15</div>
                <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Last day to incur DCFSA expenses (Grace Period)</div>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Apr 30</div>
                <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Final deadline to submit claims for the previous plan year</div>
              </div>
            </div>
          </section>
        )}

        {tab === "videos" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Semper Admin Master Class: Military FSAs</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>How to Maximize Your 2025 Military FSA — Enrollment window tips and saving strategies.</li>
              <li>Military Health Care FSA vs. Dependent Care FSA — Fund availability and rule differences.</li>
            </ul>
            <div className="mt-3 text-sm">
              <a href="/videos" className="text-[var(--sa-red)] hover:underline">Explore more videos</a>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.fsafeds.gov/" target="_blank" rel="noopener noreferrer">FSAFEDS.gov</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.fsafeds.com/" target="_blank" rel="noopener noreferrer">FSAFEDS.com</a></li>
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.fsafeds.gov/" target="_blank" rel="noopener noreferrer">FSAFEDS.gov</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.fsafeds.com/" target="_blank" rel="noopener noreferrer">FSAFEDS.com</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

