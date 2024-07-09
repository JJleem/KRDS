import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Request08 from "../../../Components/service/request/Gcontent_Request08";

const Request08 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="신청 결과 확인 | 서비스 패턴 - 신청 - KRDS" />
      <Gaside />
      <Gcontent_Request08 />
    </div>
  );
};

export default Request08;
