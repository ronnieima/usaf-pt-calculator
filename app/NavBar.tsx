import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import HamburgerMenu from "./HamburgerMenu";

export const links = [
  { label: "Home", href: "/" },
  { label: "Exercises", href: "/exercises" },
  { label: "Charts", href: "/charts" },
  { label: "Resources", href: "/resources" },
];

function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-slate-200 px-6 py-2 sm:py-4 ">
      <Logo />
      <HamburgerMenu />
      <Links />
    </nav>
  );
}

export default NavBar;
