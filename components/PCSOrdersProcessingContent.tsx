"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };

export default function PCSOrdersProcessingContent({ data }: { data: { references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "types" | "documents" | "steps" | "timeline" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("types")} className={`rounded-md px-3 py-2 text-sm ${tab === "types" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Order Types</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("steps")} className={`rounded-md px-3 py-2 text-sm ${tab === "steps" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Steps</button>
          <button onClick={() => setTab("timeline")} className={`rounded-md px-3 py-2 text-sm ${tab === "timeline" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Timeline</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Are PCS Orders?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Permanent Change of Station (PCS) orders are official military orders directing you to relocate from one duty station to another. These orders authorize travel, movement of household goods, and various entitlements to support your move.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Key Element</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Report Date</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Key Element</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Detach Date</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Key Element</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Entitlements</div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Review your orders immediately upon receipt. Verify report dates, authorized entitlements, and accounting data. Contact your S-1 if anything appears incorrect. Begin your PCS checklist at least 90 days before your detach date.</p>
              <div className="mt-4 flex gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">90-Day Planning</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Verify Entitlements</span>
              </div>
            </div>
          </section>
        )}

        {tab === "types" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of PCS Orders</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CONUS to CONUS</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Move within the continental United States. Standard HHG shipment, TLE at old and new duty station, DLA authorized.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CONUS to OCONUS</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Move from CONUS to overseas. May include POV shipment, additional storage, and overseas screening requirements.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS to CONUS</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Return to CONUS from overseas. May include POV return shipment and retrieval of stored HHG.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS to OCONUS</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Consecutive overseas tours. Special entitlements may apply including shipment between OCONUS locations.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unaccompanied Orders</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Member moves without dependents. Reduced HHG weight allowance, FSA entitlement may apply.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Accompanied Orders</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Member moves with dependents. Full HHG weight allowance based on rank, dependent travel authorized.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Departure</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Certified copy of PCS orders</li>
                  <li>Amendments (if any)</li>
                  <li>Dependent travel authorization</li>
                  <li>NAVMC 11116 (PCS Checklist)</li>
                  <li>DD Form 1299 (HHG application)</li>
                  <li>POV inspection documentation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Check-Out</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Detaching endorsement</li>
                  <li>Base clearance sheet</li>
                  <li>Housing clearance</li>
                  <li>Medical/dental records transfer</li>
                  <li>Unit clearance signatures</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Check-In</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Orders with detaching endorsement</li>
                  <li>Service Record Book (SRB)</li>
                  <li>Medical/dental records</li>
                  <li>Marriage/birth certificates (if applicable)</li>
                  <li>NAVMC 10922 (dependency update)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Travel Claim</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>DD Form 1351-2 (Travel Voucher)</li>
                  <li>Lodging receipts (over $75)</li>
                  <li>TLE receipts</li>
                  <li>Fuel receipts (if POC)</li>
                  <li>Toll receipts</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCS Processing Steps</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: Receive and Review Orders</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Verify all information including rank, name, SSN, gaining unit, report date, and authorized entitlements. Report discrepancies to S-1 immediately.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: Schedule Transportation Brief</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Attend the Installation Personal Property Office (IPPO) brief. Schedule HHG pickup, learn about PPM options, and understand weight allowances.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: Create DTS Authorization</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Enter your travel itinerary in DTS. Request advance travel pay if needed. Route for approval before travel.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 4: Complete Check-Out</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Obtain all required signatures on your checkout sheet. Clear housing, return gear, and get detaching endorsement.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 5: Execute PCS Travel</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Travel via authorized mode (POC, commercial air, etc.). Keep all receipts. Claim TLE at old and/or new duty station as authorized.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 6: Check In at New Duty Station</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Report to gaining command within orders timeframe. Complete check-in requirements and update housing/BAH status.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 7: Submit Travel Voucher</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Complete DD Form 1351-2 or DTS voucher within 5 days of arrival. Attach all required receipts and documentation.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "timeline" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCS Timeline</h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-[var(--sa-cream)]">90</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">90 Days Out</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Receive orders, attend TMO brief, schedule HHG pickup, begin housing search at new location</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-[var(--sa-cream)]">60</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">60 Days Out</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Create DTS authorization, schedule POV shipment (if OCONUS), begin checkout process</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-[var(--sa-cream)]">30</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">30 Days Out</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Complete medical/dental screenings, finalize housing arrangements, complete unit turnover</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-[var(--sa-cream)]">14</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">14 Days Out</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">HHG pickup, clear housing, complete remaining checkout signatures</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-sm font-bold text-[var(--sa-cream)]">0</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Detach Date</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Depart old duty station, begin TLE if authorized, execute travel</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-[var(--sa-cream)]">+5</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Within 5 Days of Arrival</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Check in to gaining command, submit travel voucher, update records</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Orders have incorrect information</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contact S-1/IPAC immediately to request an amendment</li>
                  <li>Do not begin travel until orders are corrected</li>
                  <li>Document discrepancies in writing</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Need to change report date</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Request must come from gaining command or higher authority</li>
                  <li>Submit request through your chain of command</li>
                  <li>Amendment required before executing different travel dates</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dependents not authorized on orders</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify DEERS enrollment for all dependents</li>
                  <li>Request orders amendment to add dependent travel</li>
                  <li>Ensure NAVMC 10922 is current</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Travel voucher returned for corrections</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Review rejection reason carefully</li>
                  <li>Provide missing receipts or documentation</li>
                  <li>Correct any calculation errors</li>
                  <li>Resubmit within 5 days of correction</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Can&apos;t complete checkout in time</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Notify chain of command immediately</li>
                  <li>Prioritize critical items (housing, unit, medical)</li>
                  <li>Request extended checkout if needed</li>
                  <li>Some items can be completed remotely</li>
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Orders Distribution</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Usually 90+ days before detach date</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Proceed Time</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Typically 4-10 days authorized</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Travel Voucher</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Submit within 5 days of arrival</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DLA</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Paid with travel voucher settlement</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Contacts</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>S-1/IPAC:</strong> Orders amendments, check-in/out</li>
            <li><strong>TMO/PPSO:</strong> HHG shipment, storage</li>
            <li><strong>Housing Office:</strong> Quarters termination</li>
            <li><strong>Travel Office:</strong> DTS, vouchers</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
