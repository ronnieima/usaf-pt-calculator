import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import HamburgerMenu from "./HamburgerMenu";
import {
  IconBook,
  IconCalculator,
  IconClipboardText,
  IconStretching,
} from "@tabler/icons-react";

export const links = [
  { label: "Home", href: "/", icon: <IconCalculator /> },
  { label: "Exercises", href: "/exercises", icon: <IconStretching /> },
  { label: "Charts", href: "/charts", icon: <IconClipboardText /> },
  {
    label: "Resources",
    href: "/resources",
    icon: <IconBook />,
  },
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
