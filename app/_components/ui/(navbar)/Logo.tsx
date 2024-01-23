import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <p className="text-2xl font-bold leading-[0.8] ">
        USAF PT <br /> CALCULATOR
      </p>
    </Link>
  );
}

export default Logo;
