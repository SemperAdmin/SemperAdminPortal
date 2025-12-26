"use client";
import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; desc: string; url: string; type: string; isQuickLink?: boolean };
type Tab = "overview" | "steps" | "receipts" | "blocks" | "special" | "tips" | "troubleshooter" | "references";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "steps", label: "Steps" },
  { key: "receipts", label: "Receipts" },
  { key: "blocks", label: "Blocks" },
  { key: "special", label: "Special" },
  { key: "tips", label: "Tips" },
  { key: "troubleshooter", label: "Troubleshooter" },
  { key: "references", label: "References" },
];

const VOUCHER_STEPS = [
  { title: "Log into DTS", desc: "Access the DTS portal at dtsproweb.defensetravel.osd.mil. Use your CAC for authentication." },
  { title: "Create Voucher from Authorization", desc: "Select \"Official Travel\" then \"Vouchers.\" Click \"Create New Voucher\" and select your approved travel authorization. DTS will pre-populate trip data from your authorization." },
  { title: "Verify Trip Data", desc: "Confirm your actual travel dates match what occurred. Update departure and arrival times. Verify all TDY locations are correct. Ensure the itinerary reflects your actual travel." },
  { title: "Add and Update Expenses", desc: "Navigate to the Expenses module. Update estimated expenses to actual amounts. Add any additional expenses incurred during travel. Attach receipts for all expenses $75 or more." },
  { title: "Verify Line of Accounting (LOA)", desc: "Confirm the LOA matches your unit's funding. Contact your unit admin or Resource Manager if the accounting code needs correction. Orders must contain proper lines of accounting per MCO 1000.6." },
  { title: "Complete Remarks (Block 29)", desc: "Add required remarks for special circumstances. See Block 29 Requirements section for Marine-specific entries." },
  { title: "Review and Sign", desc: "Run the Pre-Audit to identify errors. Correct any flagged issues. Digitally sign the voucher using your CAC. The reviewer/approver signature date must be on or after your signature date." },
  { title: "Submit Voucher", desc: "Route the voucher through your approval chain. Monitor status in DTS. Respond promptly to any return for corrections." },
];

const RECEIPT_ITEMS = [
  "Lodging (itemized hotel folio showing nightly rate, taxes, and fees)",
  "Commercial airfare (passenger receipt or e-ticket)",
  "Rental car (final rental agreement showing total charges)",
  "Fuel for rental car (if purchased)",
  "Conference or registration fees",
  "Tolls (if total exceeds $75)",
  "Parking (if total exceeds $75)",
];

const BLOCK_29_REMARKS = [
  { title: "More Than 24 Hours", desc: "Explain if travel exceeded 24 hours due to mission requirements or transportation delays" },
  { title: "Government Quarters Unavailable", desc: "Document certificate of non-availability (CNA) when required to use commercial lodging" },
  { title: "Actual Expense Authority", desc: "Cite authorization if claiming above standard per diem rates" },
  { title: "POV vs Commercial", desc: "Explain mode of travel if different from authorization" },
  { title: "Separation Claims", desc: "Document specific entitlements for separation/retirement travel" },
];

const SPECIAL_SITUATIONS = [
  { situation: "Reserve Duty (IDT)", action: "Submit within 5 days. MROWS orders require voucher in DTS. Ensure travel mode matches order authorization." },
  { situation: "Non-DTS Personnel", action: "Use DFAS SmartVoucher or Travel Voucher Direct for manual claims. Contact disbursing office for guidance." },
  { situation: "TDY Over 180 Days", action: "TDY exceeding 180 days becomes PCS. CMC (MMIA) approval required before 179th day per MCO 1000.6." },
  { situation: "Advance Outstanding", action: "Failure to submit voucher within 5 days results in advance deduction from pay. Submit on time to avoid payroll action." },
  { situation: "POV Travel", action: "POV authorization as advantageous or not advantageous affects reimbursement. Claim mileage at current MALT rate from JTR." },
];

const TIPS = [
  { title: "Save receipts immediately", desc: "Photograph or scan receipts during travel before they fade or get lost." },
  { title: "Match dates exactly", desc: "Your voucher dates must align with your orders and authorization." },
  { title: "Use lodging per diem lookup", desc: "Verify locality rates at travel.dod.mil before claiming." },
  { title: "Run Pre-Audit before signing", desc: "Fix all errors before routing to approver." },
  { title: "Contact admin early", desc: "Reach out to your unit administrator for LOA issues or unusual circumstances." },
  { title: "Track your voucher", desc: "Monitor DTS status and respond immediately to any return for corrections." },
];

export default function TravelVoucherSubmissionContent({ data }: { data: { references: Ref[] } }) {
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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DD Form 1351-2 Overview</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">The DD Form 1351-2 is your official travel voucher for claiming reimbursement after completing official travel. For USMC personnel, you create this voucher in the Defense Travel System (DTS) from your approved authorization. The voucher documents your actual travel expenses and routes payment to your account.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Deadline</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5 Days</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Working days after travel</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Receipt Threshold</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$75+</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Single expense amount</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">System</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DTS</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Defense Travel System</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Authority</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">JTR</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">MCO 1000.6 Chapter 4</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Submit within 5 working days of completing travel. Attach receipts for any single expense $75 or more. Accurate dates and times directly affect per diem calculations. Late submission may result in advance deductions from pay and GTCC delinquency.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">5-Day Deadline</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">$75 Receipt Threshold</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Accurate Dates/Times</span>
              </div>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DTS Voucher Submission Steps</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Follow these steps to submit your travel voucher in DTS after completing official travel.</p>
            <div className="mt-4 space-y-4">
              {VOUCHER_STEPS.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-[var(--sa-cream)]">{index + 1}</span>
                    <div>
                      <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{step.title}</h3>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "receipts" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Receipt Requirements</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Receipts are required for any single expense of $75 or more. Common items requiring receipts:</p>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <ul className="space-y-2">
                {RECEIPT_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sa-red)]"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Receipt Requirements
              </div>
              <p className="mt-1 text-xs">All receipts must show: vendor name, date, amount paid, and itemized charges. Credit card statements alone are not sufficient documentation.</p>
            </div>
          </section>
        )}

        {tab === "blocks" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Signature and Remarks Blocks</h2>

            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Block 21 - Approving Official Signature</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 1000.6, the Approving Official (AO) signs Block 21 of the DD Form 1351-2. Written modification is not required if the AO states on the face of the travel claim what has been approved and signs Block 21. The AO signature date must be on or after the traveler&apos;s signature date.</p>
            </div>

            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Block 29 - Remarks</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Use Block 29 for required explanations and Marine-specific entries:</p>
              <div className="mt-3 space-y-3">
                {BLOCK_29_REMARKS.map((remark) => (
                  <div key={remark.title} className="rounded-lg border border-black/5 bg-white p-3 dark:border-white/10 dark:bg-black/40">
                    <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{remark.title}</div>
                    <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{remark.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {tab === "special" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Considerations</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Specific guidance for unique travel situations.</p>
            <div className="mt-4 space-y-4">
              {SPECIAL_SITUATIONS.map((item) => (
                <div key={item.situation} className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.situation}</h3>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.action}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "tips" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tips for Voucher Success</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {TIPS.map((tip) => (
                <div key={tip.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sa-red)]"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                    <div>
                      <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{tip.title}</h3>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Voucher returned for corrections</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Read the return comments carefully</li>
                  <li>Correct the identified issues</li>
                  <li>Resubmit promptly to avoid further delays</li>
                  <li>Contact your DTA if unclear on correction needed</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Missed 5-day deadline</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit as soon as possible</li>
                  <li>May need to add justification in remarks</li>
                  <li>Late vouchers may still be paid</li>
                  <li>Outstanding advance may be deducted from pay</li>
                  <li>GTCC delinquency may result</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lost receipt</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contact vendor for duplicate receipt</li>
                  <li>Write a lost receipt statement (sworn statement)</li>
                  <li>Include credit card statement as supporting documentation</li>
                  <li>Lost receipt statements require detailed explanation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reimbursement different than expected</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Review DTS calculation breakdown</li>
                  <li>Check for meal deductions (provided meals)</li>
                  <li>Verify travel advance was subtracted correctly</li>
                  <li>Confirm per diem rates for your TDY location</li>
                  <li>Contact your DTA or ODTA for explanation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LOA rejected or invalid</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contact your unit Resource Manager</li>
                  <li>Verify the LOA matches current fiscal year funding</li>
                  <li>Request corrected LOA from admin section</li>
                  <li>Do not submit voucher with invalid LOA</li>
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Submission Deadline</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">5 working days after travel</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Receipt Threshold</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">$75 or more for any single expense</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Payment Time</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">3-5 days after final approval</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Form Number</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">DD Form 1351-2</div>
            </li>
          </ul>
        </section>

        <QuickLinks references={data.references} variant="card" />

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Need Help?</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DTS Help Desk</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">1-888-HELP1GO (1-888-435-7146)</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unit DTA</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Contact your unit admin section</div>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
