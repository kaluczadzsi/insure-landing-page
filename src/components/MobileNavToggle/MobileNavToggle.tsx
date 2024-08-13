import { MobileNavToggleProps } from "./types";
import { motion } from "framer-motion"; // Importálás

const MobileNavToggle = ({ isOpen, setIsOpen }: MobileNavToggleProps) => {
  return (
    <button
      className="h-[35px] w-[35px]"
      onClick={() => setIsOpen((prev: boolean) => !prev)}
    >
      {!isOpen ? (
        <motion.img
          key="hamburger"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
          src="/images/icon-hamburger.svg"
          alt="Hamburger logo"
        />
      ) : (
        <motion.img
          key="close"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
          src="/images/icon-close.svg"
          alt="Close logo"
        />
      )}
    </button>
  );
};

export default MobileNavToggle;
