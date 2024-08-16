import Logo from "../Logo/Logo";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <div className="px-8 xl:px-24 2xl:px-48">
      <header>
        <Logo />
        <Social />
      </header>
    </div>
  );
};

export default Footer;
