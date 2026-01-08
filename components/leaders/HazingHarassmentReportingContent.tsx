"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { MCOLink, KeyPoint } from "../ui/MCOLink";
import { InfoCard } from "../ui/InfoCard";
import { CollapsibleSection } from "../ui/CollapsibleSection";
import { Shield, AlertTriangle, Users, FileText, Clock, Scale } from "lucide-react";
import { MCO_URLS } from "@/data/references";


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

const KEY_POINTS: KeyPoint[] = [
  { label: "Authority", value: "MCO 5354.1G - Punitive order under Article 92, UCMJ", url: MCO_URLS.PROHIBITED_ACTIVITIES },
  { label: "Scope", value: "Harassment, hazing, bullying, sexual harassment, prohibited discrimination" },
  { label: "Filing Deadline", value: "90 days from incident (120 days for Reserve)" },
  { label: "Investigation Timeline", value: "30 days (14 days for sexual harassment)" },
  { label: "Consent Defense", value: "NOT a defense - hazing is prohibited even with victim consent" },
  { label: "EOA Role", value: "Subject matter expert who accepts all PAC reports" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "definitions", label: "Definitions" },
  { id: "leader-actions", label: "Leader Actions" },
  { id: "reporting", label: "Reporting" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const HARASSMENT_EXAMPLES = [
  "Offensive jokes, epithets, or name calling",
  "Ridicule, mockery, insults, or putdowns",
  "Displays of offensive objects or imagery",
  "Offensive non-verbal gestures",
  "Stereotyping or intimidating acts",
  "Veiled threats of violence or threatening/provoking remarks",
  "Racial or other slurs",
  "Derogatory remarks about a person's accent or disability",
  "Displays of racially offensive symbols",
  "Interference with work performance",
];

const HAZING_EXAMPLES = [
  "Blood striping or physically striking another person",
  "Pinning or tacking on rank insignia, wings, badges, or medals",
  "Oral or written berating to belittle or humiliate",
  "Encouraging illegal, harmful, demeaning, or dangerous acts",
  "Playing abusive or malicious tricks",
  "Branding, handcuffing, duct taping, tattooing, shaving, greasing, or painting",
  "Subjecting to excessive or abusive water use",
  "Forcing consumption of food, alcohol, drugs, or any substance",
  "Soliciting or coercing others to commit acts of hazing",
];

const REPORTING_OPTIONS = [
  {
    type: "Anonymous",
    description: "No PII required. Commander receives information from unknown source. Investigated when sufficient details exist.",
    form: "NCIS Tip Line or anonymous submission",
  },
  {
    type: "Informal",
    description: "Made in writing, requesting complaint be handled at the lowest appropriate level through conflict management.",
    form: "Signed NAVMC 11512",
  },
  {
    type: "Formal",
    description: "Allegation submitted in writing to EOA requesting the commander investigate.",
    form: "Signed NAVMC 11512",
  },
  {
    type: "Confidential (SH only)",
    description: "Allows safety assessment, counseling, and referrals but will NOT be investigated. Command is not notified.",
    form: "Signed NAVMC 11512 to EOA",
  },
];

const COMMON_ISSUES = [
  {
    issue: "Leader conducts their own investigation",
    solution: "Do NOT conduct your own investigation. Refer the complainant to the servicing EOA immediately. Your role is to ensure safety, not investigate. Formal investigations require an IO appointed outside the complainant's and subject's chain of command.",
  },
  {
    issue: "\"Traditions\" like blood striping or pinning considered unit cohesion",
    solution: "MCO 5354.1G specifically lists pressing objects into skin and physically striking as hazing. These are violations of a lawful general order under Article 92. There are no exceptions for \"tradition.\"",
  },
  {
    issue: "Marine says they consented to the conduct",
    solution: "Service members are responsible for hazing even if there was actual or implied consent from the victim. Consent is NOT a defense. This applies regardless of the victim's grade, rank, status, or Service.",
  },
  {
    issue: "Incident occurred off-duty at unofficial unit function",
    solution: "Hazing and bullying are prohibited in all circumstances and environments, including off-duty or \"unofficial\" unit functions. The workplace is expansive for service members - on or off duty, 24 hours a day.",
  },
  {
    issue: "Complaint filed more than 90 days after incident",
    solution: "Late complaints may be dismissed. However, the commander has discretion to take appropriate actions necessary to maintain good order and discipline regardless of whether the complaint meets the timeline.",
  },
];

const NOT_HAZING = [
  "Properly directed command or organizational activities",
  "Requisite training to prepare for such activities",
  "Administrative corrective measures",
  "Extra military instruction",
  "Command-authorized physical training",
];

export function HazingHarassmentReportingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="Prohibited Activities and Conduct (PAC)" variant="info">
          MCO 5354.1G establishes Marine Corps policy on preventing and responding to harassment,
          hazing, bullying, prohibited discrimination, and sexual harassment. Chapter 3 of this
          Order constitutes a lawful general order under Article 92 of the UCMJ and is punitive.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">
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
            Your Role as a Leader
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Unit leaders, company-grade officers, and SNCOs have the experience, maturity, and close
            daily connection to junior Marines and Sailors to instill core values, train, supervise,
            mentor, and lead by example.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">&#10003;</span>
              <span>Develop effective communication skills and clearly communicate expectations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">&#10003;</span>
              <span>Enable reporting and develop trust by responding with impartiality and urgency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">&#10003;</span>
              <span>Ensure the chain of command is aware of requests for complaint resolution</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">&#10003;</span>
              <span>Foster a climate of inclusion that does not tolerate retaliation for reporting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-500">&#10007;</span>
              <span>Do NOT delay referring the complainant to the servicing EOA</span>
            </li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Critical: Consent Is Not a Defense" variant="warning">
          Service members are responsible for hazing even if there was actual or implied consent
          from the victim, and regardless of the victim&apos;s grade, rank, status, or Service.
          Hazing is prohibited in all circumstances and environments, including off-duty or
          &quot;unofficial&quot; unit functions.
        </InfoCard>
      </div>
    ),

    definitions: (
      <div className="space-y-6">
        <CollapsibleSection title="Harassment" defaultOpen>
          <div className="space-y-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Any conduct whereby a service member knowingly, recklessly, or intentionally and with
              a nexus to military service engages in behavior that is unwelcome or offensive to a
              reasonable person, whether oral, written, or physical, that creates an intimidating,
              hostile, or offensive environment.
            </p>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Examples of Harassment:</h4>
              <ul className="mt-2 grid gap-1 text-sm text-zinc-600 dark:text-zinc-400 md:grid-cols-2">
                {HARASSMENT_EXAMPLES.map((example) => (
                  <li key={example} className="flex items-start gap-2">
                    <span className="text-amber-500">&bull;</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">Note</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Harassment does NOT include activities undertaken for a proper military or
                governmental purpose. This policy is not a &quot;general civility code.&quot; Behavior
                that is rude, ignorant, or unkind but does not adversely affect the work environment
                is not harassment.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Bullying">
          <div className="space-y-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              A form of harassment that includes acts of aggression by a service member or DoD
              civilian employee, with a nexus to military service, with the intent of harming a
              service member either physically or psychologically, without a proper military or
              governmental purpose. Often involves singling out an individual considered different
              or weak, and often involves a power imbalance.
            </p>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Bullying Includes:</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>&bull; Physically striking or threatening to strike another person</li>
                <li>&bull; Intimidating, teasing, or taunting another person</li>
                <li>&bull; Oral or written berating to belittle or humiliate</li>
                <li>&bull; Encouraging illegal, harmful, demeaning, or dangerous acts</li>
                <li>&bull; Playing abusive or malicious tricks</li>
                <li>&bull; Degrading or damaging another&apos;s property or reputation</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Hazing">
          <div className="space-y-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              A form of harassment that includes conduct through which service members, without a
              proper military or governmental purpose but with a nexus to military service,
              physically or psychologically injure or create a risk of injury for the purpose of:
            </p>
            <ul className="ml-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>&bull; Initiation into any military or DoD civilian organization</li>
              <li>&bull; Admission into or affiliation with any organization</li>
              <li>&bull; Change in status or position within any organization</li>
              <li>&bull; Continued membership in any organization</li>
            </ul>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-800 dark:text-red-200">Hazing Includes:</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                {HAZING_EXAMPLES.map((example) => (
                  <li key={example} className="flex items-start gap-2">
                    <span>&bull;</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Sexual Harassment">
          <div className="space-y-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              SH is defined and prohibited by paragraph 107a of Part IV of the Manual for Courts-Martial
              as a standalone offense under Article 134 of the UCMJ.
            </p>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Prohibited Conduct:</h4>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>&bull; Any use or condonation, by any person in a supervisory or command position,
                  of any form of sexual behavior to control, influence, or affect the career, pay,
                  or job of a service member or DoD civilian employee</li>
                <li>&bull; Any deliberate or repeated unwelcome verbal comment or gesture of a sexual
                  nature by any service member or DoD civilian employee</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Prohibited Discrimination">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Any conduct whereby a service member knowingly, recklessly, or intentionally and with
            a nexus to military service discriminates, including disparate treatment of an
            individual or group on the basis of race, color, national origin, religion, sex
            (including pregnancy), or sexual orientation that is not otherwise authorized by law
            or regulation and detracts from military readiness.
          </p>
        </CollapsibleSection>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Does NOT Constitute Hazing or Bullying
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The following do NOT constitute hazing or bullying when they serve a proper military
            or governmental purpose:
          </p>
          <ul className="mt-3 space-y-2">
            {NOT_HAZING.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-green-500">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),

    "leader-actions": (
      <div className="space-y-6">
        <InfoCard icon={Users} title="When a Marine Reports to You" variant="info">
          Your immediate actions are critical. Focus on safety and proper referral - do NOT
          attempt to investigate on your own.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Immediate Response Steps
          </h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                1
              </span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Ensure Safety</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Ensure the immediate physical and psychological safety of the complainant.
                  Separate parties if necessary.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                2
              </span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Refer to EOA</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Refer the complainant to the servicing Equal Opportunity Advisor (EOA) for
                  official intake and reporting options.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                3
              </span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Do NOT Investigate</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Do NOT conduct your own investigation. Formal investigations require an
                  Investigating Officer appointed outside both the complainant&apos;s and subject&apos;s
                  chain of command.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                4
              </span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Monitor for Retaliation</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Follow up to ensure no retaliation occurs against the complainant. Retaliation
                  includes maltreatment, ostracism, reprisal, and restriction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            The Equal Opportunity Advisor (EOA)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The EOA is the Marine Corps subject matter expert who accepts all reports of PAC.
            The EOA advises and assists the command team on all PAC concerns.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">EOA Contact</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                MPE Advice Line: (844) 818-1674
              </p>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                Email: MPE_EO@usmc.mil
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">Anonymous Reporting</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                NCIS Tip Line for anonymous PAC allegations
              </p>
            </div>
          </div>
        </section>

        <InfoCard icon={Scale} title="Retaliation Prevention" variant="warning">
          Complainants who engage in protected communications are protected from retaliatory
          actions. Retaliation types include maltreatment, ostracism, reprisal, and restriction.
          Venues include in person, in the unit/workplace, through electronic communications,
          and on social media. Complaints of reprisal should be referred to the chain of command,
          CIG, IGMC, or DoD OIG.
        </InfoCard>
      </div>
    ),

    reporting: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reporting Options
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Service members have multiple options for reporting Prohibited Activities and Conduct:
          </p>
          <div className="mt-4 space-y-4">
            {REPORTING_OPTIONS.map((option) => (
              <div key={option.type} className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{option.type}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{option.description}</p>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">Form: {option.form}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Clock} title="Timeline Requirements" variant="default">
          <div className="mt-2 space-y-2 text-sm">
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium">Filing deadline:</span>
              <span>90 days (120 days for Reserve)</span>
            </div>
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium">Investigation completion:</span>
              <span>30 days (14 days for SH)</span>
            </div>
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium">Extensions:</span>
              <span>30-day extension from next higher commander</span>
            </div>
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium">Notification of disposition:</span>
              <span>Within 3 calendar days</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Appeals:</span>
              <span>Within 30 days of notification</span>
            </div>
          </div>
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Cross-Over Complaints
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            When complaints involve both service members and civilians:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li><strong>If service member is complainant:</strong> Treat as military complaint, follow MCO 5354.1G procedures</li>
            <li><strong>If DoD civilian is complainant:</strong> Treat as civilian complaint per departmental policy</li>
            <li><strong>If contractor involved:</strong> Coordinate with the Contracting Officer Representative (COR)</li>
            <li><strong>Always:</strong> Consult with SJA and local HRO to determine required investigative steps</li>
          </ul>
        </section>

        <InfoCard icon={FileText} title="Key Forms" variant="default">
          <ul className="mt-2 space-y-1">
            <li>&bull; <strong>NAVMC 11512</strong> - Prohibited Activities and Conduct Complaint and Resolution Form</li>
            <li>&bull; <strong>NAVMC 11513</strong> - Offender Acknowledgement Record</li>
          </ul>
        </InfoCard>
      </div>
    ),

    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems & Solutions
          </h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Remember: No Exceptions for Tradition" variant="warning">
          MCO 5354.1G specifically lists blood striping, pinning on rank/wings/badges, and
          physically striking another person as hazing. These are violations of a lawful
          general order under Article 92, UCMJ. There are no exceptions for &quot;tradition&quot;
          or unit &quot;cohesion activities.&quot;
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
