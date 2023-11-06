import "./globals.css";

import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";

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
    <html lang="en">
      <head></head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
