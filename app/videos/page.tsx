import Image from "next/image";

const playlists = [
  {
    title: "Promotions",
    youtubeUrl: "https://www.youtube.com/watch?v=qzwBpl1XGn0&list=PLNGr21c4scCCeraDG0BZnPwtaGJhOV0MR",
    marineNetUrl: "",
    videoId: "qzwBpl1XGn0",
  },
  {
    title: "Separations and Retirement",
    youtubeUrl: "https://www.youtube.com/watch?v=l1emYAOT8HY&list=PLNGr21c4scCBv7IB8qoW5MnmMZNdE-QVu",
    marineNetUrl: "",
    videoId: "l1emYAOT8HY",
  },
  {
    title: "FITREPS",
    youtubeUrl: "https://www.youtube.com/watch?v=xEqkOUpJvyw&list=PLNGr21c4scCC7BK16TlmvqxnDZht-Ow0x",
    marineNetUrl: "",
    videoId: "xEqkOUpJvyw",
  },
];

function MarineNetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function VideosPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Instructional Videos</h1>
      <p className="text-zinc-700 dark:text-zinc-300">Curated YouTube playlists for core topics. Thumbnails link directly to playlists.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {playlists.map((p) => (
          <div key={p.title} className="flex flex-col rounded-xl border border-black/5 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/40">
            <a
              href={p.youtubeUrl || p.marineNetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded transition hover:opacity-90"
            >
              <div className="relative h-40 w-full overflow-hidden rounded">
                <Image
                  src={`https://i.ytimg.com/vi/${p.videoId}/hqdefault.jpg`}
                  alt={`${p.title} playlist thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </a>
            <div className="mt-3 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{p.title}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Open playlist</div>
            <div className="mt-3 flex gap-2">
              {p.marineNetUrl && (
                <a
                  href={p.marineNetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--sa-gold)] px-3 py-2 text-sm font-semibold text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-gold)]/80"
                >
                  <MarineNetIcon className="h-4 w-4" />
                  MarineNet
                </a>
              )}
              {p.youtubeUrl && (
                <a
                  href={p.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--sa-red)] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--sa-red)]/80"
                >
                  <YouTubeIcon className="h-4 w-4" />
                  YouTube
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
