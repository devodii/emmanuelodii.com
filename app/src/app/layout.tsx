import { Header, Footer } from "@/components/sections";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emmanuel odii",
  description: "Full-stack developer & builder in public",
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
        </main>
      </body>
    </html>
  );
}
