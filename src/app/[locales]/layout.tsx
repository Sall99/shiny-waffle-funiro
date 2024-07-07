import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import { getMessages } from "next-intl/server";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Footer, Header } from "@/components";
import { NextIntlClientProvider } from "next-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StoreProvider from "@/store/provider";
import { SessionWrapper } from "../../../libs/sessionWrapper";
import { authOptions } from "../../../libs/authOptions";

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

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  const session = await getServerSession(authOptions);

  return (
    <html lang={locale}>
      <body className={`${poppins.className} ${montserrat.className}`}>
        <SessionWrapper>
          <StoreProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Header session={session} />
              <div>{children}</div>
              <Toaster />
              <Footer />S
            </NextIntlClientProvider>
            <Analytics />
          </StoreProvider>
        </SessionWrapper>
      </body>
      <GoogleTagManager gtmId={`${process.env.GOOGLE_TAGMANAGER}`} />
    </html>
  );
}
