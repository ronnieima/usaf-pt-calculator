import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Logo"
        className="h-auto max-h-12 w-auto md:max-h-16"
      />
    </Link>
  );
}

export default Logo;
