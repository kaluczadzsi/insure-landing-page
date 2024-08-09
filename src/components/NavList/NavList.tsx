import NAV_LINKS from "../../../constants/navlinks";
import Button from "../Button/Button";
import { NavListProps } from "./types";

const NavList = ({ isMobile }: NavListProps) => {
  return (
    <div
      className={`${isMobile ? "block flex-col p-6 py-12" : "text-dark-grayish-violet"} font-body font flex items-center gap-8 text-[18px] font-semibold tracking-widest`}
    >
      {NAV_LINKS.map((link, idx) => (
        <Button
          key={link.href}
          href={link.href}
          label={link.label}
          isMobile={isMobile}
          isLast={idx === NAV_LINKS.length - 1}
        />
      ))}
    </div>
  );
};

export default NavList;
