import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent05 from "../../Components/global/global05/Gcontent05";

const Global05 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="사용자 피드백  | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent05 />
    </div>
  );
};

export default Global05;
