'use client';

import { Button } from '@/app/_components/ui/(shadcn)/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_components/ui/(shadcn)/sheet';
import { ChevronRight, Menu } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { links } from './NavBar';

const MobileMenu = () => {
  const currentPath = usePathname();
  const { push } = useRouter();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" aria-label="Open navigation menu">
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent side={'right'}>
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
          <SheetDescription className="flex flex-col">
            {links.map((link) => (
              <SheetTrigger asChild key={link.href}>
                <Button
                  aria-label={link.label}
                  onClick={() => push(link.href)}
                  variant="ghost"
                  className={`h-24 justify-between text-zinc-600 ${
                    link.href === currentPath ? 'bg-gray-200 font-bold' : ''
                  }`}
                >
                  <div className="flex gap-2">
                    {link.icon}
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight />
                </Button>
              </SheetTrigger>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
