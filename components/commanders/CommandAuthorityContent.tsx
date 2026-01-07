"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "../ui/Breadcrumb";
import { LastUpdated } from "../ui/LastUpdated";
import { Acronym } from "../ui/Acronym";
import { MCO_URLS, NAVY_DOD_URLS } from "../../data/references";
import { InfoCard } from "../ui/InfoCard";
import {
  ChevronDown,
  ChevronRight,
  Scale,
  Gavel,
  FileText,
  Shield,
  AlertTriangle,
  ExternalLink,
  Users,
  BookOpen,
} from "lucide-react";

type CollapsibleSectionProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

function CollapsibleSection({ title, icon, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/15 dark:bg-black/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-3 p-4 text-left hover:bg-[var(--sa-cream)]/30 dark:hover:bg-white/5"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
          {icon}
        </div>
        <span className="flex-1 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          {title}
        </span>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-zinc-400" />
        ) : (
          <ChevronRight className="h-5 w-5 text-zinc-400" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-black/5 p-6 dark:border-white/15">
          {children}
        </div>
      )}
    </div>
  );
}
function PunishmentTable({ title, data }: { title: string; data: { punishment: string; limit: string }[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
      <div className="bg-[var(--sa-navy)] px-4 py-2 text-sm font-semibold text-[var(--sa-cream)]">
        {title}
      </div>
      <table className="w-full text-sm">
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-black/20" : "bg-zinc-50 dark:bg-black/40"}>
              <td className="px-4 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{row.punishment}</td>
              <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">{row.limit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CommandAuthorityContent() {
  const breadcrumbItems = [
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Command Authority & Legal" },
  ];

  const keyReferences = [
    { title: "U.S. Navy Regulations, 1990", desc: "Primary legal and regulatory authority", href: NAVY_DOD_URLS.US_NAVY_REGULATIONS },
    { title: "MCO 5800.16", desc: "Legal Support and Administration Manual", href: MCO_URLS.LEGADMINMAN },
    { title: "Manual for Courts-Martial", desc: "MCM - UCMJ procedures", href: NAVY_DOD_URLS.MCM },
    { title: "MCO 1900.16", desc: "Separation and Retirement Manual", href: MCO_URLS.MARCORSEPMAN_PDF },
    { title: "MCO 1730.9", desc: "Religious Ministry in the Marine Corps", href: MCO_URLS.RELIGIOUS_MINISTRY },
    { title: "MCO 1700.23G", desc: "Request Mast Procedures", href: MCO_URLS.REQUEST_MAST },
  ];

  const fieldGradeEnlisted = [
    { punishment: "Admonition or reprimand", limit: "Yes" },
    { punishment: "Restriction", limit: "Up to 60 days (45 if combined with extra duty)" },
    { punishment: "Extra duties", limit: "Up to 45 days" },
    { punishment: "Reduction in grade", limit: "One grade for E-6 and below" },
    { punishment: "Forfeiture of pay", limit: "½ of one month's pay for 2 months" },
    { punishment: "Correctional custody", limit: "Up to 30 days (E-3 and below only)" },
  ];

  const fieldGradeOfficer = [
    { punishment: "Admonition or reprimand", limit: "Yes" },
    { punishment: "Restriction", limit: "Up to 30 days" },
    { punishment: "Forfeiture of pay", limit: "½ of one month's pay for 2 months" },
  ];

  const companyGradeEnlisted = [
    { punishment: "Admonition or reprimand", limit: "Yes" },
    { punishment: "Restriction", limit: "Up to 14 days" },
    { punishment: "Extra duties", limit: "Up to 14 days" },
    { punishment: "Reduction in grade", limit: "One grade for E-4 and below only" },
    { punishment: "Forfeiture of pay", limit: "Up to 7 days pay" },
    { punishment: "Correctional custody", limit: "Up to 7 days (E-3 and below only)" },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="rounded-xl border-l-4 border-l-rose-500 bg-gradient-to-r from-rose-50 to-white p-6 shadow-sm dark:from-rose-950/20 dark:to-black/40">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Command Authority & Legal Responsibilities
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Your authorities under <Acronym title="Uniform Code of Military Justice">UCMJ</Acronym> and Navy Regulations
        </p>
        <LastUpdated date="December 2025" authority="MCO 5800.16" />
      </div>

      {/* Overview */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Overview</h2>
        <div className="mt-4 space-y-4 text-zinc-700 dark:text-zinc-300">
          <p>
            Command authority flows from the Commandant through the chain of command to you. As a commander,
            you hold specific legal authorities that only you can exercise. These authorities include
            nonjudicial punishment under Article 15 <Acronym title="Uniform Code of Military Justice">UCMJ</Acronym>, administrative separation actions,
            court-martial referral decisions, religious accommodation adjudication, and request mast procedures.
          </p>
          <p>
            Understanding the scope and limits of your authority protects both your Marines and your command.
            This page covers <Acronym title="Non-Judicial Punishment">NJP</Acronym> authority, court-martial convening authority, administrative
            separation authority, religious accommodation authority, and request mast procedures.
          </p>
        </div>

        {/* Key References */}
        <div className="mt-6">
          <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key References</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {keyReferences.map((ref) => (
              <a
                key={ref.title}
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-black/10 bg-zinc-50 px-3 py-2 text-sm transition hover:border-[var(--sa-navy)]/30 hover:bg-white dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/40"
              >
                <BookOpen className="h-4 w-4 text-[var(--sa-red)]" />
                <div>
                  <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{ref.title}</div>
                  <div className="text-xs text-zinc-500">{ref.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Navy Regulations Foundation */}
      <CollapsibleSection title="U.S. Navy Regulations Foundation" icon={<BookOpen className="h-5 w-5" />} defaultOpen>
        <div className="space-y-6">
          {/* Statutory Basis */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Statutory Foundation of Authority</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              The <a href={NAVY_DOD_URLS.US_NAVY_REGULATIONS} target="_blank" rel="noopener noreferrer" className="text-[var(--sa-gold)] hover:underline">United States Navy Regulations (1990)</a> is the principal regulatory document for the Department of the Navy (which includes the Marine Corps) and is <strong>endowed with the sanction of law</strong>.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <InfoCard title="Title 10, U.S. Code">
                Your authority is derived from Title 10, United States Code. These regulations are issued by the Secretary of the Navy and establish your legal and professional guidebook as a commander.
              </InfoCard>
              <InfoCard title="Commandant of the Marine Corps">
                As a Marine commander, you fall under the authority of the <Acronym title="Commandant of the Marine Corps">CMC</Acronym>, who is directly responsible to the Secretary of the Navy for the total performance of the Marine Corps, including its readiness and internal administration.
              </InfoCard>
            </div>
          </div>

          {/* Absolute Responsibility */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The Absolute Responsibility of Command</h3>
            <div className="mt-4 rounded-lg border-2 border-rose-200 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/30">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600 dark:text-rose-400" />
                <div>
                  <div className="font-semibold text-rose-700 dark:text-rose-400">Responsibility is Absolute</div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                    Once you take command, your responsibility is <strong>absolute</strong>. While you can and should delegate authority to subordinates to execute details, this delegation <strong>does not relieve you</strong> of the continued responsibility for the safety, well-being, and efficiency of your entire command.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leadership by Example</div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  You are required to exercise leadership through personal example and moral responsibility.
                </p>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Economy & Resources</div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  You are personally responsible for the economical use of public money and materials within your command.
                </p>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non-Delegable</div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  While authority can be delegated, the ultimate responsibility for your command&apos;s actions remains with you.
                </p>
              </div>
            </div>
          </div>

          {/* Personnel Welfare & Readiness */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Personnel Welfare & Operational Readiness</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Morale & Welfare</div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Foster high morale and ensure moral and spiritual well-being</li>
                  <li>Afford personnel the opportunity to make requests or statements directly to you</li>
                  <li>Maintain discipline and ensure <Acronym title="Uniform Code of Military Justice">UCMJ</Acronym> is explained to all enlisted at specific intervals</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Readiness & Training</div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Maintain command in a state of readiness to perform assigned mission</li>
                  <li>Organize forces and assign duties to subordinates</li>
                  <li>Ensure specialized and professional knowledge through frequent drills and instruction</li>
                  <li>Ensure all personnel are instructed in and comply with safety precautions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* International Law & Use of Force */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">International Law & Use of Force</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <InfoCard title="International Law Obligations" variant="info">
                <ul className="list-inside list-disc space-y-1">
                  <li>Observe and require your command to observe principles of international law at all times</li>
                  <li>Ensure personnel avoid offending local authorities when abroad</li>
                  <li>Show deference to local laws and customs in foreign ports</li>
                </ul>
              </InfoCard>
              <InfoCard title="Use of Force in Peacetime" variant="warning">
                <ul className="list-inside list-disc space-y-1">
                  <li>Use of force against another nation is illegal in peacetime except as <strong>self-defense</strong></li>
                  <li>Self-defense includes defending your unit, yourself, and potentially U.S. citizens and property in the vicinity</li>
                </ul>
              </InfoCard>
            </div>
          </div>

          {/* Succession to Command */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Succession to Command</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Executive Officer (<Acronym title="Executive Officer">XO</Acronym>)</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Normally, the XO is the officer next in rank and is your primary assistant. They succeed to command if you are incapacitated or absent.
                </p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
                <div className="font-semibold text-amber-700 dark:text-amber-400">Temporary Succession Limitations</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  An officer who succeeds you temporarily is <strong>forbidden from making changes</strong> to the existing organization and must carry on the routine of the command as usual.
                </p>
              </div>
            </div>
          </div>

          {/* Signature Authority */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Signature Authority Types</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Understanding who has the power to sign documents—and what those signatures imply—is vital for maintaining the legal and administrative integrity of your unit.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">&quot;Acting&quot;</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Used when you officially succeed to a command position temporarily because the permanent commander is absent, incapacitated, or the position is vacant.
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Same authority and responsibility as the officer you succeed</li>
                  <li>&quot;Acting&quot; must appear below signature</li>
                  <li>Forbidden from making organizational changes during temporary absence</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Delegation of Authority</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Formal action by which you assign a portion of your authority to a subordinate to accomplish a specific task.
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Authority commensurate with task assigned</li>
                  <li><strong>Does not</strong> relieve you of responsibility</li>
                  <li>Extent of authority must be clearly stated</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">&quot;By Direction&quot;</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Standard signature for staff officers who act for and in the name of the commander.
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Staff officers have no command authority of their own</li>
                  <li>Executes your established policies or routine admin tasks</li>
                  <li><strong>You</strong> remain responsible for their actions</li>
                </ul>
              </div>
            </div>
            {/* Signature Authority Comparison Table */}
            <div className="mt-4 overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-[var(--sa-navy)] text-[var(--sa-cream)]">
                  <tr>
                    <th className="px-4 py-2 text-left">Term</th>
                    <th className="px-4 py-2 text-left">Who Signs</th>
                    <th className="px-4 py-2 text-left">Source of Power</th>
                    <th className="px-4 py-2 text-left">Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-black/20">
                    <td className="px-4 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Acting</td>
                    <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">Officer next in rank/seniority</td>
                    <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">Succession to office itself</td>
                    <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">&quot;Acting&quot; officer fully responsible</td>
                  </tr>
                  <tr className="bg-zinc-50 dark:bg-black/40">
                    <td className="px-4 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Delegation</td>
                    <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">Designated subordinate</td>
                    <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">Specific assigned task</td>
                    <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300"><strong>You</strong> retain ultimate responsibility</td>
                  </tr>
                  <tr className="bg-white dark:bg-black/20">
                    <td className="px-4 py-2 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">By Direction</td>
                    <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">Authorized staff officer</td>
                    <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">Acting in your name</td>
                    <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300"><strong>You</strong> remain responsible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* NJP Authority Section */}
      <CollapsibleSection title="NJP Authority (Article 15 UCMJ)" icon={<Gavel className="h-5 w-5" />}>
        <div className="space-y-6">
          {/* Who Has Authority */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Has Authority</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <InfoCard title="Commanding Officers">
                Any officer assigned to command an organization has <Acronym title="Non-Judicial Punishment">NJP</Acronym> authority over personnel
                assigned or attached to that command. Authority comes with command orders, not rank alone.
              </InfoCard>
              <InfoCard title="Officers-in-Charge (OIC)">
                Must be designated by a flag officer exercising <Acronym title="General Court-Martial">GCM</Acronym> jurisdiction. Authority is more
                limited than commanding officers. Can impose admonition, reprimand, and company-grade punishments.
              </InfoCard>
              <InfoCard title="SPCMCA">
                Officers designated as Special Court-Martial Convening Authority have <Acronym title="Non-Judicial Punishment">NJP</Acronym> authority
                extending to all enlisted personnel assigned to their unit.
              </InfoCard>
            </div>
            <InfoCard title="Key Point" variant="tip">
              A person is "of the command" if assigned or attached. A Marine can be "of the command" of more than
              one unit at the same time (e.g., <Acronym title="Temporary Additional Duty">TAD</Acronym>).
            </InfoCard>
          </div>

          {/* Punishment Limits */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Punishment Limits by Grade</h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="space-y-4">
                <PunishmentTable title="Field Grade Commanders (O-4+) vs Enlisted" data={fieldGradeEnlisted} />
                <PunishmentTable title="Field Grade Commanders (O-4+) vs Officers" data={fieldGradeOfficer} />
              </div>
              <div className="space-y-4">
                <PunishmentTable title="Company Grade Commanders (O-3 and below) vs Enlisted" data={companyGradeEnlisted} />
                <InfoCard title="Company Grade vs Officers" variant="warning">
                  Company grade commanders can only impose <strong>admonition or reprimand</strong> on officers.
                </InfoCard>
                <InfoCard title="Reduction Restrictions" variant="warning">
                  <ul className="mt-1 list-inside list-disc space-y-1">
                    <li>Marine Corps SNCOs (E-6 to E-9) <strong>cannot</strong> be reduced at <Acronym title="Non-Judicial Punishment">NJP</Acronym></li>
                    <li>Navy CPOs E-7 to E-9 <strong>cannot</strong> be reduced at <Acronym title="Non-Judicial Punishment">NJP</Acronym></li>
                  </ul>
                </InfoCard>
              </div>
            </div>
          </div>

          {/* NJP Process */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NJP Process Requirements</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before NJP Hearing</div>
                <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Notify the accused of your intent to impose NJP</li>
                  <li>Inform accused of the nature of misconduct alleged</li>
                  <li>Provide supporting evidence</li>
                  <li>Advise accused of rights under Article 31 <Acronym title="Uniform Code of Military Justice">UCMJ</Acronym></li>
                  <li>Inform accused of right to demand trial by court-martial</li>
                  <li>Allow reasonable time to prepare (normally 3 working days)</li>
                </ol>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">At NJP Hearing - Accused Rights</div>
                <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Appear personally before you</li>
                  <li>Be accompanied by a spokesperson (not necessarily an attorney)</li>
                  <li>Examine all evidence you will rely on</li>
                  <li>Present matters in defense, extenuation, and mitigation</li>
                  <li>Call witnesses reasonably available at no cost to government</li>
                </ol>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <InfoCard title="Your Decision">
                <ul className="list-inside list-disc space-y-1">
                  <li><strong>Burden of proof:</strong> Preponderance of the evidence (more likely than not)</li>
                  <li>You determine guilt and punishment</li>
                  <li>Document on NAVMC 10132 (Unit Punishment Book form)</li>
                </ul>
              </InfoCard>
              <InfoCard title="Right to Refuse NJP" variant="warning">
                <ul className="list-inside list-disc space-y-1">
                  <li>Most Marines can refuse <Acronym title="Non-Judicial Punishment">NJP</Acronym> and demand trial by court-martial</li>
                  <li><strong>Exception:</strong> Marines attached to or embarked on a vessel cannot refuse</li>
                </ul>
              </InfoCard>
            </div>
          </div>

          {/* Appeal Procedures */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Appeal Procedures</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-black/20">
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Who Can Appeal</div>
                <div className="mt-1 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Any Marine who considers punishment unjust or disproportionate</div>
              </div>
              <div className="rounded-lg border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-black/20">
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Timeline</div>
                <div className="mt-1 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Within reasonable time (normally 5 working days)</div>
              </div>
              <div className="rounded-lg border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-black/20">
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Appeal Authority</div>
                <div className="mt-1 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Next superior authority in chain of command</div>
              </div>
              <div className="rounded-lg border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-black/20">
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Actions Available</div>
                <div className="mt-1 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Set aside, remit, mitigate, or suspend</div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Court-Martial Authority */}
      <CollapsibleSection title="Court-Martial Convening Authority" icon={<Scale className="h-5 w-5" />}>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Summary Court-Martial */}
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Summary Court-Martial</div>
              <div className="mt-2 space-y-2 text-sm">
                <div><span className="font-medium">Convening Authority:</span> <span className="text-zinc-600 dark:text-zinc-400">Any commanding officer</span></div>
                <div className="border-t border-black/10 pt-2 dark:border-white/10">
                  <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Maximum Punishment:</div>
                  <ul className="mt-1 list-inside list-disc text-zinc-600 dark:text-zinc-400">
                    <li>Confinement: 30 days</li>
                    <li>Forfeiture: ⅔ pay for 1 month</li>
                    <li>Reduction: To E-1</li>
                    <li>No punitive discharge</li>
                  </ul>
                </div>
                <div className="border-t border-black/10 pt-2 dark:border-white/10">
                  <div className="font-medium text-amber-600 dark:text-amber-400">Note:</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Accused can refuse SCM</div>
                </div>
              </div>
            </div>

            {/* Special Court-Martial */}
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Court-Martial</div>
              <div className="mt-2 space-y-2 text-sm">
                <div><span className="font-medium">Convening Authority:</span> <span className="text-zinc-600 dark:text-zinc-400">O-5+ or designated officers</span></div>
                <div className="border-t border-black/10 pt-2 dark:border-white/10">
                  <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Maximum Punishment:</div>
                  <ul className="mt-1 list-inside list-disc text-zinc-600 dark:text-zinc-400">
                    <li>Confinement: 12 months</li>
                    <li>Forfeiture: ⅔ pay for 12 months</li>
                    <li>Reduction: To E-1</li>
                    <li><Acronym title="Bad Conduct Discharge">BCD</Acronym> (with judge/counsel)</li>
                  </ul>
                </div>
                <div className="border-t border-black/10 pt-2 dark:border-white/10">
                  <div className="font-medium text-emerald-600 dark:text-emerald-400">Right to Counsel:</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Military counsel provided</div>
                </div>
              </div>
            </div>

            {/* General Court-Martial */}
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">General Court-Martial</div>
              <div className="mt-2 space-y-2 text-sm">
                <div><span className="font-medium">Convening Authority:</span> <span className="text-zinc-600 dark:text-zinc-400">General officers in command</span></div>
                <div className="border-t border-black/10 pt-2 dark:border-white/10">
                  <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Maximum Punishment:</div>
                  <ul className="mt-1 list-inside list-disc text-zinc-600 dark:text-zinc-400">
                    <li>As authorized by <Acronym title="Uniform Code of Military Justice">UCMJ</Acronym></li>
                    <li>Can include death (certain offenses)</li>
                    <li>Dishonorable Discharge</li>
                    <li>Dismissal (officers)</li>
                  </ul>
                </div>
                <div className="border-t border-black/10 pt-2 dark:border-white/10">
                  <div className="font-medium text-rose-600 dark:text-rose-400">Most Serious Level</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Full due process protections</div>
                </div>
              </div>
            </div>
          </div>

          {/* Disposition Options */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Disposition Options</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">When misconduct is reported, you may:</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Take no action",
                "Dismiss with or without warning",
                "Administrative counseling (Page 11)",
                "6105 counseling entry",
                "Punitive letter (caution/admonition/reprimand)",
                "Impose NJP",
                "Refer to higher authority",
                "Prefer charges for court-martial",
              ].map((option, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg border border-black/10 bg-zinc-50 px-3 py-2 text-sm dark:border-white/10 dark:bg-black/20">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs text-[var(--sa-cream)]">{i + 1}</span>
                  <span className="text-zinc-700 dark:text-zinc-300">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Administrative Separation Authority */}
      <CollapsibleSection title="Administrative Separation Authority" icon={<FileText className="h-5 w-5" />}>
        <div className="space-y-6">
          {/* Authority Levels */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Separation Authority Levels</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"><Acronym title="General Court-Martial Convening Authority">GCMCA</Acronym> (Primary)</div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Primary separation authority for most involuntary separations</li>
                  <li>Required for <Acronym title="Other Than Honorable">OTH</Acronym> characterization recommendations</li>
                  <li>Required for Marines with <Acronym title="Post-Traumatic Stress Disorder">PTSD</Acronym>/<Acronym title="Traumatic Brain Injury">TBI</Acronym> diagnoses</li>
                  <li>Can delegate certain authorities to <Acronym title="Special Court-Martial Convening Authority">SPCMCA</Acronym></li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"><Acronym title="Special Court-Martial Convening Authority">SPCMCA</Acronym> (When Delegated)</div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Can approve General (Under Honorable Conditions) discharges</li>
                  <li>Can approve Entry Level Separations</li>
                  <li><strong>Cannot</strong> approve <Acronym title="Other Than Honorable">OTH</Acronym> characterizations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Board Requirements */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Board Requirements</h3>
            <InfoCard title="Administrative Separation Board Required When:" variant="warning">
              <ul className="list-inside list-disc space-y-1">
                <li>Marine has <strong>6 or more years</strong> of total active and reserve service</li>
                <li><strong><Acronym title="Other Than Honorable">OTH</Acronym> characterization</strong> is sought (regardless of time in service)</li>
              </ul>
            </InfoCard>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Board Composition</div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Minimum three members</li>
                  <li>Includes officers and enlisted personnel</li>
                  <li>Members must be senior in rank to the Marine</li>
                  <li>Members must be impartial</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine's Rights at Board</div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Appear in person before the board</li>
                  <li>Be represented by counsel</li>
                  <li>Present evidence and witnesses</li>
                  <li>Cross-examine government witnesses</li>
                  <li>Make a statement (sworn or unsworn)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Characterization */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Characterization of Service</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border-l-4 border-l-emerald-500 bg-emerald-50 p-4 dark:bg-emerald-950/20">
                <div className="font-semibold text-emerald-700 dark:text-emerald-400">Honorable</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Service generally met standards of acceptable conduct and performance</div>
              </div>
              <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4 dark:bg-amber-950/20">
                <div className="font-semibold text-amber-700 dark:text-amber-400">General (Under Honorable)</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Satisfactory but not sufficiently meritorious for Honorable</div>
              </div>
              <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-50 p-4 dark:bg-rose-950/20">
                <div className="font-semibold text-rose-700 dark:text-rose-400">Other Than Honorable</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Significant departure from expected conduct. Requires board.</div>
              </div>
              <div className="rounded-lg border-l-4 border-l-zinc-400 bg-zinc-50 p-4 dark:bg-zinc-800/20">
                <div className="font-semibold text-zinc-700 dark:text-zinc-400">Entry Level Separation</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">First 180 days. Uncharacterized.</div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Religious Accommodation */}
      <CollapsibleSection title="Religious Accommodation Authority" icon={<Users className="h-5 w-5" />}>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requests NOT Requiring Waiver</div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Commanding officer can approve</li>
                <li>Examples: Scheduling accommodations, dietary accommodations, worship time</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requests Requiring DON/USMC Waiver</div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Routed to <Acronym title="Deputy Commandant for Manpower and Reserve Affairs">DC M&RA</Acronym> via first <Acronym title="General Court-Martial Convening Authority">GCMCA</Acronym></li>
                <li>Examples: Grooming waivers, religious apparel, medical requirements</li>
                <li>Appeal to <Acronym title="Commandant of the Marine Corps">CMC</Acronym> within 10 business days</li>
              </ul>
            </div>
          </div>
          <InfoCard title="Compelling Government Interest Standard (RFRA)" variant="tip">
            Accommodation can only be denied if: (1) The military policy is in furtherance of a compelling government
            interest, AND (2) The policy is the least restrictive means of furthering that interest.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Request Mast */}
      <CollapsibleSection title="Request Mast Procedures" icon={<Shield className="h-5 w-5" />}>
        <div className="space-y-4">
          <InfoCard title="Marine's Right">
            Every Marine has the right to communicate with any commander in the chain of command (MCO 1700.23G).
          </InfoCard>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Responsibilities</div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Cannot deny or discourage requests to mast</li>
                <li>Must personally hear all requests</li>
                <li>Must respond within 72 hours</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Process</div>
              <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Marine submits request mast chit</li>
                <li>Each level endorses within 24 hours</li>
                <li>Commander grants audience</li>
                <li>Response documented</li>
              </ol>
            </div>
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/30">
              <div className="font-semibold text-rose-700 dark:text-rose-400">Prohibited Actions</div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Denying or unreasonably delaying</li>
                <li>Retaliating against Marine</li>
                <li>Discouraging Marines from exercising</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <section className="rounded-xl border-2 border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Things to Know</h2>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="rounded-lg bg-white p-3 dark:bg-black/20">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NJP Critical Points</div>
              <ul className="mt-1 list-inside list-disc text-sm text-zinc-600 dark:text-zinc-400">
                <li><Acronym title="Non-Judicial Punishment">NJP</Acronym> does not constitute a federal criminal conviction</li>
                <li>Records may be filed in the service record book</li>
                <li>Suspended punishment can be vacated for new offenses</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-3 dark:bg-black/20">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">First 90 Days Post-NJP</div>
              <ul className="mt-1 list-inside list-disc text-sm text-zinc-600 dark:text-zinc-400">
                <li>High-risk period for suicide-related behavior</li>
                <li>Deliberate leadership engagement required</li>
                <li>Connect Marine with resources</li>
                <li>Update <Acronym title="Commander's Inspection Reporting and Readiness Assessment System">CIRRAS</Acronym></li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg bg-white p-3 dark:bg-black/20">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pretrial Confinement</div>
              <ul className="mt-1 list-inside list-disc text-sm text-zinc-600 dark:text-zinc-400">
                <li>You can order when offense believed and confinement necessary</li>
                <li>Neutral officer review within 48 hours</li>
                <li>Probable cause determination within 72 hours</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-3 dark:bg-black/20">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PTSD/TBI Cases</div>
              <ul className="mt-1 list-inside list-disc text-sm text-zinc-600 dark:text-zinc-400">
                <li><Acronym title="General Court-Martial Convening Authority">GCMCA</Acronym> is always separation authority</li>
                <li>Mental health professional must report on condition</li>
                <li>Determine effect on behavior and judgment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="flex gap-3">
        <Link
          href="/roles/commanders"
          prefetch={false}
          className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10"
        >
          Back to Commanders Home
        </Link>
      </div>
    </div>
  );
}
