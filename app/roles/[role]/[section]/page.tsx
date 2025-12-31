import { type Role, catalogGroups, reportGroups, type CatalogGroup } from "../../../../data/links";
import { SECTIONS, ADMIN_ONLY_SECTIONS } from "../../../../data/sections";
import { Breadcrumb } from "../../../../components/ui/Breadcrumb";
import Link from "next/link";
import CatalogGrid from "../../../../components/CatalogGrid";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Params = { role: Role; section: string };

export default async function RoleSectionPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const key = p.section ?? "unknown";
  const safeRole = p.role ?? "marines";
  const section = SECTIONS[key] ?? { title: key.replace(/-/g, " "), intro: "Content coming soon." };
  const isAdminSection = key === "s1-g1-administration" || key === "pac-personnel-admin-center" || key === "ii-i-staff-administration";
  const isPac = key === "pac-personnel-admin-center";
  const imageSrc = isPac ? "/PAC-Battle-Rhythm.png" : "/S-1-Battle-Rhythm.png";
  const imageAlt = isPac ? "PAC Battle Rhythm" : "S-1 Battle Rhythm";
  const liveDocUrl = isPac
    ? "https://usmc.sharepoint-mil.us/:w:/r/sites/DCMRA_mra_SemperAdmin/Template%20Toolbox/Battle%20Rhythms%20PAC.docx?d=w38a97bcabfeb4878b9124a7ccb46e4e5&csf=1&web=1&e=PqVdao"
    : "https://usmc.sharepoint-mil.us/:w:/r/sites/DCMRA_mra_SemperAdmin/Template%20Toolbox/Battle%20Rhythms%20S-1.docx?d=we95586cde4be4d50a3c39994d2035bd4&csf=1&web=1&e=HxdR4y";
  const videoUrl = isPac ? "https://youtu.be/T14cDRxZnt8" : "https://youtu.be/Fji5rH5zmqg";
  const byName = (n: string) => catalogGroups.find((g) => g.name === n) as CatalogGroup | undefined;
  const coreNames = [
    "Semper Admin Links",
    "System Links",
    "Reference Links",
    "AI Links",
    "Teams Channels",
    "SharePoints",
    "More Great Links",
  ];
  const coreGroups = (coreNames.map(byName).filter(Boolean) as CatalogGroup[]).map((g) => ({ name: g.name, items: g.items.filter((i) => !i.roles || i.roles.includes("administrators")) }));
  const rByName = (n: string) => reportGroups.find((g) => g.name === n) as CatalogGroup | undefined;
  const reportNames = [
    "Enterprise Reports",
    "Portals",
    "Non Routine",
    "Promotions",
    "Training",
    "Mondays",
    "SBP",
    "1st of the Month",
    "15th of the Month",
    "U&E",
  ];
  const reports = (reportNames.map(rByName).filter(Boolean) as CatalogGroup[]);

  // Breadcrumb setup
  const roleLabel = safeRole === "marines" ? "All Marines" : safeRole[0].toUpperCase() + safeRole.slice(1);
  const breadcrumbItems = [
    { label: roleLabel, href: `/roles/${safeRole}` },
    { label: section.title },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{section.title}</h1>
      {section.intro && (
        <p className="text-zinc-700 dark:text-zinc-300">{section.intro}</p>
      )}
      {isAdminSection ? (
        <div className="space-y-8">
          {/* Battle Rhythm + Quick Actions Side by Side */}
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex flex-col gap-6 md:flex-row">
              {/* Battle Rhythm - Left Side */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Battle Rhythm</h2>
                <div className="mt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}${imageSrc}`}
                    alt={imageAlt}
                    className="w-full h-auto rounded-lg border border-black/10 dark:border-white/10"
                  />
                  <div className="mt-4 flex gap-3">
                    <a
                      href={liveDocUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60"
                    >
                      Live Document
                    </a>
                    <a
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-[var(--sa-red)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-red)]/80"
                    >
                      Video
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions - Right Side */}
              <div className="w-full md:w-64 shrink-0">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Actions</h2>
                <div className="mt-4 flex flex-col gap-3">
                  {key === "s1-g1-administration" || key === "ii-i-staff-administration" ? (
                    <>
                      <Link prefetch={false} href="/announcements" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Announcements</Link>
                      <Link prefetch={false} href="/inspections" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Inspections</Link>
                      <Link prefetch={false} href="/reports" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Reports</Link>
                      <Link prefetch={false} href="https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/TemplateToolBox.aspx" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Template Toolbox</Link>
                    </>
                  ) : (
                    <>
                      <Link prefetch={false} href="/reports/unit-user" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Unit User Reports</Link>
                      <Link prefetch={false} href="/reports/enterprise" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Enterprise Reports</Link>
                      <Link prefetch={false} href="/links" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Important Links</Link>
                      <Link prefetch={false} href="/documents" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Documents</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Core Resources</h2>
            <div className="mt-4">
              <CatalogGrid groups={coreGroups} />
            </div>
          </section>
          {key !== "s1-g1-administration" && key !== "ii-i-staff-administration" && (
            <section>
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reports & Dashboards</h2>
              <div className="mt-4">
                <CatalogGrid groups={reports} />
              </div>
            </section>
          )}
        </div>
      ) : section.groups ? (
        <div className="space-y-6">
          {section.groups.map((g) => (
            <section key={g.title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{g.title}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((i) => (
                  <li key={i.title} className="rounded-md border border-black/5 bg-white p-3 text-sm shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:hover:bg-white/10">
                    {i.slug ? (
                      <Link prefetch={false} href={`/roles/${safeRole}/${key}/${i.slug}`} className="block">
                        <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{i.title}</div>
                        <div className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{i.desc}</div>
                      </Link>
                    ) : (
                      <div className="block">
                        <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{i.title}</div>
                        <div className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{i.desc}</div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-black/5 bg-white p-6 text-zinc-700 shadow-sm dark:border-white/15 dark:bg-black/40 dark:text-zinc-300">Content coming soon.</div>
      )}
      <div className="flex gap-3">
        <Link prefetch={false} href={`/roles/${safeRole}`} className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Back to {safeRole === "marines" ? "All Marines" : safeRole[0].toUpperCase() + safeRole.slice(1)} Home</Link>
      </div>
    </div>
  );
}

export function generateStaticParams(): { role: Role; section: string }[] {
  const roles: Role[] = ["marines", "administrators", "leaders", "commanders"];
  const sections = Object.keys(SECTIONS);
  const params: { role: Role; section: string }[] = [];
  for (const role of roles) {
    for (const section of sections) {
      if (ADMIN_ONLY_SECTIONS.has(section) && role !== "administrators") continue;
      params.push({ role, section });
    }
  }
  return params;
}
