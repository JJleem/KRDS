import React, { useState, useEffect } from "react";
import VisualArea from "./visualArea/VisualArea";
import MainArea from "./mainArea/MainArea";
import FigmaArea from "./figmaArea/FigmaArea";
import FigmaAreaPdf from "./figmaArea/FigmaAreaPdf";
import SearchArea from "./searchArea/SearchArea";

const Gcontent = () => {
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
    <div className="g-content">
      {/* visual area */}
      <VisualArea />
      {/* 주요 서비스 */}
      <MainArea />
      {/* 피그마 서비스 */}
      <FigmaArea />
      <FigmaAreaPdf />
      {/* 검색 서비스 */}
      <SearchArea />

      <button
        className={`btn tertiary sm go-top ${scrollY > 1100 ? "active" : ""}`}
        type="button"
        onClick={handleGoToTop}
      >
        Top
      </button>
    </div>
  );
};

export default Gcontent;
