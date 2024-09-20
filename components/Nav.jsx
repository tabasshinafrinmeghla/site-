"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const link = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  }
]


const Nav = () => {

  const pathname = usePathname();
  // console.log(pathname);


  return (
    <nav className="flex gap-8 ">

      {link.map((link, index) => {
        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-emerald-300 border-b-2 border-teal-200"}
        capitalize font-medium hover:text-emerald-100 transition-all
        `} >
          {link.name} </Link>
      })}

    </nav>
  )
}

export default Nav
