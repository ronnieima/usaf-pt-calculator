'use client';

import AgeGroupItems from '@/src/app/charts/AgeGroupItems';
import { usePathname } from 'next/navigation';
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../ui/menubar';
import Link from 'next/link';
import { links } from './NavBar';
import { cn } from '@/src/lib/utils';

function Links() {
  const currentPath = usePathname();
  return (
    <ul className="hidden list-none gap-16 text-2xl lg:flex">
      <Menubar className="bg-transparent ">
        {/* <MenubarMenu key={link.href}>
          <Link
            href={link.href}
            className={classnames({
              'text-blue-600 underline': link.href === currentPath,
              'text-zinc-700 no-underline': link.href !== currentPath,
              'transition-colors hover:text-blue-300': true,
            })}
          >
            {link.label}
          </Link>
        </MenubarMenu> */}
        <MenubarMenu>
          <MenubarTrigger>
            <Link
              href={'/'}
              className={cn({
                'text-blue-600 underline': '/' === currentPath,
                'text-zinc-700 no-underline': '/' !== currentPath,
                'transition-colors hover:text-blue-300': true,
              })}
            >
              Home
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Score Charts</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Male</MenubarSubTrigger>
              <MenubarSubContent>
                <AgeGroupItems gender="male" />
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Female</MenubarSubTrigger>
              <MenubarSubContent>
                <AgeGroupItems gender="female" />
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </ul>
  );
}

export default Links;
