import './globals.css';

import { GeistSans } from 'geist/font';
import { Metadata } from 'next';
import { getCldOgImageUrl } from 'next-cloudinary';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import ToastProvider from './_components/toast-provider';
import NavBar from './_components/ui/(navbar)/NavBar';
import Footer from './_components/ui/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usafptcalculator.com'),
  title: {
    template: '%s | USAF PT Test Calculator',
    default: 'USAF PT Test Calculator - All Score Charts and Exercise Videos',
  },
  description:
    'Calculate your Air Force PT scores with this user-friendly calculator. Tailored for USAF personnel, simplify your fitness tracking effortlessly.',
  keywords: 'air force, pt test, pt score, usaf, pt score calculator',
  applicationName: 'USAF PT Calculator',
  authors: { name: 'Ronnie Kaito Imagawa', url: 'https://www.imagawa.dev' },

  alternates: {
    canonical: 'https://www.usafptcalculator.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@imagawaDev',
    creator: '@imagawaDev',
    title: 'USAF PT Test Calculator - All Score Charts and Exercise Videos',
    description:
      'Calculate your Air Force PT scores with this user-friendly calculator. Tailored for USAF personnel, simplify your fitness tracking effortlessly.',
    images: getCldOgImageUrl({
      src: 'ogImage/ogImage',
    }),
  },
  openGraph: {
    type: 'website',
    title: 'USAF PT Test Calculator - All Score Charts and Exercise Videos',
    description:
      'Calculate your Air Force PT scores with this user-friendly calculator. Tailored for USAF personnel, simplify your fitness tracking effortlessly.',
    url: 'https://www.usafptcalculator.com/',
    images: getCldOgImageUrl({
      src: 'ogImage/ogImage',
    }),
  },
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
        <Script
          async
          src="https://umami-fork-murex.vercel.app/script.js"
          data-website-id="dcd8e49c-4b05-4efb-9316-533ae15ff332"
          strategy="lazyOnload"
        ></Script>
      </head>
      <body className="bg-gradient-to-r from-sky-900  to-indigo-950">
        <ToastProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
