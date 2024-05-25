'use client';

import { Button } from '@/src/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet';
import { ExternalLink, Menu } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import CollapsibleNav from './CollapsibleNav';
import { links } from './NavBar';
import Link from 'next/link';

const MobileMenu = () => {
  const currentPath = usePathname();
  const { push } = useRouter();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" aria-label="Open navigation menu">
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent side={'right'} className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
          <SheetDescription className="flex flex-col">
            {links.map((link) => {
              if (link.label === 'Charts') return;

              return (
                <SheetTrigger asChild key={link.href}>
                  <Button
                  asChild
                    aria-label={link.label}
                    variant="ghost"
                    className={`h-24 justify-between text-md font-bold text-zinc-600 ${
                      link.href === currentPath
                        ? 'bg-gray-200 text-lg font-bold'
                        : ''
                    }`}
                  >
                    <div className="flex items-center">
                    <Link href={link.href} target='_blank' className='flex items-center gap-2' >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                    <ExternalLink />
                    </div>
                  </Button>
                </SheetTrigger>
              );
            })}
            <CollapsibleNav />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
