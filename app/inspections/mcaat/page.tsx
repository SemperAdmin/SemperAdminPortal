import CatalogGrid from "../../../components/CatalogGrid";
import type { CatalogGroup } from "../../../data/links";
import Link from "next/link";
import { mcaatQuestions, getCategoryQuestionCount } from "../../../data/mcaatQuestions";

// CAC Required icon
function CACIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="CAC Required">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="4" y="6" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.3" />
      <circle cx="6.5" cy="8" r="1.5" fill="currentColor" />
      <rect x="11" y="6" width="9" height="1.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="11" y="9" width="6" height="1.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="4" y="13" width="16" height="4" rx="0.5" fill="currentColor" opacity="0.2" />
      <rect x="5" y="14" width="2" height="2" fill="currentColor" opacity="0.6" />
      <rect x="8" y="14" width="2" height="2" fill="currentColor" opacity="0.6" />
      <rect x="11" y="14" width="2" height="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

// Icon components for MCAAT tools
function LinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function TeamsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 7h5a1 1 0 0 1 1 1v5a3 3 0 0 1-3 3h-1v-5a3 3 0 0 0-3-3h-2V7h3z" opacity="0.5" />
      <path d="M14.5 5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM11 6h7a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4h-2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1V8a2 2 0 0 1 2-2h3z" />
    </svg>
  );
}

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: "navy" | "gold" | "red";
  requiresCAC?: boolean;
};

function ToolCard({ title, description, href, icon, color, requiresCAC }: ToolCardProps) {
  const colorClasses = {
    navy: "from-[var(--sa-navy)]/10 to-[var(--sa-navy)]/5 hover:from-[var(--sa-navy)]/20 hover:to-[var(--sa-navy)]/10 border-[var(--sa-navy)]/10 hover:border-[var(--sa-navy)]/30",
    gold: "from-[var(--sa-gold)]/10 to-[var(--sa-gold)]/5 hover:from-[var(--sa-gold)]/20 hover:to-[var(--sa-gold)]/10 border-[var(--sa-gold)]/20 hover:border-[var(--sa-gold)]/40",
    red: "from-[var(--sa-red)]/10 to-[var(--sa-red)]/5 hover:from-[var(--sa-red)]/20 hover:to-[var(--sa-red)]/10 border-[var(--sa-red)]/10 hover:border-[var(--sa-red)]/30",
  };
  const iconColorClasses = {
    navy: "text-[var(--sa-navy)] dark:text-[var(--sa-gold)]",
    gold: "text-[var(--sa-gold)]",
    red: "text-[var(--sa-red)]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col rounded-xl border bg-gradient-to-br p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 dark:from-white/5 dark:to-white/[0.02] dark:border-white/10 dark:hover:border-white/20 ${colorClasses[color]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/80 shadow-sm dark:bg-black/30 ${iconColorClasses[color]}`}>
          {icon}
        </div>
        <div className="flex items-center gap-1">
          {requiresCAC && <CACIcon className="h-4 w-4 text-[var(--sa-gold)]" />}
          <ExternalLinkIcon className="h-4 w-4 text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
      <h3 className="mt-3 font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
        {title}
      </h3>
      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
        {description}
      </p>
    </a>
  );
}

function QuickLinkCard({ title, href, icon, requiresCAC }: { title: string; href: string; icon: React.ReactNode; requiresCAC?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 shadow-sm transition-all hover:border-[var(--sa-navy)]/20 hover:shadow-md hover:-translate-y-0.5 dark:border-white/10 dark:bg-black/30 dark:hover:border-[var(--sa-gold)]/30"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--sa-navy)]/10 text-[var(--sa-navy)] dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)]">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-medium text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:group-hover:text-[var(--sa-gold)] text-sm">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-1">
        {requiresCAC && <CACIcon className="h-4 w-4 shrink-0 text-[var(--sa-gold)]" />}
        <ExternalLinkIcon className="h-4 w-4 shrink-0 text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </a>
  );
}

// Static constants defined outside component to avoid recreation on each render
const MCAAT_POAM = "https://usmc.sharepoint-mil.us/sites/DCMRA_mra_SemperAdmin/Template%20Toolbox/MCAAT%20POA%26M.xlsb?web=1";
const MCAAT_SHAREPOINT = "https://usmc.sharepoint-mil.us/sites/DCMRA_MCAAT/SitePages/Marine-Corps-Administrative-Analyst-Team.aspx";
const MCAAT_MARINES_MIL = "https://www.manpower.marines.mil/Plans-and-Policies/Manpower-Strategy/MCAAT/";

const topLinks = [
  { title: "MCAAT POA&M", href: MCAAT_POAM, icon: <ClipboardIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "FMF MCAAT SharePoint", href: MCAAT_SHAREPOINT, icon: <FolderIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "MCAAT Marines.mil", href: MCAAT_MARINES_MIL, icon: <GlobeIcon className="h-5 w-5" /> },
];

const tools = [
  { title: "Analysis Statistics (AS)", description: "View statistical analysis and metrics for MCAAT operations", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action?tableId=930", icon: <ChartIcon className="h-5 w-5" />, color: "navy" as const, requiresCAC: true },
  { title: "Finance Audit Scores - Current FY (FAS)", description: "Current fiscal year finance audit scores", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action?tableId=960", icon: <FileTextIcon className="h-5 w-5" />, color: "gold" as const, requiresCAC: true },
  { title: "Finance Audit Scores - Previous FYs (FAS)", description: "Historical finance audit scores from previous fiscal years", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action?tableId=961", icon: <FileTextIcon className="h-5 w-5" />, color: "navy" as const, requiresCAC: true },
  { title: "IPAC Unit Results (UR)", description: "Installation Personnel Administration Center unit results", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action?tableId=926", icon: <ChartIcon className="h-5 w-5" />, color: "gold" as const, requiresCAC: true },
  { title: "Marine Forces Reserve Unit Results (UR)", description: "MFR unit-level results and analysis", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action?tableId=927", icon: <UsersIcon className="h-5 w-5" />, color: "navy" as const, requiresCAC: true },
  { title: "Stand Alone Unit Results (UR)", description: "Results for stand-alone reporting units", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action?tableId=928", icon: <ChartIcon className="h-5 w-5" />, color: "gold" as const, requiresCAC: true },
  { title: "Supported Unit Results (UR)", description: "Results for supported units", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action?tableId=929", icon: <ChartIcon className="h-5 w-5" />, color: "navy" as const, requiresCAC: true },
  { title: "Admin POCA / Non-Compliance", description: "Point of contact compliance tracking", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action?tableId=897", icon: <UsersIcon className="h-5 w-5" />, color: "gold" as const, requiresCAC: true },
  { title: "Admin Schedule", description: "View and manage MCAAT schedules", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action?tableId=890", icon: <CalendarIcon className="h-5 w-5" />, color: "navy" as const, requiresCAC: true },
];

// SharePoint links - alphabetically ordered, all require CAC
const sharePointLinks = [
  { title: "ARDB Directives Management", href: "https://usmc.sharepoint-mil.us/sites/AR_DirectivesManagement/SitePages/ProjectHome.aspx", icon: <FolderIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "ARDB Directives Management Resources", href: "https://usmc.sharepoint-mil.us/sites/AR_DirectivesManagement/SitePages/RESOURCES.aspx", icon: <FolderIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Command Data and Analytics", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/TECOM_CDAO/SitePages/Command-Data-and-Analytics-Office.aspx", icon: <ChartIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Manpower & Personnel Administration Board", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mpa_opt", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Manpower Military Policy (MPO)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mp_mpo", icon: <FileTextIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "MISSA/MISSO Portal", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mi_missa", icon: <FolderIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "RFF SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy", icon: <FileTextIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Semper Admin SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin", icon: <FolderIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "TASO Mainframe", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/MCEN_SUPPORT_MCCOG/SitePages/Mainframe-Home.aspx", icon: <FolderIcon className="h-5 w-5" />, requiresCAC: true },
];

// More Great Links - alphabetically ordered
const moreGreatLinks = [
  { title: "Citi Manager", href: "https://home.cards.citidirect.com/CommercialCard/login", icon: <LinkIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "City Pair Program (CPP)", href: "https://www.gsa.gov/travel/plan-a-trip/transportation-airfare-rates-pov-rates-etc/airfare-rates-city-pair-program", icon: <GlobeIcon className="h-5 w-5" /> },
  { title: "Cutting Scores", href: "https://www.manpower.marines.mil/Manpower-Management/Performance-Branch/Promotion-Section/Enlisted-Promotions/#tab/sergeants-and-below", icon: <ChartIcon className="h-5 w-5" /> },
  { title: "DoD SAFE", href: "https://safe.apps.mil/", icon: <FolderIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "DTMO", href: "https://www.travel.dod.mil/", icon: <GlobeIcon className="h-5 w-5" /> },
  { title: "EDIPI to SSN Tool", href: "https://www2.manpower.usmc.mil/edipi/", icon: <LinkIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Electronic Benchbook", href: "https://www.jagcnet.army.mil/EBB/", icon: <FileTextIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Electronic Health Assessment", href: "https://eha.health.mil/EHA/", icon: <ClipboardIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "FACS", href: "https://www.igmc.marines.mil/Divisions/Inspections-Division/Checklists/", icon: <ClipboardIcon className="h-5 w-5" /> },
  { title: "FAST Tool", href: "https://fast.mfr.nps.edu/", icon: <LinkIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Game Changer", href: "https://gamechanger.advana.data.mil/", icon: <LinkIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Government Travel Charge Card P&R (RFF)", href: "https://usmc.sharepoint-mil.us/sites/DCPR_RFF_External/GTCC", icon: <FileTextIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "GSA SmartPay APC Resources", href: "https://www.citibank.com/tts/sa/federal-government-program-administrators-guides-and-forms/gsa.html", icon: <FileTextIcon className="h-5 w-5" /> },
  { title: "IGMC Connections", href: "https://www.igmc.marines.mil/Divisions/Connections/", icon: <LinkIcon className="h-5 w-5" /> },
  { title: "Intelink", href: "https://intelshare.intelink.gov/my.policy", icon: <GlobeIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "JET SharePoint", href: "https://usmc.sharepoint-mil.us/sites/SJA_JET/SitePages/Home.aspx", icon: <FolderIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "M&RA SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra", icon: <FolderIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "M&RA Site", href: "https://www.manpower.marines.mil/", icon: <GlobeIcon className="h-5 w-5" /> },
  { title: "MCA Information Awards", href: "https://www.information.marines.mil/MCA-Awards/", icon: <LinkIcon className="h-5 w-5" /> },
  { title: "MCAAT SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_MCAAT/SitePages/Marine-Corps-Administrative-Analyst-Team.aspx", icon: <FolderIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "MCILAP", href: "https://www.iandl.marines.mil/Resources/MCILAP/", icon: <LinkIcon className="h-5 w-5" /> },
  { title: "MHS GENESIS", href: "https://myaccess.dmdc.osd.mil/identitymanagement/app/login", icon: <LinkIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Microsoft 365 Roadmap", href: "https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=%5b%22DoD%22%5d", icon: <GlobeIcon className="h-5 w-5" /> },
  { title: "Military One Source", href: "https://www.militaryonesource.mil/", icon: <GlobeIcon className="h-5 w-5" /> },
  { title: "MRRS", href: "https://mrrs.dc3n.navy.mil/mrrs/secure/welcome.m", icon: <ClipboardIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "NARA Service Records", href: "https://www.archives.gov/veterans/military-service-records", icon: <FolderIcon className="h-5 w-5" /> },
  { title: "Naval Letter Format Generator", href: "https://marines.dev/navalletter/", icon: <FileTextIcon className="h-5 w-5" /> },
  { title: "Officer Naval and Enlistment Programs", href: "https://www.mcrc.marines.mil/Marine-Officer/Officer-Naval-Enlisted-Applicants/", icon: <UsersIcon className="h-5 w-5" /> },
  { title: "Periodic Health Assessment", href: "https://eha.health.mil/EHA/", icon: <ClipboardIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Personnel Administration School", href: "https://www.mccsss.marines.mil/Schools/Personnel-Administration-School/", icon: <UsersIcon className="h-5 w-5" /> },
  { title: "PFT/CFT Calculator", href: "https://www.hqmc.marines.mil/portals/211/fitnesscalc/calcmini.html", icon: <ChartIcon className="h-5 w-5" /> },
  { title: "Program Templates", href: "https://www.pendleton.marines.mil/Main-Menu/Staff-Agencies/Communication-Strategy-and-Operations-COMMSTRAT/Graphics/Program_Templates/", icon: <FileTextIcon className="h-5 w-5" /> },
  { title: "Red Cross Emergency Communications", href: "https://www.redcross.org/get-help/military-families/emergency-communication.html", icon: <LinkIcon className="h-5 w-5" /> },
];

// Teams Channels - alphabetically ordered, all require CAC
const teamsChannels = [
  { title: "Directives COI", href: "https://dod.teams.microsoft.us/l/team/19:dod:11971746bffc45719d033aec8362bb90%40thread.tacv2/conversations?groupId=09d2500a-e3c9-4efb-b840-1dbf825c8cfc&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "HQMC, MFPC DCIPS-PCR Transition", href: "https://dod.teams.microsoft.us/l/team/19:dod:4dcc8838ae4e48b785ce4977cb08cd53%40thread.tacv2/conversations?groupId=fda095c3-6af1-4101-8929-ce8f772e5e55&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "M&RA Key Leader Monthly Manpower Meeting", href: "https://dod.teams.microsoft.us/l/channel/19:dod:c20b6ec57ea047e088fafad563c02e32%40thread.skype/General?groupId=273b23ca-bf28-4337-8dc8-9628e4ee2515&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <CalendarIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "MISSO-02", href: "https://dod.teams.microsoft.us/l/team/19:dod:7f4ddd71c9484bf584cc63b6a1dd3bf3%40thread.skype/conversations?groupId=a41eb10c-8e15-43f7-98cb-494ed593d790&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "MISSO-03/06", href: "https://dod.teams.microsoft.us/l/team/19:dod:f0483ec29ef441a7bc13bd6f6ec1b7eb%40thread.skype/conversations?groupId=228439f5-b545-4e58-90ed-1270f9370550&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "MISSO-09", href: "https://dod.teams.microsoft.us/l/team/19:dod:4e6ec9ba34c0409480822e46c9d619f6%40thread.tacv2/conversations?groupId=174c90ac-736c-4702-b816-b6312012fc8e&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "MISSO-16/17", href: "https://dod.teams.microsoft.us/l/team/19:dod:d55c88848dda48f6a6591c8abdb468a3%40thread.skype/conversations?groupId=0895f5f9-e707-49a9-b9b8-a780f689a36b&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "MISSO-27", href: "https://dod.teams.microsoft.us/l/team/19:dod:08d880cf79634e439386cea7cb744c62%40thread.tacv2/conversations?groupId=7fee38ca-16af-4033-b942-5315c450d94e&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Records Management Training", href: "https://dod.teams.microsoft.us/l/team/19:dod:41a3f07c26d24a9a87c6289f270850f7%40thread.tacv2/conversations?groupId=469fd377-2963-4696-99e0-391c35cca74e&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "Semper Admin", href: "https://dod.teams.microsoft.us/l/team/19:dod:570243b431724971aeff925ef3cca4d8%40thread.tacv2/conversations?groupId=e130aa9e-3737-4d0e-baea-a03737570727&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "SMART", href: "https://dod.teams.microsoft.us/l/team/19:dod:70e4efb98721461e91daf6810bc72f71%40thread.tacv2/conversations?groupId=14aeb7fc-5b88-4d73-abfb-1e4e1f094cf1&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "USMC Administrators", href: "https://dod.teams.microsoft.us/l/team/19:dod:e0b755c8963f41b9b611a56b2a4902e6%40thread.skype/conversations?groupId=6a3d244f-49ed-4396-9bec-d50770c96ca3&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
  { title: "USMC GTCC IBA APCs", href: "https://dod.teams.microsoft.us/l/team/19:dod:49d596f26c5441d1a8dd8744e228f53c%40thread.tacv2/conversations?groupId=6a7d7191-1780-48f1-8cab-a696d6995fd7&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", icon: <UsersIcon className="h-5 w-5" />, requiresCAC: true },
];

const financeChecklist: CatalogGroup[] = [
  {
    name: "MCAAT Finance Checklist",
    items: [
      { title: "Administrative Management", href: MCAAT_SHAREPOINT },
      { title: "Fiscal Processes", href: MCAAT_SHAREPOINT },
      { title: "Internal Audit Processes", href: MCAAT_SHAREPOINT },
      { title: "Pay Processes", href: MCAAT_SHAREPOINT },
      { title: "Separation Processes", href: MCAAT_SHAREPOINT },
      { title: "Travel Processes", href: MCAAT_SHAREPOINT },
    ],
  },
];

export default function MCAATPage() {
  const totalQuestions = mcaatQuestions.reduce((sum, cat) => sum + getCategoryQuestionCount(cat), 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Marine Corps Administrative Analysis Team (MCAAT)
        </h1>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Top links, tools, and inspection question checklists aligned with MCAAT requirements.
        </p>
      </div>

      {/* Top Links Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center gap-2 mb-4">
          <LinkIcon className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MCAAT Top Links
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topLinks.map((link) => (
            <QuickLinkCard key={link.title} {...link} />
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center gap-2 mb-4">
          <ChartIcon className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MCAAT Tools
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </section>

      {/* SharePoints Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center gap-2 mb-4">
          <FolderIcon className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SharePoints
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sharePointLinks.map((link) => (
            <QuickLinkCard key={link.title} {...link} />
          ))}
        </div>
      </section>

      {/* More Great Links Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center gap-2 mb-4">
          <LinkIcon className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            More Great Links
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moreGreatLinks.map((link) => (
            <QuickLinkCard key={link.title} {...link} />
          ))}
        </div>
      </section>

      {/* Teams Channels Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center gap-2 mb-4">
          <TeamsIcon className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Teams Channels
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {teamsChannels.map((link) => (
            <QuickLinkCard key={link.title} {...link} />
          ))}
        </div>
      </section>

      {/* Admin Inspection Questions Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Admin Inspection Questions by Category
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Select a category to view questions organized by unit type (Reporting, IPAC, Supporting)
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-[var(--sa-navy)]/10 px-3 py-1.5 dark:bg-[var(--sa-cream)]/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {totalQuestions} Total Questions
            </span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mcaatQuestions.map((category) => {
            const questionCount = getCategoryQuestionCount(category);
            return (
              <Link
                key={category.slug}
                href={`/inspections/mcaat/questions/${category.slug}`}
                className="group flex flex-col rounded-lg border border-black/5 bg-[var(--sa-cream)]/20 p-4 transition hover:border-[var(--sa-navy)]/20 hover:bg-[var(--sa-cream)]/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-[var(--sa-gold)]/30 dark:hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:group-hover:text-[var(--sa-gold)]">
                    {category.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-[var(--sa-navy)]/10 px-2 py-0.5 text-xs font-bold text-[var(--sa-navy)] dark:bg-[var(--sa-cream)]/10 dark:text-[var(--sa-cream)]">
                    {questionCount}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs text-[var(--sa-navy)]/60 dark:text-[var(--sa-cream)]/60">
                  <span>View questions</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition group-hover:translate-x-0.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Finance Checklist Section */}
      <CatalogGrid groups={financeChecklist} columns stackTitles />
    </div>
  );
}
