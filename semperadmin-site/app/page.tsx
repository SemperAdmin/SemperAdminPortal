import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate">
      <section className="relative isolate rounded-2xl bg-[var(--sa-cream)] py-20 shadow-sm ring-1 ring-black/5 dark:bg-[var(--sa-navy)]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mentor. Manage. Master.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">Practical, step-by-step guidance for Marines to excel in administrative duties across personnel, logistics, readiness, and inspections.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/links" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-6 py-3 text-[var(--sa-cream)] shadow-sm transition hover:bg-[#0a1623]">Explore Semper Admin</Link>
              <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-[var(--sa-navy)] px-6 py-3 text-[var(--sa-navy)] transition hover:bg-[var(--sa-cream)]/60 dark:border-[var(--sa-cream)] dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-[var(--sa-gold)] text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M16 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM9 9l-6 6 4 4 6-6M22 14l-4 4-4-4"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mentor</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Guidance and support to navigate complex administrative tasks with confidence.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-[var(--sa-gold)] text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M3 4h18v4H3zM3 10h12v4H3zM3 16h18v4H3z"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Manage</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Organize, coordinate, and streamline processes for efficient operations.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-[var(--sa-gold)] text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4-6.5 4 2-7L2 9h7z"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Master</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Build expertise and adapt with comprehensive, high-quality learning materials.</p>
          </div>
        </div>
      </section>
      
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pick your role</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-4">
          <Link href="/roles/marines" className="rounded-lg border border-black/5 bg-white p-6 text-center shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/40 dark:hover:bg-[var(--sa-red)]/40">All Marines</Link>
          <Link href="/roles/administrators" className="rounded-lg border border-black/5 bg-white p-6 text-center shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/40 dark:hover:bg-[var(--sa-red)]/40">Administrators</Link>
          <Link href="/roles/leaders" className="rounded-lg border border-black/5 bg-white p-6 text-center shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/40 dark:hover:bg-[var(--sa-red)]/40">Leaders</Link>
          <Link href="/roles/commanders" className="rounded-lg border border-black/5 bg-white p-6 text-center shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/40 dark:hover:bg-[var(--sa-red)]/40">Commanders</Link>
        </div>
      </section>
    </div>
  );
}
