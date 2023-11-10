import Link from "next/link";
import { ChevronDown } from "lucide-react";
import TypeAnimationWrapper from "./TypeAnimationWrapper";

const Header = () => {
  return (
    <header className="flex h-[32rem] flex-col items-center justify-center gap-8 sm:h-[48rem] ">
      <TypeAnimationWrapper />
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
