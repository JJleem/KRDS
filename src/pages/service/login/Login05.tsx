import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Login05 from "../../../Components/service/login/Gcontent_Login05";

const Login05 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="로그인 정보 입력 | 서비스 패턴 - 로그인 - KRDS" />
      <Gaside />
      <Gcontent_Login05 />
    </div>
  );
};

export default Login05;
