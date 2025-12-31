"use client";

import React, { useState } from "react";
import { Breadcrumb } from "../ui/Breadcrumb";
import { Acronym } from "../ui/Acronym";
import {
  Shield,
  ClipboardCheck,
  FileSearch,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  FileText,
  Users,
  Leaf,
  BookOpen,
  BarChart3,
  FolderOpen,
  Calendar,
  Target,
  Scale,
  Eye,
  HelpCircle,
  Lightbulb,
  Clock,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────── */
/*  Local Helper Components                                    */
/* ─────────────────────────────────────────────────────────── */

function InfoCard({
  icon: Icon,
  title,
  children,
  variant = "default",
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "success" | "info";
}) {
  const variants = {
    default: "border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20",
    warning: "border-[var(--sa-gold)]/40 bg-[var(--sa-gold)]/10 dark:bg-[var(--sa-gold)]/20",
    success: "border-green-500/40 bg-green-500/10 dark:bg-green-500/20",
    info: "border-blue-500/40 bg-blue-500/10 dark:bg-blue-500/20",
  };
  return (
    <div className={`rounded-lg border p-4 ${variants[variant]}`}>
      <div className="mb-2 flex items-center gap-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
        <Icon className="h-5 w-5" />
        {title}
      </div>
      <div className="text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
    </div>
  );
}

function FunctionalAreaCard({
  number,
  title,
  description,
  items,
}: {
  number: string;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-white p-4 dark:border-white/10 dark:bg-black/40">
      <div className="mb-2 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
          {number}
        </span>
        <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{title}</h4>
      </div>
      <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InspectionTypeCard({
  title,
  frequency,
  description,
  purpose,
  icon: Icon,
}: {
  title: string;
  frequency: string;
  description: string;
  purpose: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-white p-4 dark:border-white/10 dark:bg-black/40">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
          <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{title}</h4>
        </div>
        <span className="rounded-full bg-[var(--sa-gold)]/20 px-2 py-0.5 text-xs font-medium text-[var(--sa-navy)] dark:text-[var(--sa-gold)]">
          {frequency}
        </span>
      </div>
      <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      <div className="rounded bg-[var(--sa-cream)]/50 p-2 text-xs text-zinc-700 dark:bg-[var(--sa-navy)]/30 dark:text-zinc-300">
        <strong>Purpose:</strong> {purpose}
      </div>
    </div>
  );
}

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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{title}</h3>
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

/* ─────────────────────────────────────────────────────────── */
/*  Main Component                                             */
/* ─────────────────────────────────────────────────────────── */

export function InspectorGeneralContent() {
  const breadcrumbItems = [
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Inspector General and Inspections" },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <div className="rounded-xl border border-black/5 bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-6 text-white shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10">
            <Search className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Inspector General and Inspections</h1>
            <p className="mt-2 text-white/80">
              The <Acronym title="Inspector General of the Marine Corps">IGMC</Acronym> system helps commanders maintain readiness, assess compliance, and identify issues before they become critical problems. Understanding inspection processes and internal controls ensures your unit operates effectively and in accordance with regulations.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">Functional Areas</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">Internal Controls</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">Compliance</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">Readiness Assessments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <InfoCard icon={Shield} title="Commander Responsibility" variant="info">
          Commanders are responsible for maintaining readiness and compliance. The IG system provides tools to assess command health, identify deficiencies, and implement corrective actions before external inspections.
        </InfoCard>
        <InfoCard icon={ClipboardCheck} title="Self-Assessment" variant="success">
          The <Acronym title="Inspector General of the Marine Corps">IGMC</Acronym> Functional Area Checklists enable commands to conduct self-inspections. Regular internal assessments help maintain standards and prepare for formal inspections.
        </InfoCard>
        <InfoCard icon={AlertTriangle} title="Early Warning" variant="warning">
          Inspections serve as an early warning system. Identifying trends and systemic issues early allows commands to take corrective action before problems impact mission readiness.
        </InfoCard>
      </div>

      {/* How It Works Sections */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          How It Works
        </h2>

        {/* IGMC Functional Area Checklists */}
        <CollapsibleSection icon={FileSearch} title="IGMC Functional Area Checklists" defaultOpen>
          <div className="space-y-4">
            <p className="text-zinc-700 dark:text-zinc-300">
              The <Acronym title="Inspector General of the Marine Corps">IGMC</Acronym> provides standardized Functional Area Checklists (<Acronym title="Functional Area Checklists">FACs</Acronym>) that cover all aspects of command operations. These checklists are based on regulatory requirements and best practices.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <FunctionalAreaCard
                number="1"
                title="Command and Leadership"
                description="Assesses leadership practices, command climate, and organizational effectiveness."
                items={[
                  "Command philosophy and mission statements",
                  "Leadership engagement and visibility",
                  "Command climate survey completion",
                  "Equal opportunity program compliance",
                ]}
              />
              <FunctionalAreaCard
                number="2"
                title="Personnel Administration"
                description="Reviews personnel management, records, and administrative procedures."
                items={[
                  "Personnel record accuracy (OMPF/SRB)",
                  "Promotion and advancement procedures",
                  "Leave and liberty management",
                  "Awards and decorations processing",
                ]}
              />
              <FunctionalAreaCard
                number="3"
                title="Training and Readiness"
                description="Evaluates training programs, readiness reporting, and professional development."
                items={[
                  "Training plan development and execution",
                  "DRRS-MC accuracy and reporting",
                  "PME completion rates",
                  "MOS qualification maintenance",
                ]}
              />
              <FunctionalAreaCard
                number="4"
                title="Supply and Logistics"
                description="Examines supply management, property accountability, and logistics support."
                items={[
                  "CMR accuracy and reconciliation",
                  "Supply requisition processes",
                  "Property accountability",
                  "Equipment readiness reporting",
                ]}
              />
              <FunctionalAreaCard
                number="5"
                title="Safety and Risk Management"
                description="Reviews safety programs, mishap prevention, and ORM implementation."
                items={[
                  "Safety program documentation",
                  "Mishap reporting compliance",
                  "ORM integration",
                  "Workplace safety inspections",
                ]}
              />
              <FunctionalAreaCard
                number="6"
                title="Legal and Discipline"
                description="Assesses legal compliance, discipline, and administrative actions."
                items={[
                  "NJP and courts-martial procedures",
                  "Page 11 documentation",
                  "Administrative separation processes",
                  "Legal hold compliance",
                ]}
              />
            </div>

            <InfoCard icon={Lightbulb} title="Using the Checklists Effectively" variant="info">
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Assign specific functional areas to appropriate staff sections</li>
                <li>Conduct self-inspections on a rotating schedule (quarterly recommended)</li>
                <li>Document findings and track corrective actions to completion</li>
                <li>Use results to brief the commander on command health</li>
                <li>Update checklists as regulations and requirements change</li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Internal Controls */}
        <CollapsibleSection icon={Scale} title="Internal Controls Program">
          <div className="space-y-4">
            <p className="text-zinc-700 dark:text-zinc-300">
              Internal controls are measures implemented to ensure the integrity of financial and operational information, promote accountability, and prevent fraud, waste, and abuse. The <Acronym title="Managers' Internal Control">MIC</Acronym> program requires commanders to assess and certify their internal control systems annually.
            </p>

            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Five Components of Internal Control
              </h4>
              <div className="grid gap-3 md:grid-cols-5">
                {[
                  { title: "Control Environment", desc: "Organizational culture and tone at the top" },
                  { title: "Risk Assessment", desc: "Identifying and analyzing risks" },
                  { title: "Control Activities", desc: "Policies and procedures" },
                  { title: "Information & Communication", desc: "Quality information flow" },
                  { title: "Monitoring", desc: "Ongoing evaluation" },
                ].map((item, idx) => (
                  <div key={idx} className="rounded bg-white p-3 text-center dark:bg-black/40">
                    <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-gold)]">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={FileText} title="Annual Statement of Assurance">
                Commanders must submit an annual Statement of Assurance (<Acronym title="Statement of Assurance">SOA</Acronym>) certifying the adequacy of internal controls. This certification is based on self-assessments, testing, and corrective action plans.
              </InfoCard>
              <InfoCard icon={Target} title="Assessable Units">
                Break down command functions into assessable units. Each unit should have identified risks, control activities, and assigned managers responsible for maintaining controls.
              </InfoCard>
            </div>

            <InfoCard icon={AlertTriangle} title="Material Weaknesses" variant="warning">
              A material weakness is a significant deficiency that prevents reasonable assurance of compliance. Material weaknesses must be reported up the chain and tracked until resolved. Failure to identify and report material weaknesses can result in adverse findings during audits.
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Inspection Types */}
        <CollapsibleSection icon={Eye} title="Types of Inspections">
          <div className="space-y-4">
            <p className="text-zinc-700 dark:text-zinc-300">
              Marine Corps inspections serve different purposes and occur at various intervals. Understanding each type helps commands prepare appropriately and focus resources effectively.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <InspectionTypeCard
                icon={Search}
                title="Commanding General's Inspection Program (CGIP)"
                frequency="Annual/Biennial"
                description="Formal inspection conducted by or for the CG to assess unit readiness, compliance, and effectiveness across all functional areas."
                purpose="Provide senior leadership with an independent assessment of command health and readiness."
              />
              <InspectionTypeCard
                icon={ClipboardCheck}
                title="Command Inspection Program (CIP)"
                frequency="Ongoing"
                description="Internal inspection program managed by the command to continuously assess operations and maintain standards."
                purpose="Enable proactive identification and correction of deficiencies before external inspections."
              />
              <InspectionTypeCard
                icon={BarChart3}
                title="Staff Assistance Visit (SAV)"
                frequency="As Requested"
                description="Non-punitive assessment conducted at a unit's request to help identify and resolve issues."
                purpose="Provide training, guidance, and assistance to improve operations without formal findings."
              />
              <InspectionTypeCard
                icon={FileSearch}
                title="Inspector General Inspection"
                frequency="As Directed"
                description="Formal IG inspection directed by HQMC or higher headquarters to assess specific areas of concern."
                purpose="Investigate allegations, assess systemic issues, or evaluate program compliance Marine Corps-wide."
              />
            </div>

            <div className="rounded-lg border border-[var(--sa-gold)]/40 bg-[var(--sa-gold)]/10 p-4 dark:bg-[var(--sa-gold)]/20">
              <h4 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Inspection Response Timeline
              </h4>
              <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <Clock className="h-4 w-4" />
                <span>
                  Commands typically have <strong>30 days</strong> to respond to inspection findings with corrective action plans. Material findings may require expedited responses and progress reports until closed.
                </span>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Environmental Compliance Evaluation */}
        <CollapsibleSection icon={Leaf} title="Environmental Compliance Evaluation">
          <div className="space-y-4">
            <p className="text-zinc-700 dark:text-zinc-300">
              Environmental Compliance Evaluations (<Acronym title="Environmental Compliance Evaluation">ECE</Acronym>) assess a command's adherence to environmental laws, regulations, and Marine Corps environmental policies. Environmental compliance is a command responsibility.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard icon={FileText} title="Regulatory Framework">
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Clean Air Act</li>
                  <li>Clean Water Act</li>
                  <li>Resource Conservation and Recovery Act (RCRA)</li>
                  <li>OSHA regulations</li>
                  <li>MCO P5090.2 (Environmental Compliance)</li>
                </ul>
              </InfoCard>
              <InfoCard icon={AlertTriangle} title="Common Focus Areas" variant="warning">
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Hazardous material storage and handling</li>
                  <li>Waste disposal procedures</li>
                  <li>Spill prevention and response</li>
                  <li>Air emissions compliance</li>
                  <li>Stormwater management</li>
                </ul>
              </InfoCard>
              <InfoCard icon={CheckCircle} title="Commander Actions" variant="success">
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Designate unit environmental coordinator</li>
                  <li>Ensure personnel training is current</li>
                  <li>Conduct periodic self-assessments</li>
                  <li>Maintain required documentation</li>
                  <li>Report violations promptly</li>
                </ul>
              </InfoCard>
            </div>

            <InfoCard icon={Scale} title="Liability and Enforcement" variant="warning">
              Environmental violations can result in significant fines, remediation costs, and even criminal liability. The responsible commander may be held personally accountable for environmental violations within their command.
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Readiness Officer Turnover Binder */}
        <CollapsibleSection icon={FolderOpen} title="Readiness Officer Turnover Binder">
          <div className="space-y-4">
            <p className="text-zinc-700 dark:text-zinc-300">
              A comprehensive turnover binder ensures continuity during personnel transitions. The Readiness Officer (or equivalent position) turnover binder should contain all information necessary for the incoming officer to assume duties immediately.
            </p>

            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h4 className="mb-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Essential Turnover Binder Sections
              </h4>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: BookOpen, title: "Command Information", items: ["Mission statement", "Organization chart", "Key personnel roster", "Phone directory"] },
                  { icon: Calendar, title: "Battle Rhythm", items: ["Recurring meetings", "Reporting deadlines", "Inspection schedule", "Training events"] },
                  { icon: FileText, title: "SOPs & References", items: ["Unit SOPs", "Higher HQ directives", "Applicable orders", "Reference materials"] },
                  { icon: ClipboardCheck, title: "Program Status", items: ["Open inspection findings", "Corrective action plans", "Program assessments", "Pending actions"] },
                ].map((section, idx) => (
                  <div key={idx} className="rounded bg-white p-3 dark:bg-black/40">
                    <div className="mb-2 flex items-center gap-2">
                      <section.icon className="h-4 w-4 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
                      <span className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                        {section.title}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-xs text-zinc-600 dark:text-zinc-400">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={Users} title="Points of Contact">
                Maintain a current list of key POCs including higher headquarters staff, supporting agencies, installation offices, and subject matter experts for each functional area.
              </InfoCard>
              <InfoCard icon={AlertTriangle} title="Outstanding Issues" variant="warning">
                Document all open issues, pending actions, and ongoing corrective measures. Include status, suspense dates, and responsible parties to ensure nothing falls through the cracks during transition.
              </InfoCard>
            </div>

            <InfoCard icon={Lightbulb} title="Best Practices" variant="success">
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Update the binder continuously, not just before turnover</li>
                <li>Include lessons learned and local procedures not in written SOPs</li>
                <li>Provide both digital and physical copies</li>
                <li>Schedule overlap time for face-to-face turnover when possible</li>
                <li>Brief the commander on turnover status and any critical issues</li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>
      </div>

      {/* Important Things to Know */}
      <div className="rounded-xl border border-[var(--sa-gold)]/30 bg-[var(--sa-gold)]/10 p-6 dark:bg-[var(--sa-gold)]/20">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <AlertTriangle className="h-6 w-6" />
          Important Things to Know
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                IG Hotline Awareness
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Marines can contact the IG hotline to report fraud, waste, abuse, or misconduct. Ensure Marines know this resource exists and that reprisal for IG complaints is prohibited.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Document Everything
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Maintain thorough documentation of all inspections, findings, and corrective actions. Good records demonstrate due diligence and support future inspections.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Trend Analysis
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Look for patterns in inspection findings across time and functional areas. Recurring issues may indicate systemic problems requiring root cause analysis.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Close the Loop
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Corrective actions are not complete until verified. Ensure fixes are actually implemented and effective before closing findings.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Situations */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <HelpCircle className="h-6 w-6" />
          Special Situations
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-4 dark:bg-blue-500/20">
            <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Preparing for a CGIP Inspection
            </h4>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              When notified of an upcoming <Acronym title="Commanding General's Inspection Program">CGIP</Acronym> inspection: (1) Review previous inspection reports and ensure all findings are closed, (2) Conduct self-assessments using current FACs, (3) Brief all hands on inspection scope and expectations, (4) Prepare functional area binders with required documentation, (5) Designate escorts and POCs for each functional area.
            </p>
          </div>
          <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-4 dark:bg-purple-500/20">
            <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Responding to IG Complaints
            </h4>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              If notified that an IG complaint has been filed: (1) Do not take any action that could be perceived as reprisal, (2) Preserve all relevant documentation, (3) Cooperate fully with any investigation, (4) Consult with your SJA on appropriate responses, (5) Continue normal operations unless directed otherwise.
            </p>
          </div>
          <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 dark:bg-orange-500/20">
            <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              External Audits
            </h4>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              For GAO, DoD IG, or other external audits: (1) Notify higher headquarters immediately upon contact, (2) Designate a single POC to coordinate information requests, (3) Provide only what is requested - don't volunteer additional information, (4) Ensure responses are accurate and complete, (5) Document all interactions and information provided.
            </p>
          </div>
        </div>
      </div>

      {/* Common Problems and Solutions */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          <Lightbulb className="h-6 w-6" />
          Common Problems and Solutions
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/30 p-4 dark:border-white/10 dark:bg-[var(--sa-navy)]/30">
            <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Problem: Recurring Findings
            </h4>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Recurring findings indicate corrective actions aren't addressing root causes. Conduct a thorough root cause analysis, involve subject matter experts, and consider systemic changes rather than quick fixes. Track leading indicators to catch issues early.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/30 p-4 dark:border-white/10 dark:bg-[var(--sa-navy)]/30">
            <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Problem: Poor Documentation
            </h4>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Establish clear documentation standards and assign responsibility. Create templates for common records, conduct periodic documentation reviews, and include documentation quality in self-assessments. Good documentation should answer who, what, when, where, and why.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/30 p-4 dark:border-white/10 dark:bg-[var(--sa-navy)]/30">
            <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Problem: Lack of Self-Assessment Culture
            </h4>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Build self-assessment into the unit battle rhythm. Assign functional area managers, set regular assessment schedules, and brief results to leadership. Recognize units and individuals who identify and correct issues proactively.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/30 p-4 dark:border-white/10 dark:bg-[var(--sa-navy)]/30">
            <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Problem: Knowledge Loss During Turnover
            </h4>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <strong>Solution:</strong> Maintain comprehensive turnover binders, require formal turnover briefings, and overlap incoming/outgoing personnel when possible. Document institutional knowledge and local procedures that aren't captured in formal SOPs.
            </p>
          </div>
        </div>
      </div>

      {/* Key Links */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black/40">
        <h2 className="mb-4 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Key Links
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "IGMC Website", url: "https://www.hqmc.marines.mil/igmc/", desc: "Official Inspector General of the Marine Corps" },
            { name: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/", desc: "Standardized inspection checklists" },
            { name: "IG Hotline", url: "https://www.dodig.mil/hotline/", desc: "Report fraud, waste, and abuse" },
            { name: "Environmental Compliance", url: "https://www.marines.mil/Environment/", desc: "Marine Corps environmental programs" },
            { name: "Internal Controls (MIC)", url: "https://www.hqmc.marines.mil/igmc/", desc: "Managers' Internal Control program guidance" },
            { name: "DoD Inspector General", url: "https://www.dodig.mil/", desc: "Department of Defense IG resources" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/30 p-3 transition hover:bg-[var(--sa-navy)]/10 dark:border-white/10 dark:bg-[var(--sa-navy)]/30 dark:hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
              <div>
                <div className="text-sm font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  {link.name}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">{link.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Back Link */}
      <div className="flex gap-3">
        <a
          href="/roles/commanders"
          className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10"
        >
          Back to Commanders Home
        </a>
      </div>
    </div>
  );
}
