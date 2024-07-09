import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Request06 from "../../../Components/service/request/Gcontent_Request06";

const Request06 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="확인/확정 | 서비스 패턴 - 신청 - KRDS" />
      <Gaside />
      <Gcontent_Request06 />
    </div>
  );
};

export default Request06;
