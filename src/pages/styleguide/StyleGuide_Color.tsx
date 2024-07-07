import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent_Color from "../../Components/styleguide/Gcontent_Color";
const StyleGuide_Color = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="색상 (Color) | 스타일 가이드 - KRDS" />
      <Gaside />
      <Gcontent_Color />
    </div>
  );
};

export default StyleGuide_Color;
