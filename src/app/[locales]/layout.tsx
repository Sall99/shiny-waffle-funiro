import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import { getLocale, getMessages } from "next-intl/server";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Footer, GoogleAnalytics, Header } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
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
  title: "Elevate Home Spaces | Premium Furniture & Home Decor",
  description:
    "Transform your living spaces with Elevate Home Spaces. Discover our curated collections of premium furniture and stylish decor for your living room, dining area, and bedroom. Find the perfect pieces to create a cozy, elegant, and functional home that reflects your unique style. Shop now for free shipping on orders over $500!",
  keywords:
    "furniture, home decor, living room, dining room, bedroom, interior design, modern furniture, classic furniture, home improvement, home makeover",
  verification: {
    google: "wl3JxJ5o6Fls3aR5fEDCg3Y4TMnvnzW_BcFid2DWSL0",
  },
  openGraph: {
    title: "Elevate Home Spaces | Premium Furniture & Home Decor",
    description:
      "Transform your living spaces with Elevate Home Spaces. Discover our curated collections of premium furniture and stylish decor for your living room, dining area, and bedroom. Find the perfect pieces to create a cozy, elegant, and functional home that reflects your unique style.",
    url: "https://shiny-waffle-funiro.vercel.app",
    type: "website",
    locale: "en_US",
    siteName: "Elevate Home Spaces",
    images: [
      {
        url: "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1711320948/shiny-waffle-funiro/81Vk8a6p5jL._AC_SL1500__lyssku.jpg",
        width: 800,
        height: 600,
        alt: "Elevate Home Spaces - Premium Furniture Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Home Spaces | Premium Furniture & Home Decor",
    description:
      "Transform your living spaces with our curated collections of premium furniture and stylish decor. Create a cozy, elegant, and functional home that reflects your unique style.",
    site: "@ElevateHomeSpaces",
    creator: "@ElevateHomeSpaces",
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const messages = await getMessages();
  const locale = await getLocale();
  const session = await getServerSession(authOptions);

  const schemaOrgData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: "https://shiny-waffle-funiro.vercel.app",
    name: "Elevate Home Spaces",
    description:
      "Discover curated collections of premium furniture and stylish decor for your living room, dining area, and bedroom. Create a cozy, elegant, and functional home that reflects your unique style.",
    publisher: {
      "@type": "Organization",
      name: "Elevate Home Spaces",
      logo: {
        "@type": "ImageObject",
        url: "https://shiny-waffle-funiro.vercel.app/logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://shiny-waffle-funiro.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={locale}>
      <head>
        <link rel="canonical" href="https://shiny-waffle-funiro.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body className={`${poppins.className} ${montserrat.className}`}>
        <SessionWrapper>
          <StoreProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <GoogleTagManager gtmId={`${process.env.GOOGLE_TAGMANAGER}`} />
              <Header session={session} />
              <main>
                <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
              </main>
              <Toaster />
              <Footer />
            </NextIntlClientProvider>
            <Analytics />
          </StoreProvider>
        </SessionWrapper>
      </body>
      <GoogleAnalytics />
    </html>
  );
}
