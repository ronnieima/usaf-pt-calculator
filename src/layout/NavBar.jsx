import HamburgerIcon from '../ui/HamburgerIcon';
import Links from '../ui/Links';
import Logo from '../ui/Logo';
function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-slate-200 px-6 py-4 sm:py-6">
      <Logo />
      <HamburgerIcon />
      <Links />
    </nav>
  );
}

export default NavBar;
