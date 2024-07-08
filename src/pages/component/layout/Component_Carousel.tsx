import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Carousel from "../../../Components/component/layout/carousel/Gcontent_Carousel";

const Component_Carousel = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="캐러셀 (Carousel) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Carousel />
    </div>
  );
};

export default Component_Carousel;
