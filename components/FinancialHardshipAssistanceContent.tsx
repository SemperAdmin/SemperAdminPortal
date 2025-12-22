"use client";
import { useState } from "react";

export default function FinancialHardshipAssistanceContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "relief"
    | "protections"
    | "nmcrs"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("relief")} className={`rounded-md px-3 py-2 text-sm ${tab === "relief" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Relief Organizations</button>
          <button onClick={() => setTab("protections")} className={`rounded-md px-3 py-2 text-sm ${tab === "protections" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Legal Protections</button>
          <button onClick={() => setTab("nmcrs")} className={`rounded-md px-3 py-2 text-sm ${tab === "nmcrs" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>NMCRS Programs</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Financial Hardship Assistance</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">When unexpected emergencies strike, Service members and families can access interest-free loans, grants, and legal protections that preserve readiness and stability.</p>
          </section>
        )}

        {tab === "relief" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Relief Organizations</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Navy-Marine Corps Relief Society (NMCRS)</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Interest-free loans and grants for immediate needs</li>
                  <li>Eligible services include rent, food, car repairs, pay issues, and medical/dental costs</li>
                  <li>Emergency travel assistance for serious illness or death in the immediate family</li>
                  <li>Disaster relief for evacuations and catastrophic events</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Army Emergency Relief (AER)</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Emergency financial help for Soldiers via interest-free loans and grants.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Air Force Aid Society (AFAS)</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Emergency assistance for Airmen and Guardians with interest-free loans and grants.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">American Red Cross Liaison</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>24/7 emergency liaison when a relief office is closed or off-installation</li>
                  <li>Phone: <a className="text-[var(--sa-red)] hover:underline" href="tel:+18772727337">1‑877‑272‑7337</a></li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "protections" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Legal & Financial Protections</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Servicemembers Civil Relief Act (SCRA)</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>6% interest rate cap on pre‑service debts</li>
                  <li>Foreclosure and eviction protections require court orders during active duty</li>
                  <li>Terminate housing or vehicle leases due to PCS orders or deployment</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Lending Act (MLA)</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Caps consumer credit costs at 36% MAPR for active duty and DEERS dependents</li>
                  <li>Applies to credit cards, installment loans, payday, auto title loans, and more</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Due Process Checklist</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Written notice explaining the debt amount, basis, rights, and deadlines</li>
                  <li>30‑day window to request a hearing or informal review before salary offset</li>
                  <li>Salary offset generally limited to 15% of disposable pay without written consent to a higher amount</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "nmcrs" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NMCRS: Financial Assistance and Services</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Emergency Financial Assistance</div>
                <div className="mt-2 grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Eligible Expenses</div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                      <li>Rent and essential utilities</li>
                      <li>Vehicle repairs required for daily transportation</li>
                      <li>Emergency food and everyday living expenses between paychecks</li>
                      <li>Medical and dental expenses not covered by TRICARE</li>
                      <li>Personal or small‑scale catastrophic events</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Exclusions</div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                      <li>Non‑essentials, legal fees, fines</li>
                      <li>Purchase of a new home or vehicle</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Specialized Support Programs</div>
                <div className="mt-2 grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Emergency Travel</div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                      <li>Expedited interest‑free loans for approved emergency leave</li>
                      <li>No appointment required</li>
                      <li>Present Military ID and approved emergency leave papers</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Visiting Nurses</div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                      <li>Maternal/Infant education and support</li>
                      <li>Chronic disease education</li>
                      <li>Wellness referral; not emergency or bedside care</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Budget for Baby®</div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                      <li>Free workshop for expectant parents</li>
                      <li>Financial planning guidance and savings tips</li>
                      <li>Typical bonus items such as a blanket and gift card</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Thrift Shops & Education Assistance</div>
                <div className="mt-2 grid gap-4 sm:grid-cols-2">
                  <div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                      <li>Thrift shops on most bases with discounted essentials</li>
                      <li>Uniform sales for eligible patrons</li>
                      <li>Valid DoD or Military ID required</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                      <li>Scholarships: needs‑based grants typically $500–$3,000 per year</li>
                      <li>Interest‑free education loans up to $4,000</li>
                      <li>Applications for AY 2026–2027 usually open mid‑Feb to mid‑Apr</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility & Access</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Active Duty or Retired Sailor or Marine</li>
                  <li>Eligible family member with valid military ID</li>
                  <li>Reservist on extended active duty for 30+ days</li>
                  <li>Surviving spouse of an eligible member</li>
                  <li>If local office is closed, contact the American Red Cross at <a className="text-[var(--sa-red)] hover:underline" href="tel:+18772727337">1‑877‑272‑7337</a></li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.nmcrs.org/" target="_blank" rel="noopener noreferrer">Navy‑Marine Corps Relief Society</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.armyemergencyrelief.org/" target="_blank" rel="noopener noreferrer">Army Emergency Relief</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://afas.org/" target="_blank" rel="noopener noreferrer">Air Force Aid Society</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.redcross.org/get-help/military-families.html" target="_blank" rel="noopener noreferrer">American Red Cross: Military Families</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.justice.gov/servicemembers/servicemembers-civil-relief-act-scra" target="_blank" rel="noopener noreferrer">Servicemembers Civil Relief Act (SCRA)</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.consumerfinance.gov/consumer-tools/educator-tools/servicemembers/military-lending-act/" target="_blank" rel="noopener noreferrer">Military Lending Act (MLA)</a></li>
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.nmcrs.org/" target="_blank" rel="noopener noreferrer">NMCRS</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.armyemergencyrelief.org/" target="_blank" rel="noopener noreferrer">AER</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://afas.org/" target="_blank" rel="noopener noreferrer">AFAS</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="tel:+18772727337">American Red Cross: 1‑877‑272‑7337</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

