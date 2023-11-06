import "./globals.css";

import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import ToastContainerWrapper from "./components/ToastContainerWrapper";
import { toast } from "react-toastify";

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
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🛩</text></svg>"
        />
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
