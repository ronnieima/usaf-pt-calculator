import Link from "next/link";

const Footer = () => {
  return (
    <footer className="grid-col-3 grid bg-slate-900 p-6 text-zinc-300">
      <section className="col-start-2 flex max-w-lg flex-col items-center justify-center gap-16">
        <p className="text-center">
          For bug reports, suggestions, and feedback, please feel free to email
          me at{" "}
          <Link
            href="mailto:ronniekaito@imagawa.dev"
            className="text-indigo-300 transition-colors hover:text-indigo-100 hover:underline"
          >
            ronniekaito@imagawa.dev
          </Link>
          . :D
        </p>
        <p className=" text-center">
          &copy; 2023 | Developed by{" "}
          <Link
            className="transition-color  text-lg font-bold text-indigo-500  hover:text-indigo-400 hover:underline"
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
      </section>
    </footer>
  );
};

export default Footer;
