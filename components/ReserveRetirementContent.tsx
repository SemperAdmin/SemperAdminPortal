"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: { references: Reference[] };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "qualifying-years", label: "Qualifying Years" },
  { id: "point-calculation", label: "Point Calculation" },
  { id: "reduced-age", label: "Reduced Age" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Qualifying Years", description: "20 years with 50+ retirement points each year" },
  { element: "Gray Area", description: "Period between qualifying and age 60" },
  { element: "Pay Start Age", description: "Age 60 (or reduced age if applicable)" },
  { element: "Point Types", description: "Membership, drill, AT, and active duty points" },
  { element: "Reduced Age", description: "90 days active = 3 months earlier (minimum age 50)" },
  { element: "Authority", description: "10 U.S.C. Chapter 1223" },
];

const POINT_TYPES = [
  { type: "Membership Points", value: "15 per year", description: "Automatic for being in SELRES" },
  { type: "Drill Points", value: "1 per 4-hour period", description: "Typically 4 points per drill weekend" },
  { type: "Annual Training", value: "1 per day", description: "14-15 days = 14-15 points" },
  { type: "Active Duty", value: "1 per day", description: "All active duty days count" },
  { type: "Correspondence Courses", value: "Varies", description: "Up to 75 points per year" },
  { type: "Funeral Honors", value: "1 per event", description: "Up to 90 points per year" },
];

const QUALIFYING_YEAR_EXAMPLE = [
  { activity: "Membership Points", points: "15" },
  { activity: "12 Drill Weekends (48 periods)", points: "48" },
  { activity: "Annual Training (14 days)", points: "14" },
  { activity: "Correspondence Courses", points: "10" },
  { activity: "Total", points: "87 points (Qualifying Year)" },
];

const REDUCED_AGE_CALCULATION = [
  { activeDays: "0-89 days", reduction: "0 months", payStartAge: "Age 60" },
  { activeDays: "90-179 days", reduction: "3 months", payStartAge: "Age 59 and 9 months" },
  { activeDays: "180-269 days", reduction: "6 months", payStartAge: "Age 59 and 6 months" },
  { activeDays: "270-359 days", reduction: "9 months", payStartAge: "Age 59 and 3 months" },
  { activeDays: "360-449 days", reduction: "12 months", payStartAge: "Age 59" },
  { activeDays: "3,600+ days (10 years)", reduction: "120 months", payStartAge: "Age 50 (minimum)" },
];

const GRAY_AREA_BENEFITS = [
  { benefit: "TRICARE Retired Reserve", available: "Yes (premium-based)" },
  { benefit: "Commissary Access", available: "Yes" },
  { benefit: "Exchange Access", available: "Yes" },
  { benefit: "Space-A Travel", available: "Yes" },
  { benefit: "Retired Pay", available: "No (starts at age 60 or reduced age)" },
];

const CHECKLIST_ITEMS = [
  "Verify you have 20 qualifying years (50+ points per year)",
  "Request retirement point statement from MMSB",
  "Verify all service periods are recorded correctly",
  "Calculate reduced age eligibility if you have active duty time",
  "Submit DD Form 108 (Reserve retirement application)",
  "Apply 9-12 months before turning age 60 (or reduced age)",
  "Verify High-3 calculation includes all creditable service",
  "Complete SBP election (spouse concurrence required if married)",
  "Set up direct deposit for retired pay",
  "Enroll in TRICARE coverage if desired",
  "Apply for VA disability rating",
  "Obtain gray area retired ID card",
  "Update ID to retired status when pay begins",
];

export function ReserveRetirementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reserve Retirement Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Reserve retirement requires 20 qualifying years of service with at least 50 retirement points
            per year. Unlike active duty retirement, reserve retired pay does not begin immediately. Pay
            starts at age 60, or earlier if you have qualifying active duty time that reduces your pay
            start age. The period between qualifying for retirement and receiving pay is called the "gray area."
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {KEY_POINTS.map((item) => (
                  <tr key={item.element}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.element}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            The Gray Area
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Between qualifying for retirement and starting pay, you are in the "gray area." During this
            period you have a gray area retired ID card and limited benefits.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Benefit</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Available in Gray Area</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {GRAY_AREA_BENEFITS.map((item) => (
                  <tr key={item.benefit}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.benefit}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.available}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Pay Calculation</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Reserve retired pay uses the point system. Total points ÷ 360 = equivalent years of service.
            This is multiplied by 2.5% and your High-3 average basic pay to determine monthly retired pay.
          </p>
        </div>
      </>
    ),

    "qualifying-years": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Qualifying Years Explained
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A qualifying year is a retirement year in which you earn at least 50 retirement points.
            You need 20 qualifying years to be eligible for reserve retirement. A retirement year runs
            from your anniversary of entering military service (not calendar year).
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Counts as a Qualifying Year
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Must earn at least 50 retirement points during the retirement year",
              "Retirement year = anniversary of entry to service, not calendar year",
              "Membership points + drill points + AT points + active duty points",
              "Correspondence courses and funeral honors also count",
              "Non-qualifying years (under 50 points) still count for High-3 calculation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Typical Qualifying Year Example
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Activity</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {QUALIFYING_YEAR_EXAMPLE.map((item) => (
                  <tr key={item.activity}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.activity}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Verify Your Years</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Request your retirement point statement from MMSB annually. Verify all points are correctly
            recorded. Errors are easier to correct while still serving than after you separate.
          </p>
        </div>
      </>
    ),

    "point-calculation": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Retirement Point System
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Reserve retired pay is calculated using total retirement points accumulated over your career.
            Different activities earn different point values. Maximum 365 points per retirement year.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Point Types and Values
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Value</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {POINT_TYPES.map((item) => (
                  <tr key={item.type}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.type}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.value}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Calculating Retired Pay
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Reserve retired pay formula:
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <p className="font-mono text-sm text-zinc-900 dark:text-zinc-100">
                Step 1: Total Points ÷ 360 = Equivalent Years
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <p className="font-mono text-sm text-zinc-900 dark:text-zinc-100">
                Step 2: Equivalent Years × 2.5% = Multiplier
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <p className="font-mono text-sm text-zinc-900 dark:text-zinc-100">
                Step 3: Multiplier × High-3 Average = Monthly Pay
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Calculation Example
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Example: 20 Years Reserve Service</p>
              <div className="mt-2 space-y-1 text-zinc-700 dark:text-zinc-300">
                <p>Total Points: 3,600</p>
                <p>Equivalent Years: 3,600 ÷ 360 = 10 years</p>
                <p>Multiplier: 10 × 2.5% = 25%</p>
                <p>High-3 Average: $5,000/month</p>
                <p>Calculation: 25% × $5,000 = $1,250/month</p>
                <p className="mt-2 font-semibold text-[var(--sa-red)]">Monthly Retired Pay at Age 60: $1,250</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),

    "reduced-age": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reduced Age Retirement
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Reserve Component members who serve on active duty in support of contingency operations
            after January 28, 2008, may qualify for reduced age retirement. For every 90 days of
            qualifying active duty, your retirement pay start age is reduced by 3 months. Minimum
            age is 50.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reduced Age Calculation
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Active Duty Days</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Age Reduction</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Pay Start Age</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {REDUCED_AGE_CALCULATION.map((item) => (
                  <tr key={item.activeDays}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.activeDays}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.reduction}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.payStartAge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Qualifying Active Duty
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Must be in support of contingency operation",
              "Must be after January 28, 2008",
              "Orders must specify contingency operation",
              "Deployment, mobilization, or contingency support",
              "Title 10 orders for qualifying operations",
              "Not all active duty time qualifies - verify with orders",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Calculation Example
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Example: 450 Days Qualifying Service</p>
              <div className="mt-2 space-y-1 text-zinc-700 dark:text-zinc-300">
                <p>Qualifying Active Duty: 450 days</p>
                <p>Calculation: 450 ÷ 90 = 5 periods</p>
                <p>Age Reduction: 5 × 3 months = 15 months</p>
                <p>Normal Pay Age: 60</p>
                <p className="mt-2 font-semibold text-[var(--sa-red)]">Reduced Pay Start Age: 58 years, 9 months</p>
              </div>
            </div>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Maximum Age Reduction</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            If you serve 10 years (3,600 days) of qualifying active duty, your pay start age can be
            reduced to age 50. This requires significant mobilization/deployment time in support of
            contingency operations.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reserve Retirement Checklist
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Complete these steps when applying for reserve retirement. Apply 9-12 months before turning
            age 60 (or your reduced age if applicable).
          </p>
          <div className="mt-4 space-y-2">
            {CHECKLIST_ITEMS.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Gray Area ID Card</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Once you qualify for retirement (20 qualifying years), obtain a gray area retired ID card.
            This provides commissary, exchange, and Space-A travel privileges. Update to standard retired
            ID when pay begins at age 60 (or reduced age).
          </p>
        </div>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
