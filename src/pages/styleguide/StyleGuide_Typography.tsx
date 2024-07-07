import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent_Typography from "../../Components/styleguide/Gcontent_Typography";
const StyleGuide_Typography = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="서체 (Typography) | 스타일 가이드 - KRDS" />
      <Gaside />
      <Gcontent_Typography />
    </div>
  );
};

export default StyleGuide_Typography;
