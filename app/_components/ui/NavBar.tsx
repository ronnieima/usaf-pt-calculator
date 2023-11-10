import React from "react";
import Logo from "./Logo";
import Links from "./Links";

import MobileMenu from "./MobileMenu";
import { ClipboardList, Dumbbell, Home, LibraryBig } from "lucide-react";

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
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between bg-slate-200 px-6 shadow-md ">
      <Logo />
      <MobileMenu />
      <Links />
    </nav>
  );
}

export default NavBar;
