"use client";

import Link from "next/link";
import { links } from "./NavBar";
import { usePathname } from "next/navigation";
import classnames from "classnames";

function Links() {
  const currentPath = usePathname();
  return (
    <ul className="hidden list-none gap-16 text-2xl lg:flex">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={classnames({
              "text-zinc-900 underline": link.href === currentPath,
              "text-zinc-500 no-underline": link.href !== currentPath,
              "transition-colors hover:text-zinc-800": true,
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
