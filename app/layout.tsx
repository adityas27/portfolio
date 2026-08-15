import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getProfile } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const profile = getProfile();

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.shortBio,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.shortBio,
    url: "https://example.com",
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.shortBio,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-stone-50 text-neutral-900">{children}</body>
    </html>
  );
}
