import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Login06 from "../../../Components/service/login/Gcontent_Login06";

const Login06 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="로그인 완료 | 서비스 패턴 - 로그인 - KRDS" />
      <Gaside />
      <Gcontent_Login06 />
    </div>
  );
};

export default Login06;
