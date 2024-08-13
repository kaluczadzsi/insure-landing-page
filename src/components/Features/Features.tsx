import { FEATURES } from "../../constants/features";
import Feature from "../Feature/Feature";

const Features = () => {
  return (
    <main className="features px-6 pt-64 text-center xl:px-24 2xl:px-48">
      <header className="relative mb-16 flex items-center justify-center md:justify-start">
        <span className="absolute top-[-40%] block h-[2px] w-36 border-t-[1px] border-very-light-gray bg-gray-300 md:w-28" />
        <h2 className="font-heading text-[2.8rem]">We're different</h2>
      </header>
      <div className="flex flex-col gap-12 md:flex-row">
        {FEATURES.map((feature) => (
          <Feature {...feature} />
        ))}
      </div>
    </main>
  );
};

export default Features;
