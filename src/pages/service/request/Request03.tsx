import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Request03 from "../../../Components/service/request/Gcontent_Request03";

const Request03 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="서비스 정보 확인 | 서비스 패턴 - 신청 - KRDS" />
      <Gaside />
      <Gcontent_Request03 />
    </div>
  );
};

export default Request03;
