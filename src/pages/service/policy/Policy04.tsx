import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Policy04 from "../../../Components/service/policy/Gcontent_Policy04";

const Policy04 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="정책 자료 탐색 | 서비스 패턴 - 정책 정보 확인 - KRDS" />
      <Gaside />
      <Gcontent_Policy04 />
    </div>
  );
};

export default Policy04;
