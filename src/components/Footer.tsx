import Link from 'next/link';
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="grid-col-3 grid bg-slate-900 p-6 text-zinc-300">
      <section className="col-start-2 flex max-w-lg flex-col items-center justify-center gap-16">
        <p className="text-center">
          For bug reports, suggestions, and feedback, please feel free to email
          me at{' '}
          <Link
            data-umami-event="Email link"
            href="mailto:ronniekaito@imagawa.dev"
            className="text-indigo-200 transition-colors hover:text-indigo-100 hover:underline"
          >
            ronniekaito@imagawa.dev
          </Link>
          .
        </p>
        <div className='flex items-center gap-8'>
          <Button
            asChild
            variant={'secondary'}
            title="Visit the GitHub repo"
            size={'icon'}
          >
            <Link
              href={'https://github.com/ronnieima/usaf-pt-calculator'}
              target="_blank"
            >
              <Github />
            </Link>
          </Button>
          <Button asChild className='bg-blue-300 hover:bg-blue-300/50'>

          <Link href={"https://www.buymeacoffee.com/imagawa"} target='_blank' data-umami-event="buymeacoffee">
            <Image width={0} height={0} sizes='100vw' className='w-auto h-full' src={"/bmc-full-logo-no-background.png"} alt='Buy me a coffee'/>
          </Link>
          </Button>
        </div>
        <div>
          <p className=" text-center">
            &copy; 2023 | Developed by{' '}
            <Link
              data-umami-event="Portfolio link"
              className="transition-color  text-lg font-bold text-indigo-200  hover:text-indigo-100 hover:underline"
              href="https://www.imagawa.dev"
              target="_blank"
              title="My Portfolio Website"
            >
              Ronnie Kaito Imagawa
            </Link>
          </p>
          <p className="text-center text-sm">
            Disclaimer: For reference only. Not affiliated with or endorsed by
            the USAF. Always consult official sources for accurate scoring.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
