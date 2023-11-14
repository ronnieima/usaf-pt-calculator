import Link from "next/link";
import { ChevronDown } from "lucide-react";
import TypeAnimationWrapper from "./TypeAnimationWrapper";

const Header = () => {
  return (
    <header className="flex min-h-[100svh] flex-col items-center justify-center gap-8  ">
      <TypeAnimationWrapper />
      <Link
        href={"#form-card"}
        className="animate-fade-down text-neutral-400 animate-delay-[2250ms] hover:text-neutral-100"
        aria-label="Scroll to the calculator"
      >
        <ChevronDown size={48} />
      </Link>
    </header>
  );
};

export default Header;
