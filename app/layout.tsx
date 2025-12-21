import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
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
  const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
        </div>
        <script dangerouslySetInnerHTML={{__html: `
          (function(){
            var KEY = 'sa_theme';
            var m = window.matchMedia('(prefers-color-scheme: dark)');
            function apply(mode){
              var pref = mode || localStorage.getItem(KEY) || 'system';
              var isDark = pref === 'dark' || (pref === 'system' && m.matches);
              document.documentElement.classList.toggle('dark', isDark);
              document.documentElement.dataset.theme = pref;
            }
            apply();
            if (m.addEventListener) m.addEventListener('change', function(){ apply(); });
            else if (m.addListener) m.addListener(function(){ apply(); });
            var btn = document.getElementById('sa-theme-toggle');
            if (btn) {
              btn.addEventListener('click', function(){
                var pref = localStorage.getItem(KEY) || 'system';
                var next = (pref === 'dark') ? 'light' : 'dark';
                try { localStorage.setItem(KEY, next); } catch {}
                apply(next);
              });
            }
            var roles = document.getElementById('sa-roles');
            var toggle = document.getElementById('sa-roles-toggle');
            var panel = document.getElementById('sa-roles-panel');
            function close(){ if (roles) roles.setAttribute('data-open','false'); if (toggle) toggle.setAttribute('aria-expanded','false'); }
            function open(){ if (roles) roles.setAttribute('data-open','true'); if (toggle) toggle.setAttribute('aria-expanded','true'); }
            if (toggle && roles && panel){
              toggle.addEventListener('click', function(e){ e.preventDefault(); var isOpen = roles.getAttribute('data-open') === 'true'; if (isOpen) close(); else open(); });
              document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
              document.addEventListener('click', function(e){ if (!roles.contains(e.target)) close(); });
            }
          })();
        `}} />
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--sa-cream)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--sa-cream)]/60 dark:bg-[var(--sa-navy)]/80 dark:supports-[backdrop-filter]:bg-[var(--sa-navy)]/60">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-[var(--sa-gold)]">
                <Image src={`${BP}/logo.png`} alt="Semper Admin" fill sizes="32px" className="object-cover" />
              </div>
              <span className="text-lg font-semibold tracking-wide text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Semper Admin</span>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Home</Link>
              <Link href="/about" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">About</Link>
              <Link href="/announcements" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Announcements</Link>
              <Link href="/apps" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Apps</Link>
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
              <div id="sa-roles" className="relative role-menu" data-open="false">
                <button id="sa-roles-toggle" type="button" aria-haspopup="true" aria-expanded="false" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Roles</button>
                <div id="sa-roles-panel" className="role-panel absolute left-0 top-full mt-2 min-w-[18rem] z-50 rounded-lg border border-black/5 bg-white p-3 shadow-lg dark:border-white/15 dark:bg-black/80">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="role-column">
                      <Link href="/roles/marines" prefetch={false} className="role-link text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">All Marines</Link>
                      <ul className="text-sm text-zinc-700 dark:text-zinc-300">
                        <li>
                          <Link href="/roles/marines/pay-and-allowances" prefetch={false} className="role-link">Pay &amp; Allowances</Link>
                          <ul className="text-xs text-zinc-600 dark:text-zinc-400">
                            <li><Link href="/roles/marines/pay-and-allowances/hdip" prefetch={false} className="role-link">HDIP</Link></li>
                            <li><Link href="/roles/marines/pay-and-allowances/basic-pay" prefetch={false} className="role-link">Basic Pay</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/roles/marines/travel-and-transportation" prefetch={false} className="role-link">Travel &amp; Transportation</Link>
                          <ul className="text-xs text-zinc-600 dark:text-zinc-400">
                            <li><Link href="/roles/marines/travel-and-transportation/tdy" prefetch={false} className="role-link">TDY</Link></li>
                            <li><Link href="/roles/marines/travel-and-transportation/pcs" prefetch={false} className="role-link">PCS</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="role-column">
                      <Link href="/roles/administrators" prefetch={false} className="role-link text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrators</Link>
                      <ul className="text-sm text-zinc-700 dark:text-zinc-300">
                        <li><Link href="/roles/administrators/pay-and-allowances" prefetch={false} className="role-link">Pay &amp; Allowances</Link></li>
                        <li><Link href="/roles/administrators/travel-and-transportation" prefetch={false} className="role-link">Travel &amp; Transportation</Link></li>
                      </ul>
                    </div>
                    <div className="role-column">
                      <Link href="/roles/leaders" prefetch={false} className="role-link text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leaders</Link>
                      <ul className="text-sm text-zinc-700 dark:text-zinc-300">
                        <li><Link href="/roles/leaders/pay-and-allowances" prefetch={false} className="role-link">Pay &amp; Allowances</Link></li>
                        <li><Link href="/roles/leaders/travel-and-transportation" prefetch={false} className="role-link">Travel &amp; Transportation</Link></li>
                      </ul>
                    </div>
                    <div className="role-column">
                      <Link href="/roles/commanders" prefetch={false} className="role-link text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commanders</Link>
                      <ul className="text-sm text-zinc-700 dark:text-zinc-300">
                        <li><Link href="/roles/commanders/pay-and-allowances" prefetch={false} className="role-link">Pay &amp; Allowances</Link></li>
                        <li><Link href="/roles/commanders/travel-and-transportation" prefetch={false} className="role-link">Travel &amp; Transportation</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/soundtracks" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Soundtracks</Link>
              <a href="https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/TemplateToolBox.aspx" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">
                <span>TemplateToolBox</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1 inline align-middle opacity-80">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <rect x="8" y="9" width="5" height="6" rx="1"/>
                  <path d="M4 9h3"/>
                  <path d="M4 12h3"/>
                  <path d="M4 15h3"/>
                </svg>
              </a>
              <Link href="/videos" className="text-[var(--sa-navy)] hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]">Videos</Link>
              <button id="sa-theme-toggle" type="button" aria-label="Toggle theme" className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/60 text-[var(--sa-navy)] shadow-sm transition hover:bg-white dark:border-white/15 dark:bg-black/40 dark:text-[var(--sa-cream)]">
                <Sun className="theme-icon-sun h-4 w-4" />
                <Moon className="theme-icon-moon h-4 w-4" />
              </button>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
        <footer className="mt-12 border-t border-black/5 px-4 py-6 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="mx-auto max-w-6xl space-y-3">
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2"></nav>
            <div className="mt-4 rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-[var(--sa-gold)] text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.7-3.7 5.8-.6.3-1.3.5-2 .5h-2.6c-.7 0-1.4-.2-2-.5A6.7 6.7 0 0 1 5 9a7 7 0 0 1 7-7z"/></svg>
                  </div>
                  <p className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Have an idea to improve Semper Admin? Share your suggestion and help every Marine.</p>
                </div>
                <Link href="/suggestions" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Submit a Suggestion</Link>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span>© 2026 Semper Admin</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
