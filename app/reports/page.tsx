import Image from "next/image";
import Link from "next/link";

export default function ReportsPage() {
  const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reports</h1>
      <p className="text-zinc-700 dark:text-zinc-300">Ensure you are logged into the Reports portal before opening links. This page organizes report categories for quick access.</p>
      <div className="mx-auto max-w-3xl rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="relative h-40 sm:h-52 md:h-64">
          <Image
            src={`${BP}/Reports MOL login.png`}
            alt="Reports login instructions"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-2"
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Enterprise Reports</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">For multiple units/RUCs.</p>
          <div className="mt-4">
            <Link href="/reports/enterprise" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Open Enterprise Reports</Link>
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unit User Reports</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">For a single MOL/RUC.</p>
          <div className="mt-4">
            <Link href="/reports/unit-user" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Open Unit User Reports</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
