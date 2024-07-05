import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { NextIntlClientProvider, useMessages } from "next-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StoreProvider from "@/store/provider";
import { Toaster } from "react-hot-toast";
import getCurrentUser from "@/actions/current-user";
import { getServerSession } from "next-auth";

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
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={`${poppins.className} ${montserrat.className}`}>
        <StoreProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <div>{children}</div>
            <Toaster />
            <Footer />
          </NextIntlClientProvider>
          <Analytics />
        </StoreProvider>
      </body>
      <GoogleTagManager gtmId={`${process.env.GOOGLE_TAGMANAGER}`} />
    </html>
  );
}
