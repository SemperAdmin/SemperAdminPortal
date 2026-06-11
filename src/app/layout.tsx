import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { AppShell } from "@/components/shell/app-shell";
import "./globals.css";


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
        <Script src="/SemperAdminPortal/security/frame-buster.js" strategy="afterInteractive" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-[var(--color-accent-yellow)] focus:px-3 focus:py-2 focus:text-[var(--color-neutral-950)]"
          >
            Skip to content
          </a>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
