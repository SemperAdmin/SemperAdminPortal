"use client";

import { useState } from "react";
import {
  Megaphone,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  Info,
  Clock,
  Users,
  Mic,
  FileText,
  AlertTriangle,
  ExternalLink,
  Phone,
  Mail,
  MessageSquare,
  Video,
  Newspaper,
  Shield,
  Lock,
  Eye,
  CheckCircle,
  XCircle,
  Globe,
  Building
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

function RuleCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-[var(--sa-gold)]">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-[var(--sa-gold)] text-[var(--sa-navy)] font-bold flex items-center justify-center flex-shrink-0">
          {number}
        </div>
        <div>
          <p className="font-medium text-[var(--sa-cream)]">{title}</p>
          <p className="text-sm text-[var(--sa-cream)]/80 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ReleaseInfoCard({
  title,
  releasable,
  nonReleasable,
  notes
}: {
  title: string;
  releasable: string[];
  nonReleasable: string[];
  notes?: string;
}) {
  return (
    <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
      <h4 className="font-semibold text-[var(--sa-gold)] mb-3">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-medium text-green-400 mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> Releasable
          </p>
          <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
            {releasable.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium text-red-400 mb-2 flex items-center gap-2">
            <XCircle className="w-4 h-4" /> Non-Releasable (without permission)
          </p>
          <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
            {nonReleasable.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
      {notes && (
        <p className="text-xs text-[var(--sa-cream)]/70 mt-3 italic">{notes}</p>
      )}
    </div>
  );
}

export function PublicAffairsContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 rounded-lg p-8 border border-[var(--sa-gold)]/30">
        <div className="flex items-start gap-4">
          <Megaphone className="w-12 h-12 text-[var(--sa-gold)] flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-[var(--sa-cream)] mb-2">Public Affairs and Communication</h1>
            <p className="text-xl text-[var(--sa-cream)]/80">
              Media relations, <Acronym title="Communication Strategy and Operations">COMMSTRAT</Acronym> office, internal communication, and information release
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-[var(--sa-navy)]/30 rounded-lg p-6 border border-[var(--sa-gold)]/30">
        <h2 className="text-xl font-semibold text-[var(--sa-gold)] mb-4">Overview</h2>
        <div className="space-y-4 text-[var(--sa-cream)]/90">
          <p>
            The Marine Corps&apos; very existence depends on public support. As a public institution, the Marine Corps
            has an obligation to provide timely and accurate information to American taxpayers. What the public thinks
            depends on what the public hears. Most people gain knowledge and appreciation of the Marine Corps not from
            direct contact, but from remote observation through media.
          </p>
          <p>
            DoD policy is clear: <strong>&quot;Maximum disclosure with minimum delay.&quot;</strong> Information will be
            withheld only when disclosure would adversely affect national security or threaten the safety or privacy
            of service members. As commander, you are a spokesperson for the Corps. You must keep the conduit of
            communication free of obstruction by providing honest and accurate information to the public.
          </p>
          <p>
            Your <Acronym title="Communication Strategy and Operations">COMMSTRAT</Acronym> office is your valuable
            resource in dealing with media. Prior planning is critical. Contact your local COMMSTRAT officer before
            granting any interview.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Communication Directorate Media Training Guide</li>
              <li>• DoD Principles of Information</li>
              <li>• SECNAVINST 5720.44C</li>
              <li>• DoD 5400.7-R (<Acronym title="Freedom of Information Act">FOIA</Acronym>)</li>
            </ul>
          </div>
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key Principles</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• <strong>Public Trust:</strong> Marine Corps exists because public insists</li>
              <li>• <strong>Maximum Disclosure:</strong> Minimum delay</li>
              <li>• <strong>Honesty:</strong> Never shade the truth</li>
              <li>• <strong>Preparation:</strong> Contact COMMSTRAT before interviews</li>
            </ul>
          </div>
        </div>
      </div>

      {/* DoD Principles of Information */}
      <CollapsibleSection title="DoD Principles of Information" icon={Globe} defaultOpen={true}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Policy</h4>
            <p className="text-[var(--sa-cream)]/90">
              It is the policy of the Department of Defense to make available timely and accurate information so
              that the public, Congress, and the news media may assess and understand the facts about national
              security and defense strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "1",
                text: "Information will be made fully and readily available, consistent with statutory requirements, unless release is precluded by current and valid security classification"
              },
              {
                num: "2",
                text: "A free flow of general and military information will be made available without censorship or propaganda to service members and their dependents"
              },
              {
                num: "3",
                text: "Information will not be classified or otherwise withheld to protect the government from criticism or embarrassment"
              },
              {
                num: "4",
                text: "Information will be withheld only when disclosure would adversely affect national security or threaten safety or privacy of service members"
              }
            ].map((principle) => (
              <div key={principle.num} className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border-l-4 border-[var(--sa-gold)]">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--sa-gold)] text-[var(--sa-navy)] font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    {principle.num}
                  </span>
                  <p className="text-sm text-[var(--sa-cream)]/90">{principle.text}</p>
                </div>
              </div>
            ))}
          </div>

          <InfoCard variant="warning">
            <strong>Propaganda has no place in Department of Defense public affairs programs.</strong> The sole
            purpose of public affairs activity is to expedite the flow of information to the public.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Role of COMMSTRAT Office */}
      <CollapsibleSection title="Role of the COMMSTRAT Office" icon={Users} defaultOpen={true}>
        <div className="space-y-6">
          <p className="text-[var(--sa-cream)]/90">
            Your <Acronym title="Communication Strategy and Operations">COMMSTRAT</Acronym> office provides
            comprehensive support before, during, and after media engagements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-t-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Before Interview
              </h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Advise if interview is authorized, appropriate, and a good idea</li>
                <li>• Research potential interview issues</li>
                <li>• Identify questions likely to be asked</li>
                <li>• Assist in preparation</li>
                <li>• Review possible questions and answers</li>
                <li>• Conduct one-on-one rehearsals</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-t-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                <Mic className="w-4 h-4" /> During Interview
              </h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Make all arrangements (ground rules, time, location)</li>
                <li>• Monitor interview for in-house record</li>
                <li>• Note items to be provided later</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-t-4 border-purple-500">
              <h4 className="font-semibold text-purple-400 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" /> After Interview
              </h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Act as liaison with news organization</li>
                <li>• Provide follow-up video copies and news clippings</li>
                <li>• Conduct after-action review</li>
                <li>• Provide feedback on message effectiveness</li>
              </ul>
            </div>
          </div>

          <InfoCard variant="tip">
            <strong>COMMSTRAT personnel have been trained to tell you the bad news as well as the good news.</strong> Make
            it easy for them to be absolutely honest, even critical, with you.
          </InfoCard>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4" /> HQMC Contacts
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--sa-gold)]" />
                <div>
                  <p className="font-medium text-[var(--sa-cream)]">Communication Directorate</p>
                  <p className="text-sm text-[var(--sa-cream)]/80">CDOPS@usmc.mil | 703-693-2340</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Newspaper className="w-5 h-5 text-[var(--sa-gold)]" />
                <div>
                  <p className="font-medium text-[var(--sa-cream)]">Media Team</p>
                  <p className="text-sm text-[var(--sa-cream)]/80">ontherecord@usmc.mil | 703-614-4309</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* The Media Interview */}
      <CollapsibleSection title="The Media Interview" icon={Video}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Understanding Media Constraints</h4>
            <p className="text-[var(--sa-cream)]/90 mb-3">
              Time and content are the most important factors:
            </p>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Video tape rushed to studio, edited, shown in less than 12 hours</li>
              <li>• Lengthy newspaper interview condensed to 10-20 column inches</li>
              <li>• Television: more than an hour of film generates about 60 seconds of usable footage</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border border-[var(--sa-gold)]/30">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Key Interview Technique</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Express major points in short <strong>10-20 second</strong> statements</li>
                <li>• Put your message up front</li>
                <li>• Elaborate only after main points established</li>
              </ul>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Do not try to memorize response</li>
                <li>• Develop understanding of one or two main points</li>
                <li>• Condense main points into <strong>20-30 second</strong> statement</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Keep Press Informed</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Media have a job to do</li>
                <li>• Let media know your plans in as much detail as practical</li>
                <li>• Keep it informal</li>
                <li>• Media may help you reach Marine Corps families and public</li>
                <li>• Press can help acknowledge those involved</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Inexperienced Reporters</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Some will not know difference between colonel and corporal</li>
                <li>• Translate military terminology into civilian terms</li>
                <li>• Simple, plain English descriptions score points</li>
                <li>• Helpful attitude generates credibility</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 10 Rules of Good Media Relations */}
      <CollapsibleSection title="10 Rules of Good Media Relations" icon={MessageSquare} defaultOpen={true}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RuleCard
              number={1}
              title="Talk from public's viewpoint"
              description="Avoid jargon, acronyms. Use language public will understand, not service perspective."
            />
            <RuleCard
              number={2}
              title="Speak in personal experiences"
              description="Use examples people can relate to. Personal stories resonate more."
            />
            <RuleCard
              number={3}
              title="Never make statements you don't want quoted"
              description="Nothing is ever 'off the record.' Avoid 'no comment' which leads to suspicion."
            />
            <RuleCard
              number={4}
              title="Lead with the most important message"
              description="Put your key point up front. Don't bury the lead."
            />
            <RuleCard
              number={5}
              title="Do not argue or get mad"
              description="Makes you appear defensive, unprofessional. Outbursts become part of the story."
            />
            <RuleCard
              number={6}
              title="Restate objectionable comments favorably"
              description="Turn negative framing into positive messaging for your position."
            />
            <RuleCard
              number={7}
              title="Do not ramble"
              description="Stay focused on your key messages. Brevity is strength."
            />
            <RuleCard
              number={8}
              title="'I don't know' is not a bad answer"
              description="Shows you're not evasive. Never speculate. Find the answer and provide it later."
            />
            <RuleCard
              number={9}
              title="Do not shade the truth, even a little"
              description="A lie becomes the story. You will have no credibility."
            />
            <RuleCard
              number={10}
              title="Tell what they expect and need to know"
              description="And no more. Stay on message. Don't volunteer unnecessary information."
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* Public Speaking */}
      <CollapsibleSection title="Public Speaking" icon={Mic}>
        <div className="space-y-6">
          <p className="text-[var(--sa-cream)]/90">
            Speaking before a group of concerned citizens is the most effective way to tell the Marine Corps story.
            You can interact with audience members, observe their feedback, and modify comments accordingly.
          </p>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border border-amber-500/30">
            <h4 className="font-semibold text-amber-400 mb-3">Before Accepting an Invitation</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Is the audience right? (Do not address partisan political groups or extremist organizations in uniform)</li>
              <li>• Do not accept invitation unless proud of association with the group</li>
              <li>• Active duty members should not engage in partisan political activities</li>
              <li>• Political activity governed by DoDD 1344.10 and The Hatch Act of 1939</li>
              <li>• When in doubt, seek advice from COMMSTRAT and Legal Counsel</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Preparation</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Have something important to say</li>
                <li>• Pick a definite topic and research it</li>
                <li>• Organize main points</li>
                <li>• Know your audience and their interests</li>
                <li>• Check previous programs</li>
                <li>• Determine the occasion</li>
                <li>• Check out speaking location ahead of time</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Delivery Tips</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Arrive early to mingle with hosts and audience</li>
                <li>• Do not drink before your speech</li>
                <li>• Recognize notable civic or other leaders</li>
                <li>• Keep talk around 20 minutes, max 30</li>
                <li>• Prepare speeches triple-spaced, large type, all CAPS</li>
                <li>• Underline key points</li>
                <li>• Do not carry sentences from one page to another</li>
              </ul>
            </div>
          </div>

          <InfoCard variant="warning">
            <strong>Public speaking today is for attribution and may be shared on social media.</strong> Avoid Marine
            jargon and acronyms. Do not make public promises or extend invitations unless you mean it.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Internal Communication */}
      <CollapsibleSection title="Internal Communication" icon={Users}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Town Hall Meetings</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Host quarterly or semiannual</li>
                <li>• SgtMaj and Commander together</li>
                <li>• Break down into groups: E-5 and below, E-5 and above, SNCOs and officers</li>
                <li>• Include E-5 in both enlisted groups</li>
                <li>• Listen to concerns</li>
                <li>• Do not get defensive</li>
                <li>• Sometimes acknowledging concerns is enough</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Weekly Formations</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• School circle to pass information</li>
                <li>• Pass out kudos</li>
                <li>• Do not forget about night crew</li>
                <li>• Quick school circle for night crew only</li>
                <li>• Makes them feel included</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Staff Meetings</h4>
              <p className="text-sm text-[var(--sa-cream)]/80 mb-2">At end of each meeting ask:</p>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• What is the next step?</li>
                <li>• What has been decided?</li>
                <li>• What action is to be taken?</li>
                <li>• Who is going to execute?</li>
                <li>• When?</li>
                <li>• Who will monitor?</li>
              </ul>
            </div>
          </div>

          <InfoCard variant="tip">
            <strong>Empower your people but ensure they understand:</strong> Boundaries of empowerment, what they
            can and cannot decide, and when they can and cannot use your name and title.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Guidance on Release of Information */}
      <CollapsibleSection title="Guidance on Release of Information" icon={Lock}>
        <div className="space-y-6">
          <ReleaseInfoCard
            title="Personnel Records"
            releasable={[
              "Name, rank, date commissioned or enlisted",
              "MOS and date of rank",
              "Home of record (state only)",
              "Official photograph (if available)",
              "Duty assignments (current and prior)",
              "Duty status, awards and decorations"
            ]}
            nonReleasable={[
              "Age, DOB, SSN",
              "Race",
              "Marital status",
              "Number and gender of dependents",
              "Civil education degrees, dates",
              "Civilian awards"
            ]}
            notes="Active duty Marines: Owning unit. Reserve Marines: MARFORRES. Former Marines: M&RA."
          />

          <ReleaseInfoCard
            title="Medical Matters"
            releasable={[
              "Number of injured",
              "Place of departure, destination (training missions)",
              "Medical facility",
              "Medical transportation used",
              "General medical condition (good, fair, serious, critical)",
              "Names after NOK notification or with permission"
            ]}
            nonReleasable={[
              "Gender, age",
              "Names of NOK and dependents",
              "Specifics on survivor benefits",
              "Prognosis information",
              "Psychiatric or mental health information",
              "Treatment involving sensitive information (sexual assault, criminal activity, drug abuse)",
              "Details, descriptions, or extent of specific injuries"
            ]}
            notes="Without HIPAA-compliant patient authorization, only one-word condition description may be released."
          />

          <ReleaseInfoCard
            title="OPSEC"
            releasable={[
              "Confirmation of aircraft plainly visible to public",
              "Approximate size of friendly forces",
              "Casualty figures (names after NOK + 24 hours)",
              "Results of completed missions",
              "Types and general amounts of ordnance expended",
              "Number of aerial combat missions flown"
            ]}
            nonReleasable={[
              "Future plans or operations",
              "Detailed information about vulnerabilities or weaknesses",
              "Rules of engagement",
              "Security measures, force protection, or deceptive actions",
              "Intelligence collection activities",
              "Information about downed aircraft during SAR operations",
              "Location and activities of special operations forces",
              "Details of active law enforcement investigations"
            ]}
          />

          <ReleaseInfoCard
            title="Accident/Incident"
            releasable={[
              "Type of accident",
              "Location and time",
              "Number of people involved",
              "Base, station, post, or organization",
              "Departure, destination sites (if unclassified)",
              "Type of equipment, weapon system (if unclassified)"
            ]}
            nonReleasable={[
              "Names of dead before NOK notified",
              "Names of MIA or POW before NOK notified and SAR terminated",
              "Classified information",
              "Speculation on cause",
              "Visual information that would adversely affect families, friends, or unit morale"
            ]}
          />

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4 border border-amber-500/30">
            <h4 className="font-semibold text-amber-400 mb-3">Death of Marine</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Death generally extinguishes privacy rights</li>
              <li>• Surviving family members may have legitimate privacy interest</li>
              <li>• Sensitive personal details may be withheld to protect family privacy</li>
              <li>• <strong>Release information no earlier than 24 hours after NOK notification</strong></li>
              <li>• Owning unit is release authority in coordination with Casualty Affairs</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Investigations</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Substance, details, or preliminary findings of ongoing investigations <strong>will not</strong> be publicly disclosed</li>
              <li>• Proper authority must authorize disclosure</li>
              <li>• Not all findings will always be determined releasable</li>
              <li>• Public statements must not imply all findings will be eventually disclosed</li>
              <li>• Chain of command clearance required prior to releasing information</li>
              <li>• General court martial convening authority provides final review for command investigations</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Freedom of Information Act */}
      <CollapsibleSection title="Freedom of Information Act (FOIA)" icon={FileText}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Purpose</h4>
            <p className="text-[var(--sa-cream)]/90">
              <Acronym title="Freedom of Information Act">FOIA</Acronym> is a disclosure law providing public access
              to Executive Branch records. The spirit is to release, not withhold. All information is releasable
              except nine specific categories.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Nine Exemptions</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { num: 1, title: "National Security" },
                { num: 2, title: "Internal Agency Rules" },
                { num: 3, title: "Exempt by Other Statute" },
                { num: 4, title: "Trade Secrets" },
                { num: 5, title: "Inter-Agency or Intra-Agency Memoranda" },
                { num: 6, title: "Personnel and Medical Files" },
                { num: 7, title: "Law Enforcement Information" },
                { num: 8, title: "Bank Reports" },
                { num: 9, title: "Oil and Gas Well Data" }
              ].map((exemption) => (
                <div key={exemption.num} className="bg-[var(--sa-navy)]/40 rounded p-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--sa-gold)] text-[var(--sa-navy)] font-bold flex items-center justify-center text-xs flex-shrink-0">
                    {exemption.num}
                  </span>
                  <span className="text-sm text-[var(--sa-cream)]/80">{exemption.title}</span>
                </div>
              ))}
            </div>
          </div>

          <InfoCard variant="info">
            <strong>Key Point:</strong> Exemptions allow government to refuse disclosure but do not require
            withholding. COMMSTRAT officers do not decide whether exempted information will be released but
            should understand the spirit is to release.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Best Practices for Bad News */}
      <CollapsibleSection title="Best Practices for Bad News" icon={AlertTriangle}>
        <div className="space-y-6">
          <p className="text-[var(--sa-cream)]/90">
            Proactive communication with media neutralizes critics and eliminates embarrassing distortions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Key Principles</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Prior planning is critical</li>
                <li>• Do not &quot;wing it&quot;</li>
                <li>• Contact COMMSTRAT officer before granting any interview</li>
                <li>• Be prepared to address difficult topics</li>
                <li>• Have key messages ready</li>
                <li>• Acknowledge issues honestly</li>
                <li>• Describe actions being taken</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Scenario Planning</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Prepare briefing cards for sensitive topics</li>
                <li>• Identify key messages and themes</li>
                <li>• Develop holding statements</li>
                <li>• Identify releasable facts</li>
                <li>• Know PA posture (active, reactive, passive)</li>
              </ul>
            </div>
          </div>

          <InfoCard variant="danger">
            <strong>Never &quot;wing it&quot;</strong> with media on difficult topics. Prior planning with COMMSTRAT
            is essential for effective messaging and protecting command interests.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Important Things to Know */}
      <CollapsibleSection title="Important Things to Know" icon={Lightbulb}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard variant="info">
            <strong>Public Support is Essential:</strong> Marine Corps exists because public insists it exists.
            Must continue to earn public trust and support. Media is the conduit between Marine Corps and public.
          </InfoCard>
          <InfoCard variant="info">
            <strong>Perception is Reality:</strong> Reality is not what is, but what it is perceived to be. Public
            perception derived through media. Much of public&apos;s high opinion derives from press accounts.
          </InfoCard>
          <InfoCard variant="tip">
            <strong>COMMSTRAT is Your Resource:</strong> Contact before any interview. Use their experience with
            media. They can provide best advice before, during, and after interview.
          </InfoCard>
          <InfoCard variant="danger">
            <strong>Honesty is Critical:</strong> Never shade the truth. A lie becomes the story. Credibility
            once lost is difficult to regain.
          </InfoCard>
          <InfoCard variant="warning" className="md:col-span-2">
            <strong><Acronym title="Operations Security">OPSEC</Acronym> is Everyone&apos;s Responsibility:</strong> Information
            must be reviewed and approved before release. Be aware of OPSEC issues in official events and informal
            situations. Do not disclose information that could harm operations or personnel.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Special Situations */}
      <CollapsibleSection title="Special Situations" icon={AlertCircle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-400 mb-2">High-Profile Incident</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Coordinate with COMMSTRAT immediately</li>
              <li>• Prepare holding statement</li>
              <li>• Identify key messages</li>
              <li>• Brief leadership before media engagement</li>
              <li>• Follow chain of command for release authority</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-amber-500">
            <h4 className="font-semibold text-amber-400 mb-2">Social Media Crisis</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Monitor social media through COMMSTRAT</li>
              <li>• Respond appropriately</li>
              <li>• Coordinate messaging</li>
              <li>• Do not let inaccurate information stand uncorrected</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-400 mb-2">Town Hall on Sensitive Topic</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Commander, SgtMaj, and SMEs present</li>
              <li>• Prepare for difficult questions</li>
              <li>• Have key messages ready</li>
              <li>• Do not get defensive</li>
              <li>• Acknowledge concerns, describe actions being taken</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-400 mb-2">Media Embed</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Coordinate through COMMSTRAT</li>
              <li>• Brief media on ground rules</li>
              <li>• Keep media informed of plans</li>
              <li>• Use media capability to tell positive stories</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Common Problems and Solutions */}
      <CollapsibleSection title="Common Problems and Solutions" icon={AlertTriangle}>
        <div className="space-y-4">
          {[
            {
              problem: "Caught off guard by media inquiry",
              solution: "Always coordinate through COMMSTRAT. Do not 'wing it.' Prepare before any interview. Have key messages ready."
            },
            {
              problem: "Marine jargon confuses reporter",
              solution: "Translate military terminology into civilian terms. Use plain English. Helpful attitude generates credibility."
            },
            {
              problem: "Negative story published",
              solution: "Proactive communication neutralizes critics. Work with COMMSTRAT on response. Correct factual errors through appropriate channels."
            },
            {
              problem: "OPSEC violation in media",
              solution: "Review information release procedures. Train personnel on what is releasable. Coordinate releases through COMMSTRAT. Learn from incident."
            },
            {
              problem: "Internal communication breakdown",
              solution: "Establish regular communication rhythm. Town halls, formations, staff meetings. Empower subordinates with clear boundaries. Follow up on decisions."
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
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" /> HQMC Contacts
            </h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• Communication Directorate: CDOPS@usmc.mil, 703-693-2340</li>
              <li>• Media Team: ontherecord@usmc.mil, 703-614-4309</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• Communication Directorate Media Training Guide</li>
              <li>• SECNAVINST 5720.44C</li>
              <li>• DoD 5400.7-R (FOIA)</li>
              <li>• DoD 5400.11-R (Privacy Program)</li>
              <li>• DoDD 1344.10 (Political Activity)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Resources</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="https://media.defense.gov/2025/Nov/05/2003819006/-1/-1/0/251103-USMCSOCIALMEDIAHANDBOOK.PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sa-gold)] hover:underline"
                >
                  USMC Social Media Handbook
                </a>
              </li>
              <li className="text-[var(--sa-cream)]/70">• Marine Corps Communication Playbook</li>
              <li className="text-[var(--sa-cream)]/70">• DINFOS Consolidated Guidelines for Release</li>
              <li className="text-[var(--sa-cream)]/70">• HHS Summary of HIPAA Privacy Rule</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
