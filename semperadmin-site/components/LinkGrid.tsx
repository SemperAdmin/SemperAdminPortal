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
                  <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.title}</div>
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
