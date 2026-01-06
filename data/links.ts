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

export type AdminRole = "s1-g1" | "pac" | "ii";

export type CatalogItem = {
  title: string;
  href?: string;
  description?: string;
  roles?: Role[];
  adminRoles?: AdminRole[];
};

export type CatalogGroup = {
  name: string;
  items: CatalogItem[];
};

export const catalogGroups: CatalogGroup[] = [
  {
    name: "Semper Admin Links",
    items: [
      { title: "Semper Admin Links", href: "https://linktr.ee/semperadmin" },
      { title: "MarineNet MVS", href: "https://mcas-proxyweb.mcas-gov.us/certificate-checker?login=false&originalUrl=https://www.marinenet.usmc.mil.mcas-gov.us/MVS/Channel/Home.aspx?Id%3D1369%26McasTsid%3D20892" },
      { title: "TemplateToolBox", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/TemplateToolBox.aspx" },
      { title: "Semper Admin Teams Channel", href: "https://dod.teams.microsoft.us/l/team/19:dod:570243b431724971aeff925ef3cca4d8%40thread.tacv2/conversations?groupId=e130aa9e-3737-4d0e-baea-a03737570727&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd" },
    ],
  },
  {
    name: "Educational Links",
    items: [
      { title: "COL Training", href: "https://intelshare.intelink.gov/my.policy", roles: ["administrators"], adminRoles: ["pac", "ii"] },
      { title: "Digital University", href: "https://digitalu.af.mil/", roles: ["marines"] },
      { title: "DoD MWR Libraries", href: "https://dodmwrlibraries.org/", roles: ["marines"] },
      { title: "Free Application for Federal Student Aid (FAFSA)", href: "https://studentaid.gov/h/apply-for-aid/fafsa", roles: ["marines"] },
      { title: "Joint Knowledge Online (JKO)", href: "https://jkodirect.jten.mil/Atlas2/page/login/Login.jsf", roles: ["marines"] },
      { title: "Joint Services Transcript (JST)", href: "https://jst.doded.mil/jst/", roles: ["marines"] },
      { title: "Marine Corps Credentialing Opportunities On-Line (COOL)", href: "https://www.cool.osd.mil/usmc/index.html", roles: ["marines"] },
      { title: "MarineNet", href: "https://www.marinenet.usmc.mil/my.policy", roles: ["marines"] },
      { title: "Marine Leader Development", href: "https://www.usmcu.edu/Academic-Programs/Lejeune-Leadership-Institute/Marine-Leader-Development/", roles: ["leaders"] },
      { title: "Marine Corps SkillBridge Program", href: "https://skillbridge.osd.mil/index.htm", roles: ["marines"] },
      { title: "MyNavy Portal (MNP)", href: "https://my.navy.mil/", roles: ["marines"] },
      { title: "Road to Financial Readiness", href: "https://finred.usalearning.gov/StartHere/RoadToFinancialReadiness", roles: ["marines"] },
      { title: "Skillbridge programs", href: "https://skillbridge.osd.mil/organizations.htm", roles: ["marines"] },
      { title: "The Leadership Scholar Program", href: "https://www.usmc-mccs.org/marine-family-support/education", roles: ["marines"] },
      { title: "Trax Training", href: "https://www.defensetravel.dod.mil/neoaccess/login.php", roles: ["marines", "administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "Tuition Assistance (TA) Decide", href: "https://www.dodmou.com/TADECIDE", roles: ["marines"] },
      { title: "United Service Military Apprenticeship Program (USMAP)", href: "https://usmap.netc.navy.mil/usmap/", roles: ["marines"] },
      { title: "Web Tuition Assistance (WebTA)", href: "https://sas.ncdc.navy.mil/login/sasdeersvalidation.aspx?RedirectUrl=https://myeducation.netc.navy.mil/", roles: ["marines"] },
    ],
  },
  {
    name: "Reference Links",
    items: [
      { title: "ALMARS", href: "https://www.marines.mil/News/Messages/ALMARS/", roles: ["marines"] },
      { title: "ALNAV", href: "https://www.mynavyhr.navy.mil/References/Messages/ALNAV-2025/", roles: ["marines"] },
      { title: "DoD Directives", href: "https://www.esd.whs.mil/Directives/issuances/dodd/", roles: ["administrators", "leaders"], adminRoles: ["s1-g1", "ii"] },
      { title: "DoD Instructions", href: "https://www.esd.whs.mil/Directives/issuances/dodi/", roles: ["administrators", "leaders"], adminRoles: ["s1-g1", "ii"] },
      { title: "DoD Forms", href: "https://www.esd.whs.mil/Directives/forms/", roles: ["marines", "administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "Fiscal Advisory Notices (FANs)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Advisory%20Notifications.aspx", roles: ["administrators"], adminRoles: ["pac", "ii"] },
      { title: "Finance Policy Manual (FPM)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Disbursing-FPM.aspx", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "Internal Control Advisory Notices (ICANs)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Advisory%20Notifications.aspx", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "MARADMINS", href: "https://www.marines.mil/News/Messages/MARADMINS/", roles: ["marines", "administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "ii"] },
      { title: "MCPEL", href: "https://www.marines.mil/News/Publications/MCPEL/Custompubstatus/3000/", roles: ["marines", "administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "ii"] },
      { title: "MOS Manual", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/TECOM_PSD_MOSMan/default.aspx", roles: ["marines", "leaders"] },
      { title: "Naval Forms Online", href: "https://forms.documentservices.dla.mil/order/", roles: ["marines", "administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "OPNAV Manuals", href: "https://www.secnav.navy.mil/doni/manuals-opnav.aspx", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "Personnel Admin Advisories (PAA)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mi_missa/Lists/PAA/PAA%20Gallery.aspx?viewid=56d7775b-7da1-4162-b2da-4b25f0a1d446", roles: ["administrators", "leaders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "Pay and Allowance Advisory Notices (PAANs)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Advisory%20Notifications.aspx", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "Personnel Reporting Instruction User's Manual (PRIUM)", href: "https://mol.tfs.usmc.mil/prium/app/publicPrium?execution=e3s1", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "MOS Roadmaps", href: "https://mctims.usmc.mil/MOS/Pages/Roadmaps/ViewRoadmap.aspx?mosManualId=%7b659ab0c3-7b2a-4d47-8f4a-f2e2f05b7609%7d&category=Enlisted", roles: ["marines", "administrators", "leaders"] },
      { title: "RFF Policy Letters", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Policy%20Letters.aspx", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "SECNAV Instructions", href: "https://www.secnav.navy.mil/doni/secnav.aspx", roles: ["administrators", "leaders"], adminRoles: ["s1-g1", "ii"] },
      { title: "Standard Forms", href: "https://www.gsa.gov/forms", roles: ["marines", "administrators", "leaders"], adminRoles: ["s1-g1", "ii"] },
      { title: "Travel Advisory Notices (TANs)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Advisory%20Notifications.aspx", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
    ],
  },
  {
    name: "System Links",
    items: [
      { title: "Automated Message Handling System (AMHS) Lejeune", href: "https://lejeune.amhs.usmc.mil/", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "Automated Message Handling System (AMHS) Pendleton", href: "https://pendleton.amhs.usmc.mil/", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "AMPS", href: "https://amps1.dla.mil/ampssplashscreen/%3bSplashScreen=-vfSfnZyEs08Uk69GQ8P9uSEAsGJZE9WifDK5ObPJUWmtI8gPpI_%21-252504229%21NONE", roles: ["administrators"], adminRoles: ["pac", "ii"] },
      { title: "APACS", href: "https://apacs.milcloud.mil/apacs/login.jsp", roles: ["marines", "administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "AutoSAAR", href: "https://autosaar.usmc.mil/", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "CIRRAS", href: "https://mcas-proxyweb.mcas-gov.us/certificate-checker?login=false&originalUrl=https://cirras.dc3n.navy.mil.mcas-gov.us/cirras-client/frame/splashPage/splashPageHome?McasTsid%3D20892", roles: ["administrators", "leaders", "commanders"] },
      { title: "Command Legal Action (CLA)", href: "https://mol.tfs.usmc.mil/cla/landing/landing.xhtml", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "Command Profile", href: "https://www2.manpower.usmc.mil/ncp/", roles: ["administrators", "leaders", "commanders"] },
      { title: "CROSS", href: "https://mcas-proxyweb.mcas-gov.us/certificate-checker?login=false&originalUrl=https://play.apps.appsplatform.us.mcas-gov.us/play/e/default-f4c44cda-18c6-46b0-80f2-e290072444fd/a/5046df58-51a7-424b-a6b1-93123e025052?tenantId%3Df4c44cda-18c6-46b0-80f2-e290072444fd%26sourcetime%3D1734726874700%26hidenavbar%3Dtrue%26McasTsid%3D20892", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "Defense Travel System", href: "https://dtsproweb.defensetravel.osd.mil/dts-app/pubsite/all/view/", roles: ["marines", "administrators", "leaders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "DFAS MilPay Repository", href: "https://dmoapps.csd.disa.mil/MilPayRepository/Default.aspx", roles: ["administrators"], adminRoles: ["pac"] },
      { title: "Document Tracking Management Service (DTMS)", href: "https://mol.tfs.usmc.mil/DTMS/SSOSuccess?applicationId=dtms", roles: ["administrators"], adminRoles: ["pac", "ii"] },
      { title: "ETMS2", href: "https://don.etms2.army.mil/", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "iAPS", href: "https://www2.manpower.usmc.mil/iaps/", roles: ["administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "ii"] },
      { title: "Marine Profile", href: "https://www2.manpower.usmc.mil/nmp/", roles: ["marines", "administrators", "leaders", "commanders"] },
      { title: "Marine Online", href: "https://mol.tfs.usmc.mil/mol/UserHomeEntry.do", roles: ["marines", "administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "MIAP (3270)", href: "https://miap.csd.disa.mil/portal.html", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "O365 – includes Outlook Web Access (OWA)", href: "https://portal.apps.mil/", roles: ["marines", "administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "OMPF – Records Management Application (O-RMA)", href: "https://www4.manpower.usmc.mil/orma/#/", roles: ["marines", "administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "PERCIPIO", href: "https://usmc.percipio.com/login#/login" },
      { title: "RTAMMS (Drill Manager, IDMS, MCMEDS)", href: "https://rtamms.mceits.usmc.mil/", roles: ["administrators"], adminRoles: ["ii"] },
      { title: "Service Treatment Record (STR)", href: "https://www2.manpower.usmc.mil/str/userMgmt/userRequestRole.action?actionType=0", roles: ["administrators"], adminRoles: ["pac"] },
      { title: "TFSMS", href: "https://tfsms.mceits.usmc.mil/", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
    ],
  },
  {
    name: "AI Links",
    items: [
      { title: "GenAI", href: "https://genai.mil/", roles: ["marines", "administrators", "leaders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "Ask SAGE", href: "https://chat.genai.army.mil/", roles: ["marines", "administrators", "leaders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "CAMOGPT", href: "https://camogpt.army.mil/camogpt/", roles: ["marines", "administrators", "leaders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "ChestyBot", href: "https://usmc.sharepoint-mil.us/sites/mcen?OR=Teams-HL&CT=1727716769266&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNDA4MTcwMDQyNiIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D", roles: ["marines", "administrators", "leaders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "ChatGPT", href: "https://safe.menlosecurity.com/https://chatgpt.com/", roles: ["marines", "administrators", "leaders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "Claud AI", href: "https://safe.menlosecurity.com/https://claude.ai/", roles: ["marines", "administrators", "leaders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "NIPRGPT", href: "https://niprgpt.mil/", roles: ["marines", "administrators"] },
    ],
  },
  {
    name: "Teams Channels",
    items: [
      { title: "Directives COI", href: "https://dod.teams.microsoft.us/l/team/19:dod:11971746bffc45719d033aec8362bb90%40thread.tacv2/conversations?groupId=09d2500a-e3c9-4efb-b840-1dbf825c8cfc&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "HQMC MFPC DCIPS-PCR Transition", href: "https://dod.teams.microsoft.us/l/team/19:dod:4dcc8838ae4e48b785ce4977cb08cd53%40thread.tacv2/conversations?groupId=fda095c3-6af1-4101-8929-ce8f772e5e55&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators", "leaders"], adminRoles: ["s1-g1", "ii"] },
      { title: "M&RA Key Leader Monthly Manpower Meeting", href: "https://dod.teams.microsoft.us/l/channel/19:dod:c20b6ec57ea047e088fafad563c02e32%40thread.skype/General?groupId=273b23ca-bf28-4337-8dc8-9628e4ee2515&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "MISSO-02", href: "https://dod.teams.microsoft.us/l/team/19:dod:7f4ddd71c9484bf584cc63b6a1dd3bf3%40thread.skype/conversations?groupId=a41eb10c-8e15-43f7-98cb-494ed593d790&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd" },
      { title: "MISSO-03/06", href: "https://dod.teams.microsoft.us/l/team/19:dod:f0483ec29ef441a7bc13bd6f6ec1b7eb%40thread.skype/conversations?groupId=228439f5-b545-4e58-90ed-1270f9370550&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd" },
      { title: "MISSO-09", href: "https://dod.teams.microsoft.us/l/team/19:dod:4e6ec9ba34c0409480822e46c9d619f6%40thread.tacv2/conversations?groupId=174c90ac-736c-4702-b816-b6312012fc8e&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd" },
      { title: "MISSO-16/17", href: "https://dod.teams.microsoft.us/l/team/19:dod:d55c88848dda48f6a6591c8abdb468a3%40thread.skype/conversations?groupId=0895f5f9-e707-49a9-b9b8-a780f689a36b&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd" },
      { title: "MISSO-27", href: "https://dod.teams.microsoft.us/l/team/19:dod:08d880cf79634e439386cea7cb744c62%40thread.tacv2/conversations?groupId=7fee38ca-16af-4033-b942-5315c450d94e&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd" },
      { title: "Records Management Training", href: "https://dod.teams.microsoft.us/l/team/19:dod:41a3f07c26d24a9a87c6289f270850f7%40thread.tacv2/conversations?groupId=469fd377-2963-4696-99e0-391c35cca74e&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "Semper Admin", href: "https://dod.teams.microsoft.us/l/team/19:dod:570243b431724971aeff925ef3cca4d8%40thread.tacv2/conversations?groupId=e130aa9e-3737-4d0e-baea-a03737570727&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["marines", "administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "SMART", href: "https://dod.teams.microsoft.us/l/team/19:dod:70e4efb98721461e91daf6810bc72f71%40thread.tacv2/conversations?groupId=14aeb7fc-5b88-4d73-abfb-1e4e1f094cf1&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "USMC Administrators", href: "https://dod.teams.microsoft.us/l/team/19:dod:e0b755c8963f41b9b611a56b2a4902e6%40thread.skype/conversations?groupId=6a3d244f-49ed-4396-9bec-d50770c96ca3&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "USMC GTCC IBA APCs", href: "https://dod.teams.microsoft.us/l/team/19:dod:49d596f26c5441d1a8dd8744e228f53c%40thread.tacv2/conversations?groupId=6a7d7191-1780-48f1-8cab-a696d6995fd7&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
    ],
  },
  {
    name: "SharePoints",
    items: [
      { title: "ARDB Directives Management", href: "https://usmc.sharepoint-mil.us/sites/AR_DirectivesManagement/SitePages/ProjectHome.aspx", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "ARDB Directives Management Resources", href: "https://usmc.sharepoint-mil.us/sites/AR_DirectivesManagement/SitePages/RESOURCES.aspx", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "Command Data and Analytics", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/TECOM_CDAO/SitePages/Command-Data-and-Analytics-Office.aspx", roles: ["administrators", "commanders"] },
      { title: "Government Travel Charge Card P&R (RFF)", href: "https://usmc.sharepoint-mil.us/sites/DCPR_RFF_External/GTCC", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "JET SharePoint", href: "https://usmc.sharepoint-mil.us/sites/SJA_JET/SitePages/Home.aspx", roles: ["administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "ii"] },
      { title: "M&RA SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "Manpower & Personnel Administration Board", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mpa_opt", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "Manpower Military Policy (MPO)", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mp_mpo", roles: ["administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "MCAAT SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_MCAAT/SitePages/Marine-Corps-Administrative-Analyst-Team.aspx", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "MISSA/MISSO Portal", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mi_missa", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "RFF SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy", roles: ["administrators"], adminRoles: ["pac"] },
      { title: "Semper Admin SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin", roles: ["marines", "administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "TASO Mainframe", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/MCEN_SUPPORT_MCCOG/SitePages/Mainframe-Home.aspx", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
    ],
  },
  {
    name: "More Great Links",
    items: [
      { title: "Citi Manager", href: "https://home.cards.citidirect.com/CommercialCard/login", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "City Pair Program (CPP)", href: "https://www.gsa.gov/travel/plan-a-trip/transportation-airfare-rates-pov-rates-etc/airfare-rates-city-pair-program", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "Cutting Scores", href: "https://www.manpower.marines.mil/Manpower-Management/Performance-Branch/Promotion-Section/Enlisted-Promotions/#tab/sergeants-and-below", roles: ["marines", "administrators"] },
      { title: "DoD SAFE", href: "https://safe.apps.mil/", roles: ["marines", "administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "DTMO", href: "https://www.travel.dod.mil/", roles: ["administrators", "leaders"], adminRoles: ["s1-g1", "ii"] },
      { title: "EDIPI to SSN Tool", href: "https://www2.manpower.usmc.mil/edipi/", roles: ["marines", "administrators", "leaders", "commanders"] },
      { title: "Electronic Benchbook", href: "https://www.jagcnet.army.mil/EBB/", roles: ["administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "ii"] },
      { title: "Electronic Health Assessment", href: "https://eha.health.mil/EHA/", roles: ["marines", "administrators"] },
      { title: "FACS", href: "https://www.igmc.marines.mil/Divisions/Inspections-Division/Checklists/" },
      { title: "FAST Tool", href: "https://fast.mfr.nps.edu/", roles: ["administrators"], adminRoles: ["pac", "ii"] },
      { title: "Game Changer", href: "https://gamechanger.advana.data.mil/", roles: ["marines", "administrators", "leaders", "commanders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "GSA SmartPay APC Resources", href: "https://www.citibank.com/tts/sa/federal-government-program-administrators-guides-and-forms/gsa.html", roles: ["administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "IGMC Connections", href: "https://www.igmc.marines.mil/Divisions/Connections/", roles: ["administrators", "commanders"], adminRoles: ["s1-g1", "ii"] },
      { title: "Intelink", href: "https://intelshare.intelink.gov/my.policy", roles: ["administrators"], adminRoles: ["pac"] },
      { title: "M&RA Site", href: "https://www.manpower.marines.mil/", roles: ["administrators"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "Manpower Codes Lookup", href: "https://www2.manpower.usmc.mil/lookups/lookups/lookups.action", roles: ["administrators", "leaders"], adminRoles: ["s1-g1", "pac", "ii"] },
      { title: "MCA Information Awards", href: "https://www.information.marines.mil/MCA-Awards/" },
      { title: "MCILAP", href: "https://www.iandl.marines.mil/Resources/MCILAP/" },
      { title: "MHS GENESIS", href: "https://myaccess.dmdc.osd.mil/identitymanagement/app/login", roles: ["marines", "administrators", "leaders", "commanders"] },
      { title: "Microsoft 365 Roadmap", href: "https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=%5b%22DoD%22%5d", roles: ["marines", "leaders"] },
      { title: "Military One Source", href: "https://www.militaryonesource.mil/", roles: ["marines", "administrators"] },
      { title: "MRRS", href: "https://mrrs.dc3n.navy.mil/mrrs/secure/welcome.m", roles: ["marines"] },
      { title: "NARA Service Records", href: "https://www.archives.gov/veterans/military-service-records", roles: ["marines", "administrators"], adminRoles: ["s1-g1", "ii"] },
      { title: "Naval Letter Format Generator", href: "https://marines.dev/navalletter/" },
      { title: "Officer Naval and Enlistment Programs", href: "https://www.mcrc.marines.mil/Marine-Officer/Officer-Naval-Enlisted-Applicants/", roles: ["marines", "commanders"] },
      { title: "Periodic Health Assessment", href: "https://eha.health.mil/EHA/", roles: ["marines", "commanders"] },
      { title: "Personnel Administration School", href: "https://www.mccsss.marines.mil/Schools/Personnel-Administration-School/", roles: ["marines", "administrators"] },
      { title: "PFT/CFT Calculator", href: "https://www.hqmc.marines.mil/portals/211/fitnesscalc/calcmini.html" },
      { title: "Program Templates", href: "https://www.pendleton.marines.mil/Main-Menu/Staff-Agencies/Communication-Strategy-and-Operations-COMMSTRAT/Graphics/Program_Templates/", roles: ["marines", "administrators", "commanders"] },
      { title: "Red Cross Emergency Communications", href: "https://www.redcross.org/get-help/military-families/emergency-communication.html", roles: ["marines", "administrators", "commanders"] },
    ],
  },
];

export const reportGroups: CatalogGroup[] = [
  {
    name: "Enterprise Reports",
    items: [
      { title: "Completing the Enterprise SAAR", href: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=617240A5ADC7" },
      { title: "Requesting Access Enterprise Package", href: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6496B4A45222" },
    ],
  },
  {
    name: "Portals",
    items: [
      { title: "DiaryMate", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/RFF-KCI/Dev%2BTeam/Archived/Temp%2BBAH%2BMHA%2BIncrease/Command%2BTemp%2BBAH/DiaryMate%2BV4&ui_appbar=false&ui_navbar=false", description: "Access daily diary reports and entries" },
      { title: "TTC Search Dashboard – Multi-Tab Lookup Tool", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/RFF-KCI/Dev%2BTeam/Archived/Temp%2BBAH%2BMHA%2BIncrease/Command%2BTemp%2BBAH/TTC%2BSearch%2BDashboard%2B%25E2%2580%2593%2BMulti-Tab%2BLookup%2BTool&ui_appbar=false&ui_navbar=false", description: "Multi-tab TTC search tool. Enter keywords or codes (e.g. travel, TSP, 499) to filter and compare." },
    ],
  },
  {
    name: "Non Routine",
    items: [
      { title: "Slate Report", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Slate%2BReport", description: "Used to Manage Manpower both on Hand, Inbound, and Outbound." },
      { title: "Certifier Statistics", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Certifier%2BStatistics", description: "Overview of one member's statistics for certifying transactions within a time frame." },
      { title: "Marine Assignment Period Report", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Marine%2BAssignment%2BPeriod%2BReport", description: "Marines' assignment periods within date range, filtered by command codes. Shows overlapping assignments." },
      { title: "Passed for Promotion", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Passed%2Bfor%2BPromotion", description: "Used to identify who has been passed for promotion based on their DCC." },
      { title: "PME Report", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/PME%2BReport", description: "Provides PME Status for all grades" },
      { title: "Report Builder", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Report%2BBuilder", description: "Build a report by clicking buttons" },
      { title: "Reported TTC Search By Unit", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Reported%2BTTC%2BSearch%2BBy%2BUnit", description: "Search and view TTC reports by unit" },
      { title: "TTC Error By Unit", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/MISSO%2B06/MISSO-06%2BReports%2Bfor%2BUnits/TTC%2BError%2BBy%2BUnit&prompt=false", description: "Overview of units transactions that have errors within a time frame." },
    ],
  },
  {
    name: "Promotions",
    items: [
      { title: "JEPES Averages for Marine", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/JEPES%2BAverages%2Bfor%2BMarine", description: "Shows last occasions and averages" },
      { title: "JEPES Occasions", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/JEPES%2BOccasions", description: "List of all JEPES Occasions by Marine" },
      { title: "JEPES Occasions and Marks Average", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/JEPES%2BOCCASIONS%2BAND%2BMARKS%2BAVERAGE", description: "List of all JEPES Occasions and averages by Marine" },
      { title: "Not Recommended Marines", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Not%2BRecommended%2BMarines", description: "Used to identify Marines in a non recommended status to support the requirements based on MARADMIN 185/25" },
      { title: "Passed for Promotion", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Passed%2Bfor%2BPromotion", description: "Used to identify who has been passed for promotion based on their DCC." },
      { title: "SNCO Select Grade", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SNCO%2BSELECT%2BGRADE", description: "Used to identify Marines on select grade based on seniority number." },
    ],
  },
  {
    name: "Training",
    items: [
      { title: "CPTR Training", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/CPTR%2BTraining", description: "Marines who have completed the required training for CPTR." },
      { title: "Enlisted PME Report", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Enlisted%2BPME%2BReport", description: "Used to identify PME completion based on MARADMIN 630/24" },
      { title: "Pistol Exception", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Pistol%2BException", description: "Marines eligible for an exemption for pistol." },
      { title: "Pistol PETQUAL", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Pistol%2BPETQUAL", description: "Marines eligible for a PETQUAL for Pistol." },
      { title: "Rifle Exception", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Rifle%2BException", description: "Marines eligible for an exemption for rifle." },
      { title: "Rifle PETQUAL", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Rifle%2BPETQUAL", description: "Marines eligible for a PETQUAL for Rifle." },
      { title: "SSgt and Below with S/EJPME II", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SSGT%2BAND%2BBELOW%2BWITH%2BS%252FEJPME%2BII", description: "Shows those who fraudulently completed EJPME II" },
      { title: "Training Failures", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Training%2BFailures", description: "Key required training failures that should result in Pg. 11/6105 counseling." },
    ],
  },
  {
    name: "Mondays",
    items: [
      { title: "Missing NDSM <= 20221231", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Missing%2BNDSM%2B%253C%253D%2B20221231", description: "Shows those who rate the NDSM" },
      { title: "Missing UDMIPS files", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Missing%2BUDMIPS%2Bfiles", description: "Shows UD that do not have attachments" },
      { title: "Purex Advisories", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Purex%2BAdvisories", description: "Use to identify DFRs during the last PUREX cycle" },
      { title: "SGLI/SOES Status", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SGLI%252FSOES%2BSTATUS", description: "Shows those who have not updated their SGLI since arrival" },
      { title: "UIC != TABLE 01", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/UIC%2B%2521%253D%2BTABLE%2B01", description: "Shows those who do not have the correct UIC" },
    ],
  },
  {
    name: "1st of the Month",
    items: [
      { title: "10922 Monthly Verification", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/10922%2BMONTHLY%2BVERIFICATION", description: "Used to validate forms in OMPF and can exclude previously validated forms" },
      { title: "COLA Monthly Verification", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/COLA%2BMONTHLY%2BVERIFICATION", description: "Used to validate forms in OMPF and can exclude previously validated forms" },
      { title: "DD FORM 214 Monthly Verification", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/DD%2BFORM%2B214%2BOMPF%2BVerification", description: "Used to validate forms in OMPF and can exclude previously validated forms" },
      { title: "DD FORM 216 Monthly Verification", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/DD%2BForm%2B216%2BMeritorious%2BPromotion", description: "Used to validate forms in OMPF and can exclude previously validated forms" },
      { title: "EXT ENL Monthly Verification", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/EXT%2BENL%2BMONTHLY%2BVERIFICATION", description: "Used to validate forms in OMPF and can exclude previously validated forms" },
      { title: "FSA Monthly Verification", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/FSA%2BMONTHLY%2BVERIFICATION", description: "Used to validate forms in OMPF and can exclude previously validated forms" },
      { title: "NJP Monthly Verification", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/NJP%2BMONTHLY%2BVERIFICATION", description: "Used to validate forms in OMPF and can exclude previously validated forms" },
      { title: "SSgt and Below with S/EJPME II", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SSGT%2BAND%2BBELOW%2BWITH%2BS%252FEJPME%2BII", description: "Shows those who fraudulently completed EJPME II" },
      { title: "Unit Missing Training", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/UNIT%2BMISSING%2BTRAINING", description: "List of multiple training codes that are delinquent" },
    ],
  },
  {
    name: "15th of the Month",
    items: [
      { title: "BNA MOL Messages", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/BNA%2BMOL%2BMessages", description: "Lists those who have been notified as eligible for BNA" },
      { title: "BRS Continuation Pay Eligibility", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/BRS%2BContinuation%2BPay%2BEligibility", description: "List of Marines with BRS that have between 11.5 and 12 years of svc." },
      { title: "MBR 2 MBR DATA SHEET (Marine Spouse)", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/MBR%2B2%2BMBR%2BDATA%2BSHEET%2B%2528Marine%2BSpouse%2529", description: "Used to validate MRM audit requirements for Marines married to Marines." },
      { title: "MBR 2 MBR DATA SHEET (Non-Marine Spouse)", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/MBR%2B2%2BMBR%2BDATA%2BSHEET%2B%2528Non-Marine%2BSpouse%2529", description: "Used to validate MRM audit requirements for Marines married to Marines." },
      { title: "Missing Annual Red Audit", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/MISSING%2BANNUAL%2BRED%2BAUDIT", description: "Lists of Marines who have not certified their RED in over 1 year" },
      { title: "Sergeant Without Dependents BAH Initiative", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SERGEANT%2BWITHOUT%2BDEPENDENTS%2BBASIC%2BALLOWANCE%2BFOR%2BHOUSING%2B%2528BAH%2529%2BINITIATIVE", description: "List of approved Sgt W/O BAH Initiative with ZX code. Used to validate entitlements and reporting" },
      { title: "Unit Completed Training/PME", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/UNIT%2BCOMPLETED%2BTRAINING%252FPME", description: "List of completed training and PMEs" },
    ],
  },
  {
    name: "U&E",
    items: [
      { title: "No Pay Due", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/NO%2BPAY%2BDUE", description: "Identifies Marines who will result in a NO PAY DUE (Less than $300) on payday" },
    ],
  },
];

export const unitUserReportGroups: CatalogGroup[] = [
  {
    name: "Unit User Reports",
    items: [
      { title: "Requesting Access TFAS Package", href: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=64958FDF4ED6" },
    ],
  },
  {
    name: "Portals",
    items: [
      { title: "Legal Command Center", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Portals/Legal%2BCommand%2BCenter/Legal%2BCommand%2BCenter%2BWelcome%2BPage&ui_appbar=false&ui_navbar=false", description: "In development! Designed to provide Marine commands with critical legal data and insights." },
      { title: "Manpower Management", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Portals/Manpower%2BManagement/Manpower%2BManagement&ui_appbar=false&ui_navbar=false", description: "This platform consolidates key manpower metrics to enable informed, data-driven decision-making." },
    ],
  },
  {
    name: "Non Routine",
    items: [
      { title: "Additional Key MOS", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Additional%2BKey%2BMOS", description: "Used to identify Marines in key billets (FFI, MAI, CMC, CMT, MCIWS, PAC, UMAPIT, SAPR)" },
      { title: "Parental Leave Tracker", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Parental%2BLeave%2BTracker", description: "Tracks and manages parental leave for eligible Marines." },
      { title: "Report Builder", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Report%2BBuilder", description: "Build a report by clicking buttons" },
      { title: "Transition Readiness (On Rolls)", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Transition%2BReadiness%2B%2528On%2BRolls%2B-%2BTFAS%2529%2B%2528SR%2B2-20%2529", description: "Used to track Marines completion of Transition Readiness (TR)" },
      { title: "TTC Error By Unit", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Enterprise%2BUser%2BReports/MISSO%2B06/MISSO-06%2BReports%2Bfor%2BUnits/TTC%2BError%2BBy%2BUnit&prompt=false", description: "Overview of units transactions that have errors within a time frame." },
    ],
  },
  {
    name: "Promotions",
    items: [
      { title: "JEPES Averages for Marine", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/JEPES%2BAverages%2Bfor%2BMarine", description: "Shows last occasions and averages" },
      { title: "JEPES Occasions", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/JEPES%2BOccasions", description: "List of all JEPES Occasions by Marine" },
      { title: "JEPES Occasions and Marks Average", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/JEPES%2BOCCASIONS%2BAND%2BMARKS%2BAVERAGE", description: "List of all JEPES Occasions and averages by Marine" },
      { title: "Not Recommended Marines", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Not%2BRecommended%2BMarines", description: "Used to identify Marines in a non recommended status to support the requirements based on MARADMIN 185/25" },
      { title: "Passed for Promotion", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Passed%2Bfor%2BPromotion", description: "Used to identify who has been passed for promotion based on their DCC." },
      { title: "SNCO Select Grade", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SNCO%2BSELECT%2BGRADE", description: "Used to identify Marines on select grade based on seniority number." },
    ],
  },
  {
    name: "Training",
    items: [
      { title: "CPTR Training", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/CPTR%2BTraining", description: "Marines who have completed the required training for CPTR." },
      { title: "Enlisted PME Report", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Enlisted%2BPME%2BReport", description: "Used to identify PME completion based on MARADMIN 630/24" },
      { title: "Pistol Exception", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Pistol%2BException", description: "Marines eligible for an exemption for pistol." },
      { title: "Pistol PETQUAL", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Pistol%2BPETQUAL", description: "Marines eligible for a PETQUAL for Pistol." },
      { title: "Rifle Exception", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Rifle%2BException", description: "Marines eligible for an exemption for rifle." },
      { title: "Rifle PETQUAL", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Rifle%2BPETQUAL", description: "Marines eligible for a PETQUAL for Rifle." },
      { title: "SSgt and Below with S/EJPME II", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SSGT%2BAND%2BBELOW%2BWITH%2BS%252FEJPME%2BII", description: "Shows those who fraudulently completed EJPME II" },
      { title: "Training Failures", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Training%2BFailures", description: "Key required training failures that should result in Pg. 11/6105 counseling." },
    ],
  },
  {
    name: "Mondays",
    items: [
      { title: "Missing NDSM <= 20221231", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/Missing%2BNDSM%2B%253C%253D%2B20221231", description: "Shows those who rate the NDSM" },
      { title: "SGLI/SOES Status", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SGLI%252FSOES%2BSTATUS", description: "Shows those who have not updated their SGLI since arrival" },
      { title: "SBP Missing Report", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SBP%2BMissing%2BReport", description: "List of Marines missing SBP Documentation (Blank)" },
    ],
  },
  {
    name: "1st of the Month",
    items: [
      { title: "MGIB Status Missing", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/MGIB%2BSTATUS%2BMISSING", description: "Those missing any MGIB status (Blank)" },
      { title: "SSgt and Below with S/EJPME II", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SSGT%2BAND%2BBELOW%2BWITH%2BS%252FEJPME%2BII", description: "Shows those who fraudulently completed EJPME II" },
      { title: "Unit Missing Training", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/UNIT%2BMISSING%2BTRAINING", description: "List of multiple training codes that are delinquent" },
    ],
  },
  {
    name: "15th of the Month",
    items: [
      { title: "BNA MOL Messages", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/BNA%2BMOL%2BMessages", description: "Lists those who have been notified as eligible for BNA" },
      { title: "Missing Annual Red Audit", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/MISSING%2BANNUAL%2BRED%2BAUDIT", description: "Lists of Marines who have not certified their RED in over 1 year" },
      { title: "Sergeant Without Dependents BAH Initiative", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/SERGEANT%2BWITHOUT%2BDEPENDENTS%2BBASIC%2BALLOWANCE%2BFOR%2BHOUSING%2B%2528BAH%2529%2BINITIATIVE", description: "List of approved Sgt W/O BAH Initiative with ZX code. Used to validate entitlements and reporting" },
    ],
  },
  {
    name: "U&E",
    items: [
      { title: "No Pay Due", href: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/HQMC/Semper%2BAdmin/Semper%2BAdmin%2BReports%2Bfor%2BUsers/NO%2BPAY%2BDUE", description: "Identifies Marines who will result in a NO PAY DUE (Less than $300) on payday" },
    ],
  },
];
