import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Visit02 from "../../../Components/service/visit/Gcontent_Visit02";

const Visit02 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="방문 | 서비스 패턴 - 방문 - KRDS" />
      <Gaside />
      <Gcontent_Visit02 />
    </div>
  );
};

export default Visit02;
