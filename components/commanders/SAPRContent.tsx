"use client";

import { useState } from "react";
import { Acronym } from "../ui/Acronym";
import {
  ChevronDown,
  ChevronRight,
  Shield,
  Users,
  FileText,
  AlertTriangle,
  CheckCircle,
  Info,
  ExternalLink,
  Clock,
  Lock,
  Unlock,
  UserCheck,
  AlertCircle,
  Phone,
  XCircle,
} from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({
  title,
  icon,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-zinc-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className="text-[var(--sa-gold)]">{icon}</span>
          )}
          <span className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {title}
          </span>
        </div>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        ) : (
          <ChevronRight className="h-5 w-5 text-zinc-500" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-black/10 p-4 dark:border-white/10">
          {children}
        </div>
      )}
    </div>
  );
}

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  variant?: "info" | "warning" | "success" | "tip" | "danger";
}

function InfoCard({ title, children, variant = "info" }: InfoCardProps) {
  const styles = {
    info: "border-l-blue-500 bg-blue-50 dark:bg-blue-950/20",
    warning: "border-l-amber-500 bg-amber-50 dark:bg-amber-950/20",
    success: "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-950/20",
    tip: "border-l-purple-500 bg-purple-50 dark:bg-purple-950/20",
    danger: "border-l-rose-500 bg-rose-50 dark:bg-rose-950/20",
  };

  const icons = {
    info: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    success: <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    tip: <Info className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
    danger: <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400" />,
  };

  return (
    <div className={`rounded-lg border-l-4 p-4 ${styles[variant]}`}>
      <div className="flex items-start gap-3">
        {icons[variant]}
        <div>
          <div className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</div>
          <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
        </div>
      </div>
    </div>
  );
}

function NonDelegableBadge() {
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
      NON-DELEGABLE
    </span>
  );
}

function TimelineBadge({ time }: { time: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
      <Clock className="h-3 w-3" />
      {time}
    </span>
  );
}

export function SAPRContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-8 text-white">
        <h1 className="text-3xl font-bold">Sexual Assault Prevention and Response (SAPR)</h1>
        <p className="mt-2 text-lg text-zinc-200">
          Commander authorities, reporting requirements, and victim support
        </p>
      </div>

      {/* Overview */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Overview
        </h2>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          As a commander, you set the tone for how your unit prevents and responds to sexual
          assault. Your actions determine whether Marines feel safe reporting, whether victims
          receive proper support, and whether offenders are held accountable.{" "}
          <strong><Acronym title="Sexual Assault Prevention and Response">SAPR</Acronym> is a commander&apos;s program</strong> - not something you delegate to
          your SARC and forget.
        </p>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          You have specific non-delegable requirements when a sexual assault is reported. You must
          attend Case Management Group meetings, provide updates to victims, and submit required
          reports. Your leadership in prevention creates the climate that reduces sexual assault in
          your unit.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key References
          </h3>
          <ul className="mt-2 grid gap-2 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
            <li>• MCO 1752.5C (SAPR Program)</li>
            <li>• DoDI 6495.02 (SAPR Program Procedures)</li>
            <li>• Commander Smart Pack SAPR</li>
            <li>• NAVMC 1752.5 (<Acronym title="SAPR Victim Advocate">SAPR VA</Acronym>/<Acronym title="Sexual Assault Response Coordinator">SARC</Acronym> Procedures)</li>
          </ul>
        </div>
      </div>

      {/* Non-Delegable Requirements Highlight */}
      <InfoCard title="Non-Delegable Commander Requirements" variant="danger">
        <ul className="list-inside list-disc space-y-1">
          <li>Attend monthly <Acronym title="Case Management Group">CMG</Acronym> while case is open</li>
          <li>Provide 72-hour case updates to victim after each CMG</li>
          <li>Submit 8-Day Incident Report</li>
        </ul>
      </InfoCard>

      {/* SAPR Personnel */}
      <CollapsibleSection
        title="SAPR Personnel Appointment and Oversight"
        icon={<UserCheck className="h-5 w-5" />}
        defaultOpen={true}
      >
        <div className="space-y-6">
          {/* SAPR VA */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <Acronym title="SAPR Victim Advocate">SAPR VA</Acronym> Requirements
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Minimum <strong>two SAPR VAs</strong> per battalion, squadron, or equivalent level
              command. Collateral duty billet for E-5 and above. Commander appointment in writing.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Selection Screening (Commander Must Complete)
                </div>
                <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify complete background investigation</li>
                  <li>Check National Sex Offender Search (nsopw.gov)</li>
                  <li>Review background check from local <Acronym title="Provost Marshal's Office">PMO</Acronym></li>
                  <li>Complete Commander&apos;s Checklist (Leadership Toolkit)</li>
                  <li>Verify T3/Secret Clearance</li>
                </ol>
              </div>
              <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 dark:border-rose-900/50 dark:bg-rose-950/20">
                <div className="font-semibold text-rose-700 dark:text-rose-400">
                  Non-Waivable Criteria
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>No record of courts-martial</li>
                  <li>No record of retaliatory behavior</li>
                  <li>No adverse fitness reports, <Acronym title="Non-Judicial Punishment">NJPs</Acronym>, or adverse Page 11 entries (including 6105) in last 3 years</li>
                  <li>Not in excluded billets (XO, SgtMaj, Company CO, 1stSgt, legal, EO, SACO, Chaplain, etc.)</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Training Requirements
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Initial <strong>40-hour</strong> SAPR VA training</li>
                <li><Acronym title="DoD Sexual Assault Advocate Certification Program">D-SAACP</Acronym> Certification (DD Form 2950)</li>
                <li><strong>32 hours</strong> continuing education every 2 years</li>
              </ul>
            </div>
          </div>

          {/* SARC */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <Acronym title="Sexual Assault Response Coordinator">SARC</Acronym> Oversight
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Command SARC (O-6 and GO Level)
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Civilian or collateral duty (Maj/O-4 or CWO3+)</li>
                  <li>SAPR SME and POC for commander</li>
                  <li>Provides case status updates at monthly CMG</li>
                  <li>Maintains oversight of program, victim care, reporting</li>
                  <li>Maintains appointment letters and D-SAACP certs</li>
                </ul>
              </div>
              <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Installation SARC
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Civilian subject matter expert</li>
                  <li>Provides guidance to installation and tenant COs</li>
                  <li>Facilitates and co-chairs monthly CMG</li>
                  <li>Manages installation 24/7 Sexual Assault Support Line</li>
                  <li>Provides supervision to civilian SAPR VAs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Restricted Reports */}
      <CollapsibleSection
        title="Restricted Reports"
        icon={<Lock className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-l-emerald-500 bg-emerald-50 p-4 dark:bg-emerald-950/20">
              <div className="font-semibold text-emerald-700 dark:text-emerald-400">
                What Restricted Reports Allow
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Confidential disclosure to SARC, SAPR VA, or healthcare</li>
                <li>Medical treatment including emergency care</li>
                <li>Counseling services</li>
                <li>Assignment of SARC and SAPR VA</li>
                <li>Confidential consultation with <Acronym title="Victims' Legal Counsel">VLC</Acronym>, legal assistance, chaplain</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-50 p-4 dark:bg-rose-950/20">
              <div className="font-semibold text-rose-700 dark:text-rose-400">
                What Restricted Reports Do NOT Include
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Official investigation</li>
                <li>Command notification (you will NOT be notified)</li>
                <li>Military Protective Orders</li>
                <li>Expedited Transfers</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Commander Actions on Restricted Reports" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>You will <strong>NOT</strong> be notified of a Restricted Report</li>
              <li>You will <strong>NOT</strong> take action on a Restricted Report</li>
              <li>If a victim discloses to you, do NOT ask the SARC for details</li>
              <li>Victim can convert to Unrestricted at any time</li>
            </ul>
          </InfoCard>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Expanded Eligibility for Restricted Reports
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Individuals can still file Restricted Reports even if:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>They disclosed the incident to their commander or chain of command</li>
              <li>There is an ongoing <Acronym title="Military Criminal Investigative Organization">MCIO</Acronym> investigation initiated by a third party</li>
              <li>The MCIO investigation has been closed</li>
            </ul>
            <p className="mt-3 text-sm text-rose-600 dark:text-rose-400">
              <strong>Cannot file Restricted if:</strong> They personally reported to law enforcement
              or previously signed DD Form 2910 as Unrestricted.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* Unrestricted Reports */}
      <CollapsibleSection
        title="Unrestricted Reports"
        icon={<Unlock className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              What Unrestricted Reports Include
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Official <Acronym title="Military Criminal Investigative Organization">MCIO</Acronym> investigation</li>
              <li>Command notification</li>
              <li>Military Protective Orders (<Acronym title="Military Protective Order">MPO</Acronym>s)</li>
              <li>Expedited Transfer eligibility</li>
              <li>Full range of victim services</li>
            </ul>
          </div>

          {/* Timeline Requirements */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Commander Requirements Timeline
            </h3>

            <div className="mt-4 space-y-4">
              {/* Immediate */}
              <div className="rounded-lg border-l-4 border-l-rose-500 bg-white p-4 shadow-sm dark:bg-zinc-800">
                <div className="flex items-center gap-2">
                  <TimelineBadge time="IMMEDIATE" />
                  <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Immediate Actions
                  </span>
                </div>
                <ol className="mt-3 list-inside list-decimal space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Ensure victim safety</li>
                  <li>Chair <Acronym title="High-Risk Response Team">HRRT</Acronym> if required</li>
                  <li>Ensure victim receives timely medical/psychological treatment including <Acronym title="Sexual Assault Forensics Exam">SAFE</Acronym></li>
                  <li>Notify SARC immediately</li>
                  <li>Notify MCIO (<Acronym title="Naval Criminal Investigative Service">NCIS</Acronym>)</li>
                  <li>Consult with <Acronym title="Staff Judge Advocate">SJA</Acronym></li>
                  <li>Ensure victim has access to support (VLC, Counseling, Chaplain)</li>
                  <li>Execute MPO if victim desires or same unit/location</li>
                </ol>
              </div>

              {/* 6 Hours */}
              <div className="rounded-lg border-l-4 border-l-amber-500 bg-white p-4 shadow-sm dark:bg-zinc-800">
                <div className="flex items-center gap-2">
                  <TimelineBadge time="6 HOURS" />
                  <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Reporting
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Submit OPREP-3/Serious Incident Report (<Acronym title="Serious Incident Report">SIR</Acronym>)
                </p>
              </div>

              {/* 8 Days */}
              <div className="rounded-lg border-l-4 border-l-blue-500 bg-white p-4 shadow-sm dark:bg-zinc-800">
                <div className="flex items-center gap-2">
                  <TimelineBadge time="8 CALENDAR DAYS" />
                  <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    8-Day Incident Report
                  </span>
                  <NonDelegableBadge />
                </div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Prepare and submit SAPR 8-Day Incident Report to HQMC portal (Gear Locker)
                </p>
              </div>

              {/* 30 Days */}
              <div className="rounded-lg border-l-4 border-l-purple-500 bg-white p-4 shadow-sm dark:bg-zinc-800">
                <div className="flex items-center gap-2">
                  <TimelineBadge time="30 CALENDAR DAYS" />
                  <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    Ongoing Requirements
                  </span>
                  <NonDelegableBadge />
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Attend CMG every 30 days while case is open</li>
                  <li>Provide monthly case status updates to victim within 72 hours after each CMG</li>
                </ul>
              </div>
            </div>
          </div>

          <InfoCard title="DO NOT" variant="danger">
            Conduct internal command-directed investigation of the sexual assault. Let MCIO handle
            the investigation.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* 8-Day Report */}
      <CollapsibleSection
        title="8-Day Incident Report"
        icon={<FileText className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                When Required
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>All Unrestricted Reports of adult sexual assault</li>
                <li>Open case in <Acronym title="Defense Sexual Assault Incident Database">DSAID</Acronym> or MCIO-assigned <Acronym title="Criminal Case Number">CCN</Acronym></li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Who Submits
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>If victim is Service member: <strong>victim&apos;s</strong> immediate commander</li>
                <li>If victim is non-Service member: <strong>reported offender&apos;s</strong> immediate commander (abbreviated report)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              8-Day Report Decision Matrix
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/10">
                    <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      Scenario
                    </th>
                    <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                      Submit?
                    </th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 dark:text-zinc-300">
                  <tr className="border-b border-black/5 dark:border-white/5">
                    <td className="py-2">SARC notifies commander of signed DD 2910 (Unrestricted)</td>
                    <td className="py-2"><span className="text-emerald-600 dark:text-emerald-400">YES</span></td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/5">
                    <td className="py-2">MCIO informs commander of opened case (adult sexual assault)</td>
                    <td className="py-2"><span className="text-emerald-600 dark:text-emerald-400">YES</span></td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/5">
                    <td className="py-2">Third-party report received (responsible for victim AND CCN exists)</td>
                    <td className="py-2"><span className="text-emerald-600 dark:text-emerald-400">YES</span></td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/5">
                    <td className="py-2">Marine on leave or PCS when assault occurred (received initial report)</td>
                    <td className="py-2"><span className="text-emerald-600 dark:text-emerald-400">YES</span></td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/5">
                    <td className="py-2">Marine accused of sexual assault against spouse</td>
                    <td className="py-2"><span className="text-rose-600 dark:text-rose-400">NO - refer to <Acronym title="Family Advocacy Program">FAP</Acronym></span></td>
                  </tr>
                  <tr>
                    <td className="py-2">Minor victim</td>
                    <td className="py-2"><span className="text-rose-600 dark:text-rose-400">NO - SARCs do not input minors in DSAID</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <InfoCard title="Tip" variant="tip">
            Report can be saved and updated within 8-day window. When in doubt, submit. Contact
            HQMC SAPR at SMB.manpower.SAPR@usmc.mil for support.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* CMG */}
      <CollapsibleSection
        title="Case Management Group (CMG)"
        icon={<Users className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Monthly meeting to review all Unrestricted Reports (signed DD Form 2910s), cases MCIO
            is investigating, and retaliation reports from uniformed sexual assault complainants.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                CMG Focus Areas
              </div>
              <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>Victim safety:</strong> Ensure safety assessments conducted, re-administered monthly</li>
                <li><strong>Victim services:</strong> Ensure access to restorative services, address barriers</li>
                <li><strong>Expedited transfer tracking:</strong> Monitor days from approval to departure</li>
                <li><strong>Retaliation monitoring:</strong> Ensure allegations follow set process</li>
              </ol>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Commander Requirements at CMG
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Attend monthly while case is open <NonDelegableBadge /></li>
                <li>May invite Senior Enlisted Advisor to attend WITH (not in lieu of) you</li>
                <li>Track expedited transfer timeframes</li>
                <li>Stand up HRRT if high-risk situation identified</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Post-CMG Requirements" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Update victim on case status within <strong>72 hours</strong> of each CMG <NonDelegableBadge /></li>
              <li>Victim can choose updates from CO, SARC/VLC, or may decline</li>
              <li>If victim chooses CO updates, discuss only case status, safety, and referrals—no incident details</li>
            </ul>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* HRRT */}
      <CollapsibleSection
        title="High Risk Response Team (HRRT)"
        icon={<AlertTriangle className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              When Convened
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>SAPR VA/SARC completes Safety Assessment identifying high-risk situation</li>
              <li>SARC notifies commander who immediately convenes and <strong>chairs</strong> HRRT</li>
              <li>NOT required if victim is under care of behavioral health/medical provider or command already engaged</li>
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                HRRT Membership (Minimum)
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Reported offender&apos;s immediate commander</li>
                <li>SARC and SAPR VA</li>
                <li>MCIO</li>
                <li>SJA and <Acronym title="Victim and Witness Assistance Program">VWAP</Acronym>/VLC assigned to case</li>
                <li>Victim&apos;s healthcare or mental health provider</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                HRRT Assessment Includes
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Victim&apos;s safety concerns</li>
                <li>Alleged offender&apos;s access to victim or stalking behavior</li>
                <li>Threats, attacks, or intimidation</li>
                <li>Threats of harm, suicide, or homicide</li>
                <li>Offender&apos;s access to weapons</li>
                <li>CPO or MPO violations</li>
                <li>History of substance abuse, erratic behavior</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Reporting Requirements" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li>Initial report to installation commander and SARC within <strong>24 hours</strong> of activation</li>
              <li>Updates at least <strong>weekly</strong> while high-risk</li>
              <li>Final report to CMG chair when victim no longer high-risk</li>
            </ul>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Expedited Transfer */}
      <CollapsibleSection
        title="Expedited Transfer (ET)"
        icon={<Shield className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Address situations where victim feels safe but uncomfortable</li>
                <li>Assist victim&apos;s recovery by moving to new location</li>
                <li>NOT for safety concerns (those require safety move, not ET)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Eligibility
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Unrestricted Reports only</li>
                <li>Service members</li>
                <li>Military adult dependents</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Process
            </div>
            <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Marine requests ET via SARC (no one can request on behalf of Marine)</li>
              <li>SARC submits request to CO as soon as possible</li>
              <li>CO has <strong>5 calendar days</strong> to approve/disapprove</li>
            </ol>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-l-emerald-500 bg-emerald-50 p-4 dark:bg-emerald-950/20">
              <div className="font-semibold text-emerald-700 dark:text-emerald-400">
                When CO Approves ET
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>DO NOT contact Manpower Management</li>
                <li>Assign personnel to assist with out-processing</li>
                <li>Ensure Marine receives detaching evaluation</li>
                <li>Advise of intake meeting with gaining commander and new SARC</li>
                <li>Sign ET template and return to SARC</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-50 p-4 dark:bg-rose-950/20">
              <div className="font-semibold text-rose-700 dark:text-rose-400">
                When CO Disapproves ET
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Use template on Leadership Toolkit</li>
                <li>Marine can request written review by first GO</li>
                <li>GO must approve/disapprove within 5 calendar days</li>
                <li>SARC forwards package to HQMC SAPR</li>
              </ul>
            </div>
          </div>

          <InfoCard title="Key Fact" variant="success">
            Presumption established in favor of transfer following credible report. <strong>FY20:
            91% of ET requests approved</strong>. ET does not exempt Marine from fitness or
            readiness requirements.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Managing the Alleged Offender */}
      <CollapsibleSection
        title="Managing the Alleged Offender"
        icon={<AlertCircle className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Immediate Actions
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Notify appropriate MCIO immediately</li>
                <li>Ensure alleged offender&apos;s safety</li>
                <li>Monitor for suicidal ideation or unhealthy coping</li>
                <li>Consult medical/mental health providers as needed</li>
                <li>Monitor for erratic or violent behavior</li>
                <li>Participate in any convened HRRT</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Protective Measures
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Determine need for MPO (DD Form 2873)</li>
                <li>Monitor for coercion, ostracism, discrimination, or reprisals</li>
                <li>Strictly limit information to need-to-know</li>
                <li>Ensure offender knows about defense legal services</li>
              </ul>
            </div>
          </div>

          <InfoCard title="DO NOT" variant="danger">
            <ul className="list-inside list-disc space-y-1">
              <li>Conduct internal command-directed investigation</li>
              <li>Delay contact with MCIO</li>
              <li>Attempt to assess credibility of report</li>
              <li>Question alleged offender about the sexual assault allegation</li>
            </ul>
          </InfoCard>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Support Services
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Refer alleged offender to available counseling, groups, or services</li>
              <li>Verify via SARC that victim and offender are not in same counseling groups</li>
              <li>Upon disposition, submit Sexual Assault Disposition Report (<Acronym title="Sexual Assault Disposition Report">SADR</Acronym>) within 2 business days</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* SAPR Policy and Prevention */}
      <CollapsibleSection
        title="SAPR Policy and Prevention"
        icon={<FileText className="h-5 w-5" />}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Required Policy Statement
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Publish within <strong>60 days</strong> of assuming command</li>
                <li>Post in common and high traffic areas within <strong>90 days</strong></li>
                <li>Must support SAPR program objectives</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                SAPR SOP
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Publish Order/SOP for SAPR functions within your AOR</li>
                <li>Include procedures for suspensions and revocations of SAPR personnel</li>
                <li>Outline contingency plan for SAPR coverage</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Prevention Activities
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Include SAPR VAs on check-in/check-out sheet and new-join brief</li>
              <li>Ensure all required SAPR Annual Training completed</li>
              <li>In deployed site planning, consider prevention and risk reduction (camp layout, lighting, billeting, noise)</li>
            </ul>
          </div>

          <InfoCard title="SARC Brief" variant="info">
            Contact installation SARC within <strong>30 days</strong> of assuming command. If not
            on Marine Corps installation, contact supporting sister Service SARC.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Important Things to Know
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <InfoCard title="Reporting Terminology" variant="tip">
            <ul className="list-inside list-disc space-y-1">
              <li>Use &quot;Marine&quot; or &quot;person who reported&quot; rather than &quot;victim&quot; when possible</li>
              <li>Not everyone who is sexually assaulted is a woman—include men in scenarios</li>
              <li>Do not exclusively use &quot;she/her&quot; pronouns when discussing SAPR</li>
            </ul>
          </InfoCard>

          <InfoCard title="SAPR vs FAP" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Sexual assault against spouse = Family Advocacy Program (FAP), not SAPR</li>
              <li>SARC will inform HQMC SAPR this is a FAP case</li>
              <li>Still submit OPREP-3 SIR</li>
            </ul>
          </InfoCard>

          <InfoCard title="Common Misconceptions to Address" variant="info">
            <ul className="list-inside list-disc space-y-1">
              <li>&quot;They just want an expedited transfer&quot; — 91% approval rate shows ET is not abused</li>
              <li>&quot;They should have fought back&quot; — Trauma response is automatic, beyond conscious control</li>
              <li>&quot;What about the accused&apos;s career?&quot; — NCIS investigates; SA-IDA determines validity</li>
            </ul>
          </InfoCard>

          <InfoCard title="Retaliation" variant="danger">
            <ul className="list-inside list-disc space-y-1">
              <li>Monitor for and prevent retaliation against victim, witnesses, and SAPR personnel</li>
              <li>Retaliation allegations follow set process during CMG and through CIG coordination</li>
              <li>Tenant commanders must adhere to CMG/Retaliation policy</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Common Problems and Solutions */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Common Problems and Solutions
        </h2>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Rumors and gossip about reported assault spreading through command
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Check in with victim. Address through prevention messaging
              about respect and cohesion. Acknowledge generational differences with social media
              impact. Take visible action against anyone harassing victim.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Victim struggling with work performance after reporting
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> This is common. Ensure access to counseling. Consider ET
              if victim requests. Continue support regardless of performance issues. Do not use
              performance issues to discredit report.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Uncertainty about whether to submit 8-Day Report
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> When in doubt, submit. Contact SARC or HQMC SAPR for
              guidance. Better to submit unnecessary report than miss required one.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: SAPR VA candidate does not meet all criteria
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Non-waivable criteria cannot be waived. Best practices
              criteria are recommendations. Consult MARFOR SARC if questions about specific
              candidate.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: CMG scheduling conflicts
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> CMG attendance is non-delegable. Reschedule other
              commitments. If truly impossible, coordinate with installation SARC on alternative
              arrangements.
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <div className="font-semibold text-rose-600 dark:text-rose-400">
              Problem: Accused and accuser in same small unit
            </div>
            <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Consider MPO, duty assignment changes, or temporary
              reassignment. Consult SJA. Protect both parties from retaliation. ET is an option for
              victim.
            </div>
          </div>
        </div>
      </div>

      {/* Key Links */}
      <div className="rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Key Links
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://hqmcportal.hqi.usmc.mil/sites/family/mfb/SitePages/Home.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              SAPR Gear Locker (8-Day Report, Leadership Toolkit)
            </span>
          </a>
          <a
            href="https://www.nsopw.gov/en/Search/Verification"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">National Sex Offender Search</span>
          </a>
          <a
            href="https://www.safehelpline.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <Phone className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Safe Helpline (24/7): 877-995-5247</span>
          </a>
          <a
            href="https://www.marines.mil/News/Publications/MCPEL/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-black/10 p-3 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800"
          >
            <ExternalLink className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">MCO 1752.5C</span>
          </a>
          <div className="flex items-center gap-2 rounded-lg border border-black/10 p-3 dark:border-white/10">
            <FileText className="h-4 w-4 text-[var(--sa-gold)]" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              HQMC SAPR: SMB.manpower.SAPR@usmc.mil
            </span>
          </div>
        </div>
      </div>

      {/* Commander's Role Note */}
      <InfoCard title="SAPR Is a Commander's Program" variant="success">
        Your visible commitment to prevention, swift response to reports, and protection of victims
        from retaliation defines your command&apos;s SAPR climate. Non-delegable requirements exist
        because your personal involvement matters.
      </InfoCard>
    </div>
  );
}
