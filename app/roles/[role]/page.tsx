import { type Role } from "../../../data/links";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

type Params = { role: Role };

type Post = {
  id: string;
  title: string;
  body: string;
  category: "announcements" | "general" | "ideas" | "qa" | "templates" | "fixes" | "training" | "policy" | "issues" | "success" | "best_practice" | "needs_clarification" | "needs_feedback";
  community: Role;
  votes: number;
  createdAt: number;
  author: string;
};

async function readPosts(): Promise<Post[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "community.json");
    const buf = await fs.readFile(filePath);
    const data = JSON.parse(buf.toString());
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function RolePage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const safeRole = p.role ?? "marines";
  const roleTitle = safeRole === "marines" ? "All Marines" : safeRole[0].toUpperCase() + safeRole.slice(1);
  const categories: { label: string; slug: string }[] = [
    { label: "Dependency Management", slug: "dependency-management" },
    { label: "Deployment Support", slug: "deployment-support" },
    { label: "Legal & Disciplinary", slug: "legal-disciplinary" },
    { label: "Pay & Allowances", slug: "pay-allowances" },
    { label: "Personnel Administration", slug: "personnel-administration" },
    { label: "Promotions & Career Progression", slug: "promotions-career-progression" },
    { label: "Records & Corrections", slug: "records-corrections" },
    { label: "Reserve & Mobilization", slug: "reserve-mobilization" },
    { label: "Separation & Transitions", slug: "separation-transitions" },
    { label: "Systems Management", slug: "systems-management" },
    { label: "Training & Education", slug: "training-education" },
    { label: "Travel & Transportation", slug: "travel-transportation" },
  ];
  const isAdministrators = safeRole === "administrators";
  const isCommanders = safeRole === "commanders";
  const isLeaders = safeRole === "leaders";
  const adminOptions: { label: string; slug: string }[] = [
    { label: "S-1 / G-1 Administration", slug: "s1-g1-administration" },
    { label: "PAC (Personnel Admin Center)", slug: "pac-personnel-admin-center" },
    { label: "I&I Staff Administration", slug: "ii-i-staff-administration" },
  ];
  const leaderCategories: { label: string; slug: string }[] = [
    { label: "Accountability & Discipline", slug: "leaders-accountability-discipline" },
    { label: "Administrative Systems", slug: "leaders-administrative-systems" },
    { label: "Awards & Recognition", slug: "leaders-awards-recognition" },
    { label: "Career Development", slug: "leaders-career-development" },
    { label: "Counseling & Documentation", slug: "leaders-counseling-documentation" },
    { label: "Deployment & Readiness", slug: "leaders-deployment-readiness" },
    { label: "Performance Evaluation", slug: "leaders-performance-evaluation" },
    { label: "Personnel Accountability", slug: "leaders-personnel-accountability" },
  ];
  const visibleItems = isAdministrators ? adminOptions : isLeaders ? leaderCategories : categories;
  const posts = (await readPosts()).filter((p) => p.community === safeRole).sort((a, b) => b.votes * 2 + b.createdAt - (a.votes * 2 + a.createdAt)).slice(0, 5);

  // Commander-specific links
  const commanderPrimaryTools = [
    { title: "Command Profile", href: "https://www2.manpower.usmc.mil/ncp/" },
    { title: "Marine Profile", href: "https://www2.manpower.usmc.mil/nmp/" },
    { title: "IGMC Connections", href: "https://www.igmc.marines.mil/Divisions/Connections/" },
  ];
  const commanderMessages = [
    { title: "MARADMINS", href: "https://www.marines.mil/News/Messages/MARADMINS/" },
    { title: "ALMARS", href: "https://www.marines.mil/News/Messages/ALMARS/" },
    { title: "ALNAV", href: "https://www.mynavyhr.navy.mil/References/Messages/ALNAV-2025/" },
    { title: "SECNAV Instructions", href: "https://www.secnav.navy.mil/doni/secnav.aspx" },
    { title: "DoD Directives", href: "https://www.esd.whs.mil/Directives/issuances/dodd/" },
    { title: "RFF Policy Letters", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy/SitePages/Policy%20Letters.aspx" },
  ];
  const commanderResources = [
    { title: "M&RA SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra" },
    { title: "RFF SharePoint", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCPR_RFF_External/Finance_Policy" },
    { title: "M&RA Site", href: "https://www.manpower.marines.mil/" },
    { title: "Template ToolBox", href: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/TemplateToolBox.aspx" },
    { title: "Semper Admin Teams", href: "https://dod.teams.microsoft.us/l/team/19:dod:570243b431724971aeff925ef3cca4d8%40thread.tacv2/conversations?groupId=e130aa9e-3737-4d0e-baea-a03737570727&tenantId=f4c44cda-18c6-46b0-80f2-e290072444fd" },
  ];

  if (isCommanders) {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commanders</h1>
        <p className="text-zinc-700 dark:text-zinc-300">Command-level resources for oversight and decision-making.</p>

        {/* Primary Tools */}
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Primary Tools</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {commanderPrimaryTools.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-3 text-center text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">
                {link.title}
              </a>
            ))}
          </div>
        </section>

        {/* Messages & Directives */}
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Messages & Directives</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {commanderMessages.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-md border border-[var(--sa-navy)] px-4 py-2 text-[var(--sa-navy)] transition hover:bg-[var(--sa-navy)] hover:text-[var(--sa-cream)] dark:border-[var(--sa-cream)] dark:text-[var(--sa-cream)] dark:hover:bg-[var(--sa-cream)] dark:hover:text-[var(--sa-navy)]">
                {link.title}
              </a>
            ))}
          </div>
        </section>

        {/* SharePoints & Resources */}
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SharePoints & Resources</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {commanderResources.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-md border border-[var(--sa-navy)] px-4 py-2 text-[var(--sa-navy)] transition hover:bg-[var(--sa-navy)] hover:text-[var(--sa-cream)] dark:border-[var(--sa-cream)] dark:text-[var(--sa-cream)] dark:hover:bg-[var(--sa-cream)] dark:hover:text-[var(--sa-navy)]">
                {link.title}
              </a>
            ))}
          </div>
        </section>

        {/* Administrative Topics */}
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrative Topics</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link key={c.slug} prefetch={false} href={`/roles/commanders/${c.slug}`} className="rounded-md px-3 py-2 text-sm text-zinc-700 transition hover:bg-[var(--sa-cream)]/60 dark:text-zinc-300 dark:hover:bg-white/10">
                {c.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{roleTitle} Home</h1>
      <p className="text-zinc-700 dark:text-zinc-300">This page helps {safeRole === "marines" ? "every Marine" : roleTitle.toLowerCase()} understand and manage their administrative requirements. You will find guidance, checklists, and tools for pay, leave, travel, and readiness actions. The goal is to make admin simple, accurate, and accessible so you can stay focused on your mission.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((c) => (
          <div key={c.slug} className="flex items-center justify-center">
            <Link prefetch={false} href={`/roles/${safeRole}/${c.slug}`} className="rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">{c.label}</Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export function generateStaticParams(): { role: Role }[] {
  const roles: Role[] = ["marines", "administrators", "leaders", "commanders"];
  return roles.map((role) => ({ role }));
}
