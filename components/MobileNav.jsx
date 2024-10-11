"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const link = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'services',
    path: '/services'
  },
  {
    name: 'resume',
    path: '/resume'
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'contact',
    path: '/contact'
  }
];

const MobileNav = () => {
  const pathname = usePathname();

  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
      <CiMenuFries className="text-[32px] text-teal-700"> </CiMenuFries>
    </SheetTrigger>

    <SheetContent className="flex flex-col" >
      <div className="mt-32  text-center text-2xl ">
        logo
      </div>

      <nav>
        <ul className="flex flex-col gap-4 ">
          {link.map((link, index) => {
            return (
              <Link href={link.path}
                key={index}
                className={`text-xl capitalize hover:text-teal-500 `}

              >
                {link.name}
              </Link>
            );



          })}
        </ul>
      </nav>

    </SheetContent>
  </Sheet>;
};

export default MobileNav;