'use client';

import { ChevronDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import AgeGroupItems from '../AgeGroupItems';
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../ui/menubar';

function Links() {
  return (
    <Menubar className="hidden gap-8 bg-transparent lg:flex ">
      <MenubarMenu>
        <MenubarTrigger className="text-lg">
          <span className="mx-2"> Score Charts </span>
          <ChevronDown />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Male</MenubarSubTrigger>
            <MenubarSubContent>
              <AgeGroupItems gender="male" inMenuBar={true} />
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Female</MenubarSubTrigger>
            <MenubarSubContent>
              <AgeGroupItems gender="female" inMenuBar={true} />
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger asChild className="text-lg">
          <Link
            href={
              'https://res.cloudinary.com/dfpbpun9z/image/upload/v1700294852/dafman36-2905.pdf'
            }
            className="flex items-center"
          >
            <span className="mx-2">DAFMAN 36-2905 </span>
            <ExternalLink />
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

export default Links;
