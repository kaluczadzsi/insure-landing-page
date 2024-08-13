import Button from "../Button/Button";
import { ButtonVariants } from "../Button/types";

const Hero = () => {
  return (
    <header className="hero relative bg-dark-violet text-very-light-gray">
      <img
        className="w-full sm:hidden"
        src="/images/image-intro-mobile.jpg"
        alt="Family walking on the sidewalk"
      />
      <img
        className="hidden translate-y-[-50%] sm:top-[50%] md:absolute md:right-8 md:block md:max-w-[380px] md:border-2 lg:top-[18%] lg:max-w-[400px] lg:translate-y-0 xl:right-24 xl:max-w-full 2xl:right-48"
        src="/images/image-intro-desktop.jpg"
        alt="Family walking on the sidewalk"
      />

      <article className="relative flex flex-col items-center px-6 py-24 text-center md:items-start md:text-left xl:px-24 xl:pt-[11rem] 2xl:px-48">
        <span className="absolute top-[18%] hidden h-2 w-36 border-t-[1px] border-very-light-gray xl:block" />
        <img
          className="absolute left-0 top-0 z-0 md:hidden"
          src="/images/bg-pattern-intro-left-mobile.svg"
          alt="Wave pattern"
        />
        <img
          className="absolute bottom-[-178px] right-0 z-0 md:hidden"
          src="/images/bg-pattern-intro-right-mobile.svg"
          alt="Wave pattern"
        />
        <div className="absolute right-0 top-0 h-full w-full overflow-hidden">
          <img
            className="right-0 top-[-50px] z-50 hidden w-full overflow-hidden md:absolute md:block md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:top-[-80px] 2xl:w-[450px]"
            src="/images/bg-pattern-intro-right-desktop.svg"
            alt="Wave pattern"
          />
        </div>
        <img
          className="left-0 z-0 hidden md:absolute md:bottom-[-120px] md:block md:w-[80px] xl:bottom-[-250px] xl:w-[140px] 2xl:bottom-[-280px] 2xl:w-[180px]"
          src="/images/bg-pattern-intro-left-desktop.svg"
          alt="Wave pattern"
        />

        <div className="z-50">
          <div className="mb-4 font-heading text-[2.8rem] leading-[1] xl:mb-6 xl:text-6xl">
            <h1>Humanizing</h1>
            <span>your insurance.</span>
          </div>
          <p className="mb-8 leading-[1.8] md:max-w-[38%]">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button href="#plan" variant={ButtonVariants.SECONDARY}>
            view plans
          </Button>
        </div>
      </article>
    </header>
  );
};

export default Hero;
