import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Semper Admin",
  description: "Modern portal for Semper Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{__html: `
          (function(){
            var m = window.matchMedia('(prefers-color-scheme: light)');
            function apply(){ document.documentElement.classList.toggle('dark', !m.matches); }
            apply();
            if (m.addEventListener) m.addEventListener('change', apply);
            else if (m.addListener) m.addListener(apply);
          })();
        `}} />
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--sa-cream)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--sa-cream)]/60 dark:bg-[var(--sa-navy)]/80 dark:supports-[backdrop-filter]:bg-[var(--sa-navy)]/60">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-[var(--sa-gold)]">
                <Image src="/logo.png" alt="Semper Admin" fill sizes="32px" className="object-cover" />
              </div>
              <span className="text-lg font-semibold tracking-wide text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Semper Admin</span>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Home</Link>
              <Link href="/about" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">About</Link>
              <Link href="/announcements" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Announcements</Link>
              <Link href="/apps" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Apps</Link>
              <Link href="/community" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Community</Link>
              <div className="relative group">
                <button type="button" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Inspection</button>
                <div className="absolute left-0 top-full mt-2 hidden min-w-[14rem] z-50 rounded-lg border border-black/5 bg-white p-2 shadow-lg group-hover:block group-focus-within:block dark:border-white/15 dark:bg-black/80">
                  <div className="block rounded-md px-3 py-2 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IGMC</div>
                  <div className="block rounded-md px-3 py-2 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MCAAT</div>
                  <div className="block rounded-md px-3 py-2 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MISSO</div>
                </div>
              </div>
              <Link href="/links" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Links</Link>
              <Link href="/reports" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Reports</Link>
              <div className="relative group">
                <button type="button" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Roles</button>
                <div className="absolute left-0 top-full mt-2 hidden min-w-[14rem] z-50 rounded-lg border border-black/5 bg-white p-2 shadow-lg group-hover:block group-focus-within:block dark:border-white/15 dark:bg-black/80">
                  <div className="block rounded-md px-3 py-2 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">All Marines</div>
                  <div className="block rounded-md px-3 py-2 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrators</div>
                  <div className="block rounded-md px-3 py-2 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leaders</div>
                  <div className="block rounded-md px-3 py-2 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commanders</div>
                </div>
              </div>
              <Link href="/soundtracks" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Soundtracks</Link>
              <a href="https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/TemplateToolBox.aspx" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">TemplateToolBox</a>
              <Link href="/videos" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Videos</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
        <footer className="mt-12 border-t border-black/5 px-4 py-6 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="mx-auto max-w-6xl space-y-3">
            <div className="flex flex-wrap items-center gap-4">
              <span>© {new Date().getFullYear()} Semper Admin</span>
            </div>
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2"></nav>
            <div className="mt-4 rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-[var(--sa-gold)] text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.7-3.7 5.8-.6.3-1.3.5-2 .5h-2.6c-.7 0-1.4-.2-2-.5A6.7 6.7 0 0 1 5 9a7 7 0 0 1 7-7z"/></svg>
                  </div>
                  <p className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Have an idea to improve Semper Admin? Share your suggestion and help every Marine.</p>
                </div>
                <Link href="/suggestions" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[#0a1623] dark:hover:bg-[var(--sa-red)]/60">Submit a Suggestion</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
