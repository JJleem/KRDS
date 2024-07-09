import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Login02 from "../../../Components/service/login/Gcontent_Login02";

const Login02 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="로그인 기능 찾기 | 서비스 패턴 - 로그인 - KRDS" />
      <Gaside />
      <Gcontent_Login02 />
    </div>
  );
};

export default Login02;
