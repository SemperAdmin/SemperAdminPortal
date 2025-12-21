import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="relative isolate">
      <section className="relative isolate rounded-2xl bg-[var(--sa-cream)] py-20 shadow-sm ring-1 ring-black/5 dark:bg-[var(--sa-navy)]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-[var(--sa-gold)] mx-auto">
                <Image src={`${BP}/logo.png`} alt="Semper Admin logo" fill sizes="192px" priority className="object-cover object-center" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Semper Admin</h1>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300 lg:mx-0">Your go-to resource for administrative tasks!</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Link href="/links" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-6 py-3 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)]">Explore Semper Admin</Link>
                <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-[var(--sa-navy)] px-6 py-3 text-[var(--sa-navy)] transition hover:bg-[var(--sa-cream)]/60 dark:border-[var(--sa-cream)] dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pick your role</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-4">
          <Link href="/roles/marines" prefetch={false} className="surface-card rounded-lg p-6 text-center transition hover:bg-white/10">All Marines</Link>
          <Link href="/roles/administrators" prefetch={false} className="surface-card rounded-lg p-6 text-center transition hover:bg-white/10">Administrators</Link>
          <Link href="/roles/leaders" prefetch={false} className="surface-card rounded-lg p-6 text-center transition hover:bg-white/10">Leaders</Link>
          <Link href="/roles/commanders" prefetch={false} className="surface-card rounded-lg p-6 text-center transition hover:bg-white/10">Commanders</Link>
        </div>
      </section>
  <section className="mx-auto max-w-6xl px-4 py-20">
    <div className="pillar-container">
      <div className="pillar">
        <div className="pillar-capital">
          <div className="volute-container">
            <div className="volute" />
            <div className="volute" />
          </div>
          <div className="capital-label">Mentor</div>
        </div>
        <div className="pillar-shaft">
          <div className="fluting">
            <div className="flute-line" />
            <div className="flute-line" />
            <div className="flute-line" />
            <div className="flute-line" />
            <div className="flute-line" />
          </div>
          <div className="pillar-icon">👨‍🏫</div>
          <p>Guidance and support to navigate complex administrative tasks with confidence.</p>
        </div>
        <div className="pillar-base">
          <div className="plinth-1" />
          <div className="plinth-2" />
          <div className="base-text">DOCERE ET DUCERE</div>
        </div>
      </div>

      <div className="pillar">
        <div className="pillar-capital">
          <div className="volute-container">
            <div className="volute" />
            <div className="volute" />
          </div>
          <div className="capital-label">Manage</div>
        </div>
        <div className="pillar-shaft">
          <div className="fluting">
            <div className="flute-line" />
            <div className="flute-line" />
            <div className="flute-line" />
            <div className="flute-line" />
            <div className="flute-line" />
          </div>
          <div className="pillar-icon">⚙️</div>
          <p>Organize, coordinate, and streamline processes for efficient operations.</p>
        </div>
        <div className="pillar-base">
          <div className="plinth-1" />
          <div className="plinth-2" />
          <div className="base-text">ORDO ET RATIO</div>
        </div>
      </div>

      <div className="pillar">
        <div className="pillar-capital">
          <div className="volute-container">
            <div className="volute" />
            <div className="volute" />
          </div>
          <div className="capital-label">Master</div>
        </div>
        <div className="pillar-shaft">
          <div className="fluting">
            <div className="flute-line" />
            <div className="flute-line" />
            <div className="flute-line" />
            <div className="flute-line" />
            <div className="flute-line" />
          </div>
          <div className="pillar-icon">🏆</div>
          <p>Build expertise and adapt with comprehensive, high-quality learning materials.</p>
        </div>
        <div className="pillar-base">
          <div className="plinth-1" />
          <div className="plinth-2" />
          <div className="base-text">AD EXCELLENTIAM</div>
        </div>
      </div>
    </div>
  </section>
      
      
    </div>
  );
}
