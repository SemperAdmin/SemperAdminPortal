export type LinkItem = {
  title: string;
  href: string;
  description?: string;
};

export type LinkGroup = {
  name: string;
  items: LinkItem[];
};

export const linkGroups: LinkGroup[] = [
  {
    name: "SharePoint Portals",
    items: [
      {
        title: "Main SharePoint",
        href: "https://your.sharepoint.com/",
        description: "Root portal",
      },
      {
        title: "Team Site",
        href: "https://your.sharepoint.com/sites/team",
        description: "Team collaboration",
      },
    ],
  },
  {
    name: "Libraries",
    items: [
      {
        title: "Documents",
        href: "https://your.sharepoint.com/sites/team/Shared%20Documents",
      },
      {
        title: "Policies",
        href: "https://your.sharepoint.com/sites/team/Policies",
      },
    ],
  },
  {
    name: "Quick Links",
    items: [
      {
        title: "Requests",
        href: "https://your.sharepoint.com/sites/team/Lists/Requests",
      },
      {
        title: "Calendar",
        href: "https://your.sharepoint.com/sites/team/Calendar",
      },
    ],
  },
];

export type Role = "marines" | "administrators" | "leaders" | "commanders";

export type CatalogItem = {
  title: string;
  href?: string;
  roles?: Role[];
};

export type CatalogGroup = {
  name: string;
  items: CatalogItem[];
};

export const catalogGroups: CatalogGroup[] = [
  {
    name: "Semper Admin Links",
    items: [
      { title: "Semper Admin Links", href: "https://linktr.ee/semperadmin", roles: ["marines", "administrators", "leaders", "commanders"] },
      { title: "MarineNet MVS", href: "https://mcas-proxyweb.mcas-gov.us/certificate-checker?login=false&originalUrl=https://www.marinenet.usmc.mil.mcas-gov.us/MVS/Channel/Home.aspx?Id%3D1369%26McasTsid%3D20892&McasCSRF=b24072dc4dc986dc34413f132f47fad87c69b43251ff4b01ec56bd628ac48c1b", roles: ["administrators"] },
      { title: "TemplateToolBox", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/TemplateToolBox.aspx", roles: ["administrators", "leaders", "commanders"] },
      { title: "Semper Admin Teams Channel", href: "https://dod.teams.microsoft.us/l/team/19:dod:570243b431724971aeff925ef3cca4d8%40thread.tacv2/conversations?groupId=e130aa9e-3737-4d0e-baea-a03737570727&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["marines", "administrators", "leaders", "commanders"] },
    ],
  },
  {
    name: "Educational Links",
    items: [
      { title: "COL Training", href: "https://intelshare.intelink.gov/my.policy", roles: ["marines", "administrators"] },
      { title: "Digital University", href: "https://digitalu.af.mil/", roles: ["marines", "administrators"] },
      { title: "DoD MWR Libraries", href: "https://dodmwrlibraries.org/", roles: ["marines"] },
      { title: "Free Application for Federal Student Aid (FAFSA)", href: "https://studentaid.gov/h/apply-for-aid/fafsa", roles: ["marines"] },
      { title: "Joint Knowledge Online (JKO)", href: "https://jkodirect.jten.mil/Atlas2/page/login/Login.jsf", roles: ["marines", "administrators"] },
      { title: "Joint Services Transcript (JST)", href: "https://jst.doded.mil/jst/", roles: ["marines"] },
      { title: "Marine Corps Credentialing Opportunities On-Line (COOL)", href: "https://www.cool.osd.mil/usmc/index.html", roles: ["marines"] },
      { title: "MarineNet", href: "https://www.marinenet.usmc.mil/my.policy", roles: ["marines", "administrators"] },
      { title: "Marine Leader Development", href: "https://www.usmcu.edu/Academic-Programs/Lejeune-Leadership-Institute/Marine-Leader-Development/", roles: ["leaders"] },
      { title: "Marine Corps SkillBridge Program", href: "https://skillbridge.osd.mil/index.htm", roles: ["marines"] },
      { title: "MyNavy Portal (MNP)", href: "https://my.navy.mil/", roles: ["marines"] },
      { title: "Road to Financial Readiness", href: "https://finred.usalearning.gov/StartHere/RoadToFinancialReadiness", roles: ["marines"] },
      { title: "Skillbridge programs", href: "https://skillbridge.osd.mil/organizations.htm", roles: ["marines"] },
      { title: "The Leadership Scholar Program", href: "https://www.usmc-mccs.org/marine-family-support/education", roles: ["leaders"] },
      { title: "Trax Training", href: "https://www.defensetravel.dod.mil/neoaccess/login.php", roles: ["administrators"] },
      { title: "Tuition Assistance (TA) Decide", href: "https://www.dodmou.com/TADECIDE", roles: ["marines"] },
      { title: "United Service Military Apprenticeship Program (USMAP)", href: "https://usmap.netc.navy.mil/usmap/", roles: ["marines"] },
      { title: "Web Tuition Assistance (WebTA)", href: "https://sas.ncdc.navy.mil/login/sasdeersvalidation.aspx?RedirectUrl=https://myeducation.netc.navy.mil/", roles: ["marines"] },
    ],
  },
  {
    name: "Reference Links",
    items: [
      { title: "ALMARS", href: "https://www.marines.mil/News/Messages/ALMARS/", roles: ["administrators", "leaders", "commanders"] },
      { title: "ALNAV", href: "https://www.mynavyhr.navy.mil/References/Messages/ALNAV-2025/", roles: ["leaders", "commanders"] },
      { title: "DoD Directives", href: "https://www.esd.whs.mil/Directives/issuances/dodd/", roles: ["administrators", "leaders", "commanders"] },
      { title: "DoD Instructions", href: "https://www.esd.whs.mil/Directives/issuances/dodi/", roles: ["administrators"] },
      { title: "DoD Forms", href: "https://www.esd.whs.mil/Directives/forms/", roles: ["administrators"] },
      { title: "Fiscal Advisory Notices (FANs)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Advisory%20Notifications.aspx", roles: ["administrators"] },
      { title: "Finance Policy Manual (FPM)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Disbursing-FPM.aspx", roles: ["administrators"] },
      { title: "Internal Control Advisory Notices (ICANs)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Advisory%20Notifications.aspx", roles: ["administrators"] },
      { title: "MARADMINS", href: "https://www.marines.mil/News/Messages/MARADMINS/", roles: ["administrators", "leaders", "commanders"] },
      { title: "MCPEL", href: "https://www.marines.mil/News/Publications/MCPEL/Custompubstatus/3000/", roles: ["administrators"] },
      { title: "MOS Manual", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/TECOM_PSD_MOSMan/default.aspx", roles: ["administrators", "leaders"] },
      { title: "Naval Forms Online", href: "https://forms.documentservices.dla.mil/order/", roles: ["administrators"] },
      { title: "OPNAV Manuals", href: "https://www.secnav.navy.mil/doni/manuals-opnav.aspx", roles: ["administrators"] },
      { title: "Personnel Admin Advisories (PAA)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mi_missa/Lists/PAA/PAA%20Gallery.aspx?viewid=56d7775b-7da1-4162-b2da-4b25f0a1d446", roles: ["administrators"] },
      { title: "Pay and Allowance Advisory Notices (PAANs)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Advisory%20Notifications.aspx", roles: ["administrators"] },
      { title: "Personnel Reporting Instruction User's Manual (PRIUM)", href: "https://mol.tfs.usmc.mil/prium/app/publicPrium?execution=e3s1", roles: ["administrators"] },
      { title: "MOS Roadmaps", href: "https://mctims.usmc.mil/MOS/Pages/Roadmaps/ViewRoadmap.aspx?mosManualId=%7b659ab0c3-7b2a-4d47-8f4a-f2e2f05b7609%7d&category=Enlisted", roles: ["marines", "leaders"] },
      { title: "RFF Policy Letters", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Policy%20Letters.aspx", roles: ["leaders", "commanders"] },
      { title: "SECNAV Instructions", href: "https://www.secnav.navy.mil/doni/secnav.aspx", roles: ["leaders", "commanders"] },
      { title: "Standard Forms", href: "https://www.gsa.gov/forms", roles: ["administrators"] },
      { title: "Travel Advisory Notices (TANs)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Advisory%20Notifications.aspx", roles: ["administrators"] },
    ],
  },
  {
    name: "System Links",
    items: [
      { title: "Automated Message Handling System (AMHS) Lejeune", href: "https://lejeune.amhs.usmc.mil/", roles: ["administrators"] },
      { title: "Automated Message Handling System (AMHS) Pendleton", href: "https://pendleton.amhs.usmc.mil/", roles: ["administrators"] },
      { title: "AMPS", href: "https://amps1.dla.mil/ampssplashscreen/%3bSplashScreen=-vfSfnZyEs08Uk69GQ8P9uSEAsGJZE9WifDK5ObPJUWmtI8gPpI_%21-252504229%21NONE", roles: ["administrators"] },
      { title: "APACS", href: "https://apacs.milcloud.mil/apacs/login.jsp", roles: ["administrators"] },
      { title: "AutoSAAR", href: "https://autosaar.usmc.mil/", roles: ["administrators"] },
      { title: "CIRRAS", href: "https://mcas-proxyweb.mcas-gov.us/certificate-checker?login=false&originalUrl=https://cirras.dc3n.navy.mil.mcas-gov.us/cirras-client/frame/splashPage/splashPageHome?McasTsid%3D20892&McasCSRF=110aee2c28820e0acb84cb443415d4d203925656a37a0727ab4af80665a3e096", roles: ["administrators"] },
      { title: "Command Legal Action (CLA)", href: "https://mol.tfs.usmc.mil/cla/landing/landing.xhtml", roles: ["administrators"] },
      { title: "Command Profile", href: "https://www2.manpower.usmc.mil/ncp/", roles: ["leaders", "commanders"] },
      { title: "CROSS", href: "https://mcas-proxyweb.mcas-gov.us/certificate-checker?login=false&originalUrl=https://play.apps.appsplatform.us.mcas-gov.us/play/e/default-f4c44cda-18c6-46b0-80f2-e290072444fd/a/5046df58-51a7-424b-a6b1-93123e025052?tenantId%3Df4c44cda-18c6-46b0-80f2-e290072444fd%26sourcetime%3D1734726874700%26hidenavbar%3Dtrue%26McasTsid%3D20892&McasCSRF=bf88fd2ca93af3e1423785eb533348a90440bd586841f0542ff9802c7d15882d", roles: ["administrators"] },
      { title: "Defense Travel System", href: "https://dtsproweb.defensetravel.osd.mil/dts-app/pubsite/all/view/", roles: ["marines", "administrators"] },
      { title: "DFAS MilPay Repository", href: "https://dmoapps.csd.disa.mil/MilPayRepository/Default.aspx", roles: ["administrators"] },
      { title: "Document Tracking Management Service (DTMS)", href: "https://mol.tfs.usmc.mil/DTMS/SSOSuccess?applicationId=dtms", roles: ["administrators"] },
      { title: "ETMS2", href: "https://don.etms2.army.mil/", roles: ["administrators"] },
      { title: "iAPS", href: "https://www2.manpower.usmc.mil/iaps/", roles: ["administrators"] },
      { title: "Marine Profile", href: "https://www2.manpower.usmc.mil/nmp/", roles: ["leaders", "commanders"] },
      { title: "Marine Online", href: "https://mol.tfs.usmc.mil/mol/UserHomeEntry.do", roles: ["marines", "administrators"] },
      { title: "MIAP (3270)", href: "https://miap.csd.disa.mil/portal.html", roles: ["administrators"] },
      { title: "O365 – includes Outlook Web Access (OWA)", href: "https://portal.apps.mil/", roles: ["marines", "administrators", "leaders", "commanders"] },
      { title: "OMPF – Records Management Application (O-RMA)", href: "https://www4.manpower.usmc.mil/orma/#/", roles: ["administrators"] },
      { title: "PERCIPIO", href: "https://usmc.percipio.com/login#/login", roles: ["marines"] },
      { title: "RTAMMS (Drill Manager, IDMS, MCMEDS)", href: "https://rtamms.mceits.usmc.mil/", roles: ["administrators"] },
      { title: "Service Treatment Record (STR)", href: "https://www2.manpower.usmc.mil/str/userMgmt/userRequestRole.action?actionType=0", roles: ["administrators"] },
      { title: "TFSMS", href: "https://tfsms.mceits.usmc.mil/", roles: ["administrators"] },
    ],
  },
  {
    name: "AI Links",
    items: [
      { title: "GenAI", href: "https://genai.mil/", roles: ["administrators", "leaders"] },
      { title: "Ask SAGE", href: "https://chat.genai.army.mil/", roles: ["administrators"] },
      { title: "CAMOGPT", href: "https://camogpt.army.mil/camogpt/", roles: ["administrators"] },
      { title: "ChestyBot", href: "https://usmc.sharepoint-mil.us/sites/mcen?OR=Teams-HL&CT=1727716769266&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNDA4MTcwMDQyNiIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D", roles: ["marines"] },
      { title: "ChatGPT", href: "https://safe.menlosecurity.com/https://chatgpt.com/", roles: ["marines", "administrators"] },
      { title: "Claud AI", href: "https://safe.menlosecurity.com/https://claude.ai/", roles: ["marines", "administrators"] },
      { title: "NIPRGPT", href: "https://niprgpt.mil/", roles: ["administrators"] },
    ],
  },
  {
    name: "Teams Channels",
    items: [
      { title: "Directives COI", roles: ["administrators"] },
      { title: "HQMC MFPC DCIPS-PCR Transition", roles: ["administrators"] },
      { title: "MISSO-02", roles: ["administrators"] },
      { title: "MISSO-03/06", roles: ["administrators"] },
      { title: "MISSO-09", roles: ["administrators"] },
      { title: "MISSO-16/17", roles: ["administrators"] },
      { title: "MISSO-27", roles: ["administrators"] },
      { title: "M&RA Key Leader Monthly Manpower Meeting", roles: ["leaders", "commanders"] },
      { title: "Records Management Training", roles: ["administrators"] },
      { title: "Semper Admin", roles: ["marines", "administrators", "leaders", "commanders"] },
      { title: "SMART", roles: ["administrators"] },
      { title: "USMC Administrators", roles: ["administrators"] },
      { title: "USMC GTCC IBA APCs", roles: ["administrators"] },
    ],
  },
  {
    name: "SharePoints",
    items: [
      { title: "Manpower & Personnel Administration Board", roles: ["administrators"] },
      { title: "MISSA/MISSO Portal", roles: ["administrators"] },
      { title: "TASO Mainframe", roles: ["administrators"] },
      { title: "Semper Admin SharePoint", roles: ["marines", "administrators"] },
      { title: "RFF SharePoint", roles: ["leaders", "commanders"] },
      { title: "Command Data and Analytics", roles: ["leaders"] },
      { title: "Administrative Assist Unit (AAU)", roles: ["administrators"] },
      { title: "ARDB Directives Management", roles: ["administrators"] },
      { title: "ARDB Directives Management Resources", roles: ["administrators"] },
      { title: "Manpower Military Policy (MPO)", roles: ["administrators", "leaders"] },
    ],
  },
  {
    name: "More Great Links",
    items: [
      { title: "Cutting Scores", roles: ["marines"] },
      { title: "Citi Manager", roles: ["administrators"] },
      { title: "City Pair Program (CPP)", roles: ["administrators"] },
      { title: "DTMO", roles: ["administrators"] },
      { title: "DoD SAFE", roles: ["administrators"] },
      { title: "EDIPI to SSN Tool", roles: ["administrators"] },
      { title: "Electronic Benchbook", roles: ["administrators"] },
      { title: "Electronic Health Assessment", roles: ["marines"] },
      { title: "IGMC Connections", roles: ["leaders", "commanders"] },
      { title: "Intelink", roles: ["administrators"] },
      { title: "FACS", roles: ["administrators"] },
      { title: "FAST Tool", roles: ["administrators"] },
      { title: "Game Changer", roles: ["administrators"] },
      { title: "GSA SmartPay APC Resources", roles: ["administrators"] },
      { title: "JET SharePoint", roles: ["administrators"] },
      { title: "Periodic Health Assessment", roles: ["marines"] },
      { title: "Personnel Administration School", roles: ["administrators"] },
      { title: "Officer Naval and Enlistment Programs", roles: ["leaders"] },
      { title: "M&RA Site", roles: ["leaders", "commanders"] },
      { title: "Manpower Codes Lookup", roles: ["administrators"] },
      { title: "Manpower & Personnel Administration Board", roles: ["administrators"] },
      { title: "M&RA SharePoint", roles: ["leaders", "commanders"] },
      { title: "MCA Information Awards", roles: ["administrators"] },
      { title: "MCAAT SharePoint", roles: ["administrators"] },
      { title: "MRRS", roles: ["administrators"] },
      { title: "MCILAP", roles: ["administrators"] },
      { title: "MHS GENESIS", roles: ["administrators"] },
      { title: "Microsoft 365 Roadmap", roles: ["administrators"] },
      { title: "Military One Source", roles: ["marines"] },
      { title: "NARA Service Records", roles: ["marines"] },
      { title: "Naval Letter Format Generator", roles: ["administrators"] },
      { title: "PFT/CFT Calculator", roles: ["marines"] },
      { title: "Program Templates", roles: ["administrators"] },
      { title: "Red Cross Emergency Communications", roles: ["marines"] },
    ],
  },
];

export const reportGroups: CatalogGroup[] = [
  {
    name: "Enterprise Reports",
    items: [
      { title: "Completing the Enterprise SAAR" },
      { title: "Requesting Access Enterprise Package" },
    ],
  },
  {
    name: "Portals",
    items: [
      { title: "DiaryMate" },
      { title: "TTC Search Dashboard – Multi-Tab Lookup Tool" },
      { title: "Unit User Reports" },
      { title: "Requesting Access TFAS Package" },
    ],
  },
  {
    name: "Legal & Manpower Portals",
    items: [
      { title: "Legal Command Center" },
      { title: "Manpower Management" },
    ],
  },
  {
    name: "Non Routine",
    items: [
      { title: "Slate Report" },
      { title: "Certifier Statistics" },
      { title: "Marine Assignment Period Report" },
      { title: "Passed for Promotion" },
      { title: "PME Report" },
      { title: "Report Builder" },
      { title: "Reported TTC Search By Unit" },
      { title: "TTC Error By Unit" },
      { title: "Additional Key MOS" },
      { title: "Parental Leave Tracker" },
      { title: "Transition Readiness (On Rolls)" },
      { title: "TTC Error By Unit (Search)" },
    ],
  },
  {
    name: "Promotions",
    items: [
      { title: "JEPES Averages for Marine" },
      { title: "JEPES Occasions" },
      { title: "JEPES Occasions and Marks Average" },
      { title: "Not Recommended Marines" },
      { title: "Passed for Promotion" },
      { title: "SNCO Select Grade" },
    ],
  },
  {
    name: "Training",
    items: [
      { title: "CPTR Training" },
      { title: "Enlisted PME Report" },
      { title: "Pistol Exception" },
      { title: "Pistol PETQUAL" },
      { title: "Rifle Exception" },
      { title: "Rifle PETQUAL" },
      { title: "SSgt and Below with S/EJPME II" },
      { title: "Training Failures" },
    ],
  },
  {
    name: "Mondays",
    items: [
      { title: "Missing NDSM <= 20221231" },
      { title: "SGLI/SOES Status" },
      { title: "UIC != TABLE 01" },
      { title: "Missing UDMIPS files" },
      { title: "Purex Advisories" },
    ],
  },
  {
    name: "SBP",
    items: [
      { title: "SBP Missing Report" },
    ],
  },
  {
    name: "1st of the Month",
    items: [],
  },
  {
    name: "15th of the Month",
    items: [],
  },
  {
    name: "U&E",
    items: [],
  },
];
