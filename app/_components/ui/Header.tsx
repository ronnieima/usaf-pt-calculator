import { ChevronDown } from "lucide-react";

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex animate-fade-down flex-col items-center justify-center gap-8 py-48 text-center ">
      <h1
        className=" max-w-[80%] 
       text-5xl text-shadow-lg sm:text-7xl	lg:text-8xl"
      >
        Calculate your
        <br />
        <span className="text-sky-500">Air Force</span> PT score.
      </h1>
      <p className="text-lg text-gray-300">
        Your personal one-stop shop for Air Force fitness test resources.
      </p>
      <Link
        href={"#form-card"}
        className=" text-neutral-400  hover:text-neutral-100"
        aria-label="Scroll to the calculator"
      >
        <ChevronDown size={48} />
      </Link>
    </header>
  );
};

export default Header;
