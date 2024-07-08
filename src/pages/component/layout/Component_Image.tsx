import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Image from "../../../Components/component/layout/image/Gcontent_Image";

const Component_Image = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="이미지 (Image) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Image />
    </div>
  );
};

export default Component_Image;
