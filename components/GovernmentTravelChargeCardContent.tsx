"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };

export default function GovernmentTravelChargeCardContent({ data }: { data: { references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "usage" | "management" | "documents" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("usage")} className={`rounded-md px-3 py-2 text-sm ${tab === "usage" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Proper Usage</button>
          <button onClick={() => setTab("management")} className={`rounded-md px-3 py-2 text-sm ${tab === "management" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Account Management</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is the GTCC?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">The Government Travel Charge Card (GTCC) is issued to military personnel and DoD civilians for official travel expenses. It is mandatory for use on all official travel unless specifically exempt. The card is tied to you individually but the government is ultimately liable.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Issuer</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Citibank</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">DoD contract</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Payment</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Split Disbursement</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Paid from voucher</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Due Date</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">25th of Month</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">After statement</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Use your GTCC for ALL official travel expenses. Pay it off immediately after receiving your travel reimbursement. Never use it for personal expenses. Late payments affect your credit and can result in disciplinary action. Set up split disbursement so DTS pays Citibank directly.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Official Use Only</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Pay Immediately</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Split Disbursement</span>
              </div>
            </div>
          </section>
        )}

        {tab === "usage" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Proper GTCC Usage</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">Authorized Uses</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-green-700 dark:text-zinc-300">
                  <li>Airfare/transportation</li>
                  <li>Lodging</li>
                  <li>Rental car (if authorized)</li>
                  <li>Fuel for rental car</li>
                  <li>Meals during travel</li>
                  <li>Taxi/rideshare</li>
                  <li>Parking fees</li>
                  <li>ATM cash for M&IE</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-red-800 dark:text-red-400">Prohibited Uses</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-700 dark:text-zinc-300">
                  <li>Personal purchases</li>
                  <li>Alcohol</li>
                  <li>Entertainment/movies</li>
                  <li>Room service (non-meal items)</li>
                  <li>Laundry (unless extended TAD)</li>
                  <li>Phone calls (non-official)</li>
                  <li>Any non-travel expense</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">ATM Withdrawals</div>
              <div className="mt-1 text-xs">You can use your GTCC at ATMs to withdraw cash for M&IE expenses. There is a $5 fee per transaction and a daily limit of $300. Only withdraw what you need for incidental expenses.</div>
            </div>
          </section>
        )}

        {tab === "management" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Account Management</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Obtaining a GTCC</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Contact your unit APC (Agency Program Coordinator). Complete required training. Fill out application. APC submits to Citibank. Card arrives in 7-10 business days.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Activating Your Card</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Call Citibank number on card sticker. Set up PIN for ATM use. Register online at citimanager.com. Verify credit limit and travel dates.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Payment Options</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li><strong>Split Disbursement:</strong> DTS pays Citibank directly (recommended)</li>
                  <li><strong>Manual Payment:</strong> Pay via citimanager.com or phone</li>
                  <li><strong>Auto Pay:</strong> Set up automatic payments from bank account</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mission Critical Status</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If deploying or on extended travel, request mission critical status from your APC. This prevents the card from being deactivated due to non-payment during unavoidable absences.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documentation</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">To Obtain GTCC</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>GTCC training certificate</li>
                  <li>DD Form 577 (appointment letter)</li>
                  <li>Citibank application</li>
                  <li>Command approval</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Records to Maintain</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Monthly statements</li>
                  <li>Payment confirmations</li>
                  <li>All receipts from travel</li>
                  <li>DTS voucher copies</li>
                  <li>Dispute documentation</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common GTCC Issues</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Card declined</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Check if card is activated</li>
                  <li>Verify travel dates are open on card</li>
                  <li>Check credit limit not exceeded</li>
                  <li>Call Citibank to verify account status</li>
                  <li>Contact APC if card is restricted</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Delinquent account</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Pay immediately to avoid further action</li>
                  <li>Contact APC to discuss situation</li>
                  <li>30+ days late may result in counseling</li>
                  <li>60+ days late may result in suspension</li>
                  <li>Report to command if voucher delayed</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lost or stolen card</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Call Citibank immediately: 1-800-790-7206</li>
                  <li>Report to APC</li>
                  <li>File police report if stolen</li>
                  <li>Request replacement card</li>
                  <li>Monitor statement for fraudulent charges</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unauthorized charges</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Dispute charge via citimanager.com</li>
                  <li>Submit dispute within 60 days</li>
                  <li>Provide documentation</li>
                  <li>Temporary credit while investigating</li>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">GTCC Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Citibank Customer Service</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">1-800-790-7206</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Online Management</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">citimanager.com</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">ATM Limit</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">$300/day, $5 fee</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Payment Due</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">25th of month</div>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
