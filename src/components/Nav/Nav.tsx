import { useContext, useEffect, useState } from "react";
import { InnerContext } from "../../context/ScreenContext/ScreenContext";
import MobileNav from "../MobileNav/MobileNav";
import MobileNavToggle from "../MobileNavToggle/MobileNavToggle";
import Button from "../Button/Button";
import { ButtonVariants } from "../Button/types";
import { motion, AnimatePresence } from "framer-motion"; // Importálás

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const screenWidth = useContext(InnerContext);

  useEffect(() => {
    if (screenWidth && screenWidth === 768) {
      setIsOpen(false);
    }
  }, [screenWidth]);

  return (
    <nav>
      <div className="flex items-center justify-between p-6 xl:px-24 2xl:px-48">
        <a href="#">
          <img className="h-[20px]" src="/images/logo.svg" alt="Company logo" />
        </a>
        <div className="md:hidden">
          <MobileNavToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="hidden gap-8 md:flex">
          <Button href="#work">how we work</Button>
          <Button href="#blog">blog</Button>
          <Button href="#account">account</Button>
          <Button href="#plan" variant={ButtonVariants.PRIMARY}>
            view plans
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full md:hidden"
          >
            <MobileNav />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
