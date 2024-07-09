import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Policy03 from "../../../Components/service/policy/Gcontent_Policy03";

const Policy03 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="정보 확인 | 서비스 패턴 - 정책 정보 확인 - KRDS" />
      <Gaside />
      <Gcontent_Policy03 />
    </div>
  );
};

export default Policy03;
