"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "performance-personnel", label: "Performance & Personnel" },
  { id: "discipline-fitness", label: "Discipline & Fitness" },
  { id: "development-awards", label: "Development & Awards" },
  { id: "quick-access", label: "Quick Access" },
  { id: "references", label: "References", type: "references" as const },
];

export function MCOQuickReferenceContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MCO Quick Reference Table</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            This table provides quick access to the Marine Corps Orders most frequently used by line leaders.
            Each entry includes the MCO number, title, primary topic coverage, and common use cases for leaders.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Where to Find MCOs</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)] dark:bg-[var(--sa-cream)]" />
              <span>Marines.mil Publications page</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)] dark:bg-[var(--sa-cream)]" />
              <span>Marine Corps Publications Electronic Library (MCPEL)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-navy)] dark:bg-[var(--sa-cream)]" />
              <span>HQMC Administrative Determinations and Decisions (AD and D)</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Governing References</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            All MCOs listed are current as of the publication date shown on each order. Verify currency at
            Marines.mil before taking action on critical matters.
          </p>
        </div>
      </section>
    ),
    "performance-personnel": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Performance Evaluation</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">MCO</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Title</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Primary Topics</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Leader Use Cases</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">MCO 1610.7B</td>
                  <td className="py-2">Performance Evaluation System (PES)</td>
                  <td className="py-2">Fitness reports, adverse reports, reporting chain, RS/RO responsibilities</td>
                  <td className="py-2">Writing fitness reports, processing adverse reports, understanding MRO rights</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">MCO 1616.1</td>
                  <td className="py-2">Junior Enlisted Performance Evaluation System (JEPES)</td>
                  <td className="py-2">Command input, four pillars, NOT REC procedures, reporting chain</td>
                  <td className="py-2">Evaluating E-1 through E-4, understanding composite scores, counseling requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Personnel and Retention</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">MCO</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Title</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Primary Topics</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Leader Use Cases</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">MCO 1040.31</td>
                  <td className="py-2">Enlisted Retention and Career Development Program</td>
                  <td className="py-2">Reenlistment prerequisites, RELM process, RE codes, separation pay</td>
                  <td className="py-2">Supporting reenlistment decisions, career planning interviews, prerequisite verification</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">MCO P1070.12K</td>
                  <td className="py-2">Individual Records Administration Manual (IRAM)</td>
                  <td className="py-2">Page 11 entries, service record documentation</td>
                  <td className="py-2">Documenting counseling, administrative remarks, record corrections</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">MCO P1400.32D</td>
                  <td className="py-2">Marine Corps Promotion Manual</td>
                  <td className="py-2">Promotion prerequisites, board procedures, meritorious promotion</td>
                  <td className="py-2">Screening for promotion eligibility, understanding promotion restrictions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    "discipline-fitness": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Discipline and Separations</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">MCO</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Title</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Primary Topics</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Leader Use Cases</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">MCO P1900.16</td>
                  <td className="py-2">Marine Corps Separation and Retirement Manual (MARCORSEPMAN)</td>
                  <td className="py-2">6105 counseling, administrative separation, discharge characterization</td>
                  <td className="py-2">Issuing 6105 entries, understanding separation authorities, ADSEP process</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">MCO 5800.16</td>
                  <td className="py-2">Legal Support and Administration Manual</td>
                  <td className="py-2">NJP procedures, courts-martial, legal holds</td>
                  <td className="py-2">NJP recommendations, understanding punishment limits, legal documentation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fitness and Readiness</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">MCO</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Title</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Primary Topics</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Leader Use Cases</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">MCO 6100.13A</td>
                  <td className="py-2">Marine Corps Physical Fitness and Combat Fitness Tests</td>
                  <td className="py-2">PFT/CFT standards, BCP/MAP, scoring, exemptions</td>
                  <td className="py-2">Administering fitness tests, counseling on failures, BCP assignment</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">MCO 1754.9B</td>
                  <td className="py-2">Unit, Personal and Family Readiness Program</td>
                  <td className="py-2">Family readiness, deployment support, emergency data</td>
                  <td className="py-2">Pre-deployment verification, family care plans, casualty assistance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    "development-awards": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Development</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">MCO</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Title</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Primary Topics</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Leader Use Cases</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">MCO 1500.61</td>
                  <td className="py-2">Marine Leader Development</td>
                  <td className="py-2">Six functional areas (5Fs plus Future), counseling philosophy</td>
                  <td className="py-2">Structuring counseling sessions, leader development planning</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">NAVMC 2795</td>
                  <td className="py-2">User's Guide to Counseling</td>
                  <td className="py-2">Counseling techniques, SMART goals, session structure</td>
                  <td className="py-2">Conducting effective counseling, documentation methods</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Duty and Schools</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">MCO</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Title</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Primary Topics</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Leader Use Cases</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">MCO 1326.6</td>
                  <td className="py-2">Special Duty Assignment Screening</td>
                  <td className="py-2">SDA prerequisites, screening requirements, disqualifiers</td>
                  <td className="py-2">Screening Marines for SDA, understanding waiver criteria</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">MCO 1553.4B</td>
                  <td className="py-2">Professional Military Education</td>
                  <td className="py-2">PME requirements by grade, enrollment procedures</td>
                  <td className="py-2">Tracking PME completion, course nominations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Awards</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">MCO</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Title</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Primary Topics</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Leader Use Cases</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">SECNAVINST 1650.1H</td>
                  <td className="py-2">Navy and Marine Corps Awards Manual</td>
                  <td className="py-2">Award criteria, precedence, wear</td>
                  <td className="py-2">Award recommendations, citation writing</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">MARADMIN 077/25</td>
                  <td className="py-2">Awards Processing</td>
                  <td className="py-2">iAPS procedures, approval authorities</td>
                  <td className="py-2">Submitting award packages, troubleshooting delays</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave and Liberty</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">MCO</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Title</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Primary Topics</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Leader Use Cases</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr>
                  <td className="py-2 font-medium">MCO 1050.3J</td>
                  <td className="py-2">Regulations for Leave, Liberty, and Administrative Absence</td>
                  <td className="py-2">Leave types, approval authorities, liberty limits</td>
                  <td className="py-2">Approving leave, setting liberty policies, UA procedures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    "quick-access": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key System References</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">System</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Primary MCO</th>
                  <th className="pb-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">MCTFS</td>
                  <td className="py-2">MCO 1616.1, MCO 1040.31</td>
                  <td className="py-2">Personnel and pay data</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">MOL</td>
                  <td className="py-2">MCO 1616.1</td>
                  <td className="py-2">Self-service portal</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">JEPES</td>
                  <td className="py-2">MCO 1616.1</td>
                  <td className="py-2">Junior enlisted evaluations</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">A-PES</td>
                  <td className="py-2">MCO 1610.7B</td>
                  <td className="py-2">Fitness report submission</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">iAPS</td>
                  <td className="py-2">MCO 1610.7B Appendix H</td>
                  <td className="py-2">Awards processing</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 font-medium">TFRS</td>
                  <td className="py-2">MCO 1040.31</td>
                  <td className="py-2">Retention requests</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">DTS</td>
                  <td className="py-2">JTR</td>
                  <td className="py-2">Travel authorization and vouchers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Access by Topic</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Need to document misconduct?</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• <strong>Minor:</strong> MCO P1070.12K (Page 11)</li>
                <li>• <strong>Serious/separation potential:</strong> MCO P1900.16 Para 6105</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Need to evaluate a Marine?</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• <strong>E-1 through E-4:</strong> MCO 1616.1 (JEPES)</li>
                <li>• <strong>E-5 and above:</strong> MCO 1610.7B (Fitness Reports)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Need to process NJP?</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                MCO 5800.16, Manual for Courts-Martial Part V
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Need to verify reenlistment eligibility?</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                MCO 1040.31 Chapter 4
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Need to counsel on PFT/CFT failure?</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                MCO 6100.13A Chapter 1
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Need to write an award?</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                SECNAVINST 1650.1H, MCO 1610.7B Appendix H
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
