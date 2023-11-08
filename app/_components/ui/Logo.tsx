import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <p className="text-4xl leading-[0.8]">
        USAF PT <br /> CALCULATOR
      </p>
    </Link>
  );
}

export default Logo;
