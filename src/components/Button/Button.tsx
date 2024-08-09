import { ButtonProps } from "./types";

const Button = ({ href, label, isMobile, isLast }: ButtonProps) => {
  const baseStyles =
    "font-body flex items-center gap-8 text-[18px] font-semibold tracking-widest transition-all delay-100 ease-in";
  const mobileStyles = "block flex-col py-4 px-6 w-full text-center";
  const desktopStyles = "text-dark-grayish-violet hover:text-dark-violet";
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
