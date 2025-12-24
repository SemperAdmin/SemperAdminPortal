import Image from "next/image";

interface Playlist {
  title: string;
  youtubeUrl?: string;
  marineNetUrl?: string;
  videoId?: string;
}

const playlists: Playlist[] = [
  // YouTube Playlists
  {
    title: "Promotions",
    youtubeUrl: "https://www.youtube.com/watch?v=qzwBpl1XGn0&list=PLNGr21c4scCCeraDG0BZnPwtaGJhOV0MR",
    videoId: "qzwBpl1XGn0",
  },
  {
    title: "Separations and Retirement",
    youtubeUrl: "https://www.youtube.com/watch?v=l1emYAOT8HY&list=PLNGr21c4scCBv7IB8qoW5MnmMZNdE-QVu",
    videoId: "l1emYAOT8HY",
  },
  {
    title: "FITREPS",
    youtubeUrl: "https://www.youtube.com/watch?v=xEqkOUpJvyw&list=PLNGr21c4scCC7BK16TlmvqxnDZht-Ow0x",
    videoId: "xEqkOUpJvyw",
  },
  // MarineNet Playlists
  {
    title: "AutoSAAR",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6131486F2E9A&playlistId=ad0ee003-7bea-4daa-bacb-3bb560869bfa",
  },
  {
    title: "Awards",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6137BCBD761B&playlistId=d5d59310-d591-4c48-95d0-9ab6cbf23f82",
  },
  {
    title: "Battle Rhythms",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6162D0E6C435&playlistId=5c8e07a8-c60f-4e65-b19b-37ae1e2867c9",
  },
  {
    title: "Casualty Affairs",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6127FA07183A&playlistId=3d3defa1-8a8d-4120-b773-be6cd2214fa2",
  },
  {
    title: "Cognos Analytics",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=61751A7C814B&playlistId=75a9b0da-a8c2-427a-878d-c67acb841a7e",
  },
  {
    title: "Command Legal Action",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=620201342CDF&playlistId=2b0842ea-f715-4efa-9b89-0da07816557a",
  },
  {
    title: "Creating Correspondence",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6206E6703BE9&playlistId=d127f62a-9600-40c1-a6e9-3fd6eb53ccff",
  },
  {
    title: "Dependents",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6217F3779830&playlistId=2a854407-06f8-4ef6-9081-738c0725f5cb",
  },
  {
    title: "Directives",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6220DD223F2B&playlistId=0a9e4575-014f-4f42-9fa3-885c5cd47bb5",
  },
  {
    title: "Education",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=622386A5FAAD&playlistId=0e883c0d-9998-40d0-a598-df2dbfa7ce92",
  },
  {
    title: "Fitness Reports",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=626133DA3454&playlistId=78a99998-6c24-48d0-bb53-dc4bae7561f6",
  },
  {
    title: "Government Travel Charge Card",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6269BDE90472&playlistId=d92edb0c-4ded-404f-b42b-2b34e504bb3f",
  },
  {
    title: "Improved Awards Processing System",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6277F4811CA2&playlistId=2580701f-2e7b-4be0-ac39-02b48fbfc3ec",
  },
  {
    title: "Inbound Interview",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6282498228DE&playlistId=1bf66ad1-ebcb-4c0f-ae8c-c596ece93743",
  },
  {
    title: "Junior Enlisted Performance Evaluation System",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=628559B2BC56&playlistId=b792cc9f-780c-4f5b-a5f8-f72706cb52b6",
  },
  {
    title: "Joint Travel Regulations",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=629454D65C54&playlistId=1d2d96a8-6009-4a4e-83fa-2397f80f7d90",
  },
  {
    title: "Large Language Models",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=7032F0E2A351&playlistId=776a1463-90a7-41ba-92a6-16339c137d98",
    youtubeUrl: "https://youtube.com/playlist?list=PLNGr21c4scCDWkO08_ou4a2PNx9eauLlo",
  },
  {
    title: "Leave and Liberty",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6300A5D61E66&playlistId=83e16a6c-9ef1-4672-a997-5cbb9f78d5d1",
  },
  {
    title: "Manpower",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6165057F7BB8&playlistId=ddad9cd5-3b36-4f75-b792-131531c99890",
  },
  {
    title: "Manpower & Reserve Affairs",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6302111B6584&playlistId=1f3f9e63-f1e6-4acb-bfd6-80bb1ef8324d",
  },
  {
    title: "Marine Corps Total Force System",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6304DC378AF4&playlistId=a5c01a6b-ca55-4e80-afb3-e504340e4aa0",
  },
  {
    title: "Marine Online Management",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=630944A9E9B3&playlistId=99c8a7c5-aa83-4d40-b249-adea29ca16a7",
  },
  {
    title: "MarineNet",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=631242C725D9&playlistId=cb684aa7-fa6f-4f89-8987-3f6720f42fc7",
  },
  {
    title: "Microsoft Excel",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6243815A35FF&playlistId=b5947adb-e853-4916-9d26-31887198bb85",
  },
  {
    title: "MISSA/MISSO Portal",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6320AFF6E96A&playlistId=ec104de4-6e2f-4c39-a911-f3a2c758d997",
  },
  {
    title: "O-RMA",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=63246AE88CDF&playlistId=8060c188-07e0-4a2a-95ad-df574255f1fb",
  },
  {
    title: "Outbound Interview",
    marineNetUrl: "https://www.marinenet.usmc.mil/MVS/watchVideo.aspx?Id=64189F33255E&playlistId=dc31fe4e-44bb-4698-801e-8b03a1499a04",
  },
  {
    title: "Pay and Entitlements",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=63831964B681&playlistId=fb0f6044-751b-494b-9564-546c941b280e",
    youtubeUrl: "https://youtube.com/playlist?list=PLNGr21c4scCD9KpSIxJfMzB-BxR7V4Y_s",
  },
  {
    title: "Promotions",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6333641429BE&playlistId=c66703d2-d293-4fed-a224-dd55899f0cfe",
  },
  {
    title: "Tech Tips",
    marineNetUrl: "https://www.marinenet.usmc.mil/MVS/watchVideo.aspx?Id=7097569D2864&playlistId=4fa66f1a-cfc5-44ae-8649-99d313c69b3f",
    youtubeUrl: "https://youtube.com/playlist?list=PLNGr21c4scCAGYPcHbzyrpEyVOtCXsh1I",
  },
  {
    title: "Semper Admin",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=633587A459EB&playlistId=f80a5b99-0bab-4e14-804a-3fdae31ce528",
    youtubeUrl: "https://youtube.com/playlist?list=PLNGr21c4scCDJgq1xvtr24sn9PJpLG1nr",
  },
  {
    title: "Separations and Retirement",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=63375351C274&playlistId=16e098a2-e0bb-4a40-a177-2c7db5b2faa5",
  },
  {
    title: "SharePoint",
    marineNetUrl: "https://www.marinenet.usmc.mil/MVS/watchVideo.aspx?Id=640817BEDE96&playlistId=3de59f4f-7118-4527-b3f9-d6771ee02690",
  },
  {
    title: "Travel Claim",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6128637E6663&playlistId=b99b589b-c290-4bd1-9b6c-036f23f45388",
  },
  {
    title: "Travel Voucher Interview",
    marineNetUrl: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=63383D956415&playlistId=cad68746-7279-4b35-a208-6725614e2f39",
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

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CACIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="CAC Required">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="4" y="6" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.3" />
      <circle cx="6.5" cy="8" r="1.5" fill="currentColor" />
      <rect x="11" y="6" width="9" height="1.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="11" y="9" width="6" height="1.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="4" y="13" width="16" height="4" rx="0.5" fill="currentColor" opacity="0.2" />
      <rect x="5" y="14" width="2" height="2" fill="currentColor" opacity="0.6" />
      <rect x="8" y="14" width="2" height="2" fill="currentColor" opacity="0.6" />
      <rect x="11" y="14" width="2" height="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function PlaylistCard({ playlist }: { playlist: Playlist }) {
  const hasYouTube = !!playlist.youtubeUrl && !!playlist.videoId;
  const hasMarineNet = !!playlist.marineNetUrl;
  const primaryUrl = playlist.youtubeUrl || playlist.marineNetUrl;

  return (
    <div className="flex flex-col rounded-xl border border-black/5 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/40">
      {/* Thumbnail */}
      {primaryUrl ? (
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded transition hover:opacity-90"
        >
          <span className="sr-only">Open {playlist.title} playlist (opens in new tab)</span>
          {hasYouTube ? (
            <div className="relative h-40 w-full overflow-hidden rounded">
              <Image
                src={`https://i.ytimg.com/vi/${playlist.videoId}/hqdefault.jpg`}
                alt={`${playlist.title} playlist thumbnail`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded bg-gradient-to-br from-[var(--sa-navy)] to-[var(--sa-navy)]/80">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--sa-gold)] text-[var(--sa-navy)]">
                  <PlayIcon className="h-8 w-8 translate-x-0.5" />
                </div>
                <span className="text-sm font-medium text-white/80">MarineNet Playlist</span>
              </div>
            </div>
          )}
        </a>
      ) : (
        <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded bg-zinc-200 dark:bg-zinc-700">
          <PlayIcon className="h-12 w-12 text-zinc-400" />
        </div>
      )}

      {/* Title */}
      <div className="mt-3 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
        {playlist.title}
      </div>
      <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Open playlist</div>

      {/* Buttons */}
      <div className="mt-3 flex gap-2">
        {hasMarineNet && (
          <a
            href={playlist.marineNetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--sa-gold)] px-3 py-2 text-sm font-semibold text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-gold)]/80"
          >
            <MarineNetIcon className="h-4 w-4" />
            MarineNet
            <CACIcon className="h-4 w-4 opacity-60" />
            <span className="sr-only">(opens in new tab, CAC required)</span>
          </a>
        )}
        {hasYouTube && (
          <a
            href={playlist.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--sa-red)] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--sa-red)]/80"
          >
            <YouTubeIcon className="h-4 w-4" />
            YouTube
            <span className="sr-only">(opens in new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function VideosPage() {
  const youtubePlaylists = playlists.filter((p) => p.youtubeUrl);
  const marineNetOnlyPlaylists = playlists.filter((p) => p.marineNetUrl && !p.youtubeUrl);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Instructional Videos
        </h1>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Curated video playlists for core admin topics from YouTube and MarineNet.
        </p>
      </div>

      {/* YouTube Playlists */}
      {youtubePlaylists.length > 0 && (
        <section>
          <div className="mb-4 flex items-center gap-2">
            <YouTubeIcon className="h-5 w-5 text-[var(--sa-red)]" />
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              YouTube Playlists
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {youtubePlaylists.map((p) => (
              <PlaylistCard key={p.title} playlist={p} />
            ))}
          </div>
        </section>
      )}

      {/* MarineNet Playlists */}
      {marineNetOnlyPlaylists.length > 0 && (
        <section>
          <div className="mb-4 flex items-center gap-2">
            <MarineNetIcon className="h-5 w-5 text-[var(--sa-gold)]" />
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              MarineNet Playlists
            </h2>
            <span className="flex items-center gap-1 rounded-full bg-[var(--sa-gold)]/20 px-2 py-0.5 text-xs font-medium text-[var(--sa-gold)]">
              <CACIcon className="h-3 w-3" />
              CAC Required
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {marineNetOnlyPlaylists.map((p) => (
              <PlaylistCard key={p.title} playlist={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
