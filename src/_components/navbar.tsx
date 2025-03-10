import Link from "next/link";
import { VscMenu } from "react-icons/vsc";
import { Lora } from 'next/font/google';

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
export default function NavBar() {

  const links = [
    { href: "/", label: "Home" },
    { href: "/collection", label: "Collection" },
    { href: "/contact", label: "Contact" },
  ];


  return (
    <Menu>
      {/* Only for mobile display (sm:hidden tag) */}
      <MenuButton className="sm:hidden flex space-x-2 py-3 self-start">
        <span className="flex items-center space-x-2">
          <VscMenu aria-hidden="true" size={28} />
          <span className={`text-2xl ${lora.className}`}>Yang Antiques</span>
        </span>
      </MenuButton>

      <MenuItems
        anchor="bottom start"
        transition
        className="bg-slate-100 p-1 rounded-md border-2 border-slate-200 flex flex-col origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 z-20"
      >
        {links.map((link) => {
          return (
            <MenuItem key={link.label}  >
              <Link href={link.href} className="border-b border-slate-500 p-1">{link.label}</Link>
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
