import React from "react";
import { Helmet } from "react-helmet";
import Gaside from "../../../Components/common/aside/Gaside";
import Gcontent_Login08 from "../../../Components/service/login/Gcontent_Login08";

const Login08 = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="로그아웃 | 서비스 패턴 - 로그인 - KRDS" />
      <Gaside />
      <Gcontent_Login08 />
    </div>
  );
};

export default Login08;
