import React, { useState, useEffect } from "react";
import VisualArea from "./visualArea/VisualArea";
import MainArea from "./mainArea/MainArea";
import FigmaArea from "./figmaArea/FigmaArea";
import FigmaAreaPdf from "./figmaArea/FigmaAreaPdf";
import SearchArea from "./searchArea/SearchArea";
import TopBtn from "../../common/topbtn/TopBtn";

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
      <TopBtn />
    </div>
  );
};

export default Gcontent;
