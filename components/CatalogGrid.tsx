import type { CatalogGroup, CatalogItem } from "../data/links";
import type { ReactNode } from "react";

type Props = {
  groups: CatalogGroup[];
  columns?: boolean;
  stackTitles?: boolean;
};

function ItemCard({ item, icon, stack }: { item: CatalogItem; icon: ReactNode; stack?: boolean }) {
  const clickable = Boolean(item.href);
  const className = clickable
    ? "block rounded-lg px-3 py-2 transition hover:bg-[var(--sa-cream)]/60 dark:hover:bg-[var(--sa-red)]/40"
    : "block rounded-lg px-3 py-2 opacity-70 cursor-not-allowed";
  const content = (
    <div>
      {stack ? (
        <div className="space-y-1">
          <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{icon}</span>
          <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            {item.title}
            {item.href && item.href.toLowerCase().includes("sharepoint") && (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1 inline align-middle opacity-80">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <rect x="8" y="9" width="5" height="6" rx="1"/>
                <path d="M4 9h3"/>
                <path d="M4 12h3"/>
                <path d="M4 15h3"/>
              </svg>
            )}
          </span>
          {item.description && (
            <p className="text-xs text-zinc-600 dark:text-zinc-400">{item.description}</p>
          )}
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{icon}</span>
            <span className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {item.title}
              {item.href && item.href.toLowerCase().includes("sharepoint") && (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1 inline align-middle opacity-80">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <rect x="8" y="9" width="5" height="6" rx="1"/>
                  <path d="M4 9h3"/>
                  <path d="M4 12h3"/>
                  <path d="M4 15h3"/>
                </svg>
              )}
            </span>
          </div>
          {item.description && (
            <p className="mt-1 ml-6 text-xs text-zinc-600 dark:text-zinc-400">{item.description}</p>
          )}
        </div>
      )}
      {item.roles && (
        <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{item.roles.join(", ")}</div>
      )}
    </div>
  );
  if (clickable) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}

export default function CatalogGrid({ groups, columns, stackTitles }: Props) {
  const iconFor = (name: string): ReactNode => {
    switch (name) {
      case "Semper Admin Links":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4-6.5 4 2-7L2 9h7z"/></svg>
        );
      case "Educational Links":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M3 5l9-3 9 3-9 4-9-4zm0 6l9 4 9-4"/><path d="M7 21v-7"/></svg>
        );
      case "System Links":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="3" y="4" width="18" height="6"/><rect x="3" y="14" width="12" height="6"/></svg>
        );
      case "AI Links":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M12 4v2"/>
            <circle cx="12" cy="3" r="1" />
            <rect x="6" y="7" width="12" height="10" rx="3" />
            <circle cx="10" cy="12" r="1.5" />
            <circle cx="14" cy="12" r="1.5" />
            <path d="M9 15h6" />
          </svg>
        );
      case "Teams Channels":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <rect x="3" y="7" width="8" height="10" rx="2" />
            <path d="M6 10h4M8 10v6" />
            <circle cx="18" cy="9" r="3" />
            <rect x="15" y="12" width="6" height="5" rx="1" />
          </svg>
        );
      case "SharePoints":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <circle cx="10" cy="12" r="5" />
            <circle cx="16" cy="8" r="3" />
            <circle cx="18" cy="14" r="2" />
          </svg>
        );
      case "More Great Links":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M10 13a5 5 0 0 1 7.07 0l2.12 2.12a5 5 0 0 1-7.07 7.07l-2.12-2.12"/><path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07l2.12-2.12"/></svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><circle cx="12" cy="12" r="4"/><path d="M3 12h3M18 12h3M12 3v3M12 18v3"/></svg>
        );
    }
  };
  const container = columns ? "grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "space-y-10";
  return (
    <div className={container}>
      {groups.map((group) => (
        <section key={group.name} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{group.name}</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <li key={`${group.name}-${item.title}`}>
                <ItemCard item={item} icon={iconFor(group.name)} stack={stackTitles} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
