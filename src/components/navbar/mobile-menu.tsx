"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";
import { MenuItem } from "./types";

const menuItemStyles =
  "text-white block rounded-md px-3 py-2 text-base font-medium";

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <div id='mobile-menu'>
      <div className=' md:hidden space-y-1 px-2 pb-3 pt-2'>
        {navLinks.map((link, index) => (
          <MobileMenuItem key={index} link={link} pathname={pathname} />
        ))}
        <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-5'>
          <i className='fa-brands fa-google mr-2'></i>
          <span>Login or Register</span>
        </button>
      </div>
    </div>
  );
}

function MobileMenuItem({ link, pathname }: MenuItem) {
  return (
    <Link
      href={link.href}
      className={` ${
        pathname === link.href ? "bg-gray-700" : ""
      } ${menuItemStyles}`}
    >
      {link.text}
    </Link>
  );
}
