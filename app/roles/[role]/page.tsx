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
    { label: "Pay & Allowances", slug: "pay-allowances" },
    { label: "Travel & Transportation", slug: "travel-transportation" },
    { label: "Dependency Management", slug: "dependency-management" },
    { label: "Personnel Administration", slug: "personnel-administration" },
    { label: "Deployment Support", slug: "deployment-support" },
    { label: "Legal & Disciplinary", slug: "legal-disciplinary" },
    { label: "Records & Corrections", slug: "records-corrections" },
    { label: "Reserve & Mobilization", slug: "reserve-mobilization" },
    { label: "Separation & Transitions", slug: "separation-transitions" },
    { label: "Training & Education", slug: "training-education" },
    { label: "Systems Management", slug: "systems-management" },
  ];
  const isAdministrators = safeRole === "administrators";
  const adminOptions: { label: string; slug: string }[] = [
    { label: "S-1 / G-1 Administration", slug: "s1-g1-administration" },
    { label: "PAC (Personnel Admin Center)", slug: "pac-personnel-admin-center" },
    { label: "I&I Staff Administration", slug: "ii-i-staff-administration" },
  ];
  const visibleItems = isAdministrators ? adminOptions : categories;
  const posts = (await readPosts()).filter((p) => p.community === safeRole).sort((a, b) => b.votes * 2 + b.createdAt - (a.votes * 2 + a.createdAt)).slice(0, 5);

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
