import "./globals.css";

import { getCldOgImageUrl } from "next-cloudinary";
import Script from "next/script";
import NavBar from "./_components/ui/(navbar)/NavBar";
import Footer from "./_components/ui/Footer";
import ToastContainerWrapper from "./_components/ui/ToastContainerWrapper";

import { GeistSans } from "geist/font";

const metadata = {
  title: "Calculate your USAF PT Score!",
  description:
    "Optimize your fitness journey with this unofficial Air Force PT Score Calculator web app! Tailored for USAF personnel, this user-friendly tool helps you calculate your physical training test scores effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ogImageUrl = getCldOgImageUrl({
    src: "ogImage/ogImage",
  });
  return (
    <html
      lang="en"
      className={`${GeistSans.className} scroll-smooth bg-blue-950`}
    >
      <head>
        <title>USAF PT Calculator</title>
        <meta name="description" content={metadata.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imagawaDev" />
        <meta name="twitter:creator" content="@imagawaDev" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={ogImageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:url" content="https://usafptcalculator.com/" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:description" content={metadata.description} />

        <Script
          async
          src="https://umami-fork-murex.vercel.app/script.js"
          data-website-id="dcd8e49c-4b05-4efb-9316-533ae15ff332"
        ></Script>
      </head>
      <body className="h-full  bg-gradient-to-r from-sky-900  to-indigo-950">
        <ToastContainerWrapper />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
