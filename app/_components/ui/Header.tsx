"use client";
import Link from "next/link";
import { Button } from "./(shadcn)/button";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-16 py-16 md:py-48">
      <TypeAnimation
        aria-label="Calculate your Air Force PT score."
        role="marquee"
        sequence={["Calculate your Air Force PT score."]}
        wrapper="h1"
        speed={50}
        className="text-shadow-lg block w-[80%]
         text-center text-5xl sm:w-[66%] sm:text-7xl"
      />
      <Button
        asChild
        className="animate-fade-down px-16 py-8 text-xl shadow-xl animate-delay-[4000ms]"
      >
        <Link href={"#form-card"}>Start</Link>
      </Button>
    </header>
  );
};

export default Header;
