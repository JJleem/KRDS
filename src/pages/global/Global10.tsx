import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent10 from "../../Components/global/global10/Gcontent10";

const Global10 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="필터링·정렬 | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent10 />
    </div>
  );
};

export default Global10;
