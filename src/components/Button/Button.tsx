import { baseStyles, desktopStyles, mobileStyles } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  href,
  isMobile,
  isLast,
  children,
  additionalStyles,
}: ButtonProps) => {
  const lastItemStyles = isMobile
    ? "border-very-light-gray border-2"
    : "border-very-dark-violet hover:text-very-light-gray hover:bg-dark-violet border-2 py-2 px-4";

  return (
    <button
      style={additionalStyles}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles} ${isLast ? lastItemStyles : ""}`}
    >
      <a className="block h-full w-full" href={href}>
        {children}
      </a>
    </button>
  );
};

export default Button;
