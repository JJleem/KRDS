import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Policy02 from "../../../Components/service/policy/Gcontent_Policy02";

const Policy02 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="정책 탐색 | 서비스 패턴 - 정책 정보 확인 - KRDS" />
      <Gaside />
      <Gcontent_Policy02 />
    </div>
  );
};

export default Policy02;
