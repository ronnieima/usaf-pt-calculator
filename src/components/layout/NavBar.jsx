import HamburgerIcon from "../ui/HamburgerIcon";
import Links from "../ui/Links";
import Logo from "../ui/Logo";
function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 sm:py-6 bg-slate-200">
      <Logo />
      <HamburgerIcon />
      <Links />
    </nav>
  );
}

export default NavBar;
