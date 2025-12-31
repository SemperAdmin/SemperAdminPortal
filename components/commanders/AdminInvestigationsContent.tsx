"use client";

import React, { useState } from "react";
import { Breadcrumb } from "../ui/Breadcrumb";
import {
  FileSearch,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  BookOpen,
  Clock,
  Users,
  FileText,
  Shield,
  Scale,
  Gavel,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Phone,
  HelpCircle,
  ClipboardList,
  UserCheck,
  Heart,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────── */
/*  Local Helper Components                                    */
/* ─────────────────────────────────────────────────────────── */

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  variant?: "info" | "warning" | "danger" | "success" | "tip";
}

function InfoCard({ icon: Icon, title, children, variant = "info" }: InfoCardProps) {
  const styles = {
    info: "border-l-blue-500 bg-blue-50 dark:bg-blue-950/30",
    warning: "border-l-amber-500 bg-amber-50 dark:bg-amber-950/30",
    danger: "border-l-red-500 bg-red-50 dark:bg-red-950/30",
    success: "border-l-green-500 bg-green-50 dark:bg-green-950/30",
    tip: "border-l-purple-500 bg-purple-50 dark:bg-purple-950/30",
  };

  return (
    <div className={`rounded-lg border-l-4 p-4 ${styles[variant]}`}>
      <div className="mb-2 flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
        <Icon className="h-5 w-5" />
        {title}
      </div>
      <div className="text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
    </div>
  );
}

interface CollapsibleSectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ icon: Icon, title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-black/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--sa-navy)]/10 text-[var(--sa-navy)] dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)]">
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-zinc-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-zinc-400" />
        )}
      </button>
      {isOpen && <div className="border-t border-black/5 p-4 dark:border-white/10">{children}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Main Component                                             */
/* ─────────────────────────────────────────────────────────── */

export function AdminInvestigationsContent() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Administrative Investigations", href: "/roles/commanders/commanders-admin-investigations" },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-8 text-white">
        <div className="flex items-start gap-4">
          <FileSearch className="h-12 w-12 flex-shrink-0 text-[var(--sa-gold)]" />
          <div>
            <h1 className="mb-2 text-3xl font-bold">Administrative Investigations</h1>
            <p className="text-lg text-[var(--sa-cream)]/90">
              Preliminary inquiries, command investigations, litigation-report investigations, courts and boards of inquiry, line of duty determinations, and death case procedures
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Overview</h2>
        <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
          <p>
            Administrative investigations are a critical commander responsibility. JAGMAN Chapter II sets forth principles governing the convening, conduct, review, and storage of administrative investigations conducted in or by the Department of the Navy. The commander who directs an investigation (other than a preliminary inquiry) is referred to as the <strong>Convening Authority (CA)</strong>.
          </p>
          <p>
            Commanders are responsible for initiating investigations into incidents occurring within, or involving personnel of, the command. <strong>Seek guidance from your cognizant judge advocate or Region Legal Service Office (RLSO) prior to convening an investigation.</strong>
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <InfoCard icon={BookOpen} title="Key Reference" variant="info">
            <a
              href="https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/5800.7G_CH-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--sa-gold)] hover:underline"
            >
              JAGINST 5800.7G CH-2 (Manual of the Judge Advocate General, Chapter II)
            </a>
          </InfoCard>
          <InfoCard icon={AlertTriangle} title="Important" variant="warning">
            <p>If the only basis for investigation is disciplinary action, conduct a preliminary inquiry under R.C.M. 303 or Article 32 investigation instead of a JAGMAN investigation.</p>
          </InfoCard>
        </div>
      </div>

      {/* Types of Investigations */}
      <CollapsibleSection icon={ClipboardList} title="Types of Investigations" defaultOpen>
        <div className="space-y-6">
          <p className="text-zinc-700 dark:text-zinc-300">
            JAGMAN Chapter II governs three types of administrative investigations:
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-blue-500/30 bg-blue-50 p-4 dark:bg-blue-950/20">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">1</span>
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command Investigations</h4>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Most common type. Used for internal command matters, minor incidents, and situations not involving potential claims or litigation.
              </p>
            </div>

            <div className="rounded-lg border border-amber-500/30 bg-amber-50 p-4 dark:bg-amber-950/20">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">2</span>
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Litigation-Report</h4>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Used when potential claims or litigation against DON or United States exist. Conducted under direction and supervision of a judge advocate.
              </p>
            </div>

            <div className="rounded-lg border border-red-500/30 bg-red-50 p-4 dark:bg-red-950/20">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">3</span>
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Courts/Boards of Inquiry</h4>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Used for major incidents, when subpoena power is required, when a hearing is needed, or when an individual should be designated a party.
              </p>
            </div>
          </div>

          <InfoCard icon={AlertCircle} title="JAGMAN Investigations Are Separate From" variant="info">
            <ul className="list-disc list-inside space-y-1">
              <li>UCMJ investigations (R.C.M. 303 preliminary inquiry, Article 32)</li>
              <li>Inspector General investigations (SECNAVINST 5430.57)</li>
              <li>Aviation mishap investigations (OPNAVINST 3750.6)</li>
              <li>Security violation reports (SECNAV M5510.36)</li>
              <li>Safety and mishap investigation reports (OPNAVINST 5102.1, MCO P5102.1)</li>
              <li>NCIS investigations (SECNAVINST 5430.107)</li>
            </ul>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Preliminary Inquiry */}
      <CollapsibleSection icon={Clock} title="Preliminary Inquiry" defaultOpen>
        <div className="space-y-6">
          <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
            <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Purpose</h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              A preliminary inquiry serves as an analytical tool to help a commander determine whether an investigation is warranted and, if so, how it should be conducted. It is <strong>not</strong> intended to develop extensive findings of fact.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Responsibility</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Commander is responsible for initiating preliminary inquiries into incidents occurring within, or involving personnel of, the command.
              </p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                <strong>For Major Incidents:</strong> The GCMCA over the command involved (if a flag or general officer), or the first flag or general officer in the chain of command, will immediately take cognizance.
              </p>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Method</h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Commander may conduct personally or through designees. Normally directed in writing by appointing order and outcome documented in writing. Evidence gathered shall be preserved.
              </p>
            </div>
          </div>

          <InfoCard icon={Clock} title="Time Limitation" variant="warning">
            <p>
              <strong>Generally, complete within three calendar days</strong> of commander learning of the incident. Extensions may be granted as necessary. Major incidents will usually take longer.
            </p>
          </InfoCard>

          <div className="rounded-lg border border-green-500/30 bg-green-50 p-4 dark:bg-green-950/20">
            <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command Options After Preliminary Inquiry</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Take no further action</li>
              <li>Make appropriate medical or dental record Line of Duty (LOD) determination</li>
              <li>Conduct a command investigation</li>
              <li>Convene a litigation-report investigation (under judge advocate supervision)</li>
              <li>For major incidents, convene a court or board of inquiry</li>
            </ol>
          </div>
        </div>
      </CollapsibleSection>

      {/* Coordination Requirements */}
      <CollapsibleSection icon={Users} title="Coordination Requirements">
        <div className="space-y-6">
          <p className="text-zinc-700 dark:text-zinc-300">
            Before conducting a preliminary inquiry or convening an investigation, the commander shall coordinate with:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-blue-500/30 bg-blue-50 p-4 dark:bg-blue-950/20">
              <h4 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Law Enforcement Investigation Pending</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Determine if law enforcement investigation will adequately document the matter</li>
                <li>Coordinate through NCIS</li>
                <li><strong>Do not interfere with law enforcement investigation</strong></li>
              </ul>
            </div>

            <div className="rounded-lg border border-amber-500/30 bg-amber-50 p-4 dark:bg-amber-950/20">
              <h4 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Safety Investigation Pending</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Ensure preliminary inquiry or investigation does not interfere with safety investigation</li>
                <li>If misconduct discovered, immediately notify senior member of safety investigation</li>
              </ul>
            </div>
          </div>

          <InfoCard icon={AlertTriangle} title="Conflicts" variant="warning">
            <p>Refer to Region Commander or GCMCA via chain of command any conflicts that cannot be resolved locally.</p>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Command Investigations (Type One) */}
      <CollapsibleSection icon={FileText} title="Command Investigations (Type One)">
        <div className="space-y-6">
          <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
            <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Purpose</h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              To search for, discover, collect, and preserve evidence to document a matter of official interest to the command. This is the most common type of investigation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard icon={AlertCircle} title="Limitations" variant="info">
              <ul className="list-disc list-inside space-y-1">
                <li>No subpoena power</li>
                <li>Cannot designate parties</li>
                <li>Cannot compel civilian witnesses to provide statements</li>
              </ul>
            </InfoCard>

            <InfoCard icon={CheckCircle} title="Process" variant="success">
              <ul className="list-disc list-inside space-y-1">
                <li>Investigating officer interviews witnesses, collects evidence</li>
                <li>Works under general guidance of CA</li>
                <li>May consult judge advocate for assistance</li>
                <li>GCMCA provides final review</li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </CollapsibleSection>

      {/* Convening Orders & Report Format */}
      <CollapsibleSection icon={Gavel} title="Convening Orders & Report Format">
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Convening Order Elements</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Authority to convene</li>
                <li>Designation of investigating officer(s) or members</li>
                <li>Subject matter to be investigated</li>
                <li>Any special instructions</li>
                <li>Reporting requirements</li>
              </ul>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigating Officer Qualifications</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Best qualified by age, education, training, experience, length of service, and temperament</li>
                <li>Usually commissioned officer (warrant officer, senior enlisted, or civilian may be used)</li>
                <li>Should be senior in rank to any individual whose conduct is subject to inquiry when practical</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-[var(--sa-gold)]/30 bg-[var(--sa-cream)]/30 p-4 dark:bg-[var(--sa-navy)]/30">
            <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Report Elements</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>Preliminary Statement:</strong> Nature of incident, authority, scope</li>
                <li><strong>Findings of Fact:</strong> Only facts supported by preponderance of evidence. Numbered. Cite evidence.</li>
                <li><strong>Opinions:</strong> Conclusions drawn from findings. Must be supported by findings.</li>
              </ol>
              <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-700 dark:text-zinc-300" start={4}>
                <li><strong>Recommendations:</strong> Actions recommended based on findings and opinions.</li>
                <li><strong>Enclosures:</strong> Convening order, witness statements, documentary evidence, photographs.</li>
                <li><strong>Signatures:</strong> Investigating officer signs. Members of court/board sign.</li>
              </ol>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Standards of Proof and Evidence */}
      <CollapsibleSection icon={Scale} title="Standards of Proof and Evidence">
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard icon={Scale} title="Standard of Proof" variant="info">
              <p>
                <strong>Preponderance of Evidence:</strong> Findings of fact must be supported by preponderance of the evidence (more likely than not).
              </p>
              <p className="mt-2">
                Administrative investigations need not follow formal rules of evidence applicable to courts-martial. Use most effective methods for collecting, analyzing, and recording relevant information.
              </p>
            </InfoCard>

            <InfoCard icon={Shield} title="Evidence Safekeeping" variant="warning">
              <ul className="list-disc list-inside space-y-1">
                <li>Ensure all evidence properly preserved and safeguarded</li>
                <li>Failure to properly safeguard may result in inadmissibility</li>
                <li>Original items must be retained or adequate storage arranged</li>
                <li>Chain of custody documents must be preserved</li>
              </ul>
            </InfoCard>
          </div>

          <div className="rounded-lg border border-red-500/30 bg-red-50 p-4 dark:bg-red-950/20">
            <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Witness Warnings</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h5 className="mb-2 font-medium text-green-600">Witnesses NOT Suspected of Misconduct</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Provide statements in informal interviews</li>
                  <li>Pursue &quot;who, what, where, when, how, why&quot;</li>
                  <li>Military witnesses may be required to swear or affirm</li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2 font-medium text-red-600">Witnesses SUSPECTED of Misconduct</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Collect relevant information from all other sources first</li>
                  <li>Coordinate with judge advocate and law enforcement</li>
                  <li><strong>Military personnel must be advised of Article 31, UCMJ warnings</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <InfoCard icon={AlertTriangle} title="Safety Investigation Statements" variant="danger">
            <p>
              Safety investigation statements <strong>may NOT</strong> be used in administrative investigation reports. You <strong>may NOT</strong> question witnesses regarding information provided to safety investigation under promise of confidentiality. However, you may interview same witnesses and obtain new statements.
            </p>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Line of Duty Determinations */}
      <CollapsibleSection icon={UserCheck} title="Line of Duty / Misconduct Determinations">
        <div className="space-y-6">
          <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
            <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Why LOD/Misconduct Determinations Are Required</h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              LOD/Misconduct determinations affect disability retirement and severance pay, survivor benefits, and other entitlements.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-green-500/30 bg-green-50 p-4 dark:bg-green-950/20">
              <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Possible Findings</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>In line of duty, not due to own misconduct</li>
                <li>In line of duty, due to own misconduct</li>
                <li>Not in line of duty, not due to own misconduct</li>
                <li>Not in line of duty, due to own misconduct</li>
              </ul>
            </div>

            <div className="rounded-lg border border-blue-500/30 bg-blue-50 p-4 dark:bg-blue-950/20">
              <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Presumptions</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>In Line of Duty:</strong> Presumed if injury/disease occurs while on active duty</li>
                <li><strong>Against Misconduct:</strong> Member presumed not to have committed misconduct</li>
                <li><strong>Mental Responsibility:</strong> Member presumed mentally responsible</li>
              </ul>
            </div>
          </div>

          <InfoCard icon={AlertTriangle} title="What Constitutes Misconduct" variant="warning">
            <p className="mb-2">Conduct that deviates from the standard expected of a reasonable person in like circumstances:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Willful negligence</li>
              <li>Intentional self-inflicted injury</li>
              <li>Violation of law</li>
              <li>Intoxication or drug abuse that is the proximate cause of injury/disease/death</li>
            </ul>
          </InfoCard>

          <InfoCard icon={AlertCircle} title="Warning Required" variant="danger">
            <p>
              Before obtaining a statement from a service member about the origin of disease or injury for LOD purposes, <strong>advise the member that the statement may be used in determining LOD and may affect entitlements.</strong>
            </p>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Death Case Procedures */}
      <CollapsibleSection icon={Heart} title="Special Considerations in Death Cases">
        <div className="space-y-6">
          <InfoCard icon={AlertTriangle} title="Special Considerations" variant="danger">
            <p>Death cases require careful attention to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Notification procedures</li>
              <li>Family concerns</li>
              <li>Benefit entitlements</li>
              <li>Potential criminal investigation</li>
            </ul>
          </InfoCard>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Required When:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Death from other than natural causes</li>
                <li>Death under suspicious or unusual circumstances</li>
                <li>Death involving potential claims</li>
                <li>Death during training or operations</li>
                <li>Death involving misconduct</li>
              </ul>
            </div>

            <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Coordination Requirements</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>Casualty Affairs:</strong> Coordinate for proper notification</li>
                <li><strong>NCIS:</strong> Must be notified of suspicious/unusual deaths</li>
                <li><strong>Family:</strong> Proper notification before any release</li>
              </ul>
            </div>
          </div>

          <InfoCard icon={Clock} title="Time Limitations" variant="warning">
            <p>
              Death investigations should be completed as expeditiously as possible. Time limits may apply for benefit determinations. LOD/misconduct determination required for all deaths of active duty members.
            </p>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <CollapsibleSection icon={Lightbulb} title="Important Things to Know">
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard icon={Gavel} title="Seek Judge Advocate Guidance" variant="info">
            <ul className="list-disc list-inside space-y-1">
              <li>Before convening any investigation</li>
              <li>During investigation when questions arise</li>
              <li>Before finalizing report</li>
              <li>Contact RLSO Command Services Department</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Shield} title="Coordinate with NCIS" variant="info">
            <ul className="list-disc list-inside space-y-1">
              <li>Before starting if law enforcement investigation pending</li>
              <li>For deaths under suspicious or unusual circumstances</li>
              <li>When criminal conduct suspected</li>
            </ul>
          </InfoCard>

          <InfoCard icon={FileText} title="Preserve Evidence" variant="warning">
            <ul className="list-disc list-inside space-y-1">
              <li>From the moment of incident</li>
              <li>Maintain chain of custody</li>
              <li>Store properly</li>
              <li>Document everything</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Clock} title="Time Matters" variant="warning">
            <ul className="list-disc list-inside space-y-1">
              <li>Preliminary inquiry: 3 days</li>
              <li>Complete investigations expeditiously</li>
              <li>Death cases have benefit determination deadlines</li>
            </ul>
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Common Problems and Solutions */}
      <CollapsibleSection icon={HelpCircle} title="Common Problems and Solutions">
        <div className="space-y-4">
          {[
            {
              problem: "Unclear whether JAGMAN investigation or UCMJ investigation required",
              solution: "If only basis is disciplinary action, use UCMJ process. If administrative documentation needed, use JAGMAN. Consult judge advocate.",
            },
            {
              problem: "Multiple investigative bodies involved",
              solution: "Coordinate with NCIS, safety investigation board, or other bodies before beginning. Do not interfere with other investigations. Refer conflicts to Region Commander or GCMCA.",
            },
            {
              problem: "Evidence not properly preserved",
              solution: "Secure scene immediately. Use trained personnel for evidence collection. Maintain chain of custody. Store properly. Document all handling.",
            },
            {
              problem: "Witness refuses to provide statement",
              solution: "Military witnesses may be ordered to provide statements (with appropriate warnings if suspected of misconduct). Civilian witnesses cannot be compelled except by subpoena in court of inquiry.",
            },
            {
              problem: "Uncertain about LOD/misconduct determination",
              solution: "Apply preponderance of evidence standard. Use presumptions (LOD presumed, misconduct not presumed). Document rationale. Seek judge advocate guidance.",
            },
            {
              problem: "Death case with family requesting information",
              solution: "Coordinate with Casualty Affairs. Ensure proper notification before any release. Follow release procedures in JAGMAN. Protect family privacy interests.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[var(--sa-navy)]/10 p-4 dark:border-white/10"
            >
              <p className="font-medium text-[var(--sa-red)]">Problem: {item.problem}</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="font-medium text-green-600">Solution:</span> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Key Links */}
      <div className="rounded-xl bg-[var(--sa-navy)] p-6 text-white">
        <div className="mb-4 flex items-center gap-2">
          <ExternalLink className="h-6 w-6" />
          <h2 className="text-xl font-semibold">Key Links</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-[var(--sa-cream)]">References</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/5800.7G_CH-2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-gold)] hover:underline"
                >
                  JAGINST 5800.7G CH-2 (JAGMAN Chapter II)
                </a>
              </li>
              <li className="text-[var(--sa-cream)]/70">Manual for Courts-Martial (MCM)</li>
              <li className="text-[var(--sa-cream)]/70">Uniform Code of Military Justice (UCMJ)</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-[var(--sa-cream)]">Contacts for Guidance</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-[var(--sa-cream)]/70">
                <Phone className="h-4 w-4" />
                Cognizant Judge Advocate
              </li>
              <li className="flex items-center gap-2 text-[var(--sa-cream)]/70">
                <Phone className="h-4 w-4" />
                RLSO Command Services Department
              </li>
              <li className="flex items-center gap-2 text-[var(--sa-cream)]/70">
                <Phone className="h-4 w-4" />
                OJAG Administrative Law Division (Code 13): DSN 224-7415
              </li>
              <li className="flex items-center gap-2 text-[var(--sa-cream)]/70">
                <Phone className="h-4 w-4" />
                HQMC Research and Civil Law Division (Code JAR): 703-614-2510
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="flex gap-3">
        <Link
          href="/roles/commanders"
          className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10"
        >
          Back to Commanders Home
        </Link>
      </div>
    </div>
  );
}
