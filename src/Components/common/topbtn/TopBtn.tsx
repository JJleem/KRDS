import React, { useState, useEffect } from "react";

const TopBtn = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`btn tertiary sm go-top ${scrollY > 1100 ? "active" : ""}`}
      type="button"
      onClick={handleGoToTop}
    >
      TOP
    </button>
  );
};

export default TopBtn;
