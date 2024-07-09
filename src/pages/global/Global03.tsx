import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent03 from "../../Components/global/global03/Gcontent03";

const Global03 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="동의 | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent03 />
    </div>
  );
};

export default Global03;
