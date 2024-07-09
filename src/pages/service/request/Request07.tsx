import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Request07 from "../../../Components/service/request/Gcontent_Request07";

const Request07 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="완료 | 서비스 패턴 - 신청 - KRDS" />
      <Gaside />
      <Gcontent_Request07 />
    </div>
  );
};

export default Request07;
