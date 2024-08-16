import Logo from "../Logo/Logo";
import Social from "../Social/Social";

import FooterDetails from "../FooterDetails/FooterDetails";

const Footer = () => {
  return (
    <div className="relative">
      <div className="mt-20 bg-very-light-gray pb-20">
        <header className="m-8 mb-10 flex items-center justify-center border-b-2 border-b-gray-200 pb-10 xl:mx-24 2xl:mx-48">
          <div className="z-50 mt-24 flex w-full flex-col items-center justify-end gap-8 md:flex-row md:justify-between">
            <Logo />
            <Social />
          </div>
          <img
            className="absolute left-0 top-0 z-0 hidden sm:visible sm:block 2xl:w-[650px]"
            src="/images/bg-pattern-footer-desktop.svg"
            alt="Curved wave pattern"
          />
          <img
            className="absolute left-0 top-0 z-0 w-full sm:hidden"
            src="/images/bg-pattern-footer-mobile.svg"
            alt="Curved wave pattern"
          />
        </header>

        <FooterDetails />
      </div>
    </div>
  );
};

export default Footer;
