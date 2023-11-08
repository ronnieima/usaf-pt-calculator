import Link from "next/link";
import { Button } from "./(shadcn)/button";

const Header = () => {
  return (
    <header className="flex animate-fade-down flex-col items-center justify-center gap-16 py-48 animate-duration-[1500ms]">
      <h1
        className="text-shadow-sm  text-center text-5xl 
      sm:text-7xl"
      >
        Calculate your <br />
        Air Force
        <br /> PT test score.
      </h1>
      <Button asChild className="px-16 py-8">
        <Link href={"#form-card"} className="text-2xl">
          Let&apos;s go!
        </Link>
      </Button>
    </header>
  );
};

export default Header;
