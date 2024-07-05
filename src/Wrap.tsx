import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toggleState } from "./atom/Atom";
import { useRecoilState } from "recoil";

const Wrap = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [clickedToggle, setClickedToggle] = useRecoilState(toggleState);
  const TogglehandleClick = () => {
    setClickedToggle(!clickedToggle);
  };
  return (
    <div
      id="g-wrap"
      className={location.pathname === "/" ? "main" : undefined}
      style={{
        overflow: clickedToggle ? "hidden" : "",
      }}
    >
      {children}
    </div>
  );
};
export default Wrap;
