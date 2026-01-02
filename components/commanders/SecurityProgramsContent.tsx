"use client";

import React, { useState } from "react";
import { Breadcrumb } from "../ui/Breadcrumb";
import { Acronym } from "../ui/Acronym";
import { InfoCard } from "../ui/InfoCard";
import {
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  Users,
  Eye,
  Key,
  Globe,
  Laptop,
  Radio,
  Target,
  AlertCircle,
  UserX,
  Building,
  BookOpen,
  ClipboardCheck,
  HelpCircle,
  Lightbulb,
  Siren,
  MapPin,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────── */
/*  Local Helper Components                                    */
/* ─────────────────────────────────────────────────────────── */
function CollapsibleSection({
  icon: Icon,
  title,
  children,
  defaultOpen = false,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-black/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--sa-navy)] text-white">
            <Icon className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {title}
          </h2>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-zinc-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        )}
      </button>
      {isOpen && <div className="border-t border-black/5 p-4 dark:border-white/10">{children}</div>}
    </div>
  );
}

function ClassificationCard({
  level,
  color,
  description,
}: {
  level: string;
  color: string;
  description: string;
}) {
  const colorClasses: Record<string, string> = {
    orange: "bg-orange-500",
    red: "bg-red-600",
    blue: "bg-blue-600",
  };
  return (
    <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-white p-3 dark:border-white/10 dark:bg-black/40">
      <div className="flex items-center gap-3">
        <span
          className={`rounded px-3 py-1 text-sm font-bold text-white ${colorClasses[color] || "bg-gray-500"}`}
        >
          {level}
        </span>
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}

function FPCONCard({
  level,
  color,
  description,
}: {
  level: string;
  color: string;
  description: string;
}) {
  const colorClasses: Record<string, string> = {
    green: "bg-green-600",
    blue: "bg-blue-600",
    yellow: "bg-yellow-500 text-black",
    orange: "bg-orange-500",
    red: "bg-red-600",
  };
  return (
    <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-white p-3 dark:border-white/10 dark:bg-black/40">
      <div className="flex items-center gap-2">
        <span
          className={`rounded px-2 py-1 text-xs font-bold text-white ${colorClasses[color] || "bg-gray-500"}`}
        >
          {level}
        </span>
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Main Component                                             */
/* ─────────────────────────────────────────────────────────── */

export function SecurityProgramsContent() {
  const breadcrumbItems = [
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Security Programs" },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-6 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-white/10 p-3">
            <Shield className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Security Programs</h1>
            <p className="mt-2 text-white/80">
              Information security, classified material accountability,{" "}
              <Acronym title="Operations Security">OPSEC</Acronym>, personnel security, physical
              security, insider threat, cybersecurity, and{" "}
              <Acronym title="Antiterrorism/Force Protection">AT/FP</Acronym> program
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Overview
        </h2>
        <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
          <p>
            Commanders are responsible for implementing and maintaining comprehensive security
            programs within their commands. Security programs protect national defense information,
            personnel, and facilities from threats foreign and domestic. Failure to maintain proper
            security creates vulnerabilities that adversaries exploit.
          </p>
          <p className="font-medium">
            Security is not a collateral duty. It is a fundamental command responsibility that
            directly impacts mission accomplishment and force protection.
          </p>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <InfoCard icon={BookOpen} title="Key References" variant="info">
            <ul className="space-y-1">
              <li>SECNAVINST 5510.36 (DON Information Security Program)</li>
              <li>MCO 5510.18A (Information and Personnel Security Program)</li>
              <li>MCO 3070.2A (OPSEC)</li>
              <li>MCO 5530.14A (Physical Security)</li>
              <li>DoDI 5240.26 (Insider Threat Program)</li>
              <li>MCO 3500.27B (Antiterrorism Program)</li>
            </ul>
          </InfoCard>
          <InfoCard icon={AlertTriangle} title="CCIR Events Requiring Notification" variant="warning">
            <ul className="space-y-1">
              <li>• Compromise of classified material/EKMS</li>
              <li>• Spillage of classified information</li>
              <li>• Unauthorized release of PII</li>
              <li>• Cyberattack impacting personnel</li>
              <li>• AT/FP changes</li>
              <li>• Active shooter incident</li>
              <li>• Imminent attack or threat</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* How It Works Sections */}
      <div className="space-y-4">
        {/* Information Security Section */}
        <CollapsibleSection icon={Lock} title="Information Security" defaultOpen>
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Information security protects classified national security information from
                unauthorized disclosure. Commanders must ensure proper classification, safeguarding,
                and handling of classified information within their commands.
              </p>
            </div>

            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Classification Levels
            </h3>
            <div className="grid gap-3 md:grid-cols-3">
              <ClassificationCard
                level="TOP SECRET"
                color="orange"
                description="Information that could cause exceptionally grave damage to national security"
              />
              <ClassificationCard
                level="SECRET"
                color="red"
                description="Information that could cause serious damage to national security"
              />
              <ClassificationCard
                level="CONFIDENTIAL"
                color="blue"
                description="Information that could cause damage to national security"
              />
            </div>

            <InfoCard icon={ClipboardCheck} title="Commander Responsibilities">
              <ul className="space-y-1">
                <li>
                  • Appoint Command Security Manager (<Acronym title="Command Security Manager">CSM</Acronym>) in writing
                </li>
                <li>• Ensure personnel receive initial and annual refresher security training</li>
                <li>• Conduct security inspections</li>
                <li>• Report security incidents</li>
                <li>• Maintain accountability of classified material</li>
                <li>• Ensure proper marking of classified documents</li>
                <li>• Control access based on clearance and need-to-know</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Users} title="Security Training" variant="info">
              <p>All personnel with access to classified information must receive:</p>
              <ul className="mt-2 space-y-1">
                <li>• Initial security awareness training before access</li>
                <li>• Annual refresher training</li>
                <li>• Specialized training for specific duties (security managers, couriers, etc.)</li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Classified Material Accountability Section */}
        <CollapsibleSection icon={FileText} title="Classified Material Accountability">
          <div className="space-y-4">
            <InfoCard icon={ClipboardCheck} title="Requirements">
              <p>Classified material must be:</p>
              <ul className="mt-2 space-y-1">
                <li>• Properly marked with classification level, downgrade/declassification instructions</li>
                <li>• Stored in approved security containers when not in use</li>
                <li>• Controlled during transmission and transport</li>
                <li>• Destroyed by approved methods when no longer required</li>
                <li>• Inventoried as required by regulation</li>
              </ul>
            </InfoCard>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={Key} title="TOP SECRET Accountability">
                <ul className="space-y-1">
                  <li>• Continuous chain of accountability from origin to destruction</li>
                  <li>• Formal accountability system with receipts</li>
                  <li>• <strong>Annual inventory required</strong></li>
                </ul>
              </InfoCard>
              <InfoCard icon={Radio} title="EKMS Accountability">
                <p><Acronym title="Electronic Key Management System">EKMS</Acronym> material requires strict accountability:</p>
                <ul className="mt-2 space-y-1">
                  <li>• EKMS Manager appointed in writing</li>
                  <li>• Monthly inventories and semi-annual audits</li>
                  <li>• Report compromise immediately</li>
                </ul>
              </InfoCard>
            </div>

            <InfoCard icon={AlertTriangle} title="CCIR Reporting" variant="warning">
              <p>
                <strong>Compromise of Classified Material/EKMS</strong> to include spillage of classified
                information and/or unauthorized release of Personally Identifiable Information is a
                Commander&apos;s Critical Information Requirement requiring <strong>immediate notification</strong>.
              </p>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* OPSEC Section */}
        <CollapsibleSection icon={Eye} title="Operations Security (OPSEC)">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                <Acronym title="Operations Security">OPSEC</Acronym> is a process of identifying
                critical information and analyzing friendly actions to identify what information is
                needed by adversaries, whether adversaries might be able to obtain it, and what
                measures should be taken to deny that information.
              </p>
            </div>

            <InfoCard icon={Target} title="OPSEC Process (Five Steps)" variant="info">
              <ol className="list-decimal space-y-1 pl-4">
                <li>Identification of Critical Information</li>
                <li>Analysis of Threats</li>
                <li>Analysis of Vulnerabilities</li>
                <li>Assessment of Risk</li>
                <li>Application of Appropriate Countermeasures</li>
              </ol>
            </InfoCard>

            <InfoCard icon={ClipboardCheck} title="Commander Responsibilities">
              <ul className="space-y-1">
                <li>• Appoint OPSEC Officer/Coordinator in writing</li>
                <li>• Integrate OPSEC into all operations and planning</li>
                <li>• Conduct OPSEC assessments</li>
                <li>• Ensure personnel receive OPSEC awareness training</li>
                <li>• Review public release of information for OPSEC concerns</li>
              </ul>
            </InfoCard>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={CheckCircle} title="OPSEC Releasable Information" variant="success">
                <ul className="space-y-1">
                  <li>• Confirmation of aircraft plainly visible to public</li>
                  <li>• Approximate size of friendly forces</li>
                  <li>• Results of completed missions</li>
                  <li>• Types and general amounts of ordnance expended</li>
                  <li>• Number of aerial combat missions flown in AO</li>
                </ul>
              </InfoCard>
              <InfoCard icon={AlertCircle} title="OPSEC Non-Releasable Information" variant="warning">
                <ul className="space-y-1">
                  <li>• Future plans or operations</li>
                  <li>• Detailed information about vulnerabilities</li>
                  <li>• Rules of engagement</li>
                  <li>• Security measures, force protection</li>
                  <li>• Intelligence collection activities</li>
                  <li>• Location of special operations forces</li>
                  <li>• Details of active law enforcement investigations</li>
                </ul>
              </InfoCard>
            </div>

            <InfoCard icon={Globe} title="Social Media and OPSEC" variant="warning">
              <p>
                Each DoD member should be aware of OPSEC issues whether participating in official
                public affairs event or informal family event. <strong>Information must be reviewed
                and approved at appropriate level before release.</strong>
              </p>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Personnel Security Section */}
        <CollapsibleSection icon={Users} title="Personnel Security">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Personnel security ensures only trustworthy individuals have access to classified
                information and sensitive positions.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={Key} title="Security Clearances">
                <ul className="space-y-1">
                  <li>• Background investigation determines eligibility</li>
                  <li>• Clearance levels: CONFIDENTIAL, SECRET, TOP SECRET</li>
                  <li>• Special access programs have additional requirements</li>
                  <li>• Continuous evaluation ongoing</li>
                </ul>
              </InfoCard>
              <InfoCard icon={ClipboardCheck} title="Access Determinations">
                <ul className="space-y-1">
                  <li>• Clearance eligibility does not equal access</li>
                  <li>• Need-to-know must be established</li>
                  <li>• Commander determines access based on mission requirements</li>
                </ul>
              </InfoCard>
            </div>

            <InfoCard icon={AlertTriangle} title="Reporting Requirements" variant="warning">
              <ul className="space-y-1">
                <li>• Report adverse information</li>
                <li>• Report foreign contacts and travel</li>
                <li>• Report changes in personal status</li>
                <li>• Self-reporting of security concerns</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Eye} title="Continuous Evaluation" variant="info">
              <ul className="space-y-1">
                <li>• Automated record checks between periodic reinvestigations</li>
                <li>• Ensures timely identification of potentially disqualifying information</li>
                <li>• Personnel must report relevant changes</li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Physical Security Section */}
        <CollapsibleSection icon={Building} title="Physical Security">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Physical security protects personnel, equipment, and facilities from unauthorized
                access, damage, or destruction.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={Key} title="Access Control">
                <ul className="space-y-1">
                  <li>• Control entry to restricted areas</li>
                  <li>• Identification and badge systems</li>
                  <li>• Visitor control procedures</li>
                  <li>• Lock and key control</li>
                </ul>
              </InfoCard>
              <InfoCard icon={Shield} title="Protective Barriers">
                <ul className="space-y-1">
                  <li>• Fencing</li>
                  <li>• Lighting</li>
                  <li>• Intrusion detection systems</li>
                  <li>• Security containers</li>
                </ul>
              </InfoCard>
            </div>

            <InfoCard icon={ClipboardCheck} title="Commander Responsibilities">
              <ul className="space-y-1">
                <li>• Conduct physical security surveys</li>
                <li>• Implement security measures appropriate to threat</li>
                <li>• Maintain key and lock accountability</li>
                <li>• Ensure proper storage of classified and controlled items</li>
                <li>• Report security incidents</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Target} title="Resource Protection" variant="info">
              <ul className="space-y-1">
                <li>• <Acronym title="Arms, Ammunition, and Explosives">AA&E</Acronym> (Arms, Ammunition, and Explosives)</li>
                <li>• High-value equipment</li>
                <li>• Controlled substances</li>
                <li>• Sensitive items</li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Insider Threat Section */}
        <CollapsibleSection icon={UserX} title="Insider Threat Program">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                The Insider Threat Program detects, deters, and mitigates actions by individuals who
                may represent a threat to national security. An insider threat is a person who uses
                authorized access to DoD facilities, systems, equipment, or information to harm the
                DoD or U.S. interests.
              </p>
            </div>

            <InfoCard icon={AlertTriangle} title="Insider Threat Indicators" variant="warning">
              <ul className="grid gap-2 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                  <span>Unexplained affluence</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                  <span>Disgruntlement with organization or country</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                  <span>Unreported foreign contacts or travel</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                  <span>Attempting to access information outside job responsibilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                  <span>Working unusual hours without authorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                  <span>Removing classified or sensitive materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                  <span>Downloading excessive amounts of data</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 text-[var(--sa-gold)]" />
                  <span>Expressing sympathy for adversary nations</span>
                </li>
              </ul>
            </InfoCard>

            <InfoCard icon={ClipboardCheck} title="Commander Responsibilities">
              <ul className="space-y-1">
                <li>• Integrate insider threat awareness into security training</li>
                <li>• Establish reporting procedures for suspicious activity</li>
                <li>• Ensure personnel understand indicators and reporting requirements</li>
                <li>• Coordinate with counterintelligence and security personnel</li>
                <li>• Foster command climate that encourages reporting without fear of reprisal</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Target} title="Reporting Channels" variant="info">
              <p>Personnel should report indicators through:</p>
              <ul className="mt-2 space-y-1">
                <li>• Chain of command</li>
                <li>• Security Manager</li>
                <li>• Counterintelligence</li>
                <li>• Inspector General (if appropriate)</li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Cybersecurity Section */}
        <CollapsibleSection icon={Laptop} title="Cybersecurity">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Cybersecurity protects information systems and networks from unauthorized access,
                use, disclosure, disruption, modification, or destruction.
              </p>
            </div>

            <InfoCard icon={AlertTriangle} title="CCIR Reporting" variant="warning">
              <p>
                <strong>Confirmed or suspected cyberattack</strong> that impacts unit personnel is a{" "}
                <Acronym title="Priority Intelligence Requirement">PIR</Acronym> requiring{" "}
                <strong>immediate notification</strong>.
              </p>
            </InfoCard>

            <InfoCard icon={ClipboardCheck} title="Commander Responsibilities">
              <ul className="space-y-1">
                <li>• Ensure compliance with cybersecurity policies</li>
                <li>• Appoint Information Systems Security Manager (<Acronym title="Information Systems Security Manager">ISSM</Acronym>)</li>
                <li>• Ensure personnel complete cybersecurity awareness training</li>
                <li>• Report cybersecurity incidents</li>
                <li>• Enforce removable media policies</li>
                <li>• Protect Personally Identifiable Information (<Acronym title="Personally Identifiable Information">PII</Acronym>)</li>
              </ul>
            </InfoCard>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={Users} title="User Responsibilities">
                <ul className="space-y-1">
                  <li>• Complete annual Cyber Awareness Challenge training</li>
                  <li>• Protect CAC and passwords</li>
                  <li>• Report suspicious emails and activity</li>
                  <li>• Follow removable media policies</li>
                  <li>• Lock workstations when unattended</li>
                </ul>
              </InfoCard>
              <InfoCard icon={AlertCircle} title="Incident Reporting">
                <p>Report immediately:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Suspected compromises</li>
                  <li>• Spillage of classified on unclassified systems</li>
                  <li>• Lost or stolen devices with government information</li>
                  <li>• Phishing attempts and suspicious activity</li>
                </ul>
              </InfoCard>
            </div>

            <InfoCard icon={Shield} title="PII Protection" variant="info">
              <ul className="space-y-1">
                <li>• Protect personal information of Marines, Sailors, and families</li>
                <li>• Report unauthorized disclosure</li>
                <li>• Follow proper storage and transmission procedures</li>
                <li>• Destroy PII properly when no longer needed</li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* AT/FP Section */}
        <CollapsibleSection icon={Siren} title="Antiterrorism & Force Protection (AT/FP)">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                <Acronym title="Antiterrorism/Force Protection">AT/FP</Acronym> programs protect
                personnel, family members, facilities, and resources from terrorist acts.
              </p>
            </div>

            <InfoCard icon={AlertTriangle} title="CCIR Reporting" variant="warning">
              <ul className="space-y-2">
                <li>
                  • <strong>AT/FP changes</strong> (not requiring evacuation or temporary site closure) are{" "}
                  <Acronym title="Commander's Information Requirement">CIR</Acronym>
                </li>
                <li>
                  • <strong>Imminent attack or direct threat</strong> against unit personnel is{" "}
                  <Acronym title="Priority Intelligence Requirement">PIR</Acronym> requiring{" "}
                  <strong>immediate notification</strong>
                </li>
                <li>
                  • <strong>Active shooter incident</strong> is{" "}
                  <Acronym title="Friendly Force Information Requirement">FFIR</Acronym> requiring{" "}
                  <strong>immediate notification</strong>
                </li>
              </ul>
            </InfoCard>

            <InfoCard icon={ClipboardCheck} title="Commander Responsibilities">
              <ul className="space-y-1">
                <li>• Appoint Antiterrorism Officer (<Acronym title="Antiterrorism Officer">ATO</Acronym>)</li>
                <li>• Ensure AT/FP plan is current and exercised</li>
                <li>• Ensure personnel receive Level I AT awareness training</li>
                <li>• Implement Random Antiterrorism Measures (<Acronym title="Random Antiterrorism Measures">RAM</Acronym>)</li>
                <li>• Report threats and incidents</li>
                <li>• Coordinate with installation AT/FP program</li>
              </ul>
            </InfoCard>

            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Force Protection Conditions (FPCON)
            </h3>
            <div className="grid gap-3 md:grid-cols-5">
              <FPCONCard
                level="NORMAL"
                color="green"
                description="General threat of terrorist activity"
              />
              <FPCONCard
                level="ALPHA"
                color="blue"
                description="Increased general threat of terrorist activity"
              />
              <FPCONCard
                level="BRAVO"
                color="yellow"
                description="Increased or more predictable threat"
              />
              <FPCONCard
                level="CHARLIE"
                color="orange"
                description="Incident has occurred or intelligence indicates action against specific target"
              />
              <FPCONCard
                level="DELTA"
                color="red"
                description="Terrorist attack has occurred or intelligence indicates imminent attack"
              />
            </div>

            <InfoCard icon={MapPin} title="Random Antiterrorism Measures (RAM)" variant="info">
              <p>
                RAMs are security measures implemented randomly to present an unpredictable security
                posture:
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Varying routes and times of travel</li>
                <li>• Changing guard posts and patrol times</li>
                <li>• Altering access control procedures</li>
                <li>• Conducting unannounced security checks</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Siren} title="Active Shooter Response" variant="warning">
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-lg bg-green-500/20 p-3 text-center">
                  <p className="font-bold text-green-700 dark:text-green-400">RUN</p>
                  <p className="text-sm">Evacuate if safe to do so</p>
                </div>
                <div className="rounded-lg bg-yellow-500/20 p-3 text-center">
                  <p className="font-bold text-yellow-700 dark:text-yellow-400">HIDE</p>
                  <p className="text-sm">If evacuation not possible, find secure location</p>
                </div>
                <div className="rounded-lg bg-red-500/20 p-3 text-center">
                  <p className="font-bold text-red-700 dark:text-red-400">FIGHT</p>
                  <p className="text-sm">As last resort, take action against shooter</p>
                </div>
              </div>
            </InfoCard>
          </div>
        </CollapsibleSection>
      </div>

      {/* Important Things to Know */}
      <div className="rounded-xl border border-[var(--sa-gold)]/30 bg-[var(--sa-gold)]/10 p-6 dark:bg-[var(--sa-gold)]/20">
        <div className="mb-4 flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-[var(--sa-gold)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Important Things to Know
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard icon={Shield} title="Security is a Command Responsibility">
            <ul className="space-y-1">
              <li>• Appoint security managers and officers in writing</li>
              <li>• Ensure training is conducted</li>
              <li>• Conduct inspections and assessments</li>
              <li>• Report incidents promptly</li>
            </ul>
          </InfoCard>
          <InfoCard icon={Key} title="Need-to-Know is Essential">
            <ul className="space-y-1">
              <li>• Having a clearance does not equal access</li>
              <li>• Access must be based on mission requirement</li>
              <li>• Challenge unauthorized access attempts</li>
            </ul>
          </InfoCard>
          <InfoCard icon={AlertCircle} title="Reporting Protects the Force">
            <ul className="space-y-1">
              <li>• Report suspicious activity</li>
              <li>• Report security incidents</li>
              <li>• Report foreign contacts and travel</li>
              <li>• Self-reporting protects careers</li>
            </ul>
          </InfoCard>
          <InfoCard icon={Eye} title="OPSEC is Everyone's Responsibility">
            <ul className="space-y-1">
              <li>• Protect critical information</li>
              <li>• Review information before release</li>
              <li>• Be aware of social media risks</li>
              <li>• Apply OPSEC at home and work</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Special Situations */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <div className="mb-4 flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Special Situations
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard icon={AlertTriangle} title="Security Incident Response" variant="warning">
            <p>When a security incident occurs:</p>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm">
              <li>Contain the incident</li>
              <li>Protect evidence</li>
              <li>Report through chain of command</li>
              <li>Report to Security Manager</li>
              <li>Cooperate with investigation</li>
              <li>Implement corrective actions</li>
            </ol>
          </InfoCard>

          <InfoCard icon={Laptop} title="Classified Material Spillage">
            <p>When classified information is found on unclassified system:</p>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm">
              <li>Do not forward or copy</li>
              <li>Disconnect system from network if possible</li>
              <li>Report immediately to Security Manager and ISSM</li>
              <li>Preserve evidence</li>
              <li>Follow direction from security personnel</li>
            </ol>
          </InfoCard>

          <InfoCard icon={Globe} title="Foreign Travel">
            <p>Before foreign travel:</p>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm">
              <li>Notify command and security manager</li>
              <li>Complete required briefings</li>
              <li>Review country-specific threat information</li>
              <li>Establish communication plan</li>
              <li>Upon return, complete debriefing as required</li>
            </ol>
          </InfoCard>

          <InfoCard icon={MapPin} title="Deployed Operations">
            <p>Security considerations in deployed environment:</p>
            <ul className="mt-2 space-y-1">
              <li>• Increased threat awareness</li>
              <li>• Modified OPSEC procedures</li>
              <li>• Coordination with host nation security</li>
              <li>• Protection of sensitive information and equipment</li>
              <li>• Communication security</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Common Problems */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <div className="mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-[var(--sa-gold)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems & Solutions
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              problem: "Classified material found unsecured",
              solution:
                "Secure the material. Report to Security Manager. Conduct security incident inquiry. Implement corrective training and procedures.",
            },
            {
              problem: "Personnel fail to report foreign contacts",
              solution:
                "Reinforce reporting requirements in training. Create command climate that encourages reporting. Ensure personnel understand consequences of non-reporting.",
            },
            {
              problem: "OPSEC violations on social media",
              solution:
                "Conduct OPSEC awareness training emphasizing social media. Review command policies. Address specific violations through appropriate channels.",
            },
            {
              problem: "Security training not current",
              solution:
                "Maintain training records. Schedule training in advance. Ensure new personnel receive initial training before access. Track annual refresher requirements.",
            },
            {
              problem: "Suspicious activity not reported",
              solution:
                "Train personnel on indicators. Emphasize that reporting protects the force. Ensure multiple reporting channels available. Follow up on reports.",
            },
            {
              problem: "Key and lock control deficient",
              solution:
                "Conduct inventory. Update key control register. Issue new keys as needed. Implement sign-out procedures. Conduct periodic audits.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[var(--sa-navy)]/10 p-3 dark:border-white/10"
            >
              <p className="font-medium text-[var(--sa-red)]">Problem: {item.problem}</p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="font-medium text-green-600">Solution:</span> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Links */}
      <div className="rounded-xl bg-[var(--sa-navy)] p-6 text-white">
        <div className="mb-4 flex items-center gap-2">
          <ExternalLink className="h-6 w-6" />
          <h2 className="text-xl font-semibold">Key Links</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold text-[var(--sa-cream)]">References</h3>
            <ul className="space-y-1 text-sm">
              <li className="text-[var(--sa-cream)]/70">
                • SECNAVINST 5510.36 (DON Information Security Program)
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • MCO 5510.18A (Information and Personnel Security Program)
              </li>
              <li className="text-[var(--sa-cream)]/70">• MCO 3070.2A (OPSEC)</li>
              <li className="text-[var(--sa-cream)]/70">• MCO 5530.14A (Physical Security)</li>
              <li className="text-[var(--sa-cream)]/70">
                • DoDI 5240.26 (Insider Threat Program)
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • MCO 3500.27B (Antiterrorism Program)
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • CJCSI 6510.01 (Information Assurance)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[var(--sa-cream)]">Training & Reporting</h3>
            <ul className="space-y-1 text-sm">
              <li className="text-[var(--sa-cream)]/70">
                • Cyber Awareness Challenge (annual requirement)
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • Level I Antiterrorism Awareness (annual requirement)
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • Security Awareness Training (annual requirement)
              </li>
              <li className="text-[var(--sa-cream)]/70">• OPSEC Awareness Training</li>
              <li className="mt-3 text-[var(--sa-cream)]/70">
                • Report suspicious activity to Security Manager
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • Report cybersecurity incidents to ISSM
              </li>
              <li className="text-[var(--sa-cream)]/70">• Report threats to AT Officer</li>
              <li className="text-[var(--sa-cream)]/70">
                • Report counterintelligence concerns to NCIS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
