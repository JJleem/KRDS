import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Request02 from "../../../Components/service/request/Gcontent_Request02";

const Request02 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="신청 대상 탐색 | 서비스 패턴 - 신청 - KRDS" />
      <Gaside />
      <Gcontent_Request02 />
    </div>
  );
};

export default Request02;
