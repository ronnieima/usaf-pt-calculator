"use client";

import { Burger, Drawer, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import React from "react";
import { links } from "./NavBar";
import { usePathname } from "next/navigation";
import { IconChevronRight } from "@tabler/icons-react";

const Hamburger = () => {
  const [opened, { toggle, close, open }] = useDisclosure(false, {
    onOpen: () => {},
    onClose: () => {},
  });
  const currentPath = usePathname();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Navigation"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        position="right"
        size="50%"
      >
        {links.map((link) => (
          <NavLink
            component={Link}
            href={link.href}
            key={link.href}
            label={link.label}
            active={link.href === currentPath}
            variant="light"
            className="text-4xl font-semibold"
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
            leftSection={link.icon}
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
