type Ref = { title: string; url: string; isQuickLink?: boolean };

type QuickLinksProps = {
  references: Ref[];
  variant?: "simple" | "card";
};

export function QuickLinks({ references, variant = "simple" }: QuickLinksProps) {
  const quickLinks = references.filter((ref) => ref.isQuickLink);

  if (quickLinks.length === 0) {
    return null;
  }

  return (
    <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
      <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
      {variant === "simple" ? (
        <ul className="mt-3 space-y-1 text-sm">
          {quickLinks.map((ref) => (
            <li key={ref.title}>
              <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">
                {ref.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-3 space-y-2">
          {quickLinks.map((ref) => (
            <li key={ref.title}>
              <a href={ref.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-black/10 bg-white p-3 text-sm text-[var(--sa-navy)] shadow-sm transition hover:border-[var(--sa-red)] hover:bg-[var(--sa-cream)]/40 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                {ref.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
