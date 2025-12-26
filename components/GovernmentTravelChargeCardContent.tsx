"use client";
import { useState } from "react";
import { QuickLinks } from "./QuickLinks";

type Ref = { title: string; desc: string; url: string; type: string; isQuickLink?: boolean };
type Tab = "overview" | "authorized" | "obtaining" | "payment" | "status" | "pcs" | "troubleshooter" | "references";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "authorized", label: "Authorized" },
  { key: "obtaining", label: "Obtaining" },
  { key: "payment", label: "Payment" },
  { key: "status", label: "Status" },
  { key: "pcs", label: "PCS" },
  { key: "troubleshooter", label: "Troubleshooter" },
  { key: "references", label: "References" },
];

const AUTHORIZED_USES = [
  "Lodging (hotel, temporary lodging facility)",
  "Meals and incidentals (within per diem limits)",
  "Rental vehicles (when authorized on orders)",
  "Fuel for rental vehicles",
  "Airfare (when not centrally billed)",
  "Tolls and parking",
  "Public transportation (taxi, rideshare, subway, bus)",
  "ATM cash withdrawals for meals and incidentals (limited)",
  "Baggage fees",
  "Laundry/dry cleaning on extended TDY",
];

const PROHIBITED_USES = [
  "Personal expenses of any kind",
  "Entertainment or alcohol",
  "Expenses for other travelers",
  "Non-reimbursable items",
  "Cash advances exceeding authorized amounts",
  "Purchases not related to official travel",
  "Items available through government sources",
  "Rental car upgrades not authorized on orders",
];

const OBTAINING_STEPS = [
  { title: "Complete Training", desc: "Finish the mandatory GTCC training through Travel Explorer (TraX) or your command's designated course." },
  { title: "Submit Application", desc: "Request an Individually Billed Account (IBA) through your unit Agency Program Coordinator (APC)." },
  { title: "Receive Card", desc: "Citibank mails your card directly to you. Activate it through CitiManager or the number on the card sticker." },
  { title: "Set Up CitiManager", desc: "Register at https://www.citimanager.com to manage your account, view statements, set alerts, and make payments." },
  { title: "Link to DTS Profile", desc: "Add your GTCC information to your Defense Travel System profile before creating travel authorizations." },
];

const CARD_STATUSES = [
  { status: "Active", desc: "Full use for official travel" },
  { status: "Restricted", desc: "ATM and retail purchases blocked, can still pay existing balance" },
  { status: "Suspended", desc: "No transactions allowed, account under review" },
  { status: "Canceled", desc: "Account closed, balance still due" },
  { status: "Mission Critical", desc: "Extended payment terms for PCS or deployment" },
];

const DELINQUENCY_CONSEQUENCES = [
  { days: "30 Days Past Due", consequences: ["Account flagged", "Counseling from APC"] },
  { days: "60 Days Past Due", consequences: ["Account restricted", "Notification to command", "Written counseling required"] },
  { days: "90 Days Past Due", consequences: ["Account suspended", "Salary offset initiated", "Adverse information to credit bureaus"] },
  { days: "120+ Days Past Due", consequences: ["Account canceled", "Full debt collection", "Potential UCMJ action", "Negative impact on security clearance"] },
];

const TIPS = [
  { title: "Pay early", desc: "Do not wait for the due date. Pay when your reimbursement posts." },
  { title: "Use split disbursement", desc: "Route travel pay directly to Citibank to avoid forgetting." },
  { title: "Check statements weekly", desc: "Catch errors or fraud early." },
  { title: "Save all receipts", desc: "Match them to your statement for voucher submission." },
  { title: "Contact APC before problems", desc: "If you anticipate payment issues, communicate early." },
  { title: "Never mix personal and official", desc: "Keep a separate personal card for non-travel expenses." },
];

const TRAINING_REQUIREMENTS = [
  { title: "Initial Training", desc: "Complete before receiving GTCC via Travel Explorer (TraX)" },
  { title: "Refresher Training", desc: "Required every 3 years or after delinquency/misuse" },
];

const STANDARD_TDY_STEPS = [
  "Use GTCC for all authorized expenses during travel",
  "Submit your travel voucher in DTS within 5 working days of return",
  "Set up split disbursement to pay Citibank directly from your reimbursement",
  "Pay any remaining balance through CitiManager",
  "Payment due 25-45 days from statement date",
];

const SPLIT_DISBURSEMENT_STEPS = [
  "In DTS, navigate to your voucher",
  "Select the \"Additional Options\" or \"Accounting\" section",
  "Enter split disbursement amount to match your GTCC charges",
  "The system routes payment directly to Citibank",
  "Remaining funds deposit to your personal account",
];

const PCS_AUTHORIZED_USES = [
  "Temporary Lodging Expense (TLE) at old and new duty station",
  "En route lodging",
  "Meals during travel",
  "Rental car (if authorized)",
  "Fuel for POV travel",
  "Tolls and ferry fees",
];

const PCS_PAYMENT_TIMELINE = [
  "Request Mission Critical status from APC before executing orders",
  "Extended payment terms up to 120 days available for PCS",
  "Submit PCS voucher promptly to generate reimbursement",
  "Use split disbursement to avoid delinquency",
];

const QUICK_FACTS = [
  { title: "Citibank (CONUS)", detail: "1-800-790-7206" },
  { title: "Citibank (OCONUS)", detail: "1-904-954-7850 (collect)" },
  { title: "Payment Window", detail: "25-45 days (120 for PCS)" },
  { title: "Authority", detail: "MCO 4600.40B" },
];

export default function GovernmentTravelChargeCardContent({ data }: { data: { references: Ref[] } }) {
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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">GTCC Overview</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">The Government Travel Charge Card (GTCC) is a mandatory DoD-wide VISA card for all official travel. Marines must use the GTCC for Temporary Duty (TDY) and Permanent Change of Station (PCS) expenses. The card is issued through Citibank and managed via CitiManager. Misuse is subject to UCMJ action.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Card Type</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Citibank VISA</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Individually Billed Account</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Mandatory For</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TDY &amp; PCS</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">All official travel</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Payment Window</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">25-45 Days</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Up to 120 for PCS</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Portal</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CitiManager</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Online and mobile app</p>
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

        {tab === "authorized" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authorized &amp; Prohibited Uses</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">Authorized Uses</h3>
                <ul className="mt-2 space-y-1">
                  {AUTHORIZED_USES.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-green-700 dark:text-zinc-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-red-800 dark:text-red-400">Prohibited Uses</h3>
                <ul className="mt-2 space-y-1">
                  {PROHIBITED_USES.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-red-700 dark:text-zinc-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "obtaining" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Obtaining Your GTCC</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Follow these steps to obtain and activate your Government Travel Charge Card.</p>
            <div className="mt-4 space-y-4">
              {OBTAINING_STEPS.map((step, index) => (
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
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Training Requirements</h3>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {TRAINING_REQUIREMENTS.map((req) => (
                  <div key={req.title} className="rounded-lg border border-black/5 bg-white p-3 dark:border-white/10 dark:bg-black/40">
                    <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{req.title}</div>
                    <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{req.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {tab === "payment" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Payment Process</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard TDY Travel</h3>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  {STANDARD_TDY_STEPS.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Split Disbursement</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Split disbursement sends part of your travel reimbursement directly to Citibank to pay your GTCC balance. This prevents late payments and protects your credit.</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  {SPLIT_DISBURSEMENT_STEPS.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  Important
                </div>
                <p className="mt-1 text-xs">Do not wait for the due date. Pay when your reimbursement posts to avoid delinquency.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "status" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Card Status &amp; Delinquency</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Card Status Categories</h3>
                <div className="mt-3 space-y-2">
                  {CARD_STATUSES.map((item) => (
                    <div key={item.status} className="flex items-start gap-3 rounded-lg border border-black/5 bg-white p-3 dark:border-white/10 dark:bg-black/40">
                      <span className="rounded bg-[var(--sa-navy)] px-2 py-1 text-xs font-bold text-[var(--sa-cream)]">{item.status}</span>
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-red-800 dark:text-red-400">Delinquency Consequences</h3>
                <div className="mt-3 space-y-3">
                  {DELINQUENCY_CONSEQUENCES.map((item) => (
                    <div key={item.days} className="rounded-lg border border-red-100 bg-white p-3 dark:border-white/10 dark:bg-black/40">
                      <div className="font-medium text-red-800 dark:text-red-400">{item.days}</div>
                      <ul className="mt-1 list-disc pl-5 text-xs text-red-700 dark:text-zinc-300">
                        {item.consequences.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "pcs" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCS-Specific Guidance</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MARADMIN 166/16, Marines must use GTCC during PCS travel for authorized expenses.</p>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCS Authorized Uses</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {PCS_AUTHORIZED_USES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCS Payment Timeline</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {PCS_PAYMENT_TIMELINE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Mission Critical Status
              </div>
              <p className="mt-1 text-xs">If deploying or on PCS, request mission critical status from your APC. This prevents the card from being deactivated due to non-payment during extended travel.</p>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
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
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lost or stolen card</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Call Citibank immediately: 1-800-790-7206 (CONUS) or 1-904-954-7850 (OCONUS)</li>
                  <li>Notify your APC within 24 hours</li>
                  <li>Request replacement card through CitiManager or APC</li>
                  <li>Review recent transactions for unauthorized charges</li>
                  <li>Dispute any fraudulent charges through CitiManager</li>
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
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unauthorized charges</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Dispute charge via CitiManager</li>
                  <li>Submit dispute within 60 days</li>
                  <li>Provide documentation</li>
                  <li>Temporary credit issued while investigating</li>
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
            {QUICK_FACTS.map((fact) => (
              <li key={fact.title} className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{fact.title}</div>
                <div className="text-xs text-zinc-700 dark:text-zinc-300">{fact.detail}</div>
              </li>
            ))}
          </ul>
        </section>

        <QuickLinks references={data.references} />

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tips for Success</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {TIPS.map((tip) => (
              <li key={tip.title} className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{tip.title}</div>
                <div className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{tip.desc}</div>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
