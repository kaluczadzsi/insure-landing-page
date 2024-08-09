import { baseStyles, desktopStyles, mobileStyles } from "./styles";
import { ButtonProps } from "./types";

const Button = ({ href, label, isMobile, isLast }: ButtonProps) => {
  const lastItemStyles = isMobile
    ? "border-very-light-gray border-2"
    : "border-very-dark-violet hover:text-very-light-gray hover:bg-dark-violet border-2 p-4";

  return (
    <button
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles} ${isLast ? lastItemStyles : ""}`}
    >
      <a className="block h-full w-full" href={href}>
        {label}
      </a>
    </button>
  );
};

export default Button;
