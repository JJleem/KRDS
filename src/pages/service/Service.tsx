import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../Components/common/aside/Gaside";
import Gcontent from "../../Components/service/Gcontent";
const Service = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="개요 | 서비스 패턴 - 방문 - KRDS" />
      <Gaside />
      <Gcontent />
    </div>
  );
};

export default Service;
