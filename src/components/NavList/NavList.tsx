import { NAV_LINKS } from "../../constants/navLinks";
import Button from "../Button/Button";
import { NavListProps } from "./types";

const NavList = ({ styles }: NavListProps) => {
  return (
    <div className={styles}>
      {NAV_LINKS.map((btn) => (
        <Button variant={btn.variant} href={btn.href}>
          {btn.label}
        </Button>
      ))}
    </div>
  );
};

export default NavList;
