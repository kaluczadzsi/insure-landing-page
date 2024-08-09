import NavList from "../NavList/NavList";
import { MobileNavProps } from "./types";

const MobileNav = ({ isOpen }: MobileNavProps) => {
  return (
    <div
      className={`bg-very-dark-violet text-very-light-gray flex h-[calc(100vh-99px)] flex-col justify-between ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out ${isOpen ? "" : "pointer-events-none"}`}
    >
      <NavList isMobile />
      <img
        src="/images/bg-pattern-mobile-nav.svg"
        alt="Mobile background pattern"
      />
    </div>
  );
};

export default MobileNav;
