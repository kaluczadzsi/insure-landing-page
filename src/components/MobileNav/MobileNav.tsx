import NavList from "../NavList/NavList";

const MobileNav = () => {
  return (
    <div
      className={`flex flex-col justify-around bg-very-dark-violet text-very-light-gray`}
    >
      <NavList styles="flex flex-col" />
      <img
        src="/images/bg-pattern-mobile-nav.svg"
        alt="Mobile background pattern"
      />
    </div>
  );
};

export default MobileNav;
