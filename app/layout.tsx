import "./globals.css";

import { getCldOgImageUrl } from "next-cloudinary";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./_components/ui/(navbar)/NavBar";
import Footer from "./_components/ui/Footer";

import { GeistSans } from "geist/font";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Providers from "./_components/Providers";

const metadata = {
  title: "USAF PT Test Calculator - All Score Charts and Exercise Videos",
  description:
    "Calculate your Air Force PT scores with this user-friendly calculator. Tailored for USAF personnel, simplify your fitness tracking effortlessly.",
  image: getCldOgImageUrl({
    src: "ogImage/ogImage",
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} scroll-smooth bg-blue-950`}
    >
      <head>
        <link rel="canonical" href="https://www.usafptcalculator.com" />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imagawaDev" />
        <meta name="twitter:creator" content="@imagawaDev" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:url" content="https://www.usafptcalculator.com/" />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:description" content={metadata.description} />

        <Script
          async
          src="https://umami-fork-murex.vercel.app/script.js"
          data-website-id="dcd8e49c-4b05-4efb-9316-533ae15ff332"
          strategy="lazyOnload"
        ></Script>
      </head>
      <body className="bg-gradient-to-r from-sky-900  to-indigo-950">
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
