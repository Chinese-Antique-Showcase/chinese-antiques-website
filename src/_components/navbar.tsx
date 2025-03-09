import Link from "next/link";
import { VscMenu } from "react-icons/vsc";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function NavBar() {
  // const links = [
  //     {
  //         name : "Home",
  //         href : "/",
  //     },

  //     {
  //         name : "Collection",
  //         href : "/collection",

  //     },
  //     {
  //         name : "Contact",
  //         href : "/contact",

  //     },
  // ]

  const links = [
    { href: "/", label: "Home" },
    { href: "/collection", label: "Collection" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Menu>
      {/* Only for mobile display (sm:hidden tag) */}
      <MenuButton className="sm:hidden flex space-x-2 py-3 min-w-full">
        <span className="flex items-center space-x-2">
          <VscMenu aria-hidden="true" size={28} />
          <span className="text-2xl font-serif font-yang">Yang Antiques</span>
          {/* TODO - is this semantically correct? */}
        </span>
      </MenuButton>

      <MenuItems
        anchor="bottom"
        transition
        className="bg-gray-400 flex flex-col origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {links.map((link) => {
          return (
            <MenuItem key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
