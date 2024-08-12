import { ButtonProps } from "./types";

const Button = ({ variant, href, children }: ButtonProps) => {
  let className = `tracking-[1.5px] font-medium text-sm transition ease-in `;

  switch (variant) {
    case "primary":
      className +=
        "px-6 py-2 border-2 border-very-dark-violet text-very-dark-violet hover:bg-very-dark-violet hover:text-very-light-gray";
      break;
    case "secondary":
      className +=
        "px-6 py-2 border-2 border-very-light-gray text-very-light-gray hover:bg-very-light-gray hover:text-dark-violet";
      break;
    case "tertiary":
      className += "text-very-light-gray";
      break;
    default:
      className += "text-dark-grayish-violet hover:text-very-dark-violet";
  }

  return (
    <button className={className}>
      <a href={href}>{children?.toString().toUpperCase()}</a>
    </button>
  );
};

export default Button;
