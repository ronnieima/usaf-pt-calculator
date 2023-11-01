"use client";

import { Burger, Drawer, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import React from "react";
import { links } from "./NavBar";

const Hamburger = () => {
  const [opened, { toggle, close, open }] = useDisclosure(false, {
    onOpen: () => {},
    onClose: () => {},
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        position="bottom"
        size="50%"
      >
        {links.map((link) => (
          <NavLink
            key={link.href}
            label={<Link href={link.href}>{link.label}</Link>}
            variant="filled"
          />
        ))}
      </Drawer>
      <Burger
        className="lg:hidden"
        size="xl"
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
      />
    </>
  );
};

export default Hamburger;
