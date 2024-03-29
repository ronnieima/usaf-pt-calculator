import { ChevronDown } from 'lucide-react';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="animate-fade-down flex flex-col items-center justify-center gap-8 px-2 py-20 text-center sm:px-16 md:py-48">
      <h1
        className="
       text-shadow-lg text-7xl font-bold tracking-tight lg:text-8xl"
      >
        Calculate your
        <br />
        <span className="bg-gradient-to-r from-sky-400 to-violet-300 bg-clip-text text-transparent">
          Air Force
        </span>{' '}
        PT score.
      </h1>
      <p className="max-w-prose text-lg font-light leading-tight text-gray-300">
        Your personal one-stop shop for Air Force fitness test resources.
      </p>
      <Link
        href={'#form-card'}
        className=" text-neutral-400  hover:text-neutral-100"
        aria-label="Scroll to the calculator"
      >
        <ChevronDown size={48} />
      </Link>
    </header>
  );
};

export default Header;
