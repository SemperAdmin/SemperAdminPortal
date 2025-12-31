"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "tenets", label: "Four Tenets" },
  { id: "personnel", label: "Key Personnel" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function UPFRPOverviewContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unit, Personal and Family Readiness Program</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The UPFRP is a commander's program designed to maintain ready Marines and equip them and their families
            with the knowledge and tools to successfully meet the challenges of deployment. Per MCO 1754.9B, the UPFRP
            directly impacts Marines and families by building resiliency, commitment, morale, and increasing unit readiness.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">How It Works</h4>
          <ol className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Commander establishes UPFRP and assigns key personnel</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Family Readiness Command Team (FRCT) supports the Commander's implementation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>DRC or URC provides day-to-day execution</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Marines complete NAVMC 11654 (Contact Authorization Form) to identify Authorized Contacts</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>DRC/URC contacts Authorized Contacts within 30 days of Marine checking into unit</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Regular communication and training occurs throughout the deployment cycle</span></li>
          </ol>
        </div>
      </section>
    ),
    tenets: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The Four Tenets of UPFRP</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1754.9B, the UPFRP has four tenets:
          </p>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Deployment Support</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Education, training, and support to Marines and family members during deployment cycles. This includes pre-deployment, mid-deployment, return and reunion, and post-deployment training events.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Official Communication</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Communication directly from or on behalf of the Commander distributed to the Marine and/or Authorized Contact(s). Official communication conveys information on the unit's status while protecting operations security (OPSEC).</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Readiness and Resource Support</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Information and training about services, resources, and referrals supporting the personal and family readiness needs of the unit or its members.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Volunteer Management</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Coordination of UPFRP volunteers in accordance with Marine Corps policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    personnel: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family Readiness Command Team (FRCT)</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Commander (Chair)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Executive Officer</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Sergeant Major/Senior Enlisted Advisor</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Chaplain (if assigned)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Single Marine Program Representative (SMP Rep)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Family Readiness Command Team Advisor (FRCTA)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Family Readiness Assistant (FRA)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>DRC or URC</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deployment Readiness Coordinator (DRC)</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Civilian employee at Col-level commands (MEF, MCRC, MFR, MARSOC)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provides UPFRP support to Commander, Marines, and families</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Coordinates deployment training events</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Maintains contact with Authorized Contacts</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Uniformed Readiness Coordinator (URC)</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Active duty Marine (E-5 or higher) assigned by Commander</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Performs UPFRP duties for commands without a DRC</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Coordinates with installation MCCS and other support agencies</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DRC/URC Training Requirements</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 1754.9B Figure 3-2:</p>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Position</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">DRC/URC Training</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">L.I.N.K.S.</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">LifeSkills</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">PII/OPSEC</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">DRC</td>
                  <td className="py-2 pr-4">Within 30 days</td>
                  <td className="py-2 pr-4">Within 90 days</td>
                  <td className="py-2 pr-4">Within 90 days</td>
                  <td className="py-2">Annual</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Recruiting/Reserve DRC</td>
                  <td className="py-2 pr-4">Within 60 days</td>
                  <td className="py-2 pr-4">Within 90 days</td>
                  <td className="py-2 pr-4">Within 120 days</td>
                  <td className="py-2">Annual</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">URC</td>
                  <td className="py-2 pr-4">Within 60 days</td>
                  <td className="py-2 pr-4">Within 90 days</td>
                  <td className="py-2 pr-4">Within 120 days</td>
                  <td className="py-2">Annual</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Know who your unit's DRC/URC is and how to contact them</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure Marines complete NAVMC 11654 upon checking in</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Inform DRC/URC of Marines requiring deployment support</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Encourage Marines and families to attend deployment briefs</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Report issues affecting family readiness up the chain</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Key Form</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            <strong>NAVMC 11654 (Contact Authorization Form)</strong> - This form identifies the Marine's Authorized
            Contacts who will receive official communication from the unit. Ensure every Marine completes this form
            upon checking into the unit.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
