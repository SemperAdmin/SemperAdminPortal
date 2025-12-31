"use client";

import { useState } from "react";
import {
  Wrench,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  Clock,
  Users,
  FileText,
  AlertTriangle,
  ExternalLink,
  Database,
  Package,
  CheckCircle,
  Settings,
  BarChart3,
  Calendar,
  RefreshCw,
  Plane,
  Shield,
  HelpCircle
} from "lucide-react";
import { Acronym } from "../ui/Acronym";

interface InfoCardProps {
  children: React.ReactNode;
  variant?: "info" | "warning" | "success" | "tip" | "danger";
  className?: string;
}

function InfoCard({ children, variant = "info", className = "" }: InfoCardProps) {
  const styles = {
    info: "border-l-blue-500 bg-blue-50 dark:bg-blue-950/20",
    warning: "border-l-amber-500 bg-amber-50 dark:bg-amber-950/20",
    success: "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-950/20",
    tip: "border-l-purple-500 bg-purple-50 dark:bg-purple-950/20",
    danger: "border-l-rose-500 bg-rose-50 dark:bg-rose-950/20",
  };

  return (
    <div className={`rounded-lg border-l-4 p-4 ${styles[variant]} ${className}`}>
      <div className="text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
    </div>
  );
}

function CollapsibleSection({
  title,
  icon: Icon,
  children,
  defaultOpen = false
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg border border-[var(--sa-gold)]/30 bg-[var(--sa-navy)]/20 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--sa-navy)]/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-[var(--sa-gold)]" />
          <span className="font-semibold text-[var(--sa-cream)]">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[var(--sa-gold)]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[var(--sa-gold)]" />
        )}
      </button>
      {isOpen && <div className="p-4 pt-0 border-t border-[var(--sa-gold)]/20">{children}</div>}
    </div>
  );
}

function BattleRhythmCard({
  frequency,
  items,
  color
}: {
  frequency: string;
  items: string[];
  color: string;
}) {
  const colorClasses: { [key: string]: string } = {
    blue: "border-blue-500 bg-blue-900/20",
    green: "border-green-500 bg-green-900/20",
    amber: "border-amber-500 bg-amber-900/20",
    purple: "border-purple-500 bg-purple-900/20"
  };

  return (
    <div className={`rounded-lg p-4 border-l-4 ${colorClasses[color] || colorClasses.blue}`}>
      <h4 className="font-semibold text-[var(--sa-gold)] mb-3">{frequency}</h4>
      <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function RatingCard({
  rating,
  name,
  formula,
  example
}: {
  rating: string;
  name: string;
  formula: string;
  example: string;
}) {
  return (
    <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-[var(--sa-gold)]">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl font-bold text-[var(--sa-gold)]">&quot;{rating}&quot;</span>
        <span className="text-[var(--sa-cream)] font-medium">({name})</span>
      </div>
      <p className="text-sm text-[var(--sa-cream)]/80 mb-2">{formula}</p>
      <p className="text-xs text-[var(--sa-cream)]/70 italic">{example}</p>
    </div>
  );
}

export function MaintenanceLogisticsContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 rounded-lg p-8 border border-[var(--sa-gold)]/30">
        <div className="flex items-start gap-4">
          <Wrench className="w-12 h-12 text-[var(--sa-gold)] flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-[var(--sa-cream)] mb-2">Maintenance and Logistics</h1>
            <p className="text-xl text-[var(--sa-cream)]/80">
              Equipment readiness, <Acronym title="Global Combat Support System - Marine Corps">GCSS-MC</Acronym>, maintenance management, supply interface, and aviation maintenance
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-[var(--sa-navy)]/30 rounded-lg p-6 border border-[var(--sa-gold)]/30">
        <h2 className="text-xl font-semibold text-[var(--sa-gold)] mb-4">Overview</h2>
        <div className="space-y-4 text-[var(--sa-cream)]/90">
          <p>
            Materiel readiness is the availability of materiel required by a military organization to support its
            wartime activities, contingencies, disaster relief, or other emergencies. As commander, you are responsible
            for reporting the accurate allowances, availability, condition, and readiness of your equipment at all times.
          </p>
          <p>
            Equipment stewardship starts with understanding what you have and how to care for it. You must ensure your
            personnel are properly trained on maintaining the unit&apos;s equipment. Record keeping is an essential
            component of maintenance. Turning wrenches on equipment is only part of maintaining it.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Four Essential Elements</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { num: "1", text: "What do I rate?" },
                { num: "2", text: "Do I have it?" },
                { num: "3", text: "Does it work?" },
                { num: "4", text: "Where is it?" }
              ].map((item) => (
                <div key={item.num} className="bg-[var(--sa-navy)]/40 rounded p-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--sa-gold)] text-[var(--sa-navy)] font-bold flex items-center justify-center text-sm">
                    {item.num}
                  </span>
                  <span className="text-sm text-[var(--sa-cream)]/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• 2016 Commanders Materiel Readiness Handbook</li>
              <li>• Commanders Supply Management Handbook</li>
              <li>• MCO 4400.201 (<Acronym title="Global Combat Support System - Marine Corps">GCSS-MC</Acronym>)</li>
              <li>• TM-4700-15/1 (Equipment Records)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Appointments */}
      <CollapsibleSection title="Key Appointments" icon={Users} defaultOpen={true}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border border-blue-500/30">
            <h4 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Maintenance Management Officer (MMO)
            </h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-3">
              <strong>Appointment:</strong> Assign in writing when command is authorized Field Level of Maintenance
              for more than one commodity area.
            </p>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-3">
              <strong>Role:</strong> Special Staff Officer who establishes and manages sound maintenance practices
              to increase equipment availability and reliability. Conduit between maintenance commodities, supply,
              supporting/supported, adjacent and HHQ organizations.
            </p>
            <div>
              <p className="font-medium text-[var(--sa-cream)] mb-2">Eight Maintenance Management Functional Areas:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Develops and implements SOPs for maintenance management",
                  "Plans and conducts detailed maintenance inspections (MMIIP)",
                  "Assists commodity managers with desk-top procedures",
                  "Coordinates with G-3/S-3 on operational requirements",
                  "Coordinates shop safety programs",
                  "Manages training programs",
                  "Oversees equipment records",
                  "Interfaces with supply"
                ].map((area, idx) => (
                  <div key={idx} className="bg-[var(--sa-navy)]/40 rounded p-2 text-sm text-[var(--sa-cream)]/80 flex items-start gap-2">
                    <span className="text-[var(--sa-gold)] font-bold">{idx + 1}.</span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border border-green-500/30">
            <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Maintenance Officer
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Technical adviser to commander on commodity maintenance</li>
                <li>• Supervises maintenance/commodity operations</li>
                <li>• Plans workload based on level, priority, parts, personnel</li>
                <li>• Schedules, directs, and supervises maintenance</li>
                <li>• Inspects equipment periodically</li>
              </ul>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Ensures maintenance conforms to standards</li>
                <li>• Maintains staff responsibility for GCSS-MC</li>
                <li>• Plans and coordinates resource management</li>
                <li>• Coordinates repair parts support with Supply Officer</li>
                <li>• Analyzes maintenance information</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Commander's Battle Rhythm */}
      <CollapsibleSection title="Commander's Materiel Readiness Battle Rhythm" icon={Calendar} defaultOpen={true}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BattleRhythmCard
              frequency="WEEKLY"
              items={[
                "Review equipment status (degraded/deadline/safety deadline)",
                "Be briefed on unit's budget",
                "Review AMHS messages"
              ]}
              color="blue"
            />
            <BattleRhythmCard
              frequency="BI-WEEKLY"
              items={[
                "Attend readiness brief given by MMO/Supply",
                "Visit at least one maintenance commodity"
              ]}
              color="green"
            />
            <BattleRhythmCard
              frequency="MONTHLY"
              items={[
                "Monthly Serialized Inventory assigned/completed/adjusted",
                "Identify equipment excess/deficiencies to MSC level",
                "Commander's Inspection (pick section, walk lot, set up SL-3)"
              ]}
              color="amber"
            />
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              Questions to Ask
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• What is my equipment readiness rate? Is it accurate?</li>
                <li>• What is status of all Mission Essential Equipment (<Acronym title="Mission Essential Equipment">MEE</Acronym>)?</li>
                <li>• What equipment is deadlined, how long, and why?</li>
                <li>• What is the status of receiving repair parts?</li>
                <li>• If evacuated to higher level maintenance, what are they doing?</li>
              </ul>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Has MMO conducted follow-up with <Acronym title="Intermediate Maintenance Activity">IMA</Acronym> for evacuated items?</li>
                <li>• Is equipment operationally ready and capable?</li>
                <li>• What are the recurring maintenance issues/trends?</li>
                <li>• Are reconciliations and validations being conducted?</li>
                <li>• Are reconciliations/validations effective?</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* MMO Battle Rhythm */}
      <CollapsibleSection title="MMO Battle Rhythm (Example)" icon={Clock}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-3">Daily</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Validate Maintenance Production Report (MPR) and annotate</li>
                <li>• Validate parts requirements and review tasks</li>
                <li>• Check and approve Service Request (SR)</li>
                <li>• Review readiness and check AMHS</li>
                <li>• Review GCSS-MC Remedy tickets</li>
                <li>• Ensure commodities pick up parts from supply</li>
                <li>• Morning meeting/discuss daily events</li>
                <li>• Review Universal Work Queue</li>
                <li>• Coordinate with <Acronym title="Unit User Account Manager">UUAM</Acronym> on user accounts</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-3">Weekly</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Ensure commodities conduct IMA reconciliation</li>
                <li>• Layette inventory (for commodities)</li>
                <li>• Brief CO on readiness and maintenance</li>
                <li>• Conduct training</li>
                <li>• Reconciliation with commodities and supply</li>
                <li>• Review <Acronym title="Due and Status File">DASF</Acronym> to identify trends</li>
                <li>• Manage <Acronym title="Corrosion Repair Facility">CRF</Acronym> quotas and validate induction</li>
                <li>• Ensure commodities reconcile SECREP with RIP</li>
                <li>• Review one maintenance program</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-amber-400 mb-3">Monthly</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Internal inspections (if not quarterly)</li>
                <li>• Update <Acronym title="Publication Library Management System">PLMS</Acronym> libraries</li>
                <li>• Review new modifications from PLMS</li>
                <li>• ESR/MAL/MCBUL 3000 reconciliation</li>
                <li>• CRF inductions</li>
                <li>• Supervisors training</li>
                <li>• T&R evaluation on 0411s</li>
                <li>• <Acronym title="Product Quality Deficiency Report">PQDR</Acronym> review</li>
                <li>• Review disposition requests in GCSS-MC</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-3">Quarterly</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Validate Maintenance Production Report</li>
                <li>• Review equipment assigned to admin storage</li>
                <li>• Update <Acronym title="Urgency of Need Designator">UND</Acronym> authorization letter</li>
                <li>• Update <Acronym title="Using Unit Responsibility Items">UURI</Acronym> letter review</li>
                <li>• Assist with Type II Review (tools, chests, sets)</li>
                <li>• Conduct <Acronym title="Test, Measurement, and Diagnostic Equipment">TMDE</Acronym> validation</li>
                <li>• Special tools inventory and authorization letter</li>
                <li>• Policy review</li>
                <li>• Desktop/Turnover/SOP review</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Equipment Records */}
      <CollapsibleSection title="Equipment Records" icon={FileText}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Equipment Records</h4>
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Records showing inventory or maintenance actions completed:</p>
              <div className="space-y-2">
                <div className="bg-[var(--sa-navy)]/40 rounded p-2">
                  <p className="text-sm font-medium text-[var(--sa-cream)]">Hard Copy</p>
                  <p className="text-xs text-[var(--sa-cream)]/70">SL-3 inventories, Ordnance Vehicle Logbooks, Engineer Equipment Consolidated Log, Weapons Record Books</p>
                </div>
                <div className="bg-[var(--sa-navy)]/40 rounded p-2">
                  <p className="text-sm font-medium text-[var(--sa-cream)]">Electronic</p>
                  <p className="text-xs text-[var(--sa-cream)]/70">Maintenance History (GCSS-MC), Master Log (TCPT), Electronic Weapons Record Book (EWRB)</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Inventory Control Records</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Semi-annual inventory of SL-3 items minimum</li>
                <li>• Serialized component items dual accounted in GCSS-MC and SL-3 inventory</li>
                <li>• Establish in writing quantity of As Required (<Acronym title="As Required">AR</Acronym>) <Acronym title="Using Unit Responsibility Items">UURI</Acronym> annually</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Preventive Maintenance Records</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• <Acronym title="Preventive Maintenance Checks and Services">PMCS</Acronym> requirements and frequencies in TM or TI</li>
                <li>• Items requiring field level PMCS scheduled in GCSS-MC</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Other Records</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• <strong>Corrective Maintenance:</strong> All CM requirements input into GCSS-MC</li>
                <li>• <strong>Calibration Control:</strong> Items registered in GCSS-MC</li>
                <li>• <strong>Modification Control:</strong> Safety concerns, technology upgrades, configuration changes</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Preventive Maintenance */}
      <CollapsibleSection title="Preventive Maintenance" icon={CheckCircle}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">PMCS Principles</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Objective of PM is to reduce Corrective Maintenance (CM)</li>
              <li>• <Acronym title="Preventive Maintenance Checks and Services">PMCS</Acronym> requirements and frequencies in Technical Manuals (TM) or Technical Instructions (TI)</li>
              <li>• Items requiring field level PMCS scheduled in GCSS-MC</li>
              <li>• MMO and ROs establish crew/operator PMCS time periods in unit training plan (motor stables, weapons cleaning)</li>
              <li>• All maintenance starts when equipment owner/operator/crew/user identifies items that may require CM</li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-red-400 mb-3">Impact of Poor PMCS</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Leads to degradation of equipment</li>
              <li>• Increases corrective maintenance</li>
              <li>• Reduces service life of equipment</li>
              <li>• Reduces equipment availability</li>
            </ul>
          </div>

          <InfoCard variant="tip">
            <strong>Best Practice:</strong> Schedule PMCS in the unit annual training plan. Coordinate with S-3
            to establish time periods for operator/crew PMCS.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Supply and Maintenance Interface */}
      <CollapsibleSection title="Supply and Maintenance Interface" icon={RefreshCw}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-3">Validation</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• RO, supporting maintenance sections, and MMO/Chief ensure part requirements are still valid</li>
                <li>• Verify equipment status and priority are correct</li>
                <li>• <strong>Conducted every two weeks</strong></li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-3">Reconciliation</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Between requisitioning section, MMO/Chief, and Supply Officer</li>
                <li>• <strong>At least every two weeks</strong></li>
                <li>• Effectiveness of validation/reconciliation is the follow up</li>
              </ul>
            </div>
          </div>

          <InfoCard variant="success">
            <strong>Best Practices:</strong> Face-to-face validation/reconciliations are critical for checks and
            balances. Effectiveness is the goal, not just the conduct. Follow up on last week&apos;s reconciliation.
          </InfoCard>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Service Request Process</h4>
            <div className="space-y-3">
              {[
                { step: "1", text: "Equipment operators and mechanics create GCSS-MC Service Request (SR) to identify maintenance tasks, labor, and needed repair parts" },
                { step: "2", text: "Once validated, SR forwarded to unit Supply (Financial Approver) if item not on hand within PEB" },
                { step: "3", text: "Supply assigns funding data and approves requisition" },
                { step: "4", text: "Requisition forwarded to appropriate source of supply" },
                { step: "5", text: "Supply performs follow-up, update, or cancellation procedures until receipt" },
                { step: "6", text: "Supply performs aged shipment or discrepant shipment MRA procedures" }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--sa-gold)] text-[var(--sa-navy)] font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    {item.step}
                  </span>
                  <p className="text-sm text-[var(--sa-cream)]/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Sources of Supply */}
      <CollapsibleSection title="Sources of Supply" icon={Package}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Internal Sources</h4>
              <div className="space-y-3">
                <div className="bg-[var(--sa-navy)]/40 rounded p-3">
                  <p className="font-medium text-[var(--sa-cream)]"><Acronym title="Pre-Expended Bin">PEB</Acronym> / <Acronym title="Demand Supported Items">DSI</Acronym></p>
                  <p className="text-sm text-[var(--sa-cream)]/80 mt-1">
                    Enhance readiness and maintenance operations. CO must annually review and approve in writing all PEB items.
                  </p>
                </div>
                <div className="bg-[var(--sa-navy)]/40 rounded p-3">
                  <p className="font-medium text-[var(--sa-cream)]">Selective Interchange and Cannibalization</p>
                  <p className="text-sm text-[var(--sa-cream)]/80 mt-1">Per applicable policies</p>
                </div>
              </div>
              <InfoCard variant="tip" className="mt-3">
                Use GCSS-MC transaction history reports to identify requirements. Many units invest thousands in PEB/DSI
                that goes unused. If local <Acronym title="Supply Management Unit">SMU</Acronym> stocks it, you do not need it in your DSI.
              </InfoCard>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">External Sources</h4>
              <ol className="text-sm text-[var(--sa-cream)]/80 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)] font-bold">1.</span>
                  <span>Supply Management Unit (for MEF unit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)] font-bold">2.</span>
                  <span>Main or Sub Reparable Issue Point for Secondary Reparable exchanges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)] font-bold">3.</span>
                  <span>Direct Support Stock Control (SERVMART) - tools, fuel, housekeeping supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)] font-bold">4.</span>
                  <span>Wholesale sources (<Acronym title="Defense Logistics Agency">DLA</Acronym> or <Acronym title="Defense Reutilization Marketing System">DRMS</Acronym>)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)] font-bold">5.</span>
                  <span>Ammunition Supply Point</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)] font-bold">6.</span>
                  <span>Contracted services and supplies (local vendors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)] font-bold">7.</span>
                  <span>Temporary issue items at Consolidated Storage Program (IIF, UIF, CBRN)</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* GCSS-MC */}
      <CollapsibleSection title="GCSS-MC" icon={Database}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Purpose</h4>
            <p className="text-[var(--sa-cream)]/90">
              <Acronym title="Global Combat Support System - Marine Corps">GCSS-MC</Acronym> provides near-real time
              information improving asset visibility and accurate data. It enables faster, better decisions improving
              ability to increase combat effectiveness of the MAGTF.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border border-blue-500/30">
              <h4 className="font-semibold text-blue-400 mb-3">Installed Base (IB)</h4>
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">
                Central repository of information regarding all T/O&amp;E, <Acronym title="Supporting Establishment Supply and Retail Issue">SSRI</Acronym>,
                and Secondary Reparable items possessed by unit.
              </p>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Equipment assigned to Unit Commander and RO</li>
                <li>• Identifies to HQMC which commanders own equipment</li>
                <li>• Tracks controlled items based on TAMCN and serial number</li>
                <li>• Contains modification instructions, contracts, warranty info</li>
                <li>• Total Life Cycle Management and service history captured here</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border border-green-500/30">
              <h4 className="font-semibold text-green-400 mb-3">Perpetual Inventory (PI)</h4>
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">
                Location for incoming and outgoing repair parts and TAMCN items. Transitional area for supply/maintenance
                sections to pass items back and forth.
              </p>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Includes sub-inventories, layettes, and DSI</li>
                <li>• Location for adjustment transactions and disposal items</li>
                <li>• Records inventory balances after every receipt/issue</li>
              </ul>
            </div>
          </div>

          <InfoCard variant="danger">
            <strong>96-Hour Rule:</strong> Nothing should remain in Perpetual Inventory longer than 96 hours.
            MEE, Class IX repair parts, and SECREPS should not be in PI longer than 96 hours. Review on-hand quantity
            regularly—many personnel not de-briefing parts causes on-hand quantity to grow.
          </InfoCard>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Commander Account</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• CO/AO must register for certain features to work</li>
              <li>• Learning functions and navigation enables online briefings from Supply Officer</li>
              <li>• <Acronym title="Unit User Account Manager">UUAM</Acronym> will provide appropriate rights, roles, and responsibilities</li>
              <li>• Commander/Supervisory training available at <Acronym title="Materiel Readiness Training Center">MRTC</Acronym> at each MEF</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Equipment Availability and Readiness Reporting */}
      <CollapsibleSection title="Equipment Availability and Readiness Reporting" icon={BarChart3}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RatingCard
              rating="S"
              name="Supply"
              formula="Compares on hand to authorized"
              example="Authorized = 10, on-hand = 5, 'S' Rating = 50%"
            />
            <RatingCard
              rating="R"
              name="Readiness"
              formula="Compares possessed to deadlined"
              example="Possessed = 5, deadline = 2, 'R' Rating = 60%"
            />
            <RatingCard
              rating="MR"
              name="Materiel Readiness"
              formula="Compares possessed minus deadlined to authorized"
              example="Authorized = 10, possessed = 5, deadline = 2, 'MR' Rating = 30%"
            />
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Equipment Status Report (ESR)</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• GCSS-MC readiness report providing condition or status for operational decisions</li>
              <li>• Used for <Acronym title="Defense Readiness Reporting System - Marine Corps">DRRS-MC</Acronym> input</li>
              <li>• Crucial that GCSS-MC information be accurate and up to date</li>
              <li>• Reportable equipment and weapon systems found in current MCBUL 3000</li>
            </ul>
          </div>

          <InfoCard variant="warning">
            <strong>Commander Responsibilities:</strong> Ensure information is accurate. Ensure ROs reconcile and
            validate <Acronym title="Command Materiel Readiness">CMRs</Acronym>. Ensure that what SupO and RO say
            is on supply records is validated with spot checks.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Special Programs */}
      <CollapsibleSection title="Special Programs" icon={Shield}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border border-blue-500/30">
            <h4 className="font-semibold text-blue-400 mb-3">Corrosion Prevention and Control (CPAC)</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-3">
              Purpose: Extend total lifecycle of Marine Corps equipment. Enables MEFs to maintain more capable force
              while minimizing cost of equipment replacement due to corrosion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-[var(--sa-navy)]/40 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">Corrosion Repair Facility (CRF)</p>
                <p className="text-xs text-[var(--sa-cream)]/70 mt-1">
                  Centralized facility managed by MARCORSYSCOM CPAC Program Office. Repairs equipment in Categories 3 and 4.
                </p>
              </div>
              <div className="bg-[var(--sa-navy)]/40 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">Corrosion Service Team (CST)</p>
                <p className="text-xs text-[var(--sa-cream)]/70 mt-1">
                  CPAC program provides training and management tools. Allows commanders to assess corrosion condition.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border border-green-500/30">
            <h4 className="font-semibold text-green-400 mb-3">Enterprise Lifecycle Maintenance Planning (ELMP)</h4>
            <p className="text-sm text-[var(--sa-cream)]/80">
              Marine Corps&apos; depot maintenance program for ground equipment. <Acronym title="Marine Corps Logistics Command">MARCORLOGCOM</Acronym> provides
              quotas to operating forces and returns equipment after overhaul, repair, or rebuild. Depot maintenance
              essential to supporting/extending equipment&apos;s total life cycle.
            </p>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border border-amber-500/30">
            <h4 className="font-semibold text-amber-400 mb-3">Administrative Storage and Deadline</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-3">
              Provides cost effective means to store tactical ground equipment not required for near-term training or operations.
              Offers opportunity to defer maintenance, preserve resources, and focus on training and operational commitments.
            </p>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Administrative Storage programs implemented and monitored at MSC level</li>
              <li>• Administrative Deadline programs authorized by unit Commander</li>
              <li>• MMO responsible for management and oversight of both programs</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Maintenance Stand-Down</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Purpose: Pause in training to focus on maintenance requirements.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-[var(--sa-cream)] text-sm mb-1">When to Use:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Address low readiness</li>
                  <li>• Address specific issues</li>
                  <li>• Post inspection with trend indicators</li>
                  <li>• Post conduct of exercises/operations</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-[var(--sa-cream)] text-sm mb-1">Best Practices:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• TEEP the event and publish <Acronym title="Letter of Instruction">LOI</Acronym></li>
                  <li>• Not necessary to stand down entire unit</li>
                  <li>• Two phases: material identification, then maintenance production</li>
                  <li>• Separate phases by time for procurement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Aviation Maintenance */}
      <CollapsibleSection title="Aviation Maintenance" icon={Plane}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border border-[var(--sa-gold)]/30">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Key Principles</h4>
            <div className="space-y-3">
              <div className="bg-[var(--sa-navy)]/30 rounded p-3 border-l-4 border-[var(--sa-gold)]">
                <p className="text-[var(--sa-cream)] italic">
                  &quot;The center of gravity of a flying squadron is its maintenance department. Everything is possible
                  with good aircraft availability. Nothing is possible without it.&quot;
                </p>
              </div>
              <div className="bg-[var(--sa-navy)]/30 rounded p-3 border-l-4 border-amber-500">
                <p className="text-[var(--sa-cream)] italic">
                  &quot;There is no second chance in maintenance. Things must be done correctly the first time and
                  they must be done by the approved and established procedures.&quot;
                </p>
              </div>
              <div className="bg-[var(--sa-navy)]/30 rounded p-3 border-l-4 border-red-500">
                <p className="text-[var(--sa-cream)] italic">
                  &quot;No one has the authority to overrule the <Acronym title="Naval Aviation Maintenance Program">NAMP</Acronym> or
                  cut maintenance procedures/inspections, not even the CO. If the aircraft is down, it&apos;s down.
                  Only a waiver from NAVAIR authorizes a onetime flight.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Commander Focus Areas</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Train new Marines correctly</li>
                <li>• Give them power to stop when they see something unsafe</li>
                <li>• Get leadership out from behind desks to lead and supervise</li>
                <li>• Accountability is key at all ranks</li>
                <li>• Understand the data maintenance departments provide</li>
                <li>• Use data to make sound decisions on resource allocation</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Best Practices</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Ensure QAO, QA chief, and QA department are rock solid</li>
                <li>• Have OPSO brief Maintenance Department quarterly</li>
                <li>• Force staff to produce flight schedule by 1600 daily</li>
                <li>• Use <Acronym title="Marine Aviation Logistics Squadron">MALS</Acronym> for inspection assists often</li>
                <li>• Attend FOD walks often</li>
                <li>• Sit through maintenance meeting at least once a week</li>
                <li>• Visit night crew often</li>
                <li>• Read the NAMP</li>
              </ul>
            </div>
          </div>

          <InfoCard variant="danger">
            <strong>Flying squadron commanders who fail to focus on aircraft maintenance fail.</strong> Everything
            is possible with up aircraft, nothing is possible without them.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <CollapsibleSection title="Important Things to Know" icon={Lightbulb}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard variant="info">
            <strong>You Own the Readiness:</strong> Responsible for reporting accurate allowances, availability,
            condition, and readiness. Ensure information in GCSS-MC is accurate. Validate through spot checks.
          </InfoCard>
          <InfoCard variant="success">
            <strong>Reconciliation is Critical:</strong> Validation/reconciliation every two weeks. Face-to-face
            is best. Effectiveness is the goal, not just conduct. Follow up is essential.
          </InfoCard>
          <InfoCard variant="warning">
            <strong>PMCS Prevents Problems:</strong> Objective is to reduce corrective maintenance. Schedule in
            training plan. Poor PMCS degrades equipment and reduces service life.
          </InfoCard>
          <InfoCard variant="danger">
            <strong>Nothing Stays in PI Long:</strong> Nothing in Perpetual Inventory longer than 96 hours.
            MEE, Class IX, SECREPS all follow 96-hour rule.
          </InfoCard>
          <InfoCard variant="tip" className="md:col-span-2">
            <strong>Aviation Maintenance is the Center of Gravity:</strong> Everything possible with up aircraft.
            Nothing possible without them. No authority to cut maintenance procedures. Train Marines correctly.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Special Situations */}
      <CollapsibleSection title="Special Situations" icon={AlertCircle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-400 mb-2">Equipment Deadlined</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Determine why and how long</li>
              <li>• Verify parts on order</li>
              <li>• Ensure follow-up with IMA for evacuated items</li>
              <li>• Review for recurring issues/trends</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-amber-500">
            <h4 className="font-semibold text-amber-400 mb-2">Low Readiness Rates</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Consider maintenance stand-down</li>
              <li>• Identify material requirements first</li>
              <li>• Allow time for procurement</li>
              <li>• Then conduct maintenance production</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-400 mb-2">Task-Organized Units</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• RO from deploying unit or parent S-4/Supply Officer</li>
              <li>• Account for all assigned equipment</li>
              <li>• Return UIF equipment upon completion of deployment/exercise</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-400 mb-2">Pre-Deployment</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Identify Remain Behind Equipment</li>
              <li>• Work with Supply on FY close-out</li>
              <li>• Address required deficiencies</li>
              <li>• Ensure equipment records current</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Common Problems and Solutions */}
      <CollapsibleSection title="Common Problems and Solutions" icon={AlertTriangle}>
        <div className="space-y-4">
          {[
            {
              problem: "Equipment readiness inaccurate",
              solution: "Ensure ROs reconcile and validate CMRs. Conduct spot checks. Review GCSS-MC data accuracy."
            },
            {
              problem: "Parts sitting in Perpetual Inventory",
              solution: "Nothing should remain longer than 96 hours. Review on-hand quantity regularly. Ensure personnel de-brief parts properly."
            },
            {
              problem: "Recurring maintenance issues",
              solution: "Capture and report trends. Use DASF to identify trends during reconciliations. Address root causes."
            },
            {
              problem: "Validation/reconciliation ineffective",
              solution: "Face-to-face reconciliations. Follow up on previous reconciliation. Effectiveness is the goal, not just conduct."
            },
            {
              problem: "DSI/PEB with unused items",
              solution: "Use GCSS-MC transaction history reports to identify requirements. If local SMU stocks it, do not need it in DSI."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <p className="font-medium text-red-400 mb-2">Problem: {item.problem}</p>
              <p className="text-sm text-[var(--sa-cream)]/80">
                <span className="text-green-400 font-medium">Solution:</span> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Key Links */}
      <div className="bg-[var(--sa-navy)]/30 rounded-lg p-6 border border-[var(--sa-gold)]/30">
        <h2 className="text-xl font-semibold text-[var(--sa-gold)] mb-4 flex items-center gap-2">
          <ExternalLink className="w-5 h-5" />
          Key Links
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Training</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• Materiel Readiness Training Center (MRTC) at each MEF</li>
              <li>• Commander/Supervisory GCSS-MC training</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Systems</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• GCSS-MC</li>
              <li>• DRRS-MC</li>
              <li>• PLMS (Publication Library Management System)</li>
              <li>• TCPT (Transportation Capacity Planning Tool)</li>
              <li>• EWRB (Electronic Weapons Record Book)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• 2016 Commanders Materiel Readiness Handbook</li>
              <li>• Commanders Supply Management Handbook</li>
              <li>• MCO 4400.201 (GCSS-MC)</li>
              <li>• TM-4700-15/1 (Equipment Records)</li>
              <li>• MCBUL 3000 (Reportable Equipment)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
