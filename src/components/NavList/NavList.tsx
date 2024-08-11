import NAV_LINKS from "../../constants/navlinks";
import Button from "../Button/Button";
import { NavListProps } from "./types";

const NavList = ({ isMobile }: NavListProps) => {
  return (
    <div
      className={`${isMobile ? "block flex-col p-6 py-12" : "text-dark-grayish-violet"} font flex items-center gap-8 font-body text-[18px] font-semibold tracking-widest`}
    >
      {NAV_LINKS.map((link, idx) => (
        <Button
          key={link.href}
          href={link.href}
          isMobile={isMobile}
          isLast={idx === NAV_LINKS.length - 1}
        >
          {link.label}
        </Button>
      ))}
    </div>
  );
};

export default NavList;
