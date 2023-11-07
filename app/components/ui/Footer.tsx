import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 bg-slate-900  p-6 text-zinc-300">
      <p className="text-center">
        &copy; 2023 | Developed by{" "}
        <Link
          className="transition-color text-lg font-bold text-indigo-500 hover:text-indigo-400  hover:underline"
          href="https://www.imagawa.dev"
          target="_blank"
          title="My Portfolio Website"
        >
          Ronnie Kaito Imagawa
        </Link>
      </p>
      <p className="text-center text-sm">
        Disclaimer: For reference only. Not affiliated with or endorsed by the
        USAF. Always consult official sources for accurate scoring.
      </p>
    </footer>
  );
};

export default Footer;
