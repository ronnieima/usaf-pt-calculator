import Links from './Links';
import Logo from './Logo';

import { ClipboardList, Home, LibraryBig } from 'lucide-react';
import MobileMenu from './MobileMenu';

export const links = [
  { label: 'Home', href: '/', icon: <Home /> },
  { label: 'Charts', href: '/charts', icon: <ClipboardList /> },
  {
    label: 'DAFMAN 36-2905',
    subtitle: '( external link )',
    href: 'https://res.cloudinary.com/dfpbpun9z/image/upload/v1700294852/dafman36-2905.pdf',
    icon: <LibraryBig />,
  },
];

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 max-w-[80rem] items-center justify-between bg-slate-200 px-6 opacity-[.94] shadow-md">
      <Logo />
      <MobileMenu />
      <Links />
    </nav>
  );
}

export default NavBar;
