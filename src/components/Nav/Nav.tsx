import { useContext, useEffect, useState } from "react";
import { InnerContext } from "../../context/ScreenContext/ScreenContext";
import MobileNav from "../MobileNav/MobileNav";
import MobileNavToggle from "../MobileNavToggle/MobileNavToggle";
import NavList from "../NavList/NavList";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const screenWidth = useContext(InnerContext);

  useEffect(() => {
    if (screenWidth && screenWidth === 768) {
      setIsOpen(false);
    }
  }, [screenWidth]);

  return (
    <nav>
      <div className="flex items-center justify-between p-6 xl:px-24 2xl:px-48">
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
