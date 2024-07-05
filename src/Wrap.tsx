import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Wrap = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div id="g-wrap" className={location.pathname === "/" ? "main" : undefined}>
      {children}
    </div>
  );
};
export default Wrap;
