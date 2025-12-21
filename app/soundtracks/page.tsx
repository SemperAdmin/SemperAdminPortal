import Image from "next/image";

const channelUrl = "https://www.youtube.com/channel/UCMcTWCmc9hTUec2YGiV4kbg";
const featuredTracks = [
  {
    title: "Marine NCO Creed (Hip Hop)",
    url: "https://youtu.be/T3lh9-mZfPk",
    videoId: "T3lh9-mZfPk",
  },
  {
    title: "Too Many Energy Drinks (EDM Rock)",
    url: "https://youtu.be/56jTyYASyDo",
    videoId: "56jTyYASyDo",
  },
  {
    title: "Mentor, Manage, Master (Alternative Pop Punk) Version 2",
    url: "https://www.youtube.com/watch?v=ymzouV4aOcI",
    videoId: "ymzouV4aOcI",
  },
];

export default function SoundtracksPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-[var(--sa-cream)] px-6 py-12 shadow-sm ring-1 ring-black/5 dark:bg-[var(--sa-navy)]">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Semper Soundtracks</h1>
            <p className="text-zinc-700 dark:text-zinc-300">Welcome to Semper Soundtracks! 🎵</p>
            <p className="text-zinc-700 dark:text-zinc-300">Where education meets entertainment through the power of music. We transform essential knowledge into catchy, memorable songs that make learning fun and effective.</p>
            <p className="text-zinc-700 dark:text-zinc-300">As an extension of Semper Admin, our channel creates musical content that educates while it entertains. Each track combines informative lyrics with engaging melodies to help concepts stick in your memory long after the song ends.</p>
            <p className="text-zinc-700 dark:text-zinc-300">Subscribe now for regular releases of educational bangers that will have you humming your way to knowledge!</p>
            <div className="flex gap-4">
              <a href={channelUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-6 py-3 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)]">Visit YouTube Channel</a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-[var(--sa-gold)]">
              <Image src="/Semper Soundtracks DJ Logo.jpg" alt="Semper Soundtracks" fill sizes="192px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Featured</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredTracks.map((t) => (
            <a key={t.url} href={t.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-black/5 bg-white p-3 shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/40 dark:hover:bg-white/10">
              <div className="relative h-40 w-full overflow-hidden rounded">
                <Image
                  src={`https://i.ytimg.com/vi/${t.videoId}/hqdefault.jpg`}
                  alt={`${t.title} thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{t.title}</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Watch on YouTube</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
