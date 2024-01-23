import Links from './Links';
import Logo from './Logo';

import { ClipboardList, Home, LibraryBig } from 'lucide-react';
import MobileMenu from './MobileMenu';

export const links = [
  { label: 'Home', href: '/', icon: <Home /> },
  { label: 'Charts', href: '/charts', icon: <ClipboardList /> },
  {
    label: 'Resources',
    href: '/resources',
    icon: <LibraryBig />,
  },
];

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between bg-slate-200 px-6 opacity-[.94] shadow-md ">
      <Logo />
      <MobileMenu />
      <Links />
    </nav>
  );
}

export default NavBar;
