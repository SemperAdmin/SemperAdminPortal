"use client";

import { useState } from "react";
import { FISCAL_URLS } from "../../data/references";
import {
  DollarSign,
  ClipboardList,
  Users,
  Package,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  Shield,
  Wrench,
  Search,
  Database,
  UserCheck,
  Calendar,
  Lock,
  Phone
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

function AppointmentCard({
  title,
  requirements,
  responsibilities,
  notes
}: {
  title: string;
  requirements: string[];
  responsibilities: string[];
  notes?: string;
}) {
  return (
    <div className="bg-[var(--sa-navy)]/30 border border-[var(--sa-gold)]/30 rounded-lg p-4">
      <h4 className="font-semibold text-[var(--sa-gold)] mb-3">{title}</h4>

      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-[var(--sa-cream)] mb-1">Appointment:</p>
          <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)] mt-1">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-[var(--sa-cream)] mb-1">Responsibilities:</p>
          <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
            {responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[var(--sa-cream)]/60 mt-1">◦</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {notes && (
          <p className="text-xs text-[var(--sa-cream)]/70 italic mt-2">{notes}</p>
        )}
      </div>
    </div>
  );
}

function TimelineCard({
  threshold,
  label,
  items,
  color = "gold"
}: {
  threshold: string;
  label: string;
  items: string[];
  color?: "gold" | "blue" | "green";
}) {
  const borderColors = {
    gold: "border-[var(--sa-gold)]",
    blue: "border-blue-500",
    green: "border-green-500"
  };

  return (
    <div className={`bg-[var(--sa-navy)]/30 rounded-lg p-4 border-l-4 ${borderColors[color]}`}>
      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-[var(--sa-gold)]" />
        <span className="font-semibold text-[var(--sa-gold)]">{threshold}</span>
      </div>
      <p className="text-sm font-medium text-[var(--sa-cream)] mb-2">{label}</p>
      <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-[var(--sa-gold)] mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FiscalPropertyContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[var(--sa-navy)] to-[var(--sa-navy)]/80 rounded-lg p-8 border border-[var(--sa-gold)]/30">
        <div className="flex items-start gap-4">
          <DollarSign className="w-12 h-12 text-[var(--sa-gold)] flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-[var(--sa-cream)] mb-2">Fiscal and Property Accountability</h1>
            <p className="text-xl text-[var(--sa-cream)]/80">
              Fund control, budget execution, supply account management, and property investigations
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-[var(--sa-navy)]/30 rounded-lg p-6 border border-[var(--sa-gold)]/30">
        <h2 className="text-xl font-semibold text-[var(--sa-gold)] mb-4">Overview</h2>
        <div className="space-y-4 text-[var(--sa-cream)]/90">
          <p>
            Financial management is inherent in command. As commander, you are accountable for the property
            entrusted to your unit and responsible for ensuring funds are legally and judiciously spent.
            Per MCO 4400.150, the CO of a unit having a consumer-level supply account is accountable by
            virtue of acceptance of command. You have been appointed by the Commandant to assume all
            fiduciary, accountability, and policy requirements.
          </p>
          <p>
            Your Supply Officer provides unbiased and non-filtered information directly to you on matters
            pertaining to money and accountability. The Responsible Officer (<Acronym title="Responsible Officer">RO</Acronym>)
            is the most critical billet holder in maintaining accountability of your unit&apos;s equipment.
            Together with effective systems and procedures, these personnel form the backbone of your
            fiscal and property accountability program.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• MCO 4400.201 (Management of Property)</li>
              <li>• Consumer Level Supply Policy Manual</li>
              <li>• SECNAVINST 7000.27D (Fund Control)</li>
              <li>• MARADMIN 350/11 (Fund Control Training)</li>
            </ul>
          </div>
          <div className="bg-[var(--sa-navy)]/50 rounded p-4">
            <h3 className="font-semibold text-[var(--sa-gold)] mb-2">Key Systems</h3>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• <Acronym title="Global Combat Support System - Marine Corps">GCSS-MC</Acronym> (Property System of Record)</li>
              <li>• <Acronym title="Total Force Structure Management System">TFSMS</Acronym> (T/O&amp;E publication)</li>
              <li>• CRANE (Small Arms Registry)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Commander Requirements */}
      <CollapsibleSection title="Commander Requirements" icon={ClipboardList} defaultOpen={true}>
        <div className="space-y-4">
          <TimelineCard
            threshold="Prior to Change of Command"
            label="Receive Certificate of Relief"
            color="gold"
            items={[
              "Outgoing CO provides letter indicating status of supply operations",
              "Should include: Accountability status, Fiscal status, Investigations status",
              "Reference: MCO 4400.201 Volume 3"
            ]}
          />

          <TimelineCard
            threshold="Within 2 Weeks of Assuming Command"
            label="Complete Fund Control Personnel Training"
            color="blue"
            items={[
              "Provide certificates to comptroller or fiscal officer for centralized reporting",
              "Appropriations Law: Refresh within three years",
              "DON Budget Execution: Once in a career",
              "Courses: FMF7606 (Budget Execution), FMF1138 (Appropriations Law), FMF7040 (Fiscal Law 301)"
            ]}
          />

          <TimelineCard
            threshold="Within 60 Days of Assuming Command"
            label="Review, Inspect, and Accept Account"
            color="green"
            items={[
              "Ensure Supply Officer conducts all necessary supply inspections",
              "Determine condition of materiel, records, and operating procedures",
              "Report any discrepancies before accepting the account",
              "You have 60 days to review before you accept responsibility"
            ]}
          />

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Training Links</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href={FISCAL_URLS.PBIS_TRAINING} target="_blank" rel="noopener noreferrer"
                     className="text-[var(--sa-gold)] hover:underline flex items-center gap-1">
                    DON FM Training <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href={FISCAL_URLS.FM_ONLINE} target="_blank" rel="noopener noreferrer"
                     className="text-[var(--sa-gold)] hover:underline flex items-center gap-1">
                    DoD FM Online <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">References</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• SECNAVINST 7000.27D</li>
                <li>• ASN (FM&amp;C) memo of 17 Oct 2018</li>
                <li>• MARADMIN 350/11</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Key Appointments */}
      <CollapsibleSection title="Key Appointments" icon={Users} defaultOpen={true}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AppointmentCard
              title="Supply Officer"
              requirements={[
                "Appoint in writing with appointment letter AND DD Form 577",
                "Serves as special staff officer (reports directly to CO)",
                "Should have open door policy to CO"
              ]}
              responsibilities={[
                "Ensure CO is aware of unit's current supply and fiscal postures",
                "Perform functions of Certifying Officer and Supply Resource Manager",
                "Serve as Fiscal/Budget and Accounting Officer, Fund Holder",
                "Serve as Supply AIS Administrator",
                "Provide unbiased, non-filtered information on money and accountability"
              ]}
              notes="Outgoing Supply Officer provides certificate of relief. Relieving Supply Officer has 30 days to inspect and report."
            />

            <AppointmentCard
              title="Responsible Officer (RO)"
              requirements={[
                "Appoint in writing with appointment letter",
                "Must receive training when appointed",
                "Most critical billet holder in maintaining accountability"
              ]}
              responsibilities={[
                "Inventory and maintain all assigned assets",
                "Employ equipment within standards in technical directives",
                "Coordinate and report all equipment transfers with Supply Officer",
                "Frequent communication with Supply Officer on equipment status"
              ]}
              notes="If RO separated from account (TAD over 60 days or detaching), appoint new RO with joint inventory."
            />

            <AppointmentCard
              title="Unit User Account Manager (UUAM)"
              requirements={[
                "Appoint in writing (appointment letter and DD 2875 SAAR)",
                "Assign primary and alternate",
                "UUAM cannot be a RO (prevents conflicts of interest)"
              ]}
              responsibilities={[
                "Critical billet in functioning of GCSS-MC",
                "Assigns, revokes, and manages GCSS-MC user system roles",
                "Prevents unauthorized obligations of funds and maintenance"
              ]}
            />

            <AppointmentCard
              title="Financial Approver"
              requirements={[
                "Appoint in writing"
              ]}
              responsibilities={[
                "Authority to obligate and expense funds within GCSS-MC on behalf of unit"
              ]}
            />

            <AppointmentCard
              title="AA&E Officer"
              requirements={[
                "Commander must appoint in writing",
                "Must conduct 100% physical inventory within 30 days",
                "Complete review of all AA&E within 30 days"
              ]}
              responsibilities={[
                "All matters pertaining to AA&E: physical security, annual screening, monthly inventories",
                "Expenditure reporting, reviewing ammunition reclassification messages",
                "Requirements for historical/trophy weapons",
                "Policy for privately-owned weapons stored in armory"
              ]}
            />

            <AppointmentCard
              title="Access Control Officer"
              requirements={[
                "Appoint in writing"
              ]}
              responsibilities={[
                "Responsible for all security-related key and lock control functions"
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">A&amp;E Audit and Verification Officer/SNCO</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Disinterested Marine with no ammunition security or accountability responsibilities</li>
                <li>• Audits expenditure reports for completeness</li>
                <li>• Validates accurate accounting of all A&amp;E expended</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Personal Effects Inventory Board (PEIB)</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Ensure PEIB assigned at least to Company, Battery, or Detachment level</li>
                <li>• Train appointed personnel on PE requirements and inventory procedures</li>
              </ul>
            </div>
          </div>

          <InfoCard variant="warning">
            <strong>RO CMR Reconciliation:</strong> ROs have 15 days to reconcile{" "}
            <Acronym title="Consolidated Memorandum Receipt">CMR</Acronym> and report discrepancies.
            One-time 15-day extension available (for first-time ROs or difficult inventories only).
            Commander determines frequency: quarterly or semi-annually.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Financial Management */}
      <CollapsibleSection title="Financial Management" icon={DollarSign}>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Budget Formulation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
                <p className="font-medium text-[var(--sa-cream)] mb-2">Commander Responsibilities:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Determine operational objectives</li>
                  <li>• Formulate financial plans and budgets</li>
                  <li>• Know types of funds allocated, limitations, and how to realign</li>
                </ul>
              </div>

              <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
                <p className="font-medium text-[var(--sa-cream)] mb-2">Supply Officer Role:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Determine command&apos;s financial requirements</li>
                  <li>• Use guidance from <Acronym title="Higher Headquarters">HHQ</Acronym> and historical records</li>
                  <li>• Consider previous FY financial performance data</li>
                  <li>• Anticipate next FY needs</li>
                </ul>
              </div>
            </div>

            <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
              <p className="font-medium text-[var(--sa-cream)] mb-2">Budget Formulation Tasks:</p>
              <ol className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)]">1.</span>
                  <span>Identify operational requirements to meet command goals and HHQ directives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)]">2.</span>
                  <span>Determine cost involved in meeting requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)]">3.</span>
                  <span>Prioritize and justify requirements within ceiling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)]">4.</span>
                  <span>Demonstrate efficient and effective use of resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)]">5.</span>
                  <span>Identify and prioritize unfunded deficiencies</span>
                </li>
              </ol>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Unfunded Deficiencies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
                <p className="font-medium text-[var(--sa-cream)] mb-2">Types:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• SL-3 deficiencies</li>
                  <li>• T/O&amp;E deficiencies</li>
                  <li>• Demand Supported Items (<Acronym title="Demand Supported Items">DSI</Acronym>) deficiencies</li>
                  <li>• Forecast supply support items for training or garrison</li>
                  <li>• TAD requirements</li>
                </ul>
              </div>

              <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
                <p className="font-medium text-[var(--sa-cream)] mb-2">Who Should Know:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• ROs</li>
                  <li>• Maintenance sections</li>
                  <li>• Supply Officer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Mid-Year Review (Typically January)
            </h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Reassess mission priorities</li>
              <li>• Submit funding shortfalls to Comptroller/Supply Officer</li>
              <li>• HQMC needs Commander input to articulate requirements to Congress</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Necessary Expense Analysis</h4>
            <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
              <p className="font-medium text-[var(--sa-cream)] mb-2">Three-part test before expenditure:</p>
              <ol className="text-sm text-[var(--sa-cream)]/80 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)]">1.</span>
                  <span>Verify expenditure is necessary to accomplish appropriation objective or contributes materially</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)]">2.</span>
                  <span>Assess expenditure is not prohibited by law (review legislation for restrictions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-gold)]">3.</span>
                  <span>Determine if expenditure is otherwise provided for (if two appropriations available, use most specific)</span>
                </li>
              </ol>
            </div>
          </div>

          <InfoCard variant="tip">
            <strong>Best Practices:</strong> Issue budget execution guidance specifying hierarchy of expenditures
            (e.g., corrective and preventive maintenance first, then SL-3 deficiencies). Create quarterly budgets
            to RO/Section level. Capture identified deficiencies via letter and have Supply Officer consolidate
            for Commander prioritization.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Property Accountability */}
      <CollapsibleSection title="Property Accountability" icon={Package}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3 flex items-center gap-2">
              <Database className="w-4 h-4" />
              Global Combat Support System - Marine Corps (<Acronym title="Global Combat Support System - Marine Corps">GCSS-MC</Acronym>)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-[var(--sa-cream)] mb-2">Purpose:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Accountable Property System of Record (<Acronym title="Accountable Property System of Record">APSR</Acronym>)</li>
                  <li>• Provides accountability, visibility, and readiness information</li>
                  <li>• Decision tool for equipment management</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-[var(--sa-cream)] mb-2">Support Network:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• HQMC and MARFORs developed GCSS-MC Support Network</li>
                  <li>• Logistics Systems Coordination Office (<Acronym title="Logistics Systems Coordination Office">LSCO</Acronym>)</li>
                  <li>• Logistics Systems Functional Resource Group (<Acronym title="Logistics Systems Functional Resource Group">LSFRG</Acronym>)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Consolidated Memorandum Receipt (<Acronym title="Consolidated Memorandum Receipt">CMR</Acronym>)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-[var(--sa-cream)] mb-2">Purpose:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Documents equipment assigned to each RO</li>
                  <li>• Primary record for property accountability</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-[var(--sa-cream)] mb-2">Reconciliation:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Joint inventory validating quantity, NSN, and serial number</li>
                  <li>• RO physically &quot;touches&quot; each item</li>
                  <li>• Frequency: quarterly or semi-annually per Commander</li>
                  <li>• Report discrepancies to Supply Officer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Table of Organization and Equipment (T/O&amp;E)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-[var(--sa-cream)] mb-2">Location:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Published in <Acronym title="Total Force Structure Management System">TFSMS</Acronym></li>
                  <li>• Contains unit mission, logistics statement, personnel and equipment rated</li>
                  <li>• Information feeds into GCSS-MC</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-[var(--sa-cream)] mb-2">Review:</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Periodic validation required</li>
                  <li>• At minimum: Supply Officer, Supply Chief, MMO, Maintenance Chief, S-1, S-3, S-4 need TFSMS accounts</li>
                  <li>• Conduct annual equipment and personnel authorization review</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Inventory Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
                <p className="font-medium text-[var(--sa-cream)] mb-2">Annual Inventory (&quot;Wall to Wall&quot;)</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Required annually</li>
                  <li>• Not required if wall-to-wall conducted with change of Supply Officer or CO</li>
                  <li>• Supply Officer provides report per Ground Supply Policy Manual</li>
                </ul>
              </div>

              <div className="bg-[var(--sa-navy)]/40 rounded-lg p-4">
                <p className="font-medium text-[var(--sa-cream)] mb-2">Monthly Serialized Inventory (<Acronym title="Monthly Serialized Inventory">MSI</Acronym>) of Small Arms and AA&amp;E</p>
                <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                  <li>• Appoint disinterested third party each month</li>
                  <li>• Inventory Officer signs MSI and submits to Supply Officer</li>
                  <li>• Supply Officer has 5 days for causative research</li>
                  <li>• Commander provides endorsement within 5 working days</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">CRANE (Naval Surface Warfare Center) Annual Verification</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Means by which Marine Corps tracks weapons</li>
              <li>• Report changes in weapons inventories as they occur</li>
              <li>• Commander certifies NSWC Crane Annual Verification Report</li>
              <li>• Return to Marine Corps Registry within <strong>45 days</strong> of listing date</li>
            </ul>
          </div>

          <InfoCard variant="tip">
            <strong>Best Practice:</strong> Coordinate with Operations Officer and ROs for best timeframe.
            Combine CMR reconciliation with annual inventory. Conduct MSIs and corrections within same calendar month.
          </InfoCard>
        </div>
      </CollapsibleSection>

      {/* Adjustments and Investigations */}
      <CollapsibleSection title="Adjustments and Investigations" icon={Search}>
        <div className="space-y-6">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Vouchering Gain and Loss Transactions</h4>
            <p className="text-sm text-[var(--sa-cream)] mb-2">Commander Authorization Required For:</p>
            <ol className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">1.</span>
                <span>Controlled items (locally and Marine Corps controlled)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">2.</span>
                <span>Non-serialized items with extended dollar value of <strong>$2,500 or more</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--sa-gold)]">3.</span>
                <span>Serialized items with extended dollar value of <strong>$800 or more</strong> (including serial number changes)</span>
              </li>
            </ol>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Money Value Gain Loss Notice (<Acronym title="Money Value Gain Loss">MVGL</Acronym>)</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1 mb-3">
              <li>• Listing of all gains/losses processed in GCSS-MC</li>
              <li>• Signed by CO or acting CO</li>
            </ul>
            <div className="bg-[var(--sa-navy)]/50 rounded p-3 text-sm italic text-[var(--sa-cream)]/80">
              Certifying Statement: &quot;I have reviewed the documents on this notice and verify that all required
              documentation has been properly certified.&quot;
            </div>
            <InfoCard variant="tip" className="mt-3">
              <strong>Best Practice:</strong> Monitor this report as indicator of how well assets are being controlled.
            </InfoCard>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Request for Investigation (<Acronym title="Request for Investigation">RFI</Acronym>)</h4>
            <p className="text-sm text-[var(--sa-cream)] mb-2">Purpose: Vehicle to determine if formal investigation is warranted</p>
            <div className="bg-[var(--sa-navy)]/50 rounded p-3">
              <p className="text-sm font-medium text-[var(--sa-cream)] mb-2">Process:</p>
              <ol className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>1. Discrepancy identified (variance in NSN, serial number, or quantity)</li>
                <li>2. RO provides RFI/Discrepancy Letter with remarks on believed cause</li>
                <li>3. Supply Officer has <strong>5 calendar days</strong> for causative research and recommendations</li>
                <li>4. Commander has <strong>5 calendar days</strong> to return RFI or appoint Investigating Officer</li>
                <li>5. If investigation has little chance of resolving, Commander may direct Supply Officer (in writing) to adjust records</li>
              </ol>
            </div>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Missing Lost Stolen or Recovered Government Property (<Acronym title="Missing Lost Stolen or Recovered">MLSR</Acronym>)</h4>
            <InfoCard variant="danger" className="mb-3">
              <strong>Timeline:</strong> If you discover MLSR property, you have <strong>48 hours</strong> to initiate an MLSR.
            </InfoCard>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• MLSR not required for all gain/loss transactions</li>
              <li>• Must be physical gain or loss that cannot be explained through causative research</li>
              <li>• &quot;Recovered&quot; MLSR often overlooked - equipment discovered must also be reported</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* AA&E */}
      <CollapsibleSection title="Arms, Ammunition and Explosives (AA&E)" icon={Shield}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Security Requirements</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Initial and annual screenings required</li>
                <li>• Commander responsible for ensuring screenings completed</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Monthly Inventories</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Disinterested third party</li>
                <li>• Complete within same calendar month</li>
                <li>• Report to Commander with recommendations</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Ammunition Accountability</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• Separate accounting from training ammunition</li>
                <li>• Quarterly reviews required</li>
              </ul>
            </div>

            <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
              <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Privately-Owned Weapons</h4>
              <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
                <li>• If stored in armory, AA&amp;E Officer ensures policy authorized by CO</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Personal Effects */}
      <CollapsibleSection title="Personal Effects (PE)" icon={UserCheck}>
        <div className="space-y-4">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Commander Responsibilities</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Ensure PEIB assigned at appropriate level</li>
              <li>• Ensure Supply trains appointed personnel</li>
              <li>• Ensure leaders promptly identify PE cases</li>
              <li>• Request Supply assistance for inventory, storage, disposition</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-3">PE Process</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Inventory when required (hospitalization, unauthorized absence, death, incarceration)</li>
              <li>• Proper storage and documentation</li>
              <li>• Disposition per regulations</li>
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
            <strong>You Are Accountable</strong>
            <p className="mt-1 text-sm">
              By virtue of acceptance of command, you are accountable for the supply account.
              Even if AO responsibilities delegated, CO remains ultimately responsible.
            </p>
          </InfoCard>

          <InfoCard variant="info">
            <strong>Supply Officer Reports to You</strong>
            <p className="mt-1 text-sm">
              Special staff officer with direct access. Open door policy on money and accountability.
              Unbiased and non-filtered information.
            </p>
          </InfoCard>

          <InfoCard variant="warning">
            <strong>RO is Critical</strong>
            <p className="mt-1 text-sm">
              Most critical billet for equipment accountability. Must understand role and your expectations.
              Training and oversight are essential.
            </p>
          </InfoCard>

          <InfoCard variant="info">
            <strong>Fund Control Training Required</strong>
            <p className="mt-1 text-sm">
              Complete within two weeks of assuming command. Appropriations Law refresh within three years.
              Budget Execution once in career.
            </p>
          </InfoCard>
        </div>

        <div className="mt-4 bg-[var(--sa-navy)]/50 rounded-lg p-4">
          <h4 className="font-semibold text-[var(--sa-gold)] mb-3">Key Timelines</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-[var(--sa-navy)]/50 rounded p-2">
              <p className="text-[var(--sa-cream)]/60">Certificate of Relief</p>
              <p className="text-[var(--sa-cream)] font-medium">Before COC</p>
            </div>
            <div className="bg-[var(--sa-navy)]/50 rounded p-2">
              <p className="text-[var(--sa-cream)]/60">Supply Inspections</p>
              <p className="text-[var(--sa-cream)] font-medium">30/60 days</p>
            </div>
            <div className="bg-[var(--sa-navy)]/50 rounded p-2">
              <p className="text-[var(--sa-cream)]/60">MLSR Initiation</p>
              <p className="text-[var(--sa-cream)] font-medium">48 hours</p>
            </div>
            <div className="bg-[var(--sa-navy)]/50 rounded p-2">
              <p className="text-[var(--sa-cream)]/60">RFI Response</p>
              <p className="text-[var(--sa-cream)] font-medium">5 calendar days</p>
            </div>
            <div className="bg-[var(--sa-navy)]/50 rounded p-2">
              <p className="text-[var(--sa-cream)]/60">CMR Reconciliation</p>
              <p className="text-[var(--sa-cream)] font-medium">15 days (+15)</p>
            </div>
            <div className="bg-[var(--sa-navy)]/50 rounded p-2">
              <p className="text-[var(--sa-cream)]/60">CRANE Report</p>
              <p className="text-[var(--sa-cream)] font-medium">45 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Situations */}
      <CollapsibleSection title="Special Situations" icon={AlertTriangle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Unit Issue Facility (<Acronym title="Unit Issue Facility">UIF</Acronym>) Equipment</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Bulk issue for deploying units</li>
              <li>• Guard against loss - unit pays for replacements</li>
              <li>• Return equipment upon completion of deployment or exercise</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Individual Issue Facility (<Acronym title="Individual Issue Facility">IIF</Acronym>) Equipment</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• Standard equipment set (flak, helmet, etc.)</li>
              <li>• MEF pays for replacements with O&amp;MMC funding</li>
              <li>• Losses via NAVMC-6 or Missing Gear Statement</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Task-Organized Units</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• RO typically from deploying unit or parent unit S-4/Supply Officer</li>
              <li>• Coordinate accountability before and during deployment</li>
            </ul>
          </div>

          <div className="bg-[var(--sa-navy)]/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--sa-gold)] mb-2">Historical/Trophy Weapons</h4>
            <ul className="text-sm text-[var(--sa-cream)]/80 space-y-1">
              <li>• AA&amp;E Officer responsible for requirements</li>
              <li>• National Museum of the Marine Corps loans</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Common Problems and Solutions */}
      <CollapsibleSection title="Common Problems and Solutions" icon={Lightbulb}>
        <div className="space-y-4">
          {[
            {
              problem: "Discrepancy between physical inventory and property records",
              solution: "Conduct causative research. If discrepancy cannot be rectified with documentation, initiate RFI. Supply Officer has 5 days for research, Commander has 5 days to respond."
            },
            {
              problem: "Equipment lost during deployment",
              solution: "Document circumstances. Initiate MLSR within 48 hours if required. Losses of UIF equipment result in unit paying for replacements."
            },
            {
              problem: "ROs not maintaining accountability",
              solution: "Ensure ROs trained upon appointment and twice yearly. Conduct spot checks. Require physical inventory where RO \"touches\" each item. Commander presence at reconciliations assigns importance."
            },
            {
              problem: "Budget shortfalls identified mid-year",
              solution: "Submit funding shortfalls during Mid-Year Review (typically January). Prioritize unfunded deficiencies. Realign funds within authority."
            },
            {
              problem: "CRANE report not certified timely",
              solution: "Return report to Marine Corps Registry within 45 days. Designate responsible party. Track weapons changes as they occur."
            },
            {
              problem: "Unauthorized fund obligations",
              solution: "Ensure UUAM properly assigns GCSS-MC roles. UUAM cannot be RO. Appoint Financial Approver in writing. Monitor MVGL for unauthorized adjustments."
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
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Training</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href={FISCAL_URLS.PBIS_TRAINING} target="_blank" rel="noopener noreferrer"
                   className="text-[var(--sa-gold)] hover:underline flex items-center gap-1">
                  DON FM Training <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={FISCAL_URLS.FM_ONLINE} target="_blank" rel="noopener noreferrer"
                   className="text-[var(--sa-gold)] hover:underline flex items-center gap-1">
                  DoD FM Online <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">Systems</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• <Acronym title="Global Combat Support System - Marine Corps">GCSS-MC</Acronym> (Property System of Record)</li>
              <li>• <Acronym title="Total Force Structure Management System">TFSMS</Acronym> (T/O&amp;E)</li>
              <li>• CRANE (Small Arms Registry)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--sa-cream)] mb-2">References</h3>
            <ul className="text-sm text-[var(--sa-cream)]/70 space-y-1">
              <li>• MCO 4400.201 (Management of Property)</li>
              <li>• Consumer Level Supply Policy Manual</li>
              <li>• SECNAVINST 7000.27D (Fund Control)</li>
              <li>• MARADMIN 350/11</li>
              <li>• <Acronym title="Inspector General of the Marine Corps">IGMC</Acronym> FA Checklist 4400.15</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
