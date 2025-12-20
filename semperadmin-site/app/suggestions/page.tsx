import Link from "next/link";

export default function SuggestionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Suggestions</h1>
      <section className="rounded-2xl bg-[var(--sa-cream)] px-6 py-8 shadow-sm ring-1 ring-black/5 dark:bg-[var(--sa-navy)]">
        <p className="text-zinc-700 dark:text-zinc-300">Semper Admin was built with YOU in mind. Your experiences, insights, and feedback are vital in making this platform the best it can be. Whether it’s a new feature idea, a tool improvement, or a challenge you’re facing, we want to hear from you.</p>
        <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>Share Your Feedback: Drop your suggestions and ideas directly in our Microsoft Teams channel.</li>
          <li>Make an Impact: Your input helps us create better tools, streamline processes, and ensure we’re meeting your needs.</li>
          <li>Drive Innovation: Be part of the solution and help lead the way in administrative excellence.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="https://teams.microsoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-6 py-3 text-[var(--sa-cream)] shadow-sm transition hover:bg-[#0a1623]">Open Teams Channel</a>
          <Link href="/announcements" className="inline-flex items-center justify-center rounded-full border border-[var(--sa-navy)] px-6 py-3 text-[var(--sa-navy)] transition hover:bg-[var(--sa-cream)]/60 dark:border-[var(--sa-cream)] dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Read Feedback Initiative</Link>
        </div>
        <p className="mt-6 text-zinc-700 dark:text-zinc-300">Let’s work together to strengthen our community and enhance the way we operate. Speak up. Share ideas. Make a difference.</p>
      </section>
    </div>
  );
}
