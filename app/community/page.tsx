"use client";
import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type CategoryKey = "announcements" | "general" | "ideas" | "qa" | "templates" | "fixes" | "training" | "policy" | "issues" | "success" | "best_practice" | "needs_clarification" | "needs_feedback";
type CommunityKey = "marines" | "administrators" | "leaders" | "commanders";

const CATEGORIES: { key: CategoryKey; label: string; emoji: string }[] = [
  { key: "announcements", label: "Announcements", emoji: "📣" },
  { key: "general", label: "General", emoji: "💬" },
  { key: "ideas", label: "Ideas", emoji: "💡" },
  { key: "qa", label: "Q&A / Help", emoji: "🙋" },
  { key: "templates", label: "Templates & Tools", emoji: "📎" },
  { key: "fixes", label: "Fixes & Workarounds", emoji: "🛠️" },
  { key: "training", label: "Training & SOPs", emoji: "📚" },
  { key: "policy", label: "Policy Talk", emoji: "🧭" },
  { key: "issues", label: "Issues & Roadblocks", emoji: "⚠️" },
  { key: "success", label: "Success Stories", emoji: "🙌" },
  { key: "best_practice", label: "Best Practice", emoji: "✅" },
  { key: "needs_clarification", label: "Needs Clarification", emoji: "❓" },
  { key: "needs_feedback", label: "Needs Feedback", emoji: "🗳️" },
];

const COMMUNITIES: { key: CommunityKey; label: string }[] = [
  { key: "marines", label: "All Marines" },
  { key: "administrators", label: "Administrators" },
  { key: "leaders", label: "Leaders" },
  { key: "commanders", label: "Commanders" },
];

type Post = {
  id: string;
  title: string;
  body: string;
  category: CategoryKey;
  community: CommunityKey;
  votes: number;
  createdAt: number;
  author: string;
};

const seed: Post[] = [];

function CommunityContent() {
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState<Post[]>(seed);
  const qCommunity = searchParams.get("community");
  const qCategory = searchParams.get("category");
  const initialCommunity: CommunityKey | "all" = qCommunity && ["marines", "administrators", "leaders", "commanders"].includes(qCommunity) ? (qCommunity as CommunityKey) : "all";
  const initialCategory: CategoryKey | "all" = qCategory && [
    "announcements",
    "general",
    "ideas",
    "qa",
    "templates",
    "fixes",
    "training",
    "policy",
    "issues",
    "success",
    "best_practice",
    "needs_clarification",
    "needs_feedback",
  ].includes(qCategory) ? (qCategory as CategoryKey) : "all";
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | "all">(initialCategory);
  const [selectedCommunity, setSelectedCommunity] = useState<CommunityKey | "all">(initialCommunity);
  const [sort, setSort] = useState<"hot" | "new" | "top">("hot");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState<CategoryKey>("general");
  const [community, setCommunity] = useState<CommunityKey>("marines");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/community");
        const data = await res.json();
        if (active && Array.isArray(data.posts)) setPosts(data.posts);
      } catch {}
    })();
    return () => {
      active = false;
    };
  }, []);

  

  const filtered = useMemo(() => {
    let p = posts;
    if (selectedCategory !== "all") p = p.filter((x) => x.category === selectedCategory);
    if (selectedCommunity !== "all") p = p.filter((x) => x.community === selectedCommunity);
    if (sort === "new") return [...p].sort((a, b) => b.createdAt - a.createdAt);
    if (sort === "top") return [...p].sort((a, b) => b.votes - a.votes);
    return [...p].sort((a, b) => b.votes * 2 + b.createdAt - (a.votes * 2 + a.createdAt));
  }, [posts, selectedCategory, selectedCommunity, sort]);

  async function vote(id: string, delta: number) {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, votes: p.votes + delta } : p)));
    try {
      await fetch("/api/community", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ id, delta }) });
    } catch {}
  }

  async function submit() {
    if (!title.trim() || !body.trim()) return;
    const res = await fetch("/api/community", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: title.trim(), body: body.trim(), category, community, author: "You" }),
    });
    const data = await res.json();
    if (data && data.post) {
      setPosts((prev) => [data.post, ...prev]);
      setTitle("");
      setBody("");
      setCategory("general");
      setCommunity("marines");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Community</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex gap-3">
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="flex-1 rounded-md border border-black/10 bg-white px-3 py-2 text-[var(--sa-navy)] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--sa-gold)] dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)]" />
              <select value={category} onChange={(e) => setCategory(e.target.value as CategoryKey)} className="rounded-md border border-black/10 bg-white px-3 py-2 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)]">
                {CATEGORIES.map((c) => (
                  <option key={c.key} value={c.key}>{c.emoji} {c.label}</option>
                ))}
              </select>
              <select value={community} onChange={(e) => setCommunity(e.target.value as CommunityKey)} className="rounded-md border border-black/10 bg-white px-3 py-2 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)]">
                {COMMUNITIES.map((c) => (
                  <option key={c.key} value={c.key}>{c.label}</option>
                ))}
              </select>
              <button onClick={submit} className="rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Post</button>
            </div>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Share details, links, and context" className="mt-3 h-28 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-[var(--sa-navy)] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--sa-gold)] dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)]" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button onClick={() => setSort("hot")} className={`rounded-full px-3 py-1 text-sm ${sort === "hot" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Hot</button>
              <button onClick={() => setSort("new")} className={`rounded-full px-3 py-1 text-sm ${sort === "new" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>New</button>
              <button onClick={() => setSort("top")} className={`rounded-full px-3 py-1 text-sm ${sort === "top" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Top</button>
            </div>
          </div>

          <ul className="space-y-4">
            {filtered.map((p) => {
              const cat = CATEGORIES.find((c) => c.key === p.category)!;
              const com = COMMUNITIES.find((c) => c.key === p.community)!;
              return (
                <li key={p.id} className="rounded-xl border border-black/5 bg-white p-4 shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/40 dark:hover:bg-[var(--sa-red)]/40">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <button onClick={() => vote(p.id, 1)} className="rounded-md px-2 py-1 text-[var(--sa-navy)] hover:bg-[var(--sa-cream)]/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10">▲</button>
                      <div className="text-center text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{p.votes}</div>
                      <button onClick={() => vote(p.id, -1)} className="rounded-md px-2 py-1 text-[var(--sa-navy)] hover:bg-[var(--sa-cream)]/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10">▼</button>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[var(--sa-cream)]/60 px-2 py-1 text-xs text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]">{cat.emoji} {cat.label}</span>
                        <span className="rounded-full bg-[var(--sa-cream)]/60 px-2 py-1 text-xs text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]">{com.label}</span>
                        <span className="text-xs text-zinc-600 dark:text-zinc-400">{new Date(p.createdAt).toLocaleString()}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{p.title}</h3>
                      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{p.body}</p>
                      <div className="mt-3 flex gap-2">
                        <button className="rounded-md border border-black/10 bg-white px-3 py-1 text-sm text-[var(--sa-navy)] hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Reply</button>
                        <button className="rounded-md border border-black/10 bg-white px-3 py-1 text-sm text-[var(--sa-navy)] hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Share</button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="grid gap-2">
              <button onClick={() => setSelectedCategory("all")} className={`text-left rounded-md px-3 py-2 ${selectedCategory === "all" ? "bg-[var(--sa-cream)]/60 dark:bg-white/10" : "hover:bg-[var(--sa-cream)]/60 dark:hover:bg-white/10"} text-[var(--sa-navy)] dark:text-[var(--sa-cream)]`}>All Categories</button>
              {CATEGORIES.map((c) => (
                <button key={c.key} onClick={() => setSelectedCategory(c.key)} className={`text-left rounded-md px-3 py-2 ${selectedCategory === c.key ? "bg-[var(--sa-cream)]/60 dark:bg-white/10" : "hover:bg-[var(--sa-cream)]/60 dark:hover:bg-white/10"} text-[var(--sa-navy)] dark:text-[var(--sa-cream)]`}>{c.emoji} {c.label}</button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="grid gap-2">
              <button onClick={() => setSelectedCommunity("all")} className={`text-left rounded-md px-3 py-2 ${selectedCommunity === "all" ? "bg-[var(--sa-cream)]/60 dark:bg-white/10" : "hover:bg-[var(--sa-cream)]/60 dark:hover:bg-white/10"} text-[var(--sa-navy)] dark:text-[var(--sa-cream)]`}>All Communities</button>
              {COMMUNITIES.map((c) => (
                <button key={c.key} onClick={() => setSelectedCommunity(c.key)} className={`text-left rounded-md px-3 py-2 ${selectedCommunity === c.key ? "bg-[var(--sa-cream)]/60 dark:bg-white/10" : "hover:bg-[var(--sa-cream)]/60 dark:hover:bg-white/10"} text-[var(--sa-navy)] dark:text-[var(--sa-cream)]`}>{c.label}</button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="space-y-3">
              <div className="text-sm text-zinc-700 dark:text-zinc-300">Discussions are for collaboration and knowledge sharing. For official records and policies, use the appropriate systems.</div>
              <Link href="/suggestions" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Submit a Suggestion</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function CommunityPage() {
  return (
    <Suspense fallback={<div className="space-y-6" />}> 
      <CommunityContent />
    </Suspense>
  );
}
