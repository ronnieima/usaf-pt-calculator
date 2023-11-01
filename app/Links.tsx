"use client";

import Link from "next/link";
import { links } from "./NavBar";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { NavLink } from "@mantine/core";

function Links() {
  const currentPath = usePathname();
  return (
    <ul className="gap-16 text-2xl hidden lg:flex list-none">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500 no-underline": link.href !== currentPath,
              "transition-colors hover:text-zinc-800 no-und": true,
            })}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
