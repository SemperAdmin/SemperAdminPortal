import type { LinkGroup } from "../data/links";

type Props = {
  groups: LinkGroup[];
};

export default function LinkGrid({ groups }: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {groups.map((group) => (
        <section key={group.name} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{group.name}</h3>
          <ul className="mt-4 space-y-3">
            {group.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-3 py-2 transition hover:bg-[var(--sa-cream)]/60 dark:hover:bg-[var(--sa-red)]/40"
                >
                  <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    <span>{item.title}</span>
                    {item.href.toLowerCase().includes("sharepoint") && (
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1 inline align-middle opacity-80">
                        <rect x="3" y="5" width="18" height="14" rx="2"/>
                        <rect x="8" y="9" width="5" height="6" rx="1"/>
                        <path d="M4 9h3"/>
                        <path d="M4 12h3"/>
                        <path d="M4 15h3"/>
                      </svg>
                    )}
                  </div>
                  {item.description && (
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">{item.description}</div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
