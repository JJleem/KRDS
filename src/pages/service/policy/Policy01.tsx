import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Policy01 from "../../../Components/service/policy/Gcontent_Policy01";

const Policy01 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="개요 | 서비스 패턴 - 정책 정보 확인 - KRDS" />
      <Gaside />
      <Gcontent_Policy01 />
    </div>
  );
};

export default Policy01;
