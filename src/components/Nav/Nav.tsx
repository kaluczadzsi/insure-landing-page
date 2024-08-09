import MobileNav from "../MobileNav/MobileNav";
import MobileNavToggle from "../MobileNavToggle/MobileNavToggle";
import NavList from "../NavList/NavList";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className="flex items-center justify-between p-6">
        <img className="h-[20px]" src="/images/logo.svg" alt="Company logo" />
        <div className="md:hidden">
          <MobileNavToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="hidden md:flex">
          <NavList isMobile={false} />
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} w-full md:hidden`}>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
