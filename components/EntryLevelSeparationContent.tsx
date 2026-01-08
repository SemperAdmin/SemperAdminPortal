"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCO_URLS } from "@/data/references";

const MCOLink = ({ mco, url }: { mco: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[var(--sa-navy)] underline decoration-1 underline-offset-2 hover:text-[var(--sa-gold)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]"
  >
    {mco}
  </a>
);

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

const KEY_POINTS: { label: string; value: string; url?: string }[] = [
  { label: "Timeframe", value: "First 180 days of continuous active service" },
  { label: "Characterization", value: "Uncharacterized (neither honorable nor dishonorable)" },
  { label: "Authority", value: "MCO 1900.16 (Separation and Retirement Manual)", url: MCO_URLS.MARCORSEPMAN_PDF },
  { label: "VA Benefits", value: "Generally not eligible" },
  { label: "Future Impact", value: "Minimal impact on civilian employment and reenlistment" },
];

const ELS_BASES = [
  {
    basis: "Failure to Adapt",
    description: "Unable to adjust to military life or training environment",
    example: "Difficulty following orders, military customs, or adapting to structure"
  },
  {
    basis: "Unsuitability",
    description: "Character or behavior traits incompatible with military service",
    example: "Apathy, defective attitude, inability to work with others"
  },
  {
    basis: "Minor Misconduct",
    description: "Pattern of minor offenses during entry-level period",
    example: "Multiple instances of being late, disrespect, or minor rule violations"
  },
  {
    basis: "Erroneous Enlistment",
    description: "Should not have been enlisted due to existing condition or disqualification",
    example: "Pre-existing medical condition, dependency issues, or false statements"
  },
  {
    basis: "Entry-Level Performance",
    description: "Unable to meet basic performance standards during initial training",
    example: "Cannot pass basic training requirements despite remedial efforts"
  },
];

const WHEN_ELS_APPLIES = [
  { condition: "Time in Service", requirement: "First 180 days of continuous active service" },
  { condition: "No Prior Service", requirement: "Has not completed initial training period previously" },
  { condition: "Appropriate Basis", requirement: "One of the authorized ELS bases applies" },
  { condition: "Command Discretion", requirement: "Command determines ELS is most appropriate action" },
];

const IMPACT_COMPARISON = [
  {
    aspect: "DD Form 214",
    els: "Shows uncharacterized separation",
    regular: "Shows characterization (HON, GEN, or OTH)"
  },
  {
    aspect: "VA Benefits",
    els: "Generally not eligible",
    regular: "Eligible based on characterization"
  },
  {
    aspect: "GI Bill",
    els: "Not eligible",
    regular: "May be eligible if service requirements met"
  },
  {
    aspect: "Veteran Status",
    els: "Not considered a veteran for most purposes",
    regular: "Considered a veteran"
  },
  {
    aspect: "Reenlistment",
    els: "May reenlist with waiver",
    regular: "Depends on characterization and RE code"
  },
  {
    aspect: "Civilian Employment",
    els: "Minimal impact, often disclosed as 'did not complete'",
    regular: "Impact varies by characterization"
  },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "when-applied", label: "When ELS Applies" },
  { id: "impact", label: "Impact" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function EntryLevelSeparationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Entry-Level Separation (ELS)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Entry-Level Separation (ELS) is a special type of administrative separation that applies during
            a Marine&apos;s first 180 days of continuous active service. Unlike other separations, ELS results
            in an uncharacterized discharge, meaning the service is neither characterized as honorable nor
            dishonorable. This type of separation recognizes that some individuals are unsuited for military
            service and should be separated early in their career.
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
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">
                      {point.url ? <MCOLink mco={point.value} url={point.url} /> : point.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            The 180-Day Window
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            ELS can only be used during the first 180 days of continuous active service:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-900 dark:text-green-100">ELS Applicable</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-800 dark:text-green-200">
                <li>• Recruits in boot camp</li>
                <li>• Marines in MOS school</li>
                <li>• Marines at first duty station (if within 180 days)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-900 dark:text-red-100">ELS Not Applicable</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-800 dark:text-red-200">
                <li>• After 180 days of service</li>
                <li>• Prior service Marines (already completed training)</li>
                <li>• Must use regular administrative separation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Uncharacterized Discharge
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            An uncharacterized discharge means:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Service is too short to characterize as honorable or dishonorable",
              "DD Form 214 shows 'Uncharacterized' in the character of service block",
              "Not a negative characterization like OTH or dishonorable",
              "Not a positive characterization like honorable",
              "Neutral designation recognizing brief service period",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Not a Permanent Bar</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            An entry-level separation does not permanently bar you from military service. Many individuals
            who receive ELS later reenlist in the Marine Corps or join other service branches with a waiver.
            The uncharacterized nature of the discharge recognizes that you may simply have needed more
            maturity or preparation before serving.
          </p>
        </section>
      </div>
    ),

    "when-applied": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Conditions for ELS
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Condition</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {WHEN_ELS_APPLIES.map((item) => (
                  <tr key={item.condition} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.condition}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Bases for ELS
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Basis</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Example</th>
                </tr>
              </thead>
              <tbody>
                {ELS_BASES.map((item) => (
                  <tr key={item.basis} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.basis}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Failure to Adapt
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The most common ELS basis. Indicators include:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Persistent inability to follow military structure and discipline",
              "Difficulty accepting authority and following orders",
              "Inability to work effectively in a team environment",
              "Extreme homesickness or emotional instability",
              "Frequent conflicts with peers or leadership",
              "Lack of motivation or effort to succeed in training",
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
            Pre-Existing Medical Conditions
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Medical conditions existing before service that should have disqualified enlistment:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Physical Conditions</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Asthma or allergies</li>
                <li>• Hearing or vision problems</li>
                <li>• Orthopedic issues</li>
                <li>• Chronic medical conditions</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Mental Health</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Depression or anxiety disorders</li>
                <li>• ADHD requiring medication</li>
                <li>• History of self-harm</li>
                <li>• Behavioral disorders</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Important:</strong> If separated for fraudulent entry (concealing pre-existing
              condition), this may affect future enlistment eligibility.
            </p>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Be Honest at MEPS</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            The best way to avoid ELS for fraudulent entry is complete honesty during the enlistment
            process. Concealing medical conditions or other disqualifying factors will likely be discovered
            during training and result in separation. Disclosures at MEPS allow for proper evaluation
            and potential waivers if appropriate.
          </p>
        </section>
      </div>
    ),

    impact: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            ELS vs. Regular Separation Impact
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Aspect</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">ELS (Uncharacterized)</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Regular Separation</th>
                </tr>
              </thead>
              <tbody>
                {IMPACT_COMPARISON.map((item) => (
                  <tr key={item.aspect} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.aspect}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.els}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Benefits Eligibility
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Veterans benefits generally require a minimum period of active service and an honorable or
            general characterization. ELS typically does not qualify:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-900 dark:text-red-100">Not Eligible</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-800 dark:text-red-200">
                <li>• GI Bill education benefits</li>
                <li>• VA home loan guarantee</li>
                <li>• Most VA healthcare</li>
                <li>• Veteran employment preference</li>
                <li>• Disability compensation (unless service-connected)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">May Be Eligible</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• State-specific benefits (varies)</li>
                <li>• VA compensation if service-connected injury</li>
                <li>• Some state tuition assistance programs</li>
                <li>• Check with VA for specific circumstances</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Employment Impact
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            ELS generally has minimal impact on civilian employment:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Not considered a negative discharge (not OTH or dishonorable)",
              "Often disclosed as 'did not complete military service' or similar",
              "Most employers understand entry-level separations",
              "Brief service period is often viewed neutrally",
              "Federal employment: not disqualifying for most positions",
              "Security clearances: may affect eligibility depending on basis",
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
            Future Military Service
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Reenlisting after ELS is possible but requires a waiver:
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reenlistment Code (RE Code)</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Your DD 214 will show an RE code indicating reenlistment eligibility. Common codes for ELS:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• RE-3: May reenlist with waiver and explanation</li>
                <li>• RE-4: Not eligible without exception to policy</li>
                <li>• Actual code depends on specific basis for separation</li>
              </ul>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-900 dark:text-blue-100">Waiver Process</h4>
              <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                If you want to rejoin after ELS, speak with a recruiter. You&apos;ll need to explain what
                has changed since your separation and why you&apos;re now ready for military service. Many
                individuals successfully reenlist after maturing or addressing issues.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Moving Forward</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            An entry-level separation is not the end of the world. Many successful civilians received
            ELS and went on to productive careers. If military service is important to you, you may be
            able to reenlist later with maturity and preparation. Focus on learning from the experience
            and moving forward with your life goals.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Facing ELS
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Understand the specific basis for your separation",
              "Ask questions about the process and timeline",
              "Determine if you want to contest the separation",
              "Consider whether military service is right for you",
              "If you want to stay, demonstrate improvement immediately",
              "Document any extenuating circumstances",
              "Consult with legal assistance if you disagree with basis",
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
            During Separation Process
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Complete all checkout requirements",
              "Understand your DD Form 214 entries",
              "Note your RE code (reenlistment eligibility)",
              "Obtain copies of all separation documents",
              "Complete final medical and dental screenings",
              "Settle any financial obligations",
              "Return all issued equipment and gear",
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
            After Separation
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Keep DD Form 214 in safe place (you'll need it)",
              "Understand benefit eligibility (likely none for ELS)",
              "Plan next steps: education, employment, or other service",
              "Check state benefits (some states offer assistance)",
              "Consider future reenlistment if military service is important to you",
              "Learn from experience and focus on personal growth",
              "Contact VA if you believe you have service-connected medical issue",
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
            If You Want to Reenlist Later
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Wait appropriate time to demonstrate maturity (typically 1-2 years)",
              "Address issues that led to ELS (fitness, attitude, medical, etc.)",
              "Contact recruiter to discuss waiver process",
              "Be honest about previous service and separation",
              "Prepare explanation of what has changed",
              "Gather any supporting documentation (education, employment, etc.)",
              "Understand waiver approval is not guaranteed",
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
