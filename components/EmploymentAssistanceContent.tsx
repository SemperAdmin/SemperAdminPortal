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
  { id: "resources", label: "Resources" },
  { id: "federal-employment", label: "Federal Employment" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function EmploymentAssistanceContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Employment Assistance Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Employment assistance programs help transitioning service members translate military skills to civilian careers, develop job search strategies, and connect with employers. The TAP Employment Track and various veteran employment resources provide comprehensive support for your civilian career transition.
          </p>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Start your job search 6-12 months before separation. Build your resume, LinkedIn profile, and network early for best results.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TAP Employment Track</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The two-day TAP Employment Track is designed for Marines seeking civilian employment after separation. This intensive workshop covers all aspects of job searching and career transition.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Topic</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Skills Translation</td>
                  <td className="py-2">Convert military experience to civilian resume language</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Resume Building</td>
                  <td className="py-2">Create professional resume and LinkedIn profile</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Job Search</td>
                  <td className="py-2">Effective job search strategies and online tools</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Networking</td>
                  <td className="py-2">Professional networking techniques and veteran connections</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Interviewing</td>
                  <td className="py-2">Interview preparation, common questions, and follow-up</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Salary Negotiation</td>
                  <td className="py-2">Understanding compensation packages and negotiation strategies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Translating Military Skills</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Civilian employers may not understand military terms and ranks. Focus on skills, accomplishments, and transferable competencies.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leadership</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Team management</li>
                <li>Project leadership</li>
                <li>Performance evaluation</li>
                <li>Training and development</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Technical Skills</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Equipment maintenance</li>
                <li>Technical troubleshooting</li>
                <li>Systems operation</li>
                <li>Quality control</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrative</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Logistics coordination</li>
                <li>Budget management</li>
                <li>Personnel administration</li>
                <li>Inventory control</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Soft Skills</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Communication</li>
                <li>Problem-solving</li>
                <li>Adaptability</li>
                <li>Work ethic</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Employment Pathways</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span><strong>Federal Employment:</strong> Veterans preference in federal hiring, law enforcement, security</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span><strong>Defense Contractors:</strong> Military-related industries value veteran experience</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span><strong>Private Sector:</strong> Corporate roles in management, operations, logistics, IT, sales</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span><strong>Skilled Trades:</strong> Electrician, plumber, HVAC, construction, automotive</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span><strong>Public Service:</strong> Police, fire, EMS, corrections, public administration</span>
            </li>
          </ul>
        </section>
      </div>
    ),

    resources: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Employment Resources
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Numerous organizations and programs specialize in helping veterans find civilian employment. Take advantage of these free resources.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">American Job Centers</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Nationwide network of career centers providing free employment services. Most have dedicated veterans representatives.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Services Offered</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Career counseling and assessment</li>
              <li>Resume and interview assistance</li>
              <li>Job search workshops</li>
              <li>Computer and internet access for job search</li>
              <li>Labor market information</li>
              <li>Training and education referrals</li>
            </ul>
            <p className="mt-2 text-sm text-[var(--sa-red)]">Find your local center: CareerOneStop.org</p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hire Heroes USA</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Free personalized job search assistance for veterans, transitioning service members, and military spouses.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What They Provide</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>One-on-one career mentorship</li>
              <li>Resume writing and review</li>
              <li>Interview preparation</li>
              <li>Job search strategy</li>
              <li>Career fairs and employer connections</li>
              <li>Lifetime support (even after you find a job)</li>
            </ul>
            <p className="mt-2 text-sm text-[var(--sa-red)]">www.hireheroesusa.org | 1-866-915-4376</p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">USAJOBS</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Official federal government job site. Veterans receive preference in federal hiring.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Use</h4>
            <ol className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
              <li>Create account on USAJOBS.gov</li>
              <li>Build federal-style resume (different from private sector)</li>
              <li>Upload required documents (DD-214, veterans preference docs)</li>
              <li>Search jobs and apply</li>
              <li>Track application status</li>
            </ol>
            <p className="mt-2 text-sm text-[var(--sa-red)]">www.usajobs.gov | FedsHireVets.gov for resources</p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hiring Our Heroes</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            U.S. Chamber of Commerce Foundation program connecting veterans with employers nationwide.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Programs</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Job fairs (virtual and in-person)</li>
              <li>Career summits</li>
              <li>Fellowship programs</li>
              <li>Transition assistance</li>
              <li>Employer partnerships</li>
            </ul>
            <p className="mt-2 text-sm text-[var(--sa-red)]">www.hiringourheroes.org</p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LinkedIn for Veterans</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            LinkedIn is the most important professional networking platform. Build a strong profile to connect with recruiters and employers.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LinkedIn Best Practices</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Create professional profile with civilian-friendly language</li>
              <li>Add professional headshot photo</li>
              <li>Use #OpenToWork feature</li>
              <li>Connect with veterans in your target industry</li>
              <li>Join veteran and industry groups</li>
              <li>Engage with content and build your network</li>
              <li>Use LinkedIn Premium for free (military/veteran benefit)</li>
            </ul>
            <p className="mt-2 text-sm text-[var(--sa-red)]">www.linkedin.com/veterans</p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Additional Resources</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-3 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">RecruitMilitary</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Job fairs and career resources for veterans</p>
              <p className="text-xs text-[var(--sa-red)]">www.recruitmilitary.com</p>
            </div>
            <div className="rounded-lg border border-black/10 p-3 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VetJobs</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Job board connecting veterans with employers</p>
              <p className="text-xs text-[var(--sa-red)]">www.vetjobs.com</p>
            </div>
            <div className="rounded-lg border border-black/10 p-3 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Corporate Gray</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Military transition and employment magazine</p>
              <p className="text-xs text-[var(--sa-red)]">www.corporategray.com</p>
            </div>
            <div className="rounded-lg border border-black/10 p-3 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DOL Veterans Employment</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Department of Labor employment services and tools</p>
              <p className="text-xs text-[var(--sa-red)]">www.dol.gov/agencies/vets</p>
            </div>
          </div>
        </section>
      </div>
    ),

    "federal-employment": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Federal Employment
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Veterans receive preference in federal hiring, making federal government employment an attractive option. Understanding veterans preference and the federal application process is essential for success.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Veterans Preference</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Veterans preference gives eligible veterans hiring advantages in federal employment, including extra points added to passing exam scores and priority in hiring selections.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preference Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Points</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">5-Point Preference (TP)</td>
                  <td className="py-2 pr-4">5 points</td>
                  <td className="py-2">Active duty during war or in campaign/expedition</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">10-Point Compensable Disability (CP)</td>
                  <td className="py-2 pr-4">10 points</td>
                  <td className="py-2">Service-connected disability rating of 10% or higher</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">10-Point 30% Compensable (CPS)</td>
                  <td className="py-2 pr-4">10 points</td>
                  <td className="py-2">Service-connected disability rating of 30% or higher</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">10-Point Disability (XP)</td>
                  <td className="py-2 pr-4">10 points</td>
                  <td className="py-2">Disability compensation, Purple Heart, or service-connected disability</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Sole Survivorship (SSP)</td>
                  <td className="py-2 pr-4">0 points</td>
                  <td className="py-2">Discharged/released due to sole surviving family member</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How Veterans Preference Works</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Points added to your exam score or used in ranking qualified candidates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>30% or higher disabled veterans go to top of qualified list (except for scientific/professional positions above GS-15)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Veterans preference applies to competitive service positions and some excepted service jobs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Preference does not guarantee a job but provides significant advantage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Applies to initial appointment; limited use for promotions and internal selections</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Claiming Veterans Preference</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            To claim veterans preference, you must submit documentation with your application.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>DD Form 214 (Member Copy 4) showing character of service</li>
              <li>SF-15 (Application for 10-Point Preference) if claiming 10-point preference</li>
              <li>VA disability letter if claiming disability preference</li>
              <li>Other supporting documents as applicable</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Federal Resume Tips</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Federal resumes differ significantly from private sector resumes. They are longer, more detailed, and follow specific formatting.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Federal Resume Requirements</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Include all required information (SSN, country of citizenship, veterans preference, etc.)</li>
              <li>Detailed work experience with hours per week and supervisor contact</li>
              <li>Specific duties and accomplishments (not just job titles)</li>
              <li>Use keywords from job announcement</li>
              <li>Typically 3-5 pages (longer than private sector)</li>
              <li>Address all specialized experience requirements</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Hiring Authorities for Veterans</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authority</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">VRA (Veterans Recruitment Appointment)</td>
                  <td className="py-2">Noncompetitive appointment for eligible veterans up to GS-11 or equivalent</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">30% or More Disabled</td>
                  <td className="py-2">Noncompetitive appointment for disabled veterans with 30%+ rating</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">VEOA (Veterans Employment Opportunities Act)</td>
                  <td className="py-2">Allows eligible veterans to apply to jobs open only to internal candidates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Federal Job Application Process</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Search USAJOBS.gov for positions</li>
            <li>Review job announcement carefully (qualifications, specialized experience, closing date)</li>
            <li>Build federal resume addressing all requirements</li>
            <li>Submit application through USAJOBS before closing date/time</li>
            <li>Complete any required assessments or questionnaires</li>
            <li>Upload required documents (DD-214, transcripts, etc.)</li>
            <li>Track application status on USAJOBS</li>
            <li>Respond promptly if contacted for interview</li>
          </ol>
          <div className="mt-3 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
              Federal hiring can take 2-6 months or longer. Apply to multiple positions and continue your job search while waiting.
            </p>
          </div>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Employment Assistance Checklist
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TAP Employment Track</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Attend TAP Employment Track (two-day workshop)",
              "Complete resume building exercises",
              "Practice interview skills",
              "Develop Individual Transition Plan for employment",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Resume and Professional Profile</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Create civilian resume (translate military experience)",
              "Build LinkedIn profile with professional photo",
              "Create federal resume for USAJOBS (if pursuing federal employment)",
              "Develop elevator pitch and professional summary",
              "Gather references from military and civilian contacts",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Job Search Resources</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Register with Hire Heroes USA for free mentorship",
              "Create USAJOBS account and upload federal resume",
              "Visit local American Job Center",
              "Sign up for LinkedIn Premium for Veterans (free)",
              "Register on veteran job boards (RecruitMilitary, VetJobs)",
              "Attend Hiring Our Heroes job fairs and events",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Federal Employment (if applicable)</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Obtain DD-214 for veterans preference documentation",
              "Complete SF-15 if claiming 10-point preference",
              "Upload veterans preference documents to USAJOBS",
              "Research federal agencies and positions of interest",
              "Apply to federal jobs using detailed federal resume format",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Networking and Applications</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Connect with veterans in your target industry on LinkedIn",
              "Attend industry networking events and conferences",
              "Conduct informational interviews",
              "Apply to target jobs (minimum 5-10 per week)",
              "Track applications and follow up appropriately",
              "Prepare for interviews (research company, practice answers)",
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
