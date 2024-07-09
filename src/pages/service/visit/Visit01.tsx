import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Visit01 from "../../../Components/service/visit/Gcontent_Visit01";

const Visit01 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="개요 | 서비스 패턴 - 방문 - KRDS" />
      <Gaside />
      <Gcontent_Visit01 />
    </div>
  );
};

export default Visit01;
