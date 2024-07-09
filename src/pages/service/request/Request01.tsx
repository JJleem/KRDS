import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Request01 from "../../../Components/service/request/Gcontent_Request01";

const Request01 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="개요 | 서비스 패턴 - 신청 - KRDS" />
      <Gaside />
      <Gcontent_Request01 />
    </div>
  );
};

export default Request01;
