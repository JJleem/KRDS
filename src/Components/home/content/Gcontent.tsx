import React from "react";
import VisualArea from "./visualArea/VisualArea";
import MainArea from "./mainArea/MainArea";
import FigmaArea from "./figmaArea/FigmaArea";

const Gcontent = () => {
  return (
    <div className="g-content">
      {/* visual area */}
      <VisualArea />
      {/* 주요 서비스 */}
      <MainArea />
      {/* 피그마 서비스 */}
      <FigmaArea />
    </div>
  );
};

export default Gcontent;
