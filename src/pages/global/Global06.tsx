import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent06 from "../../Components/global/global06/Gcontent06";

const Global06 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="상세 정보 확인  | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent06 />
    </div>
  );
};

export default Global06;
