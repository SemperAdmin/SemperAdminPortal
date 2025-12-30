"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "services", label: "Available Services" },
  { id: "eligibility", label: "Eligibility" },
  { id: "special-situations", label: "Special Situations" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function LegalAssistanceContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Legal Assistance Program
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Legal Assistance provides free legal services to eligible Marines and their dependents for personal civil legal matters. Legal assistance attorneys can provide advice, document preparation, and limited representation on matters including wills, powers of attorney, landlord-tenant issues, consumer protection, and family law matters.
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Admin Role:</strong> Administrative personnel help Marines understand available legal services and assist with scheduling appointments. Know the location and hours of your installation's Legal Assistance Office to provide accurate referrals.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Access Services
          </h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Contact the installation Legal Assistance Office for appointment</li>
            <li>Bring military ID and all relevant documents to appointment</li>
            <li>Discuss legal matter with attorney during consultation</li>
            <li>Attorney provides advice, drafts documents, or refers to civilian resources</li>
            <li>Follow up as needed for ongoing matters</li>
          </ol>
        </div>
      </section>
    ),
    services: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Available Services
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Estate Planning</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Wills and living wills</li>
                <li>• Powers of attorney (general and special)</li>
                <li>• Healthcare directives</li>
                <li>• Beneficiary designations review</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family Law</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Divorce and separation advice</li>
                <li>• Child custody and support guidance</li>
                <li>• Adoption assistance</li>
                <li>• Name change processing</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Consumer Protection</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Debt collection issues</li>
                <li>• Predatory lending complaints</li>
                <li>• Identity theft assistance</li>
                <li>• Contract disputes</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Housing Issues</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Lease reviews and disputes</li>
                <li>• SCRA rights and protections</li>
                <li>• Eviction defense</li>
                <li>• Security deposit recovery</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Services NOT Provided
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Criminal defense (use defense counsel)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Business or commercial ventures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Fee-generating cases (must refer to civilian counsel)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Claims against the United States</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    eligibility: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligible Personnel
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Active duty service members (all branches)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Reserve and Guard members on active duty orders</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Dependents of active duty members</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Retirees and their dependents (space available)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Surviving spouses of deceased members</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Priority of Service
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When demand exceeds capacity, Legal Assistance Offices prioritize services in the following order:
          </p>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Deploying service members (wills and powers of attorney)</li>
            <li>Active duty service members with urgent matters</li>
            <li>Dependents with urgent matters</li>
            <li>Retirees with urgent matters</li>
            <li>All others on space-available basis</li>
          </ol>
        </div>
      </section>
    ),
    "special-situations": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Special Situations
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Deployment Legal Services</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Deploying Marines should complete estate planning before deployment. Legal Assistance offices often hold will drives before major deployments. Ensure Marines have current wills, powers of attorney, and beneficiary designations.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SCRA Protections</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                The Servicemembers Civil Relief Act (SCRA) provides significant protections including interest rate caps, lease termination rights, and protection from default judgments. Legal Assistance can help Marines invoke SCRA protections with creditors and landlords.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tax Assistance</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Many Legal Assistance offices provide free tax preparation during tax season through the Volunteer Income Tax Assistance (VITA) program. This service is available to all eligible personnel regardless of income level.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Remote Locations</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Marines at locations without Legal Assistance offices can request telephonic consultations. Some services like will preparation may require travel to the nearest installation with legal services.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    troubleshooting: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems and Solutions
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Problem</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Solution</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Long wait for appointment</td>
                  <td className="py-2">Explain urgency when scheduling. Urgent matters may be prioritized. Consider walk-in hours if available.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Matter requires civilian representation</td>
                  <td className="py-2">Legal Assistance can provide referrals to state bar lawyer referral services or military-friendly attorneys.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Dependent needs assistance while Marine deployed</td>
                  <td className="py-2">Dependents remain eligible during deployment. Encourage pre-deployment powers of attorney.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">No legal office at current location</td>
                  <td className="py-2">Request telephonic consultation or coordinate travel to nearest installation with legal services.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
