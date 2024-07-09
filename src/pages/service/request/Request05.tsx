import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Request05 from "../../../Components/service/request/Gcontent_Request05";

const Request05 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="신청서 작성 | 서비스 패턴 - 신청 - KRDS" />
      <Gaside />
      <Gcontent_Request05 />
    </div>
  );
};

export default Request05;
