"use client";

import { useState } from "react";
import { FAMILY_URLS, MENTAL_HEALTH_URLS, MCO_URLS } from "../../data/references";
import {
  Scale,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  Info,
  Clock,
  Shield,
  Gavel,
  FileText,
  Users,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  Phone,
  Heart,
  UserCheck,
  ClipboardList,
  Building,
  Lock
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

function DisciplineOptionCard({
  level,
  title,
  description,
  examples
}: {
  level: number;
  title: string;
  description: string;
  examples: string[];
}) {
  const colors = [
    "border-green-500/50 bg-green-900/20",
    "border-blue-500/50 bg-blue-900/20",
    "border-amber-500/50 bg-amber-900/20",
    "border-orange-500/50 bg-orange-900/20",
    "border-red-500/50 bg-red-900/20"
  ];

  return (
    <div className={`rounded-lg p-4 border ${colors[level - 1] || colors[0]}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-bold text-[var(--sa-gold)] bg-[var(--sa-navy)] px-2 py-1 rounded">Level {level}</span>
        <h4 className="font-semibold text-[var(--sa-cream)]">{title}</h4>
      </div>
      <p className="text-sm text-[var(--sa-cream)]/80 mb-2">{description}</p>
      <ul className="text-xs text-[var(--sa-cream)]/70 space-y-1">
        {examples.map((example, idx) => (
          <li key={idx}>• {example}</li>
        ))}
      </ul>
    </div>
  );
}

function CourtsMartialCard({
  type,
  description,
  authority,
  punishments
}: {
  type: string;
  description: string;
  authority: string;
  punishments: string[];
}) {
  return (
    <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border border-[var(--sa-gold)]/20">
      <h4 className="font-semibold text-[var(--sa-gold)] mb-2">{type}</h4>
      <p className="text-sm text-[var(--sa-cream)]/80 mb-2">{description}</p>
      <p className="text-xs text-[var(--sa-cream)]/70 mb-2"><strong>Authority:</strong> {authority}</p>
      <div className="text-xs text-[var(--sa-cream)]/70">
        <strong>Punishments:</strong>
        <ul className="mt-1 space-y-0.5">
          {punishments.map((p, idx) => (
            <li key={idx}>• {p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function LegalDisciplineContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 rounded-lg p-8 border border-[var(--sa-gold)]/30">
        <div className="flex items-start gap-4">
          <Scale className="w-12 h-12 text-[var(--sa-gold)] flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-[var(--sa-cream)] mb-2">Legal and Discipline</h1>
            <p className="text-xl text-[var(--sa-cream)]/80">
              <Acronym title="Uniform Code of Military Justice">UCMJ</Acronym> authority, NJP, administrative actions, legal services, and victim support
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-[var(--sa-navy)]/30 rounded-lg p-6 border border-[var(--sa-gold)]/30">
        <h2 className="text-xl font-semibold text-[var(--sa-gold)] mb-4">Overview</h2>
        <div className="space-y-4 text-[var(--sa-cream)]/90">
          <p>
            Discipline is the foundation of military effectiveness. As commander, you are responsible for maintaining
            good order and discipline within your unit while ensuring fairness and due process. You have multiple tools
            available ranging from informal counseling to courts-martial, and you must select the appropriate response
            based on the nature of the offense, the Marine&apos;s record, and the needs of the command.
          </p>
          <p>
            Your <Acronym title="Staff Judge Advocate">SJA</Acronym> is your primary advisor on legal matters. The{" "}
            <Acronym title="Victims' Legal Counsel Organization">VLCO</Acronym> provides independent legal representation
            to victims of crimes. Understanding your authorities, responsibilities, and the available resources enables
            you to maintain discipline while treating Marines fairly.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• MCO P5800.16A (<Acronym title="Marine Corps Manual for Legal Administration">LEGADMINMAN</Acronym>)</li>
              <li>• Manual for Courts-Martial</li>
              <li>• MCO P1900.16 (Separations and Retirement Manual)</li>
            </ul>
          </div>
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key Principles</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• <strong>Discipline Spectrum:</strong> Select appropriate response</li>
              <li>• <strong>Due Process:</strong> Fairness in all proceedings</li>
              <li>• <strong>Consult SJA:</strong> Before taking disciplinary action</li>
              <li>• <strong>Support Marines:</strong> Monitor well-being after discipline</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Commander's Disciplinary Authority */}
      <CollapsibleSection title="Commander's Disciplinary Authority" icon={Gavel} defaultOpen={true}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">UCMJ Authority</h4>
            <p className="text-[var(--sa-cream)]/90 mb-4">
              Commanders have authority under the <Acronym title="Uniform Code of Military Justice">UCMJ</Acronym> to
              maintain good order and discipline. Key articles supporting this authority:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[var(--sa-navy)]/40 rounded p-3 border-l-4 border-blue-500">
                <p className="font-medium text-blue-400">Article 91</p>
                <p className="text-sm text-[var(--sa-cream)]/80 mt-1">
                  Insubordinate Conduct Toward Warrant Officer, NCO, or PO. Provides punishment for insubordinate
                  conduct and supports NCO/PO authority.
                </p>
              </div>
              <div className="bg-[var(--sa-navy)]/40 rounded p-3 border-l-4 border-green-500">
                <p className="font-medium text-green-400">Article 92</p>
                <p className="text-sm text-[var(--sa-cream)]/80 mt-1">
                  Failure to Obey Order or Regulation. Provides punishment for failure to obey lawful orders—applies
                  to both written and verbal orders.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Hierarchy of Disciplinary Options</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-4">From least to most severe:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <DisciplineOptionCard
                level={1}
                title="Informal Counseling"
                description="Verbal correction, training and mentorship"
                examples={["Verbal correction", "Training and mentorship", "No permanent record"]}
              />
              <DisciplineOptionCard
                level={2}
                title="Extra Military Instruction (EMI)"
                description="Additional training for Marines needing development"
                examples={["Commanders may delegate to NCOs/POs", "Not punishment, but training tool", "Per Manual for Courts-Martial"]}
              />
              <DisciplineOptionCard
                level={3}
                title="Administrative Actions"
                description="Documented counseling affecting record"
                examples={["Page 11 entries", "6105 counseling (affects reenlistment)", "Adverse fitness reports"]}
              />
              <DisciplineOptionCard
                level={4}
                title="Non-Judicial Punishment (NJP)"
                description="Article 15 proceeding at commander's discretion"
                examples={["Marine may refuse and demand court-martial", "Reduction, forfeiture, restriction, extra duty"]}
              />
              <DisciplineOptionCard
                level={5}
                title="Courts-Martial"
                description="Formal military trial proceedings"
                examples={["Summary, Special, or General", "Requires convening authority", "Most serious offenses"]}
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Non-Judicial Punishment */}
      <CollapsibleSection title="Non-Judicial Punishment (NJP)" icon={FileText} defaultOpen={true}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Purpose</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Correct minor offenses without court-martial</li>
                <li>• Maintain good order and discipline</li>
                <li>• Provide swift, fair, and visible justice</li>
              </ul>
            </div>
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Commander Authority</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• O-3 and above have NJP authority</li>
                <li>• Some commanders may delegate to subordinates</li>
                <li>• Consult SJA on authority questions</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">NJP Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {[
                { step: "1", title: "Preliminary Inquiry", desc: "Gather facts, determine if NJP appropriate, consult SJA" },
                { step: "2", title: "Notification", desc: "Inform Marine of alleged offense(s), advise of rights" },
                { step: "3", title: "Hearing", desc: "Marine presents defense, commander considers evidence" },
                { step: "4", title: "Punishment", desc: "If warranted, appropriate to offense and Marine's record" },
                { step: "5", title: "Appeal", desc: "Marine may appeal to next superior commander" }
              ].map((item) => (
                <div key={item.step} className="bg-[var(--sa-navy)]/30 rounded p-3 text-center">
                  <div className="w-8 h-8 rounded-full bg-[var(--sa-gold)] text-[var(--sa-navy)] font-bold flex items-center justify-center mx-auto mb-2">
                    {item.step}
                  </div>
                  <p className="font-medium text-[var(--sa-cream)] text-sm">{item.title}</p>
                  <p className="text-xs text-[var(--sa-cream)]/70 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <InfoCard variant="danger">
            <strong>Risk Awareness:</strong> First 90 days following NJP is a high-risk period for suicide-related
            behavior. A fall from grace, whether real or perceived, is a warning sign. Monitor Marine&apos;s well-being
            and ensure connection to support resources.
          </InfoCard>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Post-NJP Mitigation Strategies
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Encourage follow-up with <Acronym title="Community Counseling Program">CCP</Acronym>, <Acronym title="Substance Abuse Program">SAP</Acronym>, <Acronym title="Military and Family Life Counselor">MFLC</Acronym>, or chaplain</li>
                <li>• Conduct monthly counseling</li>
              </ul>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Update <Acronym title="Force Preservation Council">FPC</Acronym> and <Acronym title="Command Individual Risk and Resilience Assessment System">CIRRAS</Acronym></li>
                <li>• Connect Marine with <Acronym title="Unit Transition Coordinator">UTC</Acronym> if approaching <Acronym title="End of Active Service">EAS</Acronym></li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Administrative Actions */}
      <CollapsibleSection title="Administrative Actions" icon={ClipboardList}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Page 11 Entries</h4>
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Document counseling and create official record.</p>
              <div className="text-xs text-[var(--sa-cream)]/70">
                <p className="font-medium mb-1">Types:</p>
                <ul className="space-y-0.5">
                  <li>• Positive (commendations)</li>
                  <li>• Neutral (administrative facts)</li>
                  <li>• Adverse (misconduct/deficiency)</li>
                </ul>
              </div>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-400 mb-2">6105 Counseling</h4>
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">
                Adverse documented counseling per Marine Corps Separations Manual.
              </p>
              <div className="text-xs text-[var(--sa-cream)]/70">
                <p className="font-medium mb-1">Impact:</p>
                <ul className="space-y-0.5">
                  <li>• Affects reenlistment eligibility</li>
                  <li>• Considered in promotion boards</li>
                  <li>• May support admin separation</li>
                </ul>
              </div>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-400 mb-2">Adverse Fitness Reports</h4>
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Document performance deficiencies.</p>
              <div className="text-xs text-[var(--sa-cream)]/70">
                <p className="font-medium mb-1">Considerations:</p>
                <ul className="space-y-0.5">
                  <li>• Must be accurate and fair</li>
                  <li>• Marine may provide statement</li>
                  <li>• Significant career impact</li>
                </ul>
              </div>
            </div>
          </div>

          <InfoCard variant="info">
            <strong>6105 Process:</strong> Marine must acknowledge receipt and may submit rebuttal. Entry becomes
            part of permanent record and is considered in reenlistment and promotion decisions.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Courts-Martial */}
      <CollapsibleSection title="Courts-Martial" icon={Building}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CourtsMartialCard
              type="Summary Court-Martial"
              description="Simplest form for minor offenses"
              authority="One officer serves as judge"
              punishments={["Limited punishments", "Confinement up to 30 days", "Forfeiture of 2/3 pay for 1 month"]}
            />
            <CourtsMartialCard
              type="Special Court-Martial"
              description="Intermediate level for intermediate offenses"
              authority="Military judge and/or panel"
              punishments={["Bad Conduct Discharge", "Confinement up to 12 months", "Forfeitures"]}
            />
            <CourtsMartialCard
              type="General Court-Martial"
              description="Most serious level for serious offenses"
              authority="Military judge and/or panel"
              punishments={["Any lawful punishment", "Including death for certain offenses", "Dishonorable Discharge"]}
            />
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Commander Role</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Refer charges to appropriate level</li>
              <li>• Convening authority for certain courts-martial</li>
              <li>• <strong>Cannot influence proceedings after referral</strong></li>
              <li>• Coordinate with SJA throughout</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border border-amber-500/30">
            <h4 className="font-semibold text-amber-400 mb-3 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Marine in Brig Awaiting Court-Martial
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-[var(--sa-cream)] mb-2">Commander Responsibilities:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Send representative regularly to check on Marine&apos;s well-being</li>
                  <li>• Consider using chaplain as representative</li>
                  <li>• <Acronym title="Community Counseling Program">CCP</Acronym> counselor can meet with Marine in brig if available</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-[var(--sa-cream)] mb-2">Planning:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Plan for smooth transition if discharged or reintegration if retained</li>
                  <li>• Update <Acronym title="Force Preservation Council">FPC</Acronym> and <Acronym title="Command Individual Risk and Resilience Assessment System">CIRRAS</Acronym></li>
                  <li>• Connect to Marine for Life Network if discharge confirmed</li>
                </ul>
              </div>
            </div>
            <InfoCard variant="danger" className="mt-3">
              First 90 days following legal action is high-risk period. Ensure <Acronym title="Transition Readiness Program">TRP</Acronym> completion
              if discharge suspected or confirmed.
            </InfoCard>
          </div>
        </div>
      </CollapsibleSection>

      {/* Legal Services */}
      <CollapsibleSection title="Legal Services" icon={Users}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
                <Scale className="w-4 h-4" />
                Staff Judge Advocate (SJA)
              </h4>
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Primary legal advisor to commander.</p>
              <p className="font-medium text-[var(--sa-cream)] text-sm mb-1">Advises on:</p>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• UCMJ matters</li>
                <li>• Administrative actions</li>
                <li>• Rules of engagement</li>
                <li>• Operational law</li>
                <li>• Administrative separations</li>
                <li>• Investigations</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Legal Assistance</h4>
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Services for personal legal matters.</p>
              <p className="font-medium text-[var(--sa-cream)] text-sm mb-1">Services:</p>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Wills and powers of attorney</li>
                <li>• Consumer protection issues</li>
                <li>• Family law guidance</li>
              </ul>
              <p className="text-sm text-[var(--sa-cream)]/80 mt-2">
                Available at <Acronym title="Legal Services Support Sections">LSSS</Acronym> at no cost to service members.
              </p>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border border-purple-500/30">
            <h4 className="font-semibold text-purple-400 mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Victims&apos; Legal Counsel Organization (VLCO)
            </h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-3">
              Established 1 November 2013 (MARADMIN 583/13) to provide legal advice, counseling, and representation
              to victims of crimes under <Acronym title="Uniform Code of Military Justice">UCMJ</Acronym>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-medium text-[var(--sa-cream)] text-sm mb-1">Scope:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Victims of any crime under UCMJ</li>
                  <li>• Sexual assault</li>
                  <li>• Domestic violence</li>
                  <li>• Hazing</li>
                  <li>• Other UCMJ offenses</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-[var(--sa-cream)] text-sm mb-1">Services:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Overview of military justice system</li>
                  <li>• Ensure victims informed of rights</li>
                  <li>• Obtaining restraining orders and MPOs</li>
                  <li>• Restricted vs Unrestricted reporting options</li>
                  <li>• Testimonial or transactional immunity guidance</li>
                </ul>
              </div>
            </div>

            <InfoCard variant="tip">
              <strong>Key Points:</strong> VLC are highly qualified judge advocates certified by the Judge Advocate
              General of the Navy. Communications between victims and VLC are confidential. VLC solely represent
              victim&apos;s interests, even if different from government&apos;s interest. VLCO is autonomous and independent
              of convening authorities and SJAs.
            </InfoCard>

            <div className="mt-4">
              <p className="font-medium text-[var(--sa-cream)] text-sm mb-2">Locations:</p>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Four regional offices aligned with LSSS (Camp Pendleton, Camp Lejeune, MCB Quantico, Camp Butler)
                plus additional offices at MCRD Parris Island, MCAS Cherry Point, MCAGCC 29 Palms, MCAS Miramar,
                and MCB Kaneohe Bay.
              </p>
              <p className="text-xs text-[var(--sa-cream)]/70 mt-2">Reference: MCO P5800.16A, Chapter 6</p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Military Protective Orders */}
      <CollapsibleSection title="Military Protective Orders (MPO)" icon={Shield}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Purpose</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Protect victims of crimes</li>
                <li>• Prevent contact between alleged offender and victim</li>
                <li>• Can address living quarters, duty location, communication</li>
              </ul>
            </div>
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Authority</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Commander issues MPO</li>
                <li>• Available with Unrestricted Reports</li>
                <li>• Not available with Restricted Reports (unless converted)</li>
              </ul>
            </div>
          </div>

          <InfoCard variant="warning">
            <strong>Execute MPO</strong> if victim desires or is assigned to same unit, duty location, or living
            quarters as reported offender. Coordinate with SJA and monitor compliance.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Administrative Separation */}
      <CollapsibleSection title="Administrative Separation" icon={UserCheck}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Honorable Discharge</h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Satisfactory service. Most favorable characterization.
              </p>
            </div>
            <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-amber-400 mb-2">General Discharge</h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Under Honorable Conditions. Satisfactory service with some deficiencies.
              </p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">Other Than Honorable (OTH)</h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Significant departure from expected conduct. May affect VA benefits.
              </p>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Common Grounds for Separation</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Pattern of misconduct",
                "Commission of serious offense",
                "Drug abuse",
                "Failure to meet weight/fitness standards",
                "Unsatisfactory performance",
                "Personality disorder"
              ].map((ground) => (
                <div key={ground} className="bg-[var(--sa-navy)]/40 rounded p-2 text-sm text-[var(--sa-cream)]/80">
                  • {ground}
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--sa-cream)]/70 mt-2">Reference: MCO P1900.16</p>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Separation Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[var(--sa-navy)]/30 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">1. Initiation</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 mt-1 space-y-0.5">
                  <li>• Commander recommends separation</li>
                  <li>• Notification to Marine</li>
                  <li>• Right to counsel</li>
                </ul>
              </div>
              <div className="bg-[var(--sa-navy)]/30 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">2. Board (if required)</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 mt-1 space-y-0.5">
                  <li>• Some separations require admin board</li>
                  <li>• Marine may present evidence</li>
                  <li>• Board makes recommendation</li>
                </ul>
              </div>
              <div className="bg-[var(--sa-navy)]/30 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">3. Decision</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 mt-1 space-y-0.5">
                  <li>• Separation authority decides</li>
                  <li>• Characterization determined</li>
                </ul>
              </div>
            </div>
          </div>

          <InfoCard variant="info">
            <strong>Transition Support:</strong> Confirmation of discharge not required to start{" "}
            <Acronym title="Transition Readiness Program">TRP</Acronym>. Connect Marine with{" "}
            <Acronym title="Unit Transition Coordinator">UTC</Acronym> as soon as possible. Ensure all mandated
            counseling, workshops, and resources received. Connect to Marine for Life Network and InTransition
            for mental health resources.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Investigations */}
      <CollapsibleSection title="Investigations" icon={ClipboardList}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Command Investigation</h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Preliminary inquiry into incident. Commander appoints investigating officer. Written report with
                findings and recommendations.
              </p>
            </div>
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">NCIS Investigation</h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Criminal matters. Sexual assault (mandatory <Acronym title="Military Criminal Investigative Organization">MCIO</Acronym> involvement).
                Serious offenses.
              </p>
            </div>
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Administrative Investigation</h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Non-criminal matters. Property loss. Line of duty determinations.
              </p>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Commander Role</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Appoint investigating officers</li>
              <li>• Review investigation reports</li>
              <li>• Take appropriate action based on findings</li>
              <li>• <strong>DO NOT conduct internal command-directed investigation of sexual assault</strong></li>
            </ul>
          </div>

          <InfoCard variant="tip">
            Work with experts (<Acronym title="Sexual Assault Prevention and Response">SAPR</Acronym>,{" "}
            <Acronym title="Equal Opportunity">EO</Acronym>, SJA, NCIS) regarding investigations.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* NCO/PO Authority */}
      <CollapsibleSection title="NCO/PO Authority" icon={Users}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">UCMJ Articles Supporting NCO Authority</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[var(--sa-navy)]/40 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">Article 91</p>
                <p className="text-sm text-[var(--sa-cream)]/80 mt-1">
                  Protects NCO/PO authority. Punishment for insubordinate conduct toward NCO/PO.
                </p>
              </div>
              <div className="bg-[var(--sa-navy)]/40 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">Article 92</p>
                <p className="text-sm text-[var(--sa-cream)]/80 mt-1">
                  Supports enforcement of orders. NCO/PO may issue lawful orders.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Delegated Authority</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Commander may delegate certain authorities</li>
                <li>• Extra Military Instruction</li>
                <li>• Dependent on Service doctrine, position, and predetermined responsibilities</li>
              </ul>
            </div>
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Apprehension Authority</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• UCMJ authorizes NCO/PO to apprehend individuals</li>
                <li>• Must be in official performance of duties</li>
                <li>• Individual must appear to be in violation of UCMJ</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <CollapsibleSection title="Important Things to Know" icon={Lightbulb}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard variant="info">
            <strong>SJA is Your Advisor:</strong> Consult before taking disciplinary action. Get advice on
            appropriate response to misconduct. Understand your authority and options.
          </InfoCard>
          <InfoCard variant="info">
            <strong>Discipline is a Spectrum:</strong> Select appropriate response to offense. Consider Marine&apos;s
            record and circumstances. Balance correction with fairness.
          </InfoCard>
          <InfoCard variant="danger">
            <strong>First 90 Days After Discipline is High-Risk:</strong> Marines who receive NJP or face
            court-martial are at elevated risk. Monitor well-being. Connect to support resources. Update FPC and CIRRAS.
          </InfoCard>
          <InfoCard variant="warning">
            <strong>Presumption of Innocence:</strong> Reported offender is presumed innocent until proven guilty.
            Each report is considered credible until proven otherwise. Everyone should wait before reaching conclusions.
          </InfoCard>
          <InfoCard variant="tip">
            <strong>Retaliation is Prohibited:</strong> Protect those who report crimes. Retaliation is not tolerated.
            Monitor for coercion, ostracism, discrimination, or reprisals.
          </InfoCard>
          <InfoCard variant="success">
            <strong>VLC Represents Victims:</strong> Independent of command. Confidential communications.
            Victim&apos;s interests may differ from government&apos;s.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Special Situations */}
      <CollapsibleSection title="Special Situations" icon={AlertCircle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-400 mb-2">Sexual Assault Reported</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Notify <Acronym title="Sexual Assault Response Coordinator">SARC</Acronym> immediately</li>
              <li>• DO NOT conduct internal command-directed investigation</li>
              <li>• Coordinate with NCIS</li>
              <li>• Consult SJA</li>
              <li>• Protect victim from retaliation</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-amber-500">
            <h4 className="font-semibold text-amber-400 mb-2">Marine Facing Separation</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Connect with <Acronym title="Unit Transition Coordinator">UTC</Acronym> for <Acronym title="Transition Readiness Program">TRP</Acronym></li>
              <li>• Ensure resources and support available</li>
              <li>• Consider impact on family</li>
              <li>• Marine for Life Network for post-service resources</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-400 mb-2">High-Profile Incident</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Coordinate with SJA</li>
              <li>• Coordinate with Public Affairs</li>
              <li>• Follow reporting requirements</li>
              <li>• Protect due process</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-400 mb-2">Marine in Brig</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Regular welfare checks</li>
              <li>• Chaplain visits</li>
              <li>• <Acronym title="Community Counseling Program">CCP</Acronym> if available</li>
              <li>• Plan for transition or reintegration</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Common Problems and Solutions */}
      <CollapsibleSection title="Common Problems and Solutions" icon={AlertTriangle}>
        <div className="space-y-4">
          {[
            {
              problem: "Uncertainty about appropriate disciplinary response",
              solution: "Consult SJA. Consider Marine's record, nature of offense, and needs of command. Select from spectrum of options."
            },
            {
              problem: "Marine at elevated risk after NJP",
              solution: "First 90 days is high-risk period. Monitor well-being. Connect to CCP, chaplain, MFLC. Conduct monthly counseling. Update FPC and CIRRAS."
            },
            {
              problem: "Retaliation against victim or witness",
              solution: "Take immediate action to stop retaliation. Monitor for coercion, ostracism, discrimination. Protect those who report. Consider administrative or UCMJ action against retaliators."
            },
            {
              problem: "Administrative separation process unclear",
              solution: "Consult SJA. Follow MCO P1900.16. Ensure Marine notified and has opportunity to respond. Connect to UTC for TRP."
            },
            {
              problem: "Victim not aware of rights",
              solution: "Inform of VLCO services. Connect with SARC. Ensure access to VLC. VLC will explain rights and options."
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
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Legal Services</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• Victims&apos; Legal Counsel Organization (VLCO)</li>
              <li>• Legal Services Support Sections (LSSS)</li>
              <li>• Staff Judge Advocate</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Transition Support</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href={FAMILY_URLS.TRANSITION_READINESS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-gold)] hover:underline"
                >
                  Transition Readiness Program
                </a>
              </li>
              <li>
                <a
                  href={FAMILY_URLS.MARINE_FOR_LIFE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-gold)] hover:underline"
                >
                  Marine for Life Network
                </a>
              </li>
              <li>
                <a
                  href={MENTAL_HEALTH_URLS.IN_TRANSITION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-gold)] hover:underline"
                >
                  InTransition
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">References</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href={MCO_URLS.LEGADMINMAN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-gold)] hover:underline"
                >
                  MCO 5800.16 (LEGADMINMAN)
                </a>
              </li>
              <li>
                <a
                  href={MCO_URLS.MARCORSEPMAN_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-gold)] hover:underline"
                >
                  MCO 1900.16 (Separation Manual)
                </a>
              </li>
              <li>
                <a
                  href={MCO_URLS.REQUEST_MAST}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-gold)] hover:underline"
                >
                  MCO 1700.23G (Request Mast)
                </a>
              </li>
              <li className="text-[var(--sa-cream)]/70">• Manual for Courts-Martial</li>
              <li className="text-[var(--sa-cream)]/70">• MARADMIN 583/13 (VLCO establishment)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
