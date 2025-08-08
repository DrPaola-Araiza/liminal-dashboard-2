// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liminal Psychometric Dashboard",
  description: "Analytics for Liminal VR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow flex flex-row">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}