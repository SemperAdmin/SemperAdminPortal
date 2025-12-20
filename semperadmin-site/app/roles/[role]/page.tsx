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
  const posts = (await readPosts()).filter((p) => p.community === safeRole).sort((a, b) => b.votes * 2 + b.createdAt - (a.votes * 2 + a.createdAt)).slice(0, 5);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{roleTitle} Home</h1>
      <p className="text-zinc-700 dark:text-zinc-300">This page helps {safeRole === "marines" ? "every Marine" : roleTitle.toLowerCase()} understand and manage their administrative requirements. You will find guidance, checklists, and tools for pay, leave, travel, and readiness actions. The goal is to make admin simple, accurate, and accessible so you can stay focused on your mission.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <div key={c.slug} className="flex items-center justify-center">
            <Link href={`/roles/${safeRole}/${c.slug}`} className="rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[#0a1623] dark:hover:bg-[var(--sa-red)]/60">{c.label}</Link>
          </div>
        ))}
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Community Discussions</h2>
        <ul className="space-y-2">
          {posts.map((p) => (
            <li key={p.id} className="rounded-md border border-black/5 bg-white text-sm shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/40 dark:hover:bg-white/10">
              <Link href={`/community?community=${safeRole}`} className="block px-3 py-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{p.title}</div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">{new Date(p.createdAt).toLocaleString()}</div>
                </div>
                <div className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{p.body}</div>
              </Link>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="rounded-md border border-black/5 bg-white px-3 py-2 text-sm shadow-sm dark:border-white/15 dark:bg-black/40">
              <div className="text-zinc-700 dark:text-zinc-300">No discussions yet for this role.</div>
            </li>
          )}
        </ul>
        <div className="mt-4 flex gap-3">
          <Link href="/community" className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Start a Discussion</Link>
        </div>
      </section>
    </div>
  );
}
