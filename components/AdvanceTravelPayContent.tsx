"use client";

import { MCOLink } from "./ui/MCOLink";
import { useState } from "react";
import { QuickLinks } from "./QuickLinks";
import { MCO_URLS } from "@/data/references";


type Ref = { title: string; url: string; isQuickLink?: boolean };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Advance Types" },
  { id: "dts", label: "DTS Request" },
  { id: "pcs", label: "PCS Advances" },
  { id: "oconus", label: "OCONUS" },
  { id: "repayment", label: "Repayment" },
  { id: "troubleshooter", label: "Troubleshooter" },
  { id: "references", label: "References" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const ADVANCE_TYPES = [
  {
    title: "Advance Pay (PCS)",
    details: [
      "Up to 3 months base pay for OCONUS assignments",
      "Up to 1 month base pay for CONUS PCS",
      "Repaid over 12-24 pay periods",
      "Requested through your disbursing office",
      "Requires DD 2560 or command-specific request",
    ],
  },
  {
    title: "Travel Advance (Per Diem)",
    details: [
      "Covers estimated lodging, meals, and incidentals",
      "Based on per diem rates for your TDY location",
      "Typically 80% of estimated reimbursable expenses",
      "Settled against your travel voucher",
      "Requested through DTS or DD 1351 (Advance)",
    ],
  },
  {
    title: "Dislocation Allowance (DLA) Advance",
    details: [
      "Partial DLA payment before PCS execution",
      "Helps cover immediate moving expenses",
      "Full DLA settled on final PCS voucher",
      "Amount based on dependency status and grade",
    ],
  },
  {
    title: "Temporary Lodging Expense (TLE) Advance",
    details: [
      "Covers lodging at old or new duty station",
      "Up to 14 days combined (CONUS)",
      "Requested as part of PCS advance package",
    ],
  },
];

const DTS_ADVANCE_STEPS = [
  { step: "Create your travel authorization in DTS", details: "Enter all travel details including dates, locations, and estimated expenses" },
  { step: "Navigate to the 'Accounting' or 'Additional Options' section", details: "Look for the advance request option in your authorization" },
  { step: "Select 'Request Advance'", details: "Choose to request an advance for your trip" },
  { step: "Enter the amount needed", details: "System calculates maximum based on per diem. Most commands authorize 80% of estimated reimbursement" },
  { step: "Verify your banking information", details: "Ensure your DTS profile has current direct deposit information" },
  { step: "Submit authorization for approval", details: "Route through your approval chain" },
  { step: "Receive advance deposit", details: "Advance deposits 1-3 business days after approval" },
];

const PCS_PROCESS = [
  {
    phase: "Gather Documents",
    items: [
      "Copy of PCS orders",
      "DD 2560 (Advance Pay Request)",
      "SF 1199A (Direct Deposit Form) or voided check",
      "Leave and earnings statement (LES)",
    ],
  },
  {
    phase: "Calculate Needs",
    items: [
      "Temporary lodging at old duty station",
      "En route lodging and meals",
      "Fuel costs (if driving POV)",
      "Temporary lodging at new duty station",
      "Immediate housing deposits (not reimbursable but consider cash flow)",
    ],
  },
  {
    phase: "Submit Request",
    items: [
      "Submit to your disbursing office or finance center",
      "Allow 5-10 business days for processing",
      "Request no earlier than 30 days before detachment",
    ],
  },
  {
    phase: "Receive Funds",
    items: [
      "Deposited via EFT to your designated account",
      "Verify amount matches your request",
      "Keep documentation for voucher settlement",
    ],
  },
];

const ADVANCE_LIMITS = [
  { type: "CONUS PCS Advance Pay", max: "1 month base pay", repayment: "12 pay periods" },
  { type: "OCONUS PCS Advance Pay", max: "3 months base pay", repayment: "24 pay periods" },
  { type: "TDY Per Diem Advance", max: "80% estimated expenses", repayment: "Voucher settlement" },
  { type: "DLA Advance", max: "Varies by grade/status", repayment: "Voucher settlement" },
  { type: "TLE Advance", max: "Estimated TLE amount", repayment: "Voucher settlement" },
];

const OCONUS_ADVANCES = [
  {
    title: "Advance Pay",
    details: [
      "Up to 3 months base pay",
      "Available up to 3 weeks before departure",
      "Or up to 2 months after arrival at OCONUS location",
      "Repaid over up to 24 pay periods",
    ],
  },
  {
    title: "OCONUS COLA Advance",
    details: [
      "Advance on Cost of Living Allowance",
      "Helps with higher living costs overseas",
      "Settled against actual COLA payments",
    ],
  },
  {
    title: "Housing Allowance Advance",
    details: [
      "For locations with Overseas Housing Allowance (OHA)",
      "Covers security deposits and initial rent",
      "Specific rules apply by location",
    ],
  },
];

const FORMS = [
  { form: "DD 2560", purpose: "Request for Advance Pay (PCS)" },
  { form: "SF 1190", purpose: "Foreign Allowances Application" },
  { form: "SF 1199A", purpose: "Direct Deposit Sign-Up Form" },
  { form: "DD 1351", purpose: "Travel Voucher (includes advance request)" },
  { form: "DTS Authorization", purpose: "Electronic advance request for TDY" },
];

const COMMON_ISSUES = [
  {
    issue: "Advance Not Received Before Travel",
    solutions: [
      "Contact disbursing office immediately",
      "Verify banking information is correct",
      "Use GTCC for expenses until advance arrives",
      "Document all expenses for voucher",
    ],
  },
  {
    issue: "Advance Exceeds Reimbursement",
    solutions: [
      "Difference collected from your pay",
      "Review voucher for missed expenses",
      "Ensure all authorized expenses are claimed",
      "Contact finance if you believe collection is in error",
    ],
  },
  {
    issue: "Voucher Delayed Beyond 5 Days",
    solutions: [
      "Advance automatically flagged for collection",
      "Submit voucher immediately",
      "Provide explanation to your command",
      "Contact disbursing to prevent unnecessary collection",
    ],
  },
  {
    issue: "Banking Information Changed",
    solutions: [
      "Update DTS profile before requesting advance",
      "Notify disbursing office of new account",
      "Verify deposit after approval",
    ],
  },
];

const TIPS = [
  { title: "Request Only What You Need", desc: "Larger advances mean larger repayments or settlements." },
  { title: "Track Your Expenses", desc: "Know your actual costs versus your advance amount." },
  { title: "Submit Vouchers Immediately", desc: "The 5-day rule protects you from payroll deductions." },
  { title: "Use Split Disbursement", desc: "Pay your GTCC directly from reimbursement." },
  { title: "Keep Advance Documentation", desc: "You need records for voucher reconciliation." },
  { title: "Plan for Repayment", desc: "Budget for payroll deductions if you received advance pay." },
];

export default function AdvanceTravelPayContent({ data }: { data: { references: Ref[] } }) {
  const [tab, setTab] = useState<TabId>("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-md px-3 py-2 text-sm ${tab === t.id ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Advance Travel Pay Overview</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Advance travel pay provides upfront funds to cover out-of-pocket expenses before you receive travel reimbursement. This is not bonus pay—you repay the advance through payroll deductions or settlement against your travel voucher. Advances help Marines cover immediate costs for lodging, meals, fuel, and moving expenses during PCS or TDY travel.</p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/15">
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Element</th>
                    <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Request Timing</td>
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">No earlier than 3 working days before travel execution</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Repayment</td>
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">Automatic payroll deduction or voucher settlement</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Voucher Deadline</td>
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">5 working days after travel completion</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Late Voucher Consequence</td>
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">Advance deducted from pay</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authority</td>
                    <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">JTR Chapter 2, DoD 7000.14-R Volume 9</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Request an advance in DTS no earlier than 3 working days before travel. You can receive up to 80% of estimated per diem for TDY or up to 3 months base pay for OCONUS PCS. Submit your voucher within 5 working days of return—failure to do so results in the advance being deducted from your pay. Use GTCC for most expenses; advances are for cash-only situations.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">5-Day Voucher Rule</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">80% Per Diem Max</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Use GTCC First</span>
              </div>
            </div>
          </section>
        )}

        {tab === "types" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Travel Advances</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Different advance types are available depending on your travel situation.</p>

            <div className="mt-4 space-y-4">
              {ADVANCE_TYPES.map((type) => (
                <div key={type.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{type.title}</h3>
                  <ul className="mt-2 space-y-1">
                    {type.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sa-red)]"><path d="M9 12l2 2 4-4"/></svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Advance Pay Limits</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/15">
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Type</th>
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Maximum Amount</th>
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Repayment Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ADVANCE_LIMITS.map((limit) => (
                      <tr key={limit.type} className="border-b border-black/5 dark:border-white/10">
                        <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{limit.type}</td>
                        <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{limit.max}</td>
                        <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{limit.repayment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {tab === "dts" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requesting an Advance in DTS</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Follow these steps to request a travel advance for TDY travel in DTS.</p>

            <div className="mt-4 space-y-3">
              {DTS_ADVANCE_STEPS.map((item, idx) => (
                <div key={item.step} className="flex gap-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-sm font-bold text-[var(--sa-cream)]">{idx + 1}</div>
                  <div>
                    <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.step}</div>
                    <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.details}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-black/10 bg-[var(--sa-navy)] p-4 text-[var(--sa-cream)] dark:border-white/15">
              <h3 className="font-bold">Maximum Advance Calculation</h3>
              <p className="mt-2 text-sm opacity-90">DTS calculates your maximum advance based on estimated per diem for TDY location, number of travel days, authorized lodging rate, and M&IE rate. Most commands authorize 80% of estimated reimbursement as the maximum advance.</p>
            </div>
          </section>
        )}

        {tab === "pcs" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCS Advance Process</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">For PCS moves, you can request advance pay and travel advances through your disbursing office.</p>

            <div className="mt-4 space-y-4">
              {PCS_PROCESS.map((phase, idx) => (
                <div key={phase.phase} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-[var(--sa-cream)]">{idx + 1}</div>
                    <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{phase.phase}</h3>
                  </div>
                  <ul className="mt-3 ml-11 space-y-1">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sa-red)]"><circle cx="12" cy="12" r="4"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Forms</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/15">
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Form</th>
                      <th className="px-3 py-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FORMS.map((f) => (
                      <tr key={f.form} className="border-b border-black/5 dark:border-white/10">
                        <td className="px-3 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{f.form}</td>
                        <td className="px-3 py-2 text-zinc-700 dark:text-zinc-300">{f.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {tab === "oconus" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS Assignment Advances</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">For foreign duty assignments, additional advance options exist to help with higher overseas costs.</p>

            <div className="mt-4 space-y-4">
              {OCONUS_ADVANCES.map((adv) => (
                <div key={adv.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{adv.title}</h3>
                  <ul className="mt-2 space-y-1">
                    {adv.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sa-red)]"><path d="M9 12l2 2 4-4"/></svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="font-semibold">Reserve Component Advances</div>
              <p className="mt-1 text-sm">SMCR, IMA, and IRR Marines on orders may request advances for AT, ADT, and mobilization orders. Request through MROWS orders process or disbursing. Same 5-day voucher submission requirement applies. Advances deducted from pay if voucher not submitted timely.</p>
            </div>
          </section>
        )}

        {tab === "repayment" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Repayment Methods</h2>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border-2 border-green-500 bg-green-50 p-4 dark:border-green-400 dark:bg-green-900/20">
                <h3 className="font-bold text-green-800 dark:text-green-300">Voucher Settlement</h3>
                <p className="mt-2 text-sm text-green-700 dark:text-green-300">Your travel voucher calculates total reimbursement minus your advance. If reimbursement exceeds the advance, you receive the difference.</p>
                <div className="mt-3 rounded-lg bg-white/60 p-3 dark:bg-black/20">
                  <div className="text-xs font-semibold text-green-800 dark:text-green-300">Example:</div>
                  <ul className="mt-1 space-y-1 text-sm text-green-700 dark:text-green-300">
                    <li>Advance received: $1,500</li>
                    <li>Total reimbursement: $1,800</li>
                    <li>Amount deposited: <strong>$300</strong></li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border-2 border-blue-500 bg-blue-50 p-4 dark:border-blue-400 dark:bg-blue-900/20">
                <h3 className="font-bold text-blue-800 dark:text-blue-300">Payroll Deduction</h3>
                <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">For advance pay (base pay advances), repayment occurs through automatic payroll deductions over the agreed period.</p>
                <div className="mt-3 rounded-lg bg-white/60 p-3 dark:bg-black/20">
                  <div className="text-xs font-semibold text-blue-800 dark:text-blue-300">Standard Repayment:</div>
                  <ul className="mt-1 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                    <li>CONUS PCS: 12 pay periods</li>
                    <li>OCONUS PCS: Up to 24 pay periods</li>
                    <li>Hardship: Extended may be authorized</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border-2 border-red-500 bg-red-50 p-4 dark:border-red-400 dark:bg-red-900/20">
              <h3 className="font-bold text-red-800 dark:text-red-300">Collection for Late Voucher</h3>
              <p className="mt-2 text-sm text-red-700 dark:text-red-300">Per <MCOLink mco="MCO 1000.6" url={MCO_URLS.ACTS_MANUAL} />, failure to submit your travel voucher within 5 working days results in the advance being deducted from your pay. Submit on time to avoid involuntary collection.</p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tips for Managing Advances</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {TIPS.map((tip) => (
                  <div key={tip.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{tip.title}</h4>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Issues and Solutions</h2>
            <div className="mt-3 space-y-4">
              {COMMON_ISSUES.map((item) => (
                <div key={item.issue} className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.issue}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    {item.solutions.map((solution) => (
                      <li key={solution}>{solution}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 3v6h6"/></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{ref.title}</h4>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-300 transition group-hover:text-[var(--sa-red)]"><path d="M18 3h3v3M21 3l-9 9"/><path d="M21 21H3V3"/></svg>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      <aside className="space-y-6 lg:mt-12">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TDY Maximum</div>
              <div className="text-lg font-bold text-[var(--sa-red)]">80%</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">of estimated per diem</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS PCS Max</div>
              <div className="text-lg font-bold text-[var(--sa-red)]">3 Months</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">base pay advance</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Voucher Deadline</div>
              <div className="text-lg font-bold text-[var(--sa-red)]">5 Days</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">after travel completion</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Processing Time</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">1-3 business days after approval</div>
            </li>
          </ul>
        </section>

        <QuickLinks references={data.references} />
      </aside>
    </div>
  );
}
