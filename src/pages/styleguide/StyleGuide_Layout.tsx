import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent_Layout from "../../Components/styleguide/Gcontent_Layout";

const StyleGuide_Layout = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="배치 (Layout) | 스타일 가이드 - KRDS" />
      <Gaside />
      <Gcontent_Layout />
    </div>
  );
};

export default StyleGuide_Layout;
