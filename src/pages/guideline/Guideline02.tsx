import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent2 from "../../Components/guideline/Gcontent2";
const Guideline02 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="가이드라인의 구성 | 가이드라인 소개 - KRDS" />
      <Gaside />
      <Gcontent2 />
    </div>
  );
};

export default Guideline02;
