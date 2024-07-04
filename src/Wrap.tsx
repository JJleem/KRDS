import React from "react";
import { useLocation } from "react-router-dom";

const Wrap = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div id="g-wrap" className={location.pathname === "/" ? "main" : undefined}>
      {children}
    </div>
  );
};
export default Wrap;
