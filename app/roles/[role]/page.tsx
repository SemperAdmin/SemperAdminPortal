import { type Role } from "../../../data/links";
import { Breadcrumb } from "../../../components/ui/Breadcrumb";
import Link from "next/link";
import { Heart, Baby, Plane, Gavel, Users, Shield, ClipboardCheck, CalendarClock } from "lucide-react";
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
    { label: "Education & Training", slug: "education-training" },
    { label: "Insurance & Healthcare", slug: "insurance-healthcare" },
    { label: "Legal & Disciplinary", slug: "legal-disciplinary" },
    { label: "Life Events", slug: "life-events" },
    { label: "Pay & Allowances", slug: "pay-allowances" },
    { label: "Personnel Administration", slug: "personnel-administration" },
    { label: "Promotions & Career Progression", slug: "promotions-career-progression" },
    { label: "Records & Corrections", slug: "records-corrections" },
    { label: "Reserve & Mobilization", slug: "reserve-mobilization" },
    { label: "Separations & Transitions", slug: "separations-transitions" },
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
  const leaderCategories: { label: string; slug: string; description: string }[] = [
    {
      label: "Accountability & Discipline",
      slug: "leaders-accountability-discipline",
      description: "NJP authority levels, discipline recommendations, UA/desertion reporting, administrative separation, legal hold procedures, Article 31(b) rights, and progressive discipline framework.",
    },
    {
      label: "Administrative Systems",
      slug: "leaders-administrative-systems",
      description: "MCTFS navigation, Marine Online (MOL), JEPES system access, Total Force Retention System (TFRS), Unit Diary reporting, and training systems including MCTIMS and MarineNet.",
    },
    {
      label: "Awards & Recognition",
      slug: "leaders-awards-recognition",
      description: "Writing award recommendations, citation format requirements, iAPS submission, routing and approval authority, timeline management for PCS/retirement awards, and common package errors.",
    },
    {
      label: "Career Development",
      slug: "leaders-career-development",
      description: "Supporting reenlistment decisions, PME tracking, meritorious promotion preparation, special duty screening, MOS school recommendations, enlisted commissioning, and warrant officer programs.",
    },
    {
      label: "Counseling & Documentation",
      slug: "leaders-counseling-documentation",
      description: "Six functional areas (5Fs plus Future), SMART goals, counseling fundamentals, initial and follow-on sessions, adverse counseling documentation, and Marine Leader Notebooks.",
    },
    {
      label: "Deployment & Readiness",
      slug: "leaders-deployment-readiness",
      description: "UPFRP overview, deployment training events, individual readiness requirements, Family Care Plan verification, SGLI/emergency data, PFT/CFT requirements, and pre-deployment checklists.",
    },
    {
      label: "Performance Evaluation",
      slug: "leaders-performance-evaluation",
      description: "JEPES overview and four pillars, reporting chain roles, reporting occasions, command input marking, NOT REC procedures, MRO counseling, fitness reports (E-5+), and corrective procedures.",
    },
    {
      label: "Personnel Accountability",
      slug: "leaders-personnel-accountability",
      description: "Daily accountability fundamentals, gains/losses processing, leave and liberty management, UA procedures, TAD tracking, muster and formation procedures, and record keeping.",
    },
    {
      label: "Conducting Investigations",
      slug: "leaders-conducting-investigations",
      description: "IO duties from convening order to report submission: preliminary inquiries, command investigations, evidence collection, witness interviews, standards of proof, and report format.",
    },
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

  // Breadcrumb for role home pages
  const breadcrumbItems = [{ label: roleTitle }];

  // Commander section groups with categories
  const commanderGroups = [
    {
      id: "authority",
      title: "Command Authority",
      color: "rose",
      icon: Gavel,
      description: "Legal responsibilities, NJP, investigations, personnel management",
      categories: [
        { label: "Command Authority & Legal", slug: "commanders-authority-legal", desc: "NJP, court-martial, separation authority" },
        { label: "Personnel & Career Management", slug: "commanders-personnel-career", desc: "Fitness reports, promotions, admin actions" },
        { label: "Legal & Discipline", slug: "commanders-legal-discipline", desc: "NJP procedures, ADSEP authority, due process" },
        { label: "Administrative Investigations", slug: "commanders-admin-investigations", desc: "JAGMAN, convening orders, LOD determinations" },
      ],
    },
    {
      id: "climate",
      title: "Command Climate & Welfare",
      color: "sky",
      icon: Users,
      description: "Climate programs, SAPR, suicide prevention, family readiness, EO",
      categories: [
        { label: "Command Climate & Culture", slug: "commanders-climate-culture", desc: "DEOCS, policy statements, PAC program" },
        { label: "Sexual Assault Prevention", slug: "commanders-sapr", desc: "SAPR VA, reporting, victim support" },
        { label: "Suicide Prevention", slug: "commanders-suicide-prevention", desc: "SPPO, CIRRAS, force preservation" },
        { label: "Family Readiness & Casualty", slug: "commanders-family-readiness", desc: "UPFRP, FAP, casualty affairs" },
        { label: "Equal Opportunity", slug: "commanders-equal-opportunity", desc: "EO program, complaints, climate assessment" },
        { label: "Substance Abuse & Urinalysis", slug: "commanders-substance-abuse", desc: "Drug testing, treatment, admin actions" },
      ],
    },
    {
      id: "readiness",
      title: "Readiness & Resources",
      color: "amber",
      icon: ClipboardCheck,
      description: "Readiness reporting, fiscal accountability, equipment, training",
      categories: [
        { label: "Training & Readiness", slug: "commanders-training-readiness", desc: "DRRS-MC, METL, resource levels" },
        { label: "Fiscal & Property", slug: "commanders-fiscal-property", desc: "Budget, fund control, accountability" },
        { label: "Maintenance & Logistics", slug: "commanders-maintenance-logistics", desc: "T/E, maintenance, small arms" },
      ],
    },
    {
      id: "compliance",
      title: "Compliance & Security",
      color: "emerald",
      icon: Shield,
      description: "Safety, inspections, environmental, security, public affairs",
      categories: [
        { label: "Safety & Risk Management", slug: "commanders-safety-risk", desc: "Ground/aviation safety, ORM, mishaps" },
        { label: "Inspector General & Inspections", slug: "commanders-inspector-general", desc: "CIP, IGMC, FSMAO, POA&M" },
        { label: "Environmental Stewardship", slug: "commanders-environmental", desc: "EMS, spills, hazmat, NEPA" },
        { label: "Security Programs", slug: "commanders-security", desc: "Info/personnel/physical/cyber security" },
        { label: "Public Affairs", slug: "commanders-public-affairs", desc: "Media, crisis comms, social media" },
      ],
    },
  ];

  if (isCommanders) {
    return (
      <div className="space-y-8">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commanders</h1>
        <p className="text-zinc-700 dark:text-zinc-300">Comprehensive command-level guidance organized by functional area. Each section covers authorities, responsibilities, timelines, and required actions for commanding officers.</p>

        {/* Change of Command Quick Reference - Featured */}
        <Link
          href="/roles/commanders/commanders-transition-command"
          prefetch={false}
          className="group block rounded-xl border-2 border-[var(--sa-gold)] bg-gradient-to-r from-amber-50 to-orange-50 p-6 shadow-sm transition hover:shadow-md dark:from-amber-950/30 dark:to-orange-950/30"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <CalendarClock className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)]">Change of Command Requirements</h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Complete timeline checklist: 30/60/90 day requirements, annual actions, and turnover procedures</p>
            </div>
          </div>
        </Link>

        {/* Four Functional Groups */}
        <div className="space-y-6">
          {commanderGroups.map((group) => {
            const Icon = group.icon;
            const colorClasses = {
              rose: "border-l-rose-500 bg-rose-50/50 dark:bg-rose-950/20",
              sky: "border-l-sky-500 bg-sky-50/50 dark:bg-sky-950/20",
              amber: "border-l-amber-500 bg-amber-50/50 dark:bg-amber-950/20",
              emerald: "border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20",
            };
            const iconClasses = {
              rose: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
              sky: "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400",
              amber: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
              emerald: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
            };
            return (
              <section
                key={group.id}
                className={`rounded-xl border border-black/5 border-l-4 p-6 shadow-sm dark:border-white/15 ${colorClasses[group.color as keyof typeof colorClasses]}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconClasses[group.color as keyof typeof iconClasses]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{group.title}</h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{group.description}</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/roles/commanders/${cat.slug}`}
                      prefetch={false}
                      className="group rounded-lg border border-black/10 bg-white p-4 shadow-sm transition hover:border-[var(--sa-navy)]/30 hover:shadow-md dark:border-white/15 dark:bg-black/40"
                    >
                      <div className="font-medium text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)]">{cat.label}</div>
                      <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{cat.desc}</div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

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

        {/* Marine Administrative Topics - Collapsed */}
        <details className="rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/15 dark:bg-black/40">
          <summary className="cursor-pointer p-6 text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)] hover:bg-[var(--sa-cream)]/30 dark:hover:bg-white/5">
            All Marines Administrative Topics
          </summary>
          <div className="border-t border-black/5 p-6 dark:border-white/15">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((c) => (
                <Link key={c.slug} prefetch={false} href={`/roles/commanders/${c.slug}`} className="rounded-md px-3 py-2 text-sm text-zinc-700 transition hover:bg-[var(--sa-cream)]/60 dark:text-zinc-300 dark:hover:bg-white/10">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    );
  }

  if (isLeaders) {
    return (
      <div className="space-y-8">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leaders Home</h1>
        <p className="text-zinc-700 dark:text-zinc-300">This page helps leaders understand and manage their administrative requirements. You will find guidance, checklists, and tools for pay, leave, travel, and readiness actions. The goal is to make admin simple, accurate, and accessible so you can stay focused on your mission.</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {leaderCategories.map((c) => (
            <Link
              key={c.slug}
              prefetch={false}
              href={`/roles/leaders/${c.slug}`}
              className="group rounded-xl border border-black/5 bg-white p-5 shadow-sm transition hover:border-[var(--sa-navy)]/30 hover:shadow-md dark:border-white/15 dark:bg-black/40 dark:hover:border-[var(--sa-cream)]/30"
            >
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)]">
                {c.label}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Featured life events for All Marines page
  const featuredLifeEvents = [
    { title: "Getting Married", slug: "getting-married", icon: Heart, color: "rose", desc: "Add spouse to DEERS & update BAH" },
    { title: "Having a Baby", slug: "having-a-baby", icon: Baby, color: "sky", desc: "Register child & claim benefits" },
    { title: "PCS Move", slug: "pcs-move", icon: Plane, color: "amber", desc: "Checkout, HHG & check-in" },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{roleTitle} Home</h1>
      <p className="text-zinc-700 dark:text-zinc-300">This page helps {safeRole === "marines" ? "every Marine" : roleTitle.toLowerCase()} understand and manage their administrative requirements. You will find guidance, checklists, and tools for pay, leave, travel, and readiness actions. The goal is to make admin simple, accurate, and accessible so you can stay focused on your mission.</p>

      {/* Featured Life Events Section - Only show for Marines */}
      {safeRole === "marines" && (
        <section className="rounded-xl border-2 border-[var(--sa-gold)] bg-gradient-to-r from-amber-50 to-orange-50 p-6 shadow-sm dark:from-amber-950/30 dark:to-orange-950/30">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Life Events Guides</h2>
            <Link href="/roles/marines/life-events" prefetch={false} className="text-sm text-[var(--sa-red)] hover:underline">
              View all →
            </Link>
          </div>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Step-by-step checklists for major life events. Know exactly what to do and when.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {featuredLifeEvents.map((event) => {
              const Icon = event.icon;
              return (
                <Link
                  key={event.slug}
                  href={`/life-events/${event.slug}`}
                  prefetch={false}
                  className="group flex items-center gap-3 rounded-lg border border-black/10 bg-white p-3 shadow-sm transition hover:border-[var(--sa-navy)]/30 hover:shadow-md dark:border-white/15 dark:bg-black/40"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    event.color === "rose" ? "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400" :
                    event.color === "sky" ? "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400" :
                    "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)]">{event.title}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">{event.desc}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

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
