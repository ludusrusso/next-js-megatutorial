import { Popover } from "@headlessui/react";
import { HomeIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="h-16 bg-green-600">
      <div className="h-full flex justify-between items-center px-4 text-green-100">
        <Link href="/">
          <a>
            <HomeIcon className="h-8 w-8"></HomeIcon>
          </a>
        </Link>
        <div className="hidden md:block">
          <DesktopMenu menu={MenuElements} />
        </div>
        <button className="md:hidden">
          <Menu menu={MenuElements} />
        </button>
      </div>
    </nav>
  );
};

const MenuElements: MenuElement[] = [
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

interface MenuElement {
  href: string;
  label: string;
}

interface MenuProps {
  menu: MenuElement[];
}

const Menu = ({ menu }: MenuProps) => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button>
            {open ? (
              <XIcon className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </Popover.Button>

          {open && (
            <Popover.Panel className="absolute z-10 inset-x-0 ">
              <div className="flex flex-col bg-slate-100 shadow-xl m-2 text-black">
                {menu.map((item, idx) => (
                  <Link key={idx} href={item.href}>
                    <a>{item.label}</a>
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          )}
        </>
      )}
    </Popover>
  );
};

const DesktopMenu = ({ menu }: MenuProps) => {
  return (
    <ul className="flex gap-2">
      {menu.map((item, idx) => (
        <li key={idx}>
          <Link href={item.href}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
