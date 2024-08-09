import NavList from "../NavList/NavList";

const MobileNav = () => {
  return (
    <div
      className={`bg-very-dark-violet text-very-light-gray justify-between} flex flex-col`}
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
