import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent_Shape from "../../Components/styleguide/Gcontent_Shape";
const StyleGuide_Shape = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="형태 (Shape) | 스타일 가이드 - KRDS" />
      <Gaside />
      <Gcontent_Shape />
    </div>
  );
};

export default StyleGuide_Shape;
