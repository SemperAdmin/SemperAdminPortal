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
  { label: "Definition", value: "Primary MOS (PMOS) - main occupational specialty for assignments" },
  { label: "Authority", value: "MCO 1220.1 (MOS Manual)" },
  { label: "Change Methods", value: "Lateral move, reclassification, progression" },
  { label: "System", value: "MCTFS - Marine Corps Total Force System" },
  { label: "Contact", value: "Career Planner, MMEA, S-1" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "change-types", label: "Change Types" },
  { id: "verification", label: "Verification" },
  { id: "impact", label: "Impact" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const PMOS_CHANGE_TYPES = [
  { type: "Lateral Move", description: "Voluntary change to different MOS", initiated: "Marine request" },
  { type: "Reclassification", description: "Involuntary change by Marine Corps", initiated: "HQMC direction" },
  { type: "Progression", description: "Advancement within MOS family", initiated: "Training/experience" },
  { type: "Correction", description: "Fix error in recorded PMOS", initiated: "Admin action" },
];

const VERIFICATION_LOCATIONS = [
  { location: "MOL (Marine Online)", access: "Self-service", shows: "Current PMOS, history" },
  { location: "MCTFS", access: "Via S-1", shows: "Official record" },
  { location: "SRB/OQR", access: "Unit files", shows: "Service record entries" },
  { location: "LES", access: "Self-service", shows: "Current MOS" },
];

const PMOS_IMPACTS = [
  { area: "Assignments", impact: "Determines which billets you can fill" },
  { area: "Promotion", impact: "Compete against peers in same MOS" },
  { area: "Training", impact: "Required schools and PME tied to PMOS" },
  { area: "Duty Stations", impact: "Location options based on PMOS needs" },
  { area: "Career Path", impact: "Progression milestones MOS-specific" },
  { area: "SRB", impact: "Reenlistment bonus based on PMOS" },
];

const PROGRESSION_EXAMPLES = [
  { initial: "0311", final: "0369", description: "Infantry Rifleman to Infantry Unit Leader" },
  { initial: "0811", final: "0848", description: "Cannon Crewmember to Artillery Operations Chief" },
  { initial: "0621", final: "0629", description: "Radio Operator to Communications Chief" },
  { initial: "3043", final: "3051", description: "Supply Administration to Warehouse Clerk" },
];

const CORRECTION_REASONS = [
  "Data entry error during initial MOS assignment",
  "School graduation not properly recorded",
  "Lateral move not processed correctly",
  "Reclassification not completed in system",
  "Previous PMOS incorrectly carried forward",
];

export function PrimaryMOSChangesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Primary MOS (PMOS) Changes
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Your Primary MOS (PMOS) is your main occupational specialty in the Marine Corps. It
            determines your assignments, promotion competition, and career path. PMOS can change
            through lateral moves (voluntary), reclassification (involuntary), or progression
            (natural advancement within an MOS family).
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PMOS vs. AMOS
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Primary MOS (PMOS)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Main occupational specialty</li>
                <li>• Determines normal assignment</li>
                <li>• Promotion competition pool</li>
                <li>• One PMOS at a time</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Additional MOS (AMOS)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Secondary specialties</li>
                <li>• Supplements PMOS</li>
                <li>• Multiple AMOS possible</li>
                <li>• May be used for assignment</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Accuracy Matters</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Your PMOS in MCTFS determines your assignment pool and promotion competition.
            If it&apos;s incorrect, you may receive wrong assignments or compete in the wrong MOS.
            Verify regularly and correct any errors promptly.
          </p>
        </section>
      </div>
    ),

    "change-types": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of PMOS Changes
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Initiated By</th>
                </tr>
              </thead>
              <tbody>
                {PMOS_CHANGE_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.initiated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MOS Progression Examples
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Initial</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Final</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {PROGRESSION_EXAMPLES.map((item) => (
                  <tr key={item.initial} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.initial}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.final}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reasons for PMOS Correction
          </h3>
          <ul className="mt-4 space-y-2">
            {CORRECTION_REASONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Previous PMOS Becomes AMOS</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            When you change PMOS through a lateral move, your former PMOS typically becomes an
            AMOS. This preserves your qualification in the previous field while establishing
            your new primary specialty.
          </p>
        </section>
      </div>
    ),

    verification: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Where to Verify PMOS
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Location</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Access</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Shows</th>
                </tr>
              </thead>
              <tbody>
                {VERIFICATION_LOCATIONS.map((item) => (
                  <tr key={item.location} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.location}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.access}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.shows}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verification Steps
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Log into MOL (Marine Online)",
              "Navigate to personal data section",
              "Review PMOS field",
              "Check AMOS listings",
              "Compare to school certificates/orders",
              "Request MCTFS printout from S-1 if discrepancy found",
            ].map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Correction Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Identify specific PMOS error",
              "Gather supporting documentation",
              "Submit correction request to S-1",
              "S-1 prepares corrective Unit Diary",
              "IPAC processes Unit Diary",
              "Verify correction in MCTFS/MOL",
            ].map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Regular Checks</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Verify your PMOS after any MOS-related action: school completion, lateral move,
            reclassification, or promotion. Errors are easier to correct when caught early.
          </p>
        </section>
      </div>
    ),

    impact: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PMOS Impact Areas
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Area</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Impact</th>
                </tr>
              </thead>
              <tbody>
                {PMOS_IMPACTS.map((item) => (
                  <tr key={item.area} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.area}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Assignment Impact
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your PMOS determines which billets you can fill and where you can be assigned:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Only assigned to billets matching your PMOS (normally)",
              "Geographic options tied to where PMOS billets exist",
              "Unit assignment pool based on PMOS",
              "Special duty eligibility may depend on PMOS",
              "Deployment assignments often PMOS-specific",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Promotion Impact
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Cutting Score</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                E-4/E-5 cutting scores are MOS-specific. You compete against others in your PMOS.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Selection Board</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                E-6+ boards consider you within your occupational field context.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Wrong PMOS Consequences</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If your PMOS is incorrect in MCTFS, you may be assigned to wrong billets, compete
            for promotion in the wrong MOS, or miss opportunities in your actual field. Correct
            errors immediately.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PMOS Verification Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Check PMOS in MOL",
              "Compare to school graduation certificate",
              "Verify matches current job/assignment",
              "Review LES for correct MOS",
              "Check with S-1 if discrepancy found",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            After PMOS Change
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Verify new PMOS in MCTFS/MOL",
              "Confirm old PMOS became AMOS (if applicable)",
              "Update career plan with Career Planner",
              "Understand new promotion competition",
              "Learn about new career path milestones",
              "Check for SRB changes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If PMOS Incorrect
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Document the error specifically",
              "Gather supporting documentation",
              "Submit correction request to S-1",
              "Request corrective Unit Diary",
              "Follow up on processing",
              "Verify correction complete",
              "Check promotion eligibility updated",
            ].map((item) => (
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
