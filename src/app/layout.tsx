import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Software Engineer",
  description:
    "Software Engineer specializing in modern web technologies, blockchain, and AI. Explore my projects and experience.",
  keywords: [
    "portfolio",
    "Software Engineer",
    "web development",
    "react",
    "next.js",
    "typescript",
    "blockchain",
    "web3",
  ],
  authors: [{ name: "cadunass" }],
  creator: "cadunass",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cadunass.com",
    title: "Portfolio | Software Engineer",
    description:
      "Software Engineer specializing in modern web technologies, blockchain, and AI.",
    siteName: "Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
