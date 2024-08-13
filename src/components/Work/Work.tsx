import Button from "../Button/Button";
import { ButtonVariants } from "../Button/types";

const Work = () => {
  return (
    <section className="m-6 mt-32 xl:m-24 2xl:m-48">
      <article className="relative flex flex-col items-center justify-center gap-10 overflow-hidden bg-dark-violet px-8 py-16 text-center md:flex-row md:justify-between md:py-20 lg:px-28">
        <div className="z-10 font-heading text-[2.4rem] leading-[1] text-very-light-gray md:text-left md:text-[2.8rem]">
          <h2>Find out more</h2>
          <span>about how we work</span>
        </div>
        <div className="relative z-10">
          <Button href="#work" variant={ButtonVariants.SECONDARY}>
            How we work
          </Button>
        </div>
        <div className="absolute right-0 top-0 z-0 overflow-hidden md:hidden">
          <img
            src="/images/bg-pattern-how-we-work-mobile.svg"
            alt="Background pattern"
          />
        </div>
        <img
          className="absolute right-0 top-0 hidden md:block"
          src="/images/bg-pattern-how-we-work-desktop.svg"
          alt="Background pattern"
        />
      </article>
    </section>
  );
};

export default Work;
