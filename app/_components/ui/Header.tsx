"use client";
import Link from "next/link";
import { Button } from "./(shadcn)/button";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header className="flex h-[32rem] flex-col items-center justify-center gap-8 sm:h-[48rem]">
      <TypeAnimation
        className="block w-[80%] text-center
        text-5xl text-shadow-lg sm:w-[66%] sm:text-7xl lg:text-8xl"
        aria-label="Calculate your Air Force PT score."
        role="marquee"
        sequence={["Calculate your Air Force PT score."]}
        wrapper="h1"
        speed={50}
      />
      <Button
        asChild
        className="animate-fade-down px-16 py-8 text-xl shadow-xl animate-delay-[3000ms]"
      >
        <Link href={"#form-card"}>Start</Link>
      </Button>
    </header>
  );
};

export default Header;
