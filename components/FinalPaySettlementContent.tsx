"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: {
    references: Reference[];
  };
}

const KEY_POINTS = [
  { label: "Pay System", value: "MCTFS (Marine Corps Total Force System)" },
  { label: "Entitlements Change", value: "BAH rate changes to new duty station" },
  { label: "Travel Advance", value: "Request through DTS or Finance" },
  { label: "DLA", value: "Dislocation Allowance paid once per PCS" },
  { label: "Settlement Timeline", value: "Within first pay period at new station" },
  { label: "Authority", value: "JTR, DoD FMR 7000.14-R" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "entitlements", label: "PCS Entitlements" },
  { id: "travel", label: "Travel & Voucher" },
  { id: "issues", label: "Common Issues" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const ALLOWANCES_THAT_CHANGE = [
  { entitlement: "BAH", description: "Changes to new duty station rate on report date" },
  { entitlement: "COLA", description: "Changes based on new location (if applicable)" },
  { entitlement: "OHA", description: "Changes to new OCONUS location rate (if applicable)" },
  { entitlement: "Hardship Duty Pay", description: "Starts or stops based on new location" },
  { entitlement: "Special Pays", description: "May change based on new assignment" },
];

const ONE_TIME_PAYMENTS = [
  { payment: "DLA", description: "Dislocation Allowance for housing disruption" },
  { payment: "MALT", description: "Mileage rate for POV travel" },
  { payment: "Per Diem", description: "Daily rate for travel days and TLE" },
  { payment: "TLE", description: "Temporary Lodging Expense (up to 14 days CONUS)" },
];

const BEFORE_DEPARTURE_STEPS = [
  "Review current LES for accuracy",
  "Check for any outstanding debts",
  "Verify allotments are correct",
  "Confirm direct deposit information",
];

const TRAVEL_ADVANCE_OPTIONS = [
  "Advance pay (up to 3 months base pay OCONUS)",
  "Travel advance (estimated per diem)",
  "DLA advance",
];

const TRAVEL_RECORDS_TO_KEEP = [
  "Lodging receipts",
  "Fuel receipts (if claiming)",
  "Toll receipts",
  "Rental car receipts",
  "Airfare receipts",
];

const TRAVEL_CLAIM_ITEMS = [
  { item: "MALT (mileage)", documentation: "Official distance via DTOD" },
  { item: "Per Diem", documentation: "Actual travel days" },
  { item: "Lodging", documentation: "Receipts required" },
  { item: "TLE", documentation: "Receipts required, up to 14 days CONUS" },
  { item: "DLA", documentation: "Automatic with orders, may need to claim" },
];

const COMMON_PAY_ISSUES = [
  {
    issue: "BAH Not Updated",
    cause: "Check-in not processed in MCTFS",
    resolution: ["Verify check-in with S-1", "Provide orders copy to Finance", "Request BAH correction"],
  },
  {
    issue: "DLA Not Received",
    cause: "Not claimed or orders not processed",
    resolution: ["Verify DLA entitlement on orders", "Submit claim through DTS or Finance", "Provide dependent documentation if with-dependent rate"],
  },
  {
    issue: "Travel Advance Not Deducted",
    cause: "Voucher not settled",
    resolution: ["Submit travel voucher promptly", "Advance deducted from reimbursement", "If voucher delayed, payroll deduction begins"],
  },
  {
    issue: "Pay Gap Between Stations",
    cause: "Timing of detachment and check-in",
    resolution: ["Ensure detachment date reported correctly", "Check in promptly at new station", "Contact Finance if pay missing"],
  },
];

const PCA_CHANGES = [
  "Duty assignment within same installation",
  "Usually no change to BAH",
  "No DLA entitlement (no household move)",
  "No travel entitlements (local move)",
];

const PCA_SAME = [
  "BAH rate (same duty station)",
  "BAS",
  "Most special pays (unless duty-specific)",
];

const CHECKLIST_BEFORE = [
  "Review LES for accuracy",
  "Clear any outstanding debts",
  "Request travel advance (if needed)",
  "Verify direct deposit information",
  "Document current allowances",
];

const CHECKLIST_ARRIVAL = [
  "Check in with S-1 and Finance",
  "Verify BAH rate updated",
  "Confirm DLA processed",
  "Submit travel voucher within 5 days",
  "Review first LES at new station",
];

export function FinalPaySettlementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PCS Pay Settlement Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Final pay settlement for PCS and PCA ensures your pay account transfers correctly to your new
            duty station with accurate entitlements. Unlike separation pay settlement, PCS pay settlement
            focuses on closing out allowances at your current location and establishing correct entitlements
            at your gaining command. Proper coordination prevents pay gaps and ensures you receive all
            authorized PCS entitlements.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">PCA Pay Considerations</h4>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">What Changes</p>
              <ul className="mt-1 space-y-1 text-sm text-blue-600 dark:text-blue-400">
                {PCA_CHANGES.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">What Stays Same</p>
              <ul className="mt-1 space-y-1 text-sm text-blue-600 dark:text-blue-400">
                {PCA_SAME.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    entitlements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Allowances That Change
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Entitlement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">What Happens</th>
                </tr>
              </thead>
              <tbody>
                {ALLOWANCES_THAT_CHANGE.map((row) => (
                  <tr key={row.entitlement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.entitlement}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            One-Time PCS Payments
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Payment</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {ONE_TIME_PAYMENTS.map((row) => (
                  <tr key={row.payment} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.payment}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Departure
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Verify Pay Account</h4>
              <ol className="mt-2 space-y-1 list-decimal list-inside">
                {BEFORE_DEPARTURE_STEPS.map((step) => (
                  <li key={step} className="text-sm text-zinc-700 dark:text-zinc-300">{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Request Travel Advance</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">If needed, request through DTS or Finance:</p>
              <ul className="mt-2 space-y-1">
                {TRAVEL_ADVANCE_OPTIONS.map((option) => (
                  <li key={option} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)] mt-0.5">•</span>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Upon Arrival
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Check-In With Finance</h4>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                <li>Provide copy of endorsed orders</li>
                <li>Verify BAH rate updated to new location</li>
                <li>Confirm DLA payment processed</li>
                <li>Update any location-based allowances</li>
                <li>Verify dependent information current</li>
              </ol>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">BAH Rate Change</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Your BAH rate changes to the new duty station rate:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Effective date is your report date</li>
                <li>• Rate based on new duty station ZIP code</li>
                <li>• Dependency status remains same (unless changed)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Verify First LES</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                Check your first LES at new duty station for:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• Correct BAH rate</li>
                <li>• DLA payment (if not already received)</li>
                <li>• Any travel advance deductions scheduled</li>
                <li>• Correct duty station reflected</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    travel: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            During PCS Travel
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Maintain Records</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Keep documentation for travel claim:</p>
              <ul className="mt-2 space-y-1">
                {TRAVEL_RECORDS_TO_KEEP.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Per Diem Entitlement</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">You receive per diem for authorized travel days:</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Meals and Incidental Expenses (M&IE)</li>
                <li>• Lodging (actual cost up to locality rate)</li>
                <li>• Constructed travel time for POV</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Travel Claim Settlement
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">When to Submit</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Submit travel voucher within 5 working days of arrival at new duty station.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Required Documents</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• PCS orders (endorsed)</li>
                <li>• Receipts for lodging</li>
                <li>• Receipts for expenses over $75</li>
                <li>• Constructed travel worksheet (if applicable)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What You Claim
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Item</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Documentation</th>
                </tr>
              </thead>
              <tbody>
                {TRAVEL_CLAIM_ITEMS.map((row) => (
                  <tr key={row.item} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.item}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.documentation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Pay Issues During PCS
          </h3>
          <div className="mt-4 space-y-4">
            {COMMON_PAY_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-red-700 dark:text-red-400">{item.issue}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium">Cause:</span> {item.cause}
                </p>
                <div className="mt-2">
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">Resolution:</span>
                  <ul className="mt-1 space-y-1">
                    {item.resolution.map((step) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-green-600 mt-0.5">•</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resources
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Unit Finance/Disbursing</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Travel advances, pay issues</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">IPAC</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">MCTFS updates, check-in processing</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">myPay</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">https://mypay.dfas.mil</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">DTS</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Travel voucher submission</p>
            </div>
          </div>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Departure
          </h3>
          <ul className="mt-4 space-y-2">
            {CHECKLIST_BEFORE.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Upon Arrival
          </h3>
          <ul className="mt-4 space-y-2">
            {CHECKLIST_ARRIVAL.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
