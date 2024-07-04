import React from "react";
import VisualArea from "./visualArea/VisualArea";
import MainArea from "./mainArea/MainArea";
import FigmaArea from "./figmaArea/FigmaArea";
import FigmaAreaPdf from "./figmaArea/FigmaAreaPdf";
import SearchArea from "./searchArea/SearchArea";

const Gcontent = () => {
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
      <button className="btn tertiary sm go-top active" type="button">
        Top
      </button>
    </div>
  );
};

export default Gcontent;
