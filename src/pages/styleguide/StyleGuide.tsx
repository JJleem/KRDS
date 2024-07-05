import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent from "../../Components/styleguide/Gcontent";
const StyleGuide = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="적용 범위 및 구분 | 스타일 가이드 - KRDS" />
      <Gaside />
      <Gcontent />
    </div>
  );
};

export default StyleGuide;
