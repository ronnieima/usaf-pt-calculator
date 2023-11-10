import "./globals.css";

import NavBar from "./_components/ui/NavBar";
import Footer from "./_components/ui/Footer";
import ToastContainerWrapper from "./_components/ui/ToastContainerWrapper";
import Script from "next/script";

import { GeistSans } from "geist/font";

const metadata = {
  title: "Calculate your USAF PT Score!",
  description:
    "Optimize your fitness journey with our Air Force PT Score Calculator web app! Tailored for USAF personnel, this user-friendly tool helps you track your physical fitness progress effortlessly. Accurate, efficient, and easy to use, our calculator ensures you stay on top of your fitness goals. Perfect for airmen stationed worldwide, achieve your best PT scores with precision and confidence. Try it now!",
  image:
    "https://res.cloudinary.com/dfpbpun9z/image/upload/v1699624351/OG_slgp7a.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} scroll-smooth`}>
      <head>
        <title>USAF PT Calculator</title>
        <meta name="description" content={metadata.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imagawaDev" />
        <meta name="twitter:creator" content="@imagawaDev" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:url" content="https://usafptcalculator.com/" />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:description" content={metadata.description} />
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
      <body className="h-full  bg-gradient-to-r from-sky-800 to-indigo-800">
        <ToastContainerWrapper />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
