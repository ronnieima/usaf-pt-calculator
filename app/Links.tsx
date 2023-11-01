import Link from "next/link";
import { links } from "./NavBar";

function Links() {
  return (
    <ul className="gap-16 text-2xl hidden lg:flex list-none">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-zinc-500 no-underline hover:text-zinc-800"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
