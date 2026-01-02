"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { Award, ClipboardCheck, Lightbulb, AlertTriangle, Phone } from "lucide-react";

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

const KEY_FACTS = [
  { label: "Check Your Awards", value: "MOL → Record Admin → Awards Summary" },
  { label: "Missing Award?", value: "Report to your S-1 with documentation" },
  { label: "Good Conduct Medal", value: "Automatic after 3 years without NJP/court-martial" },
  { label: "Campaign Medals", value: "Automatic when deployed to designated areas" },
  { label: "Time Limit", value: "Awards must be submitted within 3 years (2 for combat)" },
  { label: "Order of Precedence", value: "Medal of Honor highest, then by date earned" },
];

const TABS = [
  { id: "your-awards", label: "Your Awards" },
  { id: "check-record", label: "Check Your Record" },
  { id: "get-recognized", label: "Get Recognized" },
  { id: "missing-awards", label: "Missing Awards?" },
  { id: "award-types", label: "Award Types" },
  { id: "references", label: "References", type: "references" as const },
];

const AUTOMATIC_AWARDS = [
  { award: "Good Conduct Medal", criteria: "3 years active service with clean record - NO action required by you", automatic: true },
  { award: "National Defense Service Medal", criteria: "Serving during designated war/conflict period", automatic: true },
  { award: "Global War on Terrorism Service Medal", criteria: "Designated GWOT support operations", automatic: true },
  { award: "Sea Service Deployment Ribbon", criteria: "90+ consecutive days deployed", automatic: true },
  { award: "Combat Action Ribbon", criteria: "Active participation in ground/surface combat", automatic: false, note: "Must be documented in SRB" },
];

const CAMPAIGN_MEDALS = [
  { theater: "Afghanistan Campaign Medal", requirement: "Deployed to designated Afghanistan AO" },
  { theater: "Iraq Campaign Medal", requirement: "Deployed to designated Iraq AO" },
  { theater: "Inherent Resolve Campaign Medal", requirement: "Deployed to designated Syria/Iraq AO" },
  { theater: "Armed Forces Expeditionary Medal", requirement: "Deployed to other designated operations" },
];

const PERSONAL_AWARDS = [
  { award: "Navy/Marine Corps Achievement Medal", criteria: "Professional achievement, leadership, or sustained superior performance" },
  { award: "Navy/Marine Corps Commendation Medal", criteria: "Meritorious service or achievement above normal expectations" },
  { award: "Meritorious Service Medal", criteria: "Outstanding non-combat meritorious achievement or service" },
  { award: "Bronze Star Medal", criteria: "Heroic or meritorious achievement/service in combat" },
  { award: "Purple Heart", criteria: "Wounded or killed in action by enemy forces" },
];

const VALOR_AWARDS = [
  { award: "Medal of Honor", criteria: "Conspicuous gallantry at risk of life above and beyond duty" },
  { award: "Navy Cross", criteria: "Extraordinary heroism in combat" },
  { award: "Silver Star", criteria: "Gallantry in action against the enemy" },
  { award: "Bronze Star with V", criteria: "Heroic achievement in combat" },
];

const UNIT_AWARDS = [
  { award: "Presidential Unit Citation", criteria: "Extraordinary heroism in action" },
  { award: "Navy Unit Commendation", criteria: "Outstanding heroism or extremely meritorious service" },
  { award: "Meritorious Unit Commendation", criteria: "Valorous or meritorious achievement" },
];

const MOL_STEPS = [
  "Log into MOL at mol.usmc.mil",
  "Go to 'Record Admin' in the menu",
  "Select 'Awards Summary'",
  "Review your listed awards and dates",
  "Compare to your SRB and deployment history",
  "Note any missing or incorrect entries",
];

const WHAT_TO_CHECK = [
  { category: "Deployment Awards", items: ["Campaign medals for each deployment", "Sea Service Deployment Ribbon", "Combat Action Ribbon (if applicable)"] },
  { category: "Service Awards", items: ["Good Conduct Medal (every 3 years)", "National Defense Service Medal", "GWOT Service/Expeditionary Medal"] },
  { category: "Unit Awards", items: ["Check if your unit received citations", "Verify dates you were assigned", "Confirm entry in your record"] },
];

const GETTING_NOMINATED = [
  { step: "Excel at your duties", detail: "Consistent superior performance is noticed" },
  { step: "Document your achievements", detail: "Keep records of significant accomplishments" },
  { step: "Volunteer for challenging tasks", detail: "Leadership recognizes initiative" },
  { step: "Help your peers succeed", detail: "Team-oriented Marines stand out" },
  { step: "Communicate accomplishments", detail: "Ensure your chain of command knows your contributions" },
];

const FIX_MISSING_AWARD = [
  { step: 1, action: "Gather proof", detail: "Deployment orders, SRB entries, fitness reports, or witness statements" },
  { step: 2, action: "Go to S-1/Admin", detail: "Explain what's missing and provide your documentation" },
  { step: 3, action: "Request correction", detail: "S-1 will submit Unit Diary or ORMA request" },
  { step: 4, action: "Follow up", detail: "Check MOL in 2-4 weeks to verify update" },
];

export function AwardsDecorationsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    "your-awards": (
      <div className="space-y-6">
        <InfoCard icon={Award} title="Your Awards Matter" variant="info">
          Awards in your record affect promotion points, show your service history, and represent
          recognition you&apos;ve earned. It&apos;s YOUR responsibility to ensure your record is correct.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Quick Facts
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {KEY_FACTS.map((fact) => (
                  <tr key={fact.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{fact.label}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{fact.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Awards You Might Automatically Rate
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Some awards are processed automatically based on your service. Check that these are in your record:
          </p>
          <div className="mt-4 space-y-3">
            {AUTOMATIC_AWARDS.map((award) => (
              <div key={award.award} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{award.award}</h4>
                  {award.automatic && (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Automatic
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{award.criteria}</p>
                {award.note && (
                  <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">Note: {award.note}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Campaign & Deployment Medals
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            If you deployed to these theaters, you should have the corresponding campaign medal:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Medal</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">If You Deployed To</th>
                </tr>
              </thead>
              <tbody>
                {CAMPAIGN_MEDALS.map((medal) => (
                  <tr key={medal.theater} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{medal.theater}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{medal.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    "check-record": (
      <div className="space-y-6">
        <InfoCard icon={ClipboardCheck} title="Check Your Record Regularly" variant="warning">
          Don&apos;t wait until you&apos;re up for promotion or EASing to discover missing awards.
          Check at least once a year and after every deployment.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Check Your Awards in MOL
          </h3>
          <ol className="mt-4 space-y-3">
            {MOL_STEPS.map((step, index) => (
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
            What to Look For
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {WHAT_TO_CHECK.map((category) => (
              <div key={category.category} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{category.category}</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When to Check
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Definitely Check</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• 30 days after returning from deployment</li>
                <li>• Before promotion board</li>
                <li>• After receiving a Good Conduct anniversary</li>
                <li>• When checking in to new unit</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">Good Practice</h4>
              <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                <li>• Every 6-12 months routinely</li>
                <li>• After participating in significant operations</li>
                <li>• When updating your CMC/promotion package</li>
                <li>• Before any career decision (reenlistment, lat move)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Understanding Award Devices
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Devices on your ribbons indicate additional awards or special circumstances:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Stars</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Bronze Star = 1 additional award</li>
                <li>• Silver Star = 5 additional awards</li>
                <li>• Gold Star = Additional medal (not ribbon)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Special Devices</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Combat &quot;V&quot; = Valor in combat</li>
                <li>• Bronze Service Star = Campaign phase</li>
                <li>• Arrowhead = Assault landing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    "get-recognized": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How Marines Get Nominated for Awards
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Personal awards like the NAM or NCM are recommended by your chain of command.
            Here&apos;s how the process typically works and what you can do to be considered.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            The Nomination Process
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">1</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Someone Recognizes Your Achievement</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Your NCO, SNCO, or officer notices exceptional performance</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">2</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Recommendation Written</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Leadership writes up your achievements on NAVMC 11533</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">3</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Chain of Command Reviews</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Each level endorses (or doesn&apos;t) the recommendation</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">4</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Approval Authority Decides</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Different award levels require different approval authorities</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">5</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Award Presented</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Formal presentation and entry in your record</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Be Considered
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            You can&apos;t nominate yourself, but you can position yourself to be recognized:
          </p>
          <div className="mt-4 space-y-3">
            {GETTING_NOMINATED.map((item) => (
              <div key={item.step} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.step}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Lightbulb} title="Pro Tip: Keep Your Own Records" variant="tip">
          Keep a personal log of significant achievements, deployments, and accomplishments.
          If leadership asks about your contributions, you&apos;ll have specifics ready. This also helps
          if you ever need to request a missing award.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Leadership Looks For
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">NAM Typical Criteria</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• Outstanding MOS performance</li>
                <li>• Leadership among peers</li>
                <li>• Significant contribution to unit mission</li>
                <li>• Initiative beyond normal duties</li>
              </ul>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">NCM Typical Criteria</h4>
              <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                <li>• Sustained superior performance</li>
                <li>• Impact beyond immediate duties</li>
                <li>• Mentorship of junior Marines</li>
                <li>• Exceptional achievement in demanding assignment</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    "missing-awards": (
      <div className="space-y-6">
        <InfoCard icon={AlertTriangle} title="Missing Award? Take Action Now" variant="warning">
          If your record is missing an award you earned, don&apos;t wait. The longer you wait,
          the harder it can be to gather documentation. Act while witnesses and records are available.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Steps to Fix a Missing Award
          </h3>
          <div className="mt-4 space-y-4">
            {FIX_MISSING_AWARD.map((step) => (
              <div key={step.step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {step.step}
                </span>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{step.action}</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Documentation to Gather
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">For Campaign/Deployment Medals</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Deployment orders showing dates/location</li>
                <li>• Unit movement records</li>
                <li>• SRB entries from deployment period</li>
                <li>• Fitness reports from that time</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">For Combat Action Ribbon</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• After-action reports</li>
                <li>• Command chronology</li>
                <li>• Witness statements from Marines present</li>
                <li>• Any documentation of the engagement</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">For Good Conduct Medal</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• SRB showing 3 years continuous service</li>
                <li>• Proof of no NJP/court-martial during period</li>
                <li>• Previous Good Conduct certificate if applicable</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">For Personal Awards</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Original award citation</li>
                <li>• Presentation photos</li>
                <li>• Any paperwork from the ceremony</li>
                <li>• Witness from former unit</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Missing Award Situations
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">&quot;I deployed but don&apos;t have the campaign medal&quot;</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Bring your deployment orders to S-1. They can verify dates against the campaign medal criteria
                and submit the Unit Diary entry.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">&quot;I hit 3 years but no Good Conduct Medal&quot;</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Check your SRB for any breaks in service or disciplinary entries. If your record is clean,
                see S-1 to initiate the award.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">&quot;I was awarded at my last unit but it&apos;s not in MOL&quot;</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                The Unit Diary entry may not have been processed correctly. Bring your citation copy to S-1
                to have them research and correct.
              </p>
            </div>
          </div>
        </section>

        <InfoCard icon={Phone} title="If S-1 Can't Help" variant="info">
          For older awards or complex situations, you may need to contact HQMC Records Section or use
          the ORMA (Online Record Modification Application) system through MOL. Your S-1 can assist with this.
        </InfoCard>
      </div>
    ),

    "award-types": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Personal Awards (Meritorious)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            These recognize outstanding service, achievement, or performance. They&apos;re recommended by your chain of command.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Award</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Typical Criteria</th>
                </tr>
              </thead>
              <tbody>
                {PERSONAL_AWARDS.map((row) => (
                  <tr key={row.award} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.award}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Valor Awards (Combat Heroism)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            These recognize extraordinary bravery in combat. They require detailed documentation and witness statements.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Award</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Criteria</th>
                </tr>
              </thead>
              <tbody>
                {VALOR_AWARDS.map((row) => (
                  <tr key={row.award} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.award}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Unit Awards
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            If you were assigned to a unit during the period cited, you rate the unit award. Check that it&apos;s in your record.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Award</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Unit Criteria</th>
                </tr>
              </thead>
              <tbody>
                {UNIT_AWARDS.map((row) => (
                  <tr key={row.award} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.award}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Order of Precedence (How to Wear Them)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Awards are worn in order of precedence, highest on top/left:
          </p>
          <ol className="mt-4 space-y-2 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
            <li>Medal of Honor</li>
            <li>Navy Cross / other service crosses</li>
            <li>Defense Distinguished Service Medal</li>
            <li>Silver Star</li>
            <li>Legion of Merit</li>
            <li>Bronze Star</li>
            <li>Purple Heart</li>
            <li>Meritorious Service Medal</li>
            <li>Commendation Medals</li>
            <li>Achievement Medals</li>
            <li>Unit Awards</li>
            <li>Campaign/Service Medals</li>
          </ol>
          <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
            See SECNAVINST 1650.1H for complete order. Within same award, arrange by date earned (oldest first).
          </p>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
