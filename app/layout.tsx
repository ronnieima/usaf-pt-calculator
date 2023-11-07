import "./globals.css";

import NavBar from "./_components/ui/NavBar";
import Footer from "./_components/ui/Footer";
import ToastContainerWrapper from "./_components/ui/ToastContainerWrapper";
import Script from "next/script";

import { GeistSans } from "geist/font";

export const metadata = {
  title: "USAF PT Calculator",
  description: "Calculate your PT score!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="USAF PT Score Calculator" />
        <meta property="og:url" content="https://www.usafptcalculator.com/" />
        <meta property="og:image" content="https://imgur.com/a/7rAOOd1" />
        <meta
          property="og:description"
          content="Calculate your Air Force PT Score!"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🛩</text></svg>"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>
      </head>
      <body>
        <ToastContainerWrapper />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
