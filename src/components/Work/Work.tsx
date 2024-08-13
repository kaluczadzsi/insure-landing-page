import Button from "../Button/Button";
import { ButtonVariants } from "../Button/types";

const Work = () => {
  return (
    <section className="relative m-6 mt-32 flex flex-col items-center justify-center gap-12 bg-dark-violet p-16 text-center">
      <h2 className="font-heading text-[2.8rem] leading-[1] text-very-light-gray">
        Find out more about how we work
      </h2>
      <Button href="#work" variant={ButtonVariants.SECONDARY}>
        How we work
      </Button>
    </section>
  );
};

export default Work;
