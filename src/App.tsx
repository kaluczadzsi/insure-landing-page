import Button from "./components/Button/Button";
import Nav from "./components/Nav/Nav";
import ScreenContext from "./context/ScreenContext/ScreenContext";

const App = () => {
  return (
    <ScreenContext>
      <Nav />

      <header className="relative bg-dark-violet text-very-light-gray">
        <img
          className="w-full sm:hidden"
          src="/images/image-intro-mobile.jpg"
          alt="Family walking on the sidewalk"
        />
        <img
          className="hidden md:absolute md:right-0 md:top-[18%] md:block md:max-w-[50%] md:pr-24 xl:max-w-[100%] 2xl:px-48"
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
          <img
            className="right-0 top-0 z-0 hidden overflow-hidden md:absolute md:block md:w-[250px] lg:w-[300px] xl:w-[400px] 2xl:w-[400px]"
            src="/images/bg-pattern-intro-right-desktop.svg"
            alt="Wave pattern"
          />
          <img
            className="bottom-[-140px] left-0 z-0 hidden sm:bottom-[-190px] md:absolute md:block md:w-[100px] 2xl:bottom-[-250px] 2xl:w-[180px]"
            src="/images/bg-pattern-intro-left-desktop.svg"
            alt="Wave pattern"
          />

          <div className="z-50 mb-4 font-heading text-[2.8rem] leading-[1] xl:mb-6 xl:text-6xl">
            <h1>Humanizing</h1>
            <span>your insurance.</span>
          </div>
          <p className="z-50 mb-8 leading-[1.8] md:max-w-[38%]">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button
            additionalStyles={{
              border: "2px solid hsl(0, 0%, 98%)",
              padding: "8px 16px",
              color: "hsl(0, 0%, 98%)",
              maxWidth: "50%",
              fontSize: "16px",
            }}
            href="#plan"
            isMobile={false}
            isLast={false}
          >
            VIEW PLANS
          </Button>
        </article>
      </header>
    </ScreenContext>
  );
};

export default App;
