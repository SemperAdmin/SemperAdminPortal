import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { AppShell } from "@/components/shell/app-shell";
import "./globals.css";

/**
 * Clickjacking protection, inlined.
 *
 * Static hosts set no response headers, so neither X-Frame-Options nor the
 * frame-ancestors CSP directive is available and this stands in for them.
 * Tracked as INFRA-04 in docs/security/ATO-CHECKLIST.md, where a real header
 * replaces it once the hosting supports one.
 *
 * Inline and synchronous on purpose. Two earlier shapes both failed:
 *
 * 1. next/script at afterInteractive injected the tag only after hydration,
 *    so the built HTML carried a preload link and no executing script. A
 *    hostile frame got the whole render and hydrate window first.
 * 2. beforeInteractive moved it earlier, to a queue entry Next's runtime
 *    drains, and still produced no blocking tag in the markup.
 *
 * Inlining also drops the basePath interpolation the file version needed.
 * That path is empty on cloud.gov and /SemperAdminPortal on GitHub Pages,
 * and hardcoding the Pages prefix once silently removed this protection from
 * cloud.gov entirely.
 *
 * The string is a build-time constant with no interpolation of request or
 * user data, which is the one shape where dangerouslySetInnerHTML is sound.
 *
 * Failure mode is deliberate. Navigating the top frame is permitted across
 * origins, so the redirect normally works. A sandbox without
 * allow-top-navigation throws instead, and there the fallback hides the
 * document so an overlay attack has nothing to sit on top of. Content stays
 * readable with scripting off, which a hide-by-default guard would break on
 * a static reference site.
 */
const FRAME_BUSTER = `
if (window.top !== window.self) {
  try {
    window.top.location = window.self.location;
  } catch (e) {
    document.documentElement.style.display = "none";
  }
}
`.trim();

export const metadata: Metadata = {
  title: {
    default: "Semper Admin Portal",
    template: "%s | Semper Admin Portal",
  },
  description:
    "Sourced, role-tagged USMC administrative reference and tools for Marines, leaders, commanders, and admin specialists.",
  // Origin only. Next prepends basePath to metadata file-convention routes
  // (opengraph-image), so a path here doubles to /SemperAdminPortal/SemperAdminPortal/.
  metadataBase: new URL("https://semperadmin.github.io"),
  openGraph: {
    title: "Semper Admin Portal",
    description:
      "Sourced, role-tagged USMC administrative reference and tools.",
    url: "https://semperadmin.github.io/SemperAdminPortal/",
    siteName: "Semper Admin Portal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semper Admin Portal",
    description:
      "Sourced, role-tagged USMC administrative reference and tools.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* Clickjacking protection. Runs synchronously as the first thing
            in the body, before any visible content parses. See
            FRAME_BUSTER above for why it is inline rather than a file. */}
        <script dangerouslySetInnerHTML={{ __html: FRAME_BUSTER }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-[var(--color-brass)] focus:px-3 focus:py-2 focus:text-[var(--color-neutral-950)]"
          >
            Skip to content
          </a>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
