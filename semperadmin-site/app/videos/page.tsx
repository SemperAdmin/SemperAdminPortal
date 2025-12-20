import Image from "next/image";

const playlists = [
  {
    title: "Promotions",
    url: "https://www.youtube.com/watch?v=qzwBpl1XGn0&list=PLNGr21c4scCCeraDG0BZnPwtaGJhOV0MR",
    videoId: "qzwBpl1XGn0",
  },
  {
    title: "Separations and Retirement",
    url: "https://www.youtube.com/watch?v=l1emYAOT8HY&list=PLNGr21c4scCBv7IB8qoW5MnmMZNdE-QVu",
    videoId: "l1emYAOT8HY",
  },
  {
    title: "FITREPS",
    url: "https://www.youtube.com/watch?v=xEqkOUpJvyw&list=PLNGr21c4scCC7BK16TlmvqxnDZht-Ow0x",
    videoId: "xEqkOUpJvyw",
  },
];

export default function VideosPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Instructional Videos</h1>
      <p className="text-zinc-700 dark:text-zinc-300">Curated YouTube playlists for core topics. Thumbnails link directly to playlists.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {playlists.map((p) => (
          <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-black/5 bg-white p-3 shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/40 dark:hover:bg-white/10">
            <div className="relative h-40 w-full overflow-hidden rounded">
              <Image
                src={`https://i.ytimg.com/vi/${p.videoId}/hqdefault.jpg`}
                alt={`${p.title} playlist thumbnail`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{p.title}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Open playlist on YouTube</div>
          </a>
        ))}
      </div>
    </div>
  );
}
