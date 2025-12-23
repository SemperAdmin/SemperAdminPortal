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
      { title: "Directives COI", href: "https://dod.teams.microsoft.us/l/team/19:dod:11971746bffc45719d033aec8362bb90%40thread.tacv2/conversations?groupId=09d2500a-e3c9-4efb-b840-1dbf825c8cfc&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
      { title: "HQMC MFPC DCIPS-PCR Transition", href: "https://dod.teams.microsoft.us/l/team/19:dod:4dcc8838ae4e48b785ce4977cb08cd53%40thread.tacv2/conversations?groupId=fda095c3-6af1-4101-8929-ce8f772e5e55&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
      { title: "M&RA Key Leader Monthly Manpower Meeting", href: "https://dod.teams.microsoft.us/l/channel/19:dod:c20b6ec57ea047e088fafad563c02e32%40thread.skype/General?groupId=273b23ca-bf28-4337-8dc8-9628e4ee2515&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["leaders", "commanders"] },
      { title: "MISSO-02", href: "https://dod.teams.microsoft.us/l/team/19:dod:7f4ddd71c9484bf584cc63b6a1dd3bf3%40thread.skype/conversations?groupId=a41eb10c-8e15-43f7-98cb-494ed593d790&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
      { title: "MISSO-03/06", href: "https://dod.teams.microsoft.us/l/team/19:dod:f0483ec29ef441a7bc13bd6f6ec1b7eb%40thread.skype/conversations?groupId=228439f5-b545-4e58-90ed-1270f9370550&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
      { title: "MISSO-09", href: "https://dod.teams.microsoft.us/l/team/19:dod:4e6ec9ba34c0409480822e46c9d619f6%40thread.tacv2/conversations?groupId=174c90ac-736c-4702-b816-b6312012fc8e&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
      { title: "MISSO-16/17", href: "https://dod.teams.microsoft.us/l/team/19:dod:d55c88848dda48f6a6591c8abdb468a3%40thread.skype/conversations?groupId=0895f5f9-e707-49a9-b9b8-a780f689a36b&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
      { title: "MISSO-27", href: "https://dod.teams.microsoft.us/l/team/19:dod:08d880cf79634e439386cea7cb744c62%40thread.tacv2/conversations?groupId=7fee38ca-16af-4033-b942-5315c450d94e&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
      { title: "Records Management Training", href: "https://dod.teams.microsoft.us/l/team/19:dod:41a3f07c26d24a9a87c6289f270850f7%40thread.tacv2/conversations?groupId=469fd377-2963-4696-99e0-391c35cca74e&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
      { title: "Semper Admin", href: "https://dod.teams.microsoft.us/l/team/19:dod:570243b431724971aeff925ef3cca4d8%40thread.tacv2/conversations?groupId=e130aa9e-3737-4d0e-baea-a03737570727&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["marines", "administrators", "leaders", "commanders"] },
      { title: "SMART", href: "https://dod.teams.microsoft.us/l/team/19:dod:70e4efb98721461e91daf6810bc72f71%40thread.tacv2/conversations?groupId=14aeb7fc-5b88-4d73-abfb-1e4e1f094cf1&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
      { title: "USMC Administrators", href: "https://dod.teams.microsoft.us/l/team/19:dod:e0b755c8963f41b9b611a56b2a4902e6%40thread.skype/conversations?groupId=6a3d244f-49ed-4396-9bec-d50770c96ca3&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
      { title: "USMC GTCC IBA APCs", href: "https://dod.teams.microsoft.us/l/team/19:dod:49d596f26c5441d1a8dd8744e228f53c%40thread.tacv2/conversations?groupId=6a7d7191-1780-48f1-8cab-a696d6995fd7&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"] },
    ],
  },
  {
    name: "SharePoints",
    items: [
      { title: "ARDB Directives Management", href: "https://usmc.sharepoint-mil.us/sites/AR_DirectivesManagement/SitePages/ProjectHome.aspx", roles: ["administrators"] },
      { title: "ARDB Directives Management Resources", href: "https://usmc.sharepoint-mil.us/sites/AR_DirectivesManagement/SitePages/RESOURCES.aspx", roles: ["administrators"] },
      { title: "Command Data and Analytics", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/TECOM_CDAO/SitePages/Command-Data-and-Analytics-Office.aspx", roles: ["leaders"] },
      { title: "Government Travel Charge Card P&R (RFF)", href: "https://usmc.sharepoint-mil.us/sites/DCPR_RFF_External/GTCC", roles: ["administrators"] },
      { title: "JET SharePoint", href: "https://usmc.sharepoint-mil.us/sites/SJA_JET/SitePages/Home.aspx", roles: ["administrators"] },
      { title: "M&RA SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra", roles: ["leaders", "commanders"] },
      { title: "Manpower & Personnel Administration Board", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mpa_opt", roles: ["administrators"] },
      { title: "Manpower Military Policy (MPO)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mp_mpo", roles: ["administrators", "leaders"] },
      { title: "MCAAT SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_MCAAT/SitePages/Marine-Corps-Administrative-Analyst-Team.aspx", roles: ["administrators"] },
      { title: "MISSA/MISSO Portal", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mi_missa", roles: ["administrators"] },
      { title: "RFF SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy", roles: ["leaders", "commanders"] },
      { title: "Semper Admin SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin", roles: ["marines", "administrators"] },
      { title: "TASO Mainframe", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/MCEN_SUPPORT_MCCOG/SitePages/Mainframe-Home.aspx", roles: ["administrators"] },
    ],
  },
  {
    name: "More Great Links",
    items: [
      { title: "Citi Manager", href: "https://home.cards.citidirect.com/CommercialCard/login", roles: ["administrators"] },
      { title: "City Pair Program (CPP)", href: "https://www.gsa.gov/travel/plan-a-trip/transportation-airfare-rates-pov-rates-etc/airfare-rates-city-pair-program", roles: ["administrators"] },
      { title: "Cutting Scores", href: "https://www.manpower.marines.mil/Manpower-Management/Performance-Branch/Promotion-Section/Enlisted-Promotions/#tab/sergeants-and-below", roles: ["marines"] },
      { title: "DoD SAFE", href: "https://safe.apps.mil/", roles: ["administrators"] },
      { title: "DTMO", href: "https://www.travel.dod.mil/", roles: ["administrators"] },
      { title: "EDIPI to SSN Tool", href: "https://www2.manpower.usmc.mil/edipi/", roles: ["administrators"] },
      { title: "Electronic Benchbook", href: "https://www.jagcnet.army.mil/EBB/", roles: ["administrators"] },
      { title: "Electronic Health Assessment", href: "https://eha.health.mil/EHA/", roles: ["marines"] },
      { title: "FACS", href: "https://www.igmc.marines.mil/Divisions/Inspections-Division/Checklists/", roles: ["administrators"] },
      { title: "FAST Tool", href: "https://fast.mfr.nps.edu/", roles: ["administrators"] },
      { title: "Game Changer", href: "https://gamechanger.advana.data.mil/", roles: ["administrators"] },
      { title: "GSA SmartPay APC Resources", href: "https://www.citibank.com/tts/sa/federal-government-program-administrators-guides-and-forms/gsa.html", roles: ["administrators"] },
      { title: "IGMC Connections", href: "https://www.igmc.marines.mil/Divisions/Connections/", roles: ["leaders", "commanders"] },
      { title: "Intelink", href: "https://intelshare.intelink.gov/my.policy", roles: ["administrators"] },
      { title: "M&RA Site", href: "https://www.manpower.marines.mil/", roles: ["leaders", "commanders"] },
      { title: "Manpower Codes Lookup", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action", roles: ["administrators"] },
      { title: "MCA Information Awards", href: "https://www.information.marines.mil/MCA-Awards/", roles: ["administrators"] },
      { title: "MCILAP", href: "https://www.iandl.marines.mil/Resources/MCILAP/", roles: ["administrators"] },
      { title: "MHS GENESIS", href: "https://myaccess.dmdc.osd.mil/identitymanagement/app/login", roles: ["administrators"] },
      { title: "Microsoft 365 Roadmap", href: "https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=%5b%22DoD%22%5d", roles: ["administrators"] },
      { title: "Military One Source", href: "https://www.militaryonesource.mil/", roles: ["marines"] },
      { title: "MRRS", href: "https://mrrs.dc3n.navy.mil/mrrs/secure/welcome.m", roles: ["administrators"] },
      { title: "NARA Service Records", href: "https://www.archives.gov/veterans/military-service-records", roles: ["marines"] },
      { title: "Naval Letter Format Generator", href: "https://marines.dev/navalletter/", roles: ["administrators"] },
      { title: "Officer Naval and Enlistment Programs", href: "https://www.mcrc.marines.mil/Marine-Officer/Officer-Naval-Enlisted-Applicants/", roles: ["leaders"] },
      { title: "Periodic Health Assessment", href: "https://eha.health.mil/EHA/", roles: ["marines"] },
      { title: "Personnel Administration School", href: "https://www.mccsss.marines.mil/Schools/Personnel-Administration-School/", roles: ["administrators"] },
      { title: "PFT/CFT Calculator", href: "https://www.hqmc.marines.mil/portals/211/fitnesscalc/calcmini.html", roles: ["marines"] },
      { title: "Program Templates", href: "https://www.pendleton.marines.mil/Main-Menu/Staff-Agencies/Communication-Strategy-and-Operations-COMMSTRAT/Graphics/Program_Templates/", roles: ["administrators"] },
      { title: "Red Cross Emergency Communications", href: "https://www.redcross.org/get-help/military-families/emergency-communication.html", roles: ["marines"] },
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
