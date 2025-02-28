import './globals.css';

import { GeistSans } from 'geist/font';
import { Metadata } from 'next';
import { getCldOgImageUrl } from 'next-cloudinary';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import ToastProvider from '../components/toast-provider';
import NavBar from '../components/(navbar)/NavBar';
import Footer from '../components/Footer';

const WEBSITE_TITLE =
  'US Air Force PT Test Calculator - All Score Charts and Exercise Videos';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usafptcalculator.com'),
  title: {
    template: '%s | US Air Force PT Test Calculator',
    default: WEBSITE_TITLE,
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
    title: WEBSITE_TITLE,
    description:
      'Calculate your Air Force PT scores with this user-friendly calculator. Tailored for USAF personnel, simplify your fitness tracking effortlessly.',
    images: getCldOgImageUrl({
      src: 'ogImage/ogImage',
    }),
  },
  openGraph: {
    type: 'website',
    title: WEBSITE_TITLE,
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
          src="https://analytics.imagawa.dev/script.js"
          data-website-id="5186ecc1-8d42-42ad-b0ad-a615716c35ac"
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
