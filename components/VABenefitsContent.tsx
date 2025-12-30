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
  { id: "healthcare", label: "Healthcare" },
  { id: "disability", label: "Disability" },
  { id: "home-loans", label: "Home Loans" },
  { id: "education", label: "Education" },
  { id: "vsos", label: "VSOs" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function VABenefitsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            VA Benefits Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Department of Veterans Affairs (VA) provides comprehensive benefits to transitioning service members and veterans. These benefits include healthcare, disability compensation, education assistance, home loans, and more. Understanding and accessing these benefits is critical for a successful transition to civilian life.
          </p>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Start your VA disability claim 180-90 days before separation through the Benefits Delivery at Discharge (BDD) program for fastest processing.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key VA Benefits</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Benefit</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Healthcare</td>
                  <td className="py-2">Comprehensive medical and mental health care through VA facilities</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Disability Compensation</td>
                  <td className="py-2">Tax-free monthly payments for service-connected disabilities</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Education (GI Bill)</td>
                  <td className="py-2">Tuition, housing, and book stipends for education and training</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Home Loans</td>
                  <td className="py-2">Zero down payment, no PMI home loan guaranty program</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Vocational Rehab</td>
                  <td className="py-2">Employment services and education for service-connected disabilities</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Burial Benefits</td>
                  <td className="py-2">National cemetery burial, headstone, and funeral allowances</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contact VA</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VA Hotline</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                1-800-827-1000 (Mon-Fri 8am-9pm ET)
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VA Website</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                <a href="https://www.va.gov" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">
                  www.va.gov
                </a>
              </p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Veterans Crisis Line</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                988 then press 1, or text 838255 (24/7 confidential support)
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    healthcare: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            VA Healthcare
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            VA healthcare provides comprehensive medical and mental health services to eligible veterans through a nationwide network of medical centers, outpatient clinics, and community care providers.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Served in active military and separated under conditions other than dishonorable</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Minimum service requirements vary by era (Gulf War: 24 months or full period ordered)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Combat veterans: 5 years of free healthcare for conditions possibly related to service</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Priority groups determine enrollment and copay requirements</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Priority Groups</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Group</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Group 1</td>
                  <td className="py-2">50% or higher service-connected disability</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Group 2</td>
                  <td className="py-2">30-40% service-connected disability</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Group 3</td>
                  <td className="py-2">10-20% service-connected, former POW, Purple Heart, etc.</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Group 4</td>
                  <td className="py-2">Catastrophically disabled, housebound, or aided and attended</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Group 5</td>
                  <td className="py-2">Non-service-connected, income below VA threshold, receiving VA pension</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Group 6</td>
                  <td className="py-2">Compensable 0% service-connected, exposed to radiation/contaminants</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Group 7</td>
                  <td className="py-2">Income below geographic threshold</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Group 8</td>
                  <td className="py-2">All other eligible veterans (may have copays)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Enroll</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Apply online at VA.gov (recommended)</li>
            <li>Call 1-877-222-VETS (8387)</li>
            <li>Visit your local VA medical center</li>
            <li>Mail completed VA Form 10-10EZ</li>
            <li>Apply through Veterans Service Organization (VSO)</li>
          </ol>
          <div className="mt-3 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-sm font-medium text-green-800 dark:text-green-200">
              Apply for VA healthcare as soon as possible after separation. There is no deadline, but early enrollment ensures continuity of care.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Services Covered</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Medical Care</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Primary care</li>
                <li>Specialty care</li>
                <li>Surgery</li>
                <li>Emergency care</li>
                <li>Preventive care</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mental Health</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>PTSD treatment</li>
                <li>Mental health counseling</li>
                <li>Substance abuse treatment</li>
                <li>Suicide prevention</li>
                <li>Readjustment counseling</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Prescriptions</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>VA pharmacy services</li>
                <li>Mail order prescriptions</li>
                <li>Medication management</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Other Services</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Dental care (limited)</li>
                <li>Vision care</li>
                <li>Hearing aids</li>
                <li>Prosthetics</li>
                <li>Home health care</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    disability: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            VA Disability Compensation
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            VA disability compensation provides tax-free monthly payments to veterans with service-connected disabilities. Ratings range from 0% to 100% in 10% increments, with higher ratings providing larger monthly payments.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Service-Connected Disability</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A disability is service-connected if it meets one of these criteria:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Injury or disease incurred during active duty</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Pre-existing condition aggravated by military service</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Condition that developed as a result of service-connected disability (secondary condition)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Presumptive conditions (Agent Orange, Gulf War, radiation exposure, etc.)</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Benefits Delivery at Discharge (BDD)</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            BDD allows service members to file disability claims 180-90 days before separation for expedited processing.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Element</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirement</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Filing Window</td>
                  <td className="py-2">180-90 days before separation</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Eligibility</td>
                  <td className="py-2">Separating, retiring, or demobilizing service members</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Benefit</td>
                  <td className="py-2">Receive disability decision within 30-60 days of separation</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Requirements</td>
                  <td className="py-2">Must be available for VA exams before separation</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Tax Status</td>
                  <td className="py-2">All VA disability compensation is tax-free</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
              File your BDD claim as early as possible (180 days out) to allow time for exams and medical record review before separation.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to File a Claim</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Gather medical evidence (service treatment records, medical documentation)</li>
            <li>File online at VA.gov (fastest method)</li>
            <li>Work with Veterans Service Organization (VSO) for free assistance</li>
            <li>Complete VA Form 21-526EZ (Application for Disability Compensation)</li>
            <li>Submit supporting documents and buddy statements</li>
            <li>Attend VA Compensation & Pension (C&P) examinations</li>
            <li>Wait for VA decision (BDD: 30-60 days; standard claims: 90-120 days)</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Disability Rating System</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            VA rates disabilities from 0% to 100% in 10% increments. Combined ratings use VA math (not simple addition). Monthly compensation amounts increase with rating percentage and number of dependents.
          </p>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Affects Your Rating</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Severity of condition</li>
              <li>Impact on daily functioning and employability</li>
              <li>Medical evidence and examination results</li>
              <li>VA Schedule for Rating Disabilities (VASRD)</li>
              <li>Multiple conditions combined using VA formula</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tax-Free Benefit</h3>
          <div className="mt-3 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-sm font-medium text-green-800 dark:text-green-200">
              VA disability compensation is completely tax-free and does not count as income for tax purposes. It also does not reduce military retirement pay (except for medical retirees subject to offset).
            </p>
          </div>
        </section>
      </div>
    ),

    "home-loans": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            VA Home Loan Program
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The VA Home Loan Guaranty program helps veterans, service members, and eligible surviving spouses purchase, build, repair, or refinance a home. VA loans offer significant advantages over conventional mortgages.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VA Loan Benefits</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Benefit</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">No Down Payment</td>
                  <td className="py-2">0% down payment required (up to loan limits)</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">No PMI</td>
                  <td className="py-2">No private mortgage insurance required</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Competitive Rates</td>
                  <td className="py-2">Typically lower interest rates than conventional loans</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Closing Cost Limits</td>
                  <td className="py-2">VA limits fees that can be charged to veterans</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Assumable</td>
                  <td className="py-2">Loan can be transferred to another eligible buyer</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Reusable</td>
                  <td className="py-2">Entitlement can be reused multiple times</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Veterans with at least 90 consecutive days of active service during wartime</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Veterans with at least 181 days of active service during peacetime</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Service members with 90 days on active duty (at least 30 continuous days)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>National Guard/Reserve members with 6 years of service</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Surviving spouses of service members who died in service or from service-connected disability</span>
            </li>
          </ul>
          <div className="mt-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Discharge must be other than dishonorable to qualify for VA home loan benefits.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Use Your VA Loan Benefit</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Obtain Certificate of Eligibility (COE) from VA.gov or through lender</li>
            <li>Get pre-approved with VA-approved lender</li>
            <li>Find a home and make an offer</li>
            <li>VA appraisal ordered (ensures home meets VA standards)</li>
            <li>Loan processing and underwriting</li>
            <li>Closing (pay VA funding fee if applicable)</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VA Funding Fee</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Most borrowers pay a one-time VA funding fee (can be financed into loan). Fee varies by:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
            <li>Type of service (Regular Military vs. Reserve/Guard)</li>
            <li>Down payment amount (if any)</li>
            <li>First-time use vs. subsequent use</li>
            <li>Type of loan (purchase, refinance, etc.)</li>
          </ul>
          <div className="mt-3 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-800 dark:text-green-200">Funding Fee Exemptions</h4>
            <p className="mt-1 text-sm text-green-700 dark:text-green-300">
              Veterans receiving VA disability compensation (any rating) and surviving spouses are exempt from the VA funding fee.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of VA Loans</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Purchase Loan</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Buy a home with no down payment</p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Cash-Out Refinance</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Refinance and take cash out of equity</p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IRRRL</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Interest Rate Reduction Refinance Loan (streamline refinance)</p>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Native American Direct Loan</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">For eligible Native American veterans on federal trust land</p>
            </div>
          </div>
        </section>
      </div>
    ),

    education: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            VA Education Benefits
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            VA education benefits help veterans and their families pay for college, vocational training,
            apprenticeships, and more. The Post-9/11 GI Bill is the most comprehensive education benefit,
            covering full tuition at public schools plus housing allowance and books/supplies stipend.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Education Programs</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Program</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Benefits</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Post-9/11 GI Bill</td>
                  <td className="py-2 pr-4">90+ days active duty after 9/10/2001</td>
                  <td className="py-2">Full tuition at public schools, BAH, books/supplies</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Montgomery GI Bill</td>
                  <td className="py-2 pr-4">Paid into MGIB during service</td>
                  <td className="py-2">Monthly payment up to $2,210/month for 36 months</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">VR&E (Chapter 31)</td>
                  <td className="py-2 pr-4">10%+ VA disability rating</td>
                  <td className="py-2">Vocational training, education, employment services</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">DEA (Chapter 35)</td>
                  <td className="py-2 pr-4">Dependents of 100% P&T or deceased veterans</td>
                  <td className="py-2">Up to 45 months of education benefits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Post-9/11 GI Bill Coverage</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            36 months of education benefits (4 academic years) including:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Full tuition and fees at public schools (paid directly to school)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Up to $28,937.32/year at private schools (2024-25 rate)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Monthly Housing Allowance (MHA) based on school zip code E-5 w/ dependents BAH rate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>$1,000 annual books and supplies stipend</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Yellow Ribbon Program for additional private school tuition (if school participates)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>One-time $500 rural benefit if school is more than 500 miles from nearest VA facility</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Apply for GI Bill</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Apply at www.va.gov/education (VA Form 22-1990)</li>
            <li>Requires DD-214 or Statement of Service if still on active duty</li>
            <li>Certificate of Eligibility (COE) issued typically within 30 days</li>
            <li>School certifies enrollment each term to trigger payment</li>
            <li>MHA paid monthly after attendance verified (not during breaks)</li>
            <li>Must maintain Satisfactory Academic Progress to continue benefits</li>
            <li>Benefits expire 15 years after last separation from active duty</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Covered Education Types</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Academic Programs</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>College degree programs (associate, bachelor's, master's, doctoral)</li>
                <li>Graduate and professional programs</li>
                <li>Undergraduate certificates</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Vocational Training</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Technical and vocational programs</li>
                <li>Apprenticeships and on-the-job training</li>
                <li>Flight training</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Licensing & Testing</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Licensing and certification tests</li>
                <li>National tests (SAT, ACT, GRE, etc.)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Programs</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Tutorial assistance</li>
                <li>Entrepreneurship training</li>
                <li>Correspondence training</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Transfer GI Bill Before Separation</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            If you want to transfer Post-9/11 GI Bill benefits to spouse or children, you MUST do so
            while still on active duty with 4 years service commitment. Cannot transfer after separation.
            See Education Benefits Transfer section for details.
          </p>
        </div>
      </div>
    ),

    vsos: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Veterans Service Organizations (VSOs)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Veterans Service Organizations are non-profit groups that provide free assistance with VA claims, benefits, and appeals. VSO representatives are accredited by the VA and can help navigate the complex claims process.
          </p>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Working with a VSO is completely free and highly recommended. They can significantly improve your chances of a successful VA claim.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Major Veterans Service Organizations</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Disabled American Veterans (DAV)</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Free lifetime support for all veterans and their families. Assistance with disability claims, appeals, healthcare, and employment.
              </p>
              <p className="mt-1 text-sm text-[var(--sa-red)]">www.dav.org | 1-877-426-2838</p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Veterans of Foreign Wars (VFW)</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Assistance with VA claims, benefits counseling, and veterans advocacy. Nationwide network of service officers.
              </p>
              <p className="mt-1 text-sm text-[var(--sa-red)]">www.vfw.org | 1-800-839-1899</p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The American Legion</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Veterans advocacy, benefits assistance, and community support. Accredited service officers nationwide.
              </p>
              <p className="mt-1 text-sm text-[var(--sa-red)]">www.legion.org | 1-800-433-3318</p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine Corps League</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Marine-focused veterans organization providing assistance with VA claims, community service, and camaraderie.
              </p>
              <p className="mt-1 text-sm text-[var(--sa-red)]">www.mclnational.org | 1-800-625-1775</p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Wounded Warrior Project</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Support for wounded, ill, and injured veterans. Programs for mental health, employment, benefits assistance.
              </p>
              <p className="mt-1 text-sm text-[var(--sa-red)]">www.woundedwarriorproject.org | 1-888-997-2586</p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Veterans Service Representatives (County/State)</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Many counties and states employ Veterans Service Representatives who provide free local assistance.
              </p>
              <p className="mt-1 text-sm text-[var(--sa-red)]">Contact your county veterans office</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What VSOs Can Help With</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Filing initial VA disability claims</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Gathering medical evidence and documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Appealing VA decisions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Increasing disability ratings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Filing for secondary conditions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Understanding VA benefits and entitlements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Representing you at VA hearings</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Work with a VSO</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Contact a VSO during your TAP process or after separation</li>
            <li>Meet with an accredited service officer</li>
            <li>Sign VA Form 21-22 (Appointment of Veterans Service Organization)</li>
            <li>Provide your medical records and service documents</li>
            <li>Work with VSO to prepare and submit claim</li>
            <li>VSO tracks your claim and communicates with VA on your behalf</li>
          </ol>
          <div className="mt-3 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-sm font-medium text-green-800 dark:text-green-200">
              VSOs never charge fees for their services. Beware of any individual or company charging to file VA claims.
            </p>
          </div>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            VA Benefits Checklist
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Healthcare</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Apply for VA healthcare enrollment (VA Form 10-10EZ)",
              "Attend VA healthcare briefing during TAP",
              "Register on VA.gov and create an account",
              "Schedule initial VA healthcare appointment",
              "Request copies of military medical records",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Disability Compensation</h3>
          <ul className="mt-3 space-y-2">
            {[
              "File BDD claim 180-90 days before separation",
              "Work with VSO for claims assistance",
              "Gather medical evidence and buddy statements",
              "Complete VA Form 21-526EZ",
              "Attend all VA Compensation & Pension (C&P) exams",
              "Track claim status on VA.gov",
              "File intent to file if not ready to submit full claim",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Education Benefits</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Determine GI Bill eligibility (Post-9/11, Montgomery, etc.)",
              "Apply for Certificate of Eligibility (COE)",
              "Research schools and programs",
              "Submit VA Form 22-1990 for education benefits",
              "Verify school is VA-approved",
              "Consider VA Vocational Rehabilitation if service-connected disability",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Home Loan</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Obtain Certificate of Eligibility (COE) for VA home loan",
              "Get pre-approved with VA-approved lender",
              "Understand VA funding fee (and exemptions)",
              "Research VA loan limits in your area",
              "Learn about VA appraisal requirements",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VSO Assistance</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Contact Veterans Service Organization (DAV, VFW, American Legion, etc.)",
              "Schedule appointment with VSO service officer",
              "Sign VA Form 21-22 (VSO representation)",
              "Provide medical records to VSO",
              "Work with VSO to file and track claims",
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
