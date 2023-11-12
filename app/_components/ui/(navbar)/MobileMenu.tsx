"use client";

import Link from "next/link";
import React from "react";
import { links } from "./NavBar";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/(shadcn)/sheet";
import { Button } from "@/app/_components/ui/(shadcn)/button";
import { ChevronRight, Menu } from "lucide-react";

const MobileMenu = () => {
  const currentPath = usePathname();
  const { push } = useRouter();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
          <SheetDescription className="flex flex-col">
            {links.map((link) => (
              <Button
                onClick={() => push(link.href)}
                variant="ghost"
                key={link.href}
                className={`h-24 justify-between text-zinc-600 ${
                  link.href === currentPath ? "bg-gray-200 font-bold" : ""
                }`}
              >
                <div className="flex gap-2">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
                <ChevronRight />
              </Button>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
