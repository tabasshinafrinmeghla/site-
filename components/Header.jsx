import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container max-auto flex justify-between items-center">

        {/* {logo} */}

        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Meghla <span className=" text-neutral-700">.</span>
          </h1>
        </Link>
        {/*desktop nav*/}

        <div className="hidden xl:flex  gap-8">

          {/* <Nav></Nav> */}
          <Nav></Nav>

          <Link href='/contact'>
            <Button className=" border border-accent  
            hover:bg-teal-500 hover:text-primary hover:transition-all duration-500"
            >Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}

        <div className="xl:hidden">

          <MobileNav />
        </div>

      </div>
    </header>
  )
};

export default Header;
