import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Developer Portfolio",
    template: "%s | Developer Portfolio",
  },
  description: "A premium developer portfolio and blog built with Next.js, Three.js, and Tailwind CSS. Showcasing projects and sharing technical insights.",
  openGraph: {
    title: "Developer Portfolio",
    description: "A premium developer portfolio and blog built with Next.js, Three.js, and Tailwind CSS.",
    url: "https://portfolio-demo.com",
    siteName: "Developer Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Developer Portfolio",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          jetbrainsMono.variable,
          "min-h-screen bg-neutral-950 font-sans text-neutral-50 antialiased selection:bg-indigo-500/30"
        )}
      >
        <Navbar />
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
