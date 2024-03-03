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
import { ChevronRight, ExternalLink, Menu } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import CollapsibleNav from './CollapsibleNav';
import { links } from './NavBar';

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
                    aria-label={link.label}
                    onClick={() => push(link.href)}
                    variant="ghost"
                    className={`h-24 justify-between text-lg font-bold text-zinc-600 ${
                      link.href === currentPath
                        ? 'bg-gray-200 text-lg font-bold'
                        : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {link.icon}
                      <span>{link.label}</span>
                    </div>
                    <ExternalLink />
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
