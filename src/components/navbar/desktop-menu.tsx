"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, navLinksLoggedIn } from "@/lib/constants";
import { MenuItem } from "./types";

const menuItemStyles =
  "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

type DesktopMenuProps = {
  session: any;
};

export default function DesktopMenu({ session }: DesktopMenuProps) {
  const pathname = usePathname();

  return (
    <div className='hidden md:ml-6 md:block'>
      <div className='flex space-x-2'>
        {navLinks.map((link, index) => (
          <DesktopMenuItem key={index} link={link} pathname={pathname} />
        ))}
        {session && (
          <>
            {navLinksLoggedIn.map((link, index) => (
              <DesktopMenuItem key={index} link={link} pathname={pathname} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function DesktopMenuItem({ link, pathname }: MenuItem) {
  return (
    <Link
      href={link.href}
      className={`${
        pathname === link.href ? "bg-gray-700" : ""
      } ${menuItemStyles}`}
    >
      {link.text}
    </Link>
  );
}
