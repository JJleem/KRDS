import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent11 from "../../Components/global/global11/Gcontent11";

const Global11 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="확인 | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent11 />
    </div>
  );
};

export default Global11;
