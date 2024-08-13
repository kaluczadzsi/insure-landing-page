import Button from "../Button/Button";
import { ButtonVariants } from "../Button/types";

const MobileNav = () => {
  return (
    <div className={`relative h-[calc(100vh-90px)] bg-very-dark-violet`}>
      <div className="flex flex-col gap-8 px-8 pt-16 md:hidden">
        <Button href="#work" variant={ButtonVariants.TERTIARY}>
          how we work
        </Button>
        <Button href="#blog" variant={ButtonVariants.TERTIARY}>
          blog
        </Button>
        <Button href="#account" variant={ButtonVariants.TERTIARY}>
          account
        </Button>
        <div className="flex items-center justify-center">
          <Button href="#plan" variant={ButtonVariants.SECONDARY}>
            view plans
          </Button>
        </div>
      </div>
      <img
        className="absolute bottom-0 w-full"
        src="/images/bg-pattern-mobile-nav.svg"
        alt="Mobile background pattern"
      />
    </div>
  );
};

export default MobileNav;
