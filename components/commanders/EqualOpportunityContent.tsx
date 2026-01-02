"use client";

import { useState } from "react";
import { CLIMATE_URLS } from "../../data/references";
import {
  Users,
  Scale,
  ClipboardList,
  Shield,
  AlertTriangle,
  FileText,
  Clock,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  Heart,
  MessageSquare,
  Eye,
  UserCheck,
  Ban,
  ThumbsUp,
  ThumbsDown,
  Globe
} from "lucide-react";
import { Acronym } from "../ui/Acronym";
import { InfoCard } from "../ui/InfoCard";

interface InfoCardProps {
  children: React.ReactNode;
  variant?: "info" | "warning" | "success" | "tip" | "danger";
  className?: string;
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

function DEICard({
  title,
  definition,
  value,
  action
}: {
  title: string;
  definition: string;
  value?: string;
  action: string;
}) {
  return (
    <div className="bg-[var(--sa-navy)]/30 border border-[var(--sa-gold)]/30 rounded-lg p-4">
      <h4 className="font-semibold text-[var(--sa-gold)] text-lg mb-3">{title}</h4>
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-[var(--sa-cream)]">Definition:</p>
          <p className="text-sm text-[var(--sa-cream)]/80">{definition}</p>
        </div>
        {value && (
          <div>
            <p className="text-sm font-medium text-[var(--sa-cream)]">Value:</p>
            <p className="text-sm text-[var(--sa-cream)]/80">{value}</p>
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-[var(--sa-cream)]">Commander Action:</p>
          <p className="text-sm text-[var(--sa-cream)]/80">{action}</p>
        </div>
      </div>
    </div>
  );
}

export function EqualOpportunityContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 rounded-lg p-8 border border-[var(--sa-gold)]/30">
        <div className="flex items-start gap-4">
          <Scale className="w-12 h-12 text-[var(--sa-gold)] flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-[var(--sa-cream)] mb-2">Equal Opportunity and Prohibited Activities</h1>
            <p className="text-xl text-[var(--sa-cream)]/80">
              <Acronym title="Defense Equal Opportunity Climate Survey">DEOCS</Acronym>, command climate, prohibited conduct prevention, and diversity and inclusion
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-[var(--sa-navy)]/30 rounded-lg p-6 border border-[var(--sa-gold)]/30">
        <h2 className="text-xl font-semibold text-[var(--sa-gold)] mb-4">Overview</h2>
        <div className="space-y-4 text-[var(--sa-cream)]/90">
          <p>
            Command climate refers specifically to commanders and the policies they enact. As commander, you set
            the tone for how Marines treat each other and whether all members feel the command supports their needs.
            Unprofessional relationships, harassment, and discrimination produce a negative atmosphere within the command.
            If Marines are victims of racism or sexual harassment and believe the chain of command is not supporting them,
            they lose faith in the chain of command.
          </p>
          <p>
            The Marine Corps draws its collective strength from all its Marines, regardless of race, sex, sexual
            orientation, creed, or any other marker. Diversity, equity, and inclusion are tenets of the culture
            and conditions we seek in our Corps. Your responsibility is to create an environment where every Marine
            is treated with dignity and respect, and where prohibited activities are identified and corrected promptly.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• MCO P5354.1E w/CH 1 (<Acronym title="Prohibited Activities and Conduct">PAC</Acronym> Prevention and Response Policy)</li>
              <li>• MARADMIN 291/19 (<Acronym title="Defense Equal Opportunity Climate Survey">DEOCS</Acronym>)</li>
              <li>• CMC Policy Statement on Diversity, Equity, and Inclusion</li>
              <li>• MCO 1730.9 (Religious Accommodation)</li>
            </ul>
          </div>
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Your Responsibility</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Set the tone for how Marines treat each other</li>
              <li>• Create environment of dignity and respect</li>
              <li>• Identify and correct prohibited activities promptly</li>
              <li>• Ensure all Marines feel valued</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Commander Requirements */}
      <CollapsibleSection title="Commander Requirements" icon={ClipboardList} defaultOpen={true}>
        <div className="space-y-4">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-[var(--sa-gold)]">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Within 90 Days of Assuming Command
            </h4>
            <div>
              <p className="font-medium text-[var(--sa-cream)]">Publish <Acronym title="Prohibited Activities and Conduct">PAC</Acronym> Policy Statement</p>
              <ul className="mt-1 text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Publish and prominently post written command policy implementing MCO 5354.1E</li>
                <li>• Reference: MCO P5354.1E w/CH 1, para 020306</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Within 90 Days Prior to Relinquishing Command (and annually)
            </h4>
            <div>
              <p className="font-medium text-[var(--sa-cream)]">Initiate Defense Equal Opportunity Climate Survey (<Acronym title="Defense Equal Opportunity Climate Survey">DEOCS</Acronym>)</p>
              <ul className="mt-1 text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Establishes baseline for new commander</li>
                <li>• Required annually</li>
                <li>• References: MARADMIN 291/19, MCO P5354.1E w/CH 1, Para 0103</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Immediately After Taking Command (Best Practice)
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-[var(--sa-cream)]">Conduct Command Climate Survey</p>
                <ul className="mt-1 text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Uncover dark areas: hazing, harassment, improper relationships</li>
                  <li>• First survey shows climate you assumed</li>
                  <li>• Take another survey or Command Culture Workshop 6-12 months later</li>
                  <li>• Brief survey results back to command so they know you heard them</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[var(--sa-cream)]">Equal Opportunity Survey</p>
                <ul className="mt-1 text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Required survey that can be tailored with specific questions</li>
                  <li>• Put time and effort into crafting questions</li>
                  <li>• Know what you are looking for and tailor survey to get it</li>
                </ul>
              </div>
            </div>
          </div>

          <InfoCard variant="tip">
            <strong>Key Insight:</strong> Using these tools does not cause one to lead by survey, but it does allow
            you to uncover dark areas immediately after taking command. Use the first survey to know the climate you
            assumed, and subsequent surveys to know the climate you created.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* DEOCS */}
      <CollapsibleSection title="Defense Equal Opportunity Climate Survey (DEOCS)" icon={ClipboardList}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Purpose</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Assess command climate</li>
                <li>• Identify issues requiring attention</li>
                <li>• Establish baseline and track changes over time</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Timing</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Within 90 days prior to relinquishing command</li>
                <li>• Annually thereafter by the command</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Best Practices</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Use first survey to know the climate you assumed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Use subsequent survey to know the climate you created</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Brief results back to command</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Make course corrections based on findings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Do not lead by survey, but use it to uncover issues</span>
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Prohibited Activities and Conduct */}
      <CollapsibleSection title="Prohibited Activities and Conduct (PAC)" icon={Ban} defaultOpen={true}>
        <div className="space-y-6">
          {/* Sexual Harassment */}
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border border-red-500/30">
            <h4 className="font-semibold text-red-400 mb-3">Sexual Harassment (MCO 5354.1F)</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-3">
              <strong>Definition:</strong> Knowing, reckless, or intentional conduct with a nexus to military service that:
            </p>
            <ol className="text-sm text-[var(--sa-cream)]/80 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">1.</span>
                <span>Involves unwelcome sexual advances, requests for sexual favors, and deliberate or repeated
                offensive comments or gestures of a sexual nature when submission is made a condition of employment
                or used as basis for career decisions, or conduct creates hostile environment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">2.</span>
                <span>Is so severe or pervasive that a reasonable person would perceive the work environment as
                hostile or offensive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">3.</span>
                <span>Any use or condonation by person in supervisory or command position of sexual behavior to
                control, influence, or affect career, pay, or job</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">4.</span>
                <span>Any conduct whereby someone knowingly makes deliberate or repeated unwelcome verbal comments
                or gestures of a sexual nature</span>
              </li>
            </ol>

            <InfoCard variant="warning" className="mt-4">
              <strong>Key Point:</strong> There is no requirement for concrete psychological harm for behavior to
              constitute sexual harassment. Behavior is sufficient if it is so severe or pervasive that a reasonable
              person would perceive the environment as intimidating or offensive.
            </InfoCard>

            <InfoCard variant="info" className="mt-3">
              <strong>Note:</strong> Sexual harassment complaints go to Equal Employment Opportunity (<Acronym title="Equal Employment Opportunity">EEO</Acronym>),
              not <Acronym title="Sexual Assault Prevention and Response">SAPR</Acronym>.{" "}
              <Acronym title="Sexual Assault Response Coordinator">SARCs</Acronym> provide warm handoffs to appropriate service.
            </InfoCard>
          </div>

          {/* Discrimination */}
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Discrimination</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Types of prohibited discrimination:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Race", "Color", "Religion", "Sex (including pregnancy)", "National origin", "Sexual orientation", "Gender identity"].map((type, idx) => (
                <span key={idx} className="bg-[var(--sa-navy)]/50 px-3 py-1 rounded text-sm text-[var(--sa-cream)]/80">
                  {type}
                </span>
              ))}
            </div>
            <InfoCard variant="warning">
              <strong>Key Point:</strong> Marine women are most likely to experience sexual harassment violations and
              gender discrimination. Male and female Marines overall regard sexual harassment and gender discrimination
              as more common than most other service members.
            </InfoCard>
          </div>

          {/* Hazing */}
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Hazing</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-3">
              <strong>Definition:</strong> Any conduct whereby someone causes another to suffer or be exposed to any
              activity that is cruel, abusive, humiliating, oppressive, demeaning, or harmful.
            </p>
            <div className="bg-[var(--sa-navy)]/50 rounded p-3">
              <p className="text-sm font-medium text-[var(--sa-cream)] mb-2">Commander Responsibility:</p>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Publish policy statement on hazing</li>
                <li>• Include hazing incidents in <Acronym title="Commander's Critical Information Requirements">CCIR</Acronym></li>
                <li>• Investigate all hazing allegations</li>
                <li>• Take appropriate corrective action</li>
              </ul>
            </div>
          </div>

          {/* Fraternization */}
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Fraternization and Unprofessional Relationships</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-3">
              <strong>Risk:</strong> Intense bonding in military units can lead service members to value peer relations
              over other considerations. Lateral bonds holding peers together can be stronger than vertical bonds
              between personnel and leaders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[var(--sa-navy)]/50 rounded p-3">
                <p className="text-sm font-medium text-[var(--sa-cream)] mb-2">Forms:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Seniors and subordinates growing closer together</li>
                  <li>• Roles becoming confused</li>
                  <li>• Discipline breaking down</li>
                </ul>
              </div>
              <div className="bg-[var(--sa-navy)]/50 rounded p-3">
                <p className="text-sm font-medium text-[var(--sa-cream)] mb-2">Commander Action:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Be constantly on watch for these situations</li>
                  <li>• Address and correct promptly and effectively</li>
                  <li>• Roles must remain clear</li>
                  <li>• Professional standards must be maintained</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extremism */}
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Extremism</h4>
            <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Commander Responsibility:</p>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Identify and address extremist activity</li>
              <li>• Ensure Marines understand what constitutes prohibited activity</li>
              <li>• Take appropriate action when extremist behavior is identified</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Diversity, Equity, and Inclusion */}
      <CollapsibleSection title="Diversity, Equity, and Inclusion" icon={Users}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border border-[var(--sa-gold)]/30">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">CMC Policy Statement (General Berger)</h4>
            <blockquote className="text-[var(--sa-cream)]/90 italic border-l-4 border-[var(--sa-gold)] pl-4">
              &quot;As an organization that draws its collective strength and identity from all its Marines, it is
              critical that we prioritize policies that maximize the individual strengths of every Marine, regardless
              of race, sex, sexual orientation, creed, or any other marker. Diversity, equity, and inclusion are not
              buzz words, but tenets of the culture and conditions we seek in our Corps.&quot;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <DEICard
              title="Diversity"
              definition="Teams that include diverse perspectives and modes of thinking solve problems faster and more creatively."
              value="Diversity gives us a competitive warfighting advantage against adversaries who place a premium on uniformity of thought."
              action="Create and foster a culture where the contribution of every Marine is respected and valued."
            />

            <DEICard
              title="Equity"
              definition="Creating an institutional playing field that is even, allowing all Marines equal opportunity to succeed."
              value="Some Marines have leadership abilities, intelligence, and fitness to succeed but lack mentorship, experiences, or education to take full advantage of their skills."
              action="Identify and eliminate structural impediments that limit Marines from reaching their full potential."
            />

            <DEICard
              title="Inclusion"
              definition="Once an individual earns the title 'Marine,' they have made the grade and should be treated with dignity and respect."
              value="Our culture will remain compelling to all segments of society when people see that others like them who earned the title are treated with dignity and respect."
              action="Ensure all Marines feel valued and see a future in the Corps."
            />
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Marine Corps Actions Supporting DEI</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Ban on Confederate symbols (April 2020)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Removal of photographs from promotion and board packages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Review of grooming and height/weight standards</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Reinvigorated diversity review board</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>General officer assigned as Corps chief diversity officer</span>
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Religious Accommodation */}
      <CollapsibleSection title="Religious Accommodation" icon={Heart}>
        <div className="space-y-6">
          <p className="text-[var(--sa-cream)]/90">
            MCO 1730.9 governs accommodation of religious practices.
          </p>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Request Types</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Grooming accommodations",
                "Religious apparel",
                "Medical practices (immunizations, DNA samples)",
                "Dietary requests",
                "Time off for religious observances"
              ].map((type, idx) => (
                <span key={idx} className="bg-[var(--sa-navy)]/50 px-3 py-1 rounded text-sm text-[var(--sa-cream)]/80">
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Process</h4>
            <ol className="text-sm text-[var(--sa-cream)]/80 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">1.</span>
                <span>Service member requests accommodation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">2.</span>
                <span>Chaplain interviews Marine and assesses sincerity and nature of belief</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">3.</span>
                <span>Chaplain completes required templates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">4.</span>
                <span>Dietary and time-off requests: <strong>CO determines</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">5.</span>
                <span>Grooming, apparel, medical practices: <strong>DC M&amp;RA determines</strong></span>
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard variant="success">
              <strong>Protected:</strong> Expression of sincerely held beliefs may not be used as basis for adverse
              personnel action. May not be used for discrimination or denial of promotion, schooling, training,
              or assignment.
            </InfoCard>
            <InfoCard variant="warning">
              <strong>Not Protected:</strong> Does not preclude disciplinary action for UCMJ violations.
            </InfoCard>
          </div>
        </div>
      </CollapsibleSection>

      {/* Command Climate Indicators */}
      <CollapsibleSection title="Command Climate Indicators" icon={Eye}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
              <ThumbsUp className="w-4 h-4" />
              Positive Indicators
            </h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Marines feel comfortable reporting issues</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>All Marines feel respected and valued</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Professional relationships maintained</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Fair and consistent standards applied</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Open communication encouraged</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Diversity seen as strength</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
              <ThumbsDown className="w-4 h-4" />
              Negative Indicators
            </h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Harassment or discrimination complaints</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Unprofessional relationships forming</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Roles becoming confused</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Discipline breaking down</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Marines losing faith in chain of command</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Gossip and rumors prevalent</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Retaliation against those who report issues</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-[var(--sa-navy)]/30 rounded-lg p-4">
          <h4 className="font-semibold text-[var(--sa-gold)] mb-3">
            <Acronym title="Commander's Critical Information Requirements">CCIR</Acronym> Considerations
          </h4>
          <p className="text-sm text-[var(--sa-cream)]/80 mb-2">Include in Commander&apos;s Critical Information Requirements:</p>
          <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
            <li>• Any sexual assault or domestic violence report</li>
            <li>• Any incident involving hazing</li>
            <li>• Events likely to attract negative major media attention</li>
            <li>• Discrimination complaints</li>
          </ul>
        </div>
      </CollapsibleSection>

      {/* Social Media */}
      <CollapsibleSection title="Social Media and Online Conduct" icon={Globe}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Marine Corps Position</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Encourages personnel to engage in social media using sound judgment</li>
              <li>• Adhering to core values of honor, courage, and commitment</li>
              <li>• Following established policy and UCMJ</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Commander Responsibilities</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Educate Marines, civilians, contractors, and family members</li>
                <li>• Routine review of online and social media presence and behavior</li>
                <li>• Ensure social media does not compromise security</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Key Points</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Social media handbook does not restrict freedom of speech</li>
                <li>• Advises how comments can make Marines de facto spokespersons</li>
                <li>• Marines should only discuss issues related to their professional expertise</li>
              </ul>
            </div>
          </div>

          <InfoCard variant="danger">
            <strong>Prohibition:</strong> Marines and civilian personnel must ensure social media/online footprint
            and habits do not compromise personal or operational security.
          </InfoCard>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Resources</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href={CLIMATE_URLS.SOCIAL_MEDIA_PAGE} target="_blank" rel="noopener noreferrer"
                   className="text-[var(--sa-gold)] hover:underline flex items-center gap-1">
                  USMC Social and Online Guidance <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="text-[var(--sa-cream)]/80">• MARADMIN 173/15 (Review of Online Personal Information)</li>
              <li className="text-[var(--sa-cream)]/80">• The Social Corps Handbook</li>
            </ul>
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
          <InfoCard variant="danger">
            <strong>Climate is Your Responsibility</strong>
            <p className="mt-1 text-sm">
              Command climate refers specifically to commanders and their policies. Your actions set the tone
              for how Marines treat each other. Marines watch what you tolerate.
            </p>
          </InfoCard>

          <InfoCard variant="warning">
            <strong>Survey Results Require Action</strong>
            <p className="mt-1 text-sm">
              Brief results back to command. Develop action plan for identified issues. Track progress on
              improvements. Do not use survey then ignore results.
            </p>
          </InfoCard>

          <InfoCard variant="info">
            <strong>Prompt Action Required</strong>
            <p className="mt-1 text-sm">
              Address harassment, discrimination, and hazing promptly. Delay signals tolerance.
              Correction must be effective, not just administrative.
            </p>
          </InfoCard>

          <InfoCard variant="tip">
            <strong>Enlisted Leaders Have Influence</strong>
            <p className="mt-1 text-sm">
              NCOs often have more influence over command climate than officers. Ensure NCOs understand
              their role in maintaining positive climate. Train and empower NCOs to correct issues.
            </p>
          </InfoCard>
        </div>

        <InfoCard variant="danger" className="mt-4">
          <strong>Retaliation is Prohibited</strong>
          <p className="mt-1 text-sm">
            Protect those who report issues. Monitor for coercion, ostracism, discrimination, or reprisals.
            Take action against those who retaliate.
          </p>
        </InfoCard>
      </div>

      {/* Special Situations */}
      <CollapsibleSection title="Special Situations" icon={AlertTriangle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Unprofessional Relationships Forming</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• May seem innocent as seniors and subordinates grow closer</li>
              <li>• Can result in roles becoming confused and discipline breaking down</li>
              <li>• Address before relationships impact good order and discipline</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Harassment or Discrimination Reported</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Take report seriously</li>
              <li>• Investigate promptly</li>
              <li>• Protect complainant from retaliation</li>
              <li>• Take appropriate corrective action</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Social Media Incident</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Assess whether conduct violates policy or UCMJ</li>
              <li>• Consider impact on command climate</li>
              <li>• Take appropriate action</li>
              <li>• Use as training opportunity if appropriate</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Survey Reveals Significant Issues</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Do not dismiss or minimize findings</li>
              <li>• Develop comprehensive action plan</li>
              <li>• Communicate plan to command</li>
              <li>• Follow up to ensure improvement</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Common Problems and Solutions */}
      <CollapsibleSection title="Common Problems and Solutions" icon={Lightbulb}>
        <div className="space-y-4">
          {[
            {
              problem: "Marines not reporting harassment or discrimination",
              solution: "Establish climate where reporting is encouraged and protected. Brief policies. Demonstrate through action that reports are taken seriously. Ensure no retaliation."
            },
            {
              problem: "Survey results ignored",
              solution: "Brief all survey results to command. Develop specific action plan for each identified issue. Track progress. Conduct follow-up survey to measure improvement."
            },
            {
              problem: "Unprofessional relationships affecting unit",
              solution: "Address early before relationships become entrenched. Be clear about expectations. Apply standards consistently. Counsel or take action as appropriate."
            },
            {
              problem: "Social media conduct creating issues",
              solution: "Educate on policies and expectations. Ensure Marines understand they represent the Corps online. Take action when conduct violates policy or UCMJ."
            },
            {
              problem: "Diversity seen as weakness rather than strength",
              solution: "Lead by example in valuing diverse perspectives. Recognize contributions from all Marines. Ensure equal opportunity for advancement. Address bias when identified."
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
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• MCO P5354.1E w/CH 1 (<Acronym title="Prohibited Activities and Conduct">PAC</Acronym>)</li>
              <li>• MCO 1730.9 (Religious Accommodation)</li>
              <li>• MARADMIN 291/19 (<Acronym title="Defense Equal Opportunity Climate Survey">DEOCS</Acronym>)</li>
              <li>• CMC Policy Statement on DEI</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Resources</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• DEOCS Survey System</li>
              <li>• <Acronym title="Equal Employment Opportunity">EEO</Acronym> Office</li>
              <li>• Staff Judge Advocate</li>
              <li>• Chaplain (religious accommodation)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Social Media</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href={CLIMATE_URLS.SOCIAL_MEDIA_PAGE} target="_blank" rel="noopener noreferrer"
                   className="text-[var(--sa-gold)] hover:underline flex items-center gap-1">
                  USMC Social Guidance <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="text-[var(--sa-cream)]/70">• MARADMIN 173/15</li>
              <li className="text-[var(--sa-cream)]/70">• The Social Corps Handbook</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
