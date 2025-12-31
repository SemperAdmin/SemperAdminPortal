"use client";

import { useState } from "react";
import {
  Target,
  ClipboardList,
  BarChart3,
  Users,
  Wrench,
  GraduationCap,
  CheckCircle2,
  Clock,
  FileText,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  Info,
  Database,
  Settings,
  Shield,
  Plane,
  Phone
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
    <div className="border border-[var(--sa-gold)]/30 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-[var(--sa-navy)]/50 hover:bg-[var(--sa-navy)]/70 transition-colors"
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
      {isOpen && (
        <div className="p-4 bg-[var(--sa-navy)]/20">
          {children}
        </div>
      )}
    </div>
  );
}

function ResourceLevelCard({
  level,
  title,
  description,
  thresholds
}: {
  level: string;
  title: string;
  description: string;
  thresholds: { level: string; range: string }[];
}) {
  const colors: Record<string, string> = {
    "P": "border-blue-500/50 bg-blue-900/20",
    "S": "border-green-500/50 bg-green-900/20",
    "R": "border-orange-500/50 bg-orange-900/20",
    "T": "border-purple-500/50 bg-purple-900/20"
  };

  return (
    <div className={`${colors[level] || "border-[var(--sa-gold)]/30 bg-[var(--sa-navy)]/30"} border rounded-lg p-4`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl font-bold text-[var(--sa-gold)]">{level}</span>
        <span className="font-semibold text-[var(--sa-cream)]">{title}</span>
      </div>
      <p className="text-sm text-[var(--sa-cream)]/80 mb-3">{description}</p>
      <div className="space-y-1">
        {thresholds.map((t, idx) => (
          <div key={idx} className="flex justify-between text-sm">
            <span className="text-[var(--sa-gold)]">{t.level}:</span>
            <span className="text-[var(--sa-cream)]/80">{t.range}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CLevelCard({
  level,
  description
}: {
  level: string;
  description: string;
}) {
  const colors: Record<string, string> = {
    "C-1": "border-green-500/50 bg-green-900/20",
    "C-2": "border-blue-500/50 bg-blue-900/20",
    "C-3": "border-yellow-500/50 bg-yellow-900/20",
    "C-4": "border-orange-500/50 bg-orange-900/20",
    "C-5": "border-gray-500/50 bg-gray-900/20"
  };

  return (
    <div className={`${colors[level] || "border-[var(--sa-gold)]/30 bg-[var(--sa-navy)]/30"} border rounded-lg p-3`}>
      <span className="font-bold text-[var(--sa-gold)]">{level}:</span>
      <span className="text-sm text-[var(--sa-cream)]/80 ml-2">{description}</span>
    </div>
  );
}

export function TrainingReadinessContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 rounded-lg p-8 border border-[var(--sa-gold)]/30">
        <div className="flex items-start gap-4">
          <Target className="w-12 h-12 text-[var(--sa-gold)] flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-[var(--sa-cream)] mb-2">Training and Readiness</h1>
            <p className="text-xl text-[var(--sa-cream)]/80">
              <Acronym title="Mission Essential Task List">METL</Acronym> development, T&amp;R management, and{" "}
              <Acronym title="Defense Readiness Reporting System - Marine Corps">DRRS-MC</Acronym> readiness reporting
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-[var(--sa-navy)]/30 rounded-lg p-6 border border-[var(--sa-gold)]/30">
        <h2 className="text-xl font-semibold text-[var(--sa-gold)] mb-4">Overview</h2>
        <div className="space-y-4 text-[var(--sa-cream)]/90">
          <p>
            Unit readiness reporting fulfills statutory requirements and enables crisis action planning, deliberate
            planning, and drives service resource decisions. As a commander, you are responsible for assessing your
            unit&apos;s capabilities to accomplish Mission Essential Tasks (<Acronym title="Mission Essential Tasks">METs</Acronym>) to
            specified conditions and standards.
          </p>
          <p>
            The report of any given unit is about available resources coupled with current capabilities. Your commander&apos;s
            assessment must be based on the organization&apos;s present state, not a future projection. Accurate and timely
            reporting is essential for the Marine Corps, Combatant Commands, and the Department of Defense to understand
            tactical, operational, and strategic capabilities.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• MCO 3000.13B (Readiness Reporting SOPs)</li>
              <li>• MCO 1553.3B (Unit Training Management)</li>
              <li>• MCO 3500.110 (<Acronym title="Mission Essential Task List">METL</Acronym> Development)</li>
              <li>• NAVMC 3500.14C (T&amp;R Program Manual)</li>
              <li>• Commanders Readiness Handbook</li>
            </ul>
          </div>
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key Concepts</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• <strong>Core Mission:</strong> What unit was designed for (C-Level)</li>
              <li>• <strong>Assigned Mission:</strong> Operational requirement assigned (A-Level)</li>
              <li>• <strong>Resource Levels:</strong> P, S, R, T (data-driven)</li>
              <li>• <strong>Mission Assessment:</strong> Commander judgment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Commander Requirements */}
      <CollapsibleSection title="Commander Requirements" icon={ClipboardList} defaultOpen={true}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-[var(--sa-gold)]">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Within 30 Days of Assuming Command
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-[var(--sa-cream)]">Review, Update, and Submit <Acronym title="Mission Essential Task List">METL</Acronym></p>
                <ul className="mt-1 text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Submit to next <Acronym title="Higher Headquarters">HHQ</Acronym> for approval</li>
                  <li>• Also required annually</li>
                  <li>• Also required within 15 days of assignment of new mission</li>
                  <li>• References: MCO 1553.3B, Para 4.b.(3)(a) and MCO 3500.110</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[var(--sa-cream)]">Readiness Officer Appointment</p>
                <ul className="mt-1 text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Appoint unit readiness officer/SNCO in writing</li>
                  <li>• Appoint authorized agents in writing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Training Requirements
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--sa-gold)]/30">
                    <th className="text-left py-2 text-[var(--sa-gold)]">Role</th>
                    <th className="text-left py-2 text-[var(--sa-gold)]">Training Required</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--sa-cream)]/80">
                  <tr className="border-b border-[var(--sa-gold)]/20">
                    <td className="py-2">Reporting Unit Commander</td>
                    <td className="py-2">MarineNet DRRS-MC policy course within 30 days</td>
                  </tr>
                  <tr className="border-b border-[var(--sa-gold)]/20">
                    <td className="py-2 align-top">Unit Readiness Officer/SNCO</td>
                    <td className="py-2">
                      <ul className="space-y-1">
                        <li>• MarineNet DRRS-MC policy course within 30 days</li>
                        <li>• <Acronym title="Netcentric Unit Status Report">NETUSR</Acronym> web-based training within 30 days</li>
                        <li>• Formal training from MARFOR-approved trainer within 90 days</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">Authorized Agents</td>
                    <td className="py-2">MarineNet DRRS-MC policy course within 30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* DRRS-MC System */}
      <CollapsibleSection title="Defense Readiness Reporting System - Marine Corps (DRRS-MC)" icon={Database} defaultOpen={true}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Purpose</h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                <Acronym title="Defense Readiness Reporting System - Marine Corps">DRRS-MC</Acronym> fulfills statutory
                readiness reporting requirements and provides calculated readiness information for force management decisions.
              </p>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Help Desk
              </h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Hours: Mon-Fri 0800-1800 EST</li>
                <li>• Toll Free: <span className="text-[var(--sa-gold)]">1-855-438-3777</span></li>
                <li>• NIPR: drrsmchelpdesk@saic.com</li>
                <li>• SIPR: drrsmcteam@hqmc.usmc.smil.mil</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border border-blue-500/30">
              <h4 className="font-semibold text-blue-400 mb-2">
                <Acronym title="Netcentric Unit Status Report - Marine Corps">NetUSR-MC</Acronym>
              </h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Web-based input tool for completing and submitting readiness reports. Covers resource and MET/mission
                assessments. Automatically calculates P, S, R levels and C-Level/A-Level.
              </p>
            </div>

            <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border border-green-500/30">
              <h4 className="font-semibold text-green-400 mb-2">
                <Acronym title="Marine Corps Readiness Analysis Tool">MCRAT</Acronym>
              </h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Executive output information system. Provides calculated readiness reporting information and statistics.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Types of Reports</h4>
            <div className="space-y-2">
              <div className="bg-[var(--sa-navy)]/30 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">Regular Report</p>
                <p className="text-sm text-[var(--sa-cream)]/80">
                  Created by majority of units. Includes: Basic Unit Info, Personnel, Equipment, CBRN resources,
                  Mission/MET Assessments, Commander Summary.
                </p>
              </div>
              <div className="bg-[var(--sa-navy)]/30 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">Intermediate Unit Report</p>
                <p className="text-sm text-[var(--sa-cream)]/80">
                  Created by regiment, group, division, wing. Subjective assessments for Personnel and Equipment.
                  Must consider subordinate unit reports that are <Acronym title="Operational Control">OPCON</Acronym>.
                </p>
              </div>
              <div className="bg-[var(--sa-navy)]/30 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">Installation/MARFOR Report</p>
                <p className="text-sm text-[var(--sa-cream)]/80">
                  Includes: Basic Unit Info, Mission/MET Assessments. No Personnel or Equipment assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Resource Levels */}
      <CollapsibleSection title="Resource Levels (P, S, R, T)" icon={BarChart3}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResourceLevelCard
              level="P"
              title="Personnel"
              description="Measures personnel strength against requirements"
              thresholds={[
                { level: "P-1", range: "100-90%" },
                { level: "P-2", range: "89-80%" },
                { level: "P-3", range: "79-65%" },
                { level: "P-4", range: "64-0%" }
              ]}
            />

            <ResourceLevelCard
              level="S"
              title="Equipment On-Hand/Supply"
              description="Measures equipment and supplies on-hand compared to authorized"
              thresholds={[
                { level: "S-1", range: "100-90%" },
                { level: "S-2", range: "89-80%" },
                { level: "S-3", range: "79-65%" },
                { level: "S-4", range: "64-0%" }
              ]}
            />

            <ResourceLevelCard
              level="R"
              title="Equipment Condition/Readiness"
              description="Measures equipment condition - possessed compared to deadlined"
              thresholds={[
                { level: "R-1", range: "100-90%" },
                { level: "R-2", range: "89-80%" },
                { level: "R-3", range: "79-65%" },
                { level: "R-4", range: "64-0%" }
              ]}
            />

            <ResourceLevelCard
              level="T"
              title="Training"
              description="Measures organization's ability to perform METs to standard"
              thresholds={[
                { level: "T-1", range: "100-85%" },
                { level: "T-2", range: "84-70%" },
                { level: "T-3", range: "69-55%" },
                { level: "T-4", range: "54-0%" }
              ]}
            />
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Calculation Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--sa-cream)]/80">
              <div>
                <p className="font-medium text-[var(--sa-cream)]">S-Level Calculation:</p>
                <p>On-hand ÷ Authorized</p>
                <p className="mt-1">Example: Authorized=10, On-hand=5</p>
                <p>Result: 50% = <span className="text-orange-400 font-medium">S-4</span></p>
              </div>
              <div>
                <p className="font-medium text-[var(--sa-cream)]">R-Level Calculation:</p>
                <p>(Possessed - Deadlined) ÷ Possessed</p>
                <p className="mt-1">Example: Possessed=5, Deadline=2</p>
                <p>Result: 60% = <span className="text-orange-400 font-medium">R-3</span></p>
              </div>
            </div>
          </div>

          <InfoCard variant="info">
            <strong>Flying Squadrons T-Level:</strong> T-Level is the lower of percentage of METs trained to standard
            OR Combat Leadership Assessment (per T&amp;R Manual).
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Mission Essential Tasks */}
      <CollapsibleSection title="Mission Essential Tasks (METs)" icon={Target}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Definition</h4>
            <p className="text-[var(--sa-cream)]/90">
              A task selected by a commander, deemed critical to mission accomplishment. Essential is defined as
              absolutely necessary, indispensable, critical.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Performance Standards</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h5 className="font-semibold text-blue-400 mb-2">Baseline Standards</h5>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Minimum required to be considered MET capable</li>
                  <li>• Units expected to meet and sustain through core training at home station</li>
                  <li>• If all Baseline met: <span className="text-yellow-400">Qualified Yes (Q)</span></li>
                  <li>• If any Baseline not met: <span className="text-red-400">No (N)</span></li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <h5 className="font-semibold text-purple-400 mb-2">Advanced Standards</h5>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Higher level for units with critical role in mission or OPLAN</li>
                  <li>• Normally require Service or <Acronym title="Marine Air-Ground Task Force">MAGTF</Acronym> support and exercises to achieve</li>
                  <li>• If all Baseline AND Advanced met: <span className="text-green-400">Yes (Y)</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">MET Assessment Results</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-16 text-center py-1 bg-green-900/50 text-green-400 rounded font-bold">Y</span>
                <span className="text-[var(--sa-cream)]/80">Yes - All Baseline and Advanced standards achieved</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-16 text-center py-1 bg-yellow-900/50 text-yellow-400 rounded font-bold">Q</span>
                <span className="text-[var(--sa-cream)]/80">Qualified Yes - All Baseline standards achieved</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-16 text-center py-1 bg-red-900/50 text-red-400 rounded font-bold">N</span>
                <span className="text-[var(--sa-cream)]/80">No - Any Baseline standard not achieved</span>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* C-Level and A-Level */}
      <CollapsibleSection title="C-Level and A-Level" icon={BarChart3}>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">C-Level (Core Mission)</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-3">
              Calculated C-Level equals lowest rating of P, S, R, or T levels against T/O&amp;E.
            </p>
            <div className="space-y-2">
              <CLevelCard level="C-1" description="Unit can undertake full wartime mission for which organized or designed" />
              <CLevelCard level="C-2" description="Unit can undertake most of wartime mission" />
              <CLevelCard level="C-3" description="Unit can undertake many but not all portions of wartime mission" />
              <CLevelCard level="C-4" description="Unit requires significant additional resources/training to undertake wartime mission" />
              <CLevelCard level="C-5" description="Unit undergoing service-directed resource action (not a readiness measurement)" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">A-Level (Assigned Mission)</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-3">
              Calculated A-Level equals lowest rating of P, S, R, or T levels against manning document and{" "}
              <Acronym title="Equipment Density List">EDL</Acronym>. Same definitions as C-Level but applied to assigned mission.
            </p>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Mission Capability Assessment Correlation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-green-400 mb-2">Yes (Y)</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Can accomplish mission to standards and prescribed conditions</li>
                  <li>• Majority (51%+) of METs assessed as Yes, remaining as Qualified Yes</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-yellow-400 mb-2">Qualified Yes (Q)</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Can accomplish mission to standard under most conditions</li>
                  <li>• Majority (51%+) of METs assessed as Qualified Yes, remaining as Yes</li>
                </ul>
              </div>
            </div>
            <InfoCard variant="warning" className="mt-4">
              <strong>Correlation Rule:</strong> C1/C2 units should report Yes or Qualified Yes.
              C3/C4/C5 units should report No. A No MET assessment normally precludes mission assessment of Yes or Qualified Yes.
            </InfoCard>
          </div>
        </div>
      </CollapsibleSection>

      {/* Commander's Summary and Override */}
      <CollapsibleSection title="Commander's Summary and Override" icon={FileText}>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Commander&apos;s Summary</h4>
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <p className="font-medium text-[var(--sa-cream)] mb-2">Required Comments:</p>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• C-Level and A-Level (all levels)</li>
                <li>• T-Level (Core and Assigned)</li>
                <li>• Mission capability assessments</li>
                <li>• When any level is not 1, select reason code</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 mt-4">
              <p className="font-medium text-[var(--sa-cream)] mb-2">Summary Should:</p>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Explain bottom line assessment of capability to carry out missions</li>
                <li>• Avoid forward-looking statements, hyperbole, posturing</li>
                <li>• Include statement on where unit is in life-cycle for context</li>
                <li>• Use plain language, avoid uncommon acronyms</li>
                <li>• Identify Commander&apos;s top readiness concerns</li>
                <li>• Describe readiness issues in sufficient detail to support corrective action</li>
                <li>• Identify what resources needed to get to C-1/C-2 and how long once received</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Commander&apos;s Override</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <h5 className="font-semibold text-red-400 mb-2">C-Level Override</h5>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• <strong>Requires General Officer waiver</strong> in chain of command</li>
                  <li>• Exercise cautious scrutiny to prevent elevated/unjustified assessment</li>
                  <li>• Subjective change does NOT change P, S, R, T levels</li>
                  <li>• Requires mandatory justification and GO name</li>
                </ul>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <h5 className="font-semibold text-yellow-400 mb-2">A-Level Override</h5>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Does NOT require General Officer approval</li>
                  <li>• Must be fully explained and justified</li>
                </ul>
              </div>
            </div>

            <InfoCard variant="danger" className="mt-4">
              <strong>Override Rules:</strong> Overriding more than one level requires strong scrutiny.
              Reported C/A-Level must correlate with capability assessment.
              <strong> Cannot use override to misrepresent readiness.</strong>
            </InfoCard>
          </div>
        </div>
      </CollapsibleSection>

      {/* Unit Readiness Boards */}
      <CollapsibleSection title="Unit Readiness Boards" icon={Users}>
        <div className="space-y-4">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Purpose</h4>
            <p className="text-[var(--sa-cream)]/90">
              Prepare readiness reports through board process. Structure as directed by commander.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Recommended Members</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Staff principals</li>
                <li>• <Acronym title="Chemical, Biological, Radiological, Nuclear">CBRN</Acronym> defense officer</li>
                <li>• Medical officer</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Requirements</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Maintain record of board meeting for each report</li>
                <li>• Retain records for <strong>12 months</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Reporting Occasions</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Submit readiness reports when:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Per established battle rhythm (typically monthly)",
                "Change of command",
                "Significant change in unit status",
                "Change in OPCON",
                "Major personnel or equipment changes"
              ].map((item, idx) => (
                <span key={idx} className="bg-[var(--sa-navy)]/50 px-3 py-1 rounded text-sm text-[var(--sa-cream)]/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* CBRN Readiness */}
      <CollapsibleSection title="CBRN Readiness" icon={Shield}>
        <div className="space-y-6">
          <InfoCard variant="warning">
            <strong><Acronym title="Chemical, Biological, Radiological, Nuclear">CBRN</Acronym> is a separate reporting requirement</strong> - does not automatically change C-Level.
          </InfoCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">CBRN Equipment (S-Level)</h4>
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">
                Aggregated average of serviceable CBRN equipment possessed divided by required.
              </p>
              <p className="text-sm text-[var(--sa-cream)]/70">
                Five areas: individual protection, detection, decontamination, radiation, medical
              </p>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">CBRN Training (T-Level)</h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Percentage of METs trained to standard under CBRN conditions in past 12 months.
              </p>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">S-6 Reporting</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Use for non-deployed units without CBRN equipment</li>
              <li>• Use when equipment is in supporting consolidated storage facility</li>
              <li>• Reason code <Acronym title="Equipment Not Measured">SNM</Acronym> (Equipment Not Measured) auto-populated</li>
            </ul>
          </div>

          <InfoCard variant="info">
            <strong>CBRN Calculator:</strong> IAW MARADMIN 143/17, all units use CBRN defense calculator.
            Provides uniform means to evaluate CBRN defense readiness.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Readiness Officer Responsibilities */}
      <CollapsibleSection title="Readiness Officer Responsibilities" icon={Settings}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Turnover Binder (Best Practice)</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Maintain current binder containing:</p>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• MCO 3000.13B and Commanders Readiness Handbook</li>
              <li>• MARADMINs/AMHS messages pertaining to DRRS (MCBULs 5400, 3000, 3120)</li>
              <li>• Unit SOPs (Commander&apos;s Significant Notification Events)</li>
              <li>• <Acronym title="Inspector General of the Marine Corps">IGMC</Acronym> Functional Area Checklist - Unit Readiness 3000</li>
              <li>• Unit Readiness Officer and Authorized Agent Appointment Letters</li>
              <li>• DRRS-MC Training Certificates</li>
              <li>• 12 months of Readiness Board records</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Report Verification</h4>
            <InfoCard variant="info">
              Higher headquarters <strong>cannot change</strong> subordinate unit reports.
            </InfoCard>
            <div className="mt-3">
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">When errors discovered:</p>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• <Acronym title="Higher Headquarters">HHQ</Acronym> returns report with comment</li>
                <li>• Subordinate submits corrected report within <strong>24 hours</strong></li>
              </ul>
            </div>
            <InfoCard variant="tip" className="mt-3">
              <strong>Best Practice:</strong> Send unclassified email to subordinate unit needing correction
              (system is on classified network).
            </InfoCard>
          </div>
        </div>
      </CollapsibleSection>

      {/* Aviation-Specific: Combat Leadership */}
      <CollapsibleSection title="Aviation-Specific: Combat Leadership" icon={Plane}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Combat Leadership Assessment</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Additional Core Training Level assessment for aviation units</li>
              <li>• Advanced, specialized flight leadership qualifications</li>
              <li>• Enables unit to fully conduct/manage aviation operations</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Combat Leadership <Acronym title="Combat Mission-Capable Rate">CMMR</Acronym></h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Each community has objective standard</li>
              <li>• Full squadron and squadron (-) configurations</li>
              <li>• Outlined in respective T&amp;R manuals</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Calculation Process</h4>
            <ol className="text-sm text-[var(--sa-cream)]/80 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">1.</span>
                <span>Pull T&amp;R event completion data from <Acronym title="Marine Sierra Hotel Aviation Readiness Program">MSHARP</Acronym></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">2.</span>
                <span>Total combat leadership qualified aircrew per category</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">3.</span>
                <span>Divide trained categories by total categories</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">4.</span>
                <span>Compare to T&amp;R Program Manual Table 7-4</span>
              </li>
            </ol>
          </div>

          <InfoCard variant="warning">
            <strong>Final T-Level for Flying Squadrons:</strong> Lower of DRRS-MC calculated T-Level
            and Combat Leadership assessment.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <div className="bg-[var(--sa-navy)]/40 rounded-lg p-6 border border-[var(--sa-gold)]/30">
        <h2 className="text-xl font-semibold text-[var(--sa-gold)] mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Important Things to Know
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard variant="info">
            <strong>Readiness Report is Your Assessment</strong>
            <p className="mt-1 text-sm">
              Reflects present state, not future projection. P, S, R, T levels are data-driven.
              T-Level and mission assessment require command judgment.
            </p>
          </InfoCard>

          <InfoCard variant="warning">
            <strong>C-Level Override Requires GO Approval</strong>
            <p className="mt-1 text-sm">
              Cannot subjectively change C-Level without General Officer waiver.
              Prevents inflated readiness reporting.
            </p>
          </InfoCard>

          <InfoCard variant="danger">
            <strong>Accuracy is Critical</strong>
            <p className="mt-1 text-sm">
              Information drives force management decisions and enables crisis action planning.
              Inaccurate reporting misleads decision-makers.
            </p>
          </InfoCard>

          <InfoCard variant="tip">
            <strong>Higher HQ Cannot Change Your Report</strong>
            <p className="mt-1 text-sm">
              They can return it with comment for correction. You submit corrected report within 24 hours.
            </p>
          </InfoCard>
        </div>
      </div>

      {/* Special Situations */}
      <CollapsibleSection title="Special Situations" icon={AlertCircle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Task-Organized Units</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Gaining and providing units adjust personnel quantities</li>
              <li>• Coordinate to avoid double counting</li>
              <li>• Use manning document for structure strength (no <Acronym title="Total Force Structure Management System">TFSMS</Acronym> structure)</li>
              <li>• Remarks explaining adjustments remain until personnel returned</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Non-Deployable Personnel</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Must be correctly categorized per MCO 3000.13B</li>
              <li>• Impact P-Level calculation</li>
              <li>• Document in remarks</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Assigned Mission Different from Core</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Comment on assigned mission separately from core</li>
              <li>• Differentiation is important</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Intermediate Commands</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Must consider subordinate unit reports <Acronym title="Operational Control">OPCON</Acronym> to them</li>
              <li>• Reflect ability to provide cognizance over subordinate shortfalls</li>
              <li>• Do not simply repeat subordinate data and remarks</li>
              <li>• Highlight subordinate issues and actions taken to assist</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Common Problems and Solutions */}
      <CollapsibleSection title="Common Problems and Solutions" icon={Lightbulb}>
        <div className="space-y-4">
          {[
            {
              problem: "C-Level does not accurately reflect capability",
              solution: "Use Commander's Override with GO approval and mandatory justification. Ensure override correlates with mission capability assessment."
            },
            {
              problem: "Equipment reported incorrectly",
              solution: "Reconcile between supply, commodity managers, and MMO. Validate CMRs. Conduct spot checks to verify."
            },
            {
              problem: "MET assessment unclear",
              solution: "Review Baseline and Advanced standards. Ensure T&R events documented in MSHARP. Override individual standards with justification if needed."
            },
            {
              problem: "Task-organized personnel double-counted",
              solution: "Coordinate between gaining and providing units. Document adjustments in remarks."
            },
            {
              problem: "Readiness report returned for correction",
              solution: "Submit corrected report within 24 hours. Review error to prevent recurrence."
            },
            {
              problem: "Remarks do not explain readiness",
              solution: "Identify equipment and personnel shortfalls and impact. Provide estimate of resources and time to achieve Level 1/2. Use plain language."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <p className="font-medium text-red-400 mb-2">Problem: {item.problem}</p>
              <p className="text-[var(--sa-cream)]/80">
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
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Systems</h3>
            <ul className="text-sm space-y-2">
              <li className="text-[var(--sa-cream)]/70">
                DRRS-MC (SIPR): drrsmc.hqmc.usmc.smil.mil
              </li>
              <li className="text-[var(--sa-gold)]">
                Help Desk: 1-855-438-3777
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• MCO 3000.13B (Readiness Reporting SOPs)</li>
              <li>• MCO 1553.3B (Unit Training Mgmt)</li>
              <li>• MCO 3500.110 (<Acronym title="Mission Essential Task List">METL</Acronym> Development)</li>
              <li>• NAVMC 3500.14C (T&amp;R Program)</li>
              <li>• Commanders Readiness Handbook</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              HQMC Contacts
            </h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• Readiness Branch Head: 703-571-1064</li>
              <li>• Systems Section: 703-571-1031/1032/1018</li>
              <li>• Readiness Section: 703-571-1033/1029</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
