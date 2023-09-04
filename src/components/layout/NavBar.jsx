function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 sm:py-6 bg-slate-200">
      <a href="#">
        <img
          src="./USAF.png"
          alt="USAF Logo"
          className="h-full max-h-12 md:max-h-16 w-auto"
        />
      </a>
      <ul className="flex gap-16 text-2xl">
        <a href="#">Home</a>
        <a href="#">Exercises</a>
        <a href="#">Charts</a>
        <a href="#">Training Tips</a>
        <a href="#">Resources</a>
      </ul>
    </nav>
  );
}

export default NavBar;
