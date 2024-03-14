import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Header } from "@/components";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: "Elevate Home Spaces",
  description:
    "Discover curated selections for your living room, dining, and bedroom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${montserrat.className}`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
