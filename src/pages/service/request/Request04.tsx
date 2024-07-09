import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Request04 from "../../../Components/service/request/Gcontent_Request04";

const Request04 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="유의 사항/자격 확인 | 서비스 패턴 - 신청 - KRDS" />
      <Gaside />
      <Gcontent_Request04 />
    </div>
  );
};

export default Request04;
