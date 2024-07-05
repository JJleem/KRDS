import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent3 from "../../Components/guideline/Gcontent3";
const Guideline03 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="가이드라인의 활용방법 | 가이드라인 소개 - KRDS" />
      <Gaside />
      <Gcontent3 />
    </div>
  );
};

export default Guideline03;
