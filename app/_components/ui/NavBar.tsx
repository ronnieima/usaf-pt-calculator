import React from "react";
import Logo from "./Logo";
import Links from "./Links";

import MobileMenu from "./MobileMenu";
import {
  Calculator,
  ClipboardList,
  Dumbbell,
  Home,
  LibraryBig,
} from "lucide-react";

export const links = [
  { label: "Home", href: "/", icon: <Home /> },
  { label: "Exercises", href: "/exercises", icon: <Dumbbell /> },
  { label: "Charts", href: "/charts", icon: <ClipboardList /> },
  {
    label: "Resources",
    href: "/resources",
    icon: <LibraryBig />,
  },
];

function NavBar() {
  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between bg-slate-200 px-6 py-2 sm:py-4 ">
      <Logo />
      <MobileMenu />
      <Links />
    </nav>
  );
}

export default NavBar;
