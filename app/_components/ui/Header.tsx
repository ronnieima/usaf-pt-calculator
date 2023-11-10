"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-[32rem] flex-col items-center justify-center gap-8 sm:h-[48rem]">
      <TypeAnimation
        className=" w-[80%] text-center
        text-5xl text-shadow-lg sm:w-[66%] sm:text-7xl lg:text-8xl"
        aria-label="Calculate your Air Force PT score."
        role="marquee"
        sequence={["Calculate your Air Force PT score."]}
        wrapper="h1"
        speed={50}
      />
      <Link
        href={"#form-card"}
        className="animate-fade-down text-lg text-neutral-400 animate-delay-[3000ms] hover:text-neutral-100 hover:underline hover:underline-offset-[6.5px]"
      >
        <span className="relative right-2">Start</span>
        <ChevronDown />
      </Link>
    </header>
  );
};

export default Header;
