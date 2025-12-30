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
  { id: "components", label: "Components" },
  { id: "timeline", label: "Timeline" },
  { id: "tracks", label: "Career Tracks" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function TAPContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Transition Assistance Program (TAP)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            TAP is a mandatory program for all Marines separating or retiring from active duty. The program provides comprehensive preparation for civilian life through structured training, counseling, and practical assistance in employment, education, vocational training, or entrepreneurship.
          </p>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
              TAP is mandatory for all separating/retiring Marines. Begin TAP 24 months prior to separation for optimal preparation.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Element</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Eligibility</td>
                  <td className="py-2">All separating/retiring Marines</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Start Timeline</td>
                  <td className="py-2">24 months prior to EAS/retirement</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Mandatory Components</td>
                  <td className="py-2">Pre-Sep Counseling, VA Benefits, DOL Employment, Financial Planning, Capstone</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Two-Day Tracks</td>
                  <td className="py-2">Employment, Education, Vocational, Entrepreneurship</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Authority</td>
                  <td className="py-2">MCO 1040.31</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Website</td>
                  <td className="py-2">https://www.tapevents.mil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Must Attend TAP</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Active duty Marines separating from service</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Active duty Marines retiring from service</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Active duty Marines transitioning to Reserve Component</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Marines involuntarily separated (administrative or medical)</span>
            </li>
          </ul>
        </section>
      </div>
    ),

    components: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Mandatory TAP Components
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            All Marines must complete these five mandatory components before separation or retirement.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Pre-Separation Counseling (DD 2648)</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            One-on-one counseling session with a TAP counselor to review separation benefits, entitlements, and transition resources.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What's Covered</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Transition timeline and milestones</li>
              <li>Benefits overview (VA, healthcare, education)</li>
              <li>Individual Transition Plan (ITP) development</li>
              <li>Documentation of separation counseling (DD Form 2648)</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. VA Benefits Briefing</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Comprehensive briefing on VA benefits including healthcare, disability compensation, education benefits, home loans, and burial benefits.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Topics Covered</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>VA healthcare enrollment</li>
              <li>Disability compensation claims (BDD process)</li>
              <li>GI Bill and education benefits</li>
              <li>VA home loan program</li>
              <li>Veterans Service Organizations (VSOs)</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. DOL Employment Workshop</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Department of Labor employment workshop covering job search strategies, resume writing, interview skills, and labor market information.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Skills Development</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Translating military skills to civilian terms</li>
              <li>Resume and cover letter writing</li>
              <li>Job search techniques and networking</li>
              <li>Interview preparation</li>
              <li>Salary negotiation</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4. Financial Planning</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Financial readiness briefing covering budgeting, credit management, insurance, and financial planning for transition.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Financial Topics</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Budgeting for civilian life</li>
              <li>Understanding credit and debt management</li>
              <li>Insurance needs (health, life, auto, home)</li>
              <li>Retirement planning (TSP, 401k, IRA)</li>
              <li>Final pay and leave settlement</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5. Capstone Event</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Final verification that all TAP requirements are complete and transition goals are documented. Must be completed 90 days prior to separation.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Capstone Requirements</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>All mandatory components completed</li>
              <li>Individual Transition Plan (ITP) complete and verified</li>
              <li>Career readiness standards (CRS) assessment</li>
              <li>Command approval and counselor verification</li>
            </ul>
          </div>
          <div className="mt-3 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
              Capstone must be completed at least 90 days before your separation date. Schedule early to avoid delays.
            </p>
          </div>
        </section>
      </div>
    ),

    timeline: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TAP Timeline
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            TAP is a progressive program starting up to 24 months before separation. Follow this timeline to ensure all requirements are met.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TAP Milestones</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timeline</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Action</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">24 Months Out</td>
                  <td className="py-2">Begin exploring transition resources; attend TAP overview</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">18-12 Months Out</td>
                  <td className="py-2">Complete Pre-Separation Counseling (DD 2648); develop Individual Transition Plan</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">12 Months Out</td>
                  <td className="py-2">Attend VA Benefits Briefing; begin disability claims process (BDD)</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">12-6 Months Out</td>
                  <td className="py-2">Complete DOL Employment Workshop and Financial Planning briefing</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">6-4 Months Out</td>
                  <td className="py-2">Attend two-day TAP track (Employment, Education, Vocational, or Entrepreneurship)</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">90 Days Out</td>
                  <td className="py-2">Complete Capstone event; verify all TAP requirements met</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Final 90 Days</td>
                  <td className="py-2">Execute transition plan; finalize employment/education; complete separation checklist</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Critical Deadlines</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-red)]">180 Days Before Separation</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Earliest you can file VA disability claim through Benefits Delivery at Discharge (BDD) program. BDD provides fastest claim processing.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-red)]">90 Days Before Separation</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Capstone must be completed by this date. Latest you can file BDD claim. Regular VA claims can be filed anytime.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-red)]">Before Separation Date</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                All TAP components and Capstone must be complete. Command will not authorize separation without TAP completion.
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    tracks: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Two-Day TAP Tracks
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            After completing mandatory components, all Marines must attend one of four two-day tracks based on their post-military goals.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Employment Track</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For Marines seeking civilian employment after separation. Focuses on job search, career planning, and workplace transition.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Track Content</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Advanced resume and LinkedIn profile building</li>
              <li>Job search strategies and networking techniques</li>
              <li>Interview skills and salary negotiation</li>
              <li>Professional development and workplace culture</li>
              <li>Veterans preference in federal employment</li>
              <li>Online job search tools and resources</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Education Track</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For Marines planning to pursue higher education using GI Bill or other education benefits.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Track Content</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>GI Bill benefits (Post-9/11, Montgomery, Chapter 33)</li>
              <li>College application process and admissions</li>
              <li>Selecting schools and programs</li>
              <li>Financial aid and scholarships for veterans</li>
              <li>Academic success strategies for student veterans</li>
              <li>Campus resources for veterans</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Vocational Track</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For Marines pursuing technical certifications, apprenticeships, or vocational training programs.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Track Content</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Technical certifications and credentialing</li>
              <li>Apprenticeship programs and skilled trades</li>
              <li>GI Bill approved vocational programs</li>
              <li>VA Vocational Rehabilitation (VR&E)</li>
              <li>On-the-job training opportunities</li>
              <li>Industry-specific licensing requirements</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Entrepreneurship Track</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For Marines interested in starting their own business or becoming self-employed.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Track Content</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Business planning and feasibility analysis</li>
              <li>Financing options (SBA loans, grants, investors)</li>
              <li>Legal structure (LLC, S-Corp, sole proprietorship)</li>
              <li>Marketing and customer development</li>
              <li>SBA resources for veteran entrepreneurs</li>
              <li>Franchise opportunities for veterans</li>
            </ul>
          </div>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TAP Completion Checklist
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mandatory Components</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Complete Pre-Separation Counseling (DD Form 2648)",
              "Develop Individual Transition Plan (ITP)",
              "Attend VA Benefits Briefing",
              "Attend DOL Employment Workshop",
              "Complete Financial Planning briefing",
              "Attend one two-day track (Employment, Education, Vocational, or Entrepreneurship)",
              "Complete Capstone event (90 days before separation)",
              "Verify Career Readiness Standards (CRS) assessment",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VA Benefits Actions</h3>
          <ul className="mt-3 space-y-2">
            {[
              "File VA disability claim (180-90 days before separation via BDD)",
              "Complete VA medical examinations",
              "Enroll in VA healthcare",
              "Apply for GI Bill Certificate of Eligibility (if applicable)",
              "Contact Veterans Service Organization (VSO) for claims assistance",
              "Register on eBenefits and VA.gov",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Career Preparation</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Create professional resume and LinkedIn profile",
              "Begin job search or college applications",
              "Network with employers or educational institutions",
              "Complete interviews or campus visits",
              "Obtain certifications or credentials (if applicable)",
              "Research salary expectations and cost of living",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrative Tasks</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Update SGLI beneficiary (if converting to VGLI)",
              "Plan for healthcare transition (TRICARE to VA or private)",
              "Review TSP and retirement account options",
              "Obtain copies of medical and dental records",
              "Request DD-214 verification letter",
              "Update emergency contacts and personal information",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
