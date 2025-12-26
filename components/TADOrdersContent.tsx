"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string; isQuickLink?: boolean };
type Tab = "overview" | "required" | "steps" | "important" | "special" | "troubleshooter" | "references";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "required", label: "Required Info" },
  { key: "steps", label: "Steps" },
  { key: "important", label: "Important" },
  { key: "special", label: "Special" },
  { key: "troubleshooter", label: "Troubleshooter" },
  { key: "references", label: "References" },
];

const TAD_STEPS = [
  { title: "Obtain Approval", desc: "Get verbal or written approval from your chain of command for the TAD requirement." },
  { title: "Complete TAD Request Form", desc: "Fill out your command's TAD Request form (MCBCL Form 1320/1 or equivalent). Include all required information: traveler details, dates, purpose, funding, and mode of travel." },
  { title: "Obtain Funding Approval", desc: "Route the request through your Financial Management Office (FMO) or Comptroller to verify funds availability and obtain the FIP/Appropriation Data." },
  { title: "Submit to Order Writing Authority", desc: "Submit the completed TAD request to your IPAC or Order Writing Section. Standard submission: NLT 5 working days before departure. If advance requested: NLT 10 working days before departure." },
  { title: "Orders Processing", desc: "The Order Writing Authority has up to 3 working days to process and issue orders via DTS, MROWS (for Reservists), or letter-type orders." },
  { title: "Receive and Review Orders", desc: "Review your orders for accuracy before departure. Verify dates, locations, funding, and authorized expenses match your request." },
];

export default function TADOrdersContent({ data }: { data: { references: Ref[] } }) {
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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Are TAD Orders?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">TAD Orders authorize you to travel temporarily to a location other than your Permanent Duty Station (PDS) for official duty. You remain assigned to your parent command while under the operational control of the gaining command or school.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">Funded TAD</h3>
                <p className="mt-2 text-sm text-green-700 dark:text-zinc-300">Government pays for travel, lodging, and per diem.</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-amber-800 dark:text-amber-400">Permissive TAD (PTAD)</h3>
                <p className="mt-2 text-sm text-amber-700 dark:text-zinc-300">No cost to the government. You pay all expenses. Orders state &quot;no expense to the Government.&quot;</p>
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TDY (Temporary Duty)</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Duty at another location for less than 180 days.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TEMINS</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">School or training for less than 140 days at one location.</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Create your DTS authorization before travel. Get it approved before departing. Use your GTCC for official expenses. Submit your voucher within 5 days of return. Keep all receipts for lodging and expenses over $75.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Approve Before Travel</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Voucher Within 5 Days</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Use GTCC</span>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-red-800 dark:text-red-400">Critical Time Limits</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-red-800 dark:text-zinc-300">
                <li><strong>TDY exceeding 180 days</strong> converts to PCS. CMC (MMIA) approval required before the 179th day.</li>
                <li><strong>TEMINS exceeding 140 days</strong> converts to PCS. No per diem is payable after conversion.</li>
                <li><strong>WESTPAC UDP limit</strong> is 210 days. Extensions require CMC approval.</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "required" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Information on TAD Orders</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Traveler Information</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Full Name (Last, First, MI)</li>
                  <li>Rank/Grade and EDIPI</li>
                  <li>MOS and Work Section</li>
                  <li>Home Address</li>
                  <li>Home and Work Phone Numbers</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Travel Details</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Inclusive dates of TAD (departure through return)</li>
                  <li>Total number of days</li>
                  <li>Itinerary with all stops</li>
                  <li>Reporting location and command</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Purpose and Justification</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Reason for travel (Training, School, Site Visit, Conference)</li>
                  <li>Statement confirming alternate means (SVTC or web-based communication) are not sufficient to accomplish objectives</li>
                </ul>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Funding Information</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>Financial Information Pointer (FIP) or Appropriation Data</li>
                    <li>Funding source identified by Comptroller</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mode of Travel</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>GTR - Ticketed by CTO</li>
                    <li>POV - Requires cost comparison</li>
                    <li>GOV or Military Air</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lodging and Meals</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Government Quarters: Directed if Available, Not Available, or Not Directed</li>
                  <li>Certificate of Non-Availability (CNA) number if government quarters not used</li>
                  <li>Government Mess: Directed if Available, Not Available, or Not Directed</li>
                  <li>Lodging and M&IE rates for each location</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Provisions</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Rental car authorization (compact unless justified)</li>
                  <li>GTCC holder status (Yes or No)</li>
                  <li>Advance required (Yes or No) - Always &quot;No&quot; if GTCC holder</li>
                  <li>Security clearance level required (attach JPAS verification)</li>
                  <li>Leave in conjunction with TAD</li>
                  <li>Special liberty authorized</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Request TAD Orders</h2>
            <div className="mt-4 space-y-4">
              {TAD_STEPS.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</div>
                    <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{step.title}</h3>
                  </div>
                  <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "important" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Things to Know</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DTS is the Primary System</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">The Marine Corps uses DTS for issuing TAD orders. MROWS is used for SMCR/IMA/IRR Marines on ADOS or mobilization orders exceeding 180 days. Letter-type orders are used only when DTS is not available.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Government Quarters and Messing</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Orders must state whether government quarters and messing are available or directed at military installations. Obtain this information before travel. If you stay off-base without a CNA when quarters are available, you pay the difference.</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
                <h3 className="font-bold">GTCC is Mandatory</h3>
                <p className="mt-2 text-sm">Use your Government Travel Charge Card for all official travel expenses. Orders must identify if you are a GTCC holder.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Advances</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Travel advances are not paid earlier than 3 working days before departure. GTCC holders do not receive advances. Advances are recouped if you do not submit your voucher within 10 working days.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POV Use Requires Justification</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If you request POV instead of commercial air, you must complete a Constructive Travel Comparison Worksheet (CTCW) showing the cost comparison. Excess travel time is charged as leave.</p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
                <h3 className="font-bold">Required Statement on All Orders</h3>
                <p className="mt-2 text-sm">&quot;Alternate means, such as Secure Video Teleconference (SVTC) or other Web-based communication, are not sufficiently able to accomplish travel objectives.&quot;</p>
              </div>
            </div>
          </section>
        )}

        {tab === "special" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mobilized Reservists</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If you are a mobilized Reservist, provide a copy of your MROWS orders and all modifications with your TAD request.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TAD Exceeding 31 Days</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Your admin section must report TO TAD and FR TAD entries in the unit diary. Provide a copy of your orders to the reporting unit within 5 days of departure.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Legal or Medical Hold</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If you are placed on hold at your TDY site and the total time (original TDY plus hold) equals or exceeds 180 days (140 days for TEMINS), your TDY status terminates and you are reassigned PCS.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave in Conjunction</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">You may request leave before, during, or after TAD. Annotate leave dates in the Comments section of your TAD request. Leave in conjunction affects per diem and travel time calculations.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Group Travel</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">When traveling in a group, orders may be issued to supervisory personnel with a listing of all travelers. Each traveler needs a copy reflecting their name for reimbursement.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TAD request submitted late and orders not ready before departure</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Submit your request NLT 5 working days before travel. If you need an advance, submit NLT 10 working days before travel.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Government quarters directed but not available upon arrival</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Obtain a Certificate of Non-Availability (CNA) from the installation billeting office. Provide the CNA number on your voucher.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Orders do not reflect correct per diem rates</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Verify lodging and M&IE rates at www.gsa.gov (CONUS) or www.defensetravel.dod.mil (OCONUS) before submitting your request.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POV travel time exceeds authorized time and leave is charged</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Complete a CTCW before travel. If POV is not advantageous to the government, you are limited to constructive commercial air travel time. Excess time is charged as leave.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Advance deducted from pay</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Submit your travel voucher within 5 working days of completing travel. Failure to submit within 10 working days results in automatic recoupment.</p>
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local IPAC</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Contact your installation PAC</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local Comptroller/FMO</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Contact your unit FMO</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commercial Travel Office</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Contact installation CTO</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Deadlines</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-red-700 dark:text-[var(--sa-cream)]">180 Days</div>
              <div className="text-xs text-red-600 dark:text-zinc-300">TDY limit (converts to PCS)</div>
            </li>
            <li className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-amber-700 dark:text-[var(--sa-cream)]">140 Days</div>
              <div className="text-xs text-amber-600 dark:text-zinc-300">TEMINS limit</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5 Working Days</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Submit request before travel</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5 Days After Return</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Submit travel voucher</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Travel System</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Defense Travel System (DTS)</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Payment Method</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">GTCC required</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Receipt Threshold</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">&gt; $75 requires receipt</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            {data.references.filter((ref) => ref.isQuickLink).map((ref) => (
              <li key={ref.title}><a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">{ref.title}</a></li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
