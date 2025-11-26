import "./globals.css";

/**
 * Root Layout - Required by Next.js
 * Provides minimal HTML structure without lang attribute.
 *
 * The lang attribute is set by nested [lang]/layout.tsx via script
 * that runs before React hydration. This is the correct approach for
 * Next.js static export with i18n, as the root layout doesn't have
 * access to dynamic route params.
 *
 * suppressHydrationWarning is needed because the script modifies
 * the html element attributes before React hydrates.
 *
 * NOTE: Metadata is handled by:
 * - Root page (src/app/page.tsx) - for root URL metadata
 * - [lang]/layout.tsx - for locale-specific routes (overrides parent)
 *
 * This prevents metadata conflicts between layouts.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // biome-ignore lint/a11y/useHtmlLang: lang is set dynamically by [lang]/layout.tsx before hydration
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
