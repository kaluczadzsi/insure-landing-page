import React, { createContext, useState, useEffect } from "react";
import getScreenWidth from "../../../util/getScreenWidth";

export const InnerContext = createContext<number | undefined>(undefined);

const ScreenContext = ({ children }: { children: React.ReactNode }) => {
  const [screenWidth, setScreenWidth] = useState<number>(getScreenWidth());

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(getScreenWidth());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <InnerContext.Provider value={screenWidth}>
      {children}
    </InnerContext.Provider>
  );
};

export default ScreenContext;
