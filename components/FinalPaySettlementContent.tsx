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
  { label: "Processing Agency", value: "Defense Finance and Accounting Service (DFAS)" },
  { label: "Key Form", value: "NAVMC 11060 (Request for Separation/Retirement/Discharge)" },
  { label: "Submission Deadline", value: "At least 10 days before terminal leave starts" },
  { label: "myPay Access", value: "Maintain for 13 months post-separation" },
  { label: "Direct Deposit", value: "Keep account open 6 months post-separation" },
  { label: "Audit Trigger", value: "Any outstanding debt delays payment 120+ days" },
  { label: "Authority", value: "DoD FMR 7000.14-R Volume 7A" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "components", label: "Pay Components" },
  { id: "forms", label: "Forms & myPay" },
  { id: "debts", label: "Debt Clearance" },
  { id: "timeline", label: "Timeline" },
  { id: "references", label: "References", type: "references" as const },
];

export function FinalPaySettlementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section
          className="rounded-lg p-6"
          style={{ backgroundColor: "var(--sa-cream)" }}
        >
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Final Pay Settlement Overview
          </h2>
          <p className="mb-4 text-gray-700">
            Final pay settlement is the process of closing your military pay account upon separation,
            retirement, or discharge. The Defense Finance and Accounting Service (DFAS) calculates and
            disburses your final pay, including any unused leave, allowances, and entitlements owed.
            Outstanding debts or incomplete documentation triggers an audit that delays payment.
            Proactive management of your pay account and timely submission of required forms ensures
            you receive your final pay without delay.
          </p>
        </section>

        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Key Requirements
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead style={{ backgroundColor: "var(--sa-navy)" }}>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Element
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Requirement
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {KEY_POINTS.map((point, idx) => (
                  <tr
                    key={point.label}
                    className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : ""}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                      {point.label}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {point.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            30 Days Before Terminal Leave Checklist
          </h3>
          <div className="grid gap-2">
            {[
              "Update personal email in myPay",
              "Verify direct deposit information",
              "Review LES for accuracy and debts",
              "Submit NAVMC 11060",
              "Clear any outstanding debts",
              "Download recent LES copies",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded"
              >
                <span className="text-green-600 dark:text-green-400">☐</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-lg p-6"
          style={{ backgroundColor: "var(--sa-cream)" }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            After Separation Checklist
          </h3>
          <div className="grid gap-2">
            {[
              "Monitor myPay for final pay deposit",
              "Keep direct deposit account open",
              "Download final LES when available",
              "Contact DFAS if payment not received within 10 days",
              "Save tax documents (W-2) when available",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded"
              >
                <span className="text-green-600 dark:text-green-400">☐</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    components: (
      <div className="space-y-6">
        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            What You Receive
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Your final pay settlement includes:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead style={{ backgroundColor: "var(--sa-navy)" }}>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Component
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { component: "Base Pay", desc: "Prorated through date of discharge" },
                  { component: "BAH", desc: "Prorated through date of discharge" },
                  { component: "BAS", desc: "Prorated through date of discharge" },
                  { component: "Special/Incentive Pay", desc: "Prorated through eligibility end date" },
                  { component: "Unused Leave", desc: "Paid at daily base pay rate (up to 60 days sellback career limit)" },
                  { component: "Travel Entitlements", desc: "Submitted separately via final travel claim" },
                ].map((row, idx) => (
                  <tr
                    key={row.component}
                    className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : ""}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                      {row.component}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {row.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Deductions From Final Pay
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Your final pay may be reduced by:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Federal and state income tax withholding",
              "FICA (Social Security and Medicare)",
              "Outstanding debts to the government",
              "Unpaid advance pay balance",
              "Unpaid travel advances",
              "Overpayments requiring recoupment",
              "Court-ordered garnishments",
              "Voluntary allotments (until terminated)",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-900/20 rounded"
              >
                <span style={{ color: "var(--sa-red)" }}>−</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-lg p-6"
          style={{ backgroundColor: "var(--sa-cream)" }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Terminal Leave Pay
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">How It Works</h4>
              <p className="text-sm text-gray-700 mb-2">
                During terminal leave, you remain on active duty status and receive normal pay:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Base pay continues until EAS date</li>
                <li>• BAH continues until EAS date</li>
                <li>• BAS continues until EAS date</li>
                <li>• Special pays continue (if still eligible)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Leave Sellback</h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Paid at your daily base pay rate</li>
                <li>• Maximum 60 days sellback over entire career</li>
                <li>• Taxable as regular income</li>
                <li>• Included in final pay settlement</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Leave Balance Considerations
          </h3>
          <div className="grid gap-3">
            {[
              { item: "Leave over 60 days is lost on October 1st without SLA authorization" },
              { item: "Plan terminal leave to use accrued leave before fiscal year end" },
              { item: "Request Special Leave Accrual if needed" },
            ].map((row, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded"
              >
                <span className="text-yellow-600">⚠</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{row.item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    forms: (
      <div className="space-y-6">
        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            NAVMC 11060
          </h3>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Request for Separation/Retirement/Discharge (Permissive TAD/Terminal Leave)
          </p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              Submit at least 10 days before approved terminal leave begins
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              Required for processing final pay settlement
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              Includes terminal leave request and Home of Record information
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              Routes through command to IPAC
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Other Required Documents
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead style={{ backgroundColor: "var(--sa-navy)" }}>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Document
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { doc: "DD Form 214", purpose: "Verifies separation date and type" },
                  { doc: "Separation Orders", purpose: "Authorizes separation and travel entitlements" },
                  { doc: "Final Travel Voucher", purpose: "Claims travel reimbursement to HOR" },
                  { doc: "Leave Settlement", purpose: "Documents unused leave for payment" },
                ].map((row, idx) => (
                  <tr
                    key={row.doc}
                    className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : ""}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                      {row.doc}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          className="rounded-lg p-6"
          style={{ backgroundColor: "var(--sa-cream)" }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            myPay Account Management
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Before Separation</h4>
              <ol className="text-sm text-gray-700 space-y-1 ml-4 list-decimal list-inside">
                <li>Log into myPay at https://mypay.dfas.mil</li>
                <li>Update personal email address (not .mil)</li>
                <li>Verify direct deposit information is current</li>
                <li>Review recent LES for accuracy</li>
                <li>Check for any debt notifications</li>
                <li>Download and save recent LES copies</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">After Separation</h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• myPay access continues for 13 months after discharge</li>
                <li>• Use personal email credentials (CAC no longer works)</li>
                <li>• Monitor for final pay deposit</li>
                <li>• Check for any adjustments or supplemental payments</li>
                <li>• Download tax documents (W-2)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-lg border-2 border-yellow-400 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 p-6">
          <h3 className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
            ⚠ Important: Maintaining Access
          </h3>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            Connect a personal email to your myPay account before separation. Your .mil email and
            CAC access will terminate upon discharge.
          </p>
        </section>

        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Direct Deposit Requirements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Before Separation</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Verify banking information in myPay is correct</li>
                <li>• Do not close or change accounts before separation</li>
                <li>• Ensure sufficient account activity to keep account active</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">After Separation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Keep your direct deposit account open for at least 6 months.</strong>
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Final pay deposit</li>
                <li>• Late adjustments or corrections</li>
                <li>• Supplemental payments</li>
                <li>• Tax refunds if overpaid</li>
                <li>• Travel voucher reimbursement</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    debts: (
      <div className="space-y-6">
        <section className="rounded-lg border-2 border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900/20 p-6">
          <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--sa-red)" }}>
            Why Debts Matter
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Any outstanding debt triggers an automatic audit of your pay account. This audit
            delays final pay settlement by 120 days or more.
          </p>
        </section>

        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Common Debts
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead style={{ backgroundColor: "var(--sa-navy)" }}>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Debt Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    How It Occurs
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { type: "Advance Pay", cause: "OCONUS advance not fully repaid" },
                  { type: "Travel Advance", cause: "Outstanding DTS advance" },
                  { type: "Overpayment", cause: "BAH, special pay, or entitlement overpayment" },
                  { type: "GTCC Balance", cause: "Unpaid government travel card" },
                  { type: "Missing Gear", cause: "CIF shortage requiring payment" },
                  { type: "Meal Deductions", cause: "Field duty meal charges" },
                ].map((row, idx) => (
                  <tr
                    key={row.type}
                    className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : ""}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                      {row.type}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {row.cause}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          className="rounded-lg p-6"
          style={{ backgroundColor: "var(--sa-cream)" }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Clearing Debts
          </h3>
          <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
            <li>Check your LES remarks section for debt notifications</li>
            <li>Contact your finance/disbursing office for debt details</li>
            <li>Pay off debts before separation date</li>
            <li>Obtain written confirmation of debt clearance</li>
            <li>Provide documentation to IPAC with separation package</li>
          </ol>
        </section>

        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Debt Consequences
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead style={{ backgroundColor: "var(--sa-navy)" }}>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Debt Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Impact on Final Pay
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { status: "No debt", impact: "Final pay processed normally" },
                  { status: "Small debt", impact: "Deducted from final pay, may trigger audit" },
                  { status: "Large debt", impact: "Triggers audit, 120+ day delay" },
                  { status: "Disputed debt", impact: "Requires resolution before payment" },
                ].map((row, idx) => (
                  <tr
                    key={row.status}
                    className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : ""}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                      {row.status}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Common Issues and Solutions
          </h3>
          <div className="space-y-4">
            {[
              {
                issue: "Pay Not Received Within Expected Timeframe",
                causes: ["Audit flag on account", "Incorrect banking information", "Incomplete separation documents", "Processing backlog"],
                resolution: ["Check myPay for account status", "Contact DFAS customer service", "Contact your former unit Admin/Finance office", "Provide documentation if requested"],
              },
              {
                issue: "Incorrect Final Pay Amount",
                causes: ["Debt deduction", "Incorrect leave balance", "Overpayment recoupment", "Tax calculation error"],
                resolution: ["Review final LES in myPay", "Compare to expected calculations", "Contact DFAS for explanation", "Submit correction request if error confirmed"],
              },
              {
                issue: "Audit Delay",
                causes: ["Outstanding debt", "Pay discrepancy", "Missing documentation", "System flag"],
                resolution: ["Contact DFAS to identify audit reason", "Provide requested documentation", "Clear any outstanding debts", "Follow up regularly until resolved"],
              },
            ].map((item) => (
              <div
                key={item.issue}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded"
              >
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {item.issue}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Possible Causes:
                    </p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      {item.causes.map((c) => (
                        <li key={c}>• {c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Resolution:
                    </p>
                    <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-decimal list-inside">
                      {item.resolution.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    timeline: (
      <div className="space-y-6">
        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Normal Processing Timeline
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead style={{ backgroundColor: "var(--sa-navy)" }}>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Timeframe
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { event: "Separation date", timeframe: "Day 0" },
                  { event: "Pay account closed", timeframe: "1-3 days after separation" },
                  { event: "Final pay calculated", timeframe: "3-5 business days" },
                  { event: "EFT deposit", timeframe: "5-10 business days" },
                ].map((row, idx) => (
                  <tr
                    key={row.event}
                    className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : ""}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                      {row.event}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {row.timeframe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border-2 border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900/20 p-6">
          <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--sa-red)" }}>
            Audit Processing Timeline
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            If your account is flagged for audit:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead style={{ backgroundColor: "var(--sa-red)" }}>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Timeframe
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { event: "Audit initiated", timeframe: "At separation" },
                  { event: "Audit review", timeframe: "60-120 days" },
                  { event: "Resolution", timeframe: "Varies based on complexity" },
                  { event: "Final payment", timeframe: "After audit completion" },
                ].map((row, idx) => (
                  <tr
                    key={row.event}
                    className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : ""}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                      {row.event}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {row.timeframe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          className="rounded-lg p-6"
          style={{ backgroundColor: "var(--sa-cream)" }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            Special Situations
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Medical Separation",
                items: [
                  "Final pay includes any disability severance pay (if applicable)",
                  "Coordinate with PEB and IPAC for proper documentation",
                  "Ensure all medical separation documents are in OBI package",
                ],
              },
              {
                title: "Early Separation",
                items: [
                  "Verify separation authority is documented",
                  "Ensure approval letters are included in package",
                  "Confirm entitlements based on separation type",
                ],
              },
              {
                title: "Retirement",
                items: [
                  "Retirement pay begins first day of month following retirement",
                  "Final active duty pay separate from retirement pay",
                  "Verify retirement orders and documentation complete",
                ],
              },
              {
                title: "Reserve Separation",
                items: [
                  "Final pay based on active duty performed",
                  "Include all MROWS orders and modifications",
                  "Verify drill pay and annual training pay settled",
                ],
              },
            ].map((situation) => (
              <div
                key={situation.title}
                className="p-4 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {situation.title}
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {situation.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--sa-navy)" }}
          >
            DFAS Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                Customer Service
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>DFAS Cleveland (Military Pay):</strong><br />
                Phone: 1-888-332-7411<br />
                Hours: Monday-Friday, 0800-1700 EST
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                <strong>myPay Assistance:</strong><br />
                Phone: 1-888-332-7411<br />
                Website: https://mypay.dfas.mil
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                Written Correspondence
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                DFAS Cleveland Center<br />
                DFAS-CL/ZA<br />
                1240 East 9th Street<br />
                Cleveland, OH 44199-2055
              </p>
            </div>
          </div>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
