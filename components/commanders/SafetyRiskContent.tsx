"use client";

import { useState } from "react";
import { SAFETY_URLS } from "../../data/references";
import {
  Shield,
  AlertTriangle,
  Users,
  GraduationCap,
  Target,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Plane,
  Car,
  Clock,
  FileText,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  Info,
  Scale,
  Heart,
  Wrench
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

function PillarCard({
  number,
  title,
  principle,
  responsibilities,
  details
}: {
  number: number;
  title: string;
  principle: string;
  responsibilities: string[];
  details?: string[];
}) {
  return (
    <div className="bg-[var(--sa-navy)]/30 border border-[var(--sa-gold)]/30 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-[var(--sa-gold)] text-[var(--sa-navy)] flex items-center justify-center font-bold">
          {number}
        </div>
        <h4 className="font-semibold text-[var(--sa-gold)] text-lg">{title}</h4>
      </div>
      <p className="text-sm text-[var(--sa-cream)]/80 italic mb-3">&quot;{principle}&quot;</p>
      <div className="space-y-2">
        <p className="text-sm font-medium text-[var(--sa-cream)]">Commander Responsibilities:</p>
        <ul className="text-sm text-[var(--sa-cream)]/90 space-y-1">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[var(--sa-gold)] mt-1">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
      {details && details.length > 0 && (
        <div className="mt-3 pt-3 border-t border-[var(--sa-gold)]/20">
          <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[var(--sa-cream)]/60 mt-1">◦</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MishapClassCard({
  classLevel,
  criteria
}: {
  classLevel: string;
  criteria: string[];
}) {
  const colors: Record<string, string> = {
    "A": "bg-red-900/50 border-red-500/50",
    "B": "bg-orange-900/50 border-orange-500/50",
    "C": "bg-yellow-900/50 border-yellow-500/50"
  };

  return (
    <div className={`${colors[classLevel] || "bg-[var(--sa-navy)]/30 border-[var(--sa-gold)]/30"} border rounded-lg p-4`}>
      <h4 className="font-bold text-lg text-[var(--sa-cream)] mb-2">Class {classLevel}</h4>
      <ul className="text-sm text-[var(--sa-cream)]/90 space-y-1">
        {criteria.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-[var(--sa-gold)] mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SafetyRiskContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 rounded-lg p-8 border border-[var(--sa-gold)]/30">
        <div className="flex items-start gap-4">
          <Shield className="w-12 h-12 text-[var(--sa-gold)] flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-[var(--sa-cream)] mb-2">Safety and Risk Management</h1>
            <p className="text-xl text-[var(--sa-cream)]/80">
              Four pillars of safety, mishap prevention, and risk-informed decision making
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-[var(--sa-navy)]/30 rounded-lg p-6 border border-[var(--sa-gold)]/30">
        <h2 className="text-xl font-semibold text-[var(--sa-gold)] mb-4">Overview</h2>
        <div className="space-y-4 text-[var(--sa-cream)]/90">
          <p>
            Safety is a direct correlation to readiness. The loss of any Marine is significant and should concern
            us all. &quot;Marines take care of their own&quot; is not limited to combat - it applies equally to training,
            garrison operations, and off-duty activities. Your visible commitment to safety and risk management
            directly determines whether your Marines operate safely.
          </p>
          <p>
            An effective safety program is proactive, coherent, transferrable, and recognizable. The Marine Corps
            Safety Program provides centralized command and control to preserve Marines and equipment. As commander,
            you are responsible for implementing this program in your unit through the four pillars: Culture, Training,
            Risk Management, and Assurance.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• MCO 5100.29C (Marine Corps Safety Management System)</li>
              <li>• MCO 3500.27C (Risk Management)</li>
              <li>• OPNAVINST 3750.6S (Naval Aviation Safety Program)</li>
              <li>• <Acronym title="Inspector General of the Marine Corps">IGMC</Acronym> Functional Area Checklist 5100</li>
            </ul>
          </div>
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">The Four Pillars</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• <strong>Culture:</strong> &quot;Marines take care of their own&quot;</li>
              <li>• <strong>Training:</strong> Unique to each command</li>
              <li>• <strong>Risk Management:</strong> Risk-informed decisions</li>
              <li>• <strong>Assurance:</strong> &quot;Inspect what you expect&quot;</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Commander Requirements */}
      <CollapsibleSection title="Commander Requirements" icon={ClipboardCheck} defaultOpen={true}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-[var(--sa-gold)]">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Within 30 Days of Assuming Command
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-[var(--sa-cream)]">Publish Safety Policy Statement</p>
                <ul className="mt-1 text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Required per MCO 5100.29C, Chap 2, Para 0204</li>
                  <li>• Establishes your expectations for safety</li>
                  <li>• Sets tone for command safety culture</li>
                  <li>• Reference: <Acronym title="Inspector General of the Marine Corps">IGMC</Acronym> Functional Area Checklist 5100, Question 0102</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[var(--sa-cream)]">Aviation Units - Initiate Safety Surveys</p>
                <ul className="mt-1 text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• <Acronym title="Command Safety Assessment">CSA</Acronym> (Command Safety Assessment): Squadron safety from aircrew vantage point</li>
                  <li>• <Acronym title="Maintenance Climate Assessment Survey">MCAS</Acronym> (Maintenance Climate Assessment Survey): Safety climate from aircraft maintainers</li>
                  <li>• <Acronym title="Administrative Support Personnel Assessment">ASPA</Acronym> (Administrative Support Personnel Assessment): Non-aircrew, non-maintainer personnel</li>
                  <li>• Reference: MCO 5100.29C, Vol-1, Chap 6, Para 060403</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Within 90 Days of Assuming Command (O5/O6 Commands)
            </h4>
            <div>
              <p className="font-medium text-[var(--sa-cream)]">Complete Safety Climate Survey</p>
              <ul className="mt-1 text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Establishes baseline for new commander</li>
                <li>• Required annually thereafter</li>
                <li>• Reference: MCO 5100.29C, Para 060402</li>
                <li>• Website: <a href={SAFETY_URLS.SAFETY_MARINES} target="_blank" rel="noopener noreferrer" className="text-[var(--sa-gold)] hover:underline">safety.marines.mil</a></li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* The Four Pillars of Safety */}
      <CollapsibleSection title="The Four Pillars of Safety" icon={Shield} defaultOpen={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PillarCard
            number={1}
            title="Culture"
            principle="Marines take care of their own"
            responsibilities={[
              "Ensure principle is evident in planning, operations, and mentorship",
              "Establish a just, learning, and reporting culture",
              "Empower all Marines to proactively enhance safety",
              "Apply both on and off duty"
            ]}
            details={[
              "Marines feel comfortable reporting hazards without fear of punishment",
              "Near-misses are discussed openly to prevent future mishaps",
              "Safety is part of every brief and debrief",
              "Leaders are visibly committed to safety"
            ]}
          />

          <PillarCard
            number={2}
            title="Training"
            principle="Each command is distinct and requires unique safety training"
            responsibilities={[
              "Determine and implement appropriate training for your unit",
              "Consider function, mission, experience, location",
              "Ensure training is relevant and current"
            ]}
            details={[
              "Job-specific hazard awareness",
              "Risk Management principles",
              "Equipment-specific safety procedures",
              "Off-duty safety (motor vehicle, motorcycle, recreational)",
              "Emergency response procedures"
            ]}
          />

          <PillarCard
            number={3}
            title="Risk Management"
            principle="An organizational process to assist Marines in making risk-informed decisions"
            responsibilities={[
              "Integrate Risk Management into planning from the start",
              "Explicitly identify appropriate level for risk acceptance",
              "Delegate authority appropriately to XO, OPSO, AMO, DSS"
            ]}
            details={[
              "Identify hazards → Assess hazards → Make risk decisions → Implement controls → Supervise",
              "Key question: \"Do the benefits outweigh the risks?\"",
              "Also known as: \"Is the juice worth the squeeze?\""
            ]}
          />

          <PillarCard
            number={4}
            title="Assurance"
            principle="Inspect what you expect"
            responsibilities={[
              "Identify metrics indicative of culture, training applicability, and RM effectiveness",
              "Use feedback to apply resources appropriately",
              "Conduct regular inspections and assessments"
            ]}
            details={[
              "Safety climate surveys",
              "Mishap trend analysis",
              "Near-miss reporting review",
              "Pre-mishap drill execution",
              "Safety stand-downs"
            ]}
          />
        </div>

        <InfoCard variant="tip" className="mt-4">
          <strong>Key Insight:</strong> Where you are on a daily basis demonstrates what is important to you.
          Are you at FOD walk? Do you take part in mission planning? Do you attend the debrief?
          Do you spend time with night crew?
        </InfoCard>
      </CollapsibleSection>

      {/* Risk Management in Practice */}
      <CollapsibleSection title="Risk Management in Practice" icon={Target}>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Integrating Risk Management into Planning</h4>
            <p className="text-[var(--sa-cream)]/90">
              If you build your plan by assessing <Acronym title="Training and Exercise Employment Plan">TEEP</Acronym>,
              deployment timelines, training opportunities, manning levels, qualifications, and readiness levels while
              incorporating Risk Management principles from the start, you will have your controls &quot;baked in.&quot;
            </p>
            <InfoCard variant="info" className="mt-3">
              Risk Management is the CO&apos;s alter ego when not present - empower your Marines to use it at every level,
              every day, for every mission.
            </InfoCard>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Policy Development</h4>
            <p className="text-[var(--sa-cream)]/90 mb-3">
              Good policy development looks like <Acronym title="Marine Corps Planning Process">MCPP</Acronym>.
              Ensure the XO, OPSO, <Acronym title="Aircraft Maintenance Officer">AMO</Acronym>, and{" "}
              <Acronym title="Director of Safety and Standardization">DSS</Acronym> know:
            </p>
            <ul className="text-[var(--sa-cream)]/80 space-y-1">
              <li>• Your expectations</li>
              <li>• How you expect them to integrate Risk Management principles</li>
              <li>• What authority you are delegating (and what you are not)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Standards and Standardization</h4>
            <InfoCard variant="warning">
              <strong>&quot;Never waive a training standard.&quot;</strong>
              <p className="mt-2 text-sm">
                Training the way we fight is sound principle. How we attain and maintain readiness is the secret
                to minimizing risk and protecting Marines and equipment.
              </p>
            </InfoCard>
            <p className="text-[var(--sa-cream)]/90 mt-3">
              <strong>Key Reality:</strong> Experience base has diminished. We no longer have seasoned Captains and
              Majors or depth of seasoned Gunnery Sergeants and Staff Sergeants as we once had. Risk Management
              provides &quot;trip wires&quot; that automatically require asking &quot;Why?&quot; and &quot;Is the payoff worth the risk?&quot;
            </p>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Key Questions for Every Brief</h4>
            <ul className="text-[var(--sa-cream)]/90 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">1.</span>
                <span>What were the risks identified in this mission or course of action?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">2.</span>
                <span>What has been done to reduce those risks to an acceptable level?</span>
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Mishap Classification and Reporting */}
      <CollapsibleSection title="Mishap Classification and Reporting" icon={AlertTriangle}>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-4">Mishap Classes</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MishapClassCard
                classLevel="A"
                criteria={[
                  "Death or permanent disability to a service member",
                  "More than $2 million in damage"
                ]}
              />
              <MishapClassCard
                classLevel="B"
                criteria={[
                  "Between $500,000 and $2 million in damages",
                  "Partial permanent disability to a service member"
                ]}
              />
              <MishapClassCard
                classLevel="C"
                criteria={[
                  "Between $50,000 and $500,000 in damages",
                  "More than three lost work days due to injury"
                ]}
              />
            </div>
          </div>

          <InfoCard variant="warning">
            <strong><Acronym title="Commander's Critical Information Requirements">CCIR</Acronym> Consideration:</strong>{" "}
            Movement or training accident resulting in death is typically <Acronym title="Friendly Force Information Requirements">FFIR</Acronym>.
            Report per your command&apos;s CCIR guidance.
          </InfoCard>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Aviation Mishap Types</h4>
            <div className="space-y-2">
              <div className="bg-[var(--sa-navy)]/30 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">Flight Mishap</p>
                <p className="text-sm text-[var(--sa-cream)]/80">Intent for flight existed when damage/injury occurred</p>
              </div>
              <div className="bg-[var(--sa-navy)]/30 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">Flight-Related Mishap</p>
                <p className="text-sm text-[var(--sa-cream)]/80">Intent for flight existed, but damage/injury to someone/something other than aircraft</p>
              </div>
              <div className="bg-[var(--sa-navy)]/30 rounded p-3">
                <p className="font-medium text-[var(--sa-cream)]">Aviation Ground Mishap</p>
                <p className="text-sm text-[var(--sa-cream)]/80">No intent for flight at time of mishap</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Investigation Process (Class A)</h4>
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <p className="font-medium text-[var(--sa-cream)] mb-2">Investigation Board Composition:</p>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1 mb-4">
                <li>• O5 or above (Aviation Safety Course graduate, outside mishap unit) as senior member</li>
                <li>• Investigator from Naval Safety Center</li>
                <li>• Operations and maintenance representatives from mishap unit</li>
                <li>• Flight surgeon</li>
                <li>• Other <Acronym title="Subject Matter Experts">SMEs</Acronym> as required</li>
              </ul>
              <p className="text-sm text-[var(--sa-cream)]/80">
                <strong>Timeline:</strong> 30 days to submit report (extensions possible)
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Off-Duty Safety */}
      <CollapsibleSection title="Off-Duty Safety" icon={Car}>
        <div className="space-y-6">
          <InfoCard variant="danger">
            <strong>Motor Vehicle and Motorcycle Mishaps</strong> are a major source of Marine casualties.
            These require proactive leadership engagement. <Acronym title="Director of Safety and Standardization">DOSS</Acronym> should
            advise CO on reducing off-duty mishaps.
          </InfoCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
                <Car className="w-4 h-4" />
                Commander Actions
              </h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Include motorcycle safety in command awareness programs</li>
                <li>• Ensure driver improvement training is enforced</li>
                <li>• Monitor high-risk behavior indicators</li>
                <li>• Discuss off-duty safety at safety stand-downs</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Liberty Risk Management
              </h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Brief Marines before long weekends and holidays</li>
                <li>• Discuss risks specific to season and location</li>
                <li>• Ensure Marines have plans and accountability</li>
                <li>• Encourage buddy systems</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Recreational Safety</h4>
            <div className="flex flex-wrap gap-2">
              {["Water safety", "Sports and physical training", "Outdoor activities", "Travel safety"].map((item, idx) => (
                <span key={idx} className="bg-[var(--sa-navy)]/50 px-3 py-1 rounded text-sm text-[var(--sa-cream)]/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Safety Officer Role */}
      <CollapsibleSection title="Safety Officer Role" icon={Eye}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Ground Safety Officer (GSO)</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Advises commander on all ground safety matters</li>
              <li>• Manages unit ground safety program</li>
              <li>• Conducts safety inspections</li>
              <li>• Investigates mishaps</li>
              <li>• Tracks safety metrics</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">
              Director of Safety and Standardization (<Acronym title="Director of Safety and Standardization">DOSS</Acronym>) - Aviation
            </h4>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-[var(--sa-cream)]">Daily Responsibilities</p>
                <p className="text-sm text-[var(--sa-cream)]/80 mt-1">
                  Spend at least <strong>two hours</strong> observing squadron operations: flight scheduling,
                  <Acronym title="Operations Duty Officer">ODO</Acronym> actions, flight briefs, flight line operations,
                  <Acronym title="Foreign Object Debris">FOD</Acronym> walks, aircraft maintenance.
                </p>
                <InfoCard variant="tip" className="mt-2">
                  Every Marine in unit should know the Safety Officer.
                </InfoCard>
              </div>

              <div>
                <p className="font-medium text-[var(--sa-cream)]">Key DOSS Actions</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1 mt-1">
                  <li>• Contact CO immediately with concerns or policy issues</li>
                  <li>• Advise CO on reducing off-duty mishaps</li>
                  <li>• Be involved in all standardization issues</li>
                  <li>• Work with S-3 and Tactics Officer on risk management</li>
                  <li>• Conduct Risk Management training as required</li>
                  <li>• Facilitate &quot;True Confessions&quot; with experienced aircrew</li>
                  <li>• Discuss predicted circumstances of next mishap at staff meetings</li>
                  <li>• Ensure focus on <Acronym title="Naval Air Training and Operating Procedures Standardization">NATOPS</Acronym>/OPNAV basics</li>
                  <li>• Ensure pre-mishap drills quarterly (including at deployed sites)</li>
                </ul>
              </div>

              <InfoCard variant="info">
                <strong>DOSS Principle:</strong> Be an enabler to getting the mission accomplished safely.
                This means being involved in planning from the start. If you wait until execution to identify
                the plan is unsafe, you have failed.
              </InfoCard>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Pre-Mishap Planning */}
      <CollapsibleSection title="Pre-Mishap Planning" icon={ClipboardCheck}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Pre-Mishap Drills</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Conduct at least quarterly</li>
                <li>• Include at deployed sites</li>
                <li>• Test standing <Acronym title="Accident Mishap Board">AMB</Acronym>, maintenance department, recovery team procedures</li>
                <li>• Conduct <Acronym title="Casualty Assistance Calls Officer">CACO</Acronym> drills as well</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Standing Accident Mishap Board (AMB)</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• XO typically serves as senior member</li>
                <li>• Ensure training and readiness of primary and alternate members</li>
                <li>• Be prepared to focus on squadron after mishap while CO focuses on families</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Preparation Checklist</h4>
            <ul className="text-[var(--sa-cream)]/90 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-1" />
                <span>Know your procedures before you need them</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-1" />
                <span>Have contact information ready</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-1" />
                <span>Understand reporting requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-1" />
                <span>Brief key personnel on roles and responsibilities</span>
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Aviation-Specific Safety */}
      <CollapsibleSection title="Aviation-Specific Safety" icon={Plane}>
        <div className="space-y-6">
          <InfoCard variant="warning">
            <strong>THERE IS NO SUCH THING AS RISK-FREE FLYING</strong> and there is no &quot;auto pilot&quot; in
            commanding an aviation unit.
          </InfoCard>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Preparation/Planning</h4>
            <p className="text-[var(--sa-cream)]/90 italic mb-3">
              &quot;The key to success in aviation is preparation.&quot;
            </p>
            <p className="text-[var(--sa-cream)]/80">
              Well-trained, prepared, and disciplined pilots and aircrew are the last line of defense
              against operational failures and mishaps.
            </p>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Commander Actions</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Demonstrate you know your stuff</li>
              <li>• Set the standard for preparation</li>
              <li>• Show judicious risk-informed decision making in execution</li>
              <li>• Fly often, fly the hard missions</li>
              <li>• Everything you do will be noticed (mission plan, brief, preflight, postflight, debrief)</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Fatigue Management</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Be on guard against acute and cumulative fatigue</li>
                <li>• Effects are insidious and degrade performance</li>
                <li>• Fatigued individuals make mistakes and are less likely to catch them</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Flight Discipline</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Foster command climate promoting flight discipline</li>
                <li>• Ensure adherence to established procedures at all times</li>
                <li>• <Acronym title="Naval Air Training and Operating Procedures Standardization">NATOPS</Acronym>, SOPs, and T&amp;R requirements are institutional controls</li>
                <li>• Reliance on these is more crucial when OPTEMPO increases</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Commander Flying</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Fly with each pilot and aircrew</li>
              <li>• Rank them with XO and OPSO - identify disconnects</li>
              <li>• Conduct peer evaluations (flying skills, professional skills, personal skills)</li>
              <li>• Little things matter (cranial on when preflighting, visor down and gloves on, approach plate out)</li>
              <li>• First tour pilots develop habit patterns based on your actions</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Safety Publications</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Ensure input to 360 Safe and Approach at least twice yearly</li>
                <li>• Submit general interest articles, Bravo Zulus, milestone accomplishments</li>
                <li>• Provide aviation safety material where aircrew congregates</li>
                <li>• Monitor safety milestone accomplishments (1000, 2000, 3000-hour certificates)</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Recognition</h4>
              <p className="text-sm text-[var(--sa-cream)]/80">
                Ensure CO is part of recognition events where prudent judgment and RM practices prevented mishap.
                Make these big events with CO&apos;s complete attention.
              </p>
            </div>
          </div>
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
            <strong>Safety is Readiness</strong>
            <p className="mt-1 text-sm">
              There is a direct correlation between safety and readiness. Safe operations enable mission accomplishment.
            </p>
          </InfoCard>

          <InfoCard variant="info">
            <strong>Commander Visibility</strong>
            <p className="mt-1 text-sm">
              The only way to develop a culture of safe operations and mishap avoidance is consistent visible commitment.
              Once culture is established, Marines will innovate and optimize.
            </p>
          </InfoCard>

          <InfoCard variant="warning">
            <strong>No Statistical Threshold Required</strong>
            <p className="mt-1 text-sm">
              The loss of any Marine is significant. No need to wait for a statistically relevant trend to take action.
            </p>
          </InfoCard>

          <InfoCard variant="warning">
            <strong>Procedural Errors</strong>
            <p className="mt-1 text-sm">
              Almost every accident is due to a procedural error - not that the individual was not trained or did not know better.
              Engaged leadership and mutual accountability is required.
            </p>
          </InfoCard>
        </div>

        <InfoCard variant="tip" className="mt-4">
          <strong>Key Insight:</strong> We always make time to do things right the second time after we have had a mishap.
          Make the time to do things right the first time.
        </InfoCard>
      </div>

      {/* Special Situations */}
      <CollapsibleSection title="Special Situations" icon={AlertTriangle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">High Operational Tempo</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Risk Management principles even more critical</li>
              <li>• Do not shortcut planning</li>
              <li>• Reliance on procedures is crucial when urgency is high</li>
              <li>• Monitor fatigue levels</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Deployed Operations</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Conduct pre-mishap drills at deployed sites</li>
              <li>• Maintain safety standards despite operational pressures</li>
              <li>• Adapt training to deployed environment</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">New Equipment or Procedures</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Increased vigilance during transition periods</li>
              <li>• Ensure proper training before implementation</li>
              <li>• Document hazards and controls</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Reduced Manning</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Identify increased risks from personnel shortfalls</li>
              <li>• Adjust controls accordingly</li>
              <li>• Do not accept unacceptable risk due to manning</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Common Problems and Solutions */}
      <CollapsibleSection title="Common Problems and Solutions" icon={Lightbulb}>
        <div className="space-y-4">
          {[
            {
              problem: "Safety seen as obstacle to mission accomplishment",
              solution: "No sound tactical plan is unsafe. Integrate Risk Management from planning start. Safety enables mission, does not hinder it."
            },
            {
              problem: "Marines not reporting hazards or near-misses",
              solution: "Establish just, learning culture. Respond to reports with action, not punishment. Recognize Marines who identify hazards. Make reporting easy."
            },
            {
              problem: "Off-duty mishaps (motor vehicle, motorcycle)",
              solution: "Proactive leadership engagement. Include in safety stand-downs. Ensure training is enforced. Brief before holidays and weekends. Encourage accountability."
            },
            {
              problem: "Fatigue affecting performance",
              solution: "Monitor for acute and cumulative fatigue. Build rest into plans. Leaders set example. Do not reward Marines who sacrifice rest for productivity."
            },
            {
              problem: "Procedural shortcuts becoming normalized",
              solution: "Inspect what you expect. Leaders demonstrate adherence to procedures. Hold accountable those who deviate without justification. Standardization is safety."
            },
            {
              problem: "Pre-mishap planning untested",
              solution: "Conduct quarterly drills. Include all key personnel. Test at deployed sites. Review and update procedures based on drill results."
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
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Safety Resources</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href={SAFETY_URLS.SAFETY_MARINES} target="_blank" rel="noopener noreferrer"
                   className="text-[var(--sa-gold)] hover:underline flex items-center gap-1">
                  Marine Corps Safety <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={SAFETY_URLS.NAVAL_SAFETY_COMMAND} target="_blank" rel="noopener noreferrer"
                   className="text-[var(--sa-gold)] hover:underline flex items-center gap-1">
                  Naval Safety Command <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={SAFETY_URLS.MARINE_AVIATION} target="_blank" rel="noopener noreferrer"
                   className="text-[var(--sa-gold)] hover:underline flex items-center gap-1">
                  Marine Aviation <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• MCO 5100.29C (Safety Management System)</li>
              <li>• MCO 3500.27C (Risk Management)</li>
              <li>• OPNAVINST 3750.6S (Naval Aviation Safety)</li>
              <li>• <Acronym title="Inspector General of the Marine Corps">IGMC</Acronym> FA Checklist 5100</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Publications</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• 360 Safe</li>
              <li>• Approach Magazine</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
