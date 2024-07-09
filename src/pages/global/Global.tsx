import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent from "../../Components/global/global01/Gcontent";
const Global = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="개인 식별 정보 입력 | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent />
    </div>
  );
};

export default Global;
