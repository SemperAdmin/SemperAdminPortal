"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Star, StarOff, Share2, ExternalLink } from "lucide-react";

const apps = [
  {
    name: "FDHD Guide",
    href: "/apps/fdhd",
    icon: "⚓",
    description:
      "Flight Deck Hazardous Duty Incentive Pay guide and eligibility checklist.",
    categories: ["Pay & Allowances", "HDIP", "Flight Deck"],
  },
  {
    name: "Parachute HDIP Guide",
    href: "/apps/parachute",
    icon: "🪂",
    description:
      "Parachute Hazardous Duty Incentive Pay guide for Static Line and MFF.",
    categories: ["Pay & Allowances", "HDIP", "Parachute"],
  },
  {
    name: "AMHS Message Formatter",
    href: "https://semperadmin.github.io/AMHS-Message-Formatter/",
    icon: "📡",
    description:
      "Format Automated Message Handling System messages to military standards for secure communications.",
    categories: ["Comms", "Formatting"],
  },
  {
    name: "EventCall",
    href: "https://semperadmin.github.io/EventCall",
    icon: "📅",
    description:
      "Create, manage, and coordinate events with precision — scheduling, notifications, and tracking.",
    categories: ["Events", "Scheduling"],
  },
  {
    name: "Fitness Report Evaluator",
    href: "https://semperadmin.github.io/Fitness-Report-Evaluator/",
    icon: "⭐",
    description:
      "Analyze fitness reports with unbiased, data-driven insights to support career progression.",
    categories: ["Performance", "Career"],
  },
  {
    name: "Marine Corps Directives Formatter",
    href: "https://semperadmin.github.io/marine-corps-directives-formatter/",
    icon: "📋",
    description:
      "Effortlessly format Marine Corps orders and directives while maintaining compliance.",
    categories: ["Documents", "Compliance", "Formatting"],
  },
  {
    name: "Naval Letter Formatter",
    href: "https://semperadmin.github.io/naval-letter-formatter/",
    icon: "📝",
    description:
      "Streamline official correspondence with automated formatting to Marine Corps standards.",
    categories: ["Documents", "Correspondence", "Formatting"],
  },
  {
    name: "PEBD Calculator",
    href: "https://semperadmin.github.io/PEBD-CALCULATOR/",
    icon: "💻",
    description:
      "Calculate Pay Entry Base Date accurately, eliminating manual errors in career timelines.",
    categories: ["Pay & Allowances", "Calculator"],
  },
  {
    name: "USMC Directives Hub",
    href: "https://semperadmin.github.io/usmc-directives-hub/",
    icon: "📚",
    description:
      "Access and search orders, bulletins, and messages in one centralized location.",
    categories: ["Documents", "Search"],
  },
  {
    name: "V.I.C.I.O.U.S.",
    href: "https://semperadmin.github.io/V.I.C.I.O.U.S./",
    icon: "🔄",
    description:
      "Virtual Initiation Check-In Interface Offboarding Utility System for personnel transfers.",
    categories: ["Personnel", "Transfers"],
  },
];

export default function AppsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const rawFav = localStorage.getItem("sa_favorites");
      return rawFav ? new Set(JSON.parse(rawFav)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [launchCounts, setLaunchCounts] = useState<Record<string, number>>(() => {
    try {
      const rawCounts = localStorage.getItem("sa_launch_counts");
      return rawCounts ? JSON.parse(rawCounts) : {};
    } catch {
      return {};
    }
  });

  function toggleFavorite(href: string) {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href); else next.add(href);
      try { localStorage.setItem("sa_favorites", JSON.stringify(Array.from(next))); } catch {}
      return next;
    });
  }

  function incrementLaunch(href: string) {
    setLaunchCounts((prev) => {
      const next = { ...prev, [href]: (prev[href] || 0) + 1 };
      try { localStorage.setItem("sa_launch_counts", JSON.stringify(next)); } catch {}
      return next;
    });
  }

  async function shareApp(name: string, href: string) {
    const url = href.startsWith("http") ? href : `${location.origin}${href}`;
    const data = { title: name, text: `${name} — Semper Admin`, url };
    try {
      if (navigator.share) { await navigator.share(data); return; }
    } catch {}
    try { await navigator.clipboard.writeText(url); } catch {}
  }
  const categories = useMemo(() => {
    const s = new Set<string>();
    apps.forEach(a => a.categories?.forEach(c => s.add(c)));
    return Array.from(s).sort();
  }, []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apps.filter(a => {
      const matchesQuery = q
        ? a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
        : true;
      const matchesCategory = category ? (a.categories?.includes(category)) : true;
      const matchesFav = favoritesOnly ? favorites.has(a.href) : true;
      return matchesQuery && matchesCategory && matchesFav;
    });
  }, [query, category, favoritesOnly, favorites]);

  const trendingSet = useMemo(() => {
    const entries = Object.entries(launchCounts).sort((a, b) => (b[1] - a[1]));
    return new Set(entries.slice(0, 3).map(([href]) => href));
  }, [launchCounts]);
  return (
    <div className="relative">

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="text-center">
          <div className="mx-auto mb-6 inline-block">
            <div className="relative h-24 w-24 overflow-hidden rounded-full bg-white p-2 shadow-2xl ring-4 ring-red-600/20 transition">
              <Image src="/logo.png" alt="Semper Admin" fill sizes="96px" className="rounded-full object-cover" />
            </div>
          </div>
          <h1 className="bg-gradient-to-r from-white via-rose-200 to-amber-100 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Semper Admin
          </h1>
          <p className="mt-2 text-lg font-medium text-slate-300 sm:text-xl">Empowering Marines to Excel</p>
          <p className="text-slate-400">Mentor | Manage | Master</p>
          <div className="mt-6">
            <a
              href="#apps"
              className="inline-flex items-center rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              Browse Tools
            </a>
          </div>
        </div>

        <div className="mt-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl transition hover:bg-white/10">
            <h2 className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-center text-xl font-bold text-transparent sm:text-2xl">
              Mission-Critical Tools for Marines
            </h2>
            <p className="mt-3 text-center text-slate-300">
              Administrative excellence is the backbone of every successful mission. These purpose-built applications eliminate tedious manual work so Marines can focus on leading and excelling.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools..."
              aria-label="Search tools"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 placeholder:text-slate-400 shadow focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              aria-pressed={favoritesOnly}
              onClick={() => setFavoritesOnly((v) => !v)}
              className={`rounded-full border px-3 py-1 text-sm transition ${favoritesOnly ? "border-rose-400 bg-rose-500/20 text-rose-200" : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"}`}
            >
              Favorites
            </button>
            {categories.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(active ? null : c)}
                  className={`rounded-full border px-3 py-1 text-sm transition ${active ? "border-rose-400 bg-rose-500/20 text-rose-200" : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"}`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className="col-span-full text-sm text-slate-400" aria-live="polite">
            {filtered.length} tools
          </div>
        </div>

        <div id="apps" className="mt-10">
          <ul role="list" className="apps-grid">
          {filtered.map((app) => {
            const isExternal = app.href.startsWith("http");
            if (isExternal) {
              return (
                <li key={app.href}>
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-card"
                    aria-label={app.name}
                    onClick={() => incrementLaunch(app.href)}
                  >
                    <div className="app-card-inner">
                      <div className="app-header">
                        <div className="app-icon">{app.icon}</div>
                        <div>
                          <h3 className="app-name flex items-center gap-2">
                            {app.name}
                            <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden="true" />
                            {(!launchCounts[app.href]) && (
                              <span className="rounded-full border border-amber-400 bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-100">New</span>
                            )}
                            {(trendingSet.has(app.href) && (launchCounts[app.href] || 0) > 1) && (
                              <span className="rounded-full border border-rose-400 bg-rose-500/20 px-2 py-0.5 text-xs font-medium text-rose-100">Trending</span>
                            )}
                          </h3>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <button
                            type="button"
                            aria-label={favorites.has(app.href) ? "Remove from favorites" : "Add to favorites"}
                            className="rounded-full bg-white/5 p-1 text-slate-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rose-400"
                            onClick={(e) => { e.preventDefault(); toggleFavorite(app.href); }}
                          >
                            {favorites.has(app.href) ? <Star className="h-4 w-4 text-rose-400" fill="currentColor" /> : <StarOff className="h-4 w-4" />}
                          </button>
                          <button
                            type="button"
                            aria-label="Share tool"
                            className="rounded-full bg-white/5 p-1 text-slate-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rose-400"
                            onClick={(e) => { e.preventDefault(); shareApp(app.name, app.href); }}
                          >
                            <Share2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <p className="app-description">{app.description}</p>
                      {launchCounts[app.href] ? (
                        <p className="mt-1 text-xs text-slate-500">{launchCounts[app.href]} launches</p>
                      ) : null}
                      <div className="app-launch">
                        <span>Launch Tool</span>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="ml-2 h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
              );
            }
            return (
              <li key={app.href}>
                <Link href={app.href} className="app-card" aria-label={app.name} onClick={() => incrementLaunch(app.href)}>
                  <div className="app-card-inner">
                    <div className="app-header">
                      <div className="app-icon">{app.icon}</div>
                      <div>
                        <h3 className="app-name flex items-center gap-2">
                          {app.name}
                          {(!launchCounts[app.href]) && (
                            <span className="rounded-full border border-amber-400 bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-100">New</span>
                          )}
                          {(trendingSet.has(app.href) && (launchCounts[app.href] || 0) > 1) && (
                            <span className="rounded-full border border-rose-400 bg-rose-500/20 px-2 py-0.5 text-xs font-medium text-rose-100">Trending</span>
                          )}
                        </h3>
                      </div>
                      <div className="ml-auto flex items-center gap-2">
                        <button
                          type="button"
                          aria-label={favorites.has(app.href) ? "Remove from favorites" : "Add to favorites"}
                          className="rounded-full bg-white/5 p-1 text-slate-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rose-400"
                          onClick={(e) => { e.preventDefault(); toggleFavorite(app.href); }}
                        >
                          {favorites.has(app.href) ? <Star className="h-4 w-4 text-rose-400" fill="currentColor" /> : <StarOff className="h-4 w-4" />}
                        </button>
                        <button
                          type="button"
                          aria-label="Share tool"
                          className="rounded-full bg-white/5 p-1 text-slate-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rose-400"
                          onClick={(e) => { e.preventDefault(); shareApp(app.name, app.href); }}
                        >
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <p className="app-description">{app.description}</p>
                    {launchCounts[app.href] ? (
                      <p className="mt-1 text-xs text-slate-500">{launchCounts[app.href]} launches</p>
                    ) : null}
                    <div className="app-launch">
                      <span>Launch Tool</span>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="ml-2 h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
          </ul>
          {filtered.length === 0 && (
            <div className="mt-6 text-center text-sm text-slate-400">No tools found</div>
          )}
        </div>

        <div className="footer">
          <div className="footer-badge">
            <p className="footer-text">Built with dedication for the Marine Corps community</p>
          </div>
          <p className="footer-motto">Semper Fidelis</p>
        </div>
      </div>
    </div>
  );
}
