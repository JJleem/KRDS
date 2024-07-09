import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Login04 from "../../../Components/service/login/Gcontent_Login04";

const Login04 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="로그인 방식 확인/선택 | 서비스 패턴 - 로그인 - KRDS" />
      <Gaside />
      <Gcontent_Login04 />
    </div>
  );
};

export default Login04;
