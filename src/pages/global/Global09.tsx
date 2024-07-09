import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent09 from "../../Components/global/global09/Gcontent09";

const Global09 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="첨부 파일 | 기본패턴 - KRDS" />
      <Gaside />
      <Gcontent09 />
    </div>
  );
};

export default Global09;
