import { FeatureProps } from "./types";

const Feature = ({ img, title, description }: FeatureProps) => {
  return (
    <article className="flex flex-col items-center md:items-start md:text-left">
      <img className="mb-8" src={img} alt={title} />
      <h2 className="text-header mb-4 font-heading text-3xl">{title}</h2>
      <p className="text-sm leading-[1.8] text-dark-grayish-violet">
        {description}
      </p>
    </article>
  );
};

export default Feature;
