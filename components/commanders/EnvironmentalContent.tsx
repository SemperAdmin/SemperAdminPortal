"use client";

import React, { useState } from "react";
import { Breadcrumb } from "../ui/Breadcrumb";
import { Acronym } from "../ui/Acronym";
import { ENVIRONMENTAL_URLS } from "../../data/references";
import { InfoCard } from "../ui/InfoCard";
import {
  Leaf,
  Shield,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  Users,
  DollarSign,
  Droplets,
  Flame,
  TreeDeciduous,
  Building,
  BookOpen,
  ClipboardCheck,
  Target,
  HelpCircle,
  Lightbulb,
  Clock,
  Scale,
  Recycle,
  Beaker,
  AlertCircle,
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

function NEPALevelCard({
  level,
  title,
  description,
  timeline,
  authority,
  items,
}: {
  level: string;
  title: string;
  description: string;
  timeline?: string;
  authority?: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-white p-4 dark:border-white/10 dark:bg-black/40">
      <div className="mb-2 flex items-center gap-3">
        <span className="rounded bg-[var(--sa-navy)] px-2 py-1 text-xs font-bold text-white">
          {level}
        </span>
        <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{title}</h4>
      </div>
      <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      {timeline && (
        <p className="mb-2 text-sm">
          <strong className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timeline:</strong>{" "}
          <span className="text-zinc-600 dark:text-zinc-400">{timeline}</span>
        </p>
      )}
      {authority && (
        <p className="mb-2 text-sm">
          <strong className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authority:</strong>{" "}
          <span className="text-zinc-600 dark:text-zinc-400">{authority}</span>
        </p>
      )}
      <ul className="mt-3 space-y-1">
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

/* ─────────────────────────────────────────────────────────── */
/*  Main Component                                             */
/* ─────────────────────────────────────────────────────────── */

export function EnvironmentalContent() {
  const breadcrumbItems = [
    { label: "Commanders", href: "/roles/commanders" },
    { label: "Environmental Stewardship" },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 p-6 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-white/10 p-3">
            <Leaf className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Environmental Stewardship</h1>
            <p className="mt-2 text-white/80">
              <Acronym title="Environmental Management System">EMS</Acronym> overview,{" "}
              <Acronym title="Environmental Compliance Coordinator">ECC</Acronym> appointment,
              environmental funding, spill reporting, hazmat management,{" "}
              <Acronym title="National Environmental Policy Act">NEPA</Acronym> compliance, and{" "}
              <Acronym title="Environmental Compliance Evaluation">ECE</Acronym> assessments
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
            Marine Corps Commanders at all levels and in all organizations are responsible for
            ensuring compliance with applicable environmental requirements within their commands.
            This includes meeting environmental planning, training, execution, mitigation, and
            communication responsibilities. <strong>Commanders are also responsible for the outcomes
            from failure to meet these requirements including fines, penalties, and cleanup costs
            for spills.</strong>
          </p>
          <p>
            Environmental requirements impact nearly every Marine Corps occupational field, MOS,
            operation, and civilian job series. Failure to meet environmental requirements creates
            legal and financial liabilities, operational impacts, and risks to human health and the
            environment. Effective environmental stewardship protects the mission.
          </p>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <InfoCard icon={BookOpen} title="Key Reference" variant="info">
            <ul className="space-y-1">
              <li>
                <Acronym title="Marine Corps Order">MCO</Acronym> 5090.2 (Environmental Compliance
                and Protection)
              </li>
              <li>Commander&apos;s Guide to Environmental Management (Feb 2022)</li>
            </ul>
          </InfoCard>
          <InfoCard icon={AlertTriangle} title="Command Responsibility" variant="warning">
            <p>
              Commanders are responsible for outcomes from failure to meet environmental
              requirements including <strong>fines, penalties, and cleanup costs</strong>. In rare
              cases, civil and criminal penalties may apply.
            </p>
          </InfoCard>
        </div>
      </div>

      {/* How It Works Sections */}
      <div className="space-y-4">
        {/* EMS Section */}
        <CollapsibleSection icon={Shield} title="Environmental Management System (EMS)" defaultOpen>
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Definition
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                The <Acronym title="Environmental Management System">EMS</Acronym> is the
                Commander&apos;s tool to enable the installation&apos;s environmental program to
                perform well and to identify, communicate, and address operational and programmatic
                risk. An EMS is a systematic approach to managing environmental programs, ensuring
                environmental requirements are integrated into existing business practices.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Reference:</strong> EMS Requirements outlined in MCO 5090.2, Volume 2.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={Target} title="Why Implement an EMS">
                <ul className="space-y-1">
                  <li>• Reduces risk to mission and the environment</li>
                  <li>• Aligns process owner responsibilities with environmental impacts</li>
                  <li>• Improves processes, promotes efficiency, and increases sustainability</li>
                  <li>• Enhances working relationships with community and regulatory agencies</li>
                </ul>
              </InfoCard>
              <InfoCard icon={CheckCircle} title="EMS Assists By" variant="success">
                <ul className="space-y-1">
                  <li>• Assessing environmental compliance and programmatic effectiveness</li>
                  <li>• Ensuring environmental programs are self-correcting</li>
                  <li>• Setting goals and committing to continual improvement</li>
                  <li>
                    • Ensuring Marines and civilians are accountable for managing mission-related
                    tasks
                  </li>
                </ul>
              </InfoCard>
            </div>

            <InfoCard icon={Clock} title="Annual Requirement" variant="warning">
              <p>
                Installation Commanders are required to conduct an <strong>annual EMS internal
                self-audit</strong> which culminates in a review of their EMS to understand:
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Status of compliance with environmental requirements</li>
                <li>• Programmatic performance</li>
                <li>• Environmental risks</li>
              </ul>
              <p className="mt-2">
                This review is used to assess an installation&apos;s risk and determine strategies
                and funding levels necessary to mitigate those risks.
              </p>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* ECC Section */}
        <CollapsibleSection icon={Users} title="Environmental Compliance Coordinator (ECC)">
          <div className="space-y-4">
            <InfoCard icon={FileText} title="Requirement" variant="info">
              <p>
                All unit/site Commanders are responsible for assigning an{" "}
                <Acronym title="Environmental Compliance Coordinator">ECC</Acronym> to work with{" "}
                <Acronym title="Comprehensive Environmental Training and Education Program">
                  CETEP
                </Acronym>{" "}
                Coordinators to ensure appropriate personnel receive required training.
              </p>
            </InfoCard>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={ClipboardCheck} title="ECC Responsibilities">
                <ul className="space-y-1">
                  <li>• Maintain environmental binders with required documentation/inspection records</li>
                  <li>• Coordinate with installation environmental staff</li>
                  <li>• Ensure compliance with environmental requirements at unit level</li>
                  <li>• Conduct and document required checks</li>
                  <li>• Respond to environmental matters</li>
                </ul>
              </InfoCard>
              <InfoCard icon={Lightbulb} title="Best Practices" variant="success">
                <ul className="space-y-1">
                  <li>• Assign trained <strong>primary and secondary</strong> ECCs</li>
                  <li>• Ensure ECCs work with CETEP Coordinators</li>
                  <li>• Maintain environmental binders with required documentation</li>
                  <li>• Review IG Marine Corps Checklist for functional area requirements</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </CollapsibleSection>

        {/* ECE Section */}
        <CollapsibleSection icon={ClipboardCheck} title="Environmental Compliance Evaluation (ECE)">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                The <Acronym title="Environmental Compliance Evaluation">ECE</Acronym> Program
                provides the Installation Commander with a snapshot of compliance status with
                pollution control and natural/cultural resource protection requirements. Designed to
                identify and correct compliance problems before they become adverse regulatory
                actions or risks to human health, environment, and Marine Corps mission.
              </p>
            </div>

            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              ECE Program Operates on Three-Year Cycle
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={Building} title="Internal ECEs (Annually)">
                <ul className="space-y-1">
                  <li>• Each Installation Commander conducts environmental self-assessment</li>
                  <li>• Determines instances of non-compliance and corrective/preventive actions</li>
                  <li>• Overseen by installation environmental staff</li>
                  <li>• Includes all tenant commands and activities</li>
                  <li>• Includes satellite sites owned by installation</li>
                  <li>• Includes annual assessment of conformance with installation&apos;s EMS</li>
                </ul>
              </InfoCard>
              <InfoCard icon={Scale} title="Benchmark ECEs (Every Three Years)">
                <ul className="space-y-1">
                  <li>• HQMC/MCICOM-sponsored inspections</li>
                  <li>• Scheduled and performed by MCICOM</li>
                  <li>• Leverage independent evaluators from outside Marine Corps</li>
                  <li>• Provide external and consistent viewpoint</li>
                  <li>• Performed at one-third of installations each year</li>
                </ul>
              </InfoCard>
            </div>

            <InfoCard icon={FileText} title="Plan of Action and Milestones (POA&M)" variant="warning">
              <ul className="space-y-1">
                <li>• Document corrective and preventive actions</li>
                <li>• Developed in response to compliance deficiencies identified in ECEs</li>
                <li>
                  • Developed by environmental office personnel in coordination with deficiency owner
                </li>
                <li>• Monitored by MCI Regions and MCICOM</li>
                <li>
                  • <strong>Installation Commander conducts annual review and verification</strong>{" "}
                  of open POA&M items
                </li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Environmental Funding Section */}
        <CollapsibleSection icon={DollarSign} title="Environmental Funding">
          <div className="space-y-4">
            <InfoCard icon={FileText} title="Primary Funding Source" variant="info">
              <p>
                <Acronym title="Environmental Compliance and Operational Reporting">ENCORE</Acronym>{" "}
                database assists with identification, assessment, validation, documentation, and
                tracking of all environmental resource requirements. ENCORE promotes{" "}
                <Acronym title="Planning, Programming, Budgeting, and Execution">PPBE</Acronym>{" "}
                tracking at detailed project level by fiscal year.
              </p>
            </InfoCard>

            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Additional Funding Sources
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-[var(--sa-navy)]/20 p-3 dark:border-white/10">
                <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  MILCON Funds
                </h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Require congressional approval. Used for construction projects exceeding HQMC FSRM
                  funding authority levels.
                </p>
              </div>
              <div className="rounded-lg border border-[var(--sa-navy)]/20 p-3 dark:border-white/10">
                <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Environmental Restoration, Navy (ER,N)
                </h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Managed by NAVFAC. Funds cleanup activities on Marine Corps installations.
                </p>
              </div>
              <div className="rounded-lg border border-[var(--sa-navy)]/20 p-3 dark:border-white/10">
                <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  O&M, MCR Account
                </h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  For Reserve installations
                </p>
              </div>
              <div className="rounded-lg border border-[var(--sa-navy)]/20 p-3 dark:border-white/10">
                <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                  Qualified Recycling Program (QRP)
                </h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Revenues from recycling programs
                </p>
              </div>
            </div>

            <InfoCard icon={AlertCircle} title="Environmental Liabilities" variant="warning">
              <p>
                Environmental liability is a probable and measurable future environmental cost
                resulting from environmental restoration, corrective action, future disposal, or
                closure of facilities and equipment.
              </p>
              <p className="mt-2">Cleanup costs may include:</p>
              <ul className="mt-1 space-y-1">
                <li>• Decontamination and decommissioning</li>
                <li>• Site restoration and monitoring</li>
                <li>• Abatement, closure, and post-closure</li>
              </ul>
              <p className="mt-2 text-xs text-zinc-500">
                DoD is required to report environmental liabilities in annual financial statements.
              </p>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* NEPA Section */}
        <CollapsibleSection icon={FileText} title="NEPA Compliance">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                National Environmental Policy Act (NEPA)
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                <Acronym title="National Environmental Policy Act">NEPA</Acronym> (1969) and E.O.
                12114 require federal agencies to consider potential environmental effects of their
                actions and identify reasonable alternatives. Both require thorough analysis and
                documentation. NEPA also requires meaningful public involvement in the
                decision-making process.
              </p>
            </div>

            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Levels of Analysis
            </h3>
            <div className="grid gap-4 lg:grid-cols-3">
              <NEPALevelCard
                level="CATEX"
                title="Categorical Exclusion"
                description="Broad categories of actions with little or no potential for significant effects"
                authority="Installation Commanders"
                items={[
                  "Neither EA nor EIS required",
                  "MCO 5090.2, Vol 12 provides list of DON CATEXs",
                  "Must document use through CATEX Decision Memorandum",
                ]}
              />
              <NEPALevelCard
                level="EA"
                title="Environmental Assessment"
                description="Required for actions that do not qualify for CATEX but not expected to have significant impact"
                timeline="1 year to complete"
                authority="Installation Commanders (their installations)"
                items={[
                  "If no significant impacts, FONSI issued",
                  "Public input required",
                  "FONSI must be made available to public",
                ]}
              />
              <NEPALevelCard
                level="EIS"
                title="Environmental Impact Statement"
                description="Required if significant environmental impacts anticipated or public controversy expected"
                timeline="2 years to complete"
                authority="ASN (EI&E) signs Record of Decision"
                items={[
                  "Full discussion of all significant impacts",
                  "Requires public and regulatory comments",
                  "Completed with Record of Decision (ROD)",
                ]}
              />
            </div>

            <InfoCard icon={Target} title="NEPA Process">
              <ol className="list-decimal space-y-1 pl-4">
                <li>Project sponsor prepares Request for Environmental Impact Review (REIR)</li>
                <li>REIR reviewed by Installation/Command environmental specialists</li>
                <li>Results in determination of required level of NEPA analysis</li>
                <li>
                  Should be integrated with other environmental review and consultation requirements
                </li>
              </ol>
            </InfoCard>

            <InfoCard icon={AlertTriangle} title="E.O. 12114 (Overseas)" variant="warning">
              <p>
                Applies to Marine Corps actions outside the U.S. that may significantly affect the
                environment.
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  • <strong>OEA</strong> (Overseas Environmental Assessment): Similar to EA under
                  NEPA
                </li>
                <li>
                  • <strong>OEIS</strong> (Overseas Environmental Impact Statement): Similar to EIS
                </li>
              </ul>
              <p className="mt-2 text-xs font-medium text-[var(--sa-gold)]">
                Note: No approved CATEXs for use overseas at present.
              </p>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Hazmat Section */}
        <CollapsibleSection icon={Beaker} title="Hazardous Materials Management">
          <div className="space-y-4">
            <InfoCard icon={ClipboardCheck} title="Common Unit Environmental Practices">
              <ul className="grid gap-2 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Hazardous material storage and use</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Hazardous waste generation and disposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Satellite accumulation areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Stormwater pollution prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>POL and hazmat storage tanks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Universal wastes</span>
                </li>
              </ul>
            </InfoCard>

            <InfoCard icon={AlertTriangle} title="Don't Over-Purchase Hazmat" variant="warning">
              <p>
                <strong>Units end up paying twice</strong> if hazardous material is not used by
                expiration date:
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Original purchase cost</li>
                <li>• Disposal cost as hazardous waste</li>
              </ul>
              <p className="mt-2">
                Encourage participation in installation recycling programs and P2 efforts.
              </p>
            </InfoCard>

            <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/30 p-4 dark:border-white/10 dark:bg-[var(--sa-navy)]/20">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Key Regulations
              </h4>
              <ul className="mt-2 grid gap-1 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
                <li>
                  •{" "}
                  <Acronym title="Resource Conservation and Recovery Act">RCRA</Acronym>
                </li>
                <li>
                  •{" "}
                  <Acronym title="Comprehensive Environmental Response, Compensation, and Liability Act">
                    CERCLA
                  </Acronym>
                </li>
                <li>
                  • OSHA{" "}
                  <Acronym title="Hazardous Waste Operations and Emergency Response">HAZWOPER</Acronym>
                </li>
                <li>
                  • DoD{" "}
                  <Acronym title="Hazard Communication">HAZCOM</Acronym> Program
                </li>
                <li>• MCO 5090.2, Volume 9 (Hazardous Waste Management)</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        {/* Spill Response Section */}
        <CollapsibleSection icon={Droplets} title="Spill Planning and Response">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Emergency spill planning and response programs reduce impacts of pollutant releases
                to the environment by establishing procedures for installations to respond to
                incidents quickly and appropriately.
              </p>
            </div>

            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Key Requirements
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={Droplets} title="Clean Water Act Requirements">
                <ul className="space-y-1">
                  <li>• Establish procedures to respond to pollutant releases</li>
                  <li>• Coordinate with state, local government, and public/private groups</li>
                  <li>• Notify regulatory authorities for certain releases</li>
                  <li>
                    • Develop{" "}
                    <Acronym title="Spill Prevention, Control, and Countermeasure">SPCC</Acronym>{" "}
                    Plans
                  </li>
                  <li>• Develop Facility Response Plans (Oil Pollution Act)</li>
                </ul>
              </InfoCard>
              <InfoCard icon={AlertCircle} title="CERCLA & EPCRA Requirements">
                <ul className="space-y-1">
                  <li>
                    • Reportable Quantities (RQ) trigger reporting when met or exceeded
                  </li>
                  <li>• Report to National Response Center</li>
                  <li>• Notify state and local emergency response planners</li>
                  <li>• Develop Spill Contingency Plans</li>
                  <li>• Hazardous chemical inventory reporting</li>
                </ul>
              </InfoCard>
            </div>

            <InfoCard icon={Flame} title="Unit Actions" variant="warning">
              <ul className="space-y-1">
                <li>• Conduct spill response training</li>
                <li>
                  • <strong>Promptly contain, clean up, and report spills</strong> to installation
                  environmental staff
                </li>
                <li>• Know reportable quantities and notification requirements</li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Pollution Prevention Section */}
        <CollapsibleSection icon={Recycle} title="Pollution Prevention (P2)">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                The P2 Program identifies and implements methods to reduce quantities and toxicity
                of wastes generated, released, or disposed by Marine Corps installations.
              </p>
            </div>

            <InfoCard icon={Target} title="P2 Focuses On">
              <ul className="grid gap-2 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Increased efficiency in use of raw materials, energy, water</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Purchase of materials with recycled content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Substitution of less hazardous materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Improved hazardous material management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Onsite reuse or recycling of waste</span>
                </li>
              </ul>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* Natural and Cultural Resources Section */}
        <CollapsibleSection icon={TreeDeciduous} title="Natural & Cultural Resources Conservation">
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={TreeDeciduous} title="Natural Resources Programs">
                <ul className="space-y-1">
                  <li>
                    •{" "}
                    <Acronym title="Integrated Natural Resources Management Plan">INRMP</Acronym>:
                    Required for installations
                  </li>
                  <li>• Threatened and Endangered Species Programs</li>
                  <li>• Wetlands, Watersheds, and Coastal Conservation</li>
                  <li>• Forest Management</li>
                  <li>• Invasive Species Control</li>
                </ul>
                <p className="mt-2 text-xs text-zinc-500">
                  <strong>Key Laws:</strong> ESA, Sikes Act, MBTA, CZMA, MMPA, Clean Water Act
                </p>
              </InfoCard>
              <InfoCard icon={Building} title="Cultural Resources Programs">
                <ul className="space-y-1">
                  <li>
                    •{" "}
                    <Acronym title="Integrated Cultural Resources Management Plan">ICRMP</Acronym>:
                    Required for installations with cultural resources
                  </li>
                  <li>• Historic Properties identification, evaluation, and management</li>
                  <li>• Archaeological Resources protection</li>
                  <li>• Native American Graves and Associated Items</li>
                </ul>
                <p className="mt-2 text-xs text-zinc-500">
                  <strong>Key Laws:</strong> NHPA, ARPA, NAGPRA
                </p>
              </InfoCard>
            </div>
          </div>
        </CollapsibleSection>

        {/* Encroachment Management Section */}
        <CollapsibleSection icon={Scale} title="Encroachment Management">
          <div className="space-y-4">
            <InfoCard icon={FileText} title="Encroachment Control Plans (ECPs)" variant="info">
              <p>
                MCO 11011.22B requires installations to prepare Encroachment Control Plans (ECPs).
              </p>
              <p className="mt-2">
                <strong>Responsibility:</strong> Installation&apos;s Community Plans and Liaison
                Office (CPLO)
              </p>
            </InfoCard>

            <InfoCard icon={Users} title="Regional/Installation Programs May Include">
              <ul className="space-y-1">
                <li>• Encroachment Partnering Initiatives</li>
                <li>• Interaction with state or local government</li>
                <li>• Regional conservation forums</li>
                <li>• Private landowners (endangered/threatened species perspective)</li>
              </ul>
              <p className="mt-2 text-sm">
                Installations are encouraged to develop Encroachment Management Action Teams.
              </p>
            </InfoCard>
          </div>
        </CollapsibleSection>

        {/* CETEP Section */}
        <CollapsibleSection icon={BookOpen} title="Environmental Training and Education (CETEP)">
          <div className="space-y-4">
            <div className="rounded-lg bg-[var(--sa-cream)]/50 p-4 dark:bg-[var(--sa-navy)]/30">
              <h3 className="mb-2 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                CETEP Purpose
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                <Acronym title="Comprehensive Environmental Training and Education Program">
                  CETEP
                </Acronym>{" "}
                supports full compliance with environmental requirements by identifying
                environmental training needs and integrating required professional development
                initiatives and training.
              </p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Primary Goal:</strong> Provide appropriate high-quality environmental
                training and information in most efficient and effective manner, then ensure 100% of
                personnel are trained on and qualified for their environmental responsibilities.
              </p>
            </div>

            <InfoCard icon={ClipboardCheck} title="Training Methods">
              <ul className="space-y-1">
                <li>• On-the-job training</li>
                <li>• Turnover folders and SOPs that address environmental requirements</li>
                <li>• Emergency plans and exercises</li>
                <li>• Environmental awareness training for non-environmental staff</li>
              </ul>
            </InfoCard>

            <InfoCard icon={AlertTriangle} title="Commander Requirement" variant="warning">
              <p>
                All unit/site Commanders are responsible for assigning an{" "}
                <Acronym title="Environmental Compliance Coordinator">ECC</Acronym> to work with
                CETEP Coordinators to ensure appropriate personnel receive required training.
              </p>
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
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Keys to an Effective Program
            </h3>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Commitment to environmental compliance by command leadership</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Up-to-date policies and procedures that are implemented</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Understanding of environmental impact of operations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Appropriate level of funding to comply</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Clearly identified environmental roles and responsibilities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Effective environmental training with well-trained staff</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Effective working relationships with regulatory agencies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Proper documentation and recordkeeping</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-[var(--sa-red)]/10 p-3 dark:bg-[var(--sa-red)]/20">
            <p className="text-sm font-medium text-[var(--sa-red)]">
              <AlertTriangle className="mr-1 inline h-4 w-4" />
              Environmental issues elevate quickly. Ensure chain of command is informed of major
              issues/incidents, especially when regulatory agencies are involved or when the issue
              has Congressional, media, or significant public interest.
            </p>
          </div>
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
          <InfoCard icon={Target} title="Operations Outside Installations">
            <p>
              NEPA/E.O. 12114 requirements still apply for training operations outside USMC or other
              Services&apos; installations.
            </p>
            <ul className="mt-2 space-y-1">
              <li>• Naval Warfare Publication 4-11</li>
              <li>• MCRP 3.40B.2, Environmental Considerations</li>
            </ul>
            <p className="mt-2 text-xs">
              Advance planning and early notification are key. Contact MEF, MARFOR, or nearest
              installation for guidance.
            </p>
          </InfoCard>

          <InfoCard icon={Scale} title="Enforcement Action Response" variant="warning">
            <p>If installation receives enforcement action from regulatory agency:</p>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-xs">
              <li>Immediately inform MCICOM (GF) through chain of command</li>
              <li>Request assistance from Regional/Installation Counsel Office</li>
              <li>Request detail from regulatory agency</li>
              <li>Inform Communications Office if public implications</li>
              <li>Coordinate with regional NAVFAC</li>
              <li>Prepare ENCORE project for funding requirements</li>
              <li>Develop and implement corrective action plan</li>
            </ol>
          </InfoCard>

          <InfoCard icon={Users} title="When Deployed">
            <p>Ensure someone in remain behind element who can:</p>
            <ul className="mt-2 space-y-1">
              <li>• Conduct and document required checks</li>
              <li>• Respond to environmental matters</li>
              <li>• Identify deficiencies to installation environmental staff</li>
            </ul>
          </InfoCard>

          <InfoCard icon={ClipboardCheck} title="Regulatory Inspections">
            <p>
              Federal, state, and local regulatory authorities routinely inspect Marine Corps
              installations.
            </p>
            <ul className="mt-2 space-y-1">
              <li>• Inspectors generally notify Installation Commander of intent</li>
              <li>• Agencies are legally authorized to inspect at any time</li>
              <li>• Exit briefing summarizes findings</li>
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
              problem: "Non-compliance identified during ECE",
              solution:
                "Develop POA&M with corrective and preventive actions. Coordinate with environmental office. Track progress. Ensure annual validation of open POA&M items.",
            },
            {
              problem: "Spill incident",
              solution:
                "Promptly contain, clean up, and report to installation environmental staff. If RQ met/exceeded, notify National Response Center and state/local planners. Develop corrective action plan.",
            },
            {
              problem: "No assigned ECC",
              solution:
                "Assign trained primary and secondary ECCs. Ensure they work with CETEP Coordinators. Maintain environmental binders with required documentation.",
            },
            {
              problem: "Hazardous material over-purchasing",
              solution:
                "Review purchasing practices. Units pay twice for unused hazmat (purchase cost plus disposal). Coordinate with supply to right-size orders.",
            },
            {
              problem: "NEPA requirements not considered during planning",
              solution:
                "Prepare REIR early in planning process. Coordinate with installation environmental staff. Integrate NEPA with other planning actions.",
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
                • MCO 5090.2 (Environmental Compliance and Protection - all volumes)
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • MCO 5090.2, Volume 2 (EMS requirements)
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • MCO 5090.2, Volume 9 (Hazardous Waste Management)
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • MCO 5090.2, Volume 12 (Environmental Planning and Review)
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • MCO 11011.22B (Encroachment Control Management)
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • MCRP 3.40B.2, Environmental Considerations
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • Commander&apos;s Guide to Environmental Management (Feb 2022)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[var(--sa-cream)]">External Resources</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href={ENVIRONMENTAL_URLS.EPA_TOPICS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-gold)] hover:underline"
                >
                  EPA Environmental Topics
                </a>
              </li>
              <li>
                <a
                  href={ENVIRONMENTAL_URLS.EPA_ECHO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-gold)] hover:underline"
                >
                  EPA Enforcement and Compliance History Online (ECHO)
                </a>
              </li>
              <li className="text-[var(--sa-cream)]/70">
                • National Response Center (for spill reporting)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
