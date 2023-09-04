function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 sm:py-8 bg-slate-200">
      <p>AF PT Calculator</p>

      <ul className="flex gap-16 text-2xl ">
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
