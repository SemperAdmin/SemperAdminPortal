"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "victim-rights", label: "Victim Rights" },
  { id: "special-situations", label: "Special Situations" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function VWAPContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Victim and Witness Assistance Program (VWAP)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Victim and Witness Assistance Program provides support to victims and witnesses of crimes under military jurisdiction. VWAP ensures victims receive their rights under the Uniform Code of Military Justice and federal law, including notification of case status, protection from retaliation, and access to support services.
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Admin Role:</strong> Administrative personnel may serve as Local Responsible Officers (LROs) or assist with VWAP coordination. Key duties include maintaining victim contact information, tracking notification requirements, and coordinating with legal and investigative offices.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key VWAP Personnel
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Victim Advocate:</strong> Provides emotional support and crisis intervention</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Special Victims' Counsel (SVC):</strong> Provides legal representation to victims</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Local Responsible Officer (LRO):</strong> Ensures command compliance with VWAP requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Trial Counsel:</strong> Coordinates victim participation in prosecution</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    responsibilities: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Command Responsibilities
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Initial Response</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Ensure victim safety and medical needs addressed</li>
                <li>• Provide DD Form 2701 (Initial Information for Victims)</li>
                <li>• Connect victim with appropriate support services</li>
                <li>• Report to NCIS for covered offenses</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Ongoing Support</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Notify victim of investigation status and key milestones</li>
                <li>• Coordinate expedited transfer requests if requested</li>
                <li>• Protect victim from retaliation or ostracism</li>
                <li>• Provide duty accommodations as needed</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Case Resolution</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Notify victim of command disposition decision</li>
                <li>• Coordinate victim impact statement if desired</li>
                <li>• Inform victim of case outcome and post-trial matters</li>
                <li>• Continue protection and support as needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    ),
    "victim-rights": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Victim Rights
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Crime Victims' Rights Act and UCMJ Article 6b guarantee specific rights to victims of crimes under military jurisdiction:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Right to be treated with fairness</strong> and respect for dignity and privacy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Right to reasonable protection</strong> from the accused</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Right to notification</strong> of court proceedings and case status</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Right to be present</strong> at all public court proceedings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Right to confer</strong> with trial counsel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Right to restitution</strong> as provided by law</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Right to be heard</strong> at sentencing through victim impact statement</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Notifications
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Event</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Notification Requirement</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Initial report</td>
                  <td className="py-2">DD 2701 within 24 hours of identified victim</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Referral of charges</td>
                  <td className="py-2">Notify within 3 days of referral decision</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Court-martial date</td>
                  <td className="py-2">Notify at least 14 days before trial</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Case disposition</td>
                  <td className="py-2">Notify within 3 days of final disposition</td>
                </tr>
              </tbody>
            </table>
          </div>
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
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Expedited Transfer Request</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Victims of sexual assault may request expedited transfer to another unit or installation. The request is processed through the SARC and approved by the first O-6 commander in the chain. Admin assists with transfer orders once approved.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Victim in Accused's Chain of Command</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When the victim is in the accused's chain of command, reassignment of supervisory relationships is typically required. Coordinate with S-1 for temporary or permanent reassignment of either party to eliminate command relationship.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Civilian Victim</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Civilian victims of crimes by service members receive VWAP support. Coordinate with the base legal office for appropriate support resources. Civilian victims may not have access to on-base services but should receive equivalent community referrals.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Retaliation Allegations</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Any allegation of retaliation against a victim or witness must be immediately reported to the commanding officer and investigated. Retaliation is a separate offense under the UCMJ and must be addressed independently of the underlying case.
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
                  <td className="py-2 pr-4">Victim not receiving notifications</td>
                  <td className="py-2">Verify contact information with victim. Establish preferred notification method. Document all notification attempts.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Victim declines services</td>
                  <td className="py-2">Document declination. Provide written information on available services. Periodic check-ins remain appropriate.</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Victim wants case dropped</td>
                  <td className="py-2">Inform victim that disposition authority rests with command. Connect with SVC for consultation on rights and options.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Victim PCSing before trial</td>
                  <td className="py-2">Coordinate with gaining command for continued support. Arrange travel orders for trial participation.</td>
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
