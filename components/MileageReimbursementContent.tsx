"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type MileageRate = { year: string; rate: number; effective: string };

export default function MileageReimbursementContent({ data }: { data: { mileageRates: MileageRate[]; references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "rates" | "eligibility" | "documents" | "steps" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("rates")} className={`rounded-md px-3 py-2 text-sm ${tab === "rates" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Current Rates</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("steps")} className={`rounded-md px-3 py-2 text-sm ${tab === "steps" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Steps</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mileage Reimbursement Overview</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">When you use your Privately Owned Conveyance (POC) - personal vehicle - for official travel, you can be reimbursed at the standard government mileage rate. This applies to TAD/TDY travel when driving is authorized, PCS travel when you drive to your new duty station, and local travel for official business.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">POC Mileage</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$0.70/mile</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">2025 rate (approx)</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Motorcycle</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$0.22/mile</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">2025 rate (approx)</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Calculated By</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Official Distance</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">DTOD or DTS</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Get POC authorization BEFORE traveling. Mileage is calculated using official distance tools, not your odometer. You can only claim one-way distance per leg unless specifically authorized for round trips. Rates are set by GSA and change annually.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Pre-Authorize POC</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Official Distance Only</span>
              </div>
            </div>
          </section>
        )}

        {tab === "rates" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Current Mileage Rates</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Rates are set by GSA and updated annually. Check current rates before calculating reimbursement.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/15">
                    <th className="px-4 py-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Year</th>
                    <th className="px-4 py-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POC Rate</th>
                    <th className="px-4 py-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Effective Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.mileageRates.map((r) => (
                    <tr key={r.year} className="border-b border-black/5 dark:border-white/10">
                      <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">{r.year}</td>
                      <td className="px-4 py-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">${r.rate.toFixed(2)}/mile</td>
                      <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">{r.effective}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Rate Types</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>TDY/TAD:</strong> Standard POC rate when POC is authorized</li>
                <li><strong>PCS:</strong> Standard POC rate for travel to new duty station</li>
                <li><strong>Local Travel:</strong> May be reimbursed at POC rate if authorized</li>
                <li><strong>Advantageous to Government:</strong> Full mileage rate when POC saves money vs. airfare</li>
                <li><strong>Member&apos;s Convenience:</strong> Limited to cost of government transportation</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When POC Mileage is Authorized</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TAD/TDY Travel</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>POC more cost-effective than airfare</li>
                  <li>No commercial transportation available</li>
                  <li>Rental car needed at destination anyway</li>
                  <li>Multiple stops required</li>
                  <li>Required equipment transportation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCS Travel</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Authorized one POV for member</li>
                  <li>One additional POV if dependents included</li>
                  <li>MALT (Monetary Allowance in Lieu of Transportation)</li>
                  <li>Per diem en route</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Cost Comparison</div>
              <div className="mt-1 text-xs">If driving is for your convenience (not advantageous to government), reimbursement may be limited to what government transportation would have cost. Always get POC authorization documented before traveling.</div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documentation</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Travel</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>POC authorization in DTS or orders</li>
                  <li>Cost comparison (if required)</li>
                  <li>Valid driver&apos;s license</li>
                  <li>Vehicle registration</li>
                  <li>Insurance documentation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Reimbursement</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>DTOD printout showing official distance</li>
                  <li>Toll receipts (if applicable)</li>
                  <li>Parking receipts (if &gt; $75)</li>
                  <li>Fuel receipts NOT required for mileage</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Claiming Mileage</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: Get POC Authorization</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Include POC as transportation method in your DTS authorization. Note if advantageous to government or member&apos;s convenience. Get approval before travel.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: Determine Official Distance</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Use Defense Table of Official Distances (DTOD) or let DTS calculate. Do not use personal GPS or odometer readings.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: Complete Travel</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Travel via authorized route. Collect toll receipts. Note any authorized deviations.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 4: Enter in DTS Voucher</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Enter POC mileage in DTS. System calculates reimbursement at current rate. Add toll expenses separately. Submit with other travel expenses.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Mileage Issues</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reimbursement less than expected</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify rate used (check effective date)</li>
                  <li>Confirm POC was advantageous vs. convenience</li>
                  <li>Check if limited to airfare cost</li>
                  <li>Verify official distance calculation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POC not authorized</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Request amendment to authorization</li>
                  <li>Provide justification for POC use</li>
                  <li>May require cost comparison</li>
                  <li>Constructive travel may limit reimbursement</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Indirect route taken</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Only official distance reimbursed</li>
                  <li>Personal deviations not covered</li>
                  <li>Document any authorized deviations</li>
                  <li>Leave en route requires separate approval</li>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Reference</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Distance Tool</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">DTOD (Defense Table of Official Distances)</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Rate Authority</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">GSA (updated annually)</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Covers</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Fuel, wear, insurance</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Separate Claims</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Tolls, parking</div>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
