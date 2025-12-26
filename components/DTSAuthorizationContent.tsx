"use client";
import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; desc: string; url: string; type: string; isQuickLink?: boolean };
type Tab = "overview" | "steps" | "important" | "status" | "troubleshooter" | "references";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "steps", label: "Steps" },
  { key: "important", label: "Important" },
  { key: "status", label: "Status" },
  { key: "troubleshooter", label: "Troubleshooter" },
  { key: "references", label: "References" },
];

const AUTH_STEPS = [
  { title: "Log In to DTS", desc: "Go to DTS login page. Accept the Privacy and Ethics Policy. Select \"Sign in with CAC/PIV\". Select your DoD ID certificate and enter your PIN." },
  { title: "Start a New Document", desc: "From the DTS Dashboard, select \"Create New Document\". Select \"Routine TDY Trip\" for standard travel." },
  { title: "Build Your Itinerary", desc: "Enter TDY location(s) with arriving/departing dates. Enter leaving/returning dates and locations. Select trip type and purpose. Add conference/event name if applicable." },
  { title: "Enter TSA Information", desc: "Enter your name as shown on ID, date of birth, and sex. Add Known Traveler Number (10-digit DoD ID for TSA PreCheck). Continue to booking." },
  { title: "Make Reservations", desc: "Select policy-compliant flights (shown first). Book rental car (compact default). Select lodging by priority: DoD Lodging, Privatized, DoD Preferred Commercial, Commercial." },
  { title: "Enter Expenses", desc: "Add estimated expenses not covered by reservations: baggage fees, parking, taxi/TNC fares, tolls, conference registration, mileage if using POV." },
  { title: "Review Per Diem", desc: "DTS auto-calculates per diem based on TDY location. Review lodging and M&IE rates. Adjust for leave days or government-provided meals." },
  { title: "Enter Accounting Information", desc: "Add the Line of Accounting (LOA) from your orders. If requesting advance (non-GTCC holders only), enter amount. Review trip costs and payment breakdown." },
  { title: "Review and Sign", desc: "Review profile information (banking, GTCC, email). Address Pre-Audit flags with justifications. Select routing list and submit. Sign within 24 hours of making reservations." },
];

const DOC_STATUSES = [
  { status: "CREATED", desc: "Document started but not signed" },
  { status: "SIGNED", desc: "You signed the document" },
  { status: "CTO BOOKED", desc: "TMC processed your reservations" },
  { status: "APPROVED", desc: "Authorizing Official approved the trip" },
  { status: "TICKETED", desc: "TMC issued your airline tickets" },
  { status: "RETURNED", desc: "Document sent back for corrections" },
];

export default function DTSAuthorizationContent({ data }: { data: { references: Ref[] } }) {
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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is a DTS Authorization?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">A DTS Authorization is the official document you create in the Defense Travel System to request approval for temporary duty (TDY) travel. It captures your trip details, estimated costs, reservations, and funding information. You must have an approved authorization before you travel.</p>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The Authorization Serves Three Purposes</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Request and obtain command approval for your trip</li>
                <li>Provide a &quot;should-cost&quot; estimate for budgeting</li>
                <li>Book reservations (flights, rental cars, lodging) through the TMC</li>
              </ul>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Create and sign your authorization before travel begins. Sign within 24 hours of making reservations or they auto-cancel. Use your GTCC for all official expenses. Submit your voucher within 5 days of return.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Sign Within 24 Hours</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Use GTCC</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Voucher in 5 Days</span>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">CONUS Travel</h3>
                <p className="mt-2 text-sm text-green-700 dark:text-zinc-300">Start authorization at least 2-3 weeks before departure.</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-amber-800 dark:text-amber-400">OCONUS Travel</h3>
                <p className="mt-2 text-sm text-amber-700 dark:text-zinc-300">Start authorization at least 45-60 days before departure.</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
              <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Facts</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Authorizations cannot be created more than 6 months in advance</li>
                <li>Maximum trip duration is one year from the start date</li>
                <li>You must sign within 24 hours of making reservations</li>
                <li>GTCC holders do not receive cash advances</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Create an Authorization</h2>
            <div className="mt-4 space-y-4">
              {AUTH_STEPS.map((step, index) => (
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
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-red-800 dark:text-red-400">Sign Within 24 Hours</h3>
                <p className="mt-2 text-sm text-red-800 dark:text-zinc-300">After making reservations, you must sign your authorization within 24 hours. If you do not, DTS automatically cancels your reservations. For trips within 3 business days, the window is 12 hours.</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
                <h3 className="font-bold">GTCC is Required</h3>
                <p className="mt-2 text-sm">Use your Government Travel Charge Card for all official travel expenses. Your authorization must show if you are a GTCC holder.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Profile Must Be Current</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Before creating an authorization, verify your DTS profile is correct: name, contact info, banking info (EFT), GTCC number and expiration, organization and routing list.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Integrated Lodging Program (ILP)</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">At ILP locations, you must use directed lodging in order: DoD Lodging → Privatized Lodging → DoD Preferred Commercial → Commercial. Declining directed lodging without exception limits your reimbursement.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Certificate of Non-Availability (CNA)</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If DoD Lodging is directed but unavailable, the system generates a CNA number authorizing you to use the next lodging type. The CNA appears on your authorization.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POV Mileage Over 400 Miles</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If using POV for travel over 400 miles one-way (or 800 round trip), you must provide a Constructive Travel Worksheet (CTW) comparing POV cost to commercial air.</p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-blue-800 dark:text-blue-400">Pre-Audit Flags</h3>
                <p className="mt-2 text-sm text-blue-800 dark:text-zinc-300">DTS generates Pre-Audit flags when selections require justification. Common flags: lodging over per diem, rental car larger than compact, declining directed lodging, non-lowest fare. Provide a valid reason code and written justification.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "status" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document Status</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">After you sign, your authorization routes through these statuses. Monitor your DTS email for status updates and returned documents.</p>
            <div className="mt-4 space-y-3">
              {DOC_STATUSES.map((item) => (
                <div key={item.status} className="flex items-center gap-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="min-w-[120px] rounded-lg bg-[var(--sa-navy)] px-3 py-1 text-center text-xs font-bold text-white">{item.status}</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <h3 className="font-bold">Voucher Deadline</h3>
              <p className="mt-2 text-sm">After returning from travel, submit your travel voucher in DTS within 5 working days. DTS sends reminder emails starting on your last day of travel.</p>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reservations auto-canceled</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Sign your authorization within 24 hours of making reservations. For trips within 3 business days, the window is 12 hours.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authorization returned for incorrect LOA</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Verify the Line of Accounting matches what is on your orders. Contact your Comptroller if you do not have the correct LOA.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Audit flag for lodging over per diem</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Select a Reason Code from the dropdown and provide written justification explaining why you need that specific hotel.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Flight not appearing in search results</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Change the search criteria (different airport, time of day) or use &quot;Request TMC Assistance&quot; at the bottom of the flight selection screen.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">GTCC expired or invalid message</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Update your GTCC information in your DTS profile before creating the authorization. Contact your Agency Program Coordinator (APC) if your card is not active.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Cannot find your organization or routing list</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Contact your Defense Travel Administrator (DTA) to verify your profile is assigned to the correct organization.</p>
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local DTA</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Contact your unit admin section</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TMC/CTO</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">See your org&apos;s CTO info</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DTMO Travel Assistance</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">https://travel.dod.mil/Support</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Timelines</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-red-700 dark:text-[var(--sa-cream)]">24 Hours</div>
              <div className="text-xs text-red-600 dark:text-zinc-300">Sign after making reservations</div>
            </li>
            <li className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-amber-700 dark:text-[var(--sa-cream)]">5 Working Days</div>
              <div className="text-xs text-amber-600 dark:text-zinc-300">Submit voucher after return</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2-3 Weeks (CONUS)</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Start authorization before travel</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">45-60 Days (OCONUS)</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Start authorization before travel</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Max Advance Creation</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">6 months before travel</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Max Trip Duration</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">1 year from start date</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Receipt Threshold</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">&gt; $75 requires receipt</div>
            </li>
          </ul>
        </section>

        <QuickLinks references={data.references} />
      </aside>
    </div>
  );
}
