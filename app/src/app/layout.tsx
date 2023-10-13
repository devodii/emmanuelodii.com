import { Header, Footer } from "@/components/sections";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Emmanuel odii | Full stack developer",
  description:
    "Full stack developer (Typescript, Nest JS, Next JS) & Builder in public",
  keywords: [
    "Full stack developer",
    "Experienced developer",
    "odii",
    "Emmanuel odii",
    "Build in public",
    "SaaS developer",
  ],
  robots: "index, follow",
  referrer: "origin",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          <div>{children}</div>
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
