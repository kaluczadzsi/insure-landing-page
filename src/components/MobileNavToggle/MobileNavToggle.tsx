import { MobileNavToggleProps } from "./types";

const MobileNavToggle = ({ isOpen, setIsOpen }: MobileNavToggleProps) => {
  return (
    <button
      className="h-[35px] w-[35px]"
      onClick={() => setIsOpen((prev: boolean) => !prev)}
    >
      {!isOpen ? (
        <img
          className="h-full w-full"
          src="/images/icon-hamburger.svg"
          alt="Hamburger logo"
        />
      ) : (
        <>
          <img
            className="h-full w-full"
            src="/images/icon-close.svg"
            alt="Hamburger logo"
          />
        </>
      )}
    </button>
  );
};

export default MobileNavToggle;
